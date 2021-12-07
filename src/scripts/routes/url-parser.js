const UrlParser = {
  parseUrlAndCombine () {
    const url = window.location.hash.slice(1).toLowerCase()
    const splittedUrl = this._urlSplitter(url)
    return this._urlCombiner(splittedUrl)
  },

  parseUrlOnly () {
    const url = window.location.hash.slice(1).toLowerCase()
    return this._urlSplitter(url)
  },

  _urlSplitter (url) {
    const urlsSplits = url.split('/')
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null
    }
  },

  _urlCombiner (splittedUrl) {
    const resource = this._checkSplittedUrlKey(splittedUrl, 'resource') ? `/${splittedUrl.resource}` : '/'
    const id = this._checkSplittedUrlKey(splittedUrl, 'id') ? '/:id' : ''
    return resource + id
  },

  _checkSplittedUrlKey (splittedUrl, key) {
    return splittedUrl[key]
  }
}

export default UrlParser
