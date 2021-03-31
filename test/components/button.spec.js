import { shallowMount } from '@vue/test-utils';
import UiButton from '@/components/button/button.vue';

describe('<ui-button>', () => {
  it('renders default button', () => {
    const wrapper = shallowMount(UiButton);

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.element.tagName).toBe('BUTTON');
    expect(wrapper.classes()).toContain('mdc-button');
  });

  it('renders outlined button', () => {
    const wrapper = shallowMount(UiButton, {
      propsData: {
        outlined: true
      }
    });

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.classes()).toContain('mdc-button--outlined');
  });

  it('renders raised button', () => {
    const wrapper = shallowMount(UiButton, {
      propsData: {
        raised: true
      }
    });

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.classes()).toContain('mdc-button--raised');
  });

  it('renders unelevated button', () => {
    const wrapper = shallowMount(UiButton, {
      propsData: {
        unelevated: true
      }
    });

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.classes()).toContain('mdc-button--unelevated');
  });

  it('renders button with icon', () => {
    const icon = 'favorite';
    const wrapper = shallowMount(UiButton, {
      propsData: {
        icon
      }
    });

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.find('.mdc-button__icon').text()).toBe(icon);
  });

  it('renders button with slot-scope', () => {
    const wrapper = shallowMount(UiButton, {
      scopedSlots: {
        before: '<i slot-scope="{ iconClass }">{{ iconClass }}</i>'
      }
    });

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.text()).toBe('mdc-button__icon');
  });

  it('renders button with @click', async () => {
    const wrapper = shallowMount(UiButton);

    await wrapper.trigger('click');

    expect(wrapper.emitted().click).toBeTruthy();
  });
});
