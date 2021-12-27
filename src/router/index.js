import Vue from 'vue';
import VueRouter from 'vue-router';
import Auth from '@/pages/Auth';
import Registration from '@/pages/Registration';
import Admin from '@/pages/Admin';
import Cart from '@/pages/Cart';
import Gadgets from '@/pages/Gadgets';
import Gadget from '@/pages/Gadget';

Vue.use(VueRouter)

const routes = [
  {
    path: "/auth",
    component: Auth
  },{
    path: "/admin",
    component: Admin
  },{
    path: "/cart",
    component: Cart
  },{
    path: "/",
    component: Gadgets
  },{
    path: "/gadgets/:id",
    component: Gadget
  },{
    path: "/registration",
    component: Registration
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;
