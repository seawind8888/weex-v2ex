import {
    fetchList
} from './fetch'

export function FETCH_LIST_DATA({
    commit
}, type) {
    commit('FETCH_INIT')
    return fetchList(type)
        .then(list => commit('FETCH_LIST_FINISH', [list]))
}