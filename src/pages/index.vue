<template>
  <div class="index">
    <img class="home-img" :src="$store.state.meta.homePageImg" alt="homeImg" />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('fetchUserAndMenuList')
  },
  methods: {}
}
</script>
<style lang="less">
.index {
  .home-img {
    width: 100%;
  }
}
</style>
