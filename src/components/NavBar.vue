<template>
<div id="app">
  <div class="bg-gray-900 dark:bg-slate-900">
    <nav
      class="
        container
        px-3
        py-4
        mx-auto
        md:flex md:justify-between md:items-center
      "
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/Ananthu_dev/"
          class="
            pix
            ml-1
            text-xl
            font-semibold 
            text-gray-100
            md:text-2xl
          "
          style="float: left;"
          >ANANTHU
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="
          flex-col
          mt-8
          space-y-4
          md:flex 
          md:space-y-0 
          md:flex-row 
          md:items-center 
          md:space-x-10 
          md:mt-0
        "
      >
      
        <li class="inline-block 
                    font-semibold 
                    rounded-full 
                    text-gray-100 
                    hover:bg-gray-500 
                    py-2 px-4 
                    transition 
                    duration-700 
                    delay-750 
                    hover:delay-2"
                    ><router-link to="/Ananthu_dev/project">Projects</router-link>
            <span class="relative 
                          animate-ping 
                          inline-flex 
                          bottom-3 
                          rounded-full 
                          h-1.5 w-1.5 
                          opacity-100 
                          bg-green-300">
                </span>
        </li>
        <li class="inline-block 
                    rounded-full 
                    text-gray-100 
                    hover:bg-gray-500 
                    py-2 px-2 
                    transition 
                    duration-700 
                    delay-750 
                    hover:delay-2" 
                    @click="toggleDarkMode"
                    >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd">
            </path>
          </svg>
        </li>
      </ul>
    </nav>
  </div>
</div>
</template>
<script>
import { ref } from 'vue'; 

export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>
<style>
.pix{
    position: relative;
    letter-spacing: 5px;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    line-height: 0.70em;
    outline: none;
    animation: light 5s linear infinite;
}
@keyframes light {
    0%, 18%, 20%, 50%, 60%, 65.1%, 80%, 90.1%, 92%{
        text-shadow: none;
    }
    18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100%{
        color: rgb(208, 208, 186);
        text-shadow: 0 0 10px yellow,
         0 0 20px yellow,
         0 0 40px yellow,
         0 0 80px yellow,
         0 0 160px yellow;
    }
}
</style>