import FromApi from '../data/from-api'
import UrlParser from '../routes/url-parser'
import '../components/CardDetail'
import WatchlistButtonInitiator from '../utils/watch-list-button-initiator'

const Detail = {
  async render () {
    return `
      <section class="content">
        <card-detail></card-detail>
      </section>
    `
  },

  async afterRender () {
    const { id } = UrlParser.parseUrlOnly()
    const cardDetail = document.querySelector('card-detail')
    cardDetail.renderLoading()
    try {
      const anime = await FromApi.detail(id)
      const { image_url: imageUrl, title, mal_id: malId, members, source, genres, synopsis, type } = anime
      cardDetail.detail = { imageUrl, title, synopsis, type, malId, genres, source, members }
      WatchlistButtonInitiator.init({
        watchlistButtonContainer: document.querySelector('#watchlistButtonContainer'),
        anime: { id, mal_id: malId, image_url: imageUrl, title, members }
      })
    } catch (error) {
      cardDetail.renderError(error.message)
    }
  }
}

export default Detail
