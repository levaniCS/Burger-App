webpackJsonp([1],{148:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function l(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var u=t(0),s=t.n(u),c=t(7),A=t(149),p=t(49),d=t(50),b=t(161),h=t.n(b),g=t(11),f=t(6),m=t(13),C=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),B=function(e){function n(){var e,t,l,u;a(this,n);for(var s=arguments.length,c=Array(s),A=0;A<s;A++)c[A]=arguments[A];return t=l=i(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(c))),l.state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},l.InputChangedHandler=function(e,n){var t=Object(m.b)(l.state.controls,r({},n,m.b.apply(void 0,o(l.state.controls[n]).concat([{value:e.target.value,valid:Object(m.a)(e.target.value,l.state.controls[n].validation),touched:!0}]))));l.setState({controls:t})},l.submitHandler=function(e){e.preventDefault(),l.props.onAuth(l.state.controls.email.value,l.state.controls.password.value,l.state.isSignup)},l.switchAuthModeHandler=function(){l.setState(function(e){return{isSignup:!e.isSignup}})},u=t,i(l,u)}return l(n,e),C(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,n=[];for(var t in this.state.controls)n.push({id:t,config:this.state.controls[t]});var r=n.map(function(n){return s.a.createElement(A.a,{key:n.id,elementType:n.config.elementType,elementConfig:n.config.elementConfig,invalid:!n.config.valid,shouldValidate:n.config.validation,value:n.config.value,touched:n.config.touched,changed:function(t){return e.InputChangedHandler(t,n.id)}})});this.props.loading&&(r=s.a.createElement(d.a,null));var o=null;this.props.error&&(o=s.a.createElement("p",{style:h.a.ErrorMessage},this.props.error.message));var a=null;return this.props.isAuthenticated&&(a=s.a.createElement(c.c,{to:this.props.authRedirectPath})),s.a.createElement("div",{className:h.a.Auth},a,o,s.a.createElement("form",{onSubmit:this.submitHandler},r,s.a.createElement(p.a,{btnType:"Success"},"SUBMIT")),s.a.createElement(p.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP"))}}]),n}(u.Component),x=function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},_=function(e){return{onAuth:function(n,t,r){return e(g.b(n,t,r))},onSetAuthRedirectPath:function(){return e(g.j("/"))}}};n.default=Object(f.b)(x,_)(B)},149:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(150),i=t.n(a),l=function(e){var n=null,t=null,r=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&(r.push(i.a.invalid),t=o.a.createElement("p",{className:i.a.ValidationError},"Please enter a valid ",e.elementType," !")),e.elementType){case"input":n=o.a.createElement("input",Object.assign({className:r.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":n=o.a.createElement("select",{className:r.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;case"textarea":n=o.a.createElement("textarea",Object.assign({className:r.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;default:n=o.a.createElement("input",Object.assign({className:r.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return o.a.createElement("div",{className:i.a.Input},o.a.createElement("label",{className:i.a.Label},e.label),n,t)};n.a=l},150:function(e,n,t){var r=t(151);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(145)(r,o);r.locals&&(e.exports=r.locals)},151:function(e,n,t){n=e.exports=t(144)(!0),n.push([e.i,".Input__Input__1VROp{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label__1tOSX{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__3TB0k{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__3TB0k:focus{outline:none;background-color:#ccc}.Input__invalid__iI0zS{border:1px solid red;background-color:crimson}.Input__ValidationError__ukId8{color:red;margin:5px 0}","",{version:3,sources:["D:/React Course/1DONE/8. A Real App The Burger Builder (Basic Version)/6.1 burger-basics--01-project-setup.zip/burger-basics--01-project-setup/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACE,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAChC,AAED,qBACE,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACpB,AAED,4BACE,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAChC,AAED,kCACE,aAAc,AACd,qBAAuB,CACxB,AAED,uBACE,qBAAsB,AACtB,wBAA0B,CAC3B,AAED,+BACI,UAAW,AACX,YAAc,CACjB",file:"Input.css",sourcesContent:[".Input {\r\n  width: 100%;\r\n  padding: 10px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.Label {\r\n  font-weight: bold;\r\n  display: block;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.InputElement {\r\n  outline: none;\r\n  border: 1px solid #ccc;\r\n  background-color: white;\r\n  font: inherit;\r\n  padding: 6px 10px;\r\n  display: block;\r\n  width: 100%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.InputElement:focus {\r\n  outline: none;\r\n  background-color: #ccc;\r\n}\r\n\r\n.invalid {\r\n  border: 1px solid red;\r\n  background-color: crimson;\r\n}\r\n\r\n.ValidationError {\r\n    color: red;\r\n    margin: 5px 0;\r\n} \r\n"],sourceRoot:""}]),n.locals={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",invalid:"Input__invalid__iI0zS",ValidationError:"Input__ValidationError__ukId8"}},161:function(e,n,t){var r=t(162);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(145)(r,o);r.locals&&(e.exports=r.locals)},162:function(e,n,t){n=e.exports=t(144)(!0),n.push([e.i,".Auth__Auth__1TInt{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Auth__ErrorMessage__1VYzd{color:red;font-weight:700;border:1px solid #eee}@media (min-width:600px){.Auth__Auth__1TInt{width:500px}}","",{version:3,sources:["D:/React Course/1DONE/8. A Real App The Burger Builder (Basic Version)/6.1 burger-basics--01-project-setup.zip/burger-basics--01-project-setup/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,mBACE,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAChC,AAED,2BACE,UAAW,AACX,gBAAkB,AAClB,qBAAuB,CACxB,AAED,yBACE,mBACE,WAAa,CACd,CACF",file:"Auth.css",sourcesContent:[".Auth {\r\n  margin: 20px auto;\r\n  width: 80%;\r\n  text-align: center;\r\n  -webkit-box-shadow: 0 2px 3px #ccc;\r\n          box-shadow: 0 2px 3px #ccc;\r\n  border: 1px solid #eee;\r\n  padding: 10px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.ErrorMessage {\r\n  color: red;\r\n  font-weight: bold;\r\n  border: 1px solid #eee;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n  .Auth {\r\n    width: 500px;\r\n  }\r\n}\r\n"],sourceRoot:""}]),n.locals={Auth:"Auth__Auth__1TInt",ErrorMessage:"Auth__ErrorMessage__1VYzd"}}});
//# sourceMappingURL=1.a836eeb6.chunk.js.map