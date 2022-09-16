export const addElementBefore = (params) => {
  const {element, innerText, target} = params
  const elem = document.createElement(element);
  elem.innerText = innerText;
  target.parentNode.insertBefore(elem, target);
}
