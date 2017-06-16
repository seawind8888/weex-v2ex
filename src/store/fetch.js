const stream = weex.requireModule('stream')
const baseURL = 'https://cnodejs.org/api/v1'

export function fetchApi (URL) {
    return new Promise((resolve, reject) => {
        stream.fetch({
            method: 'GET',
            url: URL,
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

export function fetchList (page, type) {
    return fetchApi(`${baseURL}/topics?page=${page}&limit=20&tab=${type}&mdrender=true`)
}

export function fetchItem (id) {
    return fetchApi(`${baseURL}/topic/${id}`)
}
