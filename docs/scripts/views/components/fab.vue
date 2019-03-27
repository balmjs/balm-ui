<template>
  <div :class="[$tt('body1'), 'demo--fab']">
    <section class="hero component">
      <ui-fab icon="favorite_border"></ui-fab>
    </section>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <ui-fab class="demo-fixed-fab" icon="mode_edit"></ui-fab>

      <h4 v-anchor:id="'ui-example'" :class="$tt('headline4')">1. Example</h4>
      <section>
        <legend :class="$tt('headline6')">1.1 FABs with Ripple</legend>
        <div class="demo-fabs">
          <figure>
            <ui-fab icon="favorite_border"></ui-fab>
            <figcaption>
              <div>Themed FAB</div>
            </figcaption>
          </figure>
          <figure>
            <ui-fab icon="favorite_border" mini></ui-fab>
            <figcaption>
              <div>Mini FAB</div>
            </figcaption>
          </figure>
          <figure>
            <ui-fab>
              <template #default="{ iconClass }">
                <svg-logo :class="iconClass"></svg-logo>
              </template>
            </ui-fab>
            <figcaption>
              <div>SVG FAB</div>
            </figcaption>
          </figure>
          <figure>
            <ui-fab mini>
              <template #default="{ iconClass }">
                <svg-logo :class="iconClass"></svg-logo>
              </template>
            </ui-fab>
            <figcaption>
              <div>SVG Mini FAB</div>
            </figcaption>
          </figure>
          <figure>
            <ui-fab class="lightGreen800Fab" icon="favorite_border"></ui-fab>
            <figcaption>
              <div>Customized Accessible FAB</div>
            </figcaption>
          </figure>
          <figure>
            <ui-fab class="lightGreen800Fab" icon="favorite_border" mini></ui-fab>
            <figcaption>
              <div>Customized Accessible Mini FAB</div>
            </figcaption>
          </figure>
        </div>
        <ui-accordion>
          <ui-markdown :code="code[1]"></ui-markdown>
        </ui-accordion>
      </section>

      <section>
        <legend :class="$tt('headline6')">Extended FAB</legend>
        <div class="demo-fabs">
          <figure class="demo-figure-fab-extended">
            <ui-fab extended class="demo-fab-extended-fluid">
              <template #before="{ iconClass }">
                <ui-icon :class="iconClass">add</ui-icon>
              </template>Create
            </ui-fab>
            <figcaption>
              <div>Auto width extended FAB (Responsive)</div>
            </figcaption>
          </figure>
        </div>
        <div class="demo-fabs">
          <figure class="demo-figure-fab-extended">
            <ui-fab extended class="demo-fab-extended-fluid">Create
              <template #after="{ iconClass }">
                <ui-icon :class="iconClass">add</ui-icon>
              </template>
            </ui-fab>
            <figcaption>
              <div>Auto width extended FAB (Text label followed by Icon)</div>
            </figcaption>
          </figure>
        </div>
        <div class="demo-fabs">
          <figure class="demo-figure-fab-extended">
            <ui-fab extended class="demo-fab-extended-without-icon">Create</ui-fab>
            <figcaption>
              <div>Extended FAB (without Icon)</div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section>
        <legend :class="$tt('headline6')">1.2 CSS Only FABs</legend>
        <div class="demo-fabs">
          <figure>
            <ui-fab cssOnly icon="favorite_border"></ui-fab>
          </figure>
          <figure>
            <ui-fab cssOnly icon="favorite_border" mini></ui-fab>
          </figure>
          <figure>
            <ui-fab cssOnly class="lightGreen800Fab" icon="favorite_border"></ui-fab>
          </figure>
          <figure>
            <ui-fab cssOnly class="lightGreen800Fab" icon="favorite_border" mini></ui-fab>
          </figure>
        </div>
        <ui-accordion>
          <ui-markdown :code="code[2]"></ui-markdown>
        </ui-accordion>
      </section>

      <section>
        <legend :class="$tt('headline6')">1.3 Example of Enter and Exit Motions</legend>
        <div class="fab-motion-container">
          <div class="fab-motion-container__view">
            <p>View one (with FAB)</p>
          </div>
          <div
            class="fab-motion-container__view"
            :class="{'fab-motion-container__view--exited': !exited}"
          >
            <p>View two (without FAB)</p>
            <p>
              <button
                type="button"
                id="enter-exit-back"
                :disabled="!exited"
                @click="$balmUI.onHide('exited')"
              >Go back</button>
            </p>
          </div>
          <ui-fab
            id="enter-exit-add"
            class="demo-absolute-fab"
            icon="add"
            :exited="exited"
            @click="$balmUI.onShow('exited')"
          >add</ui-fab>
        </div>
        <ui-accordion>
          <ui-markdown :code="code[3]"></ui-markdown>
        </ui-accordion>
      </section>

      <section>
        <fieldset>
          <legend :class="$tt('headline6')">1.4 Custom FABs (Font awesome)</legend>
          <ui-fab>
            <i class="fa fa-flag fa-lg"></i>
          </ui-fab>
          <ui-fab>
            <i class="fa fa-smile-o fa-lg"></i>
          </ui-fab>
          <ui-fab>
            <i class="fa fa-camera-retro fa-lg"></i>
          </ui-fab>
          <ui-fab>
            <i class="fa fa-spinner fa-pulse fa-lg fa-fw"></i>
          </ui-fab>
        </fieldset>
        <ui-accordion>
          <ui-markdown :code="code[4]"></ui-markdown>
        </ui-accordion>
      </section>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="fab"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">3. Sass Variables</h4>
      <ui-cssdocs name="fab"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Fab'
  },
  mixins: [snippets],
  data() {
    return {
      exited: false
    };
  },
  created() {
    this.showCode('fab', 4);
  }
};
</script>
