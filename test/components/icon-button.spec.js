import UiIconButton from '@/components/button/icon-button.vue';

describe('<ui-icon-button>', () => {

  it('renders default icon button', () => {
    const wrapper = shallowMount(UiIconButton);

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toContain('mdc-icon-button');
  });

  it('renders toggle icon button', () => {
    const wrapper = shallowMount(UiIconButton, {
      propsData: {
        model: false,
        toggle: {
          on: 'favorite',
          off: 'favorite_border'
        }
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.findAll('.mdc-icon-button__icon').length).toBe(2);

    wrapper.trigger('click');
    expect(wrapper.classes()).toContain('mdc-icon-button--on');
    expect(wrapper.vm.$iconButton.on).toBe(true);

    wrapper.trigger('click');
    expect(wrapper.vm.$iconButton.on).toBe(false);
  });

});
