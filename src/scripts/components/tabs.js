import UiTabs from './tabs/tabs';
import UiTabBar from './tabs/tab-bar';
import UiTabBarScroller from './tabs/tab-bar-scroller';
import UiTab from './tabs/tab';
import UiPanels from './tabs/panels';
import UiPanel from './tabs/panel';

const components = {
  UiTabs,
  UiTabBar,
  UiTabBarScroller,
  UiTab,
  UiPanels,
  UiPanel
};

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in components) {
    let component = components[key];
    window.Vue.component(component.name, component);
  }
}

export default components;
