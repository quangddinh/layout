import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import Dash from '../views/Dash.vue'
import Mental from '../views/Mental.vue'
import Potato from '../views/Potato.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home
          },
          {
            path: '/dash',
            name: 'Dash',
            component: Dash
          },
          {
            path: '/pro',
            name: 'Project',
            component: Project
          },
          {
            path: '/mental',
            name: 'Mental',
            component: Mental
          },
          {
            path: '/potato',
            name: 'Potato',
            component: Potato
          },
    ],
});
