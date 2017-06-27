import VueRouter from 'vue-router';
import ListView from './views/ListView.vue'
import CellItem from './views/CellItem.vue'

Vue.use(VueRouter);

function createListView (type) {
  return {
    render (createElement) {
      return createElement(ListView, { props: { type } })
    }
  }
}

export default new VueRouter({
    routes: [{
        path: '',
        redirect: '/latest'
    }, {
        path: '/latest',
        component: createListView('all')
    }, {
        path: '/hot',
        component: createListView('job')
    }, {
        path: '/show/:id',
        component: CellItem
    }]
});