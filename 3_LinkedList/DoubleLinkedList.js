/**
 *双向链表 
 *    ___________________
 *   |     |      |     |
 *  |prev | data | next|
 * |_____|______|_____|
 */
const { DoublyNode } = require('../util/core')
const LinkedList = require('./LinkedList')
class DoublyLinkedList extends LinkedList{
    constructor(){
        super()
        // 最后一个尾节点
        this.tail = null
    }
    push(data){
        //太简单了 不解释了
        const node = new DoublyNode(data);
        if(this.head === null){
            this.tail = node;
            this.head = node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.count++;
    }
    /* 重写 */
    insert(data , index){
        //防越界
        if(this.count >= 0 && index <= this.count){
            const node = new DoublyNode(data);
            let current = this.head;
            //在链表的第一个位置插入节点
            if(index === 0){
                //空链表就直接把头尾指针都指向新的节点
                if(this.head === null){
                    this.head = node;
                    this.tail = node;
                }else{
                    //新的节点的next指向原来的头节点
                   node.next = this.head;
                    //原来头节点的prev指向新节点
                   current.prev = node;
                   //新接点变成头节点
                   this.head = node;
                }
            /* 在链表的最后一项添加节点 */
            }else if(index === this.count){
                //获取尾节点
                current = this.tail;
                //尾节点的next指向了新节点
                curren.next = node;
                //新节点的prev指向原来的尾节点
                node.prev = current;
                //此刻尾节点变成了新节点 (newnode.next === null)
                this.tail = node;

            //任意位置插入            
            }else{
                //找到给定位置的前一个节点
                const previous = this.getNodetAt(index - 1);
                //保存给定位置的前一个节点的后一个指向(也就是给定的位置)
                current = previous.next;
                //新节点的next/prev指向(原来这个位置所在的节点)
                node.next = current;
                node.prev = previous;
                //原来这个位置的前一个节点的next指向新节点
                previous.next = node;
                //原来这个位置的节点prev指向新节点
                current.prev = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    removeAt(index){
        //防越界
        if(index >= 0 && index <= this.count){
            let current = this.head;
            if(index === 0){
                this.head = current.next;
                //如果节点只有一项了 更新tail
                if(this.count === 1)  this.tail = null
                //头节点的prev指向null
                else this.head.prev = null
            }else if(index === this.count -1){
                current = this.tail;
                //尾节点的上一个节点变成尾节点
                this.tail = current.prev;
                //尾节点next指向null
                this.tail.next = null;
            }else{
                //获取当前节点!!!
                current = this.getNodetAt(index);
                //上一个节点
                const previous = current.prev;
                //当前节点的上一个节点的next指向当前节点的后一个节点
                previous.next = current.next;
                //当前节点的下个节点的上一个节点指针指向了当前节点的上一个节点
                current.next.prev = previous;
            }
            this.count--;
            return current.data;
        }
        return null;
    }
    getTail(){
        return this.tail;
    }
    clear(){
        super.clear();
        this.tail = null;
    }
    //其他继承LinkedList
}
/* 导出 */
module.exports = DoublyLinkedList
/*
const dbLinkedList = new DoublyLinkedList()
dbLinkedList.push(1)
dbLinkedList.push(2)
dbLinkedList.push(3)
console.log(dbLinkedList.removeAt(1))
console.log(dbLinkedList.insert(666,1))
console.log(dbLinkedList.toString())
 */


