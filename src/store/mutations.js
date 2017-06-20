export function FETCH_INIT(state) {
    state.isRefresh = true
}

export function FETCH_LIST_FINISH(state, [list]) {
    state.isRefresh = false
    state.listInfo = list
}
