(this["webpackJsonpchuck-norris-jokes"]=this["webpackJsonpchuck-norris-jokes"]||[]).push([[0],{20:function(e,a,t){e.exports=t(50)},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},4:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFPSURBVHgB1ZRPToNAFMbf0FmwxBvgEXoCewS6gISwqHMC7QmsJ1BPgK4IYUE9QT0CR5ieQDew4Z/fS8RYg7TCql9CXuYN+b1vZt6MSNPUrqoqJKIFTZAQ4nk2m93Luq7v2ra1GIiEphEC4wIhZGMSsOuyLOdBEGQ0XvskSdaIO4NHpmm+00TBneYo+yZR7QHOnSEA9mzruu76d74XCNgLwpaGHe378vKP6hagNg1ISikQ9ElAaAHoFQ2Il4zwdhIQe7OhkTrTQ/E8799Njl62UIS4sbOmaW5pogBzsDItsF98oimgGnkNd8vupziOHcMwbo7B+C0AwwZDcS9RFEU2+mrF9xrAS7xAFi78BuMVph+/ig2qKIpXpdSH6BLsFIAQlRS+kO1jGcr3/aOwnzo4FLaNsOM9hdMnGqEDILtCWI455U7GN1nKLM/z+RQY6xMXo62jSfmRhAAAAABJRU5ErkJggg=="},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},5:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGBSURBVHgBpVTBccJADJSODDP+UYJLIBUQKgh0AA9sfnEqMFQA/DA8QiqADuIO4hJIBeEFL6zsCcMYgp0JaEZ3try3tyfJx5SZ9PsuibzgsQW3zxtiXsGHPJ2uc5gQ3kK8hpCNx3kMZ8AnStOlEqTpgqrVNWYX3tHFlUqAmfE+KsSINHk+T1h3TdNPAAccRRO6MHzvKJFuX4gJgQnImEcW339TbBR1qcB0AVJwjeyE8f0PTMkDhjrt9wMqMeRnSH+ZyAQnGBklZP6ie82YBKNrtJoiNbrftDMM1CVgb9C9JvJsuSyhzU8gQXCzSu0U278iC4OEx6pyt1vSrXZoq5hns3ejAcdpY3SPLfQvdZ63gKB6dtLDn3KSLWJ7KcYGrzweb0qJbIq22zGIGvDm2a93QXo4OnP7CPpFVoIzeaB+cJymqoTaLNnnZL1ePTtJYrFFm15TESKnghwFuVgH79/wsGgdl5J6nr3KbKEm6FVbTXu9dVHN1U2EmapjsSif/CL7Aa9l07g+34ypAAAAAElFTkSuQmCC"},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),i=t.n(c),o=t(8),s=t(2),l=(t(25),t(26),function(e){var a=e.categoriesList,t=e.chooseCategory;return r.a.createElement("div",{className:"categories"},a?a.map((function(e){return r.a.createElement("button",{className:"category",key:e.toString(),value:e,onClick:t},e)})):null)}),u=(t(27),function(e){var a=e.handleSearch;return r.a.createElement("div",null,r.a.createElement("input",{className:"search-input",placeholder:"Free text search...",onChange:a,type:"text"}))}),m=(t(28),function(e){var a=e.showCategories,t=e.showInput,n=e.handleSearch,c=e.handleRadio,i=e.chooseCategory,o=e.handleJoke,s=e.categoriesList;return r.a.createElement("div",null,r.a.createElement("form",{className:"form__inner",onSubmit:o},r.a.createElement("div",null,r.a.createElement("input",{onClick:c,name:"joke",id:"random",type:"radio",className:"radio-btn"}),r.a.createElement("label",{htmlFor:"random"},"Random")),r.a.createElement("div",null,r.a.createElement("input",{onClick:c,name:"joke",id:"category",type:"radio",className:"radio-btn"}),r.a.createElement("label",{htmlFor:"category"},"From categories")),r.a.createElement("div",null,a?r.a.createElement(l,{categoriesList:s,chooseCategory:i}):null,r.a.createElement("input",{onClick:c,name:"joke",id:"search",type:"radio",className:"radio-btn"}),r.a.createElement("label",{htmlFor:"search"},"Search")),t?r.a.createElement(u,{handleSearch:n}):null,r.a.createElement("button",{className:"submit-btn",type:"submit"},"Get a joke")))}),d=t(9),A=t.n(d),g=(t(46),t(4)),p=t.n(g),h=t(5),E=t.n(h),f=t(6),k=t.n(f),j=function(e){var a=e.jokes,t=e.isClicked,n=(e.search,e.handleLike),c=e.storage,i=e.handleDate;return r.a.createElement("div",null,void 0===a.value&&t?a.map((function(e){return r.a.createElement("div",{key:e.id,className:"joke"},r.a.createElement("div",{className:"joke__inner"},r.a.createElement("img",{className:"message",src:p.a,alt:"message"}),r.a.createElement("img",{className:"like",src:c&&c.find((function(a){return a.id===e.id}))?k.a:E.a,alt:"like",id:e.id,onClick:n}),r.a.createElement("p",{className:"joke__paragraph-id"},"ID: ",r.a.createElement("a",{href:"https://api.chucknorris.io/jokes/".concat(e.id)},e.id)),r.a.createElement("p",{className:"joke__paragraph-text"},e.value)),r.a.createElement("div",{className:"joke__footer"},r.a.createElement("p",{className:"joke__paragraph-update"},"Last update: ",i(e.updated_at)," hours ago"),e.categories[0]?r.a.createElement("p",{className:"joke__paragraph-category"},e.categories[0]):null))})):t?r.a.createElement("div",{className:"joke"},r.a.createElement("div",{className:"joke__inner"},r.a.createElement("img",{className:"message",src:p.a,alt:"message"}),r.a.createElement("img",{className:"like",src:c&&c.find((function(e){return e.id===a.id}))?k.a:E.a,alt:"like",id:a.id,onClick:n}),r.a.createElement("p",{className:"joke__paragraph-id"},"ID: ",r.a.createElement("a",{href:"https://api.chucknorris.io/jokes/".concat(a.id)},a.id)),r.a.createElement("p",{className:"joke__paragraph-text"},a.value)),r.a.createElement("div",{className:"joke__footer"},r.a.createElement("p",{className:"joke__paragraph-update"},"Last update: ",i(a.updated_at)," hours ago"),a.categories[0]?r.a.createElement("p",{className:"joke__paragraph-category"},a.categories[0]):null)):null)},v=(t(47),function(e){var a=e.handleLike,t=e.handleDate,n=e.storage;return r.a.createElement("div",null,r.a.createElement("h3",{className:"favourite-joke__header"},"Favourite"),n&&n[0]?n.map((function(e){return r.a.createElement("div",{className:"favourite-joke",key:e.id},r.a.createElement("div",{className:"favourite-joke__inner"},r.a.createElement("img",{className:"favourite-joke__message",src:p.a,alt:"message"}),r.a.createElement("img",{className:"favourite-joke__heart",src:n.find((function(a){return a.id===e.id}))?k.a:E.a,id:e.id,onClick:a,alt:"like"}),r.a.createElement("p",{className:"favourite-joke__paragraph-id"},"ID: ",r.a.createElement("a",{href:"https://api.chucknorris.io/jokes/".concat(e.id)},e.id)),r.a.createElement("p",{className:"favourite-joke__paragraph-text"},e.value)),r.a.createElement("div",{className:"favourite-joke__footer"},r.a.createElement("p",{className:"favourite-joke__paragraph-update"},"Last update: ",t(e.updated_at)," hours ago"),r.a.createElement("p",{className:"favourite-joke__paragraph-category"},e.categories[0]?e.categories[0]:null)))})):r.a.createElement("p",{className:"favourite-joke__paragraph-null"},"No favourite jokes yet"))}),N=(t(48),function(){return r.a.createElement("div",null,r.a.createElement("h3",{className:"logo"},"MSI 2020"),r.a.createElement("h1",null,"Hey!"),r.a.createElement("h2",null,"Let's try to find a joke for you:"))}),S=(t(49),function(e){var a=e.handleHamburger,t=e.isHamburgerClicked;return r.a.createElement("div",{className:"hamburger",onClick:a},r.a.createElement("div",{className:t}),r.a.createElement("div",{className:t}))}),b=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)(!1),l=Object(s.a)(i,2),u=l[0],d=l[1],g=Object(n.useState)(!1),p=Object(s.a)(g,2),h=p[0],E=p[1],f=Object(n.useState)(""),k=Object(s.a)(f,2),b=k[0],O=k[1],C=Object(n.useState)(""),w=Object(s.a)(C,2),I=w[0],_=w[1],Q=Object(n.useState)(""),B=Object(s.a)(Q,2),y=B[0],L=B[1],R=Object(n.useState)(!1),D=Object(s.a)(R,2),U=D[0],F=D[1],J=Object(n.useState)([]),T=Object(s.a)(J,2),x=T[0],M=T[1],X=Object(n.useState)([]),z=Object(s.a)(X,2),Y=z[0],G=z[1],H=Object(n.useState)("favourite"),K=Object(s.a)(H,2),q=K[0],P=K[1],Z=Object(n.useState)("line"),V=Object(s.a)(Z,2),W=V[0],$=V[1],ee=JSON.parse(localStorage.getItem("isLiked"));Object(n.useEffect)((function(){A.a.get("https://api.chucknorris.io/jokes/categories").then((function(e){return G(e.data)}))}),[]);var ae=function(e){var a=Object(o.a)(x),t=b[1]?b.findIndex((function(a){return a.id===e.target.id})):null,n=ee?ee.findIndex((function(a){return a.id===e.target.id})):a.findIndex((function(a){return a.id===e.target.id}));-1!==n?((a=ee).splice(n,1),M(a),localStorage.setItem("isLiked",JSON.stringify(a))):(a=ee||x,localStorage.setItem("isLiked",JSON.stringify([].concat(Object(o.a)(a),[b[1]?b.slice(t,t+1)[0]:b]))),M([].concat(Object(o.a)(a),[b[1]?b.slice(t,t+1)[0]:b])))},te=function(e){return Math.round((Date.now()-Date.parse(e))/36e5)};(function(){var e="object"===typeof window,a=function(){return{width:e?window.innerWidth:void 0}},t=Object(n.useState)(a),r=Object(s.a)(t,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){if(!e)return!1;var t=function(){i(a())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}})),c})().width>834&&"favourite"!==q&&(P("favourite"),$("line"));return r.a.createElement("div",{className:"app"},r.a.createElement(S,{isHamburgerClicked:W,handleHamburger:function(){P("favourite"===q?"hidden":"favourite"),$("line"===W?"clicked":"line")}}),r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"container"},r.a.createElement(N,null),r.a.createElement(m,{categoriesList:Y,showCategories:t,showInput:u,handleSearch:function(e){L(e.target.value)},handleRadio:function(e){"random"===e.target.id?(c(!1),d(!1),E(!0)):"category"===e.target.id?(c(!0),d(!1),E(!1)):"search"===e.target.id&&(c(!1),d(!0),E(!1))},chooseCategory:function(e){e.preventDefault(),_(e.target.value)},handleJoke:function(e){var a=t?"https://api.chucknorris.io/jokes/random?category=".concat(I):u?"https://api.chucknorris.io/jokes/search?query=".concat(y):h?"https://api.chucknorris.io/jokes/random":null;e.preventDefault(),(h||t&&I||u&&y)&&A.a.get(a).then((function(e){O(u?e.data.result:e.data),F(!0)}))}}),r.a.createElement(j,{handleDate:te,storage:ee,handleLike:ae,jokes:b,isClicked:U,search:y}))),r.a.createElement("div",{className:q},r.a.createElement(v,{handleLike:ae,handleDate:te,storage:ee})))};i.a.render(r.a.createElement(b,null),document.getElementById("root"))},6:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEUSURBVHgBrZTdEQExFIXvDS/7pgQl0AEdrBK8GG90gAp4NDxYFdABHdgSlKCCjXMj2QmzP5acmczeuTn5svm5YbLS02mXtJ4hjNEkfhDzGW3F2+3d8yzQYuQ7SEn+6nvYGgeUZSdrepeAW605vgzPutSj9ZD3+5TNrFl2KzT6A8z0NR6l+m2zhCpjHcj3YMsUwh6FUxwa2FX5/oQQWAprTymUwBLgikJJ60ThQl5JLuf/Sni3OyoTRtGIXrf+V93dStllbFldSMquOWzoSk+5rEmgA2GTQ0p92Bswh0aRQDdfwBLx+jDDKHNjC+RVWRZ36iUOoPB2lALNuMlEnrJDXsuvIhgDdi4bUwm0f+oOiz73q0hP4Kp5q3x4BOQAAAAASUVORK5CYII="}},[[20,1,2]]]);
//# sourceMappingURL=main.529582c1.chunk.js.map