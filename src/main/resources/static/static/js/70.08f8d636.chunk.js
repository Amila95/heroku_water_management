(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1513:function(e,a,t){"use strict";t.r(a);var r=t(247),s=t(239),n=t(240),o=t(242),l=t(241),c=t(243),m=t(2),i=t.n(m),u=t(1018),d=t(939),p=t(940),E=t(941),w=t(942),h=t(1117),b=t(980),f=t(981),v=t(952),g=t(949),N=t(1207),C=t(945),P=t(950),y=(t(108),t(246)),k=t(189),j=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(l.a)(a).call(this))).onChange=function(a){var t=a.target.name,s=a.target.value;e.setState(Object(r.a)({},t,s))},e.validate=function(){var a,t,r;return e.state.password.length<4&&(t="password min length is 4"),e.state.username.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)||(a="invalid email"),e.state.password.match(e.state.confirmPassword)||(r="miss match password"),!(a||t||r)||(e.setState({usernameError:a,passwordError:t,confirmPasswordError:r}),!1)},e.onSubmit=function(a){a.preventDefault();e.state.username,e.state.password,e.state.confirmPassword},e.state={username:"",password:"",confirmPassword:"",usernameError:"",passwordError:"",confirmPasswordError:"",errors:{}},e}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.state,a=e.errors;e.formErrors;return i.a.createElement("div",{className:"app flex-row align-items-center"},i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"justify-content-center"},i.a.createElement(p.a,{md:"9",lg:"7",xl:"6"},i.a.createElement(E.a,{className:"mx-4"},i.a.createElement(w.a,{className:"p-4"},i.a.createElement(h.a,{onSubmit:this.onSubmit},i.a.createElement("h1",null,"Register"),i.a.createElement("p",{className:"text-muted"},"Create your account"),i.a.createElement(b.a,{className:"mb-3"},i.a.createElement(f.a,{addonType:"prepend"},i.a.createElement(v.a,null,i.a.createElement("i",{className:"icon-user"}))),i.a.createElement(g.a,{invalid:a.username||this.state.usernameError,type:"text",placeholder:"Username",autoComplete:"username",name:"username",value:this.state.username,onChange:this.onChange,onKeyUp:this.OnKeyUp}),i.a.createElement(N.a,null,a.username||this.state.usernameError)),i.a.createElement(b.a,{className:"mb-3"},i.a.createElement(f.a,{addonType:"prepend"},i.a.createElement(v.a,null,i.a.createElement("i",{className:"icon-lock"}))),i.a.createElement(g.a,{invalid:a.password||this.state.passwordError,type:"password",placeholder:"Password",autoComplete:"new-password",name:"password",value:this.state.password,onChange:this.onChange}),i.a.createElement(N.a,null,a.password||this.state.passwordError)),i.a.createElement(b.a,{className:"mb-4"},i.a.createElement(f.a,{addonType:"prepend"},i.a.createElement(v.a,null,i.a.createElement("i",{className:"icon-lock"}))),i.a.createElement(g.a,{invalid:a.confirmPassword||this.state.confirmPasswordError,type:"password",placeholder:"Repeat password",autoComplete:"new-password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChange}),i.a.createElement(N.a,null,a.confirmPassword||this.state.confirmPasswordError)),i.a.createElement(C.a,{color:"success",block:!0},"Create Account"))),i.a.createElement(P.a,{className:"p-4"},i.a.createElement(d.a,null,i.a.createElement(p.a,{xs:"12",sm:"6"},i.a.createElement(C.a,{className:"btn-facebook mb-1",block:!0},i.a.createElement("span",null,"facebook"))),i.a.createElement(p.a,{xs:"12",sm:"6"},i.a.createElement(C.a,{className:"btn-twitter mb-1",block:!0},i.a.createElement("span",null,"twitter"))))))))))}}]),a}(m.Component);a.default=Object(y.b)(null,{registerUser:k.d})(j)}}]);
//# sourceMappingURL=70.08f8d636.chunk.js.map