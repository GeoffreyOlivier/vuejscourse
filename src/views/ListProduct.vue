<template>
  <div class="">
    <div class="carousel">
      <div v-for="item in test" :key="item.id">
        <div class="cell" v-on:click="selectSubCat(item)">{{ item.titre }}</div>
      </div>
    </div>
    <div>
      <div v-if="cat_selected"  class="container">
        <StackGrid
            :columnWidth="200"
            :gutterX="20"
            :gutterY="20">
          <div class="stack-item"
               v-for="(item, index) in cat_selected" :key="index"
          >
            <div>
              <b-card
                  :title="item.titre"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
              >
                <router-link class="btn btn-primary" :to="{ name: 'item-detail', params: { id: item }}"></router-link>
              </b-card>
            </div>
          </div>
        </StackGrid>
      </div>
    </div>
  </div>
</template>

<script>
import json from './../assets/data.json'
import StackGrid from 'vue-stack-grid-component'

export default {
  components: {
    StackGrid
  },
  data() {
    return {
      tab: json,
      category: 0,
      sousCat: [],
      test: '',
      cat_selected: '',
      souscatjson: '',
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
    console.log("pass")
    this.getSousCat()
    console.log(this.cat_selected)
  },
  updated() {
  },
  methods: {
    getSousCat() {
      console.log(this.category)


      this.category = parseInt(this.$route.params.item)
      this.sousCat = this.tab.filter(e => e.id === this.category);


      this.test = this.sousCat[0].sousCategory

      console.log(typeof 'sousCat');
    },
    selectSubCat(v){
      console.log(v.produits)
      this.cat_selected = v.produits;
    },
  },
  watch: {
    '$route.path': function(){
      console.log(this.cat_selected)

      // this.test = ''
      // console.log(this.$route.params)
      this.category = parseInt(this.$route.params.item)
      // this.sousCat = json.category.find(e => e.id === this.category).sousCategory;
      this.getSousCat()

    }
  }
}
</script>
<style scoped>
.carousel {
  display: flex;
  flex-direction: row;
  overflow: scroll;
}
.cell{
  margin: 20px 30px;
}
</style>