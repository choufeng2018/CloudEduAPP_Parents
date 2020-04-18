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
      },
      {
        path: '/homeFind',
        component: () => import('components/content/homeFind/index.vue'),
        // children: [
        //   {
        //     path: 'addHeight',
        //     component: () => import('components/content/homeFind/addHeight.vue')
        //   }
        // ]
      },
      {
        path: '/heightList',
        component: () => import('components/content/homeFind/heightList.vue')
      },
      {
        path: '/gradeList',
        component: () => import('components/content/homeFind/gradeList.vue')
      },
      {
        path: '/addHeight',
        component: () => import('components/content/homeFind/addHeight.vue')
      },
      {
        path: '/addStudent',
        component: () => import('components/content/homeFind/addStudent.vue')
      },
      {
        path: '/addGrade',
        component: () => import('components/content/homeFind/addGrade.vue')
      },
      {
        path: '/mistakeList',
        component: () => import('components/content/homeFind/mistakeList.vue')
      },
      {
        path: '/errorBook',
        component: () => import('components/content/homeFind/errorBook.vue')
      },
      {
        path: '/askLeave',
        component: () => import('components/content/homeFind/askLeave.vue')
      },
      {
        path: '/leaveList',
        component: () => import('components/content/homeFind/leaveList.vue')
      },   {
        path: '/complaintsList',
        component: () => import('components/content/homeFind/complaintsList.vue')
      }, {
        path: '/complaints',
        component: () => import('components/content/homeFind/complaints.vue')
      },
      {
        path: '/hworkList',
        component: () => import('components/content/homeFind/hworkList.vue')
      },
      {
        path: '/homework',
        component: () => import('components/content/homeFind/homework.vue')
      },
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
