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
            <li class="-mb-px font-semibold rounded-full mr-2 w-2 last:mr-0 flex-auto text-center">
              <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-gray-600 bg-white': openTab !== 1, 'text-white bg-gray-600': openTab === 1}">
                GitHub
              </a>
            </li>
            <li class="-mb-px font-semibold mr-2 w-2 last:mr-0 flex-auto text-center">
              <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-gray-600 bg-white': openTab !== 2, 'text-white bg-gray-600': openTab === 2}">
                Live
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
            <div>
                <ul v-for="post in posts" v-bind:key="post">
                  <li class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      {{post.name}}
                      {{post.fork}}

                    </li>
                  </ul>
              
            </div>
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <p>
                Completely synergize resource taxing relationships via
                ce.
              </p>
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
      console.log(this.posts)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}

</script>