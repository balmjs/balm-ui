import UiButton from '@/components/button/button.vue';

describe('<ui-button>', () => {

  it('renders default button', () => {
    const wrapper = shallowMount(UiButton);

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toContain('mdc-button');
  });

  it('renders raised button', () => {
    const wrapper = shallowMount(UiButton, {
      propsData: {
        raised: true
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.classes()).toContain('mdc-button--raised');
  });

  it('renders button with icon', () => {
    const icon = 'favorite';
    const wrapper = shallowMount(UiButton, {
      propsData: {
        icon
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.find('.mdc-button__icon').text()).toBe(icon);
  });

  it('renders button with slot-scope', () => {
    const wrapper = shallowMount(UiButton, {
      scopedSlots: {
        default: '<i slot-scope="{iconClass}">{{ iconClass }}</i>'
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.text()).toBe('mdc-button__icon');
  });

  it('click on button calls our method', () => {
    const wrapper = shallowMount(UiButton);
    const spy = sinon.spy(wrapper.vm, 'handleClick');
    wrapper.vm.handleClick();

    expect(spy.calledOnce).toBe(true);
  });

  it('renders cssOnly button', () => {
    const wrapper = shallowMount(UiButton, {
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
