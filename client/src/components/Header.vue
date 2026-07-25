<script setup lang="ts">
import { ref } from 'vue';

const displayMenu = ref<boolean>(false);

function toggelMenu(): void {
  displayMenu.value = !displayMenu.value;
}
function linkClick(): void {
  displayMenu.value = false;
}
</script>

<template>
  <header class="full-bleed grid-container">
    <div class="nav-banner">
      <a href="#">
        <h1 class="logo">Raymondt<span>Dev</span></h1>
      </a>
      <nav class="nav-links" :class="{ 'active': displayMenu}">
        <a href="#" class="link" @click="linkClick">Home</a>
        <a href="#about" class="link" @click="linkClick">About</a>
        <a href="#projects" class="link" @click="linkClick">Projects</a>
        <a href="#pricing" class="link" @click="linkClick">Pricing</a>
        <a href="#contact" class="link" @click="linkClick">Contact</a>
      </nav>
      <div class="hamburger" @click="toggelMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </header>
</template>

<style scoped>
  header {
    background-color: var(--primary-bg);
    color: white;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    padding-block: 10px;
    z-index: 10;
  }

  .nav-banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo span {
    color: var(--primary-color);
  }

  .link {
    padding: 10px 15px;
  }
  .link:hover {
    color: var(--primary-color)
  }

  .hamburger {
    width: 45px;
    aspect-ratio: 1;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
  }
  .bar {
    width: 80%;
    height: .25em;
    border-radius: 5px;
    background-color: var(--primary-color);
  }

  @media screen and (max-width: 425px) {
    .nav-banner {
      position: relative;
    }

    .nav-links {
      position: absolute;
      right: 0;
      top: 100%;
      flex-direction: column;
      width: 70%;
      height: 100svh;
      background-color: var(--primary-bg);
      opacity: 80%;
      backdrop-filter: blur(50px);

      .link {
        font-size: 1.5rem;
      }
    }
    .nav-links.active {
      display: flex;
    }

    .nav-banner > nav {
      display: none;
    }

    .hamburger {
      display: flex;
    }
  }
</style>