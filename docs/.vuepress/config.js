import { defineUserConfig } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'
import { searchPlugin } from '@vuepress/plugin-search'

export default ({
    lang: 'zh-CN',
    title: 'Emily Blog',
    description: 'Emily的博客',
    theme: hopeTheme({
        lastUpdated: true,
        plugins: {
            mdEnhance: {
                codetabs: true
            },
        },
        navbar: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '工具',
                link: '/工具/maven.html'
            }
        ]
    }),
    plugins: [
        searchPlugin({})
    ]
})
