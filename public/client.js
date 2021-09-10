// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/peerjs/dist/peerjs.min.js":[function(require,module,exports) {
var define;
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EgBh":[function(require,module,exports) {
var e={};e.useBlobBuilder=function(){try{return new Blob([]),!1}catch(e){return!0}}(),e.useArrayBufferView=!e.useBlobBuilder&&function(){try{return 0===new Blob([new Uint8Array([])]).size}catch(e){return!0}}(),module.exports.binaryFeatures=e;var r=module.exports.BlobBuilder;function t(){this._pieces=[],this._parts=[]}"undefined"!=typeof window&&(r=module.exports.BlobBuilder=window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder||window.BlobBuilder),t.prototype.append=function(e){"number"==typeof e?this._pieces.push(e):(this.flush(),this._parts.push(e))},t.prototype.flush=function(){if(this._pieces.length>0){var r=new Uint8Array(this._pieces);e.useArrayBufferView||(r=r.buffer),this._parts.push(r),this._pieces=[]}},t.prototype.getBuffer=function(){if(this.flush(),e.useBlobBuilder){for(var t=new r,i=0,u=this._parts.length;i<u;i++)t.append(this._parts[i]);return t.getBlob()}return new Blob(this._parts)},module.exports.BufferBuilder=t;
},{}],"kdPp":[function(require,module,exports) {
var t=require("./bufferbuilder").BufferBuilder,e=require("./bufferbuilder").binaryFeatures,i={unpack:function(t){return new r(t).unpack()},pack:function(t){var e=new n;return e.pack(t),e.getBuffer()}};function r(t){this.index=0,this.dataBuffer=t,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}function n(){this.bufferBuilder=new t}function u(t){var e=t.charCodeAt(0);return e<=2047?"00":e<=65535?"000":e<=2097151?"0000":e<=67108863?"00000":"000000"}function a(t){return t.length>600?new Blob([t]).size:t.replace(/[^\u0000-\u007F]/g,u).length}module.exports=i,r.prototype.unpack=function(){var t,e=this.unpack_uint8();if(e<128)return e;if((224^e)<32)return(224^e)-32;if((t=160^e)<=15)return this.unpack_raw(t);if((t=176^e)<=15)return this.unpack_string(t);if((t=144^e)<=15)return this.unpack_array(t);if((t=128^e)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:case 213:case 214:case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}},r.prototype.unpack_uint8=function(){var t=255&this.dataView[this.index];return this.index++,t},r.prototype.unpack_uint16=function(){var t=this.read(2),e=256*(255&t[0])+(255&t[1]);return this.index+=2,e},r.prototype.unpack_uint32=function(){var t=this.read(4),e=256*(256*(256*t[0]+t[1])+t[2])+t[3];return this.index+=4,e},r.prototype.unpack_uint64=function(){var t=this.read(8),e=256*(256*(256*(256*(256*(256*(256*t[0]+t[1])+t[2])+t[3])+t[4])+t[5])+t[6])+t[7];return this.index+=8,e},r.prototype.unpack_int8=function(){var t=this.unpack_uint8();return t<128?t:t-256},r.prototype.unpack_int16=function(){var t=this.unpack_uint16();return t<32768?t:t-65536},r.prototype.unpack_int32=function(){var t=this.unpack_uint32();return t<Math.pow(2,31)?t:t-Math.pow(2,32)},r.prototype.unpack_int64=function(){var t=this.unpack_uint64();return t<Math.pow(2,63)?t:t-Math.pow(2,64)},r.prototype.unpack_raw=function(t){if(this.length<this.index+t)throw new Error("BinaryPackFailure: index is out of range "+this.index+" "+t+" "+this.length);var e=this.dataBuffer.slice(this.index,this.index+t);return this.index+=t,e},r.prototype.unpack_string=function(t){for(var e,i,r=this.read(t),n=0,u="";n<t;)(e=r[n])<128?(u+=String.fromCharCode(e),n++):(192^e)<32?(i=(192^e)<<6|63&r[n+1],u+=String.fromCharCode(i),n+=2):(i=(15&e)<<12|(63&r[n+1])<<6|63&r[n+2],u+=String.fromCharCode(i),n+=3);return this.index+=t,u},r.prototype.unpack_array=function(t){for(var e=new Array(t),i=0;i<t;i++)e[i]=this.unpack();return e},r.prototype.unpack_map=function(t){for(var e={},i=0;i<t;i++){var r=this.unpack(),n=this.unpack();e[r]=n}return e},r.prototype.unpack_float=function(){var t=this.unpack_uint32(),e=(t>>23&255)-127;return(0===t>>31?1:-1)*(8388607&t|8388608)*Math.pow(2,e-23)},r.prototype.unpack_double=function(){var t=this.unpack_uint32(),e=this.unpack_uint32(),i=(t>>20&2047)-1023;return(0===t>>31?1:-1)*((1048575&t|1048576)*Math.pow(2,i-20)+e*Math.pow(2,i-52))},r.prototype.read=function(t){var e=this.index;if(e+t<=this.length)return this.dataView.subarray(e,e+t);throw new Error("BinaryPackFailure: read index out of range")},n.prototype.getBuffer=function(){return this.bufferBuilder.getBuffer()},n.prototype.pack=function(t){var i=typeof t;if("string"===i)this.pack_string(t);else if("number"===i)Math.floor(t)===t?this.pack_integer(t):this.pack_double(t);else if("boolean"===i)!0===t?this.bufferBuilder.append(195):!1===t&&this.bufferBuilder.append(194);else if("undefined"===i)this.bufferBuilder.append(192);else{if("object"!==i)throw new Error('Type "'+i+'" not yet supported');if(null===t)this.bufferBuilder.append(192);else{var r=t.constructor;if(r==Array)this.pack_array(t);else if(r==Blob||r==File||t instanceof Blob||t instanceof File)this.pack_bin(t);else if(r==ArrayBuffer)e.useArrayBufferView?this.pack_bin(new Uint8Array(t)):this.pack_bin(t);else if("BYTES_PER_ELEMENT"in t)e.useArrayBufferView?this.pack_bin(new Uint8Array(t.buffer)):this.pack_bin(t.buffer);else if(r==Object||r.toString().startsWith("class"))this.pack_object(t);else if(r==Date)this.pack_string(t.toString());else{if("function"!=typeof t.toBinaryPack)throw new Error('Type "'+r.toString()+'" not yet supported');this.bufferBuilder.append(t.toBinaryPack())}}}this.bufferBuilder.flush()},n.prototype.pack_bin=function(t){var e=t.length||t.byteLength||t.size;if(e<=15)this.pack_uint8(160+e);else if(e<=65535)this.bufferBuilder.append(218),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(219),this.pack_uint32(e)}this.bufferBuilder.append(t)},n.prototype.pack_string=function(t){var e=a(t);if(e<=15)this.pack_uint8(176+e);else if(e<=65535)this.bufferBuilder.append(216),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(217),this.pack_uint32(e)}this.bufferBuilder.append(t)},n.prototype.pack_array=function(t){var e=t.length;if(e<=15)this.pack_uint8(144+e);else if(e<=65535)this.bufferBuilder.append(220),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(221),this.pack_uint32(e)}for(var i=0;i<e;i++)this.pack(t[i])},n.prototype.pack_integer=function(t){if(t>=-32&&t<=127)this.bufferBuilder.append(255&t);else if(t>=0&&t<=255)this.bufferBuilder.append(204),this.pack_uint8(t);else if(t>=-128&&t<=127)this.bufferBuilder.append(208),this.pack_int8(t);else if(t>=0&&t<=65535)this.bufferBuilder.append(205),this.pack_uint16(t);else if(t>=-32768&&t<=32767)this.bufferBuilder.append(209),this.pack_int16(t);else if(t>=0&&t<=4294967295)this.bufferBuilder.append(206),this.pack_uint32(t);else if(t>=-2147483648&&t<=2147483647)this.bufferBuilder.append(210),this.pack_int32(t);else if(t>=-0x8000000000000000&&t<=0x8000000000000000)this.bufferBuilder.append(211),this.pack_int64(t);else{if(!(t>=0&&t<=0x10000000000000000))throw new Error("Invalid integer");this.bufferBuilder.append(207),this.pack_uint64(t)}},n.prototype.pack_double=function(t){var e=0;t<0&&(e=1,t=-t);var i=Math.floor(Math.log(t)/Math.LN2),r=t/Math.pow(2,i)-1,n=Math.floor(r*Math.pow(2,52)),u=Math.pow(2,32),a=e<<31|i+1023<<20|n/u&1048575,p=n%u;this.bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(p)},n.prototype.pack_object=function(t){var e=Object.keys(t).length;if(e<=15)this.pack_uint8(128+e);else if(e<=65535)this.bufferBuilder.append(222),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(223),this.pack_uint32(e)}for(var i in t)t.hasOwnProperty(i)&&(this.pack(i),this.pack(t[i]))},n.prototype.pack_uint8=function(t){this.bufferBuilder.append(t)},n.prototype.pack_uint16=function(t){this.bufferBuilder.append(t>>8),this.bufferBuilder.append(255&t)},n.prototype.pack_uint32=function(t){var e=4294967295&t;this.bufferBuilder.append((4278190080&e)>>>24),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e)},n.prototype.pack_uint64=function(t){var e=t/Math.pow(2,32),i=t%Math.pow(2,32);this.bufferBuilder.append((4278190080&e)>>>24),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e),this.bufferBuilder.append((4278190080&i)>>>24),this.bufferBuilder.append((16711680&i)>>>16),this.bufferBuilder.append((65280&i)>>>8),this.bufferBuilder.append(255&i)},n.prototype.pack_int8=function(t){this.bufferBuilder.append(255&t)},n.prototype.pack_int16=function(t){this.bufferBuilder.append((65280&t)>>8),this.bufferBuilder.append(255&t)},n.prototype.pack_int32=function(t){this.bufferBuilder.append(t>>>24&255),this.bufferBuilder.append((16711680&t)>>>16),this.bufferBuilder.append((65280&t)>>>8),this.bufferBuilder.append(255&t)},n.prototype.pack_int64=function(t){var e=Math.floor(t/Math.pow(2,32)),i=t%Math.pow(2,32);this.bufferBuilder.append((4278190080&e)>>>24),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e),this.bufferBuilder.append((4278190080&i)>>>24),this.bufferBuilder.append((16711680&i)>>>16),this.bufferBuilder.append((65280&i)>>>8),this.bufferBuilder.append(255&i)};
},{"./bufferbuilder":"EgBh"}],"iSxC":[function(require,module,exports) {
"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.extractVersion=o,exports.wrapPeerConnectionEvent=i,exports.disableLog=s,exports.disableWarnings=a,exports.log=p,exports.deprecated=u,exports.detectBrowser=c,exports.compactObject=f,exports.walkStats=l,exports.filterStats=v;var n=!0,r=!0;function o(e,t,n){var r=e.match(t);return r&&r.length>=n&&parseInt(r[n],10)}function i(e,t,n){if(e.RTCPeerConnection){var r=e.RTCPeerConnection.prototype,o=r.addEventListener;r.addEventListener=function(e,r){if(e!==t)return o.apply(this,arguments);var i=function(e){var t=n(e);t&&(r.handleEvent?r.handleEvent(t):r(t))};return this._eventMap=this._eventMap||{},this._eventMap[t]||(this._eventMap[t]=new Map),this._eventMap[t].set(r,i),o.apply(this,[e,i])};var i=r.removeEventListener;r.removeEventListener=function(e,n){if(e!==t||!this._eventMap||!this._eventMap[t])return i.apply(this,arguments);if(!this._eventMap[t].has(n))return i.apply(this,arguments);var r=this._eventMap[t].get(n);return this._eventMap[t].delete(n),0===this._eventMap[t].size&&delete this._eventMap[t],0===Object.keys(this._eventMap).length&&delete this._eventMap,i.apply(this,[e,r])},Object.defineProperty(r,"on"+t,{get:function(){return this["_on"+t]},set:function(e){this["_on"+t]&&(this.removeEventListener(t,this["_on"+t]),delete this["_on"+t]),e&&this.addEventListener(t,this["_on"+t]=e)},enumerable:!0,configurable:!0})}}function s(e){return"boolean"!=typeof e?new Error("Argument type: "+t(e)+". Please use a boolean."):(n=e,e?"adapter.js logging disabled":"adapter.js logging enabled")}function a(e){return"boolean"!=typeof e?new Error("Argument type: "+t(e)+". Please use a boolean."):(r=!e,"adapter.js deprecation warnings "+(e?"disabled":"enabled"))}function p(){if("object"===("undefined"==typeof window?"undefined":t(window))){if(n)return;"undefined"!=typeof console&&"function"==typeof console.log&&console.log.apply(console,arguments)}}function u(e,t){r&&console.warn(e+" is deprecated, please use "+t+" instead.")}function c(e){var t={browser:null,version:null};if(void 0===e||!e.navigator)return t.browser="Not a browser.",t;var{navigator:n}=e;if(n.mozGetUserMedia)t.browser="firefox",t.version=o(n.userAgent,/Firefox\/(\d+)\./,1);else if(n.webkitGetUserMedia||!1===e.isSecureContext&&e.webkitRTCPeerConnection&&!e.RTCIceGatherer)t.browser="chrome",t.version=o(n.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(n.mediaDevices&&n.userAgent.match(/Edge\/(\d+).(\d+)$/))t.browser="edge",t.version=o(n.userAgent,/Edge\/(\d+).(\d+)$/,2);else{if(!e.RTCPeerConnection||!n.userAgent.match(/AppleWebKit\/(\d+)\./))return t.browser="Not a supported browser.",t;t.browser="safari",t.version=o(n.userAgent,/AppleWebKit\/(\d+)\./,1),t.supportsUnifiedPlan=e.RTCRtpTransceiver&&"currentDirection"in e.RTCRtpTransceiver.prototype}return t}function d(e){return"[object Object]"===Object.prototype.toString.call(e)}function f(t){return d(t)?Object.keys(t).reduce(function(n,r){var o=d(t[r]),i=o?f(t[r]):t[r],s=o&&!Object.keys(i).length;return void 0===i||s?n:Object.assign(n,e({},r,i))},{}):t}function l(e,t,n){t&&!n.has(t.id)&&(n.set(t.id,t),Object.keys(t).forEach(function(r){r.endsWith("Id")?l(e,e.get(t[r]),n):r.endsWith("Ids")&&t[r].forEach(function(t){l(e,e.get(t),n)})}))}function v(e,t,n){var r=n?"outbound-rtp":"inbound-rtp",o=new Map;if(null===t)return o;var i=[];return e.forEach(function(e){"track"===e.type&&e.trackIdentifier===t.id&&i.push(e)}),i.forEach(function(t){e.forEach(function(n){n.type===r&&n.trackId===t.id&&l(e,n,o)})}),o}
},{}],"s6SN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetUserMedia=i;var e=t(require("../utils.js"));function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function t(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}return o.default=e,t&&t.set(e,o),o}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n=e.log;function i(e,r){var t=e&&e.navigator;if(t.mediaDevices){var i=function(e){if("object"!==o(e)||e.mandatory||e.optional)return e;var r={};return Object.keys(e).forEach(function(t){if("require"!==t&&"advanced"!==t&&"mediaSource"!==t){var n="object"===o(e[t])?e[t]:{ideal:e[t]};void 0!==n.exact&&"number"==typeof n.exact&&(n.min=n.max=n.exact);var i=function(e,r){return e?e+r.charAt(0).toUpperCase()+r.slice(1):"deviceId"===r?"sourceId":r};if(void 0!==n.ideal){r.optional=r.optional||[];var a={};"number"==typeof n.ideal?(a[i("min",t)]=n.ideal,r.optional.push(a),(a={})[i("max",t)]=n.ideal,r.optional.push(a)):(a[i("",t)]=n.ideal,r.optional.push(a))}void 0!==n.exact&&"number"!=typeof n.exact?(r.mandatory=r.mandatory||{},r.mandatory[i("",t)]=n.exact):["min","max"].forEach(function(e){void 0!==n[e]&&(r.mandatory=r.mandatory||{},r.mandatory[i(e,t)]=n[e])})}}),e.advanced&&(r.optional=(r.optional||[]).concat(e.advanced)),r},a=function(e,a){if(r.version>=61)return a(e);if((e=JSON.parse(JSON.stringify(e)))&&"object"===o(e.audio)){var c=function(e,r,t){r in e&&!(t in e)&&(e[t]=e[r],delete e[r])};c((e=JSON.parse(JSON.stringify(e))).audio,"autoGainControl","googAutoGainControl"),c(e.audio,"noiseSuppression","googNoiseSuppression"),e.audio=i(e.audio)}if(e&&"object"===o(e.video)){var d=e.video.facingMode;d=d&&("object"===o(d)?d:{ideal:d});var u,s=r.version<66;if(d&&("user"===d.exact||"environment"===d.exact||"user"===d.ideal||"environment"===d.ideal)&&(!t.mediaDevices.getSupportedConstraints||!t.mediaDevices.getSupportedConstraints().facingMode||s))if(delete e.video.facingMode,"environment"===d.exact||"environment"===d.ideal?u=["back","rear"]:"user"!==d.exact&&"user"!==d.ideal||(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(function(r){var t=(r=r.filter(function(e){return"videoinput"===e.kind})).find(function(e){return u.some(function(r){return e.label.toLowerCase().includes(r)})});return!t&&r.length&&u.includes("back")&&(t=r[r.length-1]),t&&(e.video.deviceId=d.exact?{exact:t.deviceId}:{ideal:t.deviceId}),e.video=i(e.video),n("chrome: "+JSON.stringify(e)),a(e)});e.video=i(e.video)}return n("chrome: "+JSON.stringify(e)),a(e)},c=function(e){return r.version>=64?e:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[e.name]||e.name,message:e.message,constraint:e.constraint||e.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}};if(t.getUserMedia=function(e,r,o){a(e,function(e){t.webkitGetUserMedia(e,r,function(e){o&&o(c(e))})})}.bind(t),t.mediaDevices.getUserMedia){var d=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(e){return a(e,function(e){return d(e).then(function(r){if(e.audio&&!r.getAudioTracks().length||e.video&&!r.getVideoTracks().length)throw r.getTracks().forEach(function(e){e.stop()}),new DOMException("","NotFoundError");return r},function(e){return Promise.reject(c(e))})})}}}}
},{"../utils.js":"iSxC"}],"VHa8":[function(require,module,exports) {
"use strict";function e(e,i){e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||e.navigator.mediaDevices&&("function"==typeof i?e.navigator.mediaDevices.getDisplayMedia=function(a){return i(a).then(function(i){var t=a.video&&a.video.width,o=a.video&&a.video.height,d=a.video&&a.video.frameRate;return a.video={mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:i,maxFrameRate:d||3}},t&&(a.video.mandatory.maxWidth=t),o&&(a.video.mandatory.maxHeight=o),e.navigator.mediaDevices.getUserMedia(a)})}:console.error("shimGetDisplayMedia: getSourceId argument is not a function"))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetDisplayMedia=e;
},{}],"uI5X":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimMediaStream=a,exports.shimOnTrack=c,exports.shimGetSendersWithDtmf=p,exports.shimGetStats=d,exports.shimSenderReceiverGetStats=h,exports.shimAddTrackRemoveTrackWithNative=f,exports.shimAddTrackRemoveTrack=m,exports.shimPeerConnection=u,exports.fixNegotiationNeeded=l,Object.defineProperty(exports,"shimGetUserMedia",{enumerable:!0,get:function(){return t.shimGetUserMedia}}),Object.defineProperty(exports,"shimGetDisplayMedia",{enumerable:!0,get:function(){return r.shimGetDisplayMedia}});var e=i(require("../utils.js")),t=require("./getusermedia"),r=require("./getdisplaymedia");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){e.MediaStream=e.MediaStream||e.webkitMediaStream}function c(t){if("object"!==s(t)||!t.RTCPeerConnection||"ontrack"in t.RTCPeerConnection.prototype)e.wrapPeerConnectionEvent(t,"track",function(e){return e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e});else{Object.defineProperty(t.RTCPeerConnection.prototype,"ontrack",{get:function(){return this._ontrack},set:function(e){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=e)},enumerable:!0,configurable:!0});var r=t.RTCPeerConnection.prototype.setRemoteDescription;t.RTCPeerConnection.prototype.setRemoteDescription=function(){var e=this;return this._ontrackpoly||(this._ontrackpoly=function(r){r.stream.addEventListener("addtrack",function(n){var i;i=t.RTCPeerConnection.prototype.getReceivers?e.getReceivers().find(function(e){return e.track&&e.track.id===n.track.id}):{track:n.track};var o=new Event("track");o.track=n.track,o.receiver=i,o.transceiver={receiver:i},o.streams=[r.stream],e.dispatchEvent(o)}),r.stream.getTracks().forEach(function(n){var i;i=t.RTCPeerConnection.prototype.getReceivers?e.getReceivers().find(function(e){return e.track&&e.track.id===n.id}):{track:n};var o=new Event("track");o.track=n,o.receiver=i,o.transceiver={receiver:i},o.streams=[r.stream],e.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),r.apply(this,arguments)}}}function p(e){if("object"===s(e)&&e.RTCPeerConnection&&!("getSenders"in e.RTCPeerConnection.prototype)&&"createDTMFSender"in e.RTCPeerConnection.prototype){var t=function(e,t){return{track:t,get dtmf(){return void 0===this._dtmf&&("audio"===t.kind?this._dtmf=e.createDTMFSender(t):this._dtmf=null),this._dtmf},_pc:e}};if(!e.RTCPeerConnection.prototype.getSenders){e.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};var r=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addTrack=function(e,n){var i=r.apply(this,arguments);return i||(i=t(this,e),this._senders.push(i)),i};var n=e.RTCPeerConnection.prototype.removeTrack;e.RTCPeerConnection.prototype.removeTrack=function(e){n.apply(this,arguments);var t=this._senders.indexOf(e);-1!==t&&this._senders.splice(t,1)}}var i=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(e){var r=this;this._senders=this._senders||[],i.apply(this,[e]),e.getTracks().forEach(function(e){r._senders.push(t(r,e))})};var o=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){var t=this;this._senders=this._senders||[],o.apply(this,[e]),e.getTracks().forEach(function(e){var r=t._senders.find(function(t){return t.track===e});r&&t._senders.splice(t._senders.indexOf(r),1)})}}else if("object"===s(e)&&e.RTCPeerConnection&&"getSenders"in e.RTCPeerConnection.prototype&&"createDTMFSender"in e.RTCPeerConnection.prototype&&e.RTCRtpSender&&!("dtmf"in e.RTCRtpSender.prototype)){var a=e.RTCPeerConnection.prototype.getSenders;e.RTCPeerConnection.prototype.getSenders=function(){var e=this,t=a.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t},Object.defineProperty(e.RTCRtpSender.prototype,"dtmf",{get:function(){return void 0===this._dtmf&&("audio"===this.track.kind?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function d(e){if(e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.getStats;e.RTCPeerConnection.prototype.getStats=function(){var e=this,[r,n,i]=arguments;if(arguments.length>0&&"function"==typeof r)return t.apply(this,arguments);if(0===t.length&&(0===arguments.length||"function"!=typeof r))return t.apply(this,[]);var o=function(e){var t={};return e.result().forEach(function(e){var r={id:e.id,timestamp:e.timestamp,type:{localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[e.type]||e.type};e.names().forEach(function(t){r[t]=e.stat(t)}),t[r.id]=r}),t},s=function(e){return new Map(Object.keys(e).map(function(t){return[t,e[t]]}))};if(arguments.length>=2){return t.apply(this,[function(e){n(s(o(e)))},r])}return new Promise(function(r,n){t.apply(e,[function(e){r(s(o(e)))},n])}).then(n,i)}}}function h(t){if("object"===s(t)&&t.RTCPeerConnection&&t.RTCRtpSender&&t.RTCRtpReceiver){if(!("getStats"in t.RTCRtpSender.prototype)){var r=t.RTCPeerConnection.prototype.getSenders;r&&(t.RTCPeerConnection.prototype.getSenders=function(){var e=this,t=r.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t});var n=t.RTCPeerConnection.prototype.addTrack;n&&(t.RTCPeerConnection.prototype.addTrack=function(){var e=n.apply(this,arguments);return e._pc=this,e}),t.RTCRtpSender.prototype.getStats=function(){var t=this;return this._pc.getStats().then(function(r){return e.filterStats(r,t.track,!0)})}}if(!("getStats"in t.RTCRtpReceiver.prototype)){var i=t.RTCPeerConnection.prototype.getReceivers;i&&(t.RTCPeerConnection.prototype.getReceivers=function(){var e=this,t=i.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t}),e.wrapPeerConnectionEvent(t,"track",function(e){return e.receiver._pc=e.srcElement,e}),t.RTCRtpReceiver.prototype.getStats=function(){var t=this;return this._pc.getStats().then(function(r){return e.filterStats(r,t.track,!1)})}}if("getStats"in t.RTCRtpSender.prototype&&"getStats"in t.RTCRtpReceiver.prototype){var o=t.RTCPeerConnection.prototype.getStats;t.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof t.MediaStreamTrack){var e,r,n,i=arguments[0];return this.getSenders().forEach(function(t){t.track===i&&(e?n=!0:e=t)}),this.getReceivers().forEach(function(e){return e.track===i&&(r?n=!0:r=e),e.track===i}),n||e&&r?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):e?e.getStats():r?r.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return o.apply(this,arguments)}}}}function f(e){e.RTCPeerConnection.prototype.getLocalStreams=function(){var e=this;return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(function(t){return e._shimmedLocalStreams[t][0]})};var t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addTrack=function(e,r){if(!r)return t.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};var n=t.apply(this,arguments);return this._shimmedLocalStreams[r.id]?-1===this._shimmedLocalStreams[r.id].indexOf(n)&&this._shimmedLocalStreams[r.id].push(n):this._shimmedLocalStreams[r.id]=[r,n],n};var r=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(e){var t=this;this._shimmedLocalStreams=this._shimmedLocalStreams||{},e.getTracks().forEach(function(e){if(t.getSenders().find(function(t){return t.track===e}))throw new DOMException("Track already exists.","InvalidAccessError")});var n=this.getSenders();r.apply(this,arguments);var i=this.getSenders().filter(function(e){return-1===n.indexOf(e)});this._shimmedLocalStreams[e.id]=[e].concat(i)};var n=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[e.id],n.apply(this,arguments)};var i=e.RTCPeerConnection.prototype.removeTrack;e.RTCPeerConnection.prototype.removeTrack=function(e){var t=this;return this._shimmedLocalStreams=this._shimmedLocalStreams||{},e&&Object.keys(this._shimmedLocalStreams).forEach(function(r){var n=t._shimmedLocalStreams[r].indexOf(e);-1!==n&&t._shimmedLocalStreams[r].splice(n,1),1===t._shimmedLocalStreams[r].length&&delete t._shimmedLocalStreams[r]}),i.apply(this,arguments)}}function m(e,t){if(e.RTCPeerConnection){if(e.RTCPeerConnection.prototype.addTrack&&t.version>=65)return f(e);var r=e.RTCPeerConnection.prototype.getLocalStreams;e.RTCPeerConnection.prototype.getLocalStreams=function(){var e=this,t=r.apply(this);return this._reverseStreams=this._reverseStreams||{},t.map(function(t){return e._reverseStreams[t.id]})};var n=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(t){var r=this;if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},t.getTracks().forEach(function(e){if(r.getSenders().find(function(t){return t.track===e}))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[t.id]){var i=new e.MediaStream(t.getTracks());this._streams[t.id]=i,this._reverseStreams[i.id]=t,t=i}n.apply(this,[t])};var i=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},i.apply(this,[this._streams[e.id]||e]),delete this._reverseStreams[this._streams[e.id]?this._streams[e.id].id:e.id],delete this._streams[e.id]},e.RTCPeerConnection.prototype.addTrack=function(t,r){var n=this;if("closed"===this.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");var i=[].slice.call(arguments,1);if(1!==i.length||!i[0].getTracks().find(function(e){return e===t}))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(function(e){return e.track===t}))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};var o=this._streams[r.id];if(o)o.addTrack(t),Promise.resolve().then(function(){n.dispatchEvent(new Event("negotiationneeded"))});else{var s=new e.MediaStream([t]);this._streams[r.id]=s,this._reverseStreams[s.id]=r,this.addStream(s)}return this.getSenders().find(function(e){return e.track===t})},["createOffer","createAnswer"].forEach(function(t){var r=e.RTCPeerConnection.prototype[t],n=o({},t,function(){var e=this,t=arguments;return arguments.length&&"function"==typeof arguments[0]?r.apply(this,[function(r){var n=c(e,r);t[0].apply(null,[n])},function(e){t[1]&&t[1].apply(null,e)},arguments[2]]):r.apply(this,arguments).then(function(t){return c(e,t)})});e.RTCPeerConnection.prototype[t]=n[t]});var s=e.RTCPeerConnection.prototype.setLocalDescription;e.RTCPeerConnection.prototype.setLocalDescription=function(){return arguments.length&&arguments[0].type?(arguments[0]=(e=this,t=arguments[0],r=t.sdp,Object.keys(e._reverseStreams||[]).forEach(function(t){var n=e._reverseStreams[t],i=e._streams[n.id];r=r.replace(new RegExp(n.id,"g"),i.id)}),new RTCSessionDescription({type:t.type,sdp:r})),s.apply(this,arguments)):s.apply(this,arguments);var e,t,r};var a=Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(e.RTCPeerConnection.prototype,"localDescription",{get:function(){var e=a.get.apply(this);return""===e.type?e:c(this,e)}}),e.RTCPeerConnection.prototype.removeTrack=function(e){var t,r=this;if("closed"===this.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!e._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(e._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{},Object.keys(this._streams).forEach(function(n){r._streams[n].getTracks().find(function(t){return e.track===t})&&(t=r._streams[n])}),t&&(1===t.getTracks().length?this.removeStream(this._reverseStreams[t.id]):t.removeTrack(e.track),this.dispatchEvent(new Event("negotiationneeded")))}}function c(e,t){var r=t.sdp;return Object.keys(e._reverseStreams||[]).forEach(function(t){var n=e._reverseStreams[t],i=e._streams[n.id];r=r.replace(new RegExp(i.id,"g"),n.id)}),new RTCSessionDescription({type:t.type,sdp:r})}}function u(e,t){!e.RTCPeerConnection&&e.webkitRTCPeerConnection&&(e.RTCPeerConnection=e.webkitRTCPeerConnection),e.RTCPeerConnection&&t.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){var r=e.RTCPeerConnection.prototype[t],n=o({},t,function(){return arguments[0]=new("addIceCandidate"===t?e.RTCIceCandidate:e.RTCSessionDescription)(arguments[0]),r.apply(this,arguments)});e.RTCPeerConnection.prototype[t]=n[t]})}function l(t,r){e.wrapPeerConnectionEvent(t,"negotiationneeded",function(e){var t=e.target;if(!(r.version<72||t.getConfiguration&&"plan-b"===t.getConfiguration().sdpSemantics)||"stable"===t.signalingState)return e})}
},{"../utils.js":"iSxC","./getusermedia":"s6SN","./getdisplaymedia":"VHa8"}],"NZ1C":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.filterIceServers=n;var r=t(require("../utils"));function e(){if("function"!=typeof WeakMap)return null;var r=new WeakMap;return e=function(){return r},r}function t(r){if(r&&r.__esModule)return r;if(null===r||"object"!=typeof r&&"function"!=typeof r)return{default:r};var t=e();if(t&&t.has(r))return t.get(r);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in r)if(Object.prototype.hasOwnProperty.call(r,i)){var f=u?Object.getOwnPropertyDescriptor(r,i):null;f&&(f.get||f.set)?Object.defineProperty(n,i,f):n[i]=r[i]}return n.default=r,t&&t.set(r,n),n}function n(e,t){var n=!1;return(e=JSON.parse(JSON.stringify(e))).filter(function(e){if(e&&(e.urls||e.url)){var t=e.urls||e.url;e.url&&!e.urls&&r.deprecated("RTCIceServer.url","RTCIceServer.urls");var u="string"==typeof t;return u&&(t=[t]),t=t.filter(function(r){if(0===r.indexOf("stun:"))return!1;var e=r.startsWith("turn")&&!r.startsWith("turn:[")&&r.includes("transport=udp");return e&&!n?(n=!0,!0):e&&!n}),delete e.url,e.urls=u?t[0]:t,!!t.length}})}
},{"../utils":"iSxC"}],"YHvh":[function(require,module,exports) {
"use strict";var r={generateIdentifier:function(){return Math.random().toString(36).substr(2,10)}};r.localCName=r.generateIdentifier(),r.splitLines=function(r){return r.trim().split("\n").map(function(r){return r.trim()})},r.splitSections=function(r){return r.split("\nm=").map(function(r,e){return(e>0?"m="+r:r).trim()+"\r\n"})},r.getDescription=function(e){var t=r.splitSections(e);return t&&t[0]},r.getMediaSections=function(e){var t=r.splitSections(e);return t.shift(),t},r.matchPrefix=function(e,t){return r.splitLines(e).filter(function(r){return 0===r.indexOf(t)})},r.parseCandidate=function(r){for(var e,t={foundation:(e=0===r.indexOf("a=candidate:")?r.substring(12).split(" "):r.substring(10).split(" "))[0],component:parseInt(e[1],10),protocol:e[2].toLowerCase(),priority:parseInt(e[3],10),ip:e[4],address:e[4],port:parseInt(e[5],10),type:e[7]},a=8;a<e.length;a+=2)switch(e[a]){case"raddr":t.relatedAddress=e[a+1];break;case"rport":t.relatedPort=parseInt(e[a+1],10);break;case"tcptype":t.tcpType=e[a+1];break;case"ufrag":t.ufrag=e[a+1],t.usernameFragment=e[a+1];break;default:t[e[a]]=e[a+1]}return t},r.writeCandidate=function(r){var e=[];e.push(r.foundation),e.push(r.component),e.push(r.protocol.toUpperCase()),e.push(r.priority),e.push(r.address||r.ip),e.push(r.port);var t=r.type;return e.push("typ"),e.push(t),"host"!==t&&r.relatedAddress&&r.relatedPort&&(e.push("raddr"),e.push(r.relatedAddress),e.push("rport"),e.push(r.relatedPort)),r.tcpType&&"tcp"===r.protocol.toLowerCase()&&(e.push("tcptype"),e.push(r.tcpType)),(r.usernameFragment||r.ufrag)&&(e.push("ufrag"),e.push(r.usernameFragment||r.ufrag)),"candidate:"+e.join(" ")},r.parseIceOptions=function(r){return r.substr(14).split(" ")},r.parseRtpMap=function(r){var e=r.substr(9).split(" "),t={payloadType:parseInt(e.shift(),10)};return e=e[0].split("/"),t.name=e[0],t.clockRate=parseInt(e[1],10),t.channels=3===e.length?parseInt(e[2],10):1,t.numChannels=t.channels,t},r.writeRtpMap=function(r){var e=r.payloadType;void 0!==r.preferredPayloadType&&(e=r.preferredPayloadType);var t=r.channels||r.numChannels||1;return"a=rtpmap:"+e+" "+r.name+"/"+r.clockRate+(1!==t?"/"+t:"")+"\r\n"},r.parseExtmap=function(r){var e=r.substr(9).split(" ");return{id:parseInt(e[0],10),direction:e[0].indexOf("/")>0?e[0].split("/")[1]:"sendrecv",uri:e[1]}},r.writeExtmap=function(r){return"a=extmap:"+(r.id||r.preferredId)+(r.direction&&"sendrecv"!==r.direction?"/"+r.direction:"")+" "+r.uri+"\r\n"},r.parseFmtp=function(r){for(var e,t={},a=r.substr(r.indexOf(" ")+1).split(";"),n=0;n<a.length;n++)t[(e=a[n].trim().split("="))[0].trim()]=e[1];return t},r.writeFmtp=function(r){var e="",t=r.payloadType;if(void 0!==r.preferredPayloadType&&(t=r.preferredPayloadType),r.parameters&&Object.keys(r.parameters).length){var a=[];Object.keys(r.parameters).forEach(function(e){r.parameters[e]?a.push(e+"="+r.parameters[e]):a.push(e)}),e+="a=fmtp:"+t+" "+a.join(";")+"\r\n"}return e},r.parseRtcpFb=function(r){var e=r.substr(r.indexOf(" ")+1).split(" ");return{type:e.shift(),parameter:e.join(" ")}},r.writeRtcpFb=function(r){var e="",t=r.payloadType;return void 0!==r.preferredPayloadType&&(t=r.preferredPayloadType),r.rtcpFeedback&&r.rtcpFeedback.length&&r.rtcpFeedback.forEach(function(r){e+="a=rtcp-fb:"+t+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+"\r\n"}),e},r.parseSsrcMedia=function(r){var e=r.indexOf(" "),t={ssrc:parseInt(r.substr(7,e-7),10)},a=r.indexOf(":",e);return a>-1?(t.attribute=r.substr(e+1,a-e-1),t.value=r.substr(a+1)):t.attribute=r.substr(e+1),t},r.parseSsrcGroup=function(r){var e=r.substr(13).split(" ");return{semantics:e.shift(),ssrcs:e.map(function(r){return parseInt(r,10)})}},r.getMid=function(e){var t=r.matchPrefix(e,"a=mid:")[0];if(t)return t.substr(6)},r.parseFingerprint=function(r){var e=r.substr(14).split(" ");return{algorithm:e[0].toLowerCase(),value:e[1]}},r.getDtlsParameters=function(e,t){return{role:"auto",fingerprints:r.matchPrefix(e+t,"a=fingerprint:").map(r.parseFingerprint)}},r.writeDtlsParameters=function(r,e){var t="a=setup:"+e+"\r\n";return r.fingerprints.forEach(function(r){t+="a=fingerprint:"+r.algorithm+" "+r.value+"\r\n"}),t},r.parseCryptoLine=function(r){var e=r.substr(9).split(" ");return{tag:parseInt(e[0],10),cryptoSuite:e[1],keyParams:e[2],sessionParams:e.slice(3)}},r.writeCryptoLine=function(e){return"a=crypto:"+e.tag+" "+e.cryptoSuite+" "+("object"==typeof e.keyParams?r.writeCryptoKeyParams(e.keyParams):e.keyParams)+(e.sessionParams?" "+e.sessionParams.join(" "):"")+"\r\n"},r.parseCryptoKeyParams=function(r){if(0!==r.indexOf("inline:"))return null;var e=r.substr(7).split("|");return{keyMethod:"inline",keySalt:e[0],lifeTime:e[1],mkiValue:e[2]?e[2].split(":")[0]:void 0,mkiLength:e[2]?e[2].split(":")[1]:void 0}},r.writeCryptoKeyParams=function(r){return r.keyMethod+":"+r.keySalt+(r.lifeTime?"|"+r.lifeTime:"")+(r.mkiValue&&r.mkiLength?"|"+r.mkiValue+":"+r.mkiLength:"")},r.getCryptoParameters=function(e,t){return r.matchPrefix(e+t,"a=crypto:").map(r.parseCryptoLine)},r.getIceParameters=function(e,t){var a=r.matchPrefix(e+t,"a=ice-ufrag:")[0],n=r.matchPrefix(e+t,"a=ice-pwd:")[0];return a&&n?{usernameFragment:a.substr(12),password:n.substr(10)}:null},r.writeIceParameters=function(r){return"a=ice-ufrag:"+r.usernameFragment+"\r\na=ice-pwd:"+r.password+"\r\n"},r.parseRtpParameters=function(e){for(var t={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},a=r.splitLines(e)[0].split(" "),n=3;n<a.length;n++){var s=a[n],i=r.matchPrefix(e,"a=rtpmap:"+s+" ")[0];if(i){var p=r.parseRtpMap(i),c=r.matchPrefix(e,"a=fmtp:"+s+" ");switch(p.parameters=c.length?r.parseFmtp(c[0]):{},p.rtcpFeedback=r.matchPrefix(e,"a=rtcp-fb:"+s+" ").map(r.parseRtcpFb),t.codecs.push(p),p.name.toUpperCase()){case"RED":case"ULPFEC":t.fecMechanisms.push(p.name.toUpperCase())}}}return r.matchPrefix(e,"a=extmap:").forEach(function(e){t.headerExtensions.push(r.parseExtmap(e))}),t},r.writeRtpDescription=function(e,t){var a="";a+="m="+e+" ",a+=t.codecs.length>0?"9":"0",a+=" UDP/TLS/RTP/SAVPF ",a+=t.codecs.map(function(r){return void 0!==r.preferredPayloadType?r.preferredPayloadType:r.payloadType}).join(" ")+"\r\n",a+="c=IN IP4 0.0.0.0\r\n",a+="a=rtcp:9 IN IP4 0.0.0.0\r\n",t.codecs.forEach(function(e){a+=r.writeRtpMap(e),a+=r.writeFmtp(e),a+=r.writeRtcpFb(e)});var n=0;return t.codecs.forEach(function(r){r.maxptime>n&&(n=r.maxptime)}),n>0&&(a+="a=maxptime:"+n+"\r\n"),a+="a=rtcp-mux\r\n",t.headerExtensions&&t.headerExtensions.forEach(function(e){a+=r.writeExtmap(e)}),a},r.parseRtpEncodingParameters=function(e){var t,a=[],n=r.parseRtpParameters(e),s=-1!==n.fecMechanisms.indexOf("RED"),i=-1!==n.fecMechanisms.indexOf("ULPFEC"),p=r.matchPrefix(e,"a=ssrc:").map(function(e){return r.parseSsrcMedia(e)}).filter(function(r){return"cname"===r.attribute}),c=p.length>0&&p[0].ssrc,o=r.matchPrefix(e,"a=ssrc-group:FID").map(function(r){return r.substr(17).split(" ").map(function(r){return parseInt(r,10)})});o.length>0&&o[0].length>1&&o[0][0]===c&&(t=o[0][1]),n.codecs.forEach(function(r){if("RTX"===r.name.toUpperCase()&&r.parameters.apt){var e={ssrc:c,codecPayloadType:parseInt(r.parameters.apt,10)};c&&t&&(e.rtx={ssrc:t}),a.push(e),s&&((e=JSON.parse(JSON.stringify(e))).fec={ssrc:c,mechanism:i?"red+ulpfec":"red"},a.push(e))}}),0===a.length&&c&&a.push({ssrc:c});var u=r.matchPrefix(e,"b=");return u.length&&(u=0===u[0].indexOf("b=TIAS:")?parseInt(u[0].substr(7),10):0===u[0].indexOf("b=AS:")?1e3*parseInt(u[0].substr(5),10)*.95-16e3:void 0,a.forEach(function(r){r.maxBitrate=u})),a},r.parseRtcpParameters=function(e){var t={},a=r.matchPrefix(e,"a=ssrc:").map(function(e){return r.parseSsrcMedia(e)}).filter(function(r){return"cname"===r.attribute})[0];a&&(t.cname=a.value,t.ssrc=a.ssrc);var n=r.matchPrefix(e,"a=rtcp-rsize");t.reducedSize=n.length>0,t.compound=0===n.length;var s=r.matchPrefix(e,"a=rtcp-mux");return t.mux=s.length>0,t},r.parseMsid=function(e){var t,a=r.matchPrefix(e,"a=msid:");if(1===a.length)return{stream:(t=a[0].substr(7).split(" "))[0],track:t[1]};var n=r.matchPrefix(e,"a=ssrc:").map(function(e){return r.parseSsrcMedia(e)}).filter(function(r){return"msid"===r.attribute});return n.length>0?{stream:(t=n[0].value.split(" "))[0],track:t[1]}:void 0},r.parseSctpDescription=function(e){var t,a=r.parseMLine(e),n=r.matchPrefix(e,"a=max-message-size:");n.length>0&&(t=parseInt(n[0].substr(19),10)),isNaN(t)&&(t=65536);var s=r.matchPrefix(e,"a=sctp-port:");if(s.length>0)return{port:parseInt(s[0].substr(12),10),protocol:a.fmt,maxMessageSize:t};if(r.matchPrefix(e,"a=sctpmap:").length>0){var i=r.matchPrefix(e,"a=sctpmap:")[0].substr(10).split(" ");return{port:parseInt(i[0],10),protocol:i[1],maxMessageSize:t}}},r.writeSctpDescription=function(r,e){var t=[];return t="DTLS/SCTP"!==r.protocol?["m="+r.kind+" 9 "+r.protocol+" "+e.protocol+"\r\n","c=IN IP4 0.0.0.0\r\n","a=sctp-port:"+e.port+"\r\n"]:["m="+r.kind+" 9 "+r.protocol+" "+e.port+"\r\n","c=IN IP4 0.0.0.0\r\n","a=sctpmap:"+e.port+" "+e.protocol+" 65535\r\n"],void 0!==e.maxMessageSize&&t.push("a=max-message-size:"+e.maxMessageSize+"\r\n"),t.join("")},r.generateSessionId=function(){return Math.random().toString().substr(2,21)},r.writeSessionBoilerplate=function(e,t,a){var n=void 0!==t?t:2;return"v=0\r\no="+(a||"thisisadapterortc")+" "+(e||r.generateSessionId())+" "+n+" IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"},r.writeMediaSection=function(e,t,a,n){var s=r.writeRtpDescription(e.kind,t);if(s+=r.writeIceParameters(e.iceGatherer.getLocalParameters()),s+=r.writeDtlsParameters(e.dtlsTransport.getLocalParameters(),"offer"===a?"actpass":"active"),s+="a=mid:"+e.mid+"\r\n",e.direction?s+="a="+e.direction+"\r\n":e.rtpSender&&e.rtpReceiver?s+="a=sendrecv\r\n":e.rtpSender?s+="a=sendonly\r\n":e.rtpReceiver?s+="a=recvonly\r\n":s+="a=inactive\r\n",e.rtpSender){var i="msid:"+n.id+" "+e.rtpSender.track.id+"\r\n";s+="a="+i,s+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" "+i,e.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" "+i,s+="a=ssrc-group:FID "+e.sendEncodingParameters[0].ssrc+" "+e.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return s+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" cname:"+r.localCName+"\r\n",e.rtpSender&&e.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" cname:"+r.localCName+"\r\n"),s},r.getDirection=function(e,t){for(var a=r.splitLines(e),n=0;n<a.length;n++)switch(a[n]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return a[n].substr(2)}return t?r.getDirection(t):"sendrecv"},r.getKind=function(e){return r.splitLines(e)[0].split(" ")[0].substr(2)},r.isRejected=function(r){return"0"===r.split(" ",2)[1]},r.parseMLine=function(e){var t=r.splitLines(e)[0].substr(2).split(" ");return{kind:t[0],port:parseInt(t[1],10),protocol:t[2],fmt:t.slice(3).join(" ")}},r.parseOLine=function(e){var t=r.matchPrefix(e,"o=")[0].substr(2).split(" ");return{username:t[0],sessionId:t[1],sessionVersion:parseInt(t[2],10),netType:t[3],addressType:t[4],address:t[5]}},r.isValidSDP=function(e){if("string"!=typeof e||0===e.length)return!1;for(var t=r.splitLines(e),a=0;a<t.length;a++)if(t[a].length<2||"="!==t[a].charAt(1))return!1;return!0},"object"==typeof module&&(module.exports=r);
},{}],"NJ2u":[function(require,module,exports) {
"use strict";var e=require("sdp");function t(e){return{inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[e.type]||e.type}function r(t,r,n,a,i){var s=e.writeRtpDescription(t.kind,r);if(s+=e.writeIceParameters(t.iceGatherer.getLocalParameters()),s+=e.writeDtlsParameters(t.dtlsTransport.getLocalParameters(),"offer"===n?"actpass":i||"active"),s+="a=mid:"+t.mid+"\r\n",t.rtpSender&&t.rtpReceiver?s+="a=sendrecv\r\n":t.rtpSender?s+="a=sendonly\r\n":t.rtpReceiver?s+="a=recvonly\r\n":s+="a=inactive\r\n",t.rtpSender){var o=t.rtpSender._initialTrackId||t.rtpSender.track.id;t.rtpSender._initialTrackId=o;var c="msid:"+(a?a.id:"-")+" "+o+"\r\n";s+="a="+c,s+="a=ssrc:"+t.sendEncodingParameters[0].ssrc+" "+c,t.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+t.sendEncodingParameters[0].rtx.ssrc+" "+c,s+="a=ssrc-group:FID "+t.sendEncodingParameters[0].ssrc+" "+t.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return s+="a=ssrc:"+t.sendEncodingParameters[0].ssrc+" cname:"+e.localCName+"\r\n",t.rtpSender&&t.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+t.sendEncodingParameters[0].rtx.ssrc+" cname:"+e.localCName+"\r\n"),s}function n(e,t){var r=!1;return(e=JSON.parse(JSON.stringify(e))).filter(function(e){if(e&&(e.urls||e.url)){var n=e.urls||e.url;e.url&&!e.urls&&console.warn("RTCIceServer.url is deprecated! Use urls instead.");var a="string"==typeof n;return a&&(n=[n]),n=n.filter(function(e){return 0===e.indexOf("turn:")&&-1!==e.indexOf("transport=udp")&&-1===e.indexOf("turn:[")&&!r?(r=!0,!0):0===e.indexOf("stun:")&&t>=14393&&-1===e.indexOf("?transport=udp")}),delete e.url,e.urls=a?n[0]:n,!!n.length}})}function a(e,t){var r={codecs:[],headerExtensions:[],fecMechanisms:[]},n=function(e,t){e=parseInt(e,10);for(var r=0;r<t.length;r++)if(t[r].payloadType===e||t[r].preferredPayloadType===e)return t[r]},a=function(e,t,r,a){var i=n(e.parameters.apt,r),s=n(t.parameters.apt,a);return i&&s&&i.name.toLowerCase()===s.name.toLowerCase()};return e.codecs.forEach(function(n){for(var i=0;i<t.codecs.length;i++){var s=t.codecs[i];if(n.name.toLowerCase()===s.name.toLowerCase()&&n.clockRate===s.clockRate){if("rtx"===n.name.toLowerCase()&&n.parameters&&s.parameters.apt&&!a(n,s,e.codecs,t.codecs))continue;(s=JSON.parse(JSON.stringify(s))).numChannels=Math.min(n.numChannels,s.numChannels),r.codecs.push(s),s.rtcpFeedback=s.rtcpFeedback.filter(function(e){for(var t=0;t<n.rtcpFeedback.length;t++)if(n.rtcpFeedback[t].type===e.type&&n.rtcpFeedback[t].parameter===e.parameter)return!0;return!1});break}}}),e.headerExtensions.forEach(function(e){for(var n=0;n<t.headerExtensions.length;n++){var a=t.headerExtensions[n];if(e.uri===a.uri){r.headerExtensions.push(a);break}}}),r}function i(e,t,r){return-1!=={offer:{setLocalDescription:["stable","have-local-offer"],setRemoteDescription:["stable","have-remote-offer"]},answer:{setLocalDescription:["have-remote-offer","have-local-pranswer"],setRemoteDescription:["have-local-offer","have-remote-pranswer"]}}[t][e].indexOf(r)}function s(e,t){var r=e.getRemoteCandidates().find(function(e){return t.foundation===e.foundation&&t.ip===e.ip&&t.port===e.port&&t.priority===e.priority&&t.protocol===e.protocol&&t.type===e.type});return r||e.addRemoteCandidate(t),!r}function o(e,t){var r=new Error(t);return r.name=e,r.code={NotSupportedError:9,InvalidStateError:11,InvalidAccessError:15,TypeError:void 0,OperationError:void 0}[e],r}module.exports=function(c,d){function p(e,t){t.addTrack(e),t.dispatchEvent(new c.MediaStreamTrackEvent("addtrack",{track:e}))}function l(e,t,r,n){var a=new Event("track");a.track=t,a.receiver=r,a.transceiver={receiver:r},a.streams=n,c.setTimeout(function(){e._dispatchEvent("track",a)})}var f=function(t){var r=this,a=document.createDocumentFragment();if(["addEventListener","removeEventListener","dispatchEvent"].forEach(function(e){r[e]=a[e].bind(a)}),this.canTrickleIceCandidates=null,this.needNegotiation=!1,this.localStreams=[],this.remoteStreams=[],this._localDescription=null,this._remoteDescription=null,this.signalingState="stable",this.iceConnectionState="new",this.connectionState="new",this.iceGatheringState="new",t=JSON.parse(JSON.stringify(t||{})),this.usingBundle="max-bundle"===t.bundlePolicy,"negotiate"===t.rtcpMuxPolicy)throw o("NotSupportedError","rtcpMuxPolicy 'negotiate' is not supported");switch(t.rtcpMuxPolicy||(t.rtcpMuxPolicy="require"),t.iceTransportPolicy){case"all":case"relay":break;default:t.iceTransportPolicy="all"}switch(t.bundlePolicy){case"balanced":case"max-compat":case"max-bundle":break;default:t.bundlePolicy="balanced"}if(t.iceServers=n(t.iceServers||[],d),this._iceGatherers=[],t.iceCandidatePoolSize)for(var i=t.iceCandidatePoolSize;i>0;i--)this._iceGatherers.push(new c.RTCIceGatherer({iceServers:t.iceServers,gatherPolicy:t.iceTransportPolicy}));else t.iceCandidatePoolSize=0;this._config=t,this.transceivers=[],this._sdpSessionId=e.generateSessionId(),this._sdpSessionVersion=0,this._dtlsRole=void 0,this._isClosed=!1};Object.defineProperty(f.prototype,"localDescription",{configurable:!0,get:function(){return this._localDescription}}),Object.defineProperty(f.prototype,"remoteDescription",{configurable:!0,get:function(){return this._remoteDescription}}),f.prototype.onicecandidate=null,f.prototype.onaddstream=null,f.prototype.ontrack=null,f.prototype.onremovestream=null,f.prototype.onsignalingstatechange=null,f.prototype.oniceconnectionstatechange=null,f.prototype.onconnectionstatechange=null,f.prototype.onicegatheringstatechange=null,f.prototype.onnegotiationneeded=null,f.prototype.ondatachannel=null,f.prototype._dispatchEvent=function(e,t){this._isClosed||(this.dispatchEvent(t),"function"==typeof this["on"+e]&&this["on"+e](t))},f.prototype._emitGatheringStateChange=function(){var e=new Event("icegatheringstatechange");this._dispatchEvent("icegatheringstatechange",e)},f.prototype.getConfiguration=function(){return this._config},f.prototype.getLocalStreams=function(){return this.localStreams},f.prototype.getRemoteStreams=function(){return this.remoteStreams},f.prototype._createTransceiver=function(e,t){var r=this.transceivers.length>0,n={track:null,iceGatherer:null,iceTransport:null,dtlsTransport:null,localCapabilities:null,remoteCapabilities:null,rtpSender:null,rtpReceiver:null,kind:e,mid:null,sendEncodingParameters:null,recvEncodingParameters:null,stream:null,associatedRemoteMediaStreams:[],wantReceive:!0};if(this.usingBundle&&r)n.iceTransport=this.transceivers[0].iceTransport,n.dtlsTransport=this.transceivers[0].dtlsTransport;else{var a=this._createIceAndDtlsTransports();n.iceTransport=a.iceTransport,n.dtlsTransport=a.dtlsTransport}return t||this.transceivers.push(n),n},f.prototype.addTrack=function(e,t){if(this._isClosed)throw o("InvalidStateError","Attempted to call addTrack on a closed peerconnection.");var r;if(this.transceivers.find(function(t){return t.track===e}))throw o("InvalidAccessError","Track already exists.");for(var n=0;n<this.transceivers.length;n++)this.transceivers[n].track||this.transceivers[n].kind!==e.kind||(r=this.transceivers[n]);return r||(r=this._createTransceiver(e.kind)),this._maybeFireNegotiationNeeded(),-1===this.localStreams.indexOf(t)&&this.localStreams.push(t),r.track=e,r.stream=t,r.rtpSender=new c.RTCRtpSender(e,r.dtlsTransport),r.rtpSender},f.prototype.addStream=function(e){var t=this;if(d>=15025)e.getTracks().forEach(function(r){t.addTrack(r,e)});else{var r=e.clone();e.getTracks().forEach(function(e,t){var n=r.getTracks()[t];e.addEventListener("enabled",function(e){n.enabled=e.enabled})}),r.getTracks().forEach(function(e){t.addTrack(e,r)})}},f.prototype.removeTrack=function(e){if(this._isClosed)throw o("InvalidStateError","Attempted to call removeTrack on a closed peerconnection.");if(!(e instanceof c.RTCRtpSender))throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");var t=this.transceivers.find(function(t){return t.rtpSender===e});if(!t)throw o("InvalidAccessError","Sender was not created by this connection.");var r=t.stream;t.rtpSender.stop(),t.rtpSender=null,t.track=null,t.stream=null,-1===this.transceivers.map(function(e){return e.stream}).indexOf(r)&&this.localStreams.indexOf(r)>-1&&this.localStreams.splice(this.localStreams.indexOf(r),1),this._maybeFireNegotiationNeeded()},f.prototype.removeStream=function(e){var t=this;e.getTracks().forEach(function(e){var r=t.getSenders().find(function(t){return t.track===e});r&&t.removeTrack(r)})},f.prototype.getSenders=function(){return this.transceivers.filter(function(e){return!!e.rtpSender}).map(function(e){return e.rtpSender})},f.prototype.getReceivers=function(){return this.transceivers.filter(function(e){return!!e.rtpReceiver}).map(function(e){return e.rtpReceiver})},f.prototype._createIceGatherer=function(e,t){var r=this;if(t&&e>0)return this.transceivers[0].iceGatherer;if(this._iceGatherers.length)return this._iceGatherers.shift();var n=new c.RTCIceGatherer({iceServers:this._config.iceServers,gatherPolicy:this._config.iceTransportPolicy});return Object.defineProperty(n,"state",{value:"new",writable:!0}),this.transceivers[e].bufferedCandidateEvents=[],this.transceivers[e].bufferCandidates=function(t){var a=!t.candidate||0===Object.keys(t.candidate).length;n.state=a?"completed":"gathering",null!==r.transceivers[e].bufferedCandidateEvents&&r.transceivers[e].bufferedCandidateEvents.push(t)},n.addEventListener("localcandidate",this.transceivers[e].bufferCandidates),n},f.prototype._gather=function(t,r){var n=this,a=this.transceivers[r].iceGatherer;if(!a.onlocalcandidate){var i=this.transceivers[r].bufferedCandidateEvents;this.transceivers[r].bufferedCandidateEvents=null,a.removeEventListener("localcandidate",this.transceivers[r].bufferCandidates),a.onlocalcandidate=function(i){if(!(n.usingBundle&&r>0)){var s=new Event("icecandidate");s.candidate={sdpMid:t,sdpMLineIndex:r};var o=i.candidate,c=!o||0===Object.keys(o).length;if(c)"new"!==a.state&&"gathering"!==a.state||(a.state="completed");else{"new"===a.state&&(a.state="gathering"),o.component=1,o.ufrag=a.getLocalParameters().usernameFragment;var d=e.writeCandidate(o);s.candidate=Object.assign(s.candidate,e.parseCandidate(d)),s.candidate.candidate=d,s.candidate.toJSON=function(){return{candidate:s.candidate.candidate,sdpMid:s.candidate.sdpMid,sdpMLineIndex:s.candidate.sdpMLineIndex,usernameFragment:s.candidate.usernameFragment}}}var p=e.getMediaSections(n._localDescription.sdp);p[s.candidate.sdpMLineIndex]+=c?"a=end-of-candidates\r\n":"a="+s.candidate.candidate+"\r\n",n._localDescription.sdp=e.getDescription(n._localDescription.sdp)+p.join("");var l=n.transceivers.every(function(e){return e.iceGatherer&&"completed"===e.iceGatherer.state});"gathering"!==n.iceGatheringState&&(n.iceGatheringState="gathering",n._emitGatheringStateChange()),c||n._dispatchEvent("icecandidate",s),l&&(n._dispatchEvent("icecandidate",new Event("icecandidate")),n.iceGatheringState="complete",n._emitGatheringStateChange())}},c.setTimeout(function(){i.forEach(function(e){a.onlocalcandidate(e)})},0)}},f.prototype._createIceAndDtlsTransports=function(){var e=this,t=new c.RTCIceTransport(null);t.onicestatechange=function(){e._updateIceConnectionState(),e._updateConnectionState()};var r=new c.RTCDtlsTransport(t);return r.ondtlsstatechange=function(){e._updateConnectionState()},r.onerror=function(){Object.defineProperty(r,"state",{value:"failed",writable:!0}),e._updateConnectionState()},{iceTransport:t,dtlsTransport:r}},f.prototype._disposeIceAndDtlsTransports=function(e){var t=this.transceivers[e].iceGatherer;t&&(delete t.onlocalcandidate,delete this.transceivers[e].iceGatherer);var r=this.transceivers[e].iceTransport;r&&(delete r.onicestatechange,delete this.transceivers[e].iceTransport);var n=this.transceivers[e].dtlsTransport;n&&(delete n.ondtlsstatechange,delete n.onerror,delete this.transceivers[e].dtlsTransport)},f.prototype._transceive=function(t,r,n){var i=a(t.localCapabilities,t.remoteCapabilities);r&&t.rtpSender&&(i.encodings=t.sendEncodingParameters,i.rtcp={cname:e.localCName,compound:t.rtcpParameters.compound},t.recvEncodingParameters.length&&(i.rtcp.ssrc=t.recvEncodingParameters[0].ssrc),t.rtpSender.send(i)),n&&t.rtpReceiver&&i.codecs.length>0&&("video"===t.kind&&t.recvEncodingParameters&&d<15019&&t.recvEncodingParameters.forEach(function(e){delete e.rtx}),t.recvEncodingParameters.length?i.encodings=t.recvEncodingParameters:i.encodings=[{}],i.rtcp={compound:t.rtcpParameters.compound},t.rtcpParameters.cname&&(i.rtcp.cname=t.rtcpParameters.cname),t.sendEncodingParameters.length&&(i.rtcp.ssrc=t.sendEncodingParameters[0].ssrc),t.rtpReceiver.receive(i))},f.prototype.setLocalDescription=function(t){var r,n,s=this;if(-1===["offer","answer"].indexOf(t.type))return Promise.reject(o("TypeError",'Unsupported type "'+t.type+'"'));if(!i("setLocalDescription",t.type,s.signalingState)||s._isClosed)return Promise.reject(o("InvalidStateError","Can not set local "+t.type+" in state "+s.signalingState));if("offer"===t.type)r=e.splitSections(t.sdp),n=r.shift(),r.forEach(function(t,r){var n=e.parseRtpParameters(t);s.transceivers[r].localCapabilities=n}),s.transceivers.forEach(function(e,t){s._gather(e.mid,t)});else if("answer"===t.type){r=e.splitSections(s._remoteDescription.sdp),n=r.shift();var c=e.matchPrefix(n,"a=ice-lite").length>0;r.forEach(function(t,r){var i=s.transceivers[r],o=i.iceGatherer,d=i.iceTransport,p=i.dtlsTransport,l=i.localCapabilities,f=i.remoteCapabilities;if(!(e.isRejected(t)&&0===e.matchPrefix(t,"a=bundle-only").length)&&!i.rejected){var u=e.getIceParameters(t,n),v=e.getDtlsParameters(t,n);c&&(v.role="server"),s.usingBundle&&0!==r||(s._gather(i.mid,r),"new"===d.state&&d.start(o,u,c?"controlling":"controlled"),"new"===p.state&&p.start(v));var h=a(l,f);s._transceive(i,h.codecs.length>0,!1)}})}return s._localDescription={type:t.type,sdp:t.sdp},"offer"===t.type?s._updateSignalingState("have-local-offer"):s._updateSignalingState("stable"),Promise.resolve()},f.prototype.setRemoteDescription=function(t){var r=this;if(-1===["offer","answer"].indexOf(t.type))return Promise.reject(o("TypeError",'Unsupported type "'+t.type+'"'));if(!i("setRemoteDescription",t.type,r.signalingState)||r._isClosed)return Promise.reject(o("InvalidStateError","Can not set remote "+t.type+" in state "+r.signalingState));var n={};r.remoteStreams.forEach(function(e){n[e.id]=e});var f=[],u=e.splitSections(t.sdp),v=u.shift(),h=e.matchPrefix(v,"a=ice-lite").length>0,m=e.matchPrefix(v,"a=group:BUNDLE ").length>0;r.usingBundle=m;var g=e.matchPrefix(v,"a=ice-options:")[0];return r.canTrickleIceCandidates=!!g&&g.substr(14).split(" ").indexOf("trickle")>=0,u.forEach(function(i,o){var l=e.splitLines(i),u=e.getKind(i),g=e.isRejected(i)&&0===e.matchPrefix(i,"a=bundle-only").length,y=l[0].substr(2).split(" ")[2],S=e.getDirection(i,v),T=e.parseMsid(i),E=e.getMid(i)||e.generateIdentifier();if(g||"application"===u&&("DTLS/SCTP"===y||"UDP/DTLS/SCTP"===y))r.transceivers[o]={mid:E,kind:u,protocol:y,rejected:!0};else{var C,P,w,R,_,k,b,x,D;!g&&r.transceivers[o]&&r.transceivers[o].rejected&&(r.transceivers[o]=r._createTransceiver(u,!0));var I,L,M=e.parseRtpParameters(i);g||(I=e.getIceParameters(i,v),(L=e.getDtlsParameters(i,v)).role="client"),b=e.parseRtpEncodingParameters(i);var O=e.parseRtcpParameters(i),G=e.matchPrefix(i,"a=end-of-candidates",v).length>0,j=e.matchPrefix(i,"a=candidate:").map(function(t){return e.parseCandidate(t)}).filter(function(e){return 1===e.component});if(("offer"===t.type||"answer"===t.type)&&!g&&m&&o>0&&r.transceivers[o]&&(r._disposeIceAndDtlsTransports(o),r.transceivers[o].iceGatherer=r.transceivers[0].iceGatherer,r.transceivers[o].iceTransport=r.transceivers[0].iceTransport,r.transceivers[o].dtlsTransport=r.transceivers[0].dtlsTransport,r.transceivers[o].rtpSender&&r.transceivers[o].rtpSender.setTransport(r.transceivers[0].dtlsTransport),r.transceivers[o].rtpReceiver&&r.transceivers[o].rtpReceiver.setTransport(r.transceivers[0].dtlsTransport)),"offer"!==t.type||g){if("answer"===t.type&&!g){P=(C=r.transceivers[o]).iceGatherer,w=C.iceTransport,R=C.dtlsTransport,_=C.rtpReceiver,k=C.sendEncodingParameters,x=C.localCapabilities,r.transceivers[o].recvEncodingParameters=b,r.transceivers[o].remoteCapabilities=M,r.transceivers[o].rtcpParameters=O,j.length&&"new"===w.state&&(!h&&!G||m&&0!==o?j.forEach(function(e){s(C.iceTransport,e)}):w.setRemoteCandidates(j)),m&&0!==o||("new"===w.state&&w.start(P,I,"controlling"),"new"===R.state&&R.start(L)),!a(C.localCapabilities,C.remoteCapabilities).codecs.filter(function(e){return"rtx"===e.name.toLowerCase()}).length&&C.sendEncodingParameters[0].rtx&&delete C.sendEncodingParameters[0].rtx,r._transceive(C,"sendrecv"===S||"recvonly"===S,"sendrecv"===S||"sendonly"===S),!_||"sendrecv"!==S&&"sendonly"!==S?delete C.rtpReceiver:(D=_.track,T?(n[T.stream]||(n[T.stream]=new c.MediaStream),p(D,n[T.stream]),f.push([D,_,n[T.stream]])):(n.default||(n.default=new c.MediaStream),p(D,n.default),f.push([D,_,n.default])))}}else{(C=r.transceivers[o]||r._createTransceiver(u)).mid=E,C.iceGatherer||(C.iceGatherer=r._createIceGatherer(o,m)),j.length&&"new"===C.iceTransport.state&&(!G||m&&0!==o?j.forEach(function(e){s(C.iceTransport,e)}):C.iceTransport.setRemoteCandidates(j)),x=c.RTCRtpReceiver.getCapabilities(u),d<15019&&(x.codecs=x.codecs.filter(function(e){return"rtx"!==e.name})),k=C.sendEncodingParameters||[{ssrc:1001*(2*o+2)}];var N,A=!1;if("sendrecv"===S||"sendonly"===S){if(A=!C.rtpReceiver,_=C.rtpReceiver||new c.RTCRtpReceiver(C.dtlsTransport,u),A)D=_.track,T&&"-"===T.stream||(T?(n[T.stream]||(n[T.stream]=new c.MediaStream,Object.defineProperty(n[T.stream],"id",{get:function(){return T.stream}})),Object.defineProperty(D,"id",{get:function(){return T.track}}),N=n[T.stream]):(n.default||(n.default=new c.MediaStream),N=n.default)),N&&(p(D,N),C.associatedRemoteMediaStreams.push(N)),f.push([D,_,N])}else C.rtpReceiver&&C.rtpReceiver.track&&(C.associatedRemoteMediaStreams.forEach(function(e){var t,r,n=e.getTracks().find(function(e){return e.id===C.rtpReceiver.track.id});n&&(t=n,(r=e).removeTrack(t),r.dispatchEvent(new c.MediaStreamTrackEvent("removetrack",{track:t})))}),C.associatedRemoteMediaStreams=[]);C.localCapabilities=x,C.remoteCapabilities=M,C.rtpReceiver=_,C.rtcpParameters=O,C.sendEncodingParameters=k,C.recvEncodingParameters=b,r._transceive(r.transceivers[o],!1,A)}}}),void 0===r._dtlsRole&&(r._dtlsRole="offer"===t.type?"active":"passive"),r._remoteDescription={type:t.type,sdp:t.sdp},"offer"===t.type?r._updateSignalingState("have-remote-offer"):r._updateSignalingState("stable"),Object.keys(n).forEach(function(e){var t=n[e];if(t.getTracks().length){if(-1===r.remoteStreams.indexOf(t)){r.remoteStreams.push(t);var a=new Event("addstream");a.stream=t,c.setTimeout(function(){r._dispatchEvent("addstream",a)})}f.forEach(function(e){var n=e[0],a=e[1];t.id===e[2].id&&l(r,n,a,[t])})}}),f.forEach(function(e){e[2]||l(r,e[0],e[1],[])}),c.setTimeout(function(){r&&r.transceivers&&r.transceivers.forEach(function(e){e.iceTransport&&"new"===e.iceTransport.state&&e.iceTransport.getRemoteCandidates().length>0&&(console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"),e.iceTransport.addRemoteCandidate({}))})},4e3),Promise.resolve()},f.prototype.close=function(){this.transceivers.forEach(function(e){e.iceTransport&&e.iceTransport.stop(),e.dtlsTransport&&e.dtlsTransport.stop(),e.rtpSender&&e.rtpSender.stop(),e.rtpReceiver&&e.rtpReceiver.stop()}),this._isClosed=!0,this._updateSignalingState("closed")},f.prototype._updateSignalingState=function(e){this.signalingState=e;var t=new Event("signalingstatechange");this._dispatchEvent("signalingstatechange",t)},f.prototype._maybeFireNegotiationNeeded=function(){var e=this;"stable"===this.signalingState&&!0!==this.needNegotiation&&(this.needNegotiation=!0,c.setTimeout(function(){if(e.needNegotiation){e.needNegotiation=!1;var t=new Event("negotiationneeded");e._dispatchEvent("negotiationneeded",t)}},0))},f.prototype._updateIceConnectionState=function(){var e,t={new:0,closed:0,checking:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach(function(e){e.iceTransport&&!e.rejected&&t[e.iceTransport.state]++}),e="new",t.failed>0?e="failed":t.checking>0?e="checking":t.disconnected>0?e="disconnected":t.new>0?e="new":t.connected>0?e="connected":t.completed>0&&(e="completed"),e!==this.iceConnectionState){this.iceConnectionState=e;var r=new Event("iceconnectionstatechange");this._dispatchEvent("iceconnectionstatechange",r)}},f.prototype._updateConnectionState=function(){var e,t={new:0,closed:0,connecting:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach(function(e){e.iceTransport&&e.dtlsTransport&&!e.rejected&&(t[e.iceTransport.state]++,t[e.dtlsTransport.state]++)}),t.connected+=t.completed,e="new",t.failed>0?e="failed":t.connecting>0?e="connecting":t.disconnected>0?e="disconnected":t.new>0?e="new":t.connected>0&&(e="connected"),e!==this.connectionState){this.connectionState=e;var r=new Event("connectionstatechange");this._dispatchEvent("connectionstatechange",r)}},f.prototype.createOffer=function(){var t=this;if(t._isClosed)return Promise.reject(o("InvalidStateError","Can not call createOffer after close"));var n=t.transceivers.filter(function(e){return"audio"===e.kind}).length,a=t.transceivers.filter(function(e){return"video"===e.kind}).length,i=arguments[0];if(i){if(i.mandatory||i.optional)throw new TypeError("Legacy mandatory/optional constraints not supported.");void 0!==i.offerToReceiveAudio&&(n=!0===i.offerToReceiveAudio?1:!1===i.offerToReceiveAudio?0:i.offerToReceiveAudio),void 0!==i.offerToReceiveVideo&&(a=!0===i.offerToReceiveVideo?1:!1===i.offerToReceiveVideo?0:i.offerToReceiveVideo)}for(t.transceivers.forEach(function(e){"audio"===e.kind?--n<0&&(e.wantReceive=!1):"video"===e.kind&&--a<0&&(e.wantReceive=!1)});n>0||a>0;)n>0&&(t._createTransceiver("audio"),n--),a>0&&(t._createTransceiver("video"),a--);var s=e.writeSessionBoilerplate(t._sdpSessionId,t._sdpSessionVersion++);t.transceivers.forEach(function(r,n){var a=r.track,i=r.kind,s=r.mid||e.generateIdentifier();r.mid=s,r.iceGatherer||(r.iceGatherer=t._createIceGatherer(n,t.usingBundle));var o=c.RTCRtpSender.getCapabilities(i);d<15019&&(o.codecs=o.codecs.filter(function(e){return"rtx"!==e.name})),o.codecs.forEach(function(e){"H264"===e.name&&void 0===e.parameters["level-asymmetry-allowed"]&&(e.parameters["level-asymmetry-allowed"]="1"),r.remoteCapabilities&&r.remoteCapabilities.codecs&&r.remoteCapabilities.codecs.forEach(function(t){e.name.toLowerCase()===t.name.toLowerCase()&&e.clockRate===t.clockRate&&(e.preferredPayloadType=t.payloadType)})}),o.headerExtensions.forEach(function(e){(r.remoteCapabilities&&r.remoteCapabilities.headerExtensions||[]).forEach(function(t){e.uri===t.uri&&(e.id=t.id)})});var p=r.sendEncodingParameters||[{ssrc:1001*(2*n+1)}];a&&d>=15019&&"video"===i&&!p[0].rtx&&(p[0].rtx={ssrc:p[0].ssrc+1}),r.wantReceive&&(r.rtpReceiver=new c.RTCRtpReceiver(r.dtlsTransport,i)),r.localCapabilities=o,r.sendEncodingParameters=p}),"max-compat"!==t._config.bundlePolicy&&(s+="a=group:BUNDLE "+t.transceivers.map(function(e){return e.mid}).join(" ")+"\r\n"),s+="a=ice-options:trickle\r\n",t.transceivers.forEach(function(n,a){s+=r(n,n.localCapabilities,"offer",n.stream,t._dtlsRole),s+="a=rtcp-rsize\r\n",!n.iceGatherer||"new"===t.iceGatheringState||0!==a&&t.usingBundle||(n.iceGatherer.getLocalCandidates().forEach(function(t){t.component=1,s+="a="+e.writeCandidate(t)+"\r\n"}),"completed"===n.iceGatherer.state&&(s+="a=end-of-candidates\r\n"))});var p=new c.RTCSessionDescription({type:"offer",sdp:s});return Promise.resolve(p)},f.prototype.createAnswer=function(){var t=this;if(t._isClosed)return Promise.reject(o("InvalidStateError","Can not call createAnswer after close"));if("have-remote-offer"!==t.signalingState&&"have-local-pranswer"!==t.signalingState)return Promise.reject(o("InvalidStateError","Can not call createAnswer in signalingState "+t.signalingState));var n=e.writeSessionBoilerplate(t._sdpSessionId,t._sdpSessionVersion++);t.usingBundle&&(n+="a=group:BUNDLE "+t.transceivers.map(function(e){return e.mid}).join(" ")+"\r\n"),n+="a=ice-options:trickle\r\n";var i=e.getMediaSections(t._remoteDescription.sdp).length;t.transceivers.forEach(function(e,s){if(!(s+1>i)){if(e.rejected)return"application"===e.kind?"DTLS/SCTP"===e.protocol?n+="m=application 0 DTLS/SCTP 5000\r\n":n+="m=application 0 "+e.protocol+" webrtc-datachannel\r\n":"audio"===e.kind?n+="m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n":"video"===e.kind&&(n+="m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"),void(n+="c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:"+e.mid+"\r\n");var o;if(e.stream)"audio"===e.kind?o=e.stream.getAudioTracks()[0]:"video"===e.kind&&(o=e.stream.getVideoTracks()[0]),o&&d>=15019&&"video"===e.kind&&!e.sendEncodingParameters[0].rtx&&(e.sendEncodingParameters[0].rtx={ssrc:e.sendEncodingParameters[0].ssrc+1});var c=a(e.localCapabilities,e.remoteCapabilities);!c.codecs.filter(function(e){return"rtx"===e.name.toLowerCase()}).length&&e.sendEncodingParameters[0].rtx&&delete e.sendEncodingParameters[0].rtx,n+=r(e,c,"answer",e.stream,t._dtlsRole),e.rtcpParameters&&e.rtcpParameters.reducedSize&&(n+="a=rtcp-rsize\r\n")}});var s=new c.RTCSessionDescription({type:"answer",sdp:n});return Promise.resolve(s)},f.prototype.addIceCandidate=function(t){var r,n=this;return t&&void 0===t.sdpMLineIndex&&!t.sdpMid?Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")):new Promise(function(a,i){if(!n._remoteDescription)return i(o("InvalidStateError","Can not add ICE candidate without a remote description"));if(t&&""!==t.candidate){var c=t.sdpMLineIndex;if(t.sdpMid)for(var d=0;d<n.transceivers.length;d++)if(n.transceivers[d].mid===t.sdpMid){c=d;break}var p=n.transceivers[c];if(!p)return i(o("OperationError","Can not add ICE candidate"));if(p.rejected)return a();var l=Object.keys(t.candidate).length>0?e.parseCandidate(t.candidate):{};if("tcp"===l.protocol&&(0===l.port||9===l.port))return a();if(l.component&&1!==l.component)return a();if((0===c||c>0&&p.iceTransport!==n.transceivers[0].iceTransport)&&!s(p.iceTransport,l))return i(o("OperationError","Can not add ICE candidate"));var f=t.candidate.trim();0===f.indexOf("a=")&&(f=f.substr(2)),(r=e.getMediaSections(n._remoteDescription.sdp))[c]+="a="+(l.type?f:"end-of-candidates")+"\r\n",n._remoteDescription.sdp=e.getDescription(n._remoteDescription.sdp)+r.join("")}else for(var u=0;u<n.transceivers.length&&(n.transceivers[u].rejected||(n.transceivers[u].iceTransport.addRemoteCandidate({}),(r=e.getMediaSections(n._remoteDescription.sdp))[u]+="a=end-of-candidates\r\n",n._remoteDescription.sdp=e.getDescription(n._remoteDescription.sdp)+r.join(""),!n.usingBundle));u++);a()})},f.prototype.getStats=function(e){if(e&&e instanceof c.MediaStreamTrack){var t=null;if(this.transceivers.forEach(function(r){r.rtpSender&&r.rtpSender.track===e?t=r.rtpSender:r.rtpReceiver&&r.rtpReceiver.track===e&&(t=r.rtpReceiver)}),!t)throw o("InvalidAccessError","Invalid selector.");return t.getStats()}var r=[];return this.transceivers.forEach(function(e){["rtpSender","rtpReceiver","iceGatherer","iceTransport","dtlsTransport"].forEach(function(t){e[t]&&r.push(e[t].getStats())})}),Promise.all(r).then(function(e){var t=new Map;return e.forEach(function(e){e.forEach(function(e){t.set(e.id,e)})}),t})};["RTCRtpSender","RTCRtpReceiver","RTCIceGatherer","RTCIceTransport","RTCDtlsTransport"].forEach(function(e){var r=c[e];if(r&&r.prototype&&r.prototype.getStats){var n=r.prototype.getStats;r.prototype.getStats=function(){return n.apply(this).then(function(e){var r=new Map;return Object.keys(e).forEach(function(n){e[n].type=t(e[n]),r.set(n,e[n])}),r})}}});var u=["createOffer","createAnswer"];return u.forEach(function(e){var t=f.prototype[e];f.prototype[e]=function(){var e=arguments;return"function"==typeof e[0]||"function"==typeof e[1]?t.apply(this,[arguments[2]]).then(function(t){"function"==typeof e[0]&&e[0].apply(null,[t])},function(t){"function"==typeof e[1]&&e[1].apply(null,[t])}):t.apply(this,arguments)}}),(u=["setLocalDescription","setRemoteDescription","addIceCandidate"]).forEach(function(e){var t=f.prototype[e];f.prototype[e]=function(){var e=arguments;return"function"==typeof e[1]||"function"==typeof e[2]?t.apply(this,arguments).then(function(){"function"==typeof e[1]&&e[1].apply(null)},function(t){"function"==typeof e[2]&&e[2].apply(null,[t])}):t.apply(this,arguments)}}),["getStats"].forEach(function(e){var t=f.prototype[e];f.prototype[e]=function(){var e=arguments;return"function"==typeof e[1]?t.apply(this,arguments).then(function(){"function"==typeof e[1]&&e[1].apply(null)}):t.apply(this,arguments)}}),f};
},{"sdp":"YHvh"}],"YdKx":[function(require,module,exports) {
"use strict";function e(e){var r=e&&e.navigator,t=r.mediaDevices.getUserMedia.bind(r.mediaDevices);r.mediaDevices.getUserMedia=function(e){return t(e).catch(function(e){return Promise.reject(function(e){return{name:{PermissionDeniedError:"NotAllowedError"}[e.name]||e.name,message:e.message,constraint:e.constraint,toString:function(){return this.name}}}(e))})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetUserMedia=e;
},{}],"P3bV":[function(require,module,exports) {
"use strict";function e(e){"getDisplayMedia"in e.navigator&&e.navigator.mediaDevices&&(e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||(e.navigator.mediaDevices.getDisplayMedia=e.navigator.getDisplayMedia.bind(e.navigator)))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetDisplayMedia=e;
},{}],"XRic":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimPeerConnection=p,exports.shimReplaceTrack=a,Object.defineProperty(exports,"shimGetUserMedia",{enumerable:!0,get:function(){return n.shimGetUserMedia}}),Object.defineProperty(exports,"shimGetDisplayMedia",{enumerable:!0,get:function(){return i.shimGetDisplayMedia}});var e=s(require("../utils")),t=require("./filtericeservers"),r=o(require("rtcpeerconnection-shim")),n=require("./getusermedia"),i=require("./getdisplaymedia");function o(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function p(n,i){if(n.RTCIceGatherer&&(n.RTCIceCandidate||(n.RTCIceCandidate=function(e){return e}),n.RTCSessionDescription||(n.RTCSessionDescription=function(e){return e}),i.version<15025)){var o=Object.getOwnPropertyDescriptor(n.MediaStreamTrack.prototype,"enabled");Object.defineProperty(n.MediaStreamTrack.prototype,"enabled",{set:function(e){o.set.call(this,e);var t=new Event("enabled");t.enabled=e,this.dispatchEvent(t)}})}!n.RTCRtpSender||"dtmf"in n.RTCRtpSender.prototype||Object.defineProperty(n.RTCRtpSender.prototype,"dtmf",{get:function(){return void 0===this._dtmf&&("audio"===this.track.kind?this._dtmf=new n.RTCDtmfSender(this):"video"===this.track.kind&&(this._dtmf=null)),this._dtmf}}),n.RTCDtmfSender&&!n.RTCDTMFSender&&(n.RTCDTMFSender=n.RTCDtmfSender);var c=(0,r.default)(n,i.version);n.RTCPeerConnection=function(r){return r&&r.iceServers&&(r.iceServers=(0,t.filterIceServers)(r.iceServers,i.version),e.log("ICE servers after filtering:",r.iceServers)),new c(r)},n.RTCPeerConnection.prototype=c.prototype}function a(e){!e.RTCRtpSender||"replaceTrack"in e.RTCRtpSender.prototype||(e.RTCRtpSender.prototype.replaceTrack=e.RTCRtpSender.prototype.setTrack)}
},{"../utils":"iSxC","./filtericeservers":"NZ1C","rtcpeerconnection-shim":"NJ2u","./getusermedia":"YdKx","./getdisplaymedia":"P3bV"}],"GzSv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetUserMedia=n;var e=o(require("../utils"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=t();if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,o&&o.set(e,r),r}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t,o){var n=t&&t.navigator,i=t&&t.MediaStreamTrack;if(n.getUserMedia=function(t,o,r){e.deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),n.mediaDevices.getUserMedia(t).then(o,r)},!(o.version>55&&"autoGainControl"in n.mediaDevices.getSupportedConstraints())){var a=function(e,t,o){t in e&&!(o in e)&&(e[o]=e[t],delete e[t])},s=n.mediaDevices.getUserMedia.bind(n.mediaDevices);if(n.mediaDevices.getUserMedia=function(e){return"object"===r(e)&&"object"===r(e.audio)&&(e=JSON.parse(JSON.stringify(e)),a(e.audio,"autoGainControl","mozAutoGainControl"),a(e.audio,"noiseSuppression","mozNoiseSuppression")),s(e)},i&&i.prototype.getSettings){var p=i.prototype.getSettings;i.prototype.getSettings=function(){var e=p.apply(this,arguments);return a(e,"mozAutoGainControl","autoGainControl"),a(e,"mozNoiseSuppression","noiseSuppression"),e}}if(i&&i.prototype.applyConstraints){var u=i.prototype.applyConstraints;i.prototype.applyConstraints=function(e){return"audio"===this.kind&&"object"===r(e)&&(e=JSON.parse(JSON.stringify(e)),a(e,"autoGainControl","mozAutoGainControl"),a(e,"noiseSuppression","mozNoiseSuppression")),u.apply(this,[e])}}}}
},{"../utils":"iSxC"}],"UuGU":[function(require,module,exports) {
"use strict";function e(e,i){e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||e.navigator.mediaDevices&&(e.navigator.mediaDevices.getDisplayMedia=function(a){if(!a||!a.video){var t=new DOMException("getDisplayMedia without video constraints is undefined");return t.name="NotFoundError",t.code=8,Promise.reject(t)}return!0===a.video?a.video={mediaSource:i}:a.video.mediaSource=i,e.navigator.mediaDevices.getUserMedia(a)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetDisplayMedia=e;
},{}],"Fzdr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimOnTrack=s,exports.shimPeerConnection=c,exports.shimSenderGetStats=p,exports.shimReceiverGetStats=u,exports.shimRemoveStream=f,exports.shimRTCDataChannel=d,exports.shimAddTransceiver=C,exports.shimGetParameters=y,exports.shimCreateOffer=l,exports.shimCreateAnswer=m,Object.defineProperty(exports,"shimGetUserMedia",{enumerable:!0,get:function(){return t.shimGetUserMedia}}),Object.defineProperty(exports,"shimGetDisplayMedia",{enumerable:!0,get:function(){return n.shimGetDisplayMedia}});var e=o(require("../utils")),t=require("./getusermedia"),n=require("./getdisplaymedia");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){"object"===a(e)&&e.RTCTrackEvent&&"receiver"in e.RTCTrackEvent.prototype&&!("transceiver"in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function c(e,t){if("object"===a(e)&&(e.RTCPeerConnection||e.mozRTCPeerConnection)){!e.RTCPeerConnection&&e.mozRTCPeerConnection&&(e.RTCPeerConnection=e.mozRTCPeerConnection),t.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){var n=e.RTCPeerConnection.prototype[t],r=i({},t,function(){return arguments[0]=new("addIceCandidate"===t?e.RTCIceCandidate:e.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)});e.RTCPeerConnection.prototype[t]=r[t]});var n={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},r=e.RTCPeerConnection.prototype.getStats;e.RTCPeerConnection.prototype.getStats=function(){var[e,o,i]=arguments;return r.apply(this,[e||null]).then(function(e){if(t.version<53&&!o)try{e.forEach(function(e){e.type=n[e.type]||e.type})}catch(r){if("TypeError"!==r.name)throw r;e.forEach(function(t,r){e.set(r,Object.assign({},t,{type:n[t.type]||t.type}))})}return e}).then(o,i)}}}function p(e){if("object"===a(e)&&e.RTCPeerConnection&&e.RTCRtpSender&&!(e.RTCRtpSender&&"getStats"in e.RTCRtpSender.prototype)){var t=e.RTCPeerConnection.prototype.getSenders;t&&(e.RTCPeerConnection.prototype.getSenders=function(){var e=this,n=t.apply(this,[]);return n.forEach(function(t){return t._pc=e}),n});var n=e.RTCPeerConnection.prototype.addTrack;n&&(e.RTCPeerConnection.prototype.addTrack=function(){var e=n.apply(this,arguments);return e._pc=this,e}),e.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}}function u(t){if("object"===a(t)&&t.RTCPeerConnection&&t.RTCRtpSender&&!(t.RTCRtpSender&&"getStats"in t.RTCRtpReceiver.prototype)){var n=t.RTCPeerConnection.prototype.getReceivers;n&&(t.RTCPeerConnection.prototype.getReceivers=function(){var e=this,t=n.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t}),e.wrapPeerConnectionEvent(t,"track",function(e){return e.receiver._pc=e.srcElement,e}),t.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}}function f(t){!t.RTCPeerConnection||"removeStream"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.removeStream=function(t){var n=this;e.deprecated("removeStream","removeTrack"),this.getSenders().forEach(function(e){e.track&&t.getTracks().includes(e.track)&&n.removeTrack(e)})})}function d(e){e.DataChannel&&!e.RTCDataChannel&&(e.RTCDataChannel=e.DataChannel)}function C(e){if("object"===a(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.addTransceiver;t&&(e.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];var e=arguments[1],n=e&&"sendEncodings"in e;n&&e.sendEncodings.forEach(function(e){if("rid"in e){if(!/^[a-z0-9]{0,16}$/i.test(e.rid))throw new TypeError("Invalid RID value provided.")}if("scaleResolutionDownBy"in e&&!(parseFloat(e.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in e&&!(parseFloat(e.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});var r=t.apply(this,arguments);if(n){var{sender:o}=r,i=o.getParameters();"encodings"in i&&(1!==i.encodings.length||0!==Object.keys(i.encodings[0]).length)||(i.encodings=e.sendEncodings,o.sendEncodings=e.sendEncodings,this.setParametersPromises.push(o.setParameters(i).then(function(){delete o.sendEncodings}).catch(function(){delete o.sendEncodings})))}return r})}}function y(e){if("object"===a(e)&&e.RTCRtpSender){var t=e.RTCRtpSender.prototype.getParameters;t&&(e.RTCRtpSender.prototype.getParameters=function(){var e=t.apply(this,arguments);return"encodings"in e||(e.encodings=[].concat(this.sendEncodings||[{}])),e})}}function l(e){if("object"===a(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.createOffer;e.RTCPeerConnection.prototype.createOffer=function(){var e=arguments,n=this;return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(function(){return t.apply(n,e)}).finally(function(){n.setParametersPromises=[]}):t.apply(this,arguments)}}}function m(e){if("object"===a(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.createAnswer;e.RTCPeerConnection.prototype.createAnswer=function(){var e=arguments,n=this;return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(function(){return t.apply(n,e)}).finally(function(){n.setParametersPromises=[]}):t.apply(this,arguments)}}}
},{"../utils":"iSxC","./getusermedia":"GzSv","./getdisplaymedia":"UuGU"}],"t1lL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimLocalStreamsAPI=n,exports.shimRemoteStreamsAPI=i,exports.shimCallbacksAPI=a,exports.shimGetUserMedia=c,exports.shimConstraints=s,exports.shimRTCIceServerUrls=d,exports.shimTrackEventTransceiver=f,exports.shimCreateOfferLegacy=p,exports.shimAudioContext=u;var e=r(require("../utils"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e){if("object"===o(e)&&e.RTCPeerConnection){if("getLocalStreams"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in e.RTCPeerConnection.prototype)){var t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addStream=function(e){var r=this;this._localStreams||(this._localStreams=[]),this._localStreams.includes(e)||this._localStreams.push(e),e.getAudioTracks().forEach(function(o){return t.call(r,o,e)}),e.getVideoTracks().forEach(function(o){return t.call(r,o,e)})},e.RTCPeerConnection.prototype.addTrack=function(e){for(var r=this,o=arguments.length,n=new Array(o>1?o-1:0),i=1;i<o;i++)n[i-1]=arguments[i];return n&&n.forEach(function(e){r._localStreams?r._localStreams.includes(e)||r._localStreams.push(e):r._localStreams=[e]}),t.apply(this,arguments)}}"removeStream"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.removeStream=function(e){var t=this;this._localStreams||(this._localStreams=[]);var r=this._localStreams.indexOf(e);if(-1!==r){this._localStreams.splice(r,1);var o=e.getTracks();this.getSenders().forEach(function(e){o.includes(e.track)&&t.removeTrack(e)})}})}}function i(e){if("object"===o(e)&&e.RTCPeerConnection&&("getRemoteStreams"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in e.RTCPeerConnection.prototype))){Object.defineProperty(e.RTCPeerConnection.prototype,"onaddstream",{get:function(){return this._onaddstream},set:function(e){var t=this;this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=e),this.addEventListener("track",this._onaddstreampoly=function(e){e.streams.forEach(function(e){if(t._remoteStreams||(t._remoteStreams=[]),!t._remoteStreams.includes(e)){t._remoteStreams.push(e);var r=new Event("addstream");r.stream=e,t.dispatchEvent(r)}})})}});var t=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(){var e=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(t){t.streams.forEach(function(t){if(e._remoteStreams||(e._remoteStreams=[]),!(e._remoteStreams.indexOf(t)>=0)){e._remoteStreams.push(t);var r=new Event("addstream");r.stream=t,e.dispatchEvent(r)}})}),t.apply(e,arguments)}}}function a(e){if("object"===o(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype,r=t.createOffer,n=t.createAnswer,i=t.setLocalDescription,a=t.setRemoteDescription,c=t.addIceCandidate;t.createOffer=function(e,t){var o=arguments.length>=2?arguments[2]:arguments[0],n=r.apply(this,[o]);return t?(n.then(e,t),Promise.resolve()):n},t.createAnswer=function(e,t){var r=arguments.length>=2?arguments[2]:arguments[0],o=n.apply(this,[r]);return t?(o.then(e,t),Promise.resolve()):o};var s=function(e,t,r){var o=i.apply(this,[e]);return r?(o.then(t,r),Promise.resolve()):o};t.setLocalDescription=s,s=function(e,t,r){var o=a.apply(this,[e]);return r?(o.then(t,r),Promise.resolve()):o},t.setRemoteDescription=s,s=function(e,t,r){var o=c.apply(this,[e]);return r?(o.then(t,r),Promise.resolve()):o},t.addIceCandidate=s}}function c(e){var t=e&&e.navigator;if(t.mediaDevices&&t.mediaDevices.getUserMedia){var r=t.mediaDevices,o=r.getUserMedia.bind(r);t.mediaDevices.getUserMedia=function(e){return o(s(e))}}!t.getUserMedia&&t.mediaDevices&&t.mediaDevices.getUserMedia&&(t.getUserMedia=function(e,r,o){t.mediaDevices.getUserMedia(e).then(r,o)}.bind(t))}function s(t){return t&&void 0!==t.video?Object.assign({},t,{video:e.compactObject(t.video)}):t}function d(t){if(t.RTCPeerConnection){var r=t.RTCPeerConnection;t.RTCPeerConnection=function(t,o){if(t&&t.iceServers){for(var n=[],i=0;i<t.iceServers.length;i++){var a=t.iceServers[i];!a.hasOwnProperty("urls")&&a.hasOwnProperty("url")?(e.deprecated("RTCIceServer.url","RTCIceServer.urls"),(a=JSON.parse(JSON.stringify(a))).urls=a.url,delete a.url,n.push(a)):n.push(t.iceServers[i])}t.iceServers=n}return new r(t,o)},t.RTCPeerConnection.prototype=r.prototype,"generateCertificate"in r&&Object.defineProperty(t.RTCPeerConnection,"generateCertificate",{get:function(){return r.generateCertificate}})}}function f(e){"object"===o(e)&&e.RTCTrackEvent&&"receiver"in e.RTCTrackEvent.prototype&&!("transceiver"in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function p(e){var t=e.RTCPeerConnection.prototype.createOffer;e.RTCPeerConnection.prototype.createOffer=function(e){if(e){void 0!==e.offerToReceiveAudio&&(e.offerToReceiveAudio=!!e.offerToReceiveAudio);var r=this.getTransceivers().find(function(e){return"audio"===e.receiver.track.kind});!1===e.offerToReceiveAudio&&r?"sendrecv"===r.direction?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":"recvonly"===r.direction&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):!0!==e.offerToReceiveAudio||r||this.addTransceiver("audio"),void 0!==e.offerToReceiveVideo&&(e.offerToReceiveVideo=!!e.offerToReceiveVideo);var o=this.getTransceivers().find(function(e){return"video"===e.receiver.track.kind});!1===e.offerToReceiveVideo&&o?"sendrecv"===o.direction?o.setDirection?o.setDirection("sendonly"):o.direction="sendonly":"recvonly"===o.direction&&(o.setDirection?o.setDirection("inactive"):o.direction="inactive"):!0!==e.offerToReceiveVideo||o||this.addTransceiver("video")}return t.apply(this,arguments)}}function u(e){"object"!==o(e)||e.AudioContext||(e.AudioContext=e.webkitAudioContext)}
},{"../utils":"iSxC"}],"GOQK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimRTCIceCandidate=a,exports.shimMaxMessageSize=c,exports.shimSendThrowTypeError=s,exports.shimConnectionState=p,exports.removeExtmapAllowMixed=d,exports.shimAddIceCandidateNullOrEmpty=u;var e=r(require("sdp")),t=o(require("./utils"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=r?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}return o.default=e,t&&t.set(e,o),o}function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(n){if(n.RTCIceCandidate&&!(n.RTCIceCandidate&&"foundation"in n.RTCIceCandidate.prototype)){var o=n.RTCIceCandidate;n.RTCIceCandidate=function(t){if("object"===i(t)&&t.candidate&&0===t.candidate.indexOf("a=")&&((t=JSON.parse(JSON.stringify(t))).candidate=t.candidate.substr(2)),t.candidate&&t.candidate.length){var n=new o(t),r=e.default.parseCandidate(t.candidate),a=Object.assign(n,r);return a.toJSON=function(){return{candidate:a.candidate,sdpMid:a.sdpMid,sdpMLineIndex:a.sdpMLineIndex,usernameFragment:a.usernameFragment}},a}return new o(t)},n.RTCIceCandidate.prototype=o.prototype,t.wrapPeerConnectionEvent(n,"icecandidate",function(e){return e.candidate&&Object.defineProperty(e,"candidate",{value:new n.RTCIceCandidate(e.candidate),writable:"false"}),e})}}function c(t,n){if(t.RTCPeerConnection){"sctp"in t.RTCPeerConnection.prototype||Object.defineProperty(t.RTCPeerConnection.prototype,"sctp",{get:function(){return void 0===this._sctp?null:this._sctp}});var o=t.RTCPeerConnection.prototype.setRemoteDescription;t.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,"chrome"===n.browser&&n.version>=76){var{sdpSemantics:t}=this.getConfiguration();"plan-b"===t&&Object.defineProperty(this,"sctp",{get:function(){return void 0===this._sctp?null:this._sctp},enumerable:!0,configurable:!0})}if(function(t){if(!t||!t.sdp)return!1;var n=e.default.splitSections(t.sdp);return n.shift(),n.some(function(t){var n=e.default.parseMLine(t);return n&&"application"===n.kind&&-1!==n.protocol.indexOf("SCTP")})}(arguments[0])){var r,i=function(e){var t=e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(null===t||t.length<2)return-1;var n=parseInt(t[1],10);return n!=n?-1:n}(arguments[0]),a=(p=i,d=65536,"firefox"===n.browser&&(d=n.version<57?-1===p?16384:2147483637:n.version<60?57===n.version?65535:65536:2147483637),d),c=function(t,o){var r=65536;"firefox"===n.browser&&57===n.version&&(r=65535);var i=e.default.matchPrefix(t.sdp,"a=max-message-size:");return i.length>0?r=parseInt(i[0].substr(19),10):"firefox"===n.browser&&-1!==o&&(r=2147483637),r}(arguments[0],i);r=0===a&&0===c?Number.POSITIVE_INFINITY:0===a||0===c?Math.max(a,c):Math.min(a,c);var s={};Object.defineProperty(s,"maxMessageSize",{get:function(){return r}}),this._sctp=s}var p,d;return o.apply(this,arguments)}}}function s(e){if(e.RTCPeerConnection&&"createDataChannel"in e.RTCPeerConnection.prototype){var n=e.RTCPeerConnection.prototype.createDataChannel;e.RTCPeerConnection.prototype.createDataChannel=function(){var e=n.apply(this,arguments);return o(e,this),e},t.wrapPeerConnectionEvent(e,"datachannel",function(e){return o(e.channel,e.target),e})}function o(e,t){var n=e.send;e.send=function(){var o=arguments[0],r=o.length||o.size||o.byteLength;if("open"===e.readyState&&t.sctp&&r>t.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+t.sctp.maxMessageSize+" bytes)");return n.apply(e,arguments)}}}function p(e){if(e.RTCPeerConnection&&!("connectionState"in e.RTCPeerConnection.prototype)){var t=e.RTCPeerConnection.prototype;Object.defineProperty(t,"connectionState",{get:function(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(t,"onconnectionstatechange",{get:function(){return this._onconnectionstatechange||null},set:function(e){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),e&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=e)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(function(e){var n=t[e];t[e]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=function(e){var t=e.target;if(t._lastConnectionState!==t.connectionState){t._lastConnectionState=t.connectionState;var n=new Event("connectionstatechange",e);t.dispatchEvent(n)}return e},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}}function d(e,t){if(e.RTCPeerConnection&&!("chrome"===t.browser&&t.version>=71||"safari"===t.browser&&t.version>=605)){var n=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(t){if(t&&t.sdp&&-1!==t.sdp.indexOf("\na=extmap-allow-mixed")){var o=t.sdp.split("\n").filter(function(e){return"a=extmap-allow-mixed"!==e.trim()}).join("\n");e.RTCSessionDescription&&t instanceof e.RTCSessionDescription?arguments[0]=new e.RTCSessionDescription({type:t.type,sdp:o}):t.sdp=o}return n.apply(this,arguments)}}}function u(e,t){if(e.RTCPeerConnection&&e.RTCPeerConnection.prototype){var n=e.RTCPeerConnection.prototype.addIceCandidate;n&&0!==n.length&&(e.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?("chrome"===t.browser&&t.version<78||"firefox"===t.browser&&t.version<68||"safari"===t.browser)&&arguments[0]&&""===arguments[0].candidate?Promise.resolve():n.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}}
},{"sdp":"YHvh","./utils":"iSxC"}],"KtlG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.adapterFactory=o;var e=m(require("./utils")),i=m(require("./chrome/chrome_shim")),r=m(require("./edge/edge_shim")),s=m(require("./firefox/firefox_shim")),t=m(require("./safari/safari_shim")),a=m(require("./common_shim"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function m(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var i=n();if(i&&i.has(e))return i.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=s?Object.getOwnPropertyDescriptor(e,t):null;a&&(a.get||a.set)?Object.defineProperty(r,t,a):r[t]=e[t]}return r.default=e,i&&i.set(e,r),r}function o(){var{window:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},m=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shimChrome:!0,shimFirefox:!0,shimEdge:!0,shimSafari:!0},o=e.log,h=e.detectBrowser(n),d={browserDetails:h,commonShim:a,extractVersion:e.extractVersion,disableLog:e.disableLog,disableWarnings:e.disableWarnings};switch(h.browser){case"chrome":if(!i||!i.shimPeerConnection||!m.shimChrome)return o("Chrome shim is not included in this adapter release."),d;if(null===h.version)return o("Chrome shim can not determine version, not shimming."),d;o("adapter.js shimming chrome."),d.browserShim=i,a.shimAddIceCandidateNullOrEmpty(n,h),i.shimGetUserMedia(n,h),i.shimMediaStream(n,h),i.shimPeerConnection(n,h),i.shimOnTrack(n,h),i.shimAddTrackRemoveTrack(n,h),i.shimGetSendersWithDtmf(n,h),i.shimGetStats(n,h),i.shimSenderReceiverGetStats(n,h),i.fixNegotiationNeeded(n,h),a.shimRTCIceCandidate(n,h),a.shimConnectionState(n,h),a.shimMaxMessageSize(n,h),a.shimSendThrowTypeError(n,h),a.removeExtmapAllowMixed(n,h);break;case"firefox":if(!s||!s.shimPeerConnection||!m.shimFirefox)return o("Firefox shim is not included in this adapter release."),d;o("adapter.js shimming firefox."),d.browserShim=s,a.shimAddIceCandidateNullOrEmpty(n,h),s.shimGetUserMedia(n,h),s.shimPeerConnection(n,h),s.shimOnTrack(n,h),s.shimRemoveStream(n,h),s.shimSenderGetStats(n,h),s.shimReceiverGetStats(n,h),s.shimRTCDataChannel(n,h),s.shimAddTransceiver(n,h),s.shimGetParameters(n,h),s.shimCreateOffer(n,h),s.shimCreateAnswer(n,h),a.shimRTCIceCandidate(n,h),a.shimConnectionState(n,h),a.shimMaxMessageSize(n,h),a.shimSendThrowTypeError(n,h);break;case"edge":if(!r||!r.shimPeerConnection||!m.shimEdge)return o("MS edge shim is not included in this adapter release."),d;o("adapter.js shimming edge."),d.browserShim=r,r.shimGetUserMedia(n,h),r.shimGetDisplayMedia(n,h),r.shimPeerConnection(n,h),r.shimReplaceTrack(n,h),a.shimMaxMessageSize(n,h),a.shimSendThrowTypeError(n,h);break;case"safari":if(!t||!m.shimSafari)return o("Safari shim is not included in this adapter release."),d;o("adapter.js shimming safari."),d.browserShim=t,a.shimAddIceCandidateNullOrEmpty(n,h),t.shimRTCIceServerUrls(n,h),t.shimCreateOfferLegacy(n,h),t.shimCallbacksAPI(n,h),t.shimLocalStreamsAPI(n,h),t.shimRemoteStreamsAPI(n,h),t.shimTrackEventTransceiver(n,h),t.shimGetUserMedia(n,h),t.shimAudioContext(n,h),a.shimRTCIceCandidate(n,h),a.shimMaxMessageSize(n,h),a.shimSendThrowTypeError(n,h),a.removeExtmapAllowMixed(n,h);break;default:o("Unsupported browser!")}return d}
},{"./utils":"iSxC","./chrome/chrome_shim":"uI5X","./edge/edge_shim":"XRic","./firefox/firefox_shim":"Fzdr","./safari/safari_shim":"t1lL","./common_shim":"GOQK"}],"tI1X":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./adapter_factory.js"),t=(0,e.adapterFactory)({window:"undefined"==typeof window?void 0:window}),d=t;exports.default=d;
},{"./adapter_factory.js":"KtlG"}],"sXtV":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.webRTCAdapter=void 0;var t=e(require("webrtc-adapter"));exports.webRTCAdapter=t.default;
},{"webrtc-adapter":"tI1X"}],"I31f":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Supports=void 0;var r=require("./adapter");exports.Supports=new(function(){function e(){this.isIOS=["iPad","iPhone","iPod"].includes(navigator.platform),this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}return e.prototype.isWebRTCSupported=function(){return"undefined"!=typeof RTCPeerConnection},e.prototype.isBrowserSupported=function(){var r=this.getBrowser(),e=this.getVersion();return!!this.supportedBrowsers.includes(r)&&("chrome"===r?e>=this.minChromeVersion:"firefox"===r?e>=this.minFirefoxVersion:"safari"===r&&(!this.isIOS&&e>=this.minSafariVersion))},e.prototype.getBrowser=function(){return r.webRTCAdapter.browserDetails.browser},e.prototype.getVersion=function(){return r.webRTCAdapter.browserDetails.version||0},e.prototype.isUnifiedPlanSupported=function(){var e,i=this.getBrowser(),t=r.webRTCAdapter.browserDetails.version||0;if("chrome"===i&&t<72)return!1;if("firefox"===i&&t>=59)return!0;if(!(window.RTCRtpTransceiver&&"currentDirection"in RTCRtpTransceiver.prototype))return!1;var o=!1;try{(e=new RTCPeerConnection).addTransceiver("audio"),o=!0}catch(s){}finally{e&&e.close()}return o},e.prototype.toString=function(){return"Supports: \n    browser:"+this.getBrowser()+" \n    version:"+this.getVersion()+" \n    isIOS:"+this.isIOS+" \n    isWebRTCSupported:"+this.isWebRTCSupported()+" \n    isBrowserSupported:"+this.isBrowserSupported()+" \n    isUnifiedPlanSupported:"+this.isUnifiedPlanSupported()},e}());
},{"./adapter":"sXtV"}],"BHXf":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var o={};if(null!=r)for(var n in r)"default"!==n&&Object.prototype.hasOwnProperty.call(r,n)&&e(o,r,n);return t(o,r),o};Object.defineProperty(exports,"__esModule",{value:!0}),exports.util=void 0;var o=r(require("peerjs-js-binarypack")),n=require("./supports"),i={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:0.peerjs.com:3478",username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};exports.util=new(function(){function e(){this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.chunkedMTU=16300,this.defaultConfig=i,this.browser=n.Supports.getBrowser(),this.browserVersion=n.Supports.getVersion(),this.supports=function(){var e,t={browser:n.Supports.isBrowserSupported(),webRTC:n.Supports.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;try{e=new RTCPeerConnection(i),t.audioVideo=!0;var r=void 0;try{r=e.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!r.ordered;try{r.binaryType="blob",t.binaryBlob=!n.Supports.isIOS}catch(o){}}catch(o){}finally{r&&r.close()}}catch(o){}finally{e&&e.close()}return t}(),this.pack=o.pack,this.unpack=o.unpack,this._dataCount=1}return e.prototype.noop=function(){},e.prototype.validateId=function(e){return!e||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e)},e.prototype.chunk=function(e){for(var t=[],r=e.size,o=Math.ceil(r/exports.util.chunkedMTU),n=0,i=0;i<r;){var a=Math.min(r,i+exports.util.chunkedMTU),u=e.slice(i,a),s={__peerData:this._dataCount,n:n,data:u,total:o};t.push(s),i=a,n++}return this._dataCount++,t},e.prototype.blobToArrayBuffer=function(e,t){var r=new FileReader;return r.onload=function(e){e.target&&t(e.target.result)},r.readAsArrayBuffer(e),r},e.prototype.binaryStringToArrayBuffer=function(e){for(var t=new Uint8Array(e.length),r=0;r<e.length;r++)t[r]=255&e.charCodeAt(r);return t.buffer},e.prototype.randomToken=function(){return Math.random().toString(36).substr(2)},e.prototype.isSecure=function(){return"https:"===location.protocol},e}());
},{"peerjs-js-binarypack":"kdPp","./supports":"I31f"}],"JJlS":[function(require,module,exports) {
"use strict";var e=Object.prototype.hasOwnProperty,t="~";function n(){}function r(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,n,o,s,i){if("function"!=typeof o)throw new TypeError("The listener must be a function");var c=new r(o,s||e,i),f=t?t+n:n;return e._events[f]?e._events[f].fn?e._events[f]=[e._events[f],c]:e._events[f].push(c):(e._events[f]=c,e._eventsCount++),e}function s(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function i(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(t=!1)),i.prototype.eventNames=function(){var n,r,o=[];if(0===this._eventsCount)return o;for(r in n=this._events)e.call(n,r)&&o.push(t?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(n)):o},i.prototype.listeners=function(e){var n=t?t+e:e,r=this._events[n];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,s=r.length,i=new Array(s);o<s;o++)i[o]=r[o].fn;return i},i.prototype.listenerCount=function(e){var n=t?t+e:e,r=this._events[n];return r?r.fn?1:r.length:0},i.prototype.emit=function(e,n,r,o,s,i){var c=t?t+e:e;if(!this._events[c])return!1;var f,u,a=this._events[c],l=arguments.length;if(a.fn){switch(a.once&&this.removeListener(e,a.fn,void 0,!0),l){case 1:return a.fn.call(a.context),!0;case 2:return a.fn.call(a.context,n),!0;case 3:return a.fn.call(a.context,n,r),!0;case 4:return a.fn.call(a.context,n,r,o),!0;case 5:return a.fn.call(a.context,n,r,o,s),!0;case 6:return a.fn.call(a.context,n,r,o,s,i),!0}for(u=1,f=new Array(l-1);u<l;u++)f[u-1]=arguments[u];a.fn.apply(a.context,f)}else{var v,h=a.length;for(u=0;u<h;u++)switch(a[u].once&&this.removeListener(e,a[u].fn,void 0,!0),l){case 1:a[u].fn.call(a[u].context);break;case 2:a[u].fn.call(a[u].context,n);break;case 3:a[u].fn.call(a[u].context,n,r);break;case 4:a[u].fn.call(a[u].context,n,r,o);break;default:if(!f)for(v=1,f=new Array(l-1);v<l;v++)f[v-1]=arguments[v];a[u].fn.apply(a[u].context,f)}}return!0},i.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},i.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},i.prototype.removeListener=function(e,n,r,o){var i=t?t+e:e;if(!this._events[i])return this;if(!n)return s(this,i),this;var c=this._events[i];if(c.fn)c.fn!==n||o&&!c.once||r&&c.context!==r||s(this,i);else{for(var f=0,u=[],a=c.length;f<a;f++)(c[f].fn!==n||o&&!c[f].once||r&&c[f].context!==r)&&u.push(c[f]);u.length?this._events[i]=1===u.length?u[0]:u:s(this,i)}return this},i.prototype.removeAllListeners=function(e){var r;return e?(r=t?t+e:e,this._events[r]&&s(this,r)):(this._events=new n,this._eventsCount=0),this},i.prototype.off=i.prototype.removeListener,i.prototype.addListener=i.prototype.on,i.prefixed=t,i.EventEmitter=i,"undefined"!=typeof module&&(module.exports=i);
},{}],"WOs9":[function(require,module,exports) {
"use strict";var r=this&&this.__read||function(r,e){var o="function"==typeof Symbol&&r[Symbol.iterator];if(!o)return r;var t,n,l=o.call(r),i=[];try{for(;(void 0===e||e-- >0)&&!(t=l.next()).done;)i.push(t.value)}catch(s){n={error:s}}finally{try{t&&!t.done&&(o=l.return)&&o.call(l)}finally{if(n)throw n.error}}return i},e=this&&this.__spreadArray||function(r,e){for(var o=0,t=e.length,n=r.length;o<t;o++,n++)r[n]=e[o];return r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.LogLevel=void 0;var o,t="PeerJS: ";!function(r){r[r.Disabled=0]="Disabled",r[r.Errors=1]="Errors",r[r.Warnings=2]="Warnings",r[r.All=3]="All"}(o=exports.LogLevel||(exports.LogLevel={}));var n=function(){function n(){this._logLevel=o.Disabled}return Object.defineProperty(n.prototype,"logLevel",{get:function(){return this._logLevel},set:function(r){this._logLevel=r},enumerable:!1,configurable:!0}),n.prototype.log=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._logLevel>=o.All&&this._print.apply(this,e([o.All],r(t)))},n.prototype.warn=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._logLevel>=o.Warnings&&this._print.apply(this,e([o.Warnings],r(t)))},n.prototype.error=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._logLevel>=o.Errors&&this._print.apply(this,e([o.Errors],r(t)))},n.prototype.setLogFunction=function(r){this._print=r},n.prototype._print=function(n){for(var l=[],i=1;i<arguments.length;i++)l[i-1]=arguments[i];var s=e([t],r(l));for(var a in s)s[a]instanceof Error&&(s[a]="("+s[a].name+") "+s[a].message);n>=o.All?console.log.apply(console,e([],r(s))):n>=o.Warnings?console.warn.apply(console,e(["WARNING"],r(s))):n>=o.Errors&&console.error.apply(console,e(["ERROR"],r(s)))},n}();exports.default=new n;
},{}],"ZRYf":[function(require,module,exports) {
"use strict";var e,r,o,n,t,a,i;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ServerMessageType=exports.SocketEventType=exports.SerializationType=exports.PeerErrorType=exports.PeerEventType=exports.ConnectionType=exports.ConnectionEventType=void 0,function(e){e.Open="open",e.Stream="stream",e.Data="data",e.Close="close",e.Error="error",e.IceStateChanged="iceStateChanged"}(e=exports.ConnectionEventType||(exports.ConnectionEventType={})),function(e){e.Data="data",e.Media="media"}(r=exports.ConnectionType||(exports.ConnectionType={})),function(e){e.Open="open",e.Close="close",e.Connection="connection",e.Call="call",e.Disconnected="disconnected",e.Error="error"}(o=exports.PeerEventType||(exports.PeerEventType={})),function(e){e.BrowserIncompatible="browser-incompatible",e.Disconnected="disconnected",e.InvalidID="invalid-id",e.InvalidKey="invalid-key",e.Network="network",e.PeerUnavailable="peer-unavailable",e.SslUnavailable="ssl-unavailable",e.ServerError="server-error",e.SocketError="socket-error",e.SocketClosed="socket-closed",e.UnavailableID="unavailable-id",e.WebRTC="webrtc"}(n=exports.PeerErrorType||(exports.PeerErrorType={})),function(e){e.Binary="binary",e.BinaryUTF8="binary-utf8",e.JSON="json"}(t=exports.SerializationType||(exports.SerializationType={})),function(e){e.Message="message",e.Disconnected="disconnected",e.Error="error",e.Close="close"}(a=exports.SocketEventType||(exports.SocketEventType={})),function(e){e.Heartbeat="HEARTBEAT",e.Candidate="CANDIDATE",e.Offer="OFFER",e.Answer="ANSWER",e.Open="OPEN",e.Error="ERROR",e.IdTaken="ID-TAKEN",e.InvalidKey="INVALID-KEY",e.Leave="LEAVE",e.Expire="EXPIRE"}(i=exports.ServerMessageType||(exports.ServerMessageType={}));
},{}],"wJlv":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),t=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,s,r=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(c){s={error:c}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return i},n=this&&this.__spreadArray||function(e,t){for(var n=0,o=t.length,s=e.length;n<o;n++,s++)e[s]=t[n];return e},o=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Socket=void 0;var r=require("eventemitter3"),i=s(require("./logger")),c=require("./enums"),a=function(s){function r(e,t,n,o,r,i){void 0===i&&(i=5e3);var c=s.call(this)||this;c.pingInterval=i,c._disconnected=!0,c._messagesQueue=[];var a=e?"wss://":"ws://";return c._baseUrl=a+t+":"+n+o+"peerjs?key="+r,c}return e(r,s),r.prototype.start=function(e,t){var n=this;this._id=e;var o=this._baseUrl+"&id="+e+"&token="+t;!this._socket&&this._disconnected&&(this._socket=new WebSocket(o),this._disconnected=!1,this._socket.onmessage=function(e){var t;try{t=JSON.parse(e.data),i.default.log("Server message received:",t)}catch(o){return void i.default.log("Invalid server message",e.data)}n.emit(c.SocketEventType.Message,t)},this._socket.onclose=function(e){n._disconnected||(i.default.log("Socket closed.",e),n._cleanup(),n._disconnected=!0,n.emit(c.SocketEventType.Disconnected))},this._socket.onopen=function(){n._disconnected||(n._sendQueuedMessages(),i.default.log("Socket open"),n._scheduleHeartbeat())})},r.prototype._scheduleHeartbeat=function(){var e=this;this._wsPingTimer=setTimeout(function(){e._sendHeartbeat()},this.pingInterval)},r.prototype._sendHeartbeat=function(){if(this._wsOpen()){var e=JSON.stringify({type:c.ServerMessageType.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}else i.default.log("Cannot send heartbeat, because socket closed")},r.prototype._wsOpen=function(){return!!this._socket&&1===this._socket.readyState},r.prototype._sendQueuedMessages=function(){var e,s,r=n([],t(this._messagesQueue));this._messagesQueue=[];try{for(var i=o(r),c=i.next();!c.done;c=i.next()){var a=c.value;this.send(a)}}catch(u){e={error:u}}finally{try{c&&!c.done&&(s=i.return)&&s.call(i)}finally{if(e)throw e.error}}},r.prototype.send=function(e){if(!this._disconnected)if(this._id)if(e.type){if(this._wsOpen()){var t=JSON.stringify(e);this._socket.send(t)}}else this.emit(c.SocketEventType.Error,"Invalid message");else this._messagesQueue.push(e)},r.prototype.close=function(){this._disconnected||(this._cleanup(),this._disconnected=!0)},r.prototype._cleanup=function(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)},r}(r.EventEmitter);exports.Socket=a;
},{"eventemitter3":"JJlS","./logger":"WOs9","./enums":"ZRYf"}],"HCdX":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},n=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))(function(i,r){function c(e){try{s(o.next(e))}catch(n){r(n)}}function a(e){try{s(o.throw(e))}catch(n){r(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(c,a)}s((o=o.apply(e,n||[])).next())})},t=this&&this.__generator||function(e,n){var t,o,i,r,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,o=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!(i=(i=c.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=n.call(e,c)}catch(a){r=[6,a],o=0}finally{t=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Negotiator=void 0;var i=require("./util"),r=o(require("./logger")),c=require("./enums"),a=function(){function o(e){this.connection=e}return o.prototype.startConnection=function(e){var n=this._startPeerConnection();if(this.connection.peerConnection=n,this.connection.type===c.ConnectionType.Media&&e._stream&&this._addTracksToConnection(e._stream,n),e.originator){if(this.connection.type===c.ConnectionType.Data){var t=this.connection,o={ordered:!!e.reliable},i=n.createDataChannel(t.label,o);t.initialize(i)}this._makeOffer()}else this.handleSDP("OFFER",e.sdp)},o.prototype._startPeerConnection=function(){r.default.log("Creating RTCPeerConnection.");var e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e},o.prototype._setupListeners=function(e){var n=this,t=this.connection.peer,o=this.connection.connectionId,a=this.connection.type,s=this.connection.provider;r.default.log("Listening for ICE candidates."),e.onicecandidate=function(e){e.candidate&&e.candidate.candidate&&(r.default.log("Received ICE candidates for "+t+":",e.candidate),s.socket.send({type:c.ServerMessageType.Candidate,payload:{candidate:e.candidate,type:a,connectionId:o},dst:t}))},e.oniceconnectionstatechange=function(){switch(e.iceConnectionState){case"failed":r.default.log("iceConnectionState is failed, closing connections to "+t),n.connection.emit(c.ConnectionEventType.Error,new Error("Negotiation of connection to "+t+" failed.")),n.connection.close();break;case"closed":r.default.log("iceConnectionState is closed, closing connections to "+t),n.connection.emit(c.ConnectionEventType.Error,new Error("Connection to "+t+" closed.")),n.connection.close();break;case"disconnected":r.default.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=i.util.noop}n.connection.emit(c.ConnectionEventType.IceStateChanged,e.iceConnectionState)},r.default.log("Listening for data channel"),e.ondatachannel=function(e){r.default.log("Received data channel");var n=e.channel;s.getConnection(t,o).initialize(n)},r.default.log("Listening for remote stream"),e.ontrack=function(e){r.default.log("Received remote stream");var i=e.streams[0],a=s.getConnection(t,o);if(a.type===c.ConnectionType.Media){var d=a;n._addStreamToMediaConnection(i,d)}}},o.prototype.cleanup=function(){r.default.log("Cleaning up PeerConnection to "+this.connection.peer);var e=this.connection.peerConnection;if(e){this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=function(){};var n="closed"!==e.signalingState,t=!1;if(this.connection.type===c.ConnectionType.Data){var o=this.connection.dataChannel;o&&(t=!!o.readyState&&"closed"!==o.readyState)}(n||t)&&e.close()}},o.prototype._makeOffer=function(){return n(this,void 0,Promise,function(){var n,o,a,s,d,l,u;return t(this,function(t){switch(t.label){case 0:n=this.connection.peerConnection,o=this.connection.provider,t.label=1;case 1:return t.trys.push([1,7,,8]),[4,n.createOffer(this.connection.options.constraints)];case 2:a=t.sent(),r.default.log("Created offer."),this.connection.options.sdpTransform&&"function"==typeof this.connection.options.sdpTransform&&(a.sdp=this.connection.options.sdpTransform(a.sdp)||a.sdp),t.label=3;case 3:return t.trys.push([3,5,,6]),[4,n.setLocalDescription(a)];case 4:return t.sent(),r.default.log("Set localDescription:",a,"for:"+this.connection.peer),s={sdp:a,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata,browser:i.util.browser},this.connection.type===c.ConnectionType.Data&&(d=this.connection,s=e(e({},s),{label:d.label,reliable:d.reliable,serialization:d.serialization})),o.socket.send({type:c.ServerMessageType.Offer,payload:s,dst:this.connection.peer}),[3,6];case 5:return"OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"!=(l=t.sent())&&(o.emitError(c.PeerErrorType.WebRTC,l),r.default.log("Failed to setLocalDescription, ",l)),[3,6];case 6:return[3,8];case 7:return u=t.sent(),o.emitError(c.PeerErrorType.WebRTC,u),r.default.log("Failed to createOffer, ",u),[3,8];case 8:return[2]}})})},o.prototype._makeAnswer=function(){return n(this,void 0,Promise,function(){var e,n,o,a,s;return t(this,function(t){switch(t.label){case 0:e=this.connection.peerConnection,n=this.connection.provider,t.label=1;case 1:return t.trys.push([1,7,,8]),[4,e.createAnswer()];case 2:o=t.sent(),r.default.log("Created answer."),this.connection.options.sdpTransform&&"function"==typeof this.connection.options.sdpTransform&&(o.sdp=this.connection.options.sdpTransform(o.sdp)||o.sdp),t.label=3;case 3:return t.trys.push([3,5,,6]),[4,e.setLocalDescription(o)];case 4:return t.sent(),r.default.log("Set localDescription:",o,"for:"+this.connection.peer),n.socket.send({type:c.ServerMessageType.Answer,payload:{sdp:o,type:this.connection.type,connectionId:this.connection.connectionId,browser:i.util.browser},dst:this.connection.peer}),[3,6];case 5:return a=t.sent(),n.emitError(c.PeerErrorType.WebRTC,a),r.default.log("Failed to setLocalDescription, ",a),[3,6];case 6:return[3,8];case 7:return s=t.sent(),n.emitError(c.PeerErrorType.WebRTC,s),r.default.log("Failed to create answer, ",s),[3,8];case 8:return[2]}})})},o.prototype.handleSDP=function(e,o){return n(this,void 0,Promise,function(){var n,i,a,s;return t(this,function(t){switch(t.label){case 0:o=new RTCSessionDescription(o),n=this.connection.peerConnection,i=this.connection.provider,r.default.log("Setting remote description",o),a=this,t.label=1;case 1:return t.trys.push([1,5,,6]),[4,n.setRemoteDescription(o)];case 2:return t.sent(),r.default.log("Set remoteDescription:"+e+" for:"+this.connection.peer),"OFFER"!==e?[3,4]:[4,a._makeAnswer()];case 3:t.sent(),t.label=4;case 4:return[3,6];case 5:return s=t.sent(),i.emitError(c.PeerErrorType.WebRTC,s),r.default.log("Failed to setRemoteDescription, ",s),[3,6];case 6:return[2]}})})},o.prototype.handleCandidate=function(e){return n(this,void 0,Promise,function(){var n,o,i,a,s,d;return t(this,function(t){switch(t.label){case 0:r.default.log("handleCandidate:",e),n=e.candidate,o=e.sdpMLineIndex,i=e.sdpMid,a=this.connection.peerConnection,s=this.connection.provider,t.label=1;case 1:return t.trys.push([1,3,,4]),[4,a.addIceCandidate(new RTCIceCandidate({sdpMid:i,sdpMLineIndex:o,candidate:n}))];case 2:return t.sent(),r.default.log("Added ICE candidate for:"+this.connection.peer),[3,4];case 3:return d=t.sent(),s.emitError(c.PeerErrorType.WebRTC,d),r.default.log("Failed to handleCandidate, ",d),[3,4];case 4:return[2]}})})},o.prototype._addTracksToConnection=function(e,n){if(r.default.log("add tracks from stream "+e.id+" to peer connection"),!n.addTrack)return r.default.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(function(t){n.addTrack(t,e)})},o.prototype._addStreamToMediaConnection=function(e,n){r.default.log("add stream "+e.id+" to media connection "+n.connectionId),n.addStream(e)},o}();exports.Negotiator=a;
},{"./util":"BHXf","./logger":"WOs9","./enums":"ZRYf"}],"tQFK":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.BaseConnection=void 0;var e=require("eventemitter3"),n=function(e){function n(t,n,o){var r=e.call(this)||this;return r.peer=t,r.provider=n,r.options=o,r._open=!1,r.metadata=o.metadata,r}return t(n,e),Object.defineProperty(n.prototype,"open",{get:function(){return this._open},enumerable:!1,configurable:!0}),n}(e.EventEmitter);exports.BaseConnection=n;
},{"eventemitter3":"JJlS"}],"dbHP":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,o=t&&e[t],r=0;if(o)return o.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MediaConnection=void 0;var n=require("./util"),i=r(require("./logger")),a=require("./negotiator"),s=require("./enums"),l=require("./baseconnection"),c=function(r){function l(e,t,o){var i=r.call(this,e,t,o)||this;return i._localStream=i.options._stream,i.connectionId=i.options.connectionId||l.ID_PREFIX+n.util.randomToken(),i._negotiator=new a.Negotiator(i),i._localStream&&i._negotiator.startConnection({_stream:i._localStream,originator:!0}),i}return e(l,r),Object.defineProperty(l.prototype,"type",{get:function(){return s.ConnectionType.Media},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"localStream",{get:function(){return this._localStream},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"remoteStream",{get:function(){return this._remoteStream},enumerable:!1,configurable:!0}),l.prototype.addStream=function(e){i.default.log("Receiving stream",e),this._remoteStream=e,r.prototype.emit.call(this,s.ConnectionEventType.Stream,e)},l.prototype.handleMessage=function(e){var t=e.type,o=e.payload;switch(e.type){case s.ServerMessageType.Answer:this._negotiator.handleSDP(t,o.sdp),this._open=!0;break;case s.ServerMessageType.Candidate:this._negotiator.handleCandidate(o.candidate);break;default:i.default.warn("Unrecognized message type:"+t+" from peer:"+this.peer)}},l.prototype.answer=function(e,r){var n,a;if(void 0===r&&(r={}),this._localStream)i.default.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");else{this._localStream=e,r&&r.sdpTransform&&(this.options.sdpTransform=r.sdpTransform),this._negotiator.startConnection(t(t({},this.options._payload),{_stream:e}));var s=this.provider._getMessages(this.connectionId);try{for(var l=o(s),c=l.next();!c.done;c=l.next()){var p=c.value;this.handleMessage(p)}}catch(u){n={error:u}}finally{try{c&&!c.done&&(a=l.return)&&a.call(l)}finally{if(n)throw n.error}}this._open=!0}},l.prototype.close=function(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,r.prototype.emit.call(this,s.ConnectionEventType.Close))},l.ID_PREFIX="mc_",l}(l.BaseConnection);exports.MediaConnection=c;
},{"./util":"BHXf","./logger":"WOs9","./negotiator":"HCdX","./enums":"ZRYf","./baseconnection":"tQFK"}],"GGp6":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.EncodingQueue=void 0;var r=require("eventemitter3"),o=t(require("./logger")),n=function(t){function r(){var e=t.call(this)||this;return e.fileReader=new FileReader,e._queue=[],e._processing=!1,e.fileReader.onload=function(t){e._processing=!1,t.target&&e.emit("done",t.target.result),e.doNextTask()},e.fileReader.onerror=function(t){o.default.error("EncodingQueue error:",t),e._processing=!1,e.destroy(),e.emit("error",t)},e}return e(r,t),Object.defineProperty(r.prototype,"queue",{get:function(){return this._queue},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"size",{get:function(){return this.queue.length},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"processing",{get:function(){return this._processing},enumerable:!1,configurable:!0}),r.prototype.enque=function(e){this.queue.push(e),this.processing||this.doNextTask()},r.prototype.destroy=function(){this.fileReader.abort(),this._queue=[]},r.prototype.doNextTask=function(){0!==this.size&&(this.processing||(this._processing=!0,this.fileReader.readAsArrayBuffer(this.queue.shift())))},r}(r.EventEmitter);exports.EncodingQueue=n;
},{"eventemitter3":"JJlS","./logger":"WOs9"}],"GBTQ":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),t=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.DataConnection=void 0;var i=require("./util"),o=n(require("./logger")),r=require("./negotiator"),a=require("./enums"),s=require("./baseconnection"),u=require("./encodingQueue"),l=function(n){function s(e,t,l){var f=n.call(this,e,t,l)||this;return f.stringify=JSON.stringify,f.parse=JSON.parse,f._buffer=[],f._bufferSize=0,f._buffering=!1,f._chunkedData={},f._encodingQueue=new u.EncodingQueue,f.connectionId=f.options.connectionId||s.ID_PREFIX+i.util.randomToken(),f.label=f.options.label||f.connectionId,f.serialization=f.options.serialization||a.SerializationType.Binary,f.reliable=!!f.options.reliable,f._encodingQueue.on("done",function(e){f._bufferedSend(e)}),f._encodingQueue.on("error",function(){o.default.error("DC#"+f.connectionId+": Error occured in encoding from blob to arraybuffer, close DC"),f.close()}),f._negotiator=new r.Negotiator(f),f._negotiator.startConnection(f.options._payload||{originator:!0}),f}return e(s,n),Object.defineProperty(s.prototype,"type",{get:function(){return a.ConnectionType.Data},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"dataChannel",{get:function(){return this._dc},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"bufferSize",{get:function(){return this._bufferSize},enumerable:!1,configurable:!0}),s.prototype.initialize=function(e){this._dc=e,this._configureDataChannel()},s.prototype._configureDataChannel=function(){var e=this;i.util.supports.binaryBlob&&!i.util.supports.reliable||(this.dataChannel.binaryType="arraybuffer"),this.dataChannel.onopen=function(){o.default.log("DC#"+e.connectionId+" dc connection success"),e._open=!0,e.emit(a.ConnectionEventType.Open)},this.dataChannel.onmessage=function(t){o.default.log("DC#"+e.connectionId+" dc onmessage:",t.data),e._handleDataMessage(t)},this.dataChannel.onclose=function(){o.default.log("DC#"+e.connectionId+" dc closed for:",e.peer),e.close()}},s.prototype._handleDataMessage=function(e){var t=this,o=e.data,r=o.constructor,s=o;if(this.serialization===a.SerializationType.Binary||this.serialization===a.SerializationType.BinaryUTF8){if(r===Blob)return void i.util.blobToArrayBuffer(o,function(e){var n=i.util.unpack(e);t.emit(a.ConnectionEventType.Data,n)});if(r===ArrayBuffer)s=i.util.unpack(o);else if(r===String){var u=i.util.binaryStringToArrayBuffer(o);s=i.util.unpack(u)}}else this.serialization===a.SerializationType.JSON&&(s=this.parse(o));s.__peerData?this._handleChunk(s):n.prototype.emit.call(this,a.ConnectionEventType.Data,s)},s.prototype._handleChunk=function(e){var t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=e.data,n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];var i=new Blob(n.data);this._handleDataMessage({data:i})}},s.prototype.close=function(){this._buffer=[],this._bufferSize=0,this._chunkedData={},this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this._dc=null),this._encodingQueue&&(this._encodingQueue.destroy(),this._encodingQueue.removeAllListeners(),this._encodingQueue=null),this.open&&(this._open=!1,n.prototype.emit.call(this,a.ConnectionEventType.Close))},s.prototype.send=function(e,t){if(this.open)if(this.serialization===a.SerializationType.JSON)this._bufferedSend(this.stringify(e));else if(this.serialization===a.SerializationType.Binary||this.serialization===a.SerializationType.BinaryUTF8){var o=i.util.pack(e);if(!t&&o.size>i.util.chunkedMTU)return void this._sendChunks(o);i.util.supports.binaryBlob?this._bufferedSend(o):this._encodingQueue.enque(o)}else this._bufferedSend(e);else n.prototype.emit.call(this,a.ConnectionEventType.Error,new Error("Connection is not open. You should listen for the `open` event before sending messages."))},s.prototype._bufferedSend=function(e){!this._buffering&&this._trySend(e)||(this._buffer.push(e),this._bufferSize=this._buffer.length)},s.prototype._trySend=function(e){var t=this;if(!this.open)return!1;if(this.dataChannel.bufferedAmount>s.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(function(){t._buffering=!1,t._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(n){return o.default.error("DC#:"+this.connectionId+" Error when sending:",n),this._buffering=!0,this.close(),!1}return!0},s.prototype._tryBuffer=function(){if(this.open&&0!==this._buffer.length){var e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}},s.prototype._sendChunks=function(e){var n,r,a=i.util.chunk(e);o.default.log("DC#"+this.connectionId+" Try to send "+a.length+" chunks...");try{for(var s=t(a),u=s.next();!u.done;u=s.next()){var l=u.value;this.send(l,!0)}}catch(f){n={error:f}}finally{try{u&&!u.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},s.prototype.handleMessage=function(e){var t=e.payload;switch(e.type){case a.ServerMessageType.Answer:this._negotiator.handleSDP(e.type,t.sdp);break;case a.ServerMessageType.Candidate:this._negotiator.handleCandidate(t.candidate);break;default:o.default.warn("Unrecognized message type:",e.type,"from peer:",this.peer)}},s.ID_PREFIX="dc_",s.MAX_BUFFERED_AMOUNT=8388608,s}(s.BaseConnection);exports.DataConnection=l;
},{"./util":"BHXf","./logger":"WOs9","./negotiator":"HCdX","./enums":"ZRYf","./baseconnection":"tQFK","./encodingQueue":"GGp6"}],"in7L":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,r,o){return new(r||(r=Promise))(function(n,s){function i(t){try{a(o.next(t))}catch(e){s(e)}}function u(t){try{a(o.throw(t))}catch(e){s(e)}}function a(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r(function(t){t(e)})).then(i,u)}a((o=o.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var r,o,n,s,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(n=2&s[0]?o.return:s[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,s[1])).done)return n;switch(o=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,o=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(6===s[0]&&i.label<n[1]){i.label=n[1],n=s;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(s);break}n[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(u){s=[6,u],o=0}finally{r=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.API=void 0;var o=require("./util"),n=r(require("./logger")),s=function(){function r(t){this._options=t}return r.prototype._buildUrl=function(t){var e=(this._options.secure?"https://":"http://")+this._options.host+":"+this._options.port+this._options.path+this._options.key+"/"+t;return e+="?ts="+(new Date).getTime()+Math.random()},r.prototype.retrieveId=function(){return t(this,void 0,Promise,function(){var t,r,s,i;return e(this,function(e){switch(e.label){case 0:t=this._buildUrl("id"),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,fetch(t)];case 2:if(200!==(r=e.sent()).status)throw new Error("Error. Status:"+r.status);return[2,r.text()];case 3:throw s=e.sent(),n.default.error("Error retrieving ID",s),i="","/"===this._options.path&&this._options.host!==o.util.CLOUD_HOST&&(i=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+i);case 4:return[2]}})})},r.prototype.listAllPeers=function(){return t(this,void 0,Promise,function(){var t,r,s,i;return e(this,function(e){switch(e.label){case 0:t=this._buildUrl("peers"),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,fetch(t)];case 2:if(200!==(r=e.sent()).status){if(401===r.status)throw s="",s=this._options.host===o.util.CLOUD_HOST?"It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":"You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+s);throw new Error("Error. Status:"+r.status)}return[2,r.json()];case 3:throw i=e.sent(),n.default.error("Error retrieving list peers",i),new Error("Could not get list peers from the server."+i);case 4:return[2]}})})},r}();exports.API=s;
},{"./util":"BHXf","./logger":"WOs9"}],"Hxpd":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},n=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},r=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Peer=void 0;var i=require("eventemitter3"),s=require("./util"),a=o(require("./logger")),c=require("./socket"),l=require("./mediaconnection"),u=require("./dataconnection"),d=require("./enums"),p=require("./api"),h=function(){return function(){}}(),f=function(o){function i(e,n){var r,c=o.call(this)||this;return c._id=null,c._lastServerId=null,c._destroyed=!1,c._disconnected=!1,c._open=!1,c._connections=new Map,c._lostMessages=new Map,e&&e.constructor==Object?n=e:e&&(r=e.toString()),n=t({debug:0,host:s.util.CLOUD_HOST,port:s.util.CLOUD_PORT,path:"/",key:i.DEFAULT_KEY,token:s.util.randomToken(),config:s.util.defaultConfig},n),c._options=n,"/"===c._options.host&&(c._options.host=window.location.hostname),c._options.path&&("/"!==c._options.path[0]&&(c._options.path="/"+c._options.path),"/"!==c._options.path[c._options.path.length-1]&&(c._options.path+="/")),void 0===c._options.secure&&c._options.host!==s.util.CLOUD_HOST?c._options.secure=s.util.isSecure():c._options.host==s.util.CLOUD_HOST&&(c._options.secure=!0),c._options.logFunction&&a.default.setLogFunction(c._options.logFunction),a.default.logLevel=c._options.debug||0,c._api=new p.API(n),c._socket=c._createServerConnection(),s.util.supports.audioVideo||s.util.supports.data?r&&!s.util.validateId(r)?(c._delayedAbort(d.PeerErrorType.InvalidID,'ID "'+r+'" is invalid'),c):(r?c._initialize(r):c._api.retrieveId().then(function(e){return c._initialize(e)}).catch(function(e){return c._abort(d.PeerErrorType.ServerError,e)}),c):(c._delayedAbort(d.PeerErrorType.BrowserIncompatible,"The current browser does not support WebRTC"),c)}return e(i,o),Object.defineProperty(i.prototype,"id",{get:function(){return this._id},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"options",{get:function(){return this._options},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"open",{get:function(){return this._open},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"socket",{get:function(){return this._socket},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"connections",{get:function(){var e,t,o=Object.create(null);try{for(var i=n(this._connections),s=i.next();!s.done;s=i.next()){var a=r(s.value,2),c=a[0],l=a[1];o[c]=l}}catch(u){e={error:u}}finally{try{s&&!s.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return o},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"disconnected",{get:function(){return this._disconnected},enumerable:!1,configurable:!0}),i.prototype._createServerConnection=function(){var e=this,t=new c.Socket(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return t.on(d.SocketEventType.Message,function(t){e._handleMessage(t)}),t.on(d.SocketEventType.Error,function(t){e._abort(d.PeerErrorType.SocketError,t)}),t.on(d.SocketEventType.Disconnected,function(){e.disconnected||(e.emitError(d.PeerErrorType.Network,"Lost connection to server."),e.disconnect())}),t.on(d.SocketEventType.Close,function(){e.disconnected||e._abort(d.PeerErrorType.SocketClosed,"Underlying socket is already closed.")}),t},i.prototype._initialize=function(e){this._id=e,this.socket.start(e,this._options.token)},i.prototype._handleMessage=function(e){var t,r,o=e.type,i=e.payload,s=e.src;switch(o){case d.ServerMessageType.Open:this._lastServerId=this.id,this._open=!0,this.emit(d.PeerEventType.Open,this.id);break;case d.ServerMessageType.Error:this._abort(d.PeerErrorType.ServerError,i.msg);break;case d.ServerMessageType.IdTaken:this._abort(d.PeerErrorType.UnavailableID,'ID "'+this.id+'" is taken');break;case d.ServerMessageType.InvalidKey:this._abort(d.PeerErrorType.InvalidKey,'API KEY "'+this._options.key+'" is invalid');break;case d.ServerMessageType.Leave:a.default.log("Received leave message from "+s),this._cleanupPeer(s),this._connections.delete(s);break;case d.ServerMessageType.Expire:this.emitError(d.PeerErrorType.PeerUnavailable,"Could not connect to peer "+s);break;case d.ServerMessageType.Offer:var c=i.connectionId;if((_=this.getConnection(s,c))&&(_.close(),a.default.warn("Offer received for existing Connection ID:"+c)),i.type===d.ConnectionType.Media)_=new l.MediaConnection(s,this,{connectionId:c,_payload:i,metadata:i.metadata}),this._addConnection(s,_),this.emit(d.PeerEventType.Call,_);else{if(i.type!==d.ConnectionType.Data)return void a.default.warn("Received malformed connection type:"+i.type);_=new u.DataConnection(s,this,{connectionId:c,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable}),this._addConnection(s,_),this.emit(d.PeerEventType.Connection,_)}var p=this._getMessages(c);try{for(var h=n(p),f=h.next();!f.done;f=h.next()){var y=f.value;_.handleMessage(y)}}catch(v){t={error:v}}finally{try{f&&!f.done&&(r=h.return)&&r.call(h)}finally{if(t)throw t.error}}break;default:if(!i)return void a.default.warn("You received a malformed message from "+s+" of type "+o);var _;c=i.connectionId;(_=this.getConnection(s,c))&&_.peerConnection?_.handleMessage(e):c?this._storeMessage(c,e):a.default.warn("You received an unrecognized message:",e)}},i.prototype._storeMessage=function(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)},i.prototype._getMessages=function(e){var t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]},i.prototype.connect=function(e,t){if(void 0===t&&(t={}),this.disconnected)return a.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),void this.emitError(d.PeerErrorType.Disconnected,"Cannot connect to new Peer after disconnecting from server.");var n=new u.DataConnection(e,this,t);return this._addConnection(e,n),n},i.prototype.call=function(e,t,n){if(void 0===n&&(n={}),this.disconnected)return a.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),void this.emitError(d.PeerErrorType.Disconnected,"Cannot connect to new Peer after disconnecting from server.");if(t){n._stream=t;var r=new l.MediaConnection(e,this,n);return this._addConnection(e,r),r}a.default.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.")},i.prototype._addConnection=function(e,t){a.default.log("add connection "+t.type+":"+t.connectionId+" to peerId:"+e),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)},i.prototype._removeConnection=function(e){var t=this._connections.get(e.peer);if(t){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)},i.prototype.getConnection=function(e,t){var r,o,i=this._connections.get(e);if(!i)return null;try{for(var s=n(i),a=s.next();!a.done;a=s.next()){var c=a.value;if(c.connectionId===t)return c}}catch(l){r={error:l}}finally{try{a&&!a.done&&(o=s.return)&&o.call(s)}finally{if(r)throw r.error}}return null},i.prototype._delayedAbort=function(e,t){var n=this;setTimeout(function(){n._abort(e,t)},0)},i.prototype._abort=function(e,t){a.default.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()},i.prototype.emitError=function(e,t){var n;a.default.error("Error:",t),(n="string"==typeof t?new Error(t):t).type=e,this.emit(d.PeerEventType.Error,n)},i.prototype.destroy=function(){this.destroyed||(a.default.log("Destroy peer with ID:"+this.id),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit(d.PeerEventType.Close))},i.prototype._cleanup=function(){var e,t;try{for(var r=n(this._connections.keys()),o=r.next();!o.done;o=r.next()){var i=o.value;this._cleanupPeer(i),this._connections.delete(i)}}catch(s){e={error:s}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}this.socket.removeAllListeners()},i.prototype._cleanupPeer=function(e){var t,r,o=this._connections.get(e);if(o)try{for(var i=n(o),s=i.next();!s.done;s=i.next()){s.value.close()}}catch(a){t={error:a}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}},i.prototype.disconnect=function(){if(!this.disconnected){var e=this.id;a.default.log("Disconnect peer with ID:"+e),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit(d.PeerEventType.Disconnected,e)}},i.prototype.reconnect=function(){if(this.disconnected&&!this.destroyed)a.default.log("Attempting reconnection to server with ID "+this._lastServerId),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(this.disconnected||this.open)throw new Error("Peer "+this.id+" cannot reconnect because it is not disconnected from the server!");a.default.error("In a hurry? We're still trying to make the initial connection!")}},i.prototype.listAllPeers=function(e){var t=this;void 0===e&&(e=function(e){}),this._api.listAllPeers().then(function(t){return e(t)}).catch(function(e){return t._abort(d.PeerErrorType.ServerError,e)})},i.DEFAULT_KEY="peerjs",i}(i.EventEmitter);exports.Peer=f;
},{"eventemitter3":"JJlS","./util":"BHXf","./logger":"WOs9","./socket":"wJlv","./mediaconnection":"dbHP","./dataconnection":"GBTQ","./enums":"ZRYf","./api":"in7L"}],"iTK6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.peerjs=void 0;var e=require("./util"),r=require("./peer");exports.peerjs={Peer:r.Peer,util:e.util},exports.default=r.Peer,window.peerjs=exports.peerjs,window.Peer=r.Peer;
},{"./util":"BHXf","./peer":"Hxpd"}]},{},["iTK6"], null)

},{}],"node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
var define;
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

},{}],"node_modules/parseuri/index.js":[function(require,module,exports) {
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);

    return uri;
};

function pathNames(obj, path) {
    var regx = /\/{2,9}/g,
        names = path.replace(regx, "/").split("/");

    if (path.substr(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
    }
    if (path.substr(path.length - 1, 1) == '/') {
        names.splice(names.length - 1, 1);
    }

    return names;
}

function queryKey(uri, query) {
    var data = {};

    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
        if ($1) {
            data[$1] = $2;
        }
    });

    return data;
}

},{}],"node_modules/ms/index.js":[function(require,module,exports) {
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

},{}],"node_modules/debug/src/common.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = require('ms');
  createDebug.destroy = destroy;
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;
    var enableOverride = null;
    var namespacesCache;
    var enabledCache;

    function debug() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Disabled?
      if (!debug.enabled) {
        return;
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return '%';
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.useColors = createDebug.useColors();
    debug.color = createDebug.selectColor(namespace);
    debug.extend = extend;
    debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

    Object.defineProperty(debug, 'enabled', {
      enumerable: true,
      configurable: false,
      get: function () {
        if (enableOverride !== null) {
          return enableOverride;
        }

        if (namespacesCache !== createDebug.namespaces) {
          namespacesCache = createDebug.namespaces;
          enabledCache = createDebug.enabled(namespace);
        }

        return enabledCache;
      },
      set: function (v) {
        enableOverride = v;
      }
    }); // Env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    return debug;
  }

  function extend(namespace, delimiter) {
    var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.namespaces = namespaces;
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }
  /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */


  function disable() {
    var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
      return '-' + namespace;
    }))).join(',');
    createDebug.enable('');
    return namespaces;
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */


  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }
  /**
  * XXX DO NOT USE. This is a temporary stub function.
  * XXX It WILL be removed in the next major release.
  */


  function destroy() {
    console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;
},{"ms":"node_modules/ms/index.js"}],"../../../../.config/yarn/global/node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/debug/src/browser.js":[function(require,module,exports) {
var process = require("process");
/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();

exports.destroy = function () {
  var warned = false;
  return function () {
    if (!warned) {
      warned = true;
      console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
  };
}();
/**
 * Colors.
 */


exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */


exports.log = console.debug || console.log || function () {};
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  } // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = undefined;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = require('./common')(exports);
var {
  formatters: formatters
} = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};
},{"./common":"node_modules/debug/src/common.js","process":"../../../../.config/yarn/global/node_modules/process/browser.js"}],"node_modules/socket.io-client/build/url.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.url = void 0;

