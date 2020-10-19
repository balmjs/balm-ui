function setToolbarIcons(Quill, customIcons = {}) {
  const icons = Quill.import('ui/icons');
  for (const [key, value] of Object.entries(customIcons)) {
    icons[key] = value;
  }
}

export default setToolbarIcons;
