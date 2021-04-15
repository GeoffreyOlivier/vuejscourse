<template>
  <div >
    <flickity ref="flickity" :options="flickityOptions" >
      <div v-for="item in json"  :key="item.id">
        <router-link  class="carousel-cell" :to="{name: 'list', params: { item : item.id }}">{{ item.titre }}</router-link>
      </div>
    </flickity>
  </div>
</template>
<style scoped>
.carousel-cell{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #fdc0c0;
}
</style>
<script>
import Flickity from 'vue-flickity';
import json from './../assets/data.json'
export default {
  components: {
    Flickity
  },
  data() {
    return {
      json: json,
      route: '',
      flickityOptions: {
        cellAlign: 'center',
        contain: true,
        draggable: true,
        freeScroll: true,
        friction: 0.2,
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
      }
    }
  },
  created() {
    this.route = this.$route.name
    console.log(this.json)
  },
  methods: {
    tada(v){
      console.log(v)
    }
  }
}
</script>