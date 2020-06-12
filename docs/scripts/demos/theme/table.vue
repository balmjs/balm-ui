<template>
  <section class="component-section">
    <h6 :class="$tt('headline6')">Data Table</h6>
    <div class="component-wrapper">
      <ui-table
        v-model="selectedRows"
        :data="data"
        :thead="thead"
        :tbody="tbody"
        row-checkbox
        selected-key="id"
      ></ui-table>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          dessert: 'Froyo',
          carbs: 24,
          protein: 4.0
        },
        {
          id: 2,
          dessert: 'Eclair',
          carbs: 37,
          protein: 4.3
        }
      ],
      thead: ['Dessert', 'Carbs (g)', 'Protein (g)'],
      tbody: ['dessert', 'carbs', 'protein'],
      selectedRows: [2]
    };
  }
  // mounted() {
  //   setTimeout(() => {
  //     this.data = [
  //       {
  //         id: 1,
  //         dessert: 'Froyo',
  //         carbs: 24,
  //         protein: 4.0
  //       },
  //       {
  //         id: 2,
  //         dessert: 'Eclair',
  //         carbs: 37,
  //         protein: 4.3
  //       }
  //     ];
  //   }, 1e3);
  // }
};
</script>
