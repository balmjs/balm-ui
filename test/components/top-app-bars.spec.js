import { shallowMount, mount } from '@vue/test-utils';
import UiTopAppBar from '@/components/app-bars/top-app-bar.vue';

const CONTENT_ID = "content-main";

beforeAll(() => {    
    const mock_content = document.createElement('div');
    mock_content.id = CONTENT_ID;
    document.body.appendChild(mock_content);
});

describe('<ui-top-app-bar>', () => {
    it('renders a default top app bar', () => {
        const icon = 'menu'
        const wrapper = mount(UiTopAppBar, {
            propsData: {
                contentSelector: "#" + CONTENT_ID
            }
        });

        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.classes()).toContain('mdc-top-app-bar');
        expect(wrapper.vm.type).toBe(0);
        expect(wrapper.vm.title).toBe('');
        expect(wrapper.vm.navIcon).toBe(icon);
        expect(wrapper.vm.navId).toBeNull();
    });

    it('renders a top app bar with title', () => {
        const icon = 'menu'
        const title = 'title'
        const wrapper = mount(UiTopAppBar, {
            propsData: {
                contentSelector: "#" + CONTENT_ID,
                title
            }
        });

        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.vm.title).toBe(title);
    });
    
    it('renders a nonRegular top app bar', () => {
        const icon = 'close'
        const type = -1
        const wrapper = mount(UiTopAppBar, {
            propsData: {
                contentSelector: "#" + CONTENT_ID,
                type
            }
        });

        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.findComponent({name:'mdc-icon-button'}).text()).toBe(icon);
     });

     it('renders a fixed top app bar', () => {
        const type = 1
        const wrapper = mount(UiTopAppBar, {
            propsData: {
                contentSelector: "#" + CONTENT_ID,
                type
            }
        });

        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.classes()).toContain('mdc-top-app-bar--fixed');
     });

     it('renders a dense top app bar', () => {
        const type = 2
        const wrapper = mount(UiTopAppBar, {
            propsData: {
                contentSelector: "#" + CONTENT_ID,
                type
            }
        });

        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.classes()).toContain('mdc-top-app-bar--dense');
     });

     it('renders a prominent top app bar', () => {
        const type = 3
        const wrapper = mount(UiTopAppBar, {
            propsData: {
                contentSelector: "#" + CONTENT_ID,
                type
            }
        });

        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.classes()).toContain('mdc-top-app-bar--prominent');
     });

     it('renders a prominent and dense top app bar', () => {
        const type = 4
        const wrapper = mount(UiTopAppBar, {
            propsData: {
                contentSelector: "#" + CONTENT_ID,
                type
            }
        });

        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.classes()).toContain('mdc-top-app-bar--dense');
        expect(wrapper.classes()).toContain('mdc-top-app-bar--prominent');
     });


     it('renders a short top app bar', () => {
        const type = 5
        const wrapper = mount(UiTopAppBar, {
            propsData: {
                contentSelector: "#" + CONTENT_ID,
                type
            }
        });

        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.classes()).toContain('mdc-top-app-bar--short');
     });

     it('renders a short collapesed top app bar', () => {
        const type = 6
        const wrapper = mount(UiTopAppBar, {
            propsData: {
                contentSelector: "#" + CONTENT_ID,
                type
            }
        });

        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.classes()).toContain('mdc-top-app-bar--short');
        expect(wrapper.classes()).toContain('mdc-top-app-bar--short-collapsed');
     });
});