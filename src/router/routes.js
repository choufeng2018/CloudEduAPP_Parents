const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Home.vue'),
        children: [
          {
            path: '',
            component: () => import('components/content/NearbyStores.vue')
          }
        ]
      },
      {
        path: '/login',
        component: () => import('components/form/Login.vue')
      },
      {
        path: '/register',
        component: () => import('components/form/Register.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
