(this.webpackJsonpblockchain=this.webpackJsonpblockchain||[]).push([[7],{187:function(e,t,a){"use strict";var n=a(35),r=a.n(n),o=a(36),l=a.n(o),c=(a(9),a(0)),i=a.n(c),u=a(60),s=a(188),f=a(189),d=a(34);function b(e){var t=e.children,a=e.className,n=e.content,o=e.fluid,c=e.text,m=e.textAlign,p=l()("ui",Object(u.a)(c,"text"),Object(u.a)(o,"fluid"),Object(u.c)(m),"container",a),h=Object(s.a)(b,e),g=Object(f.a)(b,e);return i.a.createElement(g,r()({},h,{className:p}),d.a.isNil(t)?n:t)}b.handledProps=["as","children","className","content","fluid","text","textAlign"],b.propTypes={},t.a=b},231:function(e,t,a){"use strict";var n=a(2),r=a(8);var o=a(0);a(9);function l(e,t){"function"===typeof e?e(t):e&&(e.current=t)}function c(e,t){return parseInt(e[t],10)||0}var i="undefined"!==typeof window?o.useLayoutEffect:o.useEffect,u={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},s=o.forwardRef((function(e,t){var a,s,f=e.onChange,d=e.rows,b=e.rowsMax,m=e.rowsMin,p=void 0===m?1:m,h=e.style,g=e.value,v=function(e,t){if(null==e)return{};var a,n,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}(e,["onChange","rows","rowsMax","rowsMin","style","value"]),y=d||p,_=o.useRef(null!=g).current,N=o.useRef(null),O=(a=t,s=N,o.useMemo((function(){return null==a&&null==s?null:function(e){l(a,e),l(s,e)}}),[a,s])),E=o.useRef(null),w=o.useRef(0),A=o.useState({}),j=A[0],x=A[1],k=o.useCallback((function(){var t=N.current,a=window.getComputedStyle(t),n=E.current;n.style.width=a.width,n.value=t.value||e.placeholder||"x","\n"===n.value.slice(-1)&&(n.value+=" ");var r=a["box-sizing"],o=c(a,"padding-bottom")+c(a,"padding-top"),l=c(a,"border-bottom-width")+c(a,"border-top-width"),i=n.scrollHeight-o;n.value="x";var u=n.scrollHeight-o,s=i;y&&(s=Math.max(Number(y)*u,s)),b&&(s=Math.min(Number(b)*u,s));var f=(s=Math.max(s,u))+("border-box"===r?o+l:0),d=Math.abs(s-i)<=1;x((function(e){return w.current<20&&(f>0&&Math.abs((e.outerHeightStyle||0)-f)>1||e.overflow!==d)?(w.current+=1,{overflow:d,outerHeightStyle:f}):e}))}),[b,y,e.placeholder]);o.useEffect((function(){var e=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function n(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var l=this,c=function(){e.apply(l,r)};clearTimeout(t),t=setTimeout(c,a)}return n.clear=function(){clearTimeout(t)},n}((function(){w.current=0,k()}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[k]),i((function(){k()})),o.useEffect((function(){w.current=0}),[g]);return o.createElement(o.Fragment,null,o.createElement("textarea",Object(n.a)({value:g,onChange:function(e){w.current=0,_||k(),f&&f(e)},ref:O,rows:y,style:Object(n.a)({height:j.outerHeightStyle,overflow:j.overflow?"hidden":null},h)},v)),o.createElement("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:E,tabIndex:-1,style:Object(n.a)(Object(n.a)({},u),h)}))}));t.a=s},446:function(e,t,a){e.exports={Heading:"Block_Heading__3ubZt",Root:"Block_Root__lsxFS",Content:"Block_Content__3cwAA",TopDataContainer:"Block_TopDataContainer__9agpy",DataContainer:"Block_DataContainer__3CqP5",NumberArea:"Block_NumberArea__AT8EY",NonceArea:"Block_NonceArea__h2OPR",HashArea:"Block_HashArea__1lzBf",TextArea:"Block_TextArea__2mPk1",Label:"Block_Label__8qgtD",Mine:"Block_Mine__3ZiSJ"}},464:function(e,t,a){"use strict";a.r(t);var n=a(56),r=a(0),o=a.n(r),l=a(465),c=a(440),i=a(458),u=a(231),s=a(187),f=a(462),d=a(13),b=a(53),m=a.n(b),p=a(446),h=a.n(p),g=a(57);function v(e,t){switch(t.type){case"UPDATE_TEXT_AND_HASH_VALUE":var a=m()(t.payload+e.nonce).toString();return Object(g.a)({},e,{textValue:t.payload,hashValue:a,dirty:"0000"!==a.slice(0,4)});case"MINING_STARTED":return Object(g.a)({},e,{buttonLoading:!0});case"MINING_FINISHED":return Object(g.a)({},e,{hashValue:t.payload.updateSha,nonce:t.payload.updateNonce,buttonLoading:!1,dirty:!1,pageLoading:!1});default:return e}}t.default=function(){var e=Object(r.useReducer)(v,{textValue:"",hashValue:m()("").toString(),nonce:"",buttonLoading:!0,dirty:!1,pageLoading:!0}),t=Object(n.a)(e,2),a=t[0],b=t[1],p=a.textValue,g=a.hashValue,y=a.nonce,_=a.buttonLoading,N=a.dirty,O=a.pageLoading;return Object(r.useEffect)((function(){if(_){for(var e,t=0;"0000"!==(e=m()(p+t).toString()).slice(0,4);)t++;b({type:"MINING_FINISHED",payload:{updateSha:e,updateNonce:t}})}}),[_]),o.a.createElement(s.a,{style:{marginTop:"2%"}},O?o.a.createElement(d.a,null):o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:h.a.Heading},"Block:-"),o.a.createElement(l.a,{className:h.a.Root,centered:!0},o.a.createElement(c.a,{className:h.a.Content,style:{backgroundColor:N?"#FFBABA":"#90caf9"}},o.a.createElement("div",{className:h.a.TopDataContainer},o.a.createElement(i.a,{label:"BlockNumber",className:h.a.NumberArea,disabled:!0,size:"large",value:"1"})),o.a.createElement("div",{className:h.a.DataContainer},o.a.createElement(i.a,{label:"Nonce",className:h.a.NonceArea,disabled:!0,size:"large",value:y})),o.a.createElement("div",{className:h.a.DataContainer},o.a.createElement("label",{htmlFor:"textArea",className:h.a.Label},"Data:"),o.a.createElement(u.a,{id:"textArea",value:p,className:h.a.TextArea,onChange:function(e){b({type:"UPDATE_TEXT_AND_HASH_VALUE",payload:e.target.value})},rowsMin:"7"})),o.a.createElement("div",{className:h.a.DataContainer},o.a.createElement(i.a,{label:"Hash",className:h.a.NonceArea,disabled:!0,size:"large",value:g})),o.a.createElement(f.a,{className:h.a.Mine,loading:_,secondary:!0,size:"large",disabled:_,onClick:function(){b({type:"MINING_STARTED"})}},"Mine")))))}},57:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return o}))},74:function(e,t){},75:function(e,t){},77:function(e,t){},78:function(e,t){}}]);
//# sourceMappingURL=7.edc31c6a.chunk.js.map