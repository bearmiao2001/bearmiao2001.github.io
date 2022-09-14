import{_ as s,c as a,o as n,a as l}from"./app.8aa4d3fb.js";const D=JSON.parse('{"title":"JS\u539F\u578B\u94FE\u3001\u95ED\u5305","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u539F\u578B\u94FE","slug":"\u539F\u578B\u94FE","link":"#\u539F\u578B\u94FE","children":[]},{"level":2,"title":"\u95ED\u5305","slug":"\u95ED\u5305","link":"#\u95ED\u5305","children":[{"level":3,"title":"\u53D8\u91CF\u4F5C\u7528\u57DF","slug":"\u53D8\u91CF\u4F5C\u7528\u57DF","link":"#\u53D8\u91CF\u4F5C\u7528\u57DF","children":[]},{"level":3,"title":"\u4F5C\u7528\u57DF\u94FE","slug":"\u4F5C\u7528\u57DF\u94FE","link":"#\u4F5C\u7528\u57DF\u94FE","children":[]},{"level":3,"title":"\u95ED\u5305\u7684\u4EA7\u751F","slug":"\u95ED\u5305\u7684\u4EA7\u751F","link":"#\u95ED\u5305\u7684\u4EA7\u751F","children":[]},{"level":3,"title":"\u95ED\u5305\u7684\u5E94\u7528\u573A\u666F","slug":"\u95ED\u5305\u7684\u5E94\u7528\u573A\u666F","link":"#\u95ED\u5305\u7684\u5E94\u7528\u573A\u666F","children":[]}]}],"relativePath":"note/\u524D\u7AEF/JS/JS\u539F\u578B\u94FE\u3001\u95ED\u5305.md"}'),p={name:"note/\u524D\u7AEF/JS/JS\u539F\u578B\u94FE\u3001\u95ED\u5305.md"},o=l(`<h1 id="js\u539F\u578B\u94FE\u3001\u95ED\u5305" tabindex="-1">JS\u539F\u578B\u94FE\u3001\u95ED\u5305 <a class="header-anchor" href="#js\u539F\u578B\u94FE\u3001\u95ED\u5305" aria-hidden="true">#</a></h1><h2 id="\u539F\u578B\u94FE" tabindex="-1">\u539F\u578B\u94FE <a class="header-anchor" href="#\u539F\u578B\u94FE" aria-hidden="true">#</a></h2><ul><li>\u6982\u5FF5\uFF1AJS\u91CC\u9762\u7684\u5BF9\u8C61\u53EF\u80FD\u4F1A\u6709\u7236\u5BF9\u8C61\uFF0C\u7236\u5BF9\u8C61\u8FD8\u4F1A\u6709\u7236\u5BF9\u8C61</li><li>\u6839\u672C\uFF1A\u539F\u578B\u94FE\u7684\u6839\u672C\u662F\u7EE7\u627F<br> \u5BF9\u8C61\u4E2D\u51E0\u4E4E\u90FD\u6709\u4E00\u4E2A <code>__proto__</code> \u5C5E\u6027\uFF0C\u6307\u5411\u4ED6\u7684\u7236\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u8BA9\u8BE5\u5BF9\u8C61\u8BBF\u95EE\u5230\u7236\u5BF9\u8C61\u79CD\u7684\u76F8\u5173\u5C5E\u6027</li><li>\u6839\u5BF9\u8C61\uFF1A<code>Object.prototype</code><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#676E95;">// arr.__proto__: Array.prototype</span></span>
<span class="line"><span style="color:#676E95;">// arr.__proto__.__proto__: \u6839\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Animal</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> cat </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Animal</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;">// cat.__proto__: Animal.prototype</span></span>
<span class="line"><span style="color:#676E95;">// cat.__proto__.__proto__: \u6839\u5BF9\u8C61</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="\u95ED\u5305" tabindex="-1">\u95ED\u5305 <a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a></h2><h3 id="\u53D8\u91CF\u4F5C\u7528\u57DF" tabindex="-1">\u53D8\u91CF\u4F5C\u7528\u57DF <a class="header-anchor" href="#\u53D8\u91CF\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h3><ul><li>\u6982\u5FF5\uFF1A\u4E00\u4E2A\u53D8\u91CF\u53EF\u4EE5\u4F7F\u7528\u7684\u8303\u56F4\u53EB\u505A\u53D8\u91CF\u4F5C\u7528\u57DF</li><li>\u5168\u5C40\u4F5C\u7528\u57DF\uFF1A\u6700\u5916\u5C42\u7684\u4F5C\u7528\u57DF</li><li>\u72EC\u7ACB\u4F5C\u7528\u57DF\uFF1AJS\u4E2D\u8FD8\u53EF\u4EE5\u901A\u8FC7\u51FD\u6570\u521B\u5EFA\u51FA\u4E00\u4E2A\u72EC\u7ACB\u7684\u4F5C\u7528\u57DF\uFF0C\u5176\u4E2D\u51FD\u6570\u53EF\u4EE5\u5D4C\u5957\uFF0C\u6240\u4EE5\u4F5C\u7528\u57DF\u4E5F\u53EF\u4EE5\u5D4C\u5957</li></ul><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u5168\u5C40\u53D8\u91CF</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">f1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">haha</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// f1\u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CF </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u53D8\u91CF\u7684\u58F0\u540D\u548C\u8D4B\u503C\u662F\u5728\u4E24\u4E2A\u4E0D\u540C\u65F6\u671F\u7684<br> fn\u51FD\u6570\u6267\u884C\u7684\u65F6\u5019\uFF0C\u9996\u5148\u627E\u5230\u51FD\u6570\u5185\u90E8\u6240\u6709\u7684\u53D8\u91CF\u3001\u51FD\u6570\u58F0\u540D\uFF0C\u628A\u4ED6\u4EEC\u653E\u5728\u4F5C\u7528\u57DF\u4E2D\uFF0C\u7ED9\u53D8\u91CF\u4E00\u4E2A\u521D\u59CB\u503Cundefined<br> \u7136\u540E\u9010\u6761\u6267\u884C\u4EE3\u7801\uFF0C\u5728\u6267\u884C\u4EE3\u7801\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u6709\u8D4B\u503C\u8BED\u53E5\uFF0C\u5BF9\u53D8\u91CF\u8FDB\u884C\u8D4B\u503C</p></blockquote><h3 id="\u4F5C\u7528\u57DF\u94FE" tabindex="-1">\u4F5C\u7528\u57DF\u94FE <a class="header-anchor" href="#\u4F5C\u7528\u57DF\u94FE" aria-hidden="true">#</a></h3><ul><li>\u6982\u5FF5\uFF1A\u7531\u4E8E\u4F5C\u7528\u57DF\u662F\u76F8\u5BF9\u4E8E\u53D8\u91CF\u800C\u8A00\u7684\uFF0C\u800C\u5982\u679C\u5B58\u5728\u591A\u7EA7\u4F5C\u7528\u57DF\uFF0C\u90A3\u53D8\u91CF\u7684\u67E5\u627E\u8FC7\u7A0B\u5C31\u53EB\u505A\u53D8\u91CF\u7684\u4F5C\u7528\u57DF\u94FE</li><li>\u610F\u4E49\uFF1A\u67E5\u627E\u53D8\u91CF <ul><li>\u786E\u5B9A\u53D8\u91CF\u6765\u81EA\u4E8E\u90A3\u4E2A\u4F5C\u7528\u57DF</li><li>\u53D8\u91CF\u662F\u5426\u53EF\u4EE5\u8BBF\u95EE</li></ul></li><li>\u96BE\u70B9\uFF1A\u770B\u4E0A\u4E00\u7EA7\u4F5C\u7528\u57DF\uFF0C\u4E0D\u662F\u770B\u51FD\u6570\u5728\u54EA\u91CC\u8C03\u7528\uFF0C\u800C\u662F\u770B\u51FD\u6570\u5728\u54EA\u91CC\u7F16\u5199\uFF0C\u56E0\u4E3A\u8FD9\u79CD\u7279\u522B\uFF0C\u6211\u4EEC\u901A\u5E38\u4F1A\u628A\u4F5C\u7528\u57DF\u8BF4\u6210\u662F\u8BCD\u6CD5\u4F5C\u7528\u57DF</li></ul><blockquote><p>\u67E5\u770B\u5F53\u524D\u4F5C\u7528\u57DF\uFF0C\u5982\u679C\u5F53\u524D\u4F5C\u7528\u57DF\u58F0\u540D\u4E86\u8FD9\u4E2A\u53D8\u91CF\uFF0C\u5C31\u786E\u5B9A\u7ED3\u679C\uFF0C\u7136\u540E\u67E5\u627E\u5F53\u524D\u4F5C\u7528\u57DF\u7684\u4E0A\u7EA7\u4F5C\u7528\u57DF\uFF0C\u4E5F\u5C31\u662F\u5F53\u524D\u51FD\u6570\u7684\u4E0A\u7EA7\u51FD\u6570\uFF0C\u770B\u770B\u4E0A\u7EA7\u51FD\u6570\u4E2D\u6709\u6CA1\u6709\u58F0\u540D\uFF0C\u76F4\u5230\u5168\u5C40\u4F5C\u7528\u57DF\u4E3A\u6B62\uFF0C\u5982\u679C\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u4E5F\u6CA1\u6709\uFF0C\u6211\u4EEC\u5C31\u8BA4\u4E3A\u8FD9\u4E2A\u53D8\u91CF\u6CA1\u58F0\u660E</p></blockquote><h3 id="\u95ED\u5305\u7684\u4EA7\u751F" tabindex="-1">\u95ED\u5305\u7684\u4EA7\u751F <a class="header-anchor" href="#\u95ED\u5305\u7684\u4EA7\u751F" aria-hidden="true">#</a></h3><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> f1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#82AAFF;">f1</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#82AAFF;">f1</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#82AAFF;">f1</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><ul><li>\u4E00\u822C\u8BA4\u4E3A\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\uFF0C\u53D8\u91CF\u5C31\u4F1A\u91CA\u653E</li><li>\u4F46\u662F\u7531\u4E8Ejs\u5F15\u64CE\u53D1\u73B0\u533F\u540D\u51FD\u6570\u8981\u4F7F\u7528a\u53D8\u91CF\uFF0C\u6240\u4EE5a\u53D8\u91CF\u5E76\u4E0D\u80FD\u5F97\u5230\u91CA\u653E\uFF0C\u800C\u662F\u628Aa\u53D8\u91CF\u653E\u5728\u533F\u540D\u51FD\u6570\u53EF\u4EE5\u8BBF\u95EE\u5230\u7684\u5730\u65B9\u53BB\u4E86\u3002</li><li>a\u53D8\u91CF\u5B58\u5728\u4E8Ef1\u51FD\u6570\u53EF\u4EE5\u8BBF\u95EE\u5230\u7684\u5730\u65B9\uFF0C\u6B64\u65F6a\u53D8\u91CF\u53EA\u80FD\u88ABf1\u51FD\u6570\u8BBF\u95EE</li><li>\u518D\u6B21\u6267\u884Cfn\u4F1A\u521D\u59CB\u5316\u4E00\u4E2A\u65B0\u7684a\u53D8\u91CF</li><li>\u53EF\u4EE5\u901A\u8FC7 <code>f1 = null</code> \u6765\u91CA\u653Ef1\u91CC\u9762\u4FDD\u5B58\u7684a\u53D8\u91CF</li></ul><h3 id="\u95ED\u5305\u7684\u5E94\u7528\u573A\u666F" tabindex="-1">\u95ED\u5305\u7684\u5E94\u7528\u573A\u666F <a class="header-anchor" href="#\u95ED\u5305\u7684\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h3><ul><li>\u6A21\u5757\u5316</li><li>\u9632\u6B62\u53D8\u91CF\u88AB\u7834\u574F</li></ul>`,16),e=[o];function t(c,r,i,y,A,F){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{D as __pageData,d as default};