var parseuri = require("parseuri");

var debug = require("debug")("socket.io-client:url");
/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */


function url(uri) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var loc = arguments.length > 2 ? arguments[2] : undefined;
  var obj = uri; // default to window.location

  loc = loc || typeof location !== "undefined" && location;
  if (null == uri) uri = loc.protocol + "//" + loc.host; // relative path support

  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug("protocol-less url %s", uri);

      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    } // parse


    debug("parse %s", uri);
    obj = parseuri(uri);
  } // make sure we treat `localhost:80` and `localhost` equally


  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }

  obj.path = obj.path || "/";
  var ipv6 = obj.host.indexOf(":") !== -1;
  var host = ipv6 ? "[" + obj.host + "]" : obj.host; // define unique id

  obj.id = obj.protocol + "://" + host + ":" + obj.port + path; // define href

  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

exports.url = url;
},{"parseuri":"node_modules/parseuri/index.js","debug":"node_modules/debug/src/browser.js"}],"node_modules/has-cors/index.js":[function(require,module,exports) {

/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

},{}],"node_modules/engine.io-client/lib/globalThis.browser.js":[function(require,module,exports) {
module.exports = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();

},{}],"node_modules/engine.io-client/lib/xmlhttprequest.js":[function(require,module,exports) {
// browser shim for xmlhttprequest module

const hasCORS = require("has-cors");
const globalThis = require("./globalThis");

module.exports = function(opts) {
  const xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  const xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  const enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {}

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ("undefined" !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) {}

  if (!xdomain) {
    try {
      return new globalThis[["Active"].concat("Object").join("X")](
        "Microsoft.XMLHTTP"
      );
    } catch (e) {}
  }
};

},{"has-cors":"node_modules/has-cors/index.js","./globalThis":"node_modules/engine.io-client/lib/globalThis.browser.js"}],"node_modules/engine.io-parser/lib/commons.js":[function(require,module,exports) {
var PACKET_TYPES = Object.create(null); // no Map = no polyfill

PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach(function (key) {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = {
  type: "error",
  data: "parser error"
};
module.exports = {
  PACKET_TYPES: PACKET_TYPES,
  PACKET_TYPES_REVERSE: PACKET_TYPES_REVERSE,
  ERROR_PACKET: ERROR_PACKET
};
},{}],"node_modules/engine.io-parser/lib/encodePacket.browser.js":[function(require,module,exports) {
var _require = require("./commons"),
    PACKET_TYPES = _require.PACKET_TYPES;

var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function"; // ArrayBuffer.isView method is not defined in IE10

var isView = function isView(obj) {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};

var encodePacket = function encodePacket(_ref, supportsBinary, callback) {
  var type = _ref.type,
      data = _ref.data;

  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  } // plain string


  return callback(PACKET_TYPES[type] + (data || ""));
};

var encodeBlobAsBase64 = function encodeBlobAsBase64(data, callback) {
  var fileReader = new FileReader();

  fileReader.onload = function () {
    var content = fileReader.result.split(",")[1];
    callback("b" + content);
  };

  return fileReader.readAsDataURL(data);
};

module.exports = encodePacket;
},{"./commons":"node_modules/engine.io-parser/lib/commons.js"}],"node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":[function(require,module,exports) {
/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function (chars) {
  "use strict";

  exports.encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = "";

    for (i = 0; i < len; i += 3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
      base64 += chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode = function (base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;

      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4) {
      encoded1 = chars.indexOf(base64[i]);
      encoded2 = chars.indexOf(base64[i + 1]);
      encoded3 = chars.indexOf(base64[i + 2]);
      encoded4 = chars.indexOf(base64[i + 3]);
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return arraybuffer;
  };
})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
},{}],"node_modules/engine.io-parser/lib/decodePacket.browser.js":[function(require,module,exports) {
var _require = require("./commons"),
    PACKET_TYPES_REVERSE = _require.PACKET_TYPES_REVERSE,
    ERROR_PACKET = _require.ERROR_PACKET;

var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var base64decoder;

if (withNativeArrayBuffer) {
  base64decoder = require("base64-arraybuffer");
}

var decodePacket = function decodePacket(encodedPacket, binaryType) {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }

  var type = encodedPacket.charAt(0);

  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }

  var packetType = PACKET_TYPES_REVERSE[type];

  if (!packetType) {
    return ERROR_PACKET;
  }

  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};

var decodeBase64Packet = function decodeBase64Packet(data, binaryType) {
  if (base64decoder) {
    var decoded = base64decoder.decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return {
      base64: true,
      data: data
    }; // fallback for old browsers
  }
};

var mapBinary = function mapBinary(data, binaryType) {
  switch (binaryType) {
    case "blob":
      return data instanceof ArrayBuffer ? new Blob([data]) : data;

    case "arraybuffer":
    default:
      return data;
    // assuming the data is already an ArrayBuffer
  }
};

module.exports = decodePacket;
},{"./commons":"node_modules/engine.io-parser/lib/commons.js","base64-arraybuffer":"node_modules/base64-arraybuffer/lib/base64-arraybuffer.js"}],"node_modules/engine.io-parser/lib/index.js":[function(require,module,exports) {
var encodePacket = require("./encodePacket");

var decodePacket = require("./decodePacket");

var SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text

var encodePayload = function encodePayload(packets, callback) {
  // some packets may be added to the array while encoding, so the initial length must be saved
  var length = packets.length;
  var encodedPackets = new Array(length);
  var count = 0;
  packets.forEach(function (packet, i) {
    // force base64 encoding for binary packets
    encodePacket(packet, false, function (encodedPacket) {
      encodedPackets[i] = encodedPacket;

      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};

var decodePayload = function decodePayload(encodedPayload, binaryType) {
  var encodedPackets = encodedPayload.split(SEPARATOR);
  var packets = [];

  for (var i = 0; i < encodedPackets.length; i++) {
    var decodedPacket = decodePacket(encodedPackets[i], binaryType);
    packets.push(decodedPacket);

    if (decodedPacket.type === "error") {
      break;
    }
  }

  return packets;
};

module.exports = {
  protocol: 4,
  encodePacket: encodePacket,
  encodePayload: encodePayload,
  decodePacket: decodePacket,
  decodePayload: decodePayload
};
},{"./encodePacket":"node_modules/engine.io-parser/lib/encodePacket.browser.js","./decodePacket":"node_modules/engine.io-parser/lib/decodePacket.browser.js"}],"node_modules/component-emitter/index.js":[function(require,module,exports) {

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],"node_modules/engine.io-client/lib/util.js":[function(require,module,exports) {
const globalThis = require("./globalThis");

module.exports.pick = (obj, ...attr) => {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
};

// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = setTimeout;
const NATIVE_CLEAR_TIMEOUT = clearTimeout;

module.exports.installTimerFunctions = (obj, opts) => {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThis);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThis);
  } else {
    obj.setTimeoutFn = setTimeout.bind(globalThis);
    obj.clearTimeoutFn = clearTimeout.bind(globalThis);
  }
};

},{"./globalThis":"node_modules/engine.io-client/lib/globalThis.browser.js"}],"node_modules/engine.io-client/lib/transport.js":[function(require,module,exports) {
const parser = require("engine.io-parser");
const Emitter = require("component-emitter");
const { installTimerFunctions } = require("./util");
const debug = require("debug")("engine.io-client:transport");

class Transport extends Emitter {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} options.
   * @api private
   */
  constructor(opts) {
    super();
    installTimerFunctions(this, opts);

    this.opts = opts;
    this.query = opts.query;
    this.readyState = "";
    this.socket = opts.socket;
  }

  /**
   * Emits an error.
   *
   * @param {String} str
   * @return {Transport} for chaining
   * @api public
   */
  onError(msg, desc) {
    const err = new Error(msg);
    err.type = "TransportError";
    err.description = desc;
    this.emit("error", err);
    return this;
  }

  /**
   * Opens the transport.
   *
   * @api public
   */
  open() {
    if ("closed" === this.readyState || "" === this.readyState) {
      this.readyState = "opening";
      this.doOpen();
    }

    return this;
  }

  /**
   * Closes the transport.
   *
   * @api private
   */
  close() {
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.doClose();
      this.onClose();
    }

    return this;
  }

  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   * @api private
   */
  send(packets) {
    if ("open" === this.readyState) {
      this.write(packets);
    } else {
      // this might happen if the transport was silently closed in the beforeunload event handler
      debug("transport is not open, discarding packets");
    }
  }

  /**
   * Called upon open
   *
   * @api private
   */
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    this.emit("open");
  }

  /**
   * Called with data.
   *
   * @param {String} data
   * @api private
   */
  onData(data) {
    const packet = parser.decodePacket(data, this.socket.binaryType);
    this.onPacket(packet);
  }

  /**
   * Called with a decoded packet.
   */
  onPacket(packet) {
    this.emit("packet", packet);
  }

  /**
   * Called upon close.
   *
   * @api private
   */
  onClose() {
    this.readyState = "closed";
    this.emit("close");
  }
}

module.exports = Transport;

},{"engine.io-parser":"node_modules/engine.io-parser/lib/index.js","component-emitter":"node_modules/component-emitter/index.js","./util":"node_modules/engine.io-client/lib/util.js","debug":"node_modules/debug/src/browser.js"}],"node_modules/parseqs/index.js":[function(require,module,exports) {
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};

},{}],"node_modules/yeast/index.js":[function(require,module,exports) {
'use strict';

var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

},{}],"node_modules/engine.io-client/lib/transports/polling.js":[function(require,module,exports) {
const Transport = require("../transport");
const parseqs = require("parseqs");
const parser = require("engine.io-parser");
const yeast = require("yeast");

const debug = require("debug")("engine.io-client:polling");

class Polling extends Transport {
  /**
   * Transport name.
   */
  get name() {
    return "polling";
  }

  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @api private
   */
  doOpen() {
    this.poll();
  }

  /**
   * Pauses polling.
   *
   * @param {Function} callback upon buffers are flushed and transport is paused
   * @api private
   */
  pause(onPause) {
    this.readyState = "pausing";

    const pause = () => {
      debug("paused");
      this.readyState = "paused";
      onPause();
    };

    if (this.polling || !this.writable) {
      let total = 0;

      if (this.polling) {
        debug("we are currently polling - waiting to pause");
        total++;
        this.once("pollComplete", function() {
          debug("pre-pause polling complete");
          --total || pause();
        });
      }

      if (!this.writable) {
        debug("we are currently writing - waiting to pause");
        total++;
        this.once("drain", function() {
          debug("pre-pause writing complete");
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }

  /**
   * Starts polling cycle.
   *
   * @api public
   */
  poll() {
    debug("polling");
    this.polling = true;
    this.doPoll();
    this.emit("poll");
  }

  /**
   * Overloads onData to detect payloads.
   *
   * @api private
   */
  onData(data) {
    debug("polling got data %s", data);
    const callback = packet => {
      // if its the first message we consider the transport open
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }

      // if its a close packet, we close the ongoing requests
      if ("close" === packet.type) {
        this.onClose();
        return false;
      }

      // otherwise bypass onData and handle the message
      this.onPacket(packet);
    };

    // decode payload
    parser.decodePayload(data, this.socket.binaryType).forEach(callback);

    // if an event did not trigger closing
    if ("closed" !== this.readyState) {
      // if we got data we're not polling
      this.polling = false;
      this.emit("pollComplete");

      if ("open" === this.readyState) {
        this.poll();
      } else {
        debug('ignoring poll - transport state "%s"', this.readyState);
      }
    }
  }

  /**
   * For polling, send a close packet.
   *
   * @api private
   */
  doClose() {
    const close = () => {
      debug("writing close packet");
      this.write([{ type: "close" }]);
    };

    if ("open" === this.readyState) {
      debug("transport open - closing");
      close();
    } else {
      // in case we're trying to close while
      // handshaking is in progress (GH-164)
      debug("transport not open - deferring close");
      this.once("open", close);
    }
  }

  /**
   * Writes a packets payload.
   *
   * @param {Array} data packets
   * @param {Function} drain callback
   * @api private
   */
  write(packets) {
    this.writable = false;

    parser.encodePayload(packets, data => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emit("drain");
      });
    });
  }

  /**
   * Generates uri for connection.
   *
   * @api private
   */
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "https" : "http";
    let port = "";

    // cache busting is forced
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }

    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }

    query = parseqs.encode(query);

    // avoid port if default for schema
    if (
      this.opts.port &&
      (("https" === schema && Number(this.opts.port) !== 443) ||
        ("http" === schema && Number(this.opts.port) !== 80))
    ) {
      port = ":" + this.opts.port;
    }

    // prepend ? to query
    if (query.length) {
      query = "?" + query;
    }

    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return (
      schema +
      "://" +
      (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
      port +
      this.opts.path +
      query
    );
  }
}

