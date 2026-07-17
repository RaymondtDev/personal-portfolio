<script setup lang="ts"></script>

<template>
  <header class="full-bleed grid-container">
    <div class="nav-banner">
      <a href="/">
        <h1 class="logo">Raymondt<span>Dev</span></h1>
      </a>
      <nav class="nav-links">
        <a href="#about" class="link">About</a>
        <a href="#projects" class="link">Projects</a>
        <a href="#contact" class="link">Contact</a>
      </nav>
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
</style>