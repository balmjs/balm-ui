<template>
  <div class="demo-home">
    <ui-badge value="99+">Badge</ui-badge>
    <hr>
    <ui-button>Button</ui-button>
    <hr>
    <ui-card border dp="2">
      <template slot="title" scope="props">
        <h2 :class="props.className.title">Card Title</h2>
        <h3 :class="props.className.subtitle">Sub Title</h3>
      </template>
      <p slot="text">Card Text</p>
      <p slot="actions">
        <ui-button>Card Button</ui-button>
      </p>
    </ui-card>
    <hr>
    <ui-chip>Chip</ui-chip>
    <hr>
    <ui-tabs :active="tab" @switched="onChange">
      <ui-panel tab="菜单1">
        <p>panel1</p>
      </ui-panel>
      <ui-panel tab="菜单2">
        <p>panel2</p>
      </ui-panel>
      <ui-panel tab="菜单3">
        <p>panel3</p>
      </ui-panel>
    </ui-tabs>
    <hr>
    <ui-loading isActive></ui-loading>
    <ui-loading type="1" isActive></ui-loading>
    <hr>
    <ui-menu name="menu2" :data="menus"></ui-menu>
    <hr>
    <ui-slider></ui-slider>
    <hr>
    <ui-button @click.native="showSnackbar">show snackbar</ui-button>
    <ui-snackbar message="hello snackbar" :active="active" @done="resetSnackbar"></ui-snackbar>
    <hr>
    <ui-checkbox value="A" :model="formData.options" @change="onOptionsChange">Option A</ui-checkbox>
    <ui-checkbox value="B" :model="formData.options" @change="onOptionsChange">Option B</ui-checkbox>
    <ui-checkbox value="C" :model="formData.options" @change="onOptionsChange">Option C</ui-checkbox>
    <br>
    <ui-radio value="F" :model="formData.gender" @change="onGenderChange">Female</ui-radio>
    <ui-radio value="M" :model="formData.gender" @change="onGenderChange">Male</ui-radio>
    <br>
    <ui-radio value="Y" :model="formData.answer" @change="onAnswerChange">Yes</ui-radio>
    <ui-radio value="N" :model="formData.answer" @change="onAnswerChange">No</ui-radio>
    <br>
    <ui-icon-toggle value="X" :model="formData.icons" @change="onIconsChange">X</ui-icon-toggle>
    <ui-icon-toggle value="Y" :model="formData.icons" @change="onIconsChange">Y</ui-icon-toggle>
    <ui-icon-toggle value="Z" :model="formData.icons" @change="onIconsChange">Z</ui-icon-toggle>
    <br>
    <ui-switch :model="formData.open" @change="onSwitchChange">On/Off</ui-switch>
    <hr>
    <ui-textfield label="Text field" :model="formData.text1" @input.native="onInputChange('text1', $event)"></ui-textfield>
    <ui-textfield label="Text field2" :model="formData.text2" @input.native="onInputChange('text2', $event)"></ui-textfield>
    <br>
    <ui-textfield type="textarea" label="Textarea" :model="formData.text3" @input.native="onInputChange('text3', $event)"></ui-textfield>
    <hr>
    <ui-tooltip name="tt1" target="Tool" tips="tips"></ui-tooltip>
    <hr>
    <ui-button effect @click.native="submit">Submit</ui-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      menus: [{
        url:'/a',
        name: 'Item A'
      }, {
        url:'/b',
        name: 'Item B',
        disabled: true
      }, {
        url:'/c',
        name: 'Item C'
      }],
      active: false,
      formData: {
        options: [],
        gender: '',
        answer: '',
        icons: [],
        open: '',
        text1: 'Hello',
        text2: 'World',
        text3: 'Content'
      }
    };
  },
  methods: {
    onChange(tab) {
      this.tab = tab;
    },
    showSnackbar() {
      this.active = true;
    },
    resetSnackbar() {
      this.active = false;
    },
    onOptionsChange(val) {
      this.formData.options = val;
    },
    onGenderChange(val) {
      this.formData.gender = val;
    },
    onAnswerChange(val) {
      this.formData.answer = val;
    },
    onIconsChange(val) {
      this.formData.icons = val;
    },
    onSwitchChange(val) {
      this.formData.open = val;
    },
    onInputChange(field, event) {
      this.formData[field] = event.target.value;
    },
    submit() {
      console.info('submit');
      console.log(this.formData);
    }
  }
};
</script>

<style scoped>
.demo-home {
  padding: 20px;
}
</style>
