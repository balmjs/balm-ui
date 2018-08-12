export default {
  props: {
    firstPlaceholder: {
      type: Boolean,
      default: false
    },
    firstIcon: String,
    firstImage: String,
    lastText: {
      type: String,
      default: ''
    },
    lastIcon: String,
    lastImage: String
  },
  computed: {
    hasFirstTile() {
      return this.firstPlaceholder || this.firstIcon || this.firstImage;
    },
    hasLastTile() {
      return this.lastText || this.lastIcon || this.lastImage;
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
