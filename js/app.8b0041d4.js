(function(){"use strict";var e={8715:function(e,t,n){var o=n(9242),i=n(3396);const l={id:"app",class:"small-container"},a=(0,i._)("h1",null,"Employees",-1);function r(e,t,n,o,r,s){const m=(0,i.up)("employee-form"),c=(0,i.up)("employee-table");return(0,i.wg)(),(0,i.iD)("div",l,[a,(0,i.Wm)(m,{"onAdd:employee":s.addEmployee},null,8,["onAdd:employee"]),(0,i.Wm)(c,{employees:r.employees,"onDelete:employee":s.deleteEmployee,"onEdit:employee":s.editEmployee},null,8,["employees","onDelete:employee","onEdit:employee"])])}var s=n(7139);const m=e=>((0,i.dD)("data-v-6e6348fa"),e=e(),(0,i.Cn)(),e),c={id:"employee-table"},d={key:0,class:"empty-table"},u=m((()=>(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",null,"Employee name"),(0,i._)("th",null,"Employee email"),(0,i._)("th",null,"Actions")])],-1))),p={key:0},y=["onUpdate:modelValue"],h={key:1},f={key:2},b=["onUpdate:modelValue"],g={key:3},v={key:4},w=["onClick"],E=["onClick"],_={key:5},k=["onClick"],D=["onClick"];function j(e,t,n,l,a,r){return(0,i.wg)(),(0,i.iD)("div",c,[n.employees.length<1?((0,i.wg)(),(0,i.iD)("p",d,"No employees")):(0,i.kq)("",!0),(0,i._)("table",null,[u,(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.employees,(t=>((0,i.wg)(),(0,i.iD)("tr",{key:t.id},[a.editing===t.id?((0,i.wg)(),(0,i.iD)("td",p,[(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e=>t.name=e},null,8,y),[[o.nr,t.name]])])):((0,i.wg)(),(0,i.iD)("td",h,(0,s.zw)(t.name),1)),a.editing===t.id?((0,i.wg)(),(0,i.iD)("td",f,[(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e=>t.email=e},null,8,b),[[o.nr,t.email]])])):((0,i.wg)(),(0,i.iD)("td",g,(0,s.zw)(t.email),1)),a.editing===t.id?((0,i.wg)(),(0,i.iD)("td",v,[(0,i._)("button",{onClick:e=>r.editEmployee(t)},"Save",8,w),(0,i._)("button",{class:"muted-button",onClick:e=>r.cancelEdit(t)},"Cancel",8,E)])):((0,i.wg)(),(0,i.iD)("td",_,[(0,i._)("button",{onClick:e=>r.editMode(t)},"Edit",8,k),(0,i._)("button",{onClick:n=>e.$emit("delete:employee",t.id)},"Delete",8,D)]))])))),128))])])])}var C={name:"employee-table",props:{employees:Array},data(){return{editing:null}},methods:{editMode(e){this.cachedEmployee=Object.assign({},e),this.editing=e.id},cancelEdit(e){Object.assign(e,this.cachedEmployee),this.editing=null},editEmployee(e){""!==e.name&&""!==e.email&&(this.$emit("edit:employee",e.id,e),this.editing=null)}}},O=n(89);const S=(0,O.Z)(C,[["render",j],["__scopeId","data-v-6e6348fa"]]);var x=S;const U=e=>((0,i.dD)("data-v-cafd14ae"),e=e(),(0,i.Cn)(),e),T={id:"employee-form"},F=U((()=>(0,i._)("label",null,"Employee name",-1))),N=U((()=>(0,i._)("label",null,"Employee Email",-1))),V=U((()=>(0,i._)("button",null,"Add Employee",-1)));function $(e,t,n,l,a,r){return(0,i.wg)(),(0,i.iD)("div",T,[(0,i._)("form",{onSubmit:t[4]||(t[4]=(0,o.iM)(((...e)=>r.handleSubmit&&r.handleSubmit(...e)),["prevent"]))},[F,(0,i.wy)((0,i._)("input",{ref:"first",type:"text",class:(0,s.C_)({"has-error":a.submitting&&r.invalidName}),"onUpdate:modelValue":t[0]||(t[0]=e=>a.employee.name=e),onFocus:t[1]||(t[1]=(...e)=>r.clearStatus&&r.clearStatus(...e))},null,34),[[o.nr,a.employee.name]]),N,(0,i.wy)((0,i._)("input",{type:"text",class:(0,s.C_)({"has-error":a.submitting&&r.invalidEmail}),"onUpdate:modelValue":t[2]||(t[2]=e=>a.employee.email=e),onFocus:t[3]||(t[3]=(...e)=>r.clearStatus&&r.clearStatus(...e))},null,34),[[o.nr,a.employee.email]]),V],32)])}var A={name:"employee-form",data(){return{submitting:!1,error:!1,success:!1,employee:{name:"",email:""}}},methods:{handleSubmit(){this.submitting=!0,this.clearStatus(),this.invalidName||this.invalidEmail?this.error=!0:(this.$emit("add:employee",this.employee),this.$refs.first.focus(),this.employee={name:"",email:""},this.error=!1,this.success=!0,this.submitting=!1,console.log("testing handleSubmit"))},clearStatus(){this.success=!1,this.error=!1}},computed:{invalidName(){return""===this.employee.name},invalidEmail(){return""===this.employee.email}}};const M=(0,O.Z)(A,[["render",$],["__scopeId","data-v-cafd14ae"]]);var P=M,Z={name:"app",mounted(){this.getEmployees()},components:{EmployeeTable:x,EmployeeForm:P},data(){return{employees:[]}},methods:{async addEmployee(e){try{const t=await fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}),n=await t.json();this.employees=[...this.employees,n]}catch(t){console.error(t)}},async deleteEmployee(e){try{await fetch(`https://jsonplaceholder.typicode.com/users/${e}`,{method:"DELETE"}),this.employees=this.employees.filter((t=>t.id!==e))}catch(t){console.error(t)}},async editEmployee(e,t){try{const n=await fetch(`https://jsonplaceholder.typicode.com/users/${e}`,{method:"PUT",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}}),o=await n.json();this.employees=this.employees.map((t=>t.id===e?o:t))}catch(n){console.error(n)}},async getEmployees(){try{const e=await fetch("https://jsonplaceholder.typicode.com/users"),t=await e.json();this.employees=t}catch(e){console.error(e)}}}};const z=(0,O.Z)(Z,[["render",r]]);var I=z;(0,o.ri)(I).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,l){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],l=e[c][2];for(var r=!0,s=0;s<o.length;s++)(!1&l||a>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(r=!1,l<a&&(a=l));if(r){e.splice(c--,1);var m=i();void 0!==m&&(t=m)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,i,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,l,a=o[0],r=o[1],s=o[2],m=0;if(a.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(s)var c=s(n)}for(t&&t(o);m<a.length;m++)l=a[m],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},o=self["webpackChunktest"]=self["webpackChunktest"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8715)}));o=n.O(o)})();
//# sourceMappingURL=app.8b0041d4.js.map