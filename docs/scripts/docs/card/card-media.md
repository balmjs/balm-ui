```html
<ui-card-media>
  <!-- <ui-card-media-content> -->
</ui-card-media>
```

#### Props

| Name        | Type    | Default | Description                                                                                                     |
| ----------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `square`    | boolean | `false` | Optional. Automatically scales the media area's height to equal its width.                                      |
|             |
| `rectangle` | boolean | `false` | Optional. Automatically scales the media area's height according to its width, maintaining a 16:9 aspect ratio. |

#### Slots

| Name      | Props | Description                                                                   |
| --------- | ----- | ----------------------------------------------------------------------------- |
| `default` |       | The default slot holds the card media content component and can contain HTML. |

**Child components:**

- `<ui-card-media-content>`
