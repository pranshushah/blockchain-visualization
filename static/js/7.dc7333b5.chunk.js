(this.webpackJsonpblockchain=this.webpackJsonpblockchain||[]).push([[7],{188:function(e,t,a){"use strict";var n=a(37),r=a.n(n),o=a(38),l=a.n(o),c=(a(9),a(0)),i=a.n(c),u=a(61),s=a(189),d=a(190),f=a(36);function b(e){var t=e.children,a=e.className,n=e.content,o=e.fluid,c=e.text,m=e.textAlign,h=l()("ui",Object(u.a)(c,"text"),Object(u.a)(o,"fluid"),Object(u.c)(m),"container",a),p=Object(s.a)(b,e),g=Object(d.a)(b,e);return i.a.createElement(g,r()({},p,{className:h}),f.a.isNil(t)?n:t)}b.handledProps=["as","children","className","content","fluid","text","textAlign"],b.propTypes={},t.a=b},232:function(e,t,a){"use strict";var n=a(3),r=a(8);var o=a(0);a(9);function l(e,t){"function"===typeof e?e(t):e&&(e.current=t)}function c(e,t){return parseInt(e[t],10)||0}var i="undefined"!==typeof window?o.useLayoutEffect:o.useEffect,u={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},s=o.forwardRef((function(e,t){var a,s,d=e.onChange,f=e.rows,b=e.rowsMax,m=e.rowsMin,h=void 0===m?1:m,p=e.style,g=e.value,v=function(e,t){if(null==e)return{};var a,n,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}(e,["onChange","rows","rowsMax","rowsMin","style","value"]),y=f||h,E=o.useRef(null!=g).current,_=o.useRef(null),w=(a=t,s=_,o.useMemo((function(){return null==a&&null==s?null:function(e){l(a,e),l(s,e)}}),[a,s])),N=o.useRef(null),O=o.useRef(0),A=o.useState({}),j=A[0],k=A[1],x=o.useCallback((function(){var t=_.current,a=window.getComputedStyle(t),n=N.current;n.style.width=a.width,n.value=t.value||e.placeholder||"x","\n"===n.value.slice(-1)&&(n.value+=" ");var r=a["box-sizing"],o=c(a,"padding-bottom")+c(a,"padding-top"),l=c(a,"border-bottom-width")+c(a,"border-top-width"),i=n.scrollHeight-o;n.value="x";var u=n.scrollHeight-o,s=i;y&&(s=Math.max(Number(y)*u,s)),b&&(s=Math.min(Number(b)*u,s));var d=(s=Math.max(s,u))+("border-box"===r?o+l:0),f=Math.abs(s-i)<=1;k((function(e){return O.current<20&&(d>0&&Math.abs((e.outerHeightStyle||0)-d)>1||e.overflow!==f)?(O.current+=1,{overflow:f,outerHeightStyle:d}):e}))}),[b,y,e.placeholder]);o.useEffect((function(){var e=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function n(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var l=this,c=function(){e.apply(l,r)};clearTimeout(t),t=setTimeout(c,a)}return n.clear=function(){clearTimeout(t)},n}((function(){O.current=0,x()}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[x]),i((function(){x()})),o.useEffect((function(){O.current=0}),[g]);return o.createElement(o.Fragment,null,o.createElement("textarea",Object(n.a)({value:g,onChange:function(e){O.current=0,E||x(),d&&d(e)},ref:w,rows:y,style:Object(n.a)({height:j.outerHeightStyle,overflow:j.overflow?"hidden":null},p)},v)),o.createElement("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:N,tabIndex:-1,style:Object(n.a)(Object(n.a)({},u),p)}))}));t.a=s},448:function(e,t,a){e.exports={Heading:"Block_Heading__3ubZt",Root:"Block_Root__lsxFS",Content:"Block_Content__3cwAA",TopDataContainer:"Block_TopDataContainer__9agpy",DataContainer:"Block_DataContainer__3CqP5",NumberArea:"Block_NumberArea__AT8EY",NonceArea:"Block_NonceArea__h2OPR",HashArea:"Block_HashArea__1lzBf",TextArea:"Block_TextArea__2mPk1",Label:"Block_Label__8qgtD",Mine:"Block_Mine__3ZiSJ"}},467:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(0),o=a.n(r),l=a(468),c=a(442),i=a(460),u=a(232),s=a(188),d=a(465),f=a(15),b=a(55),m=a.n(b),h=a(448),p=a.n(h),g=a(58);function v(e,t){switch(t.type){case"UPDATE_TEXT_AND_HASH_VALUE":var a=m()(t.payload+e.nonce).toString();return Object(g.a)({},e,{textValue:t.payload,hashValue:a,dirty:"0000"!==a.slice(0,4)});case"MINING_STARTED":return Object(g.a)({},e,{buttonLoading:!0});case"MINING_FINISHED":return Object(g.a)({},e,{hashValue:t.payload.updateSha,nonce:t.payload.updateNonce,buttonLoading:!1,dirty:!1,pageLoading:!1});default:return e}}var y=a(73);t.default=function(){var e=Object(r.useReducer)(v,{textValue:"",hashValue:m()("").toString(),nonce:"",buttonLoading:!0,dirty:!1,pageLoading:!0}),t=Object(n.a)(e,2),a=t[0],b=t[1],h=a.textValue,g=a.hashValue,E=a.nonce,_=a.buttonLoading,w=a.dirty,N=a.pageLoading;return Object(r.useEffect)((function(){if(_){for(var e,t=0;"0000"!==(e=m()(h+t).toString()).slice(0,4);)t++;b({type:"MINING_FINISHED",payload:{updateSha:e,updateNonce:t}})}}),[_]),o.a.createElement(s.a,{style:{marginTop:"2%"}},o.a.createElement(y.a,null,o.a.createElement("title",null,"block"),o.a.createElement("meta",{name:"description",content:"you can visualize how blocks are mined and if change the content it will show error "}),o.a.createElement("meta",{name:"keywords",content:"visualization blocks,blockchain,mining,nonce"}),o.a.createElement("meta",{name:"author",content:"pranshu shah"})),N?o.a.createElement(f.a,null):o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:p.a.Heading},"Block:-"),o.a.createElement(l.a,{className:p.a.Root,centered:!0},o.a.createElement(c.a,{className:p.a.Content,style:{backgroundColor:w?"#FFBABA":"#90caf9"}},o.a.createElement("div",{className:p.a.TopDataContainer},o.a.createElement(i.a,{label:"BlockNumber",className:p.a.NumberArea,disabled:!0,size:"large",value:"1"})),o.a.createElement("div",{className:p.a.DataContainer},o.a.createElement(i.a,{label:"Nonce",className:p.a.NonceArea,disabled:!0,size:"large",value:E})),o.a.createElement("div",{className:p.a.DataContainer},o.a.createElement("label",{htmlFor:"textArea",className:p.a.Label},"Data:"),o.a.createElement(u.a,{id:"textArea",value:h,className:p.a.TextArea,onChange:function(e){b({type:"UPDATE_TEXT_AND_HASH_VALUE",payload:e.target.value})},rowsMin:"7"})),o.a.createElement("div",{className:p.a.DataContainer},o.a.createElement(i.a,{label:"Hash",className:p.a.NonceArea,disabled:!0,size:"large",value:g})),o.a.createElement(d.a,{className:p.a.Mine,loading:_,secondary:!0,size:"large",disabled:_,onClick:function(){b({type:"MINING_STARTED"})}},"Mine")))))}},58:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return o}))},76:function(e,t){},77:function(e,t){},79:function(e,t){},80:function(e,t){}}]);
//# sourceMappingURL=7.dc7333b5.chunk.js.map