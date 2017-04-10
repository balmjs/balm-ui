```html
<ui-table
  :data="data"
  :caption="caption"
  :thead="thead"
  :tbody="tbody"
  :tfoot="tfoot"
  :action="action"
  :selectable="selectable"
  :checkboxList="checkboxList"
  @view="onView"
  @edit="onEdit"
  @delete="onDelete"
  @selected="onSelected"
  hasDetailView
  @view-detail="onViewDetail">
  <div slot="detail">
    {{ tableDetail }}
  </div>
</ui-table>
```

```js
export default {
  data() {
    return {
      data: [],
      caption: 'Table Caption',
      thead: [
        [{
          value: 'Base Info',
          col: 2,
          class: 'base-info'
        }, {
          value: 'Data Info',
          col: 2,
          class: 'data-info'
        }, {
          value: 'Operate',
          row: 2,
          align: 'center'
        }],
        [{
          value: 'ID',
          sort: 'asc',
          by: 'id',
          align: 'center'
        },
        {
          value: 'Name',
          align: 'left'
        },
        'Quantity',
        'Price']
      ],
      tbody: [
        {
          field: 'id',
          align: 'center'
        },
        {
          field: 'name',
          noNum: true,
          url: (data, index) => {
            return `#/detail/${data.id}`;
          }
        },
        {
          field: 'quantity',
          class: data => {
            return data.quantity > 20 ? 'green' : 'red';
          }
        },
        {
          field: 'price',
          raw: true,
          fn: data => {
            let price = data.price.toFixed(2);
            return `<b style="color:gold">$</b>${price}`;
          }
        }
      ],
      tfoot: [
        null,
        null,
        {
          name: 'sum',
          field: 'quantity'
        },
        {
          name: 'avg',
          field: 'price',
          raw: true,
          fn: result => {
            let price = result.toFixed(3);
            return `<b style="color:gold">$</b>${price}`;
          }
        }
      ],
      action: [{
        type: 'link',
        name: 'view',
        value: 'View'
      }, {
        type: 'icon',
        name: 'edit',
        value: '<i class="material-icons">mood</i>'
      }, {
        type: 'button',
        name: 'delete',
        value: 'Delete'
      }],
      selectable: 'left',
      checkboxList: [],
      tableDetail: 'Hello'
    }
  },
  methods: {
    onView(data) {
      console.log('view', data);
    },
    onEdit(data) {
      console.log('edit', data);
    },
    onDelete(data) {
      console.log('delete', data);
    },
    onSelected(data) {
      this.checkboxList = data;
    },
    onViewDetail(data) {
      // console.log('detail', data);
      this.tableDetail +=  ('-' + data.id);
    }
  }
};
```
