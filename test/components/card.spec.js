import { shallowMount } from '@vue/test-utils';
import UiCard from '@/components/card/card.vue';
import UiCardMedia from '@/components/card/card-media.vue';
import UiCardContent from '@/components/card/card-content.vue';
import UiCardActions from '@/components/card/card-actions.vue';

describe('<ui-card>', () => {
  it('renders a default card', () => {
    const wrapper = shallowMount(UiCard);
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain('mdc-card');
    expect(wrapper.classes()).toContain('mdc-theme--on-surface');
  });

  it('renders a outlined card', () => {
    const wrapper = shallowMount(UiCard, {
      propsData: {
        outlined: true
      }
    });
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.classes()).toContain('mdc-card--outlined');
  });

  it('renders a default card-content', () => {
    const wrapper = shallowMount(UiCardContent);

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain('mdc-card__primary-action');
  });

  it('renders a default card-content with @click', async () => {
    const wrapper = shallowMount(UiCardContent);

    await wrapper.trigger('click');

    expect(wrapper.emitted().click).toBeTruthy();
  });

  it('renders a default card-media', () => {
    const wrapper = shallowMount(UiCardMedia);

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain('mdc-card__media');
  });

  it('renders a sqaure card-media', () => {
    const wrapper = shallowMount(UiCardMedia, {
      propsData: {
        square: true
      }
    });

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.classes()).toContain('mdc-card__media--square');
  });

  it('renders a rectangle card-media', () => {
    const wrapper = shallowMount(UiCardMedia, {
      propsData: {
        rectangle: true
      }
    });

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.classes()).toContain('mdc-card__media--16-9');
  });

  it('renders a default card-action', () => {
    const wrapper = shallowMount(UiCardActions);

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain('mdc-card__actions');
  });

  it('renders a full bleed card-action', () => {
    const wrapper = shallowMount(UiCardActions, {
      propsData: {
        fullBleed: true
      }
    });

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.classes()).toContain('mdc-card__actions--full-bleed');
  });
});
