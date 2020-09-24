function createDiv(id) {
  const el = document.createElement('div');
  el.id = id;

  document.body.appendChild(el);

  return el;
}

function removeDiv(el) {
  document.body.removeChild(el);
}

export { createDiv, removeDiv };