module.exports = Polling;

},{"../transport":"node_modules/engine.io-client/lib/transport.js","parseqs":"node_modules/parseqs/index.js","engine.io-parser":"node_modules/engine.io-parser/lib/index.js","yeast":"node_modules/yeast/index.js","debug":"node_modules/debug/src/browser.js"}],"node_modules/engine.io-client/lib/transports/polling-xhr.js":[function(require,module,exports) {
/* global attachEvent */

const XMLHttpRequest = require("xmlhttprequest-ssl");
const Polling = require("./polling");
const Emitter = require("component-emitter");
const { pick, installTimerFunctions } = require("../util");
const globalThis = require("../globalThis");

const debug = require("debug")("engine.io-client:polling-xhr");

/**
 * Empty function
 */

function empty() {}

const hasXHR2 = (function() {
  const xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

class XHR extends Polling {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @api public
   */
  constructor(opts) {
    super(opts);

    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;

      // some user agents have empty `location.port`
      if (!port) {
        port = isSSL ? 443 : 80;
      }

      this.xd =
        (typeof location !== "undefined" &&
          opts.hostname !== location.hostname) ||
        port !== opts.port;
      this.xs = opts.secure !== isSSL;
    }
    /**
     * XHR supports binary
     */
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }

  /**
   * Creates a request.
   *
   * @param {String} method
   * @api private
   */
  request(opts = {}) {
    Object.assign(opts, { xd: this.xd, xs: this.xs }, this.opts);
    return new Request(this.uri(), opts);
  }

  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @api private
   */
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data: data
    });
    req.on("success", fn);
    req.on("error", err => {
      this.onError("xhr post error", err);
    });
  }

  /**
   * Starts a poll cycle.
   *
   * @api private
   */
  doPoll() {
    debug("xhr poll");
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", err => {
      this.onError("xhr poll error", err);
    });
    this.pollXhr = req;
  }
}

