<template>
  <div class="demo-chip">
    <div class="component-title">
      <h3>Chip</h3>
      <p>Represents complex entities in small blocks.</p>
    </div>

    <h4>Basic Chip</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-chip>Basic Chip</ui-chip>
      </div>
      <div class="snippet-demo">
        <ui-chip action>
          Deletable Chip
          <template slot="action" scope="props">
            <span :class="props.className">
              <i class="material-icons">cancel</i>
            </span>
          </template>
        </ui-chip>
      </div>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>Contact Chip</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-chip icon>
          <template slot="icon" scope="props">
            <span :class="[props.className, 'mdl-color--teal', 'mdl-color-text--white']">A</span>
          </template>
          Contact Chip
        </ui-chip>
      </div>
      <div class="snippet-demo">
        <ui-chip icon action>
          <template slot="icon" scope="props">
            <img :class="props.className" :src="avatar" alt="">
          </template>
          Deletable Contact Chip
          <template slot="action" scope="props">
            <span :class="props.className">
              <i class="material-icons">cancel</i>
            </span>
          </template>
        </ui-chip>
      </div>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <ui-apidoc name="chip"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      avatar: require('../../images/assets/demos/user.jpg')
    };
  },
  created() {
    this.showCode('chip', 2);
  }
};
</script>
