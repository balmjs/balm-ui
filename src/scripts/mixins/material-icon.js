import { computed } from 'vue';

const MaterialIconClassName = 'material-icons';

const icon = {
  type: String,
  default: ''
};

function getMaterialIconOptions(props) {
  const materialIcon = computed(() => props.icon || false);

  return { materialIcon };
}

const getIconClassName = (...componentIconClass) => [
  MaterialIconClassName,
  ...componentIconClass
];

export { icon, getMaterialIconOptions, getIconClassName };
