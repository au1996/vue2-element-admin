(self.webpackChunkvue2_element_admin=self.webpackChunkvue2_element_admin||[]).push([[6028],{15746:function(t,e,n){"use strict";n.d(e,{N:function(){return J}});var i=n(70655),o=n(40488),a=n(93321),r=n(41525),s=n(38154),l=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this;return n.type=e.type,n.hasSymbolVisual=!0,n}return(0,i.ZT)(e,t),e.prototype.getInitialData=function(t){return(0,o.Z)(this.getSource(),this,{useEncodeDefaulter:!0})},e.prototype.getLegendIcon=function(t){var e=new s.Z,n=(0,r.t)("line",0,t.itemHeight/2,t.itemWidth,0,t.lineStyle.stroke,!1);e.add(n),n.setStyle(t.lineStyle);var i=this.getData().getVisual("symbol"),o=this.getData().getVisual("symbolRotate"),a="none"===i?"circle":i,l=.8*t.itemHeight,h=(0,r.t)(a,(t.itemWidth-l)/2,(t.itemHeight-l)/2,l,l,t.itemStyle.fill);e.add(h),h.setStyle(t.itemStyle);var u="inherit"===t.iconRotate?o:t.iconRotate||0;return h.rotation=u*Math.PI/180,h.setOrigin([t.itemWidth/2,t.itemHeight/2]),a.indexOf("empty")>-1&&(h.style.stroke=h.style.fill,h.style.fill="#fff",h.style.lineWidth=2),e},e.type="series.line",e.dependencies=["grid","polar"],e.defaultOption={zlevel:0,z:3,coordinateSystem:"cartesian2d",legendHoverLink:!0,clip:!0,label:{position:"top"},endLabel:{show:!1,valueAnimation:!0,distance:8},lineStyle:{width:2,type:"solid"},emphasis:{scale:!0,lineStyle:{width:"bolder"}},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0},e}(a.Z),h=n(33051),u=n(68162),p=n(66351),c=n(99936);function d(t,e,n){var i=t.getBaseAxis(),o=t.getOtherAxis(i),a=function(t,e){var n=0,i=t.scale.getExtent();return"start"===e?n=i[0]:"end"===e?n=i[1]:i[0]>0?n=i[0]:i[1]<0&&(n=i[1]),n}(o,n),r=i.dim,s=o.dim,l=e.mapDimension(s),u=e.mapDimension(r),p="x"===s||"radius"===s?1:0,d=(0,h.UI)(t.dimensions,(function(t){return e.mapDimension(t)})),g=!1,f=e.getCalculationInfo("stackResultDimension");return(0,c.M)(e,d[0])&&(g=!0,d[0]=f),(0,c.M)(e,d[1])&&(g=!0,d[1]=f),{dataDimsForPoint:d,valueStart:a,valueAxisDim:s,baseAxisDim:r,stacked:!!g,valueDim:l,baseDim:u,baseDataOffset:p,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}}function g(t,e,n,i){var o=NaN;t.stacked&&(o=n.get(n.getCalculationInfo("stackedOverDimension"),i)),isNaN(o)&&(o=t.valueStart);var a=t.baseDataOffset,r=[];return r[a]=n.get(t.baseDim,i),r[1-a]=o,e.dataToPoint(r)}var f=n(80887),y=n(51177),m=n(74438),v=n(96498),_=n(32234),b=n(10712),S=n(14014),x=n(18554),w=Math.min,k=Math.max;function P(t,e){return isNaN(t)||isNaN(e)}function D(t,e,n,i,o,a,r,s,l){for(var h,u,p,c,d,g,f=n,y=0;y<i;y++){var m=e[2*f],v=e[2*f+1];if(f>=o||f<0)break;if(P(m,v)){if(l){f+=a;continue}break}if(f===n)t[a>0?"moveTo":"lineTo"](m,v),p=m,c=v;else{var _=m-h,b=v-u;if(_*_+b*b<.5){f+=a;continue}if(r>0){var S=f+a,x=e[2*S],D=e[2*S+1],O=y+1;if(l)for(;P(x,D)&&O<i;)O++,x=e[2*(S+=a)],D=e[2*S+1];var N=.5,I=0,M=0,A=void 0,L=void 0;if(O>=i||P(x,D))d=m,g=v;else{I=x-h,M=D-u;var C=m-h,T=x-m,Z=v-u,G=D-v,z=void 0,E=void 0;"x"===s?(z=Math.abs(C),E=Math.abs(T),d=m-z*r,g=v,A=m+z*r,L=v):"y"===s?(z=Math.abs(Z),E=Math.abs(G),d=m,g=v-z*r,A=m,L=v+z*r):(z=Math.sqrt(C*C+Z*Z),d=m-I*r*(1-(N=(E=Math.sqrt(T*T+G*G))/(E+z))),g=v-M*r*(1-N),L=v+M*r*N,A=w(A=m+I*r*N,k(x,m)),L=w(L,k(D,v)),A=k(A,w(x,m)),g=v-(M=(L=k(L,w(D,v)))-v)*z/E,d=w(d=m-(I=A-m)*z/E,k(h,m)),g=w(g,k(u,v)),A=m+(I=m-(d=k(d,w(h,m))))*E/z,L=v+(M=v-(g=k(g,w(u,v))))*E/z)}t.bezierCurveTo(p,c,d,g,m,v),p=A,c=L}else t.lineTo(m,v)}h=m,u=v,f+=a}return y}var O=function(){this.smooth=0,this.smoothConstraint=!0},N=function(t){function e(e){var n=t.call(this,e)||this;return n.type="ec-polyline",n}return(0,i.ZT)(e,t),e.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},e.prototype.getDefaultShape=function(){return new O},e.prototype.buildPath=function(t,e){var n=e.points,i=0,o=n.length/2;if(e.connectNulls){for(;o>0&&P(n[2*o-2],n[2*o-1]);o--);for(;i<o&&P(n[2*i],n[2*i+1]);i++);}for(;i<o;)i+=D(t,n,i,o,o,1,e.smooth,e.smoothMonotone,e.connectNulls)+1},e.prototype.getPointOn=function(t,e){this.path||(this.createPathProxy(),this.buildPath(this.path,this.shape));for(var n,i,o=this.path.data,a=S.Z.CMD,r="x"===e,s=[],l=0;l<o.length;){var h=void 0,u=void 0,p=void 0,c=void 0,d=void 0,g=void 0,f=void 0;switch(o[l++]){case a.M:n=o[l++],i=o[l++];break;case a.L:if(h=o[l++],u=o[l++],(f=r?(t-n)/(h-n):(t-i)/(u-i))<=1&&f>=0){var y=r?(u-i)*f+i:(h-n)*f+n;return r?[t,y]:[y,t]}n=h,i=u;break;case a.C:h=o[l++],u=o[l++],p=o[l++],c=o[l++],d=o[l++],g=o[l++];var m=r?(0,x.kD)(n,h,p,d,t,s):(0,x.kD)(i,u,c,g,t,s);if(m>0)for(var v=0;v<m;v++){var _=s[v];if(_<=1&&_>=0)return y=r?(0,x.af)(i,u,c,g,_):(0,x.af)(n,h,p,d,_),r?[t,y]:[y,t]}n=d,i=g}}},e}(b.ZP),I=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i.ZT)(e,t),e}(O),M=function(t){function e(e){var n=t.call(this,e)||this;return n.type="ec-polygon",n}return(0,i.ZT)(e,t),e.prototype.getDefaultShape=function(){return new I},e.prototype.buildPath=function(t,e){var n=e.points,i=e.stackedOnPoints,o=0,a=n.length/2,r=e.smoothMonotone;if(e.connectNulls){for(;a>0&&P(n[2*a-2],n[2*a-1]);a--);for(;o<a&&P(n[2*o],n[2*o+1]);o++);}for(;o<a;){var s=D(t,n,o,a,a,1,e.smooth,r,e.connectNulls);D(t,i,o+s-1,s,a,-1,e.stackedOnSmooth,r,e.connectNulls),o+=s+1,t.closePath()}},e}(b.ZP),A=n(75797),L=n(22963),C=n(31073),T=n(26357),Z=n(36006),G=n(33140),z=n(30106),E=n(78988);function R(t,e){if(t.length===e.length){for(var n=0;n<t.length;n++)if(t[n]!==e[n])return;return!0}}function V(t){for(var e=1/0,n=1/0,i=-1/0,o=-1/0,a=0;a<t.length;){var r=t[a++],s=t[a++];isNaN(r)||(e=Math.min(r,e),i=Math.max(r,i)),isNaN(s)||(n=Math.min(s,n),o=Math.max(s,o))}return[[e,n],[i,o]]}function H(t,e){var n=V(t),i=n[0],o=n[1],a=V(e),r=a[0],s=a[1];return Math.max(Math.abs(i[0]-r[0]),Math.abs(i[1]-r[1]),Math.abs(o[0]-s[0]),Math.abs(o[1]-s[1]))}function F(t){return"number"==typeof t?t:t?.5:0}function W(t,e,n){for(var i=e.getBaseAxis(),o="x"===i.dim||"radius"===i.dim?0:1,a=[],r=0,s=[],l=[],h=[];r<t.length-2;r+=2)switch(h[0]=t[r+2],h[1]=t[r+3],l[0]=t[r],l[1]=t[r+1],a.push(l[0],l[1]),n){case"end":s[o]=h[o],s[1-o]=l[1-o],a.push(s[0],s[1]);break;case"middle":var u=(l[o]+h[o])/2,p=[];s[o]=p[o]=u,s[1-o]=l[1-o],p[1-o]=h[1-o],a.push(s[0],s[1]),a.push(p[0],p[1]);break;default:s[o]=l[o],s[1-o]=h[1-o],a.push(s[0],s[1])}return a.push(t[r++],t[r++]),a}function B(t,e){return[t[2*e],t[2*e+1]]}function U(t,e,n,i){if((0,C.H)(e,"cartesian2d")){var o=i.getModel("endLabel"),a=o.get("show"),r=o.get("valueAnimation"),s=i.getData(),l={lastFrameIndex:0},h=a?function(n,i){t._endLabelOnDuring(n,i,s,l,r,o,e)}:null,u=e.getBaseAxis().isHorizontal(),p=(0,L.ID)(e,n,i,(function(){var e=t._endLabel;e&&n&&null!=l.originalX&&e.attr({x:l.originalX,y:l.originalY})}),h);if(!i.get("clip",!0)){var c=p.shape,d=Math.max(c.width,c.height);u?(c.y-=d,c.height+=2*d):(c.x-=d,c.width+=2*d)}return h&&h(1,p),p}return(0,L.X0)(e,n,i)}var X=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i.ZT)(e,t),e.prototype.init=function(){var t=new s.Z,e=new u.Z;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},e.prototype.render=function(t,e,n){var i=this,o=t.coordinateSystem,a=this.group,r=t.getData(),s=t.getModel("lineStyle"),l=t.getModel("areaStyle"),u=r.getLayout("points")||[],c="polar"===o.type,y=this._coordSys,v=this._symbolDraw,_=this._polyline,b=this._polygon,S=this._lineGroup,x=t.get("animation"),w=!l.isEmpty(),k=l.get("origin"),P=d(o,r,k),D=w&&function(t,e,n){if(!n.valueDim)return[];for(var i=e.count(),o=(0,f.o)(2*i),a=0;a<i;a++){var r=g(n,t,e,a);o[2*a]=r[0],o[2*a+1]=r[1]}return o}(o,r,P),O=t.get("showSymbol"),N=O&&!c&&function(t,e,n){var i=t.get("showAllSymbol"),o="auto"===i;if(!i||o){var a=n.getAxesByScale("ordinal")[0];if(a&&(!o||!function(t,e){var n=t.getExtent(),i=Math.abs(n[1]-n[0])/t.scale.count();isNaN(i)&&(i=0);for(var o=e.count(),a=Math.max(1,Math.round(o/5)),r=0;r<o;r+=a)if(1.5*p.Z.getSymbolSize(e,r)[t.isHorizontal()?1:0]>i)return!1;return!0}(a,e))){var r=e.mapDimension(a.dim),s={};return h.S6(a.getViewLabels(),(function(t){var e=a.scale.getRawOrdinalNumber(t.tickValue);s[e]=1})),function(t){return!s.hasOwnProperty(e.get(r,t))}}}}(t,r,o),I=this._data;I&&I.eachItemGraphicEl((function(t,e){t.__temp&&(a.remove(t),I.setItemGraphicEl(e,null))})),O||v.remove(),a.add(S);var M,A=!c&&t.get("step");o&&o.getArea&&t.get("clip",!0)&&(null!=(M=o.getArea()).width?(M.x-=.1,M.y-=.1,M.width+=.2,M.height+=.2):M.r0&&(M.r0-=.5,M.r+=.5)),this._clipShapeForSymbol=M;var L=function(t,e){var n=t.getVisual("visualMeta");if(n&&n.length&&t.count()&&"cartesian2d"===e.type){for(var i,o,a=n.length-1;a>=0;a--){var r=n[a].dimension,s=t.dimensions[r],l=t.getDimensionInfo(s);if("x"===(i=l&&l.coordDim)||"y"===i){o=n[a];break}}if(o){var u=e.getAxis(i),p=h.UI(o.stops,(function(t){return{offset:0,coord:u.toGlobalCoord(u.dataToCoord(t.value,!0)),color:t.color}})),c=p.length,d=o.outerColors.slice();c&&p[0].coord>p[c-1].coord&&(p.reverse(),d.reverse());var g=p[0].coord-10,f=p[c-1].coord+10,y=f-g;if(y<.001)return"transparent";h.S6(p,(function(t){t.offset=(t.coord-g)/y})),p.push({offset:c?p[c-1].offset:.5,color:d[1]||"transparent"}),p.unshift({offset:c?p[0].offset:.5,color:d[0]||"transparent"});var v=new m.Z(0,0,0,0,p,!0);return v[i]=g,v[i+"2"]=f,v}}}(r,o)||r.getVisual("style")[r.getVisual("drawType")];_&&y.type===o.type&&A===this._step?(w&&!b?b=this._newPolygon(u,D):b&&!w&&(S.remove(b),b=this._polygon=null),c||this._initOrUpdateEndLabel(t,o,(0,E.Lz)(L)),S.setClipPath(U(this,o,!1,t)),O&&v.updateData(r,{isIgnore:N,clipShape:M,disableAnimation:!0,getSymbolPoint:function(t){return[u[2*t],u[2*t+1]]}}),R(this._stackedOnPoints,D)&&R(this._points,u)||(x?this._doUpdateAnimation(r,D,o,n,A,k):(A&&(u=W(u,o,A),D&&(D=W(D,o,A))),_.setShape({points:u}),b&&b.setShape({points:u,stackedOnPoints:D})))):(O&&v.updateData(r,{isIgnore:N,clipShape:M,disableAnimation:!0,getSymbolPoint:function(t){return[u[2*t],u[2*t+1]]}}),x&&this._initSymbolLabelAnimation(r,o,M),A&&(u=W(u,o,A),D&&(D=W(D,o,A))),_=this._newPolyline(u),w&&(b=this._newPolygon(u,D)),c||this._initOrUpdateEndLabel(t,o,(0,E.Lz)(L)),S.setClipPath(U(this,o,!0,t)));var C=t.get(["emphasis","focus"]),Z=t.get(["emphasis","blurScope"]);_.useStyle(h.ce(s.getLineStyle(),{fill:"none",stroke:L,lineJoin:"bevel"})),(0,T.WO)(_,t,"lineStyle"),_.style.lineWidth>0&&"bolder"===t.get(["emphasis","lineStyle","width"])&&(_.getState("emphasis").style.lineWidth=+_.style.lineWidth+1),(0,z.A)(_).seriesIndex=t.seriesIndex,(0,T.vF)(_,C,Z);var G=F(t.get("smooth")),V=t.get("smoothMonotone"),H=t.get("connectNulls");if(_.setShape({smooth:G,smoothMonotone:V,connectNulls:H}),b){var B=r.getCalculationInfo("stackedOnSeries"),X=0;b.useStyle(h.ce(l.getAreaStyle(),{fill:L,opacity:.7,lineJoin:"bevel",decal:r.getVisual("style").decal})),B&&(X=F(B.get("smooth"))),b.setShape({smooth:G,stackedOnSmooth:X,smoothMonotone:V,connectNulls:H}),(0,T.WO)(b,t,"areaStyle"),(0,z.A)(b).seriesIndex=t.seriesIndex,(0,T.vF)(b,C,Z)}var Y=function(t){i._changePolyState(t)};r.eachItemGraphicEl((function(t){t&&(t.onHoverStateChange=Y)})),this._polyline.onHoverStateChange=Y,this._data=r,this._coordSys=o,this._stackedOnPoints=D,this._points=u,this._step=A,this._valueOrigin=k},e.prototype.dispose=function(){},e.prototype.highlight=function(t,e,n,i){var o=t.getData(),a=_.gO(o,i);if(this._changePolyState("emphasis"),!(a instanceof Array)&&null!=a&&a>=0){var r=o.getLayout("points"),s=o.getItemGraphicEl(a);if(!s){var l=r[2*a],h=r[2*a+1];if(isNaN(l)||isNaN(h))return;if(this._clipShapeForSymbol&&!this._clipShapeForSymbol.contain(l,h))return;var u=t.get("zlevel"),c=t.get("z");(s=new p.Z(o,a)).x=l,s.y=h,s.setZ(u,c);var d=s.getSymbolPath().getTextContent();d&&(d.zlevel=u,d.z=c,d.z2=this._polyline.z2+1),s.__temp=!0,o.setItemGraphicEl(a,s),s.stopSymbolAnimation(!0),this.group.add(s)}s.highlight()}else A.Z.prototype.highlight.call(this,t,e,n,i)},e.prototype.downplay=function(t,e,n,i){var o=t.getData(),a=_.gO(o,i);if(this._changePolyState("normal"),null!=a&&a>=0){var r=o.getItemGraphicEl(a);r&&(r.__temp?(o.setItemGraphicEl(a,null),this.group.remove(r)):r.downplay())}else A.Z.prototype.downplay.call(this,t,e,n,i)},e.prototype._changePolyState=function(t){var e=this._polygon;(0,T.Gl)(this._polyline,t),e&&(0,T.Gl)(e,t)},e.prototype._newPolyline=function(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new N({shape:{points:t},segmentIgnoreThreshold:2,z2:10}),this._lineGroup.add(e),this._polyline=e,e},e.prototype._newPolygon=function(t,e){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new M({shape:{points:t,stackedOnPoints:e},segmentIgnoreThreshold:2}),this._lineGroup.add(n),this._polygon=n,n},e.prototype._initSymbolLabelAnimation=function(t,e,n){var i,o,a=e.getBaseAxis(),r=a.inverse;"cartesian2d"===e.type?(i=a.isHorizontal(),o=!1):"polar"===e.type&&(i="angle"===a.dim,o=!0);var s=t.hostModel,l=s.get("animationDuration");"function"==typeof l&&(l=l(null));var h=s.get("animationDelay")||0,u="function"==typeof h?h(null):h;t.eachItemGraphicEl((function(t,a){var s=t;if(s){var p=[t.x,t.y],c=void 0,d=void 0,g=void 0;if(n)if(o){var f=n,y=e.pointToCoord(p);i?(c=f.startAngle,d=f.endAngle,g=-y[1]/180*Math.PI):(c=f.r0,d=f.r,g=y[0])}else{var m=n;i?(c=m.x,d=m.x+m.width,g=t.x):(c=m.y+m.height,d=m.y,g=t.y)}var v=d===c?0:(g-c)/(d-c);r&&(v=1-v);var _="function"==typeof h?h(a):l*v+u,b=s.getSymbolPath(),S=b.getTextContent();s.attr({scaleX:0,scaleY:0}),s.animateTo({scaleX:1,scaleY:1},{duration:200,delay:_}),S&&S.animateFrom({style:{opacity:0}},{duration:300,delay:_}),b.disableLabelAnimation=!0}}))},e.prototype._initOrUpdateEndLabel=function(t,e,n){var i=t.getModel("endLabel");if(i.get("show")){var o=t.getData(),a=this._polyline,r=this._endLabel;r||((r=this._endLabel=new v.ZP({z2:200})).ignoreClip=!0,a.setTextContent(this._endLabel),a.disableLabelAnimation=!0);var s=function(t){for(var e,n,i=t.length/2;i>0&&(e=t[2*i-2],n=t[2*i-1],isNaN(e)||isNaN(n));i--);return i-1}(o.getLayout("points"));s>=0&&((0,Z.ni)(a,(0,Z.k3)(t,"endLabel"),{inheritColor:n,labelFetcher:t,labelDataIndex:s,defaultText:function(t,e,n){return null!=n?(0,G.O)(o,n):(0,G.H)(o,t)},enableTextSetter:!0},function(t,e){var n=e.getBaseAxis(),i=n.isHorizontal(),o=n.inverse,a=i?o?"right":"left":"center",r=i?"middle":o?"top":"bottom";return{normal:{align:t.get("align")||a,verticalAlign:t.get("verticalAlign")||r}}}(i,e)),a.textConfig.position=null)}else this._endLabel&&(this._polyline.removeTextContent(),this._endLabel=null)},e.prototype._endLabelOnDuring=function(t,e,n,i,o,a,r){var s=this._endLabel,l=this._polyline;if(s){t<1&&null==i.originalX&&(i.originalX=s.x,i.originalY=s.y);var h=n.getLayout("points"),u=n.hostModel,p=u.get("connectNulls"),c=a.get("precision"),d=a.get("distance")||0,g=r.getBaseAxis(),f=g.isHorizontal(),y=g.inverse,m=e.shape,v=y?f?m.x:m.y+m.height:f?m.x+m.width:m.y,b=(f?d:0)*(y?-1:1),S=(f?0:-d)*(y?-1:1),x=f?"x":"y",w=function(t,e,n){for(var i,o,a=t.length/2,r="x"===n?0:1,s=0,l=-1,h=0;h<a;h++)if(o=t[2*h+r],!isNaN(o)&&!isNaN(t[2*h+1-r]))if(0!==h){if(i<=e&&o>=e||i>=e&&o<=e){l=h;break}s=h,i=o}else i=o;return{range:[s,l],t:(e-i)/(o-i)}}(h,v,x),k=w.range,P=k[1]-k[0],D=void 0;if(P>=1){if(P>1&&!p){var O=B(h,k[0]);s.attr({x:O[0]+b,y:O[1]+S}),o&&(D=u.getRawValue(k[0]))}else{(O=l.getPointOn(v,x))&&s.attr({x:O[0]+b,y:O[1]+S});var N=u.getRawValue(k[0]),I=u.getRawValue(k[1]);o&&(D=_.pk(n,c,N,I,w.t))}i.lastFrameIndex=k[0]}else{var M=1===t||i.lastFrameIndex>0?k[0]:0;O=B(h,M),o&&(D=u.getRawValue(M)),s.attr({x:O[0]+b,y:O[1]+S})}o&&(0,Z.qA)(s).setLabelText(D)}},e.prototype._doUpdateAnimation=function(t,e,n,i,o,a){var r=this._polyline,s=this._polygon,l=t.hostModel,h=function(t,e,n,i,o,a,r,s){for(var l=function(t,e){var n=[];return e.diff(t).add((function(t){n.push({cmd:"+",idx:t})})).update((function(t,e){n.push({cmd:"=",idx:e,idx1:t})})).remove((function(t){n.push({cmd:"-",idx:t})})).execute(),n}(t,e),h=[],u=[],p=[],c=[],y=[],m=[],v=[],_=d(o,e,r),b=t.getLayout("points")||[],S=e.getLayout("points")||[],x=0;x<l.length;x++){var w=l[x],k=!0,P=void 0,D=void 0;switch(w.cmd){case"=":P=2*w.idx,D=2*w.idx1;var O=b[P],N=b[P+1],I=S[D],M=S[D+1];(isNaN(O)||isNaN(N))&&(O=I,N=M),h.push(O,N),u.push(I,M),p.push(n[P],n[P+1]),c.push(i[D],i[D+1]),v.push(e.getRawIndex(w.idx1));break;case"+":var A=w.idx,L=_.dataDimsForPoint,C=o.dataToPoint([e.get(L[0],A),e.get(L[1],A)]);D=2*A,h.push(C[0],C[1]),u.push(S[D],S[D+1]);var T=g(_,o,e,A);p.push(T[0],T[1]),c.push(i[D],i[D+1]),v.push(e.getRawIndex(A));break;case"-":k=!1}k&&(y.push(w),m.push(m.length))}m.sort((function(t,e){return v[t]-v[e]}));var Z=h.length,G=(0,f.o)(Z),z=(0,f.o)(Z),E=(0,f.o)(Z),R=(0,f.o)(Z),V=[];for(x=0;x<m.length;x++){var H=m[x],F=2*x,W=2*H;G[F]=h[W],G[F+1]=h[W+1],z[F]=u[W],z[F+1]=u[W+1],E[F]=p[W],E[F+1]=p[W+1],R[F]=c[W],R[F+1]=c[W+1],V[x]=y[H]}return{current:G,next:z,stackedOnCurrent:E,stackedOnNext:R,status:V}}(this._data,t,this._stackedOnPoints,e,this._coordSys,0,this._valueOrigin),u=h.current,p=h.stackedOnCurrent,c=h.next,m=h.stackedOnNext;if(o&&(u=W(h.current,n,o),p=W(h.stackedOnCurrent,n,o),c=W(h.next,n,o),m=W(h.stackedOnNext,n,o)),H(u,c)>3e3||s&&H(p,m)>3e3)return r.setShape({points:c}),void(s&&s.setShape({points:c,stackedOnPoints:m}));r.shape.__points=h.current,r.shape.points=u;var v={shape:{points:c}};h.current!==u&&(v.shape.__points=h.next),r.stopAnimation(),y.updateProps(r,v,l),s&&(s.setShape({points:u,stackedOnPoints:p}),s.stopAnimation(),y.updateProps(s,{shape:{stackedOnPoints:m}},l),r.shape.points!==s.shape.points&&(s.shape.points=r.shape.points));for(var _=[],b=h.status,S=0;S<b.length;S++)if("="===b[S].cmd){var x=t.getItemGraphicEl(b[S].idx1);x&&_.push({el:x,ptIdx:S})}r.animators&&r.animators.length&&r.animators[0].during((function(){s&&s.dirtyShape();for(var t=r.shape.__points,e=0;e<_.length;e++){var n=_[e].el,i=2*_[e].ptIdx;n.x=t[i],n.y=t[i+1],n.markRedraw()}}))},e.prototype.remove=function(t){var e=this.group,n=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),n&&n.eachItemGraphicEl((function(t,i){t.__temp&&(e.remove(t),n.setItemGraphicEl(i,null))})),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._endLabel=this._data=null},e.type="line",e}(A.Z),Y=n(21149),q=n(64088);function J(t){t.registerChartView(X),t.registerSeriesModel(l),t.registerLayout((0,Y.Z)("line",!0)),t.registerVisual({seriesType:"line",reset:function(t){var e=t.getData(),n=t.getModel("lineStyle").getLineStyle();n&&!n.stroke&&(n.stroke=e.getVisual("style").fill),e.setVisual("legendLineStyle",n)}}),t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC,(0,q.Z)("line"))}}}]);
//# sourceMappingURL=vendors~94c62a79.68c869.js.map