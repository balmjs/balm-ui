function hanldeLinkOff(options) {
  options.modules.toolbar.handlers.linkoff = function () {
    let contents = this.quill.getContents();
    let newContent = contents.ops.map((item) => {
      if (item.attributes && typeof item.attributes.link !== 'undefined') {
        delete item.attributes.link;
      }
      return item;
    });
    this.quill.setContents(newContent);
  };
}

export default hanldeLinkOff;
