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
    // 移除元素
    removeAt(index){
        // 越界检查
        if(index >= 0 && index < this.count){
            let current = this.head;
            // 移除第一个
            if(index === 0){
                this.head = current.next
            }else{
                let previous; 
                /**
                 * h -> [d1 , n1] -> [d2 , n2] -> [d3 , n3]
                 * 假如删除第二个
                 * 遍历以后previous -> [d1 , n1]
                 * current = [d2 , n2]
                 */
                for(let i = 0; i < index; i++){
                    previous = current;
                    current = current.next
                }
                // 删除
                previous.next = current.next
            }
            this.count--
            return current.data
        }
        return null;

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

