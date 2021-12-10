<template>
  <div>
    <p class="text-gray-400 my-4 text-sm content">{{info.content}}</p>
    <span class="flex items-center">
      Source: 
        <a :href="info.source" class="flex items-center underline ml-2 text-gray-400">Wikipedia 
        <img src="../assets/icon-source.svg" alt="" class="flex justify-center items-center mx-3"></a>
    </span>
  </div>
</template>

<script>
import store from "../store"

export default {
  name: "Info",
  props: {
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    planet: function() {
      return store.planets.find(element => element.slug == this.slug)
    },
    info: function(){
      return this.planet.infos.find(element => element.name == this.name)
    }
  }
}
</script>

<style scoped>
.content {
  font-family: "Spartan", "sans-serif";
}
</style>