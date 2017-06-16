const stream = weex.requireModule('stream')

export function fetchApi (type) {
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

export function fetchList (type) {
    return fetchApi(type)
}

// export function fetchItem (id) {
//     return fetchApi(`${baseURL}/topic/${id}`)
// }
