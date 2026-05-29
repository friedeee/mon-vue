<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="/">Start Bootstrap</a>
      <button class="navbar-toggler navbar-toggler-right" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
        Menu <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="#signup">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav')
    if (window.scrollY > 100) {
      nav.classList.add('navbar-scrolled')
    } else {
      nav.classList.remove('navbar-scrolled')
    }
  })
})
</script>