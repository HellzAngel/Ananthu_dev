<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Social from './components/social.vue'
</script>
<template>
  <div class="main-wrapper bg-gray-100 dark:bg-gray-900">
    <NavBar/>
    <router-view />
    <Social/>
  </div>
    <footer class="main-wrapper bg-gray-900 dark:bg-gray-900 mr-auto mx-auto">
        <Footer/>
    </footer>

</template>
