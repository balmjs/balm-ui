<template>
  <div class="demo-list">
    <h1>MDC List</h1>
    <div id="demo-wrapper">
      <section>
        <h2>Single-Line List</h2>
        <section>
          <h3>Text only</h3>
          <ui-list>
            <ui-item v-for="(item, index) in items" :key="index">
              {{ item }}
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Text only (dense)</h3>
          <ui-list dense>
            <ui-item v-for="(item, index) in items" :key="index">
              {{ item }}
            </ui-item>
          </ui-list>
        </section>
        <section class="mdc-theme--dark">
          <h3>Text Only (dark)</h3>
          <ui-list>
            <ui-item v-for="(item, index) in items" :key="index">
              {{ item }}
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Start Detail</h3>
          <aside><em>Note: The grey background is styled using demo placeholder styles</em></aside>
          <ui-list>
            <ui-item v-for="(item, index) in items" :key="index">
              <template slot="before" scope="props">
                <span :class="[props.className, 'grey-bg']"></span>
              </template>
              {{ item }}
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Start Detail (dense)</h3>
          <ui-list dense>
            <ui-item v-for="(item, index) in items" :key="index">
              <template slot="before" scope="props">
                <span :class="[props.className, 'grey-bg']"></span>
              </template>
              {{ item }}
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Start Detail Example - Icon with Text</h3>
          <ui-list id="icon-with-text-demo">
            <ui-item v-for="(item, index) in items2" :key="index">
              <template slot="before" scope="props">
                <i :class="[props.className, 'material-icons']" aria-hidden="true">
                  {{ item.icon }}
                </i>
              </template>
              {{ item.name }}
            </ui-item>
          </ui-list>
        </section>
        <section class="mdc-theme--dark">
          <h3>Start Detail Example - Icon with Text (Dark)</h3>
          <ui-list>
            <ui-item v-for="(item, index) in items2" :key="index">
              <template slot="before" scope="props">
                <i :class="[props.className, 'material-icons']" aria-hidden="true">
                  {{ item.icon }}
                </i>
              </template>
              {{ item.name }}
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Avatar List</h3>
          <ui-list avatar>
            <ui-item v-for="(item, index) in items" :key="index">
              <template slot="before" scope="props">
                <span :class="[props.className, 'grey-bg']"></span>
              </template>
              {{ item }}
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Avatar List (dense)</h3>
          <ui-list dense avatar>
            <ui-item v-for="(item, index) in items" :key="index">
              <template slot="before" scope="props">
                <span :class="[props.className, 'grey-bg']"></span>
              </template>
              {{ item }}
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Example - Avatar with Text</h3>
          <ui-list avatar>
            <ui-item v-for="(item, index) in items2" :key="index">
              <template slot="before" scope="props">
                <img :class="[props.className]" :src="item.avatar" :alt="item.value">
              </template>
              {{ item.value }}
            </ui-item>
          </ui-list>
        </section>
        <section class="mdc-theme--dark">
          <h3>Example - Avatar with Text (Dark)</h3>
          <ui-list avatar>
            <ui-item v-for="(item, index) in items2" :key="index">
              <template slot="before" scope="props">
                <img :class="[props.className]" :src="item.avatar" :alt="item.value">
              </template>
              {{ item.value }}
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>End Detail</h3>
          <ui-list>
            <ui-item v-for="(item, index) in items" :key="index">
              {{ item }}
              <template slot="after" scope="props">
                <span :class="[props.className, 'grey-bg']"></span>
              </template>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>End Detail (Dense)</h3>
          <ui-list dense>
            <ui-item v-for="(item, index) in items" :key="index">
              {{ item }}
              <template slot="after" scope="props">
                <span :class="[props.className, 'grey-bg']"></span>
              </template>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Avatar + End Detail</h3>
          <ui-list avatar>
            <ui-item v-for="(item, index) in items" :key="index">
              <template slot="before" scope="props">
                <span :class="[props.className, 'grey-bg']"></span>
              </template>
              {{ item }}
              <template slot="after" scope="props">
                <span :class="[props.className, 'grey-bg']"></span>
              </template>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Avatar + End Detail (Dense)</h3>
          <ui-list dense avatar>
            <ui-item v-for="(item, index) in items" :key="index">
              <template slot="before" scope="props">
                <span :class="[props.className, 'grey-bg']"></span>
              </template>
              {{ item }}
              <template slot="after" scope="props">
                <span :class="[props.className, 'grey-bg']"></span>
              </template>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Example - Avatar with Text and icon</h3>
          <ui-list avatar id="avatar-text-icon-demo-list">
            <ui-item v-for="(item, index) in items2" :key="index">
              <template slot="before" scope="props">
                <img :class="props.className" :src="item.avatar" :alt="item.value">
              </template>
              {{ item.name }}
              <template slot="after" scope="props">
                <ui-icon-toggle :class="props.className" :on="icon.on" :off="icon.off" :model="item.favorite">
                  {{ item.favorite ? icon.on.content : icon.off.content }}
                </ui-icon-toggle>
              </template>
            </ui-item>
          </ui-list>
        </section>
        <section class="mdc-theme--dark">
          <h3>Example - Avatar with Text and icon (Dark)</h3>
          <ui-list avatar id="avatar-text-icon-demo-list">
            <ui-item v-for="(item, index) in items2" :key="index">
              <template slot="before" scope="props">
                <img :class="props.className" :src="item.avatar" :alt="item.value">
              </template>
              {{ item.name }}
              <template slot="after" scope="props">
                <ui-icon-toggle :class="props.className" :on="icon.on" :off="icon.off" :model="item.favorite">
                  {{ item.favorite ? icon.on.content : icon.off.content }}
                </ui-icon-toggle>
              </template>
            </ui-item>
          </ui-list>
        </section>
      </section>
      <section>
        <h2>Two-line List</h2>
        <section>
          <h3>Text-Only</h3>
          <ui-list twoLine>
            <ui-item v-for="(item, index) in items" :key="index">
              <template slot="default" scope="props">
                <span :class="props.className.text">
                  {{ item }}
                  <span :class="props.className.subtext">Secondary text</span>
                </span>
              </template>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Text-Only (Dense)</h3>
          <ui-list twoLine dense>
            <ui-item v-for="(item, index) in items" :key="index">
              <template slot="default" scope="props">
                <span :class="props.className.text">
                  {{ item }}
                  <span :class="props.className.subtext">Secondary text</span>
                </span>
              </template>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Start Detail</h3>
          <ui-list twoLine>
            <ui-item v-for="(item, index) in items" :key="index">
              <template slot="before" scope="props">
                <span :class="[props.className, 'grey-bg']"></span>
              </template>
              <template slot="default" scope="props">
                <span :class="props.className.text">
                  {{ item }}
                  <span :class="props.className.subtext">Secondary text</span>
                </span>
              </template>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Start Detail (Dense)</h3>
          <ui-list twoLine dense>
            <ui-item v-for="(item, index) in items" :key="index">
              <template slot="before" scope="props">
                <span :class="[props.className, 'grey-bg']"></span>
              </template>
              <template slot="default" scope="props">
                <span :class="props.className.text">
                  {{ item }}
                  <span :class="props.className.subtext">Secondary text</span>
                </span>
              </template>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Avatar List</h3>
          <ui-list twoLine avatar>
            <ui-item v-for="(item, index) in items" :key="index">
              <template slot="before" scope="props">
                <span :class="[props.className, 'grey-bg']"></span>
              </template>
              <template slot="default" scope="props">
                <span :class="props.className.text">
                  {{ item }}
                  <span :class="props.className.subtext">Secondary text</span>
                </span>
              </template>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Avatar List (dense)</h3>
          <ui-list twoLine dense avatar>
            <ui-item v-for="(item, index) in items" :key="index">
              <template slot="before" scope="props">
                <span :class="[props.className, 'grey-bg']"></span>
              </template>
              <template slot="default" scope="props">
                <span :class="props.className.text">
                  {{ item }}
                  <span :class="props.className.subtext">Secondary text</span>
                </span>
              </template>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>End Detail</h3>
          <ui-list twoLine>
            <ui-item v-for="(item, index) in items" :key="index">
              <template slot="default" scope="props">
                <span :class="props.className.text">
                  {{ item }}
                  <span :class="props.className.subtext">Secondary text</span>
                </span>
              </template>
              <template slot="after" scope="props">
                <span :class="[props.className, 'grey-bg']"></span>
              </template>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>End Detail (Dense)</h3>
          <ui-list twoLine dense>
            <ui-item v-for="(item, index) in items" :key="index">
              <template slot="default" scope="props">
                <span :class="props.className.text">
                  {{ item }}
                  <span :class="props.className.subtext">Secondary text</span>
                </span>
              </template>
              <template slot="after" scope="props">
                <span :class="[props.className, 'grey-bg']"></span>
              </template>
            </ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Example - Two-line avatar + text + icon</h3>
          <ui-list twoLine avatar class="two-line-avatar-text-icon-demo">
            <ui-item v-for="(item, index) in items" :key="index">
              <template slot="before" scope="props">
                <span :class="[props.className, 'grey-bg']">
                  <i class="material-icons" aria-hidden="true">folder</i>
                </span>
              </template>
              <template slot="default" scope="props">
                <span :class="props.className.text">
                  {{ item }}
                  <span :class="props.className.subtext">Jan 9, 2014</span>
                </span>
              </template>
              <template slot="after" scope="props">
                <a href="#" :class="[props.className, 'material-icons']"
                   aria-label="View more information" title="More info"
                   onclick="event.preventDefault();">
                  info
                </a>
              </template>
            </ui-item>
          </ui-list>
        </section>
        <section class="mdc-theme--dark">
          <h3>Example - Two-line avatar + text + icon (Dark)</h3>
          <ui-list twoLine avatar class="two-line-avatar-text-icon-demo">
            <ui-item v-for="(item, index) in items" :key="index">
              <template slot="before" scope="props">
                <span :class="[props.className, 'grey-bg']">
                  <i class="material-icons" aria-hidden="true">folder</i>
                </span>
              </template>
              <template slot="default" scope="props">
                <span :class="props.className.text">
                  {{ item }}
                  <span :class="props.className.subtext">Jan 9, 2014</span>
                </span>
              </template>
              <template slot="after" scope="props">
                <a href="#" :class="[props.className, 'material-icons']"
                   aria-label="View more information" title="More info"
                   onclick="event.preventDefault();">
                  info
                </a>
              </template>
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
            <ui-item v-for="i in 2" :key="i">Single-line item - section 2</ui-item>
          </ui-list>
        </section>
        <section>
          <h3>Inset Dividers</h3>
          <ui-list avatar>
            <ui-item v-for="i in 3" :key="i">
              <template slot="before" scope="props">
                <span :class="[props.className, 'grey-bg']"></span>
              </template>
              Single-line item - section 1
            </ui-item>
            <ui-item-divider inset></ui-item-divider>
            <ui-item v-for="i in 2" :key="i">
              <template slot="before" scope="props">
                <span :class="[props.className, 'grey-bg']"></span>
              </template>
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
            <template slot="default" scope="props">
              <h3 :class="props.className">List 1</h3>
              <ui-list>
                <ui-item v-for="i in 3" :key="i">Single-line item</ui-item>
              </ui-list>
              <ui-list-divider></ui-list-divider>
              <h3 :class="props.className">List 2</h3>
              <ui-list>
                <ui-item v-for="i in 3" :key="i">Single-line item</ui-item>
              </ui-list>
            </template>
          </ui-list-group>
        </section>
        <section>
          <h3>Example - Two-line Lists, Avatars, end detail, inset dividers</h3>
          <ui-list-group>
            <template slot="default" scope="props">
              <h3 :class="props.className">Folders</h3>
              <ui-list twoLine avatar class="two-line-avatar-text-icon-demo">
                <ui-item v-for="(item, index) in items" :key="index">
                  <template slot="before" scope="props">
                    <span :class="[props.className, 'grey-bg']">
                      <i class="material-icons" aria-hidden="true">folder</i>
                    </span>
                  </template>
                  <template slot="default" scope="props">
                    <span :class="props.className.text">
                      {{ item }}
                      <span :class="props.className.subtext">Jan 9, 2014</span>
                    </span>
                  </template>
                  <template slot="after" scope="props">
                    <a href="#" :class="[props.className, 'material-icons']"
                       aria-label="View more information" title="More info"
                       onclick="event.preventDefault();">
                      info
                    </a>
                  </template>
                </ui-item>
              </ui-list>
              <ui-list-divider inset></ui-list-divider>
              <h3 :class="props.className">Files</h3>
              <ui-list twoLine avatar class="two-line-avatar-text-icon-demo">
                <ui-item v-for="(item, index) in items" :key="index">
                  <template slot="before" scope="props">
                    <span :class="[props.className, 'grey-bg']">
                      <i class="material-icons" aria-hidden="true">folder</i>
                    </span>
                  </template>
                  <template slot="default" scope="props">
                    <span :class="props.className.text">
                      {{ item }}
                      <span :class="props.className.subtext">Jan 9, 2014</span>
                    </span>
                  </template>
                  <template slot="after" scope="props">
                    <a href="#" :class="[props.className, 'material-icons']"
                       aria-label="View more information" title="More info"
                       onclick="event.preventDefault();">
                      info
                    </a>
                  </template>
                </ui-item>
              </ui-list>
            </template>
          </ui-list-group>
        </section>
        <section class="mdc-theme--dark">
          <h3>Example - Two-line Lists, Avatars, end detail, inset dividers (Dark)</h3>
          <ui-list-group>
            <template slot="default" scope="props">
              <h3 :class="props.className">Folders</h3>
              <ui-list twoLine avatar class="two-line-avatar-text-icon-demo">
                <ui-item v-for="(item, index) in items" :key="index">
                  <template slot="before" scope="props">
                    <span :class="[props.className, 'grey-bg']">
                      <i class="material-icons" aria-hidden="true">folder</i>
                    </span>
                  </template>
                  <template slot="default" scope="props">
                    <span :class="props.className.text">
                      {{ item }}
                      <span :class="props.className.subtext">Jan 9, 2014</span>
                    </span>
                  </template>
                  <template slot="after" scope="props">
                    <a href="#" :class="[props.className, 'material-icons']"
                       aria-label="View more information" title="More info"
                       onclick="event.preventDefault();">
                      info
                    </a>
                  </template>
                </ui-item>
              </ui-list>
              <ui-list-divider inset></ui-list-divider>
              <h3 :class="props.className">Files</h3>
              <ui-list twoLine avatar class="two-line-avatar-text-icon-demo">
                <ui-item v-for="(item, index) in items" :key="index">
                  <template slot="before" scope="props">
                    <span :class="[props.className, 'grey-bg']">
                      <i class="material-icons" aria-hidden="true">folder</i>
                    </span>
                  </template>
                  <template slot="default" scope="props">
                    <span :class="props.className.text">
                      {{ item }}
                      <span :class="props.className.subtext">Jan 9, 2014</span>
                    </span>
                  </template>
                  <template slot="after" scope="props">
                    <a href="#" :class="[props.className, 'material-icons']"
                       aria-label="View more information" title="More info"
                       onclick="event.preventDefault();">
                      info
                    </a>
                  </template>
                </ui-item>
              </ui-list>
            </template>
          </ui-list-group>
        </section>
      </section>
      <section>
        <h2>Interactive Lists (with ink ripple)</h2>
        <section>
          <h3>Example - Interactive List</h3>
          <ui-list-nav>
            <template slot="default" scope="props">
              <ui-link item effect v-for="(item, index) in items2" :key="index">
                <i :class="[props.className.start, 'material-icons']" aria-hidden="true">
                  {{ item.icon }}
                </i>
                {{ item.name }}
              </ui-link>
            </template>
          </ui-list-nav>
        </section>
        <section class="mdc-theme--dark">
          <h3>Example - Interactive List (Dark Theme)</h3>
          <ui-list-nav>
            <template slot="default" scope="props">
              <ui-link item effect v-for="(item, index) in items2" :key="index">
                <i :class="[props.className.start, 'material-icons']" aria-hidden="true">
                  {{ item.icon }}
                </i>
                {{ item.name }}
              </ui-link>
            </template>
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
      items: [
        'Bryan Cranston',
        'Aaron Paul',
        'Bob Odenkirk'
      ],
      items2: [{
        avatar: require('../../images/animal1.svg'),
        icon: 'network_wifi',
        name: 'Wi-Fi',
        value: 'Panda',
        favorite: true
      }, {
        avatar: require('../../images/animal2.svg'),
        icon: 'bluetooth',
        name: 'Bluetooth',
        value: 'Sleuth',
        favorite: false
      }, {
        avatar: require('../../images/animal3.svg'),
        icon: 'data_usage',
        name: 'Data Usage',
        value: 'Brown Bear',
        favorite: false
      }],
      icon: {
        on: {content: 'favorite', label: 'Remove From Favorites'},
        off: {content: 'favorite_border', label: 'Add to Favorites'}
      }
    };
  },
  created() {
    // this.showCode('list', 6);
  }
};
</script>
