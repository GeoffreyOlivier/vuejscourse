<template>
  <div class="carousel">
    <div v-for="item in category" :key="item.id">
      <router-link  class="cell" :to="{name: 'list', params: { item : item.id }}">{{ item.titre }}</router-link>
    </div>
  </div>
</template>

<script>
// import axios from "axios"
import CategorieService from '../services/Categorie.service'
// import json from './../assets/data.json'

export default {
  components: {},
  data() {
    return {
      category: '',
      route: '',
    }
  },
  async mounted() {
    CategorieService.getAll()
        .then((response) => {
          console.log(response)
          this.category = response
          console.log(this.category)
        })
        .catch((error) => {
          this.loading = false
          console.log(error)
          console.log(error.response)
        })

  },
  created() {
    this.route = this.$route.name
  },
  methods: {
    tada(v) {
      console.log(v)
    },

  }
}
</script>
<style scoped>
.carousel{
  display: flex;
  flex-direction: row;
  overflow: scroll;
}
.cell{
  margin: 20px 30px;
}
.carousel-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #fdc0c0;
}
</style>