import {
    fetchList,
    fetchItem
} from './fetch'

export function FETCH_LIST_DATA({
    commit
}, {
    body
}) {
    commit('FETCH_INIT')
    return fetchList(body.page, body.type)
        .then(list => commit('FETCH_LIST_FINISH', {
            list
        }))
}

export function FETCH_TAB_DATA({
    commit,
    dispatch
}, {
    body
}) {
    commit('FETCH_INIT')
    dispatch('TAB_HEAD_TITLE', body.type)
    return fetchList(body.page, body.type)
        .then(list => commit('FETCH_TAB_FINISH', {
            list
        }))

}

export function FETCH_ITEM_DATA({
    commit
}, id) {
    commit('FETCH_INIT')
    return fetchItem(id)
        .then(item => commit('FETCH_ITEM_FINISH', {
            item
        }))
}

export function TAB_HEAD_TITLE({
    state
}, type) {
    switch (type) {
        case 'all':
            state.channelName = '最新'
            break;
        case 'job':
            state.channelName = '招聘'
            break;
        case 'ask':
            state.channelName = '问答'
            break;
        case 'hot':
            state.channelName = '置顶'
            break;
    }
}