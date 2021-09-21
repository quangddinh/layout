import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import Dash from '../views/Dash.vue'
import Mental from '../views/Mental.vue'
import Run from '../views/Run.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
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
            path: '/run',
            name: 'Run',
            component: Run
          },
    ],
});
