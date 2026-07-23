<script setup lang="ts">
import { ref, reactive, onMounted, useTemplateRef } from 'vue';
import axios from "axios";
import PricingCard from '@/components/PricingCard.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import ServiceCard from '@/components/ServiceCard.vue';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const servicesSection = useTemplateRef<HTMLElement | null>('services-section');
const projectsSection = useTemplateRef<HTMLElement | null>('projects-section');
const pricingSection = useTemplateRef<HTMLElement | null>('pricing-section');
const isLoading = ref<boolean>(false);
const apiMessage = ref<string | null>(null);

interface UseForm {
  name: string,
  email: string,
  phone?: string,
  message?: string
}

const data = reactive<UseForm>({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const submitFormData = async () => {
  try {
    isLoading.value = true;
    const response = await axios.post('http://localhost:3000/send-mail', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message
    });

    if (response.status === 200) {
      apiMessage.value = "Email Sent"

      setTimeout(() => {
        apiMessage.value = null;
      }, 3000);
    }
  } catch (error) {
    console.error("Error sendind email:", error);
  } finally {
    isLoading.value = false;

    data.name = "";
    data.email = "";
    data.phone = "";
    data.message = "";
  }
}

onMounted(() => {
  useScrollReveal(servicesSection.value, servicesSection.value?.querySelectorAll(".service-card"));
  useScrollReveal(projectsSection.value, projectsSection.value?.querySelectorAll(".project-card"));
  useScrollReveal(pricingSection.value, pricingSection.value?.querySelectorAll(".pricing-card"));
})
</script>

<template>
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

  <section class="services-section full-bleed grid-container" ref="services-section">
    <h2 class="section-title">What I Do</h2>
    <div class="service-cards">
      <ServiceCard
        icon="/icons/dashboard-icon.svg" 
        heading="Dashboard Development"
        description="Intuitive and interactive visual interfaces that transform complex and scattered data into comprehensible insights about your business"
      />
      <ServiceCard 
        icon="/icons/website-icon.svg"
        heading="Full-Stack Development"
        description="End-to-end web application development that covers both the user-facing interface and the underlying server, database, and logic"

      />
      <ServiceCard
        icon="/icons/database-icon.svg"
        heading="Web Development"
        description="Beautiful and responsive websites that convert for small to medium sized business. Search Engine Optimized to maximize Google Search rankings"
      />
    </div>
  </section>

  <section class="about-section full-bleed grid-container" id="about">
    <h2 class="section-title">About Me</h2>
    <p>
      I'm a full-stack web developer with a passion for building clean, reliable, and user-focused web applications. I enjoy turning ideas into practical solutions, whether that's developing business management systems, creating responsive websites, or exploring new technologies that improve the way websites are built.<br/><br/>
      I primarily work with Javascript, Python, React, Vue, MongoDB, ExpressJS, and NodeJS to build web applications, and I'm currently expanding my skills in areas like Typescript (this portfolio was built using Typescript), SQL databases, and low-level languages like C, C++, and Java.
    </p>
    <div class="skill-icons">
      <img src="/icons/python-logo.svg" alt="skill icon">
      <img src="/icons/javascript-logo.svg" alt="skill icon">
      <img src="/icons/reactjs-logo.svg" alt="skill icon">
      <img src="/icons/vuejs-logo.svg" alt="skill icon">
      <img src="/icons/nodejs-logo.svg" alt="skill icon">
      <img src="/icons/mongodb-logo.svg" alt="skill icon">
    </div>
  </section>

  <section class="projects-section full-bleed grid-container" id="projects" ref="projects-section">
    <h2 class="section-title">My Projects</h2>
    <div class="project-cards">
      <ProjectCard
        thumbnail="/screenshots/project1-thumbnail.png"
        title="Project Management System"
        :live-link="false"
      />
      <ProjectCard
        thumbnail="/screenshots/project2-thumbnail.png"
        title="Electrician Website"
        :live-link="true"
        live-link-href="https://electrician-website-demo-red.vercel.app"
      />
      <ProjectCard
        thumbnail="/screenshots/project3-thumbnail.png"
        title="K-Flava Restaurant"
        :live-link="true"
        live-link-href="https://k-flava-restaurant.vercel.app"
      />
    </div>
  </section>

  <section class="pricing-section full-bleed grid-container" id="pricing" ref="pricing-section">
    <p class="section-subtitle">Don't Wait To Get A Quote!</p>
    <h2 class="section-title">Affordable Website Pricing</h2>
    <div class="pricing-cards">
      <PricingCard
        package-title="Essential Website"
        package-price="2500"
        package-description="A 2-3 page website to jump-start your business' online presence."
        :package-features="[
          '2-3 Pages',
          'Beautiful & Professionaly Designed',
          'Responsive Design',
          'Excellent User Experience',
          'SEO-Optimization',
          'Speed Optimization',
        ]"
        :outline="true"
        outline-color="var(--primary-color)"
        text-color="white"
      />
      <PricingCard
        package-title="Full-Stack Website"
        package-price="8000"
        package-description="Web-application with a client-facing user interface, a server, and a database."
        :package-features="[
          'Authentication & Authorization Layer',
          'Projessional Design',
          'Responsive Design',
          'Speed Optimization',
          'Back-End Server',
          'Database (MongoDB or SQL)'
        ]"
      />
      <PricingCard
        package-title="Admin Dashboard"
        package-price="15000"
        package-description="MVP (Minimum Viable Product) Admin Dashboard for business analytics and server-side operations."
        :package-features="[
          'Authentication & Authorization Layer',
          'Dashboard Analytics',
          'Statistics & Charts',
          'Speed Optimization',
          'Security Layer',
          'Professional Design'
        ]"
      />
    </div>
  </section>

  <section class="contact-section full-bleed grid-container" id="contact">
    <p class="section-subtitle">Ready To Start Working With Me?</p>
    <h2 class="section-title">Send Me A Message!</h2>
    <div class="form-container">
      <form @submit.prevent="submitFormData">
        <label for="name">
          Name*
          <input type="text" name="name" id="name" v-model="data.name" placeholder="Name" required>
        </label>
        <div>
          <label for="email">
            Email*
            <input type="email" name="email" id="email" v-model="data.email" placeholder="Email" required>
          </label>
          <label for="phone">
            Phone
            <input type="text" name="phone" id="phone" v-model="data.phone" placeholder="Number">
          </label>
        </div>
        <label for="message">
          Message*
        </label>
        <textarea rows="8" name="message" id="message" placeholder="Tell me about your website requrements. Your goals, ideas, or examples to get the conversation started." v-model="data.message" required></textarea>

        <button v-if="isLoading" class="submit-btn">Submitting</button>
        <button v-else-if="apiMessage" class="submit-btn">{{ apiMessage }}</button>
        <button v-else type="submit" class="submit-btn">Send Message</button>
      </form>
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
  }

  .about-section {
    background-color: var(--primary-bg);
    color: white;
    padding-block: 60px;
    text-align: center;

    .section-title::before {
      content: ">>";
      color: var(--code-color);
      margin-right: 10px;
    }

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

    .project-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, auto);
      gap: 10px;
    }
  }

  .pricing-section {
    background-color: var(--primary-bg);
    padding-block: 50px;

    .section-title::before {
      content: ">>";
      color: var(--code-color);
      margin-right: 10px;
    }

    .section-subtitle {
      color: white;
      text-align: center;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .pricing-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, auto);
      gap: 10px;
    }
  }

  .contact-section {
    background-color: var(--accent-bg);
    padding-block: 50px;

    .section-subtitle {
      text-align: center;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .form-container {
      background-color: var(--secondary-bg);
      padding: 15px 30px;
      border-radius: var(--card-rds);
      width: min(60vw, 90vw);
      margin-inline: auto;
      box-shadow: 0 4px 12px #00000027;

      form div {
        display: flex;
        gap: 10px;

        label {
          width: 100%;
        }
      }

      form button {
        width: 100%;
        margin-top: 10px;
      }
      form button:hover {
        transform: scale(1.01);
      }
    }
  }
</style>
