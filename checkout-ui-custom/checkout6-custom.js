"use strict";

// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.
var addBeoSupremeFont = function addBeoSupremeFont() {
  var linkElement = document.createElement('link');
  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.setAttribute('type', 'text/css');
  linkElement.setAttribute('href', 'https://cloud.typography.com/6462894/6475632/css/fonts.css');
  document.head.appendChild(linkElement);
};

var awaitCondition = function awaitCondition(_ref) {
  var condition = _ref.condition,
      cback = _ref.cback;
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

var createContainer = function createContainer(_ref2) {
  var elem = _ref2.elem,
      classNames = _ref2.classNames,
      children = _ref2.children,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? null : _ref2$target,
      _ref2$targetAppend = _ref2.targetAppend,
      targetAppend = _ref2$targetAppend === void 0 ? null : _ref2$targetAppend;
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

var createElem = function createElem(_ref3) {
  var elem = _ref3.elem,
      innerText = _ref3.innerText;
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
    document.querySelector('.checkout-container').style.display = 'block';
    document.querySelector('.loading2').style.display = 'none';
  }
});