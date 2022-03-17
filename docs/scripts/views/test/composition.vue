<template>
  <div ref="root">Composition API</div>

  <ui-dialog v-model="open">
    <ui-dialog-content>
      <ui-form type="|">
        <!-- <template v-for="i in 6" :key="i">
          <ui-form-field>
            <ui-textfield v-model="value" required>label</ui-textfield>
          </ui-form-field>
        </template> -->
        <ui-form-field>
          <ui-select v-model="value2" :options="options" required>
            label
          </ui-select>
        </ui-form-field>
        <ui-form-field>
          <ui-autocomplete
            v-model="keywords"
            :source="source"
            placeholder="Try to type"
          ></ui-autocomplete>
        </ui-form-field>
      </ui-form>
    </ui-dialog-content>
  </ui-dialog>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted } from 'vue';

const root = ref(null);

const source = [
  'ActionScript',
  'AppleScript',
  'Asp',
  'BASIC',
  'C',
  'C++',
  'Clojure',
  'COBOL',
  'ColdFusion',
  'Erlang',
  'Fortran',
  'Groovy',
  'Haskell',
  'Java',
  'JavaScript',
  'Lisp',
  'Perl',
  'PHP',
  'Python',
  'Ruby',
  'Scala',
  'Scheme'
];

const options = [
  {
    label: 'A',
    value: 1
  },
  {
    label: 'B',
    value: 2
  },
  {
    label: 'C',
    value: 3
  },
  {
    label: 'D',
    value: 4
  },
  {
    label: 'A',
    value: 5
  },
  {
    label: 'B',
    value: 6
  },
  {
    label: 'C',
    value: 7
  },
  {
    label: 'D',
    value: 8
  },
  {
    label: 'A',
    value: 9
  },
  {
    label: 'B',
    value: 10
  },
  {
    label: 'C',
    value: 11
  },
  {
    label: 'D',
    value: 12
  },
  {
    label: 'A',
    value: 13
  },
  {
    label: 'B',
    value: 14
  },
  {
    label: 'C',
    value: 15
  },
  {
    label: 'D',
    value: 16
  }
];

const state = reactive({
  value: '',
  value2: '',
  keywords: '',
  open: false
});
const { value, value2, keywords, open } = toRefs(state);

onMounted(() => {
  console.log(root.value);

  setTimeout(() => {
    state.open = true;
  });
});
</script>

<style></style>
