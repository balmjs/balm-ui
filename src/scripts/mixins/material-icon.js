import { computed } from 'vue';

const icon = {
  type: String,
  default: ''
};

function useMaterialIcon(props) {
  const materialIcon = computed(() => props.icon || false);

  return { materialIcon };
}

export { icon, useMaterialIcon };
