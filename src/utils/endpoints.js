import ApiService from '@/services/apiService'
const api = window.api

export const lottery = ApiService(api.REST_API_SVC + '/api/v1/lotteries/')
export const users = ApiService(api.REST_API_SVC + '/api/v1/lotteries/')
export const wallet = ApiService(api.REST_API_SVC + '/api/v1/lotteries/')
