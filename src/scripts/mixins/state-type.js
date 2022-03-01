import { computed } from 'vue';

const STATE_TYPES = ['success', 'info', 'warn', 'warning', 'error', 'help'];
const STATE_ICONS = {
  defaults: {
    success: 'check_circle',
    info: 'error',
    error: 'cancel',
    help: 'help'
  },
  outlined: {
    success: 'check_circle_outline',
    info: 'error_outline',
    error: 'highlight_off',
    help: 'help_outline'
  }
};

function useStateType(props) {
  const stateType = computed(() => {
    let result = false;

    if (STATE_TYPES.includes(props.state)) {
      switch (props.state) {
        case 'success':
          result = 'success';
          break;
        case 'info':
        case 'help':
          result = 'info';
          break;
        case 'warn':
        case 'warning':
          result = 'warning';
          break;
        case 'error':
          result = 'error';
          break;
      }
    }

    return result;
  });
  const stateClassName = computed(() => {
    let result = '';

    if (stateType.value) {
      result = `md-${stateType.value}-icon`;

      if (props.stateOutlined) {
        result += '--outlined';
      }
    }

    return result;
  });
  const materialIcon = computed(() => {
    let result = false;

    if (STATE_TYPES.includes(props.state)) {
      const stateStyle = props.stateOutlined ? 'outlined' : 'defaults';

      result = ['info', 'warn', 'warning'].includes(props.state)
        ? STATE_ICONS[stateStyle].info
        : STATE_ICONS[stateStyle][props.state];
    }

    return result;
  });

  return {
    stateType,
    stateClassName,
    materialIcon
  };
}

export { useStateType };
