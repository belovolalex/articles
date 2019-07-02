import axios from 'axios'
import {API_URL, handlerError} from '../../utils'
import router from '../../router'
export default {
  
  namespaced: true,
  
  state: {
    articles: [],
    filteredArticles: [],
    stateFilterArticles: false
  },
  getters: {
    getCurrentArticles: state => state.stateFilterArticles ? state.filteredArticles : state.articles   
  },
  mutations: {
    SET_ARTICLES(state, payload) {
      state.articles = payload
    },
    OPEN_ARTICLE(state, payload) {
      router.push(`/article/${payload}`)
    },
    FILTER_ARTICLES(state, payload) {
      state.filteredArticles = []
      state.stateFilterArticles = true
      state.articles.forEach(item => item.tags.forEach(el => el.id === payload ? state.filteredArticles.push(item) : null))
    },
    CHANGE_STATE_FILTERED_ARTICLES(state, payload) {
      state.stateFilterArticles = payload
    }
  },
  
  actions: {
    fetchArticles({commit}) {
       axios.get(`${API_URL}/articles.json`)
        .then(response => commit('SET_ARTICLES', response.data))
        .catch(error => handlerError(error))
    }
  }
  
}
