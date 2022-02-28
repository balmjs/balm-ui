import { computed, onMounted } from 'vue';
import getType from '../utils/typeof';

// Define card constants
const UI_CARD = {
  cssClasses: {
    action: 'mdc-card__actions',
    button: 'mdc-card__action-buttons',
    icon: 'mdc-card__action-icons'
  }
};

let data = {
  cardButton: false,
  cardIcon: false
};

function useCardAction(elementRef) {
  const cardActionClasses = computed(() => ({
    'mdc-card__action': data.cardButton || data.cardIcon,
    'mdc-card__action--button': data.cardButton,
    'mdc-card__action--icon': data.cardIcon
  }));

  onMounted(() => {
    const parentEl = elementRef.value?.parentNode;
    if (parentEl && getType(parentEl) === 'htmldivelement') {
      data.cardButton =
        parentEl.classList.contains(UI_CARD.cssClasses.button) ||
        parentEl.classList.contains(UI_CARD.cssClasses.action);
      data.cardIcon = parentEl.classList.contains(UI_CARD.cssClasses.icon);
    }
  });

  return {
    cardActionClasses
  };
}

export { useCardAction };
