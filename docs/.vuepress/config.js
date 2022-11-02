import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default ({
    lang: 'zh-CN',
    title: 'Emily Blog',
    description: 'Emily的博客',
    theme: defaultTheme({
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
    })
})