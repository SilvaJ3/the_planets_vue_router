<template>
  <div class="planet p-20 flex flex-col justify-center items-center">
    <div class="flex justify-center px-20">
      <div class="flex justify-center items-center w-2/3">
        <img :src="require(`@/assets/planet-${planet.slug}.svg`)" alt="">
      </div>
      <div class="flex flex-col justify-center items-start w-1/3">
        <h1 class="text-white font-bold text-6xl uppercase">{{planet.name}}</h1>
        <router-view :key="$route.path"></router-view>
        <div class="flex flex-col items-center justify-center w-full toggleBtn mt-4" :style="bgColor">
            <router-link v-for="(info, index) in planet.infos" :key="info.name" :to="{name: 'Info', params:{name: info.name}}" class="border border-gray-600 w-full py-2 mb-3 text-white uppercase">
              <span class="mx-4">0{{index + 1}}</span> {{info.name}}
            </router-link>
        </div>
      </div>
    </div>
    <div class="flex justify-evenly items-center w-full py-10 p-8">
      <div class="border border-gray-600 w-1/5 p-4">
        <span>ROTATION TIME</span>
        <h1 class="text-white uppercase text-3xl">{{planet.rotation}}</h1>
      </div>
      <div class="border border-gray-600 w-1/5 p-4">
        <span>REVOLUTION TIME</span>
        <h1 class="text-white uppercase text-3xl">{{planet.revolution}}</h1>
      </div>
      <div class="border border-gray-600 w-1/5 p-4">
        <span>RADIUS</span>
        <h1 class="text-white uppercase text-3xl">{{planet.radius}}</h1>
      </div>
      <div class="border border-gray-600 w-1/5 p-4">
        <span>AVERAGE TEMP.</span>
        <h1 class="text-white uppercase text-3xl">{{planet.temperature}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store"

export default {
  name: 'Planet',
  data(){
    return {
      planets: store.planets
    }
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    planet: function(){
      return this.planets.find(planet => planet.slug == this.slug);
    },
    bgColor: function() {
      return {
        '--bg-hover-color': this.planet.color,
      }
    }
  }
}
</script>

<style>
.toggleBtn a:hover {
  background-color: var(--bg-hover-color);
}

.toggleBtn span {
  font-family: 'Spartan', sans-serif;
}

</style>
