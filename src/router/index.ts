import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Login from '@/views/Login.vue';
import Notebook from '@/views/Notebook.vue';
import NoteDetail from '@/views/NoteDetail.vue';
import TrashDetail from '@/views/TrashDetail.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/notebook',
    component: Notebook
  },
  {
    path: '/detail',
    component: NoteDetail
  },
  {
    path: '/trash',
    component: TrashDetail
  },
];

const router = new VueRouter({
  routes
});

export default router;