class Request extends Emitter {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @api public
   */
  constructor(uri, opts) {
    super();
    installTimerFunctions(this, opts);
    this.opts = opts;

    this.method = opts.method || "GET";
    this.uri = uri;
    this.async = false !== opts.async;
    this.data = undefined !== opts.data ? opts.data : null;

    this.create();
  }

  /**
   * Creates the XHR object and sends the request.
   *
   * @api private
   */
  create() {
    const opts = pick(
      this.opts,
      "agent",
      "enablesXDR",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref"
    );
    opts.xdomain = !!this.opts.xd;
    opts.xscheme = !!this.opts.xs;

    const xhr = (this.xhr = new XMLHttpRequest(opts));

    try {
      debug("xhr open %s: %s", this.method, this.uri);
      xhr.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i)) {
              xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
            }
          }
        }
      } catch (e) {}

      if ("POST" === this.method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {}
      }

      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {}

      // ie6 check
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }

      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }

      if (this.hasXDR()) {
        xhr.onload = () => {
          this.onLoad();
        };
        xhr.onerror = () => {
          this.onError(xhr.responseText);
        };
      } else {
        xhr.onreadystatechange = () => {
          if (4 !== xhr.readyState) return;
          if (200 === xhr.status || 1223 === xhr.status) {
            this.onLoad();
          } else {
            // make sure the `error` event handler that's user-set
            // does not throw in the same tick and gets caught here
            this.setTimeoutFn(() => {
              this.onError(typeof xhr.status === "number" ? xhr.status : 0);
            }, 0);
          }
        };
      }

      debug("xhr data %s", this.data);
      xhr.send(this.data);
    } catch (e) {
      // Need to defer since .create() is called directly from the constructor
      // and thus the 'error' event can only be only bound *after* this exception
      // occurs.  Therefore, also, we cannot throw here at all.
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }

    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }

  /**
   * Called upon successful response.
   *
   * @api private
   */
  onSuccess() {
    this.emit("success");
    this.cleanup();
  }

  /**
   * Called if we have data.
   *
   * @api private
   */
  onData(data) {
    this.emit("data", data);
    this.onSuccess();
  }

  /**
   * Called upon error.
   *
   * @api private
   */
  onError(err) {
    this.emit("error", err);
    this.cleanup(true);
  }

  /**
   * Cleans up house.
   *
   * @api private
   */
  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    }
    // xmlhttprequest
    if (this.hasXDR()) {
      this.xhr.onload = this.xhr.onerror = empty;
    } else {
      this.xhr.onreadystatechange = empty;
    }

    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {}
    }

    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }

    this.xhr = null;
  }

  /**
   * Called upon load.
   *
   * @api private
   */
  onLoad() {
    const data = this.xhr.responseText;
    if (data !== null) {
      this.onData(data);
    }
  }

  /**
   * Check if it has XDomainRequest.
   *
   * @api private
   */
  hasXDR() {
    return typeof XDomainRequest !== "undefined" && !this.xs && this.enablesXDR;
  }

  /**
   * Aborts the request.
   *
   * @api public
   */
  abort() {
    this.cleanup();
  }
}

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

