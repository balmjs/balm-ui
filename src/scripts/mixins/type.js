const checkType = (props, TYPES, key) =>
  props[key] || props.type === TYPES[key] || props.type === key;

export default checkType;
