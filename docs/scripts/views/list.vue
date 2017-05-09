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
          <ul class="mdc-list mdc-list--two-line">
            <li class="mdc-list-item">
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
            </li>
          </ul>
        </section>
        <section>
          <h3>Text-Only (Dense)</h3>
          <ul class="mdc-list mdc-list--two-line mdc-list--dense">
            <li class="mdc-list-item">
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
            </li>
          </ul>
        </section>
        <section>
          <h3>Start Detail</h3>
          <ul class="mdc-list mdc-list--two-line">
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg"></span>
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg"></span>
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg"></span>
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
            </li>
          </ul>
        </section>
        <section>
          <h3>Start Detail (Dense)</h3>
          <ul class="mdc-list mdc-list--two-line mdc-list--dense">
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg"></span>
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg"></span>
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg"></span>
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
            </li>
          </ul>
        </section>
        <section>
          <h3>Avatar List</h3>
          <ul class="mdc-list mdc-list--two-line mdc-list--avatar-list">
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg"></span>
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg"></span>
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg"></span>
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
            </li>
          </ul>
        </section>
        <section>
          <h3>Avatar List (dense)</h3>
          <ul class="mdc-list mdc-list--two-line mdc-list--dense mdc-list--avatar-list">
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg"></span>
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg"></span>
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg"></span>
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
            </li>
          </ul>
        </section>
        <section>
          <h3>End Detail</h3>
          <ul class="mdc-list mdc-list--two-line">
            <li class="mdc-list-item">
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
              <span class="mdc-list-item__end-detail grey-bg"></span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
              <span class="mdc-list-item__end-detail grey-bg"></span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
              <span class="mdc-list-item__end-detail grey-bg"></span>
            </li>
          </ul>
        </section>
        <section>
          <h3>End Detail (Dense)</h3>
          <ul class="mdc-list mdc-list--two-line mdc-list--dense">
            <li class="mdc-list-item">
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
              <span class="mdc-list-item__end-detail grey-bg"></span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
              <span class="mdc-list-item__end-detail grey-bg"></span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__text">
                Two-line item
                <span class="mdc-list-item__text__secondary">Secondary text</span>
              </span>
              <span class="mdc-list-item__end-detail grey-bg"></span>
            </li>
          </ul>
        </section>
        <section>
          <h3>Example - Two-line avatar + text + icon</h3>
          <ul class="mdc-list mdc-list--two-line mdc-list--avatar-list two-line-avatar-text-icon-demo">
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg" role="presentation">
                <i class="material-icons" aria-hidden="true">folder</i>
              </span>
              <span class="mdc-list-item__text">
                Photos
                <span class="mdc-list-item__text__secondary">Jan 9, 2014</span>
              </span>
              <a href="#" class="mdc-list-item__end-detail material-icons"
                 aria-label="View more information" title="More info"
                 onclick="event.preventDefault();">
                info
              </a>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg" role="presentation">
                <i class="material-icons" aria-hidden="true">folder</i>
              </span>
              <span class="mdc-list-item__text">
                Recipes
                <span class="mdc-list-item__text__secondary">Jan 17, 2014</span>
              </span>
              <a href="#" class="mdc-list-item__end-detail material-icons"
                 aria-label="View more information" title="More info"
                 onclick="event.preventDefault();">
                info
              </a>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg" role="presentation">
                <i class="material-icons" aria-hidden="true">folder</i>
              </span>
              <span class="mdc-list-item__text">
                Work
                <span class="mdc-list-item__text__secondary">Jan 28, 2014</span>
              </span>
              <a href="#" class="mdc-list-item__end-detail material-icons"
                 aria-label="View more information" title="More info"
                 onclick="event.preventDefault();">
                info
              </a>
            </li>
          </ul>
        </section>
        <section class="mdc-theme--dark">
          <h3>Example - Two-line avatar + text + icon (Dark)</h3>
          <ul class="mdc-list mdc-list--two-line mdc-list--avatar-list two-line-avatar-text-icon-demo">
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg" role="presentation">
                <i class="material-icons" aria-hidden="true">folder</i>
              </span>
              <span class="mdc-list-item__text">
                Photos
                <span class="mdc-list-item__text__secondary">Jan 9, 2014</span>
              </span>
              <a href="#" class="mdc-list-item__end-detail material-icons"
                 aria-label="View more information" title="More info"
                 onclick="event.preventDefault();">
                info
              </a>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg" role="presentation">
                <i class="material-icons" aria-hidden="true">folder</i>
              </span>
              <span class="mdc-list-item__text">
                Recipes
                <span class="mdc-list-item__text__secondary">Jan 17, 2014</span>
              </span>
              <a href="#" class="mdc-list-item__end-detail material-icons"
                 aria-label="View more information" title="More info"
                 onclick="event.preventDefault();">
                info
              </a>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg" role="presentation">
                <i class="material-icons" aria-hidden="true">folder</i>
              </span>
              <span class="mdc-list-item__text">
                Work
                <span class="mdc-list-item__text__secondary">Jan 28, 2014</span>
              </span>
              <a href="#" class="mdc-list-item__end-detail material-icons"
                 aria-label="View more information" title="More info"
                 onclick="event.preventDefault();">
                info
              </a>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2>List Dividers</h2>
        <section>
          <h3>Full-Width Dividers</h3>
          <ul class="mdc-list">
            <li class="mdc-list-item">Single-line item - section 1</li>
            <li class="mdc-list-item">Single-line item - section 1</li>
            <li class="mdc-list-item">Single-line item - section 1</li>
            <li class="mdc-list-divider" role="separator"></li>
            <li class="mdc-list-item">Single-line item - section 2</li>
            <li class="mdc-list-item">Single-line item - section 2</li>
          </ul>
        </section>
        <section>
          <h3>Inset Dividers</h3>
          <ul class="mdc-list mdc-list--avatar-list">
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg"></span>
              Single-line item - section 1
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg"></span>
              Single-line item - section 1
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg"></span>
              Single-line item - section 1
            </li>
            <li class="mdc-list-divider mdc-list-divider--inset" role="separator"></li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg"></span>
              Single-line item - section 2
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__start-detail grey-bg"></span>
              Single-line item - section 2
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2>List Groups</h2>
        <section>
          <h3>Basic Usage</h3>
          <div class="mdc-list-group">
            <h3 class="mdc-list-group__subheader">List 1</h3>
            <ul class="mdc-list">
              <li class="mdc-list-item">Single-line item</li>
              <li class="mdc-list-item">Single-line item</li>
              <li class="mdc-list-item">Single-line item</li>
            </ul>
            <hr class="mdc-list-divider">
            <h3 class="mdc-list-group__subheader">List 2</h3>
            <ul class="mdc-list">
              <li class="mdc-list-item">Single-line item</li>
              <li class="mdc-list-item">Single-line item</li>
              <li class="mdc-list-item">Single-line item</li>
            </ul>
          </div>
        </section>
        <section>
          <h3>Example - Two-line Lists, Avatars, end detail, inset dividers</h3>
          <div class="mdc-list-group">
            <h3 class="mdc-list-group__subheader">Folders</h3>
            <ul class="mdc-list mdc-list--two-line mdc-list--avatar-list two-line-avatar-text-icon-demo">
              <li class="mdc-list-item">
                <span class="mdc-list-item__start-detail grey-bg" role="presentation">
                  <i class="material-icons" aria-hidden="true">folder</i>
                </span>
                <span class="mdc-list-item__text">
                  Photos
                  <span class="mdc-list-item__text__secondary">Jan 9, 2014</span>
                </span>
                <a href="#" class="mdc-list-item__end-detail material-icons"
                   aria-label="View more information" title="More info"
                   onclick="event.preventDefault();">
                  info
                </a>
              </li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__start-detail grey-bg" role="presentation">
                  <i class="material-icons" aria-hidden="true">folder</i>
                </span>
                <span class="mdc-list-item__text">
                  Recipes
                  <span class="mdc-list-item__text__secondary">Jan 17, 2014</span>
                </span>
                <a href="#" class="mdc-list-item__end-detail material-icons"
                   aria-label="View more information" title="More info"
                   onclick="event.preventDefault();">
                  info
                </a>
              </li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__start-detail grey-bg" role="presentation">
                  <i class="material-icons" aria-hidden="true">folder</i>
                </span>
                <span class="mdc-list-item__text">
                  Work
                  <span class="mdc-list-item__text__secondary">Jan 28, 2014</span>
                </span>
                <a href="#" class="mdc-list-item__end-detail material-icons"
                   aria-label="View more information" title="More info"
                   onclick="event.preventDefault();">
                  info
                </a>
              </li>
            </ul>
            <hr class="mdc-list-divider mdc-list-divider--inset">
            <h3 class="mdc-list-group__subheader">Files</h3>
            <ul class="mdc-list mdc-list--two-line mdc-list--avatar-list two-line-avatar-text-icon-demo">
              <li class="mdc-list-item">
                <span class="mdc-list-item__start-detail grey-bg" role="presentation">
                  <i class="material-icons" aria-hidden="true">insert_drive_file</i>
                </span>
                <span class="mdc-list-item__text">
                  Vacation Itinerary
                  <span class="mdc-list-item__text__secondary">Jan 10, 2014</span>
                </span>
                <a href="#" class="mdc-list-item__end-detail material-icons"
                   aria-label="View more information" title="More info"
                   onclick="event.preventDefault();">
                  info
                </a>
              </li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__start-detail grey-bg" role="presentation">
                  <i class="material-icons" aria-hidden="true">insert_drive_file</i>
                </span>
                <span class="mdc-list-item__text">
                  Kitchen Remodel
                  <span class="mdc-list-item__text__secondary">Jan 20, 2014</span>
                </span>
                <a href="#" class="mdc-list-item__end-detail material-icons"
                   aria-label="View more information" title="More info"
                   onclick="event.preventDefault();">
                  info
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section class="mdc-theme--dark">
          <h3>Example - Two-line Lists, Avatars, end detail, inset dividers (Dark)</h3>
          <div class="mdc-list-group">
            <h3 class="mdc-list-group__subheader">Folders</h3>
            <ul class="mdc-list mdc-list--two-line mdc-list--avatar-list two-line-avatar-text-icon-demo">
              <li class="mdc-list-item">
                <span class="mdc-list-item__start-detail grey-bg" role="presentation">
                  <i class="material-icons" aria-hidden="true">folder</i>
                </span>
                <span class="mdc-list-item__text">
                  Photos
                  <span class="mdc-list-item__text__secondary">Jan 9, 2014</span>
                </span>
                <a href="#" class="mdc-list-item__end-detail material-icons"
                   aria-label="View more information" title="More info"
                   onclick="event.preventDefault();">
                  info
                </a>
              </li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__start-detail grey-bg" role="presentation">
                  <i class="material-icons" aria-hidden="true">folder</i>
                </span>
                <span class="mdc-list-item__text">
                  Recipes
                  <span class="mdc-list-item__text__secondary">Jan 17, 2014</span>
                </span>
                <a href="#" class="mdc-list-item__end-detail material-icons"
                   aria-label="View more information" title="More info"
                   onclick="event.preventDefault();">
                  info
                </a>
              </li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__start-detail grey-bg" role="presentation">
                  <i class="material-icons" aria-hidden="true">folder</i>
                </span>
                <span class="mdc-list-item__text">
                  Work
                  <span class="mdc-list-item__text__secondary">Jan 28, 2014</span>
                </span>
                <a href="#" class="mdc-list-item__end-detail material-icons"
                   aria-label="View more information" title="More info"
                   onclick="event.preventDefault();">
                  info
                </a>
              </li>
            </ul>
            <hr class="mdc-list-divider mdc-list-divider--inset">
            <h3 class="mdc-list-group__subheader">Files</h3>
            <ul class="mdc-list mdc-list--two-line mdc-list--avatar-list two-line-avatar-text-icon-demo">
              <li class="mdc-list-item">
                <span class="mdc-list-item__start-detail grey-bg" role="presentation">
                  <i class="material-icons" aria-hidden="true">insert_drive_file</i>
                </span>
                <span class="mdc-list-item__text">
                  Vacation Itinerary
                  <span class="mdc-list-item__text__secondary">Jan 10, 2014</span>
                </span>
                <a href="#" class="mdc-list-item__end-detail material-icons"
                   aria-label="View more information" title="More info"
                   onclick="event.preventDefault();">
                  info
                </a>
              </li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__start-detail grey-bg" role="presentation">
                  <i class="material-icons" aria-hidden="true">insert_drive_file</i>
                </span>
                <span class="mdc-list-item__text">
                  Kitchen Remodel
                  <span class="mdc-list-item__text__secondary">Jan 20, 2014</span>
                </span>
                <a href="#" class="mdc-list-item__end-detail material-icons"
                   aria-label="View more information" title="More info"
                   onclick="event.preventDefault();">
                  info
                </a>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section>
        <h2>Interactive Lists (with ink ripple)</h2>
        <section>
          <h3>Example - Interactive List</h3>
          <nav class="mdc-list" data-demo-interactive-list>
            <a href="#" class="mdc-list-item">
              <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">
                network_wifi
              </i>
              Wi-Fi
            </a>
            <a href="#" class="mdc-list-item">
              <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">
                bluetooth
              </i>
              Bluetooth
            </a>
            <a href="#" class="mdc-list-item">
              <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">
                data_usage
              </i>
              Data Usage
            </a>
          </nav>
        </section>
        <section class="mdc-theme--dark">
          <h3>Example - Interactive List (Dark Theme)</h3>
          <nav class="mdc-list" data-demo-interactive-list>
            <a href="#" class="mdc-list-item">
              <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">
                network_wifi
              </i>
              Wi-Fi
            </a>
            <a href="#" class="mdc-list-item">
              <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">
                bluetooth
              </i>
              Bluetooth
            </a>
            <a href="#" class="mdc-list-item">
              <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">
                data_usage
              </i>
              Data Usage
            </a>
          </nav>
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
