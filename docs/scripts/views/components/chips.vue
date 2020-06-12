<template>
  <ui-page name="chips" demo-count="4" :apis="['chips', 'chip']">
    <template #hero>
      <ui-chips>
        <ui-chip v-a11y>Chip One</ui-chip>
        <ui-chip v-a11y>Chip Two</ui-chip>
        <ui-chip v-a11y>Chip Three</ui-chip>
      </ui-chips>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Input Chips</h6>
      <div class="demo">
        <ui-textfield
          id="input-chip-set-input"
          v-model="name"
          outlined
          class="demo-tf-add-space"
          placeholder="Chip text"
        ></ui-textfield>
        <br />
        <ui-button id="input-chip-set-button" raised dense @click="addOne">Add Input Chip</ui-button>
        <ui-button
          id="input-chip-set-delete-button"
          outlined
          dense
          @click="removeLastOne"
        >Delete Last Chip</ui-button>
        <ui-chips id="input-chip-set" type="input" :options="list">
          <ui-chip
            v-for="item in list"
            :key="item.id"
            icon="face"
            @remove="removeOneById(item.id)"
          >{{ item.name }}</ui-chip>
        </ui-chips>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Choice Chips (selectedIndex: {{ selectedIndex }})</h6>
      <div v-if="choiceList.length" class="demo">
        <ui-chips v-model="selectedIndex" type="choice">
          <ui-chip v-for="(item, index) in choiceList" :key="index">{{ item }}</ui-chip>
        </ui-chips>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.3 Filter Chips</h6>
      <div class="demo">
        <p>No leading icon (selectedIndexes: {{ selectedValue }})</p>
        <ui-chips v-model="selectedValue" type="filter">
          <ui-chip v-for="(item, index) in filterList" :key="index">{{ item }}</ui-chip>
        </ui-chips>

        <p>With leading icon (selectedIndexes: {{ selectedValue2 }})</p>
        <ui-chips v-model="selectedValue2" type="filter">
          <ui-chip
            v-for="(item, index) in filterList2"
            :key="index"
            icon="face"
            :hidden="selectedValue2.includes(index)"
          >{{ item }}</ui-chip>
        </ui-chips>
      </div>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.4 Action Chips</h6>
      <div class="demo">
        <ui-chips>
          <ui-chip
            v-for="(item, index) in actionList"
            :key="index"
            :icon="item.icon"
          >{{ item.name }}</ui-chip>
        </ui-chips>
      </div>
      <ui-snippet :code="$store.demos[4]"></ui-snippet>
    </section>
  </ui-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Chips'
  },
  data() {
    return {
      // demo
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
      let index = this.list.findIndex((item) => item.id === id);
      this.list.splice(index, 1);
    },
    // Demo2
    onChoice(e) {
      console.log(e);
    }
  }
};
</script>
