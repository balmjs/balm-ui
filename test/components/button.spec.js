import UiButton from '@/components/button/button.vue';

describe('<ui-button>', () => {
  it('renders default button', () => {
    const wrapper = shallowMount(UiButton);
    expect(wrapper.findAll('button')).toHaveLength(1);
  });
});
