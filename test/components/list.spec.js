import UiList from '@/components/list/list.vue';
import UiItem from '@/components/list/item.vue';

describe('<ui-list>', () => {

  it('renders default list', () => {
    const itemWrapper = shallowMount(UiItem, {
      slots: {
        default: 'Single-line item'
      }
    });
    const item = itemWrapper.html();

    const wrapper = shallowMount(UiList, {
      slots: {
        default: [item, item, item]
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.classes()).toContain('mdc-list');
    expect(wrapper.findAll('.mdc-list-item').length).toBe(3);
  });

  it('renders single selection list with @click', () => {
    const wrapper = shallowMount(UiList, {
      propsData: {
        singleSelection: true
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    wrapper.vm.$nextTick(function() {
      wrapper.vm.onChange();
    });
  });
});
