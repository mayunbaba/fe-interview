import{_ as s,j as i,i as a,a1 as n}from"./chunks/framework.DyWNUh6Q.js";import"./chunks/theme.0vZazFZp.js";const y=JSON.parse('{"title":"DOM","description":"","frontmatter":{},"headers":[],"relativePath":"WebApi/DOM.md","filePath":"WebApi/DOM.md"}'),t={name:"WebApi/DOM.md"},h=n(`<h1 id="dom" tabindex="-1">DOM <a class="header-anchor" href="#dom" aria-label="Permalink to &quot;DOM&quot;">​</a></h1><h2 id="什么是事件冒泡和事件捕获" tabindex="-1">什么是事件冒泡和事件捕获？ <a class="header-anchor" href="#什么是事件冒泡和事件捕获" aria-label="Permalink to &quot;什么是事件冒泡和事件捕获？&quot;">​</a></h2><p>事件冒泡是指事件从内层元素向外层元素传播的过程，</p><p>而事件捕获则是相反的，即从外层元素向内层元素传播的过程。</p><h2 id="如何阻止事件冒泡" tabindex="-1">如何阻止事件冒泡 <a class="header-anchor" href="#如何阻止事件冒泡" aria-label="Permalink to &quot;如何阻止事件冒泡&quot;">​</a></h2><p><code>event.stopPropagation</code></p><h2 id="事件代理和事件委托" tabindex="-1">事件代理和事件委托 <a class="header-anchor" href="#事件代理和事件委托" aria-label="Permalink to &quot;事件代理和事件委托&quot;">​</a></h2><p>同一个概念的不同叫法，利用事件冒泡机制，将事件监听器绑定到父节点。</p><h2 id="dom系性优化的方法" tabindex="-1">DOM系性优化的方法 <a class="header-anchor" href="#dom系性优化的方法" aria-label="Permalink to &quot;DOM系性优化的方法&quot;">​</a></h2><ol><li>避免频繁的重绘和回流：修改样式时，尽量一次性修改，避免多次重绘和回流。</li><li>减少 DOM 操作次数：合并多个操作，避免频繁的增删改查。</li><li>使用事件委托</li><li>缓存查询结果</li><li>使用文档片段</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建文档片段</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fragment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createDocumentFragment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 添加多个节点到文档片段</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> p1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;p&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p1.textContent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Hello, &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fragment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(p1);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> p2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;p&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p2.textContent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;world!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fragment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(p2);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插入文档片段到页面中</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> container</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;my-container&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 假设有一个 id 为 &quot;my-container&quot; 的容器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">container.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fragment);</span></span></code></pre></div><p><strong>重绘: 元素重新上色</strong></p><p><strong>回流：修改页面DOM</strong></p>`,13),l=[h];function p(e,k,r,d,E,o){return a(),i("div",null,l)}const F=s(t,[["render",p]]);export{y as __pageData,F as default};
