import { cssClasses } from '../../material-components-web/dialog/constants';

function unlockScroll() {
  document.querySelector('body').classList.remove(cssClasses.SCROLL_LOCK);
}

/**
 * popstateEvent
 * 暂时不使用
 */
function popstateEvent(event) {
  if (
    document.querySelector('body').classList.contains(cssClasses.SCROLL_LOCK)
  ) {
    unlockScroll();
    window.removeEventListener('popstate', popstateEvent);
  }
}

function lockScroll(watchHistory = false) {
  document.querySelector('body').classList.add(cssClasses.SCROLL_LOCK);

  if (watchHistory) {
    window.addEventListener('popstate', popstateEvent);
  }
}

export { lockScroll, unlockScroll };
