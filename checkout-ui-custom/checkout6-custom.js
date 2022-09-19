"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.
var sendProductLogs = function sendProductLogs(bodies) {
  bodies.length && bodies.map(function (body) {
    try {
      fetch('/logs/', {
        method: 'POST',
        body: JSON.stringify(body)
      });
    } catch (error) {
      console.log({
        description: "Error al enviar logs",
        skuId: body.VTEXSkuID,
        error: error
      });
      throw new Error(error);
    }
  });
};

var removeLoadingSpinner = function removeLoadingSpinner() {
  document.querySelector('.checkout-container').style.display = 'block';
  document.querySelector('.loading2').style.display = 'none';
};

var getVtexSkuByProductId = function getVtexSkuByProductId(productId, skuId) {
  return fetch("/vtex/catalog/".concat(productId)).then(function (x) {
    return x.json();
  }).then(function (res) {
    if (!res.skus.length) alert("No skus by productId: ".concat(productId));
    var selectedSku = res.skus.find(function (sku) {
      return skuId == sku.sku;
    });
    return {
      VTEXSkuID: String(selectedSku.sku),
      VTEXSkuName: selectedSku.skuname,
      VTEXPrice: selectedSku.bestPrice,
      VTEXQuantity: selectedSku.availablequantity
    };
  });
};

var getCart = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var queryString, urlParams, cartId, vtexProducts, vtexItemsPromise, vtexItems, bnoItems, combinedItems, differentItems;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            queryString = window.location.search;
            urlParams = new URLSearchParams(queryString);
            cartId = urlParams.get('cartId');

            if (cartId) {
              _context.next = 17;
              break;
            }

            if (!sessionStorage.getItem('bnoItems')) {
              _context.next = 16;
              break;
            }

            vtexProducts = vtexjs.checkout.orderForm.items.map(function (item) {
              return {
                productId: item.productId,
                skuId: item.id
              };
            });
            vtexItemsPromise = vtexProducts.map(function (vtexProduct) {
              return getVtexSkuByProductId(vtexProduct.productId, vtexProduct.skuId);
            });
            _context.next = 9;
            return Promise.all(vtexItemsPromise);

          case 9:
            vtexItems = _context.sent;
            bnoItems = JSON.parse(sessionStorage.getItem('bnoItems'));
            console.log({
              bnoItems: bnoItems
            });
            console.log({
              vtexItems: vtexItems
            });
            combinedItems = vtexItems.map(function (item, i) {
              return _objectSpread(_objectSpread(_objectSpread({}, bnoItems[i]), item), {}, {
                DateTime: new Date()
              });
            });
            differentItems = combinedItems.filter(function (item) {
              return item.BNOPrice !== item.VTEXPrice || item.BNOQuantity !== item.VTEXQuantity;
            });
            sendProductLogs(differentItems); // sessionStorage.removeItem('bnoItems')

          case 16:
            return _context.abrupt("return", removeLoadingSpinner());

          case 17:
            vtexjs.checkout.removeAllItems();
            fetch("/BnOApi/getCart/".concat(cartId), {
              method: 'GET'
            }).then(function (x) {
              return x.json();
            }).then(function (cart) {
              console.log({
                cart: cart
              });

              if (!lineItems in cart) {
                return alert('No line items in cart');
              }

              var lineItems = cart.lineItems; //`/checkout/cart/add/?sku=1734013&qty=1&seller=1&sc=1&sku=1200465&qty=1&seller=1&sc=1`

              var newUrlCart = lineItems.reduce(function (acc, el) {
                return acc.concat("sku=".concat(el.sku, "&qty=").concat(el.quantity, "&seller=1&sc=1&"));
              }, "/checkout/cart/add/?");
              console.log({
                newUrlCart: newUrlCart
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
                  BNOPrice: item.price.value.centAmount,
                  BNOQuantity: item.availableQuantity
                };
              });
              sessionStorage.setItem('bnoItems', JSON.stringify(bnoItems));
              window.location = newUrlCart;
            });

          case 19:
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

var addBeoSupremeFont = function addBeoSupremeFont() {
  var linkElement = document.createElement('link');
  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.setAttribute('type', 'text/css');
  linkElement.setAttribute('href', 'https://cloud.typography.com/6462894/6475632/css/fonts.css');
  document.head.appendChild(linkElement);
};

var awaitCondition = function awaitCondition(_ref3) {
  var condition = _ref3.condition,
      cback = _ref3.cback;
  var count = 0;
  var check = setInterval(function () {
    if (condition) {
      clearInterval(check);
      return cback();
    }

    if (count === 30000) return clearInterval(check);
    ++count;
  }, 100);
};

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

var createContainer = function createContainer(_ref4) {
  var elem = _ref4.elem,
      classNames = _ref4.classNames,
      children = _ref4.children,
      _ref4$target = _ref4.target,
      target = _ref4$target === void 0 ? null : _ref4$target,
      _ref4$targetAppend = _ref4.targetAppend,
      targetAppend = _ref4$targetAppend === void 0 ? null : _ref4$targetAppend;
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

var createBackButton = function createBackButton(hash, parent) {
  var backButton = document.createElement('button');
  backButton.innerHTML = 'Atrás';
  backButton.classList.add('back-button');
  createContainer({
    elem: 'div',
    classNames: ["btns-container"],
    children: [backButton],
    targetAppend: document.querySelector(parent)
  });
  backButton.addEventListener('click', function () {
    window.location.hash = hash;
  });
  return backButton;
};

var createElem = function createElem(_ref5) {
  var elem = _ref5.elem,
      innerText = _ref5.innerText;
  var element = document.createElement(elem);
  element.innerText = innerText;
  return element;
};

var changeElement = function changeElement(elem, newText) {
  document.querySelector(elem).innerHTML = newText;
};

window.onload = function (event) {
  console.log('onload::', {
    event: event
  });
  getCart();
};

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOMContentLoaded::', {
    event: event
  });
  addBeoSupremeFont();
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
window.addEventListener('hashchange', function (event) {
  console.log('hashchange::', {
    event: event
  });
  console.log('hash::', location.hash);

  if (location.hash === '#/cart') {
    document.querySelector('div.headers.checkout').style.display = 'none';
  } else {
    document.querySelector('div.headers.checkout').style.display = 'block';
  }

  if (location.hash === '#/email') {
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

    createBackButton('#/shipping', '#payment-data');
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
      document.querySelector('div.headers.checkout').style.display = 'none';
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
    changeElement('#go-to-shipping', 'Siguiente');
    changeElement('.custom-cart-template-wrap > h2', 'DETALLES DEL PEDIDO');
    changeElement('.orderform-template .cart-template.mini-cart .summary-totalizers tfoot tr td.info', 'Total del pedido');
    changeElement('.full-cart .totalizers tfoot td', 'Total del pedido');
    changeElement('.summary-template-holder .cart-links-bottom .btn-success', 'Compra segura');
    handleInputFocus(['client-email', 'client-first-name', 'client-last-name', 'client-phone']);
    createBackButton('#/email', '#shipping-data');
    createBackButton('#/shipping', '#payment-data');
  }
});