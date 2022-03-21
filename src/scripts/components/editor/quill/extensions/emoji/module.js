import { useEditor } from '../../core/quill';
import Emotion from './emotion';
import { emojiClassName, getCode, createEmoji } from './utils';
import UI_GLOBAL from '../../../../../config/constants';

const EMOJI_TOOLBAR = {
  id: 'ql-emoji-toolbar',
  closeId: 'ql-emoji-toolbar-close',
  cssClasses: {
    tabBar: 'ql-emoji-tab-bar',
    tabScroller: 'ql-emoji-tab-scroller',
    tabContent: 'ql-emoji-tab-content',
    tab: 'ql-emoji-tab',
    tabActive: 'ql-emoji-tab--active',
    panel: 'ql-emoji-panel'
  }
};

let hasRange = false;

function createElement(className, tagName = 'div') {
  const el = document.createElement(tagName);
  el.className = className;
  return el;
}

function closeEmojiToolbar() {
  let emojiToolbarEl = document.getElementById(EMOJI_TOOLBAR.id);
  if (emojiToolbarEl) {
    emojiToolbarEl.remove();
  }

  return emojiToolbarEl;
}

function emojiModule() {
  const { Quill } = useEditor();
  const Module = Quill.import('core/module');

  class EmojiToolbarModule extends Module {
    constructor(quill, options) {
      super(quill, options);

      this.quill = quill;

      const toolbar = quill.getModule('toolbar');
      if (typeof toolbar !== 'undefined') {
        toolbar.addHandler('emoji', this.openEmojiToolbar.bind(this));

        this.quill.on('selection-change', (range, oldRange, source) => {
          hasRange = range;

          if (hasRange) {
            let emojiToolbarEl = document.getElementById(EMOJI_TOOLBAR.id);
            if (emojiToolbarEl) {
              this.setEmojiToolbarBounds(emojiToolbarEl);
            }
          }
        });
      }
    }

    setEmojiToolbarBounds(emojiToolbarEl) {
      let range = this.quill.getSelection(true);
      if (emojiToolbarEl && range) {
        let currentBounds = this.quill.getBounds(range.index);
        let paletteMaxPos = currentBounds.left + 240; // emoji toolbar max width is 240

        emojiToolbarEl.style.top = `${
          currentBounds.top + currentBounds.height + 10
        }px`;
        if (paletteMaxPos > this.quill.container.offsetWidth) {
          emojiToolbarEl.style.left = `${currentBounds.left - 250}px`;
        } else {
          emojiToolbarEl.style.left = `${currentBounds.left}px`;
        }
      }
    }

    openEmojiToolbar() {
      if (!closeEmojiToolbar()) {
        const emojiToolbarEl = document.createElement('div');
        emojiToolbarEl.id = EMOJI_TOOLBAR.id;
        this.quill.container.appendChild(emojiToolbarEl);

        this.setEmojiToolbarBounds(emojiToolbarEl);

        // add close
        const closeEl = document.createElement('i');
        closeEl.id = EMOJI_TOOLBAR.closeId;
        closeEl.className = UI_GLOBAL.cssClasses.icon;
        closeEl.innerHTML = 'close';
        emojiToolbarEl.appendChild(closeEl);
        // add tab container
        const tabBarEl = createElement(EMOJI_TOOLBAR.cssClasses.tabBar);
        const tabScrollerEl = createElement(
          EMOJI_TOOLBAR.cssClasses.tabScroller
        );
        tabBarEl.appendChild(tabScrollerEl);
        emojiToolbarEl.appendChild(tabBarEl);
        // add panel container
        const panelEl = createElement(EMOJI_TOOLBAR.cssClasses.panel);
        emojiToolbarEl.appendChild(panelEl);
        // update emoji type
        const tabs = Emotion.getTypes();
        this.addTabs(tabs, tabScrollerEl, panelEl);
        // update emoji content
        this.updatePanel(tabs[0] && tabs[0].title, panelEl);
        // events
        this.onEmojiHandler();
        this.onCloseHandler();
      }
    }

    addTabs(tabs, tabScrollerEl, panelEl) {
      const tabContentEl = createElement(
        EMOJI_TOOLBAR.cssClasses.tabContent,
        'ul'
      );
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

        tabEl.addEventListener(UI_GLOBAL.EVENTS.CLICK, (e) => {
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
            this.updatePanel(currentTabEl.dataset.title, panelEl);
          }
        });
      });
    }

    updatePanel(title, panelEl) {
      if (title) {
        panelEl.innerHTML = '';
        let emojiList = Emotion.getEmotion(title);

        emojiList.forEach((emoji) => {
          const emojiEl = createEmoji(emoji);
          emojiEl.setAttribute('title', getCode(emoji));
          panelEl.appendChild(emojiEl);
        });

        this.quill.focus();
      } else {
        panelEl.innerHTML = 'Emotions is empty';
      }
    }

    onEmojiHandler() {
      const emojiMap = Emotion.getEmotions();
      document
        .querySelector('.ql-emoji-panel')
        .addEventListener(UI_GLOBAL.EVENTS.CLICK, (e) => {
          const el = e.target.parentNode;
          if (el && el.classList.contains(emojiClassName)) {
            let range = this.quill.getSelection(true);

            if (range) {
              this.quill.insertEmbed(
                range.index,
                'emoji',
                emojiMap[el.title],
                Quill.sources.USER
              );
              this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
            }

            closeEmojiToolbar();
          }
        });
    }

    onCloseHandler() {
      let emojiToolbarCloseEl = document.getElementById(EMOJI_TOOLBAR.closeId);
      emojiToolbarCloseEl.addEventListener(
        UI_GLOBAL.EVENTS.CLICK,
        closeEmojiToolbar
      );
    }
  }

  Quill.register('modules/emoji', EmojiToolbarModule, true);
}

function onBlurEmojiHandler(e) {
  const el = e.target;
  if (el && new RegExp(`^${emojiClassName}`).test(el.classList[0])) {
    e.preventDefault();
    e.stopPropagation();
  } else {
    if (hasRange) {
      let parentEl = el;
      while (
        parentEl &&
        parentEl.classList &&
        !parentEl.classList.contains('mdc-editor-quill')
      ) {
        parentEl = parentEl.parentNode;
        if (
          parentEl &&
          parentEl.classList &&
          parentEl.classList.contains('mdc-editor-quill')
        ) {
          if (!parentEl.querySelector('#ql-emoji-toolbar')) {
            closeEmojiToolbar();
          }
          break;
        }
      }
    } else {
      closeEmojiToolbar();
    }
  }
}

export default emojiModule;
export { onBlurEmojiHandler };
