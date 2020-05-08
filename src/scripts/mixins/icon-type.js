const TYPES = ['success', 'info', 'warn', 'warning', 'error', 'help'];
const ICONS = {
  defaults: {
    success: 'check_circle',
    info: 'error',
    error: 'add_circle',
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
    iconClassName() {
      let result = false;

      if (TYPES.includes(this.icon)) {
        switch (this.icon) {
          case 'success':
            result = 'md-success-icon';
            break;
          case 'info':
          case 'help':
            result = 'md-info-icon';
            break;
          case 'warn':
          case 'warning':
            result = 'md-warning-icon';
            break;
          case 'error':
            result = 'md-error-icon';
            break;
        }
      }

      if (this.iconOutlined) {
        result += '--outlined';
      }

      return result;
    },
    materialIcon() {
      let result = false;

      if (TYPES.includes(this.icon)) {
        const iconStyle = this.iconOutlined ? 'outlined' : 'defaults';

        result = ['info', 'warn', 'warning'].includes(this.icon)
          ? ICONS[iconStyle].info
          : ICONS[iconStyle][this.icon];
      }

      return result;
    }
  }
};
