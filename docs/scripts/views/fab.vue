<template>
  <div class="demo--fab">
    <section class="hero">
      <ui-fab icon="favorite_border"></ui-fab>
    </section>

    <ui-fab id="demo-absolute-fab">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
      </svg>
    </ui-fab>

    <section>
      <fieldset>
        <legend>Normal FABs</legend>
        <ui-fab icon="favorite_border"></ui-fab>
        <ui-fab mini icon="favorite_border"></ui-fab>
        <ui-fab plain icon="favorite_border"></ui-fab>
        <ui-fab mini plain icon="favorite_border"></ui-fab>
      </fieldset>

      <fieldset>
        <legend>CSS Only FABs</legend>
        <ui-fab cssOnly icon="favorite_border"></ui-fab>
        <ui-fab cssOnly mini icon="favorite_border"></ui-fab>
        <ui-fab cssOnly plain icon="favorite_border"></ui-fab>
        <ui-fab cssOnly mini plain icon="favorite_border"></ui-fab>
      </fieldset>

      <fieldset>
        <legend>Disabled FABs</legend>
        <ui-fab disabled icon="favorite_border"></ui-fab>
        <ui-fab disabled mini icon="favorite_border"></ui-fab>
        <ui-fab disabled plain icon="favorite_border"></ui-fab>
        <ui-fab disabled mini plain icon="favorite_border"></ui-fab>
      </fieldset>

      <fieldset>
        <legend>Custom FABs</legend>
        <ui-fab cssOnly>
          <i class="fa fa-flag fa-lg" aria-hidden="true"></i>
        </ui-fab>
        <ui-fab cssOnly plain>
          <i class="fa fa-smile-o fa-lg" aria-hidden="true"></i>
        </ui-fab>
        <ui-fab cssOnly dark>
          <i class="fa fa-camera-retro fa-lg"></i>
        </ui-fab>
        <ui-fab cssOnly plain dark>
          <i class="fa fa-spinner fa-pulse fa-lg fa-fw"></i>
        </ui-fab>
      </fieldset>
    </section>
  </div>
</template>
