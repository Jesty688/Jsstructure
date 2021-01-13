/**
 * Set类
 * 不允许值重复的顺序数据结构
 * -----------------------------------------------------------------------------
 * 并集:对于给定的两个集合,返回一个包含两个集合中所有元素的新集合。
 * 交集:对于给定的两个集合,返回一个包含两个集合中共有元素的新集合
 * 差集:对于给定的两个集合,返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合。
 * 子集:验证一个给定集合是否是另一集合的子集。
 */
class Set{
    constructor(){
        this.items = {};
    }
    // 并集
    union(otherSet){
        // 声明新的一个集合 保存并集
        const unionSet = new Set();
        // 将原来集合中的元素添加到前面新建的集合(并集集合)
        this.values().forEach(value => unionSet.add(value))
        // 同样的union获取一个set类参数用values方法获取set中所有的元素(返回的是数组)
        // 遍历数组也把其中的所有元素添加到新的并集集合中
        otherSet.values().forEach(value => unionSet.add(value))
        // 返回这个新集合
        return unionSet;
    }
    // 交集
    intersection(otherSet){
        // 保存交集
        const intersectionSet = new Set();
        // 用于保存当前类的所有元素
        const values = this.values();
        // 保存参数中所有的元素
        const otherValues = otherSet.values();
        // 用了ES6中的解构赋值
        let [biggerSet , smallerSet] = [values ,otherValues];
        if(values.length < otherValues.length){
            // 也是es6中的解构赋值
            [biggerSet , smallerSet] = [otherValues , values];
        }
        // 用2个set中最短的元素来遍历循环
        smallerSet.forEach(value => {
            // console.log(value)
            // [].includes(data) 数组的方法 判断一个元素是否存在与这个数组中
            if(biggerSet.includes(value)){
                // 2个set中都有这个相同的元素就添加到交集中
                intersectionSet.add(value)
            }
        })
        // 最后返回交集
        return intersectionSet;
    }
    // 差集
    difference(otherSet){
        const differenceSet = new Set();
        this.values().forEach(value => {
            // A集合中的数字不存在B就添加到差集中
            if(!otherSet.has(value)){
                differenceSet.add(value)
            }
        })
        // ...不多说了
        return differenceSet;
    }
    // 子集
    isSubsetOf(otherSet){
        //   子集的元素个数要小于等于要比较的集合
        if(this.size() > otherSet.size()) return false;
        let isSubset = true;
        // every只要为false就停止迭代
        this.values().forEach(value => {
            if(!otherSet.has(value)){
                isSubset = false;
                return false;
            }
            return true;
        })
        return isSubset;
    }


    // 向集合内添加一个新元素
    add(data){
        // 要添加的元素在集合中不存在的话就添加进集合
        if(!this.has[data]){
            this.items[data] = data;
            return true;
        }
        return false;
    }
    // 移除元素
    delete(data){    
        // 验证集合中是否含有这个元素 有就删除
        if(this.has(data)){
            delete this.items[data];
            return true;
        }
        return false;
    }
    // 判断该元素在集合中是否存在
    has(data){
        return Object.prototype.hasOwnProperty.call(this.items , data);
        
        // 以上等于this.items.hasOwnProperty(data)  
    }
    // 清空集合中所有元素
    clear(){
        this.items = {};
    }
    // 返回集合中元素数量
    size(){        
        return Object.keys(this.items).length;
    }
    // 返回集合中所有元素(数组)
    values(){
        return Object.values(this.items);
    }

}


/**
const set = new Set;
set.add(1);
set.add(2);
console.log(set.has(2))
console.log(set.values())
console.log(set.delete(1))

console.log(set)

set.clear();
console.log(set)
*/
/**并集测试 
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);
const unionAB = setA.union(setB);
console.log(unionAB);
*/
/**交集测试 
const setA = new Set();
setA.add(1);
setA.add(2);
const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
const intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());
*/
/**差集测试 
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
const differenceAB = setA.difference(setB);
console.log(differenceAB.values());*/
/**子集 
const setA = new Set();
setA.add(1);
setA.add(2);
const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
const setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4); 
console.log(setA.isSubsetOf(setB));
console.log(setA.isSubsetOf(setC));
*/