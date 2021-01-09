// 节点类
/* 单节点 */
class Node{
    constructor(data){
        this.data = data;
        /* 指向下一个节点 */
        this.next = null;
    }
}
/* 双节点 */
class DoublyNode extends Node{
    constructor(data , prev = null){
        super(data)
        /* 指向上一个节点 */
        this.prev = prev
    }
}

module.exports = {
    Node,
    DoublyNode
}