/* @flow */
import { CompositeDisposable } from 'atom'

module.exports = {
  subscriptions: Object,

  activate: function () {
    this.subscriptions = new CompositeDisposable()
    const paneTitle: null | HTMLElement = document.querySelector('atom-dock.left .tab-bar .tab .title')
    if (paneTitle) paneTitle.textContent = 'Explorer'
  },
  deactivate: function () {
    this.subscriptions.dispose()
  }
}
