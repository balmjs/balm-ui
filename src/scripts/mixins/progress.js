import { watch } from 'vue';
import UI_PROGRESS from '../components/progress/constants';

const progressProps = {
  // States
  active: {
    type: Boolean,
    default: false
  },
  progress: {
    type: Number,
    default: 0
  },
  // UI attributes
  label: String,
  closed: {
    type: Boolean,
    default: false
  }
};

function useProgress($progress, props) {
  function setProgress(value) {
    if (
      $progress &&
      value >= UI_PROGRESS.VALUE.MIN &&
      value <= UI_PROGRESS.VALUE.MAX
    ) {
      $progress.progress = value;
    } else {
      console.warn(
        '[UiProgress/UiSpinner]',
        'The value should be between [0, 1]'
      );
    }
  }

  watch(
    () => props.progress,
    (val) => setProgress(val)
  );

  return { setProgress };
}

export { progressProps, useProgress };
