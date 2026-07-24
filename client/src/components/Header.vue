<script setup lang="ts"></script>

<template>
  <header class="full-bleed grid-container">
    <div class="nav-banner">
      <a href="#">
        <h1 class="logo">Raymondt<span>Dev</span></h1>
      </a>
      <nav class="nav-links">
        <a href="#" class="link">Home</a>
        <a href="#about" class="link">About</a>
        <a href="#projects" class="link">Projects</a>
        <a href="#pricing" class="link">Pricing</a>
        <a href="#contact" class="link">Contact</a>
      </nav>
      <div class="hamburger">
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
    width: 100%;
    padding-block: 10px;
    z-index: 10;
    width: 100svw;
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
    .nav-banner > nav {
      display: none;
    }

    .hamburger {
      display: flex;
    }
  }
</style>