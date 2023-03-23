"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var db = function db() {
  _mongoose.default.set('strictQuery', false);
  _mongoose.default.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(function () {
    console.log('MongoDB connect: Success');
  }).catch(function (err) {
    //  throw new Error(err.message);
    console.log('MongoDB connect: Fail', err.message);
  });
};
var _default = db;
exports.default = _default;