(this.webpackJsonplog=this.webpackJsonplog||[]).push([[0],{45:function(e,t,a){},65:function(e,t,a){e.exports=a(76)},70:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),c=(a(70),a(21)),i=a(22),s=a(25),u=a(23),m=a(53),p=a(10),E=a(112),b=a(108),h=a(104),d=a(111),v=a(113),f=a(114),y=(a(45),{arr:["bc","a","3"],pass:["z","y","c"],obj:{name:["a","b","c"],Year:["first","Second","Third"],Dept:["CSE","EEE","ECE"],Rno:["1","2","3"]}}),g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).na=function(e){n.setState({n:e.target.value})},n.pa=function(e){n.setState({p:e.target.value})},n.ca=function(e){n.setState({c:e.target.value})},n.da=function(e){n.setState({d:e.target.value})},n.aa=function(e){n.setState({a:e.target.value})},n.ba=function(e){n.setState({b:e.target.value})},n.onAddItem=function(){var e=n.state.n,t=n.state.p,a=n.state.a,r=n.state.b,l=n.state.c,o=n.state.d;y.arr.push(e),y.pass.push(t),y.obj.name.push(a),y.obj.Year.push(r),y.obj.Dept.push(l),y.obj.Rno.push(o),alert("successfully signed up"),n.setState({n:"",p:"",a:"",b:"",c:"",d:""})},n.onLo=function(){n.props.history.push("/c")},n.state={n:"",p:"",a:"",b:"",c:"",d:"",x:0,type:"Signup"},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"h"},r.a.createElement(h.a,{style:{alignItems:"center",fontSize:"20px"},color:"primary"},r.a.createElement("h8",null,"STUDENT FORM")),r.a.createElement("div",{class:"bo"},r.a.createElement("h1",null,this.state.type),r.a.createElement(b.a,{variant:"contained",color:"primary"},"Signup")," \u2003\u2003",r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:this.onLo},"Login"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{id:"ff",style:{color:"white"},label:"Username",variant:"outlined",type:"text",borderColor:"coral",value:this.state.n,onChange:this.na}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{id:"ff",style:{color:"white"},label:"Password",variant:"outlined",type:"password",borderColor:"coral",value:this.state.p,onChange:this.pa}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{id:"ff",style:{color:"white"},label:"Name",variant:"outlined",type:"text",borderColor:"coral",value:this.state.a,onChange:this.aa}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v.a,null,"Year"),r.a.createElement(d.a,{id:"ff",style:{color:"white",width:"230px"},label:"Year",variant:"outlined",type:"number",borderColor:"coral",value:this.state.b,onChange:this.ba},r.a.createElement(f.a,{value:"First"},"First"),r.a.createElement(f.a,{value:"Second"},"Second"),r.a.createElement(f.a,{value:"Third"},"Third"),r.a.createElement(f.a,{value:"Final"},"Final")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v.a,null,"Department"),r.a.createElement(d.a,{id:"ff",style:{color:"white",width:"230px"},label:"Department",variant:"outlined",type:"text",borderColor:"coral",value:this.state.c,onChange:this.ca},r.a.createElement(f.a,{value:"CSE"},"CSE"),r.a.createElement(f.a,{value:"ECE"},"ECE"),r.a.createElement(f.a,{value:"EEE"},"EEE"),r.a.createElement(f.a,{value:"MECHANICAL"},"MECH")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{id:"ff",style:{color:"white"},label:"Roll no",variant:"outlined",min:"5999999999",max:"9999999999",type:"number",borderColor:"coral",value:this.state.d,onChange:this.da}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:this.onAddItem,disabled:!this.state.b},this.state.type),r.a.createElement("br",null),r.a.createElement("br",null))," ")}}]),a}(n.Component),C=0,S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).na=function(e){n.setState({n:e.target.value})},n.pa=function(e){n.setState({p:e.target.value})},n.onAddItem=function(){for(var e=n.state.n,t=n.state.p,a=0,r=0;r<y.arr.length;r++)if(e===y.arr[r]&&t===y.pass[r]){a=1;break}C=r,0===a?alert("wrong password"):n.props.history.push("/Home"),n.setState({n:"",p:""})},n.onSi=function(){n.props.history.push("/Signup")},n.state={n:"",p:"",x:0,type:"Login"},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"h"},r.a.createElement(h.a,{style:{alignItems:"center",fontSize:"20px"},color:"primary"},"STUDENT FORM"),r.a.createElement("div",{class:"bo"},r.a.createElement("h1",null,this.state.type),r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:this.onSi},"Signup")," \u2003\u2003\u2003",r.a.createElement(b.a,{variant:"contained",color:"primary"},"Login"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{id:"ff",style:{color:"white"},label:"Username",variant:"outlined",type:"text",borderColor:"coral",value:this.state.n,onChange:this.na}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{id:"ff",style:{color:"white"},label:"Password",variant:"outlined",type:"password",borderColor:"coral",value:this.state.p,onChange:this.pa}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:this.onAddItem,disabled:!this.state.p},this.state.type))," ")}}]),a}(n.Component),j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onLo=function(){e.props.history.push("/c")},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"h"},r.a.createElement(h.a,{style:{alignItems:"center",fontSize:"20px"},color:"primary"},"STUDENT FORM"),r.a.createElement("div",{class:"bo"},r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:this.onLo},"Logout"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Name :",y.obj.name[C],r.a.createElement("br",null),"Year:",y.obj.Year[C]," ",r.a.createElement("br",null),"Department:",y.obj.Dept[C],r.a.createElement("br",null),"Roll no:",y.obj.Rno[C],r.a.createElement("br",null)),"Hello ",y.obj.name[C]))}}]),a}(n.Component),w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/apimock",component:S}),r.a.createElement(p.a,{exact:!0,path:"/Login",component:S}),r.a.createElement(p.a,{exact:!0,path:"/Home",component:j}),r.a.createElement(p.a,{exact:!0,path:"/Signup",component:g})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.a740674a.chunk.js.map