import {
    fetchList
} from './fetch'

export function FETCH_LIST_DATA({
    commit,dispatch
}, type) {
    commit('FETCH_INIT')
    dispatch('TAB_CHANNEL_NAME', type)
    return fetchList(type)
        .then(list => commit('FETCH_LIST_FINISH', [list]))
}

export function TAB_CHANNEL_NAME({
    state
}, type) {
    switch (type) {
        case 'latest':
        state.channelName = '最新'
        break;
        case 'hot':
        state.channelName = '最热'
        break;
    }
}