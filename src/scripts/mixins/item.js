import UI_LIST from '../components/list/constants';

export default {
  props: {
    // States
    selected: {
      type: Boolean,
      default: false
    },
    activated: {
      type: Boolean,
      default: false
    },
    // UI attributes
    firstPlaceholder: {
      type: Boolean,
      default: false
    },
    firstIcon: String,
    firstImage: String,
    lastPlaceholder: {
      type: Boolean,
      default: false
    },
    lastText: {
      type: String,
      default: ''
    },
    lastIcon: String,
    lastImage: String
  },
  computed: {
    className() {
      let result = [UI_LIST.SLOT_CLASS.item];

      if (this.selected) {
        result.push(UI_LIST.SLOT_CLASS.selected);
      } else if (this.activated) {
        result.push(UI_LIST.SLOT_CLASS.activated);
      }

      return result;
    },
    hasFirstTile() {
      return this.firstPlaceholder || this.firstIcon || this.firstImage;
    },
    hasLastTile() {
      return (
        this.lastPlaceholder || this.lastText || this.lastIcon || this.lastImage
      );
    }
  },
  created() {
    this.checkFirstTile();
    this.checkLastTile();
  },
  methods: {
    checkFirstTile() {
      if (this.firstIcon && this.firstImage) {
        console.warn(
          'You can only set an icon or image for the first tile in the row'
        );
      }
    },
    checkLastTile() {
      let hasMultiValue =
        [this.lastText, this.lastIcon, this.lastImage].filter(value => value)
          .length > 1;

      if (hasMultiValue) {
        console.warn(
          'You can only set a text, icon or image for the last tile in the row'
        );
      }
    }
  }
};
