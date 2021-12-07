const ErrorNotFound = {
  async render () {
    return `
      <section class="content">
        <h2 class="content__label" tabindex="0">404 Not Found</h2>
      </section>
    `
  },

  async afterRender () {

  }
}

export default ErrorNotFound
