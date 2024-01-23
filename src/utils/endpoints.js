import ApiService from '@/services/apiService'
const api = window.api

export const users = ApiService(
  `${api.REST_API ? api.REST_API_SVC : api.USERS_SVC}` + '/api/v1/users'
)
export const rental = ApiService(
  `${api.REST_API ? api.REST_API_SVC : api.RENTAL_SVC}` +
    '/api/v1/objects/rentals'
)
export const rental2 = ApiService(
  `${api.REST_API ? api.REST_API_SVC : api.RENTAL_SVC}` + '/api/v1/rentals'
)
export const object = ApiService(
  `${api.REST_API ? api.REST_API_SVC : api.OBJECTS_SVC}` + '/api/v1/objects'
)

export const wallet = ApiService(
  `${api.REST_API ? api.REST_API_SVC : api.WALLET_SVC}` + '/api/v1/wallets'
)
