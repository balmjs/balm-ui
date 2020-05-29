import Quill from 'quill';
import Emotion from './emotion';
import { emojiClassName, getCode, createEmoji } from './emoji-utils';

const Module = Quill.import('core/module');

const EMOJI_TOOLBAR = {
  id: 'ql-emoji-palette',
  closeId: 'ql-emoji-close-area',
  cssClasses: {
    tabs: 'ql-emoji-tabs',
    tabBar: 'ql-emoji-tab-bar',
    tab: 'ql-emoji-tab',
    tabActive: 'ql-emoji-tab--active',
    panel: 'ql-emoji-panel'
  }
};

class EmojiToolbarModule extends Module {
  constructor(quill, options) {
    super(quill, options);

    this.quill = quill;
    this.toolbar = quill.getModule('toolbar');
    if (typeof this.toolbar !== 'undefined') {
      this.toolbar.addHandler('emoji', this.checkPalatteExist);
    }
  }

  checkPalatteExist() {
    const quill = this.quill;

    openEmojiPalette(quill);

    quill.on('text-change', function (delta, oldDelta, source) {
      if (source === 'user') {
        closeEmojiPalette();
        updateRange(quill);
      }
    });
  }
}

function updateRange(quill) {
  return quill.getSelection();
}

function closeEmojiPalette() {
  const emojiPaletteEl = document.getElementById(EMOJI_TOOLBAR.id);

  if (emojiPaletteEl) {
    emojiPaletteEl.remove();
    document.getElementById(EMOJI_TOOLBAR.closeId).style.display = 'none';
  }

  return !!emojiPaletteEl;
}

function openEmojiPalette(quill) {
  if (!closeEmojiPalette()) {
    showEmojiPalatte(quill);
    onBlurHanlder();
  }
}

function onBlurHanlder() {
  if (document.getElementById(EMOJI_TOOLBAR.closeId)) {
    document.getElementById(EMOJI_TOOLBAR.closeId).style.display = 'block';
  } else {
    const closeEl = document.createElement('div');
    closeEl.id = EMOJI_TOOLBAR.closeId;
    closeEl.addEventListener('click', closeEmojiPalette, false);
    document.querySelector('body').appendChild(closeEl);
  }
}

function showEmojiPalatte(quill) {
  const emojiPaletteEl = document.createElement('div');
  const range = updateRange(quill);
  const atSignBounds = quill.getBounds(range.index);

  quill.container.appendChild(emojiPaletteEl);
  const paletteMaxPos = atSignBounds.left + 240; // palette max width is 240
  emojiPaletteEl.id = EMOJI_TOOLBAR.id;
  emojiPaletteEl.style.top = 10 + atSignBounds.top + atSignBounds.height + 'px';
  if (paletteMaxPos > quill.container.offsetWidth) {
    emojiPaletteEl.style.left = atSignBounds.left - 250 + 'px';
  } else {
    emojiPaletteEl.style.left = atSignBounds.left + 'px';
  }

  // add tab container
  const tabsEl = document.createElement('div');
  tabsEl.className = EMOJI_TOOLBAR.cssClasses.tabs;
  emojiPaletteEl.appendChild(tabsEl);
  // add panel container
  const panelEl = document.createElement('div');
  panelEl.className = EMOJI_TOOLBAR.cssClasses.panel;
  emojiPaletteEl.appendChild(panelEl);
  // update emoji type
  const tabs = Emotion.getTypes();
  addTabs(quill, tabs, tabsEl, panelEl);
  // update emoji content
  updatePanel(quill, tabs[0] && tabs[0].type, panelEl);
}

function addTabs(quill, tabs, tabsEl, panelEl) {
  const tabBarEl = document.createElement('ul');
  tabBarEl.className = EMOJI_TOOLBAR.cssClasses.tabBar;
  tabsEl.appendChild(tabBarEl);

  tabs.forEach((tab, index) => {
    let tabEl = document.createElement('li');
    tabEl.classList.add(EMOJI_TOOLBAR.cssClasses.tab);
    if (index === 0) {
      tabEl.classList.add(EMOJI_TOOLBAR.cssClasses.tabActive);
    }
    tabEl.innerHTML = tab.name;
    tabEl.dataset.type = tab.type;
    tabBarEl.appendChild(tabEl);

    tabEl.addEventListener('click', (e) => {
      let currentTabEl = e.target;
      if (
        !currentTabEl.classList.contains(EMOJI_TOOLBAR.cssClasses.tabActive)
      ) {
        let activeTab = document.querySelector(
          `.${EMOJI_TOOLBAR.cssClasses.tabActive}`
        );
        if (activeTab) {
          activeTab.classList.remove(EMOJI_TOOLBAR.cssClasses.tabActive);
        }

        currentTabEl.classList.toggle(EMOJI_TOOLBAR.cssClasses.tabActive);
        updatePanel(quill, currentTabEl.dataset.type, panelEl);
      }
    });
  });
}

function updatePanel(quill, type, panelEl) {
  if (type) {
    panelEl.innerHTML = '';
    let emojiList = Emotion.getEmotion(type);

    emojiList.forEach((emoji) => {
      const emojiEl = createEmoji(emoji);
      emojiEl.setAttribute('title', getCode(emoji));

      const emojiWrapperEl = document.createElement('span');
      emojiWrapperEl.className = emojiClassName;
      emojiWrapperEl.appendChild(emojiEl);

      panelEl.appendChild(emojiWrapperEl);

      handleChooseEmoji(quill, emojiEl, emoji);
    });
  } else {
    panelEl.innerHTML = 'emotions prop is required';
  }
}

function handleChooseEmoji(quill, emojiEl, result) {
  quill.focus();
  const range = updateRange(quill);

  emojiEl.addEventListener('click', (e) => {
    quill.insertEmbed(range.index, 'emoji', result, Quill.sources.USER);
    setTimeout(() => quill.setSelection(range.index + 1), 0);
    closeEmojiPalette();
  });
}

export default EmojiToolbarModule;
