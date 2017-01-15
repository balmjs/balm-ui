<template>
  <div class="demo-tooltip">
    <div class="component-title">
      <h3>Tooltip</h3>
      <p>Useful information on hover.</p>
    </div>

    <h4>{{ $t('tooltip.basic') }}</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-tooltip target="text-1" tips="tips-1"></ui-tooltip>
      </div>
      <div class="snippet-demo">
        <ui-tooltip target="text-2" tips="tips-2"></ui-tooltip>
      </div>
    </div>
    <ui-code language="html" :code="code1.html"></ui-code>

    <h4>{{ $t('tooltip.custom') }}</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-tooltip>
          <template slot="target">
            <ui-badge class="material-icons" overlap value="5">email</ui-badge>
          </template>
          <template slot="tips">
            <span>new message</span>
          </template>
        </ui-tooltip>
      </div>
    </div>
    <ui-code language="html" :code="code2.html"></ui-code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code1: {
        html: ''
      },
      code2: {
        html: ''
      }
    };
  },
  async created() {
    for (let i = 1; i <= 2; i++) {
      let template = await this.$http.get(`${this.$domain}/snippets/tooltip/demo${i}-template.html`);
      this[`code${i}`] = {
        html: template.data
      };
    }
  }
};
</script>
