"use strict";var G=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(v){throw r=0,v}}};var p=G(function(vr,B){"use strict";var A=require("@stdlib/math-base-special-kernel-sincosf").assign,c=require("@stdlib/math-base-special-copysignf"),_=require("@stdlib/number-float64-base-to-float32"),C=require("@stdlib/number-float32-base-to-uint32"),K=require("@stdlib/number-float32-base-to-word"),x=require("@stdlib/number-float32-base-from-word"),F=require("@stdlib/constants-float32-sign-mask"),Q=require("@stdlib/constants-float32-abs-mask"),j=require("@stdlib/constants-float32-exponent-mask"),k=require("@stdlib/constants-float32-exponent-bias"),w=require("@stdlib/constants-float32-num-significand-bits"),Z=require("@stdlib/constants-float32-significand-mask"),N=require("@stdlib/constants-float64-pi"),z=1065353216,L=1056964608,P=1048576e3,g=1061158912,J=947912704,V=1258291200,Y=1266679808,U=_(3.14160156),m=_(-890890988e-14),$=4294901760,e=255,y=_(8388608),d=_(11920928955078125e-23),M=_(-1),W=_(0),l=_(.5),q=_(1);function u(i,r,v,a){var T,E,n,O,D,R,H,S,I;return i=_(i),E=K(i),n=(E&Q)>>>0,O=x(n),n<z?n<P?n<J?i===0?(r[a]=i,r[a+v]=q,r):(A(N*O,r,v,a),R=x(E&$),R=_(R*y),H=_(_(i*y)-R),I=_(_(_(m+U)*H)+_(m*R)),I=_(I+_(U*R)),r[a]=_(I*d),r):(A(N*O,r,v,a),E&F&&(r[a]=-r[a]),r):(n<L?(A(N*_(l-O),r,v,a),T=r[a],r[a]=r[a+v],r[a+v]=T):n===L?(r[a]=q,r[a+v]=W):n<g?(A(N*_(O-l),r,v,a),T=r[a],r[a]=r[a+v],r[a+v]=-T):(A(N*_(q-O),r,v,a),r[a+v]=-r[a+v]),E&F&&(r[a]=-r[a]),r):n<V?(S=(n>>w&e)-k,n&=~(Z>>S),D=x(n),O=_(O-D),n=K(O),S=C(D),n===0?(r[a]=c(W,i),r[a+v]=S&1?M:q,r):n===L?(I=S&1?M:q,r[a]=E&F?-I:I,r[a+v]=W,r):(n<L?n<P?A(N*O,r,v,a):(A(N*_(l-O),r,v,a),T=r[a],r[a]=r[a+v],r[a+v]=T):n<g?(A(N*_(O-l),r,v,a),T=r[a],r[a]=r[a+v],r[a+v]=-T):(A(N*_(q-O),r,v,a),r[a+v]=-r[a+v]),S&1&&(r[a]=-r[a],r[a+v]=-r[a+v]),E&F&&(r[a]=-r[a]),r)):n>=j?(r[a]=NaN,r[a+v]=NaN,r):n<Y?(r[a]=c(W,i),r[a+v]=n&1?M:q,r):(r[a]=c(W,i),r[a+v]=q,r)}B.exports=u});var b=G(function(_r,X){"use strict";var s=require("@stdlib/array-float32"),f=p();function o(i){return f(i,new s(2),1,0)}X.exports=o});var t=require("@stdlib/utils-define-nonenumerable-read-only-property"),h=b(),rr=p();t(h,"assign",rr);module.exports=h;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and disclaimer were part of the original implementation available as part of FreeBSD [s_sinpif.c]{@link https://github.com/freebsd/freebsd-src/blob/main/lib/msun/src/s_sinpif.c} and [s_cospif.c]{@link https://github.com/freebsd/freebsd-src/blob/main/lib/msun/src/s_cospif.c}. The implementation follows the originals, but has been modified for JavaScript and combined into a single function.
*
* ```text
* Copyright (c) 2017,2023 Steven G. Kargl
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions
* are met:
* 1. Redistributions of source code must retain the above copyright
*    notice unmodified, this list of conditions, and the following
*    disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright
*    notice, this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
*
* THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
* IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
* OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
* IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
* INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
* NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
* THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
