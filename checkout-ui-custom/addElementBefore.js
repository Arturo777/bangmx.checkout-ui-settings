"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addElementBefore = void 0;

var addElementBefore = function addElementBefore(params) {
  var element = params.element,
      innerText = params.innerText,
      target = params.target;
  var elem = document.createElement(element);
  elem.innerText = innerText;
  target.parentNode.insertBefore(elem, target);
};

exports.addElementBefore = addElementBefore;