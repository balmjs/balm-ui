```html
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
```

```js
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
      ]
    };
  },
  methods: {
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
    }
  }
};
```
