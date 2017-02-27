<template>
  <div class="demo-list">
    <div class="component-title">
      <h3>List</h3>
      <p>Customizable scrollable lists.</p>
    </div>

    <h4>Simple list</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <!-- Simple list -->
        <ui-list class="demo-list-item">
          <ui-item v-for="(item, index) in items" :key="index">
            {{ item }}
          </ui-item>
        </ui-list>
      </div>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>Icons</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <!-- Icon List -->
        <ui-list class="demo-list-icon">
          <ui-item v-for="(item, index) in items" :key="index">
            <template scope="props">
              <i :class="props.className.icon">person</i>
              {{ item }}
            </template>
          </ui-item>
        </ui-list>
      </div>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <h4>Avatars and actions</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <!-- List items with avatar and action -->
        <ui-list class="demo-list-action">
          <ui-item v-for="(item, index) in items" :key="index">
            <template scope="props">
              <i :class="props.className.avatar">person</i>
              {{ item }}
            </template>
            <template slot="action" scope="props">
              <a :class="props.className.action" href="#">
                <i class="material-icons">star</i>
              </a>
            </template>
          </ui-item>
        </ui-list>
      </div>
    </div>
    <ui-markdown :text="code[2]"></ui-markdown>

    <h4>Avatars and controls</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <!-- List with avatar and controls -->
        <ui-list class="demo-list-control">
          <ui-item v-for="(item, index) in items2" :key="index">
            <template scope="props">
              <i :class="props.className.avatar">{{ item.avatar }}</i>
              {{ item.name }}
            </template>
            <template slot="action" scope="props">
              <span :class="props.className.action">
                <ui-checkbox v-if="index === 0" :value="item.id" :model="item.value" effect></ui-checkbox>
                <ui-radio v-if="index === 1" :value="item.id" :model="item.value" effect></ui-radio>
                <ui-switch v-if="index === 2" :value="true" :model="item.value" effect></ui-switch>
              </span>
            </template>
          </ui-item>
        </ui-list>
      </div>
    </div>
    <ui-markdown :text="code[3]"></ui-markdown>

    <h4>Two line</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <!-- Two Line List with secondary info and action -->
        <ui-list class="demo-list-two" twoLine>
          <ui-item v-for="(item, index) in items2" :key="index">
            <template scope="props">
              <i :class="props.className.avatar">{{ item.avatar }}</i>
              <span>{{ item.name }}</span>
              <span :class="props.className.subtitle">62 Episodes</span>
            </template>
            <template slot="action" scope="props">
              <span v-if="item.info" :class="props.className.info">{{ item.info }}</span>
              <a :class="props.className.action" href="#">
                <i class="material-icons">star</i>
              </a>
            </template>
          </ui-item>
        </ui-list>
      </div>
    </div>
    <ui-markdown :text="code[4]"></ui-markdown>

    <h4>Three line</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <!-- Three Line List with secondary info and action -->
        <ui-list class="demo-list-three" threeLine>
          <ui-item v-for="(item, index) in items2" :key="index">
            <template scope="props">
              <i :class="props.className.avatar">{{ item.avatar }}</i>
              <span>{{ item.name }}</span>
              <span :class="props.className.text">{{ item.text }}</span>
            </template>
            <template slot="action" scope="props">
              <a :class="props.className.action" href="#">
                <i class="material-icons">star</i>
              </a>
            </template>
          </ui-item>
        </ui-list>
      </div>
    </div>
    <ui-markdown :text="code[5]"></ui-markdown>

    <ui-apidoc name="list"></ui-apidoc>
    <ui-apidoc name="item"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      items: [
        'Bryan Cranston',
        'Aaron Paul',
        'Bob Odenkirk'
      ],
      items2: [{
        id: 1,
        avatar: 'person',
        name: 'Bryan Cranston',
        text: 'Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.',
        info: 'Actor',
        value: true
      }, {
        id: 2,
        avatar: 'person',
        name: 'Aaron Paul',
        text: 'Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the "Need For Speed" Movie.',
        value: 0
      }, {
        id: 3,
        avatar: 'person',
        name: 'Bob Odenkirk',
        text: 'Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called "Better Call Saul".',
        value: true
      }]
    };
  },
  created() {
    this.showCode('list', 6);
  }
};
</script>
