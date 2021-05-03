<template>
  <div>
    <h1>{{item_title}}</h1>
  </div>
</template>
<script>

export default {
  data() {
    return {
      item_title: '',
    }
  },
created() {
  console.log(this.$route.params)
  this.item_title = this.$route.params.id.titre

}
}
</script>