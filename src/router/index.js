import {createRouter, createWebHistory} from "vue-router";
/*
import LoginComponent from "../login/pages/login.component.vue";
import RegisterComponent from "../login/pages/register.component.vue";
import MoodComponent from "../login/pages/mood.component.vue";
*/


import MainPageComponent from "../public/pages/main-page.component.vue";
/*
import ListasComponent from "../public/pages/listas.component.vue";
import AuthLayoutComponent from "../login/pages/auth-layout.component.vue";
*/

import HomeComponent from "../home/pages/home.component.vue";
import ExplorarComponent from "../explorer/pages/explorar.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/main',
            component: MainPageComponent,
            children: [
                {path: '/home', component: HomeComponent, meta: {title: 'Home'}},
                {path: '/explorer', component: ExplorarComponent, meta: {title: 'Explorar'}},
                {path: '/list', component: ListasComponent, meta: {title: 'Listas'}},
            ]
        },
        {
            path: '/register',
            component: AuthLayoutComponent,
            children: [
                {path: '/register', component: RegisterComponent, meta: {title: 'Register'}},
            ]
        },
        {
            path: '/login',
            component: AuthLayoutComponent,
            children: [
                {path: '/login', component: LoginComponent, meta: {title: 'Login'}},
            ]
        },
        {
            path: '/mood',
            component: AuthLayoutComponent,
            children: [
                {path: '/mood', component: MoodComponent, meta: {title: 'Mood'}},
            ]
        },
        { path: '/:pathMatch(.*)*', redirect: '/login' }



        /*
        {path: '/home', component: HomeComponent, meta: {title: 'Home'}},
        {path: '/', redirect: '/home'},
        {path: '/login' , component: LoginComponent, meta: {title: 'Login'}},
        {path: '/register', component: RegisterComponent, meta: {title: 'Register'}},
        {path: '/mood', component: MoodComponent, meta: {title: 'Mood'}},
        {path: '/main', component: MainPageComponent, meta: {title: 'Main Page'}},
        {path: '/explorer', component: ExplorarComponent, meta: {title: 'Explorar'}},
        {path: '/list', component: ListasComponent, meta: {title: 'Listas'}},

            */
    ],



});

router.beforeEach((to, from, next) => {
    let baseTitle = 'Zenflicks app';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

export default router;