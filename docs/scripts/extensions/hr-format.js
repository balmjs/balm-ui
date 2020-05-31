import Quill from 'quill';

var Embed = Quill.import('blots/embed');

class Hr extends Embed {
  static create(value) {
    let node = super.create(value);
    // give it some margin
    node.setAttribute(
      'style',
      'height:0px; margin-top:10px; margin-bottom:10px;'
    );
    return node;
  }
}

Hr.blotName = 'hr'; //now you can use .ql-hr classname in your toolbar
Hr.className = 'my-hr';
Hr.tagName = 'hr';

export default Hr;
