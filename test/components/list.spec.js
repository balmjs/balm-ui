import UiList from '@/components/list/list';
import UiItem from '@/components/list/item';

describe('<ui-list>', () => {
  it('renders default list', () => {
    let items = [];
    let key = 0;
    while (key < 3) {
      const itemWrapper = shallowMount(UiItem, {
        attrs: {
          key
        },
        slots: {
          default: 'Single-line item'
        }
      });
      items.push(itemWrapper.html());

      key++;
    }

    const wrapper = shallowMount(UiList, {
      slots: {
        default: items
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
