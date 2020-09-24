(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{36:function(t,e,n){t.exports=n(65)},62:function(t,e,n){},63:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),u=n(14),l=n(15),i=n(18),s=n(17),m=n(7),b=n(1),f=Object(b.b)("contacts/fetchContactsRequest"),d=Object(b.b)("contacts/fetchContactSuccess"),h=Object(b.b)("contacts/fetchContactError"),p=Object(b.b)("contacts/addContactsRequest"),O=Object(b.b)("contacts/addContactsSuccess"),j=Object(b.b)("contacts/addContactsError"),E=Object(b.b)("contacts/deleteContactsRequest"),C=Object(b.b)("contacts/deleteContactsSuccess"),g=Object(b.b)("contacts/deleteContactsError"),v=(Object(b.b)("phonebook/delete"),Object(b.b)("phonebook/filter"));var y={changeFilter:v},k=Object(m.b)((function(t){return{contacts:t.contacts.contacts}}),y)((function(t){var e=t.filter,n=t.changeFilter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{style:{display:"block",marginTop:"5px",marginBottom:"10px",width:"100%"},type:"text",name:"filter",value:e,onChange:function(t){return n(t.target.value)},placeholder:"find contact"}))})),x=n(3),w=n(68),N=n(12),S=n.n(N);S.a.defaults.baseURL="http://localhost:4040";var T={addContact:function(t){var e=t.name,n=t.number,a=t.id;return function(t){var c={name:e,number:n,id:a};t(p()),S.a.post("/contacts",c).then((function(e){var n=e.data;return t(O(n))})).catch((function(e){return t(j(e))}))}},deleteContact:function(t){return function(e){e(E()),S.a.delete("/contacts/".concat(t)).then((function(){return e(C(t))})).catch((function(t){return e(g(t))}))}},fetchContacts:function(){return function(t){t(f()),S.a.get("/contacts").then((function(e){var n=e.data;return t(d(n))})).catch((function(e){return t(h(e))}))}}},B=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],name:"",number:""},t.handleChange=function(e){var n=e.target.name;t.setState(Object(x.a)({},n,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.addContact({name:t.state.name,id:Object(w.a)(),number:t.state.number}),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.handleSubmit,style:{border:"1px solid whisper",width:"400px",height:"165px"}},c.a.createElement("label",null,"Name"),c.a.createElement("input",{name:"name",style:{display:"block",marginTop:"5px",marginBottom:"10px",width:"100%"},placeholder:"add name",value:this.state.name,onChange:this.handleChange}),c.a.createElement("label",null,"Number"),c.a.createElement("input",{name:"number",style:{display:"block",marginTop:"5px",marginBottom:"10px",width:"100%"},placeholder:"add number",value:this.state.number,onChange:this.handleChange}),c.a.createElement("button",{style:{marginTop:"15px",width:"100%",backgroundColor:"blue",color:"white",height:"35px"}},"Add contact"))}}]),n}(a.Component),I=Object(m.b)(null,T)(B),A=(n(62),n(69)),F=n(67);var R=Object(m.b)((function(t){return{contactsItems:t.contacts,filter:t.filter}}),(function(t){return{deleteContact:function(e){return t(T.deleteContact(e))}}}))((function(t){var e=t.contactsItems,n=t.deleteContact,a=t.filter;return c.a.createElement(A.a,{component:"ul",className:"list"},function(t,e){return e?t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})):t}(e,a).map((function(t){return c.a.createElement(F.a,{key:t.id,timeout:300,classNames:"list-fade"},c.a.createElement("li",{key:t.id,className:"item"},c.a.createElement("p",null,t.name),c.a.createElement("p",null,t.number),c.a.createElement("button",{className:"btn",onClick:function(){return n(t.id)}},"X")))})))})),q=(n(63),function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={isExsist:!1},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(F.a,{in:!0,appear:!0,classNames:"Phone-slideIn",timeout:1e3,unmountOnExit:!0},c.a.createElement("h1",{className:"Phone"},"PhoneBook")),c.a.createElement(F.a,{in:this.state.isExsist,classNames:"alert",timeout:500,unmountOnExit:!0},c.a.createElement("h2",{className:"alert"},"This name is already in contacts!")),c.a.createElement(I,null),c.a.createElement(F.a,{in:""!==this.props.filter,timeout:500,unmountOnExit:!0},c.a.createElement(k,null)),c.a.createElement(R,null))}}]),n}(a.Component)),L=Object(m.b)((function(t){return{contactsItems:t.contacts.contacts,filter:t.contacts.filter}}),(function(t){return{fetchContacts:function(){return t(T.fetchContacts())}}}))(q);var P,D,J=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(L,null))},z=(n(64),n(16)),M=n(33),U=n.n(M),X=n(9),G=n(2),H=Object(b.c)([],(P={},Object(x.a)(P,d,(function(t,e){return e.payload})),Object(x.a)(P,O,(function(t,e){var n=e.payload;return[].concat(Object(z.a)(t),[n])})),Object(x.a)(P,C,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),P)),K=Object(b.c)(!1,(D={},Object(x.a)(D,p,(function(){return!0})),Object(x.a)(D,O,(function(){return!1})),Object(x.a)(D,j,(function(){return!1})),Object(x.a)(D,E,(function(){return!0})),Object(x.a)(D,C,(function(){return!1})),Object(x.a)(D,g,(function(){return!1})),Object(x.a)(D,f,(function(){return!0})),Object(x.a)(D,d,(function(){return!1})),Object(x.a)(D,h,(function(){return!1})),D)),Q=Object(b.c)("",Object(x.a)({},v,(function(t,e){return e.payload}))),V=Object(G.c)({contacts:H,filter:Q,loading:K}),W=[].concat(Object(z.a)(Object(b.d)({serializableCheck:{ignoredActions:[X.a,X.f,X.b,X.c,X.d,X.e]}})),[U.a]),Y=Object(b.a)({reducer:V,middleware:W,devTools:!1});o.a.render(c.a.createElement(m.a,{store:Y},c.a.createElement(J,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.6b91221b.chunk.js.map