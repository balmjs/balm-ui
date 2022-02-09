<template>
  <docs-page name="form" :apis="['form', 'form-field']" demo-count="3">
    <template #hero>
      <h1 :class="$tt('headline1')">Form</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Horizontal Form</h6>
      <div class="demo">
        <ui-form nowrap item-margin-bottom="16" label-width="80">
          <template #default="{ subitemClass, actionClass }">
            <ui-form-field class="required">
              <label>Input:</label>
              <ui-textfield></ui-textfield>
            </ui-form-field>
            <ui-form-field>
              <label>Select:</label>
              <ui-select></ui-select>
            </ui-form-field>
            <ui-form-field>
              <label>Checkbox:</label>
              <div :class="subitemClass">
                <ui-form-field v-for="i in 3" :key="i">
                  <ui-checkbox
                    :value="i"
                    :input-id="`checkbox1-${i}`"
                  ></ui-checkbox>
                  <label :for="`checkbox1-${i}`">Checkbox {{ i }}</label>
                </ui-form-field>
              </div>
            </ui-form-field>
            <ui-form-field>
              <label>Radio:</label>
              <div :class="subitemClass">
                <ui-form-field v-for="i in 3" :key="i">
                  <ui-radio
                    v-model="checkedValue1"
                    :value="i"
                    :input-id="`radio1-${i}`"
                  ></ui-radio>
                  <label :for="`radio1-${i}`">Radio {{ i }}</label>
                </ui-form-field>
              </div>
            </ui-form-field>
            <ui-form-field :class="actionClass">
              <ui-button raised>Submit</ui-button>
              <ui-button outlined>Cancel</ui-button>
            </ui-form-field>
          </template>
        </ui-form>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Vertical Form</h6>
      <div class="demo">
        <ui-form type="|" item-margin-bottom="16" action-align="center">
          <template #default="{ subitemClass, actionClass }">
            <ui-form-field class="required">
              <label>Input:</label>
              <ui-textfield></ui-textfield>
            </ui-form-field>
            <ui-form-field>
              <label>Select:</label>
              <ui-select></ui-select>
            </ui-form-field>
            <ui-form-field>
              <label>Checkbox:</label>
              <div :class="subitemClass">
                <ui-form-field v-for="i in 3" :key="i">
                  <ui-checkbox
                    :value="i"
                    :input-id="`checkbox2-${i}`"
                  ></ui-checkbox>
                  <label :for="`checkbox2-${i}`">Checkbox {{ i }}</label>
                </ui-form-field>
              </div>
            </ui-form-field>
            <ui-form-field>
              <label>Radio:</label>
              <div :class="subitemClass">
                <ui-form-field v-for="i in 3" :key="i">
                  <ui-radio
                    v-model="checkedValue2"
                    :value="i"
                    :input-id="`radio2-${i}`"
                  ></ui-radio>
                  <label :for="`radio2-${i}`">Radio {{ i }}</label>
                </ui-form-field>
              </div>
            </ui-form-field>
            <ui-form-field :class="actionClass">
              <ui-button raised>Submit</ui-button>
              <ui-button outlined>Cancel</ui-button>
            </ui-form-field>
          </template>
        </ui-form>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.3 Conditions Form</h6>
      <div class="demo">
        <ui-form class="conditions-form" nowrap action-align="center">
          <template #default="{ itemClass, actionClass }">
            <ui-grid>
              <ui-grid-cell>
                <ui-form-field :class="[itemClass, 'required']">
                  <label>Label1</label>
                  <ui-textfield></ui-textfield>
                </ui-form-field>
              </ui-grid-cell>
              <ui-grid-cell>
                <ui-form-field :class="itemClass">
                  <label>Label2</label>
                  <ui-textfield></ui-textfield>
                </ui-form-field>
              </ui-grid-cell>
              <ui-grid-cell>
                <ui-form-field :class="itemClass">
                  <label>Label3</label>
                  <ui-select></ui-select>
                </ui-form-field>
              </ui-grid-cell>
              <ui-grid-cell>
                <ui-form-field :class="itemClass">
                  <label>Label4</label>
                  <ui-textfield></ui-textfield>
                </ui-form-field>
              </ui-grid-cell>
              <ui-grid-cell>
                <ui-form-field :class="itemClass">
                  <label>Label5</label>
                  <ui-select></ui-select>
                </ui-form-field>
              </ui-grid-cell>
            </ui-grid>
            <ui-form-field :class="actionClass">
              <ui-button raised>Search</ui-button>
              <ui-button outlined>Reset</ui-button>
            </ui-form-field>
          </template>
        </ui-form>
      </div>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Form'
  },
  data() {
    return {
      checkedValue1: 0,
      checkedValue2: 0
    };
  }
};
</script>
