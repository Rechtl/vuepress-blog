module.exports = {
    title: 'Rechtl', description: '我的个人博客网站', head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', {rel: 'icon', href: '/logo/fox.png'}], // 增加一个自定义的 favicon(网页标签的图标)
    ], base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    }, themeConfig: {
        nav: [ // 导航栏配置
            {
                text: '编程', link: '/IT/'
            }, {
                text: '心理学', link: '/psychology/'
            }, {
                text: '杂物间', link: '/utilityRoom/'
            }], sidebar: {
            '/IT/': [
                // README.md
                {
                    title: '栏目碎碎念', children: [''],
                },
                // Git
                {
                    title: 'Git版本控制',
                    children: [
                        {
                            title: "Git", children: ['Git/git']
                        }, {
                            title: 'gitlab备份', children: ['Git/gitlab备份']
                        }
                    ]
                },
                // 工具
                {
                    title: '工具',
                    children: [
                        {
                            title: "WindowsTerminal", children: ['Utils/WindowsTerminal']
                        },
                    ]
                },
                // 地图
                {
                    title: '地图',
                    children: [
                        {
                            title: "腾讯地图", children: ['Map/BMap']
                        }, {
                            title: '腾讯地图', children: ['Map/TMap-Web']
                        }
                    ]
                },
                // Bug
                {
                    title: 'Bug',
                    children: [
                        {
                            title: "echarts", children: ['Bug/echarts']
                        },
                        {
                            title: "VCBuild", children: ['Bug/VCBuild.exe']
                        },
                        {
                            title: "wiki.js", children: ['Bug/wiki.js']
                        },
                    ]
                },

                /**
                 * 暂未分区
                 */
                // domToImage
                {
                    title: '暂未分区',
                    children: [
                        {
                            title: "domToImage", children: ['domToImage']
                        },
                        {
                            title: "npm", children: ['npm']
                        },
                    ],
                },
            ],

            '/psychology/': ['',],

            '/utilityRoom/': ['', '奇安信']


        }, // sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};
