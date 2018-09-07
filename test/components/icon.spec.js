import UiIcon from '@/components/common/icon.vue';

describe('<ui-icon>', () => {

  it('renders default icon', () => {
    const icon = 'face';
    const wrapper = shallowMount(UiIcon, {
      slots: {
        default: icon
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.is('i')).toBe(true);
    expect(wrapper.classes()).toContain('material-icons');
    expect(wrapper.text()).toBe(icon);
  });

  it('renders dark icon with size', () => {
    const wrapper = shallowMount(UiIcon, {
      propsData: {
        size: 36,
        dark: true
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.classes()).toContain('md-36');
    expect(wrapper.classes()).toContain('md-dark');
  });

  it('renders light icon with @click', () => {
    const wrapper = shallowMount(UiIcon, {
      propsData: {
        light: true
      }
    });
    const spy = sinon.spy(wrapper.vm, 'handleClick');
    wrapper.vm.handleClick();

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.classes()).toContain('md-light');
    expect(spy.calledOnce).toBe(true);
  });

});
