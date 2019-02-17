# @bears-garden/queue
classic queue implementation

## Usage
`var Queue = require("@bears-garden/queue");`  
`let q = new Queue();`  
### enqueue
@runtime O(1)  
`q.enqueue(obj);`

### dequeue
@runtime O(1)
`while( !q.empty() ){`  
`  let o = q.dequeue();`  
`}`  

### empty
@runtime O(1)
@returns true when the Q is empty
