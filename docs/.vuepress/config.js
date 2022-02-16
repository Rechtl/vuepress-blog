module.exports = {
    title: 'ZERO',
    description: '我的个人博客网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', {rel: 'icon', href: '/logo/fox.png'}], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            {
                text: '编程',
                link: '/IT/'
            },
            {
                text: '心理学',
                link: '/psychology/'
            },
            {
                text: '杂物间',
                link: '/utilityRoom/'
            }
        ],
        sidebar: {
            '/IT/': [
                {
                    title: '栏目碎碎念',
                    children: [
                        ''
                    ],
                },
                {
                    title: '前端',
                    children: [
                        'domToImage','BMap','VCBuild.exe'
                    ],
                },
                {
                    title: '开发软件配置',
                    children: [
                        'WindowsTerminal'
                    ],
                },
                {
                    title: 'git',
                    children: [
                        'git'
                    ],
                },
            ],

            '/psychology/': [
                '',
            ],

            '/utilityRoom/': [
                '',
                '奇安信'
            ]


        },
        // sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};