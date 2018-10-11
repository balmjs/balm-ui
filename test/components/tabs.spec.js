import UiTabs from '@/components/tabs/tabs.vue';
import UiTabBar from '@/components/tabs/tab-bar.vue';
import UiTabScroller from '@/components/tabs/tab-scroller.vue';
import UiTab from '@/components/tabs/tab.vue';

const items = [
  {
    text: 'Favorites',
    icon: 'favorite'
  },
  {
    text: 'Recents',
    icon: 'phone'
  },
  {
    text: 'Nearby',
    icon: 'near_me'
  }
];

describe('<ui-tabs>', () => {

  it('renders default tabs', () => {
    const wrapper = shallowMount(UiTabs, {
      stubs: {
        'ui-tab-bar': UiTabBar,
        'ui-tab-scroller': UiTabScroller,
        'ui-tab': UiTab
      },
      propsData: {
        items
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.findAll('.mdc-tab__text-label').length).toBe(3);
    expect(wrapper.findAll('.mdc-tab__icon').length).toBe(0);
  });

  it('renders icon tabs', () => {
    const wrapper = shallowMount(UiTabs, {
      stubs: {
        'ui-tab-bar': UiTabBar,
        'ui-tab-scroller': UiTabScroller,
        'ui-tab': UiTab
      },
      propsData: {
        type: 'icon',
        items
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.findAll('.mdc-tab__text-label').length).toBe(0);
    expect(wrapper.findAll('.mdc-tab__icon').length).toBe(3);
  });

  it('renders text label and icon tabs', () => {
    const wrapper = shallowMount(UiTabs, {
      stubs: {
        'ui-tab-bar': UiTabBar,
        'ui-tab-scroller': UiTabScroller,
        'ui-tab': UiTab
      },
      propsData: {
        type: 'both',
        items,
        keys: {
          text: 'text',
          icon: 'icon',
          name: 'name'
        }
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.findAll('.mdc-tab__text-label').length).toBe(3);
    expect(wrapper.findAll('.mdc-tab__icon').length).toBe(3);
  });
});
