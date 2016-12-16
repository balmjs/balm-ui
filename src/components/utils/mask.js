const _createMask = function (parent) {
  let mask = parent.querySelector('.mdl-mask');
  if(!mask){
    mask = document.createElement('div');
    mask.className = 'mdl-mask hidden';
    parent.appendChild(mask);
  }
  return mask;
};

const _dump = function () {
  this.parent.removeChild(this.mask);
  this.mask = null;
  this.parent = null;
};

export default class {

  constructor(){
    this.parent = null;
    this.mask = null;
  }

  show({transparent, clickHandler, parent, zIndex}){

    this.parent = (parent && parent.nodeType === 1) ? parent : document.body;

    !this.mask && (this.mask = _createMask(this.parent));

    !transparent && this.mask.classList.add('bg');

    typeof zIndex === 'number' && (this.mask.style.zIndex = zIndex);

    typeof clickHandler === 'function' && this.mask.addEventListener('click', clickHandler, false);

    this.mask.classList.remove('hidden');

  }

  remove(){

    this.mask && _dump.call(this);

  }
}
