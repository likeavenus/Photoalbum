(this.webpackJsonpphotoalbum=this.webpackJsonpphotoalbum||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={popup:"styles_popup__2nsB8",closePopup:"styles_closePopup__OOVOw"}},,,function(e,t,n){e.exports={container:"styles_container__WhCd4"}},function(e,t,n){e.exports={card:"styles_card__dkfTq"}},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(2),o=n.n(a),i=n(12),r=n.n(i),s=(n(21),n(10)),u=n.n(s),l=n(13),p=n(7),f=(n(23),n(14)),b=n.n(f),j=n(15),d=n.n(j),m=function(e){var t=e.imgUrl,n=e.description,a=e.openCard;return Object(c.jsxs)("div",{className:d.a.card,onClick:a,children:[Object(c.jsx)("img",{src:t}),Object(c.jsx)("p",{children:n})]})},O=n(11),h=n.n(O),g=function(e){var t=e.imgUrl,n=e.closeCard,o=Object(a.useCallback)((function(e){"DIV"===e.target.tagName&&n()}),[n]),i=Object(a.useCallback)((function(e){"Escape"===e.key&&n()}),[n]);return Object(a.useEffect)((function(){return document.addEventListener("keydown",i,!1),function(){return document.removeEventListener("keydown",i,!1)}})),Object(c.jsxs)("div",{className:h.a.popup,onClick:o,children:[Object(c.jsx)("img",{src:t}),Object(c.jsx)("button",{className:h.a.closePopup,onClick:n,children:"X"})]})},x=n(5),v=(n(9),function(e){var t=Object(a.useState)({isActive:!1,item:null}),n=Object(p.a)(t,2),o=n[0],i=n[1];return Object(c.jsxs)("section",{className:b.a.container,children:[o.isActive&&Object(c.jsx)(g,{imgUrl:e.photos.find((function(e){return e===o.item})),closeCard:function(){i({isActive:!1,item:null})}}),e.photos.map((function(e,t){return Object(c.jsx)(m,{imgUrl:e,openCard:function(){return function(e){i({isActive:!0,item:e})}(e)}},t)}))]})}),C=(n(25),function(e){return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(c.jsx)("h3",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e"}),Object(c.jsx)("input",{type:"file",onChange:e.onInputChange,ref:e.fileInput}),Object(c.jsx)("button",{onClick:e.onButtonClick,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),e.uploadingState&&Object(c.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"})]})});var k=function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(!1),r=Object(p.a)(i,2),s=(r[0],r[1]),f=Object(a.useState)(!1),b=Object(p.a)(f,2),j=b[0],d=b[1],m=Object(a.useRef)(null),O=Object(a.useState)([]),h=Object(p.a)(O,2),g=h[0],k=h[1],S=x.a.storage().ref(),y=S.child("images/"),E={contentType:"image/jpeg"},w=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.listAll();case 2:return t=e.sent,n=t.items,e.abrupt("return",Promise.all(n.map((function(e){return e.getDownloadURL().then((function(e){return e}))}))));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=Object(a.useCallback)((function(e){o(null),o(e.target.files[0])}),[o]);return Object(a.useEffect)((function(){w().then((function(e){return k(e)}))}),[j]),console.log("=== RENDER ==="),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(C,{file:n,onInputChange:_,uploadingState:j,onButtonClick:function(){if(n){var e=S.child("images/".concat(n.name)).put(n,E);e.on(x.a.storage.TaskEvent.STATE_CHANGED,(function(){d(!0)}),(function(e){throw s(!0),new Error(e)}),(function(){e.snapshot.ref.getDownloadURL().then((function(e){console.log("File available at",e),d(!1),o(null),m.current.parentElement.reset()}))}))}},fileInput:m}),Object(c.jsx)(v,{photos:g})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};x.a.apps.length||x.a.initializeApp({apiKey:"AIzaSyDcymeDWgOcaAsXDfY9SBZhmOn7744xERM",authDomain:"album-c5591.firebaseapp.com",databaseURL:"https://album-c5591-default-rtdb.europe-west1.firebasedatabase.app",projectId:"album-c5591",storageBucket:"album-c5591.appspot.com",messagingSenderId:"48004309131",appId:"1:48004309131:web:36c50ce064fce365dff48e",measurementId:"G-SF3RGPJQPJ"}),r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),S()}],[[26,1,2]]]);
//# sourceMappingURL=main.21d19ff2.chunk.js.map