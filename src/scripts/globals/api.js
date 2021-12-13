import config from './config'

const API = {
  GET_LIST: `${config.BASE_URL}season/later`,
  GET_DETAIL: (id) => `${config.BASE_URL}anime/${id}`
}

export default API
