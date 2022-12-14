import Home         from './views/Home.vue';
import Login        from './views/Login.vue';
import InfoCliente  from './views/InfoCliente.vue';

export const routes = [
	{
    path: '',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cliente/:idCliente?',
    component: InfoCliente
  }

];
