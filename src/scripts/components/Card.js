class Card extends HTMLElement {
  constructor () {
    super()
    if (this.constructor === Card) {
      throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`)
    }
  }

  render () {
    throw new TypeError('Abstract method, cannot be access directly.')
  }
}

export default Card
