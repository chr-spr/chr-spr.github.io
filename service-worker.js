if(!self.define){let e,a={};const i=(i,r)=>(i=new URL(i+".js",r).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let l={};const o=e=>i(e,c),f={module:{uri:c},exports:l,require:o};a[c]=Promise.all(r.map((e=>f[e]||o(e)))).then((e=>(d(...e),l)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022-02-12/Markdown基本语法fa1644474ce5.html",revision:"fcf059823c5e7dbf9f478bb9c6af626f"},{url:"2022-04-26/Ubuntu虚拟机安装b20f626e83e9.html",revision:"a1bf771d0649c8eee19d41ac817c1299"},{url:"2022-04-28/Apollo安装f0705ae4aa3a.html",revision:"754ede31d51806361883ca15c6e5209d"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/Apollo.png",revision:"bd0748831bb123ea8f3e3c6d50228dc8"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/build.png",revision:"a2747c7245d82994de92a8bf80247842"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/huifang.jpg",revision:"e076b06071f0e28d9f4224c79231dc24"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/into.png",revision:"c4ebf7935cec8311da196ed77fff3a0e"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/map.png",revision:"200ac9de106ca61217082366912f3ad0"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/nvidia-1.png",revision:"5101addccfcb05e91c1d6e690365cf34"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/nvidia-2.png",revision:"908eb186e9fca983eed5d2072f1d2099"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/source.png",revision:"480bea783fc9a3be8d3e0660a0db34f5"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/start_nok.png",revision:"f41579c0fa2a1a2af080fd313100941a"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/start_ok.png",revision:"69c102672c731305ef236fa8e3e51b8b"},{url:"2022-09-13/hello-world6f420f83924c.html",revision:"c173720707ff64c2446ba5d9a1b28731"},{url:"404.html",revision:"105887266fd053779d4620167cb8af47"},{url:"about/index.html",revision:"a57ca7a9d3f1688829a906be5d2df0a2"},{url:"archives/2022/02/index.html",revision:"3e87c47b6fa1b17a199e6e04bd0bc794"},{url:"archives/2022/04/index.html",revision:"fbed682a914f074160664ca5698925ce"},{url:"archives/2022/09/index.html",revision:"8b24498e46f5905e628022f6ebe4d487"},{url:"archives/2022/index.html",revision:"96c800df78317608c245b363356c8b8b"},{url:"archives/index.html",revision:"e8953aca9e4eacc25bc33fa405db8643"},{url:"categories/index.html",revision:"7c3585ecf392e6783aa7aa77af20b499"},{url:"css/index.css",revision:"44b61c0b3a05a0a955b32f993e266538"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"bc59d53cdca5a61080c8032a4e76c790"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"a14633c1ab8ce3679dd3683fb2addcce"},{url:"movies/index.html",revision:"9b14c1312dd63a54d739c455067c85a1"},{url:"music/index.html",revision:"7b92e5ed7046c51a6c2a89118b244a33"},{url:"personal/avatar.jpg",revision:"d3e138c0200de97db3d6833aa0f6974c"},{url:"personal/default.png",revision:"82398b684539cc18a740a4747d1408f2"},{url:"personal/favicon.webp",revision:"f97587eba77b696801eaeb0a3f9671f8"},{url:"personal/index.jpg",revision:"d81bd8e23d85d97b423cfd6ca7181357"},{url:"tags/Apollo/index.html",revision:"13823861d10f7538bdd51df2a127cd9c"},{url:"tags/index.html",revision:"13e5b96af75177559d2f9f8335a189c8"},{url:"tags/Ubuntu/index.html",revision:"60f72de9dd1e354c7664f661f448d56d"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
