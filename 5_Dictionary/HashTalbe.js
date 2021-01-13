const {ValuePair} = require('../util/core')
const paramtoString = (param) => {
    if(param === null){
        return 'NULL'
    }else if(param === undefined){
        return 'UNDEFINED'
    }else if(typeof param === 'string' || param instanceof String){
        return `${param}`
    }
    return param.toString();
}
// 散列
class HashTale{
    constructor(toStrFn = paramtoString){
        this.table = {}
        this.toStrFn = toStrFn;
    }
    // 创建散列函数
    loseloseHashCode(key){
        // key是数字的话直接返回key
        if(typeof key === 'number') return key;
        // 转字符串
        const tableKey = this.toStrFn(key);
        let hash = 0;
        // 累加ascii编码
        for(let i = 0; i < tableKey.length; i++){
            hash += tableKey.charCodeAt(i);
        }
        // 避免hash数值过大
        return hash % 37;
    }
    // key ——> Hash化
    hashCode(key){
        // 返回hash后的的key
        return this.loseloseHashCode(key);
    }
    // 添加
    put(key , value){
        if(key != null && value != null){
            const position = this.hashCode(key);           
            // 用key的hash值作为键存储     
            this.table[position] = new ValuePair(key , value);
            return true
        }
        return false;
    }
    get(key){
        if(key != null){
            return this.table[this.hashCode(key)].value;
        }
        return null;
    }
    // 移除
    remove(key){
        const hash = this.hashCode(key);
        // 取出hash后键对应的值
        const valuePair = this.table[hash];
        if(valuePair != null){
            // 存在就删除
            delete this.table[hash];
            return true;
        }
        return false;
    }

}
const hash = new HashTale;
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
console.log(hash.hashCode('Gandalf') + ' - Gandalf');
console.log(hash.hashCode('John') + ' - John');
console.log(hash.hashCode('Tyrion') + ' - Tyrion');
console.log(hash.get('Gandalf'));

console.log(hash)
