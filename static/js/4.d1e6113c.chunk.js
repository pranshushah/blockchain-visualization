(this.webpackJsonpblockchain=this.webpackJsonpblockchain||[]).push([[4],{187:function(a,e,t){"use strict";var n=t(35),r=t.n(n),o=t(36),i=t.n(o),s=(t(9),t(0)),c=t.n(s),u=t(60),l=t(188),m=t(189),p=t(34);function d(a){var e=a.children,t=a.className,n=a.content,o=a.fluid,s=a.text,b=a.textAlign,f=i()("ui",Object(u.a)(s,"text"),Object(u.a)(o,"fluid"),Object(u.c)(b),"container",t),h=Object(l.a)(d,a),v=Object(m.a)(d,a);return c.a.createElement(v,r()({},h,{className:f}),p.a.isNil(e)?n:e)}d.handledProps=["as","children","className","content","fluid","text","textAlign"],d.propTypes={},e.a=d},447:function(a,e,t){a.exports={blockChainContainer:"CoinbaseContainer_blockChainContainer__33_uv",container:"CoinbaseContainer_container__1jsaq",Heading:"CoinbaseContainer_Heading__112_H"}},448:function(a,e,t){a.exports={txAmount:"txBlock_txAmount__PooAj",txInputFrom:"txBlock_txInputFrom__-KI-y",txInputTo:"txBlock_txInputTo__wkH6l",paddingClass:"txBlock_paddingClass__25wqg"}},449:function(a,e,t){a.exports={Heading:"Coinbase_Heading__3RPKD",Root:"Coinbase_Root__cPWaD",Content:"Coinbase_Content__3-Rq8",TopDataContainer:"Coinbase_TopDataContainer__lfsnj",DataContainer:"Coinbase_DataContainer__2JN8a",txContainer:"Coinbase_txContainer__PU5fA",MainTxContainer:"Coinbase_MainTxContainer__1mw0W",NumberArea:"Coinbase_NumberArea__1CXE6",NonceArea:"Coinbase_NonceArea__2ahJj",PrevHashArea:"Coinbase_PrevHashArea__1mhNc",CoinbaseInput:"Coinbase_CoinbaseInput__1Vzb1",HashArea:"Coinbase_HashArea__2a2yx",Label:"Coinbase_Label__yxv4v",Mine:"Coinbase_Mine__1wCyR"}},461:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),o=t(187),i=t(87),s=t(56),c=t(57),u=[[{amount:"10",from:"pranshu",to:"mit"},{amount:"20",from:"pranshu",to:"saumya"},{amount:"15",from:"pranshu",to:"kartik"},{amount:"13",from:"pranshu",to:"sanket"}],[{amount:"11",from:"pranshu",to:"mit"},{amount:"15",from:"pranshu",to:"rusty"},{amount:"20",from:"pranshu",to:"harshit"},{amount:"10",from:"pranshu",to:"pranjal"},{amount:"10",from:"pranshu",to:"anish"}],[{amount:"22",from:"pujan",to:"harshit"},{amount:"10",from:"pujan",to:"semal"},{amount:"15",from:"pujan",to:"panthu"},{amount:"10",from:"harshit",to:"pranshu"},{amount:"10",from:"panthu",to:"mushi"}],[{amount:"15",from:"mit",to:"saumya"},{amount:"10",from:"mit",to:"darshil"},{amount:"20",from:"pranshu",to:"kuldip"},{amount:"40",from:"pranshu",to:"henil"},{amount:"15",from:"henil",to:"onkar"}]],l=[{amount:"100",to:"pranshu"},{amount:"100",to:"pranshu"},{amount:"100",to:"pujan"},{amount:"100",to:"mit"}],m=t(53),p=t.n(m),d=t(447),b=t.n(d),f=t(13),h=t(465),v=t(440),A=t(458),C=t(448),y=t.n(C);var N=function(a){var e=a.from,t=a.to,n=a.amount,o=a.txObj,i=a.blockIndex,s=a.onChangeInput,u=a.txIndex,l=[y.a.txInput,"fromInput",y.a.txInputFrom,y.a.paddingClass].join(" "),m=[y.a.txInput,"toInput",y.a.paddingClass,y.a.txInputTo].join(" "),p=[y.a.txAmount,"amountInput",y.a.paddingClass].join(" ");function d(a){if(a.target.parentElement.classList.contains("fromInput")){var e=Object(c.a)({},o,{from:a.target.value});s(e,i,u)}else if(a.target.parentElement.classList.contains("toInput")){var t=Object(c.a)({},o,{to:a.target.value});s(t,i,u)}else{var n=Object(c.a)({},o,{amount:a.target.value});s(n,i,u)}}return r.a.createElement("div",{style:{margin:"0px"}},r.a.createElement(A.a,{label:"$",className:p,value:n,onChange:d}),r.a.createElement(A.a,{label:"from",className:l,value:e,onChange:d}),r.a.createElement(A.a,{label:"to",className:m,value:t,onChange:d}))},_=t(462),g=t(449),O=t.n(g);var j=function(a){var e=a.previousHash,t=a.currentHash,o=a.txArray,i=a.Nonce,u=a.onTxChange,l=a.onCoinbaseChange,m=a.coinBaseObj,d=a.blockIndex,b=a.onMineClicked,f=a.dirty,C=Object(n.useState)(!1),y=Object(s.a)(C,2),g=y[0],j=y[1];Object(n.useEffect)((function(){if(g){for(var a,t=0;;){var n=e+t+JSON.stringify(o)+JSON.stringify(m);if("0000"===(a=p()(n).toString()).slice(0,4))break;t++}j(!1),b(a,t,d)}}),[g]);var x=[O.a.CoinbaseInput,"coinbaseAmountInput"].join(" "),E=[O.a.CoinbaseInput,"coinbaseToInput"].join(" ");function H(a){if(a.target.parentElement.classList.contains("coinbaseToInput")){var e=Object(c.a)({},m,{to:a.target.value});l(e,d)}else{var t=Object(c.a)({},m,{amount:a.target.value});l(t,d)}}var I=o.map((function(a,e){return r.a.createElement(N,{from:a.from,to:a.to,amount:a.amount,onChangeInput:u,txIndex:e,blockIndex:d,txObj:a,key:e})}));return r.a.createElement(h.a,{className:O.a.Root,variant:"outlined",style:{marginLeft:"7px",marginRight:"7px"}},r.a.createElement(v.a,{className:O.a.Content,style:{backgroundColor:f?"#FFBABA":"#90caf9"}},r.a.createElement("div",{className:O.a.TopDataContainer},r.a.createElement(A.a,{label:"Number",disabled:!0,className:O.a.NumberArea,value:d})),r.a.createElement("div",{className:O.a.DataContainer},r.a.createElement(A.a,{label:"Nonce",className:O.a.NonceArea,disabled:!0,value:i})),r.a.createElement("div",{className:O.a.DataContainer},r.a.createElement("label",{htmlFor:"$",className:O.a.Label},"Coinbase:"),r.a.createElement(A.a,{label:"$",className:x,onChange:H,value:m.amount}),r.a.createElement(A.a,{label:"->",onChange:H,className:E,value:m.to})),r.a.createElement("div",{className:O.a.txContainer},r.a.createElement("label",{htmlFor:"$",className:O.a.Label},"TX:"),r.a.createElement("div",{className:O.a.MainTxContainer},I)),r.a.createElement("div",{className:O.a.DataContainer},r.a.createElement(A.a,{label:"Prev-Hash",disabled:!0,className:O.a.PrevHashArea,value:e})),r.a.createElement("div",{className:O.a.DataContainer},r.a.createElement(A.a,{label:"Hash",disabled:!0,className:O.a.HashArea,value:t})),r.a.createElement(_.a,{className:O.a.Mine,secondary:!0,loading:g,size:"large",onClick:function(){j(!0)}},"Mine")))};function x(a,e){switch(e.type){case"MINING_ON_LOAD":return Object(c.a)({},a,{hashArr:e.payload.updatedHashArr,nonceArr:e.payload.updatedNonceArr,previousHashArray:e.payload.updatedPrevArr,pageLoading:!1});case"TX_CHANGEHANDLER":return Object(c.a)({},a,{hashArr:e.payload.updatedHashArr,previousHashArray:e.payload.updatedPrevArr,tx:e.payload.updatedTxArr});case"COINBASE_CHANGEHANDLER":return Object(c.a)({},a,{hashArr:e.payload.updatedHashArr,previousHashArray:e.payload.updatedPrevArr,coinbaseArr:e.payload.updatedCoinbaseArr});case"MINING":return Object(c.a)({},a,{hashArr:e.payload.updatedHashArr,nonceArr:e.payload.updatedNonceArr,previousHashArray:e.payload.updatedPrevArr});default:return a}}var E=function(a){var e=a.heading,t=Object(n.useReducer)(x,{previousHashArray:[],hashArr:[],nonceArr:[],tx:u,coinbaseArr:l,pageLoading:!0}),o=Object(s.a)(t,2),c=o[0],m=o[1],d=c.pageLoading,h=c.coinbaseArr,v=c.tx,A=c.nonceArr,C=c.hashArr,y=c.previousHashArray;function N(a,e,t){var n,r=Object(i.a)(v),o=Object(i.a)(C),s=Object(i.a)(y);r[e][t]=a;for(var c=e;c<4;c++){var u=s[c]+A[c]+JSON.stringify(r[c])+JSON.stringify(h[c]);n=p()(u).toString(),o[c]=n,3!==c&&(s[c+1]=n)}m({type:"TX_CHANGEHANDLER",payload:{updatedHashArr:o,updatedTxArr:r,updatedPrevArr:s}})}function _(a,e){var t,n=Object(i.a)(h),r=Object(i.a)(C),o=Object(i.a)(y);n[e]=a;for(var s=e;s<4;s++){var c=o[s]+A[s]+JSON.stringify(v[s])+JSON.stringify(n[s]);t=p()(c).toString(),r[s]=t,3!==s&&(o[s+1]=t)}m({type:"COINBASE_CHANGEHANDLER",payload:{updatedHashArr:r,updatedCoinbaseArr:n,updatedPrevArr:o}})}function g(a,e,t){var n=Object(i.a)(C),r=Object(i.a)(A),o=Object(i.a)(y);r[t]=e,n[t]=a,3!==t&&(o[t+1]=a);for(var s=t+1;s<4;s++){var c=o[s]+r[s]+JSON.stringify(v[s])+JSON.stringify(h[s]);a=p()(c).toString(),n[s]=a,3!==s&&(o[s+1]=a)}m({type:"MINING",payload:{updatedHashArr:n,updatedNonceArr:r,updatedPrevArr:o}})}Object(n.useEffect)((function(){for(var a=["0000000000000000000000000000000000000000000000000000000000000000"],e=[],t=[],n=u,r=l,o=0;o<4;o++){for(var i=0,s=void 0;;){var c=a[o]+i+JSON.stringify(n[o])+JSON.stringify(r[o]);if("0000"===(s=p()(c).toString()).slice(0,4))break;i++}e[o]=s,t[o]=i,3!==o&&(a[o+1]=s)}m({type:"MINING_ON_LOAD",payload:{updatedHashArr:e,updatedNonceArr:t,updatedPrevArr:a}})}),[]);for(var O=[],E=0;E<4;E++)O.push(r.a.createElement(j,{previousHash:y[E],currentHash:C[E],txArray:v[E],Nonce:A[E],dirty:!C[E]||!y[E]||"0000"!==C[E].slice(0,4)||"0000"!==y[E].slice(0,4),onTxChange:N,onCoinbaseChange:_,coinBaseObj:h[E],blockIndex:E,key:E,onMineClicked:g}));return d?r.a.createElement(f.a,null):r.a.createElement("div",{className:b.a.container},r.a.createElement("h1",{className:b.a.Heading},e,":-"),r.a.createElement("div",{className:b.a.blockChainContainer},O))};e.default=function(){var a=["Pranshu","Satoshi","Vitalik"].map((function(a,e){return r.a.createElement(E,{heading:"Peer ".concat(a),key:e})}));return r.a.createElement(o.a,null,a)}},57:function(a,e,t){"use strict";function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function o(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}t.d(e,"a",(function(){return o}))},74:function(a,e){},75:function(a,e){},77:function(a,e){},78:function(a,e){},87:function(a,e,t){"use strict";t.d(e,"a",(function(){return o}));var n=t(89);var r=t(88);function o(a){return function(a){if(Array.isArray(a))return Object(n.a)(a)}(a)||function(a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}(a)||Object(r.a)(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=4.d1e6113c.chunk.js.map