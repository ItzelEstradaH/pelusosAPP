import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

//Components
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ReportButtons from './components/ReportButtons';
import LastNews from './components/LastNews';


Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path:'/', component: LoginForm},
  {path:'/registro', component: RegisterForm},
  {path:'/inicio', component: ReportButtons},
  {path:'/noticias', component: LastNews},
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
