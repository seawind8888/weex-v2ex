export function FETCH_INIT(state) {
    state.isRefresh = true
}

export function FETCH_LIST_FINISH(state, [list]) {
    state.isRefresh = false
    state.listInfo = list
}

export function FETCH_DETAIL_FINISH(state, [detail]) {
    state.isRefresh = false
    state.listDetail = detail[0]
}

export function FETCH_COMMENT_FINISH(state, [comment]) {
    state.isRefresh = false
    state.listComment = comment
}

