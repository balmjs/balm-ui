<template>
  <section class="component-section">
    <h6 :class="$tt('headline6')">Image List</h6>
    <div class="component-wrapper">
      <ui-image-list masonry>
        <template v-for="i in 6">
          <ui-image-item
            v-if="i === 1 || i === 5"
            :key="i"
            :image="cardMediaV"
          ></ui-image-item>
          <ui-image-item v-else :key="i" :image="cardMediaH"></ui-image-item>
        </template>
      </ui-image-list>
    </div>
  </section>
</template>

<script>
import cardMediaH from '@/assets/card-media-h.png';
import cardMediaV from '@/assets/card-media-v.png';

export default {
  data() {
    return {
      cardMediaH,
      cardMediaV
    };
  }
};
</script>
