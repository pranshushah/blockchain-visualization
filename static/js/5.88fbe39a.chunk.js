(this.webpackJsonpblockchain=this.webpackJsonpblockchain||[]).push([[5],{143:function(e,a,t){e.exports={Heading:"BlockChainBlock_Heading__-xlO3",Root:"BlockChainBlock_Root__22IGo",Content:"BlockChainBlock_Content__Ynk7Z",TopDataContainer:"BlockChainBlock_TopDataContainer__3lK6X",DataContainer:"BlockChainBlock_DataContainer__33jIy",NumberArea:"BlockChainBlock_NumberArea__17Egs",NonceArea:"BlockChainBlock_NonceArea__1vqqM",TextArea:"BlockChainBlock_TextArea__3nZ6X",PrevHashArea:"BlockChainBlock_PrevHashArea__1XUAT",HashArea:"BlockChainBlock_HashArea__AP35b",Label:"BlockChainBlock_Label__Wy2vj",Mine:"BlockChainBlock_Mine__1frhl"}},144:function(e,a,t){e.exports={blockChainContainer:"BlockChainContainer_blockChainContainer__PxNaE",container:"BlockChainContainer_container__12HMq",Heading:"BlockChainContainer_Heading__3O9ne"}},228:function(e,a,t){"use strict";t.r(a);var n=t(103);var r=t(102);function o(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=t(69),l=t(0),i=t.n(l),u=t(60),s=t.n(u),f=t(459),b=t(438),d=t(453),h=t(229),m=t(457),v=t(143),C=t.n(v);var _=function(e){var a=e.previousHash,t=e.currentHash,n=e.dataValue,r=e.Nonce,o=e.onUpdateDataValue,u=e.blockIndex,v=e.onMineClicked,_=Object(l.useState)(!1),k=Object(c.a)(_,2),g=k[0],p=k[1],y=Object(l.useState)(!1),E=Object(c.a)(y,2),O=E[0],w=E[1];return Object(l.useEffect)((function(){if(O){for(var e,t=0;"0000"!==(e=s()(a+n+t).toString()).slice(0,4);)t++;w(!1),v(e,t,u)}}),[O]),Object(l.useEffect)((function(){t&&a&&"0000"===t.slice(0,4)&&"0000"===a.slice(0,4)?p(!1):p(!0)}),[a,t]),i.a.createElement(f.a,{className:C.a.Root,variant:"outlined",style:{marginLeft:"7px",marginRight:"7px"}},i.a.createElement(b.a,{className:C.a.Content,style:{backgroundColor:g?"#FFBABA":"#90caf9"}},i.a.createElement("div",{className:C.a.TopDataContainer},i.a.createElement(d.a,{label:"Number",disabled:!0,className:C.a.NumberArea,value:u})),i.a.createElement("div",{className:C.a.DataContainer},i.a.createElement(d.a,{label:"Nonce",className:C.a.NonceArea,disabled:!0,value:r})),i.a.createElement("div",{className:C.a.DataContainer},i.a.createElement("label",{htmlFor:"textArea",className:C.a.Label},"Data:"),i.a.createElement(h.a,{id:"textArea",value:n,className:C.a.TextArea,onChange:function(e){console.log(""===e.target.value),o(e.target.value,u)},rowsMin:"4"})),i.a.createElement("div",{className:C.a.DataContainer},i.a.createElement(d.a,{label:"Prev-Hash",disabled:!0,className:C.a.PrevHashArea,value:a})),i.a.createElement("div",{className:C.a.DataContainer},i.a.createElement(d.a,{label:"Hash",disabled:!0,className:C.a.HashArea,value:t})),i.a.createElement(m.a,{className:C.a.Mine,secondary:!0,loading:O,size:"large",onClick:function(){w(!0)}},"Mine")))},k=t(13),g=t(144),p=t.n(g);a.default=function(e){var a=e.heading,t=Object(l.useState)([]),n=Object(c.a)(t,2),r=n[0],u=n[1],f=Object(l.useState)(["","","","","",""]),b=Object(c.a)(f,2),d=b[0],h=b[1],m=Object(l.useState)([]),v=Object(c.a)(m,2),C=v[0],g=v[1],y=Object(l.useState)([]),E=Object(c.a)(y,2),O=E[0],w=E[1],N=Object(l.useState)(!0),j=Object(c.a)(N,2),B=j[0],x=j[1];function A(e,a){var t,n=o(d),c=o(C),l=o(r);n[a]=e;for(var i=a;i<6;i++)t=(t=s()(l[i]+O[i]+n[i])).toString(),c[i]=t,5!==i&&(l[i+1]=t);h(n),g(c),u(l)}function H(e,a,t){var n=o(C),c=o(O),l=o(r);c[t]=a,n[t]=e,5!==t&&(l[t+1]=e);for(var i=t+1;i<6;i++)e=(e=s()("".concat(l[i]).concat(c[i]).concat(d[i]))).toString(),n[i]=e,5!==i&&(l[i+1]=e);g(n),u(l),w(c)}Object(l.useEffect)((function(){for(var e=["0000000000000000000000000000000000000000000000000000000000000000"],a=[],t=[],n=0;n<6;n++){for(var r=0,o=void 0;"0000"!==(o=s()(e[n]+r+"").toString()).slice(0,4);)r++;a[n]=o,t[n]=r,5!==n&&(e[n+1]=o)}g(a),w(t),u(e),x(!1)}),[]);for(var S=[],M=0;M<6;M++)S.push(i.a.createElement(_,{previousHash:r[M],currentHash:C[M],dataValue:d[M],Nonce:O[M],onUpdateDataValue:A,blockIndex:M,key:M,onMineClicked:H}));return B?i.a.createElement(k.a,null):i.a.createElement("div",{className:p.a.container},i.a.createElement("h1",{className:p.a.Heading},a,":-"),i.a.createElement("div",{className:p.a.blockChainContainer},S))}},229:function(e,a,t){"use strict";var n=t(2),r=t(8);var o=t(0);t(9);function c(e,a){"function"===typeof e?e(a):e&&(e.current=a)}function l(e,a){return parseInt(e[a],10)||0}var i="undefined"!==typeof window?o.useLayoutEffect:o.useEffect,u={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},s=o.forwardRef((function(e,a){var t,s,f=e.onChange,b=e.rows,d=e.rowsMax,h=e.rowsMin,m=void 0===h?1:h,v=e.style,C=e.value,_=function(e,a){if(null==e)return{};var t,n,o=Object(r.a)(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["onChange","rows","rowsMax","rowsMin","style","value"]),k=b||m,g=o.useRef(null!=C).current,p=o.useRef(null),y=(t=a,s=p,o.useMemo((function(){return null==t&&null==s?null:function(e){c(t,e),c(s,e)}}),[t,s])),E=o.useRef(null),O=o.useRef(0),w=o.useState({}),N=w[0],j=w[1],B=o.useCallback((function(){var a=p.current,t=window.getComputedStyle(a),n=E.current;n.style.width=t.width,n.value=a.value||e.placeholder||"x","\n"===n.value.slice(-1)&&(n.value+=" ");var r=t["box-sizing"],o=l(t,"padding-bottom")+l(t,"padding-top"),c=l(t,"border-bottom-width")+l(t,"border-top-width"),i=n.scrollHeight-o;n.value="x";var u=n.scrollHeight-o,s=i;k&&(s=Math.max(Number(k)*u,s)),d&&(s=Math.min(Number(d)*u,s));var f=(s=Math.max(s,u))+("border-box"===r?o+c:0),b=Math.abs(s-i)<=1;j((function(e){return O.current<20&&(f>0&&Math.abs((e.outerHeightStyle||0)-f)>1||e.overflow!==b)?(O.current+=1,{overflow:b,outerHeightStyle:f}):e}))}),[d,k,e.placeholder]);o.useEffect((function(){var e=function(e){var a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function n(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var c=this,l=function(){e.apply(c,r)};clearTimeout(a),a=setTimeout(l,t)}return n.clear=function(){clearTimeout(a)},n}((function(){O.current=0,B()}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[B]),i((function(){B()})),o.useEffect((function(){O.current=0}),[C]);return o.createElement(o.Fragment,null,o.createElement("textarea",Object(n.a)({value:C,onChange:function(e){O.current=0,g||B(),f&&f(e)},ref:y,rows:k,style:Object(n.a)({height:N.outerHeightStyle,overflow:N.overflow?"hidden":null},v)},_)),o.createElement("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:E,tabIndex:-1,style:Object(n.a)(Object(n.a)({},u),v)}))}));a.a=s},83:function(e,a){},84:function(e,a){},87:function(e,a){},88:function(e,a){}}]);
//# sourceMappingURL=5.88fbe39a.chunk.js.map