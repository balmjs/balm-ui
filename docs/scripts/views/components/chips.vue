<template>
  <div class="demo--chips">
    <section class="hero">
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

    <section class="example">
      <h2>Input Chips</h2>
      <input id="input-chip-set-input" v-model="name" placeholder="Chip text">
      <ui-button dense id="input-chip-set-button"
        @click="addOne">
        Add Input Chip
      </ui-button>
      <ui-button dense id="input-chip-set-delete-button"
        @click="removeLastOne">
        Delete Last Chip
      </ui-button>
      <ui-chip-set input id="input-chip-set" :items="list">
        <ui-chip v-for="item in list" :key="item.id" class="demo-chip">
          <ui-chip-leading-icon>face</ui-chip-leading-icon>
          <ui-chip-text>{{ item.name }}</ui-chip-text>
          <ui-chip-trailing-icon @click="removeOneById(item.id)"></ui-chip-trailing-icon>
        </ui-chip>
      </ui-chip-set>
    </section>

    <section class="example">
      <h2>Choice Chips (selectedIndex: {{ selectedIndex }})</h2>
      <ui-chip-set choice v-model="selectedIndex">
        <ui-chip v-for="(item, index) in choiceList"
          :key="index"
          class="demo-chip">
          <ui-chip-text>{{ item }}</ui-chip-text>
        </ui-chip>
      </ui-chip-set>
    </section>

    <section class="example">
      <h2>Filter Chips</h2>
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
    </section>

    <section class="example">
      <h2>Action Chips</h2>
      <ui-chip-set>
        <ui-chip v-for="(item, index) in actionList"
          :key="index"
          class="demo-chip">
          <ui-chip-leading-icon>{{ item.icon }}</ui-chip-leading-icon>
          <ui-chip-text>{{ item.name }}</ui-chip-text>
        </ui-chip>
      </ui-chip-set>
    </section>

    <section class="example">
      <h2>Custom theme</h2>
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
    </section>
  </div>
</template>

<script>
export default {
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
