import API_ENDPOINT from '../globals/api-endpoint'

class FromApi {
  static async list () {
    const response = await fetch(API_ENDPOINT)
    const responseJson = await response.json()
    return responseJson
  }

  static async detail (id) {
    const response = await fetch(API_ENDPOINT)
    const responseJson = await response.json()
    return responseJson
  }
}

export default FromApi
