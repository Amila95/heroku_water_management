(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1559:function(e,a,t){"use strict";t.r(a);var n=t(247),l=t(239),o=t(240),r=t(242),s=t(241),c=t(243),i=t(2),d=t.n(i),u=t(939),p=t(940),m=t(941),f=t(943),h=t(942),b=t(955),y=t(956),g=t(949),E=t(950),v=t(945),O=t(246),j=t(91),N=t(984),C=t(985),S=t(249),D=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(r.a)(this,Object(s.a)(a).call(this))).onChange=function(a){e.setState(Object(n.a)({},a.target.name,a.target.value))},e.onSubmit=function(a){var t=e.props.match.params.id;a.preventDefault();var n={date:e.state.date,refNo:e.state.refNo,sampleNo:e.state.sampleNo,client:e.props.client.client.clientName,sample:e.state.sample,dateOfSampling:e.state.dateOfSampling,timeOfSampling:e.state.timeOfSampling,source:e.state.source,samplingCarriedOutBy:e.state.samplingCarriedOutBy,location:e.state.location,analysisStatedDate:e.state.analysisStatedDate,analysisEndDate_Chemical:e.state.analysisEndDate_Chemical,analysisEndDate_Bio:e.state.analysisEndDate_Bio};e.props.wasteAddReportDetails(t,n,e.props.history)},e.state={date:"",refNo:"",sampleNo:"",client:"",sample:"",source:"",dateOfSampling:"",timeOfSampling:"",samplingCarriedOutBy:"",analysisStatedDate:"",analysisEndDate_Chemical:"",analysisEndDate_Bio:"",errors:{}},e}return Object(c.a)(a,e),Object(o.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&(console.log("errors"+e.errors),this.setState({errors:e.errors}))}},{key:"render",value:function(){var e,a=this.state.errors;return e=Object(S.a)(this.props.client.client)?d.a.createElement(C.a,null):d.a.createElement(u.a,null,d.a.createElement(p.a,{xs:"12",sm:"6"},d.a.createElement(m.a,null,d.a.createElement(f.a,null,d.a.createElement("strong",null,"Report Details"),d.a.createElement("small",null," Form")),d.a.createElement(h.a,null,d.a.createElement(b.a,null,d.a.createElement(y.a,{htmlFor:"date-input"},"Date "),d.a.createElement(g.a,{type:"date",id:"date",name:"date",placeholder:"date",value:this.state.date,onChange:this.onChange}),a.date&&d.a.createElement("lable",{style:{color:"red"}},a.date)),d.a.createElement(b.a,null,d.a.createElement(y.a,{htmlFor:"company"},"Ref No"),d.a.createElement(g.a,{type:"text",id:"refNo",placeholder:"Enter Ref No",name:"refNo",value:this.state.refNo,onChange:this.onChange}),a.refNo&&d.a.createElement("lable",{style:{color:"red"}},a.refNo)),d.a.createElement(b.a,null,d.a.createElement(y.a,{htmlFor:"vat"},"Sample No"),d.a.createElement(g.a,{type:"text",id:"sampleNo",placeholder:"Enter Simple no",name:"sampleNo",value:this.state.sampleNo,onChange:this.onChange}),a.sampleNo&&d.a.createElement("lable",{style:{color:"red"}},a.sampleNo)),d.a.createElement(b.a,null,d.a.createElement(y.a,{htmlFor:"street"},"Client"),d.a.createElement(g.a,{type:"text",id:"client",placeholder:"Enter client",name:"client",value:this.props.client.client.clientName}),a.client&&d.a.createElement("lable",{style:{color:"red"}},a.client)),d.a.createElement(b.a,null,d.a.createElement(y.a,{htmlFor:"street"},"Sample"),d.a.createElement(g.a,{type:"text",id:"street",placeholder:"Enter sample",name:"sample",value:this.state.sample,onChange:this.onChange}),a.sample&&d.a.createElement("lable",{style:{color:"red"}},a.sample)),d.a.createElement(b.a,null,d.a.createElement(y.a,{htmlFor:"date-input"},"Date of Sampling"),d.a.createElement(g.a,{type:"date",id:"dateOfSampling",name:"dateOfSampling",placeholder:"date",value:this.state.dateOfSampling,onChange:this.onChange}),a.dateOfSampling&&d.a.createElement("lable",{style:{color:"red"}},a.dateOfSampling)),d.a.createElement(b.a,null,d.a.createElement(y.a,{htmlFor:"street"},"Time of Sampling"),d.a.createElement(g.a,{type:"text",id:"timeOfSampling",placeholder:"Enter time of sampling",name:"timeOfSampling",value:this.state.timeOfSampling,onChange:this.onChange}),a.timeOfSampling&&d.a.createElement("lable",{style:{color:"red"}},a.timeOfSampling)),d.a.createElement(b.a,null,d.a.createElement(y.a,{htmlFor:"street"},"Source"),d.a.createElement(g.a,{type:"text",id:"source",placeholder:"Enter source",name:"source",value:this.state.source,onChange:this.onChange}),a.source&&d.a.createElement("lable",{style:{color:"red"}},a.source)),d.a.createElement(b.a,null,d.a.createElement(y.a,{htmlFor:"street"},"Sampling carried out by"),d.a.createElement(g.a,{type:"text",id:"samplingCarriedOutBy",placeholder:"Enter sampling carried out by",name:"samplingCarriedOutBy",value:this.state.samplingCarriedOutBy,onChange:this.onChange}),a.samplingCarriedOutBy&&d.a.createElement("lable",{style:{color:"red"}},a.samplingCarriedOutBy)),d.a.createElement(b.a,null,d.a.createElement(y.a,{htmlFor:"street"},"Location"),d.a.createElement(g.a,{type:"text",id:"location",placeholder:"Enter location",name:"location",value:this.state.location,onChange:this.onChange}),a.location&&d.a.createElement("lable",{style:{color:"red"}},a.location)),d.a.createElement(b.a,null,d.a.createElement(y.a,{htmlFor:"date-input"},"Analysis Stated date"),d.a.createElement(g.a,{type:"date",id:"analysisStatedDate",name:"analysisStatedDate",placeholder:"date",value:this.state.analysisStatedDate,onChange:this.onChange}),a.analysisStatedDate&&d.a.createElement("lable",{style:{color:"red"}},a.analysisStatedDate)),d.a.createElement(b.a,null,d.a.createElement(y.a,{htmlFor:"date-input"},"Analysis ended date(Chemical)"),d.a.createElement(g.a,{type:"date",id:"analysisEndDate_Chemical",name:"analysisEndDate_Chemical",placeholder:"date",value:this.state.analysisEndDate_Chemical,onChange:this.onChange}),a.analysisEndDate_Chemical&&d.a.createElement("lable",{style:{color:"red"}},a.analysisEndDate_Chemical)),d.a.createElement(b.a,null,d.a.createElement(y.a,{htmlFor:"date-input"},"Analysis ended date(MicroBialog)"),d.a.createElement(g.a,{type:"date",id:"analysisEndDate_Bio",name:"analysisEndDate_Bio",placeholder:"date",value:this.state.analysisEndDate_Bio,onChange:this.onChange}),a.analysisEndDate_Bio&&d.a.createElement("lable",{style:{color:"red"}},a.analysisEndDate_Bio))),d.a.createElement(E.a,null,d.a.createElement(v.a,{type:"submit",size:"sm",color:"primary",onClick:this.onSubmit},d.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),d.a.createElement(v.a,{type:"reset",size:"sm",color:"danger"},d.a.createElement("i",{className:"fa fa-ban"})," Reset"))))),d.a.createElement("div",null,e)}}]),a}(i.Component);a.default=Object(O.b)(function(e){return{auth:e.auth,errors:e.errors,client:e.client}},{wasteAddReportDetails:N.j})(Object(j.k)(D))},931:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},939:function(e,a,t){"use strict";var n=t(35),l=t(106),o=t(2),r=t.n(o),s=t(61),c=t.n(s),i=t(928),d=t.n(i),u=t(929),p={tag:u.p,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},m=function(e){var a=e.className,t=e.cssModule,o=e.noGutters,s=e.tag,c=e.form,i=Object(l.a)(e,["className","cssModule","noGutters","tag","form"]),p=Object(u.l)(d()(a,o?"no-gutters":null,c?"form-row":"row"),t);return r.a.createElement(s,Object(n.a)({},i,{className:p}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},940:function(e,a,t){"use strict";var n=t(35),l=t(106),o=t(931),r=t.n(o),s=t(2),c=t.n(s),i=t(61),d=t.n(i),u=t(928),p=t.n(u),m=t(929),f=d.a.oneOfType([d.a.number,d.a.string]),h=d.a.oneOfType([d.a.bool,d.a.number,d.a.string,d.a.shape({size:d.a.oneOfType([d.a.bool,d.a.number,d.a.string]),order:f,offset:f})]),b={tag:m.p,xs:h,sm:h,md:h,lg:h,xl:h,className:d.a.string,cssModule:d.a.object,widths:d.a.array},y={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,o=e.widths,s=e.tag,i=Object(l.a)(e,["className","cssModule","widths","tag"]),d=[];o.forEach(function(a,n){var l=e[a];if(delete i[a],l||""===l){var o=!n;if(r()(l)){var s,c=o?"-":"-"+a+"-",u=g(o,a,l.size);d.push(Object(m.l)(p()(((s={})[u]=l.size||""===l.size,s["order"+c+l.order]=l.order||0===l.order,s["offset"+c+l.offset]=l.offset||0===l.offset,s)),t))}else{var f=g(o,a,l);d.push(f)}}}),d.length||d.push("col");var u=Object(m.l)(p()(a,d),t);return c.a.createElement(s,Object(n.a)({},i,{className:u}))};E.propTypes=b,E.defaultProps=y,a.a=E},941:function(e,a,t){"use strict";var n=t(35),l=t(106),o=t(2),r=t.n(o),s=t(61),c=t.n(s),i=t(928),d=t.n(i),u=t(929),p={tag:u.p,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var a=e.className,t=e.cssModule,o=e.color,s=e.body,c=e.inverse,i=e.outline,p=e.tag,m=e.innerRef,f=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(u.l)(d()(a,"card",!!c&&"text-white",!!s&&"card-body",!!o&&(i?"border":"bg")+"-"+o),t);return r.a.createElement(p,Object(n.a)({},f,{className:h,ref:m}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},942:function(e,a,t){"use strict";var n=t(35),l=t(106),o=t(2),r=t.n(o),s=t(61),c=t.n(s),i=t(928),d=t.n(i),u=t(929),p={tag:u.p,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var a=e.className,t=e.cssModule,o=e.innerRef,s=e.tag,c=Object(l.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.l)(d()(a,"card-body"),t);return r.a.createElement(s,Object(n.a)({},c,{className:i,ref:o}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},943:function(e,a,t){"use strict";var n=t(35),l=t(106),o=t(2),r=t.n(o),s=t(61),c=t.n(s),i=t(928),d=t.n(i),u=t(929),p={tag:u.p,className:c.a.string,cssModule:c.a.object},m=function(e){var a=e.className,t=e.cssModule,o=e.tag,s=Object(l.a)(e,["className","cssModule","tag"]),c=Object(u.l)(d()(a,"card-header"),t);return r.a.createElement(o,Object(n.a)({},s,{className:c}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},945:function(e,a,t){"use strict";var n=t(35),l=t(106),o=t(934),r=t(66),s=t(2),c=t.n(s),i=t(61),d=t.n(i),u=t(928),p=t.n(u),m=t(929),f={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:m.p,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],o=e.block,r=e.className,s=e.close,i=e.cssModule,d=e.color,u=e.outline,f=e.size,h=e.tag,b=e.innerRef,y=Object(l.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof y.children&&(y.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(u?"-outline":"")+"-"+d,E=Object(m.l)(p()(r,{close:s},s||"btn",s||g,!!f&&"btn-"+f,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),i);y.href&&"button"===h&&(h="a");var v=s?"Close":null;return c.a.createElement(h,Object(n.a)({type:"button"===h&&y.onClick?"button":void 0},y,{className:E,ref:b,onClick:this.onClick,"aria-label":t||v}))},a}(c.a.Component);h.propTypes=f,h.defaultProps={color:"secondary",tag:"button"},a.a=h},949:function(e,a,t){"use strict";var n=t(35),l=t(106),o=t(934),r=t(66),s=t(2),c=t.n(s),i=t(61),d=t.n(i),u=t(928),p=t.n(u),m=t(929),f={children:d.a.node,type:d.a.string,size:d.a.string,bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:m.p,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.focus=t.focus.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.type,r=e.bsSize,s=e.valid,i=e.invalid,d=e.tag,u=e.addon,f=e.plaintext,h=e.innerRef,b=Object(l.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),y=["radio","checkbox"].indexOf(o)>-1,g=new RegExp("\\D","g"),E=d||("select"===o||"textarea"===o?o:"input"),v="form-control";f?(v+="-plaintext",E=d||"input"):"file"===o?v+="-file":y&&(v=u?null:"form-check-input"),b.size&&g.test(b.size)&&(Object(m.r)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=b.size,delete b.size);var O=Object(m.l)(p()(a,i&&"is-invalid",s&&"is-valid",!!r&&"form-control-"+r,v),t);return("input"===E||d&&"function"===typeof d)&&(b.type=o),b.children&&!f&&"select"!==o&&"string"===typeof E&&"select"!==E&&(Object(m.r)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(E,Object(n.a)({},b,{ref:h,className:O}))},a}(c.a.Component);h.propTypes=f,h.defaultProps={type:"text"},a.a=h},950:function(e,a,t){"use strict";var n=t(35),l=t(106),o=t(2),r=t.n(o),s=t(61),c=t.n(s),i=t(928),d=t.n(i),u=t(929),p={tag:u.p,className:c.a.string,cssModule:c.a.object},m=function(e){var a=e.className,t=e.cssModule,o=e.tag,s=Object(l.a)(e,["className","cssModule","tag"]),c=Object(u.l)(d()(a,"card-footer"),t);return r.a.createElement(o,Object(n.a)({},s,{className:c}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},955:function(e,a,t){"use strict";var n=t(35),l=t(106),o=t(2),r=t.n(o),s=t(61),c=t.n(s),i=t(928),d=t.n(i),u=t(929),p={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.p,className:c.a.string,cssModule:c.a.object},m=function(e){var a=e.className,t=e.cssModule,o=e.row,s=e.disabled,c=e.check,i=e.inline,p=e.tag,m=Object(l.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(u.l)(d()(a,!!o&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!s)&&"disabled"),t);return r.a.createElement(p,Object(n.a)({},m,{className:f}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},956:function(e,a,t){"use strict";var n=t(35),l=t(106),o=t(2),r=t.n(o),s=t(61),c=t.n(s),i=t(928),d=t.n(i),u=t(931),p=t.n(u),m=t(929),f=c.a.oneOfType([c.a.number,c.a.string]),h=c.a.oneOfType([c.a.string,c.a.number,c.a.shape({size:f,order:f,offset:f})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:m.p,className:c.a.string,cssModule:c.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:c.a.array},y={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,o=e.hidden,s=e.widths,c=e.tag,i=e.check,u=e.size,f=e.for,h=Object(l.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];s.forEach(function(a,n){var l=e[a];if(delete h[a],l||""===l){var o,r=!n;if(p()(l)){var s,c=r?"-":"-"+a+"-";o=g(r,a,l.size),b.push(Object(m.l)(d()(((s={})[o]=l.size||""===l.size,s["order"+c+l.order]=l.order||0===l.order,s["offset"+c+l.offset]=l.offset||0===l.offset,s))),t)}else o=g(r,a,l),b.push(o)}});var y=Object(m.l)(d()(a,!!o&&"sr-only",!!i&&"form-check-label",!!u&&"col-form-label-"+u,b,!!b.length&&"col-form-label"),t);return r.a.createElement(c,Object(n.a)({htmlFor:f},h,{className:y}))};E.propTypes=b,E.defaultProps=y,a.a=E},984:function(e,a,t){"use strict";t.d(a,"a",function(){return r}),t.d(a,"j",function(){return s}),t.d(a,"h",function(){return c}),t.d(a,"i",function(){return i}),t.d(a,"d",function(){return d}),t.d(a,"b",function(){return u}),t.d(a,"f",function(){return p}),t.d(a,"c",function(){return m}),t.d(a,"g",function(){return f}),t.d(a,"e",function(){return h});var n=t(108),l=t.n(n),o=t(45),r=function(e,a,t){return function(n){l.a.post("/api/reportDetailsDrinkWater",a).then(function(e){n({type:o.b,payload:e.data})}).then(function(a){return t.push("/drinkingwaterclient/viewclient/".concat(e,"/reportDetails/calculationSheet"))}).catch(function(e){n({type:o.d,payload:e.response.data})})}},s=function(e,a,t){return function(n){l.a.post("/api/reportDetails",a).then(function(e){n({type:o.b,payload:e.data})}).then(function(a){return t.push("/wastewaterclient/viewclient/".concat(e,"/reportDetails/calculationSheet"))}).catch(function(e){n({type:o.d,payload:e.response.data})})}},c=function(e,a){return function(t){l.a.patch("/api/updateOilAndGrease/".concat(a),e).then(function(e){t({type:o.b,payload:e.data})}).catch(function(e){t({type:o.d,payload:e.response.data})})}},i=function(e,a){return function(t){l.a.patch("/api/updateTss/".concat(a),e).then(function(e){t({type:o.b,payload:e.data})}).catch(function(e){t({type:o.d,payload:e.response.data})})}},d=function(e,a){return function(t){l.a.patch("/api/updateCOD/".concat(a),e).then(function(e){t({type:o.b,payload:e.data})}).catch(function(e){t({type:o.d,payload:e.response.data})})}},u=function(e,a){return function(t){l.a.patch("/api/updateAlkalinity/".concat(a),e).then(function(e){t({type:o.b,payload:e.data})}).catch(function(e){t({type:o.d,payload:e.response.data})})}},p=function(e,a){return function(t){l.a.patch("/api/updateHardness/".concat(a),e).then(function(e){t({type:o.b,payload:e.data})}).catch(function(e){t({type:o.d,payload:e.response.data})})}},m=function(e,a){return function(t){l.a.patch("/api/updateCAHardness/".concat(a),e).then(function(e){t({type:o.b,payload:e.data})}).catch(function(e){t({type:o.d,payload:e.response.data})})}},f=function(e,a){return function(t){l.a.patch("/api/updateMGHardness/".concat(a),e).then(function(e){t({type:o.b,payload:e.data})}).catch(function(e){t({type:o.d,payload:e.response.data})})}},h=function(e,a){return function(t){l.a.patch("/api/updateChloride/".concat(a),e).then(function(e){t({type:o.b,payload:e.data})}).catch(function(e){t({type:o.d,payload:e.response.data})})}}},985:function(e,a,t){"use strict";var n=t(2),l=t.n(n),o=t(986),r=t.n(o);a.a=function(){return l.a.createElement("div",null,l.a.createElement("img",{src:r.a,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."}))}},986:function(e,a,t){e.exports=t.p+"static/media/loadinggif2.ae24d4c4.gif"}}]);
//# sourceMappingURL=15.5efe3383.chunk.js.map