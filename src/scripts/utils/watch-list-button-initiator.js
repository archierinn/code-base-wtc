import '../components/AddToWatchlistButton'
import '../components/RemoveFromWatchlistButton'
import FromIdb from '../data/from-idb'

const WatchlistButtonInitiator = {

  async init ({ watchlistButtonContainer, anime }) {
    this._watchlistButtonContainer = watchlistButtonContainer
    this._anime = anime

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._anime

    if (await this._isAnimeExist(id)) {
      this._renderRemoveFromWatchlist()
    } else {
      this._renderAddToWatchlist()
    }
  },

  async _isAnimeExist (id) {
    const anime = await FromIdb.get(id)
    return !!anime
  },

  _renderAddToWatchlist () {
    this._watchlistButtonContainer.innerHTML = '<add-watchlist-button></add-watchlist-button>'

    const addToWatchlistButton = document.querySelector('add-watchlist-button')
    addToWatchlistButton.eventClick = async () => {
      await FromIdb.put(this._anime)
      this._renderButton()
    }
  },

  _renderRemoveFromWatchlist () {
    this._watchlistButtonContainer.innerHTML = '<remove-watchlist-button></remove-watchlist-button>'

    const removeFromWatchlistButton = document.querySelector('remove-watchlist-button')
    removeFromWatchlistButton.eventClick = async () => {
      await FromIdb.deletes(this._anime.id)
      this._renderButton()
    }
  }

}

export default WatchlistButtonInitiator
