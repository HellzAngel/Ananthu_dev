<template>
  <div class="w-full flex-wrap">
    <div class="min-h-screen
              dark:bg-gray-900 
                items-center">
      <h1 class="text-center 
                 font-nav 
                 text-xl 
                 font-extrabol
                 text-gray-500 
                 h-1 m-5"
                 >
                 My projects
        </h1>
      <div class="font-about">
        <div class="mx-10 md:mx-16 lg:mx-96 flex p-1 rounded-xl"> 
          <ul class="flex min-w-full md:space-y-0 flex-wrap pt-3 pb-4 flex-row">
            <li class="-mb-px font-semibold rounded-full mr-2 w-2 hover:animate-pulse last:mr-0 flex-auto text-center">
              <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-gray-600 bg-white': openTab !== 1, 'text-white bg-gray-600': openTab === 1}">
                GitHub
              </a>
            </li>
            <li class="-mb-px font-semibold mr-2 w-2 last:mr-0 hover:animate-pulse flex-auto text-center">
              <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-gray-600 bg-white': openTab !== 2, 'text-white bg-gray-600': openTab === 2}">
                Live
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-6">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
            <div>
                <ul class="grid grid-cols-1 md:grid-cols-3 gap-5 m-6">
                  <li v-for="post in posts" v-bind:key="post" class="animate__animated animate__flipInX hover:animate-bounce p-1">
                    <a :href="post.html_url">
                      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-500">
                        <div class="flex gap-6 justify-between p-4">
                          <div>
                            <a :href="post.html_url"></a>
                            <h1 class="text-md text-gray-600 dark:text-gray-200 tracking-normalfont-semibold mb-2">{{post.name}}</h1>
                              <p class="text-gray-600 dark:text-gray-400 tracking-normal text-sm">
                                {{post.description}}</p>
                                </div>
                                <div class="grid grid-cols-1 text-gray-600 space-y-6 text-sm">
                                  <span class="fa fa-star flex hover:text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                      </svg>
                                    <p class="pl-1 font-nav">
                                   {{post.stargazers_count}}</p>
                                  </span>
                                  <span class="fa fa-code-fork flex hover:text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                    <p class="pl-1 font-nav">{{post.forks}}</p>
                                    </span>
                                </div>
                              </div>
                            </div>
                          </a>
                    </li>
                  </ul>
              
            </div>
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 m-10">
                  <li class="animate__animated animate__flipInX hover:animate-pulse p-2 ">
                    <a href="https://obscure-bayou-69189.herokuapp.com/">
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-500">
                      <div class="grid grid-cols-1 gap-1 justify-between p-4">
                        <h1 class="text-md text-gray-600 dark:text-gray-200 font-semibold mb-3">Movie Search App</h1>
                          <p class="text-gray-600 dark:text-gray-400 tracking-normal text-sm">
                            Made with react JS</p>
                      </div>
                    </div>   
                    </a> 
                  </li>
                  <li class="animate__animated animate__flipInX hover:animate-pulse p-2 ">
                    <a href="https://hellzangel.github.io/portfolio/">
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-500">
                      <div class="grid grid-cols-1 gap-1 justify-between p-4">
                        <h1 class="text-md text-gray-600 dark:text-gray-200 font-semibold mb-3">POTFOLIO</h1>
                          <p class="text-gray-600 dark:text-gray-400 tracking-normal text-sm">
                            Made with HTML & CSS</p>
                      </div>
                    </div> 
                    </a>   
                  </li>
                </ul>         
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "pink-tabs",
  data() {
    return {
      openTab: 1,
      posts: [],
      errors: []
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  },
  created() {
    axios.get(`https://api.github.com/users/HellzAngel/repos`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}

</script>