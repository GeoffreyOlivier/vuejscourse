<template>
  <div class="">
    <div class="carousel">
      <div v-for="item in sousCat" :key="item.id">
        <div class="cell" v-on:click="showProduct(item.id)">{{ item.titre }}</div>
      </div>
    </div>
    <div>
      <div class="container" v-if="products.length > 0 && notif === false">
          <StackGrid
              :columnWidth="200"
              :gutterX="10"
              :gutterY="10">
            <div class="stack-item"
                 v-for="(product, index) in products" :key="index"
            >
              <div class="card-custom">
                <img :src="product.image" alt="box">
                <div class="information-card">
                  <div>{{product.titre}}</div>
                  <div>{{product.stars}} stars</div>
                </div>
                <div class="price">{{product.prix}}€</div>
                <router-link class="btn btn-custom" :to="{ name: 'item-detail', params: { id: product.id }}">Détails</router-link>

              </div>
            </div>
          </StackGrid>
        </div>
      <div v-if="notif === true" class="notification">
        Veuillez choisir une sous catégorie
      </div>
      <div v-if="products.length < 1 && notif === false" class="notification">
        Aucun produit
      </div>

    </div>

  </div>

</template>

<script>
import StackGrid from 'vue-stack-grid-component'
import CategorieService from '../services/Categorie.service'


export default {
  components: {
    StackGrid
  },
  data() {
    return {
      category: 0,
      sousCat: [],
      test: '',
      cat_selected: '',
      souscatjson: '',
      products: [],
      notif: false,
    }
  },
  created() {
    console.log("pass")
    console.log(this.products)
    this.getSousCat(1)
  },
  updated() {
  },
  methods: {
    getSousCat(v) {
      console.log("function")
      CategorieService.getSubCategorieById(v)
          .then((response) => {
            console.log(response)
            this.sousCat = response
            console.log(this.sousCat)
          })
          .catch((error) => {
            this.loading = false
            console.log(error)
            console.log(error.response)
          })
    },
    showProduct(v) {
      this.notif = false
      CategorieService.getProducts(v)
          .then((response) => {
            console.log(response)
            this.products = response
            console.log(this.products)
          })
          .catch((error) => {
            this.loading = false
            console.log(error)
            console.log(error.response)
          })
    },
  },
  watch: {
    '$route.path': function () {
      if (this.$route.params.item) {
        this.getSousCat(this.$route.params.item)
        this.notif = true
      }
    },
    cat_selected() {
      console.log("watch")
    }
  }
}
</script>
<style scoped>
.carousel{
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow: scroll;
  height: 45px;
  margin-bottom: 20px;
}

.cell {
  margin: 20px 30px;
  color: black;
  font-family: system-ui;
  font-size: medium;
  font-weight: bolder;
}
.notification{
  margin: 50px 0;
  font-family: system-ui;
  font-size: x-large;
  font-weight: bolder;
}
.active{
  color: red !important;
}
.card-custom{
  background: #e3e3e3;
  padding: 20px 20px;
}
.information-card{
  padding: 5px 0;
  font-weight: bolder;
  font-family: system-ui;
  text-align: left;
}
.stars{
  text-align: end;
}
.price{
  text-align: end;
}
.btn-custom{
  margin: 20px 0 0 0;
  border-radius: 5px;
  background: #ab4c09;
  color: white;
}
</style>