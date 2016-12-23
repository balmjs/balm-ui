<template>
  <ul class="mdl-list">
    <li v-for="(item, index) in items" :class="className">
      <div class="mdl-list__item-primary-content">
        <slot name="avatar"
          v-if="item.avatar"
          :className="avatarClassName"
          :avatar="item.avatar">
          <i :class="avatarClassName">{{ item.avatar }}</i>
        </slot>
        <slot name="icon"
          v-if="item.icon"
          :className="iconClassName"
          :icon="item.icon">
          <i :class="iconClassName">{{ item.icon }}</i>
        </slot>
        <slot name="primary"
          :item="item"
          :content="item.content">
          <span>{{ item.content || item }}</span>
        </slot>
        <slot name="sub-title"
          v-if="item.subTitle"
          :className="subTitleClassName"
          :subTitle="item.subTitle">
          <span :class="subTitleClassName">{{ item.subTitle }}</span>
        </slot>
        <slot name="text"
          v-if="item.text && (twoLine || threeLine)"
          :className="textBodyClassName"
          :text="item.text">
          <span :class="textBodyClassName">{{ item.text }}</span>
        </slot>
      </div>
      <div class="mdl-list__item-secondary-content" v-if="twoLine || threeLine">
        <slot name="secondary"
          v-if="item.child && item.child.content"
          :item="item"
          :content="item.child.content">
          <span>{{ item.child.content }}</span>
        </slot>
        <slot name="info"
          v-if="item.child && item.child.info"
          :className="infoClassName"
          :info="item.child.info">
          <span :class="infoClassName">{{ item.child.info }}</span>
        </slot>
        <slot name="action"
          :className="actionClassName"
          :item="item"
          :index="index">
          <!-- fallback content here -->
        </slot>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ui-list',
  props: {
    items: {
      type: Array,
      default: []
    },
    // Defines the List's Items as Two Line
    twoLine: {
      type: Boolean,
      default: false
    },
    // Defines the List's Items as a Three Line
    threeLine: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      avatarClassName: 'material-icons mdl-list__item-avatar',
      iconClassName: 'material-icons mdl-list__item-icon',
      subTitleClassName: 'mdl-list__item-sub-title',
      textBodyClassName: 'mdl-list__item-text-body',
      infoClassName: 'mdl-list__item-secondary-info',
      actionClassName: 'mdl-list__item-secondary-action'
    };
  },
  computed: {
    className() {
      return {
        'mdl-list__item': true,
        'mdl-list__item--two-line': this.twoLine,
        'mdl-list__item--three-line': this.threeLine
      };
    }
  }
};
</script>