Request.requestsCount = 0;
Request.requests = {};

if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThis ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler() {
  for (let i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

module.exports = XHR;
module.exports.Request = Request;

},{"xmlhttprequest-ssl":"node_modules/engine.io-client/lib/xmlhttprequest.js","./polling":"node_modules/engine.io-client/lib/transports/polling.js","component-emitter":"node_modules/component-emitter/index.js","../util":"node_modules/engine.io-client/lib/util.js","../globalThis":"node_modules/engine.io-client/lib/globalThis.browser.js","debug":"node_modules/debug/src/browser.js"}],"node_modules/engine.io-client/lib/transports/polling-jsonp.js":[function(require,module,exports) {
const Polling = require("./polling");
const globalThis = require("../globalThis");

const rNewline = /\n/g;
const rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

let callbacks;

class JSONPPolling extends Polling {
  /**
   * JSONP Polling constructor.
   *
   * @param {Object} opts.
   * @api public
   */
  constructor(opts) {
    super(opts);

    this.query = this.query || {};

    // define global callbacks array if not present
    // we do this here (lazily) to avoid unneeded global pollution
    if (!callbacks) {
      // we need to consider multiple engines in the same page
      callbacks = globalThis.___eio = globalThis.___eio || [];
    }

    // callback identifier
    this.index = callbacks.length;

    // add callback to jsonp global
    callbacks.push(this.onData.bind(this));

    // append to query string
    this.query.j = this.index;
  }

  /**
   * JSONP only supports binary as base64 encoded strings
   */
  get supportsBinary() {
    return false;
  }

  /**
   * Closes the socket.
   *
   * @api private
   */
  doClose() {
    if (this.script) {
      // prevent spurious errors from being emitted when the window is unloaded
      this.script.onerror = () => {};
      this.script.parentNode.removeChild(this.script);
      this.script = null;
    }

    if (this.form) {
      this.form.parentNode.removeChild(this.form);
      this.form = null;
      this.iframe = null;
    }

    super.doClose();
  }

  /**
   * Starts a poll cycle.
   *
   * @api private
   */
  doPoll() {
    const script = document.createElement("script");

    if (this.script) {
      this.script.parentNode.removeChild(this.script);
      this.script = null;
    }

    script.async = true;
    script.src = this.uri();
    script.onerror = e => {
      this.onError("jsonp poll error", e);
    };

    const insertAt = document.getElementsByTagName("script")[0];
    if (insertAt) {
      insertAt.parentNode.insertBefore(script, insertAt);
    } else {
      (document.head || document.body).appendChild(script);
    }
    this.script = script;

    const isUAgecko =
      "undefined" !== typeof navigator && /gecko/i.test(navigator.userAgent);

    if (isUAgecko) {
      this.setTimeoutFn(function() {
        const iframe = document.createElement("iframe");
        document.body.appendChild(iframe);
        document.body.removeChild(iframe);
      }, 100);
    }
  }

  /**
   * Writes with a hidden iframe.
   *
   * @param {String} data to send
   * @param {Function} called upon flush.
   * @api private
   */
  doWrite(data, fn) {
    let iframe;

    if (!this.form) {
      const form = document.createElement("form");
      const area = document.createElement("textarea");
      const id = (this.iframeId = "eio_iframe_" + this.index);

      form.className = "socketio";
      form.style.position = "absolute";
      form.style.top = "-1000px";
      form.style.left = "-1000px";
      form.target = id;
      form.method = "POST";
      form.setAttribute("accept-charset", "utf-8");
      area.name = "d";
      form.appendChild(area);
      document.body.appendChild(form);

      this.form = form;
      this.area = area;
    }

    this.form.action = this.uri();

    function complete() {
      initIframe();
      fn();
    }

    const initIframe = () => {
      if (this.iframe) {
        try {
          this.form.removeChild(this.iframe);
        } catch (e) {
          this.onError("jsonp polling iframe removal error", e);
        }
      }

      try {
        // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
        const html = '<iframe src="javascript:0" name="' + this.iframeId + '">';
        iframe = document.createElement(html);
      } catch (e) {
        iframe = document.createElement("iframe");
        iframe.name = this.iframeId;
        iframe.src = "javascript:0";
      }

      iframe.id = this.iframeId;

      this.form.appendChild(iframe);
      this.iframe = iframe;
    };

    initIframe();

    // escape \n to prevent it from being converted into \r\n by some UAs
    // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
    data = data.replace(rEscapedNewline, "\\\n");
    this.area.value = data.replace(rNewline, "\\n");

    try {
      this.form.submit();
    } catch (e) {}

    if (this.iframe.attachEvent) {
      this.iframe.onreadystatechange = () => {
        if (this.iframe.readyState === "complete") {
          complete();
        }
      };
    } else {
      this.iframe.onload = complete;
    }
  }
}

module.exports = JSONPPolling;

},{"./polling":"node_modules/engine.io-client/lib/transports/polling.js","../globalThis":"node_modules/engine.io-client/lib/globalThis.browser.js"}],"node_modules/engine.io-client/lib/transports/websocket-constructor.browser.js":[function(require,module,exports) {
const globalThis = require("../globalThis");
const nextTick = (() => {
  const isPromiseAvailable =
    typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return cb => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();

module.exports = {
  WebSocket: globalThis.WebSocket || globalThis.MozWebSocket,
  usingBrowserWebSocket: true,
  defaultBinaryType: "arraybuffer",
  nextTick
};

},{"../globalThis":"node_modules/engine.io-client/lib/globalThis.browser.js"}],"../../../../.config/yarn/global/node_modules/base64-js/index.js":[function(require,module,exports) {
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],"../../../../.config/yarn/global/node_modules/ieee754/index.js":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],"../../../../.config/yarn/global/node_modules/isarray/index.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],"../../../../.config/yarn/global/node_modules/buffer/index.js":[function(require,module,exports) {

var global = arguments[3];
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

},{"base64-js":"../../../../.config/yarn/global/node_modules/base64-js/index.js","ieee754":"../../../../.config/yarn/global/node_modules/ieee754/index.js","isarray":"../../../../.config/yarn/global/node_modules/isarray/index.js","buffer":"../../../../.config/yarn/global/node_modules/buffer/index.js"}],"node_modules/engine.io-client/lib/transports/websocket.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
const Transport = require("../transport");
const parser = require("engine.io-parser");
const parseqs = require("parseqs");
const yeast = require("yeast");
const { pick } = require("../util");
const {
  WebSocket,
  usingBrowserWebSocket,
  defaultBinaryType,
  nextTick
} = require("./websocket-constructor");

