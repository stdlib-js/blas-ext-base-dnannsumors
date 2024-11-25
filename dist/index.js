"use strict";var y=function(e,n){return function(){return n||e((n={exports:{}}).exports,n),n.exports}};var l=y(function(I,j){
var d=require('@stdlib/math-base-assert-is-nan/dist');function h(e,n,s,m,r,i,a){var q,v,c,p;if(q=0,e<=0)return r[a]=q,r[a+i]=0,r;if(v=m,s===0)return d(n[v])?(r[a]=q,r[a+i]=0,r):(r[a]=n[v]*e,r[a+i]=e,r);for(c=0,p=0;p<e;p++)d(n[v])===!1&&(q+=n[v],c+=1),v+=s;return r[a]=q,r[a+i]=c,r}j.exports=h
});var R=y(function(J,x){
var k=require('@stdlib/strided-base-stride2offset/dist'),w=l();function z(e,n,s,m,r){var i,a;return i=k(e,s),r<0?a=-r:a=0,w(e,n,s,i,m,r,a)}x.exports=z
});var b=y(function(K,E){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),B=l();A(_,"ndarray",B);E.exports=_
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=b(),u,g=D(C(__dirname,"./native.js"));F(g)?u=G:u=g;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
