/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  }; // import a list of modules into the list

  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/bnoEndpoints/getAccessToken.js":
/*!********************************************!*\
  !*** ./src/bnoEndpoints/getAccessToken.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAccessToken": () => (/* binding */ getAccessToken)
/* harmony export */ });
var getAccessToken = function getAccessToken() {
  return fetch('/BnOApi/getToken/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }).then(function (x) {
    return x.json();
  }).then(function (x) {
    var accessToken = x.access_token;
    sessionStorage.setItem('accessToken', accessToken);
    return x.access_token;
  })["catch"](function (error) {
    console.log({
      description: "Get access token error",
      error: error.message
    });
    window.location = 'https://www.bang-olufsen.com/es/mx/cart';
  });
};

/***/ }),

/***/ "./src/bnoEndpoints/getCart.js":
/*!*************************************!*\
  !*** ./src/bnoEndpoints/getCart.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCart": () => (/* binding */ getCart)
/* harmony export */ });
/* harmony import */ var _getAccessToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAccessToken */ "./src/bnoEndpoints/getAccessToken.js");
/* harmony import */ var _utils_compareProducts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/compareProducts */ "./src/utils/compareProducts.js");
/* harmony import */ var _utils_removeLoadingSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/removeLoadingSpinner */ "./src/utils/removeLoadingSpinner.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var getCart = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _urlParams$get;
    var queryString, urlParams, cartId, accessToken;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            queryString = window.location.search;
            urlParams = new URLSearchParams(queryString);
            cartId = ((_urlParams$get = urlParams.get('cartId')) === null || _urlParams$get === void 0 ? void 0 : _urlParams$get.replace('/', '')) || null;
            if (cartId) {
              _context.next = 7;
              break;
            }
            if (sessionStorage.getItem('bnoItems')) {
              (0,_utils_compareProducts__WEBPACK_IMPORTED_MODULE_1__.compareProducts)();
            } else {
              console.log('No removed items for payments testing');
              // vtexjs.checkout.removeAllItems()
            }

            window.location.hash = '#/profile';
            return _context.abrupt("return", (0,_utils_removeLoadingSpinner__WEBPACK_IMPORTED_MODULE_2__.removeLoadingSpinner)());
          case 7:
            sessionStorage.setItem('cartId', cartId);
            vtexjs.checkout.removeAllItems();
            _context.next = 11;
            return (0,_getAccessToken__WEBPACK_IMPORTED_MODULE_0__.getAccessToken)();
          case 11:
            accessToken = _context.sent;
            fetch("/BnOApi/getCart/".concat(cartId), {
              method: 'GET',
              headers: {
                'X-B&O-API-AccessToken': accessToken
              }
            }).then(function (x) {
              return x.json();
            }).then(function (cart) {
              if (!cart.lineItems) {
                // enviar a carrito vacio
                sessionStorage.removeItem('bnoItems');
                return window.location = 'checkout#/cart';
              }
              var lineItems = cart.lineItems;
              if (!lineItems.length) {
                sessionStorage.removeItem('bnoItems');
                return window.location = 'checkout#/cart';
              }
              var newUrlCart = lineItems.reduce(function (acc, el) {
                return acc.concat("sku=".concat(el.sku, "&qty=").concat(el.quantity, "&seller=1&sc=1&"));
              }, "/checkout/cart/add/?");
              console.log({
                lineItems: lineItems
              });
              return {
                lineItems: lineItems,
                newUrlCart: newUrlCart,
                cartId: cartId
              };
            }).then(function (_ref2) {
              var lineItems = _ref2.lineItems,
                newUrlCart = _ref2.newUrlCart,
                cartId = _ref2.cartId;
              var bnoItems = lineItems.map(function (item) {
                return {
                  CartId: cartId,
                  BNOSkuID: item.sku,
                  BNOSkuName: item.variant.key,
                  BNOPrice: item.price.value.centAmount || item.variant.prices[0].value.centAmount,
                  BNOQuantity: item.quantity
                };
              });
              sessionStorage.setItem('bnoItems', JSON.stringify(bnoItems));
              window.location = newUrlCart;
            })["catch"](function (error) {
              console.log({
                description: "Get cart error",
                error: error.message
              });
              window.location = 'https://www.bang-olufsen.com/es/mx/cart';
            });
          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function getCart() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/bnoEndpoints/updateCart.js":
/*!****************************************!*\
  !*** ./src/bnoEndpoints/updateCart.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateCart": () => (/* binding */ updateCart)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var updateCart = function updateCart(cartId, orderForm, accessToken) {
  var clientProfileData = orderForm.clientProfileData,
    selectedAddresses = orderForm.shippingData.selectedAddresses;
  var _selectedAddresses = _slicedToArray(selectedAddresses, 1),
    selectedAddress = _selectedAddresses[0];
  fetch("/BnOApi/updateCart/".concat(cartId), {
    method: 'POST',
    headers: {
      'X-B&O-API-AccessToken': accessToken
    },
    body: JSON.stringify({
      version: 4,
      actions: [{
        action: 'setShippingAddress',
        address: {
          firstName: (clientProfileData === null || clientProfileData === void 0 ? void 0 : clientProfileData.firstName) || null,
          lastName: (clientProfileData === null || clientProfileData === void 0 ? void 0 : clientProfileData.lastName) || null,
          address1: "".concat((selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.street) || '', " ").concat((selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.number) || ''),
          address2: null,
          city: (selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.city) || null,
          postalCode: (selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.postalCode) || null,
          country: "MX",
          email: (clientProfileData === null || clientProfileData === void 0 ? void 0 : clientProfileData.email) || null,
          phone: (clientProfileData === null || clientProfileData === void 0 ? void 0 : clientProfileData.phone) || null
        }
      }, {
        action: 'setBillingAddress',
        address: {
          firstName: (clientProfileData === null || clientProfileData === void 0 ? void 0 : clientProfileData.firstName) || null,
          lastName: (clientProfileData === null || clientProfileData === void 0 ? void 0 : clientProfileData.lastName) || null,
          address1: "".concat((selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.street) || '', " ").concat((selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.number) || ''),
          address2: null,
          city: (selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.city) || null,
          postalCode: (selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.postalCode) || null,
          country: "MX",
          email: (clientProfileData === null || clientProfileData === void 0 ? void 0 : clientProfileData.email) || null,
          phone: (clientProfileData === null || clientProfileData === void 0 ? void 0 : clientProfileData.phone) || null
        }
      }],
      monthlyNewsletterSubscription: false
    })
  }).then(function (x) {
    return x.json();
  }).then(function (res) {
    console.log('Update Cart Response::', res);
  })["catch"](function (error) {
    console.log({
      description: "Update cart error",
      error: error.message
    });
    throw new Error(error);
  });
};

/***/ }),

/***/ "./src/nodeApp/sendProductLogs.js":
/*!****************************************!*\
  !*** ./src/nodeApp/sendProductLogs.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendProductLogs": () => (/* binding */ sendProductLogs)
/* harmony export */ });
var sendProductLogs = function sendProductLogs(bodies) {
  bodies.length && bodies.map(function (body) {
    try {
      fetch('/logs/', {
        method: 'POST',
        body: JSON.stringify(body)
      });
    } catch (error) {
      console.log({
        description: "Create logs error",
        error: error.message
      });
      throw new Error(error);
    }
  });
};

/***/ }),

/***/ "./src/utils/compareProducts.js":
/*!**************************************!*\
  !*** ./src/utils/compareProducts.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compareProducts": () => (/* binding */ compareProducts)
/* harmony export */ });
/* harmony import */ var _nodeApp_sendProductLogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nodeApp/sendProductLogs */ "./src/nodeApp/sendProductLogs.js");
/* harmony import */ var _vtexAPI_getVtexSkuByProductId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vtexAPI/getVtexSkuByProductId */ "./src/vtexAPI/getVtexSkuByProductId.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var compareProducts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var vtexProducts, _yield$vtexjs$checkou, items, vtexItemsPromise, vtexItems, bnoItems, combinedItems, differentItems;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            vtexProducts = [];
            _context.prev = 1;
            _context.next = 4;
            return vtexjs.checkout.getOrderForm();
          case 4:
            _yield$vtexjs$checkou = _context.sent;
            items = _yield$vtexjs$checkou.items;
            vtexProducts.push.apply(vtexProducts, _toConsumableArray(items.map(function (item) {
              return {
                productId: item.productId,
                skuId: item.id
              };
            })));
            _context.next = 13;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log({
              description: "Get orderForm error",
              error: _context.t0.message
            });
            throw new Error(_context.t0);
          case 13:
            if (vtexProducts.length) {
              _context.next = 15;
              break;
            }
            return _context.abrupt("return");
          case 15:
            vtexItemsPromise = vtexProducts.map(function (vtexProduct) {
              return (0,_vtexAPI_getVtexSkuByProductId__WEBPACK_IMPORTED_MODULE_1__.getVtexSkuByProductId)(vtexProduct.productId, vtexProduct.skuId);
            });
            _context.next = 18;
            return Promise.all(vtexItemsPromise);
          case 18:
            vtexItems = _context.sent;
            console.log({
              vtexItems: vtexItems
            });
            if (sessionStorage.getItem('bnoItems')) {
              _context.next = 22;
              break;
            }
            return _context.abrupt("return");
          case 22:
            bnoItems = JSON.parse(sessionStorage.getItem('bnoItems'));
            combinedItems = vtexItems.map(function (item, i) {
              return _objectSpread(_objectSpread(_objectSpread({}, bnoItems[i]), item), {}, {
                DateTime: new Date()
              });
            });
            differentItems = combinedItems.filter(function (item) {
              return item.BNOPrice !== item.VTEXPrice || item.BNOQuantity !== item.VTEXQuantity;
            });
            (0,_nodeApp_sendProductLogs__WEBPACK_IMPORTED_MODULE_0__.sendProductLogs)(differentItems);
          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));
  return function compareProducts() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/utils/removeLinks.js":
