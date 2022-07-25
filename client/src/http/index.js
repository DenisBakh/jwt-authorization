import axios from "axios";

const BASE_URL = 'http://localhost:5000/api'

export const $apiWithAuth = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
})
export const $api = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
})

$apiWithAuth.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$apiWithAuth.interceptors.response.use(config => {
    return config
}, async error => {
    const initialConfig = error.config

    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        error.config._isRetry = true
        try {
            const response = await $api.get('/refresh')
            localStorage.setItem('token', response.data.accessToken)
            return $apiWithAuth.request(initialConfig)
        } catch (e) {
            console.log('не авторизован')
        }

    }

    throw error
})