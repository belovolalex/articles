import axios from 'axios'
import {API_URL, handlerError} from '../../utils'
export default {
  
  namespaced: true,
  
  state: {
    article: {}
  },
  
  mutations: {
    SET_CURRENT_ARTICLE(state, payload) {
      state.article = payload
    },
    REMOVE_ARTICLE(state) {
      state.article = {}
    }
  },
  
  actions: {
    fetchArticle({commit}, articleId) {
       axios.get(`${API_URL}/articles/${articleId}.json`)
        .then(response => commit('SET_CURRENT_ARTICLE', response.data))
        .catch(error => handlerError(error))
    }
  }
  
}