(self.webpackChunkvue2_element_admin=self.webpackChunkvue2_element_admin||[]).push([[4585],{85823:function(t,e,i){"use strict";var r=i(87411),o=i(95622),n=i(60479),s=i(23510),a=i(80423),h=i(33051),l=i(4990),u=i(21092),p=i(66387),c=i(14414),f="__zr_normal__",d=["x","y","scaleX","scaleY","originX","originY","rotation","ignore"],g={x:!0,y:!0,scaleX:!0,scaleY:!0,originX:!0,originY:!0,rotation:!0,ignore:!1},_={},v=new n.Z(0,0,0,0),y=function(){function t(t){this.id=(0,h.M8)(),this.animators=[],this.currentStates=[],this.states={},this._init(t)}return t.prototype._init=function(t){this.attr(t)},t.prototype.drift=function(t,e,i){switch(this.draggable){case"horizontal":e=0;break;case"vertical":t=0}var r=this.transform;r||(r=this.transform=[1,0,0,1,0,0]),r[4]+=t,r[5]+=e,this.decomposeTransform(),this.markRedraw()},t.prototype.beforeUpdate=function(){},t.prototype.afterUpdate=function(){},t.prototype.update=function(){this.updateTransform(),this.__dirty&&this.updateInnerText()},t.prototype.updateInnerText=function(t){var e=this._textContent;if(e&&(!e.ignore||t)){this.textConfig||(this.textConfig={});var i=this.textConfig,r=i.local,o=e.attachedTransform,n=void 0,s=void 0,h=!1;o.parent=r?this:null;var l=!1;if(o.x=e.x,o.y=e.y,o.originX=e.originX,o.originY=e.originY,o.rotation=e.rotation,o.scaleX=e.scaleX,o.scaleY=e.scaleY,null!=i.position){var u=v;i.layoutRect?u.copy(i.layoutRect):u.copy(this.getBoundingRect()),r||u.applyTransform(this.transform),this.calculateTextPosition?this.calculateTextPosition(_,i,u):(0,a.wI)(_,i,u),o.x=_.x,o.y=_.y,n=_.align,s=_.verticalAlign;var p=i.origin;if(p&&null!=i.rotation){var f=void 0,d=void 0;"center"===p?(f=.5*u.width,d=.5*u.height):(f=(0,a.GM)(p[0],u.width),d=(0,a.GM)(p[1],u.height)),l=!0,o.originX=-o.x+f+(r?0:u.x),o.originY=-o.y+d+(r?0:u.y)}}null!=i.rotation&&(o.rotation=i.rotation);var g=i.offset;g&&(o.x+=g[0],o.y+=g[1],l||(o.originX=-g[0],o.originY=-g[1]));var y=null==i.inside?"string"==typeof i.position&&i.position.indexOf("inside")>=0:i.inside,m=this._innerTextDefaultStyle||(this._innerTextDefaultStyle={}),x=void 0,T=void 0,S=void 0;y&&this.canBeInsideText()?(x=i.insideFill,T=i.insideStroke,null!=x&&"auto"!==x||(x=this.getInsideTextFill()),null!=T&&"auto"!==T||(T=this.getInsideTextStroke(x),S=!0)):(x=i.outsideFill,T=i.outsideStroke,null!=x&&"auto"!==x||(x=this.getOutsideFill()),null!=T&&"auto"!==T||(T=this.getOutsideStroke(x),S=!0)),(x=x||"#000")===m.fill&&T===m.stroke&&S===m.autoStroke&&n===m.align&&s===m.verticalAlign||(h=!0,m.fill=x,m.stroke=T,m.autoStroke=S,m.align=n,m.verticalAlign=s,e.setDefaultTextStyle(m)),e.__dirty|=c.Zu,h&&e.dirtyStyle(!0)}},t.prototype.canBeInsideText=function(){return!0},t.prototype.getInsideTextFill=function(){return"#fff"},t.prototype.getInsideTextStroke=function(t){return"#000"},t.prototype.getOutsideFill=function(){return this.__zr&&this.__zr.isDarkMode()?l.GD:l.vU},t.prototype.getOutsideStroke=function(t){var e=this.__zr&&this.__zr.getBackgroundColor(),i="string"==typeof e&&(0,u.Qc)(e);i||(i=[255,255,255,1]);for(var r=i[3],o=this.__zr.isDarkMode(),n=0;n<3;n++)i[n]=i[n]*r+(o?0:255)*(1-r);return i[3]=1,(0,u.Pz)(i,"rgba")},t.prototype.traverse=function(t,e){},t.prototype.attrKV=function(t,e){"textConfig"===t?this.setTextConfig(e):"textContent"===t?this.setTextContent(e):"clipPath"===t?this.setClipPath(e):"extra"===t?(this.extra=this.extra||{},(0,h.l7)(this.extra,e)):this[t]=e},t.prototype.hide=function(){this.ignore=!0,this.markRedraw()},t.prototype.show=function(){this.ignore=!1,this.markRedraw()},t.prototype.attr=function(t,e){if("string"==typeof t)this.attrKV(t,e);else if((0,h.Kn)(t))for(var i=t,r=(0,h.XP)(i),o=0;o<r.length;o++){var n=r[o];this.attrKV(n,t[n])}return this.markRedraw(),this},t.prototype.saveCurrentToNormalState=function(t){this._innerSaveToNormal(t);for(var e=this._normalState,i=0;i<this.animators.length;i++){var r=this.animators[i],o=r.__fromStateTransition;if(!o||o===f){var n=r.targetName,s=n?e[n]:e;r.saveFinalToTarget(s)}}},t.prototype._innerSaveToNormal=function(t){var e=this._normalState;e||(e=this._normalState={}),t.textConfig&&!e.textConfig&&(e.textConfig=this.textConfig),this._savePrimaryToNormal(t,e,d)},t.prototype._savePrimaryToNormal=function(t,e,i){for(var r=0;r<i.length;r++){var o=i[r];null==t[o]||o in e||(e[o]=this[o])}},t.prototype.hasState=function(){return this.currentStates.length>0},t.prototype.getState=function(t){return this.states[t]},t.prototype.ensureState=function(t){var e=this.states;return e[t]||(e[t]={}),e[t]},t.prototype.clearStates=function(t){this.useState(f,!1,t)},t.prototype.useState=function(t,e,i,r){var o=t===f;if(this.hasState()||!o){var n=this.currentStates,s=this.stateTransition;if(!((0,h.cq)(n,t)>=0)||!e&&1!==n.length){var a;if(this.stateProxy&&!o&&(a=this.stateProxy(t)),a||(a=this.states&&this.states[t]),a||o){o||this.saveCurrentToNormalState(a);var l=!!(a&&a.hoverLayer||r);l&&this._toggleHoverLayerFlag(!0),this._applyStateObj(t,a,this._normalState,e,!i&&!this.__inHover&&s&&s.duration>0,s);var u=this._textContent,p=this._textGuide;return u&&u.useState(t,e,i,l),p&&p.useState(t,e,i,l),o?(this.currentStates=[],this._normalState={}):e?this.currentStates.push(t):this.currentStates=[t],this._updateAnimationTargets(),this.markRedraw(),!l&&this.__inHover&&(this._toggleHoverLayerFlag(!1),this.__dirty&=~c.Zu),a}(0,h.H)("State "+t+" not exists.")}}},t.prototype.useStates=function(t,e,i){if(t.length){var r=[],o=this.currentStates,n=t.length,s=n===o.length;if(s)for(var a=0;a<n;a++)if(t[a]!==o[a]){s=!1;break}if(s)return;for(a=0;a<n;a++){var h=t[a],l=void 0;this.stateProxy&&(l=this.stateProxy(h,t)),l||(l=this.states[h]),l&&r.push(l)}var u=r[n-1],p=!!(u&&u.hoverLayer||i);p&&this._toggleHoverLayerFlag(!0);var f=this._mergeStates(r),d=this.stateTransition;this.saveCurrentToNormalState(f),this._applyStateObj(t.join(","),f,this._normalState,!1,!e&&!this.__inHover&&d&&d.duration>0,d);var g=this._textContent,_=this._textGuide;g&&g.useStates(t,e,p),_&&_.useStates(t,e,p),this._updateAnimationTargets(),this.currentStates=t.slice(),this.markRedraw(),!p&&this.__inHover&&(this._toggleHoverLayerFlag(!1),this.__dirty&=~c.Zu)}else this.clearStates()},t.prototype._updateAnimationTargets=function(){for(var t=0;t<this.animators.length;t++){var e=this.animators[t];e.targetName&&e.changeTarget(this[e.targetName])}},t.prototype.removeState=function(t){var e=(0,h.cq)(this.currentStates,t);if(e>=0){var i=this.currentStates.slice();i.splice(e,1),this.useStates(i)}},t.prototype.replaceState=function(t,e,i){var r=this.currentStates.slice(),o=(0,h.cq)(r,t),n=(0,h.cq)(r,e)>=0;o>=0?n?r.splice(o,1):r[o]=e:i&&!n&&r.push(e),this.useStates(r)},t.prototype.toggleState=function(t,e){e?this.useState(t,!0):this.removeState(t)},t.prototype._mergeStates=function(t){for(var e,i={},r=0;r<t.length;r++){var o=t[r];(0,h.l7)(i,o),o.textConfig&&(e=e||{},(0,h.l7)(e,o.textConfig))}return e&&(i.textConfig=e),i},t.prototype._applyStateObj=function(t,e,i,r,o,n){var s=!(e&&r);e&&e.textConfig?(this.textConfig=(0,h.l7)({},r?this.textConfig:i.textConfig),(0,h.l7)(this.textConfig,e.textConfig)):s&&i.textConfig&&(this.textConfig=i.textConfig);for(var a={},l=!1,u=0;u<d.length;u++){var p=d[u],c=o&&g[p];e&&null!=e[p]?c?(l=!0,a[p]=e[p]):this[p]=e[p]:s&&null!=i[p]&&(c?(l=!0,a[p]=i[p]):this[p]=i[p])}if(!o)for(u=0;u<this.animators.length;u++){var f=this.animators[u],_=f.targetName;f.__changeFinalValue(_?(e||i)[_]:e||i)}l&&this._transitionState(t,a,n)},t.prototype._attachComponent=function(t){if(t.__zr&&!t.__hostTarget)throw new Error("Text element has been added to zrender.");if(t===this)throw new Error("Recursive component attachment.");var e=this.__zr;e&&t.addSelfToZr(e),t.__zr=e,t.__hostTarget=this},t.prototype._detachComponent=function(t){t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__hostTarget=null},t.prototype.getClipPath=function(){return this._clipPath},t.prototype.setClipPath=function(t){this._clipPath&&this._clipPath!==t&&this.removeClipPath(),this._attachComponent(t),this._clipPath=t,this.markRedraw()},t.prototype.removeClipPath=function(){var t=this._clipPath;t&&(this._detachComponent(t),this._clipPath=null,this.markRedraw())},t.prototype.getTextContent=function(){return this._textContent},t.prototype.setTextContent=function(t){var e=this._textContent;if(e!==t){if(e&&e!==t&&this.removeTextContent(),t.__zr&&!t.__hostTarget)throw new Error("Text element has been added to zrender.");t.attachedTransform=new r.Z,this._attachComponent(t),this._textContent=t,this.markRedraw()}},t.prototype.setTextConfig=function(t){this.textConfig||(this.textConfig={}),(0,h.l7)(this.textConfig,t),this.markRedraw()},t.prototype.removeTextConfig=function(){this.textConfig=null,this.markRedraw()},t.prototype.removeTextContent=function(){var t=this._textContent;t&&(t.attachedTransform=null,this._detachComponent(t),this._textContent=null,this._innerTextDefaultStyle=null,this.markRedraw())},t.prototype.getTextGuideLine=function(){return this._textGuide},t.prototype.setTextGuideLine=function(t){this._textGuide&&this._textGuide!==t&&this.removeTextGuideLine(),this._attachComponent(t),this._textGuide=t,this.markRedraw()},t.prototype.removeTextGuideLine=function(){var t=this._textGuide;t&&(this._detachComponent(t),this._textGuide=null,this.markRedraw())},t.prototype.markRedraw=function(){this.__dirty|=c.Zu;var t=this.__zr;t&&(this.__inHover?t.refreshHover():t.refresh()),this.__hostTarget&&this.__hostTarget.markRedraw()},t.prototype.dirty=function(){this.markRedraw()},t.prototype._toggleHoverLayerFlag=function(t){this.__inHover=t;var e=this._textContent,i=this._textGuide;e&&(e.__inHover=t),i&&(i.__inHover=t)},t.prototype.addSelfToZr=function(t){this.__zr=t;var e=this.animators;if(e)for(var i=0;i<e.length;i++)t.animation.addAnimator(e[i]);this._clipPath&&this._clipPath.addSelfToZr(t),this._textContent&&this._textContent.addSelfToZr(t),this._textGuide&&this._textGuide.addSelfToZr(t)},t.prototype.removeSelfFromZr=function(t){this.__zr=null;var e=this.animators;if(e)for(var i=0;i<e.length;i++)t.animation.removeAnimator(e[i]);this._clipPath&&this._clipPath.removeSelfFromZr(t),this._textContent&&this._textContent.removeSelfFromZr(t),this._textGuide&&this._textGuide.removeSelfFromZr(t)},t.prototype.animate=function(t,e){var i=t?this[t]:this;if(i){var r=new o.ZP(i,e);return this.addAnimator(r,t),r}(0,h.H)('Property "'+t+'" is not existed in element '+this.id)},t.prototype.addAnimator=function(t,e){var i=this.__zr,r=this;t.during((function(){r.updateDuringAnimation(e)})).done((function(){var e=r.animators,i=(0,h.cq)(e,t);i>=0&&e.splice(i,1)})),this.animators.push(t),i&&i.animation.addAnimator(t),i&&i.wakeUp()},t.prototype.updateDuringAnimation=function(t){this.markRedraw()},t.prototype.stopAnimation=function(t,e){for(var i=this.animators,r=i.length,o=[],n=0;n<r;n++){var s=i[n];t&&t!==s.scope?o.push(s):s.stop(e)}return this.animators=o,this},t.prototype.animateTo=function(t,e,i){m(this,t,e,i)},t.prototype.animateFrom=function(t,e,i){m(this,t,e,i,!0)},t.prototype._transitionState=function(t,e,i,r){for(var o=m(this,e,i,r),n=0;n<o.length;n++)o[n].__fromStateTransition=t},t.prototype.getBoundingRect=function(){return null},t.prototype.getPaintRect=function(){return null},t.initDefaultProps=function(){var e=t.prototype;e.type="element",e.name="",e.ignore=!1,e.silent=!1,e.isGroup=!1,e.draggable=!1,e.dragging=!1,e.ignoreClip=!1,e.__inHover=!1,e.__dirty=c.Zu;var i={};function r(t,e,r){i[t+e+r]||(console.warn("DEPRECATED: '"+t+"' has been deprecated. use '"+e+"', '"+r+"' instead"),i[t+e+r]=!0)}function o(t,i,o,n){function s(t,e){Object.defineProperty(e,0,{get:function(){return t[o]},set:function(e){t[o]=e}}),Object.defineProperty(e,1,{get:function(){return t[n]},set:function(e){t[n]=e}})}Object.defineProperty(e,t,{get:function(){return r(t,o,n),this[i]||s(this,this[i]=[]),this[i]},set:function(e){r(t,o,n),this[o]=e[0],this[n]=e[1],this[i]=e,s(this,e)}})}Object.defineProperty&&(!p.Z.browser.ie||p.Z.browser.version>8)&&(o("position","_legacyPos","x","y"),o("scale","_legacyScale","scaleX","scaleY"),o("origin","_legacyOrigin","originX","originY"))}(),t}();function m(t,e,i,r,o){var n=[];S(t,"",t,e,i=i||{},r,n,o);var s=n.length,a=!1,h=i.done,l=i.aborted,u=function(){a=!0,--s<=0&&(a?h&&h():l&&l())},p=function(){--s<=0&&(a?h&&h():l&&l())};s||h&&h(),n.length>0&&i.during&&n[0].during((function(t,e){i.during(e)}));for(var c=0;c<n.length;c++){var f=n[c];u&&f.done(u),p&&f.aborted(p),f.start(i.easing,i.force)}return n}function x(t,e,i){for(var r=0;r<i;r++)t[r]=e[r]}function T(t,e,i){if((0,h.zG)(e[i]))if((0,h.zG)(t[i])||(t[i]=[]),(0,h.fU)(e[i])){var r=e[i].length;t[i].length!==r&&(t[i]=new e[i].constructor(r),x(t[i],e[i],r))}else{var o=e[i],n=t[i],s=o.length;if(u=o,(0,h.zG)(u[0]))for(var a=o[0].length,l=0;l<s;l++)n[l]?x(n[l],o[l],a):n[l]=Array.prototype.slice.call(o[l]);else x(n,o,s);n.length=o.length}else t[i]=e[i];var u}function S(t,e,i,r,n,s,a,l){for(var u=[],p=[],c=(0,h.XP)(r),f=n.duration,d=n.delay,g=n.additive,_=n.setToFinal,v=!(0,h.Kn)(s),y=0;y<c.length;y++)if(null!=i[L=c[y]]&&null!=r[L]&&(v||s[L]))if((0,h.Kn)(r[L])&&!(0,h.zG)(r[L])){if(e){l||(i[L]=r[L],t.updateDuringAnimation(e));continue}S(t,L,i[L],r[L],n,s&&s[L],a,l)}else u.push(L),p.push(L);else l||(i[L]=r[L],t.updateDuringAnimation(e),p.push(L));var m=u.length;if(m>0||n.force&&!a.length){for(var x=t.animators,C=[],w=0;w<x.length;w++)x[w].targetName===e&&C.push(x[w]);if(!g&&C.length)for(w=0;w<C.length;w++)if(C[w].stopTracks(p)){var z=(0,h.cq)(x,C[w]);x.splice(z,1)}var P=void 0,b=void 0,k=void 0;if(l)for(b={},_&&(P={}),w=0;w<m;w++)b[L=u[w]]=i[L],_?P[L]=r[L]:i[L]=r[L];else if(_)for(k={},w=0;w<m;w++){var L;k[L=u[w]]=(0,o.Ve)(i[L]),T(i,r,L)}var Z=new o.ZP(i,!1,g?C:null);Z.targetName=e,n.scope&&(Z.scope=n.scope),_&&P&&Z.whenWithKeys(0,P,u),k&&Z.whenWithKeys(0,k,u),Z.whenWithKeys(null==f?500:f,l?b:r,u).delay(d||0),t.addAnimator(Z,e),a.push(Z)}}(0,h.jB)(y,s.Z),(0,h.jB)(y,r.Z),e.Z=y},48173:function(t,e,i){"use strict";var r=i(70655),o=i(33051),n=i(45280),s=i(17780),a=i(23510),h=i(61158),l=i(49399),u="silent";function p(){h.sT(this.event)}var c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handler=null,e}return(0,r.ZT)(e,t),e.prototype.dispose=function(){},e.prototype.setCursor=function(){},e}(a.Z),f=function(t,e){this.x=t,this.y=e},d=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],g=function(t){function e(e,i,r,o){var n=t.call(this)||this;return n._hovered=new f(0,0),n.storage=e,n.painter=i,n.painterRoot=o,r=r||new c,n.proxy=null,n.setHandlerProxy(r),n._draggingMgr=new s.Z(n),n}return(0,r.ZT)(e,t),e.prototype.setHandlerProxy=function(t){this.proxy&&this.proxy.dispose(),t&&(o.S6(d,(function(e){t.on&&t.on(e,this[e],this)}),this),t.handler=this),this.proxy=t},e.prototype.mousemove=function(t){var e=t.zrX,i=t.zrY,r=v(this,e,i),o=this._hovered,n=o.target;n&&!n.__zr&&(n=(o=this.findHover(o.x,o.y)).target);var s=this._hovered=r?new f(e,i):this.findHover(e,i),a=s.target,h=this.proxy;h.setCursor&&h.setCursor(a?a.cursor:"default"),n&&a!==n&&this.dispatchToElement(o,"mouseout",t),this.dispatchToElement(s,"mousemove",t),a&&a!==n&&this.dispatchToElement(s,"mouseover",t)},e.prototype.mouseout=function(t){var e=t.zrEventControl;"only_globalout"!==e&&this.dispatchToElement(this._hovered,"mouseout",t),"no_globalout"!==e&&this.trigger("globalout",{type:"globalout",event:t})},e.prototype.resize=function(){this._hovered=new f(0,0)},e.prototype.dispatch=function(t,e){var i=this[t];i&&i.call(this,e)},e.prototype.dispose=function(){this.proxy.dispose(),this.storage=null,this.proxy=null,this.painter=null},e.prototype.setCursorStyle=function(t){var e=this.proxy;e.setCursor&&e.setCursor(t)},e.prototype.dispatchToElement=function(t,e,i){var r=(t=t||{}).target;if(!r||!r.silent){for(var o="on"+e,n=function(t,e,i){return{type:t,event:i,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:i.zrX,offsetY:i.zrY,gestureEvent:i.gestureEvent,pinchX:i.pinchX,pinchY:i.pinchY,pinchScale:i.pinchScale,wheelDelta:i.zrDelta,zrByTouch:i.zrByTouch,which:i.which,stop:p}}(e,t,i);r&&(r[o]&&(n.cancelBubble=!!r[o].call(r,n)),r.trigger(e,n),r=r.__hostTarget?r.__hostTarget:r.parent,!n.cancelBubble););n.cancelBubble||(this.trigger(e,n),this.painter&&this.painter.eachOtherLayer&&this.painter.eachOtherLayer((function(t){"function"==typeof t[o]&&t[o].call(t,n),t.trigger&&t.trigger(e,n)})))}},e.prototype.findHover=function(t,e,i){for(var r=this.storage.getDisplayList(),o=new f(t,e),n=r.length-1;n>=0;n--){var s=void 0;if(r[n]!==i&&!r[n].ignore&&(s=_(r[n],t,e))&&(!o.topTarget&&(o.topTarget=r[n]),s!==u)){o.target=r[n];break}}return o},e.prototype.processGesture=function(t,e){this._gestureMgr||(this._gestureMgr=new l.y);var i=this._gestureMgr;"start"===e&&i.clear();var r=i.recognize(t,this.findHover(t.zrX,t.zrY,null).target,this.proxy.dom);if("end"===e&&i.clear(),r){var o=r.type;t.gestureEvent=o;var n=new f;n.target=r.target,this.dispatchToElement(n,o,r.event)}},e}(a.Z);function _(t,e,i){if(t[t.rectHover?"rectContain":"contain"](e,i)){for(var r=t,o=void 0,n=!1;r;){if(r.ignoreClip&&(n=!0),!n){var s=r.getClipPath();if(s&&!s.contain(e,i))return!1;r.silent&&(o=!0)}r=r.__hostTarget||r.parent}return!o||u}return!1}function v(t,e,i){var r=t.painter;return e<0||e>r.getWidth()||i<0||i>r.getHeight()}o.S6(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],(function(t){g.prototype[t]=function(e){var i,r,o=e.zrX,s=e.zrY,a=v(this,o,s);if("mouseup"===t&&a||(r=(i=this.findHover(o,s)).target),"mousedown"===t)this._downEl=r,this._downPoint=[e.zrX,e.zrY],this._upEl=r;else if("mouseup"===t)this._upEl=r;else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||n.TK(this._downPoint,[e.zrX,e.zrY])>4)return;this._downPoint=null}this.dispatchToElement(i,t,e)}})),e.Z=g},8822:function(t,e,i){"use strict";var r=i(33051),o=i(66387),n=i(19455),s=i(14414),a=!1;function h(){a||(a=!0,console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"))}function l(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}var u=function(){function t(){this._roots=[],this._displayList=[],this._displayListLen=0,this.displayableSortFunc=l}return t.prototype.traverse=function(t,e){for(var i=0;i<this._roots.length;i++)this._roots[i].traverse(t,e)},t.prototype.getDisplayList=function(t,e){e=e||!1;var i=this._displayList;return!t&&i.length||this.updateDisplayList(e),i},t.prototype.updateDisplayList=function(t){this._displayListLen=0;for(var e=this._roots,i=this._displayList,r=0,s=e.length;r<s;r++)this._updateAndAddDisplayable(e[r],null,t);i.length=this._displayListLen,o.Z.canvasSupported&&(0,n.Z)(i,l)},t.prototype._updateAndAddDisplayable=function(t,e,i){if(!t.ignore||i){t.beforeUpdate(),t.update(),t.afterUpdate();var r=t.getClipPath();if(t.ignoreClip)e=null;else if(r){e=e?e.slice():[];for(var o=r,n=t;o;)o.parent=n,o.updateTransform(),e.push(o),n=o,o=o.getClipPath()}if(t.childrenRef){for(var a=t.childrenRef(),l=0;l<a.length;l++){var u=a[l];t.__dirty&&(u.__dirty|=s.Zu),this._updateAndAddDisplayable(u,e,i)}t.__dirty=0}else{var p=t;e&&e.length?p.__clipPaths=e:p.__clipPaths&&p.__clipPaths.length>0&&(p.__clipPaths=[]),isNaN(p.z)&&(h(),p.z=0),isNaN(p.z2)&&(h(),p.z2=0),isNaN(p.zlevel)&&(h(),p.zlevel=0),this._displayList[this._displayListLen++]=p}var c=t.getDecalElement&&t.getDecalElement();c&&this._updateAndAddDisplayable(c,e,i);var f=t.getTextGuideLine();f&&this._updateAndAddDisplayable(f,e,i);var d=t.getTextContent();d&&this._updateAndAddDisplayable(d,e,i)}},t.prototype.addRoot=function(t){t.__zr&&t.__zr.storage===this||this._roots.push(t)},t.prototype.delRoot=function(t){if(t instanceof Array)for(var e=0,i=t.length;e<i;e++)this.delRoot(t[e]);else{var o=r.cq(this._roots,t);o>=0&&this._roots.splice(o,1)}},t.prototype.delAllRoots=function(){this._roots=[],this._displayList=[],this._displayListLen=0},t.prototype.getRoots=function(){return this._roots},t.prototype.dispose=function(){this._displayList=null,this._roots=null},t}();e.Z=u}}]);
//# sourceMappingURL=vendors~25646de7.0a873b.js.map