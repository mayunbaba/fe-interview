import{_ as e,j as a,i as t,a1 as r}from"./chunks/framework.DyWNUh6Q.js";import"./chunks/theme.0vZazFZp.js";const l="/assets/image-2.CkZoXw_z.png",f=JSON.parse('{"title":"vue双向绑定原理","description":"","frontmatter":{},"headers":[],"relativePath":"vue/vue.md","filePath":"vue/vue.md"}'),o={name:"vue/vue.md"},i=r('<h1 id="vue双向绑定原理" tabindex="-1">vue双向绑定原理 <a class="header-anchor" href="#vue双向绑定原理" aria-label="Permalink to &quot;vue双向绑定原理&quot;">​</a></h1><h2 id="数据劫持" tabindex="-1">数据劫持 <a class="header-anchor" href="#数据劫持" aria-label="Permalink to &quot;数据劫持&quot;">​</a></h2><ul><li>Object.defineProperty: 劫持属性。重写get、set方法劫持数据</li><li>Proxy: 代理对象。重写get、set 方法劫持数据 <a href="http://127.0.0.1:5500/example/jiechi/index.html" target="_blank" rel="noreferrer">数据劫持demo</a></li></ul><h2 id="单例模式" tabindex="-1">单例模式 <a class="header-anchor" href="#单例模式" aria-label="Permalink to &quot;单例模式&quot;">​</a></h2><p><a href="/设计模式/单例.html">单例模式</a></p><h2 id="发布订阅模式" tabindex="-1">发布订阅模式 <a class="header-anchor" href="#发布订阅模式" aria-label="Permalink to &quot;发布订阅模式&quot;">​</a></h2><p><a href="/设计模式/发布订阅.html">发布订阅</a></p><h2 id="createdocumentfragment" tabindex="-1">createDocumentFragment <a class="header-anchor" href="#createdocumentfragment" aria-label="Permalink to &quot;createDocumentFragment&quot;">​</a></h2><p><a href="http://127.0.0.1:5500/example/createDocumentFragment.html" target="_blank" rel="noreferrer">createDocumentFragment</a></p><h2 id="mvvm模式" tabindex="-1">mvvm模式 <a class="header-anchor" href="#mvvm模式" aria-label="Permalink to &quot;mvvm模式&quot;">​</a></h2><p><a href="/设计模式/MVVM.html">MVVM</a></p><h2 id="双向绑定原理" tabindex="-1">双向绑定原理 <a class="header-anchor" href="#双向绑定原理" aria-label="Permalink to &quot;双向绑定原理&quot;">​</a></h2><p>参考文章：</p><p><a href="https://v2.cn.vuejs.org/v2/guide/reactivity.html" target="_blank" rel="noreferrer">深入响应式原理：vue2</a></p><p><a href="https://cn.vuejs.org/guide/extras/reactivity-in-depth.html" target="_blank" rel="noreferrer">深入响应式原理：vue3</a></p><p><a href="https://www.jianshu.com/p/0983d2d0a416" target="_blank" rel="noreferrer">实现简单的MVVM：简书</a></p><p><a href="http://127.0.0.1:5500/example/vue/index.html" target="_blank" rel="noreferrer">简书code</a></p><p>Vue 数据双向绑定原理是通过 数据劫持 + 发布者-订阅者模式 的方式来实现的。</p><h2 id="vue双向绑定实现" tabindex="-1">vue双向绑定实现 <a class="header-anchor" href="#vue双向绑定实现" aria-label="Permalink to &quot;vue双向绑定实现&quot;">​</a></h2><p><img src="'+l+'" alt="alt text"></p><ol><li>observer 劫持数据</li></ol><ul><li>递归代理数据，或者递归劫持数据属性。</li><li>数据变化通知订阅者</li></ul><ol start="2"><li>compile 解析模板指令</li></ol><ul><li>把模板中的变量解析成数据</li><li>根据指令绑定事件</li><li>添加订阅者，如果数据变化，收到通知，更新视图。</li></ul><ol start="3"><li>Watcher类是连接observer和compile的桥梁。扮演事件总线的角色</li></ol><p><strong>最终自己实现的版本：</strong><a href="http://127.0.0.1:5500/example/jiechi/mvvm.html" target="_blank" rel="noreferrer">MVVM</a></p>',26),n=[i];function h(c,m,s,u,p,d){return t(),a("div",null,n)}const b=e(o,[["render",h]]);export{f as __pageData,b as default};
