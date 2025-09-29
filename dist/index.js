"use strict";var p=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var l=p(function(I,o){
var y=require('@stdlib/math-base-assert-is-nan/dist');function h(a,e,s,q,r,f,g){var u,i,n,m,c,v;if(n=g,a<=0)return r[n]=0,r[n+f]=0,r;if(i=q,s===0)return y(e[i])?(r[n]=0,r[n+f]=0,r):(r[n]=e[i]*a,r[n+f]=a,r);for(v=0;v<a&&(c=e[i],y(c)!==!1);v++)i+=s;if(v===a)return r[n]=0,r[n+f]=0,r;for(m=1,u=c,i+=s,v+=1;v<a;v++)y(e[i])===!1&&(u+=e[i],m+=1),i+=s;return r[n]=u,r[n+f]=m,r}o.exports=h
});var b=p(function(J,_){
var R=require('@stdlib/strided-base-stride2offset/dist'),w=l();function z(a,e,s,q,r){return w(a,e,s,R(a,s),q,r,R(2,r))}_.exports=z
});var x=p(function(K,k){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=b(),B=l();A(d,"ndarray",B);k.exports=d
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=x(),j,E=D(C(__dirname,"./native.js"));F(E)?j=G:j=E;module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
