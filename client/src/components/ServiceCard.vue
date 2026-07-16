<script setup lang="ts">
  const props = defineProps({
    icon: String,
    heading: String,
    description: String
  })
</script>

<template>
  <div class="service-card">
    <div class="service-card-h">
      <img src="#" alt="service-icon">
      <h3>{{ heading }}</h3>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
  .service-card {
    background-color: var(--secondary-bg);
    padding: 10px;
    border-radius: var(--card-rds);
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 2;
    box-shadow: 0px 4px 12px #00000027;

    img {
      width: 50px;
      aspect-ratio: 1;
    }

    h3 {
      text-wrap: pretty;
    }
  }
  .service-card-h {
    display: flex;
  }
</style>