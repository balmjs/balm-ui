import multiBootstrap from '../config/multi-bootstrap';
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

multiBootstrap(components);

export default components;
export { UiTabs, UiTabBar, UiTabBarScroller, UiTab, UiPanels, UiPanel };
