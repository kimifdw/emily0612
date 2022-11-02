import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as t,a as e,b as n,d as o,e as r,r as c}from"./app.59944050.js";const d={},h=r('<h2 id="flink-压测记录" tabindex="-1"><a class="header-anchor" href="#flink-压测记录" aria-hidden="true">#</a> FLINK 压测记录</h2><h3 id="延时定义" tabindex="-1"><a class="header-anchor" href="#延时定义" aria-hidden="true">#</a> 延时定义</h3><p>自定义 Source 源解析中加入 Gauge 类型指标埋点，汇报如下指标：</p><ol><li>记录最新的一条数据中的 event time，在汇报指标时使用当前系统时间 - event time。</li><li>记录读取到数据的系统时间 - 数据中的 event time，直接汇报差值。 <code>delay = 当前系统时间 – 数据事件时间 (event time)</code><blockquote><p>说明：反应处理数据的进度情况。</p></blockquote></li></ol><p><code>fetch_delay = 读取到数据的系统时间 - 数据事件时间 (event time)</code></p><blockquote><p>说明：反应实时计算的实际处理能力。</p></blockquote><h2 id="flink-误用之痛" tabindex="-1"><a class="header-anchor" href="#flink-误用之痛" aria-hidden="true">#</a> FLINK 误用之痛</h2><ol><li>是否在乎数据的丢失，不在乎可以不设 checkpoint</li><li>是否在乎结果的准确性【可考虑 at-least-once】，sink 端处理数据重复问题</li><li>为算子设置 streamApi 的 uid</li><li>不要修改 key 的类型</li><li>资源评估，事件时间和乱序问题</li><li>只能选择 DataStreamAPI</li><li>在升级过程中要改变状态</li><li>不能丢失迟到的数据</li><li>在运行时更改程序的行为</li><li>使用 reinterpretAsKeyedStream：避免面对相同的 key 进行多次 shuffle</li><li>数据类型，选择尽可能简单的状态类型</li><li>序列化：尽量使用 POJO 和 Avro</li><li>先进行过滤和投影操作</li><li>并发性</li><li>产线发布。尽量不使用 rocksdb 状态后端</li></ol><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',9),s={href:"https://zhuanlan.zhihu.com/p/149147527",target:"_blank",rel:"noopener noreferrer"};function p(f,u){const i=c("ExternalLinkIcon");return a(),t("div",null,[h,e("ol",null,[e("li",null,[e("a",s,[n("Apache Flink 误用之痛"),o(i)])])])])}const m=l(d,[["render",p],["__file","index.html.vue"]]);export{m as default};
