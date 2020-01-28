(this.webpackJsonpreact_classworks=this.webpackJsonpreact_classworks||[]).push([[0],{14:function(t,e,n){t.exports={outline:"ContactItem_outline__2Fsh9",text:"ContactItem_text__3Pyz3",button:"ContactItem_button__2JSeu"}},16:function(t,e,n){t.exports={notifyContainer:"Notification_notifyContainer__333Rv",notifyText:"Notification_notifyText__1tVZR"}},17:function(t,e,n){t.exports={text:"Filter_text__K6fOe",input:"Filter_input__3ug6X"}},2:function(t,e,n){t.exports={form:"ContactForm_form__3rds8",label:"ContactForm_label__F6Msq",input:"ContactForm_input__2ypVo",button:"ContactForm_button__2rK6k"}},21:function(t,e,n){t.exports={list:"ContactList_list__27ktI"}},25:function(t,e,n){t.exports=n(35)},34:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),i=n(22),l=n(8),s=n(9),u=n(12),m=n(10),f=n(13),h=n(36),p=n(37),d=n(19),_=n.n(d),b=n(16),C=n.n(b),y=function(t){var e=t.text;return o.a.createElement("div",{className:C.a.notifyContainer},o.a.createElement("p",{className:C.a.notifyText},e))};y.defaultProps={text:"Please check your input. Try again."};var v=y,N=n(20),g=n(2),E=n.n(g),x=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).state={name:"",number:""},n.handleChange=function(t){n.setState(Object(N.a)({},t.target.id,t.target.value))},n.handleSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,o=e.number;(0,n.props.onAddContact)(a,o),n.setState({name:"",number:""})},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return o.a.createElement("form",{onSubmit:this.handleSubmit,className:E.a.form},o.a.createElement("label",{htmlFor:"name",className:E.a.label},"Name",o.a.createElement("input",{id:"name",value:e,onChange:this.handleChange,className:E.a.input})),o.a.createElement("label",{htmlFor:"number",className:E.a.label},"Number",o.a.createElement("input",{id:"number",type:"tel",pattern:"[0-9]{10}",value:n,onChange:this.handleChange,className:E.a.input})),o.a.createElement("button",{type:"submit",className:E.a.button},"Add contact"))}}]),e}(a.Component),w=n(17),F=n.n(w),S=function(t){var e=t.filterValue,n=t.onFilterChange;return o.a.createElement("div",null,o.a.createElement("p",{className:F.a.text},"Find contacts by name"),o.a.createElement("input",{id:"filter",value:e,placeholder:"Print the name that you want to find...",onChange:n,className:F.a.input}))};S.defaultProps={filterValue:""};var k=S,O=n(14),j=n.n(O),A=function(t){var e=t.contact,n=t.onDeleteContact;return o.a.createElement("li",{className:j.a.outline},o.a.createElement("p",{className:j.a.text},"".concat(e.name,": ").concat(e.number)),o.a.createElement("button",{type:"button",onClick:n,className:j.a.button},"Delete"))},D=n(21),I=n.n(D),P=n(6),T=n.n(P),L=function(t){var e=t.filteredContacts,n=t.onDeleteContact;return o.a.createElement(p.a,{component:"ul",className:I.a.list},e.map((function(t){return o.a.createElement(h.a,{key:t.id,timeout:250,classNames:T.a},o.a.createElement(A,{contact:t,onDeleteContact:function(){return n(t.id)}}))})))},J=(n(34),{marginLeft:"auto",marginRight:"auto",width:355,fontFamily:"Roboto"}),M=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).state={contacts:[],filter:"",showNotify:!1,notifyText:""},n.addContact=function(t,e){var a,o=n.state.contacts,c={name:t,number:e,id:_()()};o.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?(a="".concat(t," is already in contacts"),n.showNotifyWithMessage(a)):t&&e?n.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[c]),showNotify:!1}})):(a="Please fill the empty fields",n.showNotifyWithMessage(a))},n.deleteContact=function(t){n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},n.onFilterChange=function(t){n.setState({filter:t.target.value})},n.filterContacts=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},n.showNotifyWithMessage=function(t){n.setState({showNotify:!0,notifyText:t}),setTimeout((function(){n.setState({showNotify:!1})}),2500)},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");if(t)try{var e=JSON.parse(t);this.setState({contacts:e})}catch(n){alert("Something went wrong...")}}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;e.contacts!==n&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,a=t.showNotify,c=t.notifyText,r=this.filterContacts(n,e);return o.a.createElement("div",{style:J},o.a.createElement(h.a,{in:!0,timeout:500,classNames:"slide",appear:!0},o.a.createElement("h2",null,"Phonebook")),o.a.createElement(p.a,null,a&&o.a.createElement(h.a,{timeout:250,classNames:T.a},o.a.createElement(v,{text:c}))),o.a.createElement(x,{onAddContact:this.addContact}),o.a.createElement("h2",null,"Contacts"),o.a.createElement(p.a,null,n.length>1&&o.a.createElement(h.a,{timeout:250,classNames:T.a},o.a.createElement(k,{filterValue:e,onFilterChange:this.onFilterChange}))),o.a.createElement(L,{filteredContacts:r,onDeleteContact:this.deleteContact}))}}]),e}(a.Component);r.a.render(o.a.createElement(M,null),document.getElementById("root"))},6:function(t,e,n){t.exports={enter:"pop_enter__9FZI0",enterActive:"pop_enterActive__P9k3L",exit:"pop_exit__25AfN",exitActive:"pop_exitActive__iwqUh"}}},[[25,1,2]]]);
//# sourceMappingURL=main.ab9f1fcf.chunk.js.map