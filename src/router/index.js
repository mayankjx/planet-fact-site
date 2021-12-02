import { createRouter, createWebHistory } from "vue-router";
import Mercury from "../views/Mercury.vue";
import Venus from "../views/Venus.vue";
import Earth from "../views/Earth.vue";
import Mars from "../views/Mars.vue";
import Jupiter from "../views/Jupiter.vue";
import Saturn from "../views/Saturn.vue";
import Uranus from "../views/Uranus.vue";
import Neptune from "../views/Neptune.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Earth,
  },
  {
    path: "/mercury",
    name: "Mercury",
    component: Mercury,
  },
  {
    path: "/venus",
    name: "Venus",
    component: Venus,
  },
  {
    path: "/mars",
    name: "Mars",
    component: Mars,
  },
  {
    path: "/jupiter",
    name: "Jupiter",
    component: Jupiter,
  },
  {
    path: "/saturn",
    name: "Saturn",
    component: Saturn,
  },
  {
    path: "/uranus",
    name: "Uranus",
    component: Uranus,
  },
  {
    path: "/neptune",
    name: "Neptune",
    component: Neptune,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
