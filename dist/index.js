"use strict";var u=function(a,n){return function(){return n||a((n={exports:{}}).exports,n),n.exports}};var y=u(function(I,l){
var j=require('@stdlib/math-base-assert-is-nan/dist');function k(a,n,v,m,r,q,e){var s,i,c,p;if(s=0,a<=0)return r[e]=s,r[e+q]=0,r;if(i=m,v===0)return j(n[i])?(r[e]=s,r[e+q]=0,r):(r[e]=n[i]*a,r[e+q]=a,r);for(c=0,p=0;p<a;p++)j(n[i])===!1&&(s+=n[i],c+=1),i+=v;return r[e]=s,r[e+q]=c,r}l.exports=k
});var _=u(function(J,R){
var x=require('@stdlib/strided-base-stride2offset/dist'),w=y();function z(a,n,v,m,r){return w(a,n,v,x(a,v),m,r,x(2,r))}R.exports=z
});var g=u(function(K,b){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),B=y();A(E,"ndarray",B);b.exports=E
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=g(),d,h=D(C(__dirname,"./native.js"));F(h)?d=G:d=h;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
