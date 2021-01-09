const {Node} = require('../util/core')
/**
 * 单链表
 */
class LinkedList{
    constructor(){
        this.count = 0;
        this.head = null;
    }
    // 添加节点
    push(data){
        const node = new Node(data);
        let current;
        // 一个节点都没有就把头结点指向新建的节点
        if(this.head === null){
            this.head = node;
        }else{
            current = this.head
            // 遍历找最后一个节点
            while(current.next !== null)
                current = current.next
            // 将next指向前面新建的节点
            current.next = node
        }
        this.count++;
    }
    // 复用方法
    getNodetAt(index){
        /* 获取给定索引所在的节点 */
        if(index >= 0 && index <= this.count){
            let node = this.head
            for(let i = 0; i < index && node !== null; i++)
                node = node.next
            //console.log(node.data)
            return node
        }
        return null
    }
    // 删除节点
    removeAt(index){
        // 越界检查
        if(index >= 0 && index < this.count){
            let current = this.head;
            // 移除第一个
            if(index === 0){
                this.head = current.next
            }else{
                //获取前一个节点
                const previous = this.getNodetAt(index - 1)
                current = previous.next
                // 删除
                previous.next = current.next
            }
            this.count--
            return current.data
        }
        return null;

    }
    // 任意位置插入节点
    insert(data , index){
        //检查越界
        if(index >= 0 && index <= this.count){
            /* 初始化一个节点 */
            const node = new Node(data) 
            if(index === 0){
                //新插入的接点变成头节点
                const current = this.head
                node.next = current
                //把新的节点变成有节点
                this.head = node
            }else{
                // 找到要添加位置的前一个节点
                const previous = this.getNodetAt(index - 1)
                const current = previous.next
                /* 把新添加的节点next指向了原来所在的这个位置的节点 */
                node.next = current
                /* 插入当前位置的前一个节点修改next指向新加的节点 */
                previous.next = node
            }
            this.count++
            return true
        }
        return false
    }
    /* 查找节点 */
    indexOf(data){
        let current = this.head
        for(let i = 0; i < this.count && this.head !== null; i++){
            if(data === current.data) return i; /* 找到了返回索引 */
            /* 继续往后移动 */
            current = current.next
        }
        /* 都没有找到的话就返回-1 */
        return -1;
    }
    /* 删除节点(优化)(根据节点值删除) */
    remove(data){
        /* 根据参数找到下标 */
        const index = this.indexOf(data);
        /* 根据索引删除节点 */
        return this.removeAt(index)
    }
    /* 获取节点数 */
    size(){
        return this.count
    }
    /* 判断空 */
    isEmpty(){
        return this.size() === 0
    }
    /* 获取头节点 */
    getHead(){
        return this.head    
    }
    /* 清空 */
    clear() {
        this.count = 0;
        this.head = null;
    }
    /* 把节点转换为字符串 */
    toString(){
        if(this.head === null) return ''
        let objString = `${this.head.data}`;
        let current = this.head.next
        for(let i = 0; i < this.size() && current !== null; i++){
            /* 拼接 */
            objString = `${objString} , ${current.data}`;
            /* 后移 */
            current = current.next;
        }
        return objString
    }
}
/* 导出 */
module.exports = LinkedList
/*  
const list = new LinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
console.log(list.getHead())
console.log(list.insert(666,2))
console.log(list.toString())
*/



