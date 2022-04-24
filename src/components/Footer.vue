<template>
    <footer class="w-full 
                    px-4
                    py-4 
                    bg-gray-900 
                    fixed
                    bottom-0"
                    >
        <div class="py-2 text-gray-500 font-mono text-sm mt-3 mx-auto text-center font-semibold">
            Built with 
            <span class="text-red-500 h-4 w-4s font-semibold">♥</span> by <a class="hover:underline text-gray-300 font-semibold" href="/">Ananthu A Nair</a>
        </div>
    </footer>

</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`https://api.github.com/users/HellzAngel/repos`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
      console.log(response.data)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
