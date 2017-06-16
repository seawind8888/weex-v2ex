export function FETCH_INIT(state) {
    state.isRefresh = true
}

export function FETCH_LIST_FINISH(state, {
    list
}) {
    state.isRefresh = false
    state.listInfo = state.listInfo.concat(list.data)
}

export function FETCH_TAB_FINISH(state, {
    list
}) {
    state.isRefresh = false
    state.listInfo = list.data
}

export function FETCH_ITEM_FINISH(state, {
    item
}) {
    state.isRefresh = false
    state.itemInfo = item.data
}
