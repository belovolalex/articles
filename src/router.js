import Vue from 'vue'
import Router from 'vue-router'
import ArticlesComp from './components/ArticlesComp.vue'
import ArticleComp from './components/ArticleComp.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'articles',
      component: ArticlesComp,
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticleComp
    },
  ]
})

export default router