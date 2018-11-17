import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Listings from './../pages/Listings'
import Apply from './../pages/Apply'
Vue.use(Router)
function getUrlSubdomain (url) {
  let url1 = url.replace(/(^\w+:|^)\/\//, '')
  return url1.split('.')[0]
}
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'listings'
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/apply',
      name: 'apply',
      component: Apply,
      props: { domain: getUrlSubdomain(window.location.origin) }
    },
    {
      path: '/listings',
      name: 'listings',
      component: Listings,
      props: { domain: getUrlSubdomain(window.location.origin) }
    }
  ]
})
