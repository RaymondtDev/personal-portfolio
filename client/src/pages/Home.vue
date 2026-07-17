<script setup lang="ts">
import Header from '@/components/Header.vue';
import ServiceCard from '@/components/ServiceCard.vue';
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';

const target = ref(null);
const isVisible = ref(false);

const { stop } = useIntersectionObserver(
  target,
  ([entry]: IntersectionObserverEntry[]) => {
    if (entry?.isIntersecting) {
      isVisible.value = true
      stop()
    }
  },
  { threshold: 0.5 }
)
</script>

<template>
  <Header />

  <section class="hero-section full-bleed grid-container">
    <h1 class="hero-title">Hey there! My name is <span class="name">Raymond</span> and I am a <span class="specialization">full-stack developer</span></h1>

    <p class="hero-subtitle">I specialize in building <span>beautiful and responsive</span> websites that convert, and intuitive dashboards for small to medium sized enterprises</p>

    <div class="cta-btns">
      <a href="#contact">
        <button class="primary-cta">Contact</button>
      </a>
      <a href="#projects">
        <button class="secondary-cta">Projects</button>
      </a>
    </div>
  </section>

  <section class="services-section full-bleed grid-container">
    <h2 class="section-title">What I Do</h2>
    <div class="service-cards" ref="target">
      <ServiceCard
        icon="/icons/dashboard-icon.svg" 
        heading="Dashboard Development"
        description="Intuitive and interactive visual interfaces that transform complex and scattered data into comprehensible insights about your business"
        :is-visible="isVisible"
      />
      <ServiceCard 
        icon="/icons/website-icon.svg"
        heading="Full-Stack Development"
        description="End-to-end web application development that covers both the user-facing interface and the underlying server, database, and logic"
        :is-visible="isVisible"
        delay="300ms"
      />
      <ServiceCard
        icon="/icons/database-icon.svg"
        heading="Web Development"
        description="Beautiful and responsive websites that convert for small to medium sized business. Search Engine Optimized to maximize Google Search rankings"
        :is-visible="isVisible"
        delay="600ms"
      />
    </div>
  </section>

  <section class="about-section full-bleed grid-container" id="about">
    <h2 class="section-title">About Me</h2>
    <p>
      My name is Thabiso Raymond Phahlamohlaka and I am a full-stack developer. My tech stack is Mongodb, Express, React, and Nodejs (MERN). I build simple websites for small to medium businesses, full stack web applications, and MVP (Minimum Viable Product) dashboards.
    </p>
    <div class="skill-icons">
      <img src="/icons/python-logo.svg" alt="skill-icon">
      <img src="/icons/javascript-logo.svg" alt="skill-icon">
      <img src="/icons/reactjs-logo.svg" alt="skill-icon">
      <img src="/icons/vuejs-logo.svg" alt="skill-icon">
      <img src="/icons/nodejs-logo.svg" alt="skill-icon">
      <img src="/icons/mongodb-logo.svg" alt="skill-icon">
    </div>
  </section>

  <section class="projects-section full-bleed grid-container" id="projects">
    <h2 class="section-title">My Projects</h2>
  </section>
</template>

<style scoped>
  .hero-section {
    text-align: center;
    background-color: var(--primary-bg);
    color: white;
    padding-block: 70px;

    .hero-title {
      margin-bottom: 40px;
      display: inline-block;
      font-size: clamp(3rem, 5vw, 5rem);
    }
    .hero-title::before {
      content: ">>";
      color: var(--code-color);
      margin-right: 10px;
    }

    .hero-title span {
      color: var(--primary-color);
    }

    .hero-subtitle {
      margin-bottom: 30px;
      font-size: clamp(1.2rem, 2vw, 1.5rem);
    }

    .hero-subtitle span {
      font-weight: bold;
      font-family: var(--heading-font);
      color: var(--comment-color);
    }
    .hero-subtitle span::before {
      content: "//";
    }

    .cta-btns {
      display: flex;
      gap: 5px;
      justify-content: center;

      .primary-cta {
        color: white;
      }
      .secondary-cta {
        background-color: var(--secondary-color);
      }
    }
  }

  .services-section {
    background-color: var(--accent-bg);
    padding-block: 40px;

    .service-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, auto);
      gap: 10px;
    }
  }

  .about-section {
    background-color: var(--primary-bg);
    color: white;
    padding-block: 60px;
    text-align: center;

    p {
      width: min(50vw, 100%);
      margin-inline: auto;
      margin-bottom: 20px;
    }

    .skill-icons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.7rem;
    }

    .skill-icons img {
      width: 50px;
      aspect-ratio: 1;
    }
  }

  .projects-section {
    background-color: var(--accent-bg);
    padding-block: 50px;
  }
</style>
