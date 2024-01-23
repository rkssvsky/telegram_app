import axios from 'axios'
export default function (url) {
  const user = localStorage.getItem('ds@user')
  const jwt = user ? JSON.parse(user).user.token : ''

  const headers = {
    Authorization: jwt
  }

  return axios.create({
    baseURL: url,
    headers
  })
}
