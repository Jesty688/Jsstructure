/**
 * 栈:先进后出 后进先出
 */
class Stack{
    constructor(){
        this.count = 0;
        this.items = {}
    }
    /* 入栈 */
    push(el){
        this.items[this.count++] = el;
    }
    /* 出栈 */
    pop(){  
        if(this.isEmpty()) return undefined;
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result
    }
    /* 查看栈顶元素 */
    peek(){
        if(this.isEmpty()) return undefined
        return this.items[this.count - 1];
    }
    /* 检查栈是否为空 */
    isEmpty(){
        return this.count === 0;
    }
    size(){
        return this.count;
    }
    /* 清空栈 */
    clear(){
        this.count = 0;
        this.items = {};
    }
}
const stack = new Stack();
console.log(stack.isEmpty());
stack.push(5)
stack.push(8)
// console.log(stack.peek())
console.log(stack.pop())
console.log(stack.items)






