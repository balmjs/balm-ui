import UiButton from '@/components/button/button.vue';

describe('<ui-button>', () => {
  it('renders default button', () => {
    const defaultText = 'Text Button';

    const wrapper = shallowMount(UiButton, {
      slots: {
        default: defaultText
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
      console.log();
    }

    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.text()).toBe(defaultText);
  });
});

describe('<ui-button raised>', () => {
  it('renders raised button', () => {
    const defaultText = 'Raised Button';

    const wrapper = shallowMount(UiButton, {
      slots: {
        default: defaultText
      },
      propsData: {
        raised: true
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
      console.log();
    }

    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.text()).toBe(defaultText);
    expect(wrapper.classes()).toContain('mdc-button--raised');
  });
});

describe('<ui-button icon>', () => {
  it('renders button with icon', () => {
    const defaultText = 'Icon Button';
    const icon = 'favorite';

    const wrapper = shallowMount(UiButton, {
      slots: {
        default: defaultText
      },
      propsData: {
        icon
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
      console.log();
    }

    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.find('.mdc-button__icon').text()).toBe(icon);
  });
});

describe('<ui-button @click>', () => {
  it('Click on button calls our method', () => {
    const spy = sinon.spy();

    const wrapper = mount(UiButton, {
      methods: {
        handleClick: spy
      }
    });
    wrapper.trigger('click');

    expect(spy.calledOnce).toBe(true);
  })
});
