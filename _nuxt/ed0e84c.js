(window.webpackJsonp=window.webpackJsonp||[]).push([[2,4],{207:function(n,e,t){"use strict";var o=t(10),r=t(2),A=t(86),c=t(13),d=t(11),C=t(37),f=t(159),l=t(62),v=t(158),h=t(5),m=t(44),w=t(63).f,B=t(26).f,x=t(12).f,E=t(209).trim,y="Number",k=r.Number,F=k.prototype,O=C(m(F))==y,_=function(n){if(l(n))throw TypeError("Cannot convert a Symbol value to a number");var e,t,o,r,A,c,d,code,C=v(n,"number");if("string"==typeof C&&C.length>2)if(43===(e=(C=E(C)).charCodeAt(0))||45===e){if(88===(t=C.charCodeAt(2))||120===t)return NaN}else if(48===e){switch(C.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+C}for(c=(A=C.slice(2)).length,d=0;d<c;d++)if((code=A.charCodeAt(d))<48||code>r)return NaN;return parseInt(A,o)}return+C};if(A(y,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var j,I=function(n){var e=arguments.length<1?0:n,t=this;return t instanceof I&&(O?h((function(){F.valueOf.call(t)})):C(t)!=y)?f(new k(_(e)),t,I):_(e)},S=o?w(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),W=0;S.length>W;W++)d(k,j=S[W])&&!d(I,j)&&x(I,j,B(k,j));I.prototype=F,F.constructor=I,c(r,y,I)}},209:function(n,e,t){var o=t(16),r=t(8),A="["+t(210)+"]",c=RegExp("^"+A+A+"*"),d=RegExp(A+A+"*$"),C=function(n){return function(e){var t=r(o(e));return 1&n&&(t=t.replace(c,"")),2&n&&(t=t.replace(d,"")),t}};n.exports={start:C(1),end:C(2),trim:C(3)}},210:function(n,e){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},212:function(n,e,t){var content=t(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(85).default)("002cd646",content,!0,{sourceMap:!0})},213:function(n,e,t){"use strict";t.r(e);t(36),t(32),t(35),t(60),t(31),t(61);var o=t(27),r=(t(207),t(47),t(48),t(45));function A(object,n){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),e.push.apply(e,t)}return e}function c(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){Object(o.a)(n,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(source,e))}))}return n}var d={props:{movieId:{type:Number,required:!1,default:null},isFav:{type:Boolean,required:!1,default:!1}},computed:c(c({},Object(r.d)(["favs"])),{},{checkmark:function(){return this.favs.includes(this.movieId)?"fav-icon-check-active":"fav-icon-check"}}),methods:c(c({},Object(r.b)(["toggle"])),{},{toggleFav:function(){return this.isFav?"fav-icon-check-active":"fav-icon-check"}})},C=(t(220),t(34)),component=Object(C.a)(d,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("button",{staticClass:"fav-btn",on:{click:function(e){return e.preventDefault(),n.toggle({value:n.movieId})}}},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.4 90.7"}},[t("g",{class:n.checkmark},[t("polygon",{attrs:{fill:"#AD4444",points:"47.7,4.5 61.1,31.7 91.1,36 69.4,57.2 74.5,87.1 47.7,73 20.9,87.1 26,57.2 4.3,36 34.3,31.7"}})]),n._v(" "),t("g",{attrs:{id:"fav-icon"}},[t("polygon",{attrs:{fill:"none",stroke:"#AF2727","stroke-width":"4","stroke-miterlimit":"10",points:"47.7,4.5 61.1,31.7 91.1,36 69.4,57.2 74.5,87.1 47.7,73 20.9,87.1 26,57.2 4.3,36 34.3,31.7"}})])])])}),[],!1,null,"f1decf72",null);e.default=component.exports},220:function(n,e,t){"use strict";t(212)},221:function(n,e,t){var o=t(84)(!0);o.push([n.i,".fav-btn[data-v-f1decf72]{transition:all .1s ease;width:40px;height:40px;display:block;position:absolute;right:20px;top:-15px;z-index:3;background-color:transparent;border:none;outline:none;transform:scale(1)}.fav-btn[data-v-f1decf72]:hover{transform:scale(.85)}.fav-btn:hover .fav-icon-check[data-v-f1decf72]{opacity:.5}svg[data-v-f1decf72]{width:100%;height:100%;display:block;filter:drop-shadow(0 0 2px black)}.fav-icon-check[data-v-f1decf72]{opacity:0}.fav-icon-check-active[data-v-f1decf72]{opacity:1}","",{version:3,sources:["webpack://components/ui/FavoriteBtn.vue"],names:[],mappings:"AA+DA,0BACE,uBAAyB,CACzB,UAAW,CACX,WAAY,CACZ,aAAc,CACd,iBAAkB,CAClB,UAAW,CACX,SAAU,CACV,SAAU,CACV,4BAA6B,CAC7B,WAAY,CACZ,YAAa,CACb,kBACF,CAEA,gCACE,oBACF,CAEA,gDACE,UACF,CAEA,qBACE,UAAW,CACX,WAAY,CACZ,aAAc,CACd,iCACF,CAEA,iCACE,SACF,CAEA,wCACE,SACF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.fav-btn {\n  transition: 0.1s ease all;\n  width: 40px;\n  height: 40px;\n  display: block;\n  position: absolute;\n  right: 20px;\n  top: -15px;\n  z-index: 3;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  transform: scale(1);\n}\n\n.fav-btn:hover {\n  transform: scale(0.85);\n}\n\n.fav-btn:hover .fav-icon-check {\n  opacity: 0.5;\n}\n\nsvg {\n  width: 100%;\n  height: 100%;\n  display: block;\n  filter: drop-shadow(0 0 2px black);\n}\n\n.fav-icon-check {\n  opacity: 0;\n}\n\n.fav-icon-check-active {\n  opacity: 1;\n}\n"],sourceRoot:""}]),n.exports=o},222:function(n,e,t){var content=t(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(85).default)("0071ff0a",content,!0,{sourceMap:!0})},225:function(n,e,t){"use strict";t.r(e);t(36),t(32),t(35),t(60),t(31),t(61);var o=t(27),r=(t(87),t(45));function A(object,n){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),e.push.apply(e,t)}return e}var c={components:{FavoriteBtn:t(213).default},props:{movie:{type:Object,required:!0}},data:function(){return{windowWidth:0,overview:!1,isFavorite:this.isfav}},computed:function(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){Object(o.a)(n,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(source,e))}))}return n}({},Object(r.c)(["isFav"])),mounted:function(){this.windowWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},methods:{getCardWidth:function(){return this.windowWidth<=768&&this.windowWidth>=0?"154":this.windowWidth<=2e3&&this.windowWidth>=769?"185":this.windowWidth>=2001?"300":void 0},viewOverview:function(n){this.overview=n},responsiveImg:function(n){return"https://image.tmdb.org/t/p/w".concat(this.getCardWidth()).concat(n.poster_path)},cardSize:function(){return"min-width:"+this.getCardWidth()+"px"}}},d=(t(226),t(34)),component=Object(d.a)(c,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return n.windowWidth>0?t("div",{staticClass:"movie-card",style:n.cardSize()},[t("FavoriteBtn",{attrs:{"movie-id":n.movie.id,"is-fav":n.isFav}}),n._v(" "),t("div",{staticClass:"movie-img",on:{mouseover:function(e){return n.viewOverview(!0)},mouseout:function(e){return n.viewOverview(!1)}}},[t("h2",{staticClass:"review"},[n._v("\n      "+n._s(n.movie.vote_average)+"\n    ")]),n._v(" "),t("img",{attrs:{src:n.responsiveImg(n.movie),alt:""}}),n._v(" "),t("div",{class:["description",{"open-description":n.overview}]},[t("span",[n._v(n._s(n.movie.overview))])])]),n._v(" "),t("h3",[n._v("\n    "+n._s(n.movie.title.slice(0,25))+"\n    "),n.movie.title.length>25?t("span",[n._v("...")]):n._e()]),n._v(" "),t("h4",[n._v("\n    "+n._s(n.movie.original_title.slice(0,25))+"\n    "),n.movie.original_title.length>25?t("span",[n._v("...")]):n._e()]),n._v(" "),t("nuxt-link",{attrs:{id:n.movie.id,to:{name:"movies-movieid",params:{movieid:n.movie.id}}}},[n._v("Get More Info")]),n._v(" "),t("div",{staticClass:"release"},[n._v("\n    Lançado em:"),t("br"),n._v("\n    "+n._s(new Date(n.movie.release_date).toLocaleString("pt-br",{month:"long",day:"numeric",year:"numeric"}))+"\n  ")])],1):n._e()}),[],!1,null,"3253b9f2",null);e.default=component.exports;installComponents(component,{FavoriteBtn:t(213).default})},226:function(n,e,t){"use strict";t(222)},227:function(n,e,t){var o=t(84)(!0);o.push([n.i,".movie-card[data-v-3253b9f2]{display:grid;position:relative;grid-template-rows:auto 1fr auto;grid-gap:10px;gap:10px;scroll-snap-align:start;padding:10px;opacity:0;-webkit-animation:fade-data-v-3253b9f2 1s linear 1s forwards;animation:fade-data-v-3253b9f2 1s linear 1s forwards}.movie-card:hover img[data-v-3253b9f2]{transform:scale(1.2)}@-webkit-keyframes fade-data-v-3253b9f2{to{opacity:1}}@keyframes fade-data-v-3253b9f2{to{opacity:1}}.movie-img[data-v-3253b9f2]{position:relative;border-radius:10px;overflow:hidden}.movie-img img[data-v-3253b9f2]{transition:all 1s ease;-o-object-fit:fill;object-fit:fill;aspect-ratio:.68;width:100%;height:100%}.movie-img .review[data-v-3253b9f2]{background-color:#9d3030;border-radius:0 0 5px 5px;position:absolute;top:0;left:15px;padding:4px 8px;color:#fff}.description[data-v-3253b9f2]{position:absolute;top:0;left:0;transition:.4s;transform:translateY(101%);z-index:2;width:100%;height:100%;background-color:rgba(0,0,0,.9);padding:10px;overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none}.release[data-v-3253b9f2]{color:#708090}.open-description[data-v-3253b9f2]{transform:translateY(0)}.description[data-v-3253b9f2]::-webkit-scrollbar{display:none}.description span[data-v-3253b9f2]{color:#fff;font-size:13px}h3[data-v-3253b9f2]{color:#fff}h4[data-v-3253b9f2]{color:#a9a9a9}a[data-v-3253b9f2]{color:transparent;text-decoration:none;color:#fff;border:1px solid red;border-radius:5px;padding:7px 10px;display:block;justify-self:start;cursor:pointer}a[data-v-3253b9f2]:hover{border-color:#fff}a[data-v-3253b9f2]:link{color:#fff}@media (min-width:1500px){.description span[data-v-3253b9f2]{font-size:16px}h3[data-v-3253b9f2]{font-size:18px}}@media (max-width:768px){h2[data-v-3253b9f2],h3[data-v-3253b9f2]{font-size:14px}a[data-v-3253b9f2],h4[data-v-3253b9f2]{font-size:12px}.movie-card[data-v-3253b9f2]{width:120px}.release[data-v-3253b9f2]{font-size:12px}}","",{version:3,sources:["webpack://components/ui/BaseCard.vue"],names:[],mappings:"AAiGA,6BACE,YAAa,CACb,iBAAkB,CAClB,gCAAiC,CACjC,aAAS,CAAT,QAAS,CACT,uBAAwB,CACxB,YAAa,CACb,SAAU,CACV,4DAAqC,CAArC,oDACF,CAEA,uCACE,oBACF,CAEA,wCACE,GACE,SACF,CACF,CAJA,gCACE,GACE,SACF,CACF,CACA,4BACE,iBAAkB,CAClB,kBAAmB,CACnB,eACF,CACA,gCACE,sBAAuB,CACvB,kBAAgB,CAAhB,eAAgB,CAChB,gBAAkB,CAClB,UAAW,CACX,WACF,CACA,oCACE,wBAAkC,CAClC,yBAA0B,CAC1B,iBAAkB,CAClB,KAAM,CACN,SAAU,CACV,eAAgB,CAChB,UACF,CACA,8BACE,iBAAkB,CAClB,KAAM,CACN,MAAO,CACP,cAAiB,CACjB,0BAA2B,CAC3B,SAAU,CACV,UAAW,CACX,WAAY,CACZ,+BAAoC,CACpC,YAAa,CACb,eAAgB,CAChB,uBAAwB,CACxB,oBACF,CAEA,0BACE,aACF,CAEA,mCACE,uBACF,CAEA,iDACE,YACF,CAEA,mCACE,UAAY,CACZ,cACF,CAEA,oBACE,UACF,CAEA,oBACE,aACF,CAEA,mBACE,iBAAkB,CAClB,oBAAqB,CACrB,UAAY,CACZ,oBAAqB,CACrB,iBAAkB,CAClB,gBAAiB,CACjB,aAAc,CACd,kBAAmB,CACnB,cACF,CAEA,yBACE,iBACF,CAEA,wBACE,UACF,CAEA,0BACE,mCACE,cACF,CACA,oBACE,cACF,CACF,CAEA,yBAIE,wCACE,cACF,CAIA,uCACE,cACF,CACA,6BACE,WACF,CAEA,0BACE,cACF,CACF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.movie-card {\n  display: grid;\n  position: relative;\n  grid-template-rows: auto 1fr auto;\n  gap: 10px;\n  scroll-snap-align: start;\n  padding: 10px;\n  opacity: 0;\n  animation: fade 1s linear 1s forwards;\n}\n\n.movie-card:hover img {\n  transform: scale(1.2);\n}\n\n@keyframes fade {\n  100% {\n    opacity: 100;\n  }\n}\n.movie-img {\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.movie-img img {\n  transition: 1s ease all;\n  object-fit: fill;\n  aspect-ratio: 0.68;\n  width: 100%;\n  height: 100%;\n}\n.movie-img .review {\n  background-color: rgb(157, 48, 48);\n  border-radius: 0 0 5px 5px;\n  position: absolute;\n  top: 0;\n  left: 15px;\n  padding: 4px 8px;\n  color: #fff;\n}\n.description {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: 400ms;\n  transform: translateY(101%);\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.9);\n  padding: 10px;\n  overflow-y: auto;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none;\n}\n\n.release {\n  color: slategray;\n}\n\n.open-description {\n  transform: translateY(0);\n}\n\n.description::-webkit-scrollbar {\n  display: none;\n}\n\n.description span {\n  color: white;\n  font-size: 13px;\n}\n\nh3 {\n  color: white;\n}\n\nh4 {\n  color: darkgrey;\n}\n\na {\n  color: transparent;\n  text-decoration: none;\n  color: white;\n  border: 1px solid red;\n  border-radius: 5px;\n  padding: 7px 10px;\n  display: block;\n  justify-self: start;\n  cursor: pointer;\n}\n\na:hover {\n  border-color: #fff;\n}\n\na:link {\n  color: #fff;\n}\n\n@media (min-width: 1500px) {\n  .description span {\n    font-size: 16px;\n  }\n  h3 {\n    font-size: 18px;\n  }\n}\n\n@media (max-width: 768px) {\n  h2 {\n    font-size: 14px;\n  }\n  h3 {\n    font-size: 14px;\n  }\n  h4 {\n    font-size: 12px;\n  }\n  a {\n    font-size: 12px;\n  }\n  .movie-card {\n    width: 120px;\n  }\n\n  .release {\n    font-size: 12px;\n  }\n}\n"],sourceRoot:""}]),n.exports=o}}]);