const debug = require("debug")("engine.io-client:websocket");

// detect ReactNative environment
const isReactNative =
  typeof navigator !== "undefined" &&
  typeof navigator.product === "string" &&
  navigator.product.toLowerCase() === "reactnative";

class WS extends Transport {
  /**
   * WebSocket transport constructor.
   *
   * @api {Object} connection options
   * @api public
   */
  constructor(opts) {
    super(opts);

    this.supportsBinary = !opts.forceBase64;
  }

  /**
   * Transport name.
   *
   * @api public
   */
  get name() {
    return "websocket";
  }

  /**
   * Opens socket.
   *
   * @api private
   */
  doOpen() {
    if (!this.check()) {
      // let probe timeout
      return;
    }

    const uri = this.uri();
    const protocols = this.opts.protocols;

    // React Native only supports the 'headers' option, and will print a warning if anything else is passed
    const opts = isReactNative
      ? {}
      : pick(
          this.opts,
          "agent",
          "perMessageDeflate",
          "pfx",
          "key",
          "passphrase",
          "cert",
          "ca",
          "ciphers",
          "rejectUnauthorized",
          "localAddress",
          "protocolVersion",
          "origin",
          "maxPayload",
          "family",
          "checkServerIdentity"
        );

    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }

    try {
      this.ws =
        usingBrowserWebSocket && !isReactNative
          ? protocols
            ? new WebSocket(uri, protocols)
            : new WebSocket(uri)
          : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emit("error", err);
    }

