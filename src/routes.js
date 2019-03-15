import VueRouter from 'vue-router'
import Home from './pages/Home'
//import Cars from './pages/Cars'
import Car from './pages/Car'
import ErrorCmp from './pages/Error'
import CarFull from './pages/CarFull'

//----Ленивая загрузка
const Cars = resolve => {
  require.ensure(['./pages/Cars.vue'], () => {
      resolve(
          require('./pages/Cars')
      )
  })
};

export default new VueRouter({
  routes: [
      {
          path: '', //localhost:8080
          component: Home
      },
      {
          path: '/cars', //localhost:8080/cars
          component: Cars,
          name: 'cars'
      },
      {
          path : '/car/:id',
          component: Car,
          children: [
              {
                  path: 'full',
                  component: CarFull,
                  name: 'carFull',
                  beforeEnter(to, from, next) {
                      next()
                  }
              }
          ]
      },
      {
          path: '/none',
          redirect: {
              name: 'cars'
          }
      },
      {
          path: '*',
          component: ErrorCmp
      }
  ],
    mode: 'history',
    scrollBehavior(to, from, savedPosition){
      
      if (savedPosition) {
          return savedPosition
      }

      if (to.hash) {
          return { selector: to.hash}
      }

      return {
          x: 0,
          y: 0
      }
    }
})