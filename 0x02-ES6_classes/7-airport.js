export default class Airport {
  contructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._code;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
