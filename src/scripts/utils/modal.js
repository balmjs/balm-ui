import getType from './typeof';

export function getOptions(globalOptions, customOptions) {
  let options = Object.assign({}, globalOptions);

  if (getType(customOptions) === 'string') {
    options.message = `${customOptions}`; // To string
  } else if (getType(customOptions) === 'object') {
    options = Object.assign({}, options, customOptions);
  }

  return options;
}

export function createModal(el) {
  return document.body.appendChild(el);
}

export function removeModel(el) {
  document.body.removeChild(el);
}
