"use strict";(self["webpackChunkdjari_clothe"]=self["webpackChunkdjari_clothe"]||[]).push([[153],{5153:function(e,s,t){t.r(s),t.d(s,{default:function(){return p}});var n=t(6252),o=t(3577);const c=e=>((0,n.dD)("data-v-803a87f2"),e=e(),(0,n.Cn)(),e),a={id:"board"},l=c((()=>(0,n._)("h2",null,"Ingresa tu Correo Electrónico",-1))),m={id:"msgSuccess"};function d(e,s,t,c,d,i){return(0,n.wg)(),(0,n.iD)("div",a,[l,(0,n._)("div",m,(0,o.zw)(d.msg_succesful),1),(0,n._)("input",{id:"f_email",name:"email",type:"email",onClick:s[0]||(s[0]=(...e)=>i.msgDisplay&&i.msgDisplay(...e)),placeholder:"Correo Electrónico"}),(0,n._)("button",{type:"button",class:"btn-send btn btn-primary mt-4",onClick:s[1]||(s[1]=(...e)=>i.sendEmail&&i.sendEmail(...e))},"Enviar")])}var i=t(9669),r=t.n(i),u={name:"MyForgetPasswd",data(){return{msg_succesful:""}},mounted(){this.msgDisplay()},methods:{sendEmail(){const e=document.getElementById("f_email");var s={};s[e.name]=e.value,r().post("/api/ForgotPassword/sendEmail",s).then((e=>{this.msg=e.data,console.log(this.msg.StatusCorreo),1==this.msg.StatusCorreo?(this.msg_succesful="Se envio exitosamente el enlace a su correo",document.getElementById("msgSuccess").style.backgroundColor="#A3DDCB",document.getElementById("msgSuccess").style.display="block"):(this.msg_succesful="Error: "+this.msg.msj,document.getElementById("msgSuccess").style.backgroundColor="#DBE2EF",document.getElementById("msgSuccess").style.display="block")})).catch((e=>{console.log(e)}))},msgDisplay(){document.getElementById("msgSuccess").style.display="none"}}},g=t(3744);const y=(0,g.Z)(u,[["render",d],["__scopeId","data-v-803a87f2"]]);var p=y}}]);
//# sourceMappingURL=153.7d2a61c5.js.map