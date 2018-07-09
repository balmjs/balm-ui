<template>
  <div class="demo--fab">
    <section class="hero">
      <ui-fab icon="favorite_border"></ui-fab>
    </section>

    <h1 :class="$tt('headline4')">0. Usage</h1>
    <ui-markdown :text="code[0]"></ui-markdown>

    <ui-fab class="demo-fixed-fab" icon="mode_edit"></ui-fab>

    <section>
      <legend :class="$tt('headline4')">1. FABs with Ripple</legend>
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
            <template slot-scope="{ className }">
              <ui-logo :class="className.icon"></ui-logo>
            </template>
          </ui-fab>
          <figcaption>
            <div>SVG FAB</div>
          </figcaption>
        </figure>
        <figure>
          <ui-fab mini>
            <template slot-scope="{ className }">
              <ui-logo :class="className.icon"></ui-logo>
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
      <legend>Extended FAB</legend>
      <div class="demo-fabs">
        <figure class="demo-figure-fab-extended">
          <ui-fab class="demo-fab-extended-fluid"
            icon="add"
            extended="after"
            label="Create">
          </ui-fab>
          <figcaption>
            <div>Auto width extended FAB (Responsive)</div>
          </figcaption>
        </figure>
      </div>
      <div class="demo-fabs">
        <figure class="demo-figure-fab-extended">
          <ui-fab class="demo-fab-extended-fluid"
            icon="add"
            extended="before"
            label="Create">
          </ui-fab>
          <figcaption>
            <div>Auto width extended FAB (Text label followed by Icon)</div>
          </figcaption>
        </figure>
      </div>
      <div class="demo-fabs">
        <figure class="demo-figure-fab-extended">
          <ui-fab class="demo-fab-extended-without-icon"
            extended
            label="Create">
          </ui-fab>
          <figcaption>
            <div>Extended FAB (without Icon)</div>
          </figcaption>
        </figure>
      </div>
    </section>

    <section>
      <legend :class="$tt('headline4')">2. CSS Only FABs</legend>
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
      <legend :class="$tt('headline4')">3. Example of Enter and Exit Motions</legend>
      <div class="fab-motion-container">
        <div class="fab-motion-container__view">
          <p>View one (with FAB)</p>
        </div>
        <div class="fab-motion-container__view" :class="{'fab-motion-container__view--exited': !exited}">
          <p>View two (without FAB)</p>
          <p><button type="button" id="enter-exit-back"
            :disabled="!exited"
            @click="balmUI.onHide('exited')">Go back</button></p>
        </div>
        <ui-fab id="enter-exit-add" class="demo-absolute-fab" icon="add"
          :exited="exited"
          @click="balmUI.onShow('exited')">add</ui-fab>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[3]"></ui-markdown>
      </ui-accordion>
    </section>

    <section>
      <fieldset>
        <legend :class="$tt('headline4')">4. Custom FABs (Font awesome)</legend>
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

    <h1 :class="$tt('headline4')">5. API</h1>
    <ui-apidocs name="fab"></ui-apidocs>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

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
