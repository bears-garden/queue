/**
 * Created by arthuranderson on 3/13/17.
 */

var Node = require("@bears-garden/double-node");

class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    /**
     * enqueue - add data to the queue
     * @param obj
     * @returns {void} a new double node
     */
    enqueue( obj ){
        if( this.head === null ){
            this.head = Node.insert( null, obj);
            this.tail = this.head;
        }else{
            this.head = Node.append( this.head, obj );
        }
    }

    /**
     * dequeue - removes next item
     * @returns {object} data
     */
    dequeue(){
        if( this.head === null ){
            return null;
        }
        let retval = this.tail;
        this.tail = Node.remove( this.tail, this.tail.data );
        if( this.tail === null ){
            this.head = null;
        }
        return retval.data;
    }
    
    /**
     * empty
     * @returns {boolean} true if queue is empty
     */
    empty(){
        return this.head === null;
    }
}

module.exports = Queue;
