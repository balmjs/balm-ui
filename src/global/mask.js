const _createMask = function () {
  let mask = document.querySelector('.mdl-mask');
  if(!mask){
    mask = document.createElement('div');
    mask.className = 'mdl-mask hidden';
    document.body.appendChild(mask);
  }
  return mask;
};

export default class {

  constructor(){
    this.mask = null;
    this.transparent = false;
  }

  show({transparent, clickHandler}){

    !this.mask && (this.mask = _createMask());
    !transparent && this.mask.classList.add('bg');
    clickHandler && this.mask.addEventListener('click', clickHandler, false);
    this.mask.classList.remove('hidden');

  }

  remove(){

    this.mask && (document.body.removeChild(this.mask), this.mask = null);

  }
}
