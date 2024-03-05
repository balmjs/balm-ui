"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[658],{70658:function(t,e,n){n.r(e);e.default='<pre><code class="language-html">&lt;ui-form item-margin-bottom=&quot;10&quot;&gt;\n  &lt;ui-form-field class=&quot;form-item&quot;&gt;\n    &lt;ui-textfield v-model=&quot;formData.mobile&quot;&gt;Mobile&lt;/ui-textfield&gt;\n  &lt;/ui-form-field&gt;\n  &lt;ui-form-field class=&quot;form-item&quot;&gt;\n    &lt;ui-textfield v-model=&quot;formData.password&quot; input-type=&quot;password&quot;&gt;\n      Password\n    &lt;/ui-textfield&gt;\n  &lt;/ui-form-field&gt;\n  &lt;ui-form-field class=&quot;form-item&quot;&gt;\n    &lt;ui-textfield v-model=&quot;formData.repassword&quot; input-type=&quot;password&quot;&gt;\n      Repeat Password\n    &lt;/ui-textfield&gt;\n  &lt;/ui-form-field&gt;\n  &lt;ui-form-field&gt;\n    &lt;ui-select\n      v-model=&quot;formData.gender&quot;\n      :options=&quot;genderOptions&quot;\n      default-label=&quot;Unknown&quot;\n    &gt;\n      Gender\n    &lt;/ui-select&gt;\n  &lt;/ui-form-field&gt;\n\n  &lt;ui-alert v-if=&quot;message&quot; state=&quot;error&quot;&gt;{{ message }}&lt;/ui-alert&gt;\n\n  &lt;ui-form-field class=&quot;form-item form-actions&quot;&gt;\n    &lt;ui-button raised @click=&quot;onSubmit&quot;&gt;Submit&lt;/ui-button&gt;\n  &lt;/ui-form-field&gt;\n&lt;/ui-form&gt;\n</code></pre> <pre><code class="language-js">import { useValidator } from &#39;balm-ui&#39;;\n\nconst validations = [\n  {\n    key: &#39;mobile&#39;,\n    label: &#39;Mobile&#39;,\n    validator: &#39;required, mobile&#39;\n  },\n  {\n    key: &#39;password&#39;,\n    label: &#39;Password&#39;,\n    validator: &#39;required, password, minRule, maxRule&#39;,\n    minRule: {\n      validate(value) {\n        return value.trim().length &gt;= 6;\n      },\n      message: &#39;%s minLength &gt;= 6&#39;\n    },\n    maxRule: {\n      validate(value) {\n        return value.trim().length &lt;= 8;\n      },\n      message: &#39;%s maxLength &lt;= 8&#39;\n    }\n  },\n  {\n    key: &#39;repassword&#39;,\n    label: &#39;Repeat Password&#39;,\n    validator: &#39;required, password, repasswordRule&#39;,\n    repasswordRule: {\n      validate(value, data) {\n        return value === data.password;\n      },\n      message: &#39;repassword !== password&#39;\n    }\n  },\n  {\n    key: &#39;gender&#39;,\n    label: &#39;Gender&#39;,\n    validator: &#39;required&#39;\n  }\n];\n\nconst genderOptions = [\n  {\n    label: &#39;Male&#39;,\n    value: &#39;M&#39;\n  },\n  {\n    label: &#39;Female&#39;,\n    value: &#39;F&#39;\n  }\n];\n\nexport default {\n  data() {\n    return {\n      balmUI: useValidator(),\n      validations,\n      genderOptions,\n      formData: {\n        mobile: &#39;&#39;,\n        password: &#39;&#39;,\n        repassword: &#39;&#39;,\n        gender: &#39;&#39;\n      },\n      message: &#39;&#39;\n    };\n  },\n  methods: {\n    onSubmit() {\n      let result = this.balmUI.validate(this.formData);\n      let { valid, message } = result;\n      this.message = message;\n\n      if (valid) {\n        this.$toast(&#39;ok&#39;);\n      }\n    }\n  }\n};\n</code></pre> '}}]);