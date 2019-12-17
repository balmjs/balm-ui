```html
<ui-textfield
  outlined
  v-model="name"
  class="demo-tf-add-space"
  id="input-chip-set-input"
  placeholder="Chip text"
></ui-textfield>
<br />
<ui-button raised dense id="input-chip-set-button" @click="addOne">
  Add Input Chip
</ui-button>
<ui-button
  outlined
  dense
  id="input-chip-set-delete-button"
  @click="removeLastOne"
>
  Delete Last Chip
</ui-button>

<ui-chips type="input" id="input-chip-set" :options="list">
  <ui-chip
    v-for="item in list"
    :key="item.id"
    icon="face"
    @remove="removeOneById(item.id)"
  >
    {{ item.name }}
  </ui-chip>
</ui-chips>
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
