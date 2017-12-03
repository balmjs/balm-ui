<template>
  <div class="demo--typography">
    <section class="hero">
      <h2 :class="$tt('display4')">Tt</h2>
    </section>

    <section class="demo-typography--section">
      <h2 :class="$tt('display1')">Styles</h2>

      <h1 :class="$tt('display4')">Display 4</h1>
      <h1 :class="$tt('display3')">Display 3</h1>
      <h1 :class="$tt('display2')">Display 2</h1>
      <h1 :class="$tt('display1')">Display 1</h1>
      <h1 :class="$tt('headline')">Headline</h1>
      <h2 :class="$tt('title')">
        Title <span :class="$tt('caption')">Caption.</span>
      </h2>
      <h3 :class="$tt('subheading2')">Subheading 2</h3>
      <h4 :class="$tt('subheading1')">Subheading 1</h4>
      <p :class="$tt('body1')">Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <aside :class="$tt('body2')">Body 2 text, calling something out.</aside>
    </section>

    <section class="demo-typography--section">
      <h2 :class="$tt('display1')">Styles with margin adjustments</h2>

      <h1 :class="$tt('display4', true)">Display 4</h1>
      <h1 :class="$tt('display3', true)">Display 3</h1>
      <h1 :class="$tt('display2', true)">Display 2</h1>
      <h1 :class="$tt('display1', true)">Display 1</h1>
      <h1 :class="$tt('headline', true)">Headline</h1>
      <h2 :class="$tt('title', true)">
        Title <span :class="$tt('caption', true)">Caption.</span>
      </h2>
      <h3 :class="$tt('subheading2', true)">Subheading 2</h3>
      <h4 :class="$tt('subheading1', true)">Subheading 1</h4>
      <p :class="$tt('body1', true)">Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <aside :class="$tt('body2', true)">Body 2 text, calling something out.</aside>
    </section>
  </div>
</template>
