# gitlab-ee 14.6.1 备份 (docker)

## 一、gitlab 备份路径与备份存活时间配置（在gitlab.rb配置）

### gitlab.rb 路径

>  /etc/gitlab/gitlab.rb
---
```shell
### Backup Settings
###! Docs: https://docs.gitlab.com/omnibus/settings/backups.html

# gitlab_rails['manage_backup_path'] = true
gitlab_rails['backup_path'] = "/var/opt/gitlab/backups"
# gitlab_rails['backup_gitaly_backup_path'] = "/opt/gitlab/embedded/bin/gitaly-backup"

###! Docs: https://docs.gitlab.com/ee/raketasks/backup_restore.html#backup-archive-permissions
gitlab_rails['backup_archive_permissions'] = 0644

# gitlab_rails['backup_pg_schema'] = 'public'

###! The duration in seconds to keep backups before they are allowed to be deleted
gitlab_rails['backup_keep_time'] = 1209600
```


### gitlab 备份路径

>gitlab_rails['backup_path']="/var/opt/gitlab/backups"
>
>默认值就是 "/var/opt/gitlab/backups" ，该路径挂载在HDD上，暂时不改

### gitlab 备份文件权限

> gitlab_rails['backup_archive_permissions'] = 0644
>
> 默认是0600


### gitlab 备份存活时间
>gitlab_rails['backup_keep_time'] = 1209600
>
>默认为604800（7天），此处改为14天

### 配置文件重新生成

> gitlab-ctl reconfigure 


## 二、备份配置文件

>手动备份 gitlab.rb 和 gitlab-secrets.json （gitlab备份命令不会备份这两个文件）
```sh
sudo cp ~/softwares/gitlab/config/gitlab.rb  ~/softwares/gitlab/data/backups/config_backups/gitlab.rb.backup

sudo cp ~/softwares/gitlab/config/gitlab-secrets.json  ~/softwares/gitlab/data/backups/config_backups/gitlab-secrets.json.backup
```

## 三、备份

```shell
#! /bin/bash
echo "Gitlab 开始备份"
# 进入映射目录
cd ~/softwares/gitlab

# 方法一（笨蛋的写法）
# 进入gitlab容器
# docker exec -it `docker ps -aq --filter ancestor=gitlab/gitlab-ee:latest` /bin/bash
# gitlab-rake gitlab:backup:create
# exit

# 方法二（官方）
# docker exec -t <container name> gitlab-backup create CRON=1
# CRON=1 环境设置指示备份脚本在没有任何错误的情况下隐藏所有进度输出。建议这样做以减少 cron 垃圾信息。但是，在对备份问题进行故障排除时，请将 CRON=1 替换为 --trace 以详细记录i。
docker exec -t gitlab-gitlab-1 gitlab-backup create CRON=1

# 备份
echo "Gitlab 备份结束"
```
``` shell
# 脚本路径
/home/stu/softwares/gitlab/shell/gitlab-backup.sh

# 脚本
#! /bin/bash
echo "Gitlab 开始备份"
# CRON=1 环境设置指示备份脚本在没有任何错误的情况下隐藏所有进度输出。建议这样做以减少 cron 垃圾信息。但是，在对备份问题进行故障排除时，请将 CRON=1 替换为 --trace 以详细记录i。
docker exec -t gitlab-gitlab-1 gitlab-backup create CRON=1
echo "Gitlab 备份结束"

# 定时任务
0 3 * * * /bin/bash /home/stu/softwares/gitlab/shell/gitlab-backup.sh
```
## 四、恢复

### 1.恢复先决条件

>You need to have a working GitLab installation before you can perform a restore. This is because the system user performing the restore actions (`git`) is usually not allowed to create or delete the SQL database needed to import data into (`gitlabhq_production`). All existing data is either erased (SQL) or moved to a separate directory (such as repositories and uploads).
>
>To restore a backup, you must restore `/etc/gitlab/gitlab-secrets.json` (for Omnibus packages) or `/home/git/gitlab/.secret` (for installations from source). This file contains the database encryption key, [CI/CD variables](https://docs.gitlab.com/ee/ci/variables/index.html), and variables used for [two-factor authentication](https://docs.gitlab.com/ee/user/profile/account/two_factor_authentication.html). If you fail to restore this encryption key file along with the application data backup, users with two-factor authentication enabled and GitLab Runner loses access to your GitLab server.
>
>You may also want to restore your previous `/etc/gitlab/gitlab.rb` (for Omnibus packages) or `/home/git/gitlab/config/gitlab.yml` (for installations from source) and any TLS keys, certificates (`/etc/gitlab/ssl`, `/etc/gitlab/trusted-certs`), or [SSH host keys](https://superuser.com/questions/532040/copy-ssh-keys-from-one-server-to-another-server/532079#532079).
>
>Starting with GitLab 12.9, if an untarred backup (like the ones made with `SKIP=tar`) is found, and no backup is chosen with `BACKUP=<timestamp>`, the untarred backup is used.
>
>Depending on your case, you might want to run the restore command with one or more of the following options:
>
>- `BACKUP=timestamp_of_backup`: Required if more than one backup exists. Read what the [backup timestamp is about](https://docs.gitlab.com/ee/raketasks/backup_restore.html#backup-timestamp).
>- `force=yes`: Doesn’t ask if the `authorized_keys` file should get regenerated, and assumes ‘yes’ for warning about database tables being removed, enabling the `Write to authorized_keys file` setting, and updating LDAP providers.
>
>If you’re restoring into directories that are mount points, you must ensure these directories are empty before attempting a restore. Otherwise, GitLab attempts to move these directories before restoring the new data, which causes an error.
>Read more about [configuring NFS mounts](https://docs.gitlab.com/ee/administration/nfs.html)

### 2.恢复

```shell
# Stop the processes that are connected to the database
docker exec -it <name of container> gitlab-ctl stop puma
docker exec -it <name of container> gitlab-ctl stop sidekiq

# Verify that the processes are all down before continuing
docker exec -it <name of container> gitlab-ctl status

# Run the restore. NOTE: "_gitlab_backup.tar" is omitted from the name
docker exec -it <name of container> gitlab-backup restore BACKUP=11493107454_2018_04_25_10.6.4-ce

# Restart the GitLab container
docker restart <name of container>

# Check GitLab
docker exec -it <name of container> gitlab-rake gitlab:check SANITIZE=true
```

### 3.手动恢复配置文件 gitlab.rb 和 gitlab-secrets.json

> Warning: Your gitlab.rb and gitlab-secrets.json files contain sensitive data and are not included in this backup. You will need to restore these files manually.
>

### 4.报错，等待几分钟后正常输出，数据恢复正常

[官方Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/266988)

```sh
ERROR: must be owner of extension pg_trgm
ERROR: must be owner of extension btree_gist
ERROR: must be owner of extension btree_gist
ERROR: must be owner of extension pg_trgm
```


---

## 参考

1.[^](https://docs.gitlab.com/14.10/ee/raketasks/backup_restore.html)gitlab官方文档

