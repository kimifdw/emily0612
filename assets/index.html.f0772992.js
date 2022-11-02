import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as i,a,b as n,d as e,e as l,r as o}from"./app.59944050.js";const d="/assets/double-linked-list.7f7ead87.png",p={},c=l('<h1 id="双向链表" tabindex="-1"><a class="header-anchor" href="#双向链表" aria-hidden="true">#</a> 双向链表</h1><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>一个节点有两个方向，分别储存当前节点的前驱节点和后续节点</p><h2 id="golang" tabindex="-1"><a class="header-anchor" href="#golang" aria-hidden="true">#</a> Golang</h2><ol><li>container/list。基于双向链表实现</li></ol><h2 id="原型图" tabindex="-1"><a class="header-anchor" href="#原型图" aria-hidden="true">#</a> 原型图</h2><p><img src="'+d+`" alt="image"></p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h2><ol><li>删除需指定前驱结点或后驱结点</li><li>添加需要2个指向</li></ol><h2 id="实现思路" tabindex="-1"><a class="header-anchor" href="#实现思路" aria-hidden="true">#</a> 实现思路</h2><ol><li><p>定义结点（包含数据和头尾指针）</p></li><li><p>数据插入</p><ol><li>头部插入，流程图如下：</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TD
A<span class="token text string">(新节点)</span>
    A <span class="token arrow operator">--&gt;</span> B<span class="token text string">{链表是否为空}</span>
    B <span class="token arrow operator">--&gt;</span> <span class="token label property">|是|</span> C<span class="token text string">[尾指针指向下一个新增结点]</span>
    B <span class="token arrow operator">--&gt;</span> <span class="token label property">|否|</span> D<span class="token text string">[头指针指向前一个结点 尾指针指向下一个结点]</span>
    E<span class="token text string">[头结点插入]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>尾部插入</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TD
A<span class="token text string">(新结点)</span> <span class="token arrow operator">--&gt;</span>B<span class="token text string">[头指针指向前一个节点 尾指针为null]</span>
    C<span class="token text string">[尾结点插入]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>插入中间结点</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TD
A<span class="token text string">(新结点)</span> <span class="token arrow operator">--&gt;</span>B<span class="token text string">[头指针指向前一个结点 尾结点指向下一个结点]</span>
<span class="token arrow operator">--&gt;</span>C<span class="token text string">[前一个结点的尾结点指向新结点]</span> <span class="token arrow operator">--&gt;</span>D<span class="token text string">[后一个结点的头结点指向新结点]</span>
    E<span class="token text string">[中间结点插入]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>数据删除</p><ol><li>头部删除，流程图如下：</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TD
A<span class="token text string">(查找头结点)</span> <span class="token arrow operator">--&gt;</span>B<span class="token text string">[获取头结点的下一个结点]</span>
<span class="token arrow operator">--&gt;</span>C<span class="token text string">[头结点的下一个结点的头指针设为null]</span> <span class="token arrow operator">--&gt;</span>D<span class="token text string">[将下一个结点作为头结点]</span>
    E<span class="token text string">[头结点删除]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>尾部删除</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TD
A<span class="token text string">(查找尾结点)</span> <span class="token arrow operator">--&gt;</span>B<span class="token text string">[通过头指针获取尾结点的上一个结点]</span>
<span class="token arrow operator">--&gt;</span>C<span class="token text string">[尾结点的上一个结点的尾指针设为null]</span> <span class="token arrow operator">--&gt;</span>D<span class="token text string">[将上一个结点作为尾结点]</span>
    C<span class="token text string">[尾结点删除]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>删除中间结点</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TD
A<span class="token text string">(查找要删除结点的前后结点)</span> <span class="token arrow operator">--&gt;</span>B<span class="token text string">[当前结点的尾指针赋给前结点的尾指针]</span>
<span class="token arrow operator">--&gt;</span>C<span class="token text string">[要删除结点的头指针赋给后结点的头指针]</span> <span class="token arrow operator">--&gt;</span>D<span class="token text string">[移除要删除结点]</span>
    E<span class="token text string">[中间结点插入]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h1 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h1>`,12),m={href:"https://www.geeksforgeeks.org/data-structures/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://zhuanlan.zhihu.com/p/105956446",target:"_blank",rel:"noopener noreferrer"};function u(v,h){const s=o("ExternalLinkIcon");return t(),i("div",null,[c,a("ol",null,[a("li",null,[a("a",m,[n("数据结构"),e(s)])]),a("li",null,[a("a",g,[n("双向链表"),e(s)])])])])}const x=r(p,[["render",u],["__file","index.html.vue"]]);export{x as default};