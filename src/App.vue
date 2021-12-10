<template>
  <div id="app" class="h-full">
    <div id="nav">
      <nav class="w-full flex justify-between">
        <div>
          <h1 class="text-white font-bold">THE PLANETS</h1>
        </div>
        <div>
          <router-link 
          :to="{ name: 'Planet', params: {slug: planet.slug}}"
          v-for="planet in planets" 
          :key="planet.name" 
          class="uppercase mx-3">
            {{ planet.name}}
          </router-link>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
import store from "./store.js"

export default {
  data() {
    return {
      planets: store.planets
    }
  }
}

</script>

<style>
#app {
  font-family: 'Antonio', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-image: url("./assets/background-stars.svg");
  background-color: #070625
;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
