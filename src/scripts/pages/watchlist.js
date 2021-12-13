import FromIdb from '../data/from-idb'

const Watchlist = {
  async render () {
    return `
      <section class="main">
        <h1 class="content__label" tabindex="0">My Watchlist</h2>
        <card-wrap></card-wrap>
      </section>
    `
  },

  async afterRender () {
    const cardWrap = document.querySelector('card-wrap')
    const animes = await FromIdb.getAll()
    cardWrap.list = animes
  }
}

export default Watchlist
