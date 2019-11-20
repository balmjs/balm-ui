```html
<div id="light-on-bg" class="demo-color-combo">
  <div>
    <ui-icon-button :class="$themeColor('on-primary')" :toggle="icon1">
    </ui-icon-button>
  </div>
  <div :class="$themeColor('on-primary')">Light icon on background</div>
</div>

<div id="dark-on-bg" class="demo-color-combo">
  <div :class="$themeColor('primary')">
    <ui-icon-button :toggle="icon1"> </ui-icon-button>
  </div>
  <div>Dark icon on background</div>
</div>

<div id="custom-color-combo" class="demo-color-combo">
  <div>
    <ui-icon-button :toggle="icon1"> </ui-icon-button>
  </div>
  <div>Custom color</div>
</div>
```

```css
/* SASS code */
.demo-color-combo {
  width: 250px;
  padding: 1rem;
  border-radius: 4px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
}

#light-on-bg {
  background-color: #3e82f7;
}
#light-on-bg .mdc-icon-button {
  @include mdc-icon-toggle-ink-color(white);
  @include mdc-states-base-color(white);
  @include mdc-states-hover-opacity(0.1);
  @include mdc-states-focus-opacity(0.3);
  @include mdc-states-press-opacity(0.4);
}

#dark-on-bg {
  background-color: #00bcd6;
}
#dark-on-bg .mdc-icon-button {
  @include mdc-icon-toggle-ink-color(black);
  @include mdc-states(black);
}

#custom-color-combo .mdc-icon-button {
  @include mdc-icon-toggle-ink-color(#de442c);
  @include mdc-states-base-color(#de442c);
  @include mdc-states-hover-opacity(0.09);
  @include mdc-states-focus-opacity(0.26);
  @include mdc-states-press-opacity(0.35);
}
```
