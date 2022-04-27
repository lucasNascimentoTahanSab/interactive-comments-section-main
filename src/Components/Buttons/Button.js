export default class Button {
  execute(action, params) {
    if (typeof action !== 'function') return

    action(params)
  }
}