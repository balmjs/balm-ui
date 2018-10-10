import UiGrid from '@/components/grid/grid.vue';
import UiGridInner from '@/components/grid/grid-inner.vue';
import UiGridCell from '@/components/grid/grid-cell.vue';

describe('<ui-grid>', () => {

  it('renders default grid', () => {
    const wrapper = shallowMount(UiGrid, {
      stubs: {
        'ui-grid-inner': UiGridInner
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.classes()).toContain('mdc-layout-grid');
  });

  it('renders the grid with fixed column width', () => {
    const wrapper = shallowMount(UiGrid, {
      stubs: {
        'ui-grid-inner': UiGridInner
      },
      propsData: {
        fixedColumnWidth: true
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.classes()).toContain('mdc-layout-grid--fixed-column-width');
  });

  it('renders the right alignment of the whole grid', () => {
    const wrapper = shallowMount(UiGrid, {
      stubs: {
        'ui-grid-inner': UiGridInner
      },
      propsData: {
        position: 'right'
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.classes()).toContain('mdc-layout-grid--align-right');
  });
});

describe('<ui-grid-cell>', () => {

  it('renders 3 grid cell', () => {
    const cellWrapper = shallowMount(UiGridCell, {
      propsData: {
        colspan: { default: 4, phone: 2 },
        order: 1,
        align: 'middle'
      },
      slots: {
        default: '4'
      }
    });
    const cell = cellWrapper.html();

    const wrapper = shallowMount(UiGrid, {
      stubs: {
        'ui-grid-inner': UiGridInner
      },
      slots: {
        default: [cell, cell, cell]
      }
    });

    if (DEBUG) {
      console.log('[OUTPUT]:', wrapper.html());
    }

    expect(wrapper.findAll('.mdc-layout-grid__cell').length).toBe(3);
  });
});
