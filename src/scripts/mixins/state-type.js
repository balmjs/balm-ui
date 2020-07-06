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

export default {
  computed: {
    stateType() {
      let result = false;

      if (STATE_TYPES.includes(this.state)) {
        switch (this.state) {
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
    },
    stateClassName() {
      let result = false;

      if (this.stateType) {
        result = `md-${this.stateType}-icon`;

        if (this.stateOutlined) {
          result += '--outlined';
        }
      }

      return result;
    },
    materialIcon() {
      let result = false;

      if (STATE_TYPES.includes(this.state)) {
        const stateStyle = this.stateOutlined ? 'outlined' : 'defaults';

        result = ['info', 'warn', 'warning'].includes(this.state)
          ? STATE_ICONS[stateStyle].info
          : STATE_ICONS[stateStyle][this.state];
      }

      return result;
    }
  }
};
