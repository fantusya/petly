"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[91],{8437:function(e,r,t){t.r(r),t.d(r,{default:function(){return S}});var n=t(5861),s=t(9439),a=t(4687),o=t.n(a),i=t(2791),c=t(9434),l=t(5705),u=t(9230),d=t(1898),h=t(5218),m=t(9273),p=t(319),x=t(3682),j=t(6727),f=j.Ry().shape({email:j.Z_().matches(/^(?=.{1,63}$)(?=.{2,}@)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,d.Z.t("email_match")).min(5,d.Z.t("at_least_five")).required(d.Z.t("required_field")),password:j.Z_().matches(/^\S+$/,d.Z.t("no_space")).min(7,d.Z.t("at_least_seven")).max(32,d.Z.t("max_tt")).required(d.Z.t("required_field")),confirm:j.Z_().oneOf([j.iH("password"),null],d.Z.t("Passwords_match")).required(d.Z.t("required_field"))}),Z=j.Ry().shape({name:j.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490]+(?: [a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490]+)*$/,d.Z.t("Only_cyrillic_latin")).required(d.Z.t("required_field")),city:j.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490]+(?:[-\s]?[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490]+)*,\s*[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490'\u2019\s-]+$/,"Should_City").required(d.Z.t("required_field"))}),y=t(3037),v=t(3997),_=t(1604),g=t(9001),w=t(3329),b=function(e){var r=(0,i.useState)(!1),t=(0,s.Z)(r,2),n=t[0],a=t[1],o=(0,i.useState)(!1),c=(0,s.Z)(o,2),l=c[0],d=c[1],h=(0,u.$G)().t;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_.ZP,{type:"email",name:"email",placeholder:h("Email"),errors:e.errors,touched:e.touched,values:e.values.email,required:!0,autoFocus:!0}),(0,w.jsx)(_.jj,{name:"email",component:"div"}),(0,w.jsxs)(v.ZC,{children:[(0,w.jsx)(_.ZP,{id:"password",name:"password",placeholder:h("Password"),type:n?"text":"password",errors:e.errors,touched:e.touched,values:e.values.password,required:!0}),(0,w.jsx)(v.yS,{type:"button",onClick:function(){a(!n)},children:n?(0,w.jsx)(v.rr,{}):(0,w.jsx)(v.OF,{})}),(0,w.jsx)(_.jj,{name:"password",component:"div"})]}),(0,w.jsxs)(v.ZC,{children:[(0,w.jsx)(_.ZP,{id:"confirm",type:l?"text":"password",name:"confirm",placeholder:h("Confirm_Password"),errors:e.errors,touched:e.touched,values:e.values.confirm,required:!0}),(0,w.jsx)(v.yS,{type:"button",onClick:function(){d(!l)},children:l?(0,w.jsx)(v.rr,{}):(0,w.jsx)(v.OF,{})}),(0,w.jsx)(_.jj,{name:"confirm",component:"div"})]}),(0,w.jsx)(_.zx,{type:"button",onClick:e.next,disabled:e.isValid,children:h("Next")}),(0,w.jsxs)(g.tw,{href:"https://petly-gd7x.onrender.com/api/users/google",children:[(0,w.jsx)(v.DW,{src:y.Z,alt:"Google"}),h("Signup_with_Google")]})]})},C=t(5737),k=t.n(C),q=(t(8404),{}),z=function(e){var r=(0,u.$G)().t;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_.ZP,{type:"text",name:"name",placeholder:r("Name"),errors:e.errors,touched:e.touched,values:e.values.name,required:!0}),(0,w.jsx)(_.jj,{name:"name",component:"div"}),(0,w.jsx)(_.ZP,{type:"text",name:"city",placeholder:r("City_region"),errors:e.errors,touched:e.touched,values:e.values.city,required:!0}),(0,w.jsx)(_.jj,{name:"city",component:"div"}),(0,w.jsx)(k(),{name:"phone",type:"tel",className:q,onlyCountries:["ua"],country:"ua",countryCodeEditable:!1,errors:e.errors,value:e.values.phone,touched:e.touched,onChange:function(r){console.log("phone","+".concat(r)),e.setFieldValue("phone","+".concat(r))},onBlur:function(e){19!==e.currentTarget.value.length?e.currentTarget.style.border="1px solid #E2001A":e.currentTarget.style.border="1px solid #3CBC81"},onFocus:function(e){19!==e.currentTarget.value.length?e.currentTarget.style.border="1px solid #E2001A":e.currentTarget.style.border="1px solid #3CBC81"}}),(0,w.jsx)(_.jj,{name:"phone",component:"div"}),(0,w.jsx)(_.zx,{type:"submit",children:r("Register")}),(0,w.jsx)(_.zx,{type:"button",onClick:e.back,children:r("Back")})]})},A=t(9887),F={email:"",password:"",confirm:"",name:"",city:"",phone:""},S=function(){var e=(0,i.useState)(0),r=(0,s.Z)(e,2),t=r[0],a=r[1],j=(0,u.$G)().t,y=(0,c.I0)(),v=function(){a(t+1)},g=function(){a(t-1)},C=function(){var e=(0,n.Z)(o().mark((function e(r,t){var n,s,a,i,c,l,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.email,s=r.password,a=r.name,i=r.city,c=r.phone,l=t.resetForm,13===c.length){e.next=5;break}return h.ZP.error(d.Z.t("Enter_phone")),e.abrupt("return");case 5:return e.next=7,y((0,m.IU)({email:n,password:s,name:a,city:i,phone:c}));case 7:if("auth/signup/fulfilled"!==e.sent.type){e.next=13;break}return e.next=11,y((0,m.Ib)({email:n,password:s}));case 11:u=e.sent,console.log("resultLogIn",u);case 13:l();case 14:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}();return(0,w.jsx)(x.x,{as:"section",children:(0,w.jsx)(_.lY,{children:(0,w.jsx)(p.W,{children:(0,w.jsxs)(_.bh,{children:[(0,w.jsx)(_.zD,{children:j("Registration")}),(0,w.jsx)(l.J9,{initialValues:F,onSubmit:C,validationSchema:0===t?f:Z,children:function(e){var r=e.errors,n=e.touched,s=e.isValid,a=e.setFieldValue,o=e.values;return(0,w.jsxs)(_.gR,{autoComplete:"off",children:[0===t&&(0,w.jsx)(b,{next:v,errors:r,touched:n,isValid:!s,values:o}),1===t&&(0,w.jsx)(z,{back:g,errors:r,touched:n,values:o,setFieldValue:a})]})}}),(0,w.jsx)(A.Z,{link:"/login",question:j("Is_account"),pageName:j("Log_in")})]})})})})}}}]);
//# sourceMappingURL=91.75cbbd92.chunk.js.map