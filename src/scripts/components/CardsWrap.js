import Card from './Card'
import './CardItems'
import '../../styles/cardWrap.css'

class CardWrap extends Card {
  constructor () {
    super()
    this._list = []
  }

  get list () {
    return this._list
  }

  set list (value) {
    this._list = value
    this.render()
  }

  render () {
    this.innerHTML = ' '
    const cards = document.createElement('ul')
    cards.classList.add('cards')
    this._list.forEach(data => {
      const cardItems = document.createElement('cards-item')
      const { mal_id: malId, image_url: imageUrl, members, title } = data
      cardItems.list = { malId, imageUrl, members, title }
      cards.appendChild(cardItems)
    })
    this.appendChild(cards)
    return this
  }
}

customElements.define('card-wrap', CardWrap)
