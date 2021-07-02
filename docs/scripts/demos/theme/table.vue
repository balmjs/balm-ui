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
      >
        <template #action>
          <ui-icon>description</ui-icon>
          <ui-icon>edit</ui-icon>
          <ui-icon>delete</ui-icon>
        </template>
      </ui-table>
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
          name: 'body2'
        },
        {
          id: 2,
          name: 'body2'
        }
      ],
      thead: ['Subtitle2', 'Subtitle2', 'Actions'],
      tbody: [
        'id',
        'name',
        {
          slot: 'action'
        }
      ],
      selectedRows: [2]
    };
  }
};
</script>
