class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error('Abstract class "BaseComponent" cannot be instantiated directly')
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop]
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop]

        target[prop] = newValue

        if (newValue !== oldValue) {
          this.updateUI()
        }

        return true
      },
    })
  }

  //Перерисовка UI в ответ на обновление состояния
  updateUI() {
    throw new Error('"updateUI()" is not implemented')
  }
}

export default BaseComponent