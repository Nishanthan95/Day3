function compareJson(obj1,obj2){
    var str1 = JSON.stringify(obj1, Object.keys(obj1).sort());
    var str2 = JSON.stringify(obj2, Object.keys(obj2).sort());

    return str1 === str2
}

let obj1 = {name:'Person1',age: 5};
let obj2 = {age: 5,name:'Person1'};

console.log(compareJson(obj1, obj2));