import { config, mount } from '@vue/test-utils';
import UiButton from '@/components/button/button.vue';

config.stubRenderDefaultSlot = true;

describe('<ui-button>', () => {
  it('renders default button', () => {
    const wrapper = mount(UiButton);

    expect(wrapper.get('button').element).toMatchSnapshot();
    expect(wrapper.get('button').classes()).toContain('mdc-button');
  });

  it('renders outlined button', () => {
    const wrapper = mount(UiButton, {
      props: {
        outlined: true
      }
    });

    expect(wrapper.get('button').element).toMatchSnapshot();
    expect(wrapper.get('button').classes()).toContain('mdc-button--outlined');
  });

  it('renders raised button', () => {
    const wrapper = mount(UiButton, {
      props: {
        raised: true
      }
    });

    expect(wrapper.get('button').element).toMatchSnapshot();
    expect(wrapper.get('button').classes()).toContain('mdc-button--raised');
  });

  it('renders unelevated button', () => {
    const wrapper = mount(UiButton, {
      props: {
        unelevated: true
      }
    });

    expect(wrapper.get('button').element).toMatchSnapshot();
    expect(wrapper.get('button').classes()).toContain('mdc-button--unelevated');
  });

  it('renders button with icon', () => {
    const icon = 'favorite';
    const wrapper = mount(UiButton, {
      props: {
        icon
      }
    });

    expect(wrapper.get('button').element).toMatchSnapshot();
    expect(wrapper.get('button').find('.mdc-button__icon').text()).toBe(icon);
  });

  it('renders button with scoped slots', () => {
    const wrapper = mount(UiButton, {
      slots: {
        before: `<template #before="{ iconClass }">
          <i :class="iconClass">{{ iconClass }}</i>
          </template>`
      }
    });

    expect(wrapper.get('button').element).toMatchSnapshot();
    expect(wrapper.get('button').text()).toBe('mdc-button__icon');
  });

  it('renders button with @click', async () => {
    const wrapper = mount(UiButton);

    await wrapper.get('button').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('click');
  });
});
