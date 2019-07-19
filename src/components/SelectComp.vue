<template lang="pug">
  section.select-section
    .container
      multiselect(
                  label="title"
                  v-model="selected"
                  :options="tags"
                  @select="handleSelect"
                  @remove="handleRemoveOption"
                  placeholder="Сортировать по тегу"
                  )
</template>

<script>
import {mapState} from 'vuex'
import Multiselect from 'vue-multiselect'
export default {
  components: {
    Multiselect
  },
  data() {
    return {
      selected: ''
    }
  },
  created() {
    this.$store.dispatch('tags/fetchTags')
  },
  computed: {
    ...mapState('tags', [ 'tags' ])
  },
  methods: {
    handleSelect(option) {
      let tagId = option.id
      this.$store.commit('articles/FILTER_ARTICLES', tagId)
    },
    handleRemoveOption() {
      this.$store.commit('articles/CHANGE_STATE_FILTERED_ARTICLES', false)
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="stylus">
.select-section
  margin 30px 0
  .multiselect__option--highlight
    background-color transparent
    color black
  .multiselect__option:after
    background-color transparent
    color black
    content ''
  .multiselect__element:hover
    background-color #f3f3f3
  .multiselect__option--selected
    font-weight inherit
  .multiselect__content-wrapper
    position relative
    +sm()
      position absolute
  .multiselect
    +xs()
      margin-left auto
      max-width 300px
      margin-right 0
</style>