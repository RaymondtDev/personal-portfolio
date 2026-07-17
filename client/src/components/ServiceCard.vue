<script setup lang="ts">
import { transition } from '@vueuse/core';

  const props = defineProps({
    icon: String,
    heading: String,
    description: String,
    isVisible: Boolean,
    delay: String
  })
</script>

<template>
  <div :class="['service-card', { 'visible': isVisible }]" :style="{ 'transition-delay': delay }">
    <div class="service-card-h">
      <div class="icon">
        <img :src="icon" alt="service-icon">
      </div>
      <h3>{{ heading }}</h3>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
  .service-card {
    background-color: var(--secondary-bg);
    padding: 20px;
    border-radius: var(--card-rds);
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 2;
    box-shadow: 0px 4px 12px #00000027;
    opacity: 0;
    transform: translateY(25px);
    transition: opacity 300ms ease, transform 300ms ease;

    h3 {
      text-wrap: pretty;
    }
  }
  .service-card-h {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      aspect-ratio: 1;
    }
  }
  .service-card.visible {
    opacity: 1;
    transform: translateY(0);
  }
</style>