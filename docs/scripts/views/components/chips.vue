<template>
  <docs-page name="chips" demo-count="4" :apis="['chips', 'chip']">
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
          v-model="name"
          outlined
          class="demo-tf-add-space"
          placeholder="Chip text"
        ></ui-textfield>
        <br />
        <ui-button raised dense @click="addOne">Add Input Chip</ui-button>
        <ui-button outlined dense @click="removeLastOne">
          Delete Last Chip
        </ui-button>
        <ui-chips v-if="list.length" :items="list" type="input">
          <ui-chip
            v-for="item in list"
            :key="item.id"
            icon="face"
            deletable
            @remove="removeOneById(item.id)"
          >
            {{ item.name }}
          </ui-chip>
        </ui-chips>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">
        1.2 Choice Chips (selectedValue: {{ selectedIndex }})
      </h6>
      <div class="demo">
        <ui-chips
          v-model="selectedIndex"
          type="choice"
          :options="radioOptions"
        ></ui-chips>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.3 Filter Chips</h6>
      <div class="demo">
        <p>No leading icon (selectedValue: {{ selectedValue }})</p>
        <ui-chips
          v-model="selectedValue"
          type="filter"
          :options="checkboxOptions"
        ></ui-chips>

        <p>With leading icon (selectedIndexes: {{ selectedValue2 }})</p>
        <ui-chips
          v-if="filterList.length"
          v-model="selectedValue2"
          type="filter"
        >
          <ui-chip
            v-for="(item, index) in filterList"
            :key="index"
            icon="face"
            :selected="selectedValue2.includes(index)"
          >
            {{ item }}
          </ui-chip>
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
          >
            {{ item.name }}
          </ui-chip>
        </ui-chips>
      </div>
      <ui-snippet :code="$store.demos[4]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
const RadioOptions = [
  {
    label: 'Extra Small',
    value: 1
  },
  {
    label: 'Small',
    value: 2
  },
  {
    label: 'Medium',
    value: 3
  },
  {
    label: 'Large',
    value: 4
  },
  {
    label: 'Extra Large',
    value: 5
  }
];

const CheckboxOptions = [
  {
    label: 'Tops',
    value: 'a'
  },
  {
    label: 'Bottoms',
    value: 'b'
  },
  {
    label: 'Shoes',
    value: 'c'
  },
  {
    label: 'Accessories',
    value: 'd'
  }
];

export default {
  metaInfo() {
    return {
      subtitle: 'Chips'
    };
  },
  data() {
    return {
      // demo
      lastId: 2,
      name: '',
      list: [],
      selectedIndex: '',
      selectedValue: [],
      selectedValue2: [],
      filterList: [],
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
      ],
      radioOptions: [],
      checkboxOptions: []
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

      this.selectedIndex = 3;
      this.selectedValue = ['a', 'c'];
      this.selectedValue2 = [1, 2];

      this.filterList = ['Alice', 'Bob', 'Charlie', 'David'];

      this.radioOptions = RadioOptions;
      this.checkboxOptions = CheckboxOptions;
    }, 1e3);
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
