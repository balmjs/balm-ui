function useTest() {
  const { Quill } = BalmUIPlus.useEditor();

  console.log('Quill', Quill);

  const Parchment = Quill.import('parchment');

  class Test extends Parchment.Embed {
    static create(value) {
      let node = super.create();

      if (typeof value === 'string') {
        node.innerHTML = value;
      }

      return node;
    }
  }

  Test.blotName = 'test';
  Test.tagName = 'div';

  return Test;
}
