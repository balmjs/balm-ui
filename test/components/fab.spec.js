import { config, mount } from '@vue/test-utils';
import UiFab from '@/components/buttons/fab.vue';

config.stubRenderDefaultSlot = true;

describe('<ui-fab>', () => {
  it('renders default fab', () => {
    const wrapper = mount(UiFab);

    expect(wrapper.get('button').element).toMatchSnapshot();
    expect(wrapper.get('button').classes()).toContain('mdc-fab');
  });

  it('renders extended fab', () => {
    const wrapper = mount(UiFab, {
      props: {
        extended: true
      }
    });

    expect(wrapper.get('button').element).toMatchSnapshot();
    expect(wrapper.get('button').classes()).toContain('mdc-fab--extended');
  });
});
