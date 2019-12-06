<template>
  <div :class="[$tt('body1'), 'demo--chips']">
    <header class="hero component">
      <ui-chips>
        <ui-chip v-touch>Chip One</ui-chip>
        <ui-chip v-touch>Chip Two</ui-chip>
        <ui-chip v-touch>Chip Three</ui-chip>
      </ui-chips>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demos'" :class="$tt('headline4')">1. Example</h4>
      <section class="example">
        <h2>1.1 Input Chips</h2>
        <ui-textfield
          outlined
          v-model="name"
          class="demo-tf-add-space"
          id="input-chip-set-input"
          placeholder="Chip text"
        ></ui-textfield>
        <br />
        <ui-button raised dense id="input-chip-set-button" @click="addOne"
          >Add Input Chip</ui-button
        >
        <ui-button
          outlined
          dense
          id="input-chip-set-delete-button"
          @click="removeLastOne"
          >Delete Last Chip</ui-button
        >
        <ui-chips type="input" id="input-chip-set" :options="list">
          <ui-chip
            v-for="item in list"
            :key="item.id"
            icon="face"
            @remove="removeOneById(item.id)"
            >{{ item.name }}</ui-chip
          >
        </ui-chips>
        <ui-accordion>
          <ui-markdown :code="code[1]"></ui-markdown>
        </ui-accordion>
      </section>

      <section class="example">
        <h2>1.2 Choice Chips (selectedIndex: {{ selectedIndex }})</h2>
        <ui-chips type="choice" v-model="selectedIndex">
          <ui-chip
            v-if="choiceList.length"
            v-for="(item, index) in choiceList"
            :key="index"
            >{{ item }}</ui-chip
          >
        </ui-chips>
        <ui-accordion>
          <ui-markdown :code="code[2]"></ui-markdown>
        </ui-accordion>
      </section>

      <section class="example">
        <h2>1.3 Filter Chips</h2>
        <h4>No leading icon (selectedIndexes: {{ selectedValue }})</h4>
        <ui-chips type="filter" v-model="selectedValue">
          <ui-chip v-for="(item, index) in filterList" :key="index">{{
            item
          }}</ui-chip>
        </ui-chips>

        <h4>With leading icon (selectedIndexes: {{ selectedValue2 }})</h4>
        <ui-chips type="filter" v-model="selectedValue2">
          <ui-chip
            v-for="(item, index) in filterList2"
            :key="index"
            icon="face"
            :hidden="selectedValue2.includes(index)"
            >{{ item }}</ui-chip
          >
        </ui-chips>
        <ui-accordion>
          <ui-markdown :code="code[3]"></ui-markdown>
        </ui-accordion>
      </section>

      <section class="example">
        <h2>1.4 Action Chips</h2>
        <ui-chips>
          <ui-chip
            v-for="(item, index) in actionList"
            :key="index"
            :icon="item.icon"
            >{{ item.name }}</ui-chip
          >
        </ui-chips>
        <ui-accordion>
          <ui-markdown :code="code[4]"></ui-markdown>
        </ui-accordion>
      </section>

      <section class="example">
        <h2>1.5 Custom theme</h2>
        <ui-chips>
          <ui-chip
            v-for="(item, index) in actionList"
            :key="index"
            class="demo-chip custom-chip-primary"
            >{{ item.name }}</ui-chip
          >
        </ui-chips>
        <ui-chips>
          <ui-chip
            v-for="(item, index) in actionList"
            :key="index"
            class="demo-chip custom-chip-secondary"
            >{{ item.name }}</ui-chip
          >
        </ui-chips>
        <ui-accordion>
          <ui-markdown :code="code[5]"></ui-markdown>
        </ui-accordion>
      </section>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="chip-set"></ui-apidocs>
      <ui-apidocs name="chip"></ui-apidocs>
      <ui-apidocs name="chip-text"></ui-apidocs>
      <ui-apidocs name="chip-thumbnail"></ui-apidocs>
      <ui-apidocs name="chip-remove-icon"></ui-apidocs>
      <ui-apidocs name="chip-checkmark"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-cssdocs name="chips"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Chips'
  },
  mixins: [snippets],
  data() {
    return {
      lastId: 2,
      name: '',
      list: [],
      selectedIndex: 2,
      selectedValue: [1, 2],
      selectedValue2: [0],
      choiceList: [],
      filterList: [],
      filterList2: [],
      actionList: [
        {
          icon: 'wb_sunny',
          name: 'Turn on lights'
        },
        {
          icon: 'bookmark',
          name: 'Bookmark'
        },
        {
          icon: 'alarm',
          name: 'Set alarm'
        },
        {
          icon: 'directions',
          name: 'Get directions'
        }
      ]
    };
  },
  created() {
    this.showCode('chips', 5);
  },
  mounted() {
    setTimeout(() => {
      this.list = [
        {
          id: 1,
          name: 'Jane Smith'
        },
        {
          id: 2,
          name: 'John Doe'
        }
      ];
      this.choiceList = [
        'Extra Small',
        'Small',
        'Medium',
        'Large',
        'Extra Large'
      ];
      this.filterList = ['Tops', 'Bottoms', 'Shoes', 'Accessories'];
      this.filterList2 = ['Alice', 'Bob', 'Charlie', 'David'];
    }, 1000);
  },
  methods: {
    // Demo1
    addOne() {
      if (this.name.trim().length) {
        this.lastId++;
        this.list.push({
          id: this.lastId,
          name: this.name
        });
        this.name = '';
      }
    },
    removeLastOne() {
      this.list.pop();
    },
    removeOneById(id) {
      let index = this.list.findIndex(item => item.id === id);
      this.list.splice(index, 1);
    },
    // Demo2
    onChoice(e) {
      console.log(e);
    }
  }
};
</script>