/*!**********************************!*\
  !*** ./src/utils/removeLinks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeLinks": () => (/* binding */ removeLinks)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var removeLinks = function removeLinks() {
  var _document, _document2;
  var imageLinks = ((_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.table.cart-items .product-image a')) || [];
  var pNameLinks = ((_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelectorAll('.table.cart-items .product-name a')) || [];
  if (imageLinks.length && pNameLinks.length) {
    var pdpLinks = [].concat(_toConsumableArray(imageLinks), _toConsumableArray(pNameLinks));
    console.log({
      pdpLinks: pdpLinks
    });
    pdpLinks.forEach(function (link) {
      link.setAttribute('href', 'javascript:(0)');
      link.style.cursor = 'default';
    });
  }
};

/***/ }),

/***/ "./src/utils/removeLoadingSpinner.js":
/*!*******************************************!*\
  !*** ./src/utils/removeLoadingSpinner.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeLoadingSpinner": () => (/* binding */ removeLoadingSpinner)
/* harmony export */ });
var removeLoadingSpinner = function removeLoadingSpinner() {
  document.querySelector('.checkout-container').style.display = 'block';
  document.querySelector('.loading2').style.display = 'none';
};

/***/ }),

/***/ "./src/vtexAPI/getVtexSkuByProductId.js":
/*!**********************************************!*\
  !*** ./src/vtexAPI/getVtexSkuByProductId.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getVtexSkuByProductId": () => (/* binding */ getVtexSkuByProductId)
/* harmony export */ });
var getVtexSkuByProductId = function getVtexSkuByProductId(productId, skuId) {
  return fetch("/vtex/catalog/skus/".concat(skuId, "/").concat(productId)).then(function (x) {
    return x.json();
  })["catch"](function (error) {
    console.log({
      description: "Get productId: ".concat(productId, " error"),
      error: error.message
    });
    throw new Error(error);
  });
};

/***/ }),

/***/ "./src/vtexAPI/putCartIdInOrderForm.js":
/*!*********************************************!*\
  !*** ./src/vtexAPI/putCartIdInOrderForm.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "putCartIdInOrderForm": () => (/* binding */ putCartIdInOrderForm)
