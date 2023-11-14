<template>
  <div>
    <div class="photos">
      <div
        @beforeLoad="test1(n)"
        @afterLoaded="test2(n)"
        class="photo"
        v-for="n in 100"
        :data-src="`${remote}=${n}`"
        ref="photos1"
      ></div>
    </div>
    <div class="photos">
      <img
        class="photo"
        v-for="n in 100"
        :data-source="`${remote}=${n}`"
        ref="photos2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      remote: `https://picsum.photos/300/200?random`
    };
  },
  methods: {
    init() {
      this.$refs.photos1.forEach((el) => this.$lazyload(el));
      this.$refs.photos2.forEach((el) =>
        this.$lazyload(el, { attributeName: 'data-source' })
      );
    },
    test1(n) {
      console.log(`${n}th start.`);
    },
    test2(n) {
      console.log(`${n}th loaded.`);
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped>
.photos {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto 32px auto;
}
.photos .photo {
  display: inline-block;
  width: 300px;
  height: 200px;
  margin-right: 16px;
  margin-bottom: 16px;
  background-color: #eee;
}
</style>
