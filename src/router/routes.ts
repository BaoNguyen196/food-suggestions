import { RouteRecordRaw } from 'vue-router';

import MainLayout from '#/layouts/MainLayout.vue';
import MainLayoutAdmin from '#/layouts/MainLayoutAdmin.vue';
import AdminPage from '#/pages/Admin/AdminPage.vue';
import LoginPage from '#/pages/Login/LoginPage.vue';
import MetadataPage from '#/pages/Metadata/MetadataPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/admin',
        component: MainLayoutAdmin,
        children: [
          {
            path: '',
            component: AdminPage,
          },
        ],
        meta: { requiresAuth: true },
      },
      {
        path: '/metadata',
        component: MainLayoutAdmin,
        children: [
          {
            path: '',
            component: MetadataPage,
          },
        ],
        meta: { requiresAuth: true },
      },
      {
        name: 'login',
        path: '/login',
        component: LoginPage,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
