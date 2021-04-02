- page

  ```html
  <ui-button @click="$bus.emit('global-message')">Show Banner</ui-button>
  ```

- layout

  ```html
  <ui-top-app-bar>...</ui-top-app-bar>
  <ui-banner
    v-model="showBanner"
    class="global-message-banner"
    primary-button-text="Cool"
    secondary-button-text="Good"
  >
    Do you like BalmUI
  </ui-banner>
  <!-- Content -->
  ```

  ```js
  export default {
    data() {
      return {
        showBanner: false
      };
    },
    mounted() {
      this.$bus.on('global-message', () => {
        this.showBanner = true;
      });
    }
  };
  ```

  > **`$bus`**: see BalmUI [event plugin](/#/misc/event) docs for details
