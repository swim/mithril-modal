/**
 * @file
 * modal.js
 *
 * Mithril modal class.
 *
 * @todo, provide common actions, close button.
 * @todo, provide minified version.
 * @todo, expose some events (knot.js?).
 */

class Modal {
  constructor(options) {
    this.state = options.state ? options.state : false;
  }

  toggle() {
    this.state = this.state ? false : true;
  }

  component() {
    return {
      controller: function(options) {
        this.view = options.view;
      },
      view: function(ctrl) {
        return m('.modal', [
          this.state ?
            m('.modal-overlay', [
              m('.modal-container', [
                m('.modal-content', [
                  ctrl.view(ctrl)
                ])
              ])
            ])
          : ''
        ]);
      }.bind(this)
    }
  }
}

module.exports = Modal;