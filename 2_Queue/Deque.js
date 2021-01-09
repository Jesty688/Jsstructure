/**
 * 双端队列 [允许同时从前端和后端添加和移除元素]
 */
class Deque{
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }
    
    /* 在队列前端插入元素 */
    addFront(el){
        if(this.isEmpty())
            this.addBack(el)
        else if(this.lowestCount > 0)
            this.items[--this.lowestCount] = el
        else{
            for(let i = this.count; i > 0; i--)
                this.items[i] = this.items[i - 1]
            this.count++;
            this.lowestCount = 0;
            this.items[0] = el
        }
    }
    /* 在队列后端插入元素 */
    addBack(el){
        this.items[this.count++] = el
    }
    /* 在队列前端移除第一个元素 */
    removeFront(){
        if(this.isEmpty()) return undefined
        delete this.items[this.lowestCount++];
    }
    /* 在队列前端后端移除第一个元素 */
    removeBack(){
        if(this.isEmpty()) return undefined
        delete this.items[--this.count]
    }
    /* 返回前端的第一个元素 */
    peekFront(){
        if(this.isEmpty()) return undefined
        return this.items[this.lowestCount]
    }
    /* 返回后端的第一个元素 */
    peekBack(){
        if(this.isEmpty()) return undefined
        return this.items[this.count - 1]
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
const deque = new Deque()
// console.log(deque.isEmpty())
deque.addBack('John')
deque.addBack('Amiy')
// console.log(deque.toString())
deque.addBack('Camila')
// console.log(deque.toString())
// console.log(deque.size())
// console.log(deque.isEmpty())
deque.removeFront()
// console.log(deque.toString())
deque.removeBack()
console.log(deque)
// console.log(deque.toString())
// console.log(deque.size())
deque.addFront('John')
// console.log(deque.toString())

console.log(deque.peekBack())
