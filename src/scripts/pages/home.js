import FromApi from '../data/from-api'

const Home = {
  async render () {
    return `
    <div class="main">
      <card-wrap />
    </div>
    `
  },

  async afterRender () {
    const response = await FromApi.list()
    const cardWrap = document.querySelector('card-wrap')
    cardWrap.list = response
  }

}

export default Home
