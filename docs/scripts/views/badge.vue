<template>
  <div class="demo-badge">
    <ui-badge :value="number" noBackground overlap>
      <b>Badge</b>
    </ui-badge>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      number: 0
    };
  },
  created() {
    this.timer = setInterval(() => {
      if (this.number === 99) {
        this.number = '99+';
        clearInterval(this.timer);
      } else {
        this.number++
      }
    }, 1000);
  }
};
</script>
