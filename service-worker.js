if(!self.define){let e,a={};const i=(i,d)=>(i=new URL(i+".js",d).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(d,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(a[f])return;let l={};const o=e=>i(e,f),n={module:{uri:f},exports:l,require:o};a[f]=Promise.all(d.map((e=>n[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022-02-12/Markdown基本语法fa1644474ce5.html",revision:"8db41da2970d4273d22fa8dfbdd50ab1"},{url:"2022-04-26/Ubuntu虚拟机安装b20f626e83e9.html",revision:"93914bf72f2d258ff96ed55e6d6dbb01"},{url:"2022-04-28/Apollo安装f0705ae4aa3a.html",revision:"7dfcf398561b40c540658eb52eac140b"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/Apollo.png",revision:"bd0748831bb123ea8f3e3c6d50228dc8"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/build.png",revision:"a2747c7245d82994de92a8bf80247842"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/huifang.jpg",revision:"e076b06071f0e28d9f4224c79231dc24"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/into.png",revision:"c4ebf7935cec8311da196ed77fff3a0e"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/map.png",revision:"200ac9de106ca61217082366912f3ad0"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/nvidia-1.png",revision:"5101addccfcb05e91c1d6e690365cf34"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/nvidia-2.png",revision:"908eb186e9fca983eed5d2072f1d2099"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/source.png",revision:"480bea783fc9a3be8d3e0660a0db34f5"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/start_nok.png",revision:"f41579c0fa2a1a2af080fd313100941a"},{url:"2022-04-28/Apollo安装f0705ae4aa3a/start_ok.png",revision:"69c102672c731305ef236fa8e3e51b8b"},{url:"2022-09-13/hello-world6f420f83924c.html",revision:"8bf1ee53f2aa670e09008fe1f1463b16"},{url:"404.html",revision:"55141faf3b2920bd3fcb681b856ab478"},{url:"archives/2022/02/index.html",revision:"6d309392b90515758fd81e407d5b3ec9"},{url:"archives/2022/04/index.html",revision:"8670a5f765e04edc03f2001236cdae06"},{url:"archives/2022/09/index.html",revision:"101956a00020ff25f7356d19bb4343ef"},{url:"archives/2022/index.html",revision:"7f05e024a81ea5de5b60526c7bc5d7c2"},{url:"archives/index.html",revision:"0c00d0d22a17b07f66309ac9eb57a815"},{url:"categories/index.html",revision:"70b9163d517d87076892961180e4ca65"},{url:"css/index.css",revision:"44b61c0b3a05a0a955b32f993e266538"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.jpg",revision:"d3e138c0200de97db3d6833aa0f6974c"},{url:"img/default.png",revision:"82398b684539cc18a740a4747d1408f2"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/favicon.webp",revision:"f97587eba77b696801eaeb0a3f9671f8"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.jpg",revision:"d81bd8e23d85d97b423cfd6ca7181357"},{url:"index.html",revision:"7e5560879cea0c9a0a2f7e093f659e49"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"6bc86b6298de0920b3c915966dd4f875"},{url:"tags/Apollo/index.html",revision:"e7d35421d5aa6d2646a48cc635e83019"},{url:"tags/index.html",revision:"74e7f3e5e7618350941e220f7bfd2bc2"},{url:"tags/Ubuntu/index.html",revision:"a2a0feade566da61e3eb477dbd621db5"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
