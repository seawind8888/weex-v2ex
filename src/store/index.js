import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

if (WXEnvironment.platform !== 'Web') {
    Vue.use(Vuex)
}

const store = new Vuex.Store({
    actions,
    mutations,
    state: {
        isRefresh: false,
        channelName: '最新',
        listInfo: [],
        itemInfo: '',
        itemID: '' 
    },
})

export default store