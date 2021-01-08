class LinkedList{
    constructor(){
        this.count = 0;
        this.head = null;
    }
    // 添加元素
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
    getElementAt(index){
        if(index >= 0 && index <= this.count){
            let node = this.head
            for(let i = 0; i < index && node !== null; i++)
                node = node.next
            return node
        }
        return null
    }
    // 移除元素
    removeAt(index){
        // 越界检查
        if(index >= 0 && index < this.count){
            let current = this.head;
            // 移除第一个
            if(index === 0){
                this.head = current.next
            }else{
                const previous = this.getElementAt(index - 1)
                current = previous.next
                // 删除
                previous.next = current.next
            }
            this.count--
            return current.data
        }
        return null;

    }
    // 任意位置插入元素
    insert(data , index){
        //检查越界
        if(index >= 0 && index <= this.count){
            /* 初始化一个节点 */
            const node = new Node(data) 
            if(index === 0){
                //新插入的接点变成头节点
                const current = this.head
                node.next = current
                this.head = node
            }else{
                // 找到要添加位置的前一个节点
                const previous = this.getElementAt(index - 1)
                const current = previous.next
                node.next = current
                previous.next = node
            }
            this.count++
            return true
        }
        return false
    }
}
// 节点类
class Node{
    constructor(data){
        this.data = data;
        /* 指向下一个节点 */
        this.next = null;
    }
}
const list = new LinkedList()
list.push(15)
list.push(10)
console.log(list)

