"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by arthuranderson on 3/13/17.
 */

var Node = require("bg-double-node");

var Queue = function () {
    function Queue() {
        _classCallCheck(this, Queue);

        this.head = null;
        this.tail = null;
    }

    _createClass(Queue, [{
        key: "enqueue",
        value: function enqueue(obj) {
            if (this.head === null) {
                this.head = Node.insert(null, obj);
                this.tail = this.head;
            } else {
                this.head = Node.append(this.head, obj);
            }
        }
    }, {
        key: "dequeue",
        value: function dequeue() {
            if (this.head === null) {
                return null;
            }
            var retval = this.tail;
            this.tail = Node.remove(this.tail, this.tail.data);
            if (this.tail === null) {
                this.head = null;
            }
            return retval.data;
        }
    }, {
        key: "empty",
        value: function empty() {
            return this.head === null;
        }
    }]);

    return Queue;
}();

module.exports = Queue;