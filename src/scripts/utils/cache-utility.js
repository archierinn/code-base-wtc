import CONFIG from '../globals/config'

const STATUS_CODE_SUCCESS = 200

const CacheUtility = {
  async cachingAppShell (requests) {
    try {
      const cache = await this._openCache()
      cache.addAll(requests)
    } catch (error) {
      console.log(error)
    }
  },

  async deleteOldCache () {
    const cacheNames = await caches.keys()
    cacheNames.filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName))
  },

  async revalidateCache (request) {
    const response = await caches.match(request)

    if (response) {
      this._fetchRequest(request)
      return response
    }

    return this._fetchRequest(request)
  },

  async _openCache () {
    return caches.open(CONFIG.CACHE_NAME)
  },

  _isResponseStatusCodeSuccess (response) {
    return !!response || response.status === STATUS_CODE_SUCCESS
  },

  async _fetchRequest (request) {
    const response = await fetch(request)

    if (this._isResponseStatusCodeSuccess(response)) {
      await this._addCache(request)
    }

    return response
  },

  async _addCache (request) {
    try {
      const cache = await this._openCache()
      cache.add(request)
    } catch (error) {
      console.log(error)
    }
  }
}

export default CacheUtility
