<template lang="pug">
  div
    select-comp
    section.articles
      .container
        .articles-wrap-article(
                               v-for="item in getCurrentArticles"
                               @click="openArticle(item.id)"
                               :key="item.id"
                               )
          .articles-article
            p.articles-article__title {{ item.title }}
            p.articles-article__description {{ item.description }}
            .articles-article-tags
              span.articles-article__tag(v-for="tag in item.tags") {{ tag.title }}
</template>


<script>
import {mapGetters} from 'vuex'
import SelectComp from './SelectComp'
export default {
  components: {
    SelectComp
  },
  created() {
    this.$store.dispatch('articles/fetchArticles')
  },
  computed: {
    ...mapGetters('articles', [ 'getCurrentArticles' ])
  },
  methods: {
    openArticle(id) {
      this.$store.commit('articles/OPEN_ARTICLE', id)
    }
  }
}
</script>


<style lang="stylus">
.articles 
  .articles-wrap-article
    box-shadow $box-shadow
    margin-bottom 30px
    border-radius 3px
    transition 0.2s
    padding 20px
    &:hover
      box-shadow $hover-box-shadow
      transition 0.2s
      cursor pointer
  .articles-article
    &__description
      letter-spacing 0.4px
      margin-bottom 10px
    &__title
      margin-bottom 15px
      font-size 1.3rem
      color $blue
    &__tag
      text-transform uppercase
      border 1px solid $light-gray
      display inline-block
      font-size 0.8rem
      border-radius 3px
      padding 4px 10px
      color $gray
      margin 3px
  .articles-article-tags
    margin-left -3px
</style>