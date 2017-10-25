<template>
  <div class="demo--typography">
    <section class="hero">
      <h2 :class="typography('display4')">Tt</h2>
    </section>

    <section class="demo-typography--section">
      <h2 :class="typography('display1')">Styles</h2>

      <h1 :class="typography('display4')">Display 4</h1>
      <h1 :class="typography('display3')">Display 3</h1>
      <h1 :class="typography('display2')">Display 2</h1>
      <h1 :class="typography('display1')">Display 1</h1>
      <h1 :class="typography('headline')">Headline</h1>
      <h2 :class="typography('title')">
        Title <span :class="typography('caption')">Caption.</span>
      </h2>
      <h3 :class="typography('subheading2')">Subheading 2</h3>
      <h4 :class="typography('subheading1')">Subheading 1</h4>
      <p :class="typography('body1')">Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <aside :class="typography('body2')">Body 2 text, calling something out.</aside>
    </section>

    <section class="demo-typography--section">
      <h2 :class="typography('display1')">Styles with margin adjustments</h2>

      <h1 :class="typography('display4', true)">Display 4</h1>
      <h1 :class="typography('display3', true)">Display 3</h1>
      <h1 :class="typography('display2', true)">Display 2</h1>
      <h1 :class="typography('display1', true)">Display 1</h1>
      <h1 :class="typography('headline', true)">Headline</h1>
      <h2 :class="typography('title', true)">
        Title <span :class="typography('caption', true)">Caption.</span>
      </h2>
      <h3 :class="typography('subheading2', true)">Subheading 2</h3>
      <h4 :class="typography('subheading1', true)">Subheading 1</h4>
      <p :class="typography('body1', true)">Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <aside :class="typography('body2', true)">Body 2 text, calling something out.</aside>
    </section>
  </div>
</template>
