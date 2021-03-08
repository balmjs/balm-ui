<template>
  <div>
    <ui-button icon="add" @click="$alert(msg)">SayHi</ui-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>
