import { shallowMount } from '@vue/test-utils';
import UiFab from '@/components/fab/fab.vue';

describe('<ui-fab>', () => {
  it('renders default fab', () => {
    const wrapper = shallowMount(UiFab);

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.element.tagName).toBe('BUTTON');
    expect(wrapper.classes()).toContain('mdc-fab');
  });

  it('renders extended fab', () => {
    const wrapper = shallowMount(UiFab, {
      propsData: {
        extended: true
      }
    });

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.classes()).toContain('mdc-fab--extended');
  });
});
