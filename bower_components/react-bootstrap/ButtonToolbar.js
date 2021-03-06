define(['exports', 'module', 'react', 'classnames', './BootstrapMixin'], function (exports, module, _react, _classnames, _BootstrapMixin) {
  'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _React = _interopRequire(_react);

  var _classNames = _interopRequire(_classnames);

  var _BootstrapMixin2 = _interopRequire(_BootstrapMixin);

  var ButtonToolbar = _React.createClass({
    displayName: 'ButtonToolbar',

    mixins: [_BootstrapMixin2],

    getDefaultProps: function getDefaultProps() {
      return {
        bsClass: 'button-toolbar'
      };
    },

    render: function render() {
      var classes = this.getBsClassSet();

      return _React.createElement(
        'div',
        _extends({}, this.props, {
          role: 'toolbar',
          className: (0, _classNames)(this.props.className, classes) }),
        this.props.children
      );
    }
  });

  module.exports = ButtonToolbar;
});
