<template>
  <!-- Container -->
  <div :class="className">
    <!-- Column header / Sorting tool -->
    <!-- Table content -->
    <table class="mdc-data-table__table" aria-label="Dessert calories">
      <thead>
        <tr class="mdc-data-table__header-row">
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Dessert</th>
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Carbs (g)</th>
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Protein (g)</th>
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Comments</th>
        </tr>
      </thead>
      <tbody class="mdc-data-table__content">
        <tr class="mdc-data-table__row">
          <td class="mdc-data-table__cell">Frozen yogurt</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.0</td>
          <td class="mdc-data-table__cell">Super tasty</td>
        </tr>
        <tr class="mdc-data-table__row">
          <td class="mdc-data-table__cell">Ice cream sandwich</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">37</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.3</td>
          <td class="mdc-data-table__cell">I like ice cream more</td>
        </tr>
        <tr class="mdc-data-table__row">
          <td class="mdc-data-table__cell">Eclair</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">6.0</td>
          <td class="mdc-data-table__cell">New filing flavor</td>
        </tr>
      </tbody>
    </table>
    <!-- Pagination -->
  </div>
</template>

<script>
import { MDCDataTable } from '../../../material-components-web/data-table';

export default {
  name: 'ui-table',
  props: {
    thead: Array,
    tbody: Array
  },
  data() {
    return {
      $table: null
    };
  },
  computed: {
    className() {
      return {
        'mdc-data-table': true
      };
    }
  },
  mounted() {
    this.$table = new MDCDataTable(this.$el);
  }
};
</script>