/* harmony export */ });
var putCartIdInOrderForm = function putCartIdInOrderForm(cartId, orderFormId) {
  return fetch("/vtex/custom-order-form/".concat(orderFormId), {
    method: "PUT",
    body: JSON.stringify({
      cartId: cartId
    })
  }).then(function (x) {
    return x.json();
  })["catch"](function (error) {
    console.log({
      description: "Put cart id in the order form error",
      error: error.message
    });
    throw new Error(error);
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cloud.typography.com/6462894/7475632/css/fonts.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@200&family=Permanent+Marker&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* @import url('https://bangmx.vteximg.com.br/arquivos/beosupreme.css'); */\n\nbody {\n  background-color: #fff;\n  font-family: 'BeoSupreme', 'Lexend Deca', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  color: #000;\n  font-style: normal;\n  font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: normal;\n  font-variant-east-asian: normal;\n  font-stretch: normal;\n  font-family: BeoSupreme, \"Lexend Deca\", Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  letter-spacing: 2px;\n  /* font-size: 1.375rem; */\n  /* line-height: 1.875rem; */\n  /* text-shadow: 1px 0 0 black; */\n}\n\n/* Displays the option to enter a foreign document */\n.document-box {\n  display: none !important;\n}\n\n/* Displays the option to enter an international phone */\n.phone-box {\n  display: none !important;\n}\n\n.bo-header__container {\n  display: flex;\n  align-items: center;\n  height: 60px;\n  padding: 0px 36px;\n  background-color: #FEFEFE;\n  box-shadow: 2px -16px 10px 16px rgba(0, 0, 0, 0.43);\n  -webkit-box-shadow: 2px -16px 10px 16px rgba(0, 0, 0, 0.43);\n  -moz-box-shadow: 2px -16px 10px 16px rgba(0, 0, 0, 0.43);\n}\n\n.bo-header__buttons {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  height: 60px;\n}\n\n.bo-header__logo svg {\n  width: 33px;\n  height: 60px;\n}\n\n.bo-header__logo>div {\n  padding-top: 8px;\n}\n\n.bo-header__buttons>div {\n  margin: 0 15px;\n  padding-top: 10px;\n}\n\n.bo-header__profile svg {\n  width: 15px;\n\n}\n\n.bo-header__store-locator svg {\n  width: 16px;\n\n}\n\n.bo-header__cart svg {\n  width: 21px;\n}\n\n.btn-success,\n.button.checkEmailAuthConflict__modal--button {\n  border-radius: 24px;\n  color: rgb(25, 24, 23);\n  text-align: center;\n  padding: 10px 32px;\n  border-color: rgb(255, 195, 86);\n  background: rgb(255, 195, 86);\n  font-size: 15px;\n  font-weight: 600;\n  margin-top: 20px !important;\n  text-shadow: 1px 0 0 #000;\n  letter-spacing: 2px;\n}\n\n.btn-success:hover,\n.button.checkEmailAuthConflict__modal--button:hover {\n  background: none !important;\n  color: rgb(25, 24, 23) !important;\n  border-color: rgb(235, 232, 229);\n}\n\n.btn-success:disabled,\n.btn-success[disabled] {\n  background-color: rgb(255, 195, 86);\n  border-color: rgb(255, 195, 86);\n  color: #000;\n}\n\n#render-cartman {\n  display: none;\n}\n\n.summary-template-holder {\n  box-shadow: rgb(0 0 0 / 20%) 0px 0px 4px 0px;\n}\n\n.cart-more-options,\n.cart-template-holder .cart {\n  background: none;\n  padding: 0;\n}\n\n.body-cart-vertical .cart-template-holder {\n  order: 1;\n  width: 70%;\n}\n\n.body-cart-vertical .summary-template-holder {\n  width: 30%;\n}\n\n.summary-template-holder tfoot tr td.monetary {\n  color: #000000;\n  font-weight: 400;\n  font-size: 16px;\n  white-space: nowrap;\n}\n\n/* .forms.coupon-column.summary-coupon-wrap.text-center {\n\n  display: none;\n} */\n\n.table.cart-items td.product-image a,\n.table.cart-items td.product-image img {\n  width: auto;\n  display: block;\n  max-width: 55px;\n  height: auto;\n}\n\n.table.cart-items td.quantity .item-quantity-change i {\n  background: none;\n  line-height: 22px;\n  display: inline-block;\n}\n\n.table.cart-items td.quantity .item-quantity-change i:before {\n  font-size: 17px;\n  width: 25px;\n  height: 25px;\n  line-height: 25px;\n  color: #000;\n  border-radius: 100%;\n}\n\n.table.cart-items thead tr th.product {\n  width: calc(100% - 293px) !important;\n}\n\n.table.cart-items thead tr th.quantity {\n  min-width: 93px;\n}\n\n.table.cart-items td.product-image a,\n.table.cart-items td.product-image img {\n  max-width: 100px;\n  width: 100px;\n}\n\n.table.cart-items tr.product-item {\n  background-color: rgb(250, 250, 250);\n  border: none;\n  padding: 20px;\n  margin-top: 5px;\n}\n\n.bo-footer-container {\n  display: flex;\n  justify-content: center;\n}\n\n.bo-footer-feature {\n  width: 33%;\n  padding-top: 27px;\n  border-top: 1px solid rgb(217, 217, 217);\n  max-width: 360px;\n  margin: 0 20px;\n}\n\n.bo-footer-title {\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.bo-footer-text {\n  padding: 35px 0;\n  padding-right: 35px;\n  color: rgb(85, 85, 85);\n}\n\nbody.v-custom-step-profile .client-pre-email h3.client-pre-email-h span:before,\nbody.v-custom-step-shipping .client-pre-email h3.client-pre-email-h span:before,\nbody.v-custom-step-shipping .client-profile-data .accordion-toggle>span:before,\nbody.v-custom-step-payment .client-pre-email h3.client-pre-email-h span:before,\nbody.v-custom-step-payment .client-profile-data .accordion-toggle>span:before,\nbody.v-custom-step-payment .shipping-data .accordion-toggle:before,\nbody.v-custom-step-email .client-pre-email h3.client-pre-email-h span:before,\nbody.v-custom-step-profile .client-profile-data .accordion-toggle>span:before,\nbody.v-custom-step-shipping .shipping-data .accordion-toggle:before,\nbody.v-custom-step-payment .payment-data .accordion-toggle>span:not(.payment-edit-link):before,\nbody.js-vcustom-hideEmailStep .client-profile-data .accordion-toggle>span:before {\n  content: \"1/3\" !important;\n  font-size: 20px;\n  border: none;\n  background: none;\n  font-weight: 400;\n  color: #000000;\n}\n\nbody.js-vcustom-hideEmailStep .shipping-data .accordion-toggle:before {\n  content: \"2/3\" !important;\n  font-size: 20px;\n  border: none;\n  background: none;\n  font-weight: 400;\n  color: #000000;\n}\n\nbody.js-vcustom-hideEmailStep .payment-data .accordion-toggle>span:not(.payment-edit-link):before {\n  content: \"3/3\" !important;\n  font-size: 20px;\n  border: none;\n  background: none;\n  font-weight: 400;\n  color: #000000;\n}\n\n.cart-more-options .srp-container .srp-main-title,\n.client-pre-email h3.client-pre-email-h span:after,\n.orderform-template-holder #client-profile-data form.client-pre-email .accordion-toggle,\n.orderform-template-holder #client-profile-data .step.client-profile-data .accordion-toggle,\n.orderform-template-holder #shipping-data .accordion-toggle,\n.orderform-template-holder #payment-data .accordion-toggle,\n.orderform-template .cart-template.mini-cart h2 {\n  line-height: initial;\n  display: block;\n  text-transform: uppercase;\n  color: rgb(0, 0, 0);\n  font-weight: 400;\n}\n\n.client-notice.notice {\n  display: none;\n}\n\n.orderform-template-holder .step .input.text label,\n.vcustom--vtex-omnishipping-1-x-address label {\n  color: rgb(85, 85, 85);\n  font-size: 0.875rem;\n  letter-spacing: 0.5px;\n  line-height: 1.43;\n  transition: all 0.3s ease 0s;\n  font-weight: 600;\n}\n\n#client-profile-data,\n#shipping-data,\n#payment-data {\n  box-shadow: rgb(0 0 0 / 20%) 0px 0px 4px 0px;\n  position: relative;\n}\n\n#shipping-data {\n  display: flex;\n  flex-direction: column;\n}\n\n.btns-container {\n  order: 1;\n  position: absolute;\n  bottom: -80px;\n  left: 2px;\n  width: 43%;\n  z-index: 2;\n}\n\n#client-profile-data {\n  background-color: #fff;\n  margin-bottom: 20px;\n}\n\n.progress-bar-client-profile-data {\n  height: 2px;\n  /* margin: 0 16px; */\n  background: rgb(255, 195, 86);\n  width: 33.3%;\n}\n\n.progress-bar-shipping-data {\n  height: 2px;\n  /* margin: 0 16px; */\n  background: rgb(255, 195, 86);\n  width: 66.6%;\n}\n\n.progress-bar-payment-data {\n  height: 2px;\n  /* margin: 0 16px; */\n  background: rgb(255, 195, 86);\n  width: 100%;\n}\n\n#payment-data {\n  /* margin: 0 16px; */\n  border-top: solid rgb(255, 195, 86) 5px !important;\n}\n\n#shipping-data .progress-bar {\n  position: absolute;\n  top: 0;\n}\n\n\n.accordion-toggle>span {\n  color: #fff;\n}\n\n#shipping-data span.accordion-toggle {\n  color: #fff !important;\n}\n\n.document-box {\n  display: none;\n}\n\n.box-client-info-pj {\n  display: none;\n}\n\n.newsletter {\n  display: block;\n}\n\n/* xxx */\n.vtex-omnishipping-1-x-addressFormPart1 small {\n  display: none;\n}\n\n.orderform-template-holder #payment-data .v-custom-payment-item-wrap .payment-group-item.active .payment-group-item-text:before {\n  background: black;\n  border-color: #000000;\n  box-shadow: inset 0 0 0 3px #fff;\n}\n\n.orderform-template-holder #payment-data .v-custom-payment-item-wrap .payment-group-item-text:before {\n  border-radius: 0px;\n}\n\n.orderform-template-holder #payment-data .v-custom-payment-item-wrap .payment-group-item.active {\n  background: none;\n  border-bottom: none;\n}\n\n.orderform-template-holder #payment-data .v-custom-payment-item-wrap.active,\n.orderform-template-holder #payment-data .v-custom-payment-item-wrap:hover {\n  box-shadow: none;\n  border: none;\n}\n\n.icon-edit:before {\n  content: \"\\f044\";\n  color: #000000;\n  font-size: 20px;\n}\n\n.summary-template-holder .cart-links-bottom .btn-success {\n  font-weight: 600;\n}\n\n.container.container-main.container-order-form {\n  max-width: unset;\n  margin: 0;\n  width: 100%;\n}\n\ndiv.container.container-main.container-cart {\n  max-width: unset;\n}\n\ndiv.checkout-container {\n  margin: 70px 0px;\n}\n\n.custom-cart-template-wrap {\n  box-shadow: rgb(0 0 0 / 20%) 0px 0px 4px 0px;\n}\n\ntbody.totalizers-list {\n  border: none !important;\n  color: #000;\n  font-weight: 600;\n  text-shadow: 0 0 black;\n}\n\n.summary-template-holder {\n  box-shadow: none !important;\n}\n\n#go-to-cart-button {\n  display: none;\n}\n\n.custom-cart-template-wrap {\n  background: none !important;\n  box-shadow: none;\n}\n\np.submit.btn-submit-wrapper {\n  position: absolute;\n  bottom: -80px;\n  right: 0px;\n  margin: 0;\n}\n\n.row-fluid.orderform-template.span12.active {\n  padding-bottom: 109px;\n}\n\n.accordion-body.collapse.in {\n  position: static;\n}\n\n.headers.checkout {\n  text-align: center;\n  padding-top: 50px;\n}\n\n.header1 {\n  display: flex;\n  justify-content: center;\n}\n\n.header1 h1 {\n  font-size: 12px;\n  margin: 0;\n}\n\n.headers.checkout h2 {\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0;\n  text-shadow: 1px 0 0 #000;\n}\n\n.loading2 {\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.payment-confirmation-loading {\n  font-size: 37px;\n  opacity: 0.5;\n}\n\n.form-title>p {\n  font-size: 14px;\n  letter-spacing: 2px;\n  font-weight: 500;\n  margin-top: 23px;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  box-shadow: 0 0 0 30px white inset !important;\n  -webkit-box-shadow: 0 0 0 30px white inset !important;\n}\n\ninput.input-xlarge {\n  border-radius: 0 !important;\n}\n\np.input.client-email.input,\np.client-first-name.input,\np.client-last-name.input,\np.client-phone.input {\n  width: 100% !important;\n  padding: 30px 0;\n}\n\np.input.client-email label,\np.client-first-name label,\np.client-last-name label,\np.client-phone label {\n  color: #757575;\n  position: absolute;\n  top: 35px;\n  z-index: 7;\n  transition: top 0.3s ease 0s !important;\n  cursor: text;\n}\n\ninput#client-email,\ninput#client-first-name,\ninput#client-last-name,\ninput#client-phone {\n  border: none !important;\n  border-bottom: 1px solid #E1E1E1 !important;\n  border-radius: 0 !important;\n  box-shadow: none;\n  height: 27px;\n  padding: 0 !important;\n  font-size: 16px;\n  color: #000000;\n  font-weight: 600;\n}\n\ninput#client-email:focus,\ninput#client-first-name:focus,\ninput#client-last-name:focus,\ninput#client-phone:focus {\n  box-shadow: none !important;\n}\n\ndiv.custom-cart-template-wrap {\n  padding-top: 0 !important;\n  margin-left: 24px;\n}\n\n.orderform-template .cart-template.mini-cart h2 {\n  font-size: 14px;\n  border-bottom: 3px solid #EEEEEE !important;\n  padding-bottom: 20px !important;\n}\n\n.orderform-template .cart-template.mini-cart .summary-template-holder .summary>.summary-coupon-wrap,\n.orderform-template .cart-template.mini-cart .summary-template-holder .summary-coupon-wrap>.summary-coupon {\n  display: none !important;\n}\n\nspan.product-name {\n  margin-bottom: 8px;\n  color: rgb(85, 85, 85);\n  font-size: 14px;\n  max-width: calc(82% - 35px) !important;\n}\n\n.orderform-template .cart-template.mini-cart .quantity {\n  right: unset;\n  left: 57px;\n  top: 40px;\n  background: none;\n  box-shadow: none;\n  color: #555555;\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.orderform-template .cart-template.mini-cart .quantity:before {\n  content: 'Cantidad '\n\n}\n\ndiv.description {\n  display: block !important;\n}\n\ndiv.description>strong.price {\n  font-size: 14px;\n  color: #000000;\n  margin: 0;\n  padding: 0;\n  font-weight: 500;\n}\n\nul.cart-items img {\n  width: 55px;\n}\n\ntable.table tfoot td.monetary {\n  font-size: 16px !important;\n  color: #000000 !important;\n  font-weight: 600 !important;\n}\n\n.orderform-template .cart-template.mini-cart .summary-totalizers tfoot tr td.info {\n  font-size: 16px !important;\n  font-weight: 600 !important;\n}\n\n.summary-cart-template-holder div.cart {\n  padding: 0;\n}\n\n.mini-cart .cart-items {\n  border-bottom: 3px solid #EEEEEE !important;\n}\n\n.summary-template-holder .accordion-group {\n  border-bottom: 3px solid #EEEEEE !important;\n}\n\n.orderform-template>div.orderform-template-holder {\n  max-width: 690px;\n}\n\n.orderform-template>div.cart-template.mini-cart {\n  max-width: 461px;\n}\n\n.checkout-container>div.orderform-template {\n  justify-content: center;\n}\n\n.orderform-template-holder .step .form-step fieldset p span.help.error {\n  font-size: 0.75rem;\n  letter-spacing: normal;\n  text-align: left;\n  color: rgb(228, 37, 37);\n  margin-top: 2px;\n  white-space: nowrap;\n}\n\ninput.success:not([invalid=\"true\"]) {\n  background-image: url(https://bangmx.vteximg.com.br/arquivos/checkMark.png);\n  background-size: 20px;\n  background-position: right center;\n}\n\n.orderform-template-holder #client-profile-data .step.client-profile-data {\n  margin-bottom: unset !important;\n}\n\n.orderform-template-holder .step.client-profile-data .client-phone:last-child {\n  display: none;\n}\n\n\n.btn-go-to-payment-wrapper {\n  display: flex;\n  justify-content: space-between;\n  justify-content: end;\n  position: absolute;\n  bottom: -80px;\n  right: -3px;\n}\n\nbutton.back-button {\n  order: -1;\n  border-radius: 24px;\n  padding: 10px 32px;\n  background-color: transparent;\n  color: rgb(25, 24, 23);\n  font-size: 18px;\n  font-weight: 400;\n  margin-top: 20px !important;\n  box-shadow: none;\n  outline: none !important;\n  text-shadow: none;\n  border: 2px solid;\n\n  width: 100%;\n  margin: 0;\n  min-width: unset;\n}\n\nbutton.back-button:hover {\n  border-color: rgb(255, 195, 86);\n  background-color: rgb(255, 195, 86);\n}\n\nbutton#btn-go-to-payment {\n  width: 44%;\n  margin: 0;\n  min-width: unset;\n}\n\ndiv#cartLoadedDiv {\n  order: 0;\n}\n\n.table.cart-items thead {\n  display: none;\n}\n\n.table.cart-items tbody tr td.quantity {\n  order: 0;\n  position: absolute;\n  bottom: 0;\n  left: 125px;\n  border: none;\n  margin: 0;\n}\n\n.table.cart-items tbody tr td.product-price {\n  position: absolute;\n  bottom: 0;\n  right: 60px;\n  margin: 0;\n  padding: 0;\n  width: 60px !important;\n  font-size: 16px;\n}\n\ndiv#cartLoadedDiv {\n  max-width: 570px;\n  margin-right: 140px;\n}\n\n.body-cart-vertical .summary-template-holder {\n  max-width: 450px;\n  padding: 0;\n}\n\n.table.cart-items tbody tr td.item-remove {\n  position: absolute;\n  top: -20px;\n  right: -20px;\n}\n\n.body-cart-vertical .cart-template.full-cart.active {\n  justify-content: center;\n}\n\ndiv.title-cart-products>h4 {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 1.875rem;\n  text-shadow: 1px 0 0 #000;\n  color: #000;\n}\n\ndiv.title-cart-summary>h4 {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.875rem;\n  text-shadow: 1px 0 0 #000;\n  color: #000;\n}\n\n.table.cart-items td.product-name a {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.table.cart-items td.product-name a,\n.table.cart-items td.product-name a:hover {\n  font-weight: 600;\n  color: #000;\n  letter-spacing: 0.6px;\n  font-size: 14px;\n}\n\n.table.cart-items td.quantity .item-quantity-change {\n  text-align: center;\n  font-size: 16px;\n}\n\n.table.cart-items td.quantity .item-quantity-change.item-quantity-change-decrement i:before {\n  content: \"-\";\n  line-height: 21px;\n  font-size: 33px;\n  font-weight: 200;\n}\n\n.table.cart-items td.quantity input {\n  background-color: transparent;\n  color: #000000;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.table.cart-items i.icon.icon-remove.item-remove-ico:before {\n  background-image: url(https://bangmx.vteximg.com.br/arquivos/remove-icon.png);\n  background-size: 10px 10px;\n  width: 10px;\n  height: 10px;\n  content: \"\";\n}\n\n@media (min-width: 769px) {\n  .table.cart-items tbody tr td.product-name {\n    width: 100% !important;\n  }\n}\n\n.full-cart .totalizers tfoot td {\n  font-size: 16px;\n  font-weight: 600;\n  color:#000;\n}\n\n.orderform-template .cart-template.mini-cart .cart {\n  max-height: unset;\n}\n\nspan.shipping-date.pull-left {\n  margin-top: 20px;\n}\n\n#cart-coupon-add {\n  border-radius: 24px;\n  text-align: center;\n  border-color: rgb(255, 195, 86);\n  background: rgb(255, 195, 86);\n  color: rgb(25, 24, 23);\n  font-size: 13px;\n  font-weight: 600;\n  min-width: 105px;\n}\n\n#cart-coupon-add:hover {\n  background: none !important;\n  color: rgb(25, 24, 23) !important;\n  border-color: rgb(235, 232, 229);\n}\n\n#cart-coupon {\n  border-radius: 24px;\n}\n\n#force-shipping-fields {\n  color: rgb(85, 85, 85);\n}\n\n/* .client-profile-data::after {\n  border-top: solid;\n  width: 33%;\n} */\n\ninput[type='radio'] {\n  box-sizing: border-box;\n  appearance: none;\n  background: white;\n  outline: 2px solid #333;\n  border: 3px solid white;\n  width: 16px;\n  height: 16px;\n}\n\ninput[type='radio']:checked {\n  background: #333;\n}\n\n.loading .loading-img {\n  height: 94%;\n}\n\n.loading .loading-bg {\n  display: none;\n}\n\n.empty-cart-content {\n  display: block;\n  position: absolute;\n  left: calc(50% - 577px);\n}\n\n@media only screen and (max-width: 768px){\n  .custom-cart-template-wrap {\n    margin-top: 90px;\n  }\n\n  .summary-template-holder {\n    width: 150% !important;\n  }\n}\n\n@media only screen and (max-width: 690px){\n  .table.cart-items td.product-name, .table.cart-items td.quantity {\n    margin-left: 145px !important;\n  }\n\n  .product-item {\n    width: 113% !important;\n  }\n}\n\n@media only screen and (max-width: 618px){\n  .full-cart .cart table tbody tr td.quantity {\n    margin-left: 19px !important;\n  }\n}\n\n@media only screen and (max-width: 540px){\n  .product-item {\n    width: 140% !important;\n  }\n}\n\n@media only screen and (max-width: 424px){\n  .title-cart-products {\n    margin-left: 2rem;\n  }\n}\n\n@media only screen and (max-width: 413px){\n  .btn-success, .button.checkEmailAuthConflict__modal--button, .button.back-button {\n    font-size: 12px;\n  }\n}\n\n@media only screen and (max-width: 376px){\n  .new-product-price {\n    margin-left: 4rem !important;\n  }\n}\n\n.srp-icon-radio-selected path {\n  fill: black !important;\n}\n\n.radio input[type=\"radio\"], .checkbox input[type=\"checkbox\"], #address-toggle-0 {\n  accent-color: black !important;\n}\n\n#shipping-preview-container {\n  display: none;\n}\n\n.ChangeNumberOfPayments.clearfix a {\n  color: black;\n  text-decoration: underline;\n}\n\n.vtex-omnishipping-1-x-svg path {\n  fill: black !important;\n\n}\n\n.forms.coupon-column.summary-coupon-wrap.text-center {\n  display: none;\n}\n\n.summary-template-holder tbody td {\n  color: #000;\n}\n\ntfoot .full-cart .summary-totalizers .monetary {\n  color: #000 !important;\n  font-weight: 600 !important;\n  font-size: 16px !important;\n}\n\n.modal.modal-email-template {\n  background-color: #fff;\n  color: #000;\n}\n\n.modal.modal-email-template #btn-identified-user-button {\n  background-color: rgb(255, 195, 86);\n  border-radius: 24px;\n  color: rgb(25, 24, 23);\n  font-weight: 700;\n  font-size: 19px;\n}\n.modal.modal-email-template #btn-identified-user-button:hover {\n  border-color: rgb(255, 195, 86);\n  background-color: rgb(255, 195, 86);\n}\n\np.client-email.input.text.required + p {\n  display: none !important;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["/* @import url('https://bangmx.vteximg.com.br/arquivos/beosupreme.css'); */\n@import url('https://cloud.typography.com/6462894/7475632/css/fonts.css');\n@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@200&family=Permanent+Marker&display=swap');\n\nbody {\n  background-color: #fff;\n  font-family: 'BeoSupreme', 'Lexend Deca', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  color: #000;\n  font-style: normal;\n  font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: normal;\n  font-variant-east-asian: normal;\n  font-stretch: normal;\n  font-family: BeoSupreme, \"Lexend Deca\", Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  letter-spacing: 2px;\n  /* font-size: 1.375rem; */\n  /* line-height: 1.875rem; */\n  /* text-shadow: 1px 0 0 black; */\n}\n\n/* Displays the option to enter a foreign document */\n.document-box {\n  display: none !important;\n}\n\n/* Displays the option to enter an international phone */\n.phone-box {\n  display: none !important;\n}\n\n.bo-header__container {\n  display: flex;\n  align-items: center;\n  height: 60px;\n  padding: 0px 36px;\n  background-color: #FEFEFE;\n  box-shadow: 2px -16px 10px 16px rgba(0, 0, 0, 0.43);\n  -webkit-box-shadow: 2px -16px 10px 16px rgba(0, 0, 0, 0.43);\n  -moz-box-shadow: 2px -16px 10px 16px rgba(0, 0, 0, 0.43);\n}\n\n.bo-header__buttons {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  height: 60px;\n}\n\n.bo-header__logo svg {\n  width: 33px;\n  height: 60px;\n}\n\n.bo-header__logo>div {\n  padding-top: 8px;\n}\n\n.bo-header__buttons>div {\n  margin: 0 15px;\n  padding-top: 10px;\n}\n\n.bo-header__profile svg {\n  width: 15px;\n\n}\n\n.bo-header__store-locator svg {\n  width: 16px;\n\n}\n\n.bo-header__cart svg {\n  width: 21px;\n}\n\n.btn-success,\n.button.checkEmailAuthConflict__modal--button {\n  border-radius: 24px;\n  color: rgb(25, 24, 23);\n  text-align: center;\n  padding: 10px 32px;\n  border-color: rgb(255, 195, 86);\n  background: rgb(255, 195, 86);\n  font-size: 15px;\n  font-weight: 600;\n  margin-top: 20px !important;\n  text-shadow: 1px 0 0 #000;\n  letter-spacing: 2px;\n}\n\n.btn-success:hover,\n.button.checkEmailAuthConflict__modal--button:hover {\n  background: none !important;\n  color: rgb(25, 24, 23) !important;\n  border-color: rgb(235, 232, 229);\n}\n\n.btn-success:disabled,\n.btn-success[disabled] {\n  background-color: rgb(255, 195, 86);\n  border-color: rgb(255, 195, 86);\n  color: #000;\n}\n\n#render-cartman {\n  display: none;\n}\n\n.summary-template-holder {\n  box-shadow: rgb(0 0 0 / 20%) 0px 0px 4px 0px;\n}\n\n.cart-more-options,\n.cart-template-holder .cart {\n  background: none;\n  padding: 0;\n}\n\n.body-cart-vertical .cart-template-holder {\n  order: 1;\n  width: 70%;\n}\n\n.body-cart-vertical .summary-template-holder {\n  width: 30%;\n}\n\n.summary-template-holder tfoot tr td.monetary {\n  color: #000000;\n  font-weight: 400;\n  font-size: 16px;\n  white-space: nowrap;\n}\n\n/* .forms.coupon-column.summary-coupon-wrap.text-center {\n\n  display: none;\n} */\n\n.table.cart-items td.product-image a,\n.table.cart-items td.product-image img {\n  width: auto;\n  display: block;\n  max-width: 55px;\n  height: auto;\n}\n\n.table.cart-items td.quantity .item-quantity-change i {\n  background: none;\n  line-height: 22px;\n  display: inline-block;\n}\n\n.table.cart-items td.quantity .item-quantity-change i:before {\n  font-size: 17px;\n  width: 25px;\n  height: 25px;\n  line-height: 25px;\n  color: #000;\n  border-radius: 100%;\n}\n\n.table.cart-items thead tr th.product {\n  width: calc(100% - 293px) !important;\n}\n\n.table.cart-items thead tr th.quantity {\n  min-width: 93px;\n}\n\n.table.cart-items td.product-image a,\n.table.cart-items td.product-image img {\n  max-width: 100px;\n  width: 100px;\n}\n\n.table.cart-items tr.product-item {\n  background-color: rgb(250, 250, 250);\n  border: none;\n  padding: 20px;\n  margin-top: 5px;\n}\n\n.bo-footer-container {\n  display: flex;\n  justify-content: center;\n}\n\n.bo-footer-feature {\n  width: 33%;\n  padding-top: 27px;\n  border-top: 1px solid rgb(217, 217, 217);\n  max-width: 360px;\n  margin: 0 20px;\n}\n\n.bo-footer-title {\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.bo-footer-text {\n  padding: 35px 0;\n  padding-right: 35px;\n  color: rgb(85, 85, 85);\n}\n\nbody.v-custom-step-profile .client-pre-email h3.client-pre-email-h span:before,\nbody.v-custom-step-shipping .client-pre-email h3.client-pre-email-h span:before,\nbody.v-custom-step-shipping .client-profile-data .accordion-toggle>span:before,\nbody.v-custom-step-payment .client-pre-email h3.client-pre-email-h span:before,\nbody.v-custom-step-payment .client-profile-data .accordion-toggle>span:before,\nbody.v-custom-step-payment .shipping-data .accordion-toggle:before,\nbody.v-custom-step-email .client-pre-email h3.client-pre-email-h span:before,\nbody.v-custom-step-profile .client-profile-data .accordion-toggle>span:before,\nbody.v-custom-step-shipping .shipping-data .accordion-toggle:before,\nbody.v-custom-step-payment .payment-data .accordion-toggle>span:not(.payment-edit-link):before,\nbody.js-vcustom-hideEmailStep .client-profile-data .accordion-toggle>span:before {\n  content: \"1/3\" !important;\n  font-size: 20px;\n  border: none;\n  background: none;\n  font-weight: 400;\n  color: #000000;\n}\n\nbody.js-vcustom-hideEmailStep .shipping-data .accordion-toggle:before {\n  content: \"2/3\" !important;\n  font-size: 20px;\n  border: none;\n  background: none;\n  font-weight: 400;\n  color: #000000;\n}\n\nbody.js-vcustom-hideEmailStep .payment-data .accordion-toggle>span:not(.payment-edit-link):before {\n  content: \"3/3\" !important;\n  font-size: 20px;\n  border: none;\n  background: none;\n  font-weight: 400;\n  color: #000000;\n}\n\n.cart-more-options .srp-container .srp-main-title,\n.client-pre-email h3.client-pre-email-h span:after,\n.orderform-template-holder #client-profile-data form.client-pre-email .accordion-toggle,\n.orderform-template-holder #client-profile-data .step.client-profile-data .accordion-toggle,\n.orderform-template-holder #shipping-data .accordion-toggle,\n.orderform-template-holder #payment-data .accordion-toggle,\n.orderform-template .cart-template.mini-cart h2 {\n  line-height: initial;\n  display: block;\n  text-transform: uppercase;\n  color: rgb(0, 0, 0);\n  font-weight: 400;\n}\n\n.client-notice.notice {\n  display: none;\n}\n\n.orderform-template-holder .step .input.text label,\n.vcustom--vtex-omnishipping-1-x-address label {\n  color: rgb(85, 85, 85);\n  font-size: 0.875rem;\n  letter-spacing: 0.5px;\n  line-height: 1.43;\n  transition: all 0.3s ease 0s;\n  font-weight: 600;\n}\n\n#client-profile-data,\n#shipping-data,\n#payment-data {\n  box-shadow: rgb(0 0 0 / 20%) 0px 0px 4px 0px;\n  position: relative;\n}\n\n#shipping-data {\n  display: flex;\n  flex-direction: column;\n}\n\n.btns-container {\n  order: 1;\n  position: absolute;\n  bottom: -80px;\n  left: 2px;\n  width: 43%;\n  z-index: 2;\n}\n\n#client-profile-data {\n  background-color: #fff;\n  margin-bottom: 20px;\n}\n\n.progress-bar-client-profile-data {\n  height: 2px;\n  /* margin: 0 16px; */\n  background: rgb(255, 195, 86);\n  width: 33.3%;\n}\n\n.progress-bar-shipping-data {\n  height: 2px;\n  /* margin: 0 16px; */\n  background: rgb(255, 195, 86);\n  width: 66.6%;\n}\n\n.progress-bar-payment-data {\n  height: 2px;\n  /* margin: 0 16px; */\n  background: rgb(255, 195, 86);\n  width: 100%;\n}\n\n#payment-data {\n  /* margin: 0 16px; */\n  border-top: solid rgb(255, 195, 86) 5px !important;\n}\n\n#shipping-data .progress-bar {\n  position: absolute;\n  top: 0;\n}\n\n\n.accordion-toggle>span {\n  color: #fff;\n}\n\n#shipping-data span.accordion-toggle {\n  color: #fff !important;\n}\n\n.document-box {\n  display: none;\n}\n\n.box-client-info-pj {\n  display: none;\n}\n\n.newsletter {\n  display: block;\n}\n\n/* xxx */\n.vtex-omnishipping-1-x-addressFormPart1 small {\n  display: none;\n}\n\n.orderform-template-holder #payment-data .v-custom-payment-item-wrap .payment-group-item.active .payment-group-item-text:before {\n  background: black;\n  border-color: #000000;\n  box-shadow: inset 0 0 0 3px #fff;\n}\n\n.orderform-template-holder #payment-data .v-custom-payment-item-wrap .payment-group-item-text:before {\n  border-radius: 0px;\n}\n\n.orderform-template-holder #payment-data .v-custom-payment-item-wrap .payment-group-item.active {\n  background: none;\n  border-bottom: none;\n}\n\n.orderform-template-holder #payment-data .v-custom-payment-item-wrap.active,\n.orderform-template-holder #payment-data .v-custom-payment-item-wrap:hover {\n  box-shadow: none;\n  border: none;\n}\n\n.icon-edit:before {\n  content: \"\\f044\";\n  color: #000000;\n  font-size: 20px;\n}\n\n.summary-template-holder .cart-links-bottom .btn-success {\n  font-weight: 600;\n}\n\n.container.container-main.container-order-form {\n  max-width: unset;\n  margin: 0;\n  width: 100%;\n}\n\ndiv.container.container-main.container-cart {\n  max-width: unset;\n}\n\ndiv.checkout-container {\n  margin: 70px 0px;\n}\n\n.custom-cart-template-wrap {\n  box-shadow: rgb(0 0 0 / 20%) 0px 0px 4px 0px;\n}\n\ntbody.totalizers-list {\n  border: none !important;\n  color: #000;\n  font-weight: 600;\n  text-shadow: 0 0 black;\n}\n\n.summary-template-holder {\n  box-shadow: none !important;\n}\n\n#go-to-cart-button {\n  display: none;\n}\n\n.custom-cart-template-wrap {\n  background: none !important;\n  box-shadow: none;\n}\n\np.submit.btn-submit-wrapper {\n  position: absolute;\n  bottom: -80px;\n  right: 0px;\n  margin: 0;\n}\n\n.row-fluid.orderform-template.span12.active {\n  padding-bottom: 109px;\n}\n\n.accordion-body.collapse.in {\n  position: static;\n}\n\n.headers.checkout {\n  text-align: center;\n  padding-top: 50px;\n}\n\n.header1 {\n  display: flex;\n  justify-content: center;\n}\n\n.header1 h1 {\n  font-size: 12px;\n  margin: 0;\n}\n\n.headers.checkout h2 {\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0;\n  text-shadow: 1px 0 0 #000;\n}\n\n.loading2 {\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.payment-confirmation-loading {\n  font-size: 37px;\n  opacity: 0.5;\n}\n\n.form-title>p {\n  font-size: 14px;\n  letter-spacing: 2px;\n  font-weight: 500;\n  margin-top: 23px;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  box-shadow: 0 0 0 30px white inset !important;\n  -webkit-box-shadow: 0 0 0 30px white inset !important;\n}\n\ninput.input-xlarge {\n  border-radius: 0 !important;\n}\n\np.input.client-email.input,\np.client-first-name.input,\np.client-last-name.input,\np.client-phone.input {\n  width: 100% !important;\n  padding: 30px 0;\n}\n\np.input.client-email label,\np.client-first-name label,\np.client-last-name label,\np.client-phone label {\n  color: #757575;\n  position: absolute;\n  top: 35px;\n  z-index: 7;\n  transition: top 0.3s ease 0s !important;\n  cursor: text;\n}\n\ninput#client-email,\ninput#client-first-name,\ninput#client-last-name,\ninput#client-phone {\n  border: none !important;\n  border-bottom: 1px solid #E1E1E1 !important;\n  border-radius: 0 !important;\n  box-shadow: none;\n  height: 27px;\n  padding: 0 !important;\n  font-size: 16px;\n  color: #000000;\n  font-weight: 600;\n}\n\ninput#client-email:focus,\ninput#client-first-name:focus,\ninput#client-last-name:focus,\ninput#client-phone:focus {\n  box-shadow: none !important;\n}\n\ndiv.custom-cart-template-wrap {\n  padding-top: 0 !important;\n  margin-left: 24px;\n}\n\n.orderform-template .cart-template.mini-cart h2 {\n  font-size: 14px;\n  border-bottom: 3px solid #EEEEEE !important;\n  padding-bottom: 20px !important;\n}\n\n.orderform-template .cart-template.mini-cart .summary-template-holder .summary>.summary-coupon-wrap,\n.orderform-template .cart-template.mini-cart .summary-template-holder .summary-coupon-wrap>.summary-coupon {\n  display: none !important;\n}\n\nspan.product-name {\n  margin-bottom: 8px;\n  color: rgb(85, 85, 85);\n  font-size: 14px;\n  max-width: calc(82% - 35px) !important;\n}\n\n.orderform-template .cart-template.mini-cart .quantity {\n  right: unset;\n  left: 57px;\n  top: 40px;\n  background: none;\n  box-shadow: none;\n  color: #555555;\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.orderform-template .cart-template.mini-cart .quantity:before {\n  content: 'Cantidad '\n\n}\n\ndiv.description {\n  display: block !important;\n}\n\ndiv.description>strong.price {\n  font-size: 14px;\n  color: #000000;\n  margin: 0;\n  padding: 0;\n  font-weight: 500;\n}\n\nul.cart-items img {\n  width: 55px;\n}\n\ntable.table tfoot td.monetary {\n  font-size: 16px !important;\n  color: #000000 !important;\n  font-weight: 600 !important;\n}\n\n.orderform-template .cart-template.mini-cart .summary-totalizers tfoot tr td.info {\n  font-size: 16px !important;\n  font-weight: 600 !important;\n}\n\n.summary-cart-template-holder div.cart {\n  padding: 0;\n}\n\n.mini-cart .cart-items {\n  border-bottom: 3px solid #EEEEEE !important;\n}\n\n.summary-template-holder .accordion-group {\n  border-bottom: 3px solid #EEEEEE !important;\n}\n\n.orderform-template>div.orderform-template-holder {\n  max-width: 690px;\n}\n\n.orderform-template>div.cart-template.mini-cart {\n  max-width: 461px;\n}\n\n.checkout-container>div.orderform-template {\n  justify-content: center;\n}\n\n.orderform-template-holder .step .form-step fieldset p span.help.error {\n  font-size: 0.75rem;\n  letter-spacing: normal;\n  text-align: left;\n  color: rgb(228, 37, 37);\n  margin-top: 2px;\n  white-space: nowrap;\n}\n\ninput.success:not([invalid=\"true\"]) {\n  background-image: url(https://bangmx.vteximg.com.br/arquivos/checkMark.png);\n  background-size: 20px;\n  background-position: right center;\n}\n\n.orderform-template-holder #client-profile-data .step.client-profile-data {\n  margin-bottom: unset !important;\n}\n\n.orderform-template-holder .step.client-profile-data .client-phone:last-child {\n  display: none;\n}\n\n\n.btn-go-to-payment-wrapper {\n  display: flex;\n  justify-content: space-between;\n  justify-content: end;\n  position: absolute;\n  bottom: -80px;\n  right: -3px;\n}\n\nbutton.back-button {\n  order: -1;\n  border-radius: 24px;\n  padding: 10px 32px;\n  background-color: transparent;\n  color: rgb(25, 24, 23);\n  font-size: 18px;\n  font-weight: 400;\n  margin-top: 20px !important;\n  box-shadow: none;\n  outline: none !important;\n  text-shadow: none;\n  border: 2px solid;\n\n  width: 100%;\n  margin: 0;\n  min-width: unset;\n}\n\nbutton.back-button:hover {\n  border-color: rgb(255, 195, 86);\n  background-color: rgb(255, 195, 86);\n}\n\nbutton#btn-go-to-payment {\n  width: 44%;\n  margin: 0;\n  min-width: unset;\n}\n\ndiv#cartLoadedDiv {\n  order: 0;\n}\n\n.table.cart-items thead {\n  display: none;\n}\n\n.table.cart-items tbody tr td.quantity {\n  order: 0;\n  position: absolute;\n  bottom: 0;\n  left: 125px;\n  border: none;\n  margin: 0;\n}\n\n.table.cart-items tbody tr td.product-price {\n  position: absolute;\n  bottom: 0;\n  right: 60px;\n  margin: 0;\n  padding: 0;\n  width: 60px !important;\n  font-size: 16px;\n}\n\ndiv#cartLoadedDiv {\n  max-width: 570px;\n  margin-right: 140px;\n}\n\n.body-cart-vertical .summary-template-holder {\n  max-width: 450px;\n  padding: 0;\n}\n\n.table.cart-items tbody tr td.item-remove {\n  position: absolute;\n  top: -20px;\n  right: -20px;\n}\n\n.body-cart-vertical .cart-template.full-cart.active {\n  justify-content: center;\n}\n\ndiv.title-cart-products>h4 {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 1.875rem;\n  text-shadow: 1px 0 0 #000;\n  color: #000;\n}\n\ndiv.title-cart-summary>h4 {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.875rem;\n  text-shadow: 1px 0 0 #000;\n  color: #000;\n}\n\n.table.cart-items td.product-name a {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.table.cart-items td.product-name a,\n.table.cart-items td.product-name a:hover {\n  font-weight: 600;\n  color: #000;\n  letter-spacing: 0.6px;\n  font-size: 14px;\n}\n\n.table.cart-items td.quantity .item-quantity-change {\n  text-align: center;\n  font-size: 16px;\n}\n\n.table.cart-items td.quantity .item-quantity-change.item-quantity-change-decrement i:before {\n  content: \"-\";\n  line-height: 21px;\n  font-size: 33px;\n  font-weight: 200;\n}\n\n.table.cart-items td.quantity input {\n  background-color: transparent;\n  color: #000000;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.table.cart-items i.icon.icon-remove.item-remove-ico:before {\n  background-image: url(https://bangmx.vteximg.com.br/arquivos/remove-icon.png);\n  background-size: 10px 10px;\n  width: 10px;\n  height: 10px;\n  content: \"\";\n}\n\n@media (min-width: 769px) {\n  .table.cart-items tbody tr td.product-name {\n    width: 100% !important;\n  }\n}\n\n.full-cart .totalizers tfoot td {\n  font-size: 16px;\n  font-weight: 600;\n  color:#000;\n}\n\n.orderform-template .cart-template.mini-cart .cart {\n  max-height: unset;\n}\n\nspan.shipping-date.pull-left {\n  margin-top: 20px;\n}\n\n#cart-coupon-add {\n  border-radius: 24px;\n  text-align: center;\n  border-color: rgb(255, 195, 86);\n  background: rgb(255, 195, 86);\n  color: rgb(25, 24, 23);\n  font-size: 13px;\n  font-weight: 600;\n  min-width: 105px;\n}\n\n#cart-coupon-add:hover {\n  background: none !important;\n  color: rgb(25, 24, 23) !important;\n  border-color: rgb(235, 232, 229);\n}\n\n#cart-coupon {\n  border-radius: 24px;\n}\n\n#force-shipping-fields {\n  color: rgb(85, 85, 85);\n}\n\n/* .client-profile-data::after {\n  border-top: solid;\n  width: 33%;\n} */\n\ninput[type='radio'] {\n  box-sizing: border-box;\n  appearance: none;\n  background: white;\n  outline: 2px solid #333;\n  border: 3px solid white;\n  width: 16px;\n  height: 16px;\n}\n\ninput[type='radio']:checked {\n  background: #333;\n}\n\n.loading .loading-img {\n  height: 94%;\n}\n\n.loading .loading-bg {\n  display: none;\n}\n\n.empty-cart-content {\n  display: block;\n  position: absolute;\n  left: calc(50% - 577px);\n}\n\n@media only screen and (max-width: 768px){\n  .custom-cart-template-wrap {\n    margin-top: 90px;\n  }\n\n  .summary-template-holder {\n    width: 150% !important;\n  }\n}\n\n@media only screen and (max-width: 690px){\n  .table.cart-items td.product-name, .table.cart-items td.quantity {\n    margin-left: 145px !important;\n  }\n\n  .product-item {\n    width: 113% !important;\n  }\n}\n\n@media only screen and (max-width: 618px){\n  .full-cart .cart table tbody tr td.quantity {\n    margin-left: 19px !important;\n  }\n}\n\n@media only screen and (max-width: 540px){\n  .product-item {\n    width: 140% !important;\n  }\n}\n\n@media only screen and (max-width: 424px){\n  .title-cart-products {\n    margin-left: 2rem;\n  }\n}\n\n@media only screen and (max-width: 413px){\n  .btn-success, .button.checkEmailAuthConflict__modal--button, .button.back-button {\n    font-size: 12px;\n  }\n}\n\n@media only screen and (max-width: 376px){\n  .new-product-price {\n    margin-left: 4rem !important;\n  }\n}\n\n.srp-icon-radio-selected path {\n  fill: black !important;\n}\n\n.radio input[type=\"radio\"], .checkbox input[type=\"checkbox\"], #address-toggle-0 {\n  accent-color: black !important;\n}\n\n#shipping-preview-container {\n  display: none;\n}\n\n.ChangeNumberOfPayments.clearfix a {\n  color: black;\n  text-decoration: underline;\n}\n\n.vtex-omnishipping-1-x-svg path {\n  fill: black !important;\n\n}\n\n.forms.coupon-column.summary-coupon-wrap.text-center {\n  display: none;\n}\n\n.summary-template-holder tbody td {\n  color: #000;\n}\n\ntfoot .full-cart .summary-totalizers .monetary {\n  color: #000 !important;\n  font-weight: 600 !important;\n  font-size: 16px !important;\n}\n\n.modal.modal-email-template {\n  background-color: #fff;\n  color: #000;\n}\n\n.modal.modal-email-template #btn-identified-user-button {\n  background-color: rgb(255, 195, 86);\n  border-radius: 24px;\n  color: rgb(25, 24, 23);\n  font-weight: 700;\n  font-size: 19px;\n}\n.modal.modal-email-template #btn-identified-user-button:hover {\n  border-color: rgb(255, 195, 86);\n  background-color: rgb(255, 195, 86);\n}\n\np.client-email.input.text.required + p {\n  display: none !important;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bnoEndpoints_getCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bnoEndpoints/getCart */ "./src/bnoEndpoints/getCart.js");
/* harmony import */ var _bnoEndpoints_updateCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bnoEndpoints/updateCart */ "./src/bnoEndpoints/updateCart.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _utils_removeLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/removeLinks */ "./src/utils/removeLinks.js");
/* harmony import */ var _vtexAPI_putCartIdInOrderForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vtexAPI/putCartIdInOrderForm */ "./src/vtexAPI/putCartIdInOrderForm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






// const addBeoSupremeFont = () => {
//   const linkElement = document.createElement('link')
//   linkElement.setAttribute('rel', 'stylesheet');
//   linkElement.setAttribute('type', 'text/css');
//   linkElement.setAttribute('href', 'https://cloud.typography.com/6462894/7475632/css/fonts.css')
//   linkElement.setAttribute('media', 'all')

//   document.head.appendChild(linkElement)

// }

var handleInputFocus = function handleInputFocus(elements) {
  var _loop = function _loop(i) {
    var element = elements[i];
    document.querySelector("input#".concat(element)).addEventListener('focus', function () {
      var target = document.querySelector("p.".concat(element, " label"));
      target.style.top = '0px';
      target.style.cursor = 'text';
    });
    document.querySelector("input#".concat(element)).addEventListener("focusout", function (event) {
      var inputValue = event.target.value;
      var target = document.querySelector("p.".concat(element, " label"));
      if (!inputValue) {
        target.style.top = '35px';
        target.style.cursor = 'default';
      }
    });
  };
  for (var i = 0; i < elements.length; i++) {
    _loop(i);
  }
};
var handleLabels = function handleLabels(elements) {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var target = document.querySelector("p.".concat(element, " label"));
    var inputValue = document.querySelector("input#".concat(element)).value;
    var isFocused = document.querySelector("input#".concat(element)) === document.activeElement;
    target.style.top = inputValue || isFocused ? '0px' : '35px';
    target.style.cursor = inputValue ? 'text' : 'default';
  }
};
var createContainer = function createContainer(_ref) {
  var elem = _ref.elem,
    classNames = _ref.classNames,
    children = _ref.children,
    _ref$target = _ref.target,
    target = _ref$target === void 0 ? null : _ref$target,
    _ref$targetAppend = _ref.targetAppend,
    targetAppend = _ref$targetAppend === void 0 ? null : _ref$targetAppend;
  var element = document.createElement(elem);
  for (var i = 0; i < classNames.length; i++) {
    var clase = classNames[i];
    element.classList.add(clase);
  }
  for (var _i = 0; _i < children.length; _i++) {
    var child = children[_i];
    element.appendChild(child);
  }
  if (target) {
    target.parentNode.insertBefore(element, target);
  }
  if (targetAppend) {
    targetAppend.appendChild(element);
  }
  return element;
};
var createBackButton = function createBackButton(id, parent) {
  var backButton = document.createElement('button');
  backButton.innerHTML = 'Atrás';
  backButton.classList.add("back-button");
  createContainer({
    elem: 'div',
    classNames: ["btns-container"],
    children: [backButton],
    targetAppend: document.querySelector(parent)
  });
  backButton.addEventListener('click', function () {
    document.querySelector("#".concat(id)).click();
  });
  return backButton;
};
var createElem = function createElem(_ref2) {
  var elem = _ref2.elem,
    innerText = _ref2.innerText;
  var element = document.createElement(elem);
  element.innerText = innerText;
  return element;
};
var changeElement = function changeElement(elem, newText) {
  if (document.querySelector(elem)) {
    document.querySelector(elem).innerHTML = newText;
  }
};
window.onload = function () {
  (0,_bnoEndpoints_getCart__WEBPACK_IMPORTED_MODULE_0__.getCart)();
  $(window).on('orderFormUpdated.vtex', /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_, orderForm) {
      var accessToken, cartId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              (0,_utils_removeLinks__WEBPACK_IMPORTED_MODULE_3__.removeLinks)();
              setTimeout(function () {
                changeElement('#go-to-shipping', 'Siguiente');
                changeElement('#go-to-payment', 'Siguiente');
                changeElement('#btn-go-to-shipping', 'Siguiente');
                changeElement('#btn-go-to-payment', 'Siguiente');
                changeElement('.custom-cart-template-wrap > h2', 'DETALLES DEL PEDIDO');
                changeElement('.orderform-template .cart-template.mini-cart .summary-totalizers tfoot tr td.info', 'Total del pedido');
                changeElement('.summary-template-holder .cart-links-bottom .btn-success', 'Compra segura');
              }, 1500);
              accessToken = sessionStorage.getItem('accessToken');
              if (accessToken) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");
            case 5:
              cartId = sessionStorage.getItem('cartId');
              (0,_bnoEndpoints_updateCart__WEBPACK_IMPORTED_MODULE_1__.updateCart)(cartId, orderForm, accessToken);
              if (!orderForm.customData) {
                (0,_vtexAPI_putCartIdInOrderForm__WEBPACK_IMPORTED_MODULE_4__.putCartIdInOrderForm)(cartId, orderForm.orderFormId);
              }
            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function (_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }());
};
document.addEventListener('DOMContentLoaded', function () {
  var compraSegura = createElem({
    elem: 'h1',
    innerText: 'COMPRA SEGURA'
  });
  var completePedido = createElem({
    elem: 'h2',
    innerText: 'Complete su pedido'
  });
  var img = document.createElement('img');
  img.src = 'https://www.bang-olufsen.com/static-assets/images/common/lock.svg';
  img.classList.add('image-header1');
  var header1container = createContainer({
    elem: 'div',
    classNames: ['header1'],
    children: [img, compraSegura]
  });
  createContainer({
    elem: 'div',
    classNames: ['headers', 'checkout'],
    children: [header1container, completePedido],
    target: document.querySelector('.checkout-container')
  });
});
window.addEventListener('hashchange', function () {
  if (location.hash === '#/cart') {
    document.querySelector('div.headers.checkout').style.display = 'none';
  } else {
    document.querySelector('div.headers.checkout').style.display = 'block';
  }
  if (location.hash === '#/email' || location.hash === '#/profile') {
    document.querySelector('#client-profile-data').style.display = 'block';
    document.querySelector('#shipping-data').style.display = 'none';
    document.querySelector('#payment-data').style.display = 'none';
    handleLabels(['client-email', 'client-first-name', 'client-last-name', 'client-phone']);
  }
  if (location.hash === '#/shipping') {
    document.querySelector('#client-profile-data').style.display = 'none';
    document.querySelector('#shipping-data').style.display = 'flex';
    document.querySelector('#payment-data').style.display = 'none';
    var shippingTitle = document.createElement('p');
    shippingTitle.innerHTML = 'Introduce la dirección de entrega';
    if (!document.querySelector('.form-title.title-shipping')) {
      createContainer({
        elem: 'div',
        classNames: ['form-title', 'title-shipping'],
        children: [shippingTitle],
        target: document.querySelector("#shipping-data div.accordion-inner.shipping-container")
      });
    }
    var progressBar = function progressBar(width) {
      var bar = document.createElement('div');
      bar.classList.add('progress-bar');
      bar.style.width = width;
      bar.style.height = '5px';
      bar.style.background = 'rgb(255, 195, 86)';
      bar.style.marginLeft = '-30px';
      return bar;
    };
    var shippingData = document.querySelector('#shipping-data');
    if (!document.querySelector('#shipping-data .progress-bar')) {
      shippingData.prepend(progressBar('66.6%'));
    }
  }
  if (location.hash === '#/payment') {
    document.querySelector('#client-profile-data').style.display = 'none';
    document.querySelector('#shipping-data').style.display = 'none';
    document.querySelector('#payment-data').style.display = 'flex';
    var paymentTitle = document.createElement('p');
    paymentTitle.innerHTML = 'Selecciona el método de pago';
    if (!document.querySelector('.form-title.title-payment')) {
      createContainer({
        elem: 'div',
        classNames: ['form-title', 'title-payment'],
        children: [paymentTitle],
        target: document.querySelector("#payment-data div.payment-body")
      });
    }
    createBackButton('edit-shipping-data', '#payment-data');
  }
});
document.addEventListener('readystatechange', function () {
  var img = document.createElement('img');
  img.src = 'https://www.bang-olufsen.com/static-assets/images/common/lock.svg';
  img.classList.add('image-header1');
  var contactTitle = document.createElement('p');
  contactTitle.innerHTML = 'Introduce tu información de contacto';
  var titleCartProducts = document.createElement('h4');
  titleCartProducts.innerHTML = 'Artículos en la cesta';
  var titleCartSummary = document.createElement('h4');
  titleCartSummary.innerHTML = 'Resumen del pedido';
  if (document.readyState === "interactive") {
    // addBeoSupremeFont()
    document.querySelector('.checkout-container').style.display = 'none';
    createContainer({
      elem: 'div',
      classNames: ['loading2'],
      children: [document.querySelector('.loading-img')],
      target: document.querySelector('.checkout-container')
    });
    createContainer({
      elem: 'div',
      classNames: ['form-title'],
      children: [contactTitle],
      target: document.querySelector("#client-profile-data .accordion-body")
    });
    createContainer({
      elem: 'div',
      classNames: ['title-cart-products'],
      children: [titleCartProducts],
      target: document.querySelector(".cart-template-holder > div.cart > table.cart-items")
    });
    createContainer({
      elem: 'div',
      classNames: ['title-cart-summary'],
      children: [titleCartSummary],
      target: document.querySelector(".summary-template-holder > div.row-fluid.summary")
    });
  }
  if (document.readyState === "complete") {
    if (location.hash === '#/cart') {
      if (document.querySelector('#cart-choose-products')) {
        document.querySelector('#cart-choose-products').setAttribute('href', 'https://www.bang-olufsen.com/es/mx');
      }
      document.querySelector('div.headers.checkout').style.display = 'none';

      // document.querySelectorAll(".product-item a").forEach((element) => {
      //   element.setAttribute('href', 'javascript:void(0)')
      //   element.style.cursor = 'default'
      // })
    } else {
      document.querySelector('div.headers.checkout').style.display = 'block';
      document.querySelector('table.table tfoot td.monetary').style.fontSize = '24px';
      document.querySelector('table.table tfoot td.monetary').style.color = '#000000';
      document.querySelector('table.table tfoot td.monetary').style.fontWeight = '500';
    }
    if (location.hash === '#/email') {
      document.querySelector('#client-profile-data').style.display = 'block';
      document.querySelector('#shipping-data').style.display = 'none';
      document.querySelector('#payment-data').style.display = 'none';
    }
    if (location.hash === '#/shipping') {
      document.querySelector('#client-profile-data').style.display = 'none';
      document.querySelector('#shipping-data').style.display = 'block';
      document.querySelector('#payment-data').style.display = 'none';
      var shippingTitle = document.createElement('p');
      shippingTitle.innerHTML = 'Introduce la dirección de entrega';
      if (!document.querySelector('.form-title.title-shipping')) {
        createContainer({
          elem: 'div',
          classNames: ['form-title', 'title-shipping'],
          children: [shippingTitle],
          target: document.querySelector("#shipping-data div.accordion-inner.shipping-container")
        });
      }
    }
    if (location.hash === '#/payment') {
      document.querySelector('#client-profile-data').style.display = 'none';
      document.querySelector('#shipping-data').style.display = 'none';
      document.querySelector('#payment-data').style.display = 'flex';
      var paymentTitle = document.createElement('p');
      paymentTitle.innerHTML = 'Selecciona el método de pago';
      if (!document.querySelector('.form-title.title-payment')) {
        createContainer({
          elem: 'div',
          classNames: ['form-title', 'title-payment'],
          children: [paymentTitle],
          target: document.querySelector("#payment-data div.payment-body")
        });
      }
    }
    document.querySelector('#go-to-shipping').addEventListener('mouseleave', function (event) {
      var button = event.target;
      button.style.backgroundColor = 'rgb(255, 195, 86)';
      button.style.color = 'rgb(0, 0, 0)';
      button.style.borderColor = 'rgb(255, 195, 86)';
    });
    document.querySelector('#go-to-shipping').addEventListener('mouseenter', function (event) {
      var button = event.target;
      button.style.borderColor = 'rgb(235, 232, 229)';
    });
    var progressBar = function progressBar(width) {
      var bar = document.createElement('div');
      bar.classList.add('progress-bar');
      bar.style.width = width;
      bar.style.height = '5px';
      bar.style.background = 'rgb(255, 195, 86)';
      return bar;
    };
    var clientData = document.querySelector('#client-profile-data');
    clientData.prepend(progressBar('33.3%'));
    var i = setInterval(function () {
      // if (document.querySelector('.summary-template-holder .cart-links-bottom .btn-success').innerText !== `Compra segura`) {

      // }
    }, 500);
    setTimeout(function () {
      clearInterval(i);
    }, 10000);
    handleInputFocus(['client-email', 'client-first-name', 'client-last-name', 'client-phone']);
    createBackButton('edit-profile-data', '#shipping-data');
    createBackButton('edit-shipping-data', '#payment-data');
  }
});
})();

/******/ })()
;
//# sourceMappingURL=checkout6-custom.js.map