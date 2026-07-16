<script setup lang="ts">
import Header from '@/components/Header.vue';
import ServiceCard from '@/components/ServiceCard.vue';

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
    <h2>What I Do</h2>
    <div class="service-cards">
      <ServiceCard 
        heading="Dashboard Development"
        description="Intuitive and interactive visual interfaces that transform complex and scattered data into comprehensible insights about your business"
      />
      <ServiceCard 
        heading="Full-Stack Development"
        description="End-to-end web application development that covers both the user-facing interface and the underlying server, database, and logic"
      />
      <ServiceCard
        heading="Web Development"
        description="Beautiful and responsive websites that convert for small to medium sized business. Search Engine Optimized to maximize Google Search rankings"
      />
    </div>
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

    h2 {
      text-align: center;
      color: var(--primary-color);
      font-size: clamp(1.5rem, 5vw, 2.5vw);
      margin-bottom: 40px;
    }
  }
</style>
