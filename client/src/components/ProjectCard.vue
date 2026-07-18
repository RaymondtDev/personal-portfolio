<script setup lang="ts">
const props = defineProps({
  thumbnail: String,
  title: String,
  liveLink: Boolean,
  liveLinkHref: String
})
</script>

<template>
  <div class="project-card">
    <figure>
      <img :src="thumbnail" alt="project thumbnail">
    </figure>
    <div>
      <h3>{{ title }}</h3>
      <div class="cta-btns">
        <a :href="liveLinkHref" target="blank" v-if="liveLink">
          <button class="primary-cta">
            Live Demo
          </button>
        </a>
        <div v-else style="display: none;" />
        <a href="#">
          <button class="secondary-cta">Github</button>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .project-card {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 2;
    background-color: var(--secondary-bg);
    padding: 10px;
    box-shadow: 0 4px 12px #00000027;
    border-radius: var(--card-rds);

    figure {
      height: 250px;
      margin-bottom: 10px;
      border-radius: var(--card-rds);

      img {
        border-radius: 7px;
      }
    }

    .cta-btns {
      display: flex;
      gap: 8px;
      margin-top: 5px;
    }

    .primary-cta {
      background-color: var(--primary-color);
      color: white;
    }
    .secondary-cta {
      background-color: var(--accent-color);
      color: white;
    }
  }
</style>