(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(3),l=a.n(s),o=a(1),r=(a(10),a(11),a(12),a(4)),m=a.n(r),u=function(e){var t=e.post,a=t.title,s=t.userId,l=t.id,r=e.setSelectedPostId,u=e.selectedPostId,i=Object(n.useState)(!1),d=Object(o.a)(i,2),p=d[0],f=d[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("b",null,"[User #".concat(s,"]: ")),a),c.a.createElement("button",{type:"button",className:m()("PostsList__button button",{active:l===u}),onClick:function(){p?(f(!1),r(0)):(f(!0),r(l))}},p?"Close":"Open"))};u.defaultProps={post:[],selectedPostId:0};var i=function(e,t){return fetch("".concat("https://mate-api.herokuapp.com/").concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status));return e.json()}))},d=function(e){return"0"===e?i("posts").then((function(e){return e.data})):i("posts").then((function(t){return t.data.filter((function(t){return t.userId===Number(e)}))}))},p=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),s=a[0],l=a[1],r=e.userId,m=e.setSelectedPostId,i=e.selectedPostId;return Object(n.useEffect)((function(){d(r).then((function(e){return l(e)}))}),[]),Object(n.useEffect)((function(){d(r).then((function(e){return l(e)}))}),[r]),c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},s.length>0?s.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostsList__item"},c.a.createElement(u,{post:e,setSelectedPostId:m,selectedPostId:i}))})):"no posts"))};p.defaultProps={userId:"",selectedPostId:0};a(13),a(14);var f=function(){return c.a.createElement("form",{className:"NewCommentForm"},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input"})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input"})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input"})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))},E=function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),s=a[0],l=a[1],r=Object(n.useState)(null),m=Object(o.a)(r,2),u=m[0],d=m[1],p=Object(n.useState)(!0),E=Object(o.a)(p,2),b=E[0],_=E[1],h=e.selectedPostId;return Object(n.useEffect)((function(){var e;h&&(e=h,i("posts/".concat(e)).then((function(e){return e.data}))).then((function(e){return l(e)})),function(e){return i("comments").then((function(t){return t.data.filter((function(t){return t.postId===e}))}))}(h).then((function(e){d(e)}))}),[h]),c.a.createElement("div",{className:"PostDetails"},h&&s?c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,s.title)),c.a.createElement("section",{className:"PostDetails__comments"},c.a.createElement("button",{type:"button",className:"button",onClick:function(){return _((function(e){return!e}))}},b?"Hide comments":"Show comments"),b&&c.a.createElement("ul",{className:"PostDetails__list"},u.length>0?u.map((function(e){return c.a.createElement("li",{className:"PostDetails__list-item",key:e.id},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button"},"X"),c.a.createElement("p",null,e.body))})):"No comments")),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(f,null)))):"Select post")},b=function(){var e=Object(n.useState)("0"),t=Object(o.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(0),r=Object(o.a)(l,2),m=r[0],u=r[1];return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",onChange:function(e){return s(e.target.value)}},c.a.createElement("option",{value:"0"},"All users"),c.a.createElement("option",{value:"1"},"Leanne Graham"),c.a.createElement("option",{value:"2"},"Ervin Howell"),c.a.createElement("option",{value:"3"},"Clementine Bauch"),c.a.createElement("option",{value:"4"},"Patricia Lebsack"),c.a.createElement("option",{value:"5"},"Chelsey Dietrich"),c.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),c.a.createElement("option",{value:"7"},"Kurtis Weissnat"),c.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),c.a.createElement("option",{value:"9"},"Glenna Reichert"),c.a.createElement("option",{value:"10"},"Leanne Graham")))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(p,{userId:a,setSelectedPostId:u,selectedPostId:m})),c.a.createElement("div",{className:"App__content"},c.a.createElement(E,{selectedPostId:m}))))};l.a.render(c.a.createElement(b,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.91783627.chunk.js.map