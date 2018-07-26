<template>
  <div class="demo--chips">
    <section class="hero component">
      <ui-chip-set>
        <ui-chip class="demo-chip">
          <ui-chip-text>Chip One</ui-chip-text>
        </ui-chip>
        <ui-chip class="demo-chip">
          <ui-chip-text>Chip Two</ui-chip-text>
        </ui-chip>
        <ui-chip class="demo-chip">
          <ui-chip-text>Chip Three</ui-chip-text>
        </ui-chip>
      </ui-chip-set>
    </section>

    <h3 :class="$tt('headline3')">0. Usage</h3>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h3 :class="$tt('headline3')">1. Example</h3>
    <section class="example">
      <h2>1.1 Input Chips</h2>
      <input id="input-chip-set-input" v-model="name" placeholder="Chip text">
      <ui-button dense id="input-chip-set-button"
        @click="addOne">
        Add Input Chip
      </ui-button>
      <ui-button dense id="input-chip-set-delete-button"
        @click="removeLastOne">
        Delete Last Chip
      </ui-button>
      <ui-chip-set input id="input-chip-set" :options="list">
        <ui-chip v-for="item in list" :key="item.id" class="demo-chip">
          <ui-chip-leading-icon>face</ui-chip-leading-icon>
          <ui-chip-text>{{ item.name }}</ui-chip-text>
          <ui-chip-trailing-icon @click="removeOneById(item.id)"></ui-chip-trailing-icon>
        </ui-chip>
      </ui-chip-set>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
    </section>

    <section class="example">
      <h2>1.2 Choice Chips (selectedIndex: {{ selectedIndex }})</h2>
      <ui-chip-set choice v-model="selectedIndex">
        <ui-chip v-for="(item, index) in choiceList"
          :key="index"
          class="demo-chip">
          <ui-chip-text>{{ item }}</ui-chip-text>
        </ui-chip>
      </ui-chip-set>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>
    </section>

    <section class="example">
      <h2>1.3 Filter Chips</h2>
      <h4>No leading icon (selectedIndexes: {{ selectedValue }})</h4>
      <ui-chip-set filter v-model="selectedValue">
        <ui-chip v-for="(item, index) in filterList"
          :key="index"
          class="demo-chip">
          <ui-chip-checkmark></ui-chip-checkmark>
          <ui-chip-text>{{ item }}</ui-chip-text>
        </ui-chip>
      </ui-chip-set>

      <h4>With leading icon (selectedIndexes: {{ selectedValue2 }})</h4>
      <ui-chip-set filter v-model="selectedValue2">
        <ui-chip v-for="(item, index) in filterList2"
          :key="index"
          class="demo-chip">
          <ui-chip-leading-icon :hidden="selectedValue2.includes(index)">face</ui-chip-leading-icon>
          <ui-chip-checkmark></ui-chip-checkmark>
          <ui-chip-text>{{ item }}</ui-chip-text>
        </ui-chip>
      </ui-chip-set>
      <ui-accordion>
        <ui-markdown :code="code[3]"></ui-markdown>
      </ui-accordion>
    </section>

    <section class="example">
      <h2>1.4 Action Chips</h2>
      <ui-chip-set>
        <ui-chip v-for="(item, index) in actionList"
          :key="index"
          class="demo-chip">
          <ui-chip-leading-icon>{{ item.icon }}</ui-chip-leading-icon>
          <ui-chip-text>{{ item.name }}</ui-chip-text>
        </ui-chip>
      </ui-chip-set>
      <ui-accordion>
        <ui-markdown :code="code[4]"></ui-markdown>
      </ui-accordion>
    </section>

    <section class="example">
      <h2>1.5 Custom theme</h2>
      <ui-chip-set>
        <ui-chip v-for="(item, index) in actionList"
          :key="index"
          class="demo-chip custom-chip-primary">
          <ui-chip-text>{{ item.name }}</ui-chip-text>
        </ui-chip>
      </ui-chip-set>
      <ui-chip-set>
        <ui-chip v-for="(item, index) in actionList"
          :key="index"
          class="demo-chip custom-chip-secondary">
          <ui-chip-text>{{ item.name }}</ui-chip-text>
        </ui-chip>
      </ui-chip-set>
      <ui-accordion>
        <ui-markdown :code="code[5]"></ui-markdown>
      </ui-accordion>
    </section>

    <h3 :class="$tt('headline3')">2. APIs</h3>
    <ui-apidocs name="chip-set"></ui-apidocs>
    <ui-apidocs name="chip"></ui-apidocs>
    <ui-apidocs name="chip-text"></ui-apidocs>
    <ui-apidocs name="chip-leading-icon"></ui-apidocs>
    <ui-apidocs name="chip-trailing-icon"></ui-apidocs>
    <ui-apidocs name="chip-checkmark"></ui-apidocs>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Chips'
  },
  mixins: [snippets],
  data() {
    return {
      lastId: 2,
      name: '',
      list: [
        {
          id: 1,
          name: 'Jane Smith'
        },
        {
          id: 2,
          name: 'John Doe'
        }
      ],
      selectedIndex: 2,
      selectedValue: [1, 2],
      selectedValue2: [0],
      choiceList: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
      filterList: ['Tops', 'Bottoms', 'Shoes', 'Accessories'],
      filterList2: ['Alice', 'Bob', 'Charlie', 'David'],
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
