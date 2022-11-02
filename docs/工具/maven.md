# maven

## 一、依赖范围

1. **compile** 。这个是默认值，也就是没有写作用域的依赖项在编译和运行阶段都会被加载到类路径
2. **provided**。这个和 compile 非常类似只是他仅在编译和测试阶段被加载，运行时不会。例如我们常常使用的 Servlet API 这个 jar 仅仅是在编译测试需要，运行时 Tomcat 早已为我们准备好了这个 Jar ，如果加了反而会可能导致类冲突
3. **runtime**。此范围表示编译时不需要依赖项，但是执行时需要依赖项，例如数据库的驱动
4. **test**。这个基本都是一些跑单测会依赖的 Jar
5. **system**。从参与度来说，和 provided 相同，不过被依赖项不会从maven仓库抓，而是从本地文件系统拿，一定需要配合systemPath属性使用。

## 参考资料

1. [一个线上 Maven 诡异问题排查过程](https://mp.weixin.qq.com/s/_p0pRYKo040MzwSNNKjZ_Q)

