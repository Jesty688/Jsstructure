const {ValuePair} = require('../util/core')
// 字典类
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

class Dictionary{
    constructor(toStrFn = paramtoString){
        this.toStrFn = toStrFn;
        this.table = {}
    }
    hasKey(key){
        return this.table[this.toStrFn(key)] != null;
    }
    //键值对形式存储
    set(key , value){
        // 2个参数都不能为空
        if(key != null && value != null){
            const tablekey = this.toStrFn(key);
            this.table[tablekey] = new ValuePair(key , value);
            console.log(this.table)
            
            return true;
        }
        return false;
    }
    // 移除
    remove(key){
        // table中又key这个属性就删除
        if(this.hasKey(key)){
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }
    // 获取值
    get(key){
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value
    }
    // 值
    keyValues(){
        return Object.values(this.table)
    }
    keys(){
        return this.keyValues().map(value => value.key)
    }
    values(){
        return this.keyValues().map(value => value.value)
    }
    size() {
        console.log(Object.values(this.table))
        
        return Object.keys(this.table).length;
    }
    clear(){
        this.table = {}
    }
    isEmpty(){
        return this.size() === 0;
    }
    forEach(callback){
        const valuePair = this.keyValues();
        for(let i = 0; i < valuePair.length; i++){
            const result = callback(valuePair[i].key , valuePair[i].value);
            if (result === false) break
         }
    }
    // 格式化输出
    toString(){
        if(this.isEmpty()) return '';
        const valuePair = this.keyValues();
        let objString = `${valuePair[0].toString()}`
        for(let i = 0; i < valuePair.length; i++){
            objString = `${objString} , ${valuePair[i].toString()}`
        }
        return objString
    }
    
}

const dictionary = new Dictionary;
dictionary.set('Gandalf' , 'gandalf@email');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');
console.log(dictionary.hasKey('Gandalf'));
console.log(dictionary.size())
console.log(dictionary.keyValues())
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));
dictionary.remove('John');
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.keyValues());
dictionary.forEach((k , v) => {
    console.log('forEach:' + 'key:' + k + 'v:' + v);
})
