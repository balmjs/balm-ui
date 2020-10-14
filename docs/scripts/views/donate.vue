<template>
  <div :class="[$tt('body1'), 'page--donate']">
    <section v-ripple.unbounded class="hero">
      <h1 :class="$tt('headline1')">Support BalmUI</h1>
    </section>
    <div :class="[$tt('body2'), 'pure-docs']">
      <p>
        BalmUI is an MIT licensed open source project and completely free to
        use. However, the amount of effort needed to maintain and develop new
        features for the project is not sustainable without proper financial
        backing. You can support BalmUI development via the following methods:
      </p>

      <h6 :class="$tt('headline6')">One-time Donations</h6>
      <p>We accept donations through these channels:</p>
      <ui-grid class="donate-methods">
        <ui-grid-cell>
          <div class="donate-method alipay"></div>
        </ui-grid-cell>
        <ui-grid-cell>
          <div class="donate-method wechatpay"></div>
        </ui-grid-cell>
      </ui-grid>

      <h6 :class="$tt('headline6')">Recurring Pledges</h6>
      <p>
        Recurring pledges come with exclusive perks, e.g. having your name
        listed in the BalmUI GitHub repository, or have your company logo placed
        on this website.
      </p>
      <ul>
        <li>
          <a href="https://opencollective.com/balmjs"
            >Become a backer or sponsor via OpenCollective</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Donate'
};
</script>
