/**
 * Created by arthuranderson on 3/13/17.
 */
import Queue from '../queue';

describe("Queue", function(){
    "use strict";

    it("#ctor", function(){
        let q = new Queue();
        expect( q.empty() ).toEqual( true );
    });

    it("#enqueue", function() {
        let q = new Queue();
        expect( q.empty() ).toEqual( true );

        q.enqueue(1);
        expect( q.empty() ).toEqual( false );
    });

    it("#dequeue", function() {
        let q = new Queue();
        q.enqueue(1);
        expect( q.dequeue() ).toEqual(1);
        expect( q.empty() ).toEqual(true);
    });

    it( "#queue it up", function(){
        let q = new Queue();
        for( let idx = 0; idx < 100; idx++ ){
            q.enqueue(idx);
        }

        let idx = 0;
        while( !q.empty() ){
            expect( q.dequeue() ).toEqual( idx++ );
        }
        expect( q.empty() ).toEqual(true);
    })
})
