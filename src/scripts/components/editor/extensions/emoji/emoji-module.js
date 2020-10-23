import { useEditor } from '../../quill';
import Emotion from './emotion';
import { getCode, createEmoji } from './utils';

const EMOJI_TOOLBAR = {
  id: 'ql-emoji-palette',
  closeId: 'ql-emoji-close-area',
  cssClasses: {
    tabBar: 'ql-emoji-tab-bar',
    tabScroller: 'ql-emoji-tab-scroller',
    tabContent: 'ql-emoji-tab-content',
    tab: 'ql-emoji-tab',
    tabActive: 'ql-emoji-tab--active',
    panel: 'ql-emoji-panel'
  }
};

function emojiModule() {
  const { Quill } = useEditor();
  const Module = Quill.import('core/module');

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
    emojiPaletteEl.style.top =
      10 + atSignBounds.top + atSignBounds.height + 'px';
    if (paletteMaxPos > quill.container.offsetWidth) {
      emojiPaletteEl.style.left = atSignBounds.left - 250 + 'px';
    } else {
      emojiPaletteEl.style.left = atSignBounds.left + 'px';
    }

    // add tab container
    const tabBarEl = document.createElement('div');
    tabBarEl.className = EMOJI_TOOLBAR.cssClasses.tabBar;
    emojiPaletteEl.appendChild(tabBarEl);
    const tabScrollerEl = document.createElement('div');
    tabScrollerEl.className = EMOJI_TOOLBAR.cssClasses.tabScroller;
    tabBarEl.appendChild(tabScrollerEl);
    // add panel container
    const panelEl = document.createElement('div');
    panelEl.className = EMOJI_TOOLBAR.cssClasses.panel;
    emojiPaletteEl.appendChild(panelEl);
    // update emoji type
    const tabs = Emotion.getTypes();
    addTabs(quill, tabs, tabScrollerEl, panelEl);
    // update emoji content
    updatePanel(quill, tabs[0] && tabs[0].title, panelEl);
  }

  function addTabs(quill, tabs, tabScrollerEl, panelEl) {
    const tabContentEl = document.createElement('ul');
    tabContentEl.className = EMOJI_TOOLBAR.cssClasses.tabContent;
    tabScrollerEl.appendChild(tabContentEl);

    tabs.forEach((tab, index) => {
      let tabEl = document.createElement('li');
      tabEl.classList.add(EMOJI_TOOLBAR.cssClasses.tab);
      if (index === 0) {
        tabEl.classList.add(EMOJI_TOOLBAR.cssClasses.tabActive);
      }
      tabEl.innerHTML = tab.title;
      tabEl.dataset.title = tab.title;
      tabContentEl.appendChild(tabEl);

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
          updatePanel(quill, currentTabEl.dataset.title, panelEl);
        }
      });
    });
  }

  function updatePanel(quill, title, panelEl) {
    if (title) {
      panelEl.innerHTML = '';
      let emojiList = Emotion.getEmotion(title);

      emojiList.forEach((emoji) => {
        const emojiEl = createEmoji(emoji, true);
        emojiEl.setAttribute('title', getCode(emoji));

        panelEl.appendChild(emojiEl);

        handleChooseEmoji(quill, emojiEl, emoji);
      });
    } else {
      panelEl.innerHTML = 'Emotions is empty';
    }
  }

  function handleChooseEmoji(quill, emojiEl, result) {
    quill.focus();
    const range = updateRange(quill);

    emojiEl.addEventListener('click', (e) => {
      quill.insertEmbed(range.index, 'emoji', result, Quill.sources.USER);
      setTimeout(() => quill.setSelection(range.index + 1), 1);
      closeEmojiPalette();
    });
  }

  Quill.register(
    {
      'modules/emoji': EmojiToolbarModule
    },
    true
  );
}

export default emojiModule;
