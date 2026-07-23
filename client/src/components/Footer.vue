<script setup lang="ts"></script>

<template>
  <footer class="footer-section full-bleed grid-container">
    <div class="footer-content">
      <div class="logo">
        <h1>Raymondt<span>Dev</span></h1>
      </div>

      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div>
        <h4>Contact Details</h4>
        <ul>
          <li><b>Email:</b><br/> raymondtdev@gmail.com</li>
          <li><b>Phone:</b><br/> 066 133 1990</li>
        </ul>
        <div class="social-links"></div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .footer-section {
    background-color: var(--primary-bg);
    padding-block: 70px;
    color: white;

    .footer-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, auto);

      > div {
        grid-row: span 3;
        display: grid;
        grid-template-rows: subgrid;
      }
      * h4 {
        color: var(--primary-color);
        font-weight: bold;
      }
      * h4::before {
      content: ">>";
      color: var(--code-color);
      margin-right: 10px;
    }

      .logo h1 {
        font-size: clamp(1.5rem, 5vw, 2.5rem);
      }
      .logo h1 span {
        color: var(--primary-color);
      }
    }
  }

  ul {
    list-style-position: inside;
    list-style-type: none;
    line-height: 1.5rem;
  }

  li a:hover {
    color: var(--primary-color);
  }
</style>