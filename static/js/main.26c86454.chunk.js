(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(3),l=a.n(s),o=a(1),r=c.a.createContext({selectedPostId:0,setSelectedPostId:function(){},userId:"0",setUserId:function(){},detailsLoader:!1,setDetailsLoader:function(){}}),u=function(e){var t=e.children,a=Object(n.useState)("0"),s=Object(o.a)(a,2),l=s[0],u=s[1],m=Object(n.useState)(0),i=Object(o.a)(m,2),d=i[0],p=i[1],f=Object(n.useState)(!1),E=Object(o.a)(f,2),b={userId:l,setUserId:u,selectedPostId:d,setSelectedPostId:p,detailsLoader:E[0],setDetailsLoader:E[1]};return c.a.createElement(r.Provider,{value:b},t)},m=(a(10),a(11),a(12),a(4)),i=a.n(m),d=function(e){var t=e.post,a=t.title,s=t.userId,l=t.id,o=Object(n.useContext)(r),u=o.selectedPostId,m=o.setSelectedPostId,d=o.setDetailsLoader;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("b",null,"[User #".concat(s,"]: ")),a),c.a.createElement("button",{type:"button",className:i()("PostsList__button button",{active:l===u}),onClick:function(){u===l?m(0):(d(!0),m(l))}},u===l?"Close":"Open"))};d.defaultProps={post:[]};var p=function(e,t){return fetch("".concat("https://mate-api.herokuapp.com/").concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status));return e.json()}))},f=function(e){return p("comments").then((function(t){return t.data.filter((function(t){return t.postId===e}))}))},E=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),s=a[0],l=a[1],u=Object(n.useContext)(r).userId;return Object(n.useEffect)((function(){(function(e){return"0"===e?p("posts").then((function(e){return e.data})):p("posts").then((function(t){return t.data.filter((function(t){return t.userId===Number(e)}))}))})(u).then((function(e){return l(e)}))}),[u]),c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},s.length>0?s.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostsList__item"},c.a.createElement(d,{post:e}))})):"no posts"))},b=(a(13),a(14),function(){return c.a.createElement("div",{className:"Loader"},c.a.createElement("div",{className:"Loader__content"}))}),v=(a(15),function(e){var t=e.selectedPostId,a=e.setComments,s=Object(n.useState)(""),l=Object(o.a)(s,2),u=l[0],m=l[1],i=Object(n.useState)(""),d=Object(o.a)(i,2),E=d[0],b=d[1],v=Object(n.useState)(""),h=Object(o.a)(v,2),_=h[0],N=h[1],j=Object(n.useContext)(r).setDetailsLoader;return c.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){var n,c;e.preventDefault(),_&&(j(!0),(n="comments",c={postId:t,name:u,email:E,body:_},p(n,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(c)})).then((function(){f(t).then((function(e){a(e),j(!1)}))}))),m(""),b(""),N("")}},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",value:u,className:"NewCommentForm__input",onChange:function(e){return m(e.target.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",onChange:function(e){return b(e.target.value)},value:E})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",onChange:function(e){return N(e.target.value)},value:_})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),h=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(null),u=Object(o.a)(l,2),m=u[0],i=u[1],d=Object(n.useState)(!0),E=Object(o.a)(d,2),h=E[0],_=E[1],N=Object(n.useContext)(r),j=N.selectedPostId,O=N.detailsLoader,P=N.setDetailsLoader;Object(n.useEffect)((function(){var e;j&&Promise.all([(e=j,p("posts/".concat(e)).then((function(e){return e.data}))),f(j)]).then((function(e){var t=Object(o.a)(e,2),a=t[0],n=t[1];i(n),s(a),P(!1)}))}),[j,P]);var C=function(e){var t;P(!0),(t="comments/".concat(e),p(t,{method:"DELETE",headers:{"Content-Type":"application/json; charset=utf-8"}})).then((function(){f(j).then((function(e){i(e),P(!1)}))}))};return c.a.createElement(c.a.Fragment,null,O?c.a.createElement(b,null):c.a.createElement("div",{className:"PostDetails"},a&&j?c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,a.title)),c.a.createElement("section",{className:"PostDetails__comments"},c.a.createElement("button",{type:"button",className:"button",onClick:function(){return _((function(e){return!e}))}},h?"Hide comments":"Show comments"),h&&c.a.createElement("ul",{className:"PostDetails__list"},m.length>0?m.map((function(e){return c.a.createElement("li",{className:"PostDetails__list-item",key:e.id},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return C(e.id)}},"X"),c.a.createElement("p",null,e.body))})):"No comments")),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(v,{selectedPostId:j,setComments:i})))):c.a.createElement("span",{className:"select-post"},"Select post")))},_=function(){var e=Object(n.useContext)(r),t=e.userId,a=e.setUserId;return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",value:t,onChange:function(e){return a(e.target.value)}},c.a.createElement("option",{value:"0"},"All users"),c.a.createElement("option",{value:"1"},"Leanne Graham"),c.a.createElement("option",{value:"2"},"Ervin Howell"),c.a.createElement("option",{value:"3"},"Clementine Bauch"),c.a.createElement("option",{value:"4"},"Patricia Lebsack"),c.a.createElement("option",{value:"5"},"Chelsey Dietrich"),c.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),c.a.createElement("option",{value:"7"},"Kurtis Weissnat"),c.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),c.a.createElement("option",{value:"9"},"Glenna Reichert"),c.a.createElement("option",{value:"10"},"Leanne Graham")))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(E,null)),c.a.createElement("div",{className:"App__content"},c.a.createElement(h,null))))};l.a.render(c.a.createElement(u,null,c.a.createElement(_,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.26c86454.chunk.js.map