/**
 * 队列:先进先出  后进后出
 */
class Queue{
    constructor(){
        this.count = 0;
        this.lowestCount = 0; /* 始终第一个元素下标 */
        this.items = {}
    }
    /* 入队 */
    enqueue(el){
        this.items[this.count++] = el;
    }
    /* 出队 */
    dequeue(){
        if(this.isEmpty()) return undefined;
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount]
        this.lowestCount++;
        return result
    }
    /* 查看队头元素 */
    peek(){
        if(this.isEmpty()) return undefined;
        return this.items[this.lowestCount]
    }
    size(){
        return this.count - this.lowestCount
    }
    /* 判断队列状态 */
    isEmpty(){
        return this.size() === 0
    }
    /* 清空队列 */
    clear(){
        this.items = {}
        this.count = 0;
        this.lowestCount = 0;
    }
    toString(){
        if(this.isEmpty()) return ''
        let objString = `${this.items[this.lowestCount]}`
        for(let i = this.lowestCount + 1; i < this.count; i++)
            objString = `${objString} , ${this.items[i]}`
        return objString
    }

}
const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue.size())

// 出队
queue.dequeue()
console.log(queue.size())
console.log(queue.toString())

console.log(queue)










