import { shallowMount, mount } from '@vue/test-utils';
import UiTopAppBar from '@/components/app-bars/top-app-bar.vue';
import {MDCTopAppBar} from '../../src/material-components-web/top-app-bar';

const CONTENT_ID = "content-main";

beforeAll(() => {    
    const mock_content = document.createElement('div');
    mock_content.id = CONTENT_ID;
    document.body.appendChild(mock_content);
});

describe('<ui-top-app-bar>', () => {
    let methods = {
        init: jest.fn()
    };

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

     // setMethod is deprecated but this is the only way to test the watch method?
     it('calls init method when the type changes', async () => {
        const type_new = 2;
        
        const wrapper = mount(UiTopAppBar, {
            propsData: {
                contentSelector: "#" + CONTENT_ID,
            },
            methods
        });

        await wrapper.setProps({type: type_new});

        expect(methods.init).toHaveBeenCalled();
     });

     test('init method destories exisited MDCTopAppBar when init', async () => {
        const type_new = 2;
        
        const wrapper = mount(UiTopAppBar, {
            propsData: {
                contentSelector: "#" + CONTENT_ID,
            },
        });

        await wrapper.setProps({type: type_new});
     });
});