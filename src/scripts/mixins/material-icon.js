import { computed } from 'vue';

const MaterialIconClassName = 'material-icons';

const icon = {
  type: String,
  default: ''
};

function useMaterialIcon(props) {
  const materialIcon = computed(() => props.icon || false);

  return { materialIcon };
}

const getMaterialIconClass = (...componentClasses) => [
  MaterialIconClassName,
  ...componentClasses
];

export { icon, useMaterialIcon, getMaterialIconClass };
