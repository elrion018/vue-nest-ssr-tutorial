import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [];

const createRouter = () =>
  new VueRouter({
    mode: 'history',
    routes,
  });

export const router = createRouter();
