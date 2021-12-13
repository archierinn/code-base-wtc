import API from '../globals/api'

class FromApi {
  static async list () {
    const response = await fetch(API.GET_LIST)
    const responseJson = await response.json()
    return responseJson.anime
  }

  static async detail (id) {
    const response = await fetch(API.GET_DETAIL(id))
    return response.json()
  }
}

export default FromApi
