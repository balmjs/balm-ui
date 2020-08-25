- Base tooltip

  ```html
  <div v-tooltip="Tips text" aria-describedby="tooltip-id">Text</div>
  ```

- Custom tooltip

  ```html
  <div aria-describedby="tooltip-id">Text</div>
  <ui-tooltip id="tooltip-id">Tips text</ui-tooltip>
  ```

#### Props

| Name    | Type   | Default | Description                             |
| ------- | ------ | ------- | --------------------------------------- |
| `width` | number | `0`     | Custom width for the tooltip component. |
