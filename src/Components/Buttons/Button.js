export default class Button {
  execute(action) {
    if (typeof action !== 'function') return

    action()
  }
}