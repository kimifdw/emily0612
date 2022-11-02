import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,a as n,b as s,d as e,e as c,r as l}from"./app.59944050.js";const i={},u=n("h1",{id:"栈",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#栈","aria-hidden":"true"},"#"),s(" 栈")],-1),r=n("h2",{id:"单调栈",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#单调栈","aria-hidden":"true"},"#"),s(" 单调栈")],-1),d=c(`<li><p>特性。</p><ol><li>先进后出</li><li>从栈顶到栈底的元素是<strong>严格递增或递减</strong></li><li><strong>栈顶操作</strong></li></ol></li><li><p>适用场景</p><p>对于一个数组arr, 针对每个数，寻找它和它左 / 右边第一个比它大 / 小的数的值，以及相距多少个数</p></li><li><p>过程。</p><ol><li>对于单调递增栈，若当前进栈元素为 <code>e</code>，从栈顶开始遍历元素，把小于 <code>e</code> 或者等于 <code>e</code> 的元素弹出栈，直接遇到一个大于 <code>e</code> 的元素或者栈为空为止，然后再把 <code>e</code> 压入栈中。</li><li>对于单调递减栈，则每次弹出的是大于 <code>e</code> 或者等于 <code>e</code> 的元素</li></ol></li><li><p>用途。只处理<code>Next Greater Element</code>问题</p></li><li><p>套路。</p><div class="language-伪代码 line-numbers-mode" data-ext="伪代码"><pre class="language-伪代码"><code>new Stack
for (遍历处理集) {
	while (栈非空 &amp;&amp; 达到预期条件) {
		出栈并处理, 保存到结果集
	}
	入栈（栈中保存数组的索引)
}
while(栈非空) {
	出栈处理剩余栈内元素
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">dailyTemperatures</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 栈存放的是数组元素的下标</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    	<span class="token comment">// 返回差距天数的数组</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ret <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">T</span><span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token class-name">T</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token class-name">T</span><span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 出栈</span>
                <span class="token keyword">int</span> idx <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                ret<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">-</span> idx<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,5),k=n("p",null,"参考文档",-1),m={href:"https://www.jianshu.com/p/35d9cf84a35d",target:"_blank",rel:"noopener noreferrer"},v={href:"https://zhuanlan.zhihu.com/p/26465701",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.cnblogs.com/RioTian/p/13462825.html",target:"_blank",rel:"noopener noreferrer"};function b(_,f){const a=l("ExternalLinkIcon");return p(),o("div",null,[u,r,n("ol",null,[d,n("li",null,[k,n("ol",null,[n("li",null,[n("a",m,[s("算法笔记-单调栈"),e(a)])]),n("li",null,[n("a",v,[s("刷题笔记6（浅谈单调栈）"),e(a)])]),n("li",null,[n("a",h,[s("特殊数据结构(单调栈)"),e(a)])])])])])])}const x=t(i,[["render",b],["__file","Stack.html.vue"]]);export{x as default};