    this.ws.binaryType = this.socket.binaryType || defaultBinaryType;

    this.addEventListeners();
  }

  /**
   * Adds event listeners to the socket
   *
   * @api private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = this.onClose.bind(this);
    this.ws.onmessage = ev => this.onData(ev.data);
    this.ws.onerror = e => this.onError("websocket error", e);
  }

  /**
   * Writes data to socket.
   *
   * @param {Array} array of packets.
   * @api private
   */
  write(packets) {
    this.writable = false;

    // encodePacket efficient as it uses WS framing
    // no need for encodePayload
    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;

      parser.encodePacket(packet, this.supportsBinary, data => {
        // always create a new object (GH-437)
        const opts = {};
        if (!usingBrowserWebSocket) {
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (this.opts.perMessageDeflate) {
            const len =
              "string" === typeof data ? Buffer.byteLength(data) : data.length;
            if (len < this.opts.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error
        try {
          if (usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            this.ws.send(data);
          } else {
            this.ws.send(data, opts);
          }
        } catch (e) {
          debug("websocket closed before onclose event");
        }

        if (lastPacket) {
          // fake drain
          // defer to next tick to allow Socket to clear writeBuffer
          nextTick(() => {
            this.writable = true;
            this.emit("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }

  /**
   * Called upon close
   *
   * @api private
   */
  onClose() {
    Transport.prototype.onClose.call(this);
  }

  /**
   * Closes socket.
   *
   * @api private
   */
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }

  /**
   * Generates uri for connection.
   *
   * @api private
   */
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "wss" : "ws";
    let port = "";

    // avoid port if default for schema
    if (
      this.opts.port &&
      (("wss" === schema && Number(this.opts.port) !== 443) ||
        ("ws" === schema && Number(this.opts.port) !== 80))
    ) {
      port = ":" + this.opts.port;
    }

    // append timestamp to URI
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }

    // communicate binary support capabilities
    if (!this.supportsBinary) {
      query.b64 = 1;
    }

    query = parseqs.encode(query);

    // prepend ? to query
    if (query.length) {
      query = "?" + query;
    }

    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return (
      schema +
      "://" +
      (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
      port +
      this.opts.path +
      query
    );
  }

  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @api public
   */
  check() {
    return (
      !!WebSocket &&
      !("__initialize" in WebSocket && this.name === WS.prototype.name)
    );
  }
}

module.exports = WS;

},{"../transport":"node_modules/engine.io-client/lib/transport.js","engine.io-parser":"node_modules/engine.io-parser/lib/index.js","parseqs":"node_modules/parseqs/index.js","yeast":"node_modules/yeast/index.js","../util":"node_modules/engine.io-client/lib/util.js","./websocket-constructor":"node_modules/engine.io-client/lib/transports/websocket-constructor.browser.js","debug":"node_modules/debug/src/browser.js","buffer":"../../../../.config/yarn/global/node_modules/buffer/index.js"}],"node_modules/engine.io-client/lib/transports/index.js":[function(require,module,exports) {
const XMLHttpRequest = require("xmlhttprequest-ssl");
const XHR = require("./polling-xhr");
const JSONP = require("./polling-jsonp");
const websocket = require("./websocket");

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling(opts) {
  let xhr;
  let xd = false;
  let xs = false;
  const jsonp = false !== opts.jsonp;

  if (typeof location !== "undefined") {
    const isSSL = "https:" === location.protocol;
    let port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ("open" in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error("JSONP disabled");
    return new JSONP(opts);
  }
}

},{"xmlhttprequest-ssl":"node_modules/engine.io-client/lib/xmlhttprequest.js","./polling-xhr":"node_modules/engine.io-client/lib/transports/polling-xhr.js","./polling-jsonp":"node_modules/engine.io-client/lib/transports/polling-jsonp.js","./websocket":"node_modules/engine.io-client/lib/transports/websocket.js"}],"node_modules/engine.io-client/lib/socket.js":[function(require,module,exports) {
const transports = require("./transports/index");
const Emitter = require("component-emitter");
const debug = require("debug")("engine.io-client:socket");
const parser = require("engine.io-parser");
const parseuri = require("parseuri");
const parseqs = require("parseqs");
const { installTimerFunctions } = require("./util");

class Socket extends Emitter {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri or options
   * @param {Object} options
   * @api public
   */
  constructor(uri, opts = {}) {
    super();

    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }

    if (uri) {
      uri = parseuri(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parseuri(opts.host).host;
    }

    installTimerFunctions(this, opts);

    this.secure =
      null != opts.secure
        ? opts.secure
        : typeof location !== "undefined" && "https:" === location.protocol;

    if (opts.hostname && !opts.port) {
      // if no port is specified manually, use the protocol default
      opts.port = this.secure ? "443" : "80";
    }

    this.hostname =
      opts.hostname ||
      (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port =
      opts.port ||
      (typeof location !== "undefined" && location.port
        ? location.port
        : this.secure
        ? 443
        : 80);

    this.transports = opts.transports || ["polling", "websocket"];
    this.readyState = "";
    this.writeBuffer = [];
    this.prevBufferLen = 0;

    this.opts = Object.assign(
      {
        path: "/engine.io",
        agent: false,
        withCredentials: false,
        upgrade: true,
        jsonp: true,
        timestampParam: "t",
        rememberUpgrade: false,
        rejectUnauthorized: true,
        perMessageDeflate: {
          threshold: 1024
        },
        transportOptions: {},
        closeOnBeforeunload: true
      },
      opts
    );

    this.opts.path = this.opts.path.replace(/\/$/, "") + "/";

    if (typeof this.opts.query === "string") {
      this.opts.query = parseqs.decode(this.opts.query);
    }

    // set on handshake
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;

    // set on heartbeat
    this.pingTimeoutTimer = null;

    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
        // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
        // closed/reloaded)
        addEventListener(
          "beforeunload",
          () => {
            if (this.transport) {
              // silently close the transport
              this.transport.removeAllListeners();
              this.transport.close();
            }
          },
          false
        );
      }
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close");
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }

    this.open();
  }

  /**
   * Creates transport of the given type.
   *
   * @param {String} transport name
   * @return {Transport}
   * @api private
   */
  createTransport(name) {
    debug('creating transport "%s"', name);
    const query = clone(this.opts.query);

    // append engine.io protocol identifier
    query.EIO = parser.protocol;

    // transport name
    query.transport = name;

    // session id if we already have one
    if (this.id) query.sid = this.id;

    const opts = Object.assign(
      {},
      this.opts.transportOptions[name],
      this.opts,
      {
        query,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port
      }
    );

    debug("options: %j", opts);

    return new transports[name](opts);
  }

  /**
   * Initializes transport to use and starts probe.
   *
   * @api private
   */
  open() {
    let transport;
    if (
      this.opts.rememberUpgrade &&
      Socket.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
    ) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      // Emit error on next tick so it can be listened to
      this.setTimeoutFn(() => {
        this.emit("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = "opening";

    // Retry with the next transport if the transport is disabled (jsonp: false)
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      debug("error while creating transport: %s", e);
      this.transports.shift();
      this.open();
      return;
    }

    transport.open();
    this.setTransport(transport);
  }

  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @api private
   */
  setTransport(transport) {
    debug("setting transport %s", transport.name);

    if (this.transport) {
      debug("clearing existing transport %s", this.transport.name);
      this.transport.removeAllListeners();
    }

    // set up transport
    this.transport = transport;

    // set up transport listeners
    transport
      .on("drain", this.onDrain.bind(this))
      .on("packet", this.onPacket.bind(this))
      .on("error", this.onError.bind(this))
      .on("close", () => {
        this.onClose("transport close");
      });
  }

  /**
   * Probes a transport.
   *
   * @param {String} transport name
   * @api private
   */
  probe(name) {
    debug('probing transport "%s"', name);
    let transport = this.createTransport(name, { probe: 1 });
    let failed = false;

    Socket.priorWebsocketSuccess = false;

    const onTransportOpen = () => {
      if (failed) return;

      debug('probe transport "%s" opened', name);
      transport.send([{ type: "ping", data: "probe" }]);
      transport.once("packet", msg => {
        if (failed) return;
        if ("pong" === msg.type && "probe" === msg.data) {
          debug('probe transport "%s" pong', name);
          this.upgrading = true;
          this.emit("upgrading", transport);
          if (!transport) return;
          Socket.priorWebsocketSuccess = "websocket" === transport.name;

          debug('pausing current transport "%s"', this.transport.name);
          this.transport.pause(() => {
            if (failed) return;
            if ("closed" === this.readyState) return;
            debug("changing transport and sending upgrade packet");

            cleanup();

            this.setTransport(transport);
            transport.send([{ type: "upgrade" }]);
            this.emit("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          debug('probe transport "%s" failed', name);
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emit("upgradeError", err);
        }
      });
    };

    function freezeTransport() {
      if (failed) return;

      // Any callback called by transport should be ignored since now
      failed = true;

      cleanup();

      transport.close();
      transport = null;
    }

    // Handle any error that happens while probing
    const onerror = err => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;

      freezeTransport();

      debug('probe transport "%s" failed because of error: %s', name, err);

      this.emit("upgradeError", error);
    };

    function onTransportClose() {
      onerror("transport closed");
    }

    // When the socket is closed while we're probing
    function onclose() {
      onerror("socket closed");
    }

    // When the socket is upgraded while we're probing
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        debug('"%s" works - aborting "%s"', to.name, transport.name);
        freezeTransport();
      }
    }

    // Remove all listeners on the transport and on self
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.removeListener("close", onclose);
      this.removeListener("upgrading", onupgrade);
    };

    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);

    this.once("close", onclose);
    this.once("upgrading", onupgrade);

    transport.open();
  }

  /**
   * Called when connection is deemed open.
   *
   * @api public
   */
  onOpen() {
    debug("socket open");
    this.readyState = "open";
    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emit("open");
    this.flush();

    // we check for `readyState` in case an `open`
    // listener already closed the socket
    if (
      "open" === this.readyState &&
      this.opts.upgrade &&
      this.transport.pause
    ) {
      debug("starting upgrade probes");
      let i = 0;
      const l = this.upgrades.length;
      for (; i < l; i++) {
        this.probe(this.upgrades[i]);
      }
    }
  }

  /**
   * Handles a packet.
   *
   * @api private
   */
  onPacket(packet) {
    if (
      "opening" === this.readyState ||
      "open" === this.readyState ||
      "closing" === this.readyState
    ) {
      debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

      this.emit("packet", packet);

      // Socket is live - any packet counts
      this.emit("heartbeat");

      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;

        case "ping":
          this.resetPingTimeout();
          this.sendPacket("pong");
          this.emit("ping");
          this.emit("pong");
          break;

        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;

        case "message":
          this.emit("data", packet.data);
          this.emit("message", packet.data);
          break;
      }
    } else {
      debug('packet received with socket readyState "%s"', this.readyState);
    }
  }

  /**
   * Called upon handshake completion.
   *
   * @param {Object} handshake obj
   * @api private
   */
  onHandshake(data) {
    this.emit("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.onOpen();
    // In case open handler closes socket
    if ("closed" === this.readyState) return;
    this.resetPingTimeout();
  }

  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @api private
   */
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }

  /**
   * Called on `drain` event
   *
   * @api private
   */
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);

    // setting prevBufferLen = 0 is very important
    // for example, when upgrading, upgrade packet is sent over,
    // and a nonzero prevBufferLen could cause problems on `drain`
    this.prevBufferLen = 0;

    if (0 === this.writeBuffer.length) {
      this.emit("drain");
    } else {
      this.flush();
    }
  }

  /**
   * Flush write buffers.
   *
   * @api private
   */
  flush() {
    if (
      "closed" !== this.readyState &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      debug("flushing %d packets in socket", this.writeBuffer.length);
      this.transport.send(this.writeBuffer);
      // keep track of current length of writeBuffer
      // splice writeBuffer and callbackBuffer on `drain`
      this.prevBufferLen = this.writeBuffer.length;
      this.emit("flush");
    }
  }

  /**
   * Sends a message.
   *
   * @param {String} message.
   * @param {Function} callback function.
   * @param {Object} options.
   * @return {Socket} for chaining.
   * @api public
   */
  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }

  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }

  /**
   * Sends a packet.
   *
   * @param {String} packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} callback function.
   * @api private
   */
  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = undefined;
    }

    if ("function" === typeof options) {
      fn = options;
      options = null;
    }

    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }

    options = options || {};
    options.compress = false !== options.compress;

    const packet = {
      type: type,
      data: data,
      options: options
    };
    this.emit("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn) this.once("flush", fn);
    this.flush();
  }

  /**
   * Closes the connection.
   *
   * @api private
   */
  close() {
    const close = () => {
      this.onClose("forced close");
      debug("socket closing - telling transport to close");
      this.transport.close();
    };

    const cleanupAndClose = () => {
      this.removeListener("upgrade", cleanupAndClose);
      this.removeListener("upgradeError", cleanupAndClose);
      close();
    };

    const waitForUpgrade = () => {
      // wait for upgrade to finish since we can't send packets while pausing a transport
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };

    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";

      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }

    return this;
  }

  /**
   * Called upon transport error
   *
   * @api private
   */
  onError(err) {
    debug("socket error %j", err);
    Socket.priorWebsocketSuccess = false;
    this.emit("error", err);
    this.onClose("transport error", err);
  }

  /**
   * Called upon transport close.
   *
   * @api private
   */
  onClose(reason, desc) {
    if (
      "opening" === this.readyState ||
      "open" === this.readyState ||
      "closing" === this.readyState
    ) {
      debug('socket close with reason: "%s"', reason);

      // clear timers
      this.clearTimeoutFn(this.pingIntervalTimer);
      this.clearTimeoutFn(this.pingTimeoutTimer);

      // stop event from firing again for transport
      this.transport.removeAllListeners("close");

      // ensure transport won't stay open
      this.transport.close();

      // ignore further transport communication
      this.transport.removeAllListeners();

      if (typeof removeEventListener === "function") {
        removeEventListener("offline", this.offlineEventListener, false);
      }

      // set ready state
      this.readyState = "closed";

      // clear session id
      this.id = null;

      // emit close event
      this.emit("close", reason, desc);

      // clean buffers after, so users can still
      // grab the buffers on `close` event
      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }

  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} server upgrades
   * @api private
   *
   */
  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i = 0;
    const j = upgrades.length;
    for (; i < j; i++) {
      if (~this.transports.indexOf(upgrades[i]))
        filteredUpgrades.push(upgrades[i]);
    }
    return filteredUpgrades;
  }
}

Socket.priorWebsocketSuccess = false;

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

function clone(obj) {
  const o = {};
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

module.exports = Socket;

},{"./transports/index":"node_modules/engine.io-client/lib/transports/index.js","component-emitter":"node_modules/component-emitter/index.js","debug":"node_modules/debug/src/browser.js","engine.io-parser":"node_modules/engine.io-parser/lib/index.js","parseuri":"node_modules/parseuri/index.js","parseqs":"node_modules/parseqs/index.js","./util":"node_modules/engine.io-client/lib/util.js"}],"node_modules/engine.io-client/lib/index.js":[function(require,module,exports) {
const Socket = require("./socket");

module.exports = (uri, opts) => new Socket(uri, opts);

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

module.exports.Socket = Socket;
module.exports.protocol = Socket.protocol; // this is an int
module.exports.Transport = require("./transport");
module.exports.transports = require("./transports/index");
module.exports.parser = require("engine.io-parser");

},{"./socket":"node_modules/engine.io-client/lib/socket.js","./transport":"node_modules/engine.io-client/lib/transport.js","./transports/index":"node_modules/engine.io-client/lib/transports/index.js","engine.io-parser":"node_modules/engine.io-parser/lib/index.js"}],"node_modules/socket.io-parser/dist/is-binary.js":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasBinary = exports.isBinary = void 0;
var withNativeArrayBuffer = typeof ArrayBuffer === "function";

var isView = function isView(obj) {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */

function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}

exports.isBinary = isBinary;

function hasBinary(obj, toJSON) {
  if (!obj || _typeof(obj) !== "object") {
    return false;
  }

  if (Array.isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }

    return false;
  }

  if (isBinary(obj)) {
    return true;
  }

  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}

exports.hasBinary = hasBinary;
},{}],"node_modules/socket.io-parser/dist/binary.js":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reconstructPacket = exports.deconstructPacket = void 0;

var is_binary_1 = require("./is-binary");
/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */


function deconstructPacket(packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'

  return {
    packet: pack,
    buffers: buffers
  };
}

exports.deconstructPacket = deconstructPacket;

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (is_binary_1.isBinary(data)) {
    var placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    var newData = new Array(data.length);

    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }

    return newData;
  } else if (_typeof(data) === "object" && !(data instanceof Date)) {
    var _newData = {};

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        _newData[key] = _deconstructPacket(data[key], buffers);
      }
    }

    return _newData;
  }

  return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */


function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful

  return packet;
}

exports.reconstructPacket = reconstructPacket;

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (Array.isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (_typeof(data) === "object") {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }

  return data;
}
},{"./is-binary":"node_modules/socket.io-parser/dist/is-binary.js"}],"node_modules/socket.io-parser/dist/index.js":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;

var Emitter = require("component-emitter");

var binary_1 = require("./binary");

var is_binary_1 = require("./is-binary");

var debug = require("debug")("socket.io-parser");
/**
 * Protocol version.
 *
 * @public
 */


exports.protocol = 5;
var PacketType;

(function (PacketType) {
  PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
  PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType[PacketType["EVENT"] = 2] = "EVENT";
  PacketType[PacketType["ACK"] = 3] = "ACK";
  PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType = exports.PacketType || (exports.PacketType = {}));
/**
 * A socket.io Encoder instance
 */


var Encoder = /*#__PURE__*/function () {
  function Encoder() {
    _classCallCheck(this, Encoder);
  }

  _createClass(Encoder, [{
    key: "encode",
    value:
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    function encode(obj) {
      debug("encoding packet %j", obj);

      if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
        if (is_binary_1.hasBinary(obj)) {
          obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
          return this.encodeAsBinary(obj);
        }
      }

      return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */

  }, {
    key: "encodeAsString",
    value: function encodeAsString(obj) {
      // first is type
      var str = "" + obj.type; // attachments if we have them

      if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
        str += obj.attachments + "-";
      } // if we have a namespace other than `/`
      // we append it followed by a comma `,`


      if (obj.nsp && "/" !== obj.nsp) {
        str += obj.nsp + ",";
      } // immediately followed by the id


      if (null != obj.id) {
        str += obj.id;
      } // json data


      if (null != obj.data) {
        str += JSON.stringify(obj.data);
      }

      debug("encoded %j as %s", obj, str);
      return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */

  }, {
    key: "encodeAsBinary",
    value: function encodeAsBinary(obj) {
      var deconstruction = binary_1.deconstructPacket(obj);
      var pack = this.encodeAsString(deconstruction.packet);
      var buffers = deconstruction.buffers;
      buffers.unshift(pack); // add packet info to beginning of data list

      return buffers; // write all the buffers
    }
  }]);

  return Encoder;
}();

exports.Encoder = Encoder;
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */

var Decoder = /*#__PURE__*/function (_Emitter) {
  _inherits(Decoder, _Emitter);

  var _super = _createSuper(Decoder);

  function Decoder() {
    _classCallCheck(this, Decoder);

    return _super.call(this);
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */


  _createClass(Decoder, [{
    key: "add",
    value: function add(obj) {
      var packet;

      if (typeof obj === "string") {
        packet = this.decodeString(obj);

        if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
          // binary packet's json
          this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow

          if (packet.attachments === 0) {
            _get(_getPrototypeOf(Decoder.prototype), "emit", this).call(this, "decoded", packet);
          }
        } else {
          // non-binary full packet
          _get(_getPrototypeOf(Decoder.prototype), "emit", this).call(this, "decoded", packet);
        }
      } else if (is_binary_1.isBinary(obj) || obj.base64) {
        // raw binary data
        if (!this.reconstructor) {
          throw new Error("got binary data when not reconstructing a packet");
        } else {
          packet = this.reconstructor.takeBinaryData(obj);

          if (packet) {
            // received final buffer
            this.reconstructor = null;

            _get(_getPrototypeOf(Decoder.prototype), "emit", this).call(this, "decoded", packet);
          }
        }
      } else {
        throw new Error("Unknown type: " + obj);
      }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */

  }, {
    key: "decodeString",
    value: function decodeString(str) {
      var i = 0; // look up type

      var p = {
        type: Number(str.charAt(0))
      };

      if (PacketType[p.type] === undefined) {
        throw new Error("unknown packet type " + p.type);
      } // look up attachments if type binary


      if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
        var start = i + 1;

        while (str.charAt(++i) !== "-" && i != str.length) {}

        var buf = str.substring(start, i);

        if (buf != Number(buf) || str.charAt(i) !== "-") {
          throw new Error("Illegal attachments");
        }

        p.attachments = Number(buf);
      } // look up namespace (if any)


      if ("/" === str.charAt(i + 1)) {
        var _start = i + 1;

        while (++i) {
          var c = str.charAt(i);
          if ("," === c) break;
          if (i === str.length) break;
        }

        p.nsp = str.substring(_start, i);
      } else {
        p.nsp = "/";
      } // look up id


      var next = str.charAt(i + 1);

      if ("" !== next && Number(next) == next) {
        var _start2 = i + 1;

        while (++i) {
          var _c = str.charAt(i);

          if (null == _c || Number(_c) != _c) {
            --i;
            break;
          }

          if (i === str.length) break;
        }

        p.id = Number(str.substring(_start2, i + 1));
      } // look up json data


      if (str.charAt(++i)) {
        var payload = tryParse(str.substr(i));

        if (Decoder.isPayloadValid(p.type, payload)) {
          p.data = payload;
        } else {
          throw new Error("invalid payload");
        }
      }

      debug("decoded %s as %j", str, p);
      return p;
    }
  }, {
    key: "destroy",
    value:
    /**
     * Deallocates a parser's resources
     */
    function destroy() {
      if (this.reconstructor) {
        this.reconstructor.finishedReconstruction();
      }
    }
  }], [{
    key: "isPayloadValid",
    value: function isPayloadValid(type, payload) {
      switch (type) {
        case PacketType.CONNECT:
          return _typeof(payload) === "object";

        case PacketType.DISCONNECT:
          return payload === undefined;

        case PacketType.CONNECT_ERROR:
          return typeof payload === "string" || _typeof(payload) === "object";

        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          return Array.isArray(payload) && payload.length > 0;

        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          return Array.isArray(payload);
      }
    }
  }]);

  return Decoder;
}(Emitter);

exports.Decoder = Decoder;

function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */


var BinaryReconstructor = /*#__PURE__*/function () {
  function BinaryReconstructor(packet) {
    _classCallCheck(this, BinaryReconstructor);

    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */


  _createClass(BinaryReconstructor, [{
    key: "takeBinaryData",
    value: function takeBinaryData(binData) {
      this.buffers.push(binData);

      if (this.buffers.length === this.reconPack.attachments) {
        // done with buffer list
        var packet = binary_1.reconstructPacket(this.reconPack, this.buffers);
        this.finishedReconstruction();
        return packet;
      }

      return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */

  }, {
    key: "finishedReconstruction",
    value: function finishedReconstruction() {
      this.reconPack = null;
      this.buffers = [];
    }
  }]);

  return BinaryReconstructor;
}();
},{"component-emitter":"node_modules/component-emitter/index.js","./binary":"node_modules/socket.io-parser/dist/binary.js","./is-binary":"node_modules/socket.io-parser/dist/is-binary.js","debug":"node_modules/debug/src/browser.js"}],"node_modules/socket.io-client/build/on.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = void 0;

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

exports.on = on;
},{}],"node_modules/socket.io-client/build/typed-events.js":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StrictEventEmitter = void 0;

