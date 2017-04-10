```html
<ui-table :data="data">
  <template slot="thead">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </template>
  <template slot="tbody" scope="props">
    <tr v-for="item in props.data">
      <td>{{ item.id }}</td>
      <td><a :href="`#${item.id}`">{{ item.name }}</a></td>
      <td>{{ item.quantity }}</td>
      <td>{{ item.price }}</td>
    </tr>
  </template>
</ui-table>
```

```js
export default {
  data() {
    return {
      data: []
    }
  }
};
```
