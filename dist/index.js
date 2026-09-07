"use strict";var p=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var l=p(function(I,o){
var y=require('@stdlib/math-base-assert-is-nan/dist');function h(a,e,i,q,r,f,g){var u,s,n,m,c,v;if(n=g,a<=0)return r[n]=0,r[n+f]=0,r;if(s=q,i===0)return y(e[s])?(r[n]=0,r[n+f]=0,r):(r[n]=e[s]*a,r[n+f]=a,r);for(v=0;v<a&&(c=e[s],y(c)!==!1);v++)s+=i;if(v===a)return r[n]=0,r[n+f]=0,r;for(m=1,u=c,s+=i,v+=1;v<a;v++)y(e[s])===!1&&(u+=e[s],m+=1),s+=i;return r[n]=u,r[n+f]=m,r}o.exports=h
});var b=p(function(J,_){
var R=require('@stdlib/strided-base-stride2offset/dist'),w=l();function z(a,e,i,q,r){return w(a,e,i,R(a,i),q,r,R(2,r))}_.exports=z
});var x=p(function(K,k){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=b(),B=l();A(d,"ndarray",B);k.exports=d
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=x(),j,E=D(C(__dirname,"./native.js"));F(E)?j=G:j=E;module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
