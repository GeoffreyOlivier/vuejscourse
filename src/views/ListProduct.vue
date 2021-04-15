<template>
  <div class="">
    <flickity ref="flickity" :options="flickityOptions2">
      <div v-for="item in tab[category]" :key="item.id">
        <div class="carousel-cell">{{
            item.titre
          }}
        </div>
        <!--        <div  class="carousel-cell">{{ item.titre }}</div>-->
      </div>
    </flickity>
  </div>
</template>
<style scoped>
.carousel-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #c4dcf6;
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
      tab: json,
      category: 0,
      sousCat: [],
      flickityOptions2: {
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
    this.category = parseInt(this.$route.params.item)

    console.log("pass")
    // this.getSousCat()
  },
  // methods: {
  //   getSousCat() {
  //     console.log(this.category)
  //     this.category = parseInt(this.$route.params.item)
  //     this.sousCat = this.tab.find(e => e.id === this.category).sousCategory;
  //     console.log(this.tab)
  //     console.log(this.sousCat[0])
  //   },
  // },
  watch: {
    '$route.path': function(){
      // console.log(this.$route.params)
      this.category = parseInt(this.$route.params.item)
      // this.sousCat = json.category.find(e => e.id === this.category).sousCategory;
      // this.getSousCat()

    }
  }
}
</script>