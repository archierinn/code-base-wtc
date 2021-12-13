import Card from './Card'
import '../../styles/cardDetail.css'

class CardDetail extends Card {
  constructor () {
    super()
    this._detail = {}
  }

  set detail (detail) {
    this._detail = detail
    this.render()
  }

  get detail () {
    return this._detail
  }

  render () {
    this.setAttribute('tabindex', '0')
    const newItem = Object.assign({
      imageUrl: '',
      title: '',
      synopsis: '',
      type: '',
      malId: '',
      source: '',
      members: '',
      genres: []
    }, this._detail)
    this.innerHTML = this._renderHTML(newItem)
    return this
  }

  renderLoading () {
    this.innerHTML = `
    <div class="loading" role="status" tabindex="0"></div>
  `
  }

  renderError (message) {
    this.innerHTML = `
      <h2 class="error" tabindex="0">${message}</h2>
    `
  }

  _renderHTML ({ imageUrl, title, synopsis, type, malId, genres, source, members }) {
    return `
    <article aria-label="${title}">
      <section>
        <h2 id="articleTitle-${malId}" tabindex="0">${title}</h2>
        <div>
          <ul>
            <li>
              <h4 class="list">Type: <span aria-label="Type is ${type}" tabindex="0">${type}</span></h4>
            </li>
            <li>
              <h4 class="list">Source: <span aria-label="Source is ${source}" tabindex="0">${source}</span></h4>
            </li>
            <li>
              <h4 class="list">Members: <span aria-label="Total member is ${members}" tabindex="0">${members}</span></h4>
            </li>
          </ul>
          <figure>
            <img alt="Image of ${title}" src="${imageUrl}">
            <div id="watchlistButtonContainer"></div>
          </figure>
        </div>
        <h4>Genres</h4>
        ${this._renderGenres(genres)}
        <h4 tabindex="0">Synopsis</h4>
        <p tabindex="0">${synopsis}</p>
      </section>
    </article>
  `
  }

  _renderGenres (genres) {
    const genresContainer = document.createElement('div')
    genresContainer.classList.add('genres')
    genresContainer.setAttribute('tabindex', '0')
    const genresList = []
    genres.forEach(({ name: genreName }) => {
      const genreItem = document.createElement('span')
      genreItem.textContent = genreName
      genresList.push(genreName)
      genresContainer.appendChild(genreItem)
    })
    genresContainer.setAttribute('aria-label', `Genres are ${genresList.join(', ')}`)
    return genresContainer.outerHTML
  }

  _renderMenu (menus, key) {
    const menuContainer = document.createElement('ul')
    menuContainer.setAttribute('tabindex', '0')
    menus[key].forEach(({ name: menuName }) => {
      const menuItem = document.createElement('li')
      menuItem.textContent = menuName
      menuContainer.appendChild(menuItem)
    })
    return menuContainer.outerHTML
  }
}

customElements.define('card-detail', CardDetail)
