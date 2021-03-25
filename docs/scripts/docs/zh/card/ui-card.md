```html
<ui-card>
  <ui-card-content>
    <ui-card-media>
      <ui-card-media-content></ui-card-media-content>
    </ui-card-media>
    <ui-card-text></ui-card-text>
  </ui-card-content>
  <ui-card-actions>
    <ui-card-buttons></ui-card-buttons>
    <ui-card-icons></ui-card-icons>
  </ui-card-actions>
</ui-card>
```

| Component                 | Description                                                                                                                   |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `<ui-card>`               | 卡片容器元素                                                                                                                  |
| `<ui-card-content>`       | 可选。卡的主要可点击区域。通常包含除 `<ui-card-actions>` 外的大多数（或全部）卡内容。仅适用于具有主表面应触发的主要动作的卡。 |
| `<ui-card-media>`         | 可选。显示自带 `background-size：cover` 属性的自定义 `background-image` 的媒体区域。                                          |
| `<ui-card-media-content>` | 可选。与媒体区域大小相同的绝对放置的框，用于在 `background-image` 顶部显示标题或图标。                                        |
| `<ui-card-text>`          | 可选。文字内容区域。                                                                                                          |
| `<ui-card-actions>`       | 可选。动作按钮或图标的容器元素。                                                                                              |
| `<ui-card-buttons>`       | 可选。 一组动作按钮，显示在卡的左侧（在 LTR 中），与 `<ui-card-icons>` 相邻。                                                 |
| `<ui-card-icons>`         | 可选。 一组补充动作图标，显示在卡的右侧（在 LTR 中），与 `<ui-card-buttons>` 相邻。                                           |
