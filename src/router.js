import VueRouter from 'vue-router';
import ListView from './views/ListView.vue'
import CellItem from './views/CellItem.vue'

Vue.use(VueRouter);


export default new VueRouter({
    routes: [{
        path: '',
        redirect: '/post'
    }, {
        path: '/post',
        component: ListView
    },{
        path: '/show/:id',
        component: CellItem
    }]
});