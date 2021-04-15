<template>
  <div class="home">
<div><h1>Home</h1></div>
  </div>
</template>

<script>
import json from './../assets/data.json'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return{
      json: json
    }
  }
}
</script>
