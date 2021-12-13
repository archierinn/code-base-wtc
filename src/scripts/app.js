
import routes from './routes/routes'
import UrlParser from './routes/url-parser'
import DrawerUtility from './utils/drawer-utility'

class App {
  constructor ({ button, body, content, drawer }) {
    this._body = body
    this._button = button
    this._content = content
    this._drawer = drawer

    this._initialAppShell()
  }

  _initialAppShell () {
    DrawerUtility.init({
      button: this._button,
      body: this._body,
      drawer: this._drawer
    })
  }

  async renderPage () {
    const url = UrlParser.parseUrlAndCombine()
    const page = routes[url] || routes.error
    this._content.innerHTML = await page.render()
    await page.afterRender()
  }
}

export default App
