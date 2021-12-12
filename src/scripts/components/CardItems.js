import Card from './Card';

class CardItems extends Card {
  constructor(){
    super()
    this._list = []
  }

  get list() {
    return this._list
  }

  set list(value){
    this._list = value
    this.render()
    console.log(value);
  }


  render(){
    const { mal_id, image_url, members, title} = this._list;

    this.innerHTML =
      `
      <li class="cards_item">
      <a class="card-a" href='#/detail/${mal_id}'>
      <div class="card">
        <div class="card_image"><img src=${image_url}></div>
        <div class="card_content">
          <h2 class="card_title">${title}</h2>
          <p class="card_text">Member ${members}</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
      </a>
    </li>
    `
  }
}

customElements.define("cards-item", CardItems);