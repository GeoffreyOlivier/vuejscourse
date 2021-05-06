<template>
  <div>
    <div class="back">
      <a @click="$router.go(-1)"> &lt; back</a>
    </div>
    <img :src="product.image" alt="">
    <div class="information">
      <div>
        <div>{{ product.titre }}</div>
        <div>{{ product.stars }} stars</div>
      </div>
      <div>
        <div>{{ product.prix }} €</div>
        <b-btn class="btn-custom" @click="addProduct(product.id)">
          Ajouter au panier
        </b-btn>
      </div>
    </div>
    <div class="description">
      <p>{{product.description}}</p>
    </div>
  </div>
</template>
<script>

import CategorieService from "@/services/Categorie.service";

export default {
  data() {
    return {
      product: ''
    }
  },
  created() {
    this.fetchProduct()
  },
  methods: {
    fetchProduct() {
      CategorieService.getProductById(this.$route.params.id)
          .then((response) => {
            console.log(response)
            this.product = response[0]
          })
          .catch((error) => {
            console.log(error)
            console.log(error.response)
          })
    },
    addProduct(v) {
      CategorieService.addProduct(v)
          .then((response) => {
            console.log(response)
            alert("produit ajouter au panier")
          })
          .catch((error) => {
            console.log(error)
            console.log(error.response)
          })
    }

  },
}
</script>
<style>
img {
  max-width: 90%;
  height: auto;;
}

.btn-custom {
  padding: 8px 10px;
  margin: 20px 0 20px 0;
  border-radius: 5px;
  background: #ab4c09;
  color: white;
}

.information {
  display: flex;
  justify-content: space-around;
  align-content: space-between;
  padding: 45px 0;
  font-family: system-ui;
  font-size: large;
  font-weight: bolder;
}

.back {
  font-weight: bold;
  font-size: large;
  text-align: left;
  text-decoration: none;
  color: black;
  margin: 20px 20px;
}
</style>