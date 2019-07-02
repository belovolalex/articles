import axios from 'axios'
import {API_URL, handlerError} from '../../utils'
export default {
  
  namespaced: true,
  
  state: {
    tags: []
  },
  
  mutations: {
    SET_TAGS(state, payload) {
      state.tags = payload
    }
  },
  
  actions: {
    fetchTags({commit}) {
       axios.get(`${API_URL}/tags.json`)
        .then(response => commit('SET_TAGS', response.data))
        .catch(error => handlerError(error))
    }
  }
  
}
