import {
    fetchList,
    fetchDetail,
    fetchComment
} from './fetch'

export function FETCH_LIST_DATA({
    commit,dispatch
}, type) {
    commit('FETCH_INIT')
    dispatch('TAB_CHANNEL_NAME', type)
    return fetchList(type)
        .then(list => commit('FETCH_LIST_FINISH', [list]))
}

export function FETCH_DETAIL_INFO({
    commit
}, id) {
    commit('FETCH_INIT')
    return fetchDetail(id)
        .then(detail => commit('FETCH_DETAIL_FINISH', [detail]))
}
export function FETCH_COMMENT_INFO({
    commit
}, id) {
    commit('FETCH_INIT')
    return fetchComment(id)
        .then(comment => commit('FETCH_COMMENT_FINISH', [comment]))
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