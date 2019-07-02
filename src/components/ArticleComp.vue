<template lang="pug">
  section.article-section
    .container
      .wrap-article
        .article
          .article-body
            p.article__title {{ article.title }}
            p.article__description {{ article.description }}
            p.article__author(@click="showAuthorInfo") {{ getAuthorName }}
            modal.article-author-modal(
                                      name="author-info"
                                      adaptive=true
                                      width="90%"
                                      :maxWidth="600"
                                      :minHeight="350"
                                      )
              span.article-author-close-modal(@click="hideAuthorInfo") &times;
              p {{ getAuthorName }}
              p {{ getAuthorPhone }}
          .article-tags
            span.article-tags__tag(v-for="tag in article.tags") {{ tag.title }}
          .article-to-home-page(@click="toHomePage") На главную
            
</template>


<script>
import {mapState} from 'vuex'
export default {
  created() {
    let articleId = this.$route.params.id
    this.$store.dispatch('article/fetchArticle', articleId)
  },
  beforeDestroy() {
    this.$store.commit('article/REMOVE_ARTICLE')
  },
  computed: {
    ...mapState('article', [ 'article' ]),
    getAuthorName() {
      return this.article && this.article.author ? this.article.author.name : null
    },
    getAuthorPhone() {
      return this.article && this.article.author ? this.article.author.phone : null
    }
  },
  methods: {
    toHomePage() {
      this.$router.push('/')
    },
    showAuthorInfo() {
      this.$modal.show('author-info');
    },
    hideAuthorInfo() {
      this.$modal.hide('author-info');
    }
  }
}
</script>


<style lang="stylus">
.article-section
  +sm()
    margin-top 30px
.article
  &__title
    margin-bottom 35px
    font-size 1.6rem
    color $blue
  &__description
    letter-spacing 0.4px
    line-height 26px
  &__author
    text-align right
    cursor pointer
    color $gray
.article-tags
  margin-left -3px
  &__tag
    border 1px solid $light-gray
    text-transform uppercase
    display inline-block
    border-radius 3px
    padding 4px 10px
    font-size 0.8rem
    color $gray
    margin 3px
.article-body
  margin-bottom 5px
  +sm()
    margin-bottom 20px
.article-to-home-page
  text-align right
  cursor pointer
  color $blue
.article-author-modal
  position relative
  dispay flex
  align-items center
  p
    text-align center
    margin 3px
.article-author-close-modal
  position absolute
  cursor pointer
  padding 10px
  right 0
  top 0
.article-author-modal
  .v--modal-box.v--modal
    display flex
    flex-direction column
    justify-content center
</style>