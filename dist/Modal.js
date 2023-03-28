"use strict";

var _interopRequireDefault = require("D:/openclassroom/modal_lib/modal_lib-ho/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modale = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
var Modale = function Modale(_ref) {
  var title = _ref.title,
    cross = _ref.cross,
    text = _ref.text,
    button = _ref.button,
    showModal = _ref.showModal,
    hideModal = _ref.hideModal;
  return showModal && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__header"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal__header--button modal__button",
    onClick: hideModal
  }, cross), /*#__PURE__*/_react.default.createElement("h5", {
    className: "modal__header--title"
  }, title)), /*#__PURE__*/_react.default.createElement("p", {
    className: "modal__text"
  }, text), /*#__PURE__*/_react.default.createElement("button", {
    className: "modal__button modal__close",
    onClick: hideModal
  }, button)));
};
exports.Modale = Modale;