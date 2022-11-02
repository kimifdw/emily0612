import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as t,e as i}from"./app.59944050.js";const l={},a=i(`<h2 id="quickstart-demo" tabindex="-1"><a class="header-anchor" href="#quickstart-demo" aria-hidden="true">#</a> quickStart Demo</h2><h3 id="part1-and-part2" tabindex="-1"><a class="header-anchor" href="#part1-and-part2" aria-hidden="true">#</a> part1 and part2</h3><ol><li><p>angular 系统库自带<code>@angular</code>开头,最主要的库<code>@angular\\core</code>;<br> 其他相对重要的库:<code>@angular/common,@angular/router,@angular/http</code>;</p></li><li><p><strong>import</strong>注意点:</p><ul><li>引入系统自带库,只需要直接写 module 名称。<br><code>import { Component } from &#39;@angular/core&#39;;</code></li><li>引入自己的文件,需要带路径。<br><code>import { AppComponent } from &#39;./app.component&#39;;</code></li><li>引入路径时,<code>./</code>表示引入的 module 与当前的文件在<strong>同一目录</strong>下。</li></ul></li><li><p>常用的标签:<code>@Injectable[类似于JAVA中的@Autowired], @Input, @Output, @RouterConfig,@Component</code></p><ul><li><p>绑定标签</p><ul><li>property[]</li></ul><ol><li>标签</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    Element property
    Component property
    Directive property
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>DEMO</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;img [src] = &quot;heroImageUrl&quot;&gt;
    &lt;hero-detail [hero]=&quot;currentHero&quot;&gt;&lt;/hero-detail&gt;
    &lt;div [ngClass] = &quot;{selected: isSelected}&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>event()</p><ol><li>标签</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     Element property
     Component property
     Directive property
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>DEMO</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;button (click) = &quot;onSave()&quot;&gt;Save&lt;/button&gt;
    &lt;hero-detail (deleteRequest)=&quot;deleteHero()&quot;&gt;&lt;/hero-detail&gt;
    &lt;div (myClick)=&quot;clicked=$event&quot;&gt;click me&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>双向绑定[()]</p><ol><li>标签 <code>Event and property</code></li><li>DEMO</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   &lt;input [(ngModel)]=&quot;heroName&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Attribute[]</p><ol><li>标签 <code>Attributes(the exception)</code></li><li>语法:<code>attr.</code></li><li>DEMO</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   &lt;button [attr.aria-label]=&quot;help&quot;&gt;help&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Class[]</p><ol><li>标签 <code>class property</code></li><li>语法:<code>[class]=value</code>【替换所有的 class 值】;<code>class.</code>:替换局部 class 名称</li><li>DEMO</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   &lt;div [class.special]=&quot;isSpecial&quot;&gt;Special&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>NgClass 代替</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    setClasses() {
      let classes =  {
        saveable: this.canSave,      // true
        modified: !this.isUnchanged, // false
        special: this.isSpecial,     // true
      };
      return classes;
    }
    &lt;div [ngClass]=&quot;{cssClass: setClass()}&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Style[]</p><ol><li>标签 <code>style property</code></li><li>语法:<code>style.value</code></li><li>DEMO</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   &lt;button [style.color] = &quot;isSpecial ? &#39;red&#39; : &#39;green&#39;&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>NgStyle 代替</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    setStyles() {
      let styles = {
        // CSS property names
       &#39;font-style&#39;:  this.canSave      ? &#39;italic&#39; : &#39;normal&#39;,  // italic
        &#39;font-weight&#39;: !this.isUnchanged ? &#39;bold&#39;   : &#39;normal&#39;,  // normal
        &#39;font-size&#39;:   this.isSpecial    ? &#39;24px&#39;   : &#39;8px&#39;,     // 24px
      };
      return styles;
    }
    &lt;div [ngStyle]=&quot;{style: setStyles()}&quot;&gt;
      This div is italic, normal weight, and extra large (24px).
    &lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>template</p><ol><li>引用变量#</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;!-- phone refers to the input element; pass its \`value\` to an event handler --&gt;
    &lt;input #phone placeholder=&quot;phone number&quot;&gt;
    &lt;button (click)=&quot;callPhone(phone.value)&quot;&gt;Call&lt;/button&gt;
    &lt;!-- fax refers to the input element; pass its \`value\` to an event handler --&gt;
    &lt;input ref-fax placeholder=&quot;fax number&quot;&gt;
    &lt;button (click)=&quot;callFax(fax.value)&quot;&gt;Fax&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>form 表单【theForm 变量可以用来校验表单的值<code>theForm.form.valid</code>】</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;form (ngSubmit)=&quot;onSubmit(theForm)&quot; #theForm=&quot;ngForm&quot;&gt;
      &lt;div class=&quot;form-group&quot;&gt;
        &lt;label for=&quot;name&quot;&gt;Name&lt;/label&gt;
        &lt;input class=&quot;form-control&quot; required ngControl=&quot;firstName&quot;
          [(ngModel)]=&quot;currentHero.firstName&quot;&gt;
      &lt;/div&gt;
      &lt;button type=&quot;submit&quot; [disabled]=&quot;!theForm.form.valid&quot;&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>定义 input 和 output 属性 <code>@Input(),@Output()</code>:单个属性; <code>inputs,outputs</code>: 多个属性</li><li>操作符</li></ol><ul><li>|:以|后面的形式输出</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;!-- Pipe chaining: convert title to uppercase, then to lowercase --&gt;
    &lt;div&gt;
      Title through a pipe chain:
      {{title | uppercase | lowercase}}
    &lt;/div&gt;
    &lt;!-- 以JSON格式输出--&gt;
    &lt;div&gt;{{currentHero | json}}&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>?.: 防止变量或对象为 null 时,输出异常</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   The current hero&#39;s name is {{currentHero?.firstName}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ul></li><li><p>数据绑定【<strong>只能在 properties 和 events 中使用</strong>】:</p><ul><li><code>{{value}}</code>: 绑定页面的值,JS 变量值的绑定</li><li><code>[property]=value</code>: 绑定属性或对象的值,大多数用在自定义组件中。<br>例如：<code>&lt;div [hidden]=&quot;!submitted&quot;&gt;</code></li><li><code>(event) = &quot;handler&quot;</code>:绑定事件,主要对应函数</li><li><code>[(ngModel)] = &quot;property&quot;</code>: 双向绑定。<code>[ngModel]</code>:设置值;<code>(ngModelChange)</code>:修改值触发。</li><li><code>ngSubmit</code>: form 表单提交</li><li><code>#heroForm</code>: 表示模板中引用的变量</li><li><code>ngControlName</code>： 认证和表单元素跟踪</li><li><code>valid</code>属性：用于判断 input 输入控件是否认证来显示或隐藏错误提示信息</li><li>总结【其中<code>[],()</code>与<code>bind-,on-bindon-</code>效果一致】 <ul><li><p>数据到视图</p><ol><li>语法</li></ol><div class="language-angular line-numbers-mode" data-ext="angular"><pre class="language-angular"><code>{{ expression }} [target]=&quot;expression&quot; bind-target=&quot;expression&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>绑定类型</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Interpolation
Property
Attribute
Class
Stype
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>视图到数据绑定</p><ol><li>语法</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(target)=&quot;statement&quot;
on-target=&quot;statement&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>绑定类型 <code>event</code></li></ol></li><li><p>双向绑定</p><ol><li>语法</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[(target)] = &quot;expression&quot;
bind-target=&quot;expression&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>绑定类型:双向绑定</li></ol></li></ul></li></ul></li><li><p>事件定义: <code>$event</code>【用于绑定所有事件变量】,DOM 元素的 event 事件;</p><ul><li><code>$event.target.value</code>: 获取 HTML 元素的 value</li><li><code>(keyup.enter)=&quot;values=box.value&quot;</code>:过滤 enter 键</li><li><code>(ngModelChange) = &quot;model.name = $event&quot;</code></li><li><code>$event.target</code>: 获取 HTML 元素</li><li><code>自定义事件</code>:EventEmitter。事件触发:<code>EventEmitter.emit()</code></li></ul></li><li><p>依赖注入</p></li></ol><ul><li>Angular2 的依赖注入是在 main.ts 的<code>bootstrap(AppComponent);</code>中注入的</li><li><strong>providers</strong>：出现在@Component 的 providers: [HeroService]，为当前类注入 HeroService 类，在 directives 中的类都可以使用已注入的服务类。</li><li>依赖隐含创建：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>injector = ReflectiveInjector.resolveAndCreate([Car, Engine, Tires]);
let car = injector.get(Car);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>建议在每个 service 类中都使用**@Injectable()**</li><li><code>providers: [Logger]</code>=&gt;<code>{[provide:Logger,useClass:Logger]}</code>.</li><li><code>@Optional</code>: 可选择的。例如:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    constructor(@Optional() private logger: Logger) {
      if (this.logger) {
        this.logger.log(some_message);
      }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 logger 不需要注入时,需要添加 null 值</p><h3 id="part3" tabindex="-1"><a class="header-anchor" href="#part3" aria-hidden="true">#</a> part3</h3><ol><li>将详情页以组件的形式展现<br></li><li><strong>@Input</strong>:用于页面和 JS 文件的对象绑定</li></ol><h3 id="part4" tabindex="-1"><a class="header-anchor" href="#part4" aria-hidden="true">#</a> part4</h3><ol><li>ngOnInit 在 AppComponent 启动时调用</li><li><strong>provider</strong> 在 AppComponent 调用 Service 服务时需要在 provider 中定义;</li><li>利用 Promise.resolve 处理异步请求,并用.then 方法处理异步回调结果;</li></ol><h3 id="part5" tabindex="-1"><a class="header-anchor" href="#part5" aria-hidden="true">#</a> part5</h3><ol><li>routerLink:按 routerConfig 中的名字匹配;</li><li>router.navigate([&#39;routerConfig 中的 name&#39;, {id: this.selectedHero.id}]);</li><li>配置带参数的 config</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    {
       path: &#39;/detail/:id&#39;,
       name: &#39;HeroDetail&#39;,
       component: HeroDetailComponent
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>html 标记语言(如碰到<template></template>这种标记,需要将星号的标签将&quot;*&quot;去掉) <blockquote><p><code>(click)</code>:点击事件;<br><code>&lt;input [(ngModel)]=&quot;hero.name&quot; placeholder=&quot;name&quot;/&gt;</code>: 为文本赋值并绑定<br></p></blockquote></li></ol><ul><li><em>*ngIf</em>: 条件语句隐藏对应的 DOM 元素;在<strong>template</strong>中需要将*去掉,例如:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;template [ngIf]=&quot;currentHero&quot;&gt;
      &lt;hero-detail [hero]=&quot;currentHero&quot;&gt;&lt;/hero-detail&gt;
    &lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><em>*ngFor</em></p><ul><li>绑定循环索引 i(初始化为 0)<code>&lt;li *ngFor=&quot;let hero of heroes;let i=index&quot;&gt;{{i+1}}-{{hero-name}}&lt;/li&gt;</code></li><li>防止 DOM 修改元素</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    trackByHeroes(index: number, hero: Hero) { return hero.id; }
    &lt;div *ngFor=&quot;let hero of heroes; trackBy:trackByHeroes&quot;&gt;({{hero.id}}) {{hero.fullName}}&lt;/div&gt;
    &lt;div *ngFor=&quot;let hero of heroes&quot; *ngForTrackBy=&quot;trackByHeroes&quot;&gt;({{hero.id}}) {{hero.fullName}}&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><em>ngSwitch</em>: 类似于 java 的 switch</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;span [ngSwitch]=&quot;toeChoice&quot;&gt;
      &lt;span *ngSwitchWhen=&quot;&#39;Eenie&#39;&quot;&gt;Eenie&lt;/span&gt;
      &lt;span *ngSwitchWhen=&quot;&#39;Meanie&#39;&quot;&gt;Meanie&lt;/span&gt;
      &lt;span *ngSwitchWhen=&quot;&#39;Miney&#39;&quot;&gt;Miney&lt;/span&gt;
      &lt;span *ngSwitchWhen=&quot;&#39;Moe&#39;&quot;&gt;Moe&lt;/span&gt;
      &lt;span *ngSwitchDefault&gt;other&lt;/span&gt;
    &lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>使用 Router 步骤:<br>1. <code>import Router</code>; <br>2.定义构造器 <br><code>constructor(private router: Router,private heroService: HeroService) { }</code><br><code>this.router.navigate([&#39;HeroDetail&#39;, { id: this.selectedHero.id }]);</code>: 带参数跳转</li></ol><h3 id="part6" tabindex="-1"><a class="header-anchor" href="#part6" aria-hidden="true">#</a> part6</h3><ol><li><p>Http Promise</p><blockquote><p>http.get</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">this</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heroesUrl<span class="token punctuation">)</span>
               <span class="token punctuation">.</span><span class="token function">toPromise</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
               <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>data<span class="token punctuation">)</span>
               <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleError<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><ul><li>http.get 返回 RxJS Observable 对象。</li><li><strong>Observables</strong>用于存储异步数据流。</li><li>将 Observable 对象转换为 Promise 对象,需要引入<code>&#39;rxjs/add/operator/toPromise&#39;</code></li><li>取出值:<code>.then(response =&gt; response.json().data)</code></li><li>异步错误处理: <code>this.handleError</code>。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">private</span> <span class="token function">handleError</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">error</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;An error occurred&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 以友好的方式返回</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message <span class="token operator">||</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>&gt; http POST

\`\`\`
    this.http
             .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
             .toPromise()
             .then(res =&gt; res.json().data)
             .catch(this.handleError);
\`\`\`
</code></pre><ul><li><p>设置 header 格式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    let headers = new Headers({
                  &#39;Content-Type&#39;: &#39;application/json&#39;});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将对象转化为字符串:<code>JSON.stringify</code></p></li></ul><h2 id="attribute-directive" tabindex="-1"><a class="header-anchor" href="#attribute-directive" aria-hidden="true">#</a> Attribute Directive</h2><h3 id="elementref" tabindex="-1"><a class="header-anchor" href="#elementref" aria-hidden="true">#</a> ElementRef</h3><p>定义构造函数，注入 ElementRef,这样可以访问 DOM element。</p><div class="language-Angular2 line-numbers-mode" data-ext="Angular2"><pre class="language-Angular2"><code>  constructor(el: ElementRef){
    el.nativeElement.style.backgroundColor = &#39;yellow&#39;;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hostlistener" tabindex="-1"><a class="header-anchor" href="#hostlistener" aria-hidden="true">#</a> @HostListener</h3><p>用于监听 DOM element 的事件</p><div class="language-Angular2 line-numbers-mode" data-ext="Angular2"><pre class="language-Angular2"><code>// 鼠标进入时触发
@HostListener(&#39;mouseenter&#39;) onMouseEnter() {
  this.highLight(&#39;yellow&#39;);
}
// 鼠标离开时触发
@HostListener(&#39;mouseleave&#39;) onMouseLeave() {
  this.highLight(&#39;blue&#39;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> @Input</h3><p>将前后台的变量传值进行动态绑定</p><div class="language-Angular2 line-numbers-mode" data-ext="Angular2"><pre class="language-Angular2"><code>    // 后台绑定
    @Input() set defaultColor(colorName:string) {
        this._defaultColor = colorName || this._defaultColor;
    }

    // 对应前台输入的color值
    @Input(&#39;myHighlight&#39;) highlightColor:string;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前台使用:</p><ol><li>&#39;color&#39;在<code>[myHighlight]=&quot;color&quot;</code>是绑定的数据源</li><li>&#39;myHighlight&#39;在<code>[myHighlight]=&quot;color&quot;</code>是绑定的标签【必须】</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">[myHighlight]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span> <span class="token attr-name">[defaultColor]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>violet&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Highlight me!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,40),s=[a];function o(d,r){return n(),t("div",null,s)}const p=e(l,[["render",o],["__file","index.html.vue"]]);export{p as default};
