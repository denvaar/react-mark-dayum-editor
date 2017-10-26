(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-mark-dayum-editor"] = factory(require("react"));
	else
		root["react-mark-dayum-editor"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _markdownEditor = __webpack_require__(2);

var _markdownEditor2 = _interopRequireDefault(_markdownEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _markdownEditor2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _toolbar = __webpack_require__(6);

var _toolbar2 = _interopRequireDefault(_toolbar);

var _textArea = __webpack_require__(3);

var _textArea2 = _interopRequireDefault(_textArea);

var _preview = __webpack_require__(4);

var _preview2 = _interopRequireDefault(_preview);

var _displayIf = __webpack_require__(5);

var _displayIf2 = _interopRequireDefault(_displayIf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var toolbarButtons = [{
  icon: 'embed2',
  tooltip: 'Format as code block'
}, {
  icon: 'link',
  tooltip: 'Format as link'
}, {
  icon: 'bold',
  tooltip: 'Bold text'
}, {
  icon: 'italic',
  tooltip: 'Italicised text'
}, {
  icon: 'quotes-left',
  tooltip: 'Format as quote'
}, {
  icon: 'list2',
  tooltip: 'Format as unordered list'
}, {
  icon: 'list-numbered',
  tooltip: 'Format as ordered list'
}];

var MarkdownEditor = function (_Component) {
  _inherits(MarkdownEditor, _Component);

  function MarkdownEditor(props) {
    _classCallCheck(this, MarkdownEditor);

    var _this = _possibleConstructorReturn(this, (MarkdownEditor.__proto__ || Object.getPrototypeOf(MarkdownEditor)).call(this, props));

    _this.state = {
      inEditMode: true,
      showHTML: false,
      content: ""
    };
    return _this;
  }

  _createClass(MarkdownEditor, [{
    key: 'handleOnChange',
    value: function handleOnChange(event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;


      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          content = _state.content,
          inEditMode = _state.inEditMode,
          showHTML = _state.showHTML;


      return _react2.default.createElement(
        'div',
        { className: 'md-container' },
        _react2.default.createElement(_toolbar2.default, {
          inEditMode: inEditMode,
          toolbarButtons: toolbarButtons,
          handleToggleEditMode: function handleToggleEditMode(val) {
            return _this2.setState({ inEditMode: val });
          } }),
        _react2.default.createElement(
          _displayIf2.default,
          { condition: !inEditMode },
          _react2.default.createElement(_preview2.default, {
            content: content,
            showHTML: showHTML })
        ),
        _react2.default.createElement(_textArea2.default, {
          name: 'content',
          onChange: function onChange(event) {
            return _this2.handleOnChange(event);
          },
          hidden: !inEditMode,
          value: content }),
        _react2.default.createElement('textarea', {
          readOnly: true,
          hidden: true,
          value: content })
      );
    }
  }]);

  return MarkdownEditor;
}(_react.Component);

exports.default = MarkdownEditor;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* always keep this mounted no matter if in edit
 * mode or preview mode so that ctrl-z always works
 */
var TextArea = function TextArea(_ref) {
  var content = _ref.content,
      onChange = _ref.onChange,
      hidden = _ref.hidden,
      rest = _objectWithoutProperties(_ref, ["content", "onChange", "hidden"]);

  return _react2.default.createElement("textarea", _extends({
    hidden: hidden,
    className: "md-textarea",
    onChange: onChange,
    value: content
  }, rest));
};

exports.default = TextArea;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Preview = function Preview(_ref) {
  var content = _ref.content,
      showHTML = _ref.showHTML;

  return _react2.default.createElement(
    "div",
    { className: "md-preview-area" },
    content
  );
};

exports.default = Preview;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var condition = _ref.condition,
      children = _ref.children;

  if (condition) {
    if (children.length > 1) return _react2.default.createElement(
      'div',
      null,
      children
    );
    return _react2.default.Children.only(children);
  } else {
    return null;
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _displayIf = __webpack_require__(5);

var _displayIf2 = _interopRequireDefault(_displayIf);

var _toolbarButton = __webpack_require__(7);

var _toolbarButton2 = _interopRequireDefault(_toolbarButton);

var _tabs = __webpack_require__(8);

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toolbar = function Toolbar(_ref) {
  var handleToggleEditMode = _ref.handleToggleEditMode,
      inEditMode = _ref.inEditMode,
      toolbarButtons = _ref.toolbarButtons;

  return _react2.default.createElement(
    'nav',
    { className: 'md-toolbar' },
    _react2.default.createElement(_tabs2.default, {
      inEditMode: inEditMode,
      handleClick: handleToggleEditMode }),
    _react2.default.createElement(
      _displayIf2.default,
      { condition: inEditMode },
      toolbarButtons.map(function (obj) {
        return _react2.default.createElement(_toolbarButton2.default, _extends({
          key: obj.icon
        }, obj));
      })
    )
  );
};

exports.default = Toolbar;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToolbarButton = function ToolbarButton(_ref) {
  var tooltip = _ref.tooltip,
      callback = _ref.callback,
      icon = _ref.icon;

  var baseCSS = 'md-toolbar-button';

  return _react2.default.createElement('button', {
    type: "button",
    title: tooltip,
    className: baseCSS,
    onClick: callback });
};

exports.default = ToolbarButton;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _toolbarTabButton = __webpack_require__(9);

var _toolbarTabButton2 = _interopRequireDefault(_toolbarTabButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = function Tabs(_ref) {
  var inEditMode = _ref.inEditMode,
      handleClick = _ref.handleClick;
  return _react2.default.createElement(
    'div',
    { className: 'md-toolbar-tabs' },
    _react2.default.createElement(_toolbarTabButton2.default, {
      label: "Write",
      onClick: function onClick() {
        return handleClick(true);
      },
      activeIf: inEditMode }),
    _react2.default.createElement(_toolbarTabButton2.default, {
      label: "Preview",
      onClick: function onClick() {
        return handleClick(false);
      },
      activeIf: !inEditMode })
  );
};

exports.default = Tabs;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToolbarTabButton = function ToolbarTabButton(_ref) {
  var label = _ref.label,
      activeIf = _ref.activeIf,
      onClick = _ref.onClick;

  var baseCSS = 'md-toolbar-tablinks';

  return _react2.default.createElement(
    'button',
    {
      type: "button",
      className: activeIf ? baseCSS + ' active' : baseCSS,
      onClick: onClick },
    label
  );
};

exports.default = ToolbarTabButton;

/***/ })
/******/ ]);
});