import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as i,e as l}from"./app.59944050.js";const d={},r=l(`<h2 id="依赖倒置原则" tabindex="-1"><a class="header-anchor" href="#依赖倒置原则" aria-hidden="true">#</a> 依赖倒置原则</h2><ul><li>定义。 <ol><li>高层模块不应依赖于低层模块，二者应依赖于抽象。模块间的依赖是通过抽象发生，实现类之间<strong>不发生</strong>直接的依赖关系，其依赖关系是通过接口或抽象类产生的。</li><li>抽象不应依赖于细节，细节应依赖于抽象。</li></ol></li></ul><h2 id="状态模式" tabindex="-1"><a class="header-anchor" href="#状态模式" aria-hidden="true">#</a> 状态模式</h2><ul><li>定义。通过内部不同的状态选择具体的算法。</li><li>使用场景。内部存在多种状态；不同的状态的业务逻辑各不相同。 <ol><li>短信接口。</li><li>限流。</li></ol></li><li>核心代码。</li></ul><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>var (
 // stateManagerInstance 当前使用的服务提供商实例
 // 默认aliyun
 stateManagerInstance *StateManager
)
// StateManager 状态管理
type StateManager struct {
 // CurrentProviderType 当前使用的服务提供商类型
 // 默认aliyun
 currentProviderType ProviderType

 // CurrentProvider 当前使用的服务提供商实例
 // 默认aliyun
 currentProvider SmsServiceInterface

 // 更新状态时间间隔
 setStateDuration time.Duration
}
// initState 初始化状态
func (m *StateManager) initState(duration time.Duration) {
 // 初始化
 m.setStateDuration = duration
 m.setState(time.Now())

 // 定时器更新状态
 go func() {
  for {
   // 每一段时间后根据回调的发送成功率 计算得到当前应该使用的 厂商
   select {
   case t := &lt;-time.NewTicker(m.setStateDuration).C:
    m.setState(t)
   }
  }
 }()
}
// setState 设置状态
// 根据短信云商回调的短信发送成功率 得到下阶段发送短信使用哪个厂商的服务
func (m *StateManager) setState(t time.Time) {
 // 这里用随机模拟
 ProviderTypeArray := [3]ProviderType{
  ProviderTypeAliyun,
  ProviderTypeTencent,
  ProviderTypeYunpian,
 }
 m.currentProviderType = ProviderTypeArray[rand.Intn(len(ProviderTypeArray))]

 switch m.currentProviderType {
 case ProviderTypeAliyun:
  m.currentProvider = &amp;ServiceProviderAliyun{}
 case ProviderTypeTencent:
  m.currentProvider = &amp;ServiceProviderTencent{}
 case ProviderTypeYunpian:
  m.currentProvider = &amp;ServiceProviderYunpian{}
 default:
  panic(&quot;无效的短信服务商&quot;)
 }
 fmt.Printf(&quot;时间：%s| 变更短信发送厂商为: %s \\n&quot;, t.Format(&quot;2006-01-02 15:04:05&quot;), m.currentProviderType)
}
// getState 获取当前状态
func (m *StateManager) getState() SmsServiceInterface {
 return m.currentProvider
}
// GetState 获取当前状态
func GetState() SmsServiceInterface {
 return stateManagerInstance.getState()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="适配器模式" tabindex="-1"><a class="header-anchor" href="#适配器模式" aria-hidden="true">#</a> 适配器模式</h2><ul><li>定义。将不兼容的接口转换为可兼容的接口，让原本由于接口不兼容而不能一起工作的类可以一起工作。</li><li>使用场景。接口不兼容的情况。</li></ul><h2 id="组合模式" tabindex="-1"><a class="header-anchor" href="#组合模式" aria-hidden="true">#</a> 组合模式</h2><ul><li>使用场景。存在类似于树的层级结构，有明显的上下游关系。</li><li>核心代码</li></ul><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>// Context 上下文
type Context struct {
}
// Component 组件
type Component interface {
 // 添加一个子组件
 Mount(c Component, components ...Component) error
 // 移除一个子组件
 Remove(c Component) error
 // 执行组件&amp;子组件
 Do(ctx *Context) error
}
// BaseComponent 基础组件
// 实现Add:添加一个子组件
// 实现Remove:移除一个子组件
type BaseComponent struct {
 // 子组件列表
 ChildComponents []Component
}
// Mount 挂载一个子组件
func (bc *BaseComponent) Mount(c Component, components ...Component) (err error) {

 funcName := runFuncName()
 // 子组件是否已在列表中
 for _, component := range components {
  if component == c {
   fmt.Println(funcName, &quot;已挂在&quot;, reflect.TypeOf(c))
   return errors.New(&quot;已挂在&quot; + funcName)
  }
 }

 for _, childComponent := range bc.ChildComponents {
  if childComponent == c {
   fmt.Println(funcName, &quot;已挂在&quot;, reflect.TypeOf(c))
   return errors.New(&quot;已挂在&quot; + funcName)
  }
  for _, component := range components {
   if childComponent == component {
    fmt.Println(funcName, &quot;已挂在&quot;, reflect.TypeOf(c))
    return errors.New(&quot;已挂在&quot; + funcName)
   }
  }
 }

 bc.ChildComponents = append(bc.ChildComponents, c)
 if len(components) == 0 {
  return
 }
 bc.ChildComponents = append(bc.ChildComponents, components...)
 return
}
// Remove 移除一个子组件
func (bc *BaseComponent) Remove(c Component) (err error) {
 if len(bc.ChildComponents) == 0 {
  return
 }
 for k, childComponent := range bc.ChildComponents {
  if c == childComponent {
   fmt.Println(runFuncName(), &quot;移除:&quot;, reflect.TypeOf(childComponent))
   bc.ChildComponents = append(bc.ChildComponents[:k], bc.ChildComponents[k+1:]...)
  }
 }
 return
}
// Do 执行组件&amp;子组件
func (bc *BaseComponent) Do(ctx *Context) (err error) {
 // do nothing
 return
}
// ChildsDo 执行子组件
func (bc *BaseComponent) ChildsDo(ctx *Context) (err error) {
 // 执行子组件
 for _, childComponent := range bc.ChildComponents {
  if err = childComponent.Do(ctx); err != nil {
   return err
  }
 }
 return
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="责任链模式" tabindex="-1"><a class="header-anchor" href="#责任链模式" aria-hidden="true">#</a> 责任链模式</h2><ul><li>使用场景。以链表的方式，存在明显的链式逻辑。</li><li>核心代码</li></ul><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>// Context Context
type Context struct {
}
// Handler 处理
type Handler interface {
 // 自身的业务
 Do(c *Context) error
 // 设置下一个对象
 SetNext(h Handler) Handler
 // 执行
 Run(c *Context) error
}
// Next 抽象出来的 可被合成复用的结构体
type Next struct {
 // 下一个对象
 nextHandler Handler
}
// SetNext 实现好的 可被复用的SetNext方法
// 返回值是下一个对象 方便写成链式代码优雅
// 例如 nullHandler.SetNext(argumentsHandler).SetNext(signHandler).SetNext(frequentHandler)
func (n *Next) SetNext(h Handler) Handler {
 n.nextHandler = h
 return h
}
// Run 执行
func (n *Next) Run(c *Context) (err error) {
 // 由于go无继承的概念 这里无法执行当前handler的Do
 // n.Do(c)
 if n.nextHandler != nil {
  // 合成复用下的变种
  // 执行下一个handler的Do
  if err = (n.nextHandler).Do(c); err != nil {
   return
  }
  // 执行下一个handler的Run
  return (n.nextHandler).Run(c)
 }
 return
}
// NullHandler 空Handler
// 由于go无继承的概念 作为链式调用的第一个载体 设置实际的下一个对象
type NullHandler struct {
 // 合成复用Next的\`nextHandler\`成员属性、\`SetNext\`成员方法、\`Run\`成员方法
 Next
}
// Do 空Handler的Do
func (h *NullHandler) Do(c *Context) (err error) {
 // 空Handler 这里什么也不做 只是载体 do nothing...
 return
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),s=[r];function v(a,c){return e(),i("div",null,s)}const m=n(d,[["render",v],["__file","index.html.vue"]]);export{m as default};
