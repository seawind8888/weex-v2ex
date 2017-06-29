import {
    fetchList,
    fetchNode,
    fetchDetail,
    fetchComment
} from './fetch'


export function FETCH_LIST_DATA({
    commit,state,dispatch
}, type) {
    var type = type || 'latest'
    commit('FETCH_INIT')
    state.channel = type
    dispatch('TAB_CHANNEL_NAME', type)
    return fetchList(type)
        .then(list => commit('FETCH_LIST_FINISH', [list]))
}

export function FETCH_NODE_DATA({
    commit,state,dispatch
}, type) {
    commit('FETCH_INIT')
    state.channel = type
    dispatch('TAB_NODE_NAME', type)
    return fetchNode(type)
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

export function TAB_NODE_NAME({
    state
}, type) {
    switch (type) {
        case 'tech':
        state.channelName = '技术'
        break;
        case 'jobs':
        state.channelName = '酷工作'
        break;
        case 'programmer':
        state.channelName = '程序员'
        break;
        case 'ideas':
        state.channelName = '奇思妙想'
        break;
        case 'qna':
        state.channelName = '问与答'
        break;
        case 'linux':
        state.channelName = 'Linux'
        break;
        case 'php':
        state.channelName = 'PHP'
        break;
        case 'python':
        state.channelName = 'Python'
        break;
    }
}