import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as t,a as e,b as o,d as s,e as i,r as l}from"./app.59944050.js";const c={},d=i('<h1 id="maven" tabindex="-1"><a class="header-anchor" href="#maven" aria-hidden="true">#</a> maven</h1><h2 id="一、依赖范围" tabindex="-1"><a class="header-anchor" href="#一、依赖范围" aria-hidden="true">#</a> 一、依赖范围</h2><ol><li><strong>compile</strong> 。这个是默认值，也就是没有写作用域的依赖项在编译和运行阶段都会被加载到类路径</li><li><strong>provided</strong>。这个和 compile 非常类似只是他仅在编译和测试阶段被加载，运行时不会。例如我们常常使用的 Servlet API 这个 jar 仅仅是在编译测试需要，运行时 Tomcat 早已为我们准备好了这个 Jar ，如果加了反而会可能导致类冲突</li><li><strong>runtime</strong>。此范围表示编译时不需要依赖项，但是执行时需要依赖项，例如数据库的驱动</li><li><strong>test</strong>。这个基本都是一些跑单测会依赖的 Jar</li><li><strong>system</strong>。从参与度来说，和 provided 相同，不过被依赖项不会从maven仓库抓，而是从本地文件系统拿，一定需要配合systemPath属性使用。</li></ol><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',4),h={href:"https://mp.weixin.qq.com/s/_p0pRYKo040MzwSNNKjZ_Q",target:"_blank",rel:"noopener noreferrer"};function m(_,p){const a=l("ExternalLinkIcon");return n(),t("div",null,[d,e("ol",null,[e("li",null,[e("a",h,[o("一个线上 Maven 诡异问题排查过程"),s(a)])])])])}const g=r(c,[["render",m],["__file","maven.html.vue"]]);export{g as default};
