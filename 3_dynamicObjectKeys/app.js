// const person = ['hello', 'great'];

// const testPerson = person.map(function (item) {
//   console.log(item);
// });

// const newPerson = person.map(function (item) {
//   if (item === 'hello') {
//     return item.toUpperCase();
//   }
//   return item;
// });
// console.log(newPerson);

//dot notation
const person={
    name:'john',
}
console.log(person)
//we can simply add more properties in the object like this
person.age=25;
console.log(person)

//square bracket notation
//we want to have a key with a "-" (hiphen), now js wont allow us to put a hiphen in the key name 
//hence we have to put the key name inside quotes
const items = {
    "featured-items" : ["item1" , "item2"]
}
console.log(items["featured-items"])//dot notation wont work here
console.log(person["name"])
console.log(person.name)




let appState = 'loading'
appState = 'error'
const app = {
    [appState]:true
}
console.log(app)
//here we can add more properties like this 
app["newProperty"] = 45
console.log(app)
let newKey = "Key"
app[newKey] = "IDK"
console.log(app)



//Dynamically changing values of keys in javascript 
const state ={
    loading:true,
    name:'',
    job:''
}
function updateState(key,value){
    state[key] = value;
}
updateState("name" , "john")
console.log(state)
updateState("job", "developer")
console.log(state)
//we can also update the current values as well
updateState("name" , "raghav")
console.log(state)
//we can add a completely new key also
updateState("newkey" , "newvalue")
console.log(state)