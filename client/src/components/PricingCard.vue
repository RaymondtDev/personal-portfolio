<script setup lang="ts">
const props = defineProps({
  packageTitle: String,
  packagePrice: String,
  packageDescription: String,
  packageFeatures: Array,
  outline: Boolean,
  outlineColor: String,
  textColor: String
})
</script>

<template>
  <div class="pricing-card" :style="outline && { 'outline': 'solid 4px', 'outline-color': outlineColor, 'outline-offset': '2px' }">
    <div class="card-head">
      <h2><small>from</small>R{{ packagePrice }}</h2>
      <h3>{{ packageTitle }}</h3>
      <p>{{ packageDescription }}</p>
    </div>
    <ul>
      <li v-for="feature in packageFeatures">{{ feature }}</li>
    </ul>
    <p class="card-foot">
      <b>*Plus R250 per additional Website Page</b><br/>
      Note: All packages include free support for 6 months. Support includes minor edits and fixes (e.g., contact details, color designs, images, bugs, etc.)
    </p>
  </div>
</template>

<style scoped>
  .pricing-card {
    background-color: white;
    padding: 30px 20px;
    border-radius: var(--card-rds);
    grid-row: span 3;
    display: grid;
    grid-template-rows: subgrid;

    .card-head {
      text-align: center;
      border-bottom: 1px solid #8a8989b2;

      h2 {
        font-size: min(3rem,5rem);
        color: var(--primary-color);

        small {
          font-size: min(1rem, 3rem);
          margin-right: 2px;
        }
      }
      h3 {
        margin-block: 10px;
      }
      p {
        margin-bottom: 20px;
        color: var(--tertiary-color);
      }
    }

    ul {
      list-style-type: none;
      padding-block: 20px;
      line-height: 1.8rem;

      li {
        font-weight: bold;
      }
      li::before {
        content: "\2713";
        font-weight: bolder;
        font-size: 1.4rem;
        color: var(--primary-color);
        margin-right: 8px;
      }
    }

    .card-foot {
      font-size: .8rem;
      font-style: italic;
      text-align: center;
      padding-top: 20px;
      border-top: 1px solid #8a8989b2;
      color: var(--tertiary-color);
      line-height: 1.2rem;

      b {
        color: black;
      }
    }
  }
</style>