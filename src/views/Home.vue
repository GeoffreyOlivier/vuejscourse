<template>
  <div class="home">
      <h3>Home made</h3>
      <b-col class="home-col">
        <b-col> <p>HomeMade
          është një tekst shabllon
          i industrisë së printimit
          dhe shtypshkronjave.
          Lorem Ipsum ka qenë
          teksti shabllon i
          industrisë që nga vitet
          1500, kur një shtypës</p></b-col>
        <b-col><img :src="require('../assets/man.jpg')" alt="man"></b-col>
      </b-col>
      <h3>Unique box</h3>
      <b-col class="home-col">
        <b-col><img :src="require('../assets/box.jpg')" alt="box"></b-col>
        <b-col> <p>HomeMade
          është një tekst shabllon
          i industrisë së printimit
          dhe shtypshkronjave.
          Lorem Ipsum ka qenë
          teksti shabllon i
          industrisë që nga vitet
          1500, kur një shtypës</p></b-col>
      </b-col>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data () {
    return{
    }
  }
}
</script>
<style>
h3{
  margin: 20px 0;
}
.home-col{
  display: flex;
  flex-direction: row;
}
img{
  height: 150px;
  width: auto;
}
</style>