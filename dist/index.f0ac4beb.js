function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t,r,n,o,i,a,u,l,s,c,f,p,d,h,y,v,m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function g(e){return e&&e.__esModule?e.default:e}var b={},x={},_=m.parcelRequire5452;null==_&&((_=function(e){if(e in b)return b[e].exports;if(e in x){var t=x[e];delete x[e];var r={id:e,exports:{}};return b[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){x[e]=t},m.parcelRequire5452=_),_.register("1b2ls",function(t,r){e(t.exports,"Fragment",()=>n,e=>n=e),e(t.exports,"jsx",()=>o,e=>o=e),e(t.exports,"jsxs",()=>i,e=>i=e);var n,o,i,a=_("acw62"),u=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var n,o={},i=null,a=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(a=t.ref),t)s.call(t,n)&&!f.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:u,type:e,key:i,ref:a,props:o,_owner:c.current}}n=l,o=p,i=p}),_.register("acw62",function(e,t){e.exports=_("2pUnB")}),_.register("2pUnB",function(t,r){e(t.exports,"Children",()=>n,e=>n=e),e(t.exports,"Component",()=>o,e=>o=e),e(t.exports,"Fragment",()=>i,e=>i=e),e(t.exports,"Profiler",()=>a,e=>a=e),e(t.exports,"PureComponent",()=>u,e=>u=e),e(t.exports,"StrictMode",()=>l,e=>l=e),e(t.exports,"Suspense",()=>s,e=>s=e),e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>c,e=>c=e),e(t.exports,"cloneElement",()=>f,e=>f=e),e(t.exports,"createContext",()=>p,e=>p=e),e(t.exports,"createElement",()=>d,e=>d=e),e(t.exports,"createFactory",()=>h,e=>h=e),e(t.exports,"createRef",()=>y,e=>y=e),e(t.exports,"forwardRef",()=>v,e=>v=e),e(t.exports,"isValidElement",()=>m,e=>m=e),e(t.exports,"lazy",()=>g,e=>g=e),e(t.exports,"memo",()=>b,e=>b=e),e(t.exports,"startTransition",()=>x,e=>x=e),e(t.exports,"unstable_act",()=>_,e=>_=e),e(t.exports,"useCallback",()=>S,e=>S=e),e(t.exports,"useContext",()=>w,e=>w=e),e(t.exports,"useDebugValue",()=>P,e=>P=e),e(t.exports,"useDeferredValue",()=>O,e=>O=e),e(t.exports,"useEffect",()=>E,e=>E=e),e(t.exports,"useId",()=>j,e=>j=e),e(t.exports,"useImperativeHandle",()=>k,e=>k=e),e(t.exports,"useInsertionEffect",()=>M,e=>M=e),e(t.exports,"useLayoutEffect",()=>A,e=>A=e),e(t.exports,"useMemo",()=>T,e=>T=e),e(t.exports,"useReducer",()=>C,e=>C=e),e(t.exports,"useRef",()=>L,e=>L=e),e(t.exports,"useState",()=>N,e=>N=e),e(t.exports,"useSyncExternalStore",()=>I,e=>I=e),e(t.exports,"useTransition",()=>R,e=>R=e),e(t.exports,"version",()=>D,e=>D=e);var n,o,i,a,u,l,s,c,f,p,d,h,y,v,m,g,b,x,_,S,w,P,O,E,j,k,M,A,T,C,L,N,I,R,D,G=Symbol.for("react.element"),V=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),H=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),$=Symbol.iterator,q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,J={};function Z(e,t,r){this.props=e,this.context=t,this.refs=J,this.updater=r||q}function ee(){}function et(e,t,r){this.props=e,this.context=t,this.refs=J,this.updater=r||q}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var er=et.prototype=new ee;er.constructor=et,X(er,Z.prototype),er.isPureReactComponent=!0;var en=Array.isArray,eo=Object.prototype.hasOwnProperty,ei={current:null},ea={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,t,r){var n,o={},i=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)eo.call(t,n)&&!ea.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:G,type:e,key:i,ref:a,props:o,_owner:ei.current}}function el(e){return"object"==typeof e&&null!==e&&e.$$typeof===G}var es=/\/+/g;function ec(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function ef(e,t,r){if(null==e)return e;var n=[],o=0;return function e(t,r,n,o,i){var a,u,l,s=typeof t;("undefined"===s||"boolean"===s)&&(t=null);var c=!1;if(null===t)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case G:case V:c=!0}}if(c)return i=i(c=t),t=""===o?"."+ec(c,0):o,en(i)?(n="",null!=t&&(n=t.replace(es,"$&/")+"/"),e(i,r,n,"",function(e){return e})):null!=i&&(el(i)&&(a=i,u=n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(es,"$&/")+"/")+t,i={$$typeof:G,type:a.type,key:u,ref:a.ref,props:a.props,_owner:a._owner}),r.push(i)),1;if(c=0,o=""===o?".":o+":",en(t))for(var f=0;f<t.length;f++){var p=o+ec(s=t[f],f);c+=e(s,r,n,p,i)}else if("function"==typeof(p=null===(l=t)||"object"!=typeof l?null:"function"==typeof(l=$&&l[$]||l["@@iterator"])?l:null))for(t=p.call(t),f=0;!(s=t.next()).done;)p=o+ec(s=s.value,f++),c+=e(s,r,n,p,i);else if("object"===s)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(r=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return c}(e,n,"","",function(e){return t.call(r,e,o++)}),n}function ep(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var ed={current:null},eh={transition:null};n={map:ef,forEach:function(e,t,r){ef(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ef(e,function(){t++}),t},toArray:function(e){return ef(e,function(e){return e})||[]},only:function(e){if(!el(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},o=Z,i=F,a=K,u=et,l=z,s=B,c={ReactCurrentDispatcher:ed,ReactCurrentBatchConfig:eh,ReactCurrentOwner:ei},f=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=X({},e.props),o=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=ei.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)eo.call(t,l)&&!ea.hasOwnProperty(l)&&(n[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)n.children=r;else if(1<l){u=Array(l);for(var s=0;s<l;s++)u[s]=arguments[s+2];n.children=u}return{$$typeof:G,type:e.type,key:o,ref:i,props:n,_owner:a}},p=function(e){return(e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:Q,_context:e},e.Consumer=e},d=eu,h=function(e){var t=eu.bind(null,e);return t.type=e,t},y=function(){return{current:null}},v=function(e){return{$$typeof:W,render:e}},m=el,g=function(e){return{$$typeof:U,_payload:{_status:-1,_result:e},_init:ep}},b=function(e,t){return{$$typeof:Y,type:e,compare:void 0===t?null:t}},x=function(e){var t=eh.transition;eh.transition={};try{e()}finally{eh.transition=t}},_=function(){throw Error("act(...) is not supported in production builds of React.")},S=function(e,t){return ed.current.useCallback(e,t)},w=function(e){return ed.current.useContext(e)},P=function(){},O=function(e){return ed.current.useDeferredValue(e)},E=function(e,t){return ed.current.useEffect(e,t)},j=function(){return ed.current.useId()},k=function(e,t,r){return ed.current.useImperativeHandle(e,t,r)},M=function(e,t){return ed.current.useInsertionEffect(e,t)},A=function(e,t){return ed.current.useLayoutEffect(e,t)},T=function(e,t){return ed.current.useMemo(e,t)},C=function(e,t,r){return ed.current.useReducer(e,t,r)},L=function(e){return ed.current.useRef(e)},N=function(e){return ed.current.useState(e)},I=function(e,t,r){return ed.current.useSyncExternalStore(e,t,r)},R=function(){return ed.current.useTransition()},D="18.2.0"}),_.register("1u0KT",function(e,t){// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
(function e(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){// DevTools shouldn't crash React, no matter what.
// We should still report in case we break this code.
console.error(e)}})(),e.exports=_("Xw6Mv")}),_.register("Xw6Mv",function(t,r){e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>Q,e=>Q=e),e(t.exports,"createPortal",()=>H,e=>H=e),e(t.exports,"createRoot",()=>W,e=>W=e),e(t.exports,"findDOMNode",()=>B,e=>B=e),e(t.exports,"flushSync",()=>Y,e=>Y=e),e(t.exports,"hydrate",()=>U,e=>U=e),e(t.exports,"hydrateRoot",()=>$,e=>$=e),e(t.exports,"render",()=>q,e=>q=e),e(t.exports,"unmountComponentAtNode",()=>X,e=>X=e),e(t.exports,"unstable_batchedUpdates",()=>J,e=>J=e),e(t.exports,"unstable_renderSubtreeIntoContainer",()=>Z,e=>Z=e),e(t.exports,"version",()=>ee,e=>ee=e);var n,o,i,a,u,l,s=_("acw62"),c=_("fO90s");function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,d={};function h(e,t){y(e,t),y(e+"Capture",t)}function y(e,t){for(d[e]=t,e=0;e<t.length;e++)p.add(t[e])}var v=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},x={};function S(e,t,r,n,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var w={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){w[e]=new S(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];w[t]=new S(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){w[e]=new S(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){w[e]=new S(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){w[e]=new S(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){w[e]=new S(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){w[e]=new S(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){w[e]=new S(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){w[e]=new S(e,5,!1,e.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function O(e){return e[1].toUpperCase()}function E(e,t,r,n){var o,i=w.hasOwnProperty(t)?w[t]:null;(null!==i?0!==i.type:n||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,r,n){if(null==t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":if(n)return!1;if(null!==r)return!r.acceptsBooleans;return"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,i,n)&&(r=null),n||null===i?(o=t,(!!m.call(x,o)||!m.call(b,o)&&(g.test(o)?x[o]=!0:(b[o]=!0,!1)))&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r))):i.mustUseProperty?e[i.propertyName]=null===r?3!==i.type&&"":r:(t=i.attributeName,n=i.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(i=i.type)||4===i&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(P,O);w[t]=new S(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(P,O);w[t]=new S(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(P,O);w[t]=new S(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){w[e]=new S(e,1,!1,e.toLowerCase(),null,!1,!1)}),w.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){w[e]=new S(e,1,!1,e.toLowerCase(),null,!0,!0)});var j=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),N=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),V=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var F=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var z=Symbol.iterator;function K(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=z&&e[z]||e["@@iterator"])?e:null}var Q,H,W,B,Y,U,$,q,X,J,Z,ee,et,er=Object.assign;function en(e){if(void 0===et)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);et=t&&t[1]||""}return"\n"+et+e}var eo=!1;function ei(e,t){if(!e||eo)return"";eo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var n=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){n=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){n=e}e()}}catch(t){if(t&&n&&"string"==typeof t.stack){for(var o=t.stack.split("\n"),i=n.stack.split("\n"),a=o.length-1,u=i.length-1;1<=a&&0<=u&&o[a]!==i[u];)u--;for(;1<=a&&0<=u;a--,u--)if(o[a]!==i[u]){if(1!==a||1!==u)do if(a--,0>--u||o[a]!==i[u]){var l="\n"+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=u)break}}}finally{eo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?en(e):""}function ea(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function eu(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function el(e){e._valueTracker||(e._valueTracker=function(e){var t=eu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==r&&"function"==typeof r.get&&"function"==typeof r.set){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){n=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function es(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=eu(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function ec(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ef(e,t){var r=t.checked;return er({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function ep(e,t){var r=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;r=ea(null!=t.value?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ed(e,t){null!=(t=t.checked)&&E(e,"checked",t,!1)}function eh(e,t){ed(e,t);var r=ea(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n){e.removeAttribute("value");return}t.hasOwnProperty("value")?ev(e,t.type,r):t.hasOwnProperty("defaultValue")&&ev(e,t.type,ea(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ey(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function ev(e,t,r){("number"!==t||ec(e.ownerDocument)!==e)&&(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var em=Array.isArray;function eg(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(o=0,r=""+ea(r),t=null;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function eb(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(f(91));return er({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ex(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(f(92));if(em(r)){if(1<r.length)throw Error(f(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:ea(r)}}function e_(e,t){var r=ea(t.value),n=ea(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function eS(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function ew(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eP(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?ew(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var eO,eE,ej=(eO=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((eE=eE||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eE.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction(function(){return eO(e,t,r,n)})}:eO);function ek(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType){r.nodeValue=t;return}}e.textContent=t}var eM={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eA=["Webkit","ms","Moz","O"];function eT(e,t,r){return null==t||"boolean"==typeof t||""===t?"":r||"number"!=typeof t||0===t||eM.hasOwnProperty(e)&&eM[e]?(""+t).trim():t+"px"}function eC(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),o=eT(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}Object.keys(eM).forEach(function(e){eA.forEach(function(t){eM[t=t+e.charAt(0).toUpperCase()+e.substring(1)]=eM[e]})});var eL=er({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eN(e,t){if(t){if(eL[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(f(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(f(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(f(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(f(62))}}function eI(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eR=null;function eD(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var eG=null,eV=null,eF=null;function ez(e){if(e=n$(e)){if("function"!=typeof eG)throw Error(f(280));var t=e.stateNode;t&&(t=nX(t),eG(e.stateNode,e.type,t))}}function eK(e){eV?eF?eF.push(e):eF=[e]:eV=e}function eQ(){if(eV){var e=eV,t=eF;if(eF=eV=null,ez(e),t)for(e=0;e<t.length;e++)ez(t[e])}}function eH(e,t){return e(t)}function eW(){}var eB=!1;function eY(e,t,r){if(eB)return e(t,r);eB=!0;try{return eH(e,t,r)}finally{eB=!1,(null!==eV||null!==eF)&&(eW(),eQ())}}function eU(e,t){var r=e.stateNode;if(null===r)return null;var n=nX(r);if(null===n)return null;switch(r=n[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break;default:e=!1}if(e)return null;if(r&&"function"!=typeof r)throw Error(f(231,t,typeof r));return r}var e$=!1;if(v)try{var eq={};Object.defineProperty(eq,"passive",{get:function(){e$=!0}}),window.addEventListener("test",eq,eq),window.removeEventListener("test",eq,eq)}catch(e){e$=!1}function eX(e,t,r,n,o,i,a,u,l){var s=Array.prototype.slice.call(arguments,3);try{t.apply(r,s)}catch(e){this.onError(e)}}var eJ=!1,eZ=null,e0=!1,e1=null,e2={onError:function(e){eJ=!0,eZ=e}};function e3(e,t,r,n,o,i,a,u,l){eJ=!1,eZ=null,eX.apply(e2,arguments)}function e4(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do 0!=(4098&(t=e).flags)&&(r=t.return),e=t.return;while(e)}return 3===t.tag?r:null}function e5(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function e6(e){if(e4(e)!==e)throw Error(f(188))}function e8(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=e4(e)))throw Error(f(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(n=o.return)){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return e6(o),e;if(i===n)return e6(o),t;i=i.sibling}throw Error(f(188))}if(r.return!==n.return)r=o,n=i;else{for(var a=!1,u=o.child;u;){if(u===r){a=!0,r=o,n=i;break}if(u===n){a=!0,n=o,r=i;break}u=u.sibling}if(!a){for(u=i.child;u;){if(u===r){a=!0,r=i,n=o;break}if(u===n){a=!0,n=i,r=o;break}u=u.sibling}if(!a)throw Error(f(189))}}if(r.alternate!==n)throw Error(f(190))}if(3!==r.tag)throw Error(f(188));return r.stateNode.current===r?e:t}(e))?function e(t){if(5===t.tag||6===t.tag)return t;for(t=t.child;null!==t;){var r=e(t);if(null!==r)return r;t=t.sibling}return null}(e):null}var e7=c.unstable_scheduleCallback,e9=c.unstable_cancelCallback,te=c.unstable_shouldYield,tt=c.unstable_requestPaint,tr=c.unstable_now,tn=c.unstable_getCurrentPriorityLevel,to=c.unstable_ImmediatePriority,ti=c.unstable_UserBlockingPriority,ta=c.unstable_NormalPriority,tu=c.unstable_LowPriority,tl=c.unstable_IdlePriority,ts=null,tc=null,tf=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(tp(e)/td|0)|0},tp=Math.log,td=Math.LN2,th=64,ty=4194304;function tv(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tm(e,t){var r=e.pendingLanes;if(0===r)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&r;if(0!==a){var u=a&~o;0!==u?n=tv(u):0!=(i&=a)&&(n=tv(i))}else 0!=(a=r&~o)?n=tv(a):0!==i&&(n=tv(i));if(0===n)return 0;if(0!==t&&t!==n&&0==(t&o)&&((o=n&-n)>=(i=t&-t)||16===o&&0!=(4194240&i)))return t;if(0!=(4&n)&&(n|=16&r),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)o=1<<(r=31-tf(t)),n|=e[r],t&=~o;return n}function tg(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function tb(){var e=th;return 0==(4194240&(th<<=1))&&(th=64),e}function tx(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function t_(e,t,r){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-tf(t)]=r}function tS(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-tf(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var tw=0;function tP(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var tO,tE,tj,tk,tM,tA=!1,tT=[],tC=null,tL=null,tN=null,tI=new Map,tR=new Map,tD=[],tG="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tV(e,t){switch(e){case"focusin":case"focusout":tC=null;break;case"dragenter":case"dragleave":tL=null;break;case"mouseover":case"mouseout":tN=null;break;case"pointerover":case"pointerout":tI.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tR.delete(t.pointerId)}}function tF(e,t,r,n,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},null!==t&&null!==(t=n$(t))&&tE(t)):(e.eventSystemFlags|=n,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o)),e}function tz(e){var t=nU(e.target);if(null!==t){var r=e4(t);if(null!==r){if(13===(t=r.tag)){if(null!==(t=e5(r))){e.blockedOn=t,tM(e.priority,function(){tj(r)});return}}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=3===r.tag?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tK(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=tZ(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=n$(r))&&tE(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);eR=n,r.target.dispatchEvent(n),eR=null,t.shift()}return!0}function tQ(e,t,r){tK(e)&&r.delete(t)}function tH(){tA=!1,null!==tC&&tK(tC)&&(tC=null),null!==tL&&tK(tL)&&(tL=null),null!==tN&&tK(tN)&&(tN=null),tI.forEach(tQ),tR.forEach(tQ)}function tW(e,t){e.blockedOn===t&&(e.blockedOn=null,tA||(tA=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,tH)))}function tB(e){function t(t){return tW(t,e)}if(0<tT.length){tW(tT[0],e);for(var r=1;r<tT.length;r++){var n=tT[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==tC&&tW(tC,e),null!==tL&&tW(tL,e),null!==tN&&tW(tN,e),tI.forEach(t),tR.forEach(t),r=0;r<tD.length;r++)(n=tD[r]).blockedOn===e&&(n.blockedOn=null);for(;0<tD.length&&null===(r=tD[0]).blockedOn;)tz(r),null===r.blockedOn&&tD.shift()}var tY=j.ReactCurrentBatchConfig,tU=!0;function t$(e,t,r,n){var o=tw,i=tY.transition;tY.transition=null;try{tw=1,tX(e,t,r,n)}finally{tw=o,tY.transition=i}}function tq(e,t,r,n){var o=tw,i=tY.transition;tY.transition=null;try{tw=4,tX(e,t,r,n)}finally{tw=o,tY.transition=i}}function tX(e,t,r,n){if(tU){var o=tZ(e,t,r,n);if(null===o)nx(e,t,n,tJ,r),tV(e,n);else if(function(e,t,r,n,o){switch(t){case"focusin":return tC=tF(tC,e,t,r,n,o),!0;case"dragenter":return tL=tF(tL,e,t,r,n,o),!0;case"mouseover":return tN=tF(tN,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return tI.set(i,tF(tI.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,tR.set(i,tF(tR.get(i)||null,e,t,r,n,o)),!0}return!1}(o,e,t,r,n))n.stopPropagation();else if(tV(e,n),4&t&&-1<tG.indexOf(e)){for(;null!==o;){var i=n$(o);if(null!==i&&tO(i),null===(i=tZ(e,t,r,n))&&nx(e,t,n,tJ,r),i===o)break;o=i}null!==o&&n.stopPropagation()}else nx(e,t,n,null,r)}}var tJ=null;function tZ(e,t,r,n){if(tJ=null,null!==(e=nU(e=eD(n)))){if(null===(t=e4(e)))e=null;else if(13===(r=t.tag)){if(null!==(e=e5(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return tJ=e,null}function t0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tn()){case to:return 1;case ti:return 4;case ta:case tu:return 16;case tl:return 536870912;default:return 16}default:return 16}}var t1=null,t2=null,t3=null;function t4(){if(t3)return t3;var e,t,r=t2,n=r.length,o="value"in t1?t1.value:t1.textContent,i=o.length;for(e=0;e<n&&r[e]===o[e];e++);var a=n-e;for(t=1;t<=a&&r[n-t]===o[i-t];t++);return t3=o.slice(e,1<t?1-t:void 0)}function t5(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function t6(){return!0}function t8(){return!1}function t7(e){function t(t,r,n,o,i){for(var a in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?t6:t8,this.isPropagationStopped=t8,this}return er(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=t6)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=t6)},persist:function(){},isPersistent:t6}),t}var t9,re,rt,rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rn=t7(rr),ro=er({},rr,{view:0,detail:0}),ri=t7(ro),ra=er({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rm,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rt&&(rt&&"mousemove"===e.type?(t9=e.screenX-rt.screenX,re=e.screenY-rt.screenY):re=t9=0,rt=e),t9)},movementY:function(e){return"movementY"in e?e.movementY:re}}),ru=t7(ra),rl=t7(er({},ra,{dataTransfer:0})),rs=t7(er({},ro,{relatedTarget:0})),rc=t7(er({},rr,{animationName:0,elapsedTime:0,pseudoElement:0})),rf=t7(er({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),rp=t7(er({},rr,{data:0})),rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=ry[e])&&!!t[e]}function rm(){return rv}var rg=t7(er({},ro,{key:function(e){if(e.key){var t=rd[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=t5(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rm,charCode:function(e){return"keypress"===e.type?t5(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?t5(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),rb=t7(er({},ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rx=t7(er({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rm})),r_=t7(er({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0})),rS=t7(er({},ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),rw=[9,13,27,32],rP=v&&"CompositionEvent"in window,rO=null;v&&"documentMode"in document&&(rO=document.documentMode);var rE=v&&"TextEvent"in window&&!rO,rj=v&&(!rP||rO&&8<rO&&11>=rO),rk=!1;function rM(e,t){switch(e){case"keyup":return -1!==rw.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rA(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var rT=!1,rC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rL(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!rC[e.type]:"textarea"===t}function rN(e,t,r,n){eK(n),0<(t=nS(t,"onChange")).length&&(r=new rn("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var rI=null,rR=null;function rD(e){nh(e,0)}function rG(e){if(es(nq(e)))return e}function rV(e,t){if("change"===e)return t}var rF=!1;if(v){if(v){var rz="oninput"in document;if(!rz){var rK=document.createElement("div");rK.setAttribute("oninput","return;"),rz="function"==typeof rK.oninput}n=rz}else n=!1;rF=n&&(!document.documentMode||9<document.documentMode)}function rQ(){rI&&(rI.detachEvent("onpropertychange",rH),rR=rI=null)}function rH(e){if("value"===e.propertyName&&rG(rR)){var t=[];rN(t,rR,e,eD(e)),eY(rD,t)}}function rW(e,t,r){"focusin"===e?(rQ(),rI=t,rR=r,rI.attachEvent("onpropertychange",rH)):"focusout"===e&&rQ()}function rB(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return rG(rR)}function rY(e,t){if("click"===e)return rG(t)}function rU(e,t){if("input"===e||"change"===e)return rG(t)}var r$="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function rq(e,t){if(r$(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!m.call(t,o)||!r$(e[o],t[o]))return!1}return!0}function rX(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rJ(e,t){var r,n=rX(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rX(n)}}function rZ(){for(var e=window,t=ec();t instanceof e.HTMLIFrameElement;){try{var r="string"==typeof t.contentWindow.location.href}catch(e){r=!1}if(r)e=t.contentWindow;else break;t=ec(e.document)}return t}function r0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var r1=v&&"documentMode"in document&&11>=document.documentMode,r2=null,r3=null,r4=null,r5=!1;function r6(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;r5||null==r2||r2!==ec(n)||(n="selectionStart"in(n=r2)&&r0(n)?{start:n.selectionStart,end:n.selectionEnd}:{anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},r4&&rq(r4,n)||(r4=n,0<(n=nS(r3,"onSelect")).length&&(t=new rn("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=r2)))}function r8(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var r7={animationend:r8("Animation","AnimationEnd"),animationiteration:r8("Animation","AnimationIteration"),animationstart:r8("Animation","AnimationStart"),transitionend:r8("Transition","TransitionEnd")},r9={},ne={};function nt(e){if(r9[e])return r9[e];if(!r7[e])return e;var t,r=r7[e];for(t in r)if(r.hasOwnProperty(t)&&t in ne)return r9[e]=r[t];return e}v&&(ne=document.createElement("div").style,"AnimationEvent"in window||(delete r7.animationend.animation,delete r7.animationiteration.animation,delete r7.animationstart.animation),"TransitionEvent"in window||delete r7.transitionend.transition);var nr=nt("animationend"),nn=nt("animationiteration"),no=nt("animationstart"),ni=nt("transitionend"),na=new Map,nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nl(e,t){na.set(e,t),h(t,[e])}for(var ns=0;ns<nu.length;ns++){var nc=nu[ns];nl(nc.toLowerCase(),"on"+(nc[0].toUpperCase()+nc.slice(1)))}nl(nr,"onAnimationEnd"),nl(nn,"onAnimationIteration"),nl(no,"onAnimationStart"),nl("dblclick","onDoubleClick"),nl("focusin","onFocus"),nl("focusout","onBlur"),nl(ni,"onTransitionEnd"),y("onMouseEnter",["mouseout","mouseover"]),y("onMouseLeave",["mouseout","mouseover"]),y("onPointerEnter",["pointerout","pointerover"]),y("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),np=new Set("cancel close invalid load scroll toggle".split(" ").concat(nf));function nd(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,o,i,a,u,l){if(e3.apply(this,arguments),eJ){if(eJ){var s=eZ;eJ=!1,eZ=null}else throw Error(f(198));e0||(e0=!0,e1=s)}}(n,t,void 0,e),e.currentTarget=null}function nh(e,t){t=0!=(4&t);for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var a=n.length-1;0<=a;a--){var u=n[a],l=u.instance,s=u.currentTarget;if(u=u.listener,l!==i&&o.isPropagationStopped())break e;nd(o,u,s),i=l}else for(a=0;a<n.length;a++){if(l=(u=n[a]).instance,s=u.currentTarget,u=u.listener,l!==i&&o.isPropagationStopped())break e;nd(o,u,s),i=l}}}if(e0)throw e=e1,e0=!1,e1=null,e}function ny(e,t){var r=t[nW];void 0===r&&(r=t[nW]=new Set);var n=e+"__bubble";r.has(n)||(nb(t,e,2,!1),r.add(n))}function nv(e,t,r){var n=0;t&&(n|=4),nb(r,e,n,t)}var nm="_reactListening"+Math.random().toString(36).slice(2);function ng(e){if(!e[nm]){e[nm]=!0,p.forEach(function(t){"selectionchange"!==t&&(np.has(t)||nv(t,!1,e),nv(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[nm]||(t[nm]=!0,nv("selectionchange",!1,t))}}function nb(e,t,r,n){switch(t0(t)){case 1:var o=t$;break;case 4:o=tq;break;default:o=tX}r=o.bind(null,t,r,e),o=void 0,e$&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(o=!0),n?void 0!==o?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):void 0!==o?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function nx(e,t,r,n,o){var i=n;if(0==(1&t)&&0==(2&t)&&null!==n)e:for(;;){if(null===n)return;var a=n.tag;if(3===a||4===a){var u=n.stateNode.containerInfo;if(u===o||8===u.nodeType&&u.parentNode===o)break;if(4===a)for(a=n.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===o||8===l.nodeType&&l.parentNode===o))return;a=a.return}for(;null!==u;){if(null===(a=nU(u)))return;if(5===(l=a.tag)||6===l){n=i=a;continue e}u=u.parentNode}}n=n.return}eY(function(){var n=i,o=eD(r),a=[];e:{var u=na.get(e);if(void 0!==u){var l=rn,s=e;switch(e){case"keypress":if(0===t5(r))break e;case"keydown":case"keyup":l=rg;break;case"focusin":s="focus",l=rs;break;case"focusout":s="blur",l=rs;break;case"beforeblur":case"afterblur":l=rs;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=rl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=rx;break;case nr:case nn:case no:l=rc;break;case ni:l=r_;break;case"scroll":l=ri;break;case"wheel":l=rS;break;case"copy":case"cut":case"paste":l=rf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=rb}var c=0!=(4&t),f=!c&&"scroll"===e,p=c?null!==u?u+"Capture":null:u;c=[];for(var d,h=n;null!==h;){var y=(d=h).stateNode;if(5===d.tag&&null!==y&&(d=y,null!==p&&null!=(y=eU(h,p))&&c.push(n_(h,y,d))),f)break;h=h.return}0<c.length&&(u=new l(u,s,null,r,o),a.push({event:u,listeners:c}))}}if(0==(7&t)){if(u="mouseover"===e||"pointerover"===e,l="mouseout"===e||"pointerout"===e,!(u&&r!==eR&&(s=r.relatedTarget||r.fromElement)&&(nU(s)||s[nH]))&&(l||u)&&(u=o.window===o?o:(u=o.ownerDocument)?u.defaultView||u.parentWindow:window,l?(s=r.relatedTarget||r.toElement,l=n,null!==(s=s?nU(s):null)&&(f=e4(s),s!==f||5!==s.tag&&6!==s.tag)&&(s=null)):(l=null,s=n),l!==s)){if(c=ru,y="onMouseLeave",p="onMouseEnter",h="mouse",("pointerout"===e||"pointerover"===e)&&(c=rb,y="onPointerLeave",p="onPointerEnter",h="pointer"),f=null==l?u:nq(l),d=null==s?u:nq(s),(u=new c(y,h+"leave",l,r,o)).target=f,u.relatedTarget=d,y=null,nU(o)===n&&((c=new c(p,h+"enter",s,r,o)).target=d,c.relatedTarget=f,y=c),f=y,l&&s)t:{for(c=l,p=s,h=0,d=c;d;d=nw(d))h++;for(d=0,y=p;y;y=nw(y))d++;for(;0<h-d;)c=nw(c),h--;for(;0<d-h;)p=nw(p),d--;for(;h--;){if(c===p||null!==p&&c===p.alternate)break t;c=nw(c),p=nw(p)}c=null}else c=null;null!==l&&nP(a,u,l,c,!1),null!==s&&null!==f&&nP(a,f,s,c,!0)}e:{if("select"===(l=(u=n?nq(n):window).nodeName&&u.nodeName.toLowerCase())||"input"===l&&"file"===u.type)var v,m=rV;else if(rL(u)){if(rF)m=rU;else{m=rB;var g=rW}}else(l=u.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===u.type||"radio"===u.type)&&(m=rY);if(m&&(m=m(e,n))){rN(a,m,r,o);break e}g&&g(e,u,n),"focusout"===e&&(g=u._wrapperState)&&g.controlled&&"number"===u.type&&ev(u,"number",u.value)}switch(g=n?nq(n):window,e){case"focusin":(rL(g)||"true"===g.contentEditable)&&(r2=g,r3=n,r4=null);break;case"focusout":r4=r3=r2=null;break;case"mousedown":r5=!0;break;case"contextmenu":case"mouseup":case"dragend":r5=!1,r6(a,r,o);break;case"selectionchange":if(r1)break;case"keydown":case"keyup":r6(a,r,o)}if(rP)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else rT?rM(e,r)&&(b="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(b="onCompositionStart");b&&(rj&&"ko"!==r.locale&&(rT||"onCompositionStart"!==b?"onCompositionEnd"===b&&rT&&(v=t4()):(t2="value"in(t1=o)?t1.value:t1.textContent,rT=!0)),0<(g=nS(n,b)).length&&(b=new rp(b,e,null,r,o),a.push({event:b,listeners:g}),v?b.data=v:null!==(v=rA(r))&&(b.data=v))),(v=rE?function(e,t){switch(e){case"compositionend":return rA(t);case"keypress":if(32!==t.which)return null;return rk=!0," ";case"textInput":return" "===(e=t.data)&&rk?null:e;default:return null}}(e,r):function(e,t){if(rT)return"compositionend"===e||!rP&&rM(e,t)?(e=t4(),t3=t2=t1=null,rT=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rj&&"ko"!==t.locale?null:t.data}}(e,r))&&0<(n=nS(n,"onBeforeInput")).length&&(o=new rp("onBeforeInput","beforeinput",null,r,o),a.push({event:o,listeners:n}),o.data=v)}nh(a,t)})}function n_(e,t,r){return{instance:e,listener:t,currentTarget:r}}function nS(e,t){for(var r=t+"Capture",n=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=eU(e,r))&&n.unshift(n_(e,i,o)),null!=(i=eU(e,t))&&n.push(n_(e,i,o))),e=e.return}return n}function nw(e){if(null===e)return null;do e=e.return;while(e&&5!==e.tag)return e||null}function nP(e,t,r,n,o){for(var i=t._reactName,a=[];null!==r&&r!==n;){var u=r,l=u.alternate,s=u.stateNode;if(null!==l&&l===n)break;5===u.tag&&null!==s&&(u=s,o?null!=(l=eU(r,i))&&a.unshift(n_(r,l,u)):o||null!=(l=eU(r,i))&&a.push(n_(r,l,u))),r=r.return}0!==a.length&&e.push({event:t,listeners:a})}var nO=/\r\n?/g,nE=/\u0000|\uFFFD/g;function nj(e){return("string"==typeof e?e:""+e).replace(nO,"\n").replace(nE,"")}function nk(e,t,r){if(t=nj(t),nj(e)!==t&&r)throw Error(f(425))}function nM(){}var nA=null,nT=null;function nC(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var nL="function"==typeof setTimeout?setTimeout:void 0,nN="function"==typeof clearTimeout?clearTimeout:void 0,nI="function"==typeof Promise?Promise:void 0,nR="function"==typeof queueMicrotask?queueMicrotask:void 0!==nI?function(e){return nI.resolve(null).then(e).catch(nD)}:nL;function nD(e){setTimeout(function(){throw e})}function nG(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&8===o.nodeType){if("/$"===(r=o.data)){if(0===n){e.removeChild(o),tB(t);return}n--}else"$"!==r&&"$?"!==r&&"$!"!==r||n++}r=o}while(r)tB(t)}function nV(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function nF(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var nz=Math.random().toString(36).slice(2),nK="__reactFiber$"+nz,nQ="__reactProps$"+nz,nH="__reactContainer$"+nz,nW="__reactEvents$"+nz,nB="__reactListeners$"+nz,nY="__reactHandles$"+nz;function nU(e){var t=e[nK];if(t)return t;for(var r=e.parentNode;r;){if(t=r[nH]||r[nK]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=nF(e);null!==e;){if(r=e[nK])return r;e=nF(e)}return t}r=(e=r).parentNode}return null}function n$(e){return(e=e[nK]||e[nH])&&(5===e.tag||6===e.tag||13===e.tag||3===e.tag)?e:null}function nq(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(f(33))}function nX(e){return e[nQ]||null}var nJ=[],nZ=-1;function n0(e){return{current:e}}function n1(e){0>nZ||(e.current=nJ[nZ],nJ[nZ]=null,nZ--)}function n2(e,t){nJ[++nZ]=e.current,e.current=t}var n3={},n4=n0(n3),n5=n0(!1),n6=n3;function n8(e,t){var r=e.type.contextTypes;if(!r)return n3;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in r)i[o]=t[o];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function n7(e){return null!=(e=e.childContextTypes)}function n9(){n1(n5),n1(n4)}function oe(e,t,r){if(n4.current!==n3)throw Error(f(168));n2(n4,t),n2(n5,r)}function ot(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,"function"!=typeof n.getChildContext)return r;for(var o in n=n.getChildContext())if(!(o in t))throw Error(f(108,function(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function e(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case A:return"Fragment";case M:return"Portal";case C:return"Profiler";case T:return"StrictMode";case R:return"Suspense";case D:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case N:return(t.displayName||"Context")+".Consumer";case L:return(t._context.displayName||"Context")+".Provider";case I:var r=t.render;return(t=t.displayName)||(t=""!==(t=r.displayName||r.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case G:return null!==(r=t.displayName||null)?r:e(t.type)||"Memo";case V:r=t._payload,t=t._init;try{return e(t(r))}catch(e){}}return null}(t);case 8:return t===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}(e)||"Unknown",o));return er({},r,n)}function or(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||n3,n6=n4.current,n2(n4,e),n2(n5,n5.current),!0}function on(e,t,r){var n=e.stateNode;if(!n)throw Error(f(169));r?(e=ot(e,t,n6),n.__reactInternalMemoizedMergedChildContext=e,n1(n5),n1(n4),n2(n4,e)):n1(n5),n2(n5,r)}var oo=null,oi=!1,oa=!1;function ou(e){null===oo?oo=[e]:oo.push(e)}function ol(){if(!oa&&null!==oo){oa=!0;var e=0,t=tw;try{var r=oo;for(tw=1;e<r.length;e++){var n=r[e];do n=n(!0);while(null!==n)}oo=null,oi=!1}catch(t){throw null!==oo&&(oo=oo.slice(e+1)),e7(to,ol),t}finally{tw=t,oa=!1}}return null}var os=[],oc=0,of=null,op=0,od=[],oh=0,oy=null,ov=1,om="";function og(e,t){os[oc++]=op,os[oc++]=of,of=e,op=t}function ob(e,t,r){od[oh++]=ov,od[oh++]=om,od[oh++]=oy,oy=e;var n=ov;e=om;var o=32-tf(n)-1;n&=~(1<<o),r+=1;var i=32-tf(t)+o;if(30<i){var a=o-o%5;i=(n&(1<<a)-1).toString(32),n>>=a,o-=a,ov=1<<32-tf(t)+o|r<<o|n,om=i+e}else ov=1<<i|r<<o|n,om=e}function ox(e){null!==e.return&&(og(e,1),ob(e,1,0))}function o_(e){for(;e===of;)of=os[--oc],os[oc]=null,op=os[--oc],os[oc]=null;for(;e===oy;)oy=od[--oh],od[oh]=null,om=od[--oh],od[oh]=null,ov=od[--oh],od[oh]=null}var oS=null,ow=null,oP=!1,oO=null;function oE(e,t){var r=u7(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,null===(t=e.deletions)?(e.deletions=[r],e.flags|=16):t.push(r)}function oj(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,oS=e,ow=nV(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,oS=e,ow=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(r=null!==oy?{id:ov,overflow:om}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},(r=u7(18,null,null,0)).stateNode=t,r.return=e,e.child=r,oS=e,ow=null,!0);default:return!1}}function ok(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function oM(e){if(oP){var t=ow;if(t){var r=t;if(!oj(e,t)){if(ok(e))throw Error(f(418));t=nV(r.nextSibling);var n=oS;t&&oj(e,t)?oE(n,r):(e.flags=-4097&e.flags|2,oP=!1,oS=e)}}else{if(ok(e))throw Error(f(418));e.flags=-4097&e.flags|2,oP=!1,oS=e}}}function oA(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;oS=e}function oT(e){if(e!==oS)return!1;if(!oP)return oA(e),oP=!0,!1;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!nC(e.type,e.memoizedProps)),t&&(t=ow)){if(ok(e))throw oC(),Error(f(418));for(;t;)oE(e,t),t=nV(t.nextSibling)}if(oA(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(f(317));e:{for(t=0,e=e.nextSibling;e;){if(8===e.nodeType){var t,r=e.data;if("/$"===r){if(0===t){ow=nV(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}ow=null}}else ow=oS?nV(e.stateNode.nextSibling):null;return!0}function oC(){for(var e=ow;e;)e=nV(e.nextSibling)}function oL(){ow=oS=null,oP=!1}function oN(e){null===oO?oO=[e]:oO.push(e)}var oI=j.ReactCurrentBatchConfig;function oR(e,t){if(e&&e.defaultProps)for(var r in t=er({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}var oD=n0(null),oG=null,oV=null,oF=null;function oz(){oF=oV=oG=null}function oK(e){var t=oD.current;n1(oD),e._currentValue=t}function oQ(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function oH(e,t){oG=e,oF=oV=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(a_=!0),e.firstContext=null)}function oW(e){var t=e._currentValue;if(oF!==e){if(e={context:e,memoizedValue:t,next:null},null===oV){if(null===oG)throw Error(f(308));oV=e,oG.dependencies={lanes:0,firstContext:e}}else oV=oV.next=e}return t}var oB=null;function oY(e){null===oB?oB=[e]:oB.push(e)}function oU(e,t,r,n){var o=t.interleaved;return null===o?(r.next=r,oY(t)):(r.next=o.next,o.next=r),t.interleaved=r,o$(e,n)}function o$(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}var oq=!1;function oX(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oJ(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function oZ(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function o0(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!=(2&ul)){var o=n.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),n.pending=t,o$(e,r)}return null===(o=n.interleaved)?(t.next=t,oY(n)):(t.next=o.next,o.next=t),n.interleaved=t,o$(e,r)}function o1(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&r))){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,tS(e,r)}}function o2(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var o=null,i=null;if(null!==(r=r.firstBaseUpdate)){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===i?o=i=a:i=i.next=a,r=r.next}while(null!==r)null===i?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function o3(e,t,r,n){var o=e.updateQueue;oq=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,u=o.shared.pending;if(null!==u){o.shared.pending=null;var l=u,s=l.next;l.next=null,null===a?i=s:a.next=s,a=l;var c=e.alternate;null!==c&&(u=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===u?c.firstBaseUpdate=s:u.next=s,c.lastBaseUpdate=l)}if(null!==i){var f=o.baseState;for(a=0,c=s=l=null,u=i;;){var p=u.lane,d=u.eventTime;if((n&p)===p){null!==c&&(c=c.next={eventTime:d,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var h=e,y=u;switch(p=t,d=r,y.tag){case 1:if("function"==typeof(h=y.payload)){f=h.call(d,f,p);break e}f=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null==(p="function"==typeof(h=y.payload)?h.call(d,f,p):h))break e;f=er({},f,p);break e;case 2:oq=!0}}null!==u.callback&&0!==u.lane&&(e.flags|=64,null===(p=o.effects)?o.effects=[u]:p.push(u))}else d={eventTime:d,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},null===c?(s=c=d,l=f):c=c.next=d,a|=p;if(null===(u=u.next)){if(null===(u=o.shared.pending))break;u=(p=u).next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}if(null===c&&(l=f),o.baseState=l,o.firstBaseUpdate=s,o.lastBaseUpdate=c,null!==(t=o.shared.interleaved)){o=t;do a|=o.lane,o=o.next;while(o!==t)}else null===i&&(o.shared.lanes=0);uv|=a,e.lanes=a,e.memoizedState=f}}function o4(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(null!==o){if(n.callback=null,n=r,"function"!=typeof o)throw Error(f(191,o));o.call(n)}}}var o5=(new s.Component).refs;function o6(e,t,r,n){r=null==(r=r(n,t=e.memoizedState))?t:er({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var o8={isMounted:function(e){return!!(e=e._reactInternals)&&e4(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=uN(),o=uI(e),i=oZ(n,o);i.payload=t,null!=r&&(i.callback=r),null!==(t=o0(e,i,o))&&(uR(t,e,o,n),o1(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=uN(),o=uI(e),i=oZ(n,o);i.tag=1,i.payload=t,null!=r&&(i.callback=r),null!==(t=o0(e,i,o))&&(uR(t,e,o,n),o1(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=uN(),n=uI(e),o=oZ(r,n);o.tag=2,null!=t&&(o.callback=t),null!==(t=o0(e,o,n))&&(uR(t,e,n,r),o1(t,e,n))}};function o7(e,t,r,n,o,i,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,i,a):!t.prototype||!t.prototype.isPureReactComponent||!rq(r,n)||!rq(o,i)}function o9(e,t,r){var n=!1,o=n3,i=t.contextType;return"object"==typeof i&&null!==i?i=oW(i):(o=n7(t)?n6:n4.current,i=(n=null!=(n=t.contextTypes))?n8(e,o):n3),t=new t(r,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=o8,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ie(e,t,r,n){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&o8.enqueueReplaceState(t,t.state,null)}function it(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=o5,oX(e);var i=t.contextType;"object"==typeof i&&null!==i?o.context=oW(i):(i=n7(t)?n6:n4.current,o.context=n8(e,i)),o.state=e.memoizedState,"function"==typeof(i=t.getDerivedStateFromProps)&&(o6(e,t,i,r),o.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof o.getSnapshotBeforeUpdate||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||(t=o.state,"function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&o8.enqueueReplaceState(o,o.state,null),o3(e,r,o,n),o.state=e.memoizedState),"function"==typeof o.componentDidMount&&(e.flags|=4194308)}function ir(e,t,r){if(null!==(e=r.ref)&&"function"!=typeof e&&"object"!=typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(f(309));var n=r.stateNode}if(!n)throw Error(f(147,e));var o=n,i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=o.refs;t===o5&&(t=o.refs={}),null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(f(284));if(!r._owner)throw Error(f(290,e))}return e}function io(e,t){throw Error(f(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ii(e){return(0,e._init)(e._payload)}function ia(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=le(e,t)).index=0,e.sibling=null,e}function i(t,r,n){return(t.index=n,e)?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=2,r):n:(t.flags|=2,r):(t.flags|=1048576,r)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function u(e,t,r,n){return null===t||6!==t.tag?(t=lo(r,e.mode,n)).return=e:(t=o(t,r)).return=e,t}function l(e,t,r,n){var i=r.type;return i===A?c(e,t,r.props.children,n,r.key):(null!==t&&(t.elementType===i||"object"==typeof i&&null!==i&&i.$$typeof===V&&ii(i)===t.type)?(n=o(t,r.props)).ref=ir(e,t,r):(n=lt(r.type,r.key,r.props,null,e.mode,n)).ref=ir(e,t,r),n.return=e,n)}function s(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?(t=li(r,e.mode,n)).return=e:(t=o(t,r.children||[])).return=e,t}function c(e,t,r,n,i){return null===t||7!==t.tag?(t=lr(r,e.mode,n,i)).return=e:(t=o(t,r)).return=e,t}function p(e,t,r){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=lo(""+t,e.mode,r)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case k:return(r=lt(t.type,t.key,t.props,null,e.mode,r)).ref=ir(e,null,t),r.return=e,r;case M:return(t=li(t,e.mode,r)).return=e,t;case V:return p(e,(0,t._init)(t._payload),r)}if(em(t)||K(t))return(t=lr(t,e.mode,r,null)).return=e,t;io(e,t)}return null}function d(e,t,r,n){var o=null!==t?t.key:null;if("string"==typeof r&&""!==r||"number"==typeof r)return null!==o?null:u(e,t,""+r,n);if("object"==typeof r&&null!==r){switch(r.$$typeof){case k:return r.key===o?l(e,t,r,n):null;case M:return r.key===o?s(e,t,r,n):null;case V:return d(e,t,(o=r._init)(r._payload),n)}if(em(r)||K(r))return null!==o?null:c(e,t,r,n,null);io(e,r)}return null}function h(e,t,r,n,o){if("string"==typeof n&&""!==n||"number"==typeof n)return u(t,e=e.get(r)||null,""+n,o);if("object"==typeof n&&null!==n){switch(n.$$typeof){case k:return l(t,e=e.get(null===n.key?r:n.key)||null,n,o);case M:return s(t,e=e.get(null===n.key?r:n.key)||null,n,o);case V:return h(e,t,r,(0,n._init)(n._payload),o)}if(em(n)||K(n))return c(t,e=e.get(r)||null,n,o,null);io(t,n)}return null}return function u(l,s,c,y){if("object"==typeof c&&null!==c&&c.type===A&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case k:e:{for(var v=c.key,m=s;null!==m;){if(m.key===v){if((v=c.type)===A){if(7===m.tag){r(l,m.sibling),(s=o(m,c.props.children)).return=l,l=s;break e}}else if(m.elementType===v||"object"==typeof v&&null!==v&&v.$$typeof===V&&ii(v)===m.type){r(l,m.sibling),(s=o(m,c.props)).ref=ir(l,m,c),s.return=l,l=s;break e}r(l,m);break}t(l,m),m=m.sibling}c.type===A?((s=lr(c.props.children,l.mode,y,c.key)).return=l,l=s):((y=lt(c.type,c.key,c.props,null,l.mode,y)).ref=ir(l,s,c),y.return=l,l=y)}return a(l);case M:e:{for(m=c.key;null!==s;){if(s.key===m){if(4===s.tag&&s.stateNode.containerInfo===c.containerInfo&&s.stateNode.implementation===c.implementation){r(l,s.sibling),(s=o(s,c.children||[])).return=l,l=s;break e}r(l,s);break}t(l,s),s=s.sibling}(s=li(c,l.mode,y)).return=l,l=s}return a(l);case V:return u(l,s,(m=c._init)(c._payload),y)}if(em(c))return function(o,a,u,l){for(var s=null,c=null,f=a,y=a=0,v=null;null!==f&&y<u.length;y++){f.index>y?(v=f,f=null):v=f.sibling;var m=d(o,f,u[y],l);if(null===m){null===f&&(f=v);break}e&&f&&null===m.alternate&&t(o,f),a=i(m,a,y),null===c?s=m:c.sibling=m,c=m,f=v}if(y===u.length)return r(o,f),oP&&og(o,y),s;if(null===f){for(;y<u.length;y++)null!==(f=p(o,u[y],l))&&(a=i(f,a,y),null===c?s=f:c.sibling=f,c=f);return oP&&og(o,y),s}for(f=n(o,f);y<u.length;y++)null!==(v=h(f,o,y,u[y],l))&&(e&&null!==v.alternate&&f.delete(null===v.key?y:v.key),a=i(v,a,y),null===c?s=v:c.sibling=v,c=v);return e&&f.forEach(function(e){return t(o,e)}),oP&&og(o,y),s}(l,s,c,y);if(K(c))return function(o,a,u,l){var s=K(u);if("function"!=typeof s)throw Error(f(150));if(null==(u=s.call(u)))throw Error(f(151));for(var c=s=null,y=a,v=a=0,m=null,g=u.next();null!==y&&!g.done;v++,g=u.next()){y.index>v?(m=y,y=null):m=y.sibling;var b=d(o,y,g.value,l);if(null===b){null===y&&(y=m);break}e&&y&&null===b.alternate&&t(o,y),a=i(b,a,v),null===c?s=b:c.sibling=b,c=b,y=m}if(g.done)return r(o,y),oP&&og(o,v),s;if(null===y){for(;!g.done;v++,g=u.next())null!==(g=p(o,g.value,l))&&(a=i(g,a,v),null===c?s=g:c.sibling=g,c=g);return oP&&og(o,v),s}for(y=n(o,y);!g.done;v++,g=u.next())null!==(g=h(y,o,v,g.value,l))&&(e&&null!==g.alternate&&y.delete(null===g.key?v:g.key),a=i(g,a,v),null===c?s=g:c.sibling=g,c=g);return e&&y.forEach(function(e){return t(o,e)}),oP&&og(o,v),s}(l,s,c,y);io(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==s&&6===s.tag?(r(l,s.sibling),(s=o(s,c)).return=l):(r(l,s),(s=lo(c,l.mode,y)).return=l),a(l=s)):r(l,s)}}var iu=ia(!0),il=ia(!1),is={},ic=n0(is),ip=n0(is),id=n0(is);function ih(e){if(e===is)throw Error(f(174));return e}function iy(e,t){switch(n2(id,t),n2(ip,e),n2(ic,is),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eP(null,"");break;default:t=eP(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}n1(ic),n2(ic,t)}function iv(){n1(ic),n1(ip),n1(id)}function im(e){ih(id.current);var t=ih(ic.current),r=eP(t,e.type);t!==r&&(n2(ip,e),n2(ic,r))}function ig(e){ip.current===e&&(n1(ic),n1(ip))}var ib=n0(0);function ix(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var i_=[];function iS(){for(var e=0;e<i_.length;e++)i_[e]._workInProgressVersionPrimary=null;i_.length=0}var iw=j.ReactCurrentDispatcher,iP=j.ReactCurrentBatchConfig,iO=0,iE=null,ij=null,ik=null,iM=!1,iA=!1,iT=0,iC=0;function iL(){throw Error(f(321))}function iN(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!r$(e[r],t[r]))return!1;return!0}function iI(e,t,r,n,o,i){if(iO=i,iE=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,iw.current=null===e||null===e.memoizedState?al:as,e=r(n,o),iA){i=0;do{if(iA=!1,iT=0,25<=i)throw Error(f(301));i+=1,ik=ij=null,t.updateQueue=null,iw.current=ac,e=r(n,o)}while(iA)}if(iw.current=au,t=null!==ij&&null!==ij.next,iO=0,ik=ij=iE=null,iM=!1,t)throw Error(f(300));return e}function iR(){var e=0!==iT;return iT=0,e}function iD(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ik?iE.memoizedState=ik=e:ik=ik.next=e,ik}function iG(){if(null===ij){var e=iE.alternate;e=null!==e?e.memoizedState:null}else e=ij.next;var t=null===ik?iE.memoizedState:ik.next;if(null!==t)ik=t,ij=e;else{if(null===e)throw Error(f(310));e={memoizedState:(ij=e).memoizedState,baseState:ij.baseState,baseQueue:ij.baseQueue,queue:ij.queue,next:null},null===ik?iE.memoizedState=ik=e:ik=ik.next=e}return ik}function iV(e,t){return"function"==typeof t?t(e):t}function iF(e){var t=iG(),r=t.queue;if(null===r)throw Error(f(311));r.lastRenderedReducer=e;var n=ij,o=n.baseQueue,i=r.pending;if(null!==i){if(null!==o){var a=o.next;o.next=i.next,i.next=a}n.baseQueue=o=i,r.pending=null}if(null!==o){i=o.next,n=n.baseState;var u=a=null,l=null,s=i;do{var c=s.lane;if((iO&c)===c)null!==l&&(l=l.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),n=s.hasEagerState?s.eagerState:e(n,s.action);else{var p={lane:c,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};null===l?(u=l=p,a=n):l=l.next=p,iE.lanes|=c,uv|=c}s=s.next}while(null!==s&&s!==i)null===l?a=n:l.next=u,r$(n,t.memoizedState)||(a_=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=l,r.lastRenderedState=n}if(null!==(e=r.interleaved)){o=e;do i=o.lane,iE.lanes|=i,uv|=i,o=o.next;while(o!==e)}else null===o&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function iz(e){var t=iG(),r=t.queue;if(null===r)throw Error(f(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(null!==o){r.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o)r$(i,t.memoizedState)||(a_=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function iK(){}function iQ(e,t){var r=iE,n=iG(),o=t(),i=!r$(n.memoizedState,o);if(i&&(n.memoizedState=o,a_=!0),n=n.queue,i1(iB.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||null!==ik&&1&ik.memoizedState.tag){if(r.flags|=2048,iq(9,iW.bind(null,r,n,o,t),void 0,null),null===us)throw Error(f(349));0!=(30&iO)||iH(r,t,o)}return o}function iH(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=iE.updateQueue)?(t={lastEffect:null,stores:null},iE.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function iW(e,t,r,n){t.value=r,t.getSnapshot=n,iY(t)&&iU(e)}function iB(e,t,r){return r(function(){iY(t)&&iU(e)})}function iY(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!r$(e,r)}catch(e){return!0}}function iU(e){var t=o$(e,1);null!==t&&uR(t,e,1,-1)}function i$(e){var t=iD();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:iV,lastRenderedState:e},t.queue=e,e=e.dispatch=an.bind(null,iE,e),[t.memoizedState,e]}function iq(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=iE.updateQueue)?(t={lastEffect:null,stores:null},iE.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function iX(){return iG().memoizedState}function iJ(e,t,r,n){var o=iD();iE.flags|=e,o.memoizedState=iq(1|t,r,void 0,void 0===n?null:n)}function iZ(e,t,r,n){var o=iG();n=void 0===n?null:n;var i=void 0;if(null!==ij){var a=ij.memoizedState;if(i=a.destroy,null!==n&&iN(n,a.deps)){o.memoizedState=iq(t,r,i,n);return}}iE.flags|=e,o.memoizedState=iq(1|t,r,i,n)}function i0(e,t){return iJ(8390656,8,e,t)}function i1(e,t){return iZ(2048,8,e,t)}function i2(e,t){return iZ(4,2,e,t)}function i3(e,t){return iZ(4,4,e,t)}function i4(e,t){return"function"==typeof t?(t(e=e()),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function i5(e,t,r){return r=null!=r?r.concat([e]):null,iZ(4,4,i4.bind(null,t,e),r)}function i6(){}function i8(e,t){var r=iG();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&iN(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function i7(e,t){var r=iG();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&iN(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function i9(e,t,r){return 0==(21&iO)?(e.baseState&&(e.baseState=!1,a_=!0),e.memoizedState=r):(r$(r,t)||(r=tb(),iE.lanes|=r,uv|=r,e.baseState=!0),t)}function ae(e,t){var r=tw;tw=0!==r&&4>r?r:4,e(!0);var n=iP.transition;iP.transition={};try{e(!1),t()}finally{tw=r,iP.transition=n}}function at(){return iG().memoizedState}function ar(e,t,r){var n=uI(e);r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},ao(e)?ai(t,r):null!==(r=oU(e,t,r,n))&&(uR(r,e,n,uN()),aa(r,t,n))}function an(e,t,r){var n=uI(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(ao(e))ai(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,u=i(a,r);if(o.hasEagerState=!0,o.eagerState=u,r$(u,a)){var l=t.interleaved;null===l?(o.next=o,oY(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch(e){}finally{}null!==(r=oU(e,t,o,n))&&(uR(r,e,n,o=uN()),aa(r,t,n))}}function ao(e){var t=e.alternate;return e===iE||null!==t&&t===iE}function ai(e,t){iA=iM=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function aa(e,t,r){if(0!=(4194240&r)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,tS(e,r)}}var au={readContext:oW,useCallback:iL,useContext:iL,useEffect:iL,useImperativeHandle:iL,useInsertionEffect:iL,useLayoutEffect:iL,useMemo:iL,useReducer:iL,useRef:iL,useState:iL,useDebugValue:iL,useDeferredValue:iL,useTransition:iL,useMutableSource:iL,useSyncExternalStore:iL,useId:iL,unstable_isNewReconciler:!1},al={readContext:oW,useCallback:function(e,t){return iD().memoizedState=[e,void 0===t?null:t],e},useContext:oW,useEffect:i0,useImperativeHandle:function(e,t,r){return r=null!=r?r.concat([e]):null,iJ(4194308,4,i4.bind(null,t,e),r)},useLayoutEffect:function(e,t){return iJ(4194308,4,e,t)},useInsertionEffect:function(e,t){return iJ(4,2,e,t)},useMemo:function(e,t){var r=iD();return t=void 0===t?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=iD();return t=void 0!==r?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=ar.bind(null,iE,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},iD().memoizedState=e},useState:i$,useDebugValue:i6,useDeferredValue:function(e){return iD().memoizedState=e},useTransition:function(){var e=i$(!1),t=e[0];return e=ae.bind(null,e[1]),iD().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=iE,o=iD();if(oP){if(void 0===r)throw Error(f(407));r=r()}else{if(r=t(),null===us)throw Error(f(349));0!=(30&iO)||iH(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,i0(iB.bind(null,n,i,e),[e]),n.flags|=2048,iq(9,iW.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=iD(),t=us.identifierPrefix;if(oP){var r=om,n=ov;t=":"+t+"R"+(r=(n&~(1<<32-tf(n)-1)).toString(32)+r),0<(r=iT++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=iC++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},as={readContext:oW,useCallback:i8,useContext:oW,useEffect:i1,useImperativeHandle:i5,useInsertionEffect:i2,useLayoutEffect:i3,useMemo:i7,useReducer:iF,useRef:iX,useState:function(){return iF(iV)},useDebugValue:i6,useDeferredValue:function(e){return i9(iG(),ij.memoizedState,e)},useTransition:function(){return[iF(iV)[0],iG().memoizedState]},useMutableSource:iK,useSyncExternalStore:iQ,useId:at,unstable_isNewReconciler:!1},ac={readContext:oW,useCallback:i8,useContext:oW,useEffect:i1,useImperativeHandle:i5,useInsertionEffect:i2,useLayoutEffect:i3,useMemo:i7,useReducer:iz,useRef:iX,useState:function(){return iz(iV)},useDebugValue:i6,useDeferredValue:function(e){var t=iG();return null===ij?t.memoizedState=e:i9(t,ij.memoizedState,e)},useTransition:function(){return[iz(iV)[0],iG().memoizedState]},useMutableSource:iK,useSyncExternalStore:iQ,useId:at,unstable_isNewReconciler:!1};function af(e,t){try{var r="",n=t;do r+=function(e){switch(e.tag){case 5:return en(e.type);case 16:return en("Lazy");case 13:return en("Suspense");case 19:return en("SuspenseList");case 0:case 2:case 15:return e=ei(e.type,!1);case 11:return e=ei(e.type.render,!1);case 1:return e=ei(e.type,!0);default:return""}}(n),n=n.return;while(n)var o=r}catch(e){o="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:o,digest:null}}function ap(e,t,r){return{value:e,source:null,stack:null!=r?r:null,digest:null!=t?t:null}}function ad(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var ah="function"==typeof WeakMap?WeakMap:Map;function ay(e,t,r){(r=oZ(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){uP||(uP=!0,uO=n),ad(e,t)},r}function av(e,t,r){(r=oZ(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"==typeof n){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){ad(e,t)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(r.callback=function(){ad(e,t),"function"!=typeof n&&(null===uE?uE=new Set([this]):uE.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:null!==r?r:""})}),r}function am(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new ah;var o=new Set;n.set(t,o)}else void 0===(o=n.get(t))&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=u3.bind(null,e,t,r),t.then(e,e))}function ag(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e)return null}function ab(e,t,r,n,o){return 0==(1&e.mode)?e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,1===r.tag&&(null===r.alternate?r.tag=17:((t=oZ(-1,1)).tag=2,o0(r,t,1))),r.lanes|=1):(e.flags|=65536,e.lanes=o),e}var ax=j.ReactCurrentOwner,a_=!1;function aS(e,t,r,n){t.child=null===e?il(t,null,r,n):iu(t,e.child,r,n)}function aw(e,t,r,n,o){r=r.render;var i=t.ref;return(oH(t,o),n=iI(e,t,r,n,i,o),r=iR(),null===e||a_)?(oP&&r&&ox(t),t.flags|=1,aS(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,aK(e,t,o))}function aP(e,t,r,n,o){if(null===e){var i=r.type;return"function"!=typeof i||u9(i)||void 0!==i.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=lt(r.type,null,n,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,aO(e,t,i,n,o))}if(i=e.child,0==(e.lanes&o)){var a=i.memoizedProps;if((r=null!==(r=r.compare)?r:rq)(a,n)&&e.ref===t.ref)return aK(e,t,o)}return t.flags|=1,(e=le(i,n)).ref=t.ref,e.return=t,t.child=e}function aO(e,t,r,n,o){if(null!==e){var i=e.memoizedProps;if(rq(i,n)&&e.ref===t.ref){if(a_=!1,t.pendingProps=n=i,0==(e.lanes&o))return t.lanes=e.lanes,aK(e,t,o);0!=(131072&e.flags)&&(a_=!0)}}return ak(e,t,r,n,o)}function aE(e,t,r){var n=t.pendingProps,o=n.children,i=null!==e?e.memoizedState:null;if("hidden"===n.mode){if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n2(ud,up),up|=r;else{if(0==(1073741824&r))return e=null!==i?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,n2(ud,up),up|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=null!==i?i.baseLanes:r,n2(ud,up),up|=n}}else null!==i?(n=i.baseLanes|r,t.memoizedState=null):n=r,n2(ud,up),up|=n;return aS(e,t,o,r),t.child}function aj(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ak(e,t,r,n,o){var i=n7(r)?n6:n4.current;return(i=n8(t,i),oH(t,o),r=iI(e,t,r,n,i,o),n=iR(),null===e||a_)?(oP&&n&&ox(t),t.flags|=1,aS(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,aK(e,t,o))}function aM(e,t,r,n,o){if(n7(r)){var i=!0;or(t)}else i=!1;if(oH(t,o),null===t.stateNode)az(e,t),o9(t,r,n),it(t,r,n,o),n=!0;else if(null===e){var a=t.stateNode,u=t.memoizedProps;a.props=u;var l=a.context,s=r.contextType;s="object"==typeof s&&null!==s?oW(s):n8(t,s=n7(r)?n6:n4.current);var c=r.getDerivedStateFromProps,f="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;f||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(u!==n||l!==s)&&ie(t,a,n,s),oq=!1;var p=t.memoizedState;a.state=p,o3(t,n,a,o),l=t.memoizedState,u!==n||p!==l||n5.current||oq?("function"==typeof c&&(o6(t,r,c,n),l=t.memoizedState),(u=oq||o7(t,r,u,n,p,l,s))?(f||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),a.props=n,a.state=l,a.context=s,n=u):("function"==typeof a.componentDidMount&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,oJ(e,t),u=t.memoizedProps,s=t.type===t.elementType?u:oR(t.type,u),a.props=s,f=t.pendingProps,p=a.context,l="object"==typeof(l=r.contextType)&&null!==l?oW(l):n8(t,l=n7(r)?n6:n4.current);var d=r.getDerivedStateFromProps;(c="function"==typeof d||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(u!==f||p!==l)&&ie(t,a,n,l),oq=!1,p=t.memoizedState,a.state=p,o3(t,n,a,o);var h=t.memoizedState;u!==f||p!==h||n5.current||oq?("function"==typeof d&&(o6(t,r,d,n),h=t.memoizedState),(s=oq||o7(t,r,s,n,p,h,l)||!1)?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(n,h,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(n,h,l)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=h),a.props=n,a.state=h,a.context=l,n=s):("function"!=typeof a.componentDidUpdate||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return aA(e,t,r,n,i,o)}function aA(e,t,r,n,o,i){aj(e,t);var a=0!=(128&t.flags);if(!n&&!a)return o&&on(t,r,!1),aK(e,t,i);n=t.stateNode,ax.current=t;var u=a&&"function"!=typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&a?(t.child=iu(t,e.child,null,i),t.child=iu(t,null,u,i)):aS(e,t,u,i),t.memoizedState=n.state,o&&on(t,r,!0),t.child}function aT(e){var t=e.stateNode;t.pendingContext?oe(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oe(e,t.context,!1),iy(e,t.containerInfo)}function aC(e,t,r,n,o){return oL(),oN(o),t.flags|=256,aS(e,t,r,n),t.child}var aL={dehydrated:null,treeContext:null,retryLane:0};function aN(e){return{baseLanes:e,cachePool:null,transitions:null}}function aI(e,t,r){var n,o=t.pendingProps,i=ib.current,a=!1,u=0!=(128&t.flags);if((n=u)||(n=(null===e||null!==e.memoizedState)&&0!=(2&i)),n?(a=!0,t.flags&=-129):(null===e||null!==e.memoizedState)&&(i|=1),n2(ib,1&i),null===e)return(oM(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated))?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(u=o.children,e=o.fallback,a?(o=t.mode,a=t.child,u={mode:"hidden",children:u},0==(1&o)&&null!==a?(a.childLanes=0,a.pendingProps=u):a=ln(u,o,0,null),e=lr(e,o,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=aN(r),t.memoizedState=aL,e):aR(t,u));if(null!==(i=e.memoizedState)&&null!==(n=i.dehydrated))return function(e,t,r,n,o,i,a){if(r)return 256&t.flags?(t.flags&=-257,aD(e,t,a,n=ap(Error(f(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=ln({mode:"visible",children:n.children},o,0,null),i=lr(i,o,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,0!=(1&t.mode)&&iu(t,e.child,null,a),t.child.memoizedState=aN(a),t.memoizedState=aL,i);if(0==(1&t.mode))return aD(e,t,a,null);if("$!"===o.data){if(n=o.nextSibling&&o.nextSibling.dataset)var u=n.dgst;return n=u,aD(e,t,a,n=ap(i=Error(f(419)),n,void 0))}if(u=0!=(a&e.childLanes),a_||u){if(null!==(n=us)){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!=(o&(n.suspendedLanes|a))?0:o)&&o!==i.retryLane&&(i.retryLane=o,o$(e,o),uR(n,e,o,-1))}return u$(),aD(e,t,a,n=ap(Error(f(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=u5.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ow=nV(o.nextSibling),oS=t,oP=!0,oO=null,null!==e&&(od[oh++]=ov,od[oh++]=om,od[oh++]=oy,ov=e.id,om=e.overflow,oy=t),t=aR(t,n.children),t.flags|=4096,t)}(e,t,u,o,n,i,r);if(a){a=o.fallback,u=t.mode,n=(i=e.child).sibling;var l={mode:"hidden",children:o.children};return 0==(1&u)&&t.child!==i?((o=t.child).childLanes=0,o.pendingProps=l,t.deletions=null):(o=le(i,l)).subtreeFlags=14680064&i.subtreeFlags,null!==n?a=le(n,a):(a=lr(a,u,r,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,u=null===(u=e.child.memoizedState)?aN(r):{baseLanes:u.baseLanes|r,cachePool:null,transitions:u.transitions},a.memoizedState=u,a.childLanes=e.childLanes&~r,t.memoizedState=aL,o}return e=(a=e.child).sibling,o=le(a,{mode:"visible",children:o.children}),0==(1&t.mode)&&(o.lanes=r),o.return=t,o.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function aR(e,t){return(t=ln({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function aD(e,t,r,n){return null!==n&&oN(n),iu(t,e.child,null,r),e=aR(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function aG(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),oQ(e.return,t,r)}function aV(e,t,r,n,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function aF(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(aS(e,t,n.children,r),0!=(2&(n=ib.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&aG(e,r,t);else if(19===e.tag)aG(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(n2(ib,n),0==(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(o=null,r=t.child;null!==r;)null!==(e=r.alternate)&&null===ix(e)&&(o=r),r=r.sibling;null===(r=o)?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),aV(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ix(e)){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}aV(t,!0,r,null,i);break;case"together":aV(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function az(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function aK(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),uv|=t.lanes,0==(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(f(153));if(null!==t.child){for(r=le(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=le(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function aQ(e,t){if(!oP)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function aH(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;null!==o;)r|=o.lanes|o.childLanes,n|=14680064&o.subtreeFlags,n|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}o=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},i=function(){},a=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,ih(ic.current);var i,a=null;switch(r){case"input":o=ef(e,o),n=ef(e,n),a=[];break;case"select":o=er({},o,{value:void 0}),n=er({},n,{value:void 0}),a=[];break;case"textarea":o=eb(e,o),n=eb(e,n),a=[];break;default:"function"!=typeof o.onClick&&"function"==typeof n.onClick&&(e.onclick=nM)}for(s in eN(r,n),r=null,o)if(!n.hasOwnProperty(s)&&o.hasOwnProperty(s)&&null!=o[s]){if("style"===s){var u=o[s];for(i in u)u.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else"dangerouslySetInnerHTML"!==s&&"children"!==s&&"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(d.hasOwnProperty(s)?a||(a=[]):(a=a||[]).push(s,null))}for(s in n){var l=n[s];if(u=null!=o?o[s]:void 0,n.hasOwnProperty(s)&&l!==u&&(null!=l||null!=u)){if("style"===s){if(u){for(i in u)!u.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in l)l.hasOwnProperty(i)&&u[i]!==l[i]&&(r||(r={}),r[i]=l[i])}else r||(a||(a=[]),a.push(s,r)),r=l}else"dangerouslySetInnerHTML"===s?(l=l?l.__html:void 0,u=u?u.__html:void 0,null!=l&&u!==l&&(a=a||[]).push(s,l)):"children"===s?"string"!=typeof l&&"number"!=typeof l||(a=a||[]).push(s,""+l):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&(d.hasOwnProperty(s)?(null!=l&&"onScroll"===s&&ny("scroll",e),a||u===l||(a=[])):(a=a||[]).push(s,l))}}r&&(a=a||[]).push("style",r);var s=a;(t.updateQueue=s)&&(t.flags|=4)}},u=function(e,t,r,n){r!==n&&(t.flags|=4)};var aW=!1,aB=!1,aY="function"==typeof WeakSet?WeakSet:Set,aU=null;function a$(e,t){var r=e.ref;if(null!==r){if("function"==typeof r)try{r(null)}catch(r){u2(e,t,r)}else r.current=null}}function aq(e,t,r){try{r()}catch(r){u2(e,t,r)}}var aX=!1;function aJ(e,t,r){var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&aq(t,r,i)}o=o.next}while(o!==n)}}function aZ(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function a0(e){var t=e.ref;if(null!==t){var r=e.stateNode;e.tag,e=r,"function"==typeof t?t(e):t.current=e}}function a1(e){return 5===e.tag||3===e.tag||4===e.tag}function a2(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||a1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags||null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}var a3=null,a4=!1;function a5(e,t,r){for(r=r.child;null!==r;)a6(e,t,r),r=r.sibling}function a6(e,t,r){if(tc&&"function"==typeof tc.onCommitFiberUnmount)try{tc.onCommitFiberUnmount(ts,r)}catch(e){}switch(r.tag){case 5:aB||a$(r,t);case 6:var n=a3,o=a4;a3=null,a5(e,t,r),a3=n,a4=o,null!==a3&&(a4?(e=a3,r=r.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)):a3.removeChild(r.stateNode));break;case 18:null!==a3&&(a4?(e=a3,r=r.stateNode,8===e.nodeType?nG(e.parentNode,r):1===e.nodeType&&nG(e,r),tB(e)):nG(a3,r.stateNode));break;case 4:n=a3,o=a4,a3=r.stateNode.containerInfo,a4=!0,a5(e,t,r),a3=n,a4=o;break;case 0:case 11:case 14:case 15:if(!aB&&null!==(n=r.updateQueue)&&null!==(n=n.lastEffect)){o=n=n.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!=(2&i)?aq(r,t,a):0!=(4&i)&&aq(r,t,a)),o=o.next}while(o!==n)}a5(e,t,r);break;case 1:if(!aB&&(a$(r,t),"function"==typeof(n=r.stateNode).componentWillUnmount))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(e){u2(r,t,e)}a5(e,t,r);break;case 21:default:a5(e,t,r);break;case 22:1&r.mode?(aB=(n=aB)||null!==r.memoizedState,a5(e,t,r),aB=n):a5(e,t,r)}}function a8(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new aY),t.forEach(function(t){var n=u6.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))})}}function a7(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var o=r[n];try{var i=t,a=i;e:for(;null!==a;){switch(a.tag){case 5:a3=a.stateNode,a4=!1;break e;case 3:case 4:a3=a.stateNode.containerInfo,a4=!0;break e}a=a.return}if(null===a3)throw Error(f(160));a6(e,i,o),a3=null,a4=!1;var u=o.alternate;null!==u&&(u.return=null),o.return=null}catch(e){u2(o,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)a9(t,e),t=t.sibling}function a9(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a7(t,e),ue(e),4&n){try{aJ(3,e,e.return),aZ(3,e)}catch(t){u2(e,e.return,t)}try{aJ(5,e,e.return)}catch(t){u2(e,e.return,t)}}break;case 1:a7(t,e),ue(e),512&n&&null!==r&&a$(r,r.return);break;case 5:if(a7(t,e),ue(e),512&n&&null!==r&&a$(r,r.return),32&e.flags){var o=e.stateNode;try{ek(o,"")}catch(t){u2(e,e.return,t)}}if(4&n&&null!=(o=e.stateNode)){var i=e.memoizedProps,a=null!==r?r.memoizedProps:i,u=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===u&&"radio"===i.type&&null!=i.name&&ed(o,i),eI(u,a);var s=eI(u,i);for(a=0;a<l.length;a+=2){var c=l[a],p=l[a+1];"style"===c?eC(o,p):"dangerouslySetInnerHTML"===c?ej(o,p):"children"===c?ek(o,p):E(o,c,p,s)}switch(u){case"input":eh(o,i);break;case"textarea":e_(o,i);break;case"select":var d=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?eg(o,!!i.multiple,h,!1):!!i.multiple!==d&&(null!=i.defaultValue?eg(o,!!i.multiple,i.defaultValue,!0):eg(o,!!i.multiple,i.multiple?[]:"",!1))}o[nQ]=i}catch(t){u2(e,e.return,t)}}break;case 6:if(a7(t,e),ue(e),4&n){if(null===e.stateNode)throw Error(f(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(t){u2(e,e.return,t)}}break;case 3:if(a7(t,e),ue(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{tB(t.containerInfo)}catch(t){u2(e,e.return,t)}break;case 4:default:a7(t,e),ue(e);break;case 13:a7(t,e),ue(e),8192&(o=e.child).flags&&(i=null!==o.memoizedState,o.stateNode.isHidden=i,i&&(null===o.alternate||null===o.alternate.memoizedState)&&(u_=tr())),4&n&&a8(e);break;case 22:if(c=null!==r&&null!==r.memoizedState,1&e.mode?(aB=(s=aB)||c,a7(t,e),aB=s):a7(t,e),ue(e),8192&n){if(s=null!==e.memoizedState,(e.stateNode.isHidden=s)&&!c&&0!=(1&e.mode))for(aU=e,c=e.child;null!==c;){for(p=aU=c;null!==aU;){switch(h=(d=aU).child,d.tag){case 0:case 11:case 14:case 15:aJ(4,d,d.return);break;case 1:a$(d,d.return);var y=d.stateNode;if("function"==typeof y.componentWillUnmount){n=d,r=d.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(e){u2(n,r,e)}}break;case 5:a$(d,d.return);break;case 22:if(null!==d.memoizedState){ur(p);continue}}null!==h?(h.return=d,aU=h):ur(p)}c=c.sibling}e:for(c=null,p=e;;){if(5===p.tag){if(null===c){c=p;try{o=p.stateNode,s?(i=o.style,"function"==typeof i.setProperty?i.setProperty("display","none","important"):i.display="none"):(u=p.stateNode,a=null!=(l=p.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,u.style.display=eT("display",a))}catch(t){u2(e,e.return,t)}}}else if(6===p.tag){if(null===c)try{p.stateNode.nodeValue=s?"":p.memoizedProps}catch(t){u2(e,e.return,t)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:a7(t,e),ue(e),4&n&&a8(e);case 21:}}function ue(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(a1(r)){var n=r;break e}r=r.return}throw Error(f(160))}switch(n.tag){case 5:var o=n.stateNode;32&n.flags&&(ek(o,""),n.flags&=-33);var i=a2(e);!function e(t,r,n){var o=t.tag;if(5===o||6===o)t=t.stateNode,r?n.insertBefore(t,r):n.appendChild(t);else if(4!==o&&null!==(t=t.child))for(e(t,r,n),t=t.sibling;null!==t;)e(t,r,n),t=t.sibling}(e,i,o);break;case 3:case 4:var a=n.stateNode.containerInfo,u=a2(e);!function e(t,r,n){var o=t.tag;if(5===o||6===o)t=t.stateNode,r?8===n.nodeType?n.parentNode.insertBefore(t,r):n.insertBefore(t,r):(8===n.nodeType?(r=n.parentNode).insertBefore(t,n):(r=n).appendChild(t),null!=(n=n._reactRootContainer)||null!==r.onclick||(r.onclick=nM));else if(4!==o&&null!==(t=t.child))for(e(t,r,n),t=t.sibling;null!==t;)e(t,r,n),t=t.sibling}(e,u,a);break;default:throw Error(f(161))}}catch(t){u2(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ut(e){for(;null!==aU;){var t=aU;if(0!=(8772&t.flags)){var r=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:aB||aZ(5,t);break;case 1:var n=t.stateNode;if(4&t.flags&&!aB){if(null===r)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:oR(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}}var i=t.updateQueue;null!==i&&o4(t,i,n);break;case 3:var a=t.updateQueue;if(null!==a){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}o4(t,a,r)}break;case 5:var u=t.stateNode;if(null===r&&4&t.flags){r=u;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var s=t.alternate;if(null!==s){var c=s.memoizedState;if(null!==c){var p=c.dehydrated;null!==p&&tB(p)}}}break;default:throw Error(f(163))}aB||512&t.flags&&a0(t)}catch(e){u2(t,t.return,e)}}if(t===e){aU=null;break}if(null!==(r=t.sibling)){r.return=t.return,aU=r;break}aU=t.return}}function ur(e){for(;null!==aU;){var t=aU;if(t===e){aU=null;break}var r=t.sibling;if(null!==r){r.return=t.return,aU=r;break}aU=t.return}}function un(e){for(;null!==aU;){var t=aU;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{aZ(4,t)}catch(e){u2(t,r,e)}break;case 1:var n=t.stateNode;if("function"==typeof n.componentDidMount){var o=t.return;try{n.componentDidMount()}catch(e){u2(t,o,e)}}var i=t.return;try{a0(t)}catch(e){u2(t,i,e)}break;case 5:var a=t.return;try{a0(t)}catch(e){u2(t,a,e)}}}catch(e){u2(t,t.return,e)}if(t===e){aU=null;break}var u=t.sibling;if(null!==u){u.return=t.return,aU=u;break}aU=t.return}}var uo=Math.ceil,ui=j.ReactCurrentDispatcher,ua=j.ReactCurrentOwner,uu=j.ReactCurrentBatchConfig,ul=0,us=null,uc=null,uf=0,up=0,ud=n0(0),uh=0,uy=null,uv=0,um=0,ug=0,ub=null,ux=null,u_=0,uS=1/0,uw=null,uP=!1,uO=null,uE=null,uj=!1,uk=null,uM=0,uA=0,uT=null,uC=-1,uL=0;function uN(){return 0!=(6&ul)?tr():-1!==uC?uC:uC=tr()}function uI(e){return 0==(1&e.mode)?1:0!=(2&ul)&&0!==uf?uf&-uf:null!==oI.transition?(0===uL&&(uL=tb()),uL):0!==(e=tw)?e:e=void 0===(e=window.event)?16:t0(e.type)}function uR(e,t,r,n){if(50<uA)throw uA=0,uT=null,Error(f(185));t_(e,r,n),(0==(2&ul)||e!==us)&&(e===us&&(0==(2&ul)&&(um|=r),4===uh&&uz(e,uf)),uD(e,n),1===r&&0===ul&&0==(1&t.mode)&&(uS=tr()+500,oi&&ol()))}function uD(e,t){var r,n,o,i=e.callbackNode;!function(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-tf(i),u=1<<a,l=o[a];-1===l?(0==(u&r)||0!=(u&n))&&(o[a]=function(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return -1}}(u,t)):l<=t&&(e.expiredLanes|=u),i&=~u}}(e,t);var a=tm(e,e===us?uf:0);if(0===a)null!==i&&e9(i),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(null!=i&&e9(i),1===t)0===e.tag?(o=uK.bind(null,e),oi=!0,ou(o)):ou(uK.bind(null,e)),nR(function(){0==(6&ul)&&ol()}),i=null;else{switch(tP(a)){case 1:i=to;break;case 4:i=ti;break;case 16:default:i=ta;break;case 536870912:i=tl}i=e7(i,uG.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function uG(e,t){if(uC=-1,uL=0,0!=(6&ul))throw Error(f(327));var r=e.callbackNode;if(u0()&&e.callbackNode!==r)return null;var n=tm(e,e===us?uf:0);if(0===n)return null;if(0!=(30&n)||0!=(n&e.expiredLanes)||t)t=uq(e,n);else{t=n;var o=ul;ul|=2;var i=uU();for((us!==e||uf!==t)&&(uw=null,uS=tr()+500,uB(e,t));;)try{(function(){for(;null!==uc&&!te();)uX(uc)})();break}catch(t){uY(e,t)}oz(),ui.current=i,ul=o,null!==uc?t=0:(us=null,uf=0,t=uh)}if(0!==t){if(2===t&&0!==(o=tg(e))&&(n=o,t=uV(e,o)),1===t)throw r=uy,uB(e,0),uz(e,n),uD(e,tr()),r;if(6===t)uz(e,n);else{if(o=e.current.alternate,0==(30&n)&&!function(e){for(var t=e;;){if(16384&t.flags){var r=t.updateQueue;if(null!==r&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!r$(i(),o))return!1}catch(e){return!1}}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=uq(e,n))&&0!==(i=tg(e))&&(n=i,t=uV(e,i)),1===t))throw r=uy,uB(e,0),uz(e,n),uD(e,tr()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(f(345));case 2:case 5:uZ(e,ux,uw);break;case 3:if(uz(e,n),(130023424&n)===n&&10<(t=u_+500-tr())){if(0!==tm(e,0))break;if(((o=e.suspendedLanes)&n)!==n){uN(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=nL(uZ.bind(null,e,ux,uw),t);break}uZ(e,ux,uw);break;case 4:if(uz(e,n),(4194240&n)===n)break;for(o=-1,t=e.eventTimes;0<n;){var a=31-tf(n);i=1<<a,(a=t[a])>o&&(o=a),n&=~i}if(n=o,10<(n=(120>(n=tr()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*uo(n/1960))-n)){e.timeoutHandle=nL(uZ.bind(null,e,ux,uw),n);break}uZ(e,ux,uw);break;default:throw Error(f(329))}}}return uD(e,tr()),e.callbackNode===r?uG.bind(null,e):null}function uV(e,t){var r=ub;return e.current.memoizedState.isDehydrated&&(uB(e,t).flags|=256),2!==(e=uq(e,t))&&(t=ux,ux=r,null!==t&&uF(t)),e}function uF(e){null===ux?ux=e:ux.push.apply(ux,e)}function uz(e,t){for(t&=~ug,t&=~um,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-tf(t),n=1<<r;e[r]=-1,t&=~n}}function uK(e){if(0!=(6&ul))throw Error(f(327));u0();var t=tm(e,0);if(0==(1&t))return uD(e,tr()),null;var r=uq(e,t);if(0!==e.tag&&2===r){var n=tg(e);0!==n&&(t=n,r=uV(e,n))}if(1===r)throw r=uy,uB(e,0),uz(e,t),uD(e,tr()),r;if(6===r)throw Error(f(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,uZ(e,ux,uw),uD(e,tr()),null}function uQ(e,t){var r=ul;ul|=1;try{return e(t)}finally{0===(ul=r)&&(uS=tr()+500,oi&&ol())}}function uH(e){null!==uk&&0===uk.tag&&0==(6&ul)&&u0();var t=ul;ul|=1;var r=uu.transition,n=tw;try{if(uu.transition=null,tw=1,e)return e()}finally{tw=n,uu.transition=r,0==(6&(ul=t))&&ol()}}function uW(){up=ud.current,n1(ud)}function uB(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,nN(r)),null!==uc)for(r=uc.return;null!==r;){var n=r;switch(o_(n),n.tag){case 1:null!=(n=n.type.childContextTypes)&&n9();break;case 3:iv(),n1(n5),n1(n4),iS();break;case 5:ig(n);break;case 4:iv();break;case 13:case 19:n1(ib);break;case 10:oK(n.type._context);break;case 22:case 23:uW()}r=r.return}if(us=e,uc=e=le(e.current,null),uf=up=t,uh=0,uy=null,ug=um=uv=0,ux=ub=null,null!==oB){for(t=0;t<oB.length;t++)if(null!==(n=(r=oB[t]).interleaved)){r.interleaved=null;var o=n.next,i=r.pending;if(null!==i){var a=i.next;i.next=o,n.next=a}r.pending=n}oB=null}return e}function uY(e,t){for(;;){var r=uc;try{if(oz(),iw.current=au,iM){for(var n=iE.memoizedState;null!==n;){var o=n.queue;null!==o&&(o.pending=null),n=n.next}iM=!1}if(iO=0,ik=ij=iE=null,iA=!1,iT=0,ua.current=null,null===r||null===r.return){uh=1,uy=t,uc=null;break}e:{var i=e,a=r.return,u=r,l=t;if(t=uf,u.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var s=l,c=u,p=c.tag;if(0==(1&c.mode)&&(0===p||11===p||15===p)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=ag(a);if(null!==h){h.flags&=-257,ab(h,a,u,i,t),1&h.mode&&am(i,s,t),t=h,l=s;var y=t.updateQueue;if(null===y){var v=new Set;v.add(l),t.updateQueue=v}else y.add(l);break e}if(0==(1&t)){am(i,s,t),u$();break e}l=Error(f(426))}else if(oP&&1&u.mode){var m=ag(a);if(null!==m){0==(65536&m.flags)&&(m.flags|=256),ab(m,a,u,i,t),oN(af(l,u));break e}}i=l=af(l,u),4!==uh&&(uh=2),null===ub?ub=[i]:ub.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=ay(i,l,t);o2(i,g);break e;case 1:u=l;var b=i.type,x=i.stateNode;if(0==(128&i.flags)&&("function"==typeof b.getDerivedStateFromError||null!==x&&"function"==typeof x.componentDidCatch&&(null===uE||!uE.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var _=av(i,u,t);o2(i,_);break e}}i=i.return}while(null!==i)}uJ(r)}catch(e){t=e,uc===r&&null!==r&&(uc=r=r.return);continue}break}}function uU(){var e=ui.current;return ui.current=au,null===e?au:e}function u$(){(0===uh||3===uh||2===uh)&&(uh=4),null===us||0==(268435455&uv)&&0==(268435455&um)||uz(us,uf)}function uq(e,t){var r=ul;ul|=2;var n=uU();for((us!==e||uf!==t)&&(uw=null,uB(e,t));;)try{(function(){for(;null!==uc;)uX(uc)})();break}catch(t){uY(e,t)}if(oz(),ul=r,ui.current=n,null!==uc)throw Error(f(261));return us=null,uf=0,uh}function uX(e){var t=l(e.alternate,e,up);e.memoizedProps=e.pendingProps,null===t?uJ(e):uc=t,ua.current=null}function uJ(e){var t=e;do{var r=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(r=function(e,t,r){var n=t.pendingProps;switch(o_(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return aH(t),null;case 1:case 17:return n7(t.type)&&n9(),aH(t),null;case 3:return n=t.stateNode,iv(),n1(n5),n1(n4),iS(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(null===e||null===e.child)&&(oT(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==oO&&(uF(oO),oO=null))),i(e,t),aH(t),null;case 5:ig(t);var l=ih(id.current);if(r=t.type,null!==e&&null!=t.stateNode)a(e,t,r,n,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(null===t.stateNode)throw Error(f(166));return aH(t),null}if(e=ih(ic.current),oT(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[nK]=t,n[nQ]=s,e=0!=(1&t.mode),r){case"dialog":ny("cancel",n),ny("close",n);break;case"iframe":case"object":case"embed":ny("load",n);break;case"video":case"audio":for(l=0;l<nf.length;l++)ny(nf[l],n);break;case"source":ny("error",n);break;case"img":case"image":case"link":ny("error",n),ny("load",n);break;case"details":ny("toggle",n);break;case"input":ep(n,s),ny("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},ny("invalid",n);break;case"textarea":ex(n,s),ny("invalid",n)}for(var c in eN(r,s),l=null,s)if(s.hasOwnProperty(c)){var p=s[c];"children"===c?"string"==typeof p?n.textContent!==p&&(!0!==s.suppressHydrationWarning&&nk(n.textContent,p,e),l=["children",p]):"number"==typeof p&&n.textContent!==""+p&&(!0!==s.suppressHydrationWarning&&nk(n.textContent,p,e),l=["children",""+p]):d.hasOwnProperty(c)&&null!=p&&"onScroll"===c&&ny("scroll",n)}switch(r){case"input":el(n),ey(n,s,!0);break;case"textarea":el(n),eS(n);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(n.onclick=nM)}n=l,t.updateQueue=n,null!==n&&(t.flags|=4)}else{c=9===l.nodeType?l:l.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=ew(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=c.createElement("div")).innerHTML="<script></script>",e=e.removeChild(e.firstChild)):"string"==typeof n.is?e=c.createElement(r,{is:n.is}):(e=c.createElement(r),"select"===r&&(c=e,n.multiple?c.multiple=!0:n.size&&(c.size=n.size))):e=c.createElementNS(e,r),e[nK]=t,e[nQ]=n,o(e,t,!1,!1),t.stateNode=e;e:{switch(c=eI(r,n),r){case"dialog":ny("cancel",e),ny("close",e),l=n;break;case"iframe":case"object":case"embed":ny("load",e),l=n;break;case"video":case"audio":for(l=0;l<nf.length;l++)ny(nf[l],e);l=n;break;case"source":ny("error",e),l=n;break;case"img":case"image":case"link":ny("error",e),ny("load",e),l=n;break;case"details":ny("toggle",e),l=n;break;case"input":ep(e,n),l=ef(e,n),ny("invalid",e);break;case"option":default:l=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},l=er({},n,{value:void 0}),ny("invalid",e);break;case"textarea":ex(e,n),l=eb(e,n),ny("invalid",e)}for(s in eN(r,l),p=l)if(p.hasOwnProperty(s)){var h=p[s];"style"===s?eC(e,h):"dangerouslySetInnerHTML"===s?null!=(h=h?h.__html:void 0)&&ej(e,h):"children"===s?"string"==typeof h?("textarea"!==r||""!==h)&&ek(e,h):"number"==typeof h&&ek(e,""+h):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(d.hasOwnProperty(s)?null!=h&&"onScroll"===s&&ny("scroll",e):null!=h&&E(e,s,h,c))}switch(r){case"input":el(e),ey(e,n,!1);break;case"textarea":el(e),eS(e);break;case"option":null!=n.value&&e.setAttribute("value",""+ea(n.value));break;case"select":e.multiple=!!n.multiple,null!=(s=n.value)?eg(e,!!n.multiple,s,!1):null!=n.defaultValue&&eg(e,!!n.multiple,n.defaultValue,!0);break;default:"function"==typeof l.onClick&&(e.onclick=nM)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return aH(t),null;case 6:if(e&&null!=t.stateNode)u(e,t,e.memoizedProps,n);else{if("string"!=typeof n&&null===t.stateNode)throw Error(f(166));if(r=ih(id.current),ih(ic.current),oT(t)){if(n=t.stateNode,r=t.memoizedProps,n[nK]=t,(s=n.nodeValue!==r)&&null!==(e=oS))switch(e.tag){case 3:nk(n.nodeValue,r,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&nk(n.nodeValue,r,0!=(1&e.mode))}s&&(t.flags|=4)}else(n=(9===r.nodeType?r:r.ownerDocument).createTextNode(n))[nK]=t,t.stateNode=n}return aH(t),null;case 13:if(n1(ib),n=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(oP&&null!==ow&&0!=(1&t.mode)&&0==(128&t.flags))oC(),oL(),t.flags|=98560,s=!1;else if(s=oT(t),null!==n&&null!==n.dehydrated){if(null===e){if(!s)throw Error(f(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(f(317));s[nK]=t}else oL(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;aH(t),s=!1}else null!==oO&&(uF(oO),oO=null),s=!0;if(!s)return 65536&t.flags?t:null}if(0!=(128&t.flags))return t.lanes=r,t;return(n=null!==n)!=(null!==e&&null!==e.memoizedState)&&n&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&ib.current)?0===uh&&(uh=3):u$())),null!==t.updateQueue&&(t.flags|=4),aH(t),null;case 4:return iv(),i(e,t),null===e&&ng(t.stateNode.containerInfo),aH(t),null;case 10:return oK(t.type._context),aH(t),null;case 19:if(n1(ib),null===(s=t.memoizedState))return aH(t),null;if(n=0!=(128&t.flags),null===(c=s.rendering)){if(n)aQ(s,!1);else{if(0!==uh||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(c=ix(e))){for(t.flags|=128,aQ(s,!1),null!==(n=c.updateQueue)&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;null!==r;)s=r,e=n,s.flags&=14680066,null===(c=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return n2(ib,1&ib.current|2),t.child}e=e.sibling}null!==s.tail&&tr()>uS&&(t.flags|=128,n=!0,aQ(s,!1),t.lanes=4194304)}}else{if(!n){if(null!==(e=ix(c))){if(t.flags|=128,n=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),aQ(s,!0),null===s.tail&&"hidden"===s.tailMode&&!c.alternate&&!oP)return aH(t),null}else 2*tr()-s.renderingStartTime>uS&&1073741824!==r&&(t.flags|=128,n=!0,aQ(s,!1),t.lanes=4194304)}s.isBackwards?(c.sibling=t.child,t.child=c):(null!==(r=s.last)?r.sibling=c:t.child=c,s.last=c)}if(null!==s.tail)return t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=tr(),t.sibling=null,r=ib.current,n2(ib,n?1&r|2:1&r),t;return aH(t),null;case 22:case 23:return uW(),n=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==n&&(t.flags|=8192),n&&0!=(1&t.mode)?0!=(1073741824&up)&&(aH(t),6&t.subtreeFlags&&(t.flags|=8192)):aH(t),null;case 24:case 25:return null}throw Error(f(156,t.tag))}(r,t,up))){uc=r;return}}else{if(null!==(r=function(e,t){switch(o_(t),t.tag){case 1:return n7(t.type)&&n9(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return iv(),n1(n5),n1(n4),iS(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return ig(t),null;case 13:if(n1(ib),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(f(340));oL()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return n1(ib),null;case 4:return iv(),null;case 10:return oK(t.type._context),null;case 22:case 23:return uW(),null;default:return null}}(r,t))){r.flags&=32767,uc=r;return}if(null!==e)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{uh=6,uc=null;return}}if(null!==(t=t.sibling)){uc=t;return}uc=t=e}while(null!==t)0===uh&&(uh=5)}function uZ(e,t,r){var n=tw,o=uu.transition;try{uu.transition=null,tw=1,function(e,t,r,n){do u0();while(null!==uk)if(0!=(6&ul))throw Error(f(327));r=e.finishedWork;var o=e.finishedLanes;if(null!==r){if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(f(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(function(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-tf(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}(e,i),e===us&&(uc=us=null,uf=0),0==(2064&r.subtreeFlags)&&0==(2064&r.flags)||uj||(uj=!0,a=ta,u=function(){return u0(),null},e7(a,u)),i=0!=(15990&r.flags),0!=(15990&r.subtreeFlags)||i){i=uu.transition,uu.transition=null;var a,u,l,s,c,p=tw;tw=1;var d=ul;ul|=4,ua.current=null,function(e,t){if(nA=tU,r0(e=rZ())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var o,i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch(e){r=null;break e}var u=0,l=-1,s=-1,c=0,p=0,d=e,h=null;t:for(;;){for(;d!==r||0!==i&&3!==d.nodeType||(l=u+i),d!==a||0!==n&&3!==d.nodeType||(s=u+n),3===d.nodeType&&(u+=d.nodeValue.length),null!==(o=d.firstChild);)h=d,d=o;for(;;){if(d===e)break t;if(h===r&&++c===i&&(l=u),h===a&&++p===n&&(s=u),null!==(o=d.nextSibling))break;h=(d=h).parentNode}d=o}r=-1===l||-1===s?null:{start:l,end:s}}else r=null}r=r||{start:0,end:0}}else r=null;for(nT={focusedElem:e,selectionRange:r},tU=!1,aU=t;null!==aU;)if(e=(t=aU).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,aU=e;else for(;null!==aU;){t=aU;try{var y=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==y){var v=y.memoizedProps,m=y.memoizedState,g=t.stateNode,b=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:oR(t.type,v),m);g.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(f(163))}}catch(e){u2(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,aU=e;break}aU=t.return}y=aX,aX=!1}(e,r),a9(r,e),function(e){var t=rZ(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&function e(t,r){return!!t&&!!r&&(t===r||(!t||3!==t.nodeType)&&(r&&3===r.nodeType?e(t,r.parentNode):"contains"in t?t.contains(r):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(r))))}(r.ownerDocument.documentElement,r)){if(null!==n&&r0(r)){if(t=n.start,void 0===(e=n.end)&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if((e=(t=r.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=void 0===n.end?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=rJ(r,i);var a=rJ(r,n);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof r.focus&&r.focus(),r=0;r<t.length;r++)(e=t[r]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}(nT),tU=!!nA,nT=nA=null,e.current=r,l=r,s=e,c=o,aU=l,function e(t,r,n){for(var o=0!=(1&t.mode);null!==aU;){var i=aU,a=i.child;if(22===i.tag&&o){var u=null!==i.memoizedState||aW;if(!u){var l=i.alternate,s=null!==l&&null!==l.memoizedState||aB;l=aW;var c=aB;if(aW=u,(aB=s)&&!c)for(aU=i;null!==aU;)s=(u=aU).child,22===u.tag&&null!==u.memoizedState?un(i):null!==s?(s.return=u,aU=s):un(i);for(;null!==a;)aU=a,e(a,r,n),a=a.sibling;aU=i,aW=l,aB=c}ut(t,r,n)}else 0!=(8772&i.subtreeFlags)&&null!==a?(a.return=i,aU=a):ut(t,r,n)}}(l,s,c),tt(),ul=d,tw=p,uu.transition=i}else e.current=r;if(uj&&(uj=!1,uk=e,uM=o),0===(i=e.pendingLanes)&&(uE=null),function(e){if(tc&&"function"==typeof tc.onCommitFiberRoot)try{tc.onCommitFiberRoot(ts,e,void 0,128==(128&e.current.flags))}catch(e){}}(r.stateNode,n),uD(e,tr()),null!==t)for(n=e.onRecoverableError,r=0;r<t.length;r++)n((o=t[r]).value,{componentStack:o.stack,digest:o.digest});if(uP)throw uP=!1,e=uO,uO=null,e;0!=(1&uM)&&0!==e.tag&&u0(),0!=(1&(i=e.pendingLanes))?e===uT?uA++:(uA=0,uT=e):uA=0,ol()}}(e,t,r,n)}finally{uu.transition=o,tw=n}return null}function u0(){if(null!==uk){var e=tP(uM),t=uu.transition,r=tw;try{if(uu.transition=null,tw=16>e?16:e,null===uk)var n=!1;else{if(e=uk,uk=null,uM=0,0!=(6&ul))throw Error(f(331));var o=ul;for(ul|=4,aU=e.current;null!==aU;){var i=aU,a=i.child;if(0!=(16&aU.flags)){var u=i.deletions;if(null!==u){for(var l=0;l<u.length;l++){var s=u[l];for(aU=s;null!==aU;){var c=aU;switch(c.tag){case 0:case 11:case 15:aJ(8,c,i)}var p=c.child;if(null!==p)p.return=c,aU=p;else for(;null!==aU;){var d=(c=aU).sibling,h=c.return;if(function e(t){var r=t.alternate;null!==r&&(t.alternate=null,e(r)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(r=t.stateNode)&&(delete r[nK],delete r[nQ],delete r[nW],delete r[nB],delete r[nY]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(c),c===s){aU=null;break}if(null!==d){d.return=h,aU=d;break}aU=h}}}var y=i.alternate;if(null!==y){var v=y.child;if(null!==v){y.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(null!==v)}}aU=i}}if(0!=(2064&i.subtreeFlags)&&null!==a)a.return=i,aU=a;else for(;null!==aU;){if(i=aU,0!=(2048&i.flags))switch(i.tag){case 0:case 11:case 15:aJ(9,i,i.return)}var g=i.sibling;if(null!==g){g.return=i.return,aU=g;break}aU=i.return}}var b=e.current;for(aU=b;null!==aU;){var x=(a=aU).child;if(0!=(2064&a.subtreeFlags)&&null!==x)x.return=a,aU=x;else for(a=b;null!==aU;){if(u=aU,0!=(2048&u.flags))try{switch(u.tag){case 0:case 11:case 15:aZ(9,u)}}catch(e){u2(u,u.return,e)}if(u===a){aU=null;break}var _=u.sibling;if(null!==_){_.return=u.return,aU=_;break}aU=u.return}}if(ul=o,ol(),tc&&"function"==typeof tc.onPostCommitFiberRoot)try{tc.onPostCommitFiberRoot(ts,e)}catch(e){}n=!0}return n}finally{tw=r,uu.transition=t}}return!1}function u1(e,t,r){t=ay(e,t=af(r,t),1),e=o0(e,t,1),t=uN(),null!==e&&(t_(e,1,t),uD(e,t))}function u2(e,t,r){if(3===e.tag)u1(e,e,r);else for(;null!==t;){if(3===t.tag){u1(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof n.componentDidCatch&&(null===uE||!uE.has(n))){e=av(t,e=af(r,e),1),t=o0(t,e,1),e=uN(),null!==t&&(t_(t,1,e),uD(t,e));break}}t=t.return}}function u3(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=uN(),e.pingedLanes|=e.suspendedLanes&r,us===e&&(uf&r)===r&&(4===uh||3===uh&&(130023424&uf)===uf&&500>tr()-u_?uB(e,0):ug|=r),uD(e,t)}function u4(e,t){0===t&&(0==(1&e.mode)?t=1:(t=ty,0==(130023424&(ty<<=1))&&(ty=4194304)));var r=uN();null!==(e=o$(e,t))&&(t_(e,t,r),uD(e,r))}function u5(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),u4(e,r)}function u6(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;null!==o&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(f(314))}null!==n&&n.delete(t),u4(e,r)}function u8(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function u7(e,t,r,n){return new u8(e,t,r,n)}function u9(e){return!(!(e=e.prototype)||!e.isReactComponent)}function le(e,t){var r=e.alternate;return null===r?((r=u7(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=14680064&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function lt(e,t,r,n,o,i){var a=2;if(n=e,"function"==typeof e)u9(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case A:return lr(r.children,o,i,t);case T:a=8,o|=8;break;case C:return(e=u7(12,r,t,2|o)).elementType=C,e.lanes=i,e;case R:return(e=u7(13,r,t,o)).elementType=R,e.lanes=i,e;case D:return(e=u7(19,r,t,o)).elementType=D,e.lanes=i,e;case F:return ln(r,o,i,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case L:a=10;break e;case N:a=9;break e;case I:a=11;break e;case G:a=14;break e;case V:a=16,n=null;break e}throw Error(f(130,null==e?e:typeof e,""))}return(t=u7(a,r,t,o)).elementType=e,t.type=n,t.lanes=i,t}function lr(e,t,r,n){return(e=u7(7,e,n,t)).lanes=r,e}function ln(e,t,r,n){return(e=u7(22,e,n,t)).elementType=F,e.lanes=r,e.stateNode={isHidden:!1},e}function lo(e,t,r){return(e=u7(6,e,null,t)).lanes=r,e}function li(e,t,r){return(t=u7(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function la(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tx(0),this.expirationTimes=tx(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tx(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function lu(e,t,r,n,o,i,a,u,l){return e=new la(e,t,r,u,l),1===t?(t=1,!0===i&&(t|=8)):t=0,i=u7(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},oX(i),e}function ll(e){if(!e)return n3;e=e._reactInternals;e:{if(e4(e)!==e||1!==e.tag)throw Error(f(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(n7(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t)throw Error(f(171))}if(1===e.tag){var r=e.type;if(n7(r))return ot(e,r,t)}return t}function ls(e,t,r,n,o,i,a,u,l){return(e=lu(r,n,!0,e,o,i,a,u,l)).context=ll(null),r=e.current,(i=oZ(n=uN(),o=uI(r))).callback=null!=t?t:null,o0(r,i,o),e.current.lanes=o,t_(e,o,n),uD(e,n),e}function lc(e,t,r,n){var o=t.current,i=uN(),a=uI(o);return r=ll(r),null===t.context?t.context=r:t.pendingContext=r,(t=oZ(i,a)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),null!==(e=o0(o,t,a))&&(uR(e,o,a,i),o1(e,o,a)),a}function lf(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function lp(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function ld(e,t){lp(e,t),(e=e.alternate)&&lp(e,t)}l=function(e,t,r){if(null!==e){if(e.memoizedProps!==t.pendingProps||n5.current)a_=!0;else{if(0==(e.lanes&r)&&0==(128&t.flags))return a_=!1,function(e,t,r){switch(t.tag){case 3:aT(t),oL();break;case 5:im(t);break;case 1:n7(t.type)&&or(t);break;case 4:iy(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;n2(oD,n._currentValue),n._currentValue=o;break;case 13:if(null!==(n=t.memoizedState)){if(null!==n.dehydrated)return n2(ib,1&ib.current),t.flags|=128,null;if(0!=(r&t.child.childLanes))return aI(e,t,r);return n2(ib,1&ib.current),null!==(e=aK(e,t,r))?e.sibling:null}n2(ib,1&ib.current);break;case 19:if(n=0!=(r&t.childLanes),0!=(128&e.flags)){if(n)return aF(e,t,r);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),n2(ib,ib.current),!n)return null;break;case 22:case 23:return t.lanes=0,aE(e,t,r)}return aK(e,t,r)}(e,t,r);a_=0!=(131072&e.flags)}}else a_=!1,oP&&0!=(1048576&t.flags)&&ob(t,op,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;az(e,t),e=t.pendingProps;var o=n8(t,n4.current);oH(t,r),o=iI(null,t,n,e,o,r);var i=iR();return t.flags|=1,"object"==typeof o&&null!==o&&"function"==typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,n7(n)?(i=!0,or(t)):i=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,oX(t),o.updater=o8,t.stateNode=o,o._reactInternals=t,it(t,n,e,r),t=aA(null,t,n,!0,i,r)):(t.tag=0,oP&&i&&ox(t),aS(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(az(e,t),e=t.pendingProps,n=(o=n._init)(n._payload),t.type=n,o=t.tag=function(e){if("function"==typeof e)return u9(e)?1:0;if(null!=e){if((e=e.$$typeof)===I)return 11;if(e===G)return 14}return 2}(n),e=oR(n,e),o){case 0:t=ak(null,t,n,e,r);break e;case 1:t=aM(null,t,n,e,r);break e;case 11:t=aw(null,t,n,e,r);break e;case 14:t=aP(null,t,n,oR(n.type,e),r);break e}throw Error(f(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:oR(n,o),ak(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:oR(n,o),aM(e,t,n,o,r);case 3:e:{if(aT(t),null===e)throw Error(f(387));n=t.pendingProps,o=(i=t.memoizedState).element,oJ(e,t),o3(t,n,null,r);var a=t.memoizedState;if(n=a.element,i.isDehydrated){if(i={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){o=af(Error(f(423)),t),t=aC(e,t,n,r,o);break e}if(n!==o){o=af(Error(f(424)),t),t=aC(e,t,n,r,o);break e}for(ow=nV(t.stateNode.containerInfo.firstChild),oS=t,oP=!0,oO=null,r=il(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(oL(),n===o){t=aK(e,t,r);break e}aS(e,t,n,r)}t=t.child}return t;case 5:return im(t),null===e&&oM(t),n=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,a=o.children,nC(n,o)?a=null:null!==i&&nC(n,i)&&(t.flags|=32),aj(e,t),aS(e,t,a,r),t.child;case 6:return null===e&&oM(t),null;case 13:return aI(e,t,r);case 4:return iy(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=iu(t,null,n,r):aS(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:oR(n,o),aw(e,t,n,o,r);case 7:return aS(e,t,t.pendingProps,r),t.child;case 8:case 12:return aS(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,n2(oD,n._currentValue),n._currentValue=a,null!==i){if(r$(i.value,a)){if(i.children===o.children&&!n5.current){t=aK(e,t,r);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var u=i.dependencies;if(null!==u){a=i.child;for(var l=u.firstContext;null!==l;){if(l.context===n){if(1===i.tag){(l=oZ(-1,r&-r)).tag=2;var s=i.updateQueue;if(null!==s){var c=(s=s.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),s.pending=l}}i.lanes|=r,null!==(l=i.alternate)&&(l.lanes|=r),oQ(i.return,r,t),u.lanes|=r;break}l=l.next}}else if(10===i.tag)a=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(a=i.return))throw Error(f(341));a.lanes|=r,null!==(u=a.alternate)&&(u.lanes|=r),oQ(a,r,t),a=i.sibling}else a=i.child;if(null!==a)a.return=i;else for(a=i;null!==a;){if(a===t){a=null;break}if(null!==(i=a.sibling)){i.return=a.return,a=i;break}a=a.return}i=a}}aS(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,oH(t,r),n=n(o=oW(o)),t.flags|=1,aS(e,t,n,r),t.child;case 14:return o=oR(n=t.type,t.pendingProps),o=oR(n.type,o),aP(e,t,n,o,r);case 15:return aO(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:oR(n,o),az(e,t),t.tag=1,n7(n)?(e=!0,or(t)):e=!1,oH(t,r),o9(t,n,o),it(t,n,o,r),aA(null,t,n,!0,e,r);case 19:return aF(e,t,r);case 22:return aE(e,t,r)}throw Error(f(156,t.tag))};var lh="function"==typeof reportError?reportError:function(e){console.error(e)};function ly(e){this._internalRoot=e}function lv(e){this._internalRoot=e}function lm(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function lg(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function lb(){}function lx(e,t,r,n,o){var i=r._reactRootContainer;if(i){var a=i;if("function"==typeof o){var u=o;o=function(){var e=lf(a);u.call(e)}}lc(t,a,e,o)}else a=function(e,t,r,n,o){if(o){if("function"==typeof n){var i=n;n=function(){var e=lf(a);i.call(e)}}var a=ls(t,n,e,0,null,!1,!1,"",lb);return e._reactRootContainer=a,e[nH]=a.current,ng(8===e.nodeType?e.parentNode:e),uH(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"==typeof n){var u=n;n=function(){var e=lf(l);u.call(e)}}var l=lu(e,0,!1,null,null,!1,!1,"",lb);return e._reactRootContainer=l,e[nH]=l.current,ng(8===e.nodeType?e.parentNode:e),uH(function(){lc(t,l,r,n)}),l}(r,t,e,o,n);return lf(a)}lv.prototype.render=ly.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(f(409));lc(e,t,null,null)},lv.prototype.unmount=ly.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uH(function(){lc(null,e,null,null)}),t[nH]=null}},lv.prototype.unstable_scheduleHydration=function(e){if(e){var t=tk();e={blockedOn:null,target:e,priority:t};for(var r=0;r<tD.length&&0!==t&&t<tD[r].priority;r++);tD.splice(r,0,e),0===r&&tz(e)}},tO=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=tv(t.pendingLanes);0!==r&&(tS(t,1|r),uD(t,tr()),0==(6&ul)&&(uS=tr()+500,ol()))}break;case 13:uH(function(){var t=o$(e,1);null!==t&&uR(t,e,1,uN())}),ld(e,1)}},tE=function(e){if(13===e.tag){var t=o$(e,134217728);null!==t&&uR(t,e,134217728,uN()),ld(e,134217728)}},tj=function(e){if(13===e.tag){var t=uI(e),r=o$(e,t);null!==r&&uR(r,e,t,uN()),ld(e,t)}},tk=function(){return tw},tM=function(e,t){var r=tw;try{return tw=e,t()}finally{tw=r}},eG=function(e,t,r){switch(t){case"input":if(eh(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=nX(n);if(!o)throw Error(f(90));es(n),eh(n,o)}}}break;case"textarea":e_(e,r);break;case"select":null!=(t=r.value)&&eg(e,!!r.multiple,t,!1)}},eH=uQ,eW=uH;var l_={findFiberByHostInstance:nU,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lS={bundleType:l_.bundleType,version:l_.version,rendererPackageName:l_.rendererPackageName,rendererConfig:l_.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:j.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=e8(e))?null:e.stateNode},findFiberByHostInstance:l_.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var lw=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lw.isDisabled&&lw.supportsFiber)try{ts=lw.inject(lS),tc=lw}catch(e){}}Q={usingClientEntryPoint:!1,Events:[n$,nq,nX,eK,eQ,uQ]},H=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!lm(t))throw Error(f(200));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:M,key:null==n?null:""+n,children:e,containerInfo:t,implementation:null}}(e,t,null,r)},W=function(e,t){if(!lm(e))throw Error(f(299));var r=!1,n="",o=lh;return null!=t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=lu(e,1,!1,null,null,r,!1,n,o),e[nH]=t.current,ng(8===e.nodeType?e.parentNode:e),new ly(t)},B=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(f(188));throw Error(f(268,e=Object.keys(e).join(",")))}return e=null===(e=e8(t))?null:e.stateNode},Y=function(e){return uH(e)},U=function(e,t,r){if(!lg(t))throw Error(f(200));return lx(null,e,t,!0,r)},$=function(e,t,r){if(!lm(e))throw Error(f(405));var n=null!=r&&r.hydratedSources||null,o=!1,i="",a=lh;if(null!=r&&(!0===r.unstable_strictMode&&(o=!0),void 0!==r.identifierPrefix&&(i=r.identifierPrefix),void 0!==r.onRecoverableError&&(a=r.onRecoverableError)),t=ls(t,null,e,1,null!=r?r:null,o,!1,i,a),e[nH]=t.current,ng(e),n)for(e=0;e<n.length;e++)o=(o=(r=n[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new lv(t)},q=function(e,t,r){if(!lg(t))throw Error(f(200));return lx(null,e,t,!1,r)},X=function(e){if(!lg(e))throw Error(f(40));return!!e._reactRootContainer&&(uH(function(){lx(null,null,e,!1,function(){e._reactRootContainer=null,e[nH]=null})}),!0)},J=uQ,Z=function(e,t,r,n){if(!lg(r))throw Error(f(200));if(null==e||void 0===e._reactInternals)throw Error(f(38));return lx(e,t,r,!1,n)},ee="18.2.0-next-9e3b772b8-20220608"}),_.register("fO90s",function(e,t){e.exports=_("gcnCG")}),_.register("gcnCG",function(t,r){function n(e,t){var r=e.length;for(e.push(t);0<r;){var n=r-1>>>1,o=e[n];if(0<a(o,t))e[n]=t,e[r]=o,r=n;else break}}function o(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;for(var n=0,o=e.length,i=o>>>1;n<i;){var u=2*(n+1)-1,l=e[u],s=u+1,c=e[s];if(0>a(l,r))s<o&&0>a(c,l)?(e[n]=c,e[s]=r,n=s):(e[n]=l,e[u]=r,n=u);else if(s<o&&0>a(c,r))e[n]=c,e[s]=r,n=s;else break}}return t}function a(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if(e(t.exports,"unstable_now",()=>u,e=>u=e),e(t.exports,"unstable_IdlePriority",()=>l,e=>l=e),e(t.exports,"unstable_ImmediatePriority",()=>s,e=>s=e),e(t.exports,"unstable_LowPriority",()=>c,e=>c=e),e(t.exports,"unstable_NormalPriority",()=>f,e=>f=e),e(t.exports,"unstable_Profiling",()=>p,e=>p=e),e(t.exports,"unstable_UserBlockingPriority",()=>d,e=>d=e),e(t.exports,"unstable_cancelCallback",()=>h,e=>h=e),e(t.exports,"unstable_continueExecution",()=>y,e=>y=e),e(t.exports,"unstable_forceFrameRate",()=>v,e=>v=e),e(t.exports,"unstable_getCurrentPriorityLevel",()=>m,e=>m=e),e(t.exports,"unstable_getFirstCallbackNode",()=>g,e=>g=e),e(t.exports,"unstable_next",()=>b,e=>b=e),e(t.exports,"unstable_pauseExecution",()=>x,e=>x=e),e(t.exports,"unstable_requestPaint",()=>_,e=>_=e),e(t.exports,"unstable_runWithPriority",()=>S,e=>S=e),e(t.exports,"unstable_scheduleCallback",()=>w,e=>w=e),e(t.exports,"unstable_shouldYield",()=>P,e=>P=e),e(t.exports,"unstable_wrapCallback",()=>O,e=>O=e),"object"==typeof performance&&"function"==typeof performance.now){var u,l,s,c,f,p,d,h,y,v,m,g,b,x,_,S,w,P,O,E,j=performance;u=function(){return j.now()}}else{var k=Date,M=k.now();u=function(){return k.now()-M}}var A=[],T=[],C=1,L=null,N=3,I=!1,R=!1,D=!1,G="function"==typeof setTimeout?setTimeout:null,V="function"==typeof clearTimeout?clearTimeout:null,F="undefined"!=typeof setImmediate?setImmediate:null;function z(e){for(var t=o(T);null!==t;){if(null===t.callback)i(T);else if(t.startTime<=e)i(T),t.sortIndex=t.expirationTime,n(A,t);else break;t=o(T)}}function K(e){if(D=!1,z(e),!R){if(null!==o(A))R=!0,Z(Q);else{var t=o(T);null!==t&&ee(K,t.startTime-e)}}}function Q(e,t){R=!1,D&&(D=!1,V(B),B=-1),I=!0;var r=N;try{for(z(t),L=o(A);null!==L&&(!(L.expirationTime>t)||e&&!$());){var n=L.callback;if("function"==typeof n){L.callback=null,N=L.priorityLevel;var a=n(L.expirationTime<=t);t=u(),"function"==typeof a?L.callback=a:L===o(A)&&i(A),z(t)}else i(A);L=o(A)}if(null!==L)var l=!0;else{var s=o(T);null!==s&&ee(K,s.startTime-t),l=!1}return l}finally{L=null,N=r,I=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var H=!1,W=null,B=-1,Y=5,U=-1;function $(){return!(u()-U<Y)}function q(){if(null!==W){var e=u();U=e;var t=!0;try{t=W(!0,e)}finally{t?E():(H=!1,W=null)}}else H=!1}if("function"==typeof F)E=function(){F(q)};else if("undefined"!=typeof MessageChannel){var X=new MessageChannel,J=X.port2;X.port1.onmessage=q,E=function(){J.postMessage(null)}}else E=function(){G(q,0)};function Z(e){W=e,H||(H=!0,E())}function ee(e,t){B=G(function(){e(u())},t)}l=5,s=1,c=4,f=3,p=null,d=2,h=function(e){e.callback=null},y=function(){R||I||(R=!0,Z(Q))},v=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<e?Math.floor(1e3/e):5},m=function(){return N},g=function(){return o(A)},b=function(e){switch(N){case 1:case 2:case 3:var t=3;break;default:t=N}var r=N;N=t;try{return e()}finally{N=r}},x=function(){},_=function(){},S=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=N;N=e;try{return t()}finally{N=r}},w=function(e,t,r){var i=u();switch(r="object"==typeof r&&null!==r&&"number"==typeof(r=r.delay)&&0<r?i+r:i,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=r+a,e={id:C++,callback:t,priorityLevel:e,startTime:r,expirationTime:a,sortIndex:-1},r>i?(e.sortIndex=r,n(T,e),null===o(A)&&e===o(T)&&(D?(V(B),B=-1):D=!0,ee(K,r-i))):(e.sortIndex=a,n(A,e),R||I||(R=!0,Z(Q))),e},P=$,O=function(e){var t=N;return function(){var r=N;N=t;try{return e.apply(this,arguments)}finally{N=r}}}}),_.register("6ozm5",function(e,t){var r=_("bMGeU"),n=_("8ZVpk");e.exports=function(){function e(){}return(// returns a promise if callback is undefined
e.read=function(t,o){if(a=this,i=function(t,r,n){return e._onRetrieval(t,n,o,a)},void 0!==o)return r(t,i);var i,a,u=n.defer();return o=function(e,t){e?u.reject(e):u.resolve(t)},r(t,i),u.promise()},e._onRetrieval=function(e,t,r,n){var o;return void 0!==e&&(o=n.parse(t)),r.call(n,e,o)},// provide a convenient shortcut to inherit
e.extend=function(t,r){return extend(e,t,r)},// Mixin utility
e.mixin=function(t){return"object"!=typeof t&&(t=t.prototype),["read"].forEach(function(r){t[r]=e[r]},this),t},e)}()}),_.register("bMGeU",function(e,t){var r=_("eDick"),n=_("3KI1D"),o=_("cDhPG"),i=_("h0kNM");function a(e,t,r){var o=e;return n(t)?(r=t,"string"==typeof e&&(o={uri:e})):o=i(t,{uri:e}),o.callback=r,o}function u(e,t,r){return l(t=a(e,t,r))}function l(e){if(void 0===e.callback)throw Error("callback argument missing");var t,r,n,i=!1,a=function(t,r,n){i||(i=!0,e.callback(t,r,n))};function l(e){return clearTimeout(n),e instanceof Error||(e=Error(""+(e||"Unknown XMLHttpRequest Error"))),e.statusCode=0,a(e,m)}// will load the data & process the response in a special response object
function s(){if(!r){clearTimeout(n);var t,i=m,u=null;return 0!==(t=e.useXDR&&void 0===c.status?200:1223===c.status?204:c.status)?(i={body:function(){// Chrome with requestType=blob throws errors arround when even testing access to responseText
var e=void 0;if(e=c.response?c.response:c.responseText||function(e){// xhr.responseXML will throw Exception "InvalidStateError" or "DOMException"
// See https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseXML.
try{if("document"===e.responseType)return e.responseXML;var t=e.responseXML&&"parsererror"===e.responseXML.documentElement.nodeName;if(""===e.responseType&&!t)return e.responseXML}catch(e){}return null}(c),v)try{e=JSON.parse(e)}catch(e){}return e}(),statusCode:t,method:p,headers:{},url:f,rawRequest:c},c.getAllResponseHeaders&&(i.headers=o(c.getAllResponseHeaders()))):u=Error("Internal XMLHttpRequest Error"),a(u,i,i.body)}}var c=e.xhr||null;c||(c=e.cors||e.useXDR?new u.XDomainRequest:new u.XMLHttpRequest);var f=c.url=e.uri||e.url,p=c.method=e.method||"GET",d=e.body||e.data,h=c.headers=e.headers||{},y=!!e.sync,v=!1,m={body:void 0,headers:{},statusCode:0,method:p,url:f,rawRequest:c};if("json"in e&&!1!==e.json&&(v=!0,h.accept||h.Accept||(h.Accept="application/json"//Don't override existing accept header declared by user
),"GET"!==p&&"HEAD"!==p&&(h["content-type"]||h["Content-Type"]||(h["Content-Type"]="application/json"//Don't override existing accept header declared by user
),d=JSON.stringify(!0===e.json?d:e.json))),c.onreadystatechange=function(){4===c.readyState&&setTimeout(s,0)},c.onload=s,c.onerror=l,// IE9 must have onprogress be set to a unique function.
c.onprogress=function(){// IE must die
},c.onabort=function(){r=!0},c.ontimeout=l,c.open(p,f,!y,e.username,e.password),y||(c.withCredentials=!!e.withCredentials),!y&&e.timeout>0&&(n=setTimeout(function(){if(!r){r=!0//IE9 may still call readystatechange
,c.abort("timeout");var e=Error("XMLHttpRequest timeout");e.code="ETIMEDOUT",l(e)}},e.timeout)),c.setRequestHeader)for(t in h)h.hasOwnProperty(t)&&c.setRequestHeader(t,h[t]);else if(e.headers&&!function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}(e.headers))throw Error("Headers cannot be set on an XDomainRequest object");return"responseType"in e&&(c.responseType=e.responseType),"beforeSend"in e&&"function"==typeof e.beforeSend&&e.beforeSend(c),// Microsoft Edge browser sends "undefined" when send is called with undefined value.
// XMLHttpRequest spec says to pass null as body to indicate no body
// See https://github.com/naugtur/xhr/issues/100.
c.send(d||null),c}e.exports=u,// Allow use of default import syntax in TypeScript
e.exports.default=u,u.XMLHttpRequest=r.XMLHttpRequest||function(){},u.XDomainRequest="withCredentials"in new u.XMLHttpRequest?u.XMLHttpRequest:r.XDomainRequest,function(e,t){for(var r=0;r<e.length;r++)t(e[r])}(["get","put","post","patch","head","delete"],function(e){u["delete"===e?"del":e]=function(t,r,n){return(r=a(t,r,n)).method=e.toUpperCase(),l(r)}})}),_.register("eDick",function(e,t){var r;r="undefined"!=typeof window?window:void 0!==m?m:"undefined"!=typeof self?self:{},e.exports=r}),_.register("3KI1D",function(e,t){e.exports=function(e){if(!e)return!1;var t=r.call(e);return"[object Function]"===t||"function"==typeof e&&"[object RegExp]"!==t||"undefined"!=typeof window&&// IE8 and below
(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)};var r=Object.prototype.toString}),_.register("cDhPG",function(e,t){var r=function(e){return e.replace(/^\s+|\s+$/g,"")};e.exports=function(e){if(!e)return{};for(var t={},n=r(e).split("\n"),o=0;o<n.length;o++){var i,a=n[o],u=a.indexOf(":"),l=r(a.slice(0,u)).toLowerCase(),s=r(a.slice(u+1));void 0===t[l]?t[l]=s:(i=t[l],"[object Array]"===Object.prototype.toString.call(i))?t[l].push(s):t[l]=[t[l],s]}return t}}),_.register("h0kNM",function(e,t){e.exports=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)r.call(n,o)&&(e[o]=n[o])}return e};var r=Object.prototype.hasOwnProperty}),_.register("8ZVpk",function(e,t){var r=_("hPtJY");!/**
 * @module vow
 * @author Filatov Dmitry <dfilatov@yandex-team.ru>
 * @version 0.4.20
 * @license
 * Dual licensed under the MIT and GPL licenses:
 *   * http://www.opensource.org/licenses/mit-license.php
 *   * http://www.gnu.org/licenses/gpl.html
 */function(t){var n,o,i=function(){var e=[],n=function(t){return e.push(t),1===e.length},o=function(){var t=e,r=0,n=e.length;for(e=[];r<n;)t[r++]()},i=t.MutationObserver||t.WebKitMutationObserver;if(i){var a=1,u=document.createTextNode("");return new i(o).observe(u,{characterData:!0}),function(e){n(e)&&(u.data=a*=-1)}}if("object"==typeof r&&r.nextTick)return function(e){n(e)&&r.nextTick(o)};if("function"==typeof setImmediate)return function(e){n(e)&&setImmediate(o)};if(t.postMessage){var l=!0;if(t.attachEvent){var s=function(){l=!1};t.attachEvent("onmessage",s),t.postMessage("__checkAsync","*"),t.detachEvent("onmessage",s)}if(l){var c="__promise"+Math.random()+"_"+new Date,f=function(e){e.data===c&&(e.stopPropagation&&e.stopPropagation(),o())};return t.addEventListener?t.addEventListener("message",f,!0):t.attachEvent("onmessage",f),function(e){n(e)&&t.postMessage(c,"*")}}}var p=t.document;if("onreadystatechange"in p.createElement("script")){var d=function(){var e=p.createElement("script");e.onreadystatechange=function(){e.parentNode.removeChild(e),e=e.onreadystatechange=null,o()},(p.documentElement||p.body).appendChild(e)};return function(e){n(e)&&d()}}return function(e){n(e)&&setTimeout(o,0)}}(),a=function(e){i(function(){throw e})},u=function(e){return"function"==typeof e},l=function(e){return null!==e&&"object"==typeof e},s=Object.prototype.toString,c=Array.isArray||function(e){return"[object Array]"===s.call(e)},f=function(e){for(var t=[],r=0,n=e.length;r<n;)t.push(r++);return t},p=Object.keys||function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(r);return t},d=function(e,t){return function(r){e.call(this,r,t)}},h=t.PromiseRejectionEvent?function(e,r){new t.PromiseRejectionEvent("unhandledrejection",{promise:r,reason:e})}:"object"==typeof r&&r.emit?function(e,t){r.emit("unhandledRejection",e,t)}:function(){},y=function(){this._promise=new m};y.prototype=/** @lends Deferred.prototype */{/**
     * Returns the corresponding promise.
     *
     * @returns {vow:Promise}
     */promise:function(){return this._promise},/**
     * Resolves the corresponding promise with the given `value`.
     *
     * @param {*} value
     *
     * @example
     * ```js
     * var defer = vow.defer(),
     *     promise = defer.promise();
     *
     * promise.then(function(value) {
     *     // value is "'success'" here
     * });
     *
     * defer.resolve('success');
     * ```
     */resolve:function(e){this._promise.isResolved()||this._promise._resolve(e)},/**
     * Rejects the corresponding promise with the given `reason`.
     *
     * @param {*} reason
     *
     * @example
     * ```js
     * var defer = vow.defer(),
     *     promise = defer.promise();
     *
     * promise.fail(function(reason) {
     *     // reason is "'something is wrong'" here
     * });
     *
     * defer.reject('something is wrong');
     * ```
     */reject:function(e){this._promise.isResolved()||(x.isPromise(e)?(e=e.then(function(e){var t=x.defer();return t.reject(e),t.promise()}),this._promise._resolve(e)):this._promise._reject(e))},/**
     * Notifies the corresponding promise with the given `value`.
     *
     * @param {*} value
     *
     * @example
     * ```js
     * var defer = vow.defer(),
     *     promise = defer.promise();
     *
     * promise.progress(function(value) {
     *     // value is "'20%'", "'40%'" here
     * });
     *
     * defer.notify('20%');
     * defer.notify('40%');
     * ```
     */notify:function(e){this._promise.isResolved()||this._promise._notify(e)}};var v={PENDING:0,RESOLVED:1,FULFILLED:2,REJECTED:3},m=function(e){if(this._value=o,this._status=v.PENDING,this._shouldEmitUnhandledRejection=!0,this._fulfilledCallbacks=[],this._rejectedCallbacks=[],this._progressCallbacks=[],e){var t=this,r=e.length;try{e(function(e){t.isResolved()||t._resolve(e)},r>1?function(e){t.isResolved()||t._reject(e)}:o,r>2?function(e){t.isResolved()||t._notify(e)}:o)}catch(e){this._reject(e)}}};m.prototype=/** @lends Promise.prototype */{/**
     * Returns the value of the fulfilled promise or the reason in case of rejection.
     *
     * @returns {*}
     */valueOf:function(){return this._value},/**
     * Returns `true` if the promise is resolved.
     *
     * @returns {Boolean}
     */isResolved:function(){return this._status!==v.PENDING},/**
     * Returns `true` if the promise is fulfilled.
     *
     * @returns {Boolean}
     */isFulfilled:function(){return this._status===v.FULFILLED},/**
     * Returns `true` if the promise is rejected.
     *
     * @returns {Boolean}
     */isRejected:function(){return this._status===v.REJECTED},/**
     * Adds reactions to the promise.
     *
     * @param {Function} [onFulfilled] Callback that will be invoked with a provided value after the promise has been fulfilled
     * @param {Function} [onRejected] Callback that will be invoked with a provided reason after the promise has been rejected
     * @param {Function} [onProgress] Callback that will be invoked with a provided value after the promise has been notified
     * @param {Object} [ctx] Context of the callbacks execution
     * @returns {vow:Promise} A new promise, see https://github.com/promises-aplus/promises-spec for details
     */then:function(e,t,r,n){this._shouldEmitUnhandledRejection=!1;var o=new y;return this._addCallbacks(o,e,t,r,n),o.promise()},/**
     * Adds only a rejection reaction. This method is a shorthand for `promise.then(undefined, onRejected)`.
     *
     * @param {Function} onRejected Callback that will be called with a provided 'reason' as argument after the promise has been rejected
     * @param {Object} [ctx] Context of the callback execution
     * @returns {vow:Promise}
     */catch:function(e,t){return this.then(o,e,t)},/**
     * Adds only a rejection reaction. This method is a shorthand for `promise.then(null, onRejected)`. It's also an alias for `catch`.
     *
     * @param {Function} onRejected Callback to be called with the value after promise has been rejected
     * @param {Object} [ctx] Context of the callback execution
     * @returns {vow:Promise}
     */fail:function(e,t){return this.then(o,e,t)},/**
     * Adds a resolving reaction (for both fulfillment and rejection).
     *
     * @param {Function} onResolved Callback that will be invoked with the promise as an argument, after the promise has been resolved.
     * @param {Object} [ctx] Context of the callback execution
     * @returns {vow:Promise}
     */always:function(e,t){var r=this,n=function(){return e.call(this,r)};return this.then(n,n,t)},/**
     * Adds a resolving reaction (for both fulfillment and rejection). The returned promise will be fullfiled with the same value or rejected with the same reason as the original promise.
     *
     * @param {Function} onFinalized Callback that will be invoked after the promise has been resolved.
     * @param {Object} [ctx] Context of the callback execution
     * @returns {vow:Promise}
     */finally:function(e,t){var r=this,n=function(){return e.call(this)};return this.then(n,n,t).then(function(){return r})},/**
     * Adds a progress reaction.
     *
     * @param {Function} onProgress Callback that will be called with a provided value when the promise has been notified
     * @param {Object} [ctx] Context of the callback execution
     * @returns {vow:Promise}
     */progress:function(e,t){return this.then(o,o,e,t)},/**
     * Like `promise.then`, but "spreads" the array into a variadic value handler.
     * It is useful with the `vow.all` and the `vow.allResolved` methods.
     *
     * @param {Function} [onFulfilled] Callback that will be invoked with a provided value after the promise has been fulfilled
     * @param {Function} [onRejected] Callback that will be invoked with a provided reason after the promise has been rejected
     * @param {Object} [ctx] Context of the callbacks execution
     * @returns {vow:Promise}
     *
     * @example
     * ```js
     * var defer1 = vow.defer(),
     *     defer2 = vow.defer();
     *
     * vow.all([defer1.promise(), defer2.promise()]).spread(function(arg1, arg2) {
     *     // arg1 is "1", arg2 is "'two'" here
     * });
     *
     * defer1.resolve(1);
     * defer2.resolve('two');
     * ```
     */spread:function(e,t,r){return this.then(function(t){return e.apply(this,t)},t,r)},/**
     * Like `then`, but terminates a chain of promises.
     * If the promise has been rejected, this method throws it's "reason" as an exception in a future turn of the event loop.
     *
     * @param {Function} [onFulfilled] Callback that will be invoked with a provided value after the promise has been fulfilled
     * @param {Function} [onRejected] Callback that will be invoked with a provided reason after the promise has been rejected
     * @param {Function} [onProgress] Callback that will be invoked with a provided value after the promise has been notified
     * @param {Object} [ctx] Context of the callbacks execution
     *
     * @example
     * ```js
     * var defer = vow.defer();
     * defer.reject(Error('Internal error'));
     * defer.promise().done(); // exception to be thrown
     * ```
     */done:function(e,t,r,n){this.then(e,t,r,n).fail(a)},/**
     * Returns a new promise that will be fulfilled in `delay` milliseconds if the promise is fulfilled,
     * or immediately rejected if the promise is rejected.
     *
     * @param {Number} delay
     * @returns {vow:Promise}
     */delay:function(e){var t,r=this.then(function(r){var n=new y;return t=setTimeout(function(){n.resolve(r)},e),n.promise()});return r.always(function(){clearTimeout(t)}),r},/**
     * Returns a new promise that will be rejected in `timeout` milliseconds
     * if the promise is not resolved beforehand.
     *
     * @param {Number} timeout
     * @returns {vow:Promise}
     *
     * @example
     * ```js
     * var defer = vow.defer(),
     *     promiseWithTimeout1 = defer.promise().timeout(50),
     *     promiseWithTimeout2 = defer.promise().timeout(200);
     *
     * setTimeout(
     *     function() {
     *         defer.resolve('ok');
     *     },
     *     100);
     *
     * promiseWithTimeout1.fail(function(reason) {
     *     // promiseWithTimeout to be rejected in 50ms
     * });
     *
     * promiseWithTimeout2.then(function(value) {
     *     // promiseWithTimeout to be fulfilled with "'ok'" value
     * });
     * ```
     */timeout:function(e){var t=new y,r=setTimeout(function(){t.reject(new x.TimedOutError("timed out"))},e);return this.then(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise().always(function(){clearTimeout(r)}),t.promise()},_vow:!0,_resolve:function(e){if(!(this._status>v.RESOLVED)){if(e===this){this._reject(TypeError("Can't resolve promise with itself"));return}if(this._status=v.RESOLVED,e&&e._vow){e.isFulfilled()?this._fulfill(e.valueOf()):e.isRejected()?(e._shouldEmitUnhandledRejection=!1,this._reject(e.valueOf())):e.then(this._fulfill,this._reject,this._notify,this);return}if(l(e)||u(e)){var t;try{t=e.then}catch(e){this._reject(e);return}if(u(t)){var r=this,n=!1;try{t.call(e,function(e){n||(n=!0,r._resolve(e))},function(e){n||(n=!0,r._reject(e))},function(e){r._notify(e)})}catch(e){n||this._reject(e)}return}}this._fulfill(e)}},_fulfill:function(e){this._status>v.RESOLVED||(this._status=v.FULFILLED,this._value=e,this._callCallbacks(this._fulfilledCallbacks,e),this._fulfilledCallbacks=this._rejectedCallbacks=this._progressCallbacks=o)},_reject:function(e){if(!(this._status>v.RESOLVED)){if(this._status=v.REJECTED,this._value=e,this._callCallbacks(this._rejectedCallbacks,e),!this._rejectedCallbacks.length){var t=this;i(function(){t._shouldEmitUnhandledRejection&&h(e,t)})}this._fulfilledCallbacks=this._rejectedCallbacks=this._progressCallbacks=o}},_notify:function(e){this._callCallbacks(this._progressCallbacks,e)},_addCallbacks:function(e,t,r,n,i){var a;r&&!u(r)?(i=r,r=o):n&&!u(n)&&(i=n,n=o),r&&(this._shouldEmitUnhandledRejection=!1),this.isRejected()||(a={defer:e,fn:u(t)?t:o,ctx:i},this.isFulfilled()?this._callCallbacks([a],this._value):this._fulfilledCallbacks.push(a)),this.isFulfilled()||(a={defer:e,fn:r,ctx:i},this.isRejected()?this._callCallbacks([a],this._value):this._rejectedCallbacks.push(a)),this._status<=v.RESOLVED&&this._progressCallbacks.push({defer:e,fn:n,ctx:i})},_callCallbacks:function(e,t){var r=e.length;if(r){this.isResolved();var n=this.isFulfilled(),o=this.isRejected();i(function(){for(var i,a,u,l=0;l<r;)if(a=(i=e[l++]).defer,u=i.fn){var s,c=i.ctx;try{s=c?u.call(c,t):u(t)}catch(e){a.reject(e);continue}n||o?a.resolve(s):a.notify(s)}else n?a.resolve(t):o?a.reject(t):a.notify(t)})}}};/** @lends Promise */var g={/**
     * Coerces the given `value` to a promise, or returns the `value` if it's already a promise.
     *
     * @param {*} value
     * @returns {vow:Promise}
     */cast:function(e){return x.cast(e)},/**
     * Returns a promise, that will be fulfilled only after all the items in `iterable` are fulfilled.
     * If any of the `iterable` items gets rejected, then the returned promise will be rejected.
     *
     * @param {Array|Object} iterable
     * @returns {vow:Promise}
     */all:function(e){return x.all(e)},/**
     * Returns a promise, that will be fulfilled only after all the items in `iterable` are fulfilled or rejected.
     *
     * @param {Array|Object} iterable
     * @returns {vow:Promise}
     */allSettled:function(e){return x.allSettled(e)},/**
     * Returns a promise, that will be fulfilled only when any of the items in `iterable` are fulfilled.
     * If any of the `iterable` items gets rejected, then the returned promise will be rejected.
     *
     * @param {Array} iterable
     * @returns {vow:Promise}
     */race:function(e){return x.anyResolved(e)},/**
     * Returns a promise that has already been resolved with the given `value`.
     * If `value` is a promise, the returned promise will have `value`'s state.
     *
     * @param {*} value
     * @returns {vow:Promise}
     */resolve:function(e){return x.resolve(e)},/**
     * Returns a promise that has already been rejected with the given `reason`.
     *
     * @param {*} reason
     * @returns {vow:Promise}
     */reject:function(e){return x.reject(e)}};for(var b in g)g.hasOwnProperty(b)&&(m[b]=g[b]);var x=/** @exports vow */{Deferred:y,Promise:m,/**
     * Creates a new deferred. This method is a factory method for `vow:Deferred` class.
     * It's equivalent to `new vow.Deferred()`.
     *
     * @returns {vow:Deferred}
     */defer:function(){return new y},/**
     * Static equivalent to `promise.then`.
     * If `value` is not a promise, then `value` is treated as a fulfilled promise.
     *
     * @param {*} value
     * @param {Function} [onFulfilled] Callback that will be invoked with a provided value after the promise has been fulfilled
     * @param {Function} [onRejected] Callback that will be invoked with a provided reason after the promise has been rejected
     * @param {Function} [onProgress] Callback that will be invoked with a provided value after the promise has been notified
     * @param {Object} [ctx] Context of the callbacks execution
     * @returns {vow:Promise}
     */when:function(e,t,r,n,o){return x.cast(e).then(t,r,n,o)},/**
     * Static equivalent to `promise.fail`.
     * If `value` is not a promise, then `value` is treated as a fulfilled promise.
     *
     * @param {*} value
     * @param {Function} onRejected Callback that will be invoked with a provided reason after the promise has been rejected
     * @param {Object} [ctx] Context of the callback execution
     * @returns {vow:Promise}
     */fail:function(e,t,r){return x.when(e,o,t,r)},/**
     * Static equivalent to `promise.always`.
     * If `value` is not a promise, then `value` is treated as a fulfilled promise.
     *
     * @param {*} value
     * @param {Function} onResolved Callback that will be invoked with the promise as an argument, after the promise has been resolved.
     * @param {Object} [ctx] Context of the callback execution
     * @returns {vow:Promise}
     */always:function(e,t,r){return x.when(e).always(t,r)},/**
     * Static equivalent to `promise.progress`.
     * If `value` is not a promise, then `value` is treated as a fulfilled promise.
     *
     * @param {*} value
     * @param {Function} onProgress Callback that will be invoked with a provided value after the promise has been notified
     * @param {Object} [ctx] Context of the callback execution
     * @returns {vow:Promise}
     */progress:function(e,t,r){return x.when(e).progress(t,r)},/**
     * Static equivalent to `promise.spread`.
     * If `value` is not a promise, then `value` is treated as a fulfilled promise.
     *
     * @param {*} value
     * @param {Function} [onFulfilled] Callback that will be invoked with a provided value after the promise has been fulfilled
     * @param {Function} [onRejected] Callback that will be invoked with a provided reason after the promise has been rejected
     * @param {Object} [ctx] Context of the callbacks execution
     * @returns {vow:Promise}
     */spread:function(e,t,r,n){return x.when(e).spread(t,r,n)},/**
     * Static equivalent to `promise.done`.
     * If `value` is not a promise, then `value` is treated as a fulfilled promise.
     *
     * @param {*} value
     * @param {Function} [onFulfilled] Callback that will be invoked with a provided value after the promise has been fulfilled
     * @param {Function} [onRejected] Callback that will be invoked with a provided reason after the promise has been rejected
     * @param {Function} [onProgress] Callback that will be invoked with a provided value after the promise has been notified
     * @param {Object} [ctx] Context of the callbacks execution
     */done:function(e,t,r,n,o){x.when(e).done(t,r,n,o)},/**
     * Checks whether the given `value` is a promise-like object
     *
     * @param {*} value
     * @returns {Boolean}
     *
     * @example
     * ```js
     * vow.isPromise('something'); // returns false
     * vow.isPromise(vow.defer().promise()); // returns true
     * vow.isPromise({ then : function() { }); // returns true
     * ```
     */isPromise:function(e){return l(e)&&u(e.then)},/**
     * Coerces the given `value` to a promise, or returns the `value` if it's already a promise.
     *
     * @param {*} value
     * @returns {vow:Promise}
     */cast:function(e){return e&&e._vow?e:x.resolve(e)},/**
     * Static equivalent to `promise.valueOf`.
     * If `value` is not a promise, then `value` is treated as a fulfilled promise.
     *
     * @param {*} value
     * @returns {*}
     */valueOf:function(e){return e&&u(e.valueOf)?e.valueOf():e},/**
     * Static equivalent to `promise.isFulfilled`.
     * If `value` is not a promise, then `value` is treated as a fulfilled promise.
     *
     * @param {*} value
     * @returns {Boolean}
     */isFulfilled:function(e){return!(e&&u(e.isFulfilled))||e.isFulfilled()},/**
     * Static equivalent to `promise.isRejected`.
     * If `value` is not a promise, then `value` is treated as a fulfilled promise.
     *
     * @param {*} value
     * @returns {Boolean}
     */isRejected:function(e){return!!(e&&u(e.isRejected))&&e.isRejected()},/**
     * Static equivalent to `promise.isResolved`.
     * If `value` is not a promise, then `value` is treated as a fulfilled promise.
     *
     * @param {*} value
     * @returns {Boolean}
     */isResolved:function(e){return!(e&&u(e.isResolved))||e.isResolved()},/**
     * Returns a promise that has already been resolved with the given `value`.
     * If `value` is a promise, the returned promise will have `value`'s state.
     *
     * @param {*} value
     * @returns {vow:Promise}
     */resolve:function(e){var t=x.defer();return t.resolve(e),t.promise()},/**
     * Returns a promise that has already been fulfilled with the given `value`.
     * If `value` is a promise, the returned promise will be fulfilled with the fulfill/rejection value of `value`.
     *
     * @param {*} value
     * @returns {vow:Promise}
     */fulfill:function(e){var t=x.defer(),r=t.promise();return t.resolve(e),r.isFulfilled()?r:r.then(null,function(e){return e})},/**
     * Returns a promise that has already been rejected with the given `reason`.
     * If `reason` is a promise, the returned promise will be rejected with the fulfill/rejection value of `reason`.
     *
     * @param {*} reason
     * @returns {vow:Promise}
     */reject:function(e){var t=x.defer();return t.reject(e),t.promise()},/**
     * Invokes the given function `fn` with arguments `args`
     *
     * @param {Function} fn
     * @param {...*} [args]
     * @returns {vow:Promise}
     *
     * @example
     * ```js
     * var promise1 = vow.invoke(function(value) {
     *         return value;
     *     }, 'ok'),
     *     promise2 = vow.invoke(function() {
     *         throw Error();
     *     });
     *
     * promise1.isFulfilled(); // true
     * promise1.valueOf(); // 'ok'
     * promise2.isRejected(); // true
     * promise2.valueOf(); // instance of Error
     * ```
     */invoke:function(e,r){var n,o=Math.max(arguments.length-1,0);if(o){n=Array(o);for(var i=0;i<o;)n[i++]=arguments[i]}try{return x.resolve(n?e.apply(t,n):e.call(t))}catch(e){return x.reject(e)}},/**
     * Returns a promise, that will be fulfilled only after all the items in `iterable` are fulfilled.
     * If any of the `iterable` items gets rejected, the promise will be rejected.
     *
     * @param {Array|Object} iterable
     * @returns {vow:Promise}
     *
     * @example
     * with array:
     * ```js
     * var defer1 = vow.defer(),
     *     defer2 = vow.defer();
     *
     * vow.all([defer1.promise(), defer2.promise(), 3])
     *     .then(function(value) {
     *          // value is "[1, 2, 3]" here
     *     });
     *
     * defer1.resolve(1);
     * defer2.resolve(2);
     * ```
     *
     * @example
     * with object:
     * ```js
     * var defer1 = vow.defer(),
     *     defer2 = vow.defer();
     *
     * vow.all({ p1 : defer1.promise(), p2 : defer2.promise(), p3 : 3 })
     *     .then(function(value) {
     *          // value is "{ p1 : 1, p2 : 2, p3 : 3 }" here
     *     });
     *
     * defer1.resolve(1);
     * defer2.resolve(2);
     * ```
     */all:function(e){var t=new y,r=c(e),n=r?f(e):p(e),o=n.length,i=r?[]:{};if(!o)return t.resolve(i),t.promise();var a=o;return x._forEach(e,function(e,r){i[n[r]]=e,--a||t.resolve(i)},t.reject,t.notify,t,n),t.promise()},/**
     * Returns a promise, that will be fulfilled only after all the items in `iterable` are resolved.
     *
     * @param {Array|Object} iterable
     * @returns {vow:Promise}
     *
     * @example
     * ```js
     * var defer1 = vow.defer(),
     *     defer2 = vow.defer();
     *
     * vow.allResolved([defer1.promise(), defer2.promise()]).spread(function(promise1, promise2) {
     *     promise1.isRejected(); // returns true
     *     promise1.valueOf(); // returns "'error'"
     *     promise2.isFulfilled(); // returns true
     *     promise2.valueOf(); // returns "'ok'"
     * });
     *
     * defer1.reject('error');
     * defer2.resolve('ok');
     * ```
     */allResolved:function(e){var t=new y,r=c(e),n=r?f(e):p(e),o=n.length;if(!o)return t.resolve(r?[]:{}),t.promise();var i=function(){--o||t.resolve(e)};return x._forEach(e,i,i,t.notify,t,n),t.promise()},allSettled:function(e){return x.allResolved(e).then(function(){for(var t,r,n,o=c(e),i=o?f(e):p(e),a=o?[]:{},u=i.length,l=0;l<u;)r=(promise=e[t=i[l++]]).valueOf(),n=promise.isRejected()?{status:"rejected",reason:r}:{status:"fulfilled",value:r},o?a.push(n):a[t]=n;return a})},allPatiently:function(e){return x.allResolved(e).then(function(){var t,r,n,o,i=c(e),a=i?f(e):p(e),u=a.length,l=0;if(!u)return i?[]:{};for(;l<u;)o=e[n=a[l++]],x.isRejected(o)?(t||(t=i?[]:{}),i?t.push(o.valueOf()):t[n]=o.valueOf()):t||((r||(r=i?[]:{}))[n]=x.valueOf(o));if(t)throw t;return r})},/**
     * Returns a promise, that will be fulfilled if any of the items in `iterable` is fulfilled.
     * If all of the `iterable` items get rejected, the promise will be rejected (with the reason of the first rejected item).
     *
     * @param {Array} iterable
     * @returns {vow:Promise}
     */any:function(e){var t=new y,r=e.length;if(!r)return t.reject(Error()),t.promise();var n,o=0;return x._forEach(e,t.resolve,function(e){o||(n=e),++o===r&&t.reject(n)},t.notify,t),t.promise()},/**
     * Returns a promise, that will be fulfilled only when any of the items in `iterable` is fulfilled.
     * If any of the `iterable` items gets rejected, the promise will be rejected.
     *
     * @param {Array} iterable
     * @returns {vow:Promise}
     */anyResolved:function(e){var t=new y;return e.length?x._forEach(e,t.resolve,t.reject,t.notify,t):t.reject(Error()),t.promise()},/**
     * Static equivalent to `promise.delay`.
     * If `value` is not a promise, then `value` is treated as a fulfilled promise.
     *
     * @param {*} value
     * @param {Number} delay
     * @returns {vow:Promise}
     */delay:function(e,t){return x.resolve(e).delay(t)},/**
     * Static equivalent to `promise.timeout`.
     * If `value` is not a promise, then `value` is treated as a fulfilled promise.
     *
     * @param {*} value
     * @param {Number} timeout
     * @returns {vow:Promise}
     */timeout:function(e,t){return x.resolve(e).timeout(t)},_forEach:function(e,t,r,n,o,i){for(var a=i?i.length:e.length,u=0;u<a;)x.when(e[i?i[u]:u],d(t,u),r,n,o),++u},TimedOutError:((n=function(e){this.name="TimedOut",this.message=e}).prototype=Error(),n)},_=!0;"object"==typeof e.exports&&(e.exports=x,_=!1),"object"==typeof modules&&u(modules.define)&&(modules.define("vow",function(e){e(x)}),_=!1),"function"==typeof define&&(define(function(e,t,r){r.exports=x}),_=!1),_&&(t.vow=x)}("undefined"!=typeof window?window:m)}),_.register("hPtJY",function(e,t){// shim for using process in browser
var r,n,o,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return r(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return r.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var s=[],c=!1,f=-1;function p(){c&&o&&(c=!1,o.length?s=o.concat(s):f=-1,s.length&&d())}function d(){if(!c){var e=l(p);c=!0;for(var t=s.length;t;){for(o=s,s=[];++f<t;)o&&o[f].run();f=-1,t=s.length}o=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
n(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return n.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return n.call(this,e)}}}(e)}}// v8 likes predictible objects
function h(e,t){this.fun=e,this.array=t}function y(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new h(e,t)),1!==s.length||c||l(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=y,i.addListener=y,i.once=y,i.off=y,i.removeListener=y,i.removeAllListeners=y,i.emit=y,i.prependListener=y,i.prependOnceListener=y,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}),_.register("bZXCC",function(e,t){// Generated by CoffeeScript 1.9.0
var r,n,o;o=_("4tdBn"),n=_("7Km9c"),e.exports=r={getMeta:o.getMeta,extend:function(e){var t;return t=n(r),r.getMeta=e,t},parse:function(e){var t,n,i,a,u,l,s,c;if(l=[],!e||0===e.length)return[];for("[object Array]"!==Object.prototype.toString.call(e)&&(e=e.split("\n")),n=r.getMeta,s=0,c=e.length;s<c;s++)">"===(a=e[s])[0]||";"===a[0]?((u=n(a.slice(1))).name,i=u.id||l.length,(t=new o.model("",u.name,i)).ids=u.ids||{},t.details=u.details||{},l.push(t)):t.seq+=a;return l},write:function(e,t){var r,n,i,a;for(i=0,n="",a=e.length;i<a;i++)r=e[i],null!=t&&(r=t(r)),n+=">"+r.name+"\n"+o.splitNChars(r.seq,80).join("\n")+"\n";return n}}}),_.register("4tdBn",function(e,t){/*
 * msa-seqtools
 * https://github.com/greenify/msa-seqtools
 *
 * Copyright (c) 2014 greenify
 * Licensed under the MIT license.
 */var r={};e.exports=r,/****
 * Seems to be lots of different ways to format FASTA headers. 
 * 
 * Generally there's an ID and a DESCRIPTION
 *   >ID DESCRIPTION
 * 
 *   >(parts|of|ID) (DESCRIPTION with optional key=values)
 *   
 * This is complicated by the fact that the "values" in the description can have spaces
 * e.g. OS=Arabidopsis thaliana GN=CCD8
 * 
 ****
*/// extract IDs and push them to the meta dict
r.getMeta=function(e){var t,r,n=!1,o=!1,i={},a={},u=e.split(" ");// 	console.log( "full_id", full_id );
// 	console.log( "full_desc", full_desc );
if(u.length>=1?(n=u.shift(),o=u.join(" ")):n=e,n){var l=n.split("|");// everything else should be pairs: db|id
for(// the last item is the accession
t=l.pop(),a.en=t;0!=l.length;){var s=l.shift(),c=l.shift();i[s]=c}}else t=n;if(o){var f,p,d=o.split("=");d.length>1?(d.length,d.forEach(function(e){var t,n=(e=e.trim()).split(" ");n.length>1?(p=n.pop(),t=n.join(" ")):t=e,f?a[f.toLowerCase()]=t:r=t,f=p})):r=d.shift()}var h={name:t,ids:i,details:a};// 	console.log( "meta", meta );
return r&&(h.desc=r),h};var n={sp:{link:"http://www.uniprot.org/%s",name:"Uniprot"},tr:{link:"http://www.uniprot.org/%s",name:"Trembl"},gb:{link:"http://www.ncbi.nlm.nih.gov/nuccore/%s",name:"Genbank"},pdb:{link:"http://www.rcsb.org/pdb/explore/explore.do?structureId=%s",name:"PDB"}};r.buildLinks=function(e){var t={};return Object.keys(e=e||{}).forEach(function(r){if(r in n){var o=n[r],i=o.link.replace("%s",e[r]);t[o.name]=i}}),t},// search for a text
r.contains=function(e,t){return -1!=="".indexOf.call(e,t,0)},// split after e.g. 80 chars
r.splitNChars=function(e,t){t=t||80;var r,n,o=[];for(r=0,n=e.length-1;r<=n;r+=t)o.push(e.substr(r,t));return o},r.reverse=function(e){return e.split("").reverse().join("")},r.complement=function(e){var t=e+"",r=[// cg
[/g/g,"0"],[/c/g,"1"],[/0/g,"c"],[/1/g,"g"],// CG
[/G/g,"0"],[/C/g,"1"],[/0/g,"C"],[/1/g,"G"],// at
[/a/g,"0"],[/t/g,"1"],[/0/g,"t"],[/1/g,"a"],// AT
[/A/g,"0"],[/T/g,"1"],[/0/g,"T"],[/1/g,"A"]];for(var n in r)t=t.replace(r[n][0],r[n][1]);return t},r.reverseComplement=function(e){return r.reverse(r.complement(e))},r.model=function(e,t,r){this.seq=e,this.name=t,this.id=r,this.ids={}}}),_.register("7Km9c",function(e,t){// Generated by CoffeeScript 1.9.0
e.exports=function(e){var t,r,n,o,i,a,u;for(e=e||{},t=n=0,a=arguments.length;0<=a?n<a:n>a;t=0<=a?++n:--n)if(arguments[t])for(o=0,u=arguments[t],i=u.length;o<i;o++)r=u[o],arguments[t].hasOwnProperty(r)&&(e[r]=arguments[t][r]);return e}}),_.register("f504n",function(e,t){var r=_("23YZo"),n=_("fiQnm"),o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?r.Buffer:void 0,u=a?a.isBuffer:void 0;e.exports=u||n}),_.register("23YZo",function(e,t){var r=_("ljJ8G"),n="object"==typeof self&&self&&self.Object===Object&&self,o=r||n||Function("return this")();e.exports=o}),_.register("ljJ8G",function(e,t){/** Detect free variable `global` from Node.js. */var r="object"==typeof m&&m&&m.Object===Object&&m;e.exports=r}),_.register("fiQnm",function(e,t){e.exports=/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function(){return!1}}),_.register("jIny1",function(e,t){var r=_("ljJ8G"),n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,a=function(){try{// Use `util.types` for Node.js 10+.
var e=o&&o.require&&o.require("util").types;if(e)return e;// Legacy `process.binding('util')` for Node.js < 10.
return i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}),_.register("c9Z8w",function(e,t){// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
e.exports=_("hOzOt")()}),_.register("hOzOt",function(e,t){var r=_("kZO5c");function n(){}function o(){}o.resetWarningCache=n,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var u=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;// Important!
// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:n};return i.PropTypes=i,i}}),_.register("kZO5c",function(e,t){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}),_.register("jgMPM",function(e,t){e.exports.__esModule=!0,e.exports.default=void 0,function(e){if(!e||!e.__esModule){var t={};if(null!=e){for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}}t.default=e}}(_("c9Z8w"));var r=a(_("gKDls")),n=a(_("e14iu")),o=a(_("acw62")),i=a(_("lQkjg"));function a(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=function(e,t){return e&&t&&t.split(" ").forEach(function(t){return(0,r.default)(e,t)})},s=function(e,t){return e&&t&&t.split(" ").forEach(function(t){return(0,n.default)(e,t)})},c=/*#__PURE__*/function(e){function t(){for(var t,r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).onEnter=function(e,r){var n=t.getClassNames(r?"appear":"enter").className;t.removeClasses(e,"exit"),l(e,n),t.props.onEnter&&t.props.onEnter(e,r)},t.onEntering=function(e,r){var n=t.getClassNames(r?"appear":"enter").activeClassName;t.reflowAndAddClass(e,n),t.props.onEntering&&t.props.onEntering(e,r)},t.onEntered=function(e,r){var n=t.getClassNames("appear").doneClassName,o=t.getClassNames("enter").doneClassName,i=r?n+" "+o:o;t.removeClasses(e,r?"appear":"enter"),l(e,i),t.props.onEntered&&t.props.onEntered(e,r)},t.onExit=function(e){var r=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),l(e,r),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var r=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,r),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var r=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),l(e,r),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var r=t.props.classNames,n="string"==typeof r,o=n?(n&&r?r+"-":"")+e:r[e],i=n?o+"-active":r[e+"Active"],a=n?o+"-done":r[e+"Done"];return{className:o,activeClassName:i,doneClassName:a}},t}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var r=t.prototype;return r.removeClasses=function(e,t){var r=this.getClassNames(t),n=r.className,o=r.activeClassName,i=r.doneClassName;n&&s(e,n),o&&s(e,o),i&&s(e,i)},r.reflowAndAddClass=function(e,t){// This is for to force a repaint,
// which is necessary in order to transition styles when adding a class name.
t&&(/* eslint-disable no-unused-expressions */e&&e.scrollTop,/* eslint-enable no-unused-expressions */l(e,t))},r.render=function(){var e=u({},this.props);return delete e.classNames,o.default.createElement(i.default,u({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(o.default.Component);c.defaultProps={classNames:""},c.propTypes={},e.exports.default=c,e.exports=e.exports.default}),_.register("gKDls",function(e,t){var r=_("1jnue");e.exports.__esModule=!0,e.exports.default=function(e,t){e.classList?e.classList.add(t):(0,n.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var n=r(_("amvCb"));e.exports=e.exports.default}),_.register("1jnue",function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}),_.register("amvCb",function(e,t){e.exports.__esModule=!0,e.exports.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=e.exports.default}),_.register("e14iu",function(e,t){function r(e,t){return e.replace(RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=r(e.className,t):e.setAttribute("class",r(e.className&&e.className.baseVal||"",t))}}),_.register("lQkjg",function(t,r){Object.defineProperty(t.exports,"__esModule",{value:!0,configurable:!0}),e(t.exports,"__esModule",()=>n,e=>n=e),e(t.exports,"default",()=>o,e=>o=e),e(t.exports,"EXITING",()=>i,e=>i=e),e(t.exports,"ENTERED",()=>a,e=>a=e),e(t.exports,"ENTERING",()=>u,e=>u=e),e(t.exports,"EXITED",()=>l,e=>l=e),e(t.exports,"UNMOUNTED",()=>s,e=>s=e),n=!0,o=i=a=u=l=s=void 0;var n,o,i,a,u,l,s,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e){for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}}return t.default=e,t}(_("c9Z8w")),f=h(_("acw62")),p=h(_("1u0KT")),d=_("hdX8Q");function h(e){return e&&e.__esModule?e:{default:e}}var y="unmounted";s=y;var v="exited";l=v;var m="entering";u=m;var g="entered";a=g;var b="exiting";/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */i=b;var x=/*#__PURE__*/function(e){function t(t,r){n=e.call(this,t,r)||this;var n,o,i=r.transitionGroup,a=i&&!i.isMounting?t.enter:t.appear;// In the context of a TransitionGroup all enters are really appears
return n.appearStatus=null,t.in?a?(o=v,n.appearStatus=m):o=g:o=t.unmountOnExit||t.mountOnEnter?y:v,n.state={status:o},n.nextCallback=null,n}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var r=t.prototype;return r.getChildContext=function(){return{transitionGroup:null// allows for nested Transitions
}},t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===y?{status:v}:null},//   let nextStatus = null
//   if (prevProps !== this.props) {
//     const { status } = this.state
//     if (this.props.in) {
//       if (status !== ENTERING && status !== ENTERED) {
//         nextStatus = ENTERING
//       }
//     } else {
//       if (status === ENTERING || status === ENTERED) {
//         nextStatus = EXITING
//       }
//     }
//   }
//   return { nextStatus }
// }
r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var r=this.state.status;this.props.in?r!==m&&r!==g&&(t=m):(r===m||r===g)&&(t=b)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e,t,r,n=this.props.timeout;return e=t=r=n,null!=n&&"number"!=typeof n&&(e=n.exit,t=n.enter,r=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:r}},r.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){// nextStatus will always be ENTERING or EXITING.
this.cancelNextCallback();var r=p.default.findDOMNode(this);t===m?this.performEnter(r,e):this.performExit(r)}else this.props.unmountOnExit&&this.state.status===v&&this.setState({status:y})},r.performEnter=function(e,t){var r=this,n=this.props.enter,o=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,i=this.getTimeouts(),a=o?i.appear:i.enter;// if we are mounting and running this it means appear _must_ be set
if(!t&&!n){this.safeSetState({status:g},function(){r.props.onEntered(e)});return}this.props.onEnter(e,o),this.safeSetState({status:m},function(){r.props.onEntering(e,o),r.onTransitionEnd(e,a,function(){r.safeSetState({status:g},function(){r.props.onEntered(e,o)})})})},r.performExit=function(e){var t=this,r=this.props.exit,n=this.getTimeouts();if(!r){this.safeSetState({status:v},function(){t.props.onExited(e)});return}this.props.onExit(e),this.safeSetState({status:b},function(){t.props.onExiting(e),t.onTransitionEnd(e,n.exit,function(){t.safeSetState({status:v},function(){t.props.onExited(e)})})})},r.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){// This shouldn't be necessary, but there are weird race conditions with
// setState callbacks and unmounting in testing, so always make sure that
// we can cancel any pending setState callbacks after we unmount.
t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,r=!0;return this.nextCallback=function(n){r&&(r=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},r.onTransitionEnd=function(e,t,r){this.setNextCallback(r);var n=null==t&&!this.props.addEndListener;if(!e||n){setTimeout(this.nextCallback,0);return}this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)},r.render=function(){var e=this.state.status;if(e===y)return null;var t=this.props,r=t.children,n=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}(t,["children"]);// filter props for Transtition
if(delete n.in,delete n.mountOnEnter,delete n.unmountOnExit,delete n.appear,delete n.enter,delete n.exit,delete n.timeout,delete n.addEndListener,delete n.onEnter,delete n.onEntering,delete n.onEntered,delete n.onExit,delete n.onExiting,delete n.onExited,"function"==typeof r)return r(e,n);var o=f.default.Children.only(r);return f.default.cloneElement(o,n)},t}(f.default.Component);function S(){}x.contextTypes={transitionGroup:c.object},x.childContextTypes={transitionGroup:function(){}},x.propTypes={},x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:S,onEntering:S,onEntered:S,onExit:S,onExiting:S,onExited:S},x.UNMOUNTED=0,x.EXITED=1,x.ENTERING=2,x.ENTERED=3,x.EXITING=4,o=(0,d.polyfill)(x)}),_.register("hdX8Q",function(t,r){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function n(){// Call this.constructor.gDSFP to support sub-classes.
var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function o(e){// Binding "this" is important for shallow renderer support.
this.setState(// Call this.constructor.gDSFP to support sub-classes.
// Use the setState() updater to ensure state isn't stale in certain edge cases.
(function(t){var r=this.constructor.getDerivedStateFromProps(e,t);return null!=r?r:null}).bind(this))}function i(e,t){try{var r=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,n)}finally{this.props=r,this.state=n}}function a(e){var t=e.prototype;if(!t||!t.isReactComponent)throw Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;// If new component APIs are defined, "unsafe" lifecycles won't be called.
// Error if any of these lifecycles are present,
// Because they would work differently between older and newer (16.3+) versions of React.
var r=null,a=null,u=null;if("function"==typeof t.componentWillMount?r="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(r="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?a="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?u="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(u="UNSAFE_componentWillUpdate"),null!==r||null!==a||null!==u)throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+(e.displayName||e.name)+" uses "+("function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()")+" but also contains the following legacy lifecycles:"+(null!==r?"\n  "+r:"")+(null!==a?"\n  "+a:"")+(null!==u?"\n  "+u:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");// React <= 16.2 does not support getSnapshotBeforeUpdate.
// As a workaround, use cWU to invoke the new lifecycle.
// Newer versions of React will ignore that lifecycle if gSBU exists.
if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=o),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var l=t.componentDidUpdate;t.componentDidUpdate=function(e,t,r){// 16.3+ will not execute our will-update method;
// It will pass a snapshot value to did-update though.
// Older versions will require our polyfilled will-update value.
// We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
// Because for <= 15.x versions this might be a "prevContext" object.
// We also can't just check "__reactInternalSnapshot",
// Because get-snapshot might return a falsy value.
// So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:r;l.call(this,e,t,n)}}return e}e(t.exports,"polyfill",()=>a),// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
n.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0}),_.register("6AMGZ",function(e,t){e.exports.__esModule=!0,e.exports.default=void 0,i(_("c9Z8w"));var r=i(_("acw62")),n=_("1u0KT"),o=i(_("fq997"));function i(e){return e&&e.__esModule?e:{default:e}}/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */var a=/*#__PURE__*/function(e){function t(){for(var t,r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).handleEnter=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.handleLifecycle("onEnter",0,r)},t.handleEntering=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.handleLifecycle("onEntering",0,r)},t.handleEntered=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.handleLifecycle("onEntered",0,r)},t.handleExit=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.handleLifecycle("onExit",1,r)},t.handleExiting=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.handleLifecycle("onExiting",1,r)},t.handleExited=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.handleLifecycle("onExited",1,r)},t}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var i=t.prototype;return i.handleLifecycle=function(e,t,o){var i,a=this.props.children,u=r.default.Children.toArray(a)[t];u.props[e]&&(i=u.props)[e].apply(i,o),this.props[e]&&this.props[e]((0,n.findDOMNode)(this))},i.render=function(){var e=this.props,t=e.children,n=e.in,i=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}(e,["children","in"]),a=r.default.Children.toArray(t),u=a[0],l=a[1];return delete i.onEnter,delete i.onEntering,delete i.onEntered,delete i.onExit,delete i.onExiting,delete i.onExited,r.default.createElement(o.default,i,n?r.default.cloneElement(u,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):r.default.cloneElement(l,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},t}(r.default.Component);a.propTypes={},e.exports.default=a,e.exports=e.exports.default}),_.register("fq997",function(e,t){e.exports.__esModule=!0,e.exports.default=void 0;var r=a(_("c9Z8w")),n=a(_("acw62")),o=_("hdX8Q"),i=_("lLwQT");function a(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},c=/*#__PURE__*/function(e){function t(t,r){var n,o=(n=e.call(this,t,r)||this).handleExited.bind(l(l(n)));// Initial children should all be entering, dependent on appear
return n.state={handleExited:o,firstRender:!0},n}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var r=t.prototype;return r.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},r.componentDidMount=function(){this.appeared=!0,this.mounted=!0},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var r=t.children,n=t.handleExited;return{children:t.firstRender?(0,i.getInitialChildMapping)(e,n):(0,i.getNextChildMapping)(e,r,n),firstRender:!1}},r.handleExited=function(e,t){var r=(0,i.getChildMapping)(this.props.children);e.key in r||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var r=u({},t.children);return delete r[e.key],{children:r}}))},r.render=function(){var e=this.props,t=e.component,r=e.childFactory,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}(e,["component","childFactory"]),i=s(this.state.children).map(r);return(delete o.appear,delete o.enter,delete o.exit,null===t)?i:n.default.createElement(t,o,i)},t}(n.default.Component);c.childContextTypes={transitionGroup:r.default.object.isRequired},c.propTypes={},c.defaultProps={component:"div",childFactory:function(e){return e}};var f=(0,o.polyfill)(c);e.exports.default=f,e.exports=e.exports.default}),_.register("lLwQT",function(t,r){e(t.exports,"getChildMapping",()=>n,e=>n=e),e(t.exports,"getInitialChildMapping",()=>o,e=>o=e),e(t.exports,"getNextChildMapping",()=>i,e=>i=e),n=u,o=function(e,t){return u(e.children,function(r){return(0,a.cloneElement)(r,{onExited:t.bind(null,r),in:!0,appear:l(r,"appear",e),enter:l(r,"enter",e),exit:l(r,"exit",e)})})},i=function(e,t,r){var n=u(e.children),o=/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */function(e,t){function r(r){return r in t?t[r]:e[r]}// For each key of `next`, the list of keys to insert before that key in
e=e||{},t=t||{};// the combined list
var n,o=Object.create(null),i=[];for(var a in e)a in t?i.length&&(o[a]=i,i=[]):i.push(a);var u={};for(var l in t){if(o[l])for(n=0;n<o[l].length;n++){var s=o[l][n];u[o[l][n]]=r(s)}u[l]=r(l)}// Finally, add the keys which didn't appear before any key in `next`
for(n=0;n<i.length;n++)u[i[n]]=r(i[n]);return u}(t,n);return Object.keys(o).forEach(function(i){var u=o[i];if((0,a.isValidElement)(u)){var s=i in t,c=i in n,f=t[i],p=(0,a.isValidElement)(f)&&!f.props.in;c&&(!s||p)?o[i]=(0,a.cloneElement)(u,{onExited:r.bind(null,u),in:!0,exit:l(u,"exit",e),enter:l(u,"enter",e)}):c||!s||p?c&&s&&(0,a.isValidElement)(f)&&// copy over the last transition props;
// console.log('unchanged', key)
(o[i]=(0,a.cloneElement)(u,{onExited:r.bind(null,u),in:f.props.in,exit:l(u,"exit",e),enter:l(u,"enter",e)})):// console.log('leaving', key)
o[i]=(0,a.cloneElement)(u,{in:!1})}}),o};var n,o,i,a=_("acw62");/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */function u(e,t){var r=Object.create(null);return e&&a.Children.map(e,function(e){return e}).forEach(function(e){// run the map function here instead so that the key is the computed one
r[e.key]=t&&(0,a.isValidElement)(e)?t(e):e}),r}function l(e,t,r){return null!=r[t]?r[t]:e.props[t]}}),_.register("9cCWX",function(t,r){e(t.exports,"AsyncMode",()=>n,e=>n=e),e(t.exports,"ConcurrentMode",()=>o,e=>o=e),e(t.exports,"ContextConsumer",()=>i,e=>i=e),e(t.exports,"ContextProvider",()=>a,e=>a=e),e(t.exports,"Element",()=>u,e=>u=e),e(t.exports,"ForwardRef",()=>l,e=>l=e),e(t.exports,"Fragment",()=>s,e=>s=e),e(t.exports,"Lazy",()=>c,e=>c=e),e(t.exports,"Memo",()=>f,e=>f=e),e(t.exports,"Portal",()=>p,e=>p=e),e(t.exports,"Profiler",()=>d,e=>d=e),e(t.exports,"StrictMode",()=>h,e=>h=e),e(t.exports,"Suspense",()=>y,e=>y=e),e(t.exports,"isAsyncMode",()=>v,e=>v=e),e(t.exports,"isConcurrentMode",()=>m,e=>m=e),e(t.exports,"isContextConsumer",()=>g,e=>g=e),e(t.exports,"isContextProvider",()=>b,e=>b=e),e(t.exports,"isElement",()=>x,e=>x=e),e(t.exports,"isForwardRef",()=>_,e=>_=e),e(t.exports,"isFragment",()=>S,e=>S=e),e(t.exports,"isLazy",()=>w,e=>w=e),e(t.exports,"isMemo",()=>P,e=>P=e),e(t.exports,"isPortal",()=>O,e=>O=e),e(t.exports,"isProfiler",()=>E,e=>E=e),e(t.exports,"isStrictMode",()=>j,e=>j=e),e(t.exports,"isSuspense",()=>k,e=>k=e),e(t.exports,"isValidElementType",()=>M,e=>M=e),e(t.exports,"typeOf",()=>A,e=>A=e);var n,o,i,a,u,l,s,c,f,p,d,h,y,v,m,g,b,x,_,S,w,P,O,E,j,k,M,A,T="function"==typeof Symbol&&Symbol.for,C=T?Symbol.for("react.element"):60103,L=T?Symbol.for("react.portal"):60106,N=T?Symbol.for("react.fragment"):60107,I=T?Symbol.for("react.strict_mode"):60108,R=T?Symbol.for("react.profiler"):60114,D=T?Symbol.for("react.provider"):60109,G=T?Symbol.for("react.context"):60110,V=T?Symbol.for("react.async_mode"):60111,F=T?Symbol.for("react.concurrent_mode"):60111,z=T?Symbol.for("react.forward_ref"):60112,K=T?Symbol.for("react.suspense"):60113,Q=T?Symbol.for("react.suspense_list"):60120,H=T?Symbol.for("react.memo"):60115,W=T?Symbol.for("react.lazy"):60116,B=T?Symbol.for("react.block"):60121,Y=T?Symbol.for("react.fundamental"):60117,U=T?Symbol.for("react.responder"):60118,$=T?Symbol.for("react.scope"):60119;function q(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case C:switch(e=e.type){case V:case F:case N:case R:case I:case K:return e;default:switch(e=e&&e.$$typeof){case G:case z:case W:case H:case D:return e;default:return t}}case L:return t}}}function X(e){return q(e)===F}n=V,o=F,i=G,a=D,u=C,l=z,s=N,c=W,f=H,p=L,d=R,h=I,y=K,v=function(e){return X(e)||q(e)===V},m=X,g=function(e){return q(e)===G},b=function(e){return q(e)===D},x=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===C},_=function(e){return q(e)===z},S=function(e){return q(e)===N},w=function(e){return q(e)===W},P=function(e){return q(e)===H},O=function(e){return q(e)===L},E=function(e){return q(e)===R},j=function(e){return q(e)===I},k=function(e){return q(e)===K},M=function(e){return"string"==typeof e||"function"==typeof e||e===N||e===F||e===R||e===I||e===K||e===Q||"object"==typeof e&&null!==e&&(e.$$typeof===W||e.$$typeof===H||e.$$typeof===D||e.$$typeof===G||e.$$typeof===z||e.$$typeof===Y||e.$$typeof===U||e.$$typeof===$||e.$$typeof===B)},A=q}),_.register("c2Or4",function(e,t){e.exports=function(e){for(var t,r=0,n=e.length,o=!1,i=-1,a=!1;r<n;){if((t=e.charCodeAt(r))>=48&&t<=57)a=!0;else if(101===t||69===t){if(i>-1)break;i=r}else if(46===t){if(o)break;o=!0}else if(43===t||45===t){if(0!==r)break}else break;r+=1}return i+1===r&&r--,!!a&&{number:e.slice(0,r),unit:e.slice(r)}}}),_.register("eTYpT",function(e,t){// `victory-vendor/d3-scale` (CommonJS)
// See upstream license: https://github.com/d3/d3-scale/blob/main/LICENSE
//
// Our CommonJS package relies on transpiled vendor files in `lib-vendor/d3-scale`
e.exports=_("3adcp")}),_.register("3adcp",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),Object.defineProperty(e.exports,"scaleBand",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e.exports,"scaleDiverging",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e.exports,"scaleDivergingLog",{enumerable:!0,get:function(){return m.divergingLog}}),Object.defineProperty(e.exports,"scaleDivergingPow",{enumerable:!0,get:function(){return m.divergingPow}}),Object.defineProperty(e.exports,"scaleDivergingSqrt",{enumerable:!0,get:function(){return m.divergingSqrt}}),Object.defineProperty(e.exports,"scaleDivergingSymlog",{enumerable:!0,get:function(){return m.divergingSymlog}}),Object.defineProperty(e.exports,"scaleIdentity",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e.exports,"scaleImplicit",{enumerable:!0,get:function(){return u.implicit}}),Object.defineProperty(e.exports,"scaleLinear",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e.exports,"scaleLog",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e.exports,"scaleOrdinal",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e.exports,"scalePoint",{enumerable:!0,get:function(){return r.point}}),Object.defineProperty(e.exports,"scalePow",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e.exports,"scaleQuantile",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e.exports,"scaleQuantize",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e.exports,"scaleRadial",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e.exports,"scaleSequential",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(e.exports,"scaleSequentialLog",{enumerable:!0,get:function(){return y.sequentialLog}}),Object.defineProperty(e.exports,"scaleSequentialPow",{enumerable:!0,get:function(){return y.sequentialPow}}),Object.defineProperty(e.exports,"scaleSequentialQuantile",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(e.exports,"scaleSequentialSqrt",{enumerable:!0,get:function(){return y.sequentialSqrt}}),Object.defineProperty(e.exports,"scaleSequentialSymlog",{enumerable:!0,get:function(){return y.sequentialSymlog}}),Object.defineProperty(e.exports,"scaleSqrt",{enumerable:!0,get:function(){return l.sqrt}}),Object.defineProperty(e.exports,"scaleSymlog",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e.exports,"scaleThreshold",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(e.exports,"scaleTime",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e.exports,"scaleUtc",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e.exports,"tickFormat",{enumerable:!0,get:function(){return g.default}});var r=S(_("dlF1c")),n=b(_("5Hf98")),o=b(_("hvSDx")),i=b(_("aEI3x")),a=b(_("bzrFz")),u=S(_("cndqj")),l=S(_("cpAbf")),s=b(_("5lxEG")),c=b(_("67PVh")),f=b(_("mgOAc")),p=b(_("g6ge9")),d=b(_("617BV")),h=b(_("ne0st")),y=S(_("5pVeE")),v=b(_("l4TSc")),m=S(_("fMWTD")),g=b(_("3ZXxn"));function b(e){return e&&e.__esModule?e:{default:e}}function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(x=function(e){return e?r:t})(e)}function S(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=x(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}}),_.register("dlF1c",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=a,e.exports.point=function(){return function e(t){var r=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return e(r())},t}(a.apply(null,arguments).paddingInner(1))};var r,n=_("baM4h"),o=_("98nei"),i=(r=_("cndqj"))&&r.__esModule?r:{default:r};function a(){var e,t,r=(0,i.default)().unknown(void 0),u=r.domain,l=r.range,s=0,c=1,f=!1,p=0,d=0,h=.5;function y(){var r=u().length,o=c<s,i=o?c:s,a=o?s:c;e=(a-i)/Math.max(1,r-p+2*d),f&&(e=Math.floor(e)),i+=(a-i-e*(r-p))*h,t=e*(1-p),f&&(i=Math.round(i),t=Math.round(t));var y=(0,n.range)(r).map(function(t){return i+e*t});return l(o?y.reverse():y)}return delete r.unknown,r.domain=function(e){return arguments.length?(u(e),y()):u()},r.range=function(e){return arguments.length?([s,c]=e,s=+s,c=+c,y()):[s,c]},r.rangeRound=function(e){return[s,c]=e,s=+s,c=+c,f=!0,y()},r.bandwidth=function(){return t},r.step=function(){return e},r.round=function(e){return arguments.length?(f=!!e,y()):f},r.padding=function(e){return arguments.length?(p=Math.min(1,d=+e),y()):p},r.paddingInner=function(e){return arguments.length?(p=Math.min(1,e),y()):p},r.paddingOuter=function(e){return arguments.length?(d=+e,y()):d},r.align=function(e){return arguments.length?(h=Math.max(0,Math.min(1,e)),y()):h},r.copy=function(){return a(u(),[s,c]).round(f).paddingInner(p).paddingOuter(d).align(h)},o.initRange.apply(y(),arguments)}}),_.register("baM4h",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),Object.defineProperty(e.exports,"Adder",{enumerable:!0,get:function(){return f.Adder}}),Object.defineProperty(e.exports,"InternMap",{enumerable:!0,get:function(){return eo.InternMap}}),Object.defineProperty(e.exports,"InternSet",{enumerable:!0,get:function(){return eo.InternSet}}),Object.defineProperty(e.exports,"ascending",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e.exports,"bin",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e.exports,"bisect",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e.exports,"bisectCenter",{enumerable:!0,get:function(){return r.bisectCenter}}),Object.defineProperty(e.exports,"bisectLeft",{enumerable:!0,get:function(){return r.bisectLeft}}),Object.defineProperty(e.exports,"bisectRight",{enumerable:!0,get:function(){return r.bisectRight}}),Object.defineProperty(e.exports,"bisector",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e.exports,"count",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e.exports,"cross",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e.exports,"cumsum",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e.exports,"descending",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e.exports,"deviation",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e.exports,"difference",{enumerable:!0,get:function(){return J.default}}),Object.defineProperty(e.exports,"disjoint",{enumerable:!0,get:function(){return Z.default}}),Object.defineProperty(e.exports,"every",{enumerable:!0,get:function(){return W.default}}),Object.defineProperty(e.exports,"extent",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e.exports,"fcumsum",{enumerable:!0,get:function(){return f.fcumsum}}),Object.defineProperty(e.exports,"filter",{enumerable:!0,get:function(){return Y.default}}),Object.defineProperty(e.exports,"flatGroup",{enumerable:!0,get:function(){return p.flatGroup}}),Object.defineProperty(e.exports,"flatRollup",{enumerable:!0,get:function(){return p.flatRollup}}),Object.defineProperty(e.exports,"fsum",{enumerable:!0,get:function(){return f.fsum}}),Object.defineProperty(e.exports,"greatest",{enumerable:!0,get:function(){return R.default}}),Object.defineProperty(e.exports,"greatestIndex",{enumerable:!0,get:function(){return D.default}}),Object.defineProperty(e.exports,"group",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(e.exports,"groupSort",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e.exports,"groups",{enumerable:!0,get:function(){return p.groups}}),Object.defineProperty(e.exports,"histogram",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e.exports,"index",{enumerable:!0,get:function(){return p.index}}),Object.defineProperty(e.exports,"indexes",{enumerable:!0,get:function(){return p.indexes}}),Object.defineProperty(e.exports,"intersection",{enumerable:!0,get:function(){return ee.default}}),Object.defineProperty(e.exports,"least",{enumerable:!0,get:function(){return N.default}}),Object.defineProperty(e.exports,"leastIndex",{enumerable:!0,get:function(){return I.default}}),Object.defineProperty(e.exports,"map",{enumerable:!0,get:function(){return U.default}}),Object.defineProperty(e.exports,"max",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(e.exports,"maxIndex",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(e.exports,"mean",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(e.exports,"median",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(e.exports,"merge",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(e.exports,"min",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(e.exports,"minIndex",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(e.exports,"mode",{enumerable:!0,get:function(){return E.default}}),Object.defineProperty(e.exports,"nice",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(e.exports,"pairs",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(e.exports,"permute",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(e.exports,"quantile",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(e.exports,"quantileSorted",{enumerable:!0,get:function(){return A.quantileSorted}}),Object.defineProperty(e.exports,"quickselect",{enumerable:!0,get:function(){return T.default}}),Object.defineProperty(e.exports,"range",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(e.exports,"rank",{enumerable:!0,get:function(){return L.default}}),Object.defineProperty(e.exports,"reduce",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(e.exports,"reverse",{enumerable:!0,get:function(){return q.default}}),Object.defineProperty(e.exports,"rollup",{enumerable:!0,get:function(){return p.rollup}}),Object.defineProperty(e.exports,"rollups",{enumerable:!0,get:function(){return p.rollups}}),Object.defineProperty(e.exports,"scan",{enumerable:!0,get:function(){return G.default}}),Object.defineProperty(e.exports,"shuffle",{enumerable:!0,get:function(){return V.default}}),Object.defineProperty(e.exports,"shuffler",{enumerable:!0,get:function(){return V.shuffler}}),Object.defineProperty(e.exports,"some",{enumerable:!0,get:function(){return B.default}}),Object.defineProperty(e.exports,"sort",{enumerable:!0,get:function(){return X.default}}),Object.defineProperty(e.exports,"subset",{enumerable:!0,get:function(){return et.default}}),Object.defineProperty(e.exports,"sum",{enumerable:!0,get:function(){return F.default}}),Object.defineProperty(e.exports,"superset",{enumerable:!0,get:function(){return er.default}}),Object.defineProperty(e.exports,"thresholdFreedmanDiaconis",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(e.exports,"thresholdScott",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(e.exports,"thresholdSturges",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e.exports,"tickIncrement",{enumerable:!0,get:function(){return z.tickIncrement}}),Object.defineProperty(e.exports,"tickStep",{enumerable:!0,get:function(){return z.tickStep}}),Object.defineProperty(e.exports,"ticks",{enumerable:!0,get:function(){return z.default}}),Object.defineProperty(e.exports,"transpose",{enumerable:!0,get:function(){return K.default}}),Object.defineProperty(e.exports,"union",{enumerable:!0,get:function(){return en.default}}),Object.defineProperty(e.exports,"variance",{enumerable:!0,get:function(){return Q.default}}),Object.defineProperty(e.exports,"zip",{enumerable:!0,get:function(){return H.default}});var r=eu(_("eiUsc")),n=ei(_("42JXN")),o=ei(_("7C7yR")),i=ei(_("ajdJT")),a=ei(_("67S8D")),u=ei(_("hG40Y")),l=ei(_("j54An")),s=ei(_("7tsUa")),c=ei(_("lRRFR")),f=_("aRMXC"),p=eu(_("c1jhN")),d=ei(_("g9Xbd")),h=ei(_("cLuus")),y=ei(_("d1BC7")),v=ei(_("6i8dH")),m=ei(_("i7tuN")),g=ei(_("kHUkZ")),b=ei(_("draOj")),x=ei(_("6DBgh")),S=ei(_("4HwgR")),w=ei(_("gnNvC")),P=ei(_("5raSG")),O=ei(_("5nboE")),E=ei(_("asMhi")),j=ei(_("7mFci")),k=ei(_("ir717")),M=ei(_("39H9X")),A=eu(_("26KnF")),T=ei(_("3EDNm")),C=ei(_("hxxuu")),L=ei(_("2Koeh")),N=ei(_("8ITro")),I=ei(_("akUwn")),R=ei(_("ldDLn")),D=ei(_("6g8Yn")),G=ei(_("lfHoP")),V=eu(_("jL9vH")),F=ei(_("2zFIX")),z=eu(_("5nk0u")),K=ei(_("lcJcg")),Q=ei(_("eUraa")),H=ei(_("6s8G0")),W=ei(_("4tbza")),B=ei(_("1clrJ")),Y=ei(_("hR10Z")),U=ei(_("akUza")),$=ei(_("h6YjS")),q=ei(_("397w5")),X=ei(_("c5SM0")),J=ei(_("e1d1i")),Z=ei(_("fu4hi")),ee=ei(_("YVzQY")),et=ei(_("fg75q")),er=ei(_("8D0Hg")),en=ei(_("aIUy7")),eo=_("7sRhp");function ei(e){return e&&e.__esModule?e:{default:e}}function ea(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(ea=function(e){return e?r:t})(e)}function eu(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=ea(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}}),_.register("eiUsc",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=e.exports.bisectRight=e.exports.bisectLeft=e.exports.bisectCenter=void 0;var r=i(_("42JXN")),n=i(_("7C7yR")),o=i(_("gcfbT"));function i(e){return e&&e.__esModule?e:{default:e}}let a=(0,n.default)(r.default),u=a.right;e.exports.bisectRight=u;let l=a.left;e.exports.bisectLeft=l;let s=(0,n.default)(o.default).center;e.exports.bisectCenter=s,e.exports.default=u}),_.register("42JXN",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return null==e||null==t?NaN:e<t?-1:e>t?1:e>=t?0:NaN}}),_.register("7C7yR",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){let t,o,a;// If an accessor is specified, promote it to a comparator. In this case we
function u(e,r,n=0,i=e.length){if(n<i){if(0!==t(r,r))return i;do{let t=n+i>>>1;0>o(e[t],r)?n=t+1:i=t}while(n<i)}return n}return 2!==e.length?(t=r.default,o=(t,n)=>(0,r.default)(e(t),n),a=(t,r)=>e(t)-r):(t=e===r.default||e===n.default?e:i,o=e,a=e),{left:u,center:function(e,t,r=0,n=e.length){let o=u(e,t,r,n-1);return o>r&&a(e[o-1],t)>-a(e[o],t)?o-1:o},right:function(e,r,n=0,i=e.length){if(n<i){if(0!==t(r,r))return i;do{let t=n+i>>>1;0>=o(e[t],r)?n=t+1:i=t}while(n<i)}return n}}};var r=o(_("42JXN")),n=o(_("j54An"));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return 0}}),_.register("j54An",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return null==e||null==t?NaN:t<e?-1:t>e?1:t>=e?0:NaN}}),_.register("gcfbT",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return null===e?NaN:+e},e.exports.numbers=function*(e,t){if(void 0===t)for(let t of e)null!=t&&(t=+t)>=t&&(yield t);else{let r=-1;for(let n of e)null!=(n=t(n,++r,e))&&(n=+n)>=n&&(yield n)}}}),_.register("ajdJT",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){let r=0;if(void 0===t)for(let t of e)null!=t&&(t=+t)>=t&&++r;else{let n=-1;for(let o of e)null!=(o=t(o,++n,e))&&(o=+o)>=o&&++r}return r}}),_.register("67S8D",function(e,t){function r(e){return 0|e.length}function n(e){return!(e>0)}function o(e){return"object"!=typeof e||"length"in e?e:Array.from(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(...e){var t;let i="function"==typeof e[e.length-1]&&(t=e.pop(),e=>t(...e));e=e.map(o);let a=e.map(r),u=e.length-1,l=Array(u+1).fill(0),s=[];if(u<0||a.some(n))return s;for(;;){s.push(l.map((t,r)=>e[r][t]));let t=u;for(;++l[t]===a[t];){if(0===t)return i?s.map(i):s;l[t--]=0}}}}),_.register("hG40Y",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var r=0,n=0;return Float64Array.from(e,void 0===t?e=>r+=+e||0:o=>r+=+t(o,n++,e)||0)}}),_.register("7tsUa",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){let r=(0,n.default)(e,t);return r?Math.sqrt(r):r};var r,n=(r=_("eUraa"))&&r.__esModule?r:{default:r}}),_.register("eUraa",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){let r,n=0,o=0,i=0;if(void 0===t)for(let t of e)null!=t&&(t=+t)>=t&&(r=t-o,o+=r/++n,i+=r*(t-o));else{let a=-1;for(let u of e)null!=(u=t(u,++a,e))&&(u=+u)>=u&&(r=u-o,o+=r/++n,i+=r*(u-o))}if(n>1)return i/(n-1)}}),_.register("lRRFR",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){let r,n;if(void 0===t)for(let t of e)null!=t&&(void 0===r?t>=t&&(r=n=t):(r>t&&(r=t),n<t&&(n=t)));else{let o=-1;for(let i of e)null!=(i=t(i,++o,e))&&(void 0===r?i>=i&&(r=n=i):(r>i&&(r=i),n<i&&(n=i)))}return[r,n]}}),_.register("aRMXC",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Adder=void 0,e.exports.fcumsum=function(e,t){let n=new r,o=-1;return Float64Array.from(e,void 0===t?e=>n.add(+e||0):r=>n.add(+t(r,++o,e)||0))},e.exports.fsum=function(e,t){let n=new r;if(void 0===t)for(let t of e)(t=+t)&&n.add(t);else{let r=-1;for(let o of e)(o=+t(o,++r,e))&&n.add(o)}return+n};// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
class r{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){let t=this._partials,r=0;for(let n=0;n<this._n&&n<32;n++){let o=t[n],i=e+o,a=Math.abs(e)<Math.abs(o)?e-(i-o):o-(i-e);a&&(t[r++]=a),e=i}return t[r]=e,this._n=r+1,this}valueOf(){let e=this._partials,t=this._n,r,n,o,i=0;if(t>0){for(i=e[--t];t>0&&(i=(r=i)+(n=e[--t]),!(o=n-(i-r))););t>0&&(o<0&&e[t-1]<0||o>0&&e[t-1]>0)&&(r=i+(n=2*o),n==r-i&&(i=r))}return i}}e.exports.Adder=r}),_.register("c1jhN",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,...t){return s(e,o.default,o.default,t)},e.exports.flatGroup=function(e,...t){return a(i(e,...t),t)},e.exports.flatRollup=function(e,t,...r){return a(u(e,t,...r),r)},e.exports.groups=i,e.exports.index=function(e,...t){return s(e,o.default,l,t)},e.exports.indexes=function(e,...t){return s(e,Array.from,l,t)},e.exports.rollup=function(e,t,...r){return s(e,o.default,t,r)},e.exports.rollups=u;var r,n=_("7sRhp"),o=(r=_("8zLyq"))&&r.__esModule?r:{default:r};function i(e,...t){return s(e,Array.from,o.default,t)}function a(e,t){for(let r=1,n=t.length;r<n;++r)e=e.flatMap(e=>e.pop().map(([t,r])=>[...e,t,r]));return e}function u(e,t,...r){return s(e,Array.from,t,r)}function l(e){if(1!==e.length)throw Error("duplicate key");return e[0]}function s(e,t,r,o){return function e(i,a){if(a>=o.length)return r(i);let u=new n.InternMap,l=o[a++],s=-1;for(let e of i){let t=l(e,++s,i),r=u.get(t);r?r.push(e):u.set(t,[e])}for(let[t,r]of u)u.set(t,e(r,a));return t(u)}(e,0)}}),_.register("7sRhp",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.InternSet=e.exports.InternMap=void 0;class r extends Map{constructor(e,t=u){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),null!=e)for(let[t,r]of e)this.set(t,r)}get(e){return super.get(o(this,e))}has(e){return super.has(o(this,e))}set(e,t){return super.set(i(this,e),t)}delete(e){return super.delete(a(this,e))}}e.exports.InternMap=r;class n extends Set{constructor(e,t=u){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),null!=e)for(let t of e)this.add(t)}has(e){return super.has(o(this,e))}add(e){return super.add(i(this,e))}delete(e){return super.delete(a(this,e))}}function o({_intern:e,_key:t},r){let n=t(r);return e.has(n)?e.get(n):r}function i({_intern:e,_key:t},r){let n=t(r);return e.has(n)?e.get(n):(e.set(n,r),r)}function a({_intern:e,_key:t},r){let n=t(r);return e.has(n)&&(r=e.get(n),e.delete(n)),r}function u(e){return null!==e&&"object"==typeof e?e.valueOf():e}e.exports.InternSet=n}),_.register("8zLyq",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e}}),_.register("g9Xbd",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,i){return(2!==t.length?(0,o.default)((0,n.rollup)(e,t,i),([e,t],[n,o])=>(0,r.default)(t,o)||(0,r.default)(e,n)):(0,o.default)((0,n.default)(e,i),([e,n],[o,i])=>t(n,i)||(0,r.default)(e,o))).map(([e])=>e)};var r=a(_("42JXN")),n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(_("c1jhN")),o=a(_("c5SM0"));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function a(e){return e&&e.__esModule?e:{default:e}}}),_.register("c5SM0",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.ascendingDefined=a,e.exports.compareDefined=i,e.exports.default=function(e,...t){if("function"!=typeof e[Symbol.iterator])throw TypeError("values is not iterable");e=Array.from(e);let[r]=t;if(r&&2!==r.length||t.length>1){let o=Uint32Array.from(e,(e,t)=>t);return t.length>1?(t=t.map(t=>e.map(t)),o.sort((e,r)=>{for(let n of t){let t=a(n[e],n[r]);if(t)return t}})):(r=e.map(r),o.sort((e,t)=>a(r[e],r[t]))),(0,n.default)(e,o)}return e.sort(i(r))};var r=o(_("42JXN")),n=o(_("39H9X"));function o(e){return e&&e.__esModule?e:{default:e}}function i(e=r.default){if(e===r.default)return a;if("function"!=typeof e)throw TypeError("compare is not a function");return(t,r)=>{let n=e(t,r);return n||0===n?n:(0===e(r,r))-(0===e(t,t))}}function a(e,t){return(null==e||!(e>=e))-(null==t||!(t>=t))||(e<t?-1:e>t?1:0)}}),_.register("39H9X",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return Array.from(t,t=>e[t])}}),_.register("cLuus",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){var e=a.default,t=i.default,c=s.default;function f(r){Array.isArray(r)||(r=Array.from(r));var o,a,s,f=r.length,p=Array(f);for(o=0;o<f;++o)p[o]=e(r[o],o,r);var d=t(p),h=d[0],y=d[1],v=c(p,h,y);// Convert number of thresholds into uniform thresholds, and nice the
// default domain accordingly.
if(!Array.isArray(v)){let e=y,r=+v;// last bin will be zero-width. If the default domain is used, and this
// last threshold is coincident with the maximum input value, we can
// extend the niced upper bound by one tick to ensure uniform bin widths;
// otherwise, we simply remove the last threshold. Note that we don’t
// coerce values or the domain to numbers, and thus must be careful to
// compare order (>=) rather than strict equality (===)!
if(t===i.default&&([h,y]=(0,u.default)(h,y,r)),(v=(0,l.default)(h,y,r))[0]<=h&&(s=(0,l.tickIncrement)(h,y,r)),v[v.length-1]>=y){if(e>=y&&t===i.default){let e=(0,l.tickIncrement)(h,y,r);isFinite(e)&&(e>0?y=(Math.floor(y/e)+1)*e:e<0&&(y=-((Math.ceil(-(y*e))+1)/e)))}else v.pop()}}// Remove any thresholds outside the domain.
for(var m=v.length;v[0]<=h;)v.shift(),--m;for(;v[m-1]>y;)v.pop(),--m;var g,b=Array(m+1);// Initialize bins.
for(o=0;o<=m;++o)(g=b[o]=[]).x0=o>0?v[o-1]:h,g.x1=o<m?v[o]:y;// Assign data to bins by value, ignoring any outside the domain.
if(isFinite(s)){if(s>0)for(o=0;o<f;++o)null!=(a=p[o])&&h<=a&&a<=y&&b[Math.min(m,Math.floor((a-h)/s))].push(r[o]);else if(s<0){for(o=0;o<f;++o)if(null!=(a=p[o])&&h<=a&&a<=y){let e=Math.floor((h-a)*s);b[Math.min(m,e+(v[e]<=a))].push(r[o]);// handle off-by-one due to rounding
}}}else for(o=0;o<f;++o)null!=(a=p[o])&&h<=a&&a<=y&&b[(0,n.default)(v,a,0,m)].push(r[o]);return b}return f.value=function(t){return arguments.length?(e="function"==typeof t?t:(0,o.default)(t),f):e},f.domain=function(e){return arguments.length?(t="function"==typeof e?e:(0,o.default)([e[0],e[1]]),f):t},f.thresholds=function(e){return arguments.length?(c="function"==typeof e?e:Array.isArray(e)?(0,o.default)(r.slice.call(e)):(0,o.default)(e),f):c},f};var r=_("8fPjY"),n=f(_("eiUsc")),o=f(_("lWOD3")),i=f(_("lRRFR")),a=f(_("8zLyq")),u=f(_("7mFci")),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}(_("5nk0u")),s=f(_("i7tuN"));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function f(e){return e&&e.__esModule?e:{default:e}}}),_.register("8fPjY",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.slice=e.exports.map=void 0;var r=Array.prototype,n=r.slice;e.exports.slice=n;var o=r.map;e.exports.map=o}),_.register("lWOD3",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return()=>e}}),_.register("7mFci",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){let o;for(;;){let i=(0,r.tickIncrement)(e,t,n);if(i===o||0===i||!isFinite(i))return[e,t];i>0?(e=Math.floor(e/i)*i,t=Math.ceil(t/i)*i):i<0&&(e=Math.ceil(e*i)/i,t=Math.floor(t*i)/i),o=i}};var r=_("5nk0u")}),_.register("5nk0u",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){var n,o,a,u,l=-1;if(r=+r,(e=+e)==(t=+t)&&r>0)return[e];if((n=t<e)&&(o=e,e=t,t=o),0===(u=i(e,t,r))||!isFinite(u))return[];if(u>0){let r=Math.round(e/u),n=Math.round(t/u);for(r*u<e&&++r,n*u>t&&--n,a=Array(o=n-r+1);++l<o;)a[l]=(r+l)*u}else{let r=Math.round(e*(u=-u)),n=Math.round(t*u);for(r/u<e&&++r,n/u>t&&--n,a=Array(o=n-r+1);++l<o;)a[l]=(r+l)/u}return n&&a.reverse(),a},e.exports.tickIncrement=i,e.exports.tickStep=function(e,t,i){var a=Math.abs(t-e)/Math.max(0,i),u=Math.pow(10,Math.floor(Math.log(a)/Math.LN10)),l=a/u;return l>=r?u*=10:l>=n?u*=5:l>=o&&(u*=2),t<e?-u:u};var r=Math.sqrt(50),n=Math.sqrt(10),o=Math.sqrt(2);function i(e,t,i){var a=(t-e)/Math.max(0,i),u=Math.floor(Math.log(a)/Math.LN10),l=a/Math.pow(10,u);return u>=0?(l>=r?10:l>=n?5:l>=o?2:1)*Math.pow(10,u):-Math.pow(10,-u)/(l>=r?10:l>=n?5:l>=o?2:1)}}),_.register("i7tuN",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return Math.ceil(Math.log((0,n.default)(e))/Math.LN2)+1};var r,n=(r=_("ajdJT"))&&r.__esModule?r:{default:r}}),_.register("d1BC7",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){return Math.ceil((o-t)/(2*((0,n.default)(e,.75)-(0,n.default)(e,.25))*Math.pow((0,r.default)(e),-1/3)))};var r=o(_("ajdJT")),n=o(_("26KnF"));function o(e){return e&&e.__esModule?e:{default:e}}}),_.register("26KnF",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,a){if(u=(e=Float64Array.from((0,i.numbers)(e,a))).length){if((t=+t)<=0||u<2)return(0,n.default)(e);if(t>=1)return(0,r.default)(e);var u,l=(u-1)*t,s=Math.floor(l),c=(0,r.default)((0,o.default)(e,s).subarray(0,s+1));return c+((0,n.default)(e.subarray(s+1))-c)*(l-s)}},e.exports.quantileSorted=function(e,t,r=i.default){if(n=e.length){if((t=+t)<=0||n<2)return+r(e[0],0,e);if(t>=1)return+r(e[n-1],n-1,e);var n,o=(n-1)*t,a=Math.floor(o),u=+r(e[a],a,e);return u+(+r(e[a+1],a+1,e)-u)*(o-a)}};var r=u(_("kHUkZ")),n=u(_("5raSG")),o=u(_("3EDNm")),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}(_("gcfbT"));function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function u(e){return e&&e.__esModule?e:{default:e}}}),_.register("kHUkZ",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){let r;if(void 0===t)for(let t of e)null!=t&&(r<t||void 0===r&&t>=t)&&(r=t);else{let n=-1;for(let o of e)null!=(o=t(o,++n,e))&&(r<o||void 0===r&&o>=o)&&(r=o)}return r}}),_.register("5raSG",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){let r;if(void 0===t)for(let t of e)null!=t&&(r>t||void 0===r&&t>=t)&&(r=t);else{let n=-1;for(let o of e)null!=(o=t(o,++n,e))&&(r>o||void 0===r&&o>=o)&&(r=o)}return r}}),_.register("3EDNm",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=// Based on https://github.com/mourner/quickselect
// ISC license, Copyright 2018 Vladimir Agafonkin.
function e(t,o,i=0,a=t.length-1,u){for(u=void 0===u?r.ascendingDefined:(0,r.compareDefined)(u);a>i;){if(a-i>600){let r=a-i+1,n=o-i+1,l=Math.log(r),s=.5*Math.exp(2*l/3),c=.5*Math.sqrt(l*s*(r-s)/r)*(n-r/2<0?-1:1),f=Math.max(i,Math.floor(o-n*s/r+c)),p=Math.min(a,Math.floor(o+(r-n)*s/r+c));e(t,o,f,p,u)}let r=t[o],l=i,s=a;for(n(t,i,o),u(t[a],r)>0&&n(t,i,a);l<s;){for(n(t,l,s),++l,--s;0>u(t[l],r);)++l;for(;u(t[s],r)>0;)--s}0===u(t[i],r)?n(t,i,s):n(t,++s,a),s<=o&&(i=s+1),o<=s&&(a=s-1)}return t};var r=_("c5SM0");function n(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}}),_.register("6i8dH",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){return Math.ceil((o-t)*Math.cbrt((0,r.default)(e))/(3.49*(0,n.default)(e)))};var r=o(_("ajdJT")),n=o(_("7tsUa"));function o(e){return e&&e.__esModule?e:{default:e}}}),_.register("draOj",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){let r;let n=-1,o=-1;if(void 0===t)for(let t of e)++o,null!=t&&(r<t||void 0===r&&t>=t)&&(r=t,n=o);else for(let i of e)null!=(i=t(i,++o,e))&&(r<i||void 0===r&&i>=i)&&(r=i,n=o);return n}}),_.register("6DBgh",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){let r=0,n=0;if(void 0===t)for(let t of e)null!=t&&(t=+t)>=t&&(++r,n+=t);else{let o=-1;for(let i of e)null!=(i=t(i,++o,e))&&(i=+i)>=i&&(++r,n+=i)}if(r)return n/r}}),_.register("4HwgR",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return(0,n.default)(e,.5,t)};var r,n=(r=_("26KnF"))&&r.__esModule?r:{default:r}}),_.register("gnNvC",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return Array.from(function*(e){for(let t of e)yield*t}(e))}}),_.register("5nboE",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){let r;let n=-1,o=-1;if(void 0===t)for(let t of e)++o,null!=t&&(r>t||void 0===r&&t>=t)&&(r=t,n=o);else for(let i of e)null!=(i=t(i,++o,e))&&(r>i||void 0===r&&i>=i)&&(r=i,n=o);return n}}),_.register("asMhi",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){let n;let o=new r.InternMap;if(void 0===t)for(let t of e)null!=t&&t>=t&&o.set(t,(o.get(t)||0)+1);else{let r=-1;for(let n of e)null!=(n=t(n,++r,e))&&n>=n&&o.set(n,(o.get(n)||0)+1)}let i=0;for(let[e,t]of o)t>i&&(i=t,n=e);return n};var r=_("7sRhp")}),_.register("ir717",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t=r){let n;let o=[],i=!1;for(let r of e)i&&o.push(t(n,r)),n=r,i=!0;return o},e.exports.pair=r;function r(e,t){return[e,t]}}),_.register("hxxuu",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){e=+e,t=+t,r=(o=arguments.length)<2?(t=e,e=0,1):o<3?1:+r;for(var n=-1,o=0|Math.max(0,Math.ceil((t-e)/r)),i=Array(o);++n<o;)i[n]=e+n*r;return i}}),_.register("2Koeh",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t=n.default){let r,i;if("function"!=typeof e[Symbol.iterator])throw TypeError("values is not iterable");let a=Array.from(e),u=new Float64Array(a.length);2!==t.length&&(a=a.map(t),t=n.default);let l=(e,r)=>t(a[e],a[r]);return Uint32Array.from(a,(e,t)=>t).sort(t===n.default?(e,t)=>(0,o.ascendingDefined)(a[e],a[t]):(0,o.compareDefined)(l)).forEach((e,t)=>{let n=l(e,void 0===r?e:r);n>=0?((void 0===r||n>0)&&(r=e,i=t),u[e]=i):u[e]=NaN}),u};var r,n=(r=_("42JXN"))&&r.__esModule?r:{default:r},o=_("c5SM0")}),_.register("8ITro",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t=n.default){let r;let o=!1;if(1===t.length){let i;for(let a of e){let e=t(a);(o?0>(0,n.default)(e,i):0===(0,n.default)(e,e))&&(r=a,i=e,o=!0)}}else for(let n of e)(o?0>t(n,r):0===t(n,n))&&(r=n,o=!0);return r};var r,n=(r=_("42JXN"))&&r.__esModule?r:{default:r}}),_.register("akUwn",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t=r.default){let o;if(1===t.length)return(0,n.default)(e,t);let i=-1,a=-1;for(let r of e)++a,(i<0?0===t(r,r):0>t(r,o))&&(o=r,i=a);return i};var r=o(_("42JXN")),n=o(_("5nboE"));function o(e){return e&&e.__esModule?e:{default:e}}}),_.register("ldDLn",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t=n.default){let r;let o=!1;if(1===t.length){let i;for(let a of e){let e=t(a);(o?(0,n.default)(e,i)>0:0===(0,n.default)(e,e))&&(r=a,i=e,o=!0)}}else for(let n of e)(o?t(n,r)>0:0===t(n,n))&&(r=n,o=!0);return r};var r,n=(r=_("42JXN"))&&r.__esModule?r:{default:r}}),_.register("6g8Yn",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t=r.default){let o;if(1===t.length)return(0,n.default)(e,t);let i=-1,a=-1;for(let r of e)++a,(i<0?0===t(r,r):t(r,o)>0)&&(o=r,i=a);return i};var r=o(_("42JXN")),n=o(_("draOj"));function o(e){return e&&e.__esModule?e:{default:e}}}),_.register("lfHoP",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){let r=(0,n.default)(e,t);return r<0?void 0:r};var r,n=(r=_("akUwn"))&&r.__esModule?r:{default:r}}),_.register("jL9vH",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0,e.exports.shuffler=n;var r=n(Math.random);function n(e){return function(t,r=0,n=t.length){let o=n-(r=+r);for(;o;){let n=e()*o--|0,i=t[o+r];t[o+r]=t[n+r],t[n+r]=i}return t}}e.exports.default=r}),_.register("2zFIX",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){let r=0;if(void 0===t)for(let t of e)(t=+t)&&(r+=t);else{let n=-1;for(let o of e)(o=+t(o,++n,e))&&(r+=o)}return r}}),_.register("lcJcg",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(!(a=e.length))return[];for(var t=-1,r=(0,n.default)(e,o),i=Array(r);++t<r;)for(var a,u=-1,l=i[t]=Array(a);++u<a;)l[u]=e[u][t];return i};var r,n=(r=_("5raSG"))&&r.__esModule?r:{default:r};function o(e){return e.length}}),_.register("6s8G0",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){return(0,n.default)(arguments)};var r,n=(r=_("lcJcg"))&&r.__esModule?r:{default:r}}),_.register("4tbza",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t)throw TypeError("test is not a function");let r=-1;for(let n of e)if(!t(n,++r,e))return!1;return!0}}),_.register("1clrJ",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t)throw TypeError("test is not a function");let r=-1;for(let n of e)if(t(n,++r,e))return!0;return!1}}),_.register("hR10Z",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t)throw TypeError("test is not a function");let r=[],n=-1;for(let o of e)t(o,++n,e)&&r.push(o);return r}}),_.register("akUza",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof e[Symbol.iterator])throw TypeError("values is not iterable");if("function"!=typeof t)throw TypeError("mapper is not a function");return Array.from(e,(r,n)=>t(r,n,e))}}),_.register("h6YjS",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if("function"!=typeof t)throw TypeError("reducer is not a function");let n=e[Symbol.iterator](),o,i,a=-1;if(arguments.length<3){if({done:o,value:r}=n.next(),o)return;++a}for(;{done:o,value:i}=n.next(),!o;)r=t(r,i,++a,e);return r}}),_.register("397w5",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("function"!=typeof e[Symbol.iterator])throw TypeError("values is not iterable");return Array.from(e).reverse()}}),_.register("e1d1i",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,...t){for(let n of(e=new r.InternSet(e),t))for(let t of n)e.delete(t);return e};var r=_("7sRhp")}),_.register("fu4hi",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){let n=t[Symbol.iterator](),o=new r.InternSet;for(let t of e){let e,r;if(o.has(t))return!1;for(;({value:e,done:r}=n.next())&&!r;){if(Object.is(t,e))return!1;o.add(e)}}return!0};var r=_("7sRhp")}),_.register("YVzQY",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,...t){e=new r.InternSet(e),t=t.map(n);r:for(let r of e)for(let n of t)if(!n.has(r)){e.delete(r);continue r}return e};var r=_("7sRhp");function n(e){return e instanceof r.InternSet?e:new r.InternSet(e)}}),_.register("fg75q",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return(0,n.default)(t,e)};var r,n=(r=_("8D0Hg"))&&r.__esModule?r:{default:r}}),_.register("8D0Hg",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){let n=e[Symbol.iterator](),o=new Set;for(let e of t){let t,i;let a=r(e);if(!o.has(a))for(;{value:t,done:i}=n.next();){if(i)return!1;let e=r(t);if(o.add(e),Object.is(a,e))break}}return!0};function r(e){return null!==e&&"object"==typeof e?e.valueOf():e}}),_.register("aIUy7",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(...e){let t=new r.InternSet;for(let r of e)for(let e of r)t.add(e);return t};var r=_("7sRhp")}),_.register("98nei",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.initInterpolator=function(e,t){switch(arguments.length){case 0:break;case 1:"function"==typeof e?this.interpolator(e):this.range(e);break;default:this.domain(e),"function"==typeof t?this.interpolator(t):this.range(t)}return this},e.exports.initRange=function(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e)}return this}}),_.register("cndqj",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function e(){var t=new r.InternMap,i=[],a=[],u=o;function l(e){let r=t.get(e);if(void 0===r){if(u!==o)return u;t.set(e,r=i.push(e)-1)}return a[r%a.length]}return l.domain=function(e){if(!arguments.length)return i.slice();for(let n of(i=[],t=new r.InternMap,e))t.has(n)||t.set(n,i.push(n)-1);return l},l.range=function(e){return arguments.length?(a=Array.from(e),l):a.slice()},l.unknown=function(e){return arguments.length?(u=e,l):u},l.copy=function(){return e(i,a).unknown(u)},n.initRange.apply(l,arguments),l},e.exports.implicit=void 0;var r=_("baM4h"),n=_("98nei");let o=Symbol("implicit");e.exports.implicit=o}),_.register("5Hf98",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function e(t){var r;function i(e){return null==e||isNaN(e=+e)?r:e}return i.invert=i,i.domain=i.range=function(e){return arguments.length?(t=Array.from(e,o.default),i):t.slice()},i.unknown=function(e){return arguments.length?(r=e,i):r},i.copy=function(){return e(t).unknown(r)},t=arguments.length?Array.from(t,o.default):[0,1],(0,n.linearish)(i)};var r,n=_("hvSDx"),o=(r=_("jerFr"))&&r.__esModule?r:{default:r}}),_.register("hvSDx",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function e(){var t=(0,o.default)();return t.copy=function(){return(0,o.copy)(t,e())},i.initRange.apply(t,arguments),l(t)},e.exports.linearish=l;var r,n=_("baM4h"),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}(_("dTLbh")),i=_("98nei"),a=(r=_("3ZXxn"))&&r.__esModule?r:{default:r};function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function l(e){var t=e.domain;return e.ticks=function(e){var r=t();return(0,n.ticks)(r[0],r[r.length-1],null==e?10:e)},e.tickFormat=function(e,r){var n=t();return(0,a.default)(n[0],n[n.length-1],null==e?10:e,r)},e.nice=function(r){null==r&&(r=10);var o,i,a=t(),u=0,l=a.length-1,s=a[u],c=a[l],f=10;for(c<s&&(i=s,s=c,c=i,i=u,u=l,l=i);f-- >0;){if((i=(0,n.tickIncrement)(s,c,r))===o)return a[u]=s,a[l]=c,t(a);if(i>0)s=Math.floor(s/i)*i,c=Math.ceil(c/i)*i;else if(i<0)s=Math.ceil(s*i)/i,c=Math.floor(c*i)/i;else break;o=i}return e},e}}),_.register("dTLbh",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.copy=function(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())},e.exports.default=function(){return p()(l,l)},e.exports.identity=l,e.exports.transformer=p;var r=_("baM4h"),n=_("665th"),o=a(_("jgTuH")),i=a(_("jerFr"));function a(e){return e&&e.__esModule?e:{default:e}}var u=[0,1];function l(e){return e}function s(e,t){return(t-=e=+e)?function(r){return(r-e)/t}:(0,o.default)(isNaN(t)?NaN:.5)}// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function c(e,t,r){var n=e[0],o=e[1],i=t[0],a=t[1];return o<n?(n=s(o,n),i=r(a,i)):(n=s(n,o),i=r(i,a)),function(e){return i(n(e))}}function f(e,t,n){var o=Math.min(e.length,t.length)-1,i=Array(o),a=Array(o),u=-1;// Reverse descending domains.
for(e[o]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++u<o;)i[u]=s(e[u],e[u+1]),a[u]=n(t[u],t[u+1]);return function(t){var n=(0,r.bisect)(e,t,1,o)-1;return a[n](i[n](t))}}function p(){var e,t,r,o,a,s,p=u,d=u,h=n.interpolate,y=l;function v(){var e,t,r,n=Math.min(p.length,d.length);return y!==l&&(e=p[0],t=p[n-1],e>t&&(r=e,e=t,t=r),y=function(r){return Math.max(e,Math.min(t,r))}),o=n>2?f:c,a=s=null,m}function m(t){return null==t||isNaN(t=+t)?r:(a||(a=o(p.map(e),d,h)))(e(y(t)))}return m.invert=function(r){return y(t((s||(s=o(d,p.map(e),n.interpolateNumber)))(r)))},m.domain=function(e){return arguments.length?(p=Array.from(e,i.default),v()):p.slice()},m.range=function(e){return arguments.length?(d=Array.from(e),v()):d.slice()},m.rangeRound=function(e){return d=Array.from(e),h=n.interpolateRound,v()},m.clamp=function(e){return arguments.length?(y=!!e||l,v()):y!==l},m.interpolate=function(e){return arguments.length?(h=e,v()):h},m.unknown=function(e){return arguments.length?(r=e,m):r},function(r,n){return e=r,t=n,v()}}}),_.register("665th",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),Object.defineProperty(e.exports,"interpolate",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e.exports,"interpolateArray",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e.exports,"interpolateBasis",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e.exports,"interpolateBasisClosed",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e.exports,"interpolateCubehelix",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(e.exports,"interpolateCubehelixLong",{enumerable:!0,get:function(){return x.cubehelixLong}}),Object.defineProperty(e.exports,"interpolateDate",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e.exports,"interpolateDiscrete",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e.exports,"interpolateHcl",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(e.exports,"interpolateHclLong",{enumerable:!0,get:function(){return b.hclLong}}),Object.defineProperty(e.exports,"interpolateHsl",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e.exports,"interpolateHslLong",{enumerable:!0,get:function(){return m.hslLong}}),Object.defineProperty(e.exports,"interpolateHue",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e.exports,"interpolateLab",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(e.exports,"interpolateNumber",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e.exports,"interpolateNumberArray",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e.exports,"interpolateObject",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e.exports,"interpolateRgb",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(e.exports,"interpolateRgbBasis",{enumerable:!0,get:function(){return v.rgbBasis}}),Object.defineProperty(e.exports,"interpolateRgbBasisClosed",{enumerable:!0,get:function(){return v.rgbBasisClosed}}),Object.defineProperty(e.exports,"interpolateRound",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(e.exports,"interpolateString",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e.exports,"interpolateTransformCss",{enumerable:!0,get:function(){return h.interpolateTransformCss}}),Object.defineProperty(e.exports,"interpolateTransformSvg",{enumerable:!0,get:function(){return h.interpolateTransformSvg}}),Object.defineProperty(e.exports,"interpolateZoom",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(e.exports,"piecewise",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(e.exports,"quantize",{enumerable:!0,get:function(){return w.default}});var r=E(_("k8gaa")),n=E(_("c2a7V")),o=E(_("hurAB")),i=E(_("7JEhq")),a=E(_("ck059")),u=E(_("9bEkd")),l=E(_("gPZC5")),s=E(_("4TXx0")),c=E(_("4Xtub")),f=E(_("eWQsD")),p=E(_("1qcvW")),d=E(_("aQhro")),h=_("O407u"),y=E(_("4ymTx")),v=O(_("3CWNZ")),m=O(_("h8Xdb")),g=E(_("6bPgS")),b=O(_("dWbd5")),x=O(_("1chdf")),S=E(_("1d2kq")),w=E(_("7rbIB"));function P(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(P=function(e){return e?r:t})(e)}function O(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=P(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}function E(e){return e&&e.__esModule?e:{default:e}}}),_.register("k8gaa",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var f,p=typeof t;return null==t||"boolean"===p?(0,s.default)(t):("number"===p?a.default:"string"===p?(f=(0,r.color)(t))?(t=f,n.default):l.default:t instanceof r.color?n.default:t instanceof Date?i.default:(0,c.isNumberArray)(t)?c.default:Array.isArray(t)?o.genericArray:"function"!=typeof t.valueOf&&"function"!=typeof t.toString||isNaN(t)?u.default:a.default)(e,t)};var r=_("4xVlj"),n=p(_("3CWNZ")),o=_("c2a7V"),i=p(_("ck059")),a=p(_("4TXx0")),u=p(_("eWQsD")),l=p(_("aQhro")),s=p(_("iRCSk")),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}(_("4Xtub"));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function p(e){return e&&e.__esModule?e:{default:e}}}),_.register("4xVlj",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),Object.defineProperty(e.exports,"color",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e.exports,"cubehelix",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e.exports,"gray",{enumerable:!0,get:function(){return o.gray}}),Object.defineProperty(e.exports,"hcl",{enumerable:!0,get:function(){return o.hcl}}),Object.defineProperty(e.exports,"hsl",{enumerable:!0,get:function(){return n.hsl}}),Object.defineProperty(e.exports,"lab",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e.exports,"lch",{enumerable:!0,get:function(){return o.lch}}),Object.defineProperty(e.exports,"rgb",{enumerable:!0,get:function(){return n.rgb}});var r,n=u(_("hCN5L")),o=u(_("9xOfl")),i=(r=_("45fUy"))&&r.__esModule?r:{default:r};function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function u(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}}),_.register("hCN5L",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Color=o,e.exports.Rgb=P,e.exports.darker=e.exports.brighter=void 0,e.exports.default=g,e.exports.hsl=C,e.exports.hslConvert=T,e.exports.rgb=w,e.exports.rgbConvert=S;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(_("4Ivzr"));function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}function o(){}e.exports.darker=.7,e.exports.brighter=1.4285714285714286;var i="\\s*([+-]?\\d+)\\s*",a="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",u="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",l=/^#([0-9a-f]{3,8})$/,s=RegExp(`^rgb\\(${i},${i},${i}\\)$`),c=RegExp(`^rgb\\(${u},${u},${u}\\)$`),f=RegExp(`^rgba\\(${i},${i},${i},${a}\\)$`),p=RegExp(`^rgba\\(${u},${u},${u},${a}\\)$`),d=RegExp(`^hsl\\(${a},${u},${u}\\)$`),h=RegExp(`^hsla\\(${a},${u},${u},${a}\\)$`),y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function v(){return this.rgb().formatHex()}function m(){return this.rgb().formatRgb()}function g(e){var t,r;return e=(e+"").trim().toLowerCase(),(t=l.exec(e))?(r=t[1].length,t=parseInt(t[1],16),6===r?b(t)// #ff0000
:3===r?new P(t>>8&15|t>>4&240,t>>4&15|240&t,(15&t)<<4|15&t,1)// #f00
:8===r?x(t>>24&255,t>>16&255,t>>8&255,(255&t)/255)// #ff000000
:4===r?x(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|240&t,((15&t)<<4|15&t)/255)// #f000
:null// invalid hex
):(t=s.exec(e))?new P(t[1],t[2],t[3],1)// rgb(255, 0, 0)
:(t=c.exec(e))?new P(255*t[1]/100,255*t[2]/100,255*t[3]/100,1)// rgb(100%, 0%, 0%)
:(t=f.exec(e))?x(t[1],t[2],t[3],t[4])// rgba(255, 0, 0, 1)
:(t=p.exec(e))?x(255*t[1]/100,255*t[2]/100,255*t[3]/100,t[4])// rgb(100%, 0%, 0%, 1)
:(t=d.exec(e))?A(t[1],t[2]/100,t[3]/100,1)// hsl(120, 50%, 50%)
:(t=h.exec(e))?A(t[1],t[2]/100,t[3]/100,t[4])// hsla(120, 50%, 50%, 1)
:y.hasOwnProperty(e)?b(y[e])// eslint-disable-line no-prototype-builtins
:"transparent"===e?new P(NaN,NaN,NaN,0):null}function b(e){return new P(e>>16&255,e>>8&255,255&e,1)}function x(e,t,r,n){return n<=0&&(e=t=r=NaN),new P(e,t,r,n)}function S(e){return(e instanceof o||(e=g(e)),e)?(e=e.rgb(),new P(e.r,e.g,e.b,e.opacity)):new P}function w(e,t,r,n){return 1==arguments.length?S(e):new P(e,t,r,null==n?1:n)}function P(e,t,r,n){this.r=+e,this.g=+t,this.b=+r,this.opacity=+n}function O(){return`#${M(this.r)}${M(this.g)}${M(this.b)}`}function E(){let e=j(this.opacity);return`${1===e?"rgb(":"rgba("}${k(this.r)}, ${k(this.g)}, ${k(this.b)}${1===e?")":`, ${e})`}`}function j(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function k(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function M(e){return((e=k(e))<16?"0":"")+e.toString(16)}function A(e,t,r,n){return n<=0?e=t=r=NaN:r<=0||r>=1?e=t=NaN:t<=0&&(e=NaN),new L(e,t,r,n)}function T(e){if(e instanceof L)return new L(e.h,e.s,e.l,e.opacity);if(e instanceof o||(e=g(e)),!e)return new L;if(e instanceof L)return e;var t=(e=e.rgb()).r/255,r=e.g/255,n=e.b/255,i=Math.min(t,r,n),a=Math.max(t,r,n),u=NaN,l=a-i,s=(a+i)/2;return l?(u=t===a?(r-n)/l+(r<n)*6:r===a?(n-t)/l+2:(t-r)/l+4,l/=s<.5?a+i:2-a-i,u*=60):l=s>0&&s<1?0:u,new L(u,l,s,e.opacity)}function C(e,t,r,n){return 1==arguments.length?T(e):new L(e,t,r,null==n?1:n)}function L(e,t,r,n){this.h=+e,this.s=+t,this.l=+r,this.opacity=+n}function N(e){return(e=(e||0)%360)<0?e+360:e}function I(e){return Math.max(0,Math.min(1,e||0))}/* From FvD 13.37, CSS Color Module Level 3 */function R(e,t,r){return(e<60?t+(r-t)*e/60:e<180?r:e<240?t+(r-t)*(240-e)/60:t)*255}(0,r.default)(o,g,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:v,// Deprecated! Use color.formatHex.
formatHex:v,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return T(this).formatHsl()},formatRgb:m,toString:m}),(0,r.default)(P,w,(0,r.extend)(o,{brighter(e){return e=null==e?1.4285714285714286:Math.pow(1.4285714285714286,e),new P(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=null==e?.7:Math.pow(.7,e),new P(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new P(k(this.r),k(this.g),k(this.b),j(this.opacity))},displayable(){return -.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:O,// Deprecated! Use color.formatHex.
formatHex:O,formatHex8:function(){return`#${M(this.r)}${M(this.g)}${M(this.b)}${M((isNaN(this.opacity)?1:this.opacity)*255)}`},formatRgb:E,toString:E})),(0,r.default)(L,C,(0,r.extend)(o,{brighter(e){return e=null==e?1.4285714285714286:Math.pow(1.4285714285714286,e),new L(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=null==e?.7:Math.pow(.7,e),new L(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*t,o=2*r-n;return new P(R(e>=240?e-240:e+120,o,n),R(e,o,n),R(e<120?e+240:e-120,o,n),this.opacity)},clamp(){return new L(N(this.h),I(this.s),I(this.l),j(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=j(this.opacity);return`${1===e?"hsl(":"hsla("}${N(this.h)}, ${100*I(this.s)}%, ${100*I(this.l)}%${1===e?")":`, ${e})`}`}}))}),_.register("4Ivzr",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){e.prototype=t.prototype=r,r.constructor=e},e.exports.extend=function(e,t){var r=Object.create(e.prototype);for(var n in t)r[n]=t[n];return r}}),_.register("9xOfl",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Hcl=b,e.exports.Lab=p,e.exports.default=f,e.exports.gray=function(e,t){return new p(e,0,0,null==t?1:t)},e.exports.hcl=g,e.exports.lch=function(e,t,r,n){return 1==arguments.length?m(e):new b(r,t,e,null==n?1:n)};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(_("4Ivzr")),n=_("hCN5L"),o=_("hPqOe");function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}// https://observablehq.com/@mbostock/lab-and-rgb
let a=4/29,u=6/29,l=3*u*u,s=u*u*u;function c(e){if(e instanceof p)return new p(e.l,e.a,e.b,e.opacity);if(e instanceof b)return x(e);e instanceof n.Rgb||(e=(0,n.rgbConvert)(e));var t,r,o=v(e.r),i=v(e.g),a=v(e.b),u=d((.2225045*o+.7168786*i+.0606169*a)/1);return o===i&&i===a?t=r=u:(t=d((.4360747*o+.3850649*i+.1430804*a)/.96422),r=d((.0139322*o+.0971045*i+.7141733*a)/.82521)),new p(116*u-16,500*(t-u),200*(u-r),e.opacity)}function f(e,t,r,n){return 1==arguments.length?c(e):new p(e,t,r,null==n?1:n)}function p(e,t,r,n){this.l=+e,this.a=+t,this.b=+r,this.opacity=+n}function d(e){return e>s?Math.pow(e,1/3):e/l+a}function h(e){return e>u?e*e*e:l*(e-a)}function y(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function v(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function m(e){if(e instanceof b)return new b(e.h,e.c,e.l,e.opacity);if(e instanceof p||(e=c(e)),0===e.a&&0===e.b)return new b(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*o.degrees;return new b(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function g(e,t,r,n){return 1==arguments.length?m(e):new b(e,t,r,null==n?1:n)}function b(e,t,r,n){this.h=+e,this.c=+t,this.l=+r,this.opacity=+n}function x(e){if(isNaN(e.h))return new p(e.l,0,0,e.opacity);var t=e.h*o.radians;return new p(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}(0,r.default)(p,f,(0,r.extend)(n.Color,{brighter(e){return new p(this.l+18*(null==e?1:e),this.a,this.b,this.opacity)},darker(e){return new p(this.l-18*(null==e?1:e),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,r=isNaN(this.b)?e:e-this.b/200;return t=.96422*h(t),e=1*h(e),r=.82521*h(r),new n.Rgb(y(3.1338561*t-1.6168667*e-.4906146*r),y(-.9787684*t+1.9161415*e+.033454*r),y(.0719453*t-.2289914*e+1.4052427*r),this.opacity)}})),(0,r.default)(b,g,(0,r.extend)(n.Color,{brighter(e){return new b(this.h,this.c,this.l+18*(null==e?1:e),this.opacity)},darker(e){return new b(this.h,this.c,this.l-18*(null==e?1:e),this.opacity)},rgb(){return x(this).rgb()}}))}),_.register("hPqOe",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.radians=e.exports.degrees=void 0;let r=Math.PI/180;e.exports.radians=r;let n=180/Math.PI;e.exports.degrees=n}),_.register("45fUy",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Cubehelix=l,e.exports.default=u;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(_("4Ivzr")),n=_("hCN5L"),o=_("hPqOe");function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}var a=-1.78277*.29227-.1347134789;function u(e,t,r,i){return 1==arguments.length?function(e){if(e instanceof l)return new l(e.h,e.s,e.l,e.opacity);e instanceof n.Rgb||(e=(0,n.rgbConvert)(e));var t=e.r/255,r=e.g/255,i=e.b/255,u=(a*i+-1.7884503806*t-3.5172982438*r)/(a+-1.7884503806-3.5172982438),s=i-u,c=-((1.97294*(r-u)- -.29227*s)/.90649),f=Math.sqrt(c*c+s*s)/(1.97294*u*(1-u)),p=f?Math.atan2(c,s)*o.degrees-120:NaN;return new l(p<0?p+360:p,f,u,e.opacity)}(e):new l(e,t,r,null==i?1:i)}function l(e,t,r,n){this.h=+e,this.s=+t,this.l=+r,this.opacity=+n}(0,r.default)(l,u,(0,r.extend)(n.Color,{brighter(e){return e=null==e?n.brighter:Math.pow(n.brighter,e),new l(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=null==e?n.darker:Math.pow(n.darker,e),new l(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=isNaN(this.h)?0:(this.h+120)*o.radians,t=+this.l,r=isNaN(this.s)?0:this.s*t*(1-t),i=Math.cos(e),a=Math.sin(e);return new n.Rgb(255*(t+r*(-.14861*i+1.78277*a)),255*(t+r*(-.29227*i+-.90649*a)),255*(t+r*(1.97294*i)),this.opacity)}}))}),_.register("3CWNZ",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.rgbBasisClosed=e.exports.rgbBasis=e.exports.default=void 0;var r=_("4xVlj"),n=u(_("hurAB")),o=u(_("7JEhq")),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}(_("b3Scd"));function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function u(e){return e&&e.__esModule?e:{default:e}}var l=function e(t){var n=(0,i.gamma)(t);function o(e,t){var o=n((e=(0,r.rgb)(e)).r,(t=(0,r.rgb)(t)).r),a=n(e.g,t.g),u=n(e.b,t.b),l=(0,i.default)(e.opacity,t.opacity);return function(t){return e.r=o(t),e.g=a(t),e.b=u(t),e.opacity=l(t),e+""}}return o.gamma=e,o}(1);function s(e){return function(t){var n,o,i=t.length,a=Array(i),u=Array(i),l=Array(i);for(n=0;n<i;++n)o=(0,r.rgb)(t[n]),a[n]=o.r||0,u[n]=o.g||0,l[n]=o.b||0;return a=e(a),u=e(u),l=e(l),o.opacity=1,function(e){return o.r=a(e),o.g=u(e),o.b=l(e),o+""}}}e.exports.default=l;var c=s(n.default);e.exports.rgbBasis=c;var f=s(o.default);e.exports.rgbBasisClosed=f}),_.register("hurAB",function(e,t){function r(e,t,r,n,o){var i=e*e,a=i*e;return((1-3*e+3*i-a)*t+(4-6*i+3*a)*r+(1+3*e+3*i-3*a)*n+a*o)/6}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.basis=r,e.exports.default=function(e){var t=e.length-1;return function(n){var o=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),i=e[o],a=e[o+1],u=o>0?e[o-1]:2*i-a,l=o<t-1?e[o+2]:2*a-i;return r((n-o/t)*t,u,i,a,l)}}}),_.register("7JEhq",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=e.length;return function(n){var o=Math.floor(((n%=1)<0?++n:n)*t),i=e[(o+t-1)%t],a=e[o%t],u=e[(o+1)%t],l=e[(o+2)%t];return(0,r.basis)((n-o/t)*t,i,a,u,l)}};var r=_("hurAB")}),_.register("b3Scd",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=i,e.exports.gamma=function(e){return 1==(e=+e)?i:function(t,r){var o,i,a;return r-t?(o=t,i=r,o=Math.pow(o,a=e),i=Math.pow(i,a)-o,a=1/a,function(e){return Math.pow(o+e*i,a)}):(0,n.default)(isNaN(t)?r:t)}},e.exports.hue=function(e,t){var r=t-e;return r?o(e,r>180||r<-180?r-360*Math.round(r/360):r):(0,n.default)(isNaN(e)?t:e)};var r,n=(r=_("iRCSk"))&&r.__esModule?r:{default:r};function o(e,t){return function(r){return e+r*t}}function i(e,t){var r=t-e;return r?o(e,r):(0,n.default)(isNaN(e)?t:e)}}),_.register("iRCSk",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0,e.exports.default=e=>()=>e}),_.register("c2a7V",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return((0,o.isNumberArray)(t)?o.default:a)(e,t)},e.exports.genericArray=a;var r,n=(r=_("k8gaa"))&&r.__esModule?r:{default:r},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(_("4Xtub"));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function a(e,t){var r,o=t?t.length:0,i=e?Math.min(o,e.length):0,a=Array(i),u=Array(o);for(r=0;r<i;++r)a[r]=(0,n.default)(e[r],t[r]);for(;r<o;++r)u[r]=t[r];return function(e){for(r=0;r<i;++r)u[r]=a[r](e);return u}}}),_.register("4Xtub",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){t||(t=[]);var r,n=e?Math.min(t.length,e.length):0,o=t.slice();return function(i){for(r=0;r<n;++r)o[r]=e[r]*(1-i)+t[r]*i;return o}},e.exports.isNumberArray=function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}}),_.register("ck059",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var r=new Date;return e=+e,t=+t,function(n){return r.setTime(e*(1-n)+t*n),r}}}),_.register("4TXx0",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return e=+e,t=+t,function(r){return e*(1-r)+t*r}}}),_.register("eWQsD",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var r,o={},i={};for(r in(null===e||"object"!=typeof e)&&(e={}),(null===t||"object"!=typeof t)&&(t={}),t)r in e?o[r]=(0,n.default)(e[r],t[r]):i[r]=t[r];return function(e){for(r in o)i[r]=o[r](e);return i}};var r,n=(r=_("k8gaa"))&&r.__esModule?r:{default:r}}),_.register("aQhro",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var r,a,u,l,s,c=o.lastIndex=i.lastIndex=0,f=-1,p=[],d=[];// number interpolators
for(// Coerce inputs to strings.
e+="",t+="";(u=o.exec(e))&&(l=i.exec(t));)(s=l.index)>c&&(// a string precedes the next number in b
s=t.slice(c,s),p[f]?p[f]+=s:p[++f]=s),(u=u[0])===(l=l[0])?p[f]?p[f]+=l:p[++f]=l:(// interpolate non-matching numbers
p[++f]=null,d.push({i:f,x:(0,n.default)(u,l)})),c=i.lastIndex;// Add remains of b.
// Otherwise, interpolate each of the numbers and rejoin the string.
return c<t.length&&(s=t.slice(c),p[f]?p[f]+=s:p[++f]=s),p.length<2?d[0]?(r=d[0].x,function(e){return r(e)+""}):(a=t,function(){return a}):(t=d.length,function(e){for(var r,n=0;n<t;++n)p[(r=d[n]).i]=r.x(e);return p.join("")})};var r,n=(r=_("4TXx0"))&&r.__esModule?r:{default:r},o=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,i=RegExp(o.source,"g")}),_.register("9bEkd",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=e.length;return function(r){return e[Math.max(0,Math.min(t-1,Math.floor(r*t)))]}}}),_.register("gPZC5",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var n=(0,r.hue)(+e,+t);return function(e){var t=n(e);return t-360*Math.floor(t/360)}};var r=_("b3Scd")}),_.register("1qcvW",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return e=+e,t=+t,function(r){return Math.round(e*(1-r)+t*r)}}}),_.register("O407u",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.interpolateTransformSvg=e.exports.interpolateTransformCss=void 0;var r,n=(r=_("4TXx0"))&&r.__esModule?r:{default:r},o=_("bJ37r");function i(e,t,r,o){function i(e){return e.length?e.pop()+" ":""}return function(a,u){var l,s,c,f,p=[],d=[];// number interpolators
return a=e(a),u=e(u),function(e,o,i,a,u,l){if(e!==i||o!==a){var s=u.push("translate(",null,t,null,r);l.push({i:s-4,x:(0,n.default)(e,i)},{i:s-2,x:(0,n.default)(o,a)})}else(i||a)&&u.push("translate("+i+t+a+r)}(a.translateX,a.translateY,u.translateX,u.translateY,p,d),(l=a.rotate)!==(s=u.rotate)?(l-s>180?s+=360:s-l>180&&(l+=360),d.push({i:p.push(i(p)+"rotate(",null,o)-2,x:(0,n.default)(l,s)})):s&&p.push(i(p)+"rotate("+s+o),(c=a.skewX)!==(f=u.skewX)?d.push({i:p.push(i(p)+"skewX(",null,o)-2,x:(0,n.default)(c,f)}):f&&p.push(i(p)+"skewX("+f+o),function(e,t,r,o,a,u){if(e!==r||t!==o){var l=a.push(i(a)+"scale(",null,",",null,")");u.push({i:l-4,x:(0,n.default)(e,r)},{i:l-2,x:(0,n.default)(t,o)})}else(1!==r||1!==o)&&a.push(i(a)+"scale("+r+","+o+")")}(a.scaleX,a.scaleY,u.scaleX,u.scaleY,p,d),a=u=null,function(e){for(var t,r=-1,n=d.length;++r<n;)p[(t=d[r]).i]=t.x(e);return p.join("")}}}var a=i(o.parseCss,"px, ","px)","deg)");e.exports.interpolateTransformCss=a;var u=i(o.parseSvg,", ",")",")");e.exports.interpolateTransformSvg=u}),_.register("bJ37r",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.parseCss=/* eslint-disable no-undef */function(e){let t=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?n.identity:(0,n.default)(t.a,t.b,t.c,t.d,t.e,t.f)},e.exports.parseSvg=function(e){return null==e?n.identity:(r||(r=document.createElementNS("http://www.w3.org/2000/svg","g")),r.setAttribute("transform",e),e=r.transform.baseVal.consolidate())?(e=e.matrix,(0,n.default)(e.a,e.b,e.c,e.d,e.e,e.f)):n.identity};var r,n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(_("5pgbl"));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}}),_.register("5pgbl",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n,o,i,a){var u,l,s;return(u=Math.sqrt(e*e+t*t))&&(e/=u,t/=u),(s=e*n+t*o)&&(n-=e*s,o-=t*s),(l=Math.sqrt(n*n+o*o))&&(n/=l,o/=l,s/=l),e*o<t*n&&(e=-e,t=-t,s=-s,u=-u),{translateX:i,translateY:a,rotate:Math.atan2(t,e)*r,skewX:Math.atan(s)*r,scaleX:u,scaleY:l}},e.exports.identity=void 0;var r=180/Math.PI;e.exports.identity={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1}}),_.register("4ymTx",function(e,t){function r(e){return((e=Math.exp(e))+1/e)/2}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n=function e(t,n,o){// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
function i(e,i){var a,u,l=e[0],s=e[1],c=e[2],f=i[0],p=i[1],d=i[2],h=f-l,y=p-s,v=h*h+y*y;// Special case for u0 ≅ u1.
if(v<1e-12)u=Math.log(d/c)/t,a=function(e){return[l+e*h,s+e*y,c*Math.exp(t*e*u)]};else{var m=Math.sqrt(v),g=(d*d-c*c+o*v)/(2*c*n*m),b=(d*d-c*c-o*v)/(2*d*n*m),x=Math.log(Math.sqrt(g*g+1)-g);u=(Math.log(Math.sqrt(b*b+1)-b)-x)/t,a=function(e){var o,i,a=e*u,f=r(x),p=c/(n*m)*(f*(((o=Math.exp(2*(o=t*a+x)))-1)/(o+1))-((i=Math.exp(i=x))-1/i)/2);return[l+p*h,s+p*y,c*f/r(t*a+x)]}}return a.duration=1e3*u*t/Math.SQRT2,a}return i.rho=function(t){var r=Math.max(.001,+t),n=r*r,o=n*n;return e(r,n,o)},i}(Math.SQRT2,2,4);e.exports.default=n}),_.register("h8Xdb",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.hslLong=e.exports.default=void 0;var r=_("4xVlj"),n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(_("b3Scd"));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}function i(e){return function(t,o){var i=e((t=(0,r.hsl)(t)).h,(o=(0,r.hsl)(o)).h),a=(0,n.default)(t.s,o.s),u=(0,n.default)(t.l,o.l),l=(0,n.default)(t.opacity,o.opacity);return function(e){return t.h=i(e),t.s=a(e),t.l=u(e),t.opacity=l(e),t+""}}}var a=i(n.hue);e.exports.default=a;var u=i(n.default);e.exports.hslLong=u}),_.register("6bPgS",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var r=(0,o.default)((e=(0,n.lab)(e)).l,(t=(0,n.lab)(t)).l),i=(0,o.default)(e.a,t.a),a=(0,o.default)(e.b,t.b),u=(0,o.default)(e.opacity,t.opacity);return function(t){return e.l=r(t),e.a=i(t),e.b=a(t),e.opacity=u(t),e+""}};var r,n=_("4xVlj"),o=(r=_("b3Scd"))&&r.__esModule?r:{default:r}}),_.register("dWbd5",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.hclLong=e.exports.default=void 0;var r=_("4xVlj"),n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(_("b3Scd"));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}function i(e){return function(t,o){var i=e((t=(0,r.hcl)(t)).h,(o=(0,r.hcl)(o)).h),a=(0,n.default)(t.c,o.c),u=(0,n.default)(t.l,o.l),l=(0,n.default)(t.opacity,o.opacity);return function(e){return t.h=i(e),t.c=a(e),t.l=u(e),t.opacity=l(e),t+""}}}var a=i(n.hue);e.exports.default=a;var u=i(n.default);e.exports.hclLong=u}),_.register("1chdf",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=e.exports.cubehelixLong=void 0;var r=_("4xVlj"),n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(_("b3Scd"));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}function i(e){return function t(o){function i(t,i){var a=e((t=(0,r.cubehelix)(t)).h,(i=(0,r.cubehelix)(i)).h),u=(0,n.default)(t.s,i.s),l=(0,n.default)(t.l,i.l),s=(0,n.default)(t.opacity,i.opacity);return function(e){return t.h=a(e),t.s=u(e),t.l=l(Math.pow(e,o)),t.opacity=s(e),t+""}}return o=+o,i.gamma=t,i}(1)}var a=i(n.hue);e.exports.default=a;var u=i(n.default);e.exports.cubehelixLong=u}),_.register("1d2kq",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){void 0===t&&(t=e,e=n.default);for(var r=0,o=t.length-1,i=t[0],a=Array(o<0?0:o);r<o;)a[r]=e(i,i=t[++r]);return function(e){var t=Math.max(0,Math.min(o-1,Math.floor(e*=o)));return a[t](e-t)}};var r,n=(r=_("k8gaa"))&&r.__esModule?r:{default:r}}),_.register("7rbIB",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(var r=Array(t),n=0;n<t;++n)r[n]=e(n/(t-1));return r}}),_.register("jgTuH",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){return e}}}),_.register("jerFr",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return+e}}),_.register("3ZXxn",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o,i){var a,u=(0,r.tickStep)(e,t,o);switch((i=(0,n.formatSpecifier)(null==i?",f":i)).type){case"s":var l=Math.max(Math.abs(e),Math.abs(t));return null!=i.precision||isNaN(a=(0,n.precisionPrefix)(u,l))||(i.precision=a),(0,n.formatPrefix)(i,l);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(a=(0,n.precisionRound)(u,Math.max(Math.abs(e),Math.abs(t))))||(i.precision=a-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(a=(0,n.precisionFixed)(u))||(i.precision=a-("%"===i.type)*2)}return(0,n.format)(i)};var r=_("baM4h"),n=_("itzmc")}),_.register("itzmc",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),Object.defineProperty(e.exports,"FormatSpecifier",{enumerable:!0,get:function(){return o.FormatSpecifier}}),Object.defineProperty(e.exports,"format",{enumerable:!0,get:function(){return r.format}}),Object.defineProperty(e.exports,"formatDefaultLocale",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e.exports,"formatLocale",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e.exports,"formatPrefix",{enumerable:!0,get:function(){return r.formatPrefix}}),Object.defineProperty(e.exports,"formatSpecifier",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e.exports,"precisionFixed",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e.exports,"precisionPrefix",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e.exports,"precisionRound",{enumerable:!0,get:function(){return u.default}});var r=c(_("52crh")),n=l(_("jdHNs")),o=c(_("22nPw")),i=l(_("lzwe8")),a=l(_("9ymIQ")),u=l(_("dK8tE"));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}}),_.register("52crh",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=u,e.exports.formatPrefix=e.exports.format=void 0;var r,n,o,i,a=(r=_("jdHNs"))&&r.__esModule?r:{default:r};function u(t){return n=(0,a.default)(t),e.exports.format=o=n.format,e.exports.formatPrefix=i=n.formatPrefix,n}e.exports.format=o,e.exports.formatPrefix=i,u({thousands:",",grouping:[3],currency:["$",""]})}),_.register("jdHNs",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=void 0===e.grouping||void 0===e.thousands?s.default:(0,n.default)(f.call(e.grouping,Number),e.thousands+""),c=void 0===e.currency?"":e.currency[0]+"",d=void 0===e.currency?"":e.currency[1]+"",h=void 0===e.decimal?".":e.decimal+"",y=void 0===e.numerals?s.default:(0,o.default)(f.call(e.numerals,String)),v=void 0===e.percent?"%":e.percent+"",m=void 0===e.minus?"−":e.minus+"",g=void 0===e.nan?"NaN":e.nan+"";function b(e){var r=(e=(0,i.default)(e)).fill,n=e.align,o=e.sign,s=e.symbol,f=e.zero,b=e.width,x=e.comma,_=e.precision,S=e.trim,w=e.type;// The "n" type is an alias for ",g".
"n"===w?(x=!0,w="g"):u.default[w]||(void 0===_&&(_=12),S=!0,w="g"),(f||"0"===r&&"="===n)&&(f=!0,r="0",n="=");// For SI-prefix, the suffix is lazily computed.
var P="$"===s?c:"#"===s&&/[boxX]/.test(w)?"0"+w.toLowerCase():"",O="$"===s?d:/[%p]/.test(w)?v:"",E=u.default[w],j=/[defgprs%]/.test(w);// What format function should we use?
function k(e){var i,u,s,c=P,d=O;if("c"===w)d=E(e)+d,e="";else{var v=(e=+e)<0||1/e<0;// Perform the initial formatting.
// grouped, and fractional or exponential “suffix” part that is not.
if(e=isNaN(e)?g:E(Math.abs(e),_),S&&(e=(0,a.default)(e)),v&&0==+e&&"+"!==o&&(v=!1),c=(v?"("===o?o:m:"-"===o||"("===o?"":o)+c,d=("s"===w?p[8+l.prefixExponent/3]:"")+d+(v&&"("===o?")":""),j){for(i=-1,u=e.length;++i<u;)if(48>(s=e.charCodeAt(i))||s>57){d=(46===s?h+e.slice(i+1):e.slice(i))+d,e=e.slice(0,i);break}}}// If the fill character is not "0", grouping is applied before padding.
x&&!f&&(e=t(e,1/0));var k=c.length+e.length+d.length,M=k<b?Array(b-k+1).join(r):"";// If the fill character is "0", grouping is applied after padding.
switch(x&&f&&(e=t(M+e,M.length?b-d.length:1/0),M=""),n){case"<":e=c+e+d+M;break;case"=":e=c+M+e+d;break;case"^":e=M.slice(0,k=M.length>>1)+c+e+d+M.slice(k);break;default:e=M+c+e+d}return y(e)}return(// or clamp the specified precision to the supported range.
// For significant precision, it must be in [1, 21].
// For fixed precision, it must be in [0, 20].
_=void 0===_?6:/[gprs]/.test(w)?Math.max(1,Math.min(21,_)):Math.max(0,Math.min(20,_)),k.toString=function(){return e+""},k)}return{format:b,formatPrefix:function(e,t){var n=b(((e=(0,i.default)(e)).type="f",e)),o=3*Math.max(-8,Math.min(8,Math.floor((0,r.default)(t)/3))),a=Math.pow(10,-o),u=p[8+o/3];return function(e){return n(a*e)+u}}}};var r=c(_("9WmdL")),n=c(_("bR58D")),o=c(_("2gEYt")),i=c(_("22nPw")),a=c(_("sIRm4")),u=c(_("9AK8c")),l=_("csczD"),s=c(_("jJFZc"));function c(e){return e&&e.__esModule?e:{default:e}}var f=Array.prototype.map,p=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"]}),_.register("9WmdL",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return(e=(0,r.formatDecimalParts)(Math.abs(e)))?e[1]:NaN};var r=_("ek6ef")}),_.register("ek6ef",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}// Computes the decimal coefficient and exponent of the specified number x with
,e.exports.formatDecimalParts=// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function(e,t){if((r=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;// NaN, ±Infinity
var r,n=e.slice(0,r);// The string returned by toExponential either has the form \d\.\d+e[-+]\d+
// (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
return[n.length>1?n[0]+n.slice(2):n,+e.slice(r+1)]}}),_.register("bR58D",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return function(r,n){for(var o=r.length,i=[],a=0,u=e[0],l=0;o>0&&u>0&&(l+u+1>n&&(u=Math.max(1,n-l)),i.push(r.substring(o-=u,o+u)),!((l+=u+1)>n));)u=e[a=(a+1)%e.length];return i.reverse().join(t)}}}),_.register("2gEYt",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(t){return t.replace(/[0-9]/g,function(t){return e[+t]})}}}),_.register("22nPw",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.FormatSpecifier=o,e.exports.default=n;// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var r=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function n(e){var t;if(!(t=r.exec(e)))throw Error("invalid format: "+e);return new o({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}function o(e){this.fill=void 0===e.fill?" ":e.fill+"",this.align=void 0===e.align?">":e.align+"",this.sign=void 0===e.sign?"-":e.sign+"",this.symbol=void 0===e.symbol?"":e.symbol+"",this.zero=!!e.zero,this.width=void 0===e.width?void 0:+e.width,this.comma=!!e.comma,this.precision=void 0===e.precision?void 0:+e.precision,this.trim=!!e.trim,this.type=void 0===e.type?"":e.type+""}n.prototype=o.prototype,o.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type}}),_.register("sIRm4",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function(e){r:for(var t,r=e.length,n=1,o=-1;n<r;++n)switch(e[n]){case".":o=t=n;break;case"0":0===o&&(o=n),t=n;break;default:if(!+e[n])break r;o>0&&(o=0)}return o>0?e.slice(0,o)+e.slice(t+1):e}}),_.register("9AK8c",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=i(_("ek6ef")),n=i(_("csczD")),o=i(_("lNpva"));function i(e){return e&&e.__esModule?e:{default:e}}var a={"%":(e,t)=>(100*e).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:r.default,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>(0,o.default)(100*e,t),r:o.default,s:n.default,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};e.exports.default=a}),_.register("csczD",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(t,o){var i=(0,n.formatDecimalParts)(t,o);if(!i)return t+"";var a=i[0],u=i[1],l=u-(e.exports.prefixExponent=r=3*Math.max(-8,Math.min(8,Math.floor(u/3))))+1,s=a.length;return l===s?a:l>s?a+Array(l-s+1).join("0"):l>0?a.slice(0,l)+"."+a.slice(l):"0."+Array(1-l).join("0")+(0,n.formatDecimalParts)(t,Math.max(0,o+l-1))[0];// less than 1y!
},e.exports.prefixExponent=void 0;var r,n=_("ek6ef");e.exports.prefixExponent=r}),_.register("lNpva",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var n=(0,r.formatDecimalParts)(e,t);if(!n)return e+"";var o=n[0],i=n[1];return i<0?"0."+Array(-i).join("0")+o:o.length>i+1?o.slice(0,i+1)+"."+o.slice(i+1):o+Array(i-o.length+2).join("0")};var r=_("ek6ef")}),_.register("jJFZc",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e}}),_.register("lzwe8",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return Math.max(0,-(0,n.default)(Math.abs(e)))};var r,n=(r=_("9WmdL"))&&r.__esModule?r:{default:r}}),_.register("9ymIQ",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,n.default)(t)/3)))-(0,n.default)(Math.abs(e)))};var r,n=(r=_("9WmdL"))&&r.__esModule?r:{default:r}}),_.register("dK8tE",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t=Math.abs(t)-(e=Math.abs(e)),Math.max(0,(0,n.default)(t)-(0,n.default)(e))+1};var r,n=(r=_("9WmdL"))&&r.__esModule?r:{default:r}}),_.register("aEI3x",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function e(){let t=h((0,a.transformer)()).domain([1,10]);return t.copy=()=>(0,a.copy)(t,e()).base(t.base()),u.initRange.apply(t,arguments),t},e.exports.loggish=h;var r,n=_("baM4h"),o=_("itzmc"),i=(r=_("3CPJt"))&&r.__esModule?r:{default:r},a=_("dTLbh"),u=_("98nei");function l(e){return Math.log(e)}function s(e){return Math.exp(e)}function c(e){return-Math.log(-e)}function f(e){return-Math.exp(-e)}function p(e){return isFinite(e)?+("1e"+e):e<0?0:e}function d(e){return(t,r)=>-e(-t,r)}function h(e){let t,r;let a=e(l,s),u=a.domain,h=10;function y(){var n,o;return t=(n=h)===Math.E?Math.log:10===n&&Math.log10||2===n&&Math.log2||(n=Math.log(n),e=>Math.log(e)/n),r=10===(o=h)?p:o===Math.E?Math.exp:e=>Math.pow(o,e),u()[0]<0?(t=d(t),r=d(r),e(c,f)):e(l,s),a}return a.base=function(e){return arguments.length?(h=+e,y()):h},a.domain=function(e){return arguments.length?(u(e),y()):u()},a.ticks=e=>{let o,i;let a=u(),l=a[0],s=a[a.length-1],c=s<l;c&&([l,s]=[s,l]);let f=t(l),p=t(s),d=null==e?10:+e,y=[];if(!(h%1)&&p-f<d){if(f=Math.floor(f),p=Math.ceil(p),l>0){for(;f<=p;++f)for(o=1;o<h;++o)if(!((i=f<0?o/r(-f):o*r(f))<l)){if(i>s)break;y.push(i)}}else for(;f<=p;++f)for(o=h-1;o>=1;--o)if(!((i=f>0?o/r(-f):o*r(f))<l)){if(i>s)break;y.push(i)}2*y.length<d&&(y=(0,n.ticks)(l,s,d))}else y=(0,n.ticks)(f,p,Math.min(p-f,d)).map(r);return c?y.reverse():y},a.tickFormat=(e,n)=>{if(null==e&&(e=10),null==n&&(n=10===h?"s":","),"function"!=typeof n&&(h%1||null!=(n=(0,o.formatSpecifier)(n)).precision||(n.trim=!0),n=(0,o.format)(n)),e===1/0)return n;let i=Math.max(1,h*e/a.ticks().length);// TODO fast estimate?
return e=>{let o=e/r(Math.round(t(e)));return o*h<h-.5&&(o*=h),o<=i?n(e):""}},a.nice=()=>u((0,i.default)(u(),{floor:e=>r(Math.floor(t(e))),ceil:e=>r(Math.ceil(t(e)))})),a}}),_.register("3CPJt",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){e=e.slice();var r,n=0,o=e.length-1,i=e[n],a=e[o];return a<i&&(r=n,n=o,o=r,r=i,i=a,a=r),e[n]=t.floor(i),e[o]=t.ceil(a),e}}),_.register("bzrFz",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function e(){var t=u((0,n.transformer)());return t.copy=function(){return(0,n.copy)(t,e()).constant(t.constant())},o.initRange.apply(t,arguments)},e.exports.symlogish=u;var r=_("hvSDx"),n=_("dTLbh"),o=_("98nei");function i(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function a(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function u(e){var t=1,n=e(i(1),a(t));return n.constant=function(r){return arguments.length?e(i(t=+r),a(t)):t},(0,r.linearish)(n)}}),_.register("cpAbf",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=s,e.exports.powish=l,e.exports.sqrt=function(){return s.apply(null,arguments).exponent(.5)};var r=_("hvSDx"),n=_("dTLbh"),o=_("98nei");function i(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function a(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function u(e){return e<0?-e*e:e*e}function l(e){var t=e(n.identity,n.identity),o=1;return t.exponent=function(t){return arguments.length?1==(o=+t)?e(n.identity,n.identity):.5===o?e(a,u):e(i(o),i(1/o)):o},(0,r.linearish)(t)}function s(){var e=l((0,n.transformer)());return e.copy=function(){return(0,n.copy)(e,s()).exponent(e.exponent())},o.initRange.apply(e,arguments),e}}),_.register("5lxEG",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function e(){var t,a=(0,r.default)(),l=[0,1],s=!1;function c(e){var r,n=Math.sign(r=a(e))*Math.sqrt(Math.abs(r));return isNaN(n)?t:s?Math.round(n):n}return c.invert=function(e){return a.invert(u(e))},c.domain=function(e){return arguments.length?(a.domain(e),c):a.domain()},c.range=function(e){return arguments.length?(a.range((l=Array.from(e,i.default)).map(u)),c):l.slice()},c.rangeRound=function(e){return c.range(e).round(!0)},c.round=function(e){return arguments.length?(s=!!e,c):s},c.clamp=function(e){return arguments.length?(a.clamp(e),c):a.clamp()},c.unknown=function(e){return arguments.length?(t=e,c):t},c.copy=function(){return e(a.domain(),l).round(s).clamp(a.clamp()).unknown(t)},n.initRange.apply(c,arguments),(0,o.linearish)(c)};var r=a(_("dTLbh")),n=_("98nei"),o=_("hvSDx"),i=a(_("jerFr"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return Math.sign(e)*e*e}}),_.register("67PVh",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function e(){var t,o=[],i=[],a=[];function u(){var e=0,t=Math.max(1,i.length);for(a=Array(t-1);++e<t;)a[e-1]=(0,r.quantileSorted)(o,e/t);return l}function l(e){return null==e||isNaN(e=+e)?t:i[(0,r.bisect)(a,e)]}return l.invertExtent=function(e){var t=i.indexOf(e);return t<0?[NaN,NaN]:[t>0?a[t-1]:o[0],t<a.length?a[t]:o[o.length-1]]},l.domain=function(e){if(!arguments.length)return o.slice();for(let t of(o=[],e))null==t||isNaN(t=+t)||o.push(t);return o.sort(r.ascending),u()},l.range=function(e){return arguments.length?(i=Array.from(e),u()):i.slice()},l.unknown=function(e){return arguments.length?(t=e,l):t},l.quantiles=function(){return a.slice()},l.copy=function(){return e().domain(o).range(i).unknown(t)},n.initRange.apply(l,arguments)};var r=_("baM4h"),n=_("98nei")}),_.register("mgOAc",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function e(){var t,i=0,a=1,u=1,l=[.5],s=[0,1];function c(e){return null!=e&&e<=e?s[(0,r.bisect)(l,e,0,u)]:t}function f(){var e=-1;for(l=Array(u);++e<u;)l[e]=((e+1)*a-(e-u)*i)/(u+1);return c}return c.domain=function(e){return arguments.length?([i,a]=e,i=+i,a=+a,f()):[i,a]},c.range=function(e){return arguments.length?(u=(s=Array.from(e)).length-1,f()):s.slice()},c.invertExtent=function(e){var t=s.indexOf(e);return t<0?[NaN,NaN]:t<1?[i,l[0]]:t>=u?[l[u-1],a]:[l[t-1],l[t]]},c.unknown=function(e){return arguments.length&&(t=e),c},c.thresholds=function(){return l.slice()},c.copy=function(){return e().domain([i,a]).range(s).unknown(t)},o.initRange.apply((0,n.linearish)(c),arguments)};var r=_("baM4h"),n=_("hvSDx"),o=_("98nei")}),_.register("g6ge9",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function e(){var t,o=[.5],i=[0,1],a=1;function u(e){return null!=e&&e<=e?i[(0,r.bisect)(o,e,0,a)]:t}return u.domain=function(e){return arguments.length?(a=Math.min((o=Array.from(e)).length,i.length-1),u):o.slice()},u.range=function(e){return arguments.length?(i=Array.from(e),a=Math.min(o.length,i.length-1),u):i.slice()},u.invertExtent=function(e){var t=i.indexOf(e);return[o[t-1],o[t]]},u.unknown=function(e){return arguments.length?(t=e,u):t},u.copy=function(){return e().domain(o).range(i).unknown(t)},n.initRange.apply(u,arguments)};var r=_("baM4h"),n=_("98nei")}),_.register("617BV",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.calendar=f,e.exports.default=function(){return a.initRange.apply(f(n.timeTicks,n.timeTickInterval,n.timeYear,n.timeMonth,n.timeWeek,n.timeDay,n.timeHour,n.timeMinute,n.timeSecond,o.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)};var r,n=_("kym6t"),o=_("2qXVT"),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}(_("dTLbh")),a=_("98nei"),u=(r=_("3CPJt"))&&r.__esModule?r:{default:r};function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function s(e){return new Date(e)}function c(e){return e instanceof Date?+e:+new Date(+e)}function f(e,t,r,n,o,a,l,p,d,h){var y=(0,i.default)(),v=y.invert,m=y.domain,g=h(".%L"),b=h(":%S"),x=h("%I:%M"),_=h("%I %p"),S=h("%a %d"),w=h("%b %d"),P=h("%B"),O=h("%Y");function E(e){return(d(e)<e?g:p(e)<e?b:l(e)<e?x:a(e)<e?_:n(e)<e?o(e)<e?S:w:r(e)<e?P:O)(e)}return y.invert=function(e){return new Date(v(e))},y.domain=function(e){return arguments.length?m(Array.from(e,c)):m().map(s)},y.ticks=function(t){var r=m();return e(r[0],r[r.length-1],null==t?10:t)},y.tickFormat=function(e,t){return null==t?E:h(t)},y.nice=function(e){var r=m();return e&&"function"==typeof e.range||(e=t(r[0],r[r.length-1],null==e?10:e)),e?m((0,u.default)(r,e)):y},y.copy=function(){return(0,i.copy)(y,f(e,t,r,n,o,a,l,p,d,h))},y}}),_.register("kym6t",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),Object.defineProperty(e.exports,"timeDay",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e.exports,"timeDays",{enumerable:!0,get:function(){return l.days}}),Object.defineProperty(e.exports,"timeFriday",{enumerable:!0,get:function(){return s.friday}}),Object.defineProperty(e.exports,"timeFridays",{enumerable:!0,get:function(){return s.fridays}}),Object.defineProperty(e.exports,"timeHour",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e.exports,"timeHours",{enumerable:!0,get:function(){return u.hours}}),Object.defineProperty(e.exports,"timeInterval",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e.exports,"timeMillisecond",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e.exports,"timeMilliseconds",{enumerable:!0,get:function(){return o.milliseconds}}),Object.defineProperty(e.exports,"timeMinute",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e.exports,"timeMinutes",{enumerable:!0,get:function(){return a.minutes}}),Object.defineProperty(e.exports,"timeMonday",{enumerable:!0,get:function(){return s.monday}}),Object.defineProperty(e.exports,"timeMondays",{enumerable:!0,get:function(){return s.mondays}}),Object.defineProperty(e.exports,"timeMonth",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e.exports,"timeMonths",{enumerable:!0,get:function(){return c.months}}),Object.defineProperty(e.exports,"timeSaturday",{enumerable:!0,get:function(){return s.saturday}}),Object.defineProperty(e.exports,"timeSaturdays",{enumerable:!0,get:function(){return s.saturdays}}),Object.defineProperty(e.exports,"timeSecond",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e.exports,"timeSeconds",{enumerable:!0,get:function(){return i.seconds}}),Object.defineProperty(e.exports,"timeSunday",{enumerable:!0,get:function(){return s.sunday}}),Object.defineProperty(e.exports,"timeSundays",{enumerable:!0,get:function(){return s.sundays}}),Object.defineProperty(e.exports,"timeThursday",{enumerable:!0,get:function(){return s.thursday}}),Object.defineProperty(e.exports,"timeThursdays",{enumerable:!0,get:function(){return s.thursdays}}),Object.defineProperty(e.exports,"timeTickInterval",{enumerable:!0,get:function(){return g.timeTickInterval}}),Object.defineProperty(e.exports,"timeTicks",{enumerable:!0,get:function(){return g.timeTicks}}),Object.defineProperty(e.exports,"timeTuesday",{enumerable:!0,get:function(){return s.tuesday}}),Object.defineProperty(e.exports,"timeTuesdays",{enumerable:!0,get:function(){return s.tuesdays}}),Object.defineProperty(e.exports,"timeWednesday",{enumerable:!0,get:function(){return s.wednesday}}),Object.defineProperty(e.exports,"timeWednesdays",{enumerable:!0,get:function(){return s.wednesdays}}),Object.defineProperty(e.exports,"timeWeek",{enumerable:!0,get:function(){return s.sunday}}),Object.defineProperty(e.exports,"timeWeeks",{enumerable:!0,get:function(){return s.sundays}}),Object.defineProperty(e.exports,"timeYear",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e.exports,"timeYears",{enumerable:!0,get:function(){return f.years}}),Object.defineProperty(e.exports,"utcDay",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e.exports,"utcDays",{enumerable:!0,get:function(){return h.utcDays}}),Object.defineProperty(e.exports,"utcFriday",{enumerable:!0,get:function(){return y.utcFriday}}),Object.defineProperty(e.exports,"utcFridays",{enumerable:!0,get:function(){return y.utcFridays}}),Object.defineProperty(e.exports,"utcHour",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e.exports,"utcHours",{enumerable:!0,get:function(){return d.utcHours}}),Object.defineProperty(e.exports,"utcMillisecond",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e.exports,"utcMilliseconds",{enumerable:!0,get:function(){return o.milliseconds}}),Object.defineProperty(e.exports,"utcMinute",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(e.exports,"utcMinutes",{enumerable:!0,get:function(){return p.utcMinutes}}),Object.defineProperty(e.exports,"utcMonday",{enumerable:!0,get:function(){return y.utcMonday}}),Object.defineProperty(e.exports,"utcMondays",{enumerable:!0,get:function(){return y.utcMondays}}),Object.defineProperty(e.exports,"utcMonth",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(e.exports,"utcMonths",{enumerable:!0,get:function(){return v.utcMonths}}),Object.defineProperty(e.exports,"utcSaturday",{enumerable:!0,get:function(){return y.utcSaturday}}),Object.defineProperty(e.exports,"utcSaturdays",{enumerable:!0,get:function(){return y.utcSaturdays}}),Object.defineProperty(e.exports,"utcSecond",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e.exports,"utcSeconds",{enumerable:!0,get:function(){return i.seconds}}),Object.defineProperty(e.exports,"utcSunday",{enumerable:!0,get:function(){return y.utcSunday}}),Object.defineProperty(e.exports,"utcSundays",{enumerable:!0,get:function(){return y.utcSundays}}),Object.defineProperty(e.exports,"utcThursday",{enumerable:!0,get:function(){return y.utcThursday}}),Object.defineProperty(e.exports,"utcThursdays",{enumerable:!0,get:function(){return y.utcThursdays}}),Object.defineProperty(e.exports,"utcTickInterval",{enumerable:!0,get:function(){return g.utcTickInterval}}),Object.defineProperty(e.exports,"utcTicks",{enumerable:!0,get:function(){return g.utcTicks}}),Object.defineProperty(e.exports,"utcTuesday",{enumerable:!0,get:function(){return y.utcTuesday}}),Object.defineProperty(e.exports,"utcTuesdays",{enumerable:!0,get:function(){return y.utcTuesdays}}),Object.defineProperty(e.exports,"utcWednesday",{enumerable:!0,get:function(){return y.utcWednesday}}),Object.defineProperty(e.exports,"utcWednesdays",{enumerable:!0,get:function(){return y.utcWednesdays}}),Object.defineProperty(e.exports,"utcWeek",{enumerable:!0,get:function(){return y.utcSunday}}),Object.defineProperty(e.exports,"utcWeeks",{enumerable:!0,get:function(){return y.utcSundays}}),Object.defineProperty(e.exports,"utcYear",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e.exports,"utcYears",{enumerable:!0,get:function(){return m.utcYears}});var r,n=(r=_("bSxHc"))&&r.__esModule?r:{default:r},o=x(_("hRCmg")),i=x(_("jFJeY")),a=x(_("izQ7P")),u=x(_("4kq4i")),l=x(_("kSMPp")),s=_("exwcm"),c=x(_("4YFnz")),f=x(_("lzVRI")),p=x(_("9FVE8")),d=x(_("4wGkR")),h=x(_("i3XOj")),y=_("kSPvm"),v=x(_("9ILJ1")),m=x(_("4hSHL")),g=_("c02Yy");function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(b=function(e){return e?r:t})(e)}function x(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=b(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}}),_.register("bSxHc",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function e(t,o,i,a){function u(e){return t(e=0==arguments.length?new Date:new Date(+e)),e}return u.floor=function(e){return t(e=new Date(+e)),e},u.ceil=function(e){return t(e=new Date(e-1)),o(e,1),t(e),e},u.round=function(e){var t=u(e),r=u.ceil(e);return e-t<r-e?t:r},u.offset=function(e,t){return o(e=new Date(+e),null==t?1:Math.floor(t)),e},u.range=function(e,r,n){var i,a=[];if(e=u.ceil(e),n=null==n?1:Math.floor(n),!(e<r)||!(n>0))return a;// also handles Invalid Date
do a.push(i=new Date(+e)),o(e,n),t(e);while(i<e&&e<r)return a},u.filter=function(r){return e(function(e){if(e>=e)for(;t(e),!r(e);)e.setTime(e-1)},function(e,t){if(e>=e){if(t<0)for(;++t<=0;)for(;o(e,-1),!r(e););// eslint-disable-line no-empty
else for(;--t>=0;)for(;o(e,1),!r(e););// eslint-disable-line no-empty
}})},i&&(u.count=function(e,o){return r.setTime(+e),n.setTime(+o),t(r),t(n),Math.floor(i(r,n))},u.every=function(e){return isFinite(e=Math.floor(e))&&e>0?e>1?u.filter(a?function(t){return a(t)%e==0}:function(t){return u.count(0,t)%e==0}):u:null}),u};var r=new Date,n=new Date}),_.register("hRCmg",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.milliseconds=e.exports.default=void 0;var r,n=(r=_("bSxHc"))&&r.__esModule?r:{default:r},o=(0,n.default)(function(){},function(e,t){e.setTime(+e+t)},function(e,t){return t-e});o.every=function(e){return isFinite(e=Math.floor(e))&&e>0?e>1?(0,n.default)(function(t){t.setTime(Math.floor(t/e)*e)},function(t,r){t.setTime(+t+r*e)},function(t,r){return(r-t)/e}):o:null},e.exports.default=o;var i=o.range;e.exports.milliseconds=i}),_.register("jFJeY",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.seconds=e.exports.default=void 0;var r,n=(r=_("bSxHc"))&&r.__esModule?r:{default:r},o=_("188mN"),i=(0,n.default)(function(e){e.setTime(e-e.getMilliseconds())},function(e,t){e.setTime(+e+t*o.durationSecond)},function(e,t){return(t-e)/o.durationSecond},function(e){return e.getUTCSeconds()});e.exports.default=i;var a=i.range;e.exports.seconds=a}),_.register("188mN",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.durationYear=e.exports.durationWeek=e.exports.durationSecond=e.exports.durationMonth=e.exports.durationMinute=e.exports.durationHour=e.exports.durationDay=void 0,e.exports.durationSecond=1e3,e.exports.durationMinute=6e4;e.exports.durationHour=36e5;let r=864e5;e.exports.durationDay=r;let n=7*r;e.exports.durationWeek=n;let o=30*r;e.exports.durationMonth=o;let i=365*r;e.exports.durationYear=i}),_.register("izQ7P",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.minutes=e.exports.default=void 0;var r,n=(r=_("bSxHc"))&&r.__esModule?r:{default:r},o=_("188mN"),i=(0,n.default)(function(e){e.setTime(e-e.getMilliseconds()-e.getSeconds()*o.durationSecond)},function(e,t){e.setTime(+e+t*o.durationMinute)},function(e,t){return(t-e)/o.durationMinute},function(e){return e.getMinutes()});e.exports.default=i;var a=i.range;e.exports.minutes=a}),_.register("4kq4i",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.hours=e.exports.default=void 0;var r,n=(r=_("bSxHc"))&&r.__esModule?r:{default:r},o=_("188mN"),i=(0,n.default)(function(e){e.setTime(e-e.getMilliseconds()-e.getSeconds()*o.durationSecond-e.getMinutes()*o.durationMinute)},function(e,t){e.setTime(+e+t*o.durationHour)},function(e,t){return(t-e)/o.durationHour},function(e){return e.getHours()});e.exports.default=i;var a=i.range;e.exports.hours=a}),_.register("kSMPp",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=e.exports.days=void 0;var r,n=(r=_("bSxHc"))&&r.__esModule?r:{default:r},o=_("188mN"),i=(0,n.default)(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*o.durationMinute)/o.durationDay,e=>e.getDate()-1);e.exports.default=i;var a=i.range;e.exports.days=a}),_.register("exwcm",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.wednesdays=e.exports.wednesday=e.exports.tuesdays=e.exports.tuesday=e.exports.thursdays=e.exports.thursday=e.exports.sundays=e.exports.sunday=e.exports.saturdays=e.exports.saturday=e.exports.mondays=e.exports.monday=e.exports.fridays=e.exports.friday=void 0;var r,n=(r=_("bSxHc"))&&r.__esModule?r:{default:r},o=_("188mN");function i(e){return(0,n.default)(function(t){t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},function(e,t){e.setDate(e.getDate()+7*t)},function(e,t){return(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*o.durationMinute)/o.durationWeek})}var a=i(0);e.exports.sunday=a;var u=i(1);e.exports.monday=u;var l=i(2);e.exports.tuesday=l;var s=i(3);e.exports.wednesday=s;var c=i(4);e.exports.thursday=c;var f=i(5);e.exports.friday=f;var p=i(6);e.exports.saturday=p;var d=a.range;e.exports.sundays=d;var h=u.range;e.exports.mondays=h;var y=l.range;e.exports.tuesdays=y;var v=s.range;e.exports.wednesdays=v;var m=c.range;e.exports.thursdays=m;var g=f.range;e.exports.fridays=g;var b=p.range;e.exports.saturdays=b}),_.register("4YFnz",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.months=e.exports.default=void 0;var r,n=(0,((r=_("bSxHc"))&&r.__esModule?r:{default:r}).default)(function(e){e.setDate(1),e.setHours(0,0,0,0)},function(e,t){e.setMonth(e.getMonth()+t)},function(e,t){return t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12},function(e){return e.getMonth()});e.exports.default=n;var o=n.range;e.exports.months=o}),_.register("lzVRI",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.years=e.exports.default=void 0;var r,n=(r=_("bSxHc"))&&r.__esModule?r:{default:r},o=(0,n.default)(function(e){e.setMonth(0,1),e.setHours(0,0,0,0)},function(e,t){e.setFullYear(e.getFullYear()+t)},function(e,t){return t.getFullYear()-e.getFullYear()},function(e){return e.getFullYear()});o.every=function(e){return isFinite(e=Math.floor(e))&&e>0?(0,n.default)(function(t){t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,r){t.setFullYear(t.getFullYear()+r*e)}):null},e.exports.default=o;var i=o.range;e.exports.years=i}),_.register("9FVE8",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.utcMinutes=e.exports.default=void 0;var r,n=(r=_("bSxHc"))&&r.__esModule?r:{default:r},o=_("188mN"),i=(0,n.default)(function(e){e.setUTCSeconds(0,0)},function(e,t){e.setTime(+e+t*o.durationMinute)},function(e,t){return(t-e)/o.durationMinute},function(e){return e.getUTCMinutes()});e.exports.default=i;var a=i.range;e.exports.utcMinutes=a}),_.register("4wGkR",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.utcHours=e.exports.default=void 0;var r,n=(r=_("bSxHc"))&&r.__esModule?r:{default:r},o=_("188mN"),i=(0,n.default)(function(e){e.setUTCMinutes(0,0,0)},function(e,t){e.setTime(+e+t*o.durationHour)},function(e,t){return(t-e)/o.durationHour},function(e){return e.getUTCHours()});e.exports.default=i;var a=i.range;e.exports.utcHours=a}),_.register("i3XOj",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.utcDays=e.exports.default=void 0;var r,n=(r=_("bSxHc"))&&r.__esModule?r:{default:r},o=_("188mN"),i=(0,n.default)(function(e){e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCDate(e.getUTCDate()+t)},function(e,t){return(t-e)/o.durationDay},function(e){return e.getUTCDate()-1});e.exports.default=i;var a=i.range;e.exports.utcDays=a}),_.register("kSPvm",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.utcWednesdays=e.exports.utcWednesday=e.exports.utcTuesdays=e.exports.utcTuesday=e.exports.utcThursdays=e.exports.utcThursday=e.exports.utcSundays=e.exports.utcSunday=e.exports.utcSaturdays=e.exports.utcSaturday=e.exports.utcMondays=e.exports.utcMonday=e.exports.utcFridays=e.exports.utcFriday=void 0;var r,n=(r=_("bSxHc"))&&r.__esModule?r:{default:r},o=_("188mN");function i(e){return(0,n.default)(function(t){t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},function(e,t){e.setUTCDate(e.getUTCDate()+7*t)},function(e,t){return(t-e)/o.durationWeek})}var a=i(0);e.exports.utcSunday=a;var u=i(1);e.exports.utcMonday=u;var l=i(2);e.exports.utcTuesday=l;var s=i(3);e.exports.utcWednesday=s;var c=i(4);e.exports.utcThursday=c;var f=i(5);e.exports.utcFriday=f;var p=i(6);e.exports.utcSaturday=p;var d=a.range;e.exports.utcSundays=d;var h=u.range;e.exports.utcMondays=h;var y=l.range;e.exports.utcTuesdays=y;var v=s.range;e.exports.utcWednesdays=v;var m=c.range;e.exports.utcThursdays=m;var g=f.range;e.exports.utcFridays=g;var b=p.range;e.exports.utcSaturdays=b}),_.register("9ILJ1",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.utcMonths=e.exports.default=void 0;var r,n=(0,((r=_("bSxHc"))&&r.__esModule?r:{default:r}).default)(function(e){e.setUTCDate(1),e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCMonth(e.getUTCMonth()+t)},function(e,t){return t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12},function(e){return e.getUTCMonth()});e.exports.default=n;var o=n.range;e.exports.utcMonths=o}),_.register("4hSHL",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.utcYears=e.exports.default=void 0;var r,n=(r=_("bSxHc"))&&r.__esModule?r:{default:r},o=(0,n.default)(function(e){e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCFullYear(e.getUTCFullYear()+t)},function(e,t){return t.getUTCFullYear()-e.getUTCFullYear()},function(e){return e.getUTCFullYear()});o.every=function(e){return isFinite(e=Math.floor(e))&&e>0?(0,n.default)(function(t){t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,r){t.setUTCFullYear(t.getUTCFullYear()+r*e)}):null},e.exports.default=o;var i=o.range;e.exports.utcYears=i}),_.register("c02Yy",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.utcTicks=e.exports.utcTickInterval=e.exports.timeTicks=e.exports.timeTickInterval=void 0;var r=_("baM4h"),n=_("188mN"),o=g(_("hRCmg")),i=g(_("jFJeY")),a=g(_("izQ7P")),u=g(_("4kq4i")),l=g(_("kSMPp")),s=_("exwcm"),c=g(_("4YFnz")),f=g(_("lzVRI")),p=g(_("9FVE8")),d=g(_("4wGkR")),h=g(_("i3XOj")),y=_("kSPvm"),v=g(_("9ILJ1")),m=g(_("4hSHL"));function g(e){return e&&e.__esModule?e:{default:e}}function b(e,t,a,u,l,s){let c=[[i.default,1,n.durationSecond],[i.default,5,5*n.durationSecond],[i.default,15,15*n.durationSecond],[i.default,30,30*n.durationSecond],[s,1,n.durationMinute],[s,5,5*n.durationMinute],[s,15,15*n.durationMinute],[s,30,30*n.durationMinute],[l,1,n.durationHour],[l,3,3*n.durationHour],[l,6,6*n.durationHour],[l,12,12*n.durationHour],[u,1,n.durationDay],[u,2,2*n.durationDay],[a,1,n.durationWeek],[t,1,n.durationMonth],[t,3,3*n.durationMonth],[e,1,n.durationYear]];function f(t,i,a){let u=Math.abs(i-t)/a,l=(0,r.bisector)(([,,e])=>e).right(c,u);if(l===c.length)return e.every((0,r.tickStep)(t/n.durationYear,i/n.durationYear,a));if(0===l)return o.default.every(Math.max((0,r.tickStep)(t,i,a),1));let[s,f]=c[u/c[l-1][2]<c[l][2]/u?l-1:l];return s.every(f)}return[function(e,t,r){let n=t<e;n&&([e,t]=[t,e]);let o=r&&"function"==typeof r.range?r:f(e,t,r),i=o?o.range(e,+t+1):[];return n?i.reverse():i},f]}let[x,S]=b(m.default,v.default,y.utcSunday,h.default,d.default,p.default);e.exports.utcTickInterval=S,e.exports.utcTicks=x;let[w,P]=b(f.default,c.default,s.sunday,l.default,u.default,a.default);e.exports.timeTickInterval=P,e.exports.timeTicks=w}),_.register("2qXVT",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),Object.defineProperty(e.exports,"isoFormat",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e.exports,"isoParse",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e.exports,"timeFormat",{enumerable:!0,get:function(){return r.timeFormat}}),Object.defineProperty(e.exports,"timeFormatDefaultLocale",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e.exports,"timeFormatLocale",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e.exports,"timeParse",{enumerable:!0,get:function(){return r.timeParse}}),Object.defineProperty(e.exports,"utcFormat",{enumerable:!0,get:function(){return r.utcFormat}}),Object.defineProperty(e.exports,"utcParse",{enumerable:!0,get:function(){return r.utcParse}});var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}(_("UhGoU")),n=a(_("h1gUO")),o=a(_("k4LLC")),i=a(_("ipWNh"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}}),_.register("UhGoU",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=s,e.exports.utcParse=e.exports.utcFormat=e.exports.timeParse=e.exports.timeFormat=void 0;var r,n,o,i,a,u,l=(r=_("h1gUO"))&&r.__esModule?r:{default:r};function s(t){return n=(0,l.default)(t),e.exports.timeFormat=o=n.format,e.exports.timeParse=i=n.parse,e.exports.utcFormat=a=n.utcFormat,e.exports.utcParse=u=n.utcParse,n}e.exports.timeFormat=o,e.exports.timeParse=i,e.exports.utcFormat=a,e.exports.utcParse=u,s({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]})}),_.register("h1gUO",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=e.dateTime,u=e.date,l=e.time,s=e.periods,c=e.days,f=e.shortDays,_=e.months,B=e.shortMonths,ep=p(s),eP=d(s),eO=p(c),eE=d(c),ej=p(f),ek=d(f),eM=p(_),eA=d(_),eT=p(B),eC=d(B),eL={a:function(e){return f[e.getDay()]},A:function(e){return c[e.getDay()]},b:function(e){return B[e.getMonth()]},B:function(e){return _[e.getMonth()]},c:null,d:I,e:I,f:F,g:X,G:Z,H:R,I:D,j:G,L:V,m:z,M:K,p:function(e){return s[+(e.getHours()>=12)]},q:function(e){return 1+~~(e.getMonth()/3)},Q:eS,s:ew,S:Q,u:H,U:W,V:Y,w:U,W:$,x:null,X:null,y:q,Y:J,Z:ee,"%":e_},eN={a:function(e){return f[e.getUTCDay()]},A:function(e){return c[e.getUTCDay()]},b:function(e){return B[e.getUTCMonth()]},B:function(e){return _[e.getUTCMonth()]},c:null,d:et,e:et,f:ea,g:em,G:eb,H:er,I:en,j:eo,L:ei,m:eu,M:el,p:function(e){return s[+(e.getUTCHours()>=12)]},q:function(e){return 1+~~(e.getUTCMonth()/3)},Q:eS,s:ew,S:es,u:ec,U:ef,V:ed,w:eh,W:ey,x:null,X:null,y:ev,Y:eg,Z:ex,"%":e_},eI={a:function(e,t,r){var n=ej.exec(t.slice(r));return n?(e.w=ek.get(n[0].toLowerCase()),r+n[0].length):-1},A:function(e,t,r){var n=eO.exec(t.slice(r));return n?(e.w=eE.get(n[0].toLowerCase()),r+n[0].length):-1},b:function(e,t,r){var n=eT.exec(t.slice(r));return n?(e.m=eC.get(n[0].toLowerCase()),r+n[0].length):-1},B:function(e,t,r){var n=eM.exec(t.slice(r));return n?(e.m=eA.get(n[0].toLowerCase()),r+n[0].length):-1},c:function(e,r,n){return eG(e,t,r,n)},d:O,e:O,f:T,g:x,G:b,H:j,I:j,j:E,L:A,m:P,M:k,p:function(e,t,r){var n=ep.exec(t.slice(r));return n?(e.p=eP.get(n[0].toLowerCase()),r+n[0].length):-1},q:w,Q:L,s:N,S:M,u:y,U:v,V:m,w:h,W:g,x:function(e,t,r){return eG(e,u,t,r)},X:function(e,t,r){return eG(e,l,t,r)},y:x,Y:b,Z:S,"%":C};function eR(e,t){return function(r){var n,o,i,u=[],l=-1,s=0,c=e.length;for(r instanceof Date||(r=new Date(+r));++l<c;)37===e.charCodeAt(l)&&(u.push(e.slice(s,l)),null!=(o=a[n=e.charAt(++l)])?n=e.charAt(++l):o="e"===n?" ":"0",(i=t[n])&&(n=i(r,o)),u.push(n),s=l+1);return u.push(e.slice(s,l)),u.join("")}}function eD(e,t){return function(a){var u,l,s=i(1900,void 0,1);if(eG(s,e,a+="",0)!=a.length)return null;// If a UNIX timestamp is specified, return it.
if("Q"in s)return new Date(s.Q);if("s"in s)return new Date(1e3*s.s+("L"in s?s.L:0));// If this is utcParse, never use the local timezone.
if(!t||"Z"in s||(s.Z=0),"p"in s&&(s.H=s.H%12+12*s.p),void 0===s.m&&(s.m="q"in s?s.q:0),"V"in s){if(s.V<1||s.V>53)return null;"w"in s||(s.w=1),"Z"in s?(u=(l=(u=o(i(s.y,0,1))).getUTCDay())>4||0===l?r.utcMonday.ceil(u):(0,r.utcMonday)(u),u=r.utcDay.offset(u,(s.V-1)*7),s.y=u.getUTCFullYear(),s.m=u.getUTCMonth(),s.d=u.getUTCDate()+(s.w+6)%7):(u=(l=(u=n(i(s.y,0,1))).getDay())>4||0===l?r.timeMonday.ceil(u):(0,r.timeMonday)(u),u=r.timeDay.offset(u,(s.V-1)*7),s.y=u.getFullYear(),s.m=u.getMonth(),s.d=u.getDate()+(s.w+6)%7)}else("W"in s||"U"in s)&&("w"in s||(s.w="u"in s?s.u%7:"W"in s?1:0),l="Z"in s?o(i(s.y,0,1)).getUTCDay():n(i(s.y,0,1)).getDay(),s.m=0,s.d="W"in s?(s.w+6)%7+7*s.W-(l+5)%7:s.w+7*s.U-(l+6)%7);// If a time zone is specified, all fields are interpreted as UTC and then
return(// offset according to the specified time zone.
"Z"in s?(s.H+=s.Z/100|0,s.M+=s.Z%100,o(s)):n(s)// Otherwise, all fields are in local time.
)}}function eG(e,t,r,n){for(var o,i,u=0,l=t.length,s=r.length;u<l;){if(n>=s)return -1;if(37===(o=t.charCodeAt(u++))){if(!(i=eI[(o=t.charAt(u++))in a?t.charAt(u++):o])||(n=i(e,r,n))<0)return -1}else if(o!=r.charCodeAt(n++))return -1}return n}return eL.x=eR(u,eL),eL.X=eR(l,eL),eL.c=eR(t,eL),eN.x=eR(u,eN),eN.X=eR(l,eN),eN.c=eR(t,eN),{format:function(e){var t=eR(e+="",eL);return t.toString=function(){return e},t},parse:function(e){var t=eD(e+="",!1);return t.toString=function(){return e},t},utcFormat:function(e){var t=eR(e+="",eN);return t.toString=function(){return e},t},utcParse:function(e){var t=eD(e+="",!0);return t.toString=function(){return e},t}}};var r=_("kym6t");function n(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function o(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function i(e,t,r){return{y:e,m:t,d:r,H:0,M:0,S:0,L:0}}var a={"-":"",_:" ",0:"0"},u=/^\s*\d+/,l=/^%/,s=/[\\^$*+?|[\]().{}]/g;function c(e,t,r){var n=e<0?"-":"",o=(n?-e:e)+"",i=o.length;return n+(i<r?Array(r-i+1).join(t)+o:o)}function f(e){return e.replace(s,"\\$&")}function p(e){return RegExp("^(?:"+e.map(f).join("|")+")","i")}function d(e){return new Map(e.map((e,t)=>[e.toLowerCase(),t]))}function h(e,t,r){var n=u.exec(t.slice(r,r+1));return n?(e.w=+n[0],r+n[0].length):-1}function y(e,t,r){var n=u.exec(t.slice(r,r+1));return n?(e.u=+n[0],r+n[0].length):-1}function v(e,t,r){var n=u.exec(t.slice(r,r+2));return n?(e.U=+n[0],r+n[0].length):-1}function m(e,t,r){var n=u.exec(t.slice(r,r+2));return n?(e.V=+n[0],r+n[0].length):-1}function g(e,t,r){var n=u.exec(t.slice(r,r+2));return n?(e.W=+n[0],r+n[0].length):-1}function b(e,t,r){var n=u.exec(t.slice(r,r+4));return n?(e.y=+n[0],r+n[0].length):-1}function x(e,t,r){var n=u.exec(t.slice(r,r+2));return n?(e.y=+n[0]+(+n[0]>68?1900:2e3),r+n[0].length):-1}function S(e,t,r){var n=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r,r+6));return n?(e.Z=n[1]?0:-(n[2]+(n[3]||"00")),r+n[0].length):-1}function w(e,t,r){var n=u.exec(t.slice(r,r+1));return n?(e.q=3*n[0]-3,r+n[0].length):-1}function P(e,t,r){var n=u.exec(t.slice(r,r+2));return n?(e.m=n[0]-1,r+n[0].length):-1}function O(e,t,r){var n=u.exec(t.slice(r,r+2));return n?(e.d=+n[0],r+n[0].length):-1}function E(e,t,r){var n=u.exec(t.slice(r,r+3));return n?(e.m=0,e.d=+n[0],r+n[0].length):-1}function j(e,t,r){var n=u.exec(t.slice(r,r+2));return n?(e.H=+n[0],r+n[0].length):-1}function k(e,t,r){var n=u.exec(t.slice(r,r+2));return n?(e.M=+n[0],r+n[0].length):-1}function M(e,t,r){var n=u.exec(t.slice(r,r+2));return n?(e.S=+n[0],r+n[0].length):-1}function A(e,t,r){var n=u.exec(t.slice(r,r+3));return n?(e.L=+n[0],r+n[0].length):-1}function T(e,t,r){var n=u.exec(t.slice(r,r+6));return n?(e.L=Math.floor(n[0]/1e3),r+n[0].length):-1}function C(e,t,r){var n=l.exec(t.slice(r,r+1));return n?r+n[0].length:-1}function L(e,t,r){var n=u.exec(t.slice(r));return n?(e.Q=+n[0],r+n[0].length):-1}function N(e,t,r){var n=u.exec(t.slice(r));return n?(e.s=+n[0],r+n[0].length):-1}function I(e,t){return c(e.getDate(),t,2)}function R(e,t){return c(e.getHours(),t,2)}function D(e,t){return c(e.getHours()%12||12,t,2)}function G(e,t){return c(1+r.timeDay.count((0,r.timeYear)(e),e),t,3)}function V(e,t){return c(e.getMilliseconds(),t,3)}function F(e,t){return V(e,t)+"000"}function z(e,t){return c(e.getMonth()+1,t,2)}function K(e,t){return c(e.getMinutes(),t,2)}function Q(e,t){return c(e.getSeconds(),t,2)}function H(e){var t=e.getDay();return 0===t?7:t}function W(e,t){return c(r.timeSunday.count((0,r.timeYear)(e)-1,e),t,2)}function B(e){var t=e.getDay();return t>=4||0===t?(0,r.timeThursday)(e):r.timeThursday.ceil(e)}function Y(e,t){return e=B(e),c(r.timeThursday.count((0,r.timeYear)(e),e)+(4===(0,r.timeYear)(e).getDay()),t,2)}function U(e){return e.getDay()}function $(e,t){return c(r.timeMonday.count((0,r.timeYear)(e)-1,e),t,2)}function q(e,t){return c(e.getFullYear()%100,t,2)}function X(e,t){return c((e=B(e)).getFullYear()%100,t,2)}function J(e,t){return c(e.getFullYear()%1e4,t,4)}function Z(e,t){var n=e.getDay();return c((e=n>=4||0===n?(0,r.timeThursday)(e):r.timeThursday.ceil(e)).getFullYear()%1e4,t,4)}function ee(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+c(t/60|0,"0",2)+c(t%60,"0",2)}function et(e,t){return c(e.getUTCDate(),t,2)}function er(e,t){return c(e.getUTCHours(),t,2)}function en(e,t){return c(e.getUTCHours()%12||12,t,2)}function eo(e,t){return c(1+r.utcDay.count((0,r.utcYear)(e),e),t,3)}function ei(e,t){return c(e.getUTCMilliseconds(),t,3)}function ea(e,t){return ei(e,t)+"000"}function eu(e,t){return c(e.getUTCMonth()+1,t,2)}function el(e,t){return c(e.getUTCMinutes(),t,2)}function es(e,t){return c(e.getUTCSeconds(),t,2)}function ec(e){var t=e.getUTCDay();return 0===t?7:t}function ef(e,t){return c(r.utcSunday.count((0,r.utcYear)(e)-1,e),t,2)}function ep(e){var t=e.getUTCDay();return t>=4||0===t?(0,r.utcThursday)(e):r.utcThursday.ceil(e)}function ed(e,t){return e=ep(e),c(r.utcThursday.count((0,r.utcYear)(e),e)+(4===(0,r.utcYear)(e).getUTCDay()),t,2)}function eh(e){return e.getUTCDay()}function ey(e,t){return c(r.utcMonday.count((0,r.utcYear)(e)-1,e),t,2)}function ev(e,t){return c(e.getUTCFullYear()%100,t,2)}function em(e,t){return c((e=ep(e)).getUTCFullYear()%100,t,2)}function eg(e,t){return c(e.getUTCFullYear()%1e4,t,4)}function eb(e,t){var n=e.getUTCDay();return c((e=n>=4||0===n?(0,r.utcThursday)(e):r.utcThursday.ceil(e)).getUTCFullYear()%1e4,t,4)}function ex(){return"+0000"}function e_(){return"%"}function eS(e){return+e}function ew(e){return Math.floor(+e/1e3)}}),_.register("k4LLC",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.isoSpecifier=e.exports.default=void 0;var r=_("UhGoU"),n="%Y-%m-%dT%H:%M:%S.%LZ";e.exports.isoSpecifier=n;var o=Date.prototype.toISOString?function(e){return e.toISOString()}:(0,r.utcFormat)(n);e.exports.default=o}),_.register("ipWNh",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=_("k4LLC"),n=_("UhGoU"),o=+new Date("2000-01-01T00:00:00.000Z")?function(e){var t=new Date(e);return isNaN(t)?null:t}:(0,n.utcParse)(r.isoSpecifier);e.exports.default=o}),_.register("ne0st",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){return i.initRange.apply((0,o.calendar)(r.utcTicks,r.utcTickInterval,r.utcYear,r.utcMonth,r.utcWeek,r.utcDay,r.utcHour,r.utcMinute,r.utcSecond,n.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)};var r=_("kym6t"),n=_("2qXVT"),o=_("617BV"),i=_("98nei")}),_.register("5pVeE",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.copy=c,e.exports.default=function e(){var t=(0,i.linearish)(s()(n.identity));return t.copy=function(){return c(t,e())},o.initInterpolator.apply(t,arguments)},e.exports.sequentialLog=function e(){var t=(0,a.loggish)(s()).domain([1,10]);return t.copy=function(){return c(t,e()).base(t.base())},o.initInterpolator.apply(t,arguments)},e.exports.sequentialPow=f,e.exports.sequentialSqrt=function(){return f.apply(null,arguments).exponent(.5)},e.exports.sequentialSymlog=function e(){var t=(0,u.symlogish)(s());return t.copy=function(){return c(t,e()).constant(t.constant())},o.initInterpolator.apply(t,arguments)};var r=_("665th"),n=_("dTLbh"),o=_("98nei"),i=_("hvSDx"),a=_("aEI3x"),u=_("bzrFz"),l=_("cpAbf");function s(){var e,t,o,i,a,u=0,l=1,s=n.identity,c=!1;function f(t){return null==t||isNaN(t=+t)?a:s(0===o?.5:(t=(i(t)-e)*o,c?Math.max(0,Math.min(1,t)):t))}function p(e){return function(t){var r,n;return arguments.length?([r,n]=t,s=e(r,n),f):[s(0),s(1)]}}return f.domain=function(r){return arguments.length?([u,l]=r,e=i(u=+u),t=i(l=+l),o=e===t?0:1/(t-e),f):[u,l]},f.clamp=function(e){return arguments.length?(c=!!e,f):c},f.interpolator=function(e){return arguments.length?(s=e,f):s},f.range=p(r.interpolate),f.rangeRound=p(r.interpolateRound),f.unknown=function(e){return arguments.length?(a=e,f):a},function(r){return i=r,e=r(u),t=r(l),o=e===t?0:1/(t-e),f}}function c(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function f(){var e=(0,l.powish)(s());return e.copy=function(){return c(e,f()).exponent(e.exponent())},o.initInterpolator.apply(e,arguments)}}),_.register("l4TSc",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function e(){var t=[],i=n.identity;function a(e){if(null!=e&&!isNaN(e=+e))return i(((0,r.bisect)(t,e,1)-1)/(t.length-1))}return a.domain=function(e){if(!arguments.length)return t.slice();for(let r of(t=[],e))null==r||isNaN(r=+r)||t.push(r);return t.sort(r.ascending),a},a.interpolator=function(e){return arguments.length?(i=e,a):i},a.range=function(){return t.map((e,r)=>i(r/(t.length-1)))},a.quantiles=function(e){return Array.from({length:e+1},(n,o)=>(0,r.quantile)(t,o/e))},a.copy=function(){return e(i).domain(t)},o.initInterpolator.apply(a,arguments)};var r=_("baM4h"),n=_("dTLbh"),o=_("98nei")}),_.register("fMWTD",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function e(){var t=(0,i.linearish)(c()(n.identity));return t.copy=function(){return(0,u.copy)(t,e())},o.initInterpolator.apply(t,arguments)},e.exports.divergingLog=function e(){var t=(0,a.loggish)(c()).domain([.1,1,10]);return t.copy=function(){return(0,u.copy)(t,e()).base(t.base())},o.initInterpolator.apply(t,arguments)},e.exports.divergingPow=f,e.exports.divergingSqrt=function(){return f.apply(null,arguments).exponent(.5)},e.exports.divergingSymlog=function e(){var t=(0,l.symlogish)(c());return t.copy=function(){return(0,u.copy)(t,e()).constant(t.constant())},o.initInterpolator.apply(t,arguments)};var r=_("665th"),n=_("dTLbh"),o=_("98nei"),i=_("hvSDx"),a=_("aEI3x"),u=_("5pVeE"),l=_("bzrFz"),s=_("cpAbf");function c(){var e,t,o,i,a,u,l,s=0,c=.5,f=1,p=1,d=n.identity,h=!1;function y(e){return isNaN(e=+e)?l:(e=.5+((e=+u(e))-t)*(p*e<p*t?i:a),d(h?Math.max(0,Math.min(1,e)):e))}function v(e){return function(t){var n,o,i;return arguments.length?([n,o,i]=t,d=(0,r.piecewise)(e,[n,o,i]),y):[d(0),d(.5),d(1)]}}return y.domain=function(r){return arguments.length?([s,c,f]=r,e=u(s=+s),t=u(c=+c),o=u(f=+f),i=e===t?0:.5/(t-e),a=t===o?0:.5/(o-t),p=t<e?-1:1,y):[s,c,f]},y.clamp=function(e){return arguments.length?(h=!!e,y):h},y.interpolator=function(e){return arguments.length?(d=e,y):d},y.range=v(r.interpolate),y.rangeRound=v(r.interpolateRound),y.unknown=function(e){return arguments.length?(l=e,y):l},function(r){return u=r,e=r(s),t=r(c),o=r(f),i=e===t?0:.5/(t-e),a=t===o?0:.5/(o-t),p=t<e?-1:1,y}}function f(){var e=(0,s.powish)(c());return e.copy=function(){return(0,u.copy)(e,f()).exponent(e.exponent())},o.initInterpolator.apply(e,arguments)}}),_.register("CKTDO",function(e,t){// `victory-vendor/d3-shape` (CommonJS)
// See upstream license: https://github.com/d3/d3-shape/blob/main/LICENSE
//
// Our CommonJS package relies on transpiled vendor files in `lib-vendor/d3-shape`
e.exports=_("bszMs")}),_.register("bszMs",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),Object.defineProperty(e.exports,"arc",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e.exports,"area",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e.exports,"areaRadial",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e.exports,"curveBasis",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(e.exports,"curveBasisClosed",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(e.exports,"curveBasisOpen",{enumerable:!0,get:function(){return E.default}}),Object.defineProperty(e.exports,"curveBumpX",{enumerable:!0,get:function(){return k.bumpX}}),Object.defineProperty(e.exports,"curveBumpY",{enumerable:!0,get:function(){return k.bumpY}}),Object.defineProperty(e.exports,"curveBundle",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(e.exports,"curveCardinal",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(e.exports,"curveCardinalClosed",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(e.exports,"curveCardinalOpen",{enumerable:!0,get:function(){return T.default}}),Object.defineProperty(e.exports,"curveCatmullRom",{enumerable:!0,get:function(){return I.default}}),Object.defineProperty(e.exports,"curveCatmullRomClosed",{enumerable:!0,get:function(){return L.default}}),Object.defineProperty(e.exports,"curveCatmullRomOpen",{enumerable:!0,get:function(){return N.default}}),Object.defineProperty(e.exports,"curveLinear",{enumerable:!0,get:function(){return D.default}}),Object.defineProperty(e.exports,"curveLinearClosed",{enumerable:!0,get:function(){return R.default}}),Object.defineProperty(e.exports,"curveMonotoneX",{enumerable:!0,get:function(){return G.monotoneX}}),Object.defineProperty(e.exports,"curveMonotoneY",{enumerable:!0,get:function(){return G.monotoneY}}),Object.defineProperty(e.exports,"curveNatural",{enumerable:!0,get:function(){return V.default}}),Object.defineProperty(e.exports,"curveStep",{enumerable:!0,get:function(){return F.default}}),Object.defineProperty(e.exports,"curveStepAfter",{enumerable:!0,get:function(){return F.stepAfter}}),Object.defineProperty(e.exports,"curveStepBefore",{enumerable:!0,get:function(){return F.stepBefore}}),Object.defineProperty(e.exports,"line",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e.exports,"lineRadial",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e.exports,"link",{enumerable:!0,get:function(){return s.link}}),Object.defineProperty(e.exports,"linkHorizontal",{enumerable:!0,get:function(){return s.linkHorizontal}}),Object.defineProperty(e.exports,"linkRadial",{enumerable:!0,get:function(){return s.linkRadial}}),Object.defineProperty(e.exports,"linkVertical",{enumerable:!0,get:function(){return s.linkVertical}}),Object.defineProperty(e.exports,"pie",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e.exports,"pointRadial",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e.exports,"radialArea",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e.exports,"radialLine",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e.exports,"stack",{enumerable:!0,get:function(){return z.default}}),Object.defineProperty(e.exports,"stackOffsetDiverging",{enumerable:!0,get:function(){return Q.default}}),Object.defineProperty(e.exports,"stackOffsetExpand",{enumerable:!0,get:function(){return K.default}}),Object.defineProperty(e.exports,"stackOffsetNone",{enumerable:!0,get:function(){return H.default}}),Object.defineProperty(e.exports,"stackOffsetSilhouette",{enumerable:!0,get:function(){return W.default}}),Object.defineProperty(e.exports,"stackOffsetWiggle",{enumerable:!0,get:function(){return B.default}}),Object.defineProperty(e.exports,"stackOrderAppearance",{enumerable:!0,get:function(){return Y.default}}),Object.defineProperty(e.exports,"stackOrderAscending",{enumerable:!0,get:function(){return U.default}}),Object.defineProperty(e.exports,"stackOrderDescending",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(e.exports,"stackOrderInsideOut",{enumerable:!0,get:function(){return q.default}}),Object.defineProperty(e.exports,"stackOrderNone",{enumerable:!0,get:function(){return X.default}}),Object.defineProperty(e.exports,"stackOrderReverse",{enumerable:!0,get:function(){return J.default}}),Object.defineProperty(e.exports,"symbol",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e.exports,"symbolAsterisk",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e.exports,"symbolCircle",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(e.exports,"symbolCross",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e.exports,"symbolDiamond",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e.exports,"symbolDiamond2",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(e.exports,"symbolPlus",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(e.exports,"symbolSquare",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e.exports,"symbolSquare2",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(e.exports,"symbolStar",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(e.exports,"symbolTriangle",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(e.exports,"symbolTriangle2",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(e.exports,"symbolWye",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(e.exports,"symbolX",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(e.exports,"symbols",{enumerable:!0,get:function(){return c.symbolsFill}}),Object.defineProperty(e.exports,"symbolsFill",{enumerable:!0,get:function(){return c.symbolsFill}}),Object.defineProperty(e.exports,"symbolsStroke",{enumerable:!0,get:function(){return c.symbolsStroke}});var r=et(_("8sWC8")),n=et(_("cYK15")),o=et(_("2gJml")),i=et(_("fM93E")),a=et(_("7s0ZM")),u=et(_("7auFH")),l=et(_("5wAin")),s=_("3WvWY"),c=ee(_("l3mP4")),f=et(_("hNi5e")),p=et(_("80b5j")),d=et(_("34kQO")),h=et(_("aSxHZ")),y=et(_("3rBZo")),v=et(_("l9ST9")),m=et(_("3oWT7")),g=et(_("k3QGU")),b=et(_("1WZhf")),x=et(_("hQr8g")),S=et(_("NGszi")),w=et(_("7fYkN")),P=et(_("3oXF4")),O=et(_("a65kp")),E=et(_("aFwZp")),j=et(_("4MmJ6")),k=_("evZCX"),M=et(_("1uOPP")),A=et(_("1RBVE")),T=et(_("88R3u")),C=et(_("8MEVA")),L=et(_("63Rg9")),N=et(_("4JV2s")),I=et(_("jeCIz")),R=et(_("7HCNf")),D=et(_("1wm0G")),G=_("eqBPr"),V=et(_("dY7QQ")),F=ee(_("llSQy")),z=et(_("l6qno")),K=et(_("fpjqO")),Q=et(_("l5EV1")),H=et(_("7CMPN")),W=et(_("4ViQy")),B=et(_("fIpqC")),Y=et(_("5qWRn")),U=et(_("klspr")),$=et(_("kwAJ5")),q=et(_("4fWJp")),X=et(_("5Nf2s")),J=et(_("aFPqy"));function Z(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(Z=function(e){return e?r:t})(e)}function ee(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=Z(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}function et(e){return e&&e.__esModule?e:{default:e}}}),_.register("8sWC8",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){var e=a,t=u,r=(0,o.default)(0),p=null,d=l,h=s,y=c,v=null;function m(){var o,a,u=+e.apply(this,arguments),l=+t.apply(this,arguments),s=d.apply(this,arguments)-i.halfPi,c=h.apply(this,arguments)-i.halfPi,m=(0,i.abs)(c-s),g=c>s;if(v||(v=o=(0,n.path)()),l<u&&(a=l,l=u,u=a),l>i.epsilon){if(m>i.tau-i.epsilon)v.moveTo(l*(0,i.cos)(s),l*(0,i.sin)(s)),v.arc(0,0,l,s,c,!g),u>i.epsilon&&(v.moveTo(u*(0,i.cos)(c),u*(0,i.sin)(c)),v.arc(0,0,u,c,s,g));else{var b,x,_=s,S=c,w=s,P=c,O=m,E=m,j=y.apply(this,arguments)/2,k=j>i.epsilon&&(p?+p.apply(this,arguments):(0,i.sqrt)(u*u+l*l)),M=(0,i.min)((0,i.abs)(l-u)/2,+r.apply(this,arguments)),A=M,T=M;// Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
if(k>i.epsilon){var C=(0,i.asin)(k/u*(0,i.sin)(j)),L=(0,i.asin)(k/l*(0,i.sin)(j));(O-=2*C)>i.epsilon?(C*=g?1:-1,w+=C,P-=C):(O=0,w=P=(s+c)/2),(E-=2*L)>i.epsilon?(L*=g?1:-1,_+=L,S-=L):(E=0,_=S=(s+c)/2)}var N=l*(0,i.cos)(_),I=l*(0,i.sin)(_),R=u*(0,i.cos)(P),D=u*(0,i.sin)(P);// Apply rounded corners?
if(M>i.epsilon){var G,V=l*(0,i.cos)(S),F=l*(0,i.sin)(S),z=u*(0,i.cos)(w),K=u*(0,i.sin)(w);// Restrict the corner radius according to the sector angle.
if(m<i.pi&&(G=function(e,t,r,n,o,a,u,l){var s=r-e,c=n-t,f=u-o,p=l-a,d=p*s-f*c;if(!(d*d<i.epsilon))return d=(f*(t-a)-p*(e-o))/d,[e+d*s,t+d*c]}// Compute perpendicular offset line of length rc.
(N,I,z,K,V,F,R,D))){var Q=N-G[0],H=I-G[1],W=V-G[0],B=F-G[1],Y=1/(0,i.sin)((0,i.acos)((Q*W+H*B)/((0,i.sqrt)(Q*Q+H*H)*(0,i.sqrt)(W*W+B*B)))/2),U=(0,i.sqrt)(G[0]*G[0]+G[1]*G[1]);A=(0,i.min)(M,(u-U)/(Y-1)),T=(0,i.min)(M,(l-U)/(Y+1))}}// Is the sector collapsed to a line?
E>i.epsilon?T>i.epsilon?(b=f(z,K,N,I,l,T,g),x=f(V,F,R,D,l,T,g),v.moveTo(b.cx+b.x01,b.cy+b.y01),T<M?v.arc(b.cx,b.cy,T,(0,i.atan2)(b.y01,b.x01),(0,i.atan2)(x.y01,x.x01),!g):(v.arc(b.cx,b.cy,T,(0,i.atan2)(b.y01,b.x01),(0,i.atan2)(b.y11,b.x11),!g),v.arc(0,0,l,(0,i.atan2)(b.cy+b.y11,b.cx+b.x11),(0,i.atan2)(x.cy+x.y11,x.cx+x.x11),!g),v.arc(x.cx,x.cy,T,(0,i.atan2)(x.y11,x.x11),(0,i.atan2)(x.y01,x.x01),!g))):(v.moveTo(N,I),v.arc(0,0,l,_,S,!g)):v.moveTo(N,I),u>i.epsilon&&O>i.epsilon?A>i.epsilon?(b=f(R,D,V,F,u,-A,g),x=f(N,I,z,K,u,-A,g),v.lineTo(b.cx+b.x01,b.cy+b.y01),A<M?v.arc(b.cx,b.cy,A,(0,i.atan2)(b.y01,b.x01),(0,i.atan2)(x.y01,x.x01),!g):(v.arc(b.cx,b.cy,A,(0,i.atan2)(b.y01,b.x01),(0,i.atan2)(b.y11,b.x11),!g),v.arc(0,0,u,(0,i.atan2)(b.cy+b.y11,b.cx+b.x11),(0,i.atan2)(x.cy+x.y11,x.cx+x.x11),g),v.arc(x.cx,x.cy,A,(0,i.atan2)(x.y11,x.x11),(0,i.atan2)(x.y01,x.x01),!g))):v.arc(0,0,u,P,w,g):v.lineTo(R,D)}}else v.moveTo(0,0);// Or is it a circle or annulus?
if(v.closePath(),o)return v=null,o+""||null}return m.centroid=function(){var r=(+e.apply(this,arguments)+ +t.apply(this,arguments))/2,n=(+d.apply(this,arguments)+ +h.apply(this,arguments))/2-i.pi/2;return[(0,i.cos)(n)*r,(0,i.sin)(n)*r]},m.innerRadius=function(t){return arguments.length?(e="function"==typeof t?t:(0,o.default)(+t),m):e},m.outerRadius=function(e){return arguments.length?(t="function"==typeof e?e:(0,o.default)(+e),m):t},m.cornerRadius=function(e){return arguments.length?(r="function"==typeof e?e:(0,o.default)(+e),m):r},m.padRadius=function(e){return arguments.length?(p=null==e?null:"function"==typeof e?e:(0,o.default)(+e),m):p},m.startAngle=function(e){return arguments.length?(d="function"==typeof e?e:(0,o.default)(+e),m):d},m.endAngle=function(e){return arguments.length?(h="function"==typeof e?e:(0,o.default)(+e),m):h},m.padAngle=function(e){return arguments.length?(y="function"==typeof e?e:(0,o.default)(+e),m):y},m.context=function(e){return arguments.length?(v=null==e?null:e,m):v},m};var r,n=_("ahT4l"),o=(r=_("1SFIt"))&&r.__esModule?r:{default:r},i=_("8EE7R");function a(e){return e.innerRadius}function u(e){return e.outerRadius}function l(e){return e.startAngle}function s(e){return e.endAngle}function c(e){return e&&e.padAngle;// Note: optional!
}// http://mathworld.wolfram.com/Circle-LineIntersection.html
function f(e,t,r,n,o,a,u){var l=e-r,s=t-n,c=(u?a:-a)/(0,i.sqrt)(l*l+s*s),f=c*s,p=-c*l,d=e+f,h=t+p,y=r+f,v=n+p,m=(d+y)/2,g=(h+v)/2,b=y-d,x=v-h,_=b*b+x*x,S=o-a,w=d*v-y*h,P=(x<0?-1:1)*(0,i.sqrt)((0,i.max)(0,S*S*_-w*w)),O=(w*x-b*P)/_,E=(-w*b-x*P)/_,j=(w*x+b*P)/_,k=(-w*b+x*P)/_,M=O-m,A=E-g,T=j-m,C=k-g;// Pick the closer of the two intersection points.
return M*M+A*A>T*T+C*C&&(O=j,E=k),{cx:O,cy:E,x01:-f,y01:-p,x11:O*(o/S-1),y11:E*(o/S-1)}}}),_.register("ahT4l",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),Object.defineProperty(e.exports,"path",{enumerable:!0,get:function(){return n.default}});var r,n=(r=_("le6pz"))&&r.__esModule?r:{default:r}}),_.register("le6pz",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;let r=Math.PI,n=2*r,o=n-1e-6;function i(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function a(){return new i}i.prototype=a.prototype={constructor:i,moveTo:function(e,t){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(e,t){this._+="L"+(this._x1=+e)+","+(this._y1=+t)},quadraticCurveTo:function(e,t,r,n){this._+="Q"+ +e+","+ +t+","+(this._x1=+r)+","+(this._y1=+n)},bezierCurveTo:function(e,t,r,n,o,i){this._+="C"+ +e+","+ +t+","+ +r+","+ +n+","+(this._x1=+o)+","+(this._y1=+i)},arcTo:function(e,t,n,o,i){e=+e,t=+t,n=+n,o=+o,i=+i;var a=this._x1,u=this._y1,l=n-e,s=o-t,c=a-e,f=u-t,p=c*c+f*f;// Is the radius negative? Error.
if(i<0)throw Error("negative radius: "+i);// Is this path empty? Move to (x1,y1).
if(null===this._x1)this._+="M"+(this._x1=e)+","+(this._y1=t);else if(p>1e-6){if(Math.abs(f*l-s*c)>1e-6&&i){var d=n-a,h=o-u,y=l*l+s*s,v=Math.sqrt(y),m=Math.sqrt(p),g=i*Math.tan((r-Math.acos((y+p-(d*d+h*h))/(2*v*m)))/2),b=g/m,x=g/v;// If the start tangent is not coincident with (x0,y0), line to.
Math.abs(b-1)>1e-6&&(this._+="L"+(e+b*c)+","+(t+b*f)),this._+="A"+i+","+i+",0,0,"+ +(f*d>c*h)+","+(this._x1=e+x*l)+","+(this._y1=t+x*s)}else this._+="L"+(this._x1=e)+","+(this._y1=t)}},arc:function(e,t,i,a,u,l){e=+e,t=+t,i=+i,l=!!l;var s=i*Math.cos(a),c=i*Math.sin(a),f=e+s,p=t+c,d=1^l,h=l?a-u:u-a;// Is the radius negative? Error.
if(i<0)throw Error("negative radius: "+i);// Is this path empty? Move to (x0,y0).
null===this._x1?this._+="M"+f+","+p:(Math.abs(this._x1-f)>1e-6||Math.abs(this._y1-p)>1e-6)&&(this._+="L"+f+","+p),i&&(h<0&&(h=h%n+n),h>o?this._+="A"+i+","+i+",0,1,"+d+","+(e-s)+","+(t-c)+"A"+i+","+i+",0,1,"+d+","+(this._x1=f)+","+(this._y1=p):h>1e-6&&(this._+="A"+i+","+i+",0,"+ +(h>=r)+","+d+","+(this._x1=e+i*Math.cos(u))+","+(this._y1=t+i*Math.sin(u))))},rect:function(e,t,r,n){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)+"h"+ +r+"v"+ +n+"h"+-r+"Z"},toString:function(){return this._}},e.exports.default=a}),_.register("1SFIt",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){return e}}}),_.register("8EE7R",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.abs=void 0,e.exports.acos=function(e){return e>1?0:e<-1?s:Math.acos(e)},e.exports.asin=function(e){return e>=1?c:e<=-1?-c:Math.asin(e)},e.exports.tau=e.exports.sqrt=e.exports.sin=e.exports.pi=e.exports.min=e.exports.max=e.exports.halfPi=e.exports.epsilon=e.exports.cos=e.exports.atan2=void 0;let r=Math.abs;e.exports.abs=r;let n=Math.atan2;e.exports.atan2=n;let o=Math.cos;e.exports.cos=o;let i=Math.max;e.exports.max=i;let a=Math.min;e.exports.min=a;let u=Math.sin;e.exports.sin=u;let l=Math.sqrt;e.exports.sqrt=l,e.exports.epsilon=1e-12;let s=Math.PI;e.exports.pi=s;let c=s/2;e.exports.halfPi=c;let f=2*s;e.exports.tau=f}),_.register("cYK15",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,l){var s=null,c=(0,o.default)(!0),f=null,p=i.default,d=null;function h(o){var i,a,u,h,y,v=(o=(0,n.default)(o)).length,m=!1,g=Array(v),b=Array(v);for(null==f&&(d=p(y=(0,r.path)())),i=0;i<=v;++i){if(!(i<v&&c(h=o[i],i,o))===m){if(m=!m)a=i,d.areaStart(),d.lineStart();else{for(d.lineEnd(),d.lineStart(),u=i-1;u>=a;--u)d.point(g[u],b[u]);d.lineEnd(),d.areaEnd()}}m&&(g[i]=+e(h,i,o),b[i]=+t(h,i,o),d.point(s?+s(h,i,o):g[i],l?+l(h,i,o):b[i]))}if(y)return d=null,y+""||null}function y(){return(0,a.default)().defined(c).curve(p).context(f)}return e="function"==typeof e?e:void 0===e?u.x:(0,o.default)(+e),t="function"==typeof t?t:void 0===t?(0,o.default)(0):(0,o.default)(+t),l="function"==typeof l?l:void 0===l?u.y:(0,o.default)(+l),h.x=function(t){return arguments.length?(e="function"==typeof t?t:(0,o.default)(+t),s=null,h):e},h.x0=function(t){return arguments.length?(e="function"==typeof t?t:(0,o.default)(+t),h):e},h.x1=function(e){return arguments.length?(s=null==e?null:"function"==typeof e?e:(0,o.default)(+e),h):s},h.y=function(e){return arguments.length?(t="function"==typeof e?e:(0,o.default)(+e),l=null,h):t},h.y0=function(e){return arguments.length?(t="function"==typeof e?e:(0,o.default)(+e),h):t},h.y1=function(e){return arguments.length?(l=null==e?null:"function"==typeof e?e:(0,o.default)(+e),h):l},h.lineX0=h.lineY0=function(){return y().x(e).y(t)},h.lineY1=function(){return y().x(e).y(l)},h.lineX1=function(){return y().x(s).y(t)},h.defined=function(e){return arguments.length?(c="function"==typeof e?e:(0,o.default)(!!e),h):c},h.curve=function(e){return arguments.length?(p=e,null!=f&&(d=p(f)),h):p},h.context=function(e){return arguments.length?(null==e?f=d=null:d=p(f=e),h):f},h};var r=_("ahT4l"),n=l(_("72xzV")),o=l(_("1SFIt")),i=l(_("1wm0G")),a=l(_("2gJml")),u=_("97E2D");function l(e){return e&&e.__esModule?e:{default:e}}}),_.register("72xzV",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return"object"==typeof e&&"length"in e?e// Array, TypedArray, NodeList, array-like
:Array.from(e);// Map, Set, iterable, string, or anything else
},e.exports.slice=void 0;var r=Array.prototype.slice;e.exports.slice=r}),_.register("1wm0G",function(e,t){function r(e){this._context=e}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return new r(e)},r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;// falls through
default:this._context.lineTo(e,t)}}}}),_.register("2gJml",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var u=(0,o.default)(!0),l=null,s=i.default,c=null;function f(o){var i,a,f,p=(o=(0,n.default)(o)).length,d=!1;for(null==l&&(c=s(f=(0,r.path)())),i=0;i<=p;++i)!(i<p&&u(a=o[i],i,o))===d&&((d=!d)?c.lineStart():c.lineEnd()),d&&c.point(+e(a,i,o),+t(a,i,o));if(f)return c=null,f+""||null}return e="function"==typeof e?e:void 0===e?a.x:(0,o.default)(e),t="function"==typeof t?t:void 0===t?a.y:(0,o.default)(t),f.x=function(t){return arguments.length?(e="function"==typeof t?t:(0,o.default)(+t),f):e},f.y=function(e){return arguments.length?(t="function"==typeof e?e:(0,o.default)(+e),f):t},f.defined=function(e){return arguments.length?(u="function"==typeof e?e:(0,o.default)(!!e),f):u},f.curve=function(e){return arguments.length?(s=e,null!=l&&(c=s(l)),f):s},f.context=function(e){return arguments.length?(null==e?l=c=null:c=s(l=e),f):l},f};var r=_("ahT4l"),n=u(_("72xzV")),o=u(_("1SFIt")),i=u(_("1wm0G")),a=_("97E2D");function u(e){return e&&e.__esModule?e:{default:e}}}),_.register("97E2D",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.x=function(e){return e[0]},e.exports.y=function(e){return e[1]}}),_.register("fM93E",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){var e=i.default,t=o.default,u=null,l=(0,n.default)(0),s=(0,n.default)(a.tau),c=(0,n.default)(0);function f(n){var o,i,f,p,d,h=(n=(0,r.default)(n)).length,y=0,v=Array(h),m=Array(h),g=+l.apply(this,arguments),b=Math.min(a.tau,Math.max(-a.tau,s.apply(this,arguments)-g)),x=Math.min(Math.abs(b)/h,c.apply(this,arguments)),_=x*(b<0?-1:1);for(o=0;o<h;++o)(d=m[v[o]=o]=+e(n[o],o,n))>0&&(y+=d);for(null!=t?v.sort(function(e,r){return t(m[e],m[r])}):null!=u&&v.sort(function(e,t){return u(n[e],n[t])}),o=0,f=y?(b-h*_)/y:0;o<h;++o,g=p)p=g+((d=m[i=v[o]])>0?d*f:0)+_,m[i]={data:n[i],index:o,value:d,startAngle:g,endAngle:p,padAngle:x};return m}return f.value=function(t){return arguments.length?(e="function"==typeof t?t:(0,n.default)(+t),f):e},f.sortValues=function(e){return arguments.length?(t=e,u=null,f):t},f.sort=function(e){return arguments.length?(u=e,t=null,f):u},f.startAngle=function(e){return arguments.length?(l="function"==typeof e?e:(0,n.default)(+e),f):l},f.endAngle=function(e){return arguments.length?(s="function"==typeof e?e:(0,n.default)(+e),f):s},f.padAngle=function(e){return arguments.length?(c="function"==typeof e?e:(0,n.default)(+e),f):c},f};var r=u(_("72xzV")),n=u(_("1SFIt")),o=u(_("fI7FW")),i=u(_("gi9bQ")),a=_("8EE7R");function u(e){return e&&e.__esModule?e:{default:e}}}),_.register("fI7FW",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}}),_.register("gi9bQ",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e}}),_.register("7s0ZM",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){var e=(0,o.default)().curve(n.curveRadialLinear),t=e.curve,r=e.lineX0,a=e.lineX1,u=e.lineY0,l=e.lineY1;return e.angle=e.x,delete e.x,e.startAngle=e.x0,delete e.x0,e.endAngle=e.x1,delete e.x1,e.radius=e.y,delete e.y,e.innerRadius=e.y0,delete e.y0,e.outerRadius=e.y1,delete e.y1,e.lineStartAngle=function(){return(0,i.lineRadial)(r())},delete e.lineX0,e.lineEndAngle=function(){return(0,i.lineRadial)(a())},delete e.lineX1,e.lineInnerRadius=function(){return(0,i.lineRadial)(u())},delete e.lineY0,e.lineOuterRadius=function(){return(0,i.lineRadial)(l())},delete e.lineY1,e.curve=function(e){return arguments.length?t((0,n.default)(e)):t()._curve},e};var r,n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}(_("dqrdl")),o=(r=_("cYK15"))&&r.__esModule?r:{default:r},i=_("7auFH");function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}}),_.register("dqrdl",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.curveRadialLinear=void 0,e.exports.default=i;var r,n=i(((r=_("1wm0G"))&&r.__esModule?r:{default:r}).default);function o(e){this._curve=e}function i(e){function t(t){return new o(e(t))}return t._curve=e,t}e.exports.curveRadialLinear=n,o.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(e,t){this._curve.point(t*Math.sin(e),-(t*Math.cos(e)))}}}),_.register("7auFH",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){return a((0,o.default)().curve(n.curveRadialLinear))},e.exports.lineRadial=a;var r,n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(_("dqrdl")),o=(r=_("2gJml"))&&r.__esModule?r:{default:r};function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function a(e){var t=e.curve;return e.angle=e.x,delete e.x,e.radius=e.y,delete e.y,e.curve=function(e){return arguments.length?t((0,n.default)(e)):t()._curve},e}}),_.register("5wAin",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return[(t=+t)*Math.cos(e-=Math.PI/2),t*Math.sin(e)]}}),_.register("3WvWY",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.link=c,e.exports.linkHorizontal=function(){return c(a.bumpX)},e.exports.linkRadial=function(){let e=c(a.bumpRadial);return e.angle=e.x,delete e.x,e.radius=e.y,delete e.y,e},e.exports.linkVertical=function(){return c(a.bumpY)};var r,n=_("ahT4l"),o=_("72xzV"),i=(r=_("1SFIt"))&&r.__esModule?r:{default:r},a=_("evZCX"),u=_("97E2D");function l(e){return e.source}function s(e){return e.target}function c(e){let t=l,r=s,a=u.x,c=u.y,f=null,p=null;function d(){let i;let u=o.slice.call(arguments),l=t.apply(this,u),s=r.apply(this,u);if(null==f&&(p=e(i=(0,n.path)())),p.lineStart(),u[0]=l,p.point(+a.apply(this,u),+c.apply(this,u)),u[0]=s,p.point(+a.apply(this,u),+c.apply(this,u)),p.lineEnd(),i)return p=null,i+""||null}return d.source=function(e){return arguments.length?(t=e,d):t},d.target=function(e){return arguments.length?(r=e,d):r},d.x=function(e){return arguments.length?(a="function"==typeof e?e:(0,i.default)(+e),d):a},d.y=function(e){return arguments.length?(c="function"==typeof e?e:(0,i.default)(+e),d):c},d.context=function(t){return arguments.length?(null==t?f=p=null:p=e(f=t),d):f},d}}),_.register("evZCX",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.bumpRadial=function(e){return new i(e)},e.exports.bumpX=function(e){return new o(e,!0)},e.exports.bumpY=function(e){return new o(e,!1)};var r,n=(r=_("5wAin"))&&r.__esModule?r:{default:r};class o{constructor(e,t){this._context=e,this._x=t}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line}point(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;// falls through
default:this._x?this._context.bezierCurveTo(this._x0=(this._x0+e)/2,this._y0,this._x0,t,e,t):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+t)/2,e,this._y0,e,t)}this._x0=e,this._y0=t}}class i{constructor(e){this._context=e}lineStart(){this._point=0}lineEnd(){}point(e,t){if(e=+e,t=+t,0==this._point++)this._x0=e,this._y0=t;else{let r=(0,n.default)(this._x0,this._y0),o=(0,n.default)(this._x0,this._y0=(this._y0+t)/2),i=(0,n.default)(e,this._y0),a=(0,n.default)(e,t);this._context.moveTo(...r),this._context.bezierCurveTo(...o,...i,...a)}}}}),_.register("l3mP4",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){let o=null;function a(){let n;if(o||(o=n=(0,r.path)()),e.apply(this,arguments).draw(o,+t.apply(this,arguments)),n)return o=null,n+""||null}return e="function"==typeof e?e:(0,n.default)(e||i.default),t="function"==typeof t?t:(0,n.default)(void 0===t?64:+t),a.type=function(t){return arguments.length?(e="function"==typeof t?t:(0,n.default)(t),a):e},a.size=function(e){return arguments.length?(t="function"==typeof e?e:(0,n.default)(+e),a):t},a.context=function(e){return arguments.length?(o=null==e?null:e,a):o},a},e.exports.symbolsStroke=e.exports.symbolsFill=void 0;var r=_("ahT4l"),n=m(_("1SFIt")),o=m(_("hNi5e")),i=m(_("80b5j")),a=m(_("34kQO")),u=m(_("aSxHZ")),l=m(_("3rBZo")),s=m(_("l9ST9")),c=m(_("3oWT7")),f=m(_("k3QGU")),p=m(_("1WZhf")),d=m(_("hQr8g")),h=m(_("NGszi")),y=m(_("7fYkN")),v=m(_("3oXF4"));function m(e){return e&&e.__esModule?e:{default:e}}// These symbols are designed to be filled.
let g=[i.default,a.default,u.default,c.default,p.default,d.default,y.default];// These symbols are designed to be stroked (with a width of 1.5px and round caps).
e.exports.symbolsFill=g;let b=[i.default,s.default,v.default,h.default,o.default,f.default,l.default];e.exports.symbolsStroke=b}),_.register("hNi5e",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=_("8EE7R");let n=(0,r.sqrt)(3);e.exports.default={draw(e,t){let o=.59436*(0,r.sqrt)(t+(0,r.min)(t/28,.75)),i=o/2,a=i*n;e.moveTo(0,o),e.lineTo(0,-o),e.moveTo(-a,-i),e.lineTo(a,i),e.moveTo(-a,i),e.lineTo(a,-i)}}}),_.register("80b5j",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=_("8EE7R");e.exports.default={draw(e,t){let n=(0,r.sqrt)(t/r.pi);e.moveTo(n,0),e.arc(0,0,n,0,r.tau)}}}),_.register("34kQO",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=_("8EE7R");e.exports.default={draw(e,t){let n=(0,r.sqrt)(t/5)/2;e.moveTo(-3*n,-n),e.lineTo(-n,-n),e.lineTo(-n,-3*n),e.lineTo(n,-3*n),e.lineTo(n,-n),e.lineTo(3*n,-n),e.lineTo(3*n,n),e.lineTo(n,n),e.lineTo(n,3*n),e.lineTo(-n,3*n),e.lineTo(-n,n),e.lineTo(-3*n,n),e.closePath()}}}),_.register("aSxHZ",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=_("8EE7R");let n=(0,r.sqrt)(1/3),o=2*n;e.exports.default={draw(e,t){let i=(0,r.sqrt)(t/o),a=i*n;e.moveTo(0,-i),e.lineTo(a,0),e.lineTo(0,i),e.lineTo(-a,0),e.closePath()}}}),_.register("3rBZo",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=_("8EE7R");e.exports.default={draw(e,t){let n=.62625*(0,r.sqrt)(t);e.moveTo(0,-n),e.lineTo(n,0),e.lineTo(0,n),e.lineTo(-n,0),e.closePath()}}}),_.register("l9ST9",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=_("8EE7R");e.exports.default={draw(e,t){let n=.87559*(0,r.sqrt)(t-(0,r.min)(t/7,2));e.moveTo(-n,0),e.lineTo(n,0),e.moveTo(0,n),e.lineTo(0,-n)}}}),_.register("3oWT7",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=_("8EE7R");e.exports.default={draw(e,t){let n=(0,r.sqrt)(t),o=-n/2;e.rect(o,o,n,n)}}}),_.register("k3QGU",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=_("8EE7R");e.exports.default={draw(e,t){let n=.4431*(0,r.sqrt)(t);e.moveTo(n,n),e.lineTo(n,-n),e.lineTo(-n,-n),e.lineTo(-n,n),e.closePath()}}}),_.register("1WZhf",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=_("8EE7R");let n=(0,r.sin)(r.pi/10)/(0,r.sin)(7*r.pi/10),o=(0,r.sin)(r.tau/10)*n,i=-(0,r.cos)(r.tau/10)*n;e.exports.default={draw(e,t){let n=(0,r.sqrt)(.8908130915292852*t),a=o*n,u=i*n;e.moveTo(0,-n),e.lineTo(a,u);for(let t=1;t<5;++t){let o=r.tau*t/5,i=(0,r.cos)(o),l=(0,r.sin)(o);e.lineTo(l*n,-i*n),e.lineTo(i*a-l*u,l*a+i*u)}e.closePath()}}}),_.register("hQr8g",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=_("8EE7R");let n=(0,r.sqrt)(3);e.exports.default={draw(e,t){let o=-(0,r.sqrt)(t/(3*n));e.moveTo(0,2*o),e.lineTo(-n*o,-o),e.lineTo(n*o,-o),e.closePath()}}}),_.register("NGszi",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=_("8EE7R");let n=(0,r.sqrt)(3);e.exports.default={draw(e,t){let o=.6824*(0,r.sqrt)(t),i=o/2,a=o*n/2;e.moveTo(0,-o),e.lineTo(a,i),e.lineTo(-a,i),e.closePath()}}}),_.register("7fYkN",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=_("8EE7R");let n=(0,r.sqrt)(3)/2,o=1/(0,r.sqrt)(12),i=(o/2+1)*3;e.exports.default={draw(e,t){let a=(0,r.sqrt)(t/i),u=a/2,l=a*o,s=a*o+a,c=-u;e.moveTo(u,l),e.lineTo(u,s),e.lineTo(c,s),e.lineTo(-.5*u-n*l,n*u+-.5*l),e.lineTo(-.5*u-n*s,n*u+-.5*s),e.lineTo(-.5*c-n*s,n*c+-.5*s),e.lineTo(-.5*u+n*l,-.5*l-n*u),e.lineTo(-.5*u+n*s,-.5*s-n*u),e.lineTo(-.5*c+n*s,-.5*s-n*c),e.closePath()}}}),_.register("3oXF4",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=_("8EE7R");e.exports.default={draw(e,t){let n=.6189*(0,r.sqrt)(t-(0,r.min)(t/6,1.7));e.moveTo(-n,-n),e.lineTo(n,n),e.moveTo(-n,n),e.lineTo(n,-n)}}}),_.register("a65kp",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return new i(e)};var r,n=(r=_("9Id5q"))&&r.__esModule?r:{default:r},o=_("4MmJ6");function i(e){this._context=e}i.prototype={areaStart:n.default,areaEnd:n.default,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:(0,o.point)(this,e,t)}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}}}),_.register("9Id5q",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){}}),_.register("4MmJ6",function(e,t){function r(e,t,r){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+r)/6)}function n(e){this._context=e}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Basis=n,e.exports.default=function(e){return new n(e)},e.exports.point=r,n.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:r(this,this._x1,this._y1);// falls through
case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);// falls through
default:r(this,e,t)}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}}}),_.register("aFwZp",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return new n(e)};var r=_("4MmJ6");function n(e){this._context=e}n.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,o=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,o):this._context.moveTo(n,o);break;case 3:this._point=4;// falls through
default:(0,r.point)(this,e,t)}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}}}),_.register("1uOPP",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=_("4MmJ6");function n(e,t){this._basis=new r.Basis(e),this._beta=t}n.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var e=this._x,t=this._y,r=e.length-1;if(r>0)for(var n,o=e[0],i=t[0],a=e[r]-o,u=t[r]-i,l=-1;++l<=r;)n=l/r,this._basis.point(this._beta*e[l]+(1-this._beta)*(o+n*a),this._beta*t[l]+(1-this._beta)*(i+n*u));this._x=this._y=null,this._basis.lineEnd()},point:function(e,t){this._x.push(+e),this._y.push(+t)}};var o=function e(t){function o(e){return 1===t?new r.Basis(e):new n(e,t)}return o.beta=function(t){return e(+t)},o}(.85);e.exports.default=o}),_.register("1RBVE",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.CardinalClosed=i,e.exports.default=void 0;var r,n=(r=_("9Id5q"))&&r.__esModule?r:{default:r},o=_("8MEVA");function i(e,t){this._context=e,this._k=(1-t)/6}i.prototype={areaStart:n.default,areaEnd:n.default,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x3=e,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=t);break;case 2:this._point=3,this._x5=e,this._y5=t;break;default:(0,o.point)(this,e,t)}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};var a=function e(t){function r(e){return new i(e,t)}return r.tension=function(t){return e(+t)},r}(0);e.exports.default=a}),_.register("8MEVA",function(e,t){function r(e,t,r){e._context.bezierCurveTo(e._x1+e._k*(e._x2-e._x0),e._y1+e._k*(e._y2-e._y0),e._x2+e._k*(e._x1-t),e._y2+e._k*(e._y1-r),e._x2,e._y2)}function n(e,t){this._context=e,this._k=(1-t)/6}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Cardinal=n,e.exports.default=void 0,e.exports.point=r,n.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:r(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2,this._x1=e,this._y1=t;break;case 2:this._point=3;// falls through
default:r(this,e,t)}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};var o=function e(t){function r(e){return new n(e,t)}return r.tension=function(t){return e(+t)},r}(0);e.exports.default=o}),_.register("88R3u",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.CardinalOpen=n,e.exports.default=void 0;var r=_("8MEVA");function n(e,t){this._context=e,this._k=(1-t)/6}n.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;// falls through
default:(0,r.point)(this,e,t)}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};var o=function e(t){function r(e){return new n(e,t)}return r.tension=function(t){return e(+t)},r}(0);e.exports.default=o}),_.register("63Rg9",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r,n=_("1RBVE"),o=(r=_("9Id5q"))&&r.__esModule?r:{default:r},i=_("jeCIz");function a(e,t){this._context=e,this._alpha=t}a.prototype={areaStart:o.default,areaEnd:o.default,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(e,t){if(e=+e,t=+t,this._point){var r=this._x2-e,n=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(r*r+n*n,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=e,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=t);break;case 2:this._point=3,this._x5=e,this._y5=t;break;default:(0,i.point)(this,e,t)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};var u=function e(t){function r(e){return t?new a(e,t):new n.CardinalClosed(e,0)}return r.alpha=function(t){return e(+t)},r}(.5);e.exports.default=u}),_.register("jeCIz",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0,e.exports.point=o;var r=_("8EE7R"),n=_("8MEVA");function o(e,t,n){var o=e._x1,i=e._y1,a=e._x2,u=e._y2;if(e._l01_a>r.epsilon){var l=2*e._l01_2a+3*e._l01_a*e._l12_a+e._l12_2a,s=3*e._l01_a*(e._l01_a+e._l12_a);o=(o*l-e._x0*e._l12_2a+e._x2*e._l01_2a)/s,i=(i*l-e._y0*e._l12_2a+e._y2*e._l01_2a)/s}if(e._l23_a>r.epsilon){var c=2*e._l23_2a+3*e._l23_a*e._l12_a+e._l12_2a,f=3*e._l23_a*(e._l23_a+e._l12_a);a=(a*c+e._x1*e._l23_2a-t*e._l12_2a)/f,u=(u*c+e._y1*e._l23_2a-n*e._l12_2a)/f}e._context.bezierCurveTo(o,i,a,u,e._x2,e._y2)}function i(e,t){this._context=e,this._alpha=t}i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){if(e=+e,t=+t,this._point){var r=this._x2-e,n=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(r*r+n*n,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3;// falls through
default:o(this,e,t)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};var a=function e(t){function r(e){return t?new i(e,t):new n.Cardinal(e,0)}return r.alpha=function(t){return e(+t)},r}(.5);e.exports.default=a}),_.register("4JV2s",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=_("88R3u"),n=_("jeCIz");function o(e,t){this._context=e,this._alpha=t}o.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){if(e=+e,t=+t,this._point){var r=this._x2-e,o=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(r*r+o*o,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;// falls through
default:(0,n.point)(this,e,t)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};var i=function e(t){function n(e){return t?new o(e,t):new r.CardinalOpen(e,0)}return n.alpha=function(t){return e(+t)},n}(.5);e.exports.default=i}),_.register("7HCNf",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return new o(e)};var r,n=(r=_("9Id5q"))&&r.__esModule?r:{default:r};function o(e){this._context=e}o.prototype={areaStart:n.default,areaEnd:n.default,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}}}),_.register("eqBPr",function(e,t){// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function r(e,t,r){var n=e._x1-e._x0,o=t-e._x1,i=(e._y1-e._y0)/(n||o<0&&-0),a=(r-e._y1)/(o||n<0&&-0);return((i<0?-1:1)+(a<0?-1:1))*Math.min(Math.abs(i),Math.abs(a),.5*Math.abs((i*o+a*n)/(n+o)))||0}// Calculate a one-sided slope.
function n(e,t){var r=e._x1-e._x0;return r?(3*(e._y1-e._y0)/r-t)/2:t}// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function o(e,t,r){var n=e._x0,o=e._y0,i=e._x1,a=e._y1,u=(i-n)/3;e._context.bezierCurveTo(n+u,o+u*t,i-u,a-u*r,i,a)}function i(e){this._context=e}function a(e){this._context=new u(e)}function u(e){this._context=e}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.monotoneX=function(e){return new i(e)},e.exports.monotoneY=function(e){return new a(e)},i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:o(this,this._t0,n(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var i=NaN;if(t=+t,(e=+e)!==this._x1||t!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,o(this,n(this,i=r(this,e,t)),i);break;default:o(this,this._t0,i=r(this,e,t))}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=i}// Ignore coincident points.
}},(a.prototype=Object.create(i.prototype)).point=function(e,t){i.prototype.point.call(this,t,e)},u.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,r,n,o,i){this._context.bezierCurveTo(t,e,n,r,i,o)}}}),_.register("dY7QQ",function(e,t){function r(e){this._context=e}function n(e){var t,r,n=e.length-1,o=Array(n),i=Array(n),a=Array(n);for(o[0]=0,i[0]=2,a[0]=e[0]+2*e[1],t=1;t<n-1;++t)o[t]=1,i[t]=4,a[t]=4*e[t]+2*e[t+1];for(o[n-1]=2,i[n-1]=7,a[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)r=o[t]/i[t-1],i[t]-=r,a[t]-=r*a[t-1];for(o[n-1]=a[n-1]/i[n-1],t=n-2;t>=0;--t)o[t]=(a[t]-o[t+1])/i[t];for(t=0,i[n-1]=(e[n]+o[n-1])/2;t<n-1;++t)i[t]=2*e[t+1]-o[t+1];return[o,i]}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return new r(e)},r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,r=e.length;if(r){if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),2===r)this._context.lineTo(e[1],t[1]);else for(var o=n(e),i=n(t),a=0,u=1;u<r;++a,++u)this._context.bezierCurveTo(o[0][a],i[0][a],o[1][a],i[1][a],e[u],t[u])}(this._line||0!==this._line&&1===r)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}}}),_.register("llSQy",function(e,t){function r(e,t){this._context=e,this._t=t}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return new r(e,.5)},e.exports.stepAfter=function(e){return new r(e,1)},e.exports.stepBefore=function(e){return new r(e,0)},r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;// falls through
default:if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var r=this._x*(1-this._t)+e*this._t;this._context.lineTo(r,this._y),this._context.lineTo(r,t)}}this._x=e,this._y=t}}}),_.register("l6qno",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){var e=(0,n.default)([]),t=i.default,a=o.default,s=u;function c(n){var o,i,u=Array.from(e.apply(this,arguments),l),c=u.length,f=-1;for(let e of n)for(o=0,++f;o<c;++o)(u[o][f]=[0,+s(e,u[o].key,f,n)]).data=e;for(o=0,i=(0,r.default)(t(u));o<c;++o)u[i[o]].index=o;return a(u,i),u}return c.keys=function(t){return arguments.length?(e="function"==typeof t?t:(0,n.default)(Array.from(t)),c):e},c.value=function(e){return arguments.length?(s="function"==typeof e?e:(0,n.default)(+e),c):s},c.order=function(e){return arguments.length?(t=null==e?i.default:"function"==typeof e?e:(0,n.default)(Array.from(e)),c):t},c.offset=function(e){return arguments.length?(a=null==e?o.default:e,c):a},c};var r=a(_("72xzV")),n=a(_("1SFIt")),o=a(_("7CMPN")),i=a(_("5Nf2s"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return e[t]}function l(e){let t=[];return t.key=e,t}}),_.register("7CMPN",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if((o=e.length)>1)for(var r,n,o,i=1,a=e[t[0]],u=a.length;i<o;++i)for(n=a,a=e[t[i]],r=0;r<u;++r)a[r][1]+=a[r][0]=isNaN(n[r][1])?n[r][0]:n[r][1]}}),_.register("5Nf2s",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=e.length,r=Array(t);--t>=0;)r[t]=t;return r}}),_.register("fpjqO",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if((o=e.length)>0){for(var r,o,i,a=0,u=e[0].length;a<u;++a){for(i=r=0;r<o;++r)i+=e[r][a][1]||0;if(i)for(r=0;r<o;++r)e[r][a][1]/=i}(0,n.default)(e,t)}};var r,n=(r=_("7CMPN"))&&r.__esModule?r:{default:r}}),_.register("l5EV1",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if((u=e.length)>0)for(var r,n,o,i,a,u,l=0,s=e[t[0]].length;l<s;++l)for(i=a=0,r=0;r<u;++r)(o=(n=e[t[r]][l])[1]-n[0])>0?(n[0]=i,n[1]=i+=o):o<0?(n[1]=a,n[0]=a+=o):(n[0]=0,n[1]=o)}}),_.register("4ViQy",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if((r=e.length)>0){for(var r,o=0,i=e[t[0]],a=i.length;o<a;++o){for(var u=0,l=0;u<r;++u)l+=e[u][o][1]||0;i[o][1]+=i[o][0]=-l/2}(0,n.default)(e,t)}};var r,n=(r=_("7CMPN"))&&r.__esModule?r:{default:r}}),_.register("fIpqC",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if((i=e.length)>0&&(o=(r=e[t[0]]).length)>0){for(var r,o,i,a=0,u=1;u<o;++u){for(var l=0,s=0,c=0;l<i;++l){for(var f=e[t[l]],p=f[u][1]||0,d=(p-(f[u-1][1]||0))/2,h=0;h<l;++h){var y=e[t[h]];d+=(y[u][1]||0)-(y[u-1][1]||0)}s+=p,c+=d*p}r[u-1][1]+=r[u-1][0]=a,s&&(a-=c/s)}r[u-1][1]+=r[u-1][0]=a,(0,n.default)(e,t)}};var r,n=(r=_("7CMPN"))&&r.__esModule?r:{default:r}}),_.register("5qWRn",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=e.map(o);return(0,n.default)(e).sort(function(e,r){return t[e]-t[r]})};var r,n=(r=_("5Nf2s"))&&r.__esModule?r:{default:r};function o(e){for(var t,r=-1,n=0,o=e.length,i=-1/0;++r<o;)(t=+e[r][1])>i&&(i=t,n=r);return n}}),_.register("klspr",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=e.map(o);return(0,n.default)(e).sort(function(e,r){return t[e]-t[r]})},e.exports.sum=o;var r,n=(r=_("5Nf2s"))&&r.__esModule?r:{default:r};function o(e){for(var t,r=0,n=-1,o=e.length;++n<o;)(t=+e[n][1])&&(r+=t);return r}}),_.register("kwAJ5",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return(0,n.default)(e).reverse()};var r,n=(r=_("klspr"))&&r.__esModule?r:{default:r}}),_.register("4fWJp",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t,r,i=e.length,a=e.map(o.sum),u=(0,n.default)(e),l=0,s=0,c=[],f=[];for(t=0;t<i;++t)r=u[t],l<s?(l+=a[r],c.push(r)):(s+=a[r],f.push(r));return f.reverse().concat(c)};var r,n=(r=_("5qWRn"))&&r.__esModule?r:{default:r},o=_("klspr")}),_.register("aFPqy",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return(0,n.default)(e).reverse()};var r,n=(r=_("5Nf2s"))&&r.__esModule?r:{default:r}});var S={};S=_("1b2ls");var w=_("1u0KT");eE=w.createRoot,w.hydrateRoot;var P=_("acw62"),O=function(){return(O=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function E(e,t,r){if(r||2==arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var P=_("acw62"),j={};//
j=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;// Test for A's keys different from B.
for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var s=i[l];if(!u(s))return!1;var c=e[s],f=t[s];if(!1===(o=r?r.call(n,c,f,s):void 0)||void 0===o&&c!==f)return!1}return!0};var k="-ms-",M="-moz-",A="-webkit-",T="comm",C="rule",L="decl",N="@keyframes",I=Math.abs,R=String.fromCharCode,D=Object.assign;function G(e,t){return(e=t.exec(e))?e[0]:e}function V(e,t,r){return e.replace(t,r)}function F(e,t){return e.indexOf(t)}function z(e,t){return 0|e.charCodeAt(t)}function K(e,t,r){return e.slice(t,r)}function Q(e){return e.length}function H(e,t){return t.push(e),e}function W(e,t){return e.filter(function(e){return!G(e,t)})}var B=1,Y=1,U=0,$=0,q=0,X="";function J(e,t,r,n,o,i,a,u){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:B,column:Y,length:a,return:"",siblings:u}}function Z(e,t){return D(J("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ee(e){for(;e.root;)e=Z(e.root,{children:[e]});H(e,e.siblings)}function et(){return q=$<U?z(X,$++):0,Y++,10===q&&(Y=1,B++),q}function er(){return z(X,$)}function en(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function eo(e){var t,r;return(t=$-1,r=function e(t){for(;et();)switch(q){case t:return $;case 34:case 39:34!==t&&39!==t&&e(q);break;case 40:41===t&&e(t);break;case 92:et()}return $}(91===e?e+2:40===e?e+1:e),K(X,t,r)).trim()}function ei(e,t,r,n,o,i,a,u,l,s,c,f){for(var p=o-1,d=0===o?i:[""],h=d.length,y=0,v=0,m=0;y<n;++y)for(var g=0,b=K(e,p+1,p=I(v=a[y])),x=e;g<h;++g)(x=(v>0?d[g]+" "+b:V(b,/&\f/g,d[g])).trim())&&(l[m++]=x);return J(e,t,r,0===o?C:u,l,s,c,f)}function ea(e,t,r,n,o){return J(e,t,r,L,K(e,0,n),K(e,n+1,-1),n,o)}function eu(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function el(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case L:return e.return=e.return||e.value;case T:return"";case N:return e.return=e.value+"{"+eu(e.children,n)+"}";case C:if(!Q(e.value=e.props.join(",")))return""}return Q(r=eu(e.children,n))?e.return=e.value+"{"+r+"}":""}function es(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case L:e.return=function e(t,r,n){var o;switch(o=r,45^z(t,0)?(((o<<2^z(t,0))<<2^z(t,1))<<2^z(t,2))<<2^z(t,3):0){case 5103:return A+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+t+t;case 4789:return M+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return A+t+M+t+k+t+t;case 5936:switch(z(t,r+11)){case 114:return A+t+k+V(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return A+t+k+V(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return A+t+k+V(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return A+t+k+t+t;case 6165:return A+t+k+"flex-"+t+t;case 5187:return A+t+V(t,/(\w+).+(:[^]+)/,A+"box-$1$2"+k+"flex-$1$2")+t;case 5443:return A+t+k+"flex-item-"+V(t,/flex-|-self/g,"")+(G(t,/flex-|baseline/)?"":k+"grid-row-"+V(t,/flex-|-self/g,""))+t;case 4675:return A+t+k+"flex-line-pack"+V(t,/align-content|flex-|-self/g,"")+t;case 5548:return A+t+k+V(t,"shrink","negative")+t;case 5292:return A+t+k+V(t,"basis","preferred-size")+t;case 6060:return A+"box-"+V(t,"-grow","")+A+t+k+V(t,"grow","positive")+t;case 4554:return A+V(t,/([^-])(transform)/g,"$1"+A+"$2")+t;case 6187:return V(V(V(t,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),t,"")+t;case 5495:case 3959:return V(t,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return V(V(t,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+t+t;case 4200:if(!G(t,/flex-|baseline/))return k+"grid-column-align"+K(t,r)+t;break;case 2592:case 3360:return k+V(t,"template-","")+t;case 4384:case 3616:if(n&&n.some(function(e,t){return r=t,G(e.props,/grid-\w+-end/)}))return~F(t+(n=n[r].value),"span")?t:k+V(t,"-start","")+t+k+"grid-row-span:"+(~F(n,"span")?G(n,/\d+/):+G(n,/\d+/)-+G(t,/\d+/))+";";return k+V(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(e){return G(e.props,/grid-\w+-start/)})?t:k+V(V(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return V(t,/(.+)-inline(.+)/,A+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Q(t)-1-r>6)switch(z(t,r+1)){case 109:if(45!==z(t,r+4))break;case 102:return V(t,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+M+(108==z(t,r+3)?"$3":"$2-$3"))+t;case 115:return~F(t,"stretch")?e(V(t,"stretch","fill-available"),r,n)+t:t}break;case 5152:case 5920:return V(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,r,n,o,i,a,u){return k+r+":"+n+u+(o?k+r+"-span:"+(i?a:+a-+n)+u:"")+t});case 4949:if(121===z(t,r+6))return V(t,":",":"+A)+t;break;case 6444:switch(z(t,45===z(t,14)?18:11)){case 120:return V(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+A+(45===z(t,14)?"inline-":"")+"box$3$1"+A+"$2$3$1"+k+"$2box$3")+t;case 100:return V(t,":",":"+k)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return V(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,r);return;case N:return eu([Z(e,{value:V(e.value,"@","@"+A)})],n);case C:if(e.length)return(r=e.props).map(function(t){switch(G(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ee(Z(e,{props:[V(t,/:(read-\w+)/,":"+M+"$1")]})),ee(Z(e,{props:[t]})),D(e,{props:W(r,n)});break;case"::placeholder":ee(Z(e,{props:[V(t,/:(plac\w+)/,":"+A+"input-$1")]})),ee(Z(e,{props:[V(t,/:(plac\w+)/,":"+M+"$1")]})),ee(Z(e,{props:[V(t,/:(plac\w+)/,k+"input-$1")]})),ee(Z(e,{props:[t]})),D(e,{props:W(r,n)})}return""}).join("")}}var ec={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,// SVG-related properties
fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ef=_("hPtJY"),ep=(void 0!==ef&&ef.env,"data-styled"),ed="undefined"!=typeof window&&"HTMLElement"in window,eh=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:(void 0!==ef&&ef.env,void 0!==ef&&ef.env,!1)),ey={},ev=Object.freeze([]),em=Object.freeze({});function eg(e,t,r){return void 0===r&&(r=em),e.theme!==r.theme&&e.theme||t||r.theme}var eb=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ex=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,e_=/(^-|-$)/g;function eS(e){return e.replace(ex,"-").replace(e_,"")}var ew=/(a)(d)/gi,eP=function(e){return String.fromCharCode(e+(e>25?39:97))};function eO(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=eP(t%52)+r;return(eP(t%52)+r).replace(ew,"$1-$2")}var eE,ej,ek=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},eM=function(e){return ek(5381,e)};function eA(e){return"string"==typeof e}var eT="function"==typeof Symbol&&Symbol.for,eC=eT?Symbol.for("react.memo"):60115,eL=eT?Symbol.for("react.forward_ref"):60112,eN={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},eI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},eR={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},eD=((ej={})[eL]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ej[eC]=eR,ej);function eG(e){return("type"in e&&e.type.$$typeof)===eC?eR:"$$typeof"in e?eD[e.$$typeof]:eN}var eV=Object.defineProperty,eF=Object.getOwnPropertyNames,ez=Object.getOwnPropertySymbols,eK=Object.getOwnPropertyDescriptor,eQ=Object.getPrototypeOf,eH=Object.prototype;function eW(e){return"function"==typeof e}function eB(e){return"object"==typeof e&&"styledComponentId"in e}function eY(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function eU(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function e$(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function eq(e,t){Object.defineProperty(e,"toString",{value:t})}function eX(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var eJ=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw eX(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=n;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),u=(i=0,t.length);i<u;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,i=n;i<o;i++)t+="".concat(this.tag.getRule(i)).concat("/*!sc*/\n");return t},e}(),eZ=new Map,e0=new Map,e1=1,e2=function(e){if(eZ.has(e))return eZ.get(e);for(;e0.has(e1);)e1++;var t=e1++;return eZ.set(e,t),e0.set(t,e),t},e3=function(e,t){eZ.set(e,t),e0.set(t,e)},e4="style[".concat(ep,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),e5=new RegExp("^".concat(ep,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),e6=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},e8=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split("/*!sc*/\n"),o=[],i=0,a=n.length;i<a;i++){var u=n[i].trim();if(u){var l=u.match(e5);if(l){var s=0|parseInt(l[1],10),c=l[2];0!==s&&(e3(c,s),e6(e,c,l[3]),e.getTag().insertRules(s,o)),o.length=0}else o.push(u)}}};function e7(){return"undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var e9=function(e){var t,r=document.head,n=e||r,o=document.createElement("style"),i=(t=Array.from(n.querySelectorAll("style[".concat(ep,"]"))))[t.length-1],a=void 0!==i?i.nextSibling:null;o.setAttribute(ep,"active"),o.setAttribute("data-styled-version","6.0.8");var u=e7();return u&&o.setAttribute("nonce",u),n.insertBefore(o,a),o},te=function(){function e(e){this.element=e9(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw eX(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),tt=function(){function e(e){this.element=e9(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),tr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),tn=ed,to={isServer:!ed,useCSSOMInjection:!eh},ti=function(){function e(e,t,r){void 0===e&&(e=em),void 0===t&&(t={});var n=this;this.options=O(O({},to),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&ed&&tn&&(tn=!1,function(e){for(var t=document.querySelectorAll(e4),r=0,n=t.length;r<n;r++){var o=t[r];o&&"active"!==o.getAttribute(ep)&&(e8(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),eq(this,function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=0;o<r;o++)(function(r){var o=e0.get(r);if(void 0!==o){var i=e.names.get(o),a=t.getGroup(r);if(void 0!==i&&0!==a.length){var u="".concat(ep,".g").concat(r,'[id="').concat(o,'"]'),l="";void 0!==i&&i.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),n+="".concat(a).concat(u,'{content:"').concat(l,'"}').concat("/*!sc*/\n")}}})(o);return n}(n)})}return e.registerId=function(e){return e2(e)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(O(O({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e,t,r,n;return this.tag||(this.tag=(r=(t=this.options).useCSSOMInjection,n=t.target,e=t.isServer?new tr(n):r?new te(n):new tt(n),new eJ(e)))},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(e2(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(e2(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(e2(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ta=/&/g,tu=/^\s*\/\/.*$/gm;function tl(e){var t,r,n,o=void 0===e?em:e,i=o.options,a=void 0===i?em:i,u=o.plugins,l=void 0===u?ev:u,s=function(e,n,o){return o===r||o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},c=l.slice();c.push(function(e){e.type===C&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(ta,r).replace(n,s))}),a.prefix&&c.push(es),c.push(el);var f=function(e,o,i,u){void 0===o&&(o=""),void 0===i&&(i=""),void 0===u&&(u="&"),t=u,r=o,n=RegExp("\\".concat(r,"\\b"),"g");var l,s,f,p,d,h=e.replace(tu,""),y=(d=function e(t,r,n,o,i,a,u,l,s){for(var c,f=0,p=0,d=u,h=0,y=0,v=0,m=1,g=1,b=1,x=0,_="",S=i,w=a,P=o,O=_;g;)switch(v=x,x=et()){case 40:if(108!=v&&58==z(O,d-1)){-1!=F(O+=V(eo(x),"&","&\f"),"&\f")&&(b=-1);break}case 34:case 39:case 91:O+=eo(x);break;case 9:case 10:case 13:case 32:O+=function(e){for(;q=er();)if(q<33)et();else break;return en(e)>2||en(q)>3?"":" "}(v);break;case 92:O+=function(e,t){for(var r;--t&&et()&&!(q<48)&&!(q>102)&&(!(q>57)||!(q<65))&&(!(q>70)||!(q<97)););return r=$+(t<6&&32==er()&&32==et()),K(X,e,r)}($-1,7);continue;case 47:switch(er()){case 42:case 47:H(J(c=function(e,t){for(;et();)if(e+q===57)break;else if(e+q===84&&47===er())break;return"/*"+K(X,t,$-1)+"*"+R(47===e?e:et())}(et(),$),r,n,T,R(q),K(c,2,-2),0,s),s);break;default:O+="/"}break;case 123*m:l[f++]=Q(O)*b;case 125*m:case 59:case 0:switch(x){case 0:case 125:g=0;case 59+p:-1==b&&(O=V(O,/\f/g,"")),y>0&&Q(O)-d&&H(y>32?ea(O+";",o,n,d-1,s):ea(V(O," ","")+";",o,n,d-2,s),s);break;case 59:O+=";";default:if(H(P=ei(O,r,n,f,p,i,l,_,S=[],w=[],d,a),a),123===x){if(0===p)e(O,r,P,P,S,a,d,l,w);else switch(99===h&&110===z(O,3)?100:h){case 100:case 108:case 109:case 115:e(t,P,P,o&&H(ei(t,P,P,0,0,i,l,_,i,S=[],d,w),w),i,w,d,l,o?S:w);break;default:e(O,P,P,P,[""],w,0,l,w)}}}f=p=y=0,m=b=1,_=O="",d=u;break;case 58:d=1+Q(O),y=v;default:if(m<1){if(123==x)--m;else if(125==x&&0==m++&&125==(q=$>0?z(X,--$):0,Y--,10===q&&(Y=1,B--),q))continue}switch(O+=R(x),x*m){case 38:b=p>0?1:(O+="\f",-1);break;case 44:l[f++]=(Q(O)-1)*b,b=1;break;case 64:45===er()&&(O+=eo(et())),h=er(),p=d=Q(_=O+=function(e){for(;!en(er());)et();return K(X,e,$)}($)),x++;break;case 45:45===v&&2==Q(O)&&(m=0)}}return a}("",null,null,null,[""],(p=f=i||o?"".concat(i," ").concat(o," { ").concat(h," }"):h,B=Y=1,U=Q(X=p),$=0,f=[]),0,[0],f),X="",d);a.namespace&&(y=function e(t,r){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(r," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(r," ")),t.props=t.props.map(function(e){return"".concat(r," ").concat(e)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=e(t.children,r)),t})}(y,a.namespace));var v=[];return eu(y,(s=(l=c.concat(function(e){var t;!e.root&&(e=e.return)&&(t=e,v.push(t))})).length,function(e,t,r,n){for(var o="",i=0;i<s;i++)o+=l[i](e,t,r,n)||"";return o})),v};return f.hash=l.length?l.reduce(function(e,t){return t.name||eX(15),ek(e,t.name)},5381).toString():"",f}var ts=new ti,tc=tl(),tf=/*@__PURE__*/g(P).createContext({shouldForwardProp:void 0,styleSheet:ts,stylis:tc}),tp=(tf.Consumer,/*@__PURE__*/g(P).createContext(void 0));function td(){return(0,P.useContext)(tf)}function th(e){var t=(0,P.useState)(e.stylisPlugins),r=t[0],n=t[1],o=td().styleSheet,i=(0,P.useMemo)(function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,o]),a=(0,P.useMemo)(function(){return tl({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,P.useEffect)(function(){/*@__PURE__*/g(j)(r,e.stylisPlugins)||n(e.stylisPlugins)},[e.stylisPlugins]);var u=(0,P.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:a}},[e.shouldForwardProp,i,a]);return /*@__PURE__*/g(P).createElement(tf.Provider,{value:u},/*@__PURE__*/g(P).createElement(tp.Provider,{value:a},e.children))}var ty=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=tc);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,eq(this,function(){throw eX(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=tc),this.name+e.hash},e}();function tv(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;n>="A"&&n<="Z"?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var tm=function(e){return null==e||!1===e||""===e},tg=function(e){var t=[];for(var r in e){var n=e[r];e.hasOwnProperty(r)&&!tm(n)&&(Array.isArray(n)&&n.isCss||eW(n)?t.push("".concat(tv(r),":"),n,";"):e$(n)?t.push.apply(t,E(E(["".concat(r," {")],tg(n),!1),["}"],!1)):t.push("".concat(tv(r),": ").concat(null==n||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||r in ec||r.startsWith("--")?String(n).trim():"".concat(n,"px"),";")))}return t};function tb(e,t,r,n){return tm(e)?[]:eB(e)?[".".concat(e.styledComponentId)]:eW(e)?!eW(e)||e.prototype&&e.prototype.isReactComponent||!t?[e]:tb(e(t),t,r,n):e instanceof ty?r?(e.inject(r,n),[e.getName(n)]):[e]:e$(e)?tg(e):Array.isArray(e)?Array.prototype.concat.apply(ev,e.map(function(e){return tb(e,t,r,n)})):[e.toString()]}function tx(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(eW(r)&&!eB(r))return!1}return!0}var t_=eM("6.0.8"),tS=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&tx(e),this.componentId=t,this.baseHash=ek(t_,t),this.baseStyle=r,ti.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash){if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=eY(n,this.staticRulesId);else{var o=eU(tb(this.rules,e,t,r)),i=eO(ek(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=r(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}n=eY(n,i),this.staticRulesId=i}}else{for(var u=ek(this.baseHash,r.hash),l="",s=0;s<this.rules.length;s++){var c=this.rules[s];if("string"==typeof c)l+=c;else if(c){var f=eU(tb(c,e,t,r));u=ek(u,f+s),l+=f}}if(l){var p=eO(u>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(l,".".concat(p),void 0,this.componentId)),n=eY(n,p)}}return n},e}(),tw=/*@__PURE__*/g(P).createContext(void 0);tw.Consumer;var tP={};function tO(e,t,r){var n,o,i,a,u=eB(e),l=!eA(e),s=t.attrs,c=void 0===s?ev:s,f=t.componentId,p=void 0===f?(n=t.displayName,o=t.parentComponentId,tP[i="string"!=typeof n?"sc":eS(n)]=(tP[i]||0)+1,a="".concat(i,"-").concat(eO(eM("6.0.8"+i+tP[i])>>>0)),o?"".concat(o,"-").concat(a):a):f,d=(void 0===t.displayName&&(eA(e)||e.displayName||e.name),t.displayName&&t.componentId?"".concat(eS(t.displayName),"-").concat(t.componentId):t.componentId||p),h=u&&e.attrs?e.attrs.concat(c).filter(Boolean):c,y=t.shouldForwardProp;if(u&&e.shouldForwardProp){var v=e.shouldForwardProp;if(t.shouldForwardProp){var m=t.shouldForwardProp;y=function(e,t){return v(e,t)&&m(e,t)}}else y=v}var b=new tS(r,d,u?e.componentStyle:void 0),x=/*@__PURE__*/g(P).forwardRef(function(e,t){return function(e,t,r){var n,o=e.attrs,i=e.componentStyle,a=e.defaultProps,u=e.foldedComponentIds,l=e.styledComponentId,s=e.target,c=/*@__PURE__*/g(P).useContext(tw),f=td(),p=e.shouldForwardProp||f.shouldForwardProp,d=function(e,t,r){for(var n,o=O(O({},t),{className:void 0,theme:r}),i=0;i<e.length;i+=1){var a=eW(n=e[i])?n(o):n;for(var u in a)o[u]="className"===u?eY(o[u],a[u]):"style"===u?O(O({},o[u]),a[u]):a[u]}return t.className&&(o.className=eY(o.className,t.className)),o}(o,t,eg(t,c,a)||em),h=d.as||s,y={};for(var v in d)void 0===d[v]||"$"===v[0]||"as"===v||"theme"===v||("forwardedAs"===v?y.as=d.forwardedAs:p&&!p(v,h)||(y[v]=d[v]));var m=(n=td(),i.generateAndInjectStyles(d,n.styleSheet,n.stylis)),b=eY(u,l);return m&&(b+=" "+m),d.className&&(b+=" "+d.className),y[eA(h)&&!eb.has(h)?"class":"className"]=b,y.ref=r,(0,P.createElement)(h,y)}(x,e,t)});return x.attrs=h,x.componentStyle=b,x.shouldForwardProp=y,x.foldedComponentIds=u?eY(e.foldedComponentIds,e.styledComponentId):"",x.styledComponentId=d,x.target=u?e.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=u?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0;n<t.length;n++)(function e(t,r,n){if(void 0===n&&(n=!1),!n&&!e$(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)t[o]=e(t[o],r[o]);else if(e$(r))for(var o in r)t[o]=e(t[o],r[o]);return t})(e,t[n],!0);return e}({},e.defaultProps,t):t}}),eq(x,function(){return".".concat(x.styledComponentId)}),l&&function e(t,r,n){if("string"!=typeof r){if(eH){var o=eQ(r);o&&o!==eH&&e(t,o,n)}var i=eF(r);ez&&(i=i.concat(ez(r)));for(var a=eG(t),u=eG(r),l=0;l<i.length;++l){var s=i[l];if(!(s in eI||n&&n[s]||u&&s in u||a&&s in a)){var c=eK(r,s);try{eV(t,s,c)}catch(e){}}}}return t}(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function tE(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var tj=function(e){return Object.assign(e,{isCss:!0})};function tk(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return eW(e)||e$(e)?tj(tb(tE(ev,E([e],t,!0)))):0===t.length&&1===e.length&&"string"==typeof e[0]?tb(e):tj(tb(tE(e,t)))}var tM=function(e){return function e(t,r,n){if(void 0===n&&(n=em),!r)throw eX(1,r);var o=function(e){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return t(r,n,tk.apply(void 0,E([e],o,!1)))};return o.attrs=function(o){return e(t,r,O(O({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},o.withConfig=function(o){return e(t,r,O(O({},n),o))},o}(tO,e)};eb.forEach(function(e){tM[e]=tM(e)});var tA=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=tx(e),ti.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,r,n){var o=n(eU(tb(this.rules,t,r,n)),""),i=this.componentId+e;r.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&ti.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),r=e7(),n=eU([r&&'nonce="'.concat(r,'"'),"".concat(ep,'="true"'),"".concat("data-styled-version",'="').concat("6.0.8",'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw eX(2);return e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)throw eX(2);var t,r=((t={})[ep]="",t["data-styled-version"]="6.0.8",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),n=e7();return n&&(r.nonce=n),[/*@__PURE__*/g(P).createElement("style",O({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new ti({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw eX(2);return /*@__PURE__*/g(P).createElement(th,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw eX(3)}}();var P=_("acw62"),tT={};self,tT=(()=>{var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.r(t),e.d(t,{default:()=>i});var i=function(){var e,t;function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.sampleRate;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,n),this._context=this._createContext(),t||(t=this._context.sampleRate),this._sampleRate=t}return e=[{key:"_createContext",value:function(){return window.AudioContext=window.AudioContext||window.webkitAudioContext||window.mozAudioContext,new AudioContext}},{key:"context",get:function(){return this._context}},{key:"fetchAudio",value:async function(){for(var e=this,t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return await Promise.all(r.map(async function(t){var r;return r=t instanceof File||t instanceof Blob?await t.arrayBuffer():await fetch(t).then(function(e){return e.headers.has("Content-Type")&&!e.headers.get("Content-Type").includes("audio/")&&console.warn("Crunker: Attempted to fetch an audio file, but its MIME type is `".concat(e.headers.get("Content-Type").split(";")[0],"`. We'll try and continue anyway. (file: \"").concat(t,'")')),e.arrayBuffer()}),await e._context.decodeAudioData(r)}))}},{key:"mergeAudio",value:function(e){var t=this._context.createBuffer(this._maxNumberOfChannels(e),this._sampleRate*this._maxDuration(e),this._sampleRate);return e.forEach(function(e){for(var r=0;r<e.numberOfChannels;r++){for(var n=t.getChannelData(r),o=e.getChannelData(r),i=e.getChannelData(r).length-1;i>=0;i--)n[i]+=o[i];t.getChannelData(r).set(n)}}),t}},{key:"concatAudio",value:function(e){var t=this._context.createBuffer(this._maxNumberOfChannels(e),this._totalLength(e),this._sampleRate),r=0;return e.forEach(function(e){for(var n=0;n<e.numberOfChannels;n++)t.getChannelData(n).set(e.getChannelData(n),r);r+=e.length}),t}},{key:"padAudio",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(0===r)return e;if(t<0)throw Error('Crunker: Parameter "padStart" in padAudio must be positive');if(r<0)throw Error('Crunker: Parameter "seconds" in padAudio must be positive');for(var n=this._context.createBuffer(e.numberOfChannels,Math.ceil(e.length+r*e.sampleRate),e.sampleRate),o=0;o<e.numberOfChannels;o++){var i=e.getChannelData(o);n.getChannelData(o).set(i.subarray(0,Math.ceil(t*e.sampleRate)+1),0),n.getChannelData(o).set(i.subarray(Math.ceil(t*e.sampleRate)+2,n.length+1),Math.ceil((t+r)*e.sampleRate))}return n}},{key:"play",value:function(e){var t=this._context.createBufferSource();return t.buffer=e,t.connect(this._context.destination),t.start(),t}},{key:"export",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"audio/wav",r=this._interleave(e),n=this._writeHeaders(r,e.numberOfChannels,e.sampleRate),o=new Blob([n],{type:t});return{blob:o,url:this._renderURL(o),element:this._renderAudioElement(o)}}},{key:"download",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"crunker",r=document.createElement("a");return r.style.display="none",r.href=this._renderURL(e),r.download="".concat(t,".").concat(e.type.split("/")[1]),r.click(),r}},{key:"notSupported",value:function(e){return this._isSupported()?void 0:e()}},{key:"close",value:function(){return this._context.close(),this}},{key:"_maxDuration",value:function(e){return Math.max.apply(Math,r(e.map(function(e){return e.duration})))}},{key:"_maxNumberOfChannels",value:function(e){return Math.max.apply(Math,r(e.map(function(e){return e.numberOfChannels})))}},{key:"_totalLength",value:function(e){return e.map(function(e){return e.length}).reduce(function(e,t){return e+t},0)}},{key:"_isSupported",value:function(){return"AudioContext"in window||"webkitAudioContext"in window||"mozAudioContext"in window}},{key:"_writeHeaders",value:function(e,t,r){var n=2*t,o=2*e.length,i=36+o,a=new ArrayBuffer(8+i),u=new DataView(a);return this._writeString(u,0,"RIFF"),u.setUint32(4,i,!0),this._writeString(u,8,"WAVE"),this._writeString(u,12,"fmt "),u.setUint32(16,16,!0),u.setUint16(20,1,!0),u.setUint16(22,t,!0),u.setUint32(24,r,!0),u.setUint32(28,r*n,!0),u.setUint16(32,n,!0),u.setUint16(34,16,!0),this._writeString(u,36,"data"),u.setUint32(40,o,!0),this._floatTo16BitPCM(u,e,44)}},{key:"_floatTo16BitPCM",value:function(e,t,r){for(var n=0;n<t.length;n++,r+=2){var o=Math.max(-1,Math.min(1,t[n]));e.setInt16(r,o<0?32768*o:32767*o,!0)}return e}},{key:"_writeString",value:function(e,t,r){for(var n=0;n<r.length;n++)e.setUint8(t+n,r.charCodeAt(n))}},{key:"_interleave",value:function(e){for(var t=Array.from({length:e.numberOfChannels},function(e,t){return t}),r=t.reduce(function(t,r){return t+e.getChannelData(r).length},0),n=new Float32Array(r),o=0,i=0;o<r;)t.forEach(function(t){n[o++]=e.getChannelData(t)[i]}),i++;return n}},{key:"_renderAudioElement",value:function(e){var t=document.createElement("audio");return t.controls=!0,t.src=this._renderURL(e),t}},{key:"_renderURL",value:function(e){return(window.URL||window.webkitURL).createObjectURL(e)}}],o(n.prototype,e),t&&o(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}();return t})();var tC={};/*! For license information please see index.js.LICENSE.txt */(()=>{var e={251:(e,t,r)=>{var n=r(699),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,i={},s=null,c=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:c,props:i,_owner:u.current}}t.Fragment=i,t.jsx=s,t.jsxs=s},893:(e,t,r)=>{e.exports=r(251)},699:e=>{e.exports=_("acw62")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};for(var o in(()=>{r.r(n),r.d(n,{VideoSeekSlider:()=>p});var e=r(893),t=r(699);let o=(e,t,r)=>e>=t&&e<=r;function i(e,t,r,n){let i=o(e,t,r);return n?1:i?(e-t)/(r-t):0}let a=(0,t.memo)(({label:t="",startTime:r,maxTime:n,endTime:o,currentTime:a,seekHoverTime:u,bufferTime:l,isTimePassed:s=!1,isBufferPassed:c=!1,isHoverPassed:f=!1,onHover:p=()=>{},withGap:d})=>{let h=100*r/(n||-1),y=(o-r)/n*100,v=i(a,r,o,s),m=i(u,r,o,f),g=i(l,r,o,c);return(0,e.jsxs)("div",{className:"main"+(d?" with-gap":""),onMouseMove:()=>p(t),style:{width:`${y}%`,left:`${h}%`},children:[(0,e.jsx)("div",{className:"inner-seek-block buffered","data-test-id":"test-buffered",style:{transform:`scaleX(${g})`}}),(0,e.jsx)("div",{className:"inner-seek-block seek-hover","data-test-id":"test-seek-hover",style:{transform:`scaleX(${m})`}}),(0,e.jsx)("div",{className:"inner-seek-block connect",style:{transform:`scaleX(${v})`}})]})});function u(e,t,r){return Math.floor(e/100*+(100*t/r))}let l=(e,t,r)=>t+1<e.length?e[t+1].fromMs:r,s=({max:r=1e3,currentTime:n=0,bufferTime:i=0,seekHoverPosition:s=0,timeCodes:c,trackWidth:f,mobileSeeking:p,label:d,setLabel:h})=>{let y=u(r,s,f),v=(0,t.useCallback)(e=>{d!==e&&h(e)},[d]);return(0,t.useEffect)(()=>{if(!p)return;let e=c?.find(({fromMs:e},t)=>{let i=l(c,t,r);return o(n,e,i)});e?.description!==d&&h(e?.description||"")},[n,d,r,c]),(0,e.jsx)(e.Fragment,{children:c?.map(({fromMs:t,description:u},s)=>{let f=l(c,s,r),p=f<=n,d=f<=i,h=f<=y,m=o(n,t,f),g=p||!m?0:n;m=o(i,t,f);let b=d||!m?0:i;m=o(y,t,f);let x=h||!m?0:y;return e.jsx(a,{label:u,maxTime:r,startTime:t,endTime:f,isTimePassed:p,isBufferPassed:d,isHoverPassed:h,currentTime:g,bufferTime:b,seekHoverTime:x,onHover:v,withGap:!0},t)})})},c=({max:r,hoverTimeValue:n,offset:o,trackWidth:i,seekHoverPosition:a,isThumbActive:u,limitTimeTooltipBySides:l,label:s,minutesPrefix:c,secondsPrefix:f,getPreviewScreenUrl:p})=>{var d;let h;let y=(0,t.useRef)(null),v=(d=y?.current,h=0,d&&(h=a-d.offsetWidth/2,l&&(h<0?h=0:h+d.offsetWidth>i&&(h=i-d.offsetWidth))),{transform:`translateX(${h}px)`}),m=function(e,t,r=0,n="",o=""){let i=function(e,t=0){let r=Math.round(e/1e3+t),n=Math.floor(r/3600),o=r%3600,i=Math.floor(o/60),a=Math.ceil(o%60);return{hh:n.toString(),mm:i<10?`0${i}`:i.toString(),ss:a<10?`0${a}`:a.toString()}}(t,r);return e+r<6e4?o+i.ss:e+r<36e5?`${n+i.mm}:${i.ss}`:`${i.hh}:${i.mm}:${i.ss}`}(r,n,o,c,f);return(0,e.jsxs)("div",{className:u?"hover-time active":"hover-time",style:v,ref:y,"data-testid":"hover-time",children:[u&&p&&(0,e.jsx)("div",{className:"preview-screen",style:{backgroundImage:`url(${p(n)})`}}),s&&(0,e.jsx)("div",{children:s}),m]})},f=({max:t,currentTime:r,isThumbActive:n})=>(0,e.jsx)("div",{className:"thumb active","data-testid":"testThumb",style:{left:`calc(${r/t*100}% + -6px)`},children:(0,e.jsx)("div",{className:"handler"})}),p=({max:r=1e3,currentTime:n=0,bufferTime:i=0,hideThumbTooltip:p=!1,offset:d=0,secondsPrefix:h="",minutesPrefix:y="",limitTimeTooltipBySides:v=!0,timeCodes:m,onChange:g=()=>{},getPreviewScreenUrl:b})=>{let[x,_]=(0,t.useState)(0),[S,w]=(0,t.useState)(""),P=(0,t.useRef)(!1),O=(0,t.useRef)(!1),E=(0,t.useRef)(null),j=E.current?.offsetWidth||0,k=x>0||P.current,M=u(r,x,j),A=e=>{let t=E.current?.getBoundingClientRect(),n=t?.left||0,o=t?.width||0,i=e-n;i=(i=i<0?0:i)>o?o:i;let a=+(100*i/o*(r/100)).toFixed(0);_(i),g(a,a+d)},T=e=>{if(e.preventDefault(),e.stopPropagation(),!O.current)return;let{changedTouches:t}=e,r=t?.[t.length-1]?.pageX||0;A(r=r<0?0:r)},C=e=>{P.current&&A(e.pageX)},L=(e,t)=>{let r=E.current?.getBoundingClientRect().left||0,n=e?0:t.pageX-r;_(n)},N=(e=!0)=>{O.current=e,_(e?x:0)},I=(e,t)=>{t.preventDefault(),C(t),P.current=e,_(e?x:0)},R=e=>{I(!1,e)},D=()=>{N(!1)};return(0,t.useEffect)(()=>{if(!O.current)return;let e=m?.find(({fromMs:e},t)=>{let i=l(m,t,r);return o(n,e,i)});e?.description!==S&&w(e?.description||"")},[n,S,r,m]),(0,t.useEffect)(()=>(window.addEventListener("mousemove",C),window.addEventListener("mouseup",R),window.addEventListener("touchmove",T),window.addEventListener("touchend",D),()=>{window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",R),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",D)}),[r,d,j]),(0,e.jsxs)("div",{className:"ui-video-seek-slider",children:[(0,e.jsxs)("div",{className:k?"track active":"track",ref:E,onMouseMove:e=>L(!1,e),onMouseLeave:e=>L(!0,e),onMouseDown:e=>I(!0,e),onTouchStart:()=>N(!0),"data-testid":"main-track",children:[!!m?.length&&(0,e.jsx)(s,{currentTime:n,max:r,bufferTime:i,seekHoverPosition:x,timeCodes:m,mobileSeeking:O.current,trackWidth:j,label:S,setLabel:w}),!m&&(0,e.jsx)(a,{maxTime:r,startTime:0,endTime:r,currentTime:n,bufferTime:i,seekHoverTime:M})]}),!p&&(0,e.jsx)(c,{max:r,hoverTimeValue:M,isThumbActive:k,label:S,limitTimeTooltipBySides:v,offset:d,seekHoverPosition:x,trackWidth:j,getPreviewScreenUrl:b,minutesPrefix:y,secondsPrefix:h}),(0,e.jsx)(f,{max:r,currentTime:n,isThumbActive:k})]})}})(),n)tC[o]=n[o];n.__esModule&&Object.defineProperty(tC,"__esModule",{value:!0})})();const tL=tM.div`
	height: ${e=>e.h||0};
	width: ${e=>e.w||0};

	@media screen and (max-width: 64em) {
		height: ${e=>e.mh||e.h||0};
		width: ${e=>e.mw||e.w||0}
	}
`,tN=e=>t=>new Promise(r=>{setTimeout(()=>r(t),e)}),tI=(e,t=0)=>{let r=3735928559^t,n=1103547991^t;for(let t=0,o;t<e.length;t++)r=Math.imul(r^(o=e.charCodeAt(t)),2654435761),n=Math.imul(n^o,1597334677);return r=Math.imul(r^r>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),4294967296*(2097151&(n=Math.imul(n^n>>>16,2246822507)^Math.imul(r^r>>>13,3266489909)))+(r>>>0)},tR=e=>e.reduce((e,t)=>e+t,0),tD=e=>{let t=[],r=0;for(;t.length<e.length;){let n=tI(e,r);t=n%10<=5?[...t,...Array(n%8+3).fill(n%100+50)]:[...t,...Array(n%3+2).fill(n%300+300)],r++}return t.slice(0,e.length)},tG={A:["GCA","GCC","GCG","GCT"],C:["TGC","TGT"],D:["GAC","GAT"],E:["GAA","GAG"],F:["TTC","TTT"],G:["GGA","GGC","GGG","GGT"],H:["CAC","CAT"],I:["ATA","ATC","ATT"],K:["AAA","AAG"],L:["CTA","CTC","CTG","CTT","TTA","TTG"],M:["ATG"],N:["AAC","AAT"],P:["CCA","CCC","CCG","CCT"],Q:["CAA","CAG"],R:["AGA","AGG","CGA","CGC","CGG","CGT"],S:["AGC","AGT","TCA","TCC","TCG","TCT"],T:["ACA","ACC","ACG","ACT"],V:["GTA","GTC","GTG","GTT"],W:["TGG"],Y:["TAC","TAT"]},tV=e=>{for(let t=0;t<e.length;t++)if("A"!=e[t]&&"T"!=e[t]&&"C"!=e[t]&&"G"!=e[t]&&"N"!=e[t])return!1;return!0},tF=e=>{let t="";return e.match(/.{1,3}/g).forEach(e=>{var r=Object.keys(tG).filter(t=>tG[t].filter(t=>t===e).length>0)[0];t+=void 0!=r?r:""}),t},tz=e=>{let t=Math.floor(e/1e3%60),r=Math.floor(e/6e4%60);return t=1==String(t).length?0+String(t):t,(r=1==String(r).length?0+String(r):r)+":"+t},tK={A:"1",C:"2",E:"3",F:"4",G:"5",H:"1",I:"2",K:"3",L:"4",M:"5",N:"1",P:"2",Q:"3",R:"4",S:"5",T:"1",V:"2",W:"3",Y:"4"},tQ=({size:e,color:t="white"})=>/*#__PURE__*/(0,S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:t,height:e,viewBox:"0 -960 960 960",width:e,children:/*#__PURE__*/(0,S.jsx)("path",{d:"M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"})}),tH=({size:e,color:t="white"})=>/*#__PURE__*/(0,S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:t,height:e,viewBox:"0 -960 960 960",width:e,children:/*#__PURE__*/(0,S.jsx)("path",{d:"M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"})});let tW={},tB=new/*@__PURE__*/(g(tT)),tY=!1,tU=0,t$="1";const tq=()=>{tB.fetchAudio("/c3.mp3","/db3.mp3","/f3.mp3","/g3.mp3","/ab3.mp3").then(e=>{tW={1:e[0],2:e[1],3:e[2],4:e[3],5:e[4]}}).then(()=>console.log("done"))},tX=async(e,t)=>{for(tY=!0;tU<e.length&&tY;tU++){let r=e[tU];t$=tK[r],tB.play(tW[t$]),console.log("index",tU,e.length),await tN(t[tU])()}tY=!1},tJ=()=>{tY=!1},tZ=tM.div`
	font-size: 1rem;
	color: #eee;
`,t0=tM.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`,t1=tM.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 90%;
	background: #242424;
	padding: 2rem 2rem 1rem 2rem;
	border-radius: 8px;
`,t2=tM.div`

`,t3=tM.div`
	cursor: pointer;
	width: max-content;
	align-self: center;
	margin: 0 auto;
`;var t4=({seq:e,times:t})=>{let r=tR(t),[n,o]=(0,P.useState)(0),[i,a]=(0,P.useState)(tY);return(0,P.useEffect)(()=>{tq();let e=setInterval(()=>{tY&&o(e=>e+100)},100);return()=>{clearInterval(e)}},[]),(0,P.useEffect)(()=>{o(0),tU=0,tY=!1,a(!1)},[e]),/*#__PURE__*/(0,S.jsxs)(t1,{children:[/*#__PURE__*/(0,S.jsxs)(t2,{children:[/*#__PURE__*/(0,S.jsx)(tC.VideoSeekSlider,{max:r,currentTime:n,bufferTime:n,onChange:t=>{o(t),tU=Math.floor(t/r*e.length)},secondsPrefix:"00:00:",minutesPrefix:"00:"}),/*#__PURE__*/(0,S.jsx)(tL,{h:"1rem"})]}),/*#__PURE__*/(0,S.jsx)(tL,{h:"2rem"}),/*#__PURE__*/(0,S.jsxs)(t0,{children:[/*#__PURE__*/(0,S.jsx)(tZ,{children:tz(n)+" / "+tz(r)}),/*#__PURE__*/(0,S.jsx)(t3,{onClick:()=>{tU==e.length&&(tU=0,o(0)),tY?(a(!1),tJ()):(a(!0),tX(e,t))},children:i?/*#__PURE__*/(0,S.jsx)(tQ,{size:"2.5rem"}):/*#__PURE__*/(0,S.jsx)(tH,{size:"2.5rem"})}),/*#__PURE__*/(0,S.jsx)(tZ,{style:{opacity:0},children:tz(n)+"/"+tz(r)})]})]})},P=_("acw62"),t5={};v=_("6ozm5"),t5=y=_("bZXCC"),v.mixin(y);const t6=`>sp|O43561|LAT_HUMAN Linker for activation of T-cells family member 1 OS=Homo sapiens OX=9606 GN=LAT PE=1 SV=1
MEEAILVPCVLGLLLLPILAMLMALCVHCHRLPGSYDSTSSDSLYPRGIQFKRPHTVAPW
PPAYPPVTSYPPLSQPDLLPIPRSPQPLGGSHRTPSSRRDSDGANSVASYENEGASGIRG
AQAGWGVWGPSWTRLTPVSLPPEPACEDADEDEDDYHNPGYLVVLPDSTPATSTAAPSAP
ALSTPGIRDSAFSMESIDDYVNVPESGESAEASLDGSREYVNVSQELHPGAAKTEPAALS
SQEAEEVEEEGAPDYENLQELN
>sp|P08246|ELNE_HUMAN Neutrophil elastase OS=Homo sapiens OX=9606 GN=ELANE PE=1 SV=1
MTLGRRLACLFLACVLPALLLGGTALASEIVGGRRARPHAWPFMVSLQLRGGHFCGATLI
APNFVMSAAHCVANVNVRAVRVVLGAHNLSRREPTRQVFAVQRIFENGYDPVNLLNDIVI
LQLNGSATINANVQVAQLPAQGRRLGNGVQCLAMGWGLLGRNRGIASVLQELNVTVVTSL
CRRSNVCTLVRGRQAGVCFGDSGSPLVCNGLIHGIASFVRGGCASGLYPDAFAPVAQFVN
WIDSIIQRSEDNPCPHPRDPDPASRTH
>sp|P10144|GRAB_HUMAN Granzyme B OS=Homo sapiens OX=9606 GN=GZMB PE=1 SV=2
MQPILLLLAFLLLPRADAGEIIGGHEAKPHSRPYMAYLMIWDQKSLKRCGGFLIRDDFVL
TAAHCWGSSINVTLGAHNIKEQEPTQQFIPVKRPIPHPAYNPKNFSNDIMLLQLERKAKR
TRAVQPLRLPSNKAQVKPGQTCSVAGWGQTAPLGKHSHTLQEVKMTVQEDRKCESDLRHY
YDSTIELCVGDPEIKKTSFKGDSGGPLVCNKVAQGIVSYGRNNGMPPRACTKVSSFVHWI
KKTMKRY
>sp|P20248|CCNA2_HUMAN Cyclin-A2 OS=Homo sapiens OX=9606 GN=CCNA2 PE=1 SV=2
MLGNSAPGPATREAGSALLALQQTALQEDQENINPEKAAPVQQPRTRAALAVLKSGNPRG
LAQQQRPKTRRVAPLKDLPVNDEHVTVPPWKANSKQPAFTIHVDEAEKEAQKKPAESQKI
EREDALAFNSAISLPGPRKPLVPLDYPMDGSFESPHTMDMSIILEDEKPVSVNEVPDYHE
DIHTYLREMEVKCKPKVGYMKKQPDITNSMRAILVDWLVEVGEEYKLQNETLHLAVNYID
RFLSSMSVLRGKLQLVGTAAMLLASKFEEIYPPEVAEFVYITDDTYTKKQVLRMEHLVLK
VLTFDLAAPTVNQFLTQYFLHQQPANCKVESLAMFLGELSLIDADPYLKYLPSVIAGAAF
HLALYTVTGQSWPESLIRKTGYTLESLKPCLMDLHQTYLKAPQHAQQSIREKYKNSKYHG
VSLLNPPETLNL
>sp|P25685|DNJB1_HUMAN DnaJ homolog subfamily B member 1 OS=Homo sapiens OX=9606 GN=DNAJB1 PE=1 SV=4
MGKDYYQTLGLARGASDEEIKRAYRRQALRYHPDKNKEPGAEEKFKEIAEAYDVLSDPRK
REIFDRYGEEGLKGSGPSGGSGGGANGTSFSYTFHGDPHAMFAEFFGGRNPFDTFFGQRN
GEEGMDIDDPFSGFPMGMGGFTNVNFGRSRSAQEPARKKQDPPVTHDLRVSLEEIYSGCT
KKMKISHKRLNPDGKSIRNEDKILTIEVKKGWKEGTKITFPKEGDQTSNNIPADIVFVLK
DKPHNIFKRDGSDVIYPARISLREALCGCTVNVPTLDGRTIPVVFKDVIRPGMRRKVPGE
GLPLPKTPEKRGDLIIEFEVIFPERIPQTSRTVLEQVLPI
>sp|P27487|DPP4_HUMAN Dipeptidyl peptidase 4 OS=Homo sapiens OX=9606 GN=DPP4 PE=1 SV=2
MKTPWKVLLGLLGAAALVTIITVPVVLLNKGTDDATADSRKTYTLTDYLKNTYRLKLYSL
RWISDHEYLYKQENNILVFNAEYGNSSVFLENSTFDEFGHSINDYSISPDGQFILLEYNY
VKQWRHSYTASYDIYDLNKRQLITEERIPNNTQWVTWSPVGHKLAYVWNNDIYVKIEPNL
PSYRITWTGKEDIIYNGITDWVYEEEVFSAYSALWWSPNGTFLAYAQFNDTEVPLIEYSF
YSDESLQYPKTVRVPYPKAGAVNPTVKFFVVNTDSLSSVTNATSIQITAPASMLIGDHYL
CDVTWATQERISLQWLRRIQNYSVMDICDYDESSGRWNCLVARQHIEMSTTGWVGRFRPS
EPHFTLDGNSFYKIISNEEGYRHICYFQIDKKDCTFITKGTWEVIGIEALTSDYLYYISN
EYKGMPGGRNLYKIQLSDYTKVTCLSCELNPERCQYYSVSFSKEAKYYQLRCSGPGLPLY
TLHSSVNDKGLRVLEDNSALDKMLQNVQMPSKKLDFIILNETKFWYQMILPPHFDKSKKY
PLLLDVYAGPCSQKADTVFRLNWATYLASTENIIVASFDGRGSGYQGDKIMHAINRRLGT
FEVEDQIEAARQFSKMGFVDNKRIAIWGWSYGGYVTSMVLGSGSGVFKCGIAVAPVSRWE
YYDSVYTERYMGLPTPEDNLDHYRNSTVMSRAENFKQVEYLLIHGTADDNVHFQQSAQIS
KALVDVGVDFQAMWYTDEDHGIASSTAHQHIYTHMSHFIKQCFSLP
>sp|P35232|PHB1_HUMAN Prohibitin 1 OS=Homo sapiens OX=9606 GN=PHB1 PE=1 SV=1
MAAKVFESIGKFGLALAVAGGVVNSALYNVDAGHRAVIFDRFRGVQDIVVGEGTHFLIPW
VQKPIIFDCRSRPRNVPVITGSKDLQNVNITLRILFRPVASQLPRIFTSIGEDYDERVLP
SITTEILKSVVARFDAGELITQRELVSRQVSDDLTERAATFGLILDDVSLTHLTFGKEFT
EAVEAKQVAQQEAERARFVVEKAEQQKKAAIISAEGDSKAAELIANSLATAGDGLIELRK
LEAAEDIAYQLSRSRNITYLPAGQSVLLQLPQ
>sp|P49411|EFTU_HUMAN Elongation factor Tu, mitochondrial OS=Homo sapiens OX=9606 GN=TUFM PE=1 SV=3
MTTMAAATLLRATPHFSGLAAGRTFLLQGLLRLLKAPALPLLCRGLAVEAKKTYVRDKPH
VNVGTIGHVDHGKTTLTAAITKILAEGGGAKFKKYEEIDNAPEERARGITINAAHVEYST
AARHYAHTDCPGHADYVKNMITGTAPLDGCILVVAANDGPMPQTREHLLLARQIGVEHVV
VYVNKADAVQDSEMVELVELEIRELLTEFGYKGEETPVIVGSALCALEGRDPELGLKSVQ
KLLDAVDTYIPVPARDLEKPFLLPVEAVYSVPGRGTVVTGTLERGILKKGDECELLGHSK
NIRTVVTGIEMFHKSLERAEAGDNLGALVRGLKREDLRRGLVMVKPGSIKPHQKVEAQVY
ILSKEEGGRHKPFVSHFMPVMFSLTWDMACRIILPPEKELAMPGEDLKFNLILRQPMILE
KGQRFTLRDGNRTIGTGLVTNTLAMTEEEKNIKWG
>sp|P49427|UB2R1_HUMAN Ubiquitin-conjugating enzyme E2 R1 OS=Homo sapiens OX=9606 GN=CDC34 PE=1 SV=2
MARPLVPSSQKALLLELKGLQEEPVEGFRVTLVDEGDLYNWEVAIFGPPNTYYEGGYFKA
RLKFPIDYPYSPPAFRFLTKMWHPNIYETGDVCISILHPPVDDPQSGELPSERWNPTQNV
RTILLSVISLLNEPNTFSPANVDASVMYRKWKESKGKDREYTDIIRKQVLGTKVDAERDG
VKVPTTLAEYCVKTKAPAPDEGSDLFYDDYYEDGEVEEEADSCFGDDEDDSGTEES
>sp|P57764|GSDMD_HUMAN Gasdermin-D OS=Homo sapiens OX=9606 GN=GSDMD PE=1 SV=1
MGSAFERVVRRVVQELDHGGEFIPVTSLQSSTGFQPYCLVVRKPSSSWFWKPRYKCVNLS
IKDILEPDAAEPDVQRGRSFHFYDAMDGQIQGSVELAAPGQAKIAGGAAVSDSSSTSMNV
YSLSVDPNTWQTLLHERHLRQPEHKVLQQLRSRGDNVYVVTEVLQTQKEVEVTRTHKREG
SGRFSLPGATCLQGEGQGHLSQKKTVTIPSGSTLAFRVAQLVIDSDLDVLLFPDKKQRTF
QPPATGHKRSTSEGAWPQLPSGLSMMRCLHNFLTDGVPAEGAFTEDFQGLRAEVETISKE
LELLDRELCQLLLEGLEGVLRDQLALRALEEALEQGQSLGPVEPLDGPAGAVLECLVLSS
GMLVPELAIPVVYLLGALTMLSETQHKLLAEALESQTLLGPLELVGSLLEQSAPWQERST
MSLPPGLLGNSWGEGAPAWVLLDECGLELGEDTPHVCWEPQAQGRMCALYASLALLSGLS
QEPH
>sp|P61916|NPC2_HUMAN NPC intracellular cholesterol transporter 2 OS=Homo sapiens OX=9606 GN=NPC2 PE=1 SV=1
MRFLAATFLLLALSTAAQAEPVQFKDCGSVDGVIKEVNVSPCPTQPCQLSKGQSYSVNVT
FTSNIQSKSSKAVVHGILMGVPVPFPIPEPDGCKSGINCPIQKDKTYSYLNKLPVKSEYP
SIKLVVEWQLQDDKNQSLFCWEIPVQIVSHL
>sp|P63172|DYLT1_HUMAN Dynein light chain Tctex-type 1 OS=Homo sapiens OX=9606 GN=DYNLT1 PE=1 SV=1
MEDYQAAEETAFVVDEVSNIVKEAIESAIGGNAYQHSKVNQWTTNVVEQTLSQLTKLGKP
FKYIVTCVIMQKNGAGLHTASSCFWDSSTDGSCTVRWENKTMYCIVSAFGLSI
>sp|P63279|UBC9_HUMAN SUMO-conjugating enzyme UBC9 OS=Homo sapiens OX=9606 GN=UBE2I PE=1 SV=1
MSGIALSRLAQERKAWRKDHPFGFVAVPTKNPDGTMNLMNWECAIPGKKGTPWEGGLFKL
RMLFKDDYPSSPPKCKFEPPLFHPNVYPSGTVCLSILEEDKDWRPAITIKQILLGIQELL
NEPNIQDPAQAEAYTIYCQNRVEYEKRVRAQAKKFAPS
>sp|P78310|CXAR_HUMAN Coxsackievirus and adenovirus receptor OS=Homo sapiens OX=9606 GN=CXADR PE=1 SV=1
MALLLCFVLLCGVVDFARSLSITTPEEMIEKAKGETAYLPCKFTLSPEDQGPLDIEWLIS
PADNQKVDQVIILYSGDKIYDDYYPDLKGRVHFTSNDLKSGDASINVTNLQLSDIGTYQC
KVKKAPGVANKKIHLVVLVKPSGARCYVDGSEEIGSDFKIKCEPKEGSLPLQYEWQKLSD
SQKMPTSWLAEMTSSVISVKNASSEYSGTYSCTVRNRVGSDQCLLRLNVVPPSNKAGLIA
GAIIGTLLALALIGLIIFCCRKKRREEKYEKEVHHDIREDVPPPKSRTSTARSYIGSNHS
SLGSMSPSNMEGYSKTQYNQVPSEDFERTPQSPTLPPAKVAAPNLSRMGAIPVMIPAQSK
DGSIV
>sp|Q08648|SG11B_HUMAN Sperm-associated antigen 11B OS=Homo sapiens OX=9606 GN=SPAG11B PE=1 SV=4
MRQRLLPSVTSLLLVALLFPGSSQARHVNHSATEALGELRERAPGQGTNGFQLLRHAVKR
DLLPPRTPPYQVHISHREARGPSFRICVDFLGPRWARGCSTGN
>sp|Q13158|FADD_HUMAN FAS-associated death domain protein OS=Homo sapiens OX=9606 GN=FADD PE=1 SV=1
MDPFLVLLHSVSSSLSSSELTELKFLCLGRVGKRKLERVQSGLDLFSMLLEQNDLEPGHT
ELLRELLASLRRHDLLRRVDDFEAGAAAGAAPGEEDLCAAFNVICDNVGKDWRRLARQLK
VSDTKIDSIEDRYPRNLTERVRESLRIWKNTEKENATVAHLVGALRSCQMNLVADLVQEV
QQARDLQNRSGAMSPMSWNSDASTSEAS
>sp|Q13287|NMI_HUMAN N-myc-interactor OS=Homo sapiens OX=9606 GN=NMI PE=1 SV=2
MEADKDDTQQILKEHSPDEFIKDEQNKGLIDEITKKNIQLKKEIQKLETELQEATKEFQI
KEDIPETKMKFLSVETPENDSQLSNISCSFQVSSKVPYEIQKGQALITFEKEEVAQNVVS
MSKHHVQIKDVNLEVTAKPVPLNSGVRFQVYVEVSKMKINVTEIPDTLREDQMRDKLELS
FSKSRNGGGEVDRVDYDRQSGSAVITFVEIGVADKILKKKEYPLYINQTCHRVTVSPYTE
IHLKKYQIFSGTSKRTVLLTGMEGIQMDEEIVEDLINIHFQRAKNGGGEVDVVKCSLGQP
HIAYFEE
>sp|Q86V81|THOC4_HUMAN THO complex subunit 4 OS=Homo sapiens OX=9606 GN=ALYREF PE=1 SV=3
MADKMDMSLDDIIKLNRSQRGGRGGGRGRGRAGSQGGRGGGAQAAARVNRGGGPIRNRPA
IARGAAGGGGRNRPAPYSRPKQLPDKWQHDLFDSGFGGGAGVETGGKLLVSNLDFGVSDA
DIQELFAEFGTLKKAAVHYDRSGRSLGTADVHFERKADALKAMKQYNGVPLDGRPMNIQL
VTSQIDAQRRPAQSVNRGGMTRNRGAGGFGGGGGTRRGTRGGARGRGRGAGRNSKQQLSA
EELDAQLDAYNARMDTS
>sp|Q8N6Q3|CD177_HUMAN CD177 antigen OS=Homo sapiens OX=9606 GN=CD177 PE=1 SV=2
MSAVLLLALLGFILPLPGVQALLCQFGTVQHVWKVSDLPRQWTPKNTSCDSGLGCQDTLM
LIESGPQVSLVLSKGCTEAKDQEPRVTEHRMGPGLSLISYTFVCRQEDFCNNLVNSLPLW
APQPPADPGSLRCPVCLSMEGCLEGTTEEICPKGTTHCYDGLLRLRGGGIFSNLRVQGCM
PQPGCNLLNGTQEIGPVGMTENCNRKDFLTCHRGTTIMTHGNLAQEPTDWTTSNTEMCEV
GQVCQETLLLLDVGLTSTLVGTKGCSTVGAQNSQKTTIHSAPPGVLVASYTHFCSSDLCN
SASSSSVLLNSLPPQAAPVPGDRQCPTCVQPLGTCSSGSPRMTCPRGATHCYDGYIHLSG
GGLSTKMSIQGCVAQPSSFLLNHTRQIGIFSAREKRDVQPPASQHEGGGAEGLESLTWGV
GLALAPALWWGVVCPSC
>sp|Q92692|NECT2_HUMAN Nectin-2 OS=Homo sapiens OX=9606 GN=NECTIN2 PE=1 SV=1
MARAAALLPSRSPPTPLLWPLLLLLLLETGAQDVRVQVLPEVRGQLGGTVELPCHLLPPV
PGLYISLVTWQRPDAPANHQNVAAFHPKMGPSFPSPKPGSERLSFVSAKQSTGQDTEAEL
QDATLALHGLTVEDEGNYTCEFATFPKGSVRGMTWLRVIAKPKNQAEAQKVTFSQDPTTV
ALCISKEGRPPARISWLSSLDWEAKETQVSGTLAGTVTVTSRFTLVPSGRADGVTVTCKV
EHESFEEPALIPVTLSVRYPPEVSISGYDDNWYLGRTDATLSCDVRSNPEPTGYDWSTTS
GTFPTSAVAQGSQLVIHAVDSLFNTTFVCTVTNAVGMGRAEQVIFVRETPNTAGAGATGG
IIGGIIAAIIATAVAATGILICRQQRKEQTLQGAEEDEDLEGPPSYKPPTPKAKLEAQEM
PSQLFTLGASEHSPLKTPYFDAGASCTEQEMPRYHELPTLEERSGPLHPGATSLGSPIPV
PPGPPAVEDVSLDLEDEEGEEEEEYLDKINPIYDALSYSSPSDSYQGKGFVMSRAMYV
>sp|Q92985|IRF7_HUMAN Interferon regulatory factor 7 OS=Homo sapiens OX=9606 GN=IRF7 PE=1 SV=2
MALAPERAAPRVLFGEWLLGEISSGCYEGLQWLDEARTCFRVPWKHFARKDLSEADARIF
KAWAVARGRWPPSSRGGGPPPEAETAERAGWKTNFRCALRSTRRFVMLRDNSGDPADPHK
VYALSRELCWREGPGTDQTEAEAPAAVPPPQGGPPGPFLAHTHAGLQAPGPLPAPAGDKG
DLLLQAVQQSCLADHLLTASWGADPVPTKAPGEGQEGLPLTGACAGGPGLPAGELYGWAV
ETTPSPGPQPAALTTGEAAAPESPHQAEPYLSPSPSACTAVQEPSPGALDVTIMYKGRTV
LQKVVGHPSCTFLYGPPDPAVRATDPQQVAFPSPAELPDQKQLRYTEELLRHVAPGLHLE
LRGPQLWARRMGKCKVYWEVGGPPGSASPSTPACLLPRNCDTPIFDFRVFFQELVEFRAR
QRRGSPRYTIYLGFGQDLSAGRPKEKSLVLVKLEPWLCRVHLEGTQREGVSSLDSSSLSL
CLSSANSLYDDIECFLMELEQPA
>sp|Q99623|PHB2_HUMAN Prohibitin-2 OS=Homo sapiens OX=9606 GN=PHB2 PE=1 SV=2
MAQNLKDLAGRLPAGPRGMGTALKLLLGAGAVAYGVRESVFTVEGGHRAIFFNRIGGVQQ
DTILAEGLHFRIPWFQYPIIYDIRARPRKISSPTGSKDLQMVNISLRVLSRPNAQELPSM
YQRLGLDYEERVLPSIVNEVLKSVVAKFNASQLITQRAQVSLLIRRELTERAKDFSLILD
DVAITELSFSREYTAAVEAKQVAQQEAQRAQFLVEKAKQEQRQKIVQAEGEAEAAKMLGE
ALSKNPGYIKLRKIRAAQNISKTIATSQNRIYLTADNLVLNLQDESFTRGSDSLIKGKK
>sp|Q9H2X3|CLC4M_HUMAN C-type lectin domain family 4 member M OS=Homo sapiens OX=9606 GN=CLEC4M PE=1 SV=1
MSDSKEPRVQQLGLLEEDPTTSGIRLFPRDFQFQQIHGHKSSTGCLGHGALVLQLLSFML
LAGVLVAILVQVSKVPSSLSQEQSEQDAIYQNLTQLKAAVGELSEKSKLQEIYQELTQLK
AAVGELPEKSKLQEIYQELTRLKAAVGELPEKSKLQEIYQELTRLKAAVGELPEKSKLQE
IYQELTRLKAAVGELPEKSKLQEIYQELTELKAAVGELPEKSKLQEIYQELTQLKAAVGE
LPDQSKQQQIYQELTDLKTAFERLCRHCPKDWTFFQGNCYFMSNSQRNWHDSVTACQEVR
AQLVVIKTAEEQNFLQLQTSRSNRFSWMGLSDLNQEGTWQWVDGSPLSPSFQRYWNSGEP
NNSGNEDCAEFSGSGWNDNRCDVDNYWICKKPAACFRDE
>sp|Q9UM44|HHLA2_HUMAN HERV-H LTR-associating protein 2 OS=Homo sapiens OX=9606 GN=HHLA2 PE=1 SV=1
MKAQTALSFFLILITSLSGSQGIFPLAFFIYVPMNEQIVIGRLDEDIILPSSFERGSEVV
IHWKYQDSYKVHSYYKGSDHLESQDPRYANRTSLFYNEIQNGNASLFFRRVSLLDEGIYT
CYVGTAIQVITNKVVLKVGVFLTPVMKYEKRNTNSFLICSVLSVYPRPIITWKMDNTPIS
ENNMEETGSLDSFSINSPLNITGSNSSYECTIENSLLKQTWTGRWTMKDGLHKMQSEHVS
LSCQPVNDYFSPNQDFKVTWSRMKSGTFSVLAYYLSSSQNTIINESRFSWNKELINQSDF
SMNLMDLNLSDSGEYLCNISSDEYTLLTIHTVHVEPSQETASHNKGLWILVPSAILAAFL
LIWSVKCCRAQLEARRSRHPADGAQQERCCVPPGERCPSAPDNGEENVPLSGKV
`;var P=_("acw62"),t8=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n);else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(n&&(n+=" "),n+=t);return n};const t7=e=>"number"==typeof e&&!isNaN(e),t9=e=>"string"==typeof e,re=e=>"function"==typeof e,rt=e=>t9(e)||re(e)?e:null,rr=e=>(0,P.isValidElement)(e)||t9(e)||re(e)||t7(e);function rn(e){let{enter:t,exit:r,appendPosition:n=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(e){let{children:a,position:u,preventExitTransition:l,done:s,nodeRef:c,isIn:f}=e,p=n?`${t}--${u}`:t,d=n?`${r}--${u}`:r,h=(0,P.useRef)(0);return(0,P.useLayoutEffect)(()=>{let e=c.current,t=p.split(" "),r=n=>{n.target===c.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",r),e.removeEventListener("animationcancel",r),0===h.current&&"animationcancel"!==n.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)},[]),(0,P.useEffect)(()=>{let e=c.current,t=()=>{e.removeEventListener("animationend",t),o?function(e,t,r){void 0===r&&(r=300);let{scrollHeight:n,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=n+"px",o.transition=`all ${r}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,r)})})}(e,s,i):s()};f||(l?t():(h.current=1,e.className+=` ${d}`,e.addEventListener("animationend",t)))},[f]),/*@__PURE__*/g(P).createElement(/*@__PURE__*/g(P).Fragment,null,a)}}function ro(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const ri={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let r=this.list.get(e).filter(e=>e!==t);return this.list.set(e,r),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let r=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(r)})}},ra=e=>{let{theme:t,type:r,...n}=e;return /*@__PURE__*/g(P).createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${r})`,...n})},ru={info:function(e){return /*@__PURE__*/g(P).createElement(ra,{...e},/*@__PURE__*/g(P).createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return /*@__PURE__*/g(P).createElement(ra,{...e},/*@__PURE__*/g(P).createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return /*@__PURE__*/g(P).createElement(ra,{...e},/*@__PURE__*/g(P).createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return /*@__PURE__*/g(P).createElement(ra,{...e},/*@__PURE__*/g(P).createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return /*@__PURE__*/g(P).createElement("div",{className:"Toastify__spinner"})}};function rl(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function rs(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function rc(e){let{closeToast:t,theme:r,ariaLabel:n="close"}=e;return /*@__PURE__*/g(P).createElement("button",{className:`Toastify__close-button Toastify__close-button--${r}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":n},/*@__PURE__*/g(P).createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},/*@__PURE__*/g(P).createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function rf(e){let{delay:t,isRunning:r,closeToast:n,type:o="default",hide:i,className:a,style:u,controlledProgress:l,progress:s,rtl:c,isIn:f,theme:p}=e,d=i||l&&0===s,h={...u,animationDuration:`${t}ms`,animationPlayState:r?"running":"paused",opacity:d?0:1};l&&(h.transform=`scaleX(${s})`);let y=t8("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":c}),v=re(a)?a({rtl:c,type:o,defaultClassName:y}):t8(y,a);return /*@__PURE__*/g(P).createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:v,style:h,[l&&s>=1?"onTransitionEnd":"onAnimationEnd"]:l&&s<1?null:()=>{f&&n()}})}const rp=e=>{let{isRunning:t,preventExitTransition:r,toastRef:n,eventHandlers:o}=function(e){let[t,r]=(0,P.useState)(!1),[n,o]=(0,P.useState)(!1),i=(0,P.useRef)(null),a=(0,P.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,u=(0,P.useRef)(e),{autoClose:l,pauseOnHover:s,closeToast:c,onClick:f,closeOnClick:p}=e;function d(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),a.didMove=!1,document.addEventListener("mousemove",m),document.addEventListener("mouseup",g),document.addEventListener("touchmove",m),document.addEventListener("touchend",g);let r=i.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=r.getBoundingClientRect(),r.style.transition="",a.x=rl(t.nativeEvent),a.y=rs(t.nativeEvent),"x"===e.draggableDirection?(a.start=a.x,a.removalDistance=r.offsetWidth*(e.draggablePercent/100)):(a.start=a.y,a.removalDistance=r.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(t){if(a.boundingRect){let{top:r,bottom:n,left:o,right:i}=a.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&a.x>=o&&a.x<=i&&a.y>=r&&a.y<=n?v():y()}}function y(){r(!0)}function v(){r(!1)}function m(r){let n=i.current;a.canDrag&&n&&(a.didMove=!0,t&&v(),a.x=rl(r),a.y=rs(r),a.delta="x"===e.draggableDirection?a.x-a.start:a.y-a.start,a.start!==a.x&&(a.canCloseOnClick=!1),n.style.transform=`translate${e.draggableDirection}(${a.delta}px)`,n.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function g(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",m),document.removeEventListener("touchend",g);let t=i.current;if(a.canDrag&&a.didMove&&t){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return o(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,P.useEffect)(()=>{u.current=e}),(0,P.useEffect)(()=>(i.current&&i.current.addEventListener("d",y,{once:!0}),re(e.onOpen)&&e.onOpen((0,P.isValidElement)(e.children)&&e.children.props),()=>{let e=u.current;re(e.onClose)&&e.onClose((0,P.isValidElement)(e.children)&&e.children.props)}),[]),(0,P.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||v(),window.addEventListener("focus",y),window.addEventListener("blur",v)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",v))}),[e.pauseOnFocusLoss]);let b={onMouseDown:d,onTouchStart:d,onMouseUp:h,onTouchEnd:h};return l&&s&&(b.onMouseEnter=v,b.onMouseLeave=y),p&&(b.onClick=e=>{f&&f(e),a.canCloseOnClick&&c()}),{playToast:y,pauseToast:v,isRunning:t,preventExitTransition:n,toastRef:i,eventHandlers:b}}(e),{closeButton:i,children:a,autoClose:u,onClick:l,type:s,hideProgressBar:c,closeToast:f,transition:p,position:d,className:h,style:y,bodyClassName:v,bodyStyle:m,progressClassName:b,progressStyle:x,updateId:_,role:S,progress:w,rtl:O,toastId:E,deleteToast:j,isIn:k,isLoading:M,iconOut:A,closeOnClick:T,theme:C}=e,L=t8("Toastify__toast",`Toastify__toast-theme--${C}`,`Toastify__toast--${s}`,{"Toastify__toast--rtl":O},{"Toastify__toast--close-on-click":T}),N=re(h)?h({rtl:O,position:d,type:s,defaultClassName:L}):t8(L,h),I=!!w||!u,R={closeToast:f,type:s,theme:C},D=null;return!1===i||(D=re(i)?i(R):(0,P.isValidElement)(i)?(0,P.cloneElement)(i,R):rc(R)),/*@__PURE__*/g(P).createElement(p,{isIn:k,done:j,position:d,preventExitTransition:r,nodeRef:n},/*@__PURE__*/g(P).createElement("div",{id:E,onClick:l,className:N,...o,style:y,ref:n},/*@__PURE__*/g(P).createElement("div",{...k&&{role:S},className:re(v)?v({type:s}):t8("Toastify__toast-body",v),style:m},null!=A&&/*@__PURE__*/g(P).createElement("div",{className:t8("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},A),/*@__PURE__*/g(P).createElement("div",null,a)),D,/*@__PURE__*/g(P).createElement(rf,{..._&&!I?{key:`pb-${_}`}:{},rtl:O,theme:C,delay:u,isRunning:t,isIn:k,closeToast:f,hide:c,type:s,style:x,className:b,controlledProgress:I,progress:w||0})))},rd=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},rh=rn(rd("bounce",!0)),ry=(rn(rd("slide",!0)),rn(rd("zoom")),rn(rd("flip")),(0,P.forwardRef)((e,t)=>{let{getToastToRender:r,containerRef:n,isToastActive:o}=function(e){let[,t]=(0,P.useReducer)(e=>e+1,0),[r,n]=(0,P.useState)([]),o=(0,P.useRef)(null),i=(0,P.useRef)(new Map).current,a=e=>-1!==r.indexOf(e),u=(0,P.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:a,getToast:e=>i.get(e)}).current;function l(e){let{containerId:t}=e,{limit:r}=u.props;!r||t&&u.containerId!==t||(u.count-=u.queue.length,u.queue=[])}function s(e){n(t=>null==e?[]:t.filter(t=>t!==e))}function c(){let{toastContent:e,toastProps:t,staleId:r}=u.queue.shift();p(e,t,r)}function f(e,r){var n,a;let{delay:l,staleId:f,...d}=r;if(!rr(e)||!o.current||u.props.enableMultiContainer&&d.containerId!==u.props.containerId||i.has(d.toastId)&&null==d.updateId)return;let{toastId:h,updateId:y,data:v}=d,{props:m}=u,g=()=>s(h),b=null==y;b&&u.count++;let x={...m,style:m.toastStyle,key:u.toastKey++,...Object.fromEntries(Object.entries(d).filter(e=>{let[t,r]=e;return null!=r})),toastId:h,updateId:y,data:v,closeToast:g,isIn:!1,className:rt(d.className||m.toastClassName),bodyClassName:rt(d.bodyClassName||m.bodyClassName),progressClassName:rt(d.progressClassName||m.progressClassName),autoClose:!d.isLoading&&(n=d.autoClose,a=m.autoClose,!1===n||t7(n)&&n>0?n:a),deleteToast(){let e=ro(i.get(h),"removed");i.delete(h),ri.emit(4,e);let r=u.queue.length;if(u.count=null==h?u.count-u.displayedToast:u.count-1,u.count<0&&(u.count=0),r>0){let e=null==h?u.props.limit:1;if(1===r||1===e)u.displayedToast++,c();else{let t=e>r?r:e;u.displayedToast=t;for(let e=0;e<t;e++)c()}}else t()}};x.iconOut=function(e){let{theme:t,type:r,isLoading:n,icon:o}=e,i=null,a={theme:t,type:r};return!1===o||(re(o)?i=o(a):(0,P.isValidElement)(o)?i=(0,P.cloneElement)(o,a):t9(o)||t7(o)?i=o:n?i=ru.spinner():r in ru&&(i=ru[r](a))),i}(x),re(d.onOpen)&&(x.onOpen=d.onOpen),re(d.onClose)&&(x.onClose=d.onClose),x.closeButton=m.closeButton,!1===d.closeButton||rr(d.closeButton)?x.closeButton=d.closeButton:!0===d.closeButton&&(x.closeButton=!rr(m.closeButton)||m.closeButton);let _=e;(0,P.isValidElement)(e)&&!t9(e.type)?_=(0,P.cloneElement)(e,{closeToast:g,toastProps:x,data:v}):re(e)&&(_=e({closeToast:g,toastProps:x,data:v})),m.limit&&m.limit>0&&u.count>m.limit&&b?u.queue.push({toastContent:_,toastProps:x,staleId:f}):t7(l)?setTimeout(()=>{p(_,x,f)},l):p(_,x,f)}function p(e,t,r){let{toastId:o}=t;r&&i.delete(r);let a={content:e,props:t};i.set(o,a),n(e=>[...e,o].filter(e=>e!==r)),ri.emit(4,ro(a,null==a.props.updateId?"added":"updated"))}return(0,P.useEffect)(()=>(u.containerId=e.containerId,ri.cancelEmit(3).on(0,f).on(1,e=>o.current&&s(e)).on(5,l).emit(2,u),()=>{i.clear(),ri.emit(3,u)}),[]),(0,P.useEffect)(()=>{u.props=e,u.isToastActive=a,u.displayedToast=r.length}),{getToastToRender:function(t){let r=new Map,n=Array.from(i.values());return e.newestOnTop&&n.reverse(),n.forEach(e=>{let{position:t}=e.props;r.has(t)||r.set(t,[]),r.get(t).push(e)}),Array.from(r,e=>t(e[0],e[1]))},containerRef:o,isToastActive:a}}(e),{className:i,style:a,rtl:u,containerId:l}=e;return(0,P.useEffect)(()=>{t&&(t.current=n.current)},[]),/*@__PURE__*/g(P).createElement("div",{ref:n,className:"Toastify",id:l},r((e,t)=>{let r=t.length?{...a}:{...a,pointerEvents:"none"};return /*@__PURE__*/g(P).createElement("div",{className:function(e){let t=t8("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":u});return re(i)?i({position:e,rtl:u,defaultClassName:t}):t8(t,rt(i))}(e),style:r,key:`container-${e}`},t.map((e,r)=>{let{content:n,props:i}=e;return /*@__PURE__*/g(P).createElement(rp,{...i,isIn:o(i.toastId),style:{...i.style,"--nth":r+1,"--len":t.length},key:`toast-${i.key}`},n)}))}))}));ry.displayName="ToastContainer",ry.defaultProps={position:"top-right",transition:rh,autoClose:5e3,closeButton:rc,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let rv,rm=new Map,rg=[],rb=1;function rx(e,t){return rm.size>0?ri.emit(0,e,t):rg.push({content:e,options:t}),t.toastId}function r_(e,t){return{...t,type:t&&t.type||e,toastId:t&&(t9(t.toastId)||t7(t.toastId))?t.toastId:""+rb++}}function rS(e){return(t,r)=>rx(t,r_(e,r))}function rw(e,t){return rx(e,r_("default",t))}rw.loading=(e,t)=>rx(e,r_("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),rw.promise=function(e,t,r){let n,{pending:o,error:i,success:a}=t;o&&(n=t9(o)?rw.loading(o,r):rw.loading(o.render,{...r,...o}));let u={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,o)=>{if(null==t)return void rw.dismiss(n);let i={type:e,...u,...r,data:o},a=t9(t)?{render:t}:t;return n?rw.update(n,{...i,...a}):rw(a.render,{...i,...a}),o},s=re(e)?e():e;return s.then(e=>l("success",a,e)).catch(e=>l("error",i,e)),s},rw.success=rS("success"),rw.info=rS("info"),rw.error=rS("error"),rw.warning=rS("warning"),rw.warn=rw.warning,rw.dark=(e,t)=>rx(e,r_("default",{theme:"dark",...t})),rw.dismiss=e=>{rm.size>0?ri.emit(1,e):rg=rg.filter(t=>null!=e&&t.options.toastId!==e)},rw.clearWaitingQueue=function(e){return void 0===e&&(e={}),ri.emit(5,e)},rw.isActive=e=>{let t=!1;return rm.forEach(r=>{r.isToastActive&&r.isToastActive(e)&&(t=!0)}),t},rw.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{let r=function(e,t){let{containerId:r}=t,n=rm.get(r||rv);return n&&n.getToast(e)}(e,t);if(r){let{props:n,content:o}=r,i={delay:100,...n,...t,toastId:t.toastId||e,updateId:""+rb++};i.toastId!==e&&(i.staleId=e);let a=i.render||o;delete i.render,rx(a,i)}},0)},rw.done=e=>{rw.update(e,{progress:1})},rw.onChange=e=>(ri.on(4,e),()=>{ri.off(4,e)}),rw.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},rw.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},ri.on(2,e=>{rv=e.containerId||e,rm.set(rv,e),rg.forEach(e=>{ri.emit(0,e.content,e.options)}),rg=[]}).on(3,e=>{rm.delete(e.containerId||e),0===rm.size&&ri.off(0).off(1).off(5)});const rP=/*@__PURE__*/g(t5).parse(t6),rO=tM.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	@media screen and (max-width: 44em) {
		flex-direction: column;
		gap: 2rem;
	}
`,rE=tM.div`
	font-size: 1.5rem;
	font-weight: bold;
`,rj=tM.div`
	display: flex;
	gap: 1rem;
	flex-direction: column;
	width: 45%;
	
	@media screen and (max-width: 44em) {
		width: 100%;
	}
`,rk=tM.select`
	// background: #088395;
	color: #242424;
	background: #fefefe;
	font-weight: bold;
	font-size: 1.1rem;
	border: 3px solid #088395;
	border-radius: 4px;
	padding: 1rem;
	width: max-content;

`,rM=tM(rk).attrs({as:"input"})``;var rA=({onChange:e=()=>null})=>{let[t,r]=(0,P.useState)(rP[0].name),n=async t=>{let r=await t.target.files[0].text();try{console.log("file is selected");let t=/*@__PURE__*/g(t5).parse(r)[0];tV(t.seq)&&(console.log("gene is selected"),t.seq=tF(t.seq),console.log(t.seq)),e(t)}catch(e){console.error(e),rw.error("Invalid or corrupt fasta file",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}};return(0,P.useEffect)(()=>{e(rP[0])},[]),/*#__PURE__*/(0,S.jsxs)(rO,{children:[/*#__PURE__*/(0,S.jsxs)(rj,{children:[/*#__PURE__*/(0,S.jsx)(rE,{children:"Choose from sample proteins"}),/*#__PURE__*/(0,S.jsx)(rk,{value:t,onChange:t=>{r(t.target.value),e(rP.find(({name:e})=>e==t.target.value))},children:rP.map(({name:e})=>/*#__PURE__*/(0,S.jsx)("option",{value:e,children:e},e))})]}),/*#__PURE__*/(0,S.jsxs)(rj,{children:[/*#__PURE__*/(0,S.jsx)(rE,{children:"Upload your own sequence"}),/*#__PURE__*/(0,S.jsx)(rM,{type:"file",accept:".fasta,.fna,.ffn,.faa,.frn,.fa",onChange:n})]})]})},rT={};rT=/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */function(e){return null==e};var rC={},rL={},rN={},rI={},rR={},rD={};rD=/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function(){this.__data__=[],this.size=0};var rG={},rV={},rF={};rF=/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function(e,t){return e===t||e!=e&&t!=t},rV=/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function(e,t){for(var r=e.length;r--;)if(rF(e[r][0],t))return r;return -1};/** Built-in value references. */var rz=Array.prototype.splice;rG=/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.__data__,r=rV(t,e);return!(r<0)&&(r==t.length-1?t.pop():rz.call(t,r,1),--this.size,!0)};var rK={};rK=/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){var t=this.__data__,r=rV(t,e);return r<0?void 0:t[r][1]};var rQ={};rQ=/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return rV(this.__data__,e)>-1};var rH={};/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function rW(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}rH=/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function(e,t){var r=this.__data__,n=rV(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},// Add methods to `ListCache`.
rW.prototype.clear=rD,rW.prototype.delete=rG,rW.prototype.get=rK,rW.prototype.has=rQ,rW.prototype.set=rH,rR=rW;var rB={};rB=/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function(){this.__data__=new rR,this.size=0};var rY={};rY=/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var rU={};rU=/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){return this.__data__.get(e)};var r$={};r$=/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return this.__data__.has(e)};var rq={},rX={},rJ={},rZ={},r0={},r1={},r2={},r3=_("23YZo");r2=r3.Symbol;var r4={},r5=Object.prototype,r6=r5.hasOwnProperty,r8=r5.toString,r7=r2?r2.toStringTag:void 0;r4=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=r6.call(e,r7),r=e[r7];try{e[r7]=void 0;var n=!0}catch(e){}var o=r8.call(e);return n&&(t?e[r7]=r:delete e[r7]),o};var r9={},ne=Object.prototype.toString;r9=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(e){return ne.call(e)};/** Built-in value references. */var nt=r2?r2.toStringTag:void 0;r1=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":nt&&nt in Object(e)?r4(e):r9(e)};var nr={};nr=/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},r0=/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function(e){if(!nr(e))return!1;// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var t=r1(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t};var nn={},no={},r3=_("23YZo");no=r3["__core-js_shared__"];/** Used to detect methods masquerading as native. */var ni=(h=/[^.]+$/.exec(no&&no.keys&&no.keys.IE_PROTO||""))?"Symbol(src)_1."+h:"";nn=/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function(e){return!!ni&&ni in e};var na={},nu=Function.prototype.toString;na=/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function(e){if(null!=e){try{return nu.call(e)}catch(e){}try{return e+""}catch(e){}}return""};/** Used to detect host constructors (Safari). */var nl=/^\[object .+?Constructor\]$/,ns=Object.prototype,nc=Function.prototype.toString,nf=ns.hasOwnProperty,np=RegExp("^"+nc.call(nf).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");rZ=/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function(e){return!(!nr(e)||nn(e))&&(r0(e)?np:nl).test(na(e))};var nd={};nd=/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function(e,t){return null==e?void 0:e[t]},rJ=/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function(e,t){var r=nd(e,t);return rZ(r)?r:void 0};var r3=_("23YZo");rX=rJ(r3,"Map");var nh={},ny={},nv={},nm={},ng={};ng=rJ(Object,"create"),nm=/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function(){this.__data__=ng?ng(null):{},this.size=0};var nb={};nb=/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t};var nx={},n_=Object.prototype.hasOwnProperty;nx=/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){var t=this.__data__;if(ng){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return n_.call(t,e)?t[e]:void 0};var nS={},nw=Object.prototype.hasOwnProperty;nS=/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){var t=this.__data__;return ng?void 0!==t[e]:nw.call(t,e)};var nP={};/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function nO(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}nP=/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ng&&void 0===t?"__lodash_hash_undefined__":t,this},// Add methods to `Hash`.
nO.prototype.clear=nm,nO.prototype.delete=nb,nO.prototype.get=nx,nO.prototype.has=nS,nO.prototype.set=nP,nv=nO,ny=/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function(){this.size=0,this.__data__={hash:new nv,map:new(rX||rR),string:new nv}};var nE={},nj={},nk={};nk=/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},nj=/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function(e,t){var r=e.__data__;return nk(t)?r["string"==typeof t?"string":"hash"]:r.map},nE=/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=nj(this,e).delete(e);return this.size-=t?1:0,t};var nM={};nM=/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){return nj(this,e).get(e)};var nA={};nA=/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return nj(this,e).has(e)};var nT={};/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function nC(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function nL(e){var t=this.__data__=new rR(e);this.size=t.size}nT=/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function(e,t){var r=nj(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},// Add methods to `MapCache`.
nC.prototype.clear=ny,nC.prototype.delete=nE,nC.prototype.get=nM,nC.prototype.has=nA,nC.prototype.set=nT,nh=nC,rq=/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function(e,t){var r=this.__data__;if(r instanceof rR){var n=r.__data__;if(!rX||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new nh(n)}return r.set(e,t),this.size=r.size,this},// Add methods to `Stack`.
nL.prototype.clear=rB,nL.prototype.delete=rY,nL.prototype.get=rU,nL.prototype.has=r$,nL.prototype.set=rq,rI=nL;var nN={},nI={},nR={};nR=/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this};var nD={};/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function nG(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new nh;++t<r;)this.add(e[t])}nD=/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function(e){return this.__data__.has(e)},// Add methods to `SetCache`.
nG.prototype.add=nG.prototype.push=nR,nG.prototype.has=nD,nI=nG;var nV={};nV=/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1};var nF={};nF=/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e,t){return e.has(t)},nN=/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */function(e,t,r,n,o,i){var a=1&r,u=e.length,l=t.length;if(u!=l&&!(a&&l>u))return!1;// Check that cyclic values are equal.
var s=i.get(e),c=i.get(t);if(s&&c)return s==t&&c==e;var f=-1,p=!0,d=2&r?new nI:void 0;// Ignore non-index properties.
for(i.set(e,t),i.set(t,e);++f<u;){var h=e[f],y=t[f];if(n)var v=a?n(y,h,f,t,e,i):n(h,y,f,e,t,i);if(void 0!==v){if(v)continue;p=!1;break}// Recursively compare arrays (susceptible to call stack limits).
if(d){if(!nV(t,function(e,t){if(!nF(d,t)&&(h===e||o(h,e,r,n,i)))return d.push(t)})){p=!1;break}}else if(!(h===y||o(h,y,r,n,i))){p=!1;break}}return i.delete(e),i.delete(t),p};var nz={},nK={},r3=_("23YZo");nK=r3.Uint8Array;var nQ={};nQ=/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function(e){var t=-1,r=Array(e.size);return e.forEach(function(e,n){r[++t]=[n,e]}),r};var nH={};nH=/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r};/** Used to convert symbols to primitives and strings. */var nW=r2?r2.prototype:void 0,nB=nW?nW.valueOf:void 0;nz=/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function(e,t,r,n,o,i,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":if(e.byteLength!=t.byteLength||!i(new nK(e),new nK(t)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return rF(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return e==t+"";case"[object Map]":var u=nQ;case"[object Set]":var l=1&n;if(u||(u=nH),e.size!=t.size&&!l)break;// Assume cyclic values are equal.
var s=a.get(e);if(s)return s==t;n|=2,// Recursively compare objects (susceptible to call stack limits).
a.set(e,t);var c=nN(u(e),u(t),n,o,i,a);return a.delete(e),c;case"[object Symbol]":if(nB)return nB.call(e)==nB.call(t)}return!1};var nY={},nU={},n$={},nq={};nq=/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e};var nX={};nX=Array.isArray,n$=/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function(e,t,r){var n=t(e);return nX(e)?n:nq(n,r(e))};var nJ={},nZ={};nZ=/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i};var n0={};n0=/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function(){return[]};/** Built-in value references. */var n1=Object.prototype.propertyIsEnumerable,n2=Object.getOwnPropertySymbols;nJ=n2?function(e){return null==e?[]:(e=Object(e),nZ(n2(e),function(t){return n1.call(e,t)}))}:n0;var n3={},n4={},n5={};n5=/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n};var n6={},n8={},n7={};n7=/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function(e){return null!=e&&"object"==typeof e},n8=/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function(e){return n7(e)&&"[object Arguments]"==r1(e)};/** Used for built-in method references. */var n9=Object.prototype,oe=n9.hasOwnProperty,ot=n9.propertyIsEnumerable;n6=n8(function(){return arguments}())?n8:function(e){return n7(e)&&oe.call(e,"callee")&&!ot.call(e,"callee")};var or=_("f504n"),on={},oo=/^(?:0|[1-9]\d*)$/;on=/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&oo.test(e))&&e>-1&&e%1==0&&e<t};var oi={},oa={},ou={};ou=/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};/** Used to identify `toStringTag` values of typed arrays. */var ol={};ol["[object Float32Array]"]=ol["[object Float64Array]"]=ol["[object Int8Array]"]=ol["[object Int16Array]"]=ol["[object Int32Array]"]=ol["[object Uint8Array]"]=ol["[object Uint8ClampedArray]"]=ol["[object Uint16Array]"]=ol["[object Uint32Array]"]=!0,ol["[object Arguments]"]=ol["[object Array]"]=ol["[object ArrayBuffer]"]=ol["[object Boolean]"]=ol["[object DataView]"]=ol["[object Date]"]=ol["[object Error]"]=ol["[object Function]"]=ol["[object Map]"]=ol["[object Number]"]=ol["[object Object]"]=ol["[object RegExp]"]=ol["[object Set]"]=ol["[object String]"]=ol["[object WeakMap]"]=!1,oa=/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function(e){return n7(e)&&ou(e.length)&&!!ol[r1(e)]};var os={};os=/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function(e){return function(t){return e(t)}};var oc=_("jIny1"),of=oc&&oc.isTypedArray;oi=of?os(of):oa;/** Used to check objects for own properties. */var op=Object.prototype.hasOwnProperty;n4=/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function(e,t){var r=nX(e),n=!r&&n6(e),o=!r&&!n&&or(e),i=!r&&!n&&!o&&oi(e),a=r||n||o||i,u=a?n5(e.length,String):[],l=u.length;for(var s in e)(t||op.call(e,s))&&!(a&&// Safari 9 has enumerable `arguments.length` in strict mode.
("length"==s||// Node.js 0.10 has enumerable non-index properties on buffers.
o&&("offset"==s||"parent"==s)||// PhantomJS 2 has enumerable non-index properties on typed arrays.
i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||// Skip index properties.
on(s,l)))&&u.push(s);return u};var od={},oh={},oy=Object.prototype;oh=/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||oy)};var ov={};t=Object.keys,r=Object,ov=function(e){return t(r(e))};/** Used to check objects for own properties. */var om=Object.prototype.hasOwnProperty;od=/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function(e){if(!oh(e))return ov(e);var t=[];for(var r in Object(e))om.call(e,r)&&"constructor"!=r&&t.push(r);return t};var og={};og=/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function(e){return null!=e&&ou(e.length)&&!r0(e)},n3=/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function(e){return og(e)?n4(e):od(e)},nU=/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function(e){return n$(e,n3,nJ)};/** Used to check objects for own properties. */var ob=Object.prototype.hasOwnProperty;nY=/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function(e,t,r,n,o,i){var a=1&r,u=nU(e),l=u.length;if(l!=nU(t).length&&!a)return!1;for(var s=l;s--;){var c=u[s];if(!(a?c in t:ob.call(t,c)))return!1}// Check that cyclic values are equal.
var f=i.get(e),p=i.get(t);if(f&&p)return f==t&&p==e;var d=!0;i.set(e,t),i.set(t,e);for(var h=a;++s<l;){var y=e[c=u[s]],v=t[c];if(n)var m=a?n(v,y,c,t,e,i):n(y,v,c,e,t,i);// Recursively compare objects (susceptible to call stack limits).
if(!(void 0===m?y===v||o(y,v,r,n,i):m)){d=!1;break}h||(h="constructor"==c)}if(d&&!h){var g=e.constructor,b=t.constructor;// Non `Object` object instances with different constructors are not equal.
g!=b&&"constructor"in e&&"constructor"in t&&!("function"==typeof g&&g instanceof g&&"function"==typeof b&&b instanceof b)&&(d=!1)}return i.delete(e),i.delete(t),d};var ox={},o_={},r3=_("23YZo");o_=rJ(r3,"DataView");var oS={},r3=_("23YZo");oS=rJ(r3,"Promise");var ow={},r3=_("23YZo");ow=rJ(r3,"Set");var oP={},r3=_("23YZo");oP=rJ(r3,"WeakMap");/** `Object#toString` result references. */var oO="[object Map]",oE="[object Promise]",oj="[object Set]",ok="[object WeakMap]",oM="[object DataView]",oA=na(o_),oT=na(rX),oC=na(oS),oL=na(ow),oN=na(oP),oI=r1;(o_&&oI(new o_(new ArrayBuffer(1)))!=oM||rX&&oI(new rX)!=oO||oS&&oI(oS.resolve())!=oE||ow&&oI(new ow)!=oj||oP&&oI(new oP)!=ok)&&(oI=function(e){var t=r1(e),r="[object Object]"==t?e.constructor:void 0,n=r?na(r):"";if(n)switch(n){case oA:return oM;case oT:return oO;case oC:return oE;case oL:return oj;case oN:return ok}return t}),ox=oI;var or=_("f504n"),oR="[object Arguments]",oD="[object Array]",oG="[object Object]",oV=Object.prototype.hasOwnProperty;rN=/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function(e,t,r,n,o,i){var a=nX(e),u=nX(t),l=a?oD:ox(e),s=u?oD:ox(t);l=l==oR?oG:l,s=s==oR?oG:s;var c=l==oG,f=s==oG,p=l==s;if(p&&or(e)){if(!or(t))return!1;a=!0,c=!1}if(p&&!c)return i||(i=new rI),a||oi(e)?nN(e,t,r,n,o,i):nz(e,t,l,r,n,o,i);if(!(1&r)){var d=c&&oV.call(e,"__wrapped__"),h=f&&oV.call(t,"__wrapped__");if(d||h){var y=d?e.value():e,v=h?t.value():t;return i||(i=new rI),o(y,v,r,n,i)}}return!!p&&(i||(i=new rI),nY(e,t,r,n,o,i))},rL=/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */function e(t,r,n,o,i){return t===r||(null!=t&&null!=r&&(n7(t)||n7(r))?rN(t,r,n,o,e,i):t!=t&&r!=r)},rC=/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */function(e,t){return rL(e,t)};var P=_("acw62"),oF={};!/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*//* global define */function(){var e={}.hasOwnProperty;function t(){for(var r=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var i=typeof o;if("string"===i||"number"===i)r.push(o);else if(Array.isArray(o)){if(o.length){var a=t.apply(null,o);a&&r.push(a)}}else if("object"===i){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var u in o)e.call(o,u)&&o[u]&&r.push(u)}}}return r.join(" ")}oF?(t.default=t,oF=t):"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],function(){return t}):window.classNames=t}();var P=_("acw62"),oz=_("c9Z8w"),oK={};function oQ(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=-1;requestAnimationFrame(function n(o){r<0&&(r=o),o-r>t?(e(o),r=-1):requestAnimationFrame(n)})}function oH(e){return(oH="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oW(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function oB(e){return(oB="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oY(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function oU(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oY(Object(r),!0).forEach(function(t){o$(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oY(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function o$(e,t,r){var n;return(n=function(e,t){if("object"!==oB(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==oB(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===oB(n)?n:String(n))in e)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}!function(e){var t=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty;/**
     * Combine two comparators into a single comparators.
     */function o(e,t){return function(r,n,o){return e(r,n,o)&&t(r,n,o)}}/**
     * Wrap the provided `areItemsEqual` method to manage the circular state, allowing
     * for circular references to be safely included in the comparison without creating
     * stack overflows.
     */function i(e){return function(t,r,n){if(!t||!r||"object"!=typeof t||"object"!=typeof r)return e(t,r,n);var o=n.cache,i=o.get(t),a=o.get(r);if(i&&a)return i===r&&a===t;o.set(t,r),o.set(r,t);var u=e(t,r,n);return o.delete(t),o.delete(r),u}}/**
     * Get the properties to strictly examine, which include both own properties that are
     * not enumerable and symbol properties.
     */function a(e){return t(e).concat(r(e))}/**
     * Whether the object contains the property passed as an own property.
     */var u=Object.hasOwn||function(e,t){return n.call(e,t)};/**
     * Whether the values passed are strictly equal or both NaN.
     */function l(e,t){return e||t?e===t:e===t||e!=e&&t!=t}var s="_owner",c=Object.getOwnPropertyDescriptor,f=Object.keys;/**
     * Whether the arrays are equal in value.
     */function p(e,t,r){var n=e.length;if(t.length!==n)return!1;for(;n-- >0;)if(!r.equals(e[n],t[n],n,n,e,t,r))return!1;return!0}/**
     * Whether the dates passed are equal in value.
     */function d(e,t){return l(e.getTime(),t.getTime())}/**
     * Whether the `Map`s are equal in value.
     */function h(e,t,r){if(e.size!==t.size)return!1;for(var n,o,i={},a=e.entries(),u=0;(n=a.next())&&!n.done;){for(var l=t.entries(),s=!1,c=0;(o=l.next())&&!o.done;){var f=n.value,p=f[0],d=f[1],h=o.value,y=h[0],v=h[1];!s&&!i[c]&&(s=r.equals(p,y,u,c,e,t,r)&&r.equals(d,v,p,y,e,t,r))&&(i[c]=!0),c++}if(!s)return!1;u++}return!0}/**
     * Whether the objects are equal in value.
     */function y(e,t,r){var n,o=f(e),i=o.length;if(f(t).length!==i)return!1;// Decrementing `while` showed faster results than either incrementing or
// decrementing `for` loop and than an incrementing `while` loop. Declarative
// methods like `some` / `every` were not used to avoid incurring the garbage
// cost of anonymous callbacks.
for(;i-- >0;)if((n=o[i])===s&&(e.$$typeof||t.$$typeof)&&e.$$typeof!==t.$$typeof||!u(t,n)||!r.equals(e[n],t[n],n,n,e,t,r))return!1;return!0}/**
     * Whether the objects are equal in value with strict property checking.
     */function v(e,t,r){var n,o,i,l=a(e),f=l.length;if(a(t).length!==f)return!1;// Decrementing `while` showed faster results than either incrementing or
// decrementing `for` loop and than an incrementing `while` loop. Declarative
// methods like `some` / `every` were not used to avoid incurring the garbage
// cost of anonymous callbacks.
for(;f-- >0;)if((n=l[f])===s&&(e.$$typeof||t.$$typeof)&&e.$$typeof!==t.$$typeof||!u(t,n)||!r.equals(e[n],t[n],n,n,e,t,r)||(o=c(e,n),i=c(t,n),(o||i)&&(!o||!i||o.configurable!==i.configurable||o.enumerable!==i.enumerable||o.writable!==i.writable)))return!1;return!0}/**
     * Whether the primitive wrappers passed are equal in value.
     */function m(e,t){return l(e.valueOf(),t.valueOf())}/**
     * Whether the regexps passed are equal in value.
     */function g(e,t){return e.source===t.source&&e.flags===t.flags}/**
     * Whether the `Set`s are equal in value.
     */function b(e,t,r){if(e.size!==t.size)return!1;for(var n,o,i={},a=e.values();(n=a.next())&&!n.done;){for(var u=t.values(),l=!1,s=0;(o=u.next())&&!o.done;)!l&&!i[s]&&(l=r.equals(n.value,o.value,n.value,o.value,e,t,r))&&(i[s]=!0),s++;if(!l)return!1}return!0}/**
     * Whether the TypedArray instances are equal in value.
     */function x(e,t){var r=e.length;if(t.length!==r)return!1;for(;r-- >0;)if(e[r]!==t[r])return!1;return!0}var _=Array.isArray,S="function"==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView:null,w=Object.assign,P=Object.prototype.toString.call.bind(Object.prototype.toString),O=L(),E=L({strict:!0}),j=L({circular:!0}),k=L({circular:!0,strict:!0}),M=L({createInternalComparator:function(){return l}}),A=L({strict:!0,createInternalComparator:function(){return l}}),T=L({circular:!0,createInternalComparator:function(){return l}}),C=L({circular:!0,createInternalComparator:function(){return l},strict:!0});/**
     * Create a custom equality comparison method.
     *
     * This can be done to create very targeted comparisons in extreme hot-path scenarios
     * where the standard methods are not performant enough, but can also be used to provide
     * support for legacy environments that do not support expected features like
     * `RegExp.prototype.flags` out of the box.
     */function L(e){void 0===e&&(e={});var t,r,n,a,u,l,s,c,f,O=e.circular,E=e.createInternalComparator,j=e.createState,k=e.strict,M=(r=(t=/**
     * Create the configuration object used for building comparators.
     */function(e){var t=e.circular,r=e.createCustomConfig,n=e.strict,a={areArraysEqual:n?v:p,areDatesEqual:d,areMapsEqual:n?o(h,v):h,areObjectsEqual:n?v:y,arePrimitiveWrappersEqual:m,areRegExpsEqual:g,areSetsEqual:n?o(b,v):b,areTypedArraysEqual:n?v:x};if(r&&(a=w({},a,r(a))),t){var u=i(a.areArraysEqual),l=i(a.areMapsEqual),s=i(a.areObjectsEqual),c=i(a.areSetsEqual);a=w({},a,{areArraysEqual:u,areMapsEqual:l,areObjectsEqual:s,areSetsEqual:c})}return a}(e)).areArraysEqual,n=t.areDatesEqual,a=t.areMapsEqual,u=t.areObjectsEqual,l=t.arePrimitiveWrappersEqual,s=t.areRegExpsEqual,c=t.areSetsEqual,f=t.areTypedArraysEqual,function(e,t,o){// If the items are strictly equal, no need to do a value comparison.
if(e===t)return!0;// If the items are not non-nullish objects, then the only possibility
// of them being equal but not strictly is if they are both `NaN`. Since
// `NaN` is uniquely not equal to itself, we can use self-comparison of
// both objects, which is faster than `isNaN()`.
if(null==e||null==t||"object"!=typeof e||"object"!=typeof t)return e!=e&&t!=t;var i=e.constructor;// Checks are listed in order of commonality of use-case:
//   1. Common complex object types (plain object, array)
//   2. Common data values (date, regexp)
//   3. Less-common complex object types (map, set)
//   4. Less-common data values (promise, primitive wrappers)
// Inherently this is both subjective and assumptive, however
// when reviewing comparable libraries in the wild this order
// appears to be generally consistent.
// Constructors should match, otherwise there is potential for false positives
// between class and subclass or custom object and POJO.
if(i!==t.constructor)return!1;// `isPlainObject` only checks against the object's own realm. Cross-realm
// comparisons are rare, and will be handled in the ultimate fallback, so
// we can avoid capturing the string tag.
if(i===Object)return u(e,t,o);// `isArray()` works on subclasses and is cross-realm, so we can avoid capturing
// the string tag or doing an `instanceof` check.
if(_(e))return r(e,t,o);// `isTypedArray()` works on all possible TypedArray classes, so we can avoid
// capturing the string tag or comparing against all possible constructors.
if(null!=S&&S(e))return f(e,t,o);// Try to fast-path equality checks for other complex object types in the
// same realm to avoid capturing the string tag. Strict equality is used
// instead of `instanceof` because it is more performant for the common
// use-case. If someone is subclassing a native class, it will be handled
// with the string tag comparison.
if(i===Date)return n(e,t,o);if(i===RegExp)return s(e,t,o);if(i===Map)return a(e,t,o);if(i===Set)return c(e,t,o);// Since this is a custom object, capture the string tag to determing its type.
// This is reasonably performant in modern environments like v8 and SpiderMonkey.
var p=P(e);return"[object Date]"===p?n(e,t,o):"[object RegExp]"===p?s(e,t,o):"[object Map]"===p?a(e,t,o):"[object Set]"===p?c(e,t,o):"[object Object]"===p?"function"!=typeof e.then&&"function"!=typeof t.then&&u(e,t,o):"[object Arguments]"===p?u(e,t,o):("[object Boolean]"===p||"[object Number]"===p||"[object String]"===p)&&l(e,t,o)}),A=E?E(M):function(e,t,r,n,o,i,a){return M(e,t,a)};return(/**
     * Create the `isEqual` function used by the consuming application.
     */function(e){var t=e.circular,r=e.comparator,n=e.createState,o=e.equals,i=e.strict;if(n)return function(e,a){var u=n(),l=u.cache;return r(e,a,{cache:void 0===l?t?new WeakMap:void 0:l,equals:o,meta:u.meta,strict:i})};if(t)return function(e,t){return r(e,t,{cache:new WeakMap,equals:o,meta:void 0,strict:i})};var a={cache:void 0,equals:o,meta:void 0,strict:i};return function(e,t){return r(e,t,a)}}({circular:void 0!==O&&O,comparator:M,createState:j,equals:A,strict:void 0!==k&&k}))}e.circularDeepEqual=j,e.circularShallowEqual=T,e.createCustomEqual=L,e.deepEqual=O,e.sameValueZeroEqual=l,e.shallowEqual=M,e.strictCircularDeepEqual=k,e.strictCircularShallowEqual=C,e.strictDeepEqual=E,e.strictShallowEqual=A}(oK);/* eslint no-console: 0 */var oq=["Webkit","Moz","O","ms"],oX=["-webkit-","-moz-","-o-","-ms-"],oJ=["transform","transformOrigin","transition"],oZ=function(e){return e},o0=function(e,t){if(-1===oJ.indexOf(e))return o$({},e,Number.isNaN(t)?0:t);var r="transition"===e,n=e.replace(/(\w)/,function(e){return e.toUpperCase()}),o=t;return oq.reduce(function(e,i,a){return r&&(o=t.replace(/(transform|transform-origin)/gim,"".concat(oX[a],"$1"))),oU(oU({},e),{},o$({},i+n,o))},{})},o1=function(e,t){return Object.keys(t).reduce(function(r,n){return oU(oU({},r),{},o$({},n,e(n,t[n])))},{})},o2=function(e){return Object.keys(e).reduce(function(e,t){return oU(oU({},e),o0(t,e[t]))},e)},o3=function(e,t,r){return e.map(function(e){return"".concat(e.replace(/([A-Z])/g,function(e){return"-".concat(e.toLowerCase())})," ").concat(t,"ms ").concat(r)}).join(",")},o4=function(e,t,r,n,o,i,a,u){};function o5(e,t){if(e){if("string"==typeof e)return o6(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o6(e,t)}}function o6(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var o8=function(e,t){return[0,3*e,3*t-6*e,3*e-3*t+1]},o7=function(e,t){return e.map(function(e,r){return e*Math.pow(t,r)}).reduce(function(e,t){return e+t})},o9=function(e,t){return function(r){return o7(o8(e,t),r)}},ie=function(){for(var e,t,r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=n[0],a=n[1],u=n[2],l=n[3];if(1===n.length)switch(n[0]){case"linear":i=0,a=0,u=1,l=1;break;case"ease":i=.25,a=.1,u=.25,l=1;break;case"ease-in":i=.42,a=0,u=1,l=1;break;case"ease-out":i=.42,a=0,u=.58,l=1;break;case"ease-in-out":i=0,a=0,u=.58,l=1;break;default:var s=n[0].split("(");if("cubic-bezier"===s[0]&&4===s[1].split(")")[0].split(",").length){var c,f=function(e){if(Array.isArray(e))return e}(c=s[1].split(")")[0].split(",").map(function(e){return parseFloat(e)}))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(c,4)||o5(c,4)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();i=f[0],a=f[1],u=f[2],l=f[3]}else o4(!1,"[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s",n)}o4([i,u,a,l].every(function(e){return"number"==typeof e&&e>=0&&e<=1}),"[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s",n);var p=o9(i,u),d=o9(a,l),h=(e=i,t=u,function(r){var n;return o7([].concat(function(e){if(Array.isArray(e))return o6(e)}(n=o8(e,t).map(function(e,t){return e*t}).slice(1))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||o5(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[0]),r)}),y=function(e){for(var t=e>1?1:e,r=t,n=0;n<8;++n){var o,i=p(r)-t,a=h(r);if(1e-4>Math.abs(i-t)||a<1e-4)break;r=(o=r-i/a)>1?1:o<0?0:o}return d(r)};return y.isStepper=!1,y},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.stiff,r=void 0===t?100:t,n=e.damping,o=void 0===n?8:n,i=e.dt,a=void 0===i?17:i,u=function(e,t,n){var i=n+(-(e-t)*r-n*o)*a/1e3,u=n*a/1e3+e;return 1e-4>Math.abs(u-t)&&1e-4>Math.abs(i)?[t,0]:[u,i]};return u.isStepper=!0,u.dt=a,u},ir=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t[0];if("string"==typeof n)switch(n){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return ie(n);case"spring":return it();default:if("cubic-bezier"===n.split("(")[0])return ie(n);o4(!1,"[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s",t)}return"function"==typeof n?n:(o4(!1,"[configEasing]: first argument type should be function or string, instead received %s",t),null)};function io(e){return(io="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ii(e){return function(e){if(Array.isArray(e))return ic(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||is(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ia(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function iu(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ia(Object(r),!0).forEach(function(t){il(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ia(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function il(e,t,r){var n;return(n=function(e,t){if("object"!==io(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==io(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===io(n)?n:String(n))in e)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function is(e,t){if(e){if("string"==typeof e)return ic(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ic(e,t)}}function ic(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var ip=function(e,t,r){return e+(t-e)*r},id=function(e){return e.from!==e.to},ih=function e(t,r,n){var o=o1(function(e,r){if(id(r)){var n,o=function(e){if(Array.isArray(e))return e}(n=t(r.from,r.to,r.velocity))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(n,2)||is(n,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=o[0],a=o[1];return iu(iu({},r),{},{from:i,velocity:a})}return r},r);return n<1?o1(function(e,t){return id(t)?iu(iu({},t),{},{velocity:ip(t.velocity,o[e].velocity,n),from:ip(t.from,o[e].from,n)}):t},r):e(t,o,n-1)},iy=function(e,t,r,n,o){var i,a,u=[Object.keys(e),Object.keys(t)].reduce(function(e,t){return e.filter(function(e){return t.includes(e)})}),l=u.reduce(function(r,n){return iu(iu({},r),{},il({},n,[e[n],t[n]]))},{}),s=u.reduce(function(r,n){return iu(iu({},r),{},il({},n,{from:e[n],velocity:0,to:t[n]}))},{}),c=-1,f=function(){return null};// return start animation method
return f=r.isStepper?function(n){i||(i=n);var a=(n-i)/r.dt;s=ih(r,s,a),// get union set and add compatible prefix
o(iu(iu(iu({},e),t),o1(function(e,t){return t.from},s))),i=n,Object.values(s).filter(id).length&&(c=requestAnimationFrame(f))}:function(i){a||(a=i);var u=(i-a)/n,s=o1(function(e,t){return ip.apply(void 0,ii(t).concat([r(u)]))},l);if(// get union set and add compatible prefix
o(iu(iu(iu({},e),t),s)),u<1)c=requestAnimationFrame(f);else{var p=o1(function(e,t){return ip.apply(void 0,ii(t).concat([r(1)]))},l);o(iu(iu(iu({},e),t),p))}},function(){// return stop animation method
return requestAnimationFrame(f),function(){cancelAnimationFrame(c)}}};function iv(e){return(iv="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var im=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function ig(e){return function(e){if(Array.isArray(e))return ib(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return ib(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ib(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ib(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function ix(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i_(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ix(Object(r),!0).forEach(function(t){iS(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ix(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function iS(e,t,r){return(t=iP(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function iw(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,iP(n.key),n)}}function iP(e){var t=function(e,t){if("object"!==iv(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==iv(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===iv(t)?t:String(t)}function iO(e,t){return(iO=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function iE(e,t){if(t&&("object"===iv(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return ij(e)}function ij(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ik(e){return(ik=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var iM=/*#__PURE__*/function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&iO(e,t)}(i,e);var t,r,n,o=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=ik(i);if(t){var n=ik(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return iE(this,e)});function i(e,t){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i);var r,n=(r=o.call(this,e,t)).props,a=n.isActive,u=n.attributeName,l=n.from,s=n.to,c=n.steps,f=n.children,p=n.duration;if(r.handleStyleChange=r.handleStyleChange.bind(ij(r)),r.changeStyle=r.changeStyle.bind(ij(r)),!a||p<=0)return r.state={style:{}},"function"==typeof f&&(r.state={style:s}),iE(r);if(c&&c.length)r.state={style:c[0].style};else if(l){if("function"==typeof f)return r.state={style:l},iE(r);r.state={style:u?iS({},u,l):l}}else r.state={style:{}};return r}return r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.isActive,r=e.canBegin;this.mounted=!0,t&&r&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.isActive,n=t.canBegin,o=t.attributeName,i=t.shouldReAnimate,a=t.to,u=t.from,l=this.state.style;if(n){if(!r){var s={style:o?iS({},o,a):a};this.state&&l&&(o&&l[o]!==a||!o&&l!==a)&&this.setState(s);return}if(!(0,oK.deepEqual)(e.to,a)||!e.canBegin||!e.isActive){var c=!e.canBegin||!e.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var f=c||i?u:e.to;if(this.state&&l){var p={style:o?iS({},o,f):f};(o&&[o]!==f||!o&&l!==f)&&this.setState(p)}this.runAnimation(i_(i_({},this.props),{},{from:f,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var e=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),e&&e()}},{key:"handleStyleChange",value:function(e){this.changeStyle(e)}},{key:"changeStyle",value:function(e){this.mounted&&this.setState({style:e})}},{key:"runJSAnimation",value:function(e){var t=this,r=e.from,n=e.to,o=e.duration,i=e.easing,a=e.begin,u=e.onAnimationEnd,l=e.onAnimationStart,s=iy(r,n,ir(i),o,this.changeStyle);this.manager.start([l,a,function(){t.stopJSAnimation=s()},o,u])}},{key:"runStepAnimation",value:function(e){var t=this,r=e.steps,n=e.begin,o=e.onAnimationStart,i=r[0],a=i.style,u=i.duration;return this.manager.start([o].concat(ig(r.reduce(function(e,n,o){if(0===o)return e;var i=n.duration,a=n.easing,u=void 0===a?"ease":a,l=n.style,s=n.properties,c=n.onAnimationEnd,f=o>0?r[o-1]:n,p=s||Object.keys(l);if("function"==typeof u||"spring"===u)return[].concat(ig(e),[t.runJSAnimation.bind(t,{from:f.style,to:l,duration:i,easing:u}),i]);var d=o3(p,i,u),h=i_(i_(i_({},f.style),l),{},{transition:d});return[].concat(ig(e),[h,i,c]).filter(oZ)},[a,Math.max(void 0===u?0:u,n)])),[e.onAnimationEnd]))}},{key:"runAnimation",value:function(e){if(!this.manager){var t,r,n;this.manager=(t=function(){return null},r=!1,n=function e(n){if(!r){if(Array.isArray(n)){if(!n.length)return;var o=function(e){if(Array.isArray(e))return e}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return oW(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return oW(e,t)}}(n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=o[0],a=o.slice(1);if("number"==typeof i){oQ(e.bind(null,a),i);return}e(i),oQ(e.bind(null,a));return}"object"===oH(n)&&t(n),"function"==typeof n&&n()}},{stop:function(){r=!0},start:function(e){r=!1,n(e)},subscribe:function(e){return t=e,function(){t=function(){return null}}}})}var o=e.begin,i=e.duration,a=e.attributeName,u=e.to,l=e.easing,s=e.onAnimationStart,c=e.onAnimationEnd,f=e.steps,p=e.children,d=this.manager;if(this.unSubscribe=d.subscribe(this.handleStyleChange),"function"==typeof l||"function"==typeof p||"spring"===l){this.runJSAnimation(e);return}if(f.length>1){this.runStepAnimation(e);return}var h=a?iS({},a,u):u,y=o3(Object.keys(h),i,l);d.start([s,o,i_(i_({},h),{},{transition:y}),i,c])}},{key:"render",value:function(){var e=this.props,t=e.children,r=(e.begin,e.duration),n=(e.attributeName,e.easing,e.isActive),o=(e.steps,e.from,e.to,e.canBegin,e.onAnimationEnd,e.shouldReAnimate,e.onAnimationReStart,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,im)),i=(0,P.Children).count(t),a=o2(this.state.style);if("function"==typeof t)return t(a);if(!n||0===i||r<=0)return t;var u=function(e){var t=e.props,r=t.style,n=void 0===r?{}:r,i=t.className;return/*#__PURE__*/(0,P.cloneElement)(e,i_(i_({},o),{},{style:i_(i_({},n),a),className:i}))};return 1===i?u((0,P.Children).only(t)):/*@__PURE__*/g(P).createElement("div",null,(0,P.Children).map(t,function(e){return u(e)}))}}],iw(i.prototype,r),n&&iw(i,n),Object.defineProperty(i,"prototype",{writable:!1}),i}(P.PureComponent);iM.displayName="Animate",iM.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}},iM.propTypes={from:/*@__PURE__*/g(oz).oneOfType([/*@__PURE__*/g(oz).object,/*@__PURE__*/g(oz).string]),to:/*@__PURE__*/g(oz).oneOfType([/*@__PURE__*/g(oz).object,/*@__PURE__*/g(oz).string]),attributeName:/*@__PURE__*/g(oz).string,// animation duration
duration:/*@__PURE__*/g(oz).number,begin:/*@__PURE__*/g(oz).number,easing:/*@__PURE__*/g(oz).oneOfType([/*@__PURE__*/g(oz).string,/*@__PURE__*/g(oz).func]),steps:/*@__PURE__*/g(oz).arrayOf(/*@__PURE__*/g(oz).shape({duration:/*@__PURE__*/g(oz).number.isRequired,style:/*@__PURE__*/g(oz).object.isRequired,easing:/*@__PURE__*/g(oz).oneOfType([/*@__PURE__*/g(oz).oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),/*@__PURE__*/g(oz).func]),// transition css properties(dash case), optional
properties:/*@__PURE__*/g(oz).arrayOf("string"),onAnimationEnd:/*@__PURE__*/g(oz).func})),children:/*@__PURE__*/g(oz).oneOfType([/*@__PURE__*/g(oz).node,/*@__PURE__*/g(oz).func]),isActive:/*@__PURE__*/g(oz).bool,canBegin:/*@__PURE__*/g(oz).bool,onAnimationEnd:/*@__PURE__*/g(oz).func,// decide if it should reanimate with initial from style when props change
shouldReAnimate:/*@__PURE__*/g(oz).bool,onAnimationStart:/*@__PURE__*/g(oz).func,onAnimationReStart:/*@__PURE__*/g(oz).func};var P=_("acw62"),iA={},iT=iN(_("jgMPM")),iC=iN(_("6AMGZ")),iL=iN(_("fq997"));function iN(e){return e&&e.__esModule?e:{default:e}}iA={Transition:iN(_("lQkjg")).default,TransitionGroup:iL.default,ReplaceTransition:iC.default,CSSTransition:iT.default};var oz=_("c9Z8w"),P=_("acw62"),oz=_("c9Z8w"),iI=["children","appearOptions","enterOptions","leaveOptions"];function iR(e){return(iR="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function iD(){return(iD=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function iG(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function iV(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?iG(Object(r),!0).forEach(function(t){iH(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):iG(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function iF(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,iW(n.key),n)}}function iz(e,t){return(iz=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function iK(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function iQ(e){return(iQ=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function iH(e,t,r){return(t=iW(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function iW(e){var t=function(e,t){if("object"!==iR(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==iR(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===iR(t)?t:String(t)}void 0===Number.isFinite&&(Number.isFinite=function(e){return"number"==typeof e&&isFinite(e)});var iB=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.steps,r=e.duration;return t&&t.length?t.reduce(function(e,t){return e+(Number.isFinite(t.duration)&&t.duration>0?t.duration:0)},0):Number.isFinite(r)?r:0},iY=/*#__PURE__*/function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&iz(e,t)}(i,e);var t,r,n,o=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=iQ(i);if(t){var n=iQ(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===iR(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return iK(e)}(this,e)});function i(){var e;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i),iH(iK(e=o.call(this)),"handleEnter",function(t,r){var n=e.props,o=n.appearOptions,i=n.enterOptions;e.handleStyleActive(r?o:i)}),iH(iK(e),"handleExit",function(){var t=e.props.leaveOptions;e.handleStyleActive(t)}),e.state={isActive:!1},e}return r=[{key:"handleStyleActive",value:function(e){if(e){var t=e.onAnimationEnd?function(){e.onAnimationEnd()}:null;this.setState(iV(iV({},e),{},{onAnimationEnd:t,isActive:!0}))}}},{key:"parseTimeout",value:function(){var e=this.props,t=e.appearOptions,r=e.enterOptions,n=e.leaveOptions;return iB(t)+iB(r)+iB(n)}},{key:"render",value:function(){var e=this,t=this.props,r=t.children,n=(t.appearOptions,t.enterOptions,t.leaveOptions,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,iI));return /*@__PURE__*/g(P).createElement(iA.Transition,iD({},n,{onEnter:this.handleEnter,onExit:this.handleExit,timeout:this.parseTimeout()}),function(){return /*@__PURE__*/g(P).createElement(iM,e.state,(0,P.Children).only(r))})}}],iF(i.prototype,r),n&&iF(i,n),Object.defineProperty(i,"prototype",{writable:!1}),i}(P.Component);function iU(e){var t=e.component,r=e.children,n=e.appear,o=e.enter,i=e.leave;return /*@__PURE__*/g(P).createElement(iA.TransitionGroup,{component:t},(0,P.Children).map(r,function(e,t){return /*@__PURE__*/g(P).createElement(iY,{appearOptions:n,enterOptions:o,leaveOptions:i,key:"child-".concat(t)// eslint-disable-line
},e)}))}iY.propTypes={appearOptions:/*@__PURE__*/g(oz).object,enterOptions:/*@__PURE__*/g(oz).object,leaveOptions:/*@__PURE__*/g(oz).object,children:/*@__PURE__*/g(oz).element},iU.propTypes={appear:/*@__PURE__*/g(oz).object,enter:/*@__PURE__*/g(oz).object,leave:/*@__PURE__*/g(oz).object,children:/*@__PURE__*/g(oz).oneOfType([/*@__PURE__*/g(oz).array,/*@__PURE__*/g(oz).element]),component:/*@__PURE__*/g(oz).any},iU.defaultProps={component:"span"};var P=_("acw62"),i$={};i$=/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */function(e){return"string"==typeof e||!nX(e)&&n7(e)&&"[object String]"==r1(e)};var iq={},iX={},iJ={},iZ={},i0={};i0=/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function(e){return"symbol"==typeof e||n7(e)&&"[object Symbol]"==r1(e)};/** Used to match property names within property paths. */var i1=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i2=/^\w*$/;iZ=/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */function(e,t){if(nX(e))return!1;var r=typeof e;return!!("number"==r||"symbol"==r||"boolean"==r||null==e||i0(e))||i2.test(e)||!i1.test(e)||null!=t&&e in Object(t)};var i3={},i4={};/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */function i5(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(i5.Cache||nh),r}// Expose `MapCache`.
i5.Cache=nh;/** Used to match property names within property paths. */var i6=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i8=/\\(\\)?/g;o=(n=(i4=i5)(function(e){var t=[];return 46/* . */===e.charCodeAt(0)&&t.push(""),e.replace(i6,function(e,r,n,o){t.push(n?o.replace(i8,"$1"):r||e)}),t},function(e){return 500===o.size&&o.clear(),e})).cache,i3=n;var i7={},i9={},ae={};ae=/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o};/** Used as references for various `Number` constants. */var at=1/0,ar=r2?r2.prototype:void 0,an=ar?ar.toString:void 0;i9=/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function e(t){// Exit early for strings to avoid a performance hit in some environments.
if("string"==typeof t)return t;if(nX(t))return ae(t,e)+"";if(i0(t))return an?an.call(t):"";var r=t+"";return"0"==r&&1/t==-at?"-0":r},i7=/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */function(e){return null==e?"":i9(e)},iJ=/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */function(e,t){return nX(e)?e:iZ(e,t)?[e]:i3(i7(e))};var ao={},ai=1/0;ao=/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */function(e){if("string"==typeof e||i0(e))return e;var t=e+"";return"0"==t&&1/e==-ai?"-0":t},iX=/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */function(e,t){t=iJ(t,e);for(var r=0,n=t.length;null!=e&&r<n;)e=e[ao(t[r++])];return r&&r==n?e:void 0},iq=/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */function(e,t,r){var n=null==e?void 0:iX(e,t);return void 0===n?r:n};var P=_("acw62"),aa={};aa=_("9cCWX");var au={},al={};al=/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */function(e){return"number"==typeof e||n7(e)&&"[object Number]"==r1(e)},au=/**
 * Checks if `value` is `NaN`.
 *
 * **Note:** This method is based on
 * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
 * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
 * `undefined` and other non-number values.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 * @example
 *
 * _.isNaN(NaN);
 * // => true
 *
 * _.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * _.isNaN(undefined);
 * // => false
 */function(e){// An `NaN` primitive is the only value that is not equal to itself.
// Perform the `toStringTag` check first to avoid errors with some
// ActiveX objects in IE.
return al(e)&&e!=+e};var as=function(e){return 0===e?0:e>0?1:-1},ac=function(e){return /*@__PURE__*/g(i$)(e)&&e.indexOf("%")===e.length-1},af=function(e){return /*@__PURE__*/g(al)(e)&&!/*@__PURE__*/g(au)(e)},ap=function(e){return af(e)||/*@__PURE__*/g(i$)(e)},ad=0,ah=function(e){var t=++ad;return"".concat(e||"").concat(t)},ay=function(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!af(e)&&!/*@__PURE__*/g(i$)(e))return n;if(ac(e)){var i=e.indexOf("%");r=t*parseFloat(e.slice(0,i))/100}else r=+e;return /*@__PURE__*/g(au)(r)&&(r=n),o&&r>t&&(r=t),r},av=function(e){if(!e)return null;var t=Object.keys(e);return t&&t.length?e[t[0]]:null},am=function(e){if(!/*@__PURE__*/g(nX)(e))return!1;for(var t=e.length,r={},n=0;n<t;n++){if(r[e[n]])return!0;r[e[n]]=!0}return!1},ag=function(e,t){return af(e)&&af(t)?function(r){return e+r*(t-e)}:function(){return t}};function ab(e,t,r){return e&&e.length?e.find(function(e){return e&&("function"==typeof t?t(e):/*@__PURE__*/g(iq)(e,t))===r}):null}var ax=function(e){if(!e||!e.length)return null;for(var t=e.length,r=0,n=0,o=0,i=0,a=1/0,u=-1/0,l=0,s=0,c=0;c<t;c++)l=e[c].cx||0,s=e[c].cy||0,r+=l,n+=s,o+=l*s,i+=l*l,a=Math.min(a,l),u=Math.max(u,l);var f=t*i!=r*r?(t*o-r*n)/(t*i-r*r):0;return{xmin:a,xmax:u,a:f,b:(n-f*r)/t}};function a_(e,t){/* eslint-disable no-restricted-syntax */for(var r in e)if(({}).hasOwnProperty.call(e,r)&&(!({}).hasOwnProperty.call(t,r)||e[r]!==t[r]))return!1;for(var n in t)if(({}).hasOwnProperty.call(t,n)&&!({}).hasOwnProperty.call(e,n))return!1;return!0}var P=_("acw62");function aS(e){return(aS="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var aw=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style",/*
 * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
 * that can use it and it conflicts with the recharts prop 'type'
 * https://github.com/recharts/recharts/pull/3327
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
 */// 'type',
"target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],aP=["points","pathLength"],aO={svg:["viewBox","children"],polygon:aP,polyline:aP},aE=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],aj=function(e,t){if(!e||"function"==typeof e||"boolean"==typeof e)return null;var r=e;if(/*#__PURE__*/(0,P.isValidElement)(e)&&(r=e.props),!/*@__PURE__*/g(nr)(r))return null;var n={};return Object.keys(r).forEach(function(e){aE.includes(e)&&(n[e]=t||function(t){return r[e](r,t)})}),n},ak=function(e,t,r){if(!/*@__PURE__*/g(nr)(e)||"object"!==aS(e))return null;var n=null;return Object.keys(e).forEach(function(o){var i=e[o];aE.includes(o)&&"function"==typeof i&&(n||(n={}),n[o]=function(e){return i(t,r,e),null})}),n},aM=["children"],aA=["children"];function aT(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var aC={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart"},aL=function(e){return"string"==typeof e?e:e?e.displayName||e.name||"Component":""},aN=null,aI=null,aR=function e(t){if(t===aN&&/*@__PURE__*/g(nX)(aI))return aI;var r=[];return(0,P.Children).forEach(t,function(t){/*@__PURE__*/g(rT)(t)||((0,aa.isFragment)(t)?r=r.concat(e(t.props.children)):r.push(t))}),aI=r,aN=t,r};function aD(e,t){var r=[],n=[];return n=/*@__PURE__*/g(nX)(t)?t.map(function(e){return aL(e)}):[aL(t)],aR(e).forEach(function(e){var t=/*@__PURE__*/g(iq)(e,"type.displayName")||/*@__PURE__*/g(iq)(e,"type.name");-1!==n.indexOf(t)&&r.push(e)}),r}function aG(e,t){var r=aD(e,t);return r&&r[0]}var aV=function(e){if(!e||!e.props)return!1;var t=e.props,r=t.width,n=t.height;return!!af(r)&&!(r<=0)&&!!af(n)&&!(n<=0)},aF=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],az=function(e,t,r,n){/**
   * If the svg element type is explicitly included, check against the filtered element key map
   * to determine if there are attributes that should only exist on that element type.
   * @todo Add an internal cjs version of https://github.com/wooorm/svg-element-attributes for full coverage.
   */var o,i=null!==(o=null==aO?void 0:aO[n])&&void 0!==o?o:[];return!/*@__PURE__*/g(r0)(e)&&(n&&i.includes(t)||aw.includes(t))||r&&aE.includes(t)},aK=function(e,t,r){if(!e||"function"==typeof e||"boolean"==typeof e)return null;var n=e;if(/*#__PURE__*/(0,P.isValidElement)(e)&&(n=e.props),!/*@__PURE__*/g(nr)(n))return null;var o={};return(/**
   * Props are blindly spread onto SVG elements. This loop filters out properties that we don't want to spread.
   * Items filtered out are as follows:
   *   - functions in properties that are SVG attributes (functions are included when includeEvents is true)
   *   - props that are SVG attributes but don't matched the passed svgElementType
   *   - any prop that is not in SVGElementPropKeys (or in EventKeys if includeEvents is true)
   */Object.keys(n).forEach(function(e){var i;az(null===(i=n)||void 0===i?void 0:i[e],e,t,r)&&(o[e]=n[e])}),o)},aQ=function e(t,r){if(t===r)return!0;var n=(0,P.Children).count(t);if(n!==(0,P.Children).count(r))return!1;if(0===n)return!0;if(1===n)return aH(/*@__PURE__*/g(nX)(t)?t[0]:t,/*@__PURE__*/g(nX)(r)?r[0]:r);for(var o=0;o<n;o++){var i=t[o],a=r[o];if(/*@__PURE__*/g(nX)(i)||/*@__PURE__*/g(nX)(a)){if(!e(i,a))return!1}else if(!aH(i,a))return!1}return!0},aH=function(e,t){if(/*@__PURE__*/g(rT)(e)&&/*@__PURE__*/g(rT)(t))return!0;if(!/*@__PURE__*/g(rT)(e)&&!/*@__PURE__*/g(rT)(t)){var r=e.props||{},n=r.children,o=aT(r,aM),i=t.props||{},a=i.children,u=aT(i,aA);if(n&&a)return a_(o,u)&&aQ(n,a);if(!n&&!a)return a_(o,u)}return!1},aW=function(e,t){var r=[],n={};return aR(e).forEach(function(e,o){if(e&&e.type&&/*@__PURE__*/g(i$)(e.type)&&aF.indexOf(e.type)>=0)r.push(e);else if(e){var i=aL(e.type),a=t[i]||{},u=a.handler,l=a.once;if(u&&(!l||!n[i])){var s=u(e,i,o);r.push(s),n[i]=!0}}}),r},aB=function(e){var t=e&&e.type;return t&&aC[t]?aC[t]:null};function aY(e){return(aY="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function aU(){return(aU=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a$(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function aq(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function aX(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?aq(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!==aY(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==aY(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===aY(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):aq(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var aJ=function(e,t,r,n,o){var i,a=Math.min(Math.abs(r)/2,Math.abs(n)/2),u=n>=0?1:-1,l=r>=0?1:-1,s=n>=0&&r>=0||n<0&&r<0?1:0;if(a>0&&o instanceof Array){for(var c=[0,0,0,0],f=0;f<4;f++)c[f]=o[f]>a?a:o[f];i="M".concat(e,",").concat(t+u*c[0]),c[0]>0&&(i+="A ".concat(c[0],",").concat(c[0],",0,0,").concat(s,",").concat(e+l*c[0],",").concat(t)),i+="L ".concat(e+r-l*c[1],",").concat(t),c[1]>0&&(i+="A ".concat(c[1],",").concat(c[1],",0,0,").concat(s,",\n        ").concat(e+r,",").concat(t+u*c[1])),i+="L ".concat(e+r,",").concat(t+n-u*c[2]),c[2]>0&&(i+="A ".concat(c[2],",").concat(c[2],",0,0,").concat(s,",\n        ").concat(e+r-l*c[2],",").concat(t+n)),i+="L ".concat(e+l*c[3],",").concat(t+n),c[3]>0&&(i+="A ".concat(c[3],",").concat(c[3],",0,0,").concat(s,",\n        ").concat(e,",").concat(t+n-u*c[3])),i+="Z"}else if(a>0&&o===+o&&o>0){var p=Math.min(a,o);i="M ".concat(e,",").concat(t+u*p,"\n            A ").concat(p,",").concat(p,",0,0,").concat(s,",").concat(e+l*p,",").concat(t,"\n            L ").concat(e+r-l*p,",").concat(t,"\n            A ").concat(p,",").concat(p,",0,0,").concat(s,",").concat(e+r,",").concat(t+u*p,"\n            L ").concat(e+r,",").concat(t+n-u*p,"\n            A ").concat(p,",").concat(p,",0,0,").concat(s,",").concat(e+r-l*p,",").concat(t+n,"\n            L ").concat(e+l*p,",").concat(t+n,"\n            A ").concat(p,",").concat(p,",0,0,").concat(s,",").concat(e,",").concat(t+n-u*p," Z")}else i="M ".concat(e,",").concat(t," h ").concat(r," v ").concat(n," h ").concat(-r," Z");return i},aZ=function(e,t){if(!e||!t)return!1;var r=e.x,n=e.y,o=t.x,i=t.y,a=t.width,u=t.height;if(Math.abs(a)>0&&Math.abs(u)>0){var l=Math.min(o,o+a),s=Math.max(o,o+a),c=Math.min(i,i+u),f=Math.max(i,i+u);return r>=l&&r<=s&&n>=c&&n<=f}return!1},a0={x:0,y:0,width:0,height:0,// The radius of border
// The radius of four corners when radius is a number
// The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},a1=function(e){var t,r=aX(aX({},a0),e),n=(0,P.useRef)(),o=function(e){if(Array.isArray(e))return e}(t=(0,P.useState)(-1))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(t,2)||function(e,t){if(e){if("string"==typeof e)return a$(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a$(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=o[0],a=o[1];(0,P.useEffect)(function(){if(n.current&&n.current.getTotalLength)try{var e=n.current.getTotalLength();e&&a(e)}catch(e){// calculate total length error
}},[]);var u=r.x,l=r.y,s=r.width,c=r.height,f=r.radius,p=r.className,d=r.animationEasing,h=r.animationDuration,y=r.animationBegin,v=r.isAnimationActive,m=r.isUpdateAnimationActive;if(u!==+u||l!==+l||s!==+s||c!==+c||0===s||0===c)return null;var b=/*@__PURE__*/g(oF)("recharts-rectangle",p);return m?/*@__PURE__*/g(P).createElement(iM,{canBegin:i>0,from:{width:s,height:c,x:u,y:l},to:{width:s,height:c,x:u,y:l},duration:h,animationEasing:d,isActive:m},function(e){var t=e.width,o=e.height,a=e.x,u=e.y;return /*@__PURE__*/g(P).createElement(iM,{canBegin:i>0,from:"0px ".concat(-1===i?1:i,"px"),to:"".concat(i,"px 0px"),attributeName:"strokeDasharray",begin:y,duration:h,isActive:v,easing:d},/*@__PURE__*/g(P).createElement("path",aU({},aK(r,!0),{className:b,d:aJ(a,u,t,o,f),ref:n})))}):/*@__PURE__*/g(P).createElement("path",aU({},aK(r,!0),{className:b,d:aJ(u,l,s,c,f)}))},P=_("acw62"),a2=["children","className"];function a3(){return(a3=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var a4=/*@__PURE__*/g(P).forwardRef(function(e,t){var r=e.children,n=e.className,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a2),i=/*@__PURE__*/g(oF)("recharts-layer",n);return /*@__PURE__*/g(P).createElement("g",a3({className:i},aK(o,!0),{ref:t}),r)}),P=_("acw62"),a5=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function a6(){return(a6=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a8(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function a7(e){var t=e.offset,r=e.layout,n=e.width,o=e.dataKey,i=e.data,a=e.dataPointFormatter,u=e.xAxis,l=e.yAxis,s=aK(function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a5)),c=i.map(function(e,i){var c,f,p=a(e,o),d=p.x,h=p.y,y=p.value,v=p.errorVal;if(!v)return null;var m=[];if(Array.isArray(v)){var b=function(e){if(Array.isArray(e))return e}(v)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(v,2)||function(e,t){if(e){if("string"==typeof e)return a8(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a8(e,t)}}(v,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();c=b[0],f=b[1]}else c=f=v;if("vertical"===r){// error bar for horizontal charts, the y is fixed, x is a range value
var x=u.scale,_=h+t,S=_+n,w=_-n,O=x(y-c),E=x(y+f);// the right line of |--|
m.push({x1:E,y1:S,x2:E,y2:w}),// the middle line of |--|
m.push({x1:O,y1:_,x2:E,y2:_}),// the left line of |--|
m.push({x1:O,y1:S,x2:O,y2:w})}else if("horizontal"===r){// error bar for horizontal charts, the x is fixed, y is a range value
var j=l.scale,k=d+t,M=k-n,A=k+n,T=j(y-c),C=j(y+f);// the top line
m.push({x1:M,y1:C,x2:A,y2:C}),// the middle line
m.push({x1:k,y1:T,x2:k,y2:C}),// the bottom line
m.push({x1:M,y1:T,x2:A,y2:T})}return /*@__PURE__*/g(P).createElement(a4,a6({className:"recharts-errorBar",key:"bar-".concat(i)},s),m.map(function(e,t){return /*@__PURE__*/g(P).createElement("line",a6({},e,{key:"line-".concat(t)}))}))});return /*@__PURE__*/g(P).createElement(a4,{className:"recharts-errorBars"},c)}a7.defaultProps={stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"},a7.displayName="ErrorBar";/**
 * @fileOverview Cross
 */var a9=function(e){return null};a9.displayName="Cell";var ue={};ue=/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0};var P=(_("acw62"),_("acw62"),_("acw62")),ut={};Object.defineProperty(ut,"__esModule",{value:!0});var ur={};ur=function(e){for(var t,r,n,o,i,a,u,l,s=[],c=e,f=0,p=c.charCodeAt(f),d=c.length,h=[{nodes:s}],y=0,v="",m="",g="";f<d;)// Whitespaces
if(p<=32){t=f;do t+=1,p=c.charCodeAt(t);while(p<=32)o=c.slice(f,t),n=s[s.length-1],41===p&&y?g=o:n&&"div"===n.type?n.after=o:44===p||58===p||47===p&&42!==c.charCodeAt(t+1)?m=o:s.push({type:"space",sourceIndex:f,value:o}),f=t;// Quotes
}else if(39===p||34===p){t=f,o={type:"string",sourceIndex:f,quote:r=39===p?"'":'"'};do if(i=!1,~(t=c.indexOf(r,t+1)))for(a=t;92===c.charCodeAt(a-1);)a-=1,i=!i;else c+=r,t=c.length-1,o.unclosed=!0;while(i)o.value=c.slice(f+1,t),s.push(o),f=t+1,p=c.charCodeAt(f);// Comments
}else if(47===p&&42===c.charCodeAt(f+1))o={type:"comment",sourceIndex:f},-1===(t=c.indexOf("*/",f))&&(o.unclosed=!0,t=c.length),o.value=c.slice(f+2,t),s.push(o),f=t+2,p=c.charCodeAt(f);else if(47===p||44===p||58===p)o=c[f],s.push({type:"div",sourceIndex:f-m.length,value:o,before:m,after:""}),m="",f+=1,p=c.charCodeAt(f);else if(40===p){// Whitespaces after open parentheses
t=f;do t+=1,p=c.charCodeAt(t);while(p<=32)if(o={type:"function",sourceIndex:f-v.length,value:v,before:c.slice(f+1,t)},f=t,"url"===v&&39!==p&&34!==p){t-=1;do if(i=!1,~(t=c.indexOf(")",t+1)))for(a=t;92===c.charCodeAt(a-1);)a-=1,i=!i;else c+=")",t=c.length-1,o.unclosed=!0;while(i)// Whitespaces before closed
u=t;do u-=1,p=c.charCodeAt(u);while(p<=32)f!==u+1?o.nodes=[{type:"word",sourceIndex:f,value:c.slice(f,u+1)}]:o.nodes=[],o.unclosed&&u+1!==t?(o.after="",o.nodes.push({type:"space",sourceIndex:u+1,value:c.slice(u+1,t)})):o.after=c.slice(u+1,t),f=t+1,p=c.charCodeAt(f),s.push(o)}else y+=1,o.after="",s.push(o),h.push(o),s=o.nodes=[],l=o;v="";// Close parentheses
}else if(41===p&&y)f+=1,p=c.charCodeAt(f),l.after=g,g="",y-=1,h.pop(),s=(l=h[y]).nodes;else{t=f;do 92===p&&(t+=1),t+=1,p=c.charCodeAt(t);while(t<d&&!(p<=32||39===p||34===p||44===p||58===p||47===p||40===p||41===p&&y))o=c.slice(f,t),40===p?v=o:s.push({type:"word",sourceIndex:f,value:o}),f=t}for(f=h.length-1;f;f-=1)h[f].unclosed=!0;return h[0].nodes};var un={};un=function e(t,r,n){var o,i,a,u;for(o=0,i=t.length;o<i;o+=1)a=t[o],n||(u=r(a,o,t)),!1!==u&&"function"===a.type&&Array.isArray(a.nodes)&&e(a.nodes,r,n),n&&r(a,o,t)};var uo={};function ui(e,t){var r,n,o=e.type,i=e.value;if(t&&void 0!==(n=t(e)))return n;if("word"===o||"space"===o);else if("string"===o)return(r=e.quote||"")+i+(e.unclosed?"":r);else if("comment"===o)return"/*"+i+(e.unclosed?"":"*/");else if("div"===o)return(e.before||"")+i+(e.after||"");else if(Array.isArray(e.nodes))return(r=ua(e.nodes),"function"!==o)?r:i+"("+(e.before||"")+r+(e.after||"")+(e.unclosed?"":")");return i}function ua(e,t){var r,n;if(Array.isArray(e)){for(r="",n=e.length-1;~n;n-=1)r=ui(e[n],t)+r;return r}return ui(e,t)}function uu(e){return this instanceof uu?(this.nodes=ur(e),this):new uu(e)}uo=ua,uu.prototype.toString=function(){return Array.isArray(this.nodes)?uo(this.nodes):""},uu.prototype.walk=function(e,t){return un(this.nodes,e,t),this},uu.unit=_("c2Or4"),uu.walk=un,uu.stringify=uo;var ul=uw(uu),us=function(){// See also:
// http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript/#35881508
// but we keep the prototype.constructor and prototype.name assignment lines too for compatibility
// with userland code which might access the derived class in a 'classic' way.
function e(e,t){if(Object.defineProperty(this,"name",{enumerable:!1,writable:!1,value:"JisonParserError"}),null==e&&(e="???"),Object.defineProperty(this,"message",{enumerable:!1,writable:!0,value:e}),this.hash=t,t&&t.exception instanceof Error){var r,n=t.exception;this.message=n.message||e,r=n.stack}r||(Error.hasOwnProperty("captureStackTrace")?Error.captureStackTrace(this,this.constructor):r=Error(e).stack),r&&Object.defineProperty(this,"stack",{enumerable:!1,writable:!1,value:r})}// helper: runlength encoding with increment step: code, length: step (default step = 0)
// `this` references an array
function t(e,t,r){r=r||0;for(var n=0;n<t;n++)this.push(e),e+=r}// helper: duplicate sequence from *relative* offset and length.
// `this` references an array
function r(e,t){for(t+=e=this.length-e;e<t;e++)this.push(this[e])}// helper: unpack an array using helpers and data, all passed in an array argument 'a'.
function n(e){for(var t=[],r=0,n=e.length;r<n;r++){var o=e[r];// Is this entry a helper function?
"function"==typeof o?(r++,o.apply(t,e[r])):t.push(o)}return t}"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf(e.prototype,Error.prototype):e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e.prototype.name="JisonParserError";var o={// Code Generator Information Report
// ---------------------------------
//
// Options:
//
//   default action mode: ............. ["classic","merge"]
//   test-compile action mode: ........ "parser:*,lexer:*"
//   try..catch: ...................... true
//   default resolve on conflict: ..... true
//   on-demand look-ahead: ............ false
//   error recovery token skip maximum: 3
//   yyerror in parse actions is: ..... NOT recoverable,
//   yyerror in lexer actions and other non-fatal lexer are:
//   .................................. NOT recoverable,
//   debug grammar/output: ............ false
//   has partial LR conflict upgrade:   true
//   rudimentary token-stack support:   false
//   parser table compression mode: ... 2
//   export debug tables: ............. false
//   export *all* tables: ............. false
//   module type: ..................... commonjs
//   parser engine type: .............. lalr
//   output main() in the module: ..... true
//   has user-specified main(): ....... false
//   has user-specified require()/import modules for main():
//   .................................. false
//   number of expected conflicts: .... 0
//
//
// Parser Analysis flags:
//
//   no significant actions (parser is a language matcher only):
//   .................................. false
//   uses yyleng: ..................... false
//   uses yylineno: ................... false
//   uses yytext: ..................... false
//   uses yylloc: ..................... false
//   uses ParseError API: ............. false
//   uses YYERROR: .................... false
//   uses YYRECOVERING: ............... false
//   uses YYERROK: .................... false
//   uses YYCLEARIN: .................. false
//   tracks rule values: .............. true
//   assigns rule values: ............. true
//   uses location tracking: .......... false
//   assigns location: ................ false
//   uses yystack: .................... false
//   uses yysstack: ................... false
//   uses yysp: ....................... true
//   uses yyrulelength: ............... false
//   uses yyMergeLocationInfo API: .... false
//   has error recovery: .............. false
//   has error reporting: ............. false
//
// --------- END OF REPORT -----------
trace:function(){},JisonParserError:e,yy:{},options:{type:"lalr",hasPartialLrUpgradeOnConflict:!0,errorRecoveryTokenDiscardCount:3},symbols_:{$accept:0,$end:1,ADD:3,ANGLE:16,CHS:22,COMMA:14,CSS_CPROP:13,CSS_VAR:12,DIV:6,EMS:20,EOF:1,EXS:21,FREQ:18,LENGTH:15,LPAREN:7,MUL:5,NESTED_CALC:9,NUMBER:11,PERCENTAGE:28,PREFIX:10,REMS:23,RES:19,RPAREN:8,SUB:4,TIME:17,VHS:24,VMAXS:27,VMINS:26,VWS:25,css_value:33,css_variable:32,error:2,expression:29,math_expression:30,value:31},terminals_:{1:"EOF",2:"error",3:"ADD",4:"SUB",5:"MUL",6:"DIV",7:"LPAREN",8:"RPAREN",9:"NESTED_CALC",10:"PREFIX",11:"NUMBER",12:"CSS_VAR",13:"CSS_CPROP",14:"COMMA",15:"LENGTH",16:"ANGLE",17:"TIME",18:"FREQ",19:"RES",20:"EMS",21:"EXS",22:"CHS",23:"REMS",24:"VHS",25:"VWS",26:"VMINS",27:"VMAXS",28:"PERCENTAGE"},TERROR:2,EOF:1,// internals: defined here so the object *structure* doesn't get modified by parse() et al,
// thus helping JIT compilers like Chrome V8.
originalQuoteName:null,originalParseError:null,cleanupAfterParse:null,constructParseErrorInfo:null,yyMergeLocationInfo:null,__reentrant_call_depth:0,__error_infos:[],__error_recovery_infos:[],// APIs which will be set up depending on user action code analysis:
//yyRecovering: 0,
//yyErrOk: 0,
//yyClearIn: 0,
// Helper APIs
// -----------
// Helper function which can be overridden by user code later on: put suitable quotes around
// literal IDs in a description string.
quoteName:function(e){return'"'+e+'"'},// Return the name of the given symbol (terminal or non-terminal) as a string, when available.
//
// Return NULL when the symbol is unknown to the parser.
getSymbolName:function(e){if(this.terminals_[e])return this.terminals_[e];// Otherwise... this might refer to a RULE token i.e. a non-terminal: see if we can dig that one up.
//
// An example of this may be where a rule's action code contains a call like this:
//
//      parser.getSymbolName(#$)
//
// to obtain a human-readable name of the current grammar rule.
var t=this.symbols_;for(var r in t)if(t[r]===e)return r;return null},// Return a more-or-less human-readable description of the given symbol, when available,
// or the symbol itself, serving as its own 'description' for lack of something better to serve up.
//
// Return NULL when the symbol is unknown to the parser.
describeSymbol:function(e){if(e!==this.EOF&&this.terminal_descriptions_&&this.terminal_descriptions_[e])return this.terminal_descriptions_[e];if(e===this.EOF)return"end of input";var t=this.getSymbolName(e);return t?this.quoteName(t):null},// Produce a (more or less) human-readable list of expected tokens at the point of failure.
//
// The produced list may contain token or token set descriptions instead of the tokens
// themselves to help turning this output into something that easier to read by humans
// unless `do_not_describe` parameter is set, in which case a list of the raw, *numeric*,
// expected terminals and nonterminals is produced.
//
// The returned list (array) will not contain any duplicate entries.
collect_expected_token_set:function(e,t){var r=this.TERROR,n=[],o={};// Has this (error?) state been outfitted with a custom expectations description text for human consumption?
// If so, use that one instead of the less palatable token set.
if(!t&&this.state_descriptions_&&this.state_descriptions_[e])return[this.state_descriptions_[e]];for(var i in this.table[e])if((i=+i)!==r){var a=t?i:this.describeSymbol(i);a&&!o[a]&&(n.push(a),o[a]=!0)}return n},productions_:// helper: reconstruct the productions[] table
function(e){for(var t=[],r=e.pop,n=e.rule,o=0,i=r.length;o<i;o++)t.push([r[o],n[o]]);return t}({pop:n([29,t,[30,10],31,31,32,32,t,[33,15]]),rule:n([2,t,[3,5],4,7,t,[1,4],2,4,6,t,[1,14],2])}),performAction:function(e/* action[1] */,t,r){/* this == yyval */// the JS engine itself can go and remove these statements when `yy` turns out to be unused in any action code!
var n=this.yy;switch(n.parser,n.lexer,e){case 0:case 6:/*! Production::    $accept : expression $end */// default action (generated by JISON mode classic/merge :: 1,VT,VA,-,-,-,-,-,-):
this.$=r[t-1];break;case 1:// END of default action (generated by JISON mode classic/merge :: 2,VT,VA,-,-,-,-,-,-)
return(/*! Production::    expression : math_expression EOF */// default action (generated by JISON mode classic/merge :: 2,VT,VA,-,-,-,-,-,-):
this.$=r[t-1],r[t-1]);case 2:/*! Production::    math_expression : math_expression ADD math_expression */case 3:/*! Production::    math_expression : math_expression SUB math_expression */case 4:/*! Production::    math_expression : math_expression MUL math_expression */case 5:/*! Production::    math_expression : math_expression DIV math_expression */this.$={type:"MathExpression",operator:r[t-1],left:r[t-2],right:r[t]};break;case 7:/*! Production::    math_expression : NESTED_CALC LPAREN math_expression RPAREN */this.$={type:"Calc",value:r[t-1]};break;case 8:/*! Production::    math_expression : SUB PREFIX SUB NESTED_CALC LPAREN math_expression RPAREN */this.$={type:"Calc",value:r[t-1],prefix:r[t-5]};break;case 9:/*! Production::    math_expression : css_variable */case 10:/*! Production::    math_expression : css_value */case 11:/*! Production::    math_expression : value */this.$=r[t];break;case 12:/*! Production::    value : NUMBER */this.$={type:"Value",value:parseFloat(r[t])};break;case 13:/*! Production::    value : SUB NUMBER */this.$={type:"Value",value:-1*parseFloat(r[t])};break;case 14:/*! Production::    css_variable : CSS_VAR LPAREN CSS_CPROP RPAREN */this.$={type:"CssVariable",value:r[t-1]};break;case 15:/*! Production::    css_variable : CSS_VAR LPAREN CSS_CPROP COMMA math_expression RPAREN */this.$={type:"CssVariable",value:r[t-3],fallback:r[t-1]};break;case 16:/*! Production::    css_value : LENGTH */this.$={type:"LengthValue",value:parseFloat(r[t]),unit:/[a-z]+/.exec(r[t])[0]};break;case 17:/*! Production::    css_value : ANGLE */this.$={type:"AngleValue",value:parseFloat(r[t]),unit:/[a-z]+/.exec(r[t])[0]};break;case 18:/*! Production::    css_value : TIME */this.$={type:"TimeValue",value:parseFloat(r[t]),unit:/[a-z]+/.exec(r[t])[0]};break;case 19:/*! Production::    css_value : FREQ */this.$={type:"FrequencyValue",value:parseFloat(r[t]),unit:/[a-z]+/.exec(r[t])[0]};break;case 20:/*! Production::    css_value : RES */this.$={type:"ResolutionValue",value:parseFloat(r[t]),unit:/[a-z]+/.exec(r[t])[0]};break;case 21:/*! Production::    css_value : EMS */this.$={type:"EmValue",value:parseFloat(r[t]),unit:"em"};break;case 22:/*! Production::    css_value : EXS */this.$={type:"ExValue",value:parseFloat(r[t]),unit:"ex"};break;case 23:/*! Production::    css_value : CHS */this.$={type:"ChValue",value:parseFloat(r[t]),unit:"ch"};break;case 24:/*! Production::    css_value : REMS */this.$={type:"RemValue",value:parseFloat(r[t]),unit:"rem"};break;case 25:/*! Production::    css_value : VHS */this.$={type:"VhValue",value:parseFloat(r[t]),unit:"vh"};break;case 26:/*! Production::    css_value : VWS */this.$={type:"VwValue",value:parseFloat(r[t]),unit:"vw"};break;case 27:/*! Production::    css_value : VMINS */this.$={type:"VminValue",value:parseFloat(r[t]),unit:"vmin"};break;case 28:/*! Production::    css_value : VMAXS */this.$={type:"VmaxValue",value:parseFloat(r[t]),unit:"vmax"};break;case 29:/*! Production::    css_value : PERCENTAGE */this.$={type:"PercentageValue",value:parseFloat(r[t]),unit:"%"};break;case 30:/*! Production::    css_value : SUB css_value */var o=r[t];o.value*=-1,this.$=o}},table:// helper: reconstruct the 'goto' table
function(e){for(var t=[],r=e.len,n=e.symbol,o=e.type,i=e.state,a=e.mode,u=e.goto,l=0,s=r.length;l<s;l++){for(var c=r[l],f={},p=0;p<c;p++){var d=n.shift();switch(o.shift()){case 2:f[d]=[a.shift(),u.shift()];break;case 0:f[d]=i.shift();break;default:// type === 1: accept
f[d]=[3]}}t.push(f)}return t}({len:n([24,1,5,23,1,18,t,[0,3],1,t,[0,16],t,[23,4],r,[28,3],0,0,16,1,6,6,t,[0,3],5,1,2,r,[37,3],r,[20,3],5,0,0]),symbol:n([4,7,9,11,12,t,[15,19,1],1,1,t,[3,4,1],r,[30,19],r,[29,4],7,4,10,11,r,[22,14],r,[19,3],r,[43,22],r,[23,69],r,[139,4],8,r,[51,24],4,r,[138,15],13,r,[186,5],8,r,[6,6],r,[5,5],9,8,14,r,[159,47],r,[60,10]]),type:n([t,[2,19],t,[0,5],1,t,[2,24],t,[0,4],r,[22,19],r,[43,42],r,[23,70],r,[28,25],r,[45,25],r,[113,54]]),state:n([1,2,8,6,7,30,r,[4,3],33,37,r,[5,3],38,r,[4,3],39,r,[4,3],40,r,[4,3],42,r,[21,4],50,r,[5,3],51,r,[4,3]]),mode:n([t,[1,179],t,[2,3],r,[5,5],r,[6,4],t,[1,57]]),goto:n([5,3,4,24,t,[9,15,1],t,[25,5,1],r,[24,19],31,35,32,34,r,[18,14],36,r,[38,19],r,[19,57],r,[118,4],41,r,[24,19],43,35,r,[16,14],44,t,[2,3],28,29,2,t,[3,3],28,29,3,r,[53,4],t,[45,5,1],r,[100,42],52,r,[5,4],53])}),defaultActions:// helper: reconstruct the defaultActions[] table
function(e){for(var t={},r=e.idx,n=e.goto,o=0,i=r.length;o<i;o++)t[r[o]]=n[o];return t}({idx:n([6,7,8,t,[10,16,1],33,34,39,40,41,45,47,52,53]),goto:n([9,10,11,t,[16,14,1],12,1,30,13,t,[4,4,1],14,15,8])}),parseError:function(e,t,r){if(t.recoverable)"function"==typeof this.trace&&this.trace(e),t.destroy();else throw"function"==typeof this.trace&&this.trace(e),r||(r=this.JisonParserError),new r(e,t)},parse:function(e){var t=this,r=Array(128),n=Array(128),o=Array(128),i=this.table,a=0,u=0;this.TERROR;var l=this.EOF;this.options.errorRecoveryTokenDiscardCount;var s=[0,54/* === table.length :: ensures that anyone using this new state will fail dramatically! */];h=this.__lexer__?this.__lexer__:this.__lexer__=Object.create(this.lexer);var c={parseError:void 0,quoteName:void 0,lexer:void 0,parser:void 0,pre_parse:void 0,post_parse:void 0,pre_lex:void 0,post_lex:void 0// WARNING: must be written this way for the code expanders to work correctly in both ES5 and ES6 modes!
};"function"!=typeof assert||assert,this.yyGetSharedState=function(){return c},// copy state
function(e,t){for(var r in t)void 0===e[r]&&Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}(c,this.yy),c.lexer=h,c.parser=this,"function"==typeof c.parseError?this.parseError=function(e,t,r){return r||(r=this.JisonParserError),c.parseError.call(this,e,t,r)}:this.parseError=this.originalParseError,"function"==typeof c.quoteName?this.quoteName=function(e){return c.quoteName.call(this,e)}:this.quoteName=this.originalQuoteName,// set up the cleanup function; make it an API so that external code can re-use this one in case of
// calamities or when the `%options no-try-catch` option has been specified for the grammar, in which
// case this parse() API method doesn't come with a `finally { ... }` block any more!
//
// NOTE: as this API uses parse() as a closure, it MUST be set again on every parse() invocation,
//       or else your `sharedState`, etc. references will be *wrong*!
this.cleanupAfterParse=function(e,t,i){if(t&&((c.post_parse||this.post_parse)&&// as this one delivers all parser internals ready for access by userland code.
(l=this.constructParseErrorInfo(null,null,null,!1)),c.post_parse&&void 0!==(u=c.post_parse.call(this,c,e,l))&&(e=u),this.post_parse&&void 0!==(u=this.post_parse.call(this,c,e,l))&&(e=u),l&&l.destroy&&l.destroy()),this.__reentrant_call_depth>1)return e;// do not (yet) kill the sharedState when this is a reentrant run.
// nuke the error hash info instances created during this run.
// Userland code must COPY any data/references
// in the error hash instance(s) it is more permanently interested in.
if(h.cleanupAfterLex&&h.cleanupAfterLex(i),c&&(c.lexer=void 0,c.parser=void 0,h.yy===c&&(h.yy=void 0)),c=void 0,this.parseError=this.originalParseError,this.quoteName=this.originalQuoteName,// nuke the vstack[] array at least as that one will still reference obsoleted user values.
// To be safe, we nuke the other internal stack columns as well...
r.length=0,n.length=0,o.length=0,a=0,!i){for(var u,l,s=this.__error_infos.length-1;s>=0;s--){var f=this.__error_infos[s];f&&"function"==typeof f.destroy&&f.destroy()}this.__error_infos.length=0}return e},// NOTE: as this API uses parse() as a closure, it MUST be set again on every parse() invocation,
//       or else your `lexer`, `sharedState`, etc. references will be *wrong*!
this.constructParseErrorInfo=function(e,t,i,l){var s={errStr:e,exception:t,text:h.match,value:h.yytext,token:this.describeSymbol(u)||u,token_id:u,line:h.yylineno,expected:i,recoverable:l,state:y,action:v,new_state:S,symbol_stack:r,state_stack:n,value_stack:o,stack_pointer:a,yy:c,lexer:h,parser:this,// and make sure the error info doesn't stay due to potential
// ref cycle via userland code manipulations.
// These would otherwise all be memory leak opportunities!
//
// Note that only array and object references are nuked as those
// constitute the set of elements which can produce a cyclic ref.
// The rest of the members is kept intact as they are harmless.
destroy:function(){// remove cyclic references added to error info:
// info.yy = null;
// info.lexer = null;
// info.value = null;
// info.value_stack = null;
// ...
var e=!!this.recoverable;for(var t in this)this.hasOwnProperty(t)&&"object"==typeof t&&(this[t]=void 0);this.recoverable=e}};return(// track this instance so we can `destroy()` it once we deem it superfluous and ready for garbage collection!
this.__error_infos.push(s),s)};var f=function(){var e=h.lex();return"number"!=typeof e&&(e=t.symbols_[e]||e),e||l},p={$:!0,_$:void 0,yy:c},d=!1;try{for(this.__reentrant_call_depth++,h.setInput(e,c),"function"==typeof h.canIUse&&h.canIUse().fastLex&&(f=function(){var e=h.fastLex();return"number"!=typeof e&&(e=t.symbols_[e]||e),e||l}),o[a]=null,n[a]=0,r[a]=0,++a,this.pre_parse&&this.pre_parse.call(this,c),c.pre_parse&&c.pre_parse.call(this,c),S=n[a-1];;){// use default actions if available
if(// retrieve state number from top of stack
y=S,this.defaultActions[y])v=2,S=this.defaultActions[y];else // handle parse error
if(u||(u=f()),S=// read action for current state and first input
(g=i[y]&&i[y][u]||s)[1],!(v=g[0])){var h,y,v,m,g,b,x,_,S,w,P=this.describeSymbol(u)||u,O=this.collect_expected_token_set(y);w="number"==typeof h.yylineno?"Parse error on line "+(h.yylineno+1)+": ":"Parse error: ","function"==typeof h.showPosition&&(w+="\n"+h.showPosition(69,10)+"\n"),O.length?w+="Expecting "+O.join(", ")+", got unexpected "+P:w+="Unexpected "+P,// we cannot recover from the error!
b=this.constructParseErrorInfo(w,null,O,!1),m=this.parseError(b.errStr,b,this.JisonParserError),void 0!==m&&(d=m);break}switch(v){// catch misc. parse failures:
default:// this shouldn't happen, unless resolve defaults are off
if(v instanceof Array){b=this.constructParseErrorInfo("Parse Error: multiple actions possible at state: "+y+", token: "+u,null,null,!1),m=this.parseError(b.errStr,b,this.JisonParserError),void 0!==m&&(d=m);break}// Another case of better safe than sorry: in case state transitions come out of another error recovery process
// or a buggy LUT (LookUp Table):
b=this.constructParseErrorInfo("Parsing halted. No viable error recovery approach available due to internal system failure.",null,null,!1),m=this.parseError(b.errStr,b,this.JisonParserError),void 0!==m&&(d=m);break;// shift:
case 1:r[a]=u,o[a]=h.yytext,n[a]=S,++a,u=0;continue;// reduce:
case 2:if(x=(_=this.productions_[S-1])[1],m=this.performAction.call(p,S,a-1,o),void 0!==m){d=m;break}// pop off stack
a-=x;// don't overwrite the `symbol` variable: use a local var to speed things up:
var E=_[0];// push nonterminal (reduce)
r[a]=E,o[a]=p.$,// goto new state = table[STATE][NONTERMINAL]
S=i[n[a-1]][E],n[a]=S,++a;continue;// accept:
case 3:-2!==a&&(d=!0,// Return the `$accept` rule's `$$` result, if available.
//
// Also note that JISON always adds this top-most `$accept` rule (with implicit,
// default, action):
//
//     $accept: <startSymbol> $end
//                  %{ $$ = $1; @$ = @1; %}
//
// which, combined with the parse kernel's `$accept` state behaviour coded below,
// will produce the `$$` value output of the <startSymbol> rule as the parse result,
// IFF that result is *not* `undefined`. (See also the parser kernel code.)
//
// In code:
//
//                  %{
//                      @$ = @1;            // if location tracking support is included
//                      if (typeof $1 !== 'undefined')
//                          return $1;
//                      else
//                          return true;           // the default parse result if the rule actions don't produce anything
//                  %}
a--,void 0!==o[a]&&(d=o[a]))}break}}catch(e){// report exceptions through the parseError callback too, but keep the exception intact
// if it is a known parser or lexer error which has been thrown by parseError() already:
if(e instanceof this.JisonParserError||h&&"function"==typeof h.JisonLexerError&&e instanceof h.JisonLexerError)throw e;b=this.constructParseErrorInfo("Parsing aborted due to exception.",e,null,!1),d=!1,void 0!==(m=this.parseError(b.errStr,b,this.JisonParserError))&&(d=m)}finally{d=this.cleanupAfterParse(d,!0,!0),this.__reentrant_call_depth--}// /finally
return d}};o.originalParseError=o.parseError,o.originalQuoteName=o.quoteName;/* lexer generated by jison-lex 0.6.1-215 *//*
 * Returns a Lexer object of the following structure:
 *
 *  Lexer: {
 *    yy: {}     The so-called "shared state" or rather the *source* of it;
 *               the real "shared state" `yy` passed around to
 *               the rule actions, etc. is a direct reference!
 *
 *               This "shared context" object was passed to the lexer by way of 
 *               the `lexer.setInput(str, yy)` API before you may use it.
 *
 *               This "shared context" object is passed to the lexer action code in `performAction()`
 *               so userland code in the lexer actions may communicate with the outside world 
 *               and/or other lexer rules' actions in more or less complex ways.
 *
 *  }
 *
 *  Lexer.prototype: {
 *    EOF: 1,
 *    ERROR: 2,
 *
 *    yy:        The overall "shared context" object reference.
 *
 *    JisonLexerError: function(msg, hash),
 *
 *    performAction: function lexer__performAction(yy, yyrulenumber, YY_START),
 *
 *               The function parameters and `this` have the following value/meaning:
 *               - `this`    : reference to the `lexer` instance. 
 *                               `yy_` is an alias for `this` lexer instance reference used internally.
 *
 *               - `yy`      : a reference to the `yy` "shared state" object which was passed to the lexer
 *                             by way of the `lexer.setInput(str, yy)` API before.
 *
 *                             Note:
 *                             The extra arguments you specified in the `%parse-param` statement in your
 *                             **parser** grammar definition file are passed to the lexer via this object
 *                             reference as member variables.
 *
 *               - `yyrulenumber`   : index of the matched lexer rule (regex), used internally.
 *
 *               - `YY_START`: the current lexer "start condition" state.
 *
 *    parseError: function(str, hash, ExceptionClass),
 *
 *    constructLexErrorInfo: function(error_message, is_recoverable),
 *               Helper function.
 *               Produces a new errorInfo 'hash object' which can be passed into `parseError()`.
 *               See it's use in this lexer kernel in many places; example usage:
 *
 *                   var infoObj = lexer.constructParseErrorInfo('fail!', true);
 *                   var retVal = lexer.parseError(infoObj.errStr, infoObj, lexer.JisonLexerError);
 *
 *    options: { ... lexer %options ... },
 *
 *    lex: function(),
 *               Produce one token of lexed input, which was passed in earlier via the `lexer.setInput()` API.
 *               You MAY use the additional `args...` parameters as per `%parse-param` spec of the **lexer** grammar:
 *               these extra `args...` are added verbatim to the `yy` object reference as member variables.
 *
 *               WARNING:
 *               Lexer's additional `args...` parameters (via lexer's `%parse-param`) MAY conflict with
 *               any attributes already added to `yy` by the **parser** or the jison run-time; 
 *               when such a collision is detected an exception is thrown to prevent the generated run-time 
 *               from silently accepting this confusing and potentially hazardous situation! 
 *
 *    cleanupAfterLex: function(do_not_nuke_errorinfos),
 *               Helper function.
 *
 *               This helper API is invoked when the **parse process** has completed: it is the responsibility
 *               of the **parser** (or the calling userland code) to invoke this method once cleanup is desired. 
 *
 *               This helper may be invoked by user code to ensure the internal lexer gets properly garbage collected.
 *
 *    setInput: function(input, [yy]),
 *
 *
 *    input: function(),
 *
 *
 *    unput: function(str),
 *
 *
 *    more: function(),
 *
 *
 *    reject: function(),
 *
 *
 *    less: function(n),
 *
 *
 *    pastInput: function(n),
 *
 *
 *    upcomingInput: function(n),
 *
 *
 *    showPosition: function(),
 *
 *
 *    test_match: function(regex_match_array, rule_index),
 *
 *
 *    next: function(),
 *
 *
 *    begin: function(condition),
 *
 *
 *    pushState: function(condition),
 *
 *
 *    popState: function(),
 *
 *
 *    topState: function(),
 *
 *
 *    _currentRules: function(),
 *
 *
 *    stateStackSize: function(),
 *
 *
 *    performAction: function(yy, yy_, yyrulenumber, YY_START),
 *
 *
 *    rules: [...],
 *
 *
 *    conditions: {associative list: name ==> set},
 *  }
 *
 *
 *  token location info (`yylloc`): {
 *    first_line: n,
 *    last_line: n,
 *    first_column: n,
 *    last_column: n,
 *    range: [start_number, end_number]
 *               (where the numbers are indexes into the input string, zero-based)
 *  }
 *
 * ---
 *
 * The `parseError` function receives a 'hash' object with these members for lexer errors:
 *
 *  {
 *    text:        (matched text)
 *    token:       (the produced terminal token, if any)
 *    token_id:    (the produced terminal token numeric ID, if any)
 *    line:        (yylineno)
 *    loc:         (yylloc)
 *    recoverable: (boolean: TRUE when the parser MAY have an error recovery rule
 *                  available for this particular error)
 *    yy:          (object: the current parser internal "shared state" `yy`
 *                  as is also available in the rule actions; this can be used,
 *                  for instance, for advanced error analysis and reporting)
 *    lexer:       (reference to the current lexer instance used by the parser)
 *  }
 *
 * while `this` will reference the current lexer instance.
 *
 * When `parseError` is invoked by the lexer, the default implementation will
 * attempt to invoke `yy.parser.parseError()`; when this callback is not provided
 * it will try to invoke `yy.parseError()` instead. When that callback is also not
 * provided, a `JisonLexerError` exception will be thrown containing the error
 * message and `hash`, as constructed by the `constructLexErrorInfo()` API.
 *
 * Note that the lexer's `JisonLexerError` error class is passed via the
 * `ExceptionClass` argument, which is invoked to construct the exception
 * instance to be thrown, so technically `parseError` will throw the object
 * produced by the `new ExceptionClass(str, hash)` JavaScript expression.
 *
 * ---
 *
 * You can specify lexer options by setting / modifying the `.options` object of your Lexer instance.
 * These options are available:
 *
 * (Options are permanent.)
 *  
 *  yy: {
 *      parseError: function(str, hash, ExceptionClass)
 *                 optional: overrides the default `parseError` function.
 *  }
 *
 *  lexer.options: {
 *      pre_lex:  function()
 *                 optional: is invoked before the lexer is invoked to produce another token.
 *                 `this` refers to the Lexer object.
 *      post_lex: function(token) { return token; }
 *                 optional: is invoked when the lexer has produced a token `token`;
 *                 this function can override the returned token value by returning another.
 *                 When it does not return any (truthy) value, the lexer will return
 *                 the original `token`.
 *                 `this` refers to the Lexer object.
 *
 * WARNING: the next set of options are not meant to be changed. They echo the abilities of
 * the lexer as per when it was compiled!
 *
 *      ranges: boolean
 *                 optional: `true` ==> token location info will include a .range[] member.
 *      flex: boolean
 *                 optional: `true` ==> flex-like lexing behaviour where the rules are tested
 *                 exhaustively to find the longest match.
 *      backtrack_lexer: boolean
 *                 optional: `true` ==> lexer regexes are tested in order and for invoked;
 *                 the lexer terminates the scan when a token is returned by the action code.
 *      xregexp: boolean
 *                 optional: `true` ==> lexer rule regexes are "extended regex format" requiring the
 *                 `XRegExp` library. When this %option has not been specified at compile time, all lexer
 *                 rule regexes have been written as standard JavaScript RegExp expressions.
 *  }
 */var i=function(){/**
   * See also:
   * http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript/#35881508
   * but we keep the prototype.constructor and prototype.name assignment lines too for compatibility
   * with userland code which might access the derived class in a 'classic' way.
   *
   * @public
   * @constructor
   * @nocollapse
   */function e(e,t){if(Object.defineProperty(this,"name",{enumerable:!1,writable:!1,value:"JisonLexerError"}),null==e&&(e="???"),Object.defineProperty(this,"message",{enumerable:!1,writable:!0,value:e}),this.hash=t,t&&t.exception instanceof Error){var r,n=t.exception;this.message=n.message||e,r=n.stack}r||(Error.hasOwnProperty("captureStackTrace")?Error.captureStackTrace(this,this.constructor):r=Error(e).stack),r&&Object.defineProperty(this,"stack",{enumerable:!1,writable:!1,value:r})}return"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf(e.prototype,Error.prototype):e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e.prototype.name="JisonLexerError",{// Code Generator Information Report
// ---------------------------------
//
// Options:
//
//   backtracking: .................... false
//   location.ranges: ................. false
//   location line+column tracking: ... true
//
//
// Forwarded Parser Analysis flags:
//
//   uses yyleng: ..................... false
//   uses yylineno: ................... false
//   uses yytext: ..................... false
//   uses yylloc: ..................... false
//   uses lexer values: ............... true / true
//   location tracking: ............... false
//   location assignment: ............. false
//
//
// Lexer Analysis flags:
//
//   uses yyleng: ..................... ???
//   uses yylineno: ................... ???
//   uses yytext: ..................... ???
//   uses yylloc: ..................... ???
//   uses ParseError API: ............. ???
//   uses yyerror: .................... ???
//   uses location tracking & editing:  ???
//   uses more() API: ................. ???
//   uses unput() API: ................ ???
//   uses reject() API: ............... ???
//   uses less() API: ................. ???
//   uses display APIs pastInput(), upcomingInput(), showPosition():
//        ............................. ???
//   uses describeYYLLOC() API: ....... ???
//
// --------- END OF REPORT -----------
EOF:1,ERROR:2,// JisonLexerError: JisonLexerError,        /// <-- injected by the code generator
// options: {},                             /// <-- injected by the code generator
// yy: ...,                                 /// <-- injected by setInput()
__currentRuleSet__:null,__error_infos:[],__decompressed:!1,done:!1,_backtrack:!1,_input:"",_more:!1,_signaled_error_token:!1,conditionStack:[],match:"",matched:"",matches:!1,yytext:"",offset:0,yyleng:0,yylineno:0,yylloc:null,/**
     * INTERNAL USE: construct a suitable error info hash object instance for `parseError`.
     * 
     * @public
     * @this {RegExpLexer}
     */constructLexErrorInfo:function(e,t,r){if(e=""+e,void 0==r&&(r=!(e.indexOf("\n")>0&&e.indexOf("^")>0)),this.yylloc&&r){if("function"==typeof this.prettyPrintRange)this.prettyPrintRange(this.yylloc),/\n\s*$/.test(e)||(e+="\n"),e+="\n  Erroneous area:\n"+this.prettyPrintRange(this.yylloc);else if("function"==typeof this.showPosition){var n=this.showPosition();n&&(e.length&&"\n"!==e[e.length-1]&&"\n"!==n[0]?e+="\n"+n:e+=n)}}/** @constructor */var o={errStr:e,recoverable:!!t,text:this.match,token:null,line:this.yylineno,loc:this.yylloc,yy:this.yy,lexer:this,/**
         * and make sure the error info doesn't stay due to potential
         * ref cycle via userland code manipulations.
         * These would otherwise all be memory leak opportunities!
         * 
         * Note that only array and object references are nuked as those
         * constitute the set of elements which can produce a cyclic ref.
         * The rest of the members is kept intact as they are harmless.
         * 
         * @public
         * @this {LexErrorInfo}
         */destroy:function(){// remove cyclic references added to error info:
// info.yy = null;
// info.lexer = null;
// ...
var e=!!this.recoverable;for(var t in this)this.hasOwnProperty(t)&&"object"==typeof t&&(this[t]=void 0);this.recoverable=e}};return(// track this instance so we can `destroy()` it once we deem it superfluous and ready for garbage collection!
this.__error_infos.push(o),o)},/**
     * handler which is invoked when a lexer error occurs.
     * 
     * @public
     * @this {RegExpLexer}
     */parseError:function(e,t,r){if(r||(r=this.JisonLexerError),this.yy){if(this.yy.parser&&"function"==typeof this.yy.parser.parseError)return this.yy.parser.parseError.call(this,e,t,r)||this.ERROR;if("function"==typeof this.yy.parseError)return this.yy.parseError.call(this,e,t,r)||this.ERROR}throw new r(e,t)},/**
     * method which implements `yyerror(str, ...args)` functionality for use inside lexer actions.
     * 
     * @public
     * @this {RegExpLexer}
     */yyerror:function(e/*, ...args */){var t="";this.yylloc&&(t=" on line "+(this.yylineno+1));var r=this.constructLexErrorInfo("Lexical error"+t+": "+e,this.options.lexerErrorsAreRecoverable),n=Array.prototype.slice.call(arguments,1);return n.length&&(r.extra_error_attributes=n),this.parseError(r.errStr,r,this.JisonLexerError)||this.ERROR},/**
     * final cleanup function for when we have completed lexing the input;
     * make it an API so that external code can use this one once userland
     * code has decided it's time to destroy any lingering lexer error
     * hash object instances and the like: this function helps to clean
     * up these constructs, which *may* carry cyclic references which would
     * otherwise prevent the instances from being properly and timely
     * garbage-collected, i.e. this function helps prevent memory leaks!
     * 
     * @public
     * @this {RegExpLexer}
     */cleanupAfterLex:function(e){// nuke the error hash info instances created during this run.
// Userland code must COPY any data/references
// in the error hash instance(s) it is more permanently interested in.
if(// prevent lingering circular references from causing memory leaks:
this.setInput("",{}),!e){for(var t=this.__error_infos.length-1;t>=0;t--){var r=this.__error_infos[t];r&&"function"==typeof r.destroy&&r.destroy()}this.__error_infos.length=0}return this},/**
     * clear the lexer token context; intended for internal use only
     * 
     * @public
     * @this {RegExpLexer}
     */clear:function(){this.yytext="",this.yyleng=0,this.match="",// - DO NOT reset `this.matched`
this.matches=!1,this._more=!1,this._backtrack=!1;var e=this.yylloc?this.yylloc.last_column:0;this.yylloc={first_line:this.yylineno+1,first_column:e,last_line:this.yylineno+1,last_column:e,range:[this.offset,this.offset]}},/**
     * resets the lexer, sets new input
     * 
     * @public
     * @this {RegExpLexer}
     */setInput:function(e,t){// also check if we've fully initialized the lexer instance,
// including expansion work to be done to go from a loaded
// lexer to a usable lexer:
if(this.yy=t||this.yy||{},!this.__decompressed){for(var r=this.rules,n=0,o=r.length;n<o;n++){var i=r[n];// compression: is the RE an xref to another RE slot in the rules[] table?
"number"==typeof i&&(r[n]=r[i])}// step 1: decompress the regex list:
var a=this.conditions;for(var u in a){for(var l=a[u],s=l.rules,o=s.length,c=Array(o+1),f=Array(o+1),n=0;n<o;n++){var p=s[n],i=r[p];c[n+1]=i,f[n+1]=p}l.rules=f,l.__rule_regexes=c,l.__rule_count=o}this.__decompressed=!0}return this._input=e||"",this.clear(),this._signaled_error_token=!1,this.done=!1,this.yylineno=0,this.matched="",this.conditionStack=["INITIAL"],this.__currentRuleSet__=null,this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0,range:[0,0]},this.offset=0,this},/**
     * edit the remaining input via user-specified callback.
     * This can be used to forward-adjust the input-to-parse, 
     * e.g. inserting macro expansions and alike in the
     * input which has yet to be lexed.
     * The behaviour of this API contrasts the `unput()` et al
     * APIs as those act on the *consumed* input, while this
     * one allows one to manipulate the future, without impacting
     * the current `yyloc` cursor location or any history. 
     * 
     * Use this API to help implement C-preprocessor-like
     * `#include` statements, etc.
     * 
     * The provided callback must be synchronous and is
     * expected to return the edited input (string).
     *
     * The `cpsArg` argument value is passed to the callback
     * as-is.
     *
     * `callback` interface: 
     * `function callback(input, cpsArg)`
     * 
     * - `input` will carry the remaining-input-to-lex string
     *   from the lexer.
     * - `cpsArg` is `cpsArg` passed into this API.
     * 
     * The `this` reference for the callback will be set to
     * reference this lexer instance so that userland code
     * in the callback can easily and quickly access any lexer
     * API. 
     *
     * When the callback returns a non-string-type falsey value,
     * we assume the callback did not edit the input and we
     * will using the input as-is.
     *
     * When the callback returns a non-string-type value, it
     * is converted to a string for lexing via the `"" + retval`
     * operation. (See also why: http://2ality.com/2012/03/converting-to-string.html 
     * -- that way any returned object's `toValue()` and `toString()`
     * methods will be invoked in a proper/desirable order.)
     * 
     * @public
     * @this {RegExpLexer}
     */editRemainingInput:function(e,t){var r=e.call(this,this._input,t);return"string"!=typeof r?r&&(this._input=""+r):this._input=r,this},/**
     * consumes and returns one char from the input
     * 
     * @public
     * @this {RegExpLexer}
     */input:function(){if(!this._input)return null;var e=this._input[0];this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e;// Count the linenumber up when we hit the LF (or a stand-alone CR).
// On CRLF, the linenumber is incremented when you fetch the CR or the CRLF combo
// and we advance immediately past the LF as well, returning both together as if
// it was all a single 'character' only.
var t=1,r=!1;if("\n"===e)r=!0;else if("\r"===e){r=!0;var n=this._input[1];"\n"===n&&(t++,e+=n,this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n,this.yylloc.range[1]++)}return r?(this.yylineno++,this.yylloc.last_line++,this.yylloc.last_column=0):this.yylloc.last_column++,this.yylloc.range[1]++,this._input=this._input.slice(t),e},/**
     * unshifts one char (or an entire string) into the input
     * 
     * @public
     * @this {RegExpLexer}
     */unput:function(e){var t=e.length,r=e.split(/(?:\r\n?|\n)/g);if(this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.yyleng=this.yytext.length,this.offset-=t,this.match=this.match.substr(0,this.match.length-t),this.matched=this.matched.substr(0,this.matched.length-t),r.length>1){this.yylineno-=r.length-1,this.yylloc.last_line=this.yylineno+1;// Get last entirely matched line into the `pre_lines[]` array's
// last index slot; we don't mind when other previously 
// matched lines end up in the array too. 
var n=this.match,o=n.split(/(?:\r\n?|\n)/g);1===o.length&&(o=(n=this.matched).split(/(?:\r\n?|\n)/g)),this.yylloc.last_column=o[o.length-1].length}else this.yylloc.last_column-=t;return this.yylloc.range[1]=this.yylloc.range[0]+this.yyleng,this.done=!1,this},/**
     * cache matched text and append it on next action
     * 
     * @public
     * @this {RegExpLexer}
     */more:function(){return this._more=!0,this},/**
     * signal the lexer that this rule fails to match the input, so the
     * next matching rule (regex) should be tested instead.
     * 
     * @public
     * @this {RegExpLexer}
     */reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else{// when the `parseError()` call returns, we MUST ensure that the error is registered.
// We accomplish this by signaling an 'error' token to be produced for the current
// `.lex()` run.
var e="";this.yylloc&&(e=" on line "+(this.yylineno+1));var t=this.constructLexErrorInfo("Lexical error"+e+": You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).",!1);this._signaled_error_token=this.parseError(t.errStr,t,this.JisonLexerError)||this.ERROR}return this},/**
     * retain first n characters of the match
     * 
     * @public
     * @this {RegExpLexer}
     */less:function(e){return this.unput(this.match.slice(e))},/**
     * return (part of the) already matched input, i.e. for error
     * messages.
     * 
     * Limit the returned string length to `maxSize` (default: 20).
     * 
     * Limit the returned string to the `maxLines` number of lines of
     * input (default: 1).
     * 
     * Negative limit values equal *unlimited*.
     * 
     * @public
     * @this {RegExpLexer}
     */pastInput:function(e,t){var r=this.matched.substring(0,this.matched.length-this.match.length);e<0?e=r.length:e||(e=20),t<0?t=r.length:t||(t=1);// now that we have a significantly reduced string to process, transform the newlines
// and chop them, then limit them:
var n=// `substr` anticipation: treat \r\n as a single character and take a little
// more than necessary so that we can still properly check against maxSize
// after we've transformed and limited the newLines in here:
(r=r.substr(-(2*e)-2)).replace(/\r\n|\r/g,"\n").split("\n");return(r=(n=n.slice(-t)).join("\n")).length>e&&(r="..."+r.substr(-e)),r},/**
     * return (part of the) upcoming input, i.e. for error messages.
     * 
     * Limit the returned string length to `maxSize` (default: 20).
     * 
     * Limit the returned string to the `maxLines` number of lines of input (default: 1).
     * 
     * Negative limit values equal *unlimited*.
     *
     * > ### NOTE ###
     * >
     * > *"upcoming input"* is defined as the whole of the both
     * > the *currently lexed* input, together with any remaining input
     * > following that. *"currently lexed"* input is the input 
     * > already recognized by the lexer but not yet returned with
     * > the lexer token. This happens when you are invoking this API
     * > from inside any lexer rule action code block. 
     * >
     * 
     * @public
     * @this {RegExpLexer}
     */upcomingInput:function(e,t){var r=this.match;e<0?e=r.length+this._input.length:e||(e=20),t<0?t=e:t||(t=1),r.length<2*e+2&&(r+=this._input.substring(0,2*e+2));// now that we have a significantly reduced string to process, transform the newlines
// and chop them, then limit them:
var n=r.replace(/\r\n|\r/g,"\n").split("\n");return(r=(n=n.slice(0,t)).join("\n")).length>e&&(r=r.substring(0,e)+"..."),r},/**
     * return a string which displays the character position where the
     * lexing error occurred, i.e. for error messages
     * 
     * @public
     * @this {RegExpLexer}
     */showPosition:function(e,t){var r=this.pastInput(e).replace(/\s/g," "),n=Array(r.length+1).join("-");return r+this.upcomingInput(t).replace(/\s/g," ")+"\n"+n+"^"},/**
     * return an YYLLOC info object derived off the given context (actual, preceding, following, current).
     * Use this method when the given `actual` location is not guaranteed to exist (i.e. when
     * it MAY be NULL) and you MUST have a valid location info object anyway:
     * then we take the given context of the `preceding` and `following` locations, IFF those are available,
     * and reconstruct the `actual` location info from those.
     * If this fails, the heuristic is to take the `current` location, IFF available.
     * If this fails as well, we assume the sought location is at/around the current lexer position
     * and then produce that one as a response. DO NOTE that these heuristic/derived location info
     * values MAY be inaccurate!
     *
     * NOTE: `deriveLocationInfo()` ALWAYS produces a location info object *copy* of `actual`, not just
     * a *reference* hence all input location objects can be assumed to be 'constant' (function has no side-effects).
     * 
     * @public
     * @this {RegExpLexer}
     */deriveLocationInfo:function(e,t,r,n){var o={first_line:1,first_column:0,last_line:1,last_column:0,range:[0,0]};return e&&(o.first_line=0|e.first_line,o.last_line=0|e.last_line,o.first_column=0|e.first_column,o.last_column=0|e.last_column,e.range&&(o.range[0]=0|e.range[0],o.range[1]=0|e.range[1])),(o.first_line<=0||o.last_line<o.first_line)&&(o.first_line<=0&&t&&(o.first_line=0|t.last_line,o.first_column=0|t.last_column,t.range&&(o.range[0]=0|e.range[1])),(o.last_line<=0||o.last_line<o.first_line)&&r&&(o.last_line=0|r.first_line,o.last_column=0|r.first_column,r.range&&(o.range[1]=0|e.range[0])),o.first_line<=0&&n&&(o.last_line<=0||n.last_line<=o.last_line)&&(o.first_line=0|n.first_line,o.first_column=0|n.first_column,n.range&&(o.range[0]=0|n.range[0])),o.last_line<=0&&n&&(o.first_line<=0||n.first_line>=o.first_line)&&(o.last_line=0|n.last_line,o.last_column=0|n.last_column,n.range&&(o.range[1]=0|n.range[1]))),o.last_line<=0&&(o.first_line<=0?(o.first_line=this.yylloc.first_line,o.last_line=this.yylloc.last_line,o.first_column=this.yylloc.first_column,o.last_column=this.yylloc.last_column,o.range[0]=this.yylloc.range[0]):(o.last_line=this.yylloc.last_line,o.last_column=this.yylloc.last_column),o.range[1]=this.yylloc.range[1]),o.first_line<=0&&(o.first_line=o.last_line,o.first_column=0,o.range[1]=o.range[0]),o.first_column<0&&(o.first_column=0),o.last_column<0&&(o.last_column=o.first_column>0?o.first_column:80),o},/**
     * return a string which displays the lines & columns of input which are referenced 
     * by the given location info range, plus a few lines of context.
     * 
     * This function pretty-prints the indicated section of the input, with line numbers 
     * and everything!
     * 
     * This function is very useful to provide highly readable error reports, while
     * the location range may be specified in various flexible ways:
     * 
     * - `loc` is the location info object which references the area which should be
     *   displayed and 'marked up': these lines & columns of text are marked up by `^`
     *   characters below each character in the entire input range.
     * 
     * - `context_loc` is the *optional* location info object which instructs this
     *   pretty-printer how much *leading* context should be displayed alongside
     *   the area referenced by `loc`. This can help provide context for the displayed
     *   error, etc.
     * 
     *   When this location info is not provided, a default context of 3 lines is
     *   used.
     * 
     * - `context_loc2` is another *optional* location info object, which serves
     *   a similar purpose to `context_loc`: it specifies the amount of *trailing*
     *   context lines to display in the pretty-print output.
     * 
     *   When this location info is not provided, a default context of 1 line only is
     *   used.
     * 
     * Special Notes:
     * 
     * - when the `loc`-indicated range is very large (about 5 lines or more), then
     *   only the first and last few lines of this block are printed while a
     *   `...continued...` message will be printed between them.
     * 
     *   This serves the purpose of not printing a huge amount of text when the `loc`
     *   range happens to be huge: this way a manageable & readable output results
     *   for arbitrary large ranges.
     * 
     * - this function can display lines of input which whave not yet been lexed.
     *   `prettyPrintRange()` can access the entire input!
     * 
     * @public
     * @this {RegExpLexer}
     */prettyPrintRange:function(e,t,r){e=this.deriveLocationInfo(e,t,r);var n=(this.matched+this._input).split("\n"),o=Math.max(1,t?t.first_line:e.first_line-3),i=Math.max(1,r?r.last_line:e.last_line+1),a=1+Math.log10(1|i)|0,u=Array(a).join(" "),l=[],s=n.slice(o-1,i+1).map(function(t,r){var n=r+o,i=(u+n).substr(-a)+": "+t,s=Array(a+1).join("^"),c=3,f=0;return n===e.first_line?(c+=e.first_column,f=Math.max(2,(n===e.last_line?e.last_column:t.length)-e.first_column+1)):n===e.last_line?f=Math.max(2,e.last_column+1):n>e.first_line&&n<e.last_line&&(f=Math.max(2,t.length+1)),f&&(i+="\n"+s+Array(c).join(".")+Array(f).join("^"),t.trim().length>0&&l.push(r)),i=i.replace(/\t/g," ")});// now make sure we don't print an overly large amount of error area: limit it 
// to the top and bottom line count:
if(l.length>4){var c=l[1]+1,f=l[l.length-2]-1,p=Array(a+1).join(" ")+"  (...continued...)";p+="\n"+Array(a+1).join("-")+"  (---------------)",s.splice(c,f-c+1,p)}return s.join("\n")},/**
     * helper function, used to produce a human readable description as a string, given
     * the input `yylloc` location object.
     * 
     * Set `display_range_too` to TRUE to include the string character index position(s)
     * in the description if the `yylloc.range` is available.
     * 
     * @public
     * @this {RegExpLexer}
     */describeYYLLOC:function(e,t){var r,n=e.first_line,o=e.last_line,i=e.first_column,a=e.last_column;if(0==o-n?(r="line "+n+", ",a-i<=1?r+="column "+i:r+="columns "+i+" .. "+a):r="lines "+n+"(column "+i+") .. "+o+"(column "+a+")",e.range&&t){var u=e.range[0],l=e.range[1]-1;l<=u?r+=" {String Offset: "+u+"}":r+=" {String Offset range: "+u+" .. "+l+"}"}return r},/**
     * test the lexed token: return FALSE when not a match, otherwise return token.
     * 
     * `match` is supposed to be an array coming out of a regex match, i.e. `match[0]`
     * contains the actually matched text string.
     * 
     * Also move the input cursor forward and update the match collectors:
     * 
     * - `yytext`
     * - `yyleng`
     * - `match`
     * - `matches`
     * - `yylloc`
     * - `offset`
     * 
     * @public
     * @this {RegExpLexer}
     */test_match:function(e,t){var r,n,o,i,a;if(this.options.backtrack_lexer&&(o={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.yylloc.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column,range:this.yylloc.range.slice(0)},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,//_signaled_error_token: this._signaled_error_token,
yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done}),a=(i=e[0]).length,// if (match_str.indexOf('\n') !== -1 || match_str.indexOf('\r') !== -1) {
(n=i.split(/(?:\r\n?|\n)/g)).length>1?(this.yylineno+=n.length-1,this.yylloc.last_line=this.yylineno+1,this.yylloc.last_column=n[n.length-1].length):this.yylloc.last_column+=a,// }
this.yytext+=i,this.match+=i,this.matched+=i,this.matches=e,this.yyleng=this.yytext.length,this.yylloc.range[1]+=a,// previous lex rules MAY have invoked the `more()` API rather than producing a token:
// those rules will already have moved this `offset` forward matching their match lengths,
// hence we must only add our own match length now:
this.offset+=a,this._more=!1,this._backtrack=!1,this._input=this._input.slice(a),// calling this method:
//
//   function lexer__performAction(yy, yyrulenumber, YY_START) {...}
r=this.performAction.call(this,this.yy,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack){// recover context
for(var u in o)this[u]=o[u];this.__currentRuleSet__=null}else if(this._signaled_error_token)return(// produce one 'error' token as `.parseError()` in `reject()`
// did not guarantee a failure signal by throwing an exception!
r=this._signaled_error_token,this._signaled_error_token=!1,r);return!1},/**
     * return next match in input
     * 
     * @public
     * @this {RegExpLexer}
     */next:function(){if(this.done)return this.clear(),this.EOF;this._input||(this.done=!0),this._more||this.clear();var e,t,r,n,o=this.__currentRuleSet__;if(!o&&(!// Update the ruleset cache as we apparently encountered a state change or just started lexing.
// The cache is set up for fast lookup -- we assume a lexer will switch states much less often than it will
// invoke the `lex()` token-producing API and related APIs, hence caching the set for direct access helps
// speed up those activities a tiny bit.
(o=this.__currentRuleSet__=this._currentRules())||!o.rules)){var i="";this.options.trackPosition&&(i=" on line "+(this.yylineno+1));var a=this.constructLexErrorInfo("Internal lexer engine error"+i+': The lex grammar programmer pushed a non-existing condition name "'+this.topState()+'"; this is a fatal error and should be reported to the application programmer team!',!1);// produce one 'error' token until this situation has been resolved, most probably by parse termination!
return this.parseError(a.errStr,a,this.JisonLexerError)||this.ERROR}// Note: the arrays are 1-based, while `len` itself is a valid index,
// hence the non-standard less-or-equal check in the next loop condition!
for(var u=o.rules,l=o.__rule_regexes,s=o.__rule_count,c=1;c<=s;c++)if((r=this._input.match(l[c]))&&(!t||r[0].length>t[0].length)){if(t=r,n=c,this.options.backtrack_lexer){if(!1!==(e=this.test_match(r,u[c])))return e;if(!this._backtrack)return!1;t=void 0;continue;// rule action called reject() implying a rule MISmatch. 
}if(!this.options.flex)break}if(t)return!1!==(e=this.test_match(t,u[n]))&&e;if(!this._input)return this.done=!0,this.clear(),this.EOF;var i="";this.options.trackPosition&&(i=" on line "+(this.yylineno+1));var a=this.constructLexErrorInfo("Lexical error"+i+": Unrecognized text.",this.options.lexerErrorsAreRecoverable),f=this._input,p=this.topState(),d=this.conditionStack.length;return(e=this.parseError(a.errStr,a,this.JisonLexerError)||this.ERROR)!==this.ERROR||this.matches||// and make sure the input has been modified/consumed ...
f!==this._input||// ...or the lexer state has been modified significantly enough
// to merit a non-consuming error handling action right now.
p!==this.topState()||d!==this.conditionStack.length||this.input(),e},/**
     * return next match that has a token
     * 
     * @public
     * @this {RegExpLexer}
     */lex:function(){var e;for("function"==typeof this.pre_lex&&(e=this.pre_lex.call(this,0)),"function"==typeof this.options.pre_lex&&(e=this.options.pre_lex.call(this,e)||e),this.yy&&"function"==typeof this.yy.pre_lex&&(e=this.yy.pre_lex.call(this,e)||e);!e;)e=this.next();return this.yy&&"function"==typeof this.yy.post_lex&&(e=this.yy.post_lex.call(this,e)||e),"function"==typeof this.options.post_lex&&(e=this.options.post_lex.call(this,e)||e),"function"==typeof this.post_lex&&(e=this.post_lex.call(this,e)||e),e},/**
     * return next match that has a token. Identical to the `lex()` API but does not invoke any of the 
     * `pre_lex()` nor any of the `post_lex()` callbacks.
     * 
     * @public
     * @this {RegExpLexer}
     */fastLex:function(){for(var e;!e;)e=this.next();return e},/**
     * return info about the lexer state that can help a parser or other lexer API user to use the
     * most efficient means available. This API is provided to aid run-time performance for larger
     * systems which employ this lexer.
     * 
     * @public
     * @this {RegExpLexer}
     */canIUse:function(){return{fastLex:!("function"==typeof this.pre_lex||"function"==typeof this.options.pre_lex||this.yy&&"function"==typeof this.yy.pre_lex||this.yy&&"function"==typeof this.yy.post_lex||"function"==typeof this.options.post_lex||"function"==typeof this.post_lex)&&"function"==typeof this.fastLex}},/**
     * backwards compatible alias for `pushState()`;
     * the latter is symmetrical with `popState()` and we advise to use
     * those APIs in any modern lexer code, rather than `begin()`.
     * 
     * @public
     * @this {RegExpLexer}
     */begin:function(e){return this.pushState(e)},/**
     * activates a new lexer condition state (pushes the new lexer
     * condition state onto the condition stack)
     * 
     * @public
     * @this {RegExpLexer}
     */pushState:function(e){return this.conditionStack.push(e),this.__currentRuleSet__=null,this},/**
     * pop the previously active lexer condition state off the condition
     * stack
     * 
     * @public
     * @this {RegExpLexer}
     */popState:function(){return this.conditionStack.length-1>0?(this.__currentRuleSet__=null,this.conditionStack.pop()):this.conditionStack[0]},/**
     * return the currently active lexer condition state; when an index
     * argument is provided it produces the N-th previous condition state,
     * if available
     * 
     * @public
     * @this {RegExpLexer}
     */topState:function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:"INITIAL"},/**
     * (internal) determine the lexer rule set which is active for the
     * currently active lexer condition state
     * 
     * @public
     * @this {RegExpLexer}
     */_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]]:this.conditions.INITIAL},/**
     * return the number of states currently on the stack
     * 
     * @public
     * @this {RegExpLexer}
     */stateStackSize:function(){return this.conditionStack.length},options:{trackPosition:!0},JisonLexerError:e,performAction:function(e,t,r){if(1!==t)return this.simpleCaseActionClusters[t]},simpleCaseActionClusters:{/*! Conditions:: INITIAL *//*! Rule::       (--[0-9a-z-A-Z-]*) */0:13,/*! Conditions:: INITIAL *//*! Rule::       \* */2:5,/*! Conditions:: INITIAL *//*! Rule::       \/ */3:6,/*! Conditions:: INITIAL *//*! Rule::       \+ */4:3,/*! Conditions:: INITIAL *//*! Rule::       - */5:4,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)px\b */6:15,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)cm\b */7:15,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)mm\b */8:15,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)in\b */9:15,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)pt\b */10:15,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)pc\b */11:15,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)deg\b */12:16,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)grad\b */13:16,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)rad\b */14:16,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)turn\b */15:16,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)s\b */16:17,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)ms\b */17:17,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)Hz\b */18:18,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)kHz\b */19:18,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)dpi\b */20:19,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)dpcm\b */21:19,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)dppx\b */22:19,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)em\b */23:20,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)ex\b */24:21,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)ch\b */25:22,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)rem\b */26:23,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)vw\b */27:25,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)vh\b */28:24,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)vmin\b */29:26,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)vmax\b */30:27,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)% */31:28,/*! Conditions:: INITIAL *//*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)\b */32:11,/*! Conditions:: INITIAL *//*! Rule::       (calc) */33:9,/*! Conditions:: INITIAL *//*! Rule::       (var) */34:12,/*! Conditions:: INITIAL *//*! Rule::       ([a-z]+) */35:10,/*! Conditions:: INITIAL *//*! Rule::       \( */36:7,/*! Conditions:: INITIAL *//*! Rule::       \) */37:8,/*! Conditions:: INITIAL *//*! Rule::       , */38:14,/*! Conditions:: INITIAL *//*! Rule::       $ */39:1},rules:[/*  0: *//^(?:(--[\d\-A-Za-z]*))/,/*  1: *//^(?:\s+)/,/*  2: *//^(?:\*)/,/*  3: *//^(?:\/)/,/*  4: *//^(?:\+)/,/*  5: *//^(?:-)/,/*  6: *//^(?:(\d+(\.\d*)?|\.\d+)px\b)/,/*  7: *//^(?:(\d+(\.\d*)?|\.\d+)cm\b)/,/*  8: *//^(?:(\d+(\.\d*)?|\.\d+)mm\b)/,/*  9: *//^(?:(\d+(\.\d*)?|\.\d+)in\b)/,/* 10: *//^(?:(\d+(\.\d*)?|\.\d+)pt\b)/,/* 11: *//^(?:(\d+(\.\d*)?|\.\d+)pc\b)/,/* 12: *//^(?:(\d+(\.\d*)?|\.\d+)deg\b)/,/* 13: *//^(?:(\d+(\.\d*)?|\.\d+)grad\b)/,/* 14: *//^(?:(\d+(\.\d*)?|\.\d+)rad\b)/,/* 15: *//^(?:(\d+(\.\d*)?|\.\d+)turn\b)/,/* 16: *//^(?:(\d+(\.\d*)?|\.\d+)s\b)/,/* 17: *//^(?:(\d+(\.\d*)?|\.\d+)ms\b)/,/* 18: *//^(?:(\d+(\.\d*)?|\.\d+)Hz\b)/,/* 19: *//^(?:(\d+(\.\d*)?|\.\d+)kHz\b)/,/* 20: *//^(?:(\d+(\.\d*)?|\.\d+)dpi\b)/,/* 21: *//^(?:(\d+(\.\d*)?|\.\d+)dpcm\b)/,/* 22: *//^(?:(\d+(\.\d*)?|\.\d+)dppx\b)/,/* 23: *//^(?:(\d+(\.\d*)?|\.\d+)em\b)/,/* 24: *//^(?:(\d+(\.\d*)?|\.\d+)ex\b)/,/* 25: *//^(?:(\d+(\.\d*)?|\.\d+)ch\b)/,/* 26: *//^(?:(\d+(\.\d*)?|\.\d+)rem\b)/,/* 27: *//^(?:(\d+(\.\d*)?|\.\d+)vw\b)/,/* 28: *//^(?:(\d+(\.\d*)?|\.\d+)vh\b)/,/* 29: *//^(?:(\d+(\.\d*)?|\.\d+)vmin\b)/,/* 30: *//^(?:(\d+(\.\d*)?|\.\d+)vmax\b)/,/* 31: *//^(?:(\d+(\.\d*)?|\.\d+)%)/,/* 32: *//^(?:(\d+(\.\d*)?|\.\d+)\b)/,/* 33: *//^(?:(calc))/,/* 34: *//^(?:(var))/,/* 35: *//^(?:([a-z]+))/,/* 36: *//^(?:\()/,/* 37: *//^(?:\))/,/* 38: *//^(?:,)/,/* 39: *//^(?:$)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39],inclusive:!0}}}}();function a(){this.yy={}}return o.lexer=i,a.prototype=o,o.Parser=a,new a}();us.Parser;var uc={};Object.defineProperty(uc,"__esModule",{value:!0}),uc.flip=um;var uf={};Object.defineProperty(uf,"__esModule",{value:!0});var up={// length
px:{px:1,cm:96/2.54,mm:96/25.4,in:96,pt:96/72,pc:16},cm:{px:2.54/96,cm:1,mm:.1,in:2.54,pt:2.54/72,pc:2.54/6},mm:{px:25.4/96,cm:10,mm:1,in:25.4,pt:25.4/72,pc:25.4/6},in:{px:1/96,cm:1/2.54,mm:1/25.4,in:1,pt:1/72,pc:1/6},pt:{px:.75,cm:72/2.54,mm:72/25.4,in:72,pt:1,pc:12},pc:{px:.0625,cm:6/2.54,mm:6/25.4,in:6,pt:6/72,pc:1},// angle
deg:{deg:1,grad:.9,rad:180/Math.PI,turn:360},grad:{deg:400/360,grad:1,rad:200/Math.PI,turn:400},rad:{deg:Math.PI/180,grad:Math.PI/200,rad:1,turn:2*Math.PI},turn:{deg:1/360,grad:1/400,rad:.5/Math.PI,turn:1},// time
s:{s:1,ms:.001},ms:{s:1e3,ms:1},// frequency
Hz:{Hz:1,kHz:1e3},kHz:{Hz:.001,kHz:1},// resolution
dpi:{dpi:1,dpcm:1/2.54,dppx:1/96},dpcm:{dpi:2.54,dpcm:1,dppx:2.54/96},dppx:{dpi:96,dpcm:96/2.54,dppx:1}},ud=(p=function(e,t,r,n){if(!up.hasOwnProperty(r))throw Error("Cannot convert to "+r);if(!up[r].hasOwnProperty(t))throw Error("Cannot convert from "+t+" to "+r);var o=up[r][t]*e;return!1!==n?Math.round(o*(n=Math.pow(10,parseInt(n)||5)))/n:o}).__esModule?p:{default:p};uf.default=function(e,t,r){switch(e.type){case"LengthValue":case"AngleValue":case"TimeValue":case"FrequencyValue":case"ResolutionValue":var n;return(n=t).type===e.type&&(n={type:e.type,value:(0,ud.default)(n.value,n.unit,e.unit,r),unit:e.unit}),{left:e,right:n};default:return{left:e,right:t}}};var uh=(d=uf=uf.default)&&d.__esModule?d:{default:d};function uy(e,t){return e.type===t.type&&e.value===t.value}function uv(e){switch(e){case"LengthValue":case"AngleValue":case"TimeValue":case"FrequencyValue":case"ResolutionValue":case"EmValue":case"ExValue":case"ChValue":case"RemValue":case"VhValue":case"VwValue":case"VminValue":case"VmaxValue":case"PercentageValue":case"Value":return!0}return!1}function um(e){return"+"===e?"-":"+"}uc.default=function e(t,r){return"MathExpression"===t.type?function(t,r){var n,o,i,a;switch(n=t,i=e((o=(0,uh.default)(n.left,n.right,r)).left,r),a=e(o.right,r),"MathExpression"===i.type&&"MathExpression"===a.type&&("/"===i.operator&&"*"===a.operator||"-"===i.operator&&"+"===a.operator||"*"===i.operator&&"/"===a.operator||"+"===i.operator&&"-"===a.operator)&&(uy(i.right,a.right)?o=(0,uh.default)(i.left,a.left,r):uy(i.right,a.left)&&(o=(0,uh.default)(i.left,a.right,r)),i=e(o.left,r),a=e(o.right,r)),n.left=i,n.right=a,(t=n).operator){case"+":case"-":return function(t,r){var n=t,o=n.left,i=n.right,a=n.operator;if("CssVariable"===o.type||"CssVariable"===i.type)return t;// something + 0 => something
// something - 0 => something
if(0===i.value)return o;// 0 + something => something
if(0===o.value&&"+"===a)return i;// 0 - something => -something
if(0===o.value&&"-"===a)return function e(t){return uv(t.type)?t.value=-t.value:"MathExpression"==t.type&&(t.left=e(t.left),t.right=e(t.right)),t}(i);// value <op> (expr)
if(o.type===i.type&&uv(o.type)&&(t=Object.assign({},o),"+"===a?t.value=o.value+i.value:t.value=o.value-i.value),uv(o.type)&&("+"===i.operator||"-"===i.operator)&&"MathExpression"===i.type){// value + (value + something) => (value + value) + something
// value + (value - something) => (value + value) - something
// value - (value + something) => (value - value) - something
// value - (value - something) => (value - value) + something
if(o.type===i.left.type)return(t=Object.assign({},t)).left=e({type:"MathExpression",operator:a,left:o,right:i.left},r),t.right=i.right,t.operator="-"===a?um(i.operator):i.operator,e(t,r);if(o.type===i.right.type)return(t=Object.assign({},t)).left=e({type:"MathExpression",operator:"-"===a?um(i.operator):i.operator,left:o,right:i.right},r),t.right=i.left,e(t,r)}// (expr) <op> value
if("MathExpression"===o.type&&("+"===o.operator||"-"===o.operator)&&uv(i.type)){// (value + something) + value => (value + value) + something
// (value - something) + value => (value + value) - something
// (value + something) - value => (value - value) + something
// (value - something) - value => (value - value) - something
if(i.type===o.left.type)return(t=Object.assign({},o)).left=e({type:"MathExpression",operator:a,left:o.left,right:i},r),e(t,r);if(i.type===o.right.type)return t=Object.assign({},o),"-"===o.operator?(t.right=e({type:"MathExpression",operator:"-"===a?"+":"-",left:i,right:o.right},r),t.operator="-"===a?"-":"+"):t.right=e({type:"MathExpression",operator:a,left:o.right,right:i},r),t.right.value<0&&(t.right.value*=-1,t.operator="-"===t.operator?"+":"-"),e(t,r)}return t}(t,r);case"/":return function(t,r){if(!uv(t.right.type))return t;if("Value"!==t.right.type)throw Error('Cannot divide by "'+t.right.unit+'", number expected');if(0===t.right.value)throw Error("Cannot divide by zero");// (expr) / value
if("MathExpression"===t.left.type){if(uv(t.left.left.type)&&uv(t.left.right.type))return t.left.left.value/=t.right.value,t.left.right.value/=t.right.value,e(t.left,r)}else if(uv(t.left.type))return t.left.value/=t.right.value,t.left;return t}(t,r);case"*":return function(e){// (expr) * value
if("MathExpression"===e.left.type&&"Value"===e.right.type){if(uv(e.left.left.type)&&uv(e.left.right.type))return e.left.left.value*=e.right.value,e.left.right.value*=e.right.value,e.left}else if(uv(e.left.type)&&"Value"===e.right.type)return e.left.value*=e.right.value,e.left;else if("Value"===e.left.type&&"MathExpression"===e.right.type){if(uv(e.right.left.type)&&uv(e.right.right.type))return e.right.left.value*=e.left.value,e.right.right.value*=e.left.value,e.right}else if("Value"===e.left.type&&uv(e.right.type))return e.right.value*=e.left.value,e.right;return e}(t)}return t}(t,r):"Calc"===t.type?e(t.value,r):t};var ug=uw(uc),ub={};Object.defineProperty(ub,"__esModule",{value:!0}),ub.default=function(e,t,r){var n=function e(t,r){switch(t.type){case"MathExpression":var n=t.left,o=t.right,i=t.operator,a="";return"MathExpression"===n.type&&ux[i]<ux[n.operator]?a+="("+e(n,r)+")":a+=e(n,r),a+=" "+t.operator+" ","MathExpression"===o.type&&ux[i]<ux[o.operator]?a+="("+e(o,r)+")":("MathExpression"===o.type&&"-"===i&&["+","-"].includes(o.operator)&&// fix #52 : a-(b+c) = a-b-c
(o.operator=(0,uc.flip)(o.operator)),a+=e(o,r)),a;case"Value":return u_(t.value,r);case"CssVariable":if(t.fallback)return"var("+t.value+", "+e(t.fallback,r,!0)+")";return"var("+t.value+")";case"Calc":if(t.prefix)return"-"+t.prefix+"-calc("+e(t.value,r)+")";return"calc("+e(t.value,r)+")";default:return u_(t.value,r)+t.unit}}(t,r);return"MathExpression"===t.type&&// a calc()
(n=e+"("+n+")"),n};var ux={"*":0,"/":0,"+":1,"-":1};function u_(e,t){if(!1!==t){var r=Math.pow(10,t);return Math.round(e*r)/r}return e}var uS=uw(ub=ub.default);function uw(e){return e&&e.__esModule?e:{default:e}}// eslint-disable-line
var uP=/((?:\-[a-z]+\-)?calc)/;ut.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return(0,ul.default)(e).walk(function(e){// skip anything which isn't a calc() function
if("function"===e.type&&uP.test(e.value)){// stringify calc expression and produce an AST
var r=ul.default.stringify(e.nodes);// skip constant() and env()
if(!(r.indexOf("constant")>=0||r.indexOf("env")>=0)){var n=us.parse(r),o=(0,ug.default)(n,t);// stringify AST and write it back
e.type="word",e.value=(0,uS.default)(e.value,o,t)}}},!0).toString()},ut=ut.default;var uO={isSsr:!("undefined"!=typeof window&&window.document&&window.document.createElement&&window.setTimeout),get:function(e){return uO[e]},set:function(e,t){if("string"==typeof e)uO[e]=t;else{var r=Object.keys(e);r&&r.length&&r.forEach(function(t){uO[t]=e[t]})}}};function uE(e){return(uE="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function uj(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function uk(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?uj(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!==uE(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==uE(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===uE(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):uj(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function uM(e){return function(e){if(Array.isArray(e))return uA(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return uA(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return uA(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function uA(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var uT={widthCache:{},cacheCount:0},uC={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},uL=["minWidth","maxWidth","width","minHeight","maxHeight","height","top","left","fontSize","lineHeight","padding","margin","paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom"],uN="recharts_measurement_span",uI=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==e||uO.isSsr)return{width:0,height:0};var r="".concat(e),n=Object.keys(t).reduce(function(e,r){var n;return"".concat(e).concat(r.split("").reduce(function(e,t){return t===t.toUpperCase()?[].concat(uM(e),["-",t.toLowerCase()]):[].concat(uM(e),[t])},[]).join(""),":").concat((n=t[r],uL.indexOf(r)>=0&&n===+n?"".concat(n,"px"):n),";")},""),o="".concat(r,"-").concat(n);if(uT.widthCache[o])return uT.widthCache[o];try{var i=document.getElementById(uN);i||((i=document.createElement("span")).setAttribute("id",uN),i.setAttribute("aria-hidden","true"),document.body.appendChild(i));// Need to use CSS Object Model (CSSOM) to be able to comply with Content Security Policy (CSP)
// https://en.wikipedia.org/wiki/Content_Security_Policy
var a=uk(uk({},uC),t);Object.keys(a).map(function(e){return i.style[e]=a[e],e}),i.textContent=r;var u=i.getBoundingClientRect(),l={width:u.width,height:u.height};return uT.widthCache[o]=l,++uT.cacheCount>2e3&&(uT.cacheCount=0,uT.widthCache={}),l}catch(e){return{width:0,height:0}}},uR=function(e){var t=e.ownerDocument.documentElement,r={top:0,left:0};return void 0!==e.getBoundingClientRect&&(r=e.getBoundingClientRect()),{top:r.top+window.pageYOffset-t.clientTop,left:r.left+window.pageXOffset-t.clientLeft}},uD=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],uG=["dx","dy","angle","className","breakAll"];function uV(){return(uV=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function uF(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function uz(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return uK(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return uK(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function uK(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var uQ=/[ \f\n\r\t\v\u2028\u2029]+/,uH=function(e){var t=e.children,r=e.breakAll,n=e.style;try{var o=[];/*@__PURE__*/g(rT)(t)||(o=r?t.toString().split(""):t.toString().split(uQ));var i=o.map(function(e){return{word:e,width:uI(e,n).width}}),a=r?0:uI("\xa0",n).width;return{wordsWithComputedWidth:i,spaceWidth:a}}catch(e){return null}},uW=function(e,t,r,n,o){var i,a=e.maxLines,u=e.children,l=e.style,s=e.breakAll,c=af(a),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce(function(e,t){var i=t.word,a=t.width,u=e[e.length-1];return u&&(null==n||o||u.width+a+r<Number(n))?(// Word can be added to an existing line
u.words.push(i),u.width+=a+r):e.push({words:[i],width:a}),e},[])},p=f(t);if(!c)return p;for(var d=function(e){var t=f(uH({breakAll:s,style:l,children:u.slice(0,e)+"…"}).wordsWithComputedWidth);return[t.length>a||t.reduce(function(e,t){return e.width>t.width?e:t}).width>Number(n),t]},h=0,y=u.length-1,v=0;h<=y&&v<=u.length-1;){var m=Math.floor((h+y)/2),g=uz(d(m-1),2),b=g[0],x=g[1],_=uz(d(m),1)[0];if(b||_||(h=m+1),b&&_&&(y=m-1),!b&&_){i=x;break}v++}// Fallback to originalResult (result without trimming) if we cannot find the
// where to trim.  This should not happen :tm:
return i||p},uB=function(e){return[{words:/*@__PURE__*/g(rT)(e)?[]:e.toString().split(uQ)}]},uY=function(e){var t=e.width,r=e.scaleToFit,n=e.children,o=e.style,i=e.breakAll,a=e.maxLines;// Only perform calculations if using features that require them (multiline, scaleToFit)
if((t||r)&&!uO.isSsr){var u=uH({breakAll:i,children:n,style:o});return u?uW({breakAll:i,children:n,maxLines:a,style:o},u.wordsWithComputedWidth,u.spaceWidth,t,r):uB(n)}return uB(n)},uU="#808080",u$=function(e){var t,r=e.x,n=void 0===r?0:r,o=e.y,i=void 0===o?0:o,a=e.lineHeight,u=void 0===a?"1em":a,l=e.capHeight,s=void 0===l?"0.71em":l,c=e.scaleToFit,f=void 0!==c&&c,p=e.textAnchor,d=e.verticalAnchor,h=e.fill,y=void 0===h?uU:h,v=uF(e,uD),m=(0,P.useMemo)(function(){return uY({breakAll:v.breakAll,children:v.children,maxLines:v.maxLines,scaleToFit:f,style:v.style,width:v.width})},[v.breakAll,v.children,v.maxLines,f,v.style,v.width]),b=v.dx,x=v.dy,_=v.angle,S=v.className,w=v.breakAll,O=uF(v,uG);if(!ap(n)||!ap(i))return null;var E=n+(af(b)?b:0),j=i+(af(x)?x:0);switch(void 0===d?"end":d){case"start":t=/*@__PURE__*/g(ut)("calc(".concat(s,")"));break;case"middle":t=/*@__PURE__*/g(ut)("calc(".concat((m.length-1)/2," * -").concat(u," + (").concat(s," / 2))"));break;default:t=/*@__PURE__*/g(ut)("calc(".concat(m.length-1," * -").concat(u,")"))}var k=[];if(f){var M=m[0].width,A=v.width;k.push("scale(".concat((af(A)?A/M:1)/M,")"))}return _&&k.push("rotate(".concat(_,", ").concat(E,", ").concat(j,")")),k.length&&(O.transform=k.join(" ")),/*@__PURE__*/g(P).createElement("text",uV({},aK(O,!0),{x:E,y:j,className:/*@__PURE__*/g(oF)("recharts-text",S),textAnchor:void 0===p?"start":p,fill:y.includes("url")?uU:y}),m.map(function(e,r){return /*@__PURE__*/g(P).createElement("tspan",{x:E,dy:0===r?t:u,key:r},e.words.join(w?"":" "))}))},uq={},uX={},uJ={},uZ=r2?r2.isConcatSpreadable:void 0;uJ=/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */function(e){return nX(e)||n6(e)||!!(uZ&&e&&e[uZ])},uX=/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */function e(t,r,n,o,i){var a=-1,u=t.length;for(n||(n=uJ),i||(i=[]);++a<u;){var l=t[a];r>0&&n(l)?r>1?e(l,r-1,n,o,i):nq(i,l):o||(i[i.length]=l)}return i};var u0={},u1={},u2={},u3={};u3=/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */function(e,t,r,n){var o=r.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var u=r[o];if(a&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<i;){var l=(u=r[o])[0],s=e[l],c=u[1];if(a&&u[2]){if(void 0===s&&!(l in e))return!1}else{var f=new rI;if(n)var p=n(s,c,l,e,t,f);if(!(void 0===p?rL(c,s,3,n,f):p))return!1}}return!0};var u4={},u5={};u5=/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */function(e){return e==e&&!nr(e)},u4=/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */function(e){for(var t=n3(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,u5(o)]}return t};var u6={};u6=/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function(e,t){return function(r){return null!=r&&r[e]===t&&(void 0!==t||e in Object(r))}},u2=/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */function(e){var t=u4(e);return 1==t.length&&t[0][2]?u6(t[0][0],t[0][1]):function(r){return r===e||u3(r,e,t)}};var u8={},u7={},u9={};u9=/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */function(e,t){return null!=e&&t in Object(e)};var le={};le=/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */function(e,t,r){t=iJ(t,e);for(var n=-1,o=t.length,i=!1;++n<o;){var a=ao(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&ou(o)&&on(a,o)&&(nX(e)||n6(e))},u7=/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */function(e,t){return null!=e&&le(e,t,u9)},u8=/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function(e,t){return iZ(e)&&u5(t)?u6(ao(e),t):function(r){var n=iq(r,e);return void 0===n&&n===t?u7(r,e):rL(t,n,3)}};var lt={};lt=/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */function(e){return e};var lr={},ln={};ln=/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function(e){return function(t){return null==t?void 0:t[e]}};var lo={};lo=/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function(e){return function(t){return iX(t,e)}},lr=/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */function(e){return iZ(e)?ln(ao(e)):lo(e)},u1=/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */function(e){return(// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
"function"==typeof e?e:null==e?lt:"object"==typeof e?nX(e)?u8(e[0],e[1]):u2(e):lr(e))};var li={},la={},lu={},ll={};ll=function(e,t,r){for(var n=-1,o=Object(e),i=r(e),a=i.length;a--;){var u=i[++n];if(!1===t(o[u],u,o))break}return e};a=lu=/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */function(e,t){return e&&ll(e,t,n3)},la=function(e,t){if(null==e)return e;if(!og(e))return a(e,t);for(var r=e.length,n=u?r:-1,o=Object(e);(u?n--:++n<r)&&!1!==t(o[n],n,o););return e},li=/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function(e,t){var r=-1,n=og(e)?Array(e.length):[];return la(e,function(e,o,i){n[++r]=t(e,o,i)}),n};var ls={};ls=/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e};var lc={},lf={};lf=/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */function(e,t){if(e!==t){var r=void 0!==e,n=null===e,o=e==e,i=i0(e),a=void 0!==t,u=null===t,l=t==t,s=i0(t);if(!u&&!s&&!i&&e>t||i&&a&&l&&!u&&!s||n&&a&&l||!r&&l||!o)return 1;if(!n&&!i&&!s&&e<t||s&&r&&o&&!n&&!i||u&&r&&o||!a&&o||!l)return -1}return 0},lc=/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */function(e,t,r){for(var n=-1,o=e.criteria,i=t.criteria,a=o.length,u=r.length;++n<a;){var l=lf(o[n],i[n]);if(l){if(n>=u)return l;return l*("desc"==r[n]?-1:1)}}// Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
// that causes it, under certain circumstances, to provide the same value for
// `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
// for more details.
//
// This also ensures a stable sort in V8 and other engines.
// See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
return e.index-t.index},u0=/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */function(e,t,r){t=t.length?ae(t,function(e){return nX(e)?function(t){return iX(t,1===e.length?e[0]:e)}:e}):[lt];var n=-1;t=ae(t,os(u1));var o=li(e,function(e,r,o){return{criteria:ae(t,function(t){return t(e)}),index:++n,value:e}});return ls(o,function(e,t){return lc(e,t,r)})};var lp={},ld={},lh={};lh=/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)};/* Built-in method references for those with the same name as other `lodash` methods. */var ly=Math.max;ld=/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */function(e,t,r){return t=ly(void 0===t?e.length-1:t,0),function(){for(var n=arguments,o=-1,i=ly(n.length-t,0),a=Array(i);++o<i;)a[o]=n[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=n[o];return u[t]=r(a),lh(e,this,u)}};var lv={},lm={},lg={};lg=/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */function(e){return function(){return e}};var lb={};lm=(lb=function(){try{var e=rJ(Object,"defineProperty");return e({},"",{}),e}catch(e){}}())?function(e,t){return lb(e,"toString",{configurable:!0,enumerable:!1,value:lg(t),writable:!0})}:lt;var lx=Date.now;l=lm,s=0,c=0,lv=function(){var e=lx(),t=16-(e-c);if(c=e,t>0){if(++s>=800)return arguments[0]}else s=0;return l.apply(void 0,arguments)},lp=/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */function(e,t){return lv(ld(e,t,lt),e+"")};var l_={};l_=/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */function(e,t,r){if(!nr(r))return!1;var n=typeof t;return("number"==n?!!(og(r)&&on(t,r.length)):"string"==n&&t in r)&&rF(r[t],e)},uq=lp(function(e,t){if(null==e)return[];var r=t.length;return r>1&&l_(e,t[0],t[1])?t=[]:r>2&&l_(t[0],t[1],t[2])&&(t=[t[0]]),u0(e,uX(t,1),[])});var lS={},lw={},lP={};lP=/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */function(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(o);++n<o;)i[n]=e[n+t];return i},lw=/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */function(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&r>=n?e:lP(e,t,r)};var lO={},lE=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");lO=/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */function(e){return lE.test(e)};var lj={},lk={};lk=/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */function(e){return e.split("")};var lM={},lA="\ud800-\udfff",lT="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",lC="\ud83c[\udffb-\udfff]",lL="[^"+lA+"]",lN="(?:\ud83c[\udde6-\uddff]){2}",lI="[\ud800-\udbff][\udc00-\udfff]",lR="(?:"+lT+"|"+lC+")?",lD="[\\ufe0e\\ufe0f]?",lG="(?:\\u200d(?:"+[lL,lN,lI].join("|")+")"+lD+lR+")*",lV=RegExp(lC+"(?="+lC+")|(?:"+[lL+lT+"?",lT,lN,lI,"["+lA+"]"].join("|")+")"+(lD+lR+lG),"g");lM=/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */function(e){return e.match(lV)||[]},lj=/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */function(e){return lO(e)?lM(e):lk(e)},lS=function(e){e=i7(e);var t=lO(e)?lj(e):void 0,r=t?t[0]:e.charAt(0),n=t?lw(t,1).join(""):e.slice(1);return r.toUpperCase()+n};var lF={},lz={};lz=/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */function(e,t,r){for(var n=-1,o=e.length;++n<o;){var i=e[n],a=t(i);if(null!=a&&(void 0===u?a==a&&!i0(a):r(a,u)))var u=a,l=i}return l};var lK={};lK=/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */function(e,t){return e>t},lF=/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */function(e){return e&&e.length?lz(e,lt,lK):void 0};var lQ={},lH={};lH=/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */function(e,t){return e<t},lQ=/**
 * Computes the minimum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => undefined
 */function(e){return e&&e.length?lz(e,lt,lH):void 0};var lW={},lB={};lB=/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */function(e,t){return(nX(e)?ae:li)(e,u1(t,3))},lW=/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [n, n];
 * }
 *
 * _.flatMap([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */function(e,t){return uX(lB(e,t),1)};var lY={};// `victory-vendor/d3-scale` (CommonJS)
// See upstream license: https://github.com/d3/d3-scale/blob/main/LICENSE
//
// This file only exists for tooling that doesn't work yet with package.json:exports
// by proxying through the CommonJS version.
lY=_("eTYpT");var lU={};// `victory-vendor/d3-shape` (CommonJS)
// See upstream license: https://github.com/d3/d3-shape/blob/main/LICENSE
//
// This file only exists for tooling that doesn't work yet with package.json:exports
// by proxying through the CommonJS version.
lU=_("CKTDO");var l$={};function lq(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}!function(e){/*
   *  decimal.js-light v2.5.1
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js-light
   *  Copyright (c) 2020 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Expat Licence
   */// -----------------------------------  EDITABLE DEFAULTS  ------------------------------------ //
// The limit on the value of `precision`, and on the value of the first argument to
// `toDecimalPlaces`, `toExponential`, `toFixed`, `toPrecision` and `toSignificantDigits`.
var t,r={// These values must be integers within the stated ranges (inclusive).
// Most of these values can be changed during run-time using `Decimal.config`.
// The maximum number of significant digits of the result of a calculation or base conversion.
// E.g. `Decimal.config({ precision: 20 });`
precision:20,// The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
// `toFixed`, `toPrecision` and `toSignificantDigits`.
//
// ROUND_UP         0 Away from zero.
// ROUND_DOWN       1 Towards zero.
// ROUND_CEIL       2 Towards +Infinity.
// ROUND_FLOOR      3 Towards -Infinity.
// ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
// ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
// ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
// ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
// ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
//
// E.g.
// `Decimal.rounding = 4;`
// `Decimal.rounding = Decimal.ROUND_HALF_UP;`
rounding:4,// The exponent value at and beneath which `toString` returns exponential notation.
// JavaScript numbers: -7
toExpNeg:-7,// The exponent value at and above which `toString` returns exponential notation.
// JavaScript numbers: 21
toExpPos:21,// The natural logarithm of 10.
// 115 digits
LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},n=!0,o="[DecimalError] ",i=o+"Invalid argument: ",a=o+"Exponent out of range: ",u=Math.floor,l=Math.pow,s=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,c=u(1286742750677284.5),f={};// Helper functions for Decimal.prototype (P) and/or Decimal methods, and their callers.
/*
   *  add                 P.minus, P.plus
   *  checkInt32          P.todp, P.toExponential, P.toFixed, P.toPrecision, P.tosd
   *  digitsToString      P.log, P.sqrt, P.pow, toString, exp, ln
   *  divide              P.div, P.idiv, P.log, P.mod, P.sqrt, exp, ln
   *  exp                 P.exp, P.pow
   *  getBase10Exponent   P.exponent, P.sd, P.toint, P.sqrt, P.todp, P.toFixed, P.toPrecision,
   *                      P.toString, divide, round, toString, exp, ln
   *  getLn10             P.log, ln
   *  getZeroString       digitsToString, toString
   *  ln                  P.log, P.ln, P.pow, exp
   *  parseDecimal        Decimal
   *  round               P.abs, P.idiv, P.log, P.minus, P.mod, P.neg, P.plus, P.toint, P.sqrt,
   *                      P.times, P.todp, P.toExponential, P.toFixed, P.pow, P.toPrecision, P.tosd,
   *                      divide, getLn10, exp, ln
   *  subtract            P.minus, P.plus
   *  toString            P.toExponential, P.toFixed, P.toPrecision, P.toString, P.valueOf
   *  truncate            P.pow
   *
   *  Throws:             P.log, P.mod, P.sd, P.sqrt, P.pow,  checkInt32, divide, round,
   *                      getLn10, exp, ln, parseDecimal, Decimal, config
   */function p(e,t){var r,o,i,a,u,l,s,c,f=e.constructor,p=f.precision;// If either is zero...
if(!e.s||!t.s)return t.s||(t=new f(e)),n?S(t,p):t;// If base 1e7 exponents differ...
if(s=e.d,c=t.d,// x and y are finite, non-zero numbers with the same sign.
u=e.e,i=t.e,s=s.slice(),a=u-i){for(a<0?(o=s,a=-a,l=c.length):(o=c,i=u,l=s.length),a>(l=// Limit number of zeros prepended to max(ceil(pr / LOG_BASE), len) + 1.
(u=Math.ceil(p/7))>l?u+1:l+1)&&(a=l,o.length=1),// Prepend zeros to equalise exponents. Note: Faster to use reverse then do unshifts.
o.reverse();a--;)o.push(0);o.reverse()}// Only start adding at yd.length - 1 as the further digits of xd can be left as they are.
for((l=s.length)-(a=c.length)<0&&(a=l,o=c,c=s,s=o),r=0;a;)r=(s[--a]=s[a]+c[a]+r)/1e7|0,s[a]%=1e7;// Remove trailing zeros.
// No need to check for zero, as +x + +y != 0 && -x + -y != 0
for(r&&(s.unshift(r),++i),l=s.length;0==s[--l];)s.pop();return t.d=s,t.e=i,n?S(t,p):t}function d(e,t,r){if(e!==~~e||e<t||e>r)throw Error(i+e)}function h(e){var t,r,n,o=e.length-1,i="",a=e[0];if(o>0){for(i+=a,t=1;t<o;t++)(r=7-(n=e[t]+"").length)&&(i+=b(r)),i+=n;(r=7-(n=(a=e[t])+"").length)&&(i+=b(r))}else if(0===a)return"0";// Remove trailing zeros of last w.
for(;a%10==0;)a/=10;return i+a}// Decimal prototype methods
/*
   *  absoluteValue                       abs
   *  comparedTo                          cmp
   *  decimalPlaces                       dp
   *  dividedBy                           div
   *  dividedToIntegerBy                  idiv
   *  equals                              eq
   *  exponent
   *  greaterThan                         gt
   *  greaterThanOrEqualTo                gte
   *  isInteger                           isint
   *  isNegative                          isneg
   *  isPositive                          ispos
   *  isZero
   *  lessThan                            lt
   *  lessThanOrEqualTo                   lte
   *  logarithm                           log
   *  minus                               sub
   *  modulo                              mod
   *  naturalExponential                  exp
   *  naturalLogarithm                    ln
   *  negated                             neg
   *  plus                                add
   *  precision                           sd
   *  squareRoot                          sqrt
   *  times                               mul
   *  toDecimalPlaces                     todp
   *  toExponential
   *  toFixed
   *  toInteger                           toint
   *  toNumber
   *  toPower                             pow
   *  toPrecision
   *  toSignificantDigits                 tosd
   *  toString
   *  valueOf                             val
   *//*
   * Return a new Decimal whose value is the absolute value of this Decimal.
   *
   */f.absoluteValue=f.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e},/*
   * Return
   *   1    if the value of this Decimal is greater than the value of `y`,
   *  -1    if the value of this Decimal is less than the value of `y`,
   *   0    if they have the same value
   *
   */f.comparedTo=f.cmp=function(e){var t,r,n,o;// Signs differ?
if(e=new this.constructor(e),this.s!==e.s)return this.s||-e.s;// Compare exponents.
if(this.e!==e.e)return this.e>e.e^this.s<0?1:-1;// Compare digit by digit.
for(t=0,r=(n=this.d.length)<(o=e.d.length)?n:o;t<r;++t)if(this.d[t]!==e.d[t])return this.d[t]>e.d[t]^this.s<0?1:-1;// Compare lengths.
return n===o?0:n>o^this.s<0?1:-1},/*
   * Return the number of decimal places of the value of this Decimal.
   *
   */f.decimalPlaces=f.dp=function(){var e=this.d.length-1,t=(e-this.e)*7;if(// Subtract the number of trailing zeros of the last word.
e=this.d[e])for(;e%10==0;e/=10)t--;return t<0?0:t},/*
   * Return a new Decimal whose value is the value of this Decimal divided by `y`, truncated to
   * `precision` significant digits.
   *
   */f.dividedBy=f.div=function(e){return y(this,new this.constructor(e))},/*
   * Return a new Decimal whose value is the integer part of dividing the value of this Decimal
   * by the value of `y`, truncated to `precision` significant digits.
   *
   */f.dividedToIntegerBy=f.idiv=function(e){var t=this.constructor;return S(y(this,new t(e),0,1),t.precision)},/*
   * Return true if the value of this Decimal is equal to the value of `y`, otherwise return false.
   *
   */f.equals=f.eq=function(e){return!this.cmp(e)},/*
   * Return the (base 10) exponent value of this Decimal (this.e is the base 10000000 exponent).
   *
   */f.exponent=function(){return m(this)},/*
   * Return true if the value of this Decimal is greater than the value of `y`, otherwise return
   * false.
   *
   */f.greaterThan=f.gt=function(e){return this.cmp(e)>0},/*
   * Return true if the value of this Decimal is greater than or equal to the value of `y`,
   * otherwise return false.
   *
   */f.greaterThanOrEqualTo=f.gte=function(e){return this.cmp(e)>=0},/*
   * Return true if the value of this Decimal is an integer, otherwise return false.
   *
   */f.isInteger=f.isint=function(){return this.e>this.d.length-2},/*
   * Return true if the value of this Decimal is negative, otherwise return false.
   *
   */f.isNegative=f.isneg=function(){return this.s<0},/*
   * Return true if the value of this Decimal is positive, otherwise return false.
   *
   */f.isPositive=f.ispos=function(){return this.s>0},/*
   * Return true if the value of this Decimal is 0, otherwise return false.
   *
   */f.isZero=function(){return 0===this.s},/*
   * Return true if the value of this Decimal is less than `y`, otherwise return false.
   *
   */f.lessThan=f.lt=function(e){return 0>this.cmp(e)},/*
   * Return true if the value of this Decimal is less than or equal to `y`, otherwise return false.
   *
   */f.lessThanOrEqualTo=f.lte=function(e){return 1>this.cmp(e)},/*
   * Return the logarithm of the value of this Decimal to the specified base, truncated to
   * `precision` significant digits.
   *
   * If no base is specified, return log[10](x).
   *
   * log[base](x) = ln(x) / ln(base)
   *
   * The maximum error of the result is 1 ulp (unit in the last place).
   *
   * [base] {number|string|Decimal} The base of the logarithm.
   *
   */f.logarithm=f.log=function(e){var r,i=this.constructor,a=i.precision,u=a+5;// Default base is 10.
if(void 0===e)e=new i(10);else // log[-b](x) = NaN
// log[0](x)  = NaN
// log[1](x)  = NaN
if((e=new i(e)).s<1||e.eq(t))throw Error(o+"NaN");// log[b](-x) = NaN
// log[b](0) = -Infinity
if(this.s<1)throw Error(o+(this.s?"NaN":"-Infinity"));return(// log[b](1) = 0
this.eq(t)?new i(0):(n=!1,r=y(x(this,u),x(e,u),u),n=!0,S(r,a)))},/*
   * Return a new Decimal whose value is the value of this Decimal minus `y`, truncated to
   * `precision` significant digits.
   *
   */f.minus=f.sub=function(e){return e=new this.constructor(e),this.s==e.s?w(this,e):p(this,(e.s=-e.s,e))},/*
   * Return a new Decimal whose value is the value of this Decimal modulo `y`, truncated to
   * `precision` significant digits.
   *
   */f.modulo=f.mod=function(e){var t,r=this.constructor,i=r.precision;// x % 0 = NaN
if(!(e=new r(e)).s)throw Error(o+"NaN");return(// Return x if x is 0.
this.s?(// Prevent rounding of intermediate calculations.
n=!1,t=y(this,e,0,1).times(e),n=!0,this.minus(t)):S(new r(this),i))},/*
   * Return a new Decimal whose value is the natural exponential of the value of this Decimal,
   * i.e. the base e raised to the power the value of this Decimal, truncated to `precision`
   * significant digits.
   *
   */f.naturalExponential=f.exp=function(){return v(this)},/*
   * Return a new Decimal whose value is the natural logarithm of the value of this Decimal,
   * truncated to `precision` significant digits.
   *
   */f.naturalLogarithm=f.ln=function(){return x(this)},/*
   * Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by
   * -1.
   *
   */f.negated=f.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e},/*
   * Return a new Decimal whose value is the value of this Decimal plus `y`, truncated to
   * `precision` significant digits.
   *
   */f.plus=f.add=function(e){return e=new this.constructor(e),this.s==e.s?p(this,e):w(this,(e.s=-e.s,e))},/*
   * Return the number of significant digits of the value of this Decimal.
   *
   * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
   *
   */f.precision=f.sd=function(e){var t,r,n;if(void 0!==e&&!!e!==e&&1!==e&&0!==e)throw Error(i+e);// If non-zero...
if(t=m(this)+1,r=7*(n=this.d.length-1)+1,n=this.d[n]){// Subtract the number of trailing zeros of the last word.
for(;n%10==0;n/=10)r--;// Add the number of digits of the first word.
for(n=this.d[0];n>=10;n/=10)r++}return e&&t>r?t:r},/*
   * Return a new Decimal whose value is the square root of this Decimal, truncated to `precision`
   * significant digits.
   *
   */f.squareRoot=f.sqrt=function(){var e,t,r,i,a,l,s,c=this.constructor;// Negative or zero?
if(this.s<1){if(!this.s)return new c(0);// sqrt(-x) = NaN
throw Error(o+"NaN")}// Newton-Raphson iteration.
for(e=m(this),n=!1,0==// Initial estimate.
(a=Math.sqrt(+this))||a==1/0?(((t=h(this.d)).length+e)%2==0&&(t+="0"),a=Math.sqrt(t),e=u((e+1)/2)-(e<0||e%2),t=a==1/0?"5e"+e:(t=a.toExponential()).slice(0,t.indexOf("e")+1)+e,i=new c(t)):i=new c(a.toString()),a=s=(r=c.precision)+3;;)if(i=(l=i).plus(y(this,l,s+2)).times(.5),h(l.d).slice(0,s)===(t=h(i.d)).slice(0,s)){// The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or
// 4999, i.e. approaching a rounding boundary, continue the iteration.
if(t=t.slice(s-3,s+1),a==s&&"4999"==t){if(// On the first iteration only, check to see if rounding up gives the exact result as the
// nines may infinitely repeat.
S(l,r+1,0),l.times(l).eq(this)){i=l;break}}else if("9999"!=t)break;s+=4}return n=!0,S(i,r)},/*
   * Return a new Decimal whose value is the value of this Decimal times `y`, truncated to
   * `precision` significant digits.
   *
   */f.times=f.mul=function(e){var t,r,o,i,a,u,l,s,c,f=this.constructor,p=this.d,d=(e=new f(e)).d;// Return 0 if either is 0.
if(!this.s||!e.s)return new f(0);for(e.s*=this.s,r=this.e+e.e,(s=p.length)<(c=d.length)&&(a=p,p=d,d=a,u=s,s=c,c=u),// Initialise the result array with zeros.
a=[],o=u=s+c;o--;)a.push(0);// Multiply!
for(o=c;--o>=0;){for(t=0,i=s+o;i>o;)l=a[i]+d[o]*p[i-o-1]+t,a[i--]=l%1e7|0,t=l/1e7|0;a[i]=(a[i]+t)%1e7|0}// Remove trailing zeros.
for(;!a[--u];)a.pop();return t?++r:a.shift(),e.d=a,e.e=r,n?S(e,f.precision):e},/*
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `dp`
   * decimal places using rounding mode `rm` or `rounding` if `rm` is omitted.
   *
   * If `dp` is omitted, return a new Decimal whose value is the value of this Decimal.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */f.toDecimalPlaces=f.todp=function(e,t){var r=this,n=r.constructor;return(r=new n(r),void 0===e)?r:(d(e,0,1e9),void 0===t?t=n.rounding:d(t,0,8),S(r,e+m(r)+1,t))},/*
   * Return a string representing the value of this Decimal in exponential notation rounded to
   * `dp` fixed decimal places using rounding mode `rounding`.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */f.toExponential=function(e,t){var r,n=this,o=n.constructor;return void 0===e?r=P(n,!0):(d(e,0,1e9),void 0===t?t=o.rounding:d(t,0,8),r=P(n=S(new o(n),e+1,t),!0,e+1)),r},/*
   * Return a string representing the value of this Decimal in normal (fixed-point) notation to
   * `dp` fixed decimal places and rounded using rounding mode `rm` or `rounding` if `rm` is
   * omitted.
   *
   * As with JavaScript numbers, (-0).toFixed(0) is '0', but e.g. (-0.00001).toFixed(0) is '-0'.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
   * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
   * (-0).toFixed(3) is '0.000'.
   * (-0.5).toFixed(0) is '-0'.
   *
   */f.toFixed=function(e,t){var r,n,o=this.constructor;return void 0===e?P(this):(d(e,0,1e9),void 0===t?t=o.rounding:d(t,0,8),r=P((n=S(new o(this),e+m(this)+1,t)).abs(),!1,e+m(n)+1),this.isneg()&&!this.isZero()?"-"+r:r)},/*
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number using
   * rounding mode `rounding`.
   *
   */f.toInteger=f.toint=function(){var e=this.constructor;return S(new e(this),m(this)+1,e.rounding)},/*
   * Return the value of this Decimal converted to a number primitive.
   *
   */f.toNumber=function(){return+this},/*
   * Return a new Decimal whose value is the value of this Decimal raised to the power `y`,
   * truncated to `precision` significant digits.
   *
   * For non-integer or very large exponents pow(x, y) is calculated using
   *
   *   x^y = exp(y*ln(x))
   *
   * The maximum error is 1 ulp (unit in last place).
   *
   * y {number|string|Decimal} The power to which to raise this Decimal.
   *
   */f.toPower=f.pow=function(e){var r,i,a,l,s,c,f=this,p=f.constructor,d=+(e=new p(e));// pow(x, 0) = 1
if(!e.s)return new p(t);// pow(0, y > 0) = 0
// pow(0, y < 0) = Infinity
if(!(f=new p(f)).s){if(e.s<1)throw Error(o+"Infinity");return f}// pow(1, y) = 1
if(f.eq(t))return f;// pow(x, 1) = x
if(a=p.precision,e.eq(t))return S(f,a);if(c=(r=e.e)>=(i=e.d.length-1),s=f.s,c){if((i=d<0?-d:d)<=9007199254740991){for(l=new p(t),// Max k of 9007199254740991 takes 53 loop iterations.
// Maximum digits array length; leaves [28, 34] guard digits.
r=Math.ceil(a/7+4),n=!1;i%2&&O((l=l.times(f)).d,r),0!==(i=u(i/2));)O((f=f.times(f)).d,r);return n=!0,e.s<0?new p(t).div(l):S(l,a)}}else // pow(x < 0, y non-integer) = NaN
if(s<0)throw Error(o+"NaN");return(// Result is negative if x is negative and the last digit of integer y is odd.
s=s<0&&1&e.d[Math.max(r,i)]?-1:1,f.s=1,n=!1,l=e.times(x(f,a+12)),n=!0,(l=v(l)).s=s,l)},/*
   * Return a string representing the value of this Decimal rounded to `sd` significant digits
   * using rounding mode `rounding`.
   *
   * Return exponential notation if `sd` is less than the number of digits necessary to represent
   * the integer part of the value in normal notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */f.toPrecision=function(e,t){var r,n,o=this,i=o.constructor;return void 0===e?(r=m(o),n=P(o,r<=i.toExpNeg||r>=i.toExpPos)):(d(e,1,1e9),void 0===t?t=i.rounding:d(t,0,8),r=m(o=S(new i(o),e,t)),n=P(o,e<=r||r<=i.toExpNeg,e)),n},/*
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `sd`
   * significant digits using rounding mode `rm`, or to `precision` and `rounding` respectively if
   * omitted.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */f.toSignificantDigits=f.tosd=function(e,t){var r=this.constructor;return void 0===e?(e=r.precision,t=r.rounding):(d(e,1,1e9),void 0===t?t=r.rounding:d(t,0,8)),S(new r(this),e,t)},/*
   * Return a string representing the value of this Decimal.
   *
   * Return exponential notation if this Decimal has a positive exponent equal to or greater than
   * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
   *
   */f.toString=f.valueOf=f.val=f.toJSON=function(){var e=m(this),t=this.constructor;return P(this,e<=t.toExpNeg||e>=t.toExpPos)};var y=function(){// Assumes non-zero x and k, and hence non-zero result.
function e(e,t){var r,n=0,o=e.length;for(e=e.slice();o--;)r=e[o]*t+n,e[o]=r%1e7|0,n=r/1e7|0;return n&&e.unshift(n),e}function t(e,t,r,n){var o,i;if(r!=n)i=r>n?1:-1;else for(o=i=0;o<r;o++)if(e[o]!=t[o]){i=e[o]>t[o]?1:-1;break}return i}function r(e,t,r){// Subtract b from a.
for(var n=0;r--;)e[r]-=n,n=e[r]<t[r]?1:0,e[r]=1e7*n+e[r]-t[r];// Remove leading zeros.
for(;!e[0]&&e.length>1;)e.shift()}return function(n,i,a,u){var l,s,c,f,p,d,h,y,v,g,b,x,_,w,P,O,E,j,k=n.constructor,M=n.s==i.s?1:-1,A=n.d,T=i.d;// Either 0?
if(!n.s)return new k(n);if(!i.s)throw Error(o+"Division by zero");// Result exponent may be one less than e.
for(c=0,s=n.e-i.e,E=T.length,P=A.length,y=(h=new k(M)).d=[];T[c]==(A[c]||0);)++c;if(T[c]>(A[c]||0)&&--s,(x=null==a?a=k.precision:u?a+(m(n)-m(i))+1:a)<0)return new k(0);// divisor < 1e7
if(// Convert precision in number of base 10 digits to base 1e7 digits.
x=x/7+2|0,c=0,1==E)// k is the carry.
for(f=0,T=T[0],x++;(c<P||f)&&x--;c++)_=1e7*f+(A[c]||0),y[c]=_/T|0,f=_%T|0;else{// Add zeros to make remainder as long as divisor.
for(// Normalise xd and yd so highest order digit of yd is >= BASE/2
(f=1e7/(T[0]+1)|0)>1&&(T=e(T,f),A=e(A,f),E=T.length,P=A.length),w=E,g=(v=A.slice(0,E)).length;g<E;)v[g++]=0;(j=T.slice()).unshift(0),O=T[0],T[1]>=1e7/2&&++O;do f=0,// Compare divisor and remainder.
(l=t(T,v,E,g))<0?(// Calculate trial digit, k.
b=v[0],E!=g&&(b=1e7*b+(v[1]||0)),// k will be how many times the divisor goes into the current remainder.
(f=b/O|0)>1?(f>=1e7&&(f=1e7-1),d=// product = divisor * trial digit.
(p=e(T,f)).length,g=v.length,1==// Compare product and remainder.
(l=t(p,v,d,g))&&(f--,// Subtract divisor from product.
r(p,E<d?j:T,d))):(0==f&&(l=f=1),p=T.slice()),(d=p.length)<g&&p.unshift(0),// Subtract product from remainder.
r(v,p,g),-1==l&&(g=v.length,// Compare divisor and new remainder.
(l=t(T,v,E,g))<1&&(f++,// Subtract divisor from remainder.
r(v,E<g?j:T,g))),g=v.length):0===l&&(f++,v=[0]),// Add the next digit, k, to the result array.
y[c++]=f,l&&v[0]?v[g++]=A[w]||0:(v=[A[w]],g=1);while((w++<P||void 0!==v[0])&&x--)}return y[0]||y.shift(),h.e=s,S(h,u?a+m(h)+1:a)}}();/*
   * Return a new Decimal whose value is the natural exponential of `x` truncated to `sd`
   * significant digits.
   *
   * Taylor/Maclaurin series.
   *
   * exp(x) = x^0/0! + x^1/1! + x^2/2! + x^3/3! + ...
   *
   * Argument reduction:
   *   Repeat x = x / 32, k += 5, until |x| < 0.1
   *   exp(x) = exp(x / 2^k)^(2^k)
   *
   * Previously, the argument was initially reduced by
   * exp(x) = exp(r) * 10^k  where r = x - k * ln10, k = floor(x / ln10)
   * to first put r in the range [0, ln10], before dividing by 32 until |x| < 0.1, but this was
   * found to be slower than just dividing repeatedly by 32 as above.
   *
   * (Math object integer min/max: Math.exp(709) = 8.2e+307, Math.exp(-745) = 5e-324)
   *
   *  exp(x) is non-terminating for any finite, non-zero x.
   *
   */function v(e,r){var o,i,u,s,c,f=0,p=0,d=e.constructor,v=d.precision;if(m(e)>16)throw Error(a+m(e));// exp(0) = 1
if(!e.s)return new d(t);for(null==r?(n=!1,c=v):c=r,s=new d(.03125);e.abs().gte(.1);)e=e.times(s),p+=5;for(c+=Math.log(l(2,p))/Math.LN10*2+5|0,o=i=u=new d(t),d.precision=c;;){if(i=S(i.times(e),c),o=o.times(++f),h((s=u.plus(y(i,o,c))).d).slice(0,c)===h(u.d).slice(0,c)){for(;p--;)u=S(u.times(u),c);return d.precision=v,null==r?(n=!0,S(u,v)):u}u=s}}// Calculate the base 10 exponent from the base 1e7 exponent.
function m(e){// Add the number of digits of the first word of the digits array.
for(var t=7*e.e,r=e.d[0];r>=10;r/=10)t++;return t}function g(e,t,r){if(t>e.LN10.sd())throw(// Reset global state in case the exception is caught.
n=!0,r&&(e.precision=r),Error(o+"LN10 precision limit exceeded"));return S(new e(e.LN10),t)}function b(e){for(var t="";e--;)t+="0";return t}/*
   * Return a new Decimal whose value is the natural logarithm of `x` truncated to `sd` significant
   * digits.
   *
   *  ln(n) is non-terminating (n != 1)
   *
   */function x(e,r){var i,a,u,l,s,c,f,p,d,v=1,b=e,_=b.d,w=b.constructor,P=w.precision;// ln(-x) = NaN
// ln(0) = -Infinity
if(b.s<1)throw Error(o+(b.s?"NaN":"-Infinity"));// ln(1) = 0
if(b.eq(t))return new w(0);if(null==r?(n=!1,p=P):p=r,b.eq(10))return null==r&&(n=!0),g(w,p);if(p+=10,w.precision=p,a=(i=h(_)).charAt(0),!(15e14>Math.abs(l=m(b))))return(// The argument reduction method above may result in overflow if the argument y is a massive
// number with exponent >= 1500000000000000 (9e15 / 6 = 1.5e15), so instead recall this
// function using ln(x*10^e) = ln(x) + e*ln(10).
f=g(w,p+2,P).times(l+""),b=x(new w(a+"."+i.slice(1)),p-10).plus(f),w.precision=P,null==r?(n=!0,S(b,P)):b);// Argument reduction.
// The series converges faster the closer the argument is to 1, so using
// ln(a^b) = b * ln(a),   ln(a) = ln(a^b) / b
// multiply the argument by itself until the leading digits of the significand are 7, 8, 9,
// 10, 11, 12 or 13, recording the number of multiplications so the sum of the series can
// later be divided by this number, then separate out the power of 10 using
// ln(a*10^b) = ln(a) + b*ln(10).
// max n is 21 (gives 0.9, 1.0 or 1.1) (9e15 / 21 = 4.2e14).
//while (c0 < 9 && c0 != 1 || c0 == 1 && c.charAt(1) > 1) {
// max n is 6 (gives 0.7 - 1.3)
for(;a<7&&1!=a||1==a&&i.charAt(1)>3;)a=(i=h((b=b.times(e)).d)).charAt(0),v++;for(l=m(b),a>1?(b=new w("0."+i),l++):b=new w(a+"."+i.slice(1)),// x is reduced to a value near 1.
// Taylor series.
// ln(y) = ln((1 + x)/(1 - x)) = 2(x + x^3/3 + x^5/5 + x^7/7 + ...)
// where x = (y - 1)/(y + 1)    (|x| < 1)
c=s=b=y(b.minus(t),b.plus(t),p),d=S(b.times(b),p),u=3;;){if(s=S(s.times(d),p),h((f=c.plus(y(s,new w(u),p))).d).slice(0,p)===h(c.d).slice(0,p))return c=c.times(2),0!==l&&(c=c.plus(g(w,p+2,P).times(l+""))),c=y(c,new w(v),p),w.precision=P,null==r?(n=!0,S(c,P)):c;c=f,u+=2}}/*
   * Parse the value of a new Decimal `x` from string `str`.
   */function _(e,t){var r,o,i;// Determine leading zeros.
for((r=t.indexOf("."))>-1&&(t=t.replace(".","")),(o=t.search(/e/i))>0?(r<0&&(r=o),r+=+t.slice(o+1),t=t.substring(0,o)):r<0&&(r=t.length),o=0;48===t.charCodeAt(o);)++o;// Determine trailing zeros.
for(i=t.length;48===t.charCodeAt(i-1);)--i;if(t=t.slice(o,i)){if(i-=o,r=r-o-1,e.e=u(r/7),e.d=[],// Transform base
// e is the base 10 exponent.
// i is where to slice str to get the first word of the digits array.
o=(r+1)%7,r<0&&(o+=7),o<i){for(o&&e.d.push(+t.slice(0,o)),i-=7;o<i;)e.d.push(+t.slice(o,o+=7));o=7-(t=t.slice(o)).length}else o-=i;for(;o--;)t+="0";if(e.d.push(+t),n&&(e.e>c||e.e<-c))throw Error(a+r)}else // Zero.
e.s=0,e.e=0,e.d=[0];return e}/*
   * Round `x` to `sd` significant digits, using rounding mode `rm` if present (truncate otherwise).
   */function S(e,t,r){var o,i,s,f,p,d,h,y,v=e.d;// rd: the rounding digit, i.e. the digit after the digit that may be rounded up.
// w: the word of xd which contains the rounding digit, a base 1e7 number.
// xdi: the index of w within xd.
// n: the number of digits of w.
// i: what would be the index of rd within w if all the numbers were 7 digits long (i.e. if
// they had leading zeros)
// j: if > 0, the actual index of rd within w (if < 0, rd is a leading zero).
// Get the length of the first word of the digits array xd.
for(f=1,s=v[0];s>=10;s/=10)f++;// Is the rounding digit in the first word of xd?
if((o=t-f)<0)o+=7,i=t,h=v[y=0];else{if((y=Math.ceil((o+1)/7))>=(s=v.length))return e;// Get the number of digits of w.
for(f=1,h=s=v[y];s>=10;s/=10)f++;// Get the index of rd within w.
o%=7,// Get the index of rd within w, adjusted for leading zeros.
// The number of leading zeros of w is given by LOG_BASE - n.
i=o-7+f}if(void 0!==r&&(// Get the rounding digit at index j of w.
p=h/(s=l(10,f-i-1))%10|0,// Are there any non-zero digits after the rounding digit?
d=t<0||void 0!==v[y+1]||h%s,// The expression `w % mathpow(10, n - j - 1)` returns all the digits of w to the right of the
// digit at (left-to-right) index j, e.g. if w is 908714 and j is 2, the expression will give
// 714.
d=r<4?(p||d)&&(0==r||r==(e.s<0?3:2)):p>5||5==p&&(4==r||d||6==r&&(o>0?i>0?h/l(10,f-i):0:v[y-1])%10&1||r==(e.s<0?8:7))),t<1||!v[0])return d?(s=m(e),v.length=1,// Convert sd to decimal places.
t=t-s-1,// 1, 0.1, 0.01, 0.001, 0.0001 etc.
v[0]=l(10,(7-t%7)%7),e.e=u(-t/7)||0):(v.length=1,// Zero.
v[0]=e.e=e.s=0),e;if(0==o?(v.length=y,s=1,y--):(v.length=y+1,s=l(10,7-o),// E.g. 56700 becomes 56000 if 7 is the rounding digit.
// j > 0 means i > number of leading zeros of w.
v[y]=i>0?(h/l(10,f-i)%l(10,i)|0)*s:0),d)for(;;)if(0==y){1e7==(v[0]+=s)&&(v[0]=1,++e.e);break}else{if(v[y]+=s,1e7!=v[y])break;v[y--]=0,s=1}// Remove trailing zeros.
for(o=v.length;0===v[--o];)v.pop();if(n&&(e.e>c||e.e<-c))throw Error(a+m(e));return e}function w(e,t){var r,o,i,a,u,l,s,c,f,p,d=e.constructor,h=d.precision;// Return y negated if x is zero.
// Return x if y is zero and x is non-zero.
if(!e.s||!t.s)return t.s?t.s=-t.s:t=new d(e),n?S(t,h):t;// If exponents differ...
if(s=e.d,p=t.d,// x and y are non-zero numbers with the same sign.
o=t.e,c=e.e,s=s.slice(),u=c-o){for((f=u<0)?(r=s,u=-u,l=p.length):(r=p,o=c,l=s.length),u>// Numbers with massively different exponents would result in a very high number of zeros
// needing to be prepended, but this can be avoided while still ensuring correct rounding by
// limiting the number of zeros to `Math.ceil(pr / LOG_BASE) + 2`.
(i=Math.max(Math.ceil(h/7),l)+2)&&(u=i,r.length=1),// Prepend zeros to equalise exponents.
r.reverse(),i=u;i--;)r.push(0);r.reverse();// Base 1e7 exponents equal.
}else{for((f=// Check digits to determine which is the bigger number.
(i=s.length)<(l=p.length))&&(l=i),i=0;i<l;i++)if(s[i]!=p[i]){f=s[i]<p[i];break}u=0}// Append zeros to xd if shorter.
// Don't add zeros to yd if shorter as subtraction only needs to start at yd length.
for(f&&(r=s,s=p,p=r,t.s=-t.s),l=s.length,i=p.length-l;i>0;--i)s[l++]=0;// Subtract yd from xd.
for(i=p.length;i>u;){if(s[--i]<p[i]){for(a=i;a&&0===s[--a];)s[a]=1e7-1;--s[a],s[i]+=1e7}s[i]-=p[i]}// Remove trailing zeros.
for(;0===s[--l];)s.pop();// Remove leading zeros and adjust exponent accordingly.
for(;0===s[0];s.shift())--o;return(// Zero?
s[0]?(t.d=s,t.e=o,n?S(t,h):t):new d(0))}function P(e,t,r){var n,o=m(e),i=h(e.d),a=i.length;return t?(r&&(n=r-a)>0?i=i.charAt(0)+"."+i.slice(1)+b(n):a>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(o<0?"e":"e+")+o):o<0?(i="0."+b(-o-1)+i,r&&(n=r-a)>0&&(i+=b(n))):o>=a?(i+=b(o+1-a),r&&(n=r-o-1)>0&&(i=i+"."+b(n))):((n=o+1)<a&&(i=i.slice(0,n)+"."+i.slice(n)),r&&(n=r-a)>0&&(o+1===a&&(i+="."),i+=b(n))),e.s<0?"-"+i:i}// Does not strip trailing zeros.
function O(e,t){if(e.length>t)return e.length=t,!0}/*
   * Configure global settings for a Decimal constructor.
   *
   * `obj` is an object with one or more of the following properties,
   *
   *   precision  {number}
   *   rounding   {number}
   *   toExpNeg   {number}
   *   toExpPos   {number}
   *
   * E.g. Decimal.config({ precision: 20, rounding: 4 })
   *
   */function E(e){if(!e||"object"!=typeof e)throw Error(o+"Object expected");var t,r,n,a=["precision",1,1e9,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<a.length;t+=3)if(void 0!==(n=e[r=a[t]])){if(u(n)===n&&n>=a[t+1]&&n<=a[t+2])this[r]=n;else throw Error(i+r+": "+n)}if(void 0!==(n=e[r="LN10"])){if(n==Math.LN10)this[r]=new this(n);else throw Error(i+r+": "+n)}return this}// Create and configure initial Decimal constructor.
(r=// Decimal methods
/*
   *  clone
   *  config/set
   *//*
   * Create and return a Decimal constructor with the same configuration properties as this Decimal
   * constructor.
   *
   */function e(t){var r,n,o;/*
     * The Decimal constructor and exported function.
     * Return a new Decimal instance.
     *
     * value {number|string|Decimal} A numeric value.
     *
     */function a(e){// Decimal called without new.
if(!(this instanceof a))return new a(e);// Duplicate.
if(// Retain a reference to this Decimal constructor, and shadow Decimal.prototype.constructor
// which points to Object.
this.constructor=a,e instanceof a){this.s=e.s,this.e=e.e,this.d=(e=e.d)?e.slice():e;return}if("number"==typeof e){// Reject Infinity/NaN.
if(0*e!=0)throw Error(i+e);if(e>0)this.s=1;else if(e<0)e=-e,this.s=-1;else{this.s=0,this.e=0,this.d=[0];return}// Fast path for small integers.
if(e===~~e&&e<1e7){this.e=0,this.d=[e];return}return _(this,e.toString())}if("string"!=typeof e)throw Error(i+e);if(45===e.charCodeAt(0)?(e=e.slice(1),this.s=-1):this.s=1,s.test(e))_(this,e);else throw Error(i+e)}if(a.prototype=f,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=e,a.config=a.set=E,void 0===t&&(t={}),t)for(r=0,o=["precision","rounding","toExpNeg","toExpPos","LN10"];r<o.length;)t.hasOwnProperty(n=o[r++])||(t[n]=this[n]);return a.config(t),a}(r)).default=r.Decimal=r,// Internal constant.
t=new r(1),"function"==typeof define&&define.amd?define(function(){return r}):l$?l$=r:(e||(e="undefined"!=typeof self&&self&&self.self==self?self:Function("return this")()),e.Decimal=r)}(l$);var lX=function(e){return e},lJ={},lZ=function(e){return e===lJ},l0=function(e){return function t(){return 0==arguments.length||1==arguments.length&&lZ(arguments.length<=0?void 0:arguments[0])?t:e.apply(void 0,arguments)}},l1=function(e){return function e(t,r){return 1===t?r:l0(function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];var a=o.filter(function(e){return e!==lJ}).length;return a>=t?r.apply(void 0,o):e(t-a,l0(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=o.map(function(e){return lZ(e)?t.shift():e});return r.apply(void 0,((function(e){if(Array.isArray(e))return lq(e)})(i)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(i)||function(e,t){if(e){if("string"==typeof e)return lq(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return lq(e,t)}}(i)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).concat(t))}))})}(e.length,e)},l2=function(e,t){for(var r=[],n=e;n<t;++n)r[n-e]=n;return r},l3=l1(function(e,t){return Array.isArray(t)?t.map(e):Object.keys(t).map(function(e){return t[e]}).map(e)}),l4=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];if(!t.length)return lX;var n=t.reverse(),o=n[0],i=n.slice(1);// first function can receive multiply arguments
return function(){return i.reduce(function(e,t){return t(e)},o.apply(void 0,arguments))}},l5=function(e){return Array.isArray(e)?e.reverse():e.split("").reverse.join("")},l6=function(e){var t=null,r=null;return function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return t&&o.every(function(e,r){return e===t[r]})?r:(t=o,r=e.apply(void 0,o))}},l8={rangeStep:/**
 * 按照固定的步长获取[start, end)这个区间的数据
 * 并且需要处理js计算精度的问题
 *
 * @param  {Decimal} start 起点
 * @param  {Decimal} end   终点，不包含该值
 * @param  {Decimal} step  步长
 * @return {Array}         若干数值
 */function(e,t,r){for(var n=new/*@__PURE__*/(g(l$))(e),o=0,i=[];n.lt(t)&&o<1e5;)i.push(n.toNumber()),n=n.add(r),o++;return i},getDigitCount:/**
 * @fileOverview 一些公用的运算方法
 * @author xile611
 * @date 2015-09-17
 *//**
 * 获取数值的位数
 * 其中绝对值属于区间[0.1, 1)， 得到的值为0
 * 绝对值属于区间[0.01, 0.1)，得到的位数为 -1
 * 绝对值属于区间[0.001, 0.01)，得到的位数为 -2
 *
 * @param  {Number} value 数值
 * @return {Integer} 位数
 */function(e){return 0===e?1:Math.floor(new/*@__PURE__*/(g(l$))(e).abs().log(10).toNumber())+1},interpolateNumber:l1(function(e,t,r){var n=+e;return n+r*(+t-n)}),uninterpolateNumber:l1(function(e,t,r){var n=t-+e;return(r-e)/(n=n||1/0)}),uninterpolateTruncation:l1(function(e,t,r){var n=t-+e;return Math.max(0,Math.min(1,(r-e)/(n=n||1/0)))})};function l7(e){return function(e){if(Array.isArray(e))return st(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||se(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l9(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}(e,t)||se(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e,t){if(e){if("string"==typeof e)return st(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return st(e,t)}}function st(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}/**
 * Calculate a interval of a minimum value and a maximum value
 *
 * @param  {Number} min       The minimum value
 * @param  {Number} max       The maximum value
 * @return {Array} An interval
 */function sr(e){var t=l9(e,2),r=t[0],n=t[1],o=r,i=n;return r>n&&(o=n,i=r),[o,i]}/**
 * Calculate the step which is easy to understand between ticks, like 10, 20, 25
 *
 * @param  {Decimal} roughStep        The rough step calculated by deviding the
 * difference by the tickCount
 * @param  {Boolean} allowDecimals    Allow the ticks to be decimals or not
 * @param  {Integer} correctionFactor A correction factor
 * @return {Decimal} The step which is easy to understand between two ticks
 */function sn(e,t,r){if(e.lte(0))return new/*@__PURE__*/(g(l$))(0);var n=l8.getDigitCount(e.toNumber()),o=new/*@__PURE__*/(g(l$))(10).pow(n),i=e.div(o),a=1!==n?.05:.1,u=new/*@__PURE__*/(g(l$))(Math.ceil(i.div(a).toNumber())).add(r).mul(a).mul(o);// The ratio between the rough step and the smallest number which has a bigger
return t?u:new/*@__PURE__*/(g(l$))(Math.ceil(u))}/**
 * calculate the ticks when the minimum value equals to the maximum value
 *
 * @param  {Number}  value         The minimum valuue which is also the maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}                 ticks
 */function so(e,t,r){var n=1,o=new/*@__PURE__*/(g(l$))(e);// calculate the middle value of ticks
if(!o.isint()&&r){var i=Math.abs(e);i<1?(// The step should be a float number when the difference is smaller than 1
n=new/*@__PURE__*/(g(l$))(10).pow(l8.getDigitCount(e)-1),o=new/*@__PURE__*/(g(l$))(Math.floor(o.div(n).toNumber())).mul(n)):i>1&&(o=new/*@__PURE__*/(g(l$))(Math.floor(e)))}else 0===e?o=new/*@__PURE__*/(g(l$))(Math.floor((t-1)/2)):r||(o=new/*@__PURE__*/(g(l$))(Math.floor(e)));var a=Math.floor((t-1)/2);return l4(l3(function(e){return o.add(new/*@__PURE__*/(g(l$))(e-a).mul(n)).toNumber()}),l2)(0,t)}var si=l6(/**
 * Calculate the ticks of an interval, the count of ticks will be guraranteed
 *
 * @param  {Number}  min, max      min: The minimum value, max: The maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}   ticks
 */function(e){var t=l9(e,2),r=t[0],n=t[1],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,i=!(arguments.length>2)||void 0===arguments[2]||arguments[2],a=Math.max(o,2),u=l9(sr([r,n]),2),l=u[0],s=u[1];if(l===-1/0||s===1/0){var c=s===1/0?[l].concat(l7(l2(0,o-1).map(function(){return 1/0}))):[].concat(l7(l2(0,o-1).map(function(){return-1/0})),[s]);return r>n?l5(c):c}if(l===s)return so(l,o,i);// Get the step between two ticks
var f=/**
 * Calculate the step
 *
 * @param  {Number}  min              The minimum value of an interval
 * @param  {Number}  max              The maximum value of an interval
 * @param  {Integer} tickCount        The count of ticks
 * @param  {Boolean} allowDecimals    Allow the ticks to be decimals or not
 * @param  {Number}  correctionFactor A correction factor
 * @return {Object}  The step, minimum value of ticks, maximum value of ticks
 */function e(t,r,n,o){var i,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;// dirty hack (for recharts' test)
if(!Number.isFinite((r-t)/(n-1)))return{step:new/*@__PURE__*/(g(l$))(0),tickMin:new/*@__PURE__*/(g(l$))(0),tickMax:new/*@__PURE__*/(g(l$))(0)};// The step which is easy to understand between two ticks
var u=sn(new/*@__PURE__*/(g(l$))(r).sub(t).div(n-1),o,a),l=Math.ceil((i=t<=0&&r>=0?new/*@__PURE__*/(g(l$))(0):// calculate the middle value
(i=new/*@__PURE__*/(g(l$))(t).add(r).div(2)).sub(new/*@__PURE__*/(g(l$))(i).mod(u))).sub(t).div(u).toNumber()),s=Math.ceil(new/*@__PURE__*/(g(l$))(r).sub(i).div(u).toNumber()),c=l+s+1;// A medial value of ticks
return c>n?e(t,r,n,o,a+1):(c<n&&(// When less ticks can cover the interval, we should add some additional ticks
s=r>0?s+(n-c):s,l=r>0?l:l+(n-c)),{step:u,tickMin:i.sub(new/*@__PURE__*/(g(l$))(l).mul(u)),tickMax:i.add(new/*@__PURE__*/(g(l$))(s).mul(u))})}(l,s,a,i),p=f.step,d=f.tickMin,h=f.tickMax,y=l8.rangeStep(d,h.add(new/*@__PURE__*/(g(l$))(.1).mul(p)),p);return r>n?l5(y):y});l6(/**
 * Calculate the ticks of an interval, the count of ticks won't be guraranteed
 *
 * @param  {Number}  min, max      min: The minimum value, max: The maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}   ticks
 */function(e){var t=l9(e,2),r=t[0],n=t[1],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,i=!(arguments.length>2)||void 0===arguments[2]||arguments[2],a=Math.max(o,2),u=l9(sr([r,n]),2),l=u[0],s=u[1];if(l===-1/0||s===1/0)return[r,n];if(l===s)return so(l,o,i);var c=sn(new/*@__PURE__*/(g(l$))(s).sub(l).div(a-1),i,0),f=l4(l3(function(e){return new/*@__PURE__*/(g(l$))(l).add(new/*@__PURE__*/(g(l$))(e).mul(c)).toNumber()}),l2)(0,a).filter(function(e){return e>=l&&e<=s});return r>n?l5(f):f});var sa=l6(/**
 * Calculate the ticks of an interval, the count of ticks won't be guraranteed,
 * but the domain will be guaranteed
 *
 * @param  {Number}  min, max      min: The minimum value, max: The maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}   ticks
 */function(e,t){var r=l9(e,2),n=r[0],o=r[1],i=!(arguments.length>2)||void 0===arguments[2]||arguments[2],a=l9(sr([n,o]),2),u=a[0],l=a[1];if(u===-1/0||l===1/0)return[n,o];if(u===l)return[u];var s=Math.max(t,2),c=sn(new/*@__PURE__*/(g(l$))(l).sub(u).div(s-1),i,0),f=[].concat(l7(l8.rangeStep(new/*@__PURE__*/(g(l$))(u),new/*@__PURE__*/(g(l$))(l).sub(new/*@__PURE__*/(g(l$))(.99).mul(c)),c)),[l]);return n>o?l5(f):f}),su={},sl={},ss={},sc={},sf={};sf=/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return -1};var sp={};sp=/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */function(e){return e!=e};var sd={};sd=/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return -1},sc=/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function(e,t,r){return t==t?sd(e,t,r):sf(e,sp,r)},ss=/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */function(e,t){return!!(null==e?0:e.length)&&sc(e,t,0)>-1};var sh={};sh=/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */function(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1};var sy={},sv={};sv=/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */function(){// No operation performed.
},sy=ow&&1/nH(new ow([,-0]))[1]==1/0?function(e){return new ow(e)}:sv,sl=/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */function(e,t,r){var n=-1,o=ss,i=e.length,a=!0,u=[],l=u;if(r)a=!1,o=sh;else if(i>=200){var s=t?null:sy(e);if(s)return nH(s);a=!1,o=nF,l=new nI}else l=t?[]:u;n:for(;++n<i;){var c=e[n],f=t?t(c):c;if(c=r||0!==c?c:0,a&&f==f){for(var p=l.length;p--;)if(l[p]===f)continue n;t&&l.push(f),u.push(c)}else o(l,f,r)||(l!==u&&l.push(f),u.push(c))}return u},su=/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */function(e,t){return e&&e.length?sl(e,u1(t,2)):[]};var P=(_("acw62"),_("acw62"),_("acw62")),sm=["children","width","height","viewBox","className","style"];function sg(){return(sg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function sb(e){var t=e.children,r=e.width,n=e.height,o=e.viewBox,i=e.className,a=e.style,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,sm),l=o||{width:r,height:n,x:0,y:0},s=/*@__PURE__*/g(oF)("recharts-surface",i);return /*@__PURE__*/g(P).createElement("svg",sg({},aK(u,!0,"svg"),{className:s,width:r,height:n,style:a,viewBox:"".concat(l.x," ").concat(l.y," ").concat(l.width," ").concat(l.height)}),/*@__PURE__*/g(P).createElement("title",null,e.title),/*@__PURE__*/g(P).createElement("desc",null,e.desc),t)}var P=_("acw62");function sx(e){return(sx="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s_=["type","size","sizeType"];function sS(){return(sS=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function sw(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function sP(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?sw(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!==sx(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==sx(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===sx(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):sw(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var sO={symbolCircle:lU.symbolCircle,symbolCross:lU.symbolCross,symbolDiamond:lU.symbolDiamond,symbolSquare:lU.symbolSquare,symbolStar:lU.symbolStar,symbolTriangle:lU.symbolTriangle,symbolWye:lU.symbolWye},sE=Math.PI/180,sj=function(e,t,r){if("area"===t)return e;switch(r){case"cross":return 5*e*e/9;case"diamond":return .5*e*e/Math.sqrt(3);case"square":return e*e;case"star":var n=18*sE;return 1.25*e*e*(Math.tan(n)-Math.tan(2*n)*Math.pow(Math.tan(n),2));case"triangle":return Math.sqrt(3)*e*e/4;case"wye":return(21-10*Math.sqrt(3))*e*e/8;default:return Math.PI*e*e/4}},sk=function(e){var t,r=e.type,n=void 0===r?"circle":r,o=e.size,i=void 0===o?64:o,a=e.sizeType,u=void 0===a?"area":a,l=sP(sP({},function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,s_)),{},{type:n,size:i,sizeType:u}),s=l.className,c=l.cx,f=l.cy,p=aK(l,!0);return c===+c&&f===+f&&i===+i?/*@__PURE__*/g(P).createElement("path",sS({},p,{className:/*@__PURE__*/g(oF)("recharts-symbols",s),transform:"translate(".concat(c,", ").concat(f,")"),d:(t=sO["symbol".concat(/*@__PURE__*/g(lS)(n))]||lU.symbolCircle,(0,lU.symbol)().type(t).size(sj(i,u,n))())})):null};function sM(e){return(sM="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function sA(){return(sA=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function sT(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function sC(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,sR(n.key),n)}}function sL(e,t){return(sL=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function sN(e){return(sN=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function sI(e,t,r){return(t=sR(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function sR(e){var t=function(e,t){if("object"!==sM(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==sM(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===sM(t)?t:String(t)}sk.registerSymbol=function(e,t){sO["symbol".concat(/*@__PURE__*/g(lS)(e))]=t};var sD=/*#__PURE__*/function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&sL(e,t)}(i,e);var t,r,n,o=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=sN(i);if(t){var n=sN(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===sM(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function i(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i),o.apply(this,arguments)}return r=[{key:"renderIcon",value:/**
     * Render the path of icon
     * @param {Object} data Data of each legend item
     * @return {String} Path element
     */function(e){var t=this.props.inactiveColor,r=32/6,n=32/3,o=e.inactive?t:e.color;if("plainline"===e.type)return /*@__PURE__*/g(P).createElement("line",{strokeWidth:4,fill:"none",stroke:o,strokeDasharray:e.payload.strokeDasharray,x1:0,y1:16,x2:32,y2:16,className:"recharts-legend-icon"});if("line"===e.type)return /*@__PURE__*/g(P).createElement("path",{strokeWidth:4,fill:"none",stroke:o,d:"M0,".concat(16,"h").concat(n,"\n            A").concat(r,",").concat(r,",0,1,1,").concat(2*n,",").concat(16,"\n            H").concat(32,"M").concat(2*n,",").concat(16,"\n            A").concat(r,",").concat(r,",0,1,1,").concat(n,",").concat(16),className:"recharts-legend-icon"});if("rect"===e.type)return /*@__PURE__*/g(P).createElement("path",{stroke:"none",fill:o,d:"M0,".concat(4,"h").concat(32,"v").concat(24,"h").concat(-32,"z"),className:"recharts-legend-icon"});if(/*@__PURE__*/g(P).isValidElement(e.legendIcon)){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?sT(Object(r),!0).forEach(function(t){sI(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):sT(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e);return delete i.legendIcon,/*@__PURE__*/g(P).cloneElement(e.legendIcon,i)}return /*@__PURE__*/g(P).createElement(sk,{fill:o,cx:16,cy:16,size:32,sizeType:"diameter",type:e.type})}},{key:"renderItems",value:function(){var e=this,t=this.props,r=t.payload,n=t.iconSize,o=t.layout,i=t.formatter,a=t.inactiveColor,u={x:0,y:0,width:32,height:32},l={display:"horizontal"===o?"inline-block":"block",marginRight:10},s={display:"inline-block",verticalAlign:"middle",marginRight:4};return r.map(function(t,r){var o,c=t.formatter||i,f=/*@__PURE__*/g(oF)((sI(o={"recharts-legend-item":!0},"legend-item-".concat(r),!0),sI(o,"inactive",t.inactive),o));if("none"===t.type)return null;var p=t.inactive?a:t.color;return /*@__PURE__*/g(P).createElement("li",sA({className:f,style:l,key:"legend-item-".concat(r)// eslint-disable-line react/no-array-index-key
},ak(e.props,t,r)),/*@__PURE__*/g(P).createElement(sb,{width:n,height:n,viewBox:u,style:s},e.renderIcon(t)),/*@__PURE__*/g(P).createElement("span",{className:"recharts-legend-item-text",style:{color:p}},c?c(t.value,t,r):t.value))})}},{key:"render",value:function(){var e=this.props,t=e.payload,r=e.layout,n=e.align;return t&&t.length?/*@__PURE__*/g(P).createElement("ul",{className:"recharts-default-legend",style:{padding:0,margin:0,textAlign:"horizontal"===r?n:"left"}},this.renderItems()):null}}],sC(i.prototype,r),n&&sC(i,n),Object.defineProperty(i,"prototype",{writable:!1}),i}(P.PureComponent);function sG(e){return(sG="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}sI(sD,"displayName","Legend"),sI(sD,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var sV=["ref"];function sF(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function sz(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?sF(Object(r),!0).forEach(function(t){sB(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):sF(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function sK(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,sY(n.key),n)}}function sQ(e,t){return(sQ=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function sH(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sW(e){return(sW=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function sB(e,t,r){return(t=sY(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function sY(e){var t=function(e,t){if("object"!==sG(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==sG(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===sG(t)?t:String(t)}function sU(e){return e.value}var s$=/*#__PURE__*/function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&sQ(e,t)}(i,e);var t,r,n,o=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=sW(i);if(t){var n=sW(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===sG(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return sH(e)}(this,e)});function i(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return sB(sH(e=o.call.apply(o,[this].concat(r))),"state",{boxWidth:-1,boxHeight:-1}),e}return r=[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){return this.wrapperNode&&this.wrapperNode.getBoundingClientRect?this.wrapperNode.getBoundingClientRect():null}},{key:"getBBoxSnapshot",value:function(){var e=this.state,t=e.boxWidth,r=e.boxHeight;return t>=0&&r>=0?{width:t,height:r}:null}},{key:"getDefaultPosition",value:function(e){var t,r,n=this.props,o=n.layout,i=n.align,a=n.verticalAlign,u=n.margin,l=n.chartWidth,s=n.chartHeight;return e&&(void 0!==e.left&&null!==e.left||void 0!==e.right&&null!==e.right)||(t="center"===i&&"vertical"===o?{left:((l||0)-(this.getBBoxSnapshot()||{width:0}).width)/2}:"right"===i?{right:u&&u.right||0}:{left:u&&u.left||0}),e&&(void 0!==e.top&&null!==e.top||void 0!==e.bottom&&null!==e.bottom)||(r="middle"===a?{top:((s||0)-(this.getBBoxSnapshot()||{height:0}).height)/2}:"bottom"===a?{bottom:u&&u.bottom||0}:{top:u&&u.top||0}),sz(sz({},t),r)}},{key:"updateBBox",value:function(){var e=this.state,t=e.boxWidth,r=e.boxHeight,n=this.props.onBBoxUpdate;if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var o=this.wrapperNode.getBoundingClientRect();(Math.abs(o.width-t)>1||Math.abs(o.height-r)>1)&&this.setState({boxWidth:o.width,boxHeight:o.height},function(){n&&n(o)})}else(-1!==t||-1!==r)&&this.setState({boxWidth:-1,boxHeight:-1},function(){n&&n(null)})}},{key:"render",value:function(){var e=this,t=this.props,r=t.content,n=t.width,o=t.height,i=t.wrapperStyle,a=t.payloadUniqBy,u=t.payload,l=sz(sz({position:"absolute",width:n||"auto",height:o||"auto"},this.getDefaultPosition(i)),i);return /*@__PURE__*/g(P).createElement("div",{className:"recharts-legend-wrapper",style:l,ref:function(t){e.wrapperNode=t}},function(e,t){if(/*@__PURE__*/g(P).isValidElement(e))return /*@__PURE__*/g(P).cloneElement(e,t);if(/*@__PURE__*/g(r0)(e))return /*@__PURE__*/g(P).createElement(e,t);t.ref;var r=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,sV);return /*@__PURE__*/g(P).createElement(sD,r)}(r,sz(sz({},this.props),{},{payload:!0===a?/*@__PURE__*/g(su)(u,sU):/*@__PURE__*/g(r0)(a)?/*@__PURE__*/g(su)(u,a):u})))}}],n=[{key:"getWithHeight",value:function(e,t){var r=e.props.layout;return"vertical"===r&&af(e.props.height)?{height:e.props.height}:"horizontal"===r?{width:e.props.width||t}:null}}],r&&sK(i.prototype,r),n&&sK(i,n),Object.defineProperty(i,"prototype",{writable:!1}),i}(P.PureComponent);function sq(e){return(sq="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function sX(e){return function(e){if(Array.isArray(e))return sJ(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return sJ(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return sJ(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function sJ(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function sZ(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s0(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?sZ(Object(r),!0).forEach(function(t){s1(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):sZ(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function s1(e,t,r){var n;return(n=function(e,t){if("object"!==sq(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==sq(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===sq(n)?n:String(n))in e)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s2(e,t,r){return /*@__PURE__*/g(rT)(e)||/*@__PURE__*/g(rT)(t)?r:ap(t)?/*@__PURE__*/g(iq)(e,t,r):/*@__PURE__*/g(r0)(t)?t(e):r}function s3(e,t,r,n){var o=/*@__PURE__*/g(lW)(e,function(e){return s2(e,t)});if("number"===r){var i=o.filter(function(e){return af(e)||parseFloat(e)});return i.length?[/*@__PURE__*/g(lQ)(i),/*@__PURE__*/g(lF)(i)]:[1/0,-1/0]}// 支持Date类型的x轴
return(n?o.filter(function(e){return!/*@__PURE__*/g(rT)(e)}):o).map(function(e){return ap(e)||e instanceof Date?e:""})}sB(s$,"displayName","Legend"),sB(s$,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var s4=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=-1,a=null!==(t=null==r?void 0:r.length)&&void 0!==t?t:0;// if there are 1 or less ticks ticks then the active tick is at index 0
if(a<=1)return 0;if(o&&"angleAxis"===o.axisType&&1e-6>=Math.abs(Math.abs(o.range[1]-o.range[0])-360))// ticks are distributed in a circle
for(var u=o.range,l=0;l<a;l++){var s=l>0?n[l-1].coordinate:n[a-1].coordinate,c=n[l].coordinate,f=l>=a-1?n[0].coordinate:n[l+1].coordinate,p=void 0;if(as(c-s)!==as(f-c)){var d=[];if(as(f-c)===as(u[1]-u[0])){p=f;var h=c+u[1]-u[0];d[0]=Math.min(h,(h+s)/2),d[1]=Math.max(h,(h+s)/2)}else{p=s;var y=f+u[1]-u[0];d[0]=Math.min(c,(y+c)/2),d[1]=Math.max(c,(y+c)/2)}var v=[Math.min(c,(p+c)/2),Math.max(c,(p+c)/2)];if(e>v[0]&&e<=v[1]||e>=d[0]&&e<=d[1]){i=n[l].index;break}}else{var m=Math.min(s,f),g=Math.max(s,f);if(e>(m+c)/2&&e<=(g+c)/2){i=n[l].index;break}}}else // ticks are distributed in a single direction
for(var b=0;b<a;b++)if(0===b&&e<=(r[b].coordinate+r[b+1].coordinate)/2||b>0&&b<a-1&&e>(r[b].coordinate+r[b-1].coordinate)/2&&e<=(r[b].coordinate+r[b+1].coordinate)/2||b===a-1&&e>(r[b].coordinate+r[b-1].coordinate)/2){i=r[b].index;break}return i},s5=function(e){var t,r=e.type.displayName,n=e.props,o=n.stroke,i=n.fill;// TODO: check if displayName is valid.
switch(r){case"Line":t=o;break;case"Area":case"Radar":t=o&&"none"!==o?o:i;break;default:t=i}return t},s6=function(e){var t,r=e.children,n=e.formattedGraphicalItems,o=e.legendWidth,i=e.legendContent,a=aG(r,s$);return a?(t=a.props&&a.props.payload?a.props&&a.props.payload:"children"===i?(n||[]).reduce(function(e,t){var r=t.item,n=t.props,o=n.sectors||n.data||[];return e.concat(o.map(function(e){return{type:a.props.iconType||r.props.legendType,value:e.name,color:e.fill,payload:e}}))},[]):(n||[]).map(function(e){var t=e.item,r=t.props,n=r.dataKey,o=r.name,i=r.legendType;return{inactive:r.hide,dataKey:n,type:a.props.iconType||i||"square",color:s5(t),value:o||n,payload:t.props}}),s0(s0(s0({},a.props),s$.getWithHeight(a,o)),{},{payload:t,item:a})):null},s8=function(e){var t=e.barSize,r=e.stackGroups,n=void 0===r?{}:r;if(!n)return{};for(var o={},i=Object.keys(n),a=0,u=i.length;a<u;a++)for(var l=n[i[a]].stackGroups,s=Object.keys(l),c=0,f=s.length;c<f;c++){var p=l[s[c]],d=p.items,h=p.cateAxisId,y=d.filter(function(e){return aL(e.type).indexOf("Bar")>=0});if(y&&y.length){var v=y[0].props.barSize,m=y[0].props[h];o[m]||(o[m]=[]),o[m].push({item:y[0],stackList:y.slice(1),barSize:/*@__PURE__*/g(rT)(v)?t:v})}}return o},s7=function(e){var t,r=e.barGap,n=e.barCategoryGap,o=e.bandSize,i=e.sizeList,a=void 0===i?[]:i,u=e.maxBarSize,l=a.length;if(l<1)return null;var s=ay(r,o,0,!0);// whether or not is barSize setted by user
if(a[0].barSize===+a[0].barSize){var c=!1,f=o/l,p=a.reduce(function(e,t){return e+t.barSize||0},0);(p+=(l-1)*s)>=o&&(p-=(l-1)*s,s=0),p>=o&&f>0&&(c=!0,f*=.9,p=l*f);var d={offset:((o-p)/2>>0)-s,size:0};t=a.reduce(function(e,t){var r=[].concat(sX(e),[{item:t.item,position:{offset:d.offset+d.size+s,size:c?f:t.barSize}}]);return d=r[r.length-1].position,t.stackList&&t.stackList.length&&t.stackList.forEach(function(e){r.push({item:e,position:d})}),r},[])}else{var h=ay(n,o,0,!0);o-2*h-(l-1)*s<=0&&(s=0);var y=(o-2*h-(l-1)*s)/l;y>1&&(y>>=0);var v=u===+u?Math.min(y,u):y;t=a.reduce(function(e,t,r){var n=[].concat(sX(e),[{item:t.item,position:{offset:h+(y+s)*r+(y-v)/2,size:v}}]);return t.stackList&&t.stackList.length&&t.stackList.forEach(function(e){n.push({item:e,position:n[n.length-1].position})}),n},[])}return t},s9=function(e,t,r,n){var o=r.children,i=r.width,a=r.margin,u=s6({children:o,legendWidth:i-(a.left||0)-(a.right||0)}),l=e;if(u){var s=n||{},c=u.align,f=u.verticalAlign,p=u.layout;("vertical"===p||"horizontal"===p&&"middle"===f)&&af(e[c])&&(l=s0(s0({},e),{},s1({},c,l[c]+(s.width||0)))),("horizontal"===p||"vertical"===p&&"center"===c)&&af(e[f])&&(l=s0(s0({},e),{},s1({},f,l[f]+(s.height||0))))}return l},ce=function(e,t,r,n,o){var i=aD(t.props.children,a7).filter(function(e){var t;return t=e.props.direction,!!/*@__PURE__*/g(rT)(o)||("horizontal"===n?"yAxis"===o:"vertical"===n||"x"===t?"xAxis"===o:"y"!==t||"yAxis"===o)});if(i&&i.length){var a=i.map(function(e){return e.props.dataKey});return e.reduce(function(e,t){var n=s2(t,r,0),o=/*@__PURE__*/g(nX)(n)?[/*@__PURE__*/g(lQ)(n),/*@__PURE__*/g(lF)(n)]:[n,n],i=a.reduce(function(e,r){var n=s2(t,r,0),i=o[0]-Math.abs(/*@__PURE__*/g(nX)(n)?n[0]:n),a=o[1]+Math.abs(/*@__PURE__*/g(nX)(n)?n[1]:n);return[Math.min(i,e[0]),Math.max(a,e[1])]},[1/0,-1/0]);return[Math.min(i[0],e[0]),Math.max(i[1],e[1])]},[1/0,-1/0])}return null},ct=function(e,t,r,n,o){var i=t.map(function(t){return ce(e,t,r,o,n)}).filter(function(e){return!/*@__PURE__*/g(rT)(e)});return i&&i.length?i.reduce(function(e,t){return[Math.min(e[0],t[0]),Math.max(e[1],t[1])]},[1/0,-1/0]):null},cr=function(e,t,r,n,o){var i=t.map(function(t){var i=t.props.dataKey;return"number"===r&&i&&ce(e,t,i,n)||s3(e,i,r,o)});if("number"===r)return i.reduce(function(e,t){return[Math.min(e[0],t[0]),Math.max(e[1],t[1])]},[1/0,-1/0]);var a={};// Get the union set of category axis
return i.reduce(function(e,t){for(var r=0,n=t.length;r<n;r++)a[t[r]]||(a[t[r]]=!0,e.push(t[r]));return e},[])},cn=function(e,t){return"horizontal"===e&&"xAxis"===t||"vertical"===e&&"yAxis"===t||"centric"===e&&"angleAxis"===t||"radial"===e&&"radiusAxis"===t},co=function(e,t,r){var n,o,i=e.map(function(e){return e.coordinate===t&&(n=!0),e.coordinate===r&&(o=!0),e.coordinate});return n||i.push(t),o||i.push(r),i},ci=function(e,t,r){if(!e)return null;var n=e.scale,o=e.duplicateDomain,i=e.type,a=e.range,u="scaleBand"===e.realScaleType?n.bandwidth()/2:2,l=(t||r)&&"category"===i&&n.bandwidth?n.bandwidth()/u:0;return(// The ticks set by user should only affect the ticks adjacent to axis line
(l="angleAxis"===e.axisType&&(null==a?void 0:a.length)>=2?2*as(a[0]-a[1])*l:l,t&&(e.ticks||e.niceTicks))?(e.ticks||e.niceTicks).map(function(e){return{// If the scaleContent is not a number, the coordinate will be NaN.
// That could be the case for example with a PointScale and a string as domain.
coordinate:n(o?o.indexOf(e):e)+l,value:e,offset:l}}).filter(function(e){return!/*@__PURE__*/g(au)(e.coordinate)}):e.isCategorical&&e.categoricalDomain?e.categoricalDomain.map(function(e,t){return{coordinate:n(e)+l,value:e,index:t,offset:l}}):n.ticks&&!r?n.ticks(e.tickCount).map(function(e){return{coordinate:n(e)+l,value:e,offset:l}}):n.domain().map(function(e,t){return{coordinate:n(e)+l,value:o?o[e]:e,index:t,offset:l}}))},ca=function(e,t,r){var n;return(/*@__PURE__*/g(r0)(r)?n=r:/*@__PURE__*/g(r0)(t)&&(n=t),/*@__PURE__*/g(r0)(e)||n)?function(t,r,o,i){/*@__PURE__*/g(r0)(e)&&e(t,r,o,i),/*@__PURE__*/g(r0)(n)&&n(t,r,o,i)}:null},cu=function(e,t,r){var n=e.scale,o=e.type,i=e.layout,a=e.axisType;if("auto"===n)return"radial"===i&&"radiusAxis"===a?{scale:lY.scaleBand(),realScaleType:"band"}:"radial"===i&&"angleAxis"===a?{scale:lY.scaleLinear(),realScaleType:"linear"}:"category"===o&&t&&(t.indexOf("LineChart")>=0||t.indexOf("AreaChart")>=0||t.indexOf("ComposedChart")>=0&&!r)?{scale:lY.scalePoint(),realScaleType:"point"}:"category"===o?{scale:lY.scaleBand(),realScaleType:"band"}:{scale:lY.scaleLinear(),realScaleType:"linear"};if(/*@__PURE__*/g(i$)(n)){var u="scale".concat(/*@__PURE__*/g(lS)(n));return{scale:(lY[u]||lY.scalePoint)(),realScaleType:lY[u]?u:"point"}}return /*@__PURE__*/g(r0)(n)?{scale:n}:{scale:lY.scalePoint(),realScaleType:"point"}},cl=function(e){var t=e.domain();if(t&&!(t.length<=2)){var r=t.length,n=e.range(),o=Math.min(n[0],n[1])-1e-4,i=Math.max(n[0],n[1])+1e-4,a=e(t[0]),u=e(t[r-1]);(a<o||a>i||u<o||u>i)&&e.domain([t[0],t[r-1]])}},cs=function(e,t){if(!e)return null;for(var r=0,n=e.length;r<n;r++)if(e[r].item===t)return e[r].position;return null},cc=function(e,t){if(!t||2!==t.length||!af(t[0])||!af(t[1]))return e;var r=Math.min(t[0],t[1]),n=Math.max(t[0],t[1]),o=[e[0],e[1]];return(!af(e[0])||e[0]<r)&&(o[0]=r),(!af(e[1])||e[1]>n)&&(o[1]=n),o[0]>n&&(o[0]=n),o[1]<r&&(o[1]=r),o},cf={sign:function(e){var t=e.length;if(!(t<=0))for(var r=0,n=e[0].length;r<n;++r)for(var o=0,i=0,a=0;a<t;++a){var u=/*@__PURE__*/g(au)(e[a][r][1])?e[a][r][0]:e[a][r][1];/* eslint-disable prefer-destructuring */u>=0?(e[a][r][0]=o,e[a][r][1]=o+u,o=e[a][r][1]):(e[a][r][0]=i,e[a][r][1]=i+u,i=e[a][r][1]);/* eslint-enable prefer-destructuring */}},expand:lU.stackOffsetExpand,none:lU.stackOffsetNone,silhouette:lU.stackOffsetSilhouette,wiggle:lU.stackOffsetWiggle,positive:function(e){var t=e.length;if(!(t<=0))for(var r=0,n=e[0].length;r<n;++r)for(var o=0,i=0;i<t;++i){var a=/*@__PURE__*/g(au)(e[i][r][1])?e[i][r][0]:e[i][r][1];/* eslint-disable prefer-destructuring */a>=0?(e[i][r][0]=o,e[i][r][1]=o+a,o=e[i][r][1]):(e[i][r][0]=0,e[i][r][1]=0);/* eslint-enable prefer-destructuring */}}},cp=function(e,t,r){var n=t.map(function(e){return e.props.dataKey});return(0,lU.stack)().keys(n).value(function(e,t){return+s2(e,t,0)}).order(lU.stackOrderNone).offset(cf[r])(e)},cd=function(e,t,r,n,o,i){if(!e)return null;var a=(i?t.reverse():t).reduce(function(e,t){var o=t.props,i=o.stackId;if(o.hide)return e;var a=t.props[r],u=e[a]||{hasStack:!1,stackGroups:{}};if(ap(i)){var l=u.stackGroups[i]||{numericAxisId:r,cateAxisId:n,items:[]};l.items.push(t),u.hasStack=!0,u.stackGroups[i]=l}else u.stackGroups[ah("_stackId_")]={numericAxisId:r,cateAxisId:n,items:[t]};return s0(s0({},e),{},s1({},a,u))},{});return Object.keys(a).reduce(function(t,i){var u=a[i];return u.hasStack&&(u.stackGroups=Object.keys(u.stackGroups).reduce(function(t,i){var a=u.stackGroups[i];return s0(s0({},t),{},s1({},i,{numericAxisId:r,cateAxisId:n,items:a.items,stackedData:cp(e,a.items,o)}))},{})),s0(s0({},t),{},s1({},i,u))},{})},ch=function(e,t){var r=t.realScaleType,n=t.type,o=t.tickCount,i=t.originalDomain,a=t.allowDecimals,u=r||t.scale;if("auto"!==u&&"linear"!==u)return null;if(o&&"number"===n&&i&&("auto"===i[0]||"auto"===i[1])){// Calculate the ticks by the number of grid when the axis is a number axis
var l=e.domain();if(!l.length)return null;var s=si(l,o,a);return e.domain([/*@__PURE__*/g(lQ)(s),/*@__PURE__*/g(lF)(s)]),{niceTicks:s}}return o&&"number"===n?{niceTicks:sa(e.domain(),o,a)}:null},cy=function(e){var t=e.axis,r=e.ticks,n=e.bandSize,o=e.entry,i=e.index,a=e.dataKey;if("category"===t.type){// find coordinate of category axis by the value of category
if(!t.allowDuplicatedCategory&&t.dataKey&&!/*@__PURE__*/g(rT)(o[t.dataKey])){var u=ab(r,"value",o[t.dataKey]);if(u)return u.coordinate+n/2}return r[i]?r[i].coordinate+n/2:null}var l=s2(o,/*@__PURE__*/g(rT)(a)?t.dataKey:a);return /*@__PURE__*/g(rT)(l)?null:t.scale(l)},cv=function(e){var t=e.axis,r=e.ticks,n=e.offset,o=e.bandSize,i=e.entry,a=e.index;if("category"===t.type)return r[a]?r[a].coordinate+n:null;var u=s2(i,t.dataKey,t.domain[a]);return /*@__PURE__*/g(rT)(u)?null:t.scale(u)-o/2+n},cm=function(e){var t=e.numericAxis,r=t.scale.domain();if("number"===t.type){var n=Math.min(r[0],r[1]),o=Math.max(r[0],r[1]);return n<=0&&o>=0?0:o<0?o:n}return r[0]},cg=function(e,t){var r=e.props.stackId;if(ap(r)){var n=t[r];if(n&&n.items.length){for(var o=-1,i=0,a=n.items.length;i<a;i++)if(n.items[i]===e){o=i;break}return o>=0?n.stackedData[o]:null}}return null},cb=function(e,t,r){return Object.keys(e).reduce(function(n,o){var i=e[o].stackedData.reduce(function(e,n){var o=n.slice(t,r+1).reduce(function(e,t){return[/*@__PURE__*/g(lQ)(t.concat([e[0]]).filter(af)),/*@__PURE__*/g(lF)(t.concat([e[1]]).filter(af))]},[1/0,-1/0]);return[Math.min(e[0],o[0]),Math.max(e[1],o[1])]},[1/0,-1/0]);return[Math.min(i[0],n[0]),Math.max(i[1],n[1])]},[1/0,-1/0]).map(function(e){return e===1/0||e===-1/0?0:e})},cx=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,c_=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,cS=function(e,t,r){if(/*@__PURE__*/g(r0)(e))return e(t,r);if(!/*@__PURE__*/g(nX)(e))return t;var n=[];/* eslint-disable prefer-destructuring */if(af(e[0]))n[0]=r?e[0]:Math.min(e[0],t[0]);else if(cx.test(e[0])){var o=+cx.exec(e[0])[1];n[0]=t[0]-o}else /*@__PURE__*/g(r0)(e[0])?n[0]=e[0](t[0]):n[0]=t[0];if(af(e[1]))n[1]=r?e[1]:Math.max(e[1],t[1]);else if(c_.test(e[1])){var i=+c_.exec(e[1])[1];n[1]=t[1]+i}else /*@__PURE__*/g(r0)(e[1])?n[1]=e[1](t[1]):n[1]=t[1];/* eslint-enable prefer-destructuring */return n},cw=function(e,t,r){if(e&&e.scale&&e.scale.bandwidth){var n=e.scale.bandwidth();if(!r||n>0)return n}if(e&&t&&t.length>=2){for(var o=/*@__PURE__*/g(uq)(t,function(e){return e.coordinate}),i=1/0,a=1,u=o.length;a<u;a++){var l=o[a],s=o[a-1];i=Math.min((l.coordinate||0)-(s.coordinate||0),i)}return i===1/0?0:i}return r?void 0:0},cP=function(e,t,r){return!e||!e.length||/*@__PURE__*/g(rC)(e,/*@__PURE__*/g(iq)(r,"type.defaultProps.domain"))?t:e},cO=function(e,t){var r=e.props,n=r.dataKey,o=r.name,i=r.unit,a=r.formatter,u=r.tooltipType,l=r.chartType;return s0(s0({},aK(e)),{},{dataKey:n,unit:i,formatter:a,name:o||n,color:s5(e),value:s2(t,n),type:u,payload:t,chartType:l})};function cE(e){return(cE="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function cj(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ck(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?cj(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!==cE(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==cE(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===cE(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):cj(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var cM=Math.PI/180,cA=function(e,t,r,n){return{x:e+Math.cos(-cM*n)*r,y:t+Math.sin(-cM*n)*r}},cT=function(e,t){var r=e.x,n=e.y;return Math.sqrt(Math.pow(r-t.x,2)+Math.pow(n-t.y,2))},cC=function(e,t){var r=e.x,n=e.y,o=t.cx,i=t.cy,a=cT({x:r,y:n},{x:o,y:i});if(a<=0)return{radius:a};var u=Math.acos((r-o)/a);return n>i&&(u=2*Math.PI-u),{radius:a,angle:180*u/Math.PI,angleInRadian:u}},cL=function(e){var t=e.startAngle,r=e.endAngle,n=Math.min(Math.floor(t/360),Math.floor(r/360));return{startAngle:t-360*n,endAngle:r-360*n}},cN=function(e,t){var r,n=cC({x:e.x,y:e.y},t),o=n.radius,i=n.angle,a=t.innerRadius,u=t.outerRadius;if(o<a||o>u)return!1;if(0===o)return!0;var l=cL(t),s=l.startAngle,c=l.endAngle,f=i;if(s<=c){for(;f>c;)f-=360;for(;f<s;)f+=360;r=f>=s&&f<=c}else{for(;f>s;)f-=360;for(;f<c;)f+=360;r=f>=c&&f<=s}return r?ck(ck({},t),{},{radius:o,angle:f+360*Math.min(Math.floor(t.startAngle/360),Math.floor(t.endAngle/360))}):null};function cI(e){return(cI="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var cR=["offset"];function cD(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function cG(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function cV(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?cG(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!==cI(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==cI(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===cI(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):cG(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function cF(){return(cF=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var cz=function(e){var t=e.value,r=e.formatter,n=/*@__PURE__*/g(rT)(e.children)?t:e.children;return /*@__PURE__*/g(r0)(r)?r(n):n},cK=function(e,t,r){var n,o,i=e.position,a=e.viewBox,u=e.offset,l=e.className,s=a.cx,c=a.cy,f=a.innerRadius,p=a.outerRadius,d=a.startAngle,h=a.endAngle,y=a.clockWise,v=(f+p)/2,m=as(h-d)*Math.min(Math.abs(h-d),360),b=m>=0?1:-1;"insideStart"===i?(n=d+b*u,o=y):"insideEnd"===i?(n=h-b*u,o=!y):"end"===i&&(n=h+b*u,o=y),o=m<=0?o:!o;var x=cA(s,c,v,n),_=cA(s,c,v,n+(o?1:-1)*359),S="M".concat(x.x,",").concat(x.y,"\n    A").concat(v,",").concat(v,",0,1,").concat(o?0:1,",\n    ").concat(_.x,",").concat(_.y),w=/*@__PURE__*/g(rT)(e.id)?ah("recharts-radial-line-"):e.id;return /*@__PURE__*/g(P).createElement("text",cF({},r,{dominantBaseline:"central",className:/*@__PURE__*/g(oF)("recharts-radial-bar-label",l)}),/*@__PURE__*/g(P).createElement("defs",null,/*@__PURE__*/g(P).createElement("path",{id:w,d:S})),/*@__PURE__*/g(P).createElement("textPath",{xlinkHref:"#".concat(w)},t))},cQ=function(e){var t=e.viewBox,r=e.offset,n=e.position,o=t.cx,i=t.cy,a=t.innerRadius,u=t.outerRadius,l=(t.startAngle+t.endAngle)/2;if("outside"===n){var s=cA(o,i,u+r,l),c=s.x;return{x:c,y:s.y,textAnchor:c>=o?"start":"end",verticalAnchor:"middle"}}if("center"===n)return{x:o,y:i,textAnchor:"middle",verticalAnchor:"middle"};if("centerTop"===n)return{x:o,y:i,textAnchor:"middle",verticalAnchor:"start"};if("centerBottom"===n)return{x:o,y:i,textAnchor:"middle",verticalAnchor:"end"};var f=cA(o,i,(a+u)/2,l);return{x:f.x,y:f.y,textAnchor:"middle",verticalAnchor:"middle"}},cH=function(e){var t=e.viewBox,r=e.parentViewBox,n=e.offset,o=e.position,i=t.x,a=t.y,u=t.width,l=t.height,s=l>=0?1:-1,c=s*n,f=s>0?"end":"start",p=s>0?"start":"end",d=u>=0?1:-1,h=d*n,y=d>0?"end":"start",v=d>0?"start":"end";if("top"===o)return cV(cV({},{x:i+u/2,y:a-s*n,textAnchor:"middle",verticalAnchor:f}),r?{height:Math.max(a-r.y,0),width:u}:{});if("bottom"===o)return cV(cV({},{x:i+u/2,y:a+l+c,textAnchor:"middle",verticalAnchor:p}),r?{height:Math.max(r.y+r.height-(a+l),0),width:u}:{});if("left"===o){var m={x:i-h,y:a+l/2,textAnchor:y,verticalAnchor:"middle"};return cV(cV({},m),r?{width:Math.max(m.x-r.x,0),height:l}:{})}if("right"===o){var b={x:i+u+h,y:a+l/2,textAnchor:v,verticalAnchor:"middle"};return cV(cV({},b),r?{width:Math.max(r.x+r.width-b.x,0),height:l}:{})}var x=r?{width:u,height:l}:{};return"insideLeft"===o?cV({x:i+h,y:a+l/2,textAnchor:v,verticalAnchor:"middle"},x):"insideRight"===o?cV({x:i+u-h,y:a+l/2,textAnchor:y,verticalAnchor:"middle"},x):"insideTop"===o?cV({x:i+u/2,y:a+c,textAnchor:"middle",verticalAnchor:p},x):"insideBottom"===o?cV({x:i+u/2,y:a+l-c,textAnchor:"middle",verticalAnchor:f},x):"insideTopLeft"===o?cV({x:i+h,y:a+c,textAnchor:v,verticalAnchor:p},x):"insideTopRight"===o?cV({x:i+u-h,y:a+c,textAnchor:y,verticalAnchor:p},x):"insideBottomLeft"===o?cV({x:i+h,y:a+l-c,textAnchor:v,verticalAnchor:f},x):"insideBottomRight"===o?cV({x:i+u-h,y:a+l-c,textAnchor:y,verticalAnchor:f},x):/*@__PURE__*/g(nr)(o)&&(af(o.x)||ac(o.x))&&(af(o.y)||ac(o.y))?cV({x:i+ay(o.x,u),y:a+ay(o.y,l),textAnchor:"end",verticalAnchor:"end"},x):cV({x:i+u/2,y:a+l/2,textAnchor:"middle",verticalAnchor:"middle"},x)};function cW(e){var t,r=e.offset,n=cV({offset:void 0===r?5:r},function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,cR)),o=n.viewBox,i=n.position,a=n.value,u=n.children,l=n.content,s=n.className,c=void 0===s?"":s,f=n.textBreakAll;if(!o||/*@__PURE__*/g(rT)(a)&&/*@__PURE__*/g(rT)(u)&&!/*#__PURE__*/(0,P.isValidElement)(l)&&!/*@__PURE__*/g(r0)(l))return null;if(/*#__PURE__*/(0,P.isValidElement)(l))return/*#__PURE__*/(0,P.cloneElement)(l,n);if(/*@__PURE__*/g(r0)(l)){if(t=/*#__PURE__*/(0,P.createElement)(l,n),/*#__PURE__*/(0,P.isValidElement)(t))return t}else t=cz(n);var p="cx"in o&&af(o.cx),d=aK(n,!0);if(p&&("insideStart"===i||"insideEnd"===i||"end"===i))return cK(n,t,d);var h=p?cQ(n):cH(n);return /*@__PURE__*/g(P).createElement(u$,cF({className:/*@__PURE__*/g(oF)("recharts-label",c)},d,h,{breakAll:f}),t)}cW.displayName="Label";var cB=function(e){var t=e.cx,r=e.cy,n=e.angle,o=e.startAngle,i=e.endAngle,a=e.r,u=e.radius,l=e.innerRadius,s=e.outerRadius,c=e.x,f=e.y,p=e.top,d=e.left,h=e.width,y=e.height,v=e.clockWise,m=e.labelViewBox;if(m)return m;if(af(h)&&af(y)){if(af(c)&&af(f))return{x:c,y:f,width:h,height:y};if(af(p)&&af(d))return{x:p,y:d,width:h,height:y}}return af(c)&&af(f)?{x:c,y:f,width:0,height:0}:af(t)&&af(r)?{cx:t,cy:r,startAngle:o||n||0,endAngle:i||n||0,innerRadius:l||0,outerRadius:s||u||a||0,clockWise:v}:e.viewBox?e.viewBox:{}};function cY(e){return(cY="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}cW.parseViewBox=cB,cW.renderCallByParent=function(e,t){var r,n,o=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(!e||!e.children&&o&&!e.label)return null;var i=e.children,a=cB(e),u=aD(i,cW).map(function(e,r){return/*#__PURE__*/(0,P.cloneElement)(e,{viewBox:t||a,// eslint-disable-next-line react/no-array-index-key
key:"label-".concat(r)})});return o?[(r=e.label,n=t||a,r?!0===r?/*@__PURE__*/g(P).createElement(cW,{key:"label-implicit",viewBox:n}):ap(r)?/*@__PURE__*/g(P).createElement(cW,{key:"label-implicit",viewBox:n,value:r}):/*#__PURE__*/(0,P.isValidElement)(r)?r.type===cW?/*#__PURE__*/(0,P.cloneElement)(r,{key:"label-implicit",viewBox:n}):/*@__PURE__*/g(P).createElement(cW,{key:"label-implicit",content:r,viewBox:n}):/*@__PURE__*/g(r0)(r)?/*@__PURE__*/g(P).createElement(cW,{key:"label-implicit",content:r,viewBox:n}):/*@__PURE__*/g(nr)(r)?/*@__PURE__*/g(P).createElement(cW,cF({viewBox:n},r,{key:"label-implicit"})):null:null)].concat(function(e){if(Array.isArray(e))return cD(e)}(u)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(u)||function(e,t){if(e){if("string"==typeof e)return cD(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return cD(e,t)}}(u)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()):u};var cU=["valueAccessor"],c$=["data","dataKey","clockWise","id","textBreakAll"];function cq(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function cX(){return(cX=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function cJ(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function cZ(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?cJ(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!==cY(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==cY(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===cY(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):cJ(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c0(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c1=function(e){return /*@__PURE__*/g(nX)(e.value)?/*@__PURE__*/g(ue)(e.value):e.value};function c2(e){var t=e.valueAccessor,r=void 0===t?c1:t,n=c0(e,cU),o=n.data,i=n.dataKey,a=n.clockWise,u=n.id,l=n.textBreakAll,s=c0(n,c$);return o&&o.length?/*@__PURE__*/g(P).createElement(a4,{className:"recharts-label-list"},o.map(function(e,t){var n=/*@__PURE__*/g(rT)(i)?r(e,t):s2(e&&e.payload,i),o=/*@__PURE__*/g(rT)(u)?{}:{id:"".concat(u,"-").concat(t)};return /*@__PURE__*/g(P).createElement(cW,cX({},aK(e,!0),s,o,{parentViewBox:e.parentViewBox,index:t,value:n,textBreakAll:l,viewBox:cW.parseViewBox(/*@__PURE__*/g(rT)(a)?e:cZ(cZ({},e),{},{clockWise:a})),key:"label-".concat(t)// eslint-disable-line react/no-array-index-key
}))})):null}c2.displayName="LabelList",c2.renderCallByParent=function(e,t){var r,n=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(!e||!e.children&&n&&!e.label)return null;var o=aD(e.children,c2).map(function(e,r){return/*#__PURE__*/(0,P.cloneElement)(e,{data:t,// eslint-disable-next-line react/no-array-index-key
key:"labelList-".concat(r)})});return n?[(r=e.label)?!0===r?/*@__PURE__*/g(P).createElement(c2,{key:"labelList-implicit",data:t}):/*@__PURE__*/g(P).isValidElement(r)||/*@__PURE__*/g(r0)(r)?/*@__PURE__*/g(P).createElement(c2,{key:"labelList-implicit",data:t,content:r}):/*@__PURE__*/g(nr)(r)?/*@__PURE__*/g(P).createElement(c2,cX({data:t},r,{key:"labelList-implicit"})):null:null].concat(function(e){if(Array.isArray(e))return cq(e)}(o)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return cq(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return cq(e,t)}}(o)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()):o};var c3=["value","background"];function c4(e){return(c4="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c5(){return(c5=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c8(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c6(Object(r),!0).forEach(function(t){fr(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c6(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c7(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,fn(n.key),n)}}function c9(e,t){return(c9=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function fe(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ft(e){return(ft=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function fr(e,t,r){return(t=fn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function fn(e){var t=function(e,t){if("object"!==c4(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==c4(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===c4(t)?t:String(t)}var fo=/*#__PURE__*/function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c9(e,t)}(i,e);var t,r,n,o=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=ft(i);if(t){var n=ft(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===c4(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return fe(e)}(this,e)});function i(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return fr(fe(e=o.call.apply(o,[this].concat(r))),"state",{isAnimationFinished:!1}),fr(fe(e),"id",ah("recharts-bar-")),fr(fe(e),"handleAnimationEnd",function(){var t=e.props.onAnimationEnd;e.setState({isAnimationFinished:!0}),t&&t()}),fr(fe(e),"handleAnimationStart",function(){var t=e.props.onAnimationStart;e.setState({isAnimationFinished:!1}),t&&t()}),e}return r=[{key:"renderRectanglesStatically",value:function(e){var t=this,r=this.props.shape,n=aK(this.props);return e&&e.map(function(e,o){var a=c8(c8(c8({},n),e),{},{index:o});return /*@__PURE__*/g(P).createElement(a4,c5({className:"recharts-bar-rectangle"},ak(t.props,e,o),{key:"rectangle-".concat(o)// eslint-disable-line react/no-array-index-key
}),i.renderRectangle(r,a))})}},{key:"renderRectanglesWithAnimation",value:function(){var e=this,t=this.props,r=t.data,n=t.layout,o=t.isAnimationActive,i=t.animationBegin,a=t.animationDuration,u=t.animationEasing,l=t.animationId,s=this.state.prevData;return /*@__PURE__*/g(P).createElement(iM,{begin:i,duration:a,isActive:o,easing:u,from:{t:0},to:{t:1},key:"bar-".concat(l),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(t){var o=t.t,i=r.map(function(e,t){var r=s&&s[t];if(r){var i=ag(r.x,e.x),a=ag(r.y,e.y),u=ag(r.width,e.width),l=ag(r.height,e.height);return c8(c8({},e),{},{x:i(o),y:a(o),width:u(o),height:l(o)})}if("horizontal"===n){var c=ag(0,e.height)(o);return c8(c8({},e),{},{y:e.y+e.height-c,height:c})}var f=ag(0,e.width)(o);return c8(c8({},e),{},{width:f})});return /*@__PURE__*/g(P).createElement(a4,null,e.renderRectanglesStatically(i))})}},{key:"renderRectangles",value:function(){var e=this.props,t=e.data,r=e.isAnimationActive,n=this.state.prevData;return r&&t&&t.length&&(!n||!/*@__PURE__*/g(rC)(n,t))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(t)}},{key:"renderBackground",value:function(){var e=this,t=this.props.data,r=aK(this.props.background);return t.map(function(t,n){t.value;var o=t.background,a=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,c3);if(!o)return null;var u=c8(c8(c8(c8(c8({},a),{},{fill:"#eee"},o),r),ak(e.props,t,n)),{},{index:n,key:"background-bar-".concat(n),className:"recharts-bar-background-rectangle"});return i.renderRectangle(e.props.background,u)})}},{key:"renderErrorBar",value:function(e,t){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var r=this.props,n=r.data,o=r.xAxis,i=r.yAxis,a=r.layout,u=aD(r.children,a7);if(!u)return null;var l="vertical"===a?n[0].height/2:n[0].width/2,s=function(e,t){/**
         * if the value coming from `getComposedData` is an array then this is a stacked bar chart.
         * arr[1] represents end value of the bar since the data is in the form of [startValue, endValue].
         * */var r=Array.isArray(e.value)?e.value[1]:e.value;return{x:e.x,y:e.y,value:r,errorVal:s2(e,t)}};return /*@__PURE__*/g(P).createElement(a4,{clipPath:e?"url(#clipPath-".concat(t,")"):null},u.map(function(e,t){return /*@__PURE__*/g(P).cloneElement(e,{key:"error-bar-".concat(t),// eslint-disable-line react/no-array-index-key
data:n,xAxis:o,yAxis:i,layout:a,offset:l,dataPointFormatter:s})}))}},{key:"render",value:function(){var e=this.props,t=e.hide,r=e.data,n=e.className,o=e.xAxis,i=e.yAxis,a=e.left,u=e.top,l=e.width,s=e.height,c=e.isAnimationActive,f=e.background,p=e.id;if(t||!r||!r.length)return null;var d=this.state.isAnimationFinished,h=/*@__PURE__*/g(oF)("recharts-bar",n),y=o&&o.allowDataOverflow,v=i&&i.allowDataOverflow,m=y||v,b=/*@__PURE__*/g(rT)(p)?this.id:p;return /*@__PURE__*/g(P).createElement(a4,{className:h},y||v?/*@__PURE__*/g(P).createElement("defs",null,/*@__PURE__*/g(P).createElement("clipPath",{id:"clipPath-".concat(b)},/*@__PURE__*/g(P).createElement("rect",{x:y?a:a-l/2,y:v?u:u-s/2,width:y?l:2*l,height:v?s:2*s}))):null,/*@__PURE__*/g(P).createElement(a4,{className:"recharts-bar-rectangles",clipPath:m?"url(#clipPath-".concat(b,")"):null},f?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(m,b),(!c||d)&&c2.renderCallByParent(this.props,r))}}],n=[{key:"getDerivedStateFromProps",value:function(e,t){return e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curData:e.data,prevData:t.curData}:e.data!==t.curData?{curData:e.data}:null}},{key:"renderRectangle",value:function(e,t){return /*@__PURE__*/g(P).isValidElement(e)?/*@__PURE__*/g(P).cloneElement(e,t):/*@__PURE__*/g(r0)(e)?e(t):/*@__PURE__*/g(P).createElement(a1,t)}}],r&&c7(i.prototype,r),n&&c7(i,n),Object.defineProperty(i,"prototype",{writable:!1}),i}(P.PureComponent);fr(fo,"displayName","Bar"),fr(fo,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",isAnimationActive:!uO.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"}),/**
 * Compose the data of each group
 * @param {Object} props Props for the component
 * @param {Object} item        An instance of Bar
 * @param {Array} barPosition  The offset and size of each bar
 * @param {Object} xAxis       The configuration of x-axis
 * @param {Object} yAxis       The configuration of y-axis
 * @param {Array} stackedData  The stacked data of a bar item
 * @return{Array} Composed data
 */fr(fo,"getComposedData",function(e){var t=e.props,r=e.item,n=e.barPosition,o=e.bandSize,i=e.xAxis,a=e.yAxis,u=e.xAxisTicks,l=e.yAxisTicks,s=e.stackedData,c=e.dataStartIndex,f=e.displayedData,p=e.offset,d=cs(n,r);if(!d)return null;var h=t.layout,y=r.props,v=y.dataKey,m=y.children,b=y.minPointSize,x="horizontal"===h?a:i,_=s?x.scale.domain():null,S=cm({numericAxis:x}),w=aD(m,a9),P=f.map(function(e,t){var n,f,p,y,m,x;if(s?n=cc(s[c+t],_):(n=s2(e,v),/*@__PURE__*/g(nX)(n)||(n=[S,n])),"horizontal"===h){var P,O=[a.scale(n[0]),a.scale(n[1])],E=O[0],j=O[1];f=cv({axis:i,ticks:u,bandSize:o,offset:d.offset,entry:e,index:t}),p=null!==(P=null!=j?j:E)&&void 0!==P?P:void 0,y=d.size;var k=E-j;if(m=Number.isNaN(k)?0:k,x={x:f,y:a.y,width:y,height:a.height},Math.abs(b)>0&&Math.abs(m)<Math.abs(b)){var M=as(m||b)*(Math.abs(b)-Math.abs(m));p-=M,m+=M}}else{var A=[i.scale(n[0]),i.scale(n[1])],T=A[0],C=A[1];if(f=T,p=cv({axis:a,ticks:l,bandSize:o,offset:d.offset,entry:e,index:t}),y=C-T,m=d.size,x={x:i.x,y:p,width:i.width,height:m},Math.abs(b)>0&&Math.abs(y)<Math.abs(b)){var L=as(y||b)*(Math.abs(b)-Math.abs(y));y+=L}}return c8(c8(c8({},e),{},{x:f,y:p,width:y,height:m,value:s?n:n[1],payload:e,background:x},w&&w[t]&&w[t].props),{},{tooltipPayload:[cO(r,e)],tooltipPosition:{x:f+y/2,y:p+m/2}})});return c8({data:P,layout:h},p)});/**
 * @fileOverview Bar Chart
 */var fi={},fa={};fa=/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0};var fu={};fu=/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */function(e,t){var r=!0;return la(e,function(e,n,o){return r=!!t(e,n,o)}),r},fi=/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */function(e,t,r){var n=nX(e)?fa:fu;return r&&l_(e,t,r)&&(t=void 0),n(e,u1(t,3))};var fl={},fs={};fs=/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */function(e){return function(t,r,n){var o=Object(t);if(!og(t)){var i=u1(r,3);t=n3(t),r=function(e){return i(o[e],e,o)}}var a=e(t,r,n);return a>-1?o[i?t[a]:a]:void 0}};var fc={},ff={},fp={},fd={},fh={},fy=/\s/;fh=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(e){for(var t=e.length;t--&&fy.test(e.charAt(t)););return t};/** Used to match leading whitespace. */var fv=/^\s+/;fd=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(e){return e?e.slice(0,fh(e)+1).replace(fv,""):e};/** Used as references for various `Number` constants. */var fm=0/0,fg=/^[-+]0x[0-9a-f]+$/i,fb=/^0b[01]+$/i,fx=/^0o[0-7]+$/i,f_=parseInt;fp=/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function(e){if("number"==typeof e)return e;if(i0(e))return fm;if(nr(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=nr(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=fd(e);var r=fb.test(e);return r||fx.test(e)?f_(e.slice(2),r?2:8):fg.test(e)?fm:+e};/** Used as references for various `Number` constants. */var fS=1/0;ff=/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */function(e){return e?(e=fp(e))===fS||e===-fS?(e<0?-1:1)*17976931348623157e292:e==e?e:0:0===e?e:0},fc=/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */function(e){var t=ff(e),r=t%1;return t==t?r?t-r:t:0};/* Built-in method references for those with the same name as other `lodash` methods. */var fw=Math.max;fl=fs(/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */function(e,t,r){var n=null==e?0:e.length;if(!n)return -1;var o=null==r?0:fc(r);return o<0&&(o=fw(n+o,0)),sf(e,u1(t,3),o)});var fP={},fO={},fE={},r3=_("23YZo");fE=function(){return r3.Date.now()};/* Built-in method references for those with the same name as other `lodash` methods. */var fj=Math.max,fk=Math.min;fO=/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function(e,t,r){var n,o,i,a,u,l,s=0,c=!1,f=!1,p=!0;if("function"!=typeof e)throw TypeError("Expected a function");function d(t){var r=n,i=o;return n=o=void 0,s=t,a=e.apply(i,r)}function h(e){var r=e-l,n=e-s;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===l||r>=t||r<0||f&&n>=i}function y(){var e,r,n,o=fE();if(h(o))return v(o);// Restart the timer.
u=setTimeout(y,(e=o-l,r=o-s,n=t-e,f?fk(n,i-r):n))}function v(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(u=void 0,p&&n)?d(e):(n=o=void 0,a))}function m(){var e,r=fE(),i=h(r);if(n=arguments,o=this,l=r,i){if(void 0===u)return(// Reset any `maxWait` timer.
s=e=l,// Start the timer for the trailing edge.
u=setTimeout(y,t),c?d(e):a);if(f)return(// Handle invocations in a tight loop.
clearTimeout(u),u=setTimeout(y,t),d(l))}return void 0===u&&(u=setTimeout(y,t)),a}return t=fp(t)||0,nr(r)&&(c=!!r.leading,i=(f="maxWait"in r)?fj(fp(r.maxWait)||0,t):i,p="trailing"in r?!!r.trailing:p),m.cancel=function(){void 0!==u&&clearTimeout(u),s=0,n=l=o=u=void 0},m.flush=function(){return void 0===u?a:v(fE())},m},fP=/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw TypeError("Expected a function");return nr(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),fO(e,t,{leading:n,maxWait:t,trailing:o})};var fM={},fA={},fT=Math.ceil,fC=Math.max;fA=/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */function(e,t,r,n){for(var o=-1,i=fC(fT((t-e)/(r||1)),0),a=Array(i);i--;)a[n?i:++o]=e,e+=r;return a},fM=function(e,t,r){return r&&"number"!=typeof r&&l_(e,t,r)&&(t=r=void 0),// Ensure the sign of `-0` is preserved.
e=ff(e),void 0===t?(t=e,e=0):t=ff(t),r=void 0===r?e<t?1:-1:ff(r),fA(e,t,r,void 0)};var fL={};fL=/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */function(e){return!0===e||!1===e||n7(e)&&"[object Boolean]"==r1(e)};var P=_("acw62");/**
 * Given an array and a number N, return a new array which contains every nTh
 * element of the input array. For n below 1, an empty array is returned.
 * If isValid is provided, all candidates must suffice the condition, else undefined is returned.
 * @param {T[]} array An input array.
 * @param {integer} n A number
 * @param {Function} isValid A function to evaluate a candidate form the array
 * @returns {T[]} The result array of the same type as the input array.
 */function fN(e,t,r){if(t<1)return[];if(1===t&&void 0===r)return e;for(var n=[],o=0;o<e.length;o+=t){if(void 0!==r&&!0!==r(e[o]))return;n.push(e[o])}return n}var fI={},fR={};function fD(e){return(fD="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fG(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,fK(n.key),n)}}function fV(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function fF(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fV(Object(r),!0).forEach(function(t){fz(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fV(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function fz(e,t,r){return(t=fK(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function fK(e){var t=function(e,t){if("object"!==fD(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==fD(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===fD(t)?t:String(t)}fR=/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function(e,t,r){"__proto__"==t&&lb?lb(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r},fI=/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */function(e,t){var r={};return t=u1(t,3),lu(e,function(e,n,o){fR(r,n,t(e,n,o))}),r};var fQ=function(e,t,r,n,o){var i=e.width,a=e.height,u=e.layout,l=e.children,s=Object.keys(t),c={left:r.left,leftMirror:r.left,right:i-r.right,rightMirror:i-r.right,top:r.top,topMirror:r.top,bottom:a-r.bottom,bottomMirror:a-r.bottom},f=!!aG(l,fo);return s.reduce(function(i,a){var l,s,p,d,h,y=t[a],v=y.orientation,m=y.domain,g=y.padding,b=void 0===g?{}:g,x=y.mirror,_=y.reversed,S="".concat(v).concat(x?"Mirror":"");if("number"===y.type&&("gap"===y.padding||"no-gap"===y.padding)){var w=m[1]-m[0],P=1/0,O=y.categoricalDomain.sort();O.forEach(function(e,t){t>0&&(P=Math.min((e||0)-(O[t-1]||0),P))});var E=P/w,j="vertical"===y.layout?r.height:r.width;if("gap"===y.padding&&(l=E*j/2),"no-gap"===y.padding){var k=ay(e.barCategoryGap,E*j),M=E*j/2;l=M-k-(M-k)/j*k}}s="xAxis"===n?[r.left+(b.left||0)+(l||0),r.left+r.width-(b.right||0)-(l||0)]:"yAxis"===n?"horizontal"===u?[r.top+r.height-(b.bottom||0),r.top+(b.top||0)]:[r.top+(b.top||0)+(l||0),r.top+r.height-(b.bottom||0)-(l||0)]:y.range,_&&(s=[s[1],s[0]]);var A=cu(y,o,f),T=A.scale,C=A.realScaleType;T.domain(m).range(s),cl(T);var L=ch(T,fF(fF({},y),{},{realScaleType:C}));"xAxis"===n?(h="top"===v&&!x||"bottom"===v&&x,p=r.left,d=c[S]-h*y.height):"yAxis"===n&&(h="left"===v&&!x||"right"===v&&x,p=c[S]-h*y.width,d=r.top);var N=fF(fF(fF({},y),L),{},{realScaleType:C,x:p,y:d,scale:T,width:"xAxis"===n?r.width:y.width,height:"yAxis"===n?r.height:y.height});return N.bandSize=cw(N,L),y.hide||"xAxis"!==n?y.hide||(c[S]+=(h?-1:1)*N.width):c[S]+=(h?-1:1)*N.height,fF(fF({},i),{},fz({},a,N))},{})},fH=function(e,t){var r=e.x,n=e.y,o=t.x,i=t.y;return{x:Math.min(r,o),y:Math.min(n,i),width:Math.abs(o-r),height:Math.abs(i-n)}},fW=/*#__PURE__*/function(){var e,t;function r(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r),this.scale=e}return e=[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.bandAware,n=t.position;if(void 0!==e){if(n)switch(n){case"start":default:return this.scale(e);case"middle":var o=this.bandwidth?this.bandwidth()/2:0;return this.scale(e)+o;case"end":var i=this.bandwidth?this.bandwidth():0;return this.scale(e)+i}if(r){var a=this.bandwidth?this.bandwidth()/2:0;return this.scale(e)+a}return this.scale(e)}}},{key:"isInRange",value:function(e){var t=this.range(),r=t[0],n=t[t.length-1];return r<=n?e>=r&&e<=n:e>=n&&e<=r}}],t=[{key:"create",value:function(e){return new r(e)}}],e&&fG(r.prototype,e),t&&fG(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}();fz(fW,"EPS",1e-4);var fB=function(e){var t=Object.keys(e).reduce(function(t,r){return fF(fF({},t),{},fz({},r,fW.create(e[r])))},{});return fF(fF({},t),{},{apply:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.bandAware,o=r.position;return /*@__PURE__*/g(fI)(e,function(e,r){return t[r].apply(e,{bandAware:n,position:o})})},isInRange:function(e){return /*@__PURE__*/g(fi)(e,function(e,r){return t[r].isInRange(e)})}})},fY=function(e){var t=e.width,r=e.height,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(n%180+180)%180*Math.PI/180,i=Math.atan(r/t);return Math.abs(o>i&&o<Math.PI-i?r/Math.sin(o):t/Math.cos(o))};function fU(e){return(fU="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f$(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function fq(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f$(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!==fU(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==fU(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===fU(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f$(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function fX(e,t,r){return fY({width:e.width+t.width,height:e.height+t.height},r)}function fJ(e,t){var r,n,o=e.angle,i=e.ticks,a=e.tickFormatter,u=e.viewBox,l=e.orientation,s=e.minTickGap,c=e.unit,f=e.fontSize,p=e.letterSpacing,d=u.x,h=u.y,y=u.width,v=u.height,m="top"===l||"bottom"===l?"width":"height",b=(i||[]).slice(),x=c&&"width"===m?uI(c,{fontSize:f,letterSpacing:p}):{width:0,height:0},_=b.length,S=_>=2?as(b[1].coordinate-b[0].coordinate):1;if(1===S?(r="width"===m?d:h,n="width"===m?d+y:h+v):(r="width"===m?d+y:h+v,n="width"===m?d:h),t){// Try to guarantee the tail to be displayed
var w=i[_-1],P=/*@__PURE__*/g(r0)(a)?a(w.value,_-1):w.value,O="width"===m?fX(uI(P,{fontSize:f,letterSpacing:p}),x,o):uI(P,{fontSize:f,letterSpacing:p})[m],E=S*(w.coordinate+S*O/2-n);b[_-1]=w=fq(fq({},w),{},{tickCoord:E>0?w.coordinate-E*S:w.coordinate}),S*(w.tickCoord-S*O/2-r)>=0&&S*(w.tickCoord+S*O/2-n)<=0&&(n=w.tickCoord-S*(O/2+s),b[_-1]=fq(fq({},w),{},{isShow:!0}))}for(var j=t?_-1:_,k=0;k<j;k++){var M=b[k],A=/*@__PURE__*/g(r0)(a)?a(M.value,k):M.value,T="width"===m?fX(uI(A,{fontSize:f,letterSpacing:p}),x,o):uI(A,{fontSize:f,letterSpacing:p})[m];if(0===k){var C=S*(M.coordinate-S*T/2-r);b[k]=M=fq(fq({},M),{},{tickCoord:C<0?M.coordinate-C*S:M.coordinate})}else b[k]=M=fq(fq({},M),{},{tickCoord:M.coordinate});S*(M.tickCoord-S*T/2-r)>=0&&S*(M.tickCoord+S*T/2-n)<=0&&(r=M.tickCoord+S*(T/2+s),b[k]=fq(fq({},M),{},{isShow:!0}))}return b}function fZ(e,t,r){var n=e.tick,o=e.ticks,i=e.viewBox,a=e.minTickGap,u=e.orientation,l=e.interval,s=e.tickFormatter,c=e.unit,f=e.angle;return o&&o.length&&n?af(l)||uO.isSsr?fN(o,("number"==typeof l&&af(l)?l:0)+1):"equidistantPreserveStart"===l?function(e){for(var t=1,r=fN(e,1,function(e){return e.isShow});t<=e.length;){if(void 0!==r)return r;r=fN(e,++t,function(e){return e.isShow})}return e.slice(0,1)}(fJ({angle:f,ticks:o,tickFormatter:s,viewBox:i,orientation:u,minTickGap:a,unit:c,fontSize:t,letterSpacing:r})):("preserveStart"===l||"preserveStartEnd"===l?fJ({angle:f,ticks:o,tickFormatter:s,viewBox:i,orientation:u,minTickGap:a,unit:c,fontSize:t,letterSpacing:r},"preserveStartEnd"===l):function(e){var t,r,n=e.angle,o=e.ticks,i=e.tickFormatter,a=e.viewBox,u=e.orientation,l=e.minTickGap,s=e.unit,c=e.fontSize,f=e.letterSpacing,p=a.x,d=a.y,h=a.width,y=a.height,v="top"===u||"bottom"===u?"width":"height",m=s&&"width"===v?uI(s,{fontSize:c,letterSpacing:f}):{width:0,height:0},b=(o||[]).slice(),x=b.length,_=x>=2?as(b[1].coordinate-b[0].coordinate):1;1===_?(t="width"===v?p:d,r="width"===v?p+h:d+y):(t="width"===v?p+h:d+y,r="width"===v?p:d);for(var S=x-1;S>=0;S--){var w=b[S],P=/*@__PURE__*/g(r0)(i)?i(w.value,x-S-1):w.value,O="width"===v?fX(uI(P,{fontSize:c,letterSpacing:f}),m,n):uI(P,{fontSize:c,letterSpacing:f})[v];if(S===x-1){var E=_*(w.coordinate+_*O/2-r);b[S]=w=fq(fq({},w),{},{tickCoord:E>0?w.coordinate-E*_:w.coordinate})}else b[S]=w=fq(fq({},w),{},{tickCoord:w.coordinate});_*(w.tickCoord-_*O/2-t)>=0&&_*(w.tickCoord+_*O/2-r)<=0&&(r=w.tickCoord-_*(O/2+l),b[S]=fq(fq({},w),{},{isShow:!0}))}return b}({angle:f,ticks:o,tickFormatter:s,viewBox:i,orientation:u,minTickGap:a,unit:c,fontSize:t,letterSpacing:r})).filter(function(e){return e.isShow}):[]}var P=(_("acw62"),_("acw62"));/**
 * @fileOverview Default Tooltip Content
 */function f0(e){return(f0="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f1(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function f2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f3(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f2(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!==f0(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==f0(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===f0(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f2(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function f4(e){return /*@__PURE__*/g(nX)(e)&&ap(e[0])&&ap(e[1])?e.join(" ~ "):e}var f5=function(e){var t=e.separator,r=void 0===t?" : ":t,n=e.contentStyle,o=e.itemStyle,i=void 0===o?{}:o,a=e.labelStyle,u=e.payload,l=e.formatter,s=e.itemSorter,c=e.wrapperClassName,f=e.labelClassName,p=e.label,d=e.labelFormatter,h=f3({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},void 0===n?{}:n),y=f3({margin:0},void 0===a?{}:a),v=!/*@__PURE__*/g(rT)(p),m=v?p:"",b=/*@__PURE__*/g(oF)("recharts-default-tooltip",c),x=/*@__PURE__*/g(oF)("recharts-tooltip-label",f);return v&&d&&null!=u&&(m=d(p,u)),/*@__PURE__*/g(P).createElement("div",{className:b,style:h},/*@__PURE__*/g(P).createElement("p",{className:x,style:y},/*@__PURE__*/g(P).isValidElement(m)?m:"".concat(m)),function(){if(u&&u.length){var e=(s?/*@__PURE__*/g(uq)(u,s):u).map(function(e,t){if("none"===e.type)return null;var n=f3({display:"block",paddingTop:4,paddingBottom:4,color:e.color||"#000"},i),o=e.formatter||l||f4,a=e.value,s=e.name,c=a,f=s;if(o&&null!=c&&null!=f){var p=o(a,s,e,t,u);if(Array.isArray(p)){var d=function(e){if(Array.isArray(e))return e}(p)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(p,2)||function(e,t){if(e){if("string"==typeof e)return f1(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f1(e,t)}}(p,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();c=d[0],f=d[1]}else c=p}return /*@__PURE__*/g(P).createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(t),style:n},ap(f)?/*@__PURE__*/g(P).createElement("span",{className:"recharts-tooltip-item-name"},f):null,ap(f)?/*@__PURE__*/g(P).createElement("span",{className:"recharts-tooltip-item-separator"},r):null,/*@__PURE__*/g(P).createElement("span",{className:"recharts-tooltip-item-value"},c),/*@__PURE__*/g(P).createElement("span",{className:"recharts-tooltip-item-unit"},e.unit||""))});return /*@__PURE__*/g(P).createElement("ul",{className:"recharts-tooltip-item-list",style:{padding:0,margin:0}},e)}return null}())};function f6(e){return(f6="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f8(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f7(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f8(Object(r),!0).forEach(function(t){pn(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f8(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function f9(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,po(n.key),n)}}function pe(e,t){return(pe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function pt(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pr(e){return(pr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function pn(e,t,r){return(t=po(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function po(e){var t=function(e,t){if("object"!==f6(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==f6(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===f6(t)?t:String(t)}var pi="recharts-tooltip-wrapper";function pa(e){return e.dataKey}var pu=/*#__PURE__*/function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&pe(e,t)}(i,e);var t,r,n,o=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=pr(i);if(t){var n=pr(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===f6(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return pt(e)}(this,e)});function i(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return pn(pt(e=o.call.apply(o,[this].concat(r))),"state",{boxWidth:-1,boxHeight:-1,dismissed:!1,dismissedAtCoordinate:{x:0,y:0}}),pn(pt(e),"handleKeyDown",function(t){"Escape"===t.key&&e.setState({dismissed:!0,dismissedAtCoordinate:f7(f7({},e.state.dismissedAtCoordinate),{},{x:e.props.coordinate.x,y:e.props.coordinate.y})})}),pn(pt(e),"getTranslate",function(t){var r=t.key,n=t.tooltipDimension,o=t.viewBoxDimension,i=e.props,a=i.allowEscapeViewBox,u=i.reverseDirection,l=i.coordinate,s=i.offset,c=i.position,f=i.viewBox;if(c&&af(c[r]))return c[r];var p=l[r]-n-s,d=l[r]+s;return a[r]?u[r]?p:d:u[r]?p<f[r]?Math.max(d,f[r]):Math.max(p,f[r]):d+n>f[r]+o?Math.max(p,f[r]):Math.max(d,f[r])}),e}return r=[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"updateBBox",value:function(){var e=this.state,t=e.boxWidth,r=e.boxHeight;if(e.dismissed?(document.removeEventListener("keydown",this.handleKeyDown),(this.props.coordinate.x!==this.state.dismissedAtCoordinate.x||this.props.coordinate.y!==this.state.dismissedAtCoordinate.y)&&this.setState({dismissed:!1})):document.addEventListener("keydown",this.handleKeyDown),this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var n=this.wrapperNode.getBoundingClientRect();(Math.abs(n.width-t)>1||Math.abs(n.height-r)>1)&&this.setState({boxWidth:n.width,boxHeight:n.height})}else(-1!==t||-1!==r)&&this.setState({boxWidth:-1,boxHeight:-1})}},{key:"render",value:function(){var e,t,r,n,o,i,a=this,u=this.props,l=u.payload,s=u.isAnimationActive,c=u.animationDuration,f=u.animationEasing,p=u.filterNull,d=(e=u.payloadUniqBy,t=p&&l&&l.length?l.filter(function(e){return!/*@__PURE__*/g(rT)(e.value)}):l,!0===e?/*@__PURE__*/g(su)(t,pa):/*@__PURE__*/g(r0)(e)?/*@__PURE__*/g(su)(t,e):t),h=d&&d.length,y=this.props,v=y.content,m=y.viewBox,b=y.coordinate,x=y.position,_=y.active,S=y.wrapperStyle,w=f7({pointerEvents:"none",visibility:!this.state.dismissed&&_&&h?"visible":"hidden",position:"absolute",top:0,left:0},S);if(x&&af(x.x)&&af(x.y))n=x.x,o=x.y;else{var O=this.state,E=O.boxWidth,j=O.boxHeight;E>0&&j>0&&b?(n=this.getTranslate({key:"x",tooltipDimension:E,viewBoxDimension:m.width}),o=this.getTranslate({key:"y",tooltipDimension:j,viewBoxDimension:m.height})):w.visibility="hidden"}w=f7(f7({},o2({transform:this.props.useTranslate3d?"translate3d(".concat(n,"px, ").concat(o,"px, 0)"):"translate(".concat(n,"px, ").concat(o,"px)")})),w),s&&_&&(w=f7(f7({},o2({transition:"transform ".concat(c,"ms ").concat(f)})),w));var k=/*@__PURE__*/g(oF)(pi,(pn(i={},"".concat(pi,"-right"),af(n)&&b&&af(b.x)&&n>=b.x),pn(i,"".concat(pi,"-left"),af(n)&&b&&af(b.x)&&n<b.x),pn(i,"".concat(pi,"-bottom"),af(o)&&b&&af(b.y)&&o>=b.y),pn(i,"".concat(pi,"-top"),af(o)&&b&&af(b.y)&&o<b.y),i));return /*@__PURE__*/g(P).createElement("div",{tabIndex:-1,role:"dialog",className:k,style:w,ref:function(e){a.wrapperNode=e}},(r=f7(f7({},this.props),{},{payload:d}),/*@__PURE__*/g(P).isValidElement(v)?/*@__PURE__*/g(P).cloneElement(v,r):/*@__PURE__*/g(r0)(v)?/*@__PURE__*/g(P).createElement(v,r):/*@__PURE__*/g(P).createElement(f5,r)))}}],f9(i.prototype,r),n&&f9(i,n),Object.defineProperty(i,"prototype",{writable:!1}),i}(P.PureComponent);pn(pu,"displayName","Tooltip"),pn(pu,"defaultProps",{active:!1,allowEscapeViewBox:{x:!1,y:!1},reverseDirection:{x:!1,y:!1},offset:10,viewBox:{x:0,y:0,height:0,width:0},coordinate:{x:0,y:0},cursorStyle:{},separator:" : ",wrapperStyle:{},contentStyle:{},itemStyle:{},labelStyle:{},cursor:!0,trigger:"hover",isAnimationActive:!uO.isSsr,animationEasing:"ease",animationDuration:400,filterNull:!0,useTranslate3d:!1});var P=_("acw62");function pl(e){return(pl="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ps(){return(ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function pc(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function pf(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pc(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!==pl(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==pl(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===pl(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pc(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var pp={curveBasisClosed:lU.curveBasisClosed,curveBasisOpen:lU.curveBasisOpen,curveBasis:lU.curveBasis,curveBumpX:lU.curveBumpX,curveBumpY:lU.curveBumpY,curveLinearClosed:lU.curveLinearClosed,curveLinear:lU.curveLinear,curveMonotoneX:lU.curveMonotoneX,curveMonotoneY:lU.curveMonotoneY,curveNatural:lU.curveNatural,curveStep:lU.curveStep,curveStepAfter:lU.curveStepAfter,curveStepBefore:lU.curveStepBefore},pd=function(e){return e.x===+e.x&&e.y===+e.y},ph=function(e){return e.x},py=function(e){return e.y},pv=function(e,t){if(/*@__PURE__*/g(r0)(e))return e;var r="curve".concat(/*@__PURE__*/g(lS)(e));return("curveMonotone"===r||"curveBump"===r)&&t?pp["".concat(r).concat("vertical"===t?"Y":"X")]:pp[r]||lU.curveLinear},pm=function(e){var t,r=e.type,n=e.points,o=void 0===n?[]:n,i=e.baseLine,a=e.layout,u=e.connectNulls,l=void 0!==u&&u,s=pv(void 0===r?"linear":r,a),c=l?o.filter(function(e){return pd(e)}):o;if(/*@__PURE__*/g(nX)(i)){var f=l?i.filter(function(e){return pd(e)}):i,p=c.map(function(e,t){return pf(pf({},e),{},{base:f[t]})});return(t="vertical"===a?(0,lU.area)().y(py).x1(ph).x0(function(e){return e.base.x}):(0,lU.area)().x(ph).y1(py).y0(function(e){return e.base.y})).defined(pd).curve(s),t(p)}return(t="vertical"===a&&af(i)?(0,lU.area)().y(py).x1(ph).x0(i):af(i)?(0,lU.area)().x(ph).y1(py).y0(i):(0,lU.line)().x(ph).y(py)).defined(pd).curve(s),t(c)},pg=function(e){var t=e.className,r=e.points,n=e.path,o=e.pathRef;if((!r||!r.length)&&!n)return null;var i=r&&r.length?pm(e):n;return /*@__PURE__*/g(P).createElement("path",ps({},aK(e),aj(e),{className:/*@__PURE__*/g(oF)("recharts-curve",t),d:i,ref:o}))},P=_("acw62");function pb(e){return(pb="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var px=["x","y","top","left","width","height","className"];function p_(){return(p_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function pS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var pw=function(e){var t=e.x,r=void 0===t?0:t,n=e.y,o=void 0===n?0:n,i=e.top,a=void 0===i?0:i,u=e.left,l=void 0===u?0:u,s=e.width,c=void 0===s?0:s,f=e.height,p=void 0===f?0:f,d=e.className,h=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pS(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!==pb(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==pb(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===pb(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pS(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({x:r,y:o,top:a,left:l,width:c,height:p},function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,px));return af(r)&&af(o)&&af(c)&&af(p)&&af(a)&&af(l)?/*@__PURE__*/g(P).createElement("path",p_({},aK(h,!0),{className:/*@__PURE__*/g(oF)("recharts-cross",d),d:"M".concat(r,",").concat(a,"v").concat(p,"M").concat(l,",").concat(o,"h").concat(c)})):null},P=_("acw62");function pP(e){return(pP="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pO(){return(pO=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function pE(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function pj(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pE(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!==pP(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==pP(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===pP(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pE(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var pk=function(e){var t=e.cx,r=e.cy,n=e.radius,o=e.angle,i=e.sign,a=e.isExternal,u=e.cornerRadius,l=e.cornerIsExternal,s=u*(a?1:-1)+n,c=Math.asin(u/s)/cM,f=l?o:o+i*c,p=cA(t,r,s,f),d=cA(t,r,n,f),h=l?o-i*c:o;return{center:p,circleTangency:d,lineTangency:cA(t,r,s*Math.cos(c*cM),h),theta:c}},pM=function(e){var t=e.cx,r=e.cy,n=e.innerRadius,o=e.outerRadius,i=e.startAngle,a=e.endAngle,u=as(a-i)*Math.min(Math.abs(a-i),359.999),l=i+u,s=cA(t,r,o,i),c=cA(t,r,o,l),f="M ".concat(s.x,",").concat(s.y,"\n    A ").concat(o,",").concat(o,",0,\n    ").concat(+(Math.abs(u)>180),",").concat(+(i>l),",\n    ").concat(c.x,",").concat(c.y,"\n  ");if(n>0){var p=cA(t,r,n,i),d=cA(t,r,n,l);f+="L ".concat(d.x,",").concat(d.y,"\n            A ").concat(n,",").concat(n,",0,\n            ").concat(+(Math.abs(u)>180),",").concat(+(i<=l),",\n            ").concat(p.x,",").concat(p.y," Z")}else f+="L ".concat(t,",").concat(r," Z");return f},pA=function(e){var t=e.cx,r=e.cy,n=e.innerRadius,o=e.outerRadius,i=e.cornerRadius,a=e.forceCornerRadius,u=e.cornerIsExternal,l=e.startAngle,s=e.endAngle,c=as(s-l),f=pk({cx:t,cy:r,radius:o,angle:l,sign:c,cornerRadius:i,cornerIsExternal:u}),p=f.circleTangency,d=f.lineTangency,h=f.theta,y=pk({cx:t,cy:r,radius:o,angle:s,sign:-c,cornerRadius:i,cornerIsExternal:u}),v=y.circleTangency,m=y.lineTangency,g=y.theta,b=u?Math.abs(l-s):Math.abs(l-s)-h-g;if(b<0)return a?"M ".concat(d.x,",").concat(d.y,"\n        a").concat(i,",").concat(i,",0,0,1,").concat(2*i,",0\n        a").concat(i,",").concat(i,",0,0,1,").concat(-(2*i),",0\n      "):pM({cx:t,cy:r,innerRadius:n,outerRadius:o,startAngle:l,endAngle:s});var x="M ".concat(d.x,",").concat(d.y,"\n    A").concat(i,",").concat(i,",0,0,").concat(+(c<0),",").concat(p.x,",").concat(p.y,"\n    A").concat(o,",").concat(o,",0,").concat(+(b>180),",").concat(+(c<0),",").concat(v.x,",").concat(v.y,"\n    A").concat(i,",").concat(i,",0,0,").concat(+(c<0),",").concat(m.x,",").concat(m.y,"\n  ");if(n>0){var _=pk({cx:t,cy:r,radius:n,angle:l,sign:c,isExternal:!0,cornerRadius:i,cornerIsExternal:u}),S=_.circleTangency,w=_.lineTangency,P=_.theta,O=pk({cx:t,cy:r,radius:n,angle:s,sign:-c,isExternal:!0,cornerRadius:i,cornerIsExternal:u}),E=O.circleTangency,j=O.lineTangency,k=O.theta,M=u?Math.abs(l-s):Math.abs(l-s)-P-k;if(M<0&&0===i)return"".concat(x,"L").concat(t,",").concat(r,"Z");x+="L".concat(j.x,",").concat(j.y,"\n      A").concat(i,",").concat(i,",0,0,").concat(+(c<0),",").concat(E.x,",").concat(E.y,"\n      A").concat(n,",").concat(n,",0,").concat(+(M>180),",").concat(+(c>0),",").concat(S.x,",").concat(S.y,"\n      A").concat(i,",").concat(i,",0,0,").concat(+(c<0),",").concat(w.x,",").concat(w.y,"Z")}else x+="L".concat(t,",").concat(r,"Z");return x},pT={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},pC=function(e){var t,r=pj(pj({},pT),e),n=r.cx,o=r.cy,i=r.innerRadius,a=r.outerRadius,u=r.cornerRadius,l=r.forceCornerRadius,s=r.cornerIsExternal,c=r.startAngle,f=r.endAngle,p=r.className;if(a<i||c===f)return null;var d=/*@__PURE__*/g(oF)("recharts-sector",p),h=a-i,y=ay(u,h,0,!0);return t=y>0&&360>Math.abs(c-f)?pA({cx:n,cy:o,innerRadius:i,outerRadius:a,cornerRadius:Math.min(y,h/2),forceCornerRadius:l,cornerIsExternal:s,startAngle:c,endAngle:f}):pM({cx:n,cy:o,innerRadius:i,outerRadius:a,startAngle:c,endAngle:f}),/*@__PURE__*/g(P).createElement("path",pO({},aK(r,!0),{className:d,d:t,role:"img"}))},P=_("acw62");function pL(){return(pL=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var pN=function(e){var t=e.cx,r=e.cy,n=e.r,o=e.className,i=/*@__PURE__*/g(oF)("recharts-dot",o);return t===+t&&r===+r&&n===+n?/*@__PURE__*/g(P).createElement("circle",pL({},aK(e),aj(e),{className:i,cx:t,cy:r,r:n})):null},P=_("acw62"),pI=["viewBox"],pR=["viewBox"],pD=["ticks"];function pG(e){return(pG="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pV(){return(pV=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function pF(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function pz(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pF(Object(r),!0).forEach(function(t){pB(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pF(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function pK(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function pQ(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,pY(n.key),n)}}function pH(e,t){return(pH=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function pW(e){return(pW=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function pB(e,t,r){return(t=pY(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function pY(e){var t=function(e,t){if("object"!==pG(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==pG(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===pG(t)?t:String(t)}var pU=/*#__PURE__*/function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&pH(e,t)}(i,e);var t,r,n,o=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=pW(i);if(t){var n=pW(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===pG(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function i(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={fontSize:"",letterSpacing:""},t}return r=[{key:"shouldComponentUpdate",value:function(e,t){var r=e.viewBox,n=pK(e,pI),o=this.props,i=o.viewBox,a=pK(o,pR);return!a_(r,i)||!a_(n,a)||!a_(t,this.state)}},{key:"componentDidMount",value:function(){var e=this.layerReference;if(e){var t=e.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];t&&this.setState({fontSize:window.getComputedStyle(t).fontSize,letterSpacing:window.getComputedStyle(t).letterSpacing})}}},{key:"getTickLineCoord",value:function(e){var t,r,n,o,i,a,u=this.props,l=u.x,s=u.y,c=u.width,f=u.height,p=u.orientation,d=u.tickSize,h=u.mirror,y=u.tickMargin,v=h?-1:1,m=e.tickSize||d,g=af(e.tickCoord)?e.tickCoord:e.coordinate;switch(p){case"top":t=r=e.coordinate,a=(n=(o=s+ +!h*f)-v*m)-v*y,i=g;break;case"left":n=o=e.coordinate,i=(t=(r=l+ +!h*c)-v*m)-v*y,a=g;break;case"right":n=o=e.coordinate,i=(t=(r=l+ +h*c)+v*m)+v*y,a=g;break;default:t=r=e.coordinate,a=(n=(o=s+ +h*f)+v*m)+v*y,i=g}return{line:{x1:t,y1:n,x2:r,y2:o},tick:{x:i,y:a}}}},{key:"getTickTextAnchor",value:function(){var e,t=this.props,r=t.orientation,n=t.mirror;switch(r){case"left":e=n?"start":"end";break;case"right":e=n?"end":"start";break;default:e="middle"}return e}},{key:"getTickVerticalAnchor",value:function(){var e=this.props,t=e.orientation,r=e.mirror,n="end";switch(t){case"left":case"right":n="middle";break;case"top":n=r?"start":"end";break;default:n=r?"end":"start"}return n}},{key:"renderAxisLine",value:function(){var e=this.props,t=e.x,r=e.y,n=e.width,o=e.height,i=e.orientation,a=e.mirror,u=e.axisLine,l=pz(pz(pz({},aK(this.props)),aK(u)),{},{fill:"none"});if("top"===i||"bottom"===i){var s=+("top"===i&&!a||"bottom"===i&&a);l=pz(pz({},l),{},{x1:t,y1:r+s*o,x2:t+n,y2:r+s*o})}else{var c=+("left"===i&&!a||"right"===i&&a);l=pz(pz({},l),{},{x1:t+c*n,y1:r,x2:t+c*n,y2:r+o})}return /*@__PURE__*/g(P).createElement("line",pV({},l,{className:/*@__PURE__*/g(oF)("recharts-cartesian-axis-line",/*@__PURE__*/g(iq)(u,"className"))}))}},{key:"renderTicks",value:/**
     * render the ticks
     * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
     * @param {string} fontSize Fontsize to consider for tick spacing
     * @param {string} letterSpacing Letterspacing to consider for tick spacing
     * @return {ReactComponent} renderedTicks
     */function(e,t,r){var n=this,o=this.props,a=o.tickLine,u=o.stroke,l=o.tick,s=o.tickFormatter,c=o.unit,f=fZ(pz(pz({},this.props),{},{ticks:e}),t,r),p=this.getTickTextAnchor(),d=this.getTickVerticalAnchor(),h=aK(this.props),y=aK(l),v=pz(pz({},h),{},{fill:"none"},aK(a)),m=f.map(function(e,t){var r=n.getTickLineCoord(e),o=r.line,m=r.tick,b=pz(pz(pz(pz({textAnchor:p,verticalAnchor:d},h),{},{stroke:"none",fill:u},y),m),{},{index:t,payload:e,visibleTicksCount:f.length,tickFormatter:s});return /*@__PURE__*/g(P).createElement(a4,pV({className:"recharts-cartesian-axis-tick",key:"tick-".concat(t)// eslint-disable-line react/no-array-index-key
},ak(n.props,e,t)),a&&/*@__PURE__*/g(P).createElement("line",pV({},v,o,{className:/*@__PURE__*/g(oF)("recharts-cartesian-axis-tick-line",/*@__PURE__*/g(iq)(a,"className"))})),l&&i.renderTickItem(l,b,"".concat(/*@__PURE__*/g(r0)(s)?s(e.value,t):e.value).concat(c||"")))});return /*@__PURE__*/g(P).createElement("g",{className:"recharts-cartesian-axis-ticks"},m)}},{key:"render",value:function(){var e=this,t=this.props,r=t.axisLine,n=t.width,o=t.height,i=t.ticksGenerator,a=t.className;if(t.hide)return null;var u=this.props,l=u.ticks,s=pK(u,pD),c=l;return(/*@__PURE__*/g(r0)(i)&&(c=i(l&&l.length>0?this.props:s)),n<=0||o<=0||!c||!c.length)?null:/*@__PURE__*/g(P).createElement(a4,{className:/*@__PURE__*/g(oF)("recharts-cartesian-axis",a),ref:function(t){e.layerReference=t}},r&&this.renderAxisLine(),this.renderTicks(c,this.state.fontSize,this.state.letterSpacing),cW.renderCallByParent(this.props))}}],n=[{key:"renderTickItem",value:function(e,t,r){return /*@__PURE__*/g(P).isValidElement(e)?/*@__PURE__*/g(P).cloneElement(e,t):/*@__PURE__*/g(r0)(e)?e(t):/*@__PURE__*/g(P).createElement(u$,pV({},t,{className:"recharts-cartesian-axis-tick-value"}),r)}}],r&&pQ(i.prototype,r),n&&pQ(i,n),Object.defineProperty(i,"prototype",{writable:!1}),i}(P.Component);pB(pU,"displayName","CartesianAxis"),pB(pU,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},// The orientation of axis
orientation:"bottom",// The ticks
ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,// The width or height of tick
tickSize:6,tickMargin:2,interval:"preserveEnd"});var P=_("acw62");function p$(e){return(p$="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pq(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function pX(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pq(Object(r),!0).forEach(function(t){pJ(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pq(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function pJ(e,t,r){var n;return(n=function(e,t){if("object"!==p$(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==p$(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===p$(n)?n:String(n))in e)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var pZ=["Webkit","Moz","O","ms"],p0=function(e,t){if(!e)return null;var r=e.replace(/(\w)/,function(e){return e.toUpperCase()}),n=pZ.reduce(function(e,n){return pX(pX({},e),{},pJ({},n+r,t))},{});return n[e]=t,n};function p1(e){return(p1="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p2(){return(p2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p3(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function p4(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p3(Object(r),!0).forEach(function(t){p9(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p3(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function p5(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,de(n.key),n)}}function p6(e,t){return(p6=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function p8(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p7(e){return(p7=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p9(e,t,r){return(t=de(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function de(e){var t=function(e,t){if("object"!==p1(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==p1(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===p1(t)?t:String(t)}var dt=function(e){var t=e.data,r=e.startIndex,n=e.endIndex,o=e.x,i=e.width,a=e.travellerWidth;if(!t||!t.length)return{};var u=t.length,l=(0,lY.scalePoint)().domain(/*@__PURE__*/g(fM)(0,u)).range([o,o+i-a]),s=l.domain().map(function(e){return l(e)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:l(r),endX:l(n),scale:l,scaleValues:s}},dr=function(e){return e.changedTouches&&!!e.changedTouches.length},dn=/*#__PURE__*/function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p6(e,t)}(i,e);var t,r,n,o=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=p7(i);if(t){var n=p7(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===p1(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return p8(e)}(this,e)});function i(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i),p9(p8(t=o.call(this,e)),"handleDrag",function(e){t.leaveTimer&&(clearTimeout(t.leaveTimer),t.leaveTimer=null),t.state.isTravellerMoving?t.handleTravellerMove(e):t.state.isSlideMoving&&t.handleSlideDrag(e)}),p9(p8(t),"handleTouchMove",function(e){null!=e.changedTouches&&e.changedTouches.length>0&&t.handleDrag(e.changedTouches[0])}),p9(p8(t),"handleDragEnd",function(){t.setState({isTravellerMoving:!1,isSlideMoving:!1}),t.detachDragEndListener()}),p9(p8(t),"handleLeaveWrapper",function(){(t.state.isTravellerMoving||t.state.isSlideMoving)&&(t.leaveTimer=window.setTimeout(t.handleDragEnd,t.props.leaveTimeOut))}),p9(p8(t),"handleEnterSlideOrTraveller",function(){t.setState({isTextActive:!0})}),p9(p8(t),"handleLeaveSlideOrTraveller",function(){t.setState({isTextActive:!1})}),p9(p8(t),"handleSlideDragStart",function(e){var r=dr(e)?e.changedTouches[0]:e;t.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:r.pageX}),t.attachDragEndListener()}),t.travellerDragStartHandlers={startX:t.handleTravellerDragStart.bind(p8(t),"startX"),endX:t.handleTravellerDragStart.bind(p8(t),"endX")},t.state={},t}return r=[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(e){var t=e.startX,r=e.endX,n=this.state.scaleValues,o=this.props,a=o.gap,u=o.data.length-1,l=Math.min(t,r),s=Math.max(t,r),c=i.getIndexInRange(n,l),f=i.getIndexInRange(n,s);return{startIndex:c-c%a,endIndex:f===u?u:f-f%a}}},{key:"getTextOfTick",value:function(e){var t=this.props,r=t.data,n=t.tickFormatter,o=t.dataKey,i=s2(r[e],o,e);return /*@__PURE__*/g(r0)(n)?n(i,e):i}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(e){var t=this.state,r=t.slideMoveStartX,n=t.startX,o=t.endX,i=this.props,a=i.x,u=i.width,l=i.travellerWidth,s=i.startIndex,c=i.endIndex,f=i.onChange,p=e.pageX-r;p>0?p=Math.min(p,a+u-l-o,a+u-l-n):p<0&&(p=Math.max(p,a-n,a-o));var d=this.getIndex({startX:n+p,endX:o+p});(d.startIndex!==s||d.endIndex!==c)&&f&&f(d),this.setState({startX:n+p,endX:o+p,slideMoveStartX:e.pageX})}},{key:"handleTravellerDragStart",value:function(e,t){var r=dr(t)?t.changedTouches[0]:t;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:e,brushMoveStartX:r.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(e){var t,r=this.state,n=r.brushMoveStartX,o=r.movingTravellerId,i=r.endX,a=r.startX,u=this.state[o],l=this.props,s=l.x,c=l.width,f=l.travellerWidth,p=l.onChange,d=l.gap,h=l.data,y={startX:this.state.startX,endX:this.state.endX},v=e.pageX-n;v>0?v=Math.min(v,s+c-f-u):v<0&&(v=Math.max(v,s-u)),y[o]=u+v;var m=this.getIndex(y),g=m.startIndex,b=m.endIndex,x=function(){var e=h.length-1;return"startX"===o&&(i>a?g%d==0:b%d==0)||i<a&&b===e||"endX"===o&&(i>a?b%d==0:g%d==0)||i>a&&b===e};this.setState((p9(t={},o,u+v),p9(t,"brushMoveStartX",e.pageX),t),function(){p&&x()&&p(m)})}},{key:"handleTravellerMoveKeyboard",value:function(e,t){var r=this,n=this.state,o=n.scaleValues,i=n.startX,a=n.endX,u=this.state[t],l=o.indexOf(u);if(-1!==l){var s=l+e;if(-1!==s&&!(s>=o.length)){var c=o[s];// Prevent travellers from being on top of each other or overlapping
"startX"===t&&c>=a||"endX"===t&&c<=i||this.setState(p9({},t,c),function(){r.props.onChange(r.getIndex({startX:r.state.startX,endX:r.state.endX}))})}}}},{key:"renderBackground",value:function(){var e=this.props,t=e.x,r=e.y,n=e.width,o=e.height,i=e.fill,a=e.stroke;return /*@__PURE__*/g(P).createElement("rect",{stroke:a,fill:i,x:t,y:r,width:n,height:o})}},{key:"renderPanorama",value:function(){var e=this.props,t=e.x,r=e.y,n=e.width,o=e.height,i=e.data,a=e.children,u=e.padding,l=(0,P.Children).only(a);return l?/*@__PURE__*/g(P).cloneElement(l,{x:t,y:r,width:n,height:o,margin:u,compact:!0,data:i}):null}},{key:"renderTravellerLayer",value:function(e,t){var r=this,n=this.props,o=n.y,a=n.travellerWidth,u=n.height,l=n.traveller,s=Math.max(e,this.props.x),c=p4(p4({},aK(this.props)),{},{x:s,y:o,width:a,height:u});return /*@__PURE__*/g(P).createElement(a4,{tabIndex:0,role:"slider",className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[t],onTouchStart:this.travellerDragStartHandlers[t],onKeyDown:function(e){["ArrowLeft","ArrowRight"].includes(e.key)&&(e.preventDefault(),e.stopPropagation(),r.handleTravellerMoveKeyboard("ArrowRight"===e.key?1:-1,t))},onFocus:function(){r.setState({isTravellerFocused:!0})},onBlur:function(){r.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},i.renderTraveller(l,c))}},{key:"renderSlide",value:function(e,t){var r=this.props,n=r.y,o=r.height,i=r.stroke,a=r.travellerWidth,u=Math.min(e,t)+a,l=Math.max(Math.abs(t-e)-a,0);return /*@__PURE__*/g(P).createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:i,fillOpacity:.2,x:u,y:n,width:l,height:o})}},{key:"renderText",value:function(){var e=this.props,t=e.startIndex,r=e.endIndex,n=e.y,o=e.height,i=e.travellerWidth,a=e.stroke,u=this.state,l=u.startX,s=u.endX,c={pointerEvents:"none",fill:a};return /*@__PURE__*/g(P).createElement(a4,{className:"recharts-brush-texts"},/*@__PURE__*/g(P).createElement(u$,p2({textAnchor:"end",verticalAnchor:"middle",x:Math.min(l,s)-5,y:n+o/2},c),this.getTextOfTick(t)),/*@__PURE__*/g(P).createElement(u$,p2({textAnchor:"start",verticalAnchor:"middle",x:Math.max(l,s)+i+5,y:n+o/2},c),this.getTextOfTick(r)))}},{key:"render",value:function(){var e=this.props,t=e.data,r=e.className,n=e.children,o=e.x,i=e.y,a=e.width,u=e.height,l=e.alwaysShowText,s=this.state,c=s.startX,f=s.endX,p=s.isTextActive,d=s.isSlideMoving,h=s.isTravellerMoving,y=s.isTravellerFocused;if(!t||!t.length||!af(o)||!af(i)||!af(a)||!af(u)||a<=0||u<=0)return null;var v=/*@__PURE__*/g(oF)("recharts-brush",r),m=1===/*@__PURE__*/g(P).Children.count(n),b=p0("userSelect","none");return /*@__PURE__*/g(P).createElement(a4,{className:v,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:b},this.renderBackground(),m&&this.renderPanorama(),this.renderSlide(c,f),this.renderTravellerLayer(c,"startX"),this.renderTravellerLayer(f,"endX"),(p||d||h||y||l)&&this.renderText())}}],n=[{key:"renderDefaultTraveller",value:function(e){var t=e.x,r=e.y,n=e.width,o=e.height,i=e.stroke,a=Math.floor(r+o/2)-1;return /*@__PURE__*/g(P).createElement(/*@__PURE__*/g(P).Fragment,null,/*@__PURE__*/g(P).createElement("rect",{x:t,y:r,width:n,height:o,fill:i,stroke:"none"}),/*@__PURE__*/g(P).createElement("line",{x1:t+1,y1:a,x2:t+n-1,y2:a,fill:"none",stroke:"#fff"}),/*@__PURE__*/g(P).createElement("line",{x1:t+1,y1:a+2,x2:t+n-1,y2:a+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(e,t){return /*@__PURE__*/g(P).isValidElement(e)?/*@__PURE__*/g(P).cloneElement(e,t):/*@__PURE__*/g(r0)(e)?e(t):i.renderDefaultTraveller(t)}},{key:"getDerivedStateFromProps",value:function(e,t){var r=e.data,n=e.width,o=e.x,i=e.travellerWidth,a=e.updateId,u=e.startIndex,l=e.endIndex;if(r!==t.prevData||a!==t.prevUpdateId)return p4({prevData:r,prevTravellerWidth:i,prevUpdateId:a,prevX:o,prevWidth:n},r&&r.length?dt({data:r,width:n,x:o,travellerWidth:i,startIndex:u,endIndex:l}):{scale:null,scaleValues:null});if(t.scale&&(n!==t.prevWidth||o!==t.prevX||i!==t.prevTravellerWidth)){t.scale.range([o,o+n-i]);var s=t.scale.domain().map(function(e){return t.scale(e)});return{prevData:r,prevTravellerWidth:i,prevUpdateId:a,prevX:o,prevWidth:n,startX:t.scale(e.startIndex),endX:t.scale(e.endIndex),scaleValues:s}}return null}},{key:"getIndexInRange",value:function(e,t){for(var r=e.length,n=0,o=r-1;o-n>1;){var i=Math.floor((n+o)/2);e[i]>t?o=i:n=i}return t>=e[o]?o:n}}],r&&p5(i.prototype,r),n&&p5(i,n),Object.defineProperty(i,"prototype",{writable:!1}),i}(P.PureComponent);p9(dn,"displayName","Brush"),p9(dn,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var P=_("acw62"),di=function(e,t){var r=e.alwaysShow,n=e.ifOverflow;return r&&(n="extendDomain"),n===t},da=function(e,t){for(var r=arguments.length,n=Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o]};function du(e){return(du="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function dl(){return(dl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ds(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function dc(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ds(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!==du(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==du(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===du(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ds(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var df=function(e){var t=e.x,r=e.y,n=e.xAxis,o=e.yAxis,i=fB({x:n.scale,y:o.scale}),a=i.apply({x:t,y:r},{bandAware:!0});return di(e,"discard")&&!i.isInRange(a)?null:a};function dp(e){var t=e.x,r=e.y,n=e.r,o=e.alwaysShow,i=e.clipPathId,a=ap(t),u=ap(r);if(da(void 0===o,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!a||!u)return null;var l=df(e);if(!l)return null;var s=l.x,c=l.y,f=e.shape,p=e.className,d=dc(dc({clipPath:di(e,"hidden")?"url(#".concat(i,")"):void 0},aK(e,!0)),{},{cx:s,cy:c});return /*@__PURE__*/g(P).createElement(a4,{className:/*@__PURE__*/g(oF)("recharts-reference-dot",p)},dp.renderDot(f,d),cW.renderCallByParent(e,{x:s-n,y:c-n,width:2*n,height:2*n}))}dp.displayName="ReferenceDot",dp.defaultProps={isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1},dp.renderDot=function(e,t){return /*@__PURE__*/g(P).isValidElement(e)?/*@__PURE__*/g(P).cloneElement(e,t):/*@__PURE__*/g(r0)(e)?e(t):/*@__PURE__*/g(P).createElement(pN,dl({},t,{cx:t.cx,cy:t.cy,className:"recharts-reference-dot-dot"}))};var dd={},dh={};dh=/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function(e,t){var r;return la(e,function(e,n,o){return!(r=t(e,n,o))}),!!r},dd=/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */function(e,t,r){var n=nX(e)?nV:dh;return r&&l_(e,t,r)&&(t=void 0),n(e,u1(t,3))};var P=_("acw62");function dy(e){return(dy="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function dv(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function dm(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?dv(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!==dy(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==dy(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===dy(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):dv(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function dg(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function db(){return(db=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var dx=function(e,t,r,n,o){var i=o.viewBox,a=i.x,u=i.y,l=i.width,s=i.height,c=o.position;if(r){var f=o.y,p=o.yAxis.orientation,d=e.y.apply(f,{position:c});if(di(o,"discard")&&!e.y.isInRange(d))return null;var h=[{x:a+l,y:d},{x:a,y:d}];return"left"===p?h.reverse():h}if(t){var y=o.x,v=o.xAxis.orientation,m=e.x.apply(y,{position:c});if(di(o,"discard")&&!e.x.isInRange(m))return null;var b=[{x:m,y:u+s},{x:m,y:u}];return"top"===v?b.reverse():b}if(n){var x=o.segment.map(function(t){return e.apply(t,{position:c})});return di(o,"discard")&&/*@__PURE__*/g(dd)(x,function(t){return!e.isInRange(t)})?null:x}return null};function d_(e){var t,r,n,o=e.x,i=e.y,a=e.segment,u=e.xAxis,l=e.yAxis,s=e.shape,c=e.className,f=e.alwaysShow,p=e.clipPathId;da(void 0===f,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var d=dx(fB({x:u.scale,y:l.scale}),ap(o),ap(i),a&&2===a.length,e);if(!d)return null;var h=function(e){if(Array.isArray(e))return e}(d)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(d,2)||function(e,t){if(e){if("string"==typeof e)return dg(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return dg(e,t)}}(d,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),y=h[0],v=y.x,m=y.y,b=h[1],x=b.x,_=b.y,S=dm(dm({clipPath:di(e,"hidden")?"url(#".concat(p,")"):void 0},aK(e,!0)),{},{x1:v,y1:m,x2:x,y2:_});return /*@__PURE__*/g(P).createElement(a4,{className:/*@__PURE__*/g(oF)("recharts-reference-line",c)},(t=s,r=S,/*@__PURE__*/g(P).isValidElement(t)?/*@__PURE__*/g(P).cloneElement(t,r):/*@__PURE__*/g(r0)(t)?t(r):/*@__PURE__*/g(P).createElement("line",db({},r,{className:"recharts-reference-line-line"}))),cW.renderCallByParent(e,fH({x:(n={x1:v,y1:m,x2:x,y2:_}).x1,y:n.y1},{x:n.x2,y:n.y2})))}d_.displayName="ReferenceLine",d_.defaultProps={isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"};var P=_("acw62");function dS(e){return(dS="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function dw(){return(dw=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function dP(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function dO(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?dP(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!==dS(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==dS(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===dS(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):dP(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var dE=function(e,t,r,n,o){var i=o.x1,a=o.x2,u=o.y1,l=o.y2,s=o.xAxis,c=o.yAxis;if(!s||!c)return null;var f=fB({x:s.scale,y:c.scale}),p={x:e?f.x.apply(i,{position:"start"}):f.x.rangeMin,y:r?f.y.apply(u,{position:"start"}):f.y.rangeMin},d={x:t?f.x.apply(a,{position:"end"}):f.x.rangeMax,y:n?f.y.apply(l,{position:"end"}):f.y.rangeMax};return!di(o,"discard")||f.isInRange(p)&&f.isInRange(d)?fH(p,d):null};function dj(e){var t=e.x1,r=e.x2,n=e.y1,o=e.y2,i=e.className,a=e.alwaysShow,u=e.clipPathId;da(void 0===a,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var l=ap(t),s=ap(r),c=ap(n),f=ap(o),p=e.shape;if(!l&&!s&&!c&&!f&&!p)return null;var d=dE(l,s,c,f,e);if(!d&&!p)return null;var h=di(e,"hidden")?"url(#".concat(u,")"):void 0;return /*@__PURE__*/g(P).createElement(a4,{className:/*@__PURE__*/g(oF)("recharts-reference-area",i)},dj.renderRect(p,dO(dO({clipPath:h},aK(e,!0)),d)),cW.renderCallByParent(e,d))}function dk(e){return function(e){if(Array.isArray(e))return dM(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return dM(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return dM(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function dM(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}dj.displayName="ReferenceArea",dj.defaultProps={isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1},dj.renderRect=function(e,t){return /*@__PURE__*/g(P).isValidElement(e)?/*@__PURE__*/g(P).cloneElement(e,t):/*@__PURE__*/g(r0)(e)?e(t):/*@__PURE__*/g(P).createElement(a1,dw({},t,{className:"recharts-reference-area-rect"}))};var dA=function(e,t,r,n,o){var i=aD(e,d_),a=aD(e,dp),u=[].concat(dk(i),dk(a)),l=aD(e,dj),s="".concat(n,"Id"),c=n[0],f=t;if(u.length&&(f=u.reduce(function(e,t){if(t.props[s]===r&&di(t.props,"extendDomain")&&af(t.props[c])){var n=t.props[c];return[Math.min(e[0],n),Math.max(e[1],n)]}return e},f)),l.length){var p="".concat(c,"1"),d="".concat(c,"2");f=l.reduce(function(e,t){if(t.props[s]===r&&di(t.props,"extendDomain")&&af(t.props[p])&&af(t.props[d])){var n=t.props[p],o=t.props[d];return[Math.min(e[0],n,o),Math.max(e[1],n,o)]}return e},f)}return o&&o.length&&(f=o.reduce(function(e,t){return af(t)?[Math.min(e[0],t),Math.max(e[1],t)]:e},f)),f},dT=Object.prototype.hasOwnProperty,dC="~";/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */function dL(){}/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */function dN(e,t,r){this.fn=e,this.context=t,this.once=r||!1}/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */function dI(e,t,r,n,o){if("function"!=typeof r)throw TypeError("The listener must be a function");var i=new dN(r,n||e,o),a=dC?dC+t:t;return e._events[a]?e._events[a].fn?e._events[a]=[e._events[a],i]:e._events[a].push(i):(e._events[a]=i,e._eventsCount++),e}/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */function dR(e,t){0==--e._eventsCount?e._events=new dL:delete e._events[t]}/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */function dD(){this._events=new dL,this._eventsCount=0}Object.create&&(dL.prototype=Object.create(null),new dL().__proto__||(dC=!1)),/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */dD.prototype.eventNames=function(){var e,t,r=[];if(0===this._eventsCount)return r;for(t in e=this._events)dT.call(e,t)&&r.push(dC?t.slice(1):t);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(e)):r},/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */dD.prototype.listeners=function(e){var t=dC?dC+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var n=0,o=r.length,i=Array(o);n<o;n++)i[n]=r[n].fn;return i},/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */dD.prototype.listenerCount=function(e){var t=dC?dC+e:e,r=this._events[t];return r?r.fn?1:r.length:0},/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */dD.prototype.emit=function(e,t,r,n,o,i){var a=dC?dC+e:e;if(!this._events[a])return!1;var u,l,s=this._events[a],c=arguments.length;if(s.fn){switch(s.once&&this.removeListener(e,s.fn,void 0,!0),c){case 1:return s.fn.call(s.context),!0;case 2:return s.fn.call(s.context,t),!0;case 3:return s.fn.call(s.context,t,r),!0;case 4:return s.fn.call(s.context,t,r,n),!0;case 5:return s.fn.call(s.context,t,r,n,o),!0;case 6:return s.fn.call(s.context,t,r,n,o,i),!0}for(l=1,u=Array(c-1);l<c;l++)u[l-1]=arguments[l];s.fn.apply(s.context,u)}else{var f,p=s.length;for(l=0;l<p;l++)switch(s[l].once&&this.removeListener(e,s[l].fn,void 0,!0),c){case 1:s[l].fn.call(s[l].context);break;case 2:s[l].fn.call(s[l].context,t);break;case 3:s[l].fn.call(s[l].context,t,r);break;case 4:s[l].fn.call(s[l].context,t,r,n);break;default:if(!u)for(f=1,u=Array(c-1);f<c;f++)u[f-1]=arguments[f];s[l].fn.apply(s[l].context,u)}}return!0},/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */dD.prototype.on=function(e,t,r){return dI(this,e,t,r,!1)},/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */dD.prototype.once=function(e,t,r){return dI(this,e,t,r,!0)},/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */dD.prototype.removeListener=function(e,t,r,n){var o=dC?dC+e:e;if(!this._events[o])return this;if(!t)return dR(this,o),this;var i=this._events[o];if(i.fn)i.fn!==t||n&&!i.once||r&&i.context!==r||dR(this,o);else{for(var a=0,u=[],l=i.length;a<l;a++)(i[a].fn!==t||n&&!i[a].once||r&&i[a].context!==r)&&u.push(i[a]);//
// Reset the array, or remove it completely if we have no more listeners.
//
u.length?this._events[o]=1===u.length?u[0]:u:dR(this,o)}return this},/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */dD.prototype.removeAllListeners=function(e){var t;return e?(t=dC?dC+e:e,this._events[t]&&dR(this,t)):(this._events=new dL,this._eventsCount=0),this},//
// Alias methods names because people roll like that.
//
dD.prototype.off=dD.prototype.removeListener,dD.prototype.addListener=dD.prototype.on,//
// Expose the prefix.
//
dD.prefixed=dC,//
// Allow `EventEmitter` to be imported as module namespace.
//
dD.EventEmitter=dD;var dG=new/*@__PURE__*/(g(dD));dG.setMaxListeners&&dG.setMaxListeners(10);var dV="recharts.syncMouseEvents";function dF(e){return(dF="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function dz(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,dQ(n.key),n)}}function dK(e,t,r){return(t=dQ(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function dQ(e){var t=function(e,t){if("object"!==dF(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==dF(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===dF(t)?t:String(t)}var dH=/*#__PURE__*/function(){var e,t;function r(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r),dK(this,"activeIndex",0),dK(this,"coordinateList",[]),dK(this,"layout","horizontal")}return e=[{key:"setDetails",value:function(e){var t=e.coordinateList,r=void 0===t?[]:t,n=e.container,o=void 0===n?null:n,i=e.layout,a=void 0===i?null:i,u=e.offset,l=void 0===u?null:u,s=e.mouseHandlerCallback,c=void 0===s?null:s;this.coordinateList=null!=r?r:this.coordinateList,this.container=null!=o?o:this.container,this.layout=null!=a?a:this.layout,this.offset=null!=l?l:this.offset,this.mouseHandlerCallback=null!=c?c:this.mouseHandlerCallback,// Keep activeIndex in the bounds between 0 and the last coordinate index
this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(e){// The AccessibilityManager relies on the Tooltip component. When tooltips suddenly stop existing,
// it can cause errors. We use this function to check. We don't want arrow keys to be processed
// if there are no tooltips, since that will cause unexpected behavior of users.
if(0!==this.coordinateList.length)switch(e.key){case"ArrowRight":if("horizontal"!==this.layout)return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break;case"ArrowLeft":if("horizontal"!==this.layout)return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse()}}},{key:"spoofMouse",value:function(){if("horizontal"===this.layout&&0!==this.coordinateList.length){var e=this.container.getBoundingClientRect(),t=e.x,r=e.y,n=e.height,o=this.coordinateList[this.activeIndex].coordinate,i=r+this.offset.top+n/2;this.mouseHandlerCallback({pageX:t+o,pageY:i})}}}],dz(r.prototype,e),t&&dz(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}(),dW=["item"],dB=["children","className","width","height","style","compact","title","desc"];function dY(e){return(dY="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function dU(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(e,t)||d2(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d$(){return(d$=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function dq(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function dX(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d8(n.key),n)}}function dJ(e,t){return(dJ=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function dZ(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d0(e){return(d0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d1(e){return function(e){if(Array.isArray(e))return d3(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||d2(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d2(e,t){if(e){if("string"==typeof e)return d3(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d3(e,t)}}function d3(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function d4(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function d5(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d4(Object(r),!0).forEach(function(t){d6(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d4(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d6(e,t,r){return(t=d8(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d8(e){var t=function(e,t){if("object"!==dY(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==dY(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===dY(t)?t:String(t)}var d7={xAxis:["bottom","top"],yAxis:["left","right"]},d9={x:0,y:0},he=Number.isFinite?Number.isFinite:isFinite,ht="function"==typeof requestAnimationFrame?requestAnimationFrame:"function"==typeof setImmediate?setImmediate:setTimeout,hr="function"==typeof cancelAnimationFrame?cancelAnimationFrame:"function"==typeof clearImmediate?clearImmediate:clearTimeout,hn=function(e,t,r,n){var o=t.find(function(e){return e&&e.index===r});if(o){if("horizontal"===e)return{x:o.coordinate,y:n.y};if("vertical"===e)return{x:n.x,y:o.coordinate};if("centric"===e){var i=o.coordinate,a=n.radius;return d5(d5(d5({},n),cA(n.cx,n.cy,a,i)),{},{angle:i,radius:a})}var u=o.coordinate,l=n.angle;return d5(d5(d5({},n),cA(n.cx,n.cy,u,l)),{},{angle:l,radius:u})}return d9},ho=function(e,t,r){var n=t.graphicalItems,o=t.dataStartIndex,i=t.dataEndIndex,a=(n||[]).reduce(function(e,t){var r=t.props.data;return r&&r.length?[].concat(d1(e),d1(r)):e},[]);return a&&a.length>0?a:r&&r.props&&r.props.data&&r.props.data.length>0?r.props.data:e&&e.length&&af(o)&&af(i)?e.slice(o,i+1):[]};function hi(e){return"number"===e?[0,"auto"]:void 0}/**
 * Get the content to be displayed in the tooltip
 * @param  {Object} state          Current state
 * @param  {Array}  chartData      The data defined in chart
 * @param  {Number} activeIndex    Active index of data
 * @param  {String} activeLabel    Active label of data
 * @return {Array}                 The content of tooltip
 */var ha=function(e,t,r,n){var o=e.graphicalItems,i=e.tooltipAxis,a=ho(t,e);return r<0||!o||!o.length||r>=a.length?null:o.reduce(function(e,t){if(t.props.hide)return e;var o,u=t.props.data;return(o=i.dataKey&&!i.allowDuplicatedCategory?ab(void 0===u?a:u,i.dataKey,n):u&&u[r]||a[r])?[].concat(d1(e),[cO(t,o)]):e},[])},hu=function(e,t,r,n){var o=n||{x:e.chartX,y:e.chartY},i="horizontal"===r?o.x:"vertical"===r?o.y:"centric"===r?o.angle:o.radius,a=e.orderedTooltipTicks,u=e.tooltipAxis,l=e.tooltipTicks,s=s4(i,a,l,u);if(s>=0&&l){var c=l[s]&&l[s].value,f=ha(e,t,s,c),p=hn(r,a,s,o);return{activeTooltipIndex:s,activeLabel:c,activePayload:f,activeCoordinate:p}}return null},hl=function(e,t){var r=t.axes,n=t.graphicalItems,o=t.axisType,i=t.axisIdKey,a=t.stackGroups,u=t.dataStartIndex,l=t.dataEndIndex,s=e.layout,c=e.children,f=e.stackOffset,p=cn(s,o);return r.reduce(function(t,r){var d=r.props,h=d.type,y=d.dataKey,v=d.allowDataOverflow,m=d.allowDuplicatedCategory,b=d.scale,x=d.ticks,_=d.includeHidden,S=r.props[i];if(t[S])return t;var w=ho(e.data,{graphicalItems:n.filter(function(e){return e.props[i]===S}),dataStartIndex:u,dataEndIndex:l}),P=w.length;/*
     * This is a hack to short-circuit the domain creation here to enhance performance.
     * Usually, the data is used to determine the domain, but when the user specifies
     * a domain upfront (via props), there is no need to calculate the domain start and end,
     * which is very expensive for a larger amount of data.
     * The only thing that would prohibit short-circuiting is when the user doesn't allow data overflow,
     * because the axis is supposed to ignore the specified domain that way.
     *//**
 * Takes a domain and user props to determine whether he provided the domain via props or if we need to calculate it.
 * @param   {AxisDomain}  domain              The potential domain from props
 * @param   {Boolean}     allowDataOverflow   from props
 * @param   {String}      axisType            from props
 * @returns {Boolean}                         `true` if domain is specified by user
 */(function(e,t,r){if("number"===r&&!0===t&&Array.isArray(e)){var n=null==e?void 0:e[0],o=null==e?void 0:e[1];/*
     * The `isNumber` check is needed because the user could also provide strings like "dataMin" via the domain props.
     * In such case, we have to compute the domain from the data.
     */if(n&&o&&af(n)&&af(o))return!0}return!1})(r.props.domain,v,h)&&(j=cS(r.props.domain,null,v),p&&("number"===h||"auto"!==b)&&(M=s3(w,y,"category")));// if the domain is defaulted we need this for `originalDomain` as well
var O=hi(h);// we didn't create the domain from user's props above, so we need to calculate it
if(!j||0===j.length){var E,j,k,M,A,T=null!==(A=r.props.domain)&&void 0!==A?A:O;if(y){if(// has dataKey in <Axis />
j=s3(w,y,h),"category"===h&&p){// the field type is category data and this axis is categorical axis
var C=am(j);m&&C?(k=j,// When category axis has duplicated text, serial numbers are used to generate scale
j=/*@__PURE__*/g(fM)(0,P)):m||(j=cP(T,j,r).reduce(function(e,t){return e.indexOf(t)>=0?e:[].concat(d1(e),[t])},[]))}else if("category"===h)// the field type is category data and this axis is numerical axis
j=m?j.filter(function(e){return""!==e&&!/*@__PURE__*/g(rT)(e)}):cP(T,j,r).reduce(function(e,t){return e.indexOf(t)>=0||""===t||/*@__PURE__*/g(rT)(t)?e:[].concat(d1(e),[t])},[]);else if("number"===h){// the field type is numerical
var L=ct(w,n.filter(function(e){return e.props[i]===S&&(_||!e.props.hide)}),y,o,s);L&&(j=L)}p&&("number"===h||"auto"!==b)&&(M=s3(w,y,"category"))}else j=p?/*@__PURE__*/g(fM)(0,P):a&&a[S]&&a[S].hasStack&&"number"===h?"expand"===f?[0,1]:cb(a[S].stackGroups,u,l):cr(w,n.filter(function(e){return e.props[i]===S&&(_||!e.props.hide)}),h,s,!0);"number"===h?(// To detect wether there is any reference lines whose props alwaysShow is true
j=dA(c,j,S,o,x),T&&(j=cS(T,j,v))):"category"===h&&T&&j.every(function(e){return T.indexOf(e)>=0})&&(j=T)}return d5(d5({},t),{},d6({},S,d5(d5({},r.props),{},{axisType:o,domain:j,categoricalDomain:M,duplicateDomain:k,originalDomain:null!==(E=r.props.domain)&&void 0!==E?E:O,isCategorical:p,layout:s})))},{})},hs=function(e,t){var r=t.graphicalItems,n=t.Axis,o=t.axisType,i=t.axisIdKey,a=t.stackGroups,u=t.dataStartIndex,l=t.dataEndIndex,s=e.layout,c=e.children,f=ho(e.data,{graphicalItems:r,dataStartIndex:u,dataEndIndex:l}),p=f.length,d=cn(s,o),h=-1;return r.reduce(function(e,t){var y,v=t.props[i],m=hi("number");return e[v]?e:(h++,y=d?/*@__PURE__*/g(fM)(0,p):a&&a[v]&&a[v].hasStack?dA(c,y=cb(a[v].stackGroups,u,l),v,o):dA(c,y=cS(m,cr(f,r.filter(function(e){return e.props[i]===v&&!e.props.hide}),"number",s),n.defaultProps.allowDataOverflow),v,o),d5(d5({},e),{},d6({},v,d5(d5({axisType:o},n.defaultProps),{},{hide:!0,orientation:/*@__PURE__*/g(iq)(d7,"".concat(o,".").concat(h%2),null),domain:y,originalDomain:m,isCategorical:d,layout:s}))))},{})},hc=function(e,t){var r=t.axisType,n=void 0===r?"xAxis":r,o=t.AxisComp,i=t.graphicalItems,a=t.stackGroups,u=t.dataStartIndex,l=t.dataEndIndex,s=e.children,c="".concat(n,"Id"),f=aD(s,o),p={};return f&&f.length?p=hl(e,{axes:f,graphicalItems:i,axisType:n,axisIdKey:c,stackGroups:a,dataStartIndex:u,dataEndIndex:l}):i&&i.length&&(p=hs(e,{Axis:o,graphicalItems:i,axisType:n,axisIdKey:c,stackGroups:a,dataStartIndex:u,dataEndIndex:l})),p},hf=function(e){var t=av(e),r=ci(t,!1,!0);return{tooltipTicks:r,orderedTooltipTicks:/*@__PURE__*/g(uq)(r,function(e){return e.coordinate}),tooltipAxis:t,tooltipAxisBandSize:cw(t,r)}},hp=function(e){var t,r,n=e.children,o=e.defaultShowTooltip,i=aG(n,dn);return{chartX:0,chartY:0,dataStartIndex:i&&i.props&&i.props.startIndex||0,dataEndIndex:(null==i?void 0:null===(t=i.props)||void 0===t?void 0:t.endIndex)!==void 0?null==i?void 0:null===(r=i.props)||void 0===r?void 0:r.endIndex:e.data&&e.data.length-1||0,activeTooltipIndex:-1,isTooltipActive:!/*@__PURE__*/g(rT)(o)&&o}},hd=function(e){return"horizontal"===e?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:"vertical"===e?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:"centric"===e?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},hh=function(e,t){var r=e.props,n=e.graphicalItems,o=e.xAxisMap,i=void 0===o?{}:o,a=e.yAxisMap,u=void 0===a?{}:a,l=r.width,s=r.height,c=r.children,f=r.margin||{},p=aG(c,dn),d=aG(c,s$),h=Object.keys(u).reduce(function(e,t){var r=u[t],n=r.orientation;return r.mirror||r.hide?e:d5(d5({},e),{},d6({},n,e[n]+r.width))},{left:f.left||0,right:f.right||0}),y=Object.keys(i).reduce(function(e,t){var r=i[t],n=r.orientation;return r.mirror||r.hide?e:d5(d5({},e),{},d6({},n,/*@__PURE__*/g(iq)(e,"".concat(n))+r.height))},{top:f.top||0,bottom:f.bottom||0}),v=d5(d5({},y),h),m=v.bottom;return p&&(v.bottom+=p.props.height||dn.defaultProps.height),d&&t&&(v=s9(v,n,r,t)),d5(d5({brushBottom:m},v),{},{width:l-v.left-v.right,height:s-v.top-v.bottom})},hy=function(e){var t,r=e.chartName,n=e.GraphicalChild,o=e.defaultTooltipEventType,i=void 0===o?"axis":o,a=e.validateTooltipEventTypes,u=void 0===a?["axis"]:a,l=e.axisComponents,s=e.legendContent,c=e.formatAxisMap,f=e.defaultProps,p=function(e,t){var r=t.graphicalItems,n=t.stackGroups,o=t.offset,i=t.updateId,a=t.dataStartIndex,u=t.dataEndIndex,s=e.barSize,c=e.layout,f=e.barGap,p=e.barCategoryGap,d=e.maxBarSize,h=hd(c),y=h.numericAxisName,v=h.cateAxisName,m=!!r&&!!r.length&&r.some(function(e){var t=aL(e&&e.type);return t&&t.indexOf("Bar")>=0})&&s8({barSize:s,stackGroups:n}),b=[];return r.forEach(function(r,s){var h,x=ho(e.data,{dataStartIndex:a,dataEndIndex:u},r),_=r.props,S=_.dataKey,w=_.maxBarSize,P=r.props["".concat(y,"Id")],O=r.props["".concat(v,"Id")],E=l.reduce(function(e,n){var o,i=t["".concat(n.axisType,"Map")],a=r.props["".concat(n.axisType,"Id")],u=i&&i[a];return d5(d5({},e),{},(d6(o={},n.axisType,u),d6(o,"".concat(n.axisType,"Ticks"),ci(u)),o))},{}),j=E[v],k=E["".concat(v,"Ticks")],M=n&&n[P]&&n[P].hasStack&&cg(r,n[P].stackGroups),A=aL(r.type).indexOf("Bar")>=0,T=cw(j,k),C=[];if(A){// 如果是bar，计算bar的位置
var L,N,I=/*@__PURE__*/g(rT)(w)?d:w,R=null!==(L=null!==(N=cw(j,k,!0))&&void 0!==N?N:I)&&void 0!==L?L:0;C=s7({barGap:f,barCategoryGap:p,bandSize:R!==T?R:T,sizeList:m[O],maxBarSize:I}),R!==T&&(C=C.map(function(e){return d5(d5({},e),{},{position:d5(d5({},e.position),{},{offset:e.position.offset-R/2})})}))}var D=r&&r.type&&r.type.getComposedData;D&&b.push({props:d5(d5({},D(d5(d5({},E),{},{displayedData:x,props:e,dataKey:S,item:r,bandSize:T,barPosition:C,offset:o,stackedData:M,layout:c,dataStartIndex:a,dataEndIndex:u}))),{},(d6(h={key:r.key||"item-".concat(s)},y,E[y]),d6(h,v,E[v]),d6(h,"animationId",i),h)),childIndex:aR(e.children).indexOf(r),item:r})}),b},d=function(e,t){var o=e.props,i=e.dataStartIndex,a=e.dataEndIndex,u=e.updateId;if(!aV({props:o}))return null;var s=o.children,f=o.layout,d=o.stackOffset,h=o.data,y=o.reverseStackOrder,v=hd(f),m=v.numericAxisName,g=v.cateAxisName,b=aD(s,n),x=cd(h,b,"".concat(m,"Id"),"".concat(g,"Id"),d,y),_=l.reduce(function(e,t){var r="".concat(t.axisType,"Map");return d5(d5({},e),{},d6({},r,hc(o,d5(d5({},t),{},{graphicalItems:b,stackGroups:t.axisType===m&&x,dataStartIndex:i,dataEndIndex:a}))))},{}),S=hh(d5(d5({},_),{},{props:o,graphicalItems:b}),null==t?void 0:t.legendBBox);Object.keys(_).forEach(function(e){_[e]=c(o,_[e],S,e.replace("Map",""),r)});var w=hf(_["".concat(g,"Map")]),P=p(o,d5(d5({},_),{},{dataStartIndex:i,dataEndIndex:a,updateId:u,graphicalItems:b,stackGroups:x,offset:S}));return d5(d5({formattedGraphicalItems:P,graphicalItems:b,offset:S,stackGroups:x},w),_)};return t=/*#__PURE__*/function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&dJ(e,t)})(l,e);var t,n,o,a=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=d0(l);if(t){var n=d0(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===dY(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return dZ(e)}(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,l),d6(dZ(t=a.call(this,e)),"accessibilityManager",new dH),d6(dZ(t),"clearDeferId",function(){!/*@__PURE__*/g(rT)(t.deferId)&&hr&&hr(t.deferId),t.deferId=null}),d6(dZ(t),"handleLegendBBoxUpdate",function(e){if(e){var r=t.state,n=r.dataStartIndex,o=r.dataEndIndex,i=r.updateId;t.setState(d5({legendBBox:e},d({props:t.props,dataStartIndex:n,dataEndIndex:o,updateId:i},d5(d5({},t.state),{},{legendBBox:e}))))}}),d6(dZ(t),"handleReceiveSyncEvent",function(e,r,n){t.props.syncId===e&&r!==t.uniqueChartId&&(t.clearDeferId(),t.deferId=ht&&ht(t.applySyncEvent.bind(dZ(t),n)))}),d6(dZ(t),"handleBrushChange",function(e){var r=e.startIndex,n=e.endIndex;// Only trigger changes if the extents of the brush have actually changed
if(r!==t.state.dataStartIndex||n!==t.state.dataEndIndex){var o=t.state.updateId;t.setState(function(){return d5({dataStartIndex:r,dataEndIndex:n},d({props:t.props,dataStartIndex:r,dataEndIndex:n,updateId:o},t.state))}),t.triggerSyncEvent({dataStartIndex:r,dataEndIndex:n})}}),/**
       * The handler of mouse entering chart
       * @param  {Object} e              Event object
       * @return {Null}                  null
       */d6(dZ(t),"handleMouseEnter",function(e){var r=t.props.onMouseEnter,n=t.getMouseInfo(e);if(n){var o=d5(d5({},n),{},{isTooltipActive:!0});t.setState(o),t.triggerSyncEvent(o),/*@__PURE__*/g(r0)(r)&&r(o,e)}}),d6(dZ(t),"triggeredAfterMouseMove",function(e){var r=t.props.onMouseMove,n=t.getMouseInfo(e),o=n?d5(d5({},n),{},{isTooltipActive:!0}):{isTooltipActive:!1};t.setState(o),t.triggerSyncEvent(o),/*@__PURE__*/g(r0)(r)&&r(o,e)}),/**
       * The handler of mouse entering a scatter
       * @param {Object} el The active scatter
       * @return {Object} no return
       */d6(dZ(t),"handleItemMouseEnter",function(e){t.setState(function(){return{isTooltipActive:!0,activeItem:e,activePayload:e.tooltipPayload,activeCoordinate:e.tooltipPosition||{x:e.cx,y:e.cy}}})}),/**
       * The handler of mouse leaving a scatter
       * @return {Object} no return
       */d6(dZ(t),"handleItemMouseLeave",function(){t.setState(function(){return{isTooltipActive:!1}})}),/**
       * The handler of mouse moving in chart
       * @param  {Object} e        Event object
       * @return {Null} no return
       */d6(dZ(t),"handleMouseMove",function(e){e&&/*@__PURE__*/g(r0)(e.persist)&&e.persist(),t.triggeredAfterMouseMove(e)}),/**
       * The handler if mouse leaving chart
       * @param {Object} e Event object
       * @return {Null} no return
       */d6(dZ(t),"handleMouseLeave",function(e){var r=t.props.onMouseLeave,n={isTooltipActive:!1};t.setState(n),t.triggerSyncEvent(n),/*@__PURE__*/g(r0)(r)&&r(n,e),t.cancelThrottledTriggerAfterMouseMove()}),d6(dZ(t),"handleOuterEvent",function(e){var r=aB(e),n=/*@__PURE__*/g(iq)(t.props,"".concat(r));r&&/*@__PURE__*/g(r0)(n)&&// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
n(/.*touch.*/i.test(r)?t.getMouseInfo(e.changedTouches[0]):t.getMouseInfo(e),e)}),d6(dZ(t),"handleClick",function(e){var r=t.props.onClick,n=t.getMouseInfo(e);if(n){var o=d5(d5({},n),{},{isTooltipActive:!0});t.setState(o),t.triggerSyncEvent(o),/*@__PURE__*/g(r0)(r)&&r(o,e)}}),d6(dZ(t),"handleMouseDown",function(e){var r=t.props.onMouseDown;/*@__PURE__*/g(r0)(r)&&r(t.getMouseInfo(e),e)}),d6(dZ(t),"handleMouseUp",function(e){var r=t.props.onMouseUp;/*@__PURE__*/g(r0)(r)&&r(t.getMouseInfo(e),e)}),d6(dZ(t),"handleTouchMove",function(e){null!=e.changedTouches&&e.changedTouches.length>0&&t.handleMouseMove(e.changedTouches[0])}),d6(dZ(t),"handleTouchStart",function(e){null!=e.changedTouches&&e.changedTouches.length>0&&t.handleMouseDown(e.changedTouches[0])}),d6(dZ(t),"handleTouchEnd",function(e){null!=e.changedTouches&&e.changedTouches.length>0&&t.handleMouseUp(e.changedTouches[0])}),d6(dZ(t),"verticalCoordinatesGenerator",function(e){var t=e.xAxis,r=e.width,n=e.height,o=e.offset;return co(fZ(d5(d5(d5({},pU.defaultProps),t),{},{ticks:ci(t,!0),viewBox:{x:0,y:0,width:r,height:n}})),o.left,o.left+o.width)}),d6(dZ(t),"horizontalCoordinatesGenerator",function(e){var t=e.yAxis,r=e.width,n=e.height,o=e.offset;return co(fZ(d5(d5(d5({},pU.defaultProps),t),{},{ticks:ci(t,!0),viewBox:{x:0,y:0,width:r,height:n}})),o.top,o.top+o.height)}),d6(dZ(t),"axesTicksGenerator",function(e){return ci(e,!0)}),d6(dZ(t),"renderCursor",function(e){var n,o=t.state,i=o.isTooltipActive,a=o.activeCoordinate,u=o.activePayload,l=o.offset,s=o.activeTooltipIndex,c=t.getTooltipEventType();if(!e||!e.props.cursor||!i||!a||"ScatterChart"!==r&&"axis"!==c)return null;var f=t.props.layout,p=pg;if("ScatterChart"===r)n=a,p=pw;else if("BarChart"===r)n=t.getCursorRectangle(),p=a1;else if("radial"===f){var d=t.getCursorPoints(),h=d.cx,y=d.cy,v=d.radius;n={cx:h,cy:y,startAngle:d.startAngle,endAngle:d.endAngle,innerRadius:v,outerRadius:v},p=pC}else n={points:t.getCursorPoints()},p=pg;var m=e.key||"_recharts-cursor",g=d5(d5(d5(d5({stroke:"#ccc",pointerEvents:"none"},l),n),aK(e.props.cursor)),{},{payload:u,payloadIndex:s,key:m,className:"recharts-tooltip-cursor"});return/*#__PURE__*/(0,P.isValidElement)(e.props.cursor)?/*#__PURE__*/(0,P.cloneElement)(e.props.cursor,g):/*#__PURE__*/(0,P.createElement)(p,g)}),d6(dZ(t),"renderPolarAxis",function(e,r,n){var o=/*@__PURE__*/g(iq)(e,"type.axisType"),i=/*@__PURE__*/g(iq)(t.state,"".concat(o,"Map")),a=i&&i[e.props["".concat(o,"Id")]];return/*#__PURE__*/(0,P.cloneElement)(e,d5(d5({},a),{},{className:o,key:e.key||"".concat(r,"-").concat(n),ticks:ci(a,!0)}))}),d6(dZ(t),"renderXAxis",function(e,r,n){var o=t.state.xAxisMap[e.props.xAxisId];return t.renderAxis(o,e,r,n)}),d6(dZ(t),"renderYAxis",function(e,r,n){var o=t.state.yAxisMap[e.props.yAxisId];return t.renderAxis(o,e,r,n)}),/**
       * Draw grid
       * @param  {ReactElement} element the grid item
       * @return {ReactElement} The instance of grid
       */d6(dZ(t),"renderGrid",function(e){var r=t.state,n=r.xAxisMap,o=r.yAxisMap,i=r.offset,a=t.props,u=a.width,l=a.height,s=av(n),c=/*@__PURE__*/g(fl)(o,function(e){return /*@__PURE__*/g(fi)(e.domain,he)})||av(o),f=e.props||{};return/*#__PURE__*/(0,P.cloneElement)(e,{key:e.key||"grid",x:af(f.x)?f.x:i.left,y:af(f.y)?f.y:i.top,width:af(f.width)?f.width:i.width,height:af(f.height)?f.height:i.height,xAxis:s,yAxis:c,offset:i,chartWidth:u,chartHeight:l,verticalCoordinatesGenerator:f.verticalCoordinatesGenerator||t.verticalCoordinatesGenerator,horizontalCoordinatesGenerator:f.horizontalCoordinatesGenerator||t.horizontalCoordinatesGenerator})}),d6(dZ(t),"renderPolarGrid",function(e){var r=e.props,n=r.radialLines,o=r.polarAngles,i=r.polarRadius,a=t.state,u=a.radiusAxisMap,l=a.angleAxisMap,s=av(u),c=av(l),f=c.cx,p=c.cy,d=c.innerRadius,h=c.outerRadius;return/*#__PURE__*/(0,P.cloneElement)(e,{polarAngles:/*@__PURE__*/g(nX)(o)?o:ci(c,!0).map(function(e){return e.coordinate}),polarRadius:/*@__PURE__*/g(nX)(i)?i:ci(s,!0).map(function(e){return e.coordinate}),cx:f,cy:p,innerRadius:d,outerRadius:h,key:e.key||"polar-grid",radialLines:n})}),/**
       * Draw legend
       * @return {ReactElement}            The instance of Legend
       */d6(dZ(t),"renderLegend",function(){var e=t.state.formattedGraphicalItems,r=t.props,n=r.children,o=r.width,i=r.height,a=t.props.margin||{},u=s6({children:n,formattedGraphicalItems:e,legendWidth:o-(a.left||0)-(a.right||0),legendContent:s});if(!u)return null;var l=u.item,c=dq(u,dW);return/*#__PURE__*/(0,P.cloneElement)(l,d5(d5({},c),{},{chartWidth:o,chartHeight:i,margin:a,ref:function(e){t.legendInstance=e},onBBoxUpdate:t.handleLegendBBoxUpdate}))}),/**
       * Draw Tooltip
       * @return {ReactElement}  The instance of Tooltip
       */d6(dZ(t),"renderTooltip",function(){var e=aG(t.props.children,pu);if(!e)return null;var r=t.state,n=r.isTooltipActive,o=r.activeCoordinate,i=r.activePayload,a=r.activeLabel,u=r.offset;return/*#__PURE__*/(0,P.cloneElement)(e,{viewBox:d5(d5({},u),{},{x:u.left,y:u.top}),active:n,label:a,payload:n?i:[],coordinate:o})}),d6(dZ(t),"renderBrush",function(e){var r=t.props,n=r.margin,o=r.data,i=t.state,a=i.offset,u=i.dataStartIndex,l=i.dataEndIndex,s=i.updateId;// TODO: update brush when children update
return/*#__PURE__*/(0,P.cloneElement)(e,{key:e.key||"_recharts-brush",onChange:ca(t.handleBrushChange,null,e.props.onChange),data:o,x:af(e.props.x)?e.props.x:a.left,y:af(e.props.y)?e.props.y:a.top+a.height+a.brushBottom-(n.bottom||0),width:af(e.props.width)?e.props.width:a.width,startIndex:u,endIndex:l,updateId:"brush-".concat(s)})}),d6(dZ(t),"renderReferenceElement",function(e,r,n){if(!e)return null;var o=dZ(t).clipPathId,i=t.state,a=i.xAxisMap,u=i.yAxisMap,l=i.offset,s=e.props,c=s.xAxisId,f=s.yAxisId;return/*#__PURE__*/(0,P.cloneElement)(e,{key:e.key||"".concat(r,"-").concat(n),xAxis:a[c],yAxis:u[f],viewBox:{x:l.left,y:l.top,width:l.width,height:l.height},clipPathId:o})}),d6(dZ(t),"renderActivePoints",function(e){var t=e.item,r=e.activePoint,n=e.basePoint,o=e.childIndex,i=e.isRange,a=[],u=t.props.key,s=t.item.props,c=s.activeDot,f=d5(d5({index:o,dataKey:s.dataKey,cx:r.x,cy:r.y,r:4,fill:s5(t.item),strokeWidth:2,stroke:"#fff",payload:r.payload,value:r.value,key:"".concat(u,"-activePoint-").concat(o)},aK(c)),aj(c));return a.push(l.renderActiveDot(c,f)),n?a.push(l.renderActiveDot(c,d5(d5({},f),{},{cx:n.x,cy:n.y,key:"".concat(u,"-basePoint-").concat(o)}))):i&&a.push(null),a}),d6(dZ(t),"renderGraphicChild",function(e,r,n){var o,i,a=t.filterFormatItem(e,r,n);if(!a)return null;var u=t.getTooltipEventType(),l=t.state,s=l.isTooltipActive,c=l.tooltipAxis,f=l.activeTooltipIndex,p=l.activeLabel,d=aG(t.props.children,pu),h=a.props,y=h.points,v=h.isRange,m=h.baseLine,b=a.item.props,x=b.activeDot,_=b.hide,S={};"axis"!==u&&d&&"click"===d.props.trigger?S={onClick:ca(t.handleItemMouseEnter,null,e.props.onCLick)}:"axis"!==u&&(S={onMouseLeave:ca(t.handleItemMouseLeave,null,e.props.onMouseLeave),onMouseEnter:ca(t.handleItemMouseEnter,null,e.props.onMouseEnter)});var w=/*#__PURE__*/(0,P.cloneElement)(e,d5(d5({},a.props),S));if(!_&&s&&d&&x&&f>=0){if(c.dataKey&&!c.allowDuplicatedCategory){// number transform to string
var O="function"==typeof c.dataKey?function(e){// TODO needs to verify dataKey is Function
return"function"==typeof c.dataKey?c.dataKey(e.payload):null}:"payload.".concat(c.dataKey.toString());o=ab(y,O,p),i=v&&m&&ab(m,O,p)}else o=y[f],i=v&&m&&m[f];if(!/*@__PURE__*/g(rT)(o))return[w].concat(d1(t.renderActivePoints({item:a,activePoint:o,basePoint:i,childIndex:f,isRange:v})))}return v?[w,null,null]:[w,null]}),d6(dZ(t),"renderCustomized",function(e,r,n){return/*#__PURE__*/(0,P.cloneElement)(e,d5(d5({key:"recharts-customized-".concat(n)},t.props),t.state))}),t.uniqueChartId=/*@__PURE__*/g(rT)(e.id)?ah("recharts"):e.id,t.clipPathId="".concat(t.uniqueChartId,"-clip"),e.throttleDelay&&(t.triggeredAfterMouseMove=/*@__PURE__*/g(fP)(t.triggeredAfterMouseMove,e.throttleDelay)),t.state={},t}return n=[{key:"componentDidMount",value:function(){var e,t;/*@__PURE__*/g(rT)(this.props.syncId)||this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:null!==(e=this.props.margin.left)&&void 0!==e?e:0,top:null!==(t=this.props.margin.top)&&void 0!==t?t:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.handleMouseMove,layout:this.props.layout})}},{key:"getSnapshotBeforeUpdate",value:function(e,t){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==t.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==e.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==e.margin){var r,n;this.accessibilityManager.setDetails({offset:{left:null!==(r=this.props.margin.left)&&void 0!==r?r:0,top:null!==(n=this.props.margin.top)&&void 0!==n?n:0}})}// Something has to be returned for getSnapshotBeforeUpdate
return null}},{key:"componentDidUpdate",value:function(e){/*@__PURE__*/g(rT)(e.syncId)&&!/*@__PURE__*/g(rT)(this.props.syncId)&&this.addListener(),!/*@__PURE__*/g(rT)(e.syncId)&&/*@__PURE__*/g(rT)(this.props.syncId)&&this.removeListener()}},{key:"componentWillUnmount",value:function(){this.clearDeferId(),/*@__PURE__*/g(rT)(this.props.syncId)||this.removeListener(),this.cancelThrottledTriggerAfterMouseMove()}},{key:"cancelThrottledTriggerAfterMouseMove",value:function(){"function"==typeof this.triggeredAfterMouseMove.cancel&&this.triggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var e=aG(this.props.children,pu);if(e&&/*@__PURE__*/g(fL)(e.props.shared)){var t=e.props.shared?"axis":"item";return u.indexOf(t)>=0?t:i}return i}},{key:"getMouseInfo",value:function(e){if(!this.container)return null;var t=uR(this.container),r={chartX:Math.round(e.pageX-t.left),chartY:Math.round(e.pageY-t.top)},n=this.inRange(r.chartX,r.chartY);if(!n)return null;var o=this.state,i=o.xAxisMap,a=o.yAxisMap;if("axis"!==this.getTooltipEventType()&&i&&a){var u=av(i).scale,l=av(a).scale,s=u&&u.invert?u.invert(r.chartX):null,c=l&&l.invert?l.invert(r.chartY):null;return d5(d5({},r),{},{xValue:s,yValue:c})}var f=hu(this.state,this.props.data,this.props.layout,n);return f?d5(d5({},r),f):null}},{key:"getCursorRectangle",value:function(){var e=this.props.layout,t=this.state,r=t.activeCoordinate,n=t.offset,o=t.tooltipAxisBandSize,i=o/2;return{stroke:"none",fill:"#ccc",x:"horizontal"===e?r.x-i:n.left+.5,y:"horizontal"===e?n.top+.5:r.y-i,width:"horizontal"===e?o:n.width-1,height:"horizontal"===e?n.height-1:o}}},{key:"getCursorPoints",value:function(){var e,t,r,n,o=this.props.layout,i=this.state,a=i.activeCoordinate,u=i.offset;if("horizontal"===o)r=e=a.x,t=u.top,n=u.top+u.height;else if("vertical"===o)n=t=a.y,e=u.left,r=u.left+u.width;else if(!/*@__PURE__*/g(rT)(a.cx)||!/*@__PURE__*/g(rT)(a.cy)){if("centric"===o){var l=a.cx,s=a.cy,c=a.innerRadius,f=a.outerRadius,p=a.angle,d=cA(l,s,c,p),h=cA(l,s,f,p);e=d.x,t=d.y,r=h.x,n=h.y}else{var y=a.cx,v=a.cy,m=a.radius,b=a.startAngle,x=a.endAngle;return{points:[cA(y,v,m,b),cA(y,v,m,x)],cx:y,cy:v,radius:m,startAngle:b,endAngle:x}}}return[{x:e,y:t},{x:r,y:n}]}},{key:"inRange",value:function(e,t){var r=this.props.layout;if("horizontal"===r||"vertical"===r){var n=this.state.offset;return e>=n.left&&e<=n.left+n.width&&t>=n.top&&t<=n.top+n.height?{x:e,y:t}:null}var o=this.state,i=o.angleAxisMap,a=o.radiusAxisMap;return i&&a?cN({x:e,y:t},av(i)):null}},{key:"parseEventsOfWrapper",value:function(){var e=this.props.children,t=this.getTooltipEventType(),r=aG(e,pu),n={};return r&&"axis"===t&&(n="click"===r.props.trigger?{onClick:this.handleClick}:{onMouseEnter:this.handleMouseEnter,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd}),d5(d5({},aj(this.props,this.handleOuterEvent)),n)}},{key:"addListener",value:function(){dG.on(dV,this.handleReceiveSyncEvent),dG.setMaxListeners&&dG._maxListeners&&dG.setMaxListeners(dG._maxListeners+1)}},{key:"removeListener",value:function(){dG.removeListener(dV,this.handleReceiveSyncEvent),dG.setMaxListeners&&dG._maxListeners&&dG.setMaxListeners(dG._maxListeners-1)}},{key:"triggerSyncEvent",value:function(e){var t=this.props.syncId;/*@__PURE__*/g(rT)(t)||dG.emit(dV,t,this.uniqueChartId,e)}},{key:"applySyncEvent",value:function(e){var t=this.props,r=t.layout,n=t.syncMethod,o=this.state.updateId,i=e.dataStartIndex,a=e.dataEndIndex;if(/*@__PURE__*/g(rT)(e.dataStartIndex)&&/*@__PURE__*/g(rT)(e.dataEndIndex)){if(/*@__PURE__*/g(rT)(e.activeTooltipIndex))this.setState(e);else{var u=e.chartX,l=e.chartY,s=e.activeTooltipIndex,c=this.state,f=c.offset,p=c.tooltipTicks;if(!f)return;if("function"==typeof n)s=n(p,e);else if("value"===n){// Set activeTooltipIndex to the index with the same value as data.activeLabel
// For loop instead of findIndex because the latter is very slow in some browsers
s=-1;// in case we cannot find the element
for(var h=0;h<p.length;h++)if(p[h].value===e.activeLabel){s=h;break}}var y=d5(d5({},f),{},{x:f.left,y:f.top}),v=Math.min(u,y.x+y.width),m=Math.min(l,y.y+y.height),b=p[s]&&p[s].value,x=ha(this.state,this.props.data,s),_=p[s]?{x:"horizontal"===r?p[s].coordinate:v,y:"horizontal"===r?m:p[s].coordinate}:d9;this.setState(d5(d5({},e),{},{activeLabel:b,activeCoordinate:_,activePayload:x,activeTooltipIndex:s}))}}else this.setState(d5({dataStartIndex:i,dataEndIndex:a},d({props:this.props,dataStartIndex:i,dataEndIndex:a,updateId:o},this.state)))}},{key:"filterFormatItem",value:function(e,t,r){for(var n=this.state.formattedGraphicalItems,o=0,i=n.length;o<i;o++){var a=n[o];if(a.item===e||a.props.key===e.key||t===aL(a.item.type)&&r===a.childIndex)return a}return null}},{key:"renderAxis",value:/**
       * Draw axis
       * @param {Object} axisOptions The options of axis
       * @param {Object} element      The axis element
       * @param {String} displayName  The display name of axis
       * @param {Number} index        The index of element
       * @return {ReactElement}       The instance of x-axes
       */function(e,t,r,n){var o=this.props,i=o.width,a=o.height;return /*@__PURE__*/g(P).createElement(pU,d$({},e,{className:/*@__PURE__*/g(oF)("recharts-".concat(e.axisType," ").concat(e.axisType),e.className),key:t.key||"".concat(r,"-").concat(n),viewBox:{x:0,y:0,width:i,height:a},ticksGenerator:this.axesTicksGenerator}))}},{key:"renderClipPath",value:function(){var e=this.clipPathId,t=this.state.offset,r=t.left,n=t.top,o=t.height,i=t.width;return /*@__PURE__*/g(P).createElement("defs",null,/*@__PURE__*/g(P).createElement("clipPath",{id:e},/*@__PURE__*/g(P).createElement("rect",{x:r,y:n,height:o,width:i})))}},{key:"getXScales",value:function(){var e=this.state.xAxisMap;return e?Object.entries(e).reduce(function(e,t){var r=dU(t,2),n=r[0],o=r[1];return d5(d5({},e),{},d6({},n,o.scale))},{}):null}},{key:"getYScales",value:function(){var e=this.state.yAxisMap;return e?Object.entries(e).reduce(function(e,t){var r=dU(t,2),n=r[0],o=r[1];return d5(d5({},e),{},d6({},n,o.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(e){var t,r;return null===(t=this.state.xAxisMap)||void 0===t?void 0:null===(r=t[e])||void 0===r?void 0:r.scale}},{key:"getYScaleByAxisId",value:function(e){var t,r;return null===(t=this.state.yAxisMap)||void 0===t?void 0:null===(r=t[e])||void 0===r?void 0:r.scale}},{key:"getItemByXY",value:function(e){var t=this.state.formattedGraphicalItems;if(t&&t.length)for(var r=0,n=t.length;r<n;r++){var o=t[r],i=o.props,a=aL(o.item.type);if("Bar"===a){var u=(i.data||[]).find(function(t){return aZ(e,t)});if(u)return{graphicalItem:o,payload:u}}else if("RadialBar"===a){var l=(i.data||[]).find(function(t){return cN(e,t)});if(l)return{graphicalItem:o,payload:l}}}return null}},{key:"render",value:function(){var e=this;if(!aV(this))return null;var t=this.props,r=t.children,n=t.className,o=t.width,i=t.height,a=t.style,u=t.compact,l=t.title,s=t.desc,c=aK(dq(t,dB)),f={CartesianGrid:{handler:this.renderGrid,once:!0},ReferenceArea:{handler:this.renderReferenceElement},ReferenceLine:{handler:this.renderReferenceElement},ReferenceDot:{handler:this.renderReferenceElement},XAxis:{handler:this.renderXAxis},YAxis:{handler:this.renderYAxis},Brush:{handler:this.renderBrush,once:!0},Bar:{handler:this.renderGraphicChild},Line:{handler:this.renderGraphicChild},Area:{handler:this.renderGraphicChild},Radar:{handler:this.renderGraphicChild},RadialBar:{handler:this.renderGraphicChild},Scatter:{handler:this.renderGraphicChild},Pie:{handler:this.renderGraphicChild},Funnel:{handler:this.renderGraphicChild},Tooltip:{handler:this.renderCursor,once:!0},PolarGrid:{handler:this.renderPolarGrid,once:!0},PolarAngleAxis:{handler:this.renderPolarAxis},PolarRadiusAxis:{handler:this.renderPolarAxis},Customized:{handler:this.renderCustomized}};// The "compact" mode is mainly used as the panorama within Brush
if(u)return /*@__PURE__*/g(P).createElement(sb,d$({},c,{width:o,height:i,title:l,desc:s}),this.renderClipPath(),aW(r,f));this.props.accessibilityLayer&&(// Set tabIndex to 0 by default (can be overwritten)
c.tabIndex=0,// Set role to img by default (can be overwritten)
c.role="img",c.onKeyDown=function(t){e.accessibilityManager.keyboardEvent(t);// 'onKeyDown' is not currently a supported prop that can be passed through
// if it's added, this should be added: this.props.onKeyDown(e);
},c.onFocus=function(){e.accessibilityManager.focus();// 'onFocus' is not currently a supported prop that can be passed through
// if it's added, the focus event should be forwarded to the prop
});var p=this.parseEventsOfWrapper();return /*@__PURE__*/g(P).createElement("div",d$({className:/*@__PURE__*/g(oF)("recharts-wrapper",n),style:d5({position:"relative",cursor:"default",width:o,height:i},a)},p,{ref:function(t){e.container=t},role:"region"}),/*@__PURE__*/g(P).createElement(sb,d$({},c,{width:o,height:i,title:l,desc:s}),this.renderClipPath(),aW(r,f)),this.renderLegend(),this.renderTooltip())}}],dX(l.prototype,n),o&&dX(l,o),Object.defineProperty(l,"prototype",{writable:!1}),l}(P.Component),d6(t,"displayName",r),d6(t,"defaultProps",d5({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},f)),d6(t,"getDerivedStateFromProps",function(e,t){var r=e.data,n=e.children,o=e.width,i=e.height,a=e.layout,u=e.stackOffset,l=e.margin;if(/*@__PURE__*/g(rT)(t.updateId)){var s=hp(e);return d5(d5(d5({},s),{},{updateId:0},d(d5(d5({props:e},s),{},{updateId:0}),t)),{},{prevData:r,prevWidth:o,prevHeight:i,prevLayout:a,prevStackOffset:u,prevMargin:l,prevChildren:n})}if(r!==t.prevData||o!==t.prevWidth||i!==t.prevHeight||a!==t.prevLayout||u!==t.prevStackOffset||!a_(l,t.prevMargin)){var c=hp(e),f={// (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
// any flickering
chartX:t.chartX,chartY:t.chartY,// The tooltip should stay active when it was active in the previous render. If this is not
// the case, the tooltip disappears and immediately re-appears, causing a flickering effect
isTooltipActive:t.isTooltipActive},p=d5(d5({},hu(t,r,a)),{},{updateId:t.updateId+1}),h=d5(d5(d5({},c),f),p);return d5(d5(d5({},h),d(d5({props:e},h),t)),{},{prevData:r,prevWidth:o,prevHeight:i,prevLayout:a,prevStackOffset:u,prevMargin:l,prevChildren:n})}if(!aQ(n,t.prevChildren)){var y=/*@__PURE__*/g(rT)(r)?t.updateId+1:t.updateId;return d5(d5({updateId:y},d(d5(d5({props:e},t),{},{updateId:y}),t)),{},{prevChildren:n})}return null}),d6(t,"renderActiveDot",function(e,t){var r;return r=/*#__PURE__*/(0,P.isValidElement)(e)?/*#__PURE__*/(0,P.cloneElement)(e,t):/*@__PURE__*/g(r0)(e)?e(t):/*@__PURE__*/g(P).createElement(pN,t),/*@__PURE__*/g(P).createElement(a4,{className:"recharts-active-dot",key:t.key},r)}),t},hv=function(){return null};hv.displayName="XAxis",hv.defaultProps={allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0};/**
 * @fileOverview Y Axis
 */var hm=function(){return null};hm.displayName="YAxis",hm.defaultProps={allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1};var hg=hy({chartName:"BarChart",GraphicalChild:fo,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:hv},{axisType:"yAxis",AxisComp:hm}],formatAxisMap:fQ}),P=_("acw62"),hb=["x1","y1","x2","y2","key"];function hx(e){return(hx="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h_(){return(h_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function hS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function hw(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?hS(Object(r),!0).forEach(function(t){hj(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):hS(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function hP(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,hk(n.key),n)}}function hO(e,t){return(hO=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function hE(e){return(hE=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function hj(e,t,r){return(t=hk(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function hk(e){var t=function(e,t){if("object"!==hx(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==hx(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===hx(t)?t:String(t)}var hM=/*#__PURE__*/function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&hO(e,t)}(i,e);var t,r,n,o=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=hE(i);if(t){var n=hE(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===hx(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function i(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i),o.apply(this,arguments)}return r=[{key:"renderHorizontal",value:/**
     * Draw the horizontal grid lines
     * @param {Array} horizontalPoints either passed in as props or generated from function
     * @return {Group} Horizontal lines
     */function(e){var t=this,r=this.props,n=r.x,o=r.width,a=r.horizontal;if(!e||!e.length)return null;var u=e.map(function(e,r){var u=hw(hw({},t.props),{},{x1:n,y1:e,x2:n+o,y2:e,key:"line-".concat(r),index:r});return i.renderLineItem(a,u)});return /*@__PURE__*/g(P).createElement("g",{className:"recharts-cartesian-grid-horizontal"},u)}},{key:"renderVertical",value:function(e){var t=this,r=this.props,n=r.y,o=r.height,a=r.vertical;if(!e||!e.length)return null;var u=e.map(function(e,r){var u=hw(hw({},t.props),{},{x1:e,y1:n,x2:e,y2:n+o,key:"line-".concat(r),index:r});return i.renderLineItem(a,u)});return /*@__PURE__*/g(P).createElement("g",{className:"recharts-cartesian-grid-vertical"},u)}},{key:"renderVerticalStripes",value:function(e){var t=this.props.verticalFill;if(!t||!t.length)return null;var r=this.props,n=r.fillOpacity,o=r.x,i=r.y,a=r.width,u=r.height,l=e.map(function(e){return Math.round(e+o-o)}).sort(function(e,t){return e-t});o!==l[0]&&l.unshift(0);var s=l.map(function(e,r){var s=l[r+1]?l[r+1]-e:o+a-e;if(s<=0)return null;var c=r%t.length;return /*@__PURE__*/g(P).createElement("rect",{key:"react-".concat(r)// eslint-disable-line react/no-array-index-key
,x:e,y:i,width:s,height:u,stroke:"none",fill:t[c],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return /*@__PURE__*/g(P).createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},s)}},{key:"renderHorizontalStripes",value:function(e){var t=this.props.horizontalFill;if(!t||!t.length)return null;var r=this.props,n=r.fillOpacity,o=r.x,i=r.y,a=r.width,u=r.height,l=e.map(function(e){return Math.round(e+i-i)}).sort(function(e,t){return e-t});i!==l[0]&&l.unshift(0);var s=l.map(function(e,r){var s=l[r+1]?l[r+1]-e:i+u-e;if(s<=0)return null;var c=r%t.length;return /*@__PURE__*/g(P).createElement("rect",{key:"react-".concat(r)// eslint-disable-line react/no-array-index-key
,y:e,x:o,height:s,width:a,stroke:"none",fill:t[c],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return /*@__PURE__*/g(P).createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},s)}},{key:"renderBackground",value:function(){var e=this.props.fill;if(!e||"none"===e)return null;var t=this.props,r=t.fillOpacity,n=t.x,o=t.y,i=t.width,a=t.height;return /*@__PURE__*/g(P).createElement("rect",{x:n,y:o,width:i,height:a,stroke:"none",fill:e,fillOpacity:r,className:"recharts-cartesian-grid-bg"})}},{key:"render",value:function(){var e=this.props,t=e.x,r=e.y,n=e.width,o=e.height,i=e.horizontal,a=e.vertical,u=e.horizontalCoordinatesGenerator,l=e.verticalCoordinatesGenerator,s=e.xAxis,c=e.yAxis,f=e.offset,p=e.chartWidth,d=e.chartHeight;if(!af(n)||n<=0||!af(o)||o<=0||!af(t)||t!==+t||!af(r)||r!==+r)return null;var h=this.props,y=h.horizontalPoints,v=h.verticalPoints;return(!y||!y.length)&&/*@__PURE__*/g(r0)(u)&&(y=u({yAxis:c,width:p,height:d,offset:f})),(!v||!v.length)&&/*@__PURE__*/g(r0)(l)&&(v=l({xAxis:s,width:p,height:d,offset:f})),/*@__PURE__*/g(P).createElement("g",{className:"recharts-cartesian-grid"},this.renderBackground(),i&&this.renderHorizontal(y),a&&this.renderVertical(v),i&&this.renderHorizontalStripes(y),a&&this.renderVerticalStripes(v))}}],n=[{key:"renderLineItem",value:function(e,t){var r;if(/*@__PURE__*/g(P).isValidElement(e))r=/*@__PURE__*/g(P).cloneElement(e,t);else if(/*@__PURE__*/g(r0)(e))r=e(t);else{var n=t.x1,o=t.y1,i=t.x2,a=t.y2,u=t.key,l=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,hb);r=/*@__PURE__*/g(P).createElement("line",h_({},aK(l),{x1:n,y1:o,x2:i,y2:a,fill:"none",key:u}))}return r}}],r&&hP(i.prototype,r),n&&hP(i,n),Object.defineProperty(i,"prototype",{writable:!1}),i}(P.PureComponent);hj(hM,"displayName","CartesianGrid"),hj(hM,"defaultProps",{horizontal:!0,vertical:!0,// The ordinates of horizontal grid lines
horizontalPoints:[],// The abscissas of vertical grid lines
verticalPoints:[],stroke:"#ccc",fill:"none",// The fill of colors of grid lines
verticalFill:[],horizontalFill:[]});var P=_("acw62"),hA=function(){return null};function hT(e){return(hT="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function hC(){return(hC=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function hL(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function hN(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?hL(Object(r),!0).forEach(function(t){hV(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):hL(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function hI(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,hF(n.key),n)}}function hR(e,t){return(hR=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function hD(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function hG(e){return(hG=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function hV(e,t,r){return(t=hF(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function hF(e){var t=function(e,t){if("object"!==hT(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==hT(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===hT(t)?t:String(t)}hA.displayName="ZAxis",hA.defaultProps={zAxisId:0,range:[64,64],scale:"auto",type:"number"};var hz=/*#__PURE__*/function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&hR(e,t)}(i,e);var t,r,n,o=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=hG(i);if(t){var n=hG(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===hT(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return hD(e)}(this,e)});function i(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return hV(hD(e=o.call.apply(o,[this].concat(r))),"state",{isAnimationFinished:!1}),hV(hD(e),"handleAnimationEnd",function(){e.setState({isAnimationFinished:!0})}),hV(hD(e),"handleAnimationStart",function(){e.setState({isAnimationFinished:!1})}),hV(hD(e),"id",ah("recharts-scatter-")),e}return r=[{key:"renderSymbolsStatically",value:function(e){var t=this,r=this.props,n=r.shape,o=r.activeShape,a=r.activeIndex,u=aK(this.props);return e.map(function(e,r){var l=hN(hN({key:"symbol-".concat(r)},u),e);return /*@__PURE__*/g(P).createElement(a4,hC({className:"recharts-scatter-symbol"},ak(t.props,e,r),{key:"symbol-".concat(r)// eslint-disable-line react/no-array-index-key
,role:"img"}),i.renderSymbolItem(a===r?o:n,l))})}},{key:"renderSymbolsWithAnimation",value:function(){var e=this,t=this.props,r=t.points,n=t.isAnimationActive,o=t.animationBegin,i=t.animationDuration,a=t.animationEasing,u=t.animationId,l=this.state.prevPoints;return /*@__PURE__*/g(P).createElement(iM,{begin:o,duration:i,isActive:n,easing:a,from:{t:0},to:{t:1},key:"pie-".concat(u),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(t){var n=t.t,o=r.map(function(e,t){var r=l&&l[t];if(r){var o=ag(r.cx,e.cx),i=ag(r.cy,e.cy),a=ag(r.size,e.size);return hN(hN({},e),{},{cx:o(n),cy:i(n),size:a(n)})}var u=ag(0,e.size);return hN(hN({},e),{},{size:u(n)})});return /*@__PURE__*/g(P).createElement(a4,null,e.renderSymbolsStatically(o))})}},{key:"renderSymbols",value:function(){var e=this.props,t=e.points,r=e.isAnimationActive,n=this.state.prevPoints;return r&&t&&t.length&&(!n||!/*@__PURE__*/g(rC)(n,t))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(t)}},{key:"renderErrorBar",value:function(){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var e=this.props,t=e.points,r=e.xAxis,n=e.yAxis,o=aD(e.children,a7);return o?o.map(function(e,o){var i=e.props.direction;return /*@__PURE__*/g(P).cloneElement(e,{key:o,// eslint-disable-line react/no-array-index-key
data:t,xAxis:r,yAxis:n,layout:"x"===i?"vertical":"horizontal",dataPointFormatter:function(e,t){return{x:e.cx,y:e.cy,value:"x"===i?+e.node.x:+e.node.y,errorVal:s2(e,t)}}})}):null}},{key:"renderLine",value:function(){var e,t,r=this.props,n=r.points,o=r.line,i=r.lineType,a=r.lineJointType,u=aK(this.props),l=aK(o);if("joint"===i)e=n.map(function(e){return{x:e.cx,y:e.cy}});else if("fitting"===i){var s=ax(n),c=s.xmin,f=s.xmax,p=s.a,d=s.b,h=function(e){return p*e+d};e=[{x:c,y:h(c)},{x:f,y:h(f)}]}var y=hN(hN(hN({},u),{},{fill:"none",stroke:u&&u.fill},l),{},{points:e});return t=/*@__PURE__*/g(P).isValidElement(o)?/*@__PURE__*/g(P).cloneElement(o,y):/*@__PURE__*/g(r0)(o)?o(y):/*@__PURE__*/g(P).createElement(pg,hC({},y,{type:a})),/*@__PURE__*/g(P).createElement(a4,{className:"recharts-scatter-line",key:"recharts-scatter-line"},t)}},{key:"render",value:function(){var e=this.props,t=e.hide,r=e.points,n=e.line,o=e.className,i=e.xAxis,a=e.yAxis,u=e.left,l=e.top,s=e.width,c=e.height,f=e.id,p=e.isAnimationActive;if(t||!r||!r.length)return null;var d=this.state.isAnimationFinished,h=/*@__PURE__*/g(oF)("recharts-scatter",o),y=i&&i.allowDataOverflow,v=a&&a.allowDataOverflow,m=y||v,b=/*@__PURE__*/g(rT)(f)?this.id:f;return /*@__PURE__*/g(P).createElement(a4,{className:h,clipPath:m?"url(#clipPath-".concat(b,")"):null},y||v?/*@__PURE__*/g(P).createElement("defs",null,/*@__PURE__*/g(P).createElement("clipPath",{id:"clipPath-".concat(b)},/*@__PURE__*/g(P).createElement("rect",{x:y?u:u-s/2,y:v?l:l-c/2,width:y?s:2*s,height:v?c:2*c}))):null,n&&this.renderLine(),this.renderErrorBar(),/*@__PURE__*/g(P).createElement(a4,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!p||d)&&c2.renderCallByParent(this.props,r))}}],n=[{key:"getDerivedStateFromProps",value:function(e,t){return e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curPoints:e.points,prevPoints:t.curPoints}:e.points!==t.curPoints?{curPoints:e.points}:null}},{key:"renderSymbolItem",value:function(e,t){var r;return /*@__PURE__*/g(P).isValidElement(e)?r=/*@__PURE__*/g(P).cloneElement(e,t):/*@__PURE__*/g(r0)(e)?r=e(t):"string"==typeof e&&(r=/*@__PURE__*/g(P).createElement(sk,hC({},t,{type:e}))),r}}],r&&hI(i.prototype,r),n&&hI(i,n),Object.defineProperty(i,"prototype",{writable:!1}),i}(P.PureComponent);hV(hz,"displayName","Scatter"),hV(hz,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!uO.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"}),/**
 * Compose the data of each group
 * @param  {Object} xAxis   The configuration of x-axis
 * @param  {Object} yAxis   The configuration of y-axis
 * @param  {String} dataKey The unique key of a group
 * @return {Array}  Composed data
 */hV(hz,"getComposedData",function(e){var t=e.xAxis,r=e.yAxis,n=e.zAxis,o=e.item,i=e.displayedData,a=e.xAxisTicks,u=e.yAxisTicks,l=e.offset,s=o.props.tooltipType,c=aD(o.props.children,a9),f=/*@__PURE__*/g(rT)(t.dataKey)?o.props.dataKey:t.dataKey,p=/*@__PURE__*/g(rT)(r.dataKey)?o.props.dataKey:r.dataKey,d=n&&n.dataKey,h=n?n.range:hA.defaultProps.range,y=h&&h[0],v=t.scale.bandwidth?t.scale.bandwidth():0,m=r.scale.bandwidth?r.scale.bandwidth():0,b=i.map(function(e,i){var l=s2(e,f),h=s2(e,p),b=!/*@__PURE__*/g(rT)(d)&&s2(e,d)||"-",x=[{name:/*@__PURE__*/g(rT)(t.dataKey)?o.props.name:t.name||t.dataKey,unit:t.unit||"",value:l,payload:e,dataKey:f,type:s},{name:/*@__PURE__*/g(rT)(r.dataKey)?o.props.name:r.name||r.dataKey,unit:r.unit||"",value:h,payload:e,dataKey:p,type:s}];"-"!==b&&x.push({name:n.name||n.dataKey,unit:n.unit||"",value:b,payload:e,dataKey:d,type:s});var _=cy({axis:t,ticks:a,bandSize:v,entry:e,index:i,dataKey:f}),S=cy({axis:r,ticks:u,bandSize:m,entry:e,index:i,dataKey:p}),w="-"!==b?n.scale(b):y,P=Math.sqrt(Math.max(w,0)/Math.PI);return hN(hN({},e),{},{cx:_,cy:S,x:_-P,y:S-P,xAxis:t,yAxis:r,zAxis:n,width:2*P,height:2*P,size:w,node:{x:l,y:h,z:b},tooltipPayload:x,tooltipPosition:{x:_,y:S},payload:e},c&&c[i]&&c[i].props)});return hN({points:b},l)});/**
 * @fileOverview Scatter Chart
 */var hK=hy({chartName:"ScatterChart",GraphicalChild:hz,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:hv},{axisType:"yAxis",AxisComp:hm},{axisType:"zAxis",AxisComp:hA}],formatAxisMap:fQ});const hQ=e=>{let t={1:0,2:0,3:0,4:0,5:0},r={1:"C",2:"Db",3:"F",4:"G",5:"Ab"};return e.split("").forEach(e=>{t[tK[e]]+=1}),Object.keys(r).map(e=>({name:r[e],fq:t[e]}))},hH=e=>{let t=e.map((e,t)=>({x:t,y:e}));return t},hW=tM.div`
	display: flex;
	flex-direction: column;
`,hB=tM.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`,hY=tM.div`
	font-size: 1.3rem;
	font-weight: bold;
	text-align: center;
`;var hU=({seq:e,times:t})=>/*#__PURE__*/(0,S.jsxs)(hW,{children:[/*#__PURE__*/(0,S.jsxs)(hB,{children:[/*#__PURE__*/(0,S.jsx)(hY,{children:"Intervals distribution"}),/*#__PURE__*/(0,S.jsx)(tL,{h:"1rem"}),/*#__PURE__*/(0,S.jsxs)(hK,{width:500,height:300,margin:{top:20,right:20,bottom:20,left:20},children:[/*#__PURE__*/(0,S.jsx)(hM,{}),/*#__PURE__*/(0,S.jsx)(hv,{type:"number",dataKey:"x",name:"index",unit:""}),/*#__PURE__*/(0,S.jsx)(hm,{type:"number",dataKey:"y",name:"milliseconds",unit:"ms"}),/*#__PURE__*/(0,S.jsx)(pu,{cursor:{strokeDasharray:"3 3"}}),/*#__PURE__*/(0,S.jsx)(hz,{name:"A school",data:hH(t),fill:"#FF97C1"})]})]}),/*#__PURE__*/(0,S.jsxs)(hB,{children:[/*#__PURE__*/(0,S.jsx)(hY,{children:"Histogram of notes"}),/*#__PURE__*/(0,S.jsx)(tL,{h:"1rem"}),/*#__PURE__*/(0,S.jsxs)(hg,{width:500,height:300,data:hQ(e),margin:{top:5,right:30,left:20,bottom:5},children:[/*#__PURE__*/(0,S.jsx)(hM,{strokeDasharray:"3 3"}),/*#__PURE__*/(0,S.jsx)(hv,{dataKey:"name"}),/*#__PURE__*/(0,S.jsx)(hm,{padding:{top:50}}),/*#__PURE__*/(0,S.jsx)(pu,{}),/*#__PURE__*/(0,S.jsx)(fo,{dataKey:"fq",fill:"#186F65 "})]})]})]});const h$=(function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=tk.apply(void 0,E([e],t,!1)),o="sc-global-".concat(eO(eM(JSON.stringify(n))>>>0)),i=new tA(n,o),a=function(e){var t=td(),r=/*@__PURE__*/g(P).useContext(tw),n=/*@__PURE__*/g(P).useRef(t.styleSheet.allocateGSInstance(o)).current;return t.styleSheet.server&&u(n,e,t.styleSheet,r,t.stylis),/*@__PURE__*/g(P).useLayoutEffect(function(){if(!t.styleSheet.server)return u(n,e,t.styleSheet,r,t.stylis),function(){return i.removeStyles(n,t.styleSheet)}},[n,e,t.styleSheet,r,t.stylis]),null};function u(e,t,r,n,o){if(i.isStatic)i.renderStyles(e,ey,r,o);else{var u=O(O({},t),{theme:eg(t,n,a.defaultProps)});i.renderStyles(e,u,r,o)}}return /*@__PURE__*/g(P).memo(a)})`
	body {
		padding: 0;
		margin: 0;
		border: 0;
		outline: 0;
		// background: #f0f0ff;
	}

	* {
		box-sizing: border-box;
		font-family: 'Inter', sans-serif;
	}
`,hq=tM.div`
	border: 2px solid #053B50;
`,hX=tM.div`
	background:	#e6f2f4;
	border-radius: 8px;
	padding: 2rem;
	box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
`,hJ=tM.div`
	display: flex;
	align-items: center;
	background: #053B50;
	height: 5rem;
	padding: 0 2rem;
`,hZ=tM.div`
	width: 100%;
	max-width: 1200px;
	margin: 2rem auto;
	font-size: 1.5rem;
	font-weight: bold;
	color: #eee;
`,h0=tM.div`
	display: flex;
	flex-direction: column;
	max-width: 700px;
	margin: 0 auto;
	padding: 0 2rem;
`,h1=document.getElementById("app"),h2=eE(h1);h2.render(/*#__PURE__*/(0,S.jsx)(()=>{let[e,t]=(0,P.useState)({name:"",seq:""}),r=tD(e.seq);return/*#__PURE__*/(0,S.jsxs)(S.Fragment,{children:[/*#__PURE__*/(0,S.jsx)(hJ,{children:/*#__PURE__*/(0,S.jsx)(hZ,{children:"dna-tezeta"})}),/*#__PURE__*/(0,S.jsx)(tL,{h:"1rem"}),/*#__PURE__*/(0,S.jsxs)(h0,{children:[/*#__PURE__*/(0,S.jsx)(h$,{}),/*#__PURE__*/(0,S.jsx)(ry,{}),/*#__PURE__*/(0,S.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[/*#__PURE__*/(0,S.jsx)("span",{style:{fontSize:"1.8rem"},children:"Short introduction -\xa0"}),/*#__PURE__*/(0,S.jsx)("span",{style:{fontSize:"1.2rem",color:"#053b50",fontWeight:"bold"},children:"Euel Mekonnen Lemma"})]}),/*#__PURE__*/(0,S.jsxs)("p",{children:["Inspired by ",/*#__PURE__*/(0,S.jsxs)("a",{href:"https://news.mit.edu/2019/translating-proteins-music-0626",children:["Markus Buehler","'","s work "]}),", I wrote a script that translates DNA or amino acid sequences into music. Instead of a 20-note scale, I decided to use the ",/*#__PURE__*/(0,S.jsx)("span",{style:{color:"#053B50",fontWeight:"bold"},children:"Ethiopian Ambassel scale"})," (5 notes) because of its melancholic vibe that suits different runs of improvisation, matching each note with multiple acids (loses some info here). Intervals between notes are generated by a hash function of the sequences and is, therefore, deterministic. "]}),/*#__PURE__*/(0,S.jsx)(tL,{h:"1rem"}),/*#__PURE__*/(0,S.jsx)(rA,{onChange:t}),/*#__PURE__*/(0,S.jsx)(tL,{h:"2rem"}),/*#__PURE__*/(0,S.jsx)(hq,{}),/*#__PURE__*/(0,S.jsx)(tL,{h:"3rem"}),/*#__PURE__*/(0,S.jsxs)(hX,{children:[/*#__PURE__*/(0,S.jsxs)("div",{style:{fontSize:"1.5rem",textAlign:"center"},children:["Protein name: ",e.name]}),/*#__PURE__*/(0,S.jsx)(tL,{h:"1rem"}),/*#__PURE__*/(0,S.jsx)(t4,{seq:e.seq,times:r}),/*#__PURE__*/(0,S.jsx)(tL,{h:"2rem"}),/*#__PURE__*/(0,S.jsx)(hU,{seq:e.seq,times:r})]}),/*#__PURE__*/(0,S.jsx)(tL,{h:"3rem"})]})]})},{}));//# sourceMappingURL=index.f0ac4beb.js.map

//# sourceMappingURL=index.f0ac4beb.js.map
