const stream = weex.requireModule('stream')
//最新
export function fetchList (type) {
    return new Promise((resolve, reject) => {
        stream.fetch({
            method: 'GET',
            url: `https://www.v2ex.com/api/topics/${type}.json`,
            type: 'json'
        }, (response) => {
            if (response.status == 200) {
                resolve(response.data)
            }
            else {
                reject(response)
            }
        }, () => {})
    })
}
//节点
export function fetchNode (type) {
    return new Promise((resolve, reject) => {
        stream.fetch({
            method: 'GET',
            url: `https://www.v2ex.com/api/topics/show.json?node_name=${type}`,
            type: 'json'
        }, (response) => {
            if (response.status == 200) {
                resolve(response.data)
            }
            else {
                reject(response)
            }
        }, () => {})
    })
}
//详情
export function fetchDetail (id) {
    return new Promise((resolve, reject) => {
        stream.fetch({
            method: 'GET',
            url: `https://www.v2ex.com/api/topics/show.json?id=${id}`,
            type: 'json'
        }, (response) => {
            if (response.status == 200) {
                resolve(response.data)
            }
            else {
                reject(response)
            }
        }, () => {})
    })
}
//评论
export function fetchComment (id) {
    return new Promise((resolve, reject) => {
        stream.fetch({
            method: 'GET',
            url: `https://www.v2ex.com/api/replies/show.json?topic_id=${id}`,
            type: 'json'
        }, (response) => {
            if (response.status == 200) {
                resolve(response.data)
            }
            else {
                reject(response)
            }
        }, () => {})
    })
}

// export function fetchList (type) {
//     return fetchApi(type)
// }

// export function fetchItem (id) {
//     return fetchDetail (id)
// }

// export function fetchItem (id) {
//     return fetchApi(`${baseURL}/topic/${id}`)
// }
