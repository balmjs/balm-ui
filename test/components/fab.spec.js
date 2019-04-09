import UiFab from '@/components/button/fab';

describe('<ui-fab>', () => {
  it('renders default fab', () => {
    const wrapper = shallowMount(UiFab);

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toContain('mdc-fab');
  });

  it('renders fab with icon', () => {
    const icon = 'favorite_border';
    const wrapper = shallowMount(UiFab, {
      propsData: {
        icon
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.find('.mdc-fab__icon').text()).toBe(icon);
  });

  it('renders fab with slot-scope', () => {
    const wrapper = shallowMount(UiFab, {
      scopedSlots: {
        default: '<i slot-scope="{iconClass}">{{ iconClass }}</i>'
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.text()).toBe('mdc-fab__icon');
  });

  it('renders fab with @click', () => {
    const wrapper = shallowMount(UiFab);
    const spy = sinon.spy(wrapper.vm, 'handleClick');
    wrapper.vm.handleClick();

    expect(spy.calledOnce).toBe(true);
  });

  it('renders cssOnly fab', () => {
    const wrapper = shallowMount(UiFab, {
      propsData: {
        cssOnly: true
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.is('button')).toBe(true);
  });
});
