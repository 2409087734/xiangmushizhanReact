import axios from "axios"

let request = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 1000
})

request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers.authorization=` Bearer ${localStorage.getItem('token')}`
    console.log(config)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
let get = (url,obj) => request.get(url,obj)
let post = (url, zhuti) => request.post(url, zhuti)
export {
    get, post
}