# mithril-modal
Another Mithril JS modal window component; written in ES6 and compiled with Babel.

### Usage
Include, require or import the Modal class.

```javascript
import Modal from ('./dist/m-modal.js')

var example = {
  controller: function() {
    this.modal = new Modal({
      state: false
    });
  },
  view: function(ctrl) {
    return [
      m.component(cmodal, ctrl.modal)
    ]
  }
}

var cmodal = {
  controller: function(options) {
    this.component = options.component;
  },
  view: function(ctrl) {
    return m.component(ctrl.component(), {
      view: function(mctrl) {
        return m('.modal-content', [
          m('h3', 'This is some modal content...')
        ]);
      }
    });
  }
};

```

### Options
| Name          | Type          | Value |
| ------------- |:-------------:| -----:|
| State         | Boolean       | false |

### Methods
##### Toggle
Toggle the modal window display.
```javascript

this.modal = new Modal({
  state: false
});
this.modal.toggle()

```










