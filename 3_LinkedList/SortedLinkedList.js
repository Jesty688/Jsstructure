const LinkedList = require("./LinkedList");

/***
 * 有序链表
 * 有序链表:是指保持元素有序的链表结构。除了使用排序算法之外，我们还可以将元素插入到 正确的位置来保证链表的有序性。
 */
class SortedLinkedList extends LinkedList{
    constructor(){
        super();
    }
    push(data) {
        if (this.isEmpty()) {
          super.push(data);
        } else {
          const index = this.getIndexNextSortedNode(data);
          super.insert(data, index);
        }
    }
    /* 重写 */
    insert(data , index = 0){
        if(this.isEmpty()) return super.insert(data , 0);
        const pos = this.getIndexNextSortedNode(data);
        return super.insert(data , pos);
    }
    //实现getIndexNextSortedNode  小->大
    getIndexNextSortedNode(data){
        let current = this.head;
        let i = 0;
        for(; i < this.size()  && current; i++){
            //遍历节点 找到比data小的节点 返回下标
            const compare = data < current.data ? -1 : data === current.data ? 0 : 1;
            if(compare === -1) return i;
            current = current.next;
        }
        //返回最后节点下标
        return i;
    }
}

/* 
const slist = new SortedLinkedList;
slist.push(1);
slist.push(6);
slist.push(3);
slist.insert(9999,0);
slist.insert(9991,1);
console.log(slist.toString())
 */
