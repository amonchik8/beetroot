parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"GTpe":[function(require,module,exports) {
"use strict";const e=document.getElementById("employee"),t=document.getElementById("salary"),n=document.getElementById("bonus"),d=document.getElementById("supervisor"),l=e=>{let t=Array.from(table.rows).slice(1).sort((t,n)=>t.cells[e].innerHTML>n.cells[e].innerHTML?1:-1);table.tBodies[0].append(...t)};e.addEventListener("click",()=>{l(0)}),t.addEventListener("click",()=>{l(1)}),n.addEventListener("click",()=>{l(2)}),d.addEventListener("click",()=>{l(3)});
},{}]},{},["GTpe"], null)
//# sourceMappingURL=2.63268cc1.js.map