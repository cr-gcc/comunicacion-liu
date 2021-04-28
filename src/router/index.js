import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import NotFound from '../views/NotFound.vue'
//
Vue.use(VueRouter)
//
function accessRequired(to, from, next) {
  let access = JSON.parse(localStorage.getItem('msal.institution'));
  switch( to.meta.permission ){
    case 'user':
      if(access){
        next();
      }
      else{
        next({path: '/login'});
      }
    break;
  }
}
//
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '/',
      component: Login,
      children: [
        {
          path: 'login',
          component: Login
        }
      ]
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/post/:id', 
      name: 'Post',
      component: Post,
      props: true,
      beforeEnter: accessRequired,
      meta: {
        permission: 'user'
      }
    },
    { path: '*',
      name: 'NotFound',
      component: NotFound 
    }
  ]
})
//
export default router
