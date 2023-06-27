import {createRouter, createWebHistory} from 'vue-router'
// dynamic imports
const Home = () => import('../views/Home.vue')
const DailyWeather = () => import('../views/DailyWeather.vue')
const HourlyWeather = () => import('../views/HourlyWeather.vue')
const AddCity = () => import('../views/components/AddCity.vue')
const routes =[
    {
        path: '/',
        name:'Home',
        component: Home
    },
    {
        path:'/add',
        name:'AddCity',
        component: AddCity
    },
    {
        path: '/dailyWeather',
        name:'DailyWeather',
        component: DailyWeather
    },
    {
        path: '/hourlyWeather',
        name:'HourlyWeather',
        component: HourlyWeather
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;