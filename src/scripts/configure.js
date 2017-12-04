import getType from './helpers/typeof';
import merge from 'deepmerge';

const configure = (Component, props) => {
  Object.keys(props).forEach(propName => {
    if (Component.props[propName] === undefined) {
      return;
    }

    const defaultValue = Component.props[propName].default;

    if (getType(defaultValue) === 'object') {
      Component.props[propName].default = merge(defaultValue, props[propName]);
      return;
    }

    Component.props[propName].default = props[propName];
  });
};

export default configure;
