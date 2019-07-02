<template lang="pug">
  #app
     router-view
</template>

<script>
import ArticlesComp from './components/ArticlesComp.vue'

export default {
  name: 'app',
  components: {
    ArticlesComp
  }
}
</script>

<style lang="stylus">

</style>
