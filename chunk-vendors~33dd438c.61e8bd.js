(self.webpackChunkvue2_element_admin=self.webpackChunkvue2_element_admin||[]).push([[2226],{4130:function(e,t){"use strict";function n(e){return null==e?0:e.length||1}function i(e){return e}var o=function(){function e(e,t,n,o,r,a){this._old=e,this._new=t,this._oldKeyGetter=n||i,this._newKeyGetter=o||i,this.context=r,this._diffModeMultiple="multiple"===a}return e.prototype.add=function(e){return this._add=e,this},e.prototype.update=function(e){return this._update=e,this},e.prototype.updateManyToOne=function(e){return this._updateManyToOne=e,this},e.prototype.updateOneToMany=function(e){return this._updateOneToMany=e,this},e.prototype.remove=function(e){return this._remove=e,this},e.prototype.execute=function(){this[this._diffModeMultiple?"_executeMultiple":"_executeOneToOne"]()},e.prototype._executeOneToOne=function(){var e=this._old,t=this._new,i={},o=new Array(e.length),r=new Array(t.length);this._initIndexMap(e,null,o,"_oldKeyGetter"),this._initIndexMap(t,i,r,"_newKeyGetter");for(var a=0;a<e.length;a++){var s=o[a],u=i[s],l=n(u);if(l>1){var d=u.shift();1===u.length&&(i[s]=u[0]),this._update&&this._update(d,a)}else 1===l?(i[s]=null,this._update&&this._update(u,a)):this._remove&&this._remove(a)}this._performRestAdd(r,i)},e.prototype._executeMultiple=function(){var e=this._old,t=this._new,i={},o={},r=[],a=[];this._initIndexMap(e,i,r,"_oldKeyGetter"),this._initIndexMap(t,o,a,"_newKeyGetter");for(var s=0;s<r.length;s++){var u=r[s],l=i[u],d=o[u],f=n(l),c=n(d);if(f>1&&1===c)this._updateManyToOne&&this._updateManyToOne(d,l),o[u]=null;else if(1===f&&c>1)this._updateOneToMany&&this._updateOneToMany(d,l),o[u]=null;else if(1===f&&1===c)this._update&&this._update(d,l),o[u]=null;else if(f>1)for(var h=0;h<f;h++)this._remove&&this._remove(l[h]);else this._remove&&this._remove(l)}this._performRestAdd(a,o)},e.prototype._performRestAdd=function(e,t){for(var i=0;i<e.length;i++){var o=e[i],r=t[o],a=n(r);if(a>1)for(var s=0;s<a;s++)this._add&&this._add(r[s]);else 1===a&&this._add&&this._add(r);t[o]=null}},e.prototype._initIndexMap=function(e,t,i,o){for(var r=this._diffModeMultiple,a=0;a<e.length;a++){var s="_ec_"+this[o](e[a],a);if(r||(i[a]=s),t){var u=t[s],l=n(u);0===l?(t[s]=a,r&&i.push(s)):1===l?t[s]=[u,a]:u.push(a)}}},e}();t.Z=o},690:function(e,t,n){"use strict";var i=n(3051);t.Z=function(e){this.otherDims={},null!=e&&i.l7(this,e)}},1401:function(e,t,n){"use strict";var i=n(3051),o=function(){function e(e){this.categories=e.categories||[],this._needCollect=e.needCollect,this._deduplication=e.deduplication}return e.createByAxisModel=function(t){var n=t.option,o=n.data,a=o&&(0,i.UI)(o,r);return new e({categories:a,needCollect:!a,deduplication:!1!==n.dedplication})},e.prototype.getOrdinal=function(e){return this._getOrCreateMap().get(e)},e.prototype.parseAndCollect=function(e){var t,n=this._needCollect;if("string"!=typeof e&&!n)return e;if(n&&!this._deduplication)return t=this.categories.length,this.categories[t]=e,t;var i=this._getOrCreateMap();return null==(t=i.get(e))&&(n?(t=this.categories.length,this.categories[t]=e,i.set(e,t)):t=NaN),t},e.prototype._getOrCreateMap=function(){return this._map||(this._map=(0,i.kW)(this.categories))},e}();function r(e){return(0,i.Kn)(e)&&null!=e.value?e.value:e+""}t.Z=o},9574:function(e,t,n){"use strict";n.d(t,{Ld:function(){return s},_P:function(){return u},nx:function(){return l},ML:function(){return d},Kp:function(){return c}});var i=n(3051),o=n(4279),r=n(2234),a=function(e){this.data=e.data||(e.sourceFormat===o.hL?{}:[]),this.sourceFormat=e.sourceFormat||o.RA,this.seriesLayoutBy=e.seriesLayoutBy||o.fY,this.startIndex=e.startIndex||0,this.dimensionsDefine=e.dimensionsDefine,this.dimensionsDetectedCount=e.dimensionsDetectedCount,this.encodeDefine=e.encodeDefine,this.metaRawOption=e.metaRawOption};function s(e){return e instanceof a}function u(e,t,n,s){n=n||c(e);var u=t.seriesLayoutBy,l=function(e,t,n,a,s){var u,l;if(!e)return{dimensionsDefine:h(s),startIndex:l,dimensionsDetectedCount:u};if(t===o.XD){var d=e;"auto"===a||null==a?m((function(e){null!=e&&"-"!==e&&((0,i.HD)(e)?null==l&&(l=1):l=0)}),n,d,10):l=(0,i.hj)(a)?a:a?1:0,s||1!==l||(s=[],m((function(e,t){s[t]=null!=e?e+"":""}),n,d,1/0)),u=s?s.length:n===o.Wc?d.length:d[0]?d[0].length:null}else if(t===o.qb)s||(s=function(e){for(var t,n=0;n<e.length&&!(t=e[n++]););if(t){var o=[];return(0,i.S6)(t,(function(e,t){o.push(t)})),o}}(e));else if(t===o.hL)s||(s=[],(0,i.S6)(e,(function(e,t){s.push(t)})));else if(t===o.cy){var f=(0,r.C4)(e[0]);u=(0,i.kJ)(f)&&f.length||1}else o.J5;return{startIndex:l,dimensionsDefine:h(s),dimensionsDetectedCount:u}}(e,n,u,t.sourceHeader,t.dimensions);return new a({data:e,sourceFormat:n,seriesLayoutBy:u,dimensionsDefine:l.dimensionsDefine,startIndex:l.startIndex,dimensionsDetectedCount:l.dimensionsDetectedCount,encodeDefine:f(s),metaRawOption:(0,i.d9)(t)})}function l(e){return new a({data:e,sourceFormat:(0,i.fU)(e)?o.J5:o.cy})}function d(e){return new a({data:e.data,sourceFormat:e.sourceFormat,seriesLayoutBy:e.seriesLayoutBy,dimensionsDefine:(0,i.d9)(e.dimensionsDefine),startIndex:e.startIndex,dimensionsDetectedCount:e.dimensionsDetectedCount,encodeDefine:f(e.encodeDefine)})}function f(e){return e?(0,i.kW)(e):null}function c(e){var t=o.RA;if((0,i.fU)(e))t=o.J5;else if((0,i.kJ)(e)){0===e.length&&(t=o.XD);for(var n=0,r=e.length;n<r;n++){var a=e[n];if(null!=a){if((0,i.kJ)(a)){t=o.XD;break}if((0,i.Kn)(a)){t=o.qb;break}}}}else if((0,i.Kn)(e))for(var s in e)if((0,i.RI)(e,s)&&(0,i.zG)(e[s])){t=o.hL;break}return t}function h(e){if(e){var t=(0,i.kW)();return(0,i.UI)(e,(function(e,n){var o={name:(e=(0,i.Kn)(e)?e:{name:e}).name,displayName:e.displayName,type:e.type};if(null==o.name)return o;o.name+="",null==o.displayName&&(o.displayName=o.name);var r=t.get(o.name);return r?o.name+="-"+r.count++:t.set(o.name,{count:1}),o}))}}function m(e,t,n,i){if(t===o.Wc)for(var r=0;r<n.length&&r<i;r++)e(n[r]?n[r][0]:null,r);else{var a=n[0]||[];for(r=0;r<a.length&&r<i;r++)e(a[r],r)}}},4963:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var i=n(3051),o=n(2234),r=n(1772),a=n(9574),s=n(4279),u=n(690);function l(e,t,n){if(n||null!=t.get(e)){for(var i=0;null!=t.get(e+i);)i++;e+=i}return t.set(e,!0),e}function d(e,t){return function(e,t,n){(0,a.Ld)(t)||(t=(0,a.nx)(t)),n=n||{},e=(e||[]).slice();for(var d=(n.dimsDef||[]).slice(),f=(0,i.kW)(),c=(0,i.kW)(),h=[],m=function(e,t,n,o){var r=Math.max(e.dimensionsDetectedCount||1,t.length,n.length,o||0);return(0,i.S6)(t,(function(e){var t;(0,i.Kn)(e)&&(t=e.dimsDef)&&(r=Math.max(r,t.length))})),r}(t,e,d,n.dimCount),p=0;p<m;p++){var v=d[p],_=d[p]=(0,i.l7)({},(0,i.Kn)(v)?v:{name:v}),D=_.name,y=h[p]=new u.Z;null!=D&&null==f.get(D)&&(y.name=y.displayName=D,f.set(D,p)),null!=_.type&&(y.type=_.type),null!=_.displayName&&(y.displayName=_.displayName)}var g=n.encodeDef;!g&&n.encodeDefaulter&&(g=n.encodeDefaulter(t,m));var C=(0,i.kW)(g);C.each((function(e,t){var n=(0,o.kF)(e).slice();if(1===n.length&&!(0,i.HD)(n[0])&&n[0]<0)C.set(t,!1);else{var r=C.set(t,[]);(0,i.S6)(n,(function(e,n){var o=(0,i.HD)(e)?f.get(e):e;null!=o&&o<m&&(r[n]=o,x(h[o],t,n))}))}}));var M=0;function x(e,t,n){null!=s.f7.get(t)?e.otherDims[t]=n:(e.coordDim=t,e.coordDimIndex=n,c.set(t,!0))}(0,i.S6)(e,(function(e){var t,n,r,a;if((0,i.HD)(e))t=e,a={};else{t=(a=e).name;var s=a.ordinalMeta;a.ordinalMeta=null,(a=(0,i.d9)(a)).ordinalMeta=s,n=a.dimsDef,r=a.otherDims,a.name=a.coordDim=a.coordDimIndex=a.dimsDef=a.otherDims=null}var u=C.get(t);if(!1!==u){if(!(u=(0,o.kF)(u)).length)for(var l=0;l<(n&&n.length||1);l++){for(;M<h.length&&null!=h[M].coordDim;)M++;M<h.length&&u.push(M++)}(0,i.S6)(u,(function(e,o){var s=h[e];if(x((0,i.ce)(s,a),t,o),null==s.name&&n){var u=n[o];!(0,i.Kn)(u)&&(u={name:u}),s.name=s.displayName=u.name,s.defaultTooltip=u.defaultTooltip}r&&(0,i.ce)(s.otherDims,r)}))}}));var w=n.generateCoord,I=n.generateCoordCount,O=null!=I;I=w?I||1:0;for(var k=w||"value",K=0;K<m;K++)null==(y=h[K]=h[K]||new u.Z).coordDim&&(y.coordDim=l(k,c,O),y.coordDimIndex=0,(!w||I<=0)&&(y.isExtraCoord=!0),I--),null==y.name&&(y.name=l(y.coordDim,f,!1)),null!=y.type||(0,r.u7)(t,K)!==r.Dq.Must&&(!y.isExtraCoord||null==y.otherDims.itemName&&null==y.otherDims.seriesName)||(y.type="ordinal");return h}((t=t||{}).coordDimensions||[],e,{dimsDef:t.dimensionsDefine||e.dimensionsDefine,encodeDef:t.encodeDefine||e.encodeDefine,dimCount:t.dimensionsCount,encodeDefaulter:t.encodeDefaulter,generateCoord:t.generateCoord,generateCoordCount:t.generateCoordCount})}}}]);