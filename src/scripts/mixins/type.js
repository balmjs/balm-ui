const checkType = (props, TYPES, key) => {
  // TODO: has bug
  // console.log('checkType', props);
  return props[key] || props.type === TYPES[key] || props.type === key;
};

export default checkType;
