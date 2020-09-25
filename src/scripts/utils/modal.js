import getType from './typeof';
import { createDiv, removeDiv } from './div';

export function getOptions(globalOptions, customOptions) {
  let options = Object.assign({}, globalOptions);

  if (getType(customOptions) === 'string') {
    options.message = `${customOptions}`; // To string
  } else if (getType(customOptions) === 'object') {
    options = Object.assign({}, options, customOptions);
  }

  return options;
}

export function createModal(id) {
  return document.getElementById(id) || createDiv(id);
}

export function removeModel(el) {
  removeDiv(el);
}
