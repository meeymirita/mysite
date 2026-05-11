import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', redirect: '/Mirita' },
    { path: '/Mirita', component()
        { return import('../pages/Mirita/Mirita.vue'); },
        children: []
    },
    {
        path: '/admin',
        component() {
            return import('@/pages/Admin/Index.vue');
        },
        children: [
            {
                path: 'about',
                component() {
                    return import('@/pages/Admin/About/IndexAbout.vue');
                }
            },
            {
                path: 'profile',
                component() {
                    return import('@/pages/Admin/Profile/IndexProfile.vue');
                }
            },
            {
                path: 'projects',
                component() {
                    return import('@/pages/Admin/Projects/IndexProjects.vue');
                }
            }
        ]
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})