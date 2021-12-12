import Card from './Card';
import "./CardItems";

class CardWrap extends Card {
  constructor(){
    super()
    this._list = [];
  }

  get list(){
    return this._list
  }

  set list(value){
    this._list = value
    this.render()
  }

  render(){
    this.innerHTML = ` `
    const cards = document.createElement('ul')
    cards.classList.add('cards')
    this._list.forEach(data => {
      const cardItems = document.createElement('cards-item');
      cardItems.list = data;
      cards.appendChild(cardItems);

    })
    this.appendChild(cards)
    return this
  }
}

customElements.define("card-wrap", CardWrap);