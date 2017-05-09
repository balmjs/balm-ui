<template>
  <li class="mdc-list-item">
    <slot name="before" :className="CLASSNAME_START_DETAIL"></slot>
    <slot :className="textClassName"></slot>
    <slot name="after" :className="CLASSNAME_END_DETAIL"></slot>
  </li>
</template>

<script>
const CLASSNAME_START_DETAIL = 'mdc-list-item__start-detail';
const CLASSNAME_TEXT_PRIMARY = 'mdc-list-item__text';
const CLASSNAME_TEXT_SECONDARY = 'mdc-list-item__text__secondary';
const CLASSNAME_END_DETAIL = 'mdc-list-item__end-detail';

export default {
  name: 'ui-item',
  data() {
    return {
      CLASSNAME_START_DETAIL,
      textClassName: {
        primary: CLASSNAME_TEXT_PRIMARY,
        secondary: CLASSNAME_TEXT_SECONDARY
      },
      CLASSNAME_END_DETAIL
    };
  }
};
</script>
