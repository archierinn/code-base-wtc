import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/responsive.css'
import App from './app'
import serviceWorkerInit from './utils/service-worker-init'

const app = new App({
  button: document.getElementById('hamburger'),
  drawer: document.getElementById('drawer'),
  content: document.getElementById('main'),
  body: document.querySelector('body')
})

const addEventListenerSkipContent = () => {
  const skipContentLink = document.getElementById('skip-content')
  const mainContent = document.getElementById('main')
  skipContentLink.addEventListener('click', (event) => {
    event.preventDefault()
    mainContent.focus()
  })
}

document.addEventListener('DOMContentLoaded', () => {
  app.renderPage()
  addEventListenerSkipContent()
})

window.addEventListener('hashchange', () => app.renderPage())

window.addEventListener('load', () => {
  serviceWorkerInit()
})
