<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>
<template>
  <div class="main-wrapper bg-gray-100 dark:bg-gray-900">
    <NavBar/>
    <router-view />
    <Footer/>
  </div>
</template>
