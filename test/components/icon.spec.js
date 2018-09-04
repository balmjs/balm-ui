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
      console.log();
    }

    expect(wrapper.is('i')).toBe(true);
    expect(wrapper.classes()).toContain('material-icons');
    expect(wrapper.text()).toBe(icon);
  });
});

describe('<ui-icon size dark>', () => {
  it('renders dark icon', () => {
    const wrapper = shallowMount(UiIcon, {
      propsData: {
        size: 36,
        dark: true
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
      console.log();
    }

    expect(wrapper.classes()).toContain('md-36');
    expect(wrapper.classes()).toContain('md-dark');
  });
});

describe('<ui-icon light inactive>', () => {
  it('renders light icon', () => {
    const wrapper = shallowMount(UiIcon, {
      propsData: {
        light: true,
        inactive: true
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
      console.log();
    }

    expect(wrapper.classes()).toContain('md-light');
    expect(wrapper.classes()).toContain('md-inactive');
  });
});

// describe('<ui-icon @click>', () => {
//   it('Click on icon calls our method', () => {
//     const spy = sinon.spy();

//     const wrapper = mount(UiIcon, {
//       methods: {
//         handleClick: spy
//       }
//     });
//     wrapper.trigger('click');

//     console.log(spy);
//     // console.log(spy.returnValue);
//     // expect(spy.calledOnce).toBe(true);
//   })
// });
