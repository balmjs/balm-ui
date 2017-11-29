<template>
  <div class="demo--fab">
    <section class="hero">
      <ui-fab icon="favorite_border"></ui-fab>
    </section>

    <ui-fab class="demo-fixed-fab">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
      </svg>
    </ui-fab>

    <section>
      <legend>FABs with Ripple</legend>
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
    </section>

    <section>
      <legend>CSS Only FABs</legend>
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
    </section>

    <section>
      <legend>Example of Enter and Exit Motions</legend>
      <div class="fab-motion-container">
        <div class="fab-motion-container__view">
          <p>View one (with FAB)</p>
        </div>
        <div class="fab-motion-container__view" :class="{'fab-motion-container__view--exited': !exited}">
          <p>View two (without FAB)</p>
          <p><button type="button" id="enter-exit-back" :disabled="!exited" @click="balmUI.onChange('exited', false)">Go back</button></p>
        </div>
        <ui-fab id="enter-exit-add" class="demo-absolute-fab" icon="add"
          :exited="exited"
          @click.native="show">add</ui-fab>
      </div>
    </section>

    <section>
      <fieldset>
        <legend>Custom FABs</legend>
        <ui-fab>
          <i class="fa fa-flag fa-lg"></i>
        </ui-fab>
        <ui-fab plain>
          <i class="fa fa-smile-o fa-lg"></i>
        </ui-fab>
        <ui-fab>
          <i class="fa fa-camera-retro fa-lg"></i>
        </ui-fab>
        <ui-fab plain>
          <i class="fa fa-spinner fa-pulse fa-lg fa-fw"></i>
        </ui-fab>
      </fieldset>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exited: false
    };
  },
  methods: {
    show() {
      this.exited = !this.exited;
    }
  }
};
</script>
