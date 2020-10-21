<template>
  <div>
    <ui-editor
      v-model="content"
      :toolbar="toolbar"
      :toolbar-options="toolbarOptions"
      :toolbar-custom-handlers="toolbarCustomHandlers"
    >
      <!-- <template #toolbar>
        <div id="toolbar">
          <div class="toolbar">
            <span class="ql-formats">
              <button
                v-tooltip="'Bold (Ctrl + B)'"
                class="ql-bold"
                aria-describedby="bold"
              ></button>
              <button class="ql-italic"></button>
              <button class="ql-underline"></button>

              <span class="ql-color"></span>
              <select class="ql-color"></select>

              <span class="ql-background"></span>
              <select class="ql-background"></select>

              <select class="ql-align"></select>

              <button class="ql-divider"></button>

              <select class="ql-header">
                <option selected></option>
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
                <option value="5"></option>
                <option value="6"></option>
              </select>

              <select class="ql-font">
                <option
                  v-for="(font, index) in [
                    'Arial',
                    'Arial Black',
                    'Comic Sans MS',
                    'Courier New',
                    'Tahoma',
                    'Georgia',
                    'Helvetica',
                    'Segoe UI',
                    'Sans-Serif',
                    'Impact',
                    'Times New Roman',
                    'Verdana'
                  ]"
                  :key="index"
                  :value="font.toLowerCase().replace(/\s/g, '-')"
                >
                  {{ font }}
                </option>
              </select>

              <select class="ql-size">
                <option
                  v-for="size in [
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    16,
                    18,
                    24,
                    36,
                    48,
                    60,
                    72,
                    96
                  ]"
                  :key="size"
                  :value="`${size}px`"
                >
                  {{ size }}px
                </option>
              </select>

              <select class="ql-lineheight">
                <option selected>Normal</option>
                <option
                  v-for="(lineHeight, index) in [
                    '1.0',
                    '1.2',
                    '1.5',
                    '1.6',
                    '1.8',
                    '2.0',
                    '2.4',
                    '2.8',
                    '3.0',
                    '4.0',
                    '5.0'
                  ]"
                  :key="index"
                  :value="lineHeight"
                >
                  {{ lineHeight }}
                </option>
              </select>
            </span>
          </div>
          <div class="toolbar"></div>
          <div class="sub-toolbar">
            <span class="ql-formats">
              <button class="ql-script" value="sub"></button>
              <button class="ql-script" value="super"></button>
            </span>
          </div>
        </div>
      </template> -->
    </ui-editor>
  </div>
</template>

<script>
import UiEditor from 'balm-ui-editor';

const toolbarOptions = {
  font: [
    'Arial',
    'Arial Black',
    'Comic Sans MS',
    'Courier New',
    'Tahoma',
    'Georgia',
    'Helvetica',
    'Segoe UI',
    'Impact',
    'Times New Roman',
    'Verdana'
  ],
  size: [
    '8px',
    '9px',
    '10px',
    '11px',
    '12px',
    '13px',
    '14px',
    '16px',
    '18px',
    '24px',
    '36px',
    '48px',
    '60px',
    '72px',
    '96px'
  ],
  lineheight: [
    '1',
    '1.2',
    '1.5',
    '1.6',
    '1.8',
    '2',
    '2.4',
    '2.8',
    '3',
    '4',
    '5'
  ]
};

export default {
  components: {
    UiEditor
  },
  data() {
    return {
      content: '',
      // toolbar: '#toolbar',
      toolbarOptions,
      toolbar: [
        'bold',
        'italic',
        'underline',
        'color',
        'background',
        { align: [] },
        { header: [false, 1, 2, 3, 4, 5, 6] },
        {
          font: [false, ...toolbarOptions.font]
        },
        {
          size: [false, ...toolbarOptions.size]
        },
        {
          lineheight: [false, ...toolbarOptions.lineheight]
        },
        'preview',
        'code'
      ],
      toolbarCustomHandlers: {}
    };
  }
};
</script>

<style></style>
