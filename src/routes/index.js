import {createRouter, createWebHistory} from 'vue-router'
// dynamic imports
const Home = () => import('../views/Home.vue')
const DailyWeather = () => import('../views/DailyWeather.vue')
const HourlyWeather = () => import('../views/HourlyWeather.vue')
const AddCity = () => import('../views/components/AddCity.vue')
const Weather =()=>import('../views/Weather.vue')

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
    {
        path: '/weather/:city',
        name:'Weather',
        component: Weather
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;