var Emitter = require("component-emitter");
/**
 * Strictly typed version of an `EventEmitter`. A `TypedEventEmitter` takes type
 * parameters for mappings of event names to event data types, and strictly
 * types method calls to the `EventEmitter` according to these event maps.
 *
 * @typeParam ListenEvents - `EventsMap` of user-defined events that can be
 * listened to with `on` or `once`
 * @typeParam EmitEvents - `EventsMap` of user-defined events that can be
 * emitted with `emit`
 * @typeParam ReservedEvents - `EventsMap` of reserved events, that can be
 * emitted by socket.io with `emitReserved`, and can be listened to with
 * `listen`.
 */


var StrictEventEmitter = /*#__PURE__*/function (_Emitter) {
  _inherits(StrictEventEmitter, _Emitter);

  var _super = _createSuper(StrictEventEmitter);

  function StrictEventEmitter() {
    _classCallCheck(this, StrictEventEmitter);

    return _super.apply(this, arguments);
  }

  _createClass(StrictEventEmitter, [{
    key: "on",
    value:
    /**
     * Adds the `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */
    function on(ev, listener) {
      _get(_getPrototypeOf(StrictEventEmitter.prototype), "on", this).call(this, ev, listener);

      return this;
    }
    /**
     * Adds a one-time `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */

  }, {
    key: "once",
    value: function once(ev, listener) {
      _get(_getPrototypeOf(StrictEventEmitter.prototype), "once", this).call(this, ev, listener);

      return this;
    }
    /**
     * Emits an event.
     *
     * @param ev Name of the event
     * @param args Values to send to listeners of this event
     */

  }, {
    key: "emit",
    value: function emit(ev) {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_get2 = _get(_getPrototypeOf(StrictEventEmitter.prototype), "emit", this)).call.apply(_get2, [this, ev].concat(args));

      return this;
    }
    /**
     * Emits a reserved event.
     *
     * This method is `protected`, so that only a class extending
     * `StrictEventEmitter` can emit its own reserved events.
     *
     * @param ev Reserved event name
     * @param args Arguments to emit along with the event
     */

  }, {
    key: "emitReserved",
    value: function emitReserved(ev) {
      var _get3;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      (_get3 = _get(_getPrototypeOf(StrictEventEmitter.prototype), "emit", this)).call.apply(_get3, [this, ev].concat(args));

      return this;
    }
    /**
     * Returns the listeners listening to an event.
     *
     * @param event Event name
     * @returns Array of listeners subscribed to `event`
     */

  }, {
    key: "listeners",
    value: function listeners(event) {
      return _get(_getPrototypeOf(StrictEventEmitter.prototype), "listeners", this).call(this, event);
    }
  }]);

  return StrictEventEmitter;
}(Emitter);

exports.StrictEventEmitter = StrictEventEmitter;
},{"component-emitter":"node_modules/component-emitter/index.js"}],"node_modules/socket.io-client/build/socket.js":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Socket = void 0;

var socket_io_parser_1 = require("socket.io-parser");

var on_1 = require("./on");

var typed_events_1 = require("./typed-events");

var debug = require("debug")("socket.io-client:socket");
/**
 * Internal events.
 * These events can't be emitted by the user.
 */


var RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});

var Socket = /*#__PURE__*/function (_typed_events_1$Stric) {
  _inherits(Socket, _typed_events_1$Stric);

  var _super = _createSuper(Socket);

  /**
   * `Socket` constructor.
   *
   * @public
   */
  function Socket(io, nsp, opts) {
    var _this;

    _classCallCheck(this, Socket);

    _this = _super.call(this);
    _this.connected = false;
    _this.disconnected = true;
    _this.receiveBuffer = [];
    _this.sendBuffer = [];
    _this.ids = 0;
    _this.acks = {};
    _this.flags = {};
    _this.io = io;
    _this.nsp = nsp;

    if (opts && opts.auth) {
      _this.auth = opts.auth;
    }

    if (_this.io._autoConnect) _this.open();
    return _this;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */


  _createClass(Socket, [{
    key: "subEvents",
    value: function subEvents() {
      if (this.subs) return;
      var io = this.io;
      this.subs = [(0, on_1.on)(io, "open", this.onopen.bind(this)), (0, on_1.on)(io, "packet", this.onpacket.bind(this)), (0, on_1.on)(io, "error", this.onerror.bind(this)), (0, on_1.on)(io, "close", this.onclose.bind(this))];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects
     */

  }, {
    key: "active",
    get: function get() {
      return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @public
     */

  }, {
    key: "connect",
    value: function connect() {
      if (this.connected) return this;
      this.subEvents();
      if (!this.io["_reconnecting"]) this.io.open(); // ensure open

      if ("open" === this.io._readyState) this.onopen();
      return this;
    }
    /**
     * Alias for connect()
     */

  }, {
    key: "open",
    value: function open() {
      return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * @return self
     * @public
     */

  }, {
    key: "send",
    value: function send() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args.unshift("message");
      this.emit.apply(this, args);
      return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @return self
     * @public
     */

  }, {
    key: "emit",
    value: function emit(ev) {
      if (RESERVED_EVENTS.hasOwnProperty(ev)) {
        throw new Error('"' + ev + '" is a reserved event name');
      }

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      args.unshift(ev);
      var packet = {
        type: socket_io_parser_1.PacketType.EVENT,
        data: args
      };
      packet.options = {};
      packet.options.compress = this.flags.compress !== false; // event ack callback

      if ("function" === typeof args[args.length - 1]) {
        debug("emitting packet with ack id %d", this.ids);
        this.acks[this.ids] = args.pop();
        packet.id = this.ids++;
      }

      var isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
      var discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);

      if (discardPacket) {
        debug("discard packet as the transport is not currently writable");
      } else if (this.connected) {
        this.packet(packet);
      } else {
        this.sendBuffer.push(packet);
      }

      this.flags = {};
      return this;
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */

  }, {
    key: "packet",
    value: function packet(_packet) {
      _packet.nsp = this.nsp;

      this.io._packet(_packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */

  }, {
    key: "onopen",
    value: function onopen() {
      var _this2 = this;

      debug("transport is open - connecting");

      if (typeof this.auth == "function") {
        this.auth(function (data) {
          _this2.packet({
            type: socket_io_parser_1.PacketType.CONNECT,
            data: data
          });
        });
      } else {
        this.packet({
          type: socket_io_parser_1.PacketType.CONNECT,
          data: this.auth
        });
      }
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */

  }, {
    key: "onerror",
    value: function onerror(err) {
      if (!this.connected) {
        this.emitReserved("connect_error", err);
      }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @private
     */

  }, {
    key: "onclose",
    value: function onclose(reason) {
      debug("close (%s)", reason);
      this.connected = false;
      this.disconnected = true;
      delete this.id;
      this.emitReserved("disconnect", reason);
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */

  }, {
    key: "onpacket",
    value: function onpacket(packet) {
      var sameNamespace = packet.nsp === this.nsp;
      if (!sameNamespace) return;

      switch (packet.type) {
        case socket_io_parser_1.PacketType.CONNECT:
          if (packet.data && packet.data.sid) {
            var id = packet.data.sid;
            this.onconnect(id);
          } else {
            this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          }

          break;

        case socket_io_parser_1.PacketType.EVENT:
          this.onevent(packet);
          break;

        case socket_io_parser_1.PacketType.BINARY_EVENT:
          this.onevent(packet);
          break;

        case socket_io_parser_1.PacketType.ACK:
          this.onack(packet);
          break;

        case socket_io_parser_1.PacketType.BINARY_ACK:
          this.onack(packet);
          break;

        case socket_io_parser_1.PacketType.DISCONNECT:
          this.ondisconnect();
          break;

        case socket_io_parser_1.PacketType.CONNECT_ERROR:
          var err = new Error(packet.data.message); // @ts-ignore

          err.data = packet.data.data;
          this.emitReserved("connect_error", err);
          break;
      }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */

  }, {
    key: "onevent",
    value: function onevent(packet) {
      var args = packet.data || [];
      debug("emitting event %j", args);

      if (null != packet.id) {
        debug("attaching ack callback to event");
        args.push(this.ack(packet.id));
      }

      if (this.connected) {
        this.emitEvent(args);
      } else {
        this.receiveBuffer.push(Object.freeze(args));
      }
    }
  }, {
    key: "emitEvent",
    value: function emitEvent(args) {
      if (this._anyListeners && this._anyListeners.length) {
        var listeners = this._anyListeners.slice();

        var _iterator = _createForOfIteratorHelper(listeners),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var listener = _step.value;
            listener.apply(this, args);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      _get(_getPrototypeOf(Socket.prototype), "emit", this).apply(this, args);
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */

  }, {
    key: "ack",
    value: function ack(id) {
      var self = this;
      var sent = false;
      return function () {
        // prevent double callbacks
        if (sent) return;
        sent = true;

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        debug("sending ack %j", args);
        self.packet({
          type: socket_io_parser_1.PacketType.ACK,
          id: id,
          data: args
        });
      };
    }
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */

  }, {
    key: "onack",
    value: function onack(packet) {
      var ack = this.acks[packet.id];

      if ("function" === typeof ack) {
        debug("calling ack %s with %j", packet.id, packet.data);
        ack.apply(this, packet.data);
        delete this.acks[packet.id];
      } else {
        debug("bad ack %s", packet.id);
      }
    }
    /**
     * Called upon server connect.
     *
     * @private
     */

  }, {
    key: "onconnect",
    value: function onconnect(id) {
      debug("socket connected with id %s", id);
      this.id = id;
      this.connected = true;
      this.disconnected = false;
      this.emitBuffered();
      this.emitReserved("connect");
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */

  }, {
    key: "emitBuffered",
    value: function emitBuffered() {
      var _this3 = this;

      this.receiveBuffer.forEach(function (args) {
        return _this3.emitEvent(args);
      });
      this.receiveBuffer = [];
      this.sendBuffer.forEach(function (packet) {
        return _this3.packet(packet);
      });
      this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */

  }, {
    key: "ondisconnect",
    value: function ondisconnect() {
      debug("server disconnect (%s)", this.nsp);
      this.destroy();
      this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (this.subs) {
        // clean subscriptions to avoid reconnections
        this.subs.forEach(function (subDestroy) {
          return subDestroy();
        });
        this.subs = undefined;
      }

      this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually.
     *
     * @return self
     * @public
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.connected) {
        debug("performing disconnect (%s)", this.nsp);
        this.packet({
          type: socket_io_parser_1.PacketType.DISCONNECT
        });
      } // remove socket from pool


      this.destroy();

      if (this.connected) {
        // fire events
        this.onclose("io client disconnect");
      }

      return this;
    }
    /**
     * Alias for disconnect()
     *
     * @return self
     * @public
     */

  }, {
    key: "close",
    value: function close() {
      return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     * @public
     */

  }, {
    key: "compress",
    value: function compress(_compress) {
      this.flags.compress = _compress;
      return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @returns self
     * @public
     */

  }, {
    key: "volatile",
    get: function get() {
      this.flags.volatile = true;
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @param listener
     * @public
     */

  }, {
    key: "onAny",
    value: function onAny(listener) {
      this._anyListeners = this._anyListeners || [];

      this._anyListeners.push(listener);

      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     * @public
     */

  }, {
    key: "prependAny",
    value: function prependAny(listener) {
      this._anyListeners = this._anyListeners || [];

      this._anyListeners.unshift(listener);

      return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param listener
     * @public
     */

  }, {
    key: "offAny",
    value: function offAny(listener) {
      if (!this._anyListeners) {
        return this;
      }

      if (listener) {
        var listeners = this._anyListeners;

        for (var i = 0; i < listeners.length; i++) {
          if (listener === listeners[i]) {
            listeners.splice(i, 1);
            return this;
          }
        }
      } else {
        this._anyListeners = [];
      }

      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     *
     * @public
     */

  }, {
    key: "listenersAny",
    value: function listenersAny() {
      return this._anyListeners || [];
    }
  }]);

  return Socket;
}(typed_events_1.StrictEventEmitter);

exports.Socket = Socket;
},{"socket.io-parser":"node_modules/socket.io-parser/dist/index.js","./on":"node_modules/socket.io-client/build/on.js","./typed-events":"node_modules/socket.io-client/build/typed-events.js","debug":"node_modules/debug/src/browser.js"}],"node_modules/backo2/index.js":[function(require,module,exports) {

/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};


},{}],"node_modules/socket.io-client/build/manager.js":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Manager = void 0;

var eio = require("engine.io-client");

var util_1 = require("engine.io-client/lib/util");

var socket_1 = require("./socket");

var parser = require("socket.io-parser");

var on_1 = require("./on");

var Backoff = require("backo2");

var typed_events_1 = require("./typed-events");

var debug = require("debug")("socket.io-client:manager");

var Manager = /*#__PURE__*/function (_typed_events_1$Stric) {
  _inherits(Manager, _typed_events_1$Stric);

  var _super = _createSuper(Manager);

  function Manager(uri, opts) {
    var _this;

    _classCallCheck(this, Manager);

    var _a;

    _this = _super.call(this);
    _this.nsps = {};
    _this.subs = [];

    if (uri && "object" === _typeof(uri)) {
      opts = uri;
      uri = undefined;
    }

    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    _this.opts = opts;
    (0, util_1.installTimerFunctions)(_assertThisInitialized(_this), opts);

    _this.reconnection(opts.reconnection !== false);

    _this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);

    _this.reconnectionDelay(opts.reconnectionDelay || 1000);

    _this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);

    _this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);

    _this.backoff = new Backoff({
      min: _this.reconnectionDelay(),
      max: _this.reconnectionDelayMax(),
      jitter: _this.randomizationFactor()
    });

    _this.timeout(null == opts.timeout ? 20000 : opts.timeout);

    _this._readyState = "closed";
    _this.uri = uri;

    var _parser = opts.parser || parser;

    _this.encoder = new _parser.Encoder();
    _this.decoder = new _parser.Decoder();
    _this._autoConnect = opts.autoConnect !== false;
    if (_this._autoConnect) _this.open();
    return _this;
  }

  _createClass(Manager, [{
    key: "reconnection",
    value: function reconnection(v) {
      if (!arguments.length) return this._reconnection;
      this._reconnection = !!v;
      return this;
    }
  }, {
    key: "reconnectionAttempts",
    value: function reconnectionAttempts(v) {
      if (v === undefined) return this._reconnectionAttempts;
      this._reconnectionAttempts = v;
      return this;
    }
  }, {
    key: "reconnectionDelay",
    value: function reconnectionDelay(v) {
      var _a;

      if (v === undefined) return this._reconnectionDelay;
      this._reconnectionDelay = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
      return this;
    }
  }, {
    key: "randomizationFactor",
    value: function randomizationFactor(v) {
      var _a;

      if (v === undefined) return this._randomizationFactor;
      this._randomizationFactor = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
      return this;
    }
  }, {
    key: "reconnectionDelayMax",
    value: function reconnectionDelayMax(v) {
      var _a;

      if (v === undefined) return this._reconnectionDelayMax;
      this._reconnectionDelayMax = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
      return this;
    }
  }, {
    key: "timeout",
    value: function timeout(v) {
      if (!arguments.length) return this._timeout;
      this._timeout = v;
      return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */

  }, {
    key: "maybeReconnectOnOpen",
    value: function maybeReconnectOnOpen() {
      // Only try to reconnect if it's the first time we're connecting
      if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
        // keeps reconnection from firing twice for the same reconnection loop
        this.reconnect();
      }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */

  }, {
    key: "open",
    value: function open(fn) {
      var _this2 = this;

      debug("readyState %s", this._readyState);
      if (~this._readyState.indexOf("open")) return this;
      debug("opening %s", this.uri);
      this.engine = eio(this.uri, this.opts);
      var socket = this.engine;
      var self = this;
      this._readyState = "opening";
      this.skipReconnect = false; // emit `open`

      var openSubDestroy = (0, on_1.on)(socket, "open", function () {
        self.onopen();
        fn && fn();
      }); // emit `error`

      var errorSub = (0, on_1.on)(socket, "error", function (err) {
        debug("error");
        self.cleanup();
        self._readyState = "closed";

        _this2.emitReserved("error", err);

        if (fn) {
          fn(err);
        } else {
          // Only do this if there is no fn to handle the error
          self.maybeReconnectOnOpen();
        }
      });

      if (false !== this._timeout) {
        var timeout = this._timeout;
        debug("connect attempt will timeout after %d", timeout);

        if (timeout === 0) {
          openSubDestroy(); // prevents a race condition with the 'open' event
        } // set timer


        var timer = this.setTimeoutFn(function () {
          debug("connect attempt timed out after %d", timeout);
          openSubDestroy();
          socket.close();
          socket.emit("error", new Error("timeout"));
        }, timeout);

        if (this.opts.autoUnref) {
          timer.unref();
        }

        this.subs.push(function subDestroy() {
          clearTimeout(timer);
        });
      }

      this.subs.push(openSubDestroy);
      this.subs.push(errorSub);
      return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */

  }, {
    key: "connect",
    value: function connect(fn) {
      return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */

  }, {
    key: "onopen",
    value: function onopen() {
      debug("open"); // clear old subs

      this.cleanup(); // mark as open

      this._readyState = "open";
      this.emitReserved("open"); // add new subs

      var socket = this.engine;
      this.subs.push((0, on_1.on)(socket, "ping", this.onping.bind(this)), (0, on_1.on)(socket, "data", this.ondata.bind(this)), (0, on_1.on)(socket, "error", this.onerror.bind(this)), (0, on_1.on)(socket, "close", this.onclose.bind(this)), (0, on_1.on)(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */

  }, {
    key: "onping",
    value: function onping() {
      this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */

  }, {
    key: "ondata",
    value: function ondata(data) {
      this.decoder.add(data);
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */

  }, {
    key: "ondecoded",
    value: function ondecoded(packet) {
      this.emitReserved("packet", packet);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */

  }, {
    key: "onerror",
    value: function onerror(err) {
      debug("error", err);
      this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */

  }, {
    key: "socket",
    value: function socket(nsp, opts) {
      var socket = this.nsps[nsp];

      if (!socket) {
        socket = new socket_1.Socket(this, nsp, opts);
        this.nsps[nsp] = socket;
      }

      return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */

  }, {
    key: "_destroy",
    value: function _destroy(socket) {
      var nsps = Object.keys(this.nsps);

      for (var _i = 0, _nsps = nsps; _i < _nsps.length; _i++) {
        var nsp = _nsps[_i];
        var _socket = this.nsps[nsp];

        if (_socket.active) {
          debug("socket %s is still active, skipping close", nsp);
          return;
        }
      }

      this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */

  }, {
    key: "_packet",
    value: function _packet(packet) {
      debug("writing packet %j", packet);
      var encodedPackets = this.encoder.encode(packet);

      for (var i = 0; i < encodedPackets.length; i++) {
        this.engine.write(encodedPackets[i], packet.options);
      }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */

  }, {
    key: "cleanup",
    value: function cleanup() {
      debug("cleanup");
      this.subs.forEach(function (subDestroy) {
        return subDestroy();
      });
      this.subs.length = 0;
      this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */

  }, {
    key: "_close",
    value: function _close() {
      debug("disconnect");
      this.skipReconnect = true;
      this._reconnecting = false;

      if ("opening" === this._readyState) {
        // `onclose` will not fire because
        // an open event never happened
        this.cleanup();
      }

      this.backoff.reset();
      this._readyState = "closed";
      if (this.engine) this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */

  }, {
    key: "onclose",
    value: function onclose(reason) {
      debug("onclose");
      this.cleanup();
      this.backoff.reset();
      this._readyState = "closed";
      this.emitReserved("close", reason);

      if (this._reconnection && !this.skipReconnect) {
        this.reconnect();
      }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */

  }, {
    key: "reconnect",
    value: function reconnect() {
      var _this3 = this;

      if (this._reconnecting || this.skipReconnect) return this;
      var self = this;

      if (this.backoff.attempts >= this._reconnectionAttempts) {
        debug("reconnect failed");
        this.backoff.reset();
        this.emitReserved("reconnect_failed");
        this._reconnecting = false;
      } else {
        var delay = this.backoff.duration();
        debug("will wait %dms before reconnect attempt", delay);
        this._reconnecting = true;
        var timer = this.setTimeoutFn(function () {
          if (self.skipReconnect) return;
          debug("attempting reconnect");

          _this3.emitReserved("reconnect_attempt", self.backoff.attempts); // check again for the case socket closed in above events


          if (self.skipReconnect) return;
          self.open(function (err) {
            if (err) {
              debug("reconnect attempt error");
              self._reconnecting = false;
              self.reconnect();

              _this3.emitReserved("reconnect_error", err);
            } else {
              debug("reconnect success");
              self.onreconnect();
            }
          });
        }, delay);

        if (this.opts.autoUnref) {
          timer.unref();
        }

        this.subs.push(function subDestroy() {
          clearTimeout(timer);
        });
      }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */

  }, {
    key: "onreconnect",
    value: function onreconnect() {
      var attempt = this.backoff.attempts;
      this._reconnecting = false;
      this.backoff.reset();
      this.emitReserved("reconnect", attempt);
    }
  }]);

  return Manager;
}(typed_events_1.StrictEventEmitter);

exports.Manager = Manager;
},{"engine.io-client":"node_modules/engine.io-client/lib/index.js","engine.io-client/lib/util":"node_modules/engine.io-client/lib/util.js","./socket":"node_modules/socket.io-client/build/socket.js","socket.io-parser":"node_modules/socket.io-parser/dist/index.js","./on":"node_modules/socket.io-client/build/on.js","backo2":"node_modules/backo2/index.js","./typed-events":"node_modules/socket.io-client/build/typed-events.js","debug":"node_modules/debug/src/browser.js"}],"node_modules/socket.io-client/build/index.js":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.io = exports.Socket = exports.Manager = exports.protocol = void 0;

var url_1 = require("./url");

var manager_1 = require("./manager");

var debug = require("debug")("socket.io-client");
/**
 * Module exports.
 */


module.exports = exports = lookup;
/**
 * Managers cache.
 */

var cache = exports.managers = {};

function lookup(uri, opts) {
  if (_typeof(uri) === "object") {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};
  var parsed = (0, url_1.url)(uri, opts.path || "/socket.io");
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id]["nsps"];
  var newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  var io;

  if (newConnection) {
    debug("ignoring socket cache for %s", source);
    io = new manager_1.Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug("new io instance for %s", source);
      cache[id] = new manager_1.Manager(source, opts);
    }

    io = cache[id];
  }

  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }

  return io.socket(parsed.path, opts);
}

exports.io = lookup;
/**
 * Protocol version.
 *
 * @public
 */

var socket_io_parser_1 = require("socket.io-parser");

Object.defineProperty(exports, "protocol", {
  enumerable: true,
  get: function get() {
    return socket_io_parser_1.protocol;
  }
});
/**
 * `connect`.
 *
 * @param {String} uri
 * @public
 */

exports.connect = lookup;
/**
 * Expose constructors for standalone build.
 *
 * @public
 */

var manager_2 = require("./manager");

Object.defineProperty(exports, "Manager", {
  enumerable: true,
  get: function get() {
    return manager_2.Manager;
  }
});

var socket_1 = require("./socket");

Object.defineProperty(exports, "Socket", {
  enumerable: true,
  get: function get() {
    return socket_1.Socket;
  }
});
exports.default = lookup;
},{"./url":"node_modules/socket.io-client/build/url.js","./manager":"node_modules/socket.io-client/build/manager.js","debug":"node_modules/debug/src/browser.js","socket.io-parser":"node_modules/socket.io-parser/dist/index.js","./socket":"node_modules/socket.io-client/build/socket.js"}],"client.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var peerjs_1 = __importDefault(require("peerjs"));

require("regenerator-runtime/runtime");

var socket_io_client_1 = require("socket.io-client");

var socket = (0, socket_io_client_1.io)(location.origin, {// transports: ['websocket'],
});
socket.on('connect', function () {
  console.log('connect socket');
});
var peer = new peerjs_1.default();
var ready_stream;
var body = document.querySelector('body');
var width = 200;
var height = 150;
var remoteUserPeerId = ''; //add new video item stream (self or remote)

var setUpVideoStream = function setUpVideoStream(stream) {
  var video = document.createElement('video');
  video.width = width;
  video.height = height;
  body.appendChild(video);
  video.srcObject = stream;
  video.play();
}; //new user handler


var setUpNewUserHandler = function setUpNewUserHandler() {
  socket.on('new_user', function (peerId) {
    remoteUserPeerId = peerId;
    console.log(peerId, 'new_user', 'my stream=', ready_stream);
    var call = peer.call(peerId, ready_stream);
    call.on('stream', function (remoteStream) {
      // Show stream in some video/canvas element.
      console.log(remoteStream, 'remoteStream 1');
      setUpVideoStream(remoteStream);
    });
  });
};

setUpNewUserHandler(); //call if need connect to other

var emitLoginMe = function emitLoginMe() {
  socket.emit('login', peer.id);
  console.log('peer.id login emitted', peer.id);
};

var setUpLoginButton = function setUpLoginButton() {
  var btn = document.createElement('button');
  btn.innerText = 'Login';

  btn.onclick = function () {
    emitLoginMe();
  };

  body.appendChild(btn);
};

setUpLoginButton();

var startApp = function startApp() {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var getMediaStream;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            getMediaStream = function getMediaStream() {
              return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", new Promise(function (ok) {
                          var _a; //@ts-ignore


                          //@ts-ignore
                          var getUserMedia = (navigator === null || navigator === void 0 ? void 0 : navigator.getUserMedia) || ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.mediaDevices) === null || _a === void 0 ? void 0 : _a.getUserMedia) || (navigator === null || navigator === void 0 ? void 0 : navigator.getUserMedia) || (navigator === null || navigator === void 0 ? void 0 : navigator.webkitGetUserMedia) || (navigator === null || navigator === void 0 ? void 0 : navigator.mozGetUserMedia) || (navigator === null || navigator === void 0 ? void 0 : navigator.msGetUserMedia);
                          getUserMedia({
                            video: true,
                            audio: false
                          }, function (stream) {
                            ok(stream);
                          });
                        }));

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
            };

            getMediaStream().then(function (stream) {
              ready_stream = stream;
              setUpVideoStream(stream);
            });
            peer.on('call', function (call) {
              call.answer(ready_stream); // Answer the call with an A/V stream.

              call.on('stream', function (remoteStream) {
                console.log(remoteStream, 'remoteStream 2');
                setUpVideoStream(remoteStream);
              });
            });

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
};

startApp();
},{"peerjs":"node_modules/peerjs/dist/peerjs.min.js","regenerator-runtime/runtime":"node_modules/regenerator-runtime/runtime.js","socket.io-client":"node_modules/socket.io-client/build/index.js"}],"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59689" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","client.ts"], null)
//# sourceMappingURL=/client.js.map