import '../../styles/addToWatchlistButton.css'

class AddToWatchlistButton extends HTMLElement {
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
    const addToWatchlistButton = document.getElementById('addToWatchlistButton')
    addToWatchlistButton.addEventListener('click', this.eventClick)
  }

  render () {
    this.innerHTML = `
      <button aria-label="Add this anime to Watchlist" id="addToWatchlistButton">
        Add to Watchlist
      </button>
    `
  }
}

customElements.define('add-watchlist-button', AddToWatchlistButton)
