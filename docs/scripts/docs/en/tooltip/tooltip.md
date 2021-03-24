## Tooltip directive

```html
<div v-tooltip="'Tips text'" aria-describedby="tooltip-id">Text</div>
```

## Tooltip component

```html
<div aria-describedby="tooltip-id">Text</div>
<ui-tooltip id="tooltip-id">Tips text</ui-tooltip>
```

### Props

| Name    | Type   | Default | Description                       |
| ------- | ------ | ------- | --------------------------------- |
| `width` | number | `0`     | Custom max width for the tooltip. |
