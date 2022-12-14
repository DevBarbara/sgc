import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue';
import VueRouter from 'vue-router'

// Importando as Rotas
import { routes } from './routes';

createApp(App).mount('#app')

// Registrando o router
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { 
      path: '/components/BarraLateral',
      name: BarraLateral,
      component: BarraLateral
    },
  ]

});

new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
