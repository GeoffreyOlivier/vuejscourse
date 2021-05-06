<template>
  <div>
    <div class="back" >
      <a @click="$router.go(-1)"> &lt; back</a>
    </div>
    <img :src="product.image" alt="">
    <div class="information">
      <div>
        <div>{{ product.titre }}</div>
        <div>{{ product.stars }}</div>
      </div>
      <div>
        <div>{{ product.prix }} €</div>
        <router-link class="btn-custom" :to="{ name: '', params: { id: product.id }}">
          Ajouter au panier
        </router-link>
      </div>
    </div>
    <div class="description">
      <p>m Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentiall</p>
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
            console.log(this.product)
          })
          .catch((error) => {
            this.loading = false
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
.information{
  display: flex;
  justify-content: space-around;
  align-content: space-between;
  padding: 45px 0;
  font-family: system-ui;
  font-size: large;
  font-weight: bolder;
}
.back{
  font-weight: bold;
  font-size: large;
  text-align: left;
  text-decoration: none;
  color: black;
  margin: 20px 20px;
}
</style>