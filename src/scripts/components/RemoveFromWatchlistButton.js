import '../../styles/removeFromWatchlistButton.css'

class RemoveFromWatchlistButton extends HTMLElement {
  constructor () {
    super()
    this._eventClick = null
  }

  connectedCallback () {
    this.render()
  }

  set eventClick (eventClick) {
    this._eventClick = eventClick
    this._addEventListener()
  }

  get eventClick () {
    return this._eventClick
  }

  _addEventListener () {
    const removeFromWatchlistButton = document.getElementById('removeFromWatchlistButton')
    removeFromWatchlistButton.addEventListener('click', this.eventClick)
  }

  render () {
    this.innerHTML = `
      <button aria-label="Remove this anime from Watchlist" id="removeFromWatchlistButton">
        Remove from Watchlist
      </button>
    `
  }
}

customElements.define('remove-watchlist-button', RemoveFromWatchlistButton)
