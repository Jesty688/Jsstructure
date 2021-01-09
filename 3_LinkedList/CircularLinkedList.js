const LinkedList = require('./LinkedList');
const { Node } = require("../util/core.js");
/***
 * 单循环链表
 */
class CircularLinkedList extends LinkedList{
    constructor(){
        super()
    }
    push(data){
        const node = new Node(data);
        let current;
        if(this.head === null)  this.head = node;
        else{
            //获取最后一个节点
            current = this.getNodetAt(this.size() - 1); //下标0开始！！！
            //新节点变成最后一个节点
            current.next = node;
        }
        //新节点next指回头节点
        node.next = this.head;
        this.count++;
    }
    /* 重写 insert removeAt */
    insert(data , index){
        //防越界
        if(index >= 0 && index <= this.count){
            let current = this.head;
            const node = new Node(data);
            //插入头节点之前
            if(index === 0){
                //如果此时的链表是空的
                if(this.head === null){
                    //头节点变成了新添加的节点
                    this.head = node;
                    // 新节点的next指向头节点(循环链表)
                    node.next = this.head;
                }else{ /* 新的节点要变成头节点 */
                    //新节点的next等于原来的头节点
                    node.next = current;
                    //找最后节点
                    current = this.getNodetAt(this.size() - 1);
                    //原来的头节点变成新的节点
                    this.head = node;
                    //最后的节点的next指向了头节点
                    current.next = this.head;
                }
            }else{
                // 和LinkedList一样 这里没有变
                const previous = this.getNodetAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return null
    }   
    removeAt(index){
        if(index >= 0 && index <= this.count){
            let current = this.head;
            //移除头节点
            if(index === 0){
                //如果此时链表只有1个节点
                if(this.size() === 1)  this.head = null;
                else{                    
                    const removed = this.head;
                    //获取最后一个节点
                    current = this.getNodetAt(this.size() - 1)
                    //头节点重新改变成头节点的next节点
                    this.head = this.head.next;
                    //最后一个节点的next指向了头节点
                    current.next = this.head;
                    //到这里移除过程都结束了 这里只是把removed的引用复制给了current 后面的return需要返回删的的值 仅此而已!!! 
                    current = removed;
                }
            }else{
                //看LinkedList removeAt注释
                const previous = this.getNodetAt(index - 1);
                current = previous.next;
                previous.next = current.next
            }
            this.count--;
            return current.data;
        }
        return null;
    }
}

/**
const clist = new CircularLinkedList;
clist.push(1);
clist.push(2);
clist.push(3);
console.log(clist.insert(666,0));
console.log(clist.insert(777,2));
console.log(clist.removeAt(0))
console.log(clist.removeAt(2))
console.log(clist.removeAt(0))
console.log(clist.toString());
 */
