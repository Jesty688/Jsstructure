/**
 * 双向栈链表
 */
const DoublyLinkedList = require('./DoubleLinkedList');
class StackLinkedLis{
    constructor(){
        //items保存的是双向链表
        this.items = new DoublyLinkedList();
    }
    //尾部添加
    push(data){
        this.items.push(data)
    }
    //尾部移除
    pop(){
        if(this.isEmpty()) return null;  
        //移除最后一个
        return this.items.removeAt(this.size() - 1);
    }
    peek(){
        if(this.isEmpty()) return null;
        return this.items.getNodetAt(this.size() - 1).data;
    }
    isEmpty(){
        return this.items.isEmpty();
    }
    size(){
        return this.items.size();
    }
    toString(){
        return this.items.toString();
    }
    //清空
    clear(){
        this.items.clear();
    }
}
/* 
const stacklist = new StackLinkedLis;
stacklist.push(1);
stacklist.push(3);
stacklist.push(5);
console.log(stacklist.peek());
console.log(stacklist.isEmpty());
console.log(stacklist.size());
console.log(stacklist.pop());
console.log(stacklist.toString());
stacklist.clear()
console.log(stacklist.toString());
console.log(stacklist.isEmpty());
 */
