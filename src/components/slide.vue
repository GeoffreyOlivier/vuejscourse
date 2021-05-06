<template>
  <div class="carousel">
      <router-link
          v-for="item in category" :key="item.id"
          :class="[{ 'active': activeIndex === item.id}, 'cell']"
          @click="setActive(item.id)" :to="{name: 'list', params: { item : item.id }}">{{ item.titre }}
      </router-link>
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
      activeIndex: undefined
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
    setActive(index) {
      this.activeIndex = index
    },

  }
}
</script>
<style scoped>
.carousel {
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow: scroll;
  height: 45px;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px gray;
}

.cell {
  margin: 20px 30px;
  color: black;
  font-family: system-ui;
  font-size: medium;
  font-weight: bolder;
}
.router-link-active{
  color: saddlebrown !important;
  text-decoration: none;
}


</style>