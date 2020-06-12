import Quill from 'quill';

const Embed = Quill.import('blots/embed');

const icons = Quill.import('ui/icons');
icons.hr = '---';

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

Hr.blotName = 'hr'; //now you can use .ql-hr class name in your toolbar
Hr.className = 'my-hr';
Hr.tagName = 'hr';

export default Hr;
