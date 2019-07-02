import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import articles from './modules/articles'
import article from './modules/article'
import tags from './modules/tags'

export const store = new Vuex.Store({
  modules: {
    articles,
    article,
    tags
  }
})
