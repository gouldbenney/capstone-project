(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(0),i=c.n(s),n=c(10),r=c.n(n),l=(c(81),c(11)),o=(c(82),c(62)),j=c.n(o),d=c(63),b=c.n(d),u=(c(83),c(22)),m=Object(s.createContext)(),h=function(e){var t=e.reducer,c=e.initialState,i=e.children;return Object(a.jsx)(m.Provider,{value:Object(s.useReducer)(t,c),children:i})},O=function(){return Object(s.useContext)(m)};var p=function(){var e=O(),t=Object(l.a)(e,2),c=t[0].basket,s=t[1];return console.log("my basket",c),Object(a.jsxs)("nav",{className:"header",children:[Object(a.jsx)(u.b,{to:"login",children:Object(a.jsx)("img",{className:"header__logo",alt:"logo",src:"/images/img2.jpeg"})}),Object(a.jsxs)("div",{className:"header__search",children:[Object(a.jsx)("input",{type:"text",className:"header__searchInput"}),Object(a.jsx)(j.a,{className:"header__searchIcon"})]}),Object(a.jsxs)("div",{className:"header__nav",children:[Object(a.jsx)(u.b,{to:!s&&"/login",className:"header__link",children:Object(a.jsxs)("div",{onClick:function(){},className:"header__option",children:[Object(a.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",null===s||void 0===s?void 0:s.email]}),Object(a.jsxs)("span",{className:"header__optionLineTwo",children:[s?"Sign Out":"Sign in"," "]})]})}),Object(a.jsx)(u.b,{to:"/",className:"header__link",children:Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Returns "}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"& Orders "})]})})]}),Object(a.jsx)(u.b,{to:"/checkout",className:"header__link",children:Object(a.jsxs)("div",{className:"header__optionBasket",children:[Object(a.jsx)(b.a,{}),Object(a.jsx)("span",{className:"header__productCount",children:null===c||void 0===c?void 0:c.length})]})})]})},g=c(12),x=c(143),v=c(140),_=c(144),f=c(142),N=c(146),k=(c(137),c(141)),S=c(145),C=c(66),y=c(138),w=c(139);var A=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)(""),r=Object(l.a)(n,2),o=r[0],j=r[1],d=Object(s.useState)(""),b=Object(l.a)(d,2),u=b[0],m=b[1],h=Object(s.useState)(""),O=Object(l.a)(h,2),p=O[0],A=O[1],T=Object(s.useState)(""),E=Object(l.a)(T,2),L=(E[0],E[1]),P=Object(g.f)(),B=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));return Object(a.jsxs)(w.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(v.a,{}),Object(a.jsxs)("div",{className:B.paper,children:[Object(a.jsx)(C.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(a.jsxs)("form",{className:B.form,noValidate:!0,children:[Object(a.jsxs)(k.a,{container:!0,spacing:2,children:[Object(a.jsx)(k.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(_.a,{autoComplete:"fname",value:c,name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:function(e){i(e.target.value)}})}),Object(a.jsx)(k.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(_.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",value:p,label:"Last Name",name:"lastName",autoComplete:"lname",onChange:function(e){A(e.target.value)}})}),Object(a.jsx)(k.a,{item:!0,xs:12,children:Object(a.jsx)(_.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",value:o,label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){j(e.target.value)}})}),Object(a.jsx)(k.a,{item:!0,xs:12,children:Object(a.jsx)(_.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",value:u,label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){m(e.target.value)}})}),Object(a.jsx)(k.a,{item:!0,xs:12,children:Object(a.jsx)(f.a,{control:Object(a.jsx)(N.a,{value:"allowExtraEmails",color:"primary"})})})]}),Object(a.jsx)(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:B.submit,onClick:function(e){if(e.preventDefault(),c&&p&&o&&u){var t={firstName:c,lastName:p,email:o,password:u},a=localStorage.getItem("users"),s=a?JSON.parse(a):{};s[c]=t,localStorage.setItem("users",JSON.stringify(s)),L("Successfully Signed up..You will be redirected to login page"),setTimeout((function(){P.push("/login")}),3e3)}else L("Invalid input")},children:"Sign Up"}),Object(a.jsx)(k.a,{container:!0,justify:"flex-end",children:Object(a.jsx)(k.a,{item:!0})})]})]}),Object(a.jsx)(S.a,{mt:5})]})};c(90);var T=function(e){var t=e.handleLoginstate,c=Object(s.useState)(""),i=Object(l.a)(c,2),n=i[0],r=i[1],o=Object(s.useState)(""),j=Object(l.a)(o,2),d=(j[0],j[1]),b=Object(s.useState)(""),m=Object(l.a)(b,2),h=m[0],O=m[1],p=Object(g.f)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"Login",children:[Object(a.jsx)(u.b,{to:"/",children:Object(a.jsx)("img",{className:"Login__logo",alt:"logo",src:"/images/img2.jpeg"})}),Object(a.jsxs)("div",{className:"Login__container",children:[Object(a.jsx)("h1",{children:"Sign In"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("h5",{children:"E-mail"}),Object(a.jsx)("input",{type:"email",value:n,onChange:function(e){r(e.target.value)}}),Object(a.jsx)("h5",{children:"Password"}),Object(a.jsx)("input",{type:"password",value:h,onChange:function(e){O(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"submit",className:"Login__signInButton",onClick:function(e){e.preventDefault();var c=JSON.parse(localStorage.getItem("users"));if(console.log(c),null!==c){var a=c.Gould.email,s=c.Gould.password;console.log(s),n===a&&h===s?(t(!0,a),p.push("/")):d("Wrong email or password")}else d("Unknown user..Signup")},children:" Sign In "})]}),Object(a.jsx)("p",{children:"By signing in, you agree to Aurum Market's terms and conditions"}),Object(a.jsxs)("button",{className:"login__registerButton",children:[" ",Object(a.jsx)(u.b,{to:"/signup",children:" "}),"New? Create your Aurum Market Account Here"]})]})]})})};c(91);var E=function(e){var t=e.id,c=e.title,s=e.image,i=e.price,n=e.rating,r=O(),o=Object(l.a)(r,2),j=o[0].basket,d=o[1];return console.log("basket content",j),Object(a.jsxs)("div",{className:"product",children:[Object(a.jsx)("button",{onClick:function(){d({type:"ADD_TO_BASKET",item:{id:t,title:c,image:s,price:i,rating:n}})},children:"Add to Basket"}),Object(a.jsxs)("div",{className:"product__info",children:[Object(a.jsx)("p",{children:c}),Object(a.jsxs)("p",{className:"product__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:i})]}),Object(a.jsx)("div",{className:"product__rating",children:Array(n).fill().map((function(e){return Object(a.jsx)("p",{className:"rating",children:"*"})}))})]}),Object(a.jsx)("img",{src:s,alt:""})]})};c(92);var L=function(){return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)("img",{className:"home__image",alt:"logo",src:"/images/img.png"}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(E,{id:"1277",title:"Plantain",price:2,rating:5,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUVFGpjLnN3wP6nAtJOCN9bLx6yA_wT24-g&usqp=CAU"}),Object(a.jsx)(E,{id:"1275",title:"Chili Pepper",price:.5,rating:5,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKjTuOsWrly-i1Xv4DMwFdlGQUn45ylmIXA&usqp=CAU"})]}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(E,{id:"1273",title:"Tomatoes",price:1,rating:4,image:"http://react.pixelstrap.com/assets/images/vegetables/pro/6.jpg"}),Object(a.jsx)(E,{id:"1274",title:"Carrots",price:2,rating:5,image:"http://react.pixelstrap.com/assets/images/vegetables/pro/10.jpg"}),Object(a.jsx)(E,{id:"1275",title:"Cocoyam",price:2.5,rating:5,image:"https://zippgrocery.com/wp-content/uploads/2020/05/cocoyam-root.png"})]}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(E,{id:"1274",title:"Cabbage",price:1,rating:5,image:"http://react.pixelstrap.com/assets/images/vegetables/pro/2.jpg"}),Object(a.jsx)(E,{id:"1272",title:"Yam",price:1,rating:5,image:"https://www.allnigerianrecipes.com/wp-content/uploads/2019/04/yam-tuber.jpg"})]}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(E,{id:"1270",title:"Cucumber",price:.5,rating:4,image:"http://react.pixelstrap.com/assets/images/vegetables/pro/5.jpg"}),Object(a.jsx)(E,{id:"1276",title:"Onions",price:1,rating:5,image:"http://react.pixelstrap.com/assets/images/vegetables/pro/3.jpg"}),Object(a.jsx)(E,{id:"1271",title:"Aubergine",price:2,rating:4,image:"http://react.pixelstrap.com/assets/images/vegetables/pro/4.jpg"})]}),Object(a.jsx)("div",{className:"home__row",children:Object(a.jsx)(E,{id:"1277",title:"Honey",price:5,rating:5,image:"https://5.imimg.com/data5/SELLER/Default/2020/10/CR/SW/PU/113141986/61774z6mkpl-sx679--500x500.jpg"})})]})},P=(c(93),c(64)),B=c.n(P),F=(c(95),c(55)),I=c(33),R=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},D=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(I.a)(Object(I.a)({},e),{},{user:t.user});case"ADD_TO_BASKET":return Object(I.a)(Object(I.a)({},e),{},{basket:[].concat(Object(F.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=Object(F.a)(e.basket),a=e.basket.findIndex((function(e){return e.id===t.id}));return a>=0&&c.splice(a,1),Object(I.a)(Object(I.a)({},e),{},{basket:c});default:return e}};var M=function(){var e=O(),t=Object(l.a)(e,2),c=t[0].basket;return t[1],Object(a.jsxs)("div",{className:"subtotal",children:[Object(a.jsx)(B.a,{renderText:function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(a.jsx)("strong",{children:"".concat(e)})]})})},decimalScale:2,value:R(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(a.jsx)("button",{children:"Proceed to Checkout"})]})};c(96);var U=function(e){var t=e.id,c=e.title,s=e.image,i=e.price,n=e.rating,r=O(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]);return console.log(t,c,s,i,n),Object(a.jsxs)("div",{className:"checkoutProduct",children:[Object(a.jsx)("img",{className:"checkoutProduct__image",src:s,alt:""}),Object(a.jsxs)("div",{className:"checkoutProduct__info",children:[Object(a.jsx)("p",{className:"checkoutProduct__title",children:c}),Object(a.jsx)("p",{className:"checkoutProduct__price"}),Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:i}),Object(a.jsx)("div",{className:"checkoutProduct__rating",children:Array(n).fill().map((function(e,t){return Object(a.jsx)("p",{children:"*"})}))}),Object(a.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from basket"})]})]})};var G=function(){var e=O(),t=Object(l.a)(e,1)[0].basket;return Object(a.jsxs)("div",{className:"checkout",children:[Object(a.jsxs)("div",{className:"checkout__left",children:[Object(a.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),0===(null===t||void 0===t?void 0:t.length)?Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket is empty"}),Object(a.jsx)("p",{children:'You have no items in your basket Click "Add to basket" to add an item.'})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket"}),t.map((function(e){return Object(a.jsx)(U,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),t.length>0&&Object(a.jsx)("div",{className:"checkout__right",children:Object(a.jsx)(M,{})})]})};c(97);var W=function(){return Object(a.jsx)("div",{className:"footerarea",children:Object(a.jsxs)("div",{className:"footerarea__top",children:[Object(a.jsx)("a",{className:"link__one",href:"#top",children:"Back to Top"}),Object(a.jsx)("h5",{children:"Contact: 0249255208"}),Object(a.jsx)("h5",{children:"Email: aurumfoodsgh@gmail.com"}),Object(a.jsx)("h5",{children:"Instagram: Aurum FoodsGH"}),Object(a.jsx)("h5",{children:"Facebook: Aurum FoodsGh"})]})})};var q=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)(""),r=Object(l.a)(n,2),o=r[0],j=r[1];return Object(a.jsx)(u.a,{children:Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)(g.c,{children:[Object(a.jsxs)(g.a,{path:"/checkout",children:[Object(a.jsx)(p,{}),Object(a.jsx)(G,{})]}),Object(a.jsx)(g.a,{path:"/login",children:Object(a.jsx)(T,{handleLoginstate:function(e,t){i(e),j(t)}})}),Object(a.jsx)(g.a,{path:"/signup",children:Object(a.jsx)(A,{})}),Object(a.jsxs)(g.a,{path:"/",children:[Object(a.jsx)(p,{}),Object(a.jsx)(L,{isLogin:c,firstName:"object"===typeof o?o.firstName:null}),Object(a.jsx)(W,{})]})]})})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,149)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),i(e),n(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(h,{initialState:{basket:[],user:null},reducer:D,children:Object(a.jsx)(q,{})})}),document.getElementById("root")),J()}},[[98,1,2]]]);
//# sourceMappingURL=main.0952835d.chunk.js.map