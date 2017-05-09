<template>
  <div class="mdc-toolbar-demo">
    <ui-radio name="type" value="0" :model="type" @change="onChangeType">default-toolbar</ui-radio>
    <ui-radio name="type" value="1" :model="type" @change="onChangeType">fixed-toolbar</ui-radio>
    <ui-radio name="type" value="2" :model="type" @change="onChangeType">waterfall-toolbar</ui-radio>
    <ui-radio name="type" value="3" :model="type" @change="onChangeType">default-flexible-toolbar</ui-radio>
    <ui-radio name="type" value="4" :model="type" @change="onChangeType">waterfall-flexible-toolbar</ui-radio>
    <ui-radio name="type" value="5" :model="type" @change="onChangeType">waterfall-toolbar-fix-last-row</ui-radio>
    <ui-radio name="type" value="6" :model="type" @change="onChangeType">waterfall-flexible-toolbar-custom-style</ui-radio>

    <ui-toolbar
      :class="type === 3 ? 'mdc-toolbar--flexible-default-behavior' : false"
      :id="type === 6 ? 'my-flexible-header' : false"
      :fixed="fixed"
      :waterfall="waterfall"
      :flexible="flexible"
      @change="onChangeToolbar">
      <ui-toolbar-section align="start">
        <template slot="before">
          <a href="#" class="material-icons">menu</a>
        </template>
        Title
      </ui-toolbar-section>
      <ui-toolbar-section align="end">
        <template slot="after">
          <a href="#" class="material-icons" aria-label="Download" alt="Download">file_download</a>
          <a href="#" class="material-icons" aria-label="Print this page" alt="Print this page">print</a>
          <a href="#" class="material-icons" aria-label="Bookmark this page" alt="Bookmark this page">bookmark</a>
        </template>
      </ui-toolbar-section>
    </ui-toolbar>
    <main>
      <div class="mdc-toolbar-fixed-adjust">
        <p class="demo-paragraph">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
        </p>
        <p class="demo-paragraph">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
        </p>
        <p class="demo-paragraph">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 0
    };
  },
  computed: {
    fixed() {
      let result = [1, 2, 4, 5, 6].indexOf(this.type) > -1;
      if (this.type === 5) {
        result = 'lastrow';
      }
      return result;
    },
    waterfall() {
      return [2, 4, 5, 6].indexOf(this.type) > -1;
    },
    flexible() {
      return [3, 4, 5, 6].indexOf(this.type) > -1;
    }
  },
  methods: {
    onChangeType(value) {
      this.type = +value;
    },
    onChangeToolbar(detail) {
      console.log(detail.flexibleExpansionRatio.toFixed(2));
    }
  }
};
</script>
