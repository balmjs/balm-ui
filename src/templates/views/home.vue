<template>
  <div>

    <ui-tooltip :target="target" tips="请输入"></ui-tooltip>

    <ui-chip value="奥数都发局速读法"></ui-chip>

    <hr>
    <br>

    <ui-card :dp="2">
    </ui-card>

    <br>
    <hr>

    <ui-badge :class="'test'" value="99+" noBackground overlap>
      <b>Badge</b>
    </ui-badge>

    <ui-loading isActive></ui-loading>

    <ui-snackbar :message="popup.message" :active="popup.active" @done="hide"></ui-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popup: {
        message: 'Hello WOrld',
        active: false
      }
    };
  }
};
</script>
