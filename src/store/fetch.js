const stream = weex.requireModule('stream')

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
