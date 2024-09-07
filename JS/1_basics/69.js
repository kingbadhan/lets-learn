// memory
// clone using Object.assign 

const obj = {  key1: "value1",  key2: "value2" }

const objOldMethod = {key69: "value69",...obj};
const objNewMethod = Object.assign({key69: "value69"}, obj);
obj.key3 = "value3";
console.log(obj);
console.log(objOldMethod);
console.log(objNewMethod);