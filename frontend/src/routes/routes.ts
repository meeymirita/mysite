import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', redirect: '/mirita' },
    { path: '/mirita', component()
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
            },
            {
                path: 'tech',
                component() {
                    return import('@/pages/Admin/Tech/IndexTech.vue');
                }
            }
        ]
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})