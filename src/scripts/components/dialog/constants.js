export const isOverflowInsideComponent = (parent) => {
  const insideComponent =
    parent.$vnode &&
    (/UiDialogContent$/.test(parent.$vnode.tag) ||
      /MdcTableBody$/.test(parent.$vnode.tag));
  return (
    insideComponent ||
    (parent?.$parent ? isOverflowInsideComponent(parent?.$parent) : false)
  );
};
