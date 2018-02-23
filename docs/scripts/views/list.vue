<template>
  <div class="demo--list">
    <section class="hero">
      <ui-list twoLine avatar effect class="two-line-avatar-text-icon-demo">
        <ui-item v-for="(item, index) in items" :key="index">
          <ui-item-start class="grey-bg" icon="folder"></ui-item-start>
          <ui-item-text>
            {{ item }}
            <ui-item-subtext>Jan 9, 2014</ui-item-subtext>
          </ui-item-text>
          <ui-item-end icon="info"></ui-item-end>
        </ui-item>
      </ui-list>
    </section>

    <div id="demo-wrapper">
      <section>
        <h2>Single-Line List</h2>
        <section>
          <h3>Text only</h3>
          <ui-list>
            <ui-item v-for="i in 3" :key="i">
              Single-line item
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Text only (dense)</h3>
          <ui-list dense>
            <ui-item v-for="i in 3" :key="i">
              Single-line item
            </ui-item>
          </ui-list>
        </section>
        <section class="mdc-theme--dark">
          <h3>Text Only (dark)</h3>
          <ui-list>
            <ui-item v-for="i in 3" :key="i">
              Single-line item
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Start Detail</h3>
          <aside><p><em>Note: The grey background is styled using demo placeholder styles</em></p></aside>
          <ui-list>
            <ui-item v-for="i in 3" :key="i">
              <ui-item-start class="grey-bg"></ui-item-start>
              Single-line item
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Start Detail (dense)</h3>
          <ui-list dense>
            <ui-item v-for="i in 3" :key="i">
              <ui-item-start class="grey-bg"></ui-item-start>
              Single-line item
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Start Detail Example - Icon with Text</h3>
          <ui-list id="icon-with-text-demo">
            <ui-item v-for="(item, index) in items2" :key="index">
              <ui-item-start :icon="item.icon"></ui-item-start>
              {{ item.text }}
            </ui-item>
          </ui-list>
        </section>
        <section class="mdc-theme--dark">
          <h3>Start Detail Example - Icon with Text (Dark)</h3>
          <ui-list>
            <ui-item v-for="(item, index) in items2" :key="index">
              <ui-item-start :icon="item.icon"></ui-item-start>
              {{ item.text }}
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Avatar List</h3>
          <ui-list avatar>
            <ui-item v-for="i in 3" :key="i">
              <ui-item-start class="grey-bg"></ui-item-start>
              Single-line item
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Avatar List (dense)</h3>
          <ui-list dense avatar>
            <ui-item v-for="i in 3" :key="i">
              <ui-item-start class="grey-bg"></ui-item-start>
              Single-line item
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Example - Avatar with Text</h3>
          <ui-list avatar>
            <ui-item v-for="(item, index) in items2" :key="index">
              <ui-item-start>
                <img :src="item.avatar" :alt="item.name">
              </ui-item-start>
              {{ item.name }}
            </ui-item>
          </ui-list>
        </section>
        <section class="mdc-theme--dark">
          <h3>Example - Avatar with Text (Dark)</h3>
          <ui-list avatar>
            <ui-item v-for="(item, index) in items2" :key="index">
              <ui-item-start>
                <img :src="item.avatar" :alt="item.name">
              </ui-item-start>
              {{ item.name }}
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>End Detail</h3>
          <ui-list>
            <ui-item v-for="i in 3" :key="i">
              Single-line item
              <ui-item-end class="grey-bg"></ui-item-end>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>End Detail (Dense)</h3>
          <ui-list dense>
            <ui-item v-for="i in 3" :key="i">
              Single-line item
              <ui-item-end class="grey-bg"></ui-item-end>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Avatar + End Detail</h3>
          <ui-list avatar>
            <ui-item v-for="i in 3" :key="i">
              <ui-item-start class="grey-bg"></ui-item-start>
              Single-line item
              <ui-item-end class="grey-bg"></ui-item-end>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Avatar + End Detail (Dense)</h3>
          <ui-list dense avatar>
            <ui-item v-for="i in 3" :key="i">
              <ui-item-start class="grey-bg"></ui-item-start>
              Single-line item
              <ui-item-end class="grey-bg"></ui-item-end>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Example - Avatar with Text and icon</h3>
          <ui-list avatar id="avatar-text-icon-demo-list">
            <ui-item v-for="(item, index) in items2" :key="index">
              <ui-item-start>
                <img :src="item.avatar" :alt="item.name">
              </ui-item-start>
              {{ item.name }}
              <ui-item-end>
                <ui-icon>{{ item.favorite ? icon.on.content : icon.off.content }}</ui-icon>
              </ui-item-end>
            </ui-item>
          </ui-list>
        </section>
        <section class="mdc-theme--dark">
          <h3>Example - Avatar with Text and icon (Dark)</h3>
          <ui-list avatar id="avatar-text-icon-demo-list">
            <ui-item v-for="(item, index) in items2" :key="index">
              <ui-item-start>
                <img :src="item.avatar" :alt="item.name">
              </ui-item-start>
              {{ item.name }}
              <ui-item-end>
                <ui-icon>{{ item.favorite ? icon.on.content : icon.off.content }}</ui-icon>
              </ui-item-end>
            </ui-item>
          </ui-list>
        </section>
      </section>
      <section>
        <h2>Two-line List</h2>
        <section>
          <h3>Text-Only</h3>
          <ui-list twoLine>
            <ui-item v-for="i in 3" :key="i">
              <ui-item-text>
                Two-line item
                <ui-item-subtext>Secondary text</ui-item-subtext>
              </ui-item-text>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Text-Only (Dense)</h3>
          <ui-list twoLine dense>
            <ui-item v-for="i in 3" :key="i">
              <ui-item-text>
                Two-line item
                <ui-item-subtext>Secondary text</ui-item-subtext>
              </ui-item-text>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Start Detail</h3>
          <ui-list twoLine>
            <ui-item v-for="i in 3" :key="i">
              <ui-item-start class="grey-bg"></ui-item-start>
              <ui-item-text>
                Two-line item
                <ui-item-subtext>Secondary text</ui-item-subtext>
              </ui-item-text>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Start Detail (Dense)</h3>
          <ui-list twoLine dense>
            <ui-item v-for="i in 3" :key="i">
              <ui-item-start class="grey-bg"></ui-item-start>
              <ui-item-text>
                Two-line item
                <ui-item-subtext>Secondary text</ui-item-subtext>
              </ui-item-text>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Avatar List</h3>
          <ui-list twoLine avatar>
            <ui-item v-for="i in 3" :key="i">
              <ui-item-start class="grey-bg"></ui-item-start>
              <ui-item-text>
                Two-line item
                <ui-item-subtext>Secondary text</ui-item-subtext>
              </ui-item-text>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Avatar List (dense)</h3>
          <ui-list twoLine dense avatar>
            <ui-item v-for="i in 3" :key="i">
              <ui-item-start class="grey-bg"></ui-item-start>
              <ui-item-text>
                Two-line item
                <ui-item-subtext>Secondary text</ui-item-subtext>
              </ui-item-text>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>End Detail</h3>
          <ui-list twoLine>
            <ui-item v-for="i in 3" :key="i">
              <ui-item-text>
                Two-line item
                <ui-item-subtext>Secondary text</ui-item-subtext>
              </ui-item-text>
              <ui-item-end class="grey-bg"></ui-item-end>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>End Detail (Dense)</h3>
          <ui-list twoLine dense>
            <ui-item v-for="i in 3" :key="i">
              <ui-item-text>
                Two-line item
                <ui-item-subtext>Secondary text</ui-item-subtext>
              </ui-item-text>
              <ui-item-end class="grey-bg"></ui-item-end>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Example - Two-line avatar + text + icon</h3>
          <ui-list twoLine avatar class="two-line-avatar-text-icon-demo">
            <ui-item v-for="(item, index) in items" :key="index">
              <ui-item-start class="grey-bg" icon="folder"></ui-item-start>
              <ui-item-text>
                {{ item }}
                <ui-item-subtext>Jan 9, 2014</ui-item-subtext>
              </ui-item-text>
              <ui-item-end icon="info"></ui-item-end>
            </ui-item>
          </ui-list>
        </section>
        <section class="mdc-theme--dark">
          <h3>Example - Two-line avatar + text + icon (Dark)</h3>
          <ui-list twoLine avatar class="two-line-avatar-text-icon-demo">
            <ui-item v-for="(item, index) in items" :key="index">
              <ui-item-start class="grey-bg" icon="folder"></ui-item-start>
              <ui-item-text>
                {{ item }}
                <ui-item-subtext>Jan 9, 2014</ui-item-subtext>
              </ui-item-text>
              <ui-item-end icon="info"></ui-item-end>
            </ui-item>
          </ui-list>
        </section>
      </section>
      <section>
        <h2>List Dividers</h2>
        <section>
          <h3>Full-Width Dividers</h3>
          <ui-list>
            <ui-item v-for="i in 3" :key="i">Single-line item - section 1</ui-item>
            <ui-item-divider></ui-item-divider>
            <ui-item v-for="i in 2" :key="i + 3">Single-line item - section 2</ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Inset Dividers</h3>
          <ui-list avatar>
            <ui-item v-for="i in 3" :key="i">
              <ui-item-start class="grey-bg"></ui-item-start>
              Single-line item - section 1
            </ui-item>
            <ui-item-divider inset></ui-item-divider>
            <ui-item v-for="i in 2" :key="i + 3">
              <ui-item-start class="grey-bg"></ui-item-start>
              Single-line item - section 2
            </ui-item>
          </ui-list>
        </section>
      </section>
      <section>
        <h2>List Groups</h2>
        <section>
          <h3>Basic Usage</h3>
          <ui-list-group>
            <ui-list-group-subheader>List 1</ui-list-group-subheader>
            <ui-list>
              <ui-item v-for="i in 3" :key="i">Single-line item</ui-item>
            </ui-list>
            <ui-list-divider></ui-list-divider>
            <ui-list-group-subheader>List 2</ui-list-group-subheader>
            <ui-list>
              <ui-item v-for="i in 3" :key="i">Single-line item</ui-item>
            </ui-list>
          </ui-list-group>
        </section>
        <section>
          <h3>Example - Two-line Lists, Avatars, end detail, inset dividers</h3>
          <ui-list-group>
            <ui-list-group-subheader>Folders</ui-list-group-subheader>
            <ui-list twoLine avatar class="two-line-avatar-text-icon-demo">
              <ui-item v-for="(item, index) in items" :key="index">
                <ui-item-start class="grey-bg" icon="folder"></ui-item-start>
                <ui-item-text>
                  {{ item }}
                  <ui-item-subtext>Jan 9, 2014</ui-item-subtext>
                </ui-item-text>
                <ui-item-end icon="info"></ui-item-end>
              </ui-item>
            </ui-list>
            <ui-list-divider inset></ui-list-divider>
            <ui-list-group-subheader>Files</ui-list-group-subheader>
            <ui-list twoLine avatar class="two-line-avatar-text-icon-demo">
              <ui-item v-for="(item, index) in item3" :key="index">
                <ui-item-start class="grey-bg" icon="folder"></ui-item-start>
                <ui-item-text>
                  {{ item }}
                  <ui-item-subtext>Jan 9, 2014</ui-item-subtext>
                </ui-item-text>
                <ui-item-end icon="info"></ui-item-end>
              </ui-item>
            </ui-list>
          </ui-list-group>
        </section>
        <section class="mdc-theme--dark">
          <h3>Example - Two-line Lists, Avatars, end detail, inset dividers (Dark)</h3>
          <ui-list-group>
            <ui-list-group-subheader>Folders</ui-list-group-subheader>
            <ui-list twoLine avatar class="two-line-avatar-text-icon-demo">
              <ui-item v-for="(item, index) in items" :key="index">
                <ui-item-start class="grey-bg" icon="folder"></ui-item-start>
                <ui-item-text>
                  {{ item }}
                  <ui-item-subtext>Jan 9, 2014</ui-item-subtext>
                </ui-item-text>
                <ui-item-end icon="info"></ui-item-end>
              </ui-item>
            </ui-list>
            <ui-list-divider inset></ui-list-divider>
            <ui-list-group-subheader>Files</ui-list-group-subheader>
            <ui-list twoLine avatar class="two-line-avatar-text-icon-demo">
              <ui-item v-for="(item, index) in item3" :key="index">
                <ui-item-start class="grey-bg" icon="folder"></ui-item-start>
                <ui-item-text>
                  {{ item }}
                  <ui-item-subtext>Jan 9, 2014</ui-item-subtext>
                </ui-item-text>
                <ui-item-end icon="info"></ui-item-end>
              </ui-item>
            </ui-list>
          </ui-list-group>
        </section>
      </section>
      <section>
        <h2>Interactive Lists (with ink ripple)</h2>
        <section>
          <h3>Example - Interactive List</h3>
          <ui-list-nav>
            <ui-item-link v-for="(item, index) in items2" :key="index">
              <ui-item-start :icon="item.icon"></ui-item-start>
              {{ item.name }}
            </ui-item-link>
          </ui-list-nav>
        </section>
        <section class="mdc-theme--dark">
          <h3>Example - Interactive List (Dark Theme)</h3>
          <ui-list-nav>
            <ui-item-link v-for="(item, index) in items2" :key="index">
              <ui-item-start :icon="item.icon"></ui-item-start>
              {{ item.name }}
            </ui-item-link>
          </ui-list-nav>
        </section>
      </section>
    </div>

    <!-- <ui-apidoc name="list"></ui-apidoc>
    <ui-apidoc name="item"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      items: ['Photos', 'Recipes', 'Work'],
      items2: [
        {
          icon: 'network_wifi',
          text: 'Wi-Fi',
          avatar: require('../../images/animal1.svg'),
          name: 'Panda',
          favorite: true
        },
        {
          icon: 'bluetooth',
          text: 'Bluetooth',
          avatar: require('../../images/animal2.svg'),
          name: 'Sleuth',
          favorite: false
        },
        {
          icon: 'data_usage',
          text: 'Data Usage',
          avatar: require('../../images/animal3.svg'),
          name: 'Brown Bear',
          favorite: false
        }
      ],
      icon: {
        on: { content: 'favorite', label: 'Remove From Favorites' },
        off: { content: 'favorite_border', label: 'Add to Favorites' }
      },
      item3: ['Vacation Itinerary', 'Kitchen Remodel']
    };
  },
  created() {
    // this.showCode('list', 6);
  }
};
</script>
