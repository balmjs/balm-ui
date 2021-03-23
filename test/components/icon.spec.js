import { shallowMount } from '@vue/test-utils';
import UiIcon from '@/components/icon/icon.vue';

let originalWarn;

beforeAll(() => {
    originalWarn = global.console.warn;
    global.console.warn = jest.fn();
  });

afterAll(() => {
    global.console.warn = originalWarn;
});


describe('<ui-icon>', () => {
    it('renders a default icon', () => {
        const wrapper = shallowMount(UiIcon);

        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.element.tagName).toBe('I');
        expect(wrapper.vm.size).toBe(24);
    });

    it('renders an outlined icon', () => {
        const wrapper = shallowMount(UiIcon, {
            propsData: {
                outlined: true
            }
        });

        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.classes()).toContain('material-icons-outlined');
    });

    it('renders a round icon', () => {
        const wrapper = shallowMount(UiIcon, {
            propsData: {
                round: true
            }
        });
        
        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.classes()).toContain('material-icons-round');
    });

    it('renders a two-tone icon', () => {
        const wrapper = shallowMount(UiIcon, {
            propsData: {
                twoTone: true
            }
        });
        
        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.classes()).toContain('material-icons-two-tone');
    });

    it('renders a sharp icon', () => {
        const wrapper = shallowMount(UiIcon, {
            propsData: {
                sharp: true
            }
        });
        
        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.classes()).toContain('material-icons-sharp');
    });

    it('renders an icon with size of 18', () => {
        const wrapper = shallowMount(UiIcon, {
            propsData: {
                size: 18
            }
        });
        
        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.classes()).toContain('md-18');
    });

    it('renders an icon with size 0', () => {
        const wrapper = shallowMount(UiIcon, {
            propsData: {
                size: 0
            }
        });
        
        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.classes()).not.toContain('md-0');
        expect(wrapper.vm.size).toBe(0);
    });

    it('renders a light icon', () => {
        const wrapper = shallowMount(UiIcon, {
            propsData: {
                light: true
            }
        });
        
        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.classes()).toContain('md-light');
    });

    it('renders a dark icon', () => {
        const wrapper = shallowMount(UiIcon, {
            propsData: {
                dark: true
            }
        });
        
        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.classes()).toContain('md-dark');
    });

    it('renders an invalid dark icon', () => {
        const wrapper = shallowMount(UiIcon, {
            propsData: {
                light: true,
                dark: true
            }
        });
        
        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.classes()).not.toContain('md-dark');
        expect(wrapper.classes()).not.toContain('md-light');
        expect(global.console.warn).toHaveBeenCalled();
    });

    it('renders a dark and inactive/disabled icon', () => {
        const wrapper = shallowMount(UiIcon, {
            propsData: {
                dark: true,
                inactive: true
            }
        });
        
        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.classes()).toContain('md-inactive');
        expect(wrapper.classes()).toContain('md-dark');
    });

    it('renders a light and inactive/disabled icon', () => {
        const wrapper = shallowMount(UiIcon, {
            propsData: {
                light: true,
                inactive: true
            }
        });
        
        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.classes()).toContain('md-inactive');
        expect(wrapper.classes()).toContain('md-light');
    });

    it('renders an active icon with @click', async () => {
        const wrapper = shallowMount(UiIcon);

        await wrapper.trigger('click');
        expect(wrapper.emitted().click).toBeTruthy();
    });

    it('renders an inactive icon with no @click', async () => {
        const wrapper = shallowMount(UiIcon, {
            propsData:{
                light: true,
                inactive: true
            }
        });

        await wrapper.trigger('click');
        expect(wrapper.emitted().click).not.toBeTruthy();
    });
});