import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/index.vue";
import WhatIP from "../pages/subpage/index.vue"
import Vpn from "../pages/subpage/vpnSproxy.vue"
import Pagages from "../pages/subpage/pagages.vue"
import Register from "../pages/login/register_login.vue"
// import Login from "../pages/login/login.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Proxy IP Thai"
    }
  },
  {
    path: "/WhatProxy",
    name: "WhatProxyIP",
    component: WhatIP,
    meta: {
      title: "Proxy คืออะไร ?"
    }
  },
  {
    path: "/VPNvsPROXY",
    name: "VPNvsPROXY",
    component: Vpn,
    meta: {
      title: "VPN และ Proxy แตกต่างกันอย่างไร?"
    }
  },
  {
    path: "/Pagages",
    name: "Pagages",
    component: Pagages,
    meta: {
      title: "Proxy IP Thai : ราคาเริ่มต้น"
    }
  },

  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      title: "Proxy IP Thai : สมัครสมาชิก"
    }
  },

  // {
  //   path: "/login",
  //   name: "login",
  //   component: Login,
  //   meta: {
  //     title: "Proxy IP Thai : เข้าสู่ระบบ"
  //   }
  // },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) =>{
  if (to.meta.requiresAuth) {
    console.log("กรูณาเข้าสู่ระบบ");
  }
  else {
      next();
  }

})

export default router;