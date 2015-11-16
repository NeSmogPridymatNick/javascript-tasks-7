'use strict';
function checkContainsKeys(keys) {
    var curKeys = Object.keys(this);
    for (var i = 0; i < keys.length; i++) {
        var validFind = new RegExp(keys[i],'i');
        if (!validFind.exec(curKeys)) {
            return false;
        }
    }
    return true;
}
function checkHasKeys(keys) {
    var numKeys = Object.keys(this).length - keys.length;
    if ((this.checkContainsKeys(keys) && numKeys === 0)) {
        return true;
    }
    return false;
}
function checkContainsValues(values) {
    var curKeys = Object.keys(this);
    var curValues = '';
    for (var i = 0; i < curKeys.length; i++) {
        var value = this[curKeys[i]];
        if (curValues.indexOf(value) < 0) {
            curValues += value;
        }
    }
    for (var i = 0; i < values.length; i++) {
        var validFind = new RegExp(values[i],'i');
        if (!validFind.exec(curValues)) {
            return false;
        }
    }
    return true;
}
function checkHasValues(values) {
    var curKeys = Object.keys(this);
    var curValues = [];
    for (var i = 0; i < curKeys.length; i++) {
        var value = this[curKeys[i]];
        if (curValues.indexOf(value) < 0) {
            curValues.push(value);
        }
    }
    if ((this.checkContainsValues(values) &&
                curValues.length === values.length)) {
        return true;
    }
    return false;
}
function checkHasValueType(key, type) {
    var curKey = this[key];
    if (typeof curKey === typeof type()) {
        return true;
    }
    return false;
}
function checkHasLength(length) {
    if (this.length === length) {
        return true;
    }
    return false;
}
function checkHasParamsCount(count) {
    if (this.length === count) {
        return true;
    }
    return false;
}
function checkHasWordsCount(count) {
    if (this.split(' ').length === count) {
        return true;
    }
    return false;
}
exports.init = function () {
    Object.prototype.checkContainsKeys = checkContainsKeys;
    Object.prototype.checkHasKeys = checkHasKeys;
    Object.prototype.checkContainsValues = checkContainsValues;
    Object.prototype.checkHasValues = checkHasValues;
    Object.prototype.checkHasValueType = checkHasValueType;
    Object.prototype.checkHasLength = checkHasLength;

    Array.prototype.checkContainsKeys = checkContainsKeys;
    Array.prototype.checkHasKeys = checkHasKeys;
    Array.prototype.checkContainsValues = checkContainsValues;
    Array.prototype.checkHasValues = checkHasValues;
    Array.prototype.checkHasValueType = checkHasValueType;
    Array.prototype.checkHasLength = checkHasLength;

    Function.prototype.checkHasParamsCount = checkHasParamsCount;
    String.prototype.checkHasWordsCount = checkHasWordsCount;
};
