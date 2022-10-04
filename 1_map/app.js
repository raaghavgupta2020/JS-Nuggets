// MAP Method
const people = [
    {
      name: 'bob',
      age: 20,
      position: 'developer',
    },
    {
      name: 'anna',
      age: 25,
      position: 'designer',
    },
    {
      name: 'susy',
      age: 30,
      position: 'the boss',
    },
    {
      name: 'john',
      age: 26,
      position: 'intern',
    },
  ];
  // Quokka.js - Extension
  // returns a new array
  // does not change the size of original array (unlike filter)
  // uses values from original array when making new one

const ages = people.map((person)=>{
    // console.log(person);
    // return 'hello world'//we can return anyhting we want
    // return person; //but we will have the access to all the data in the original array at each point of time 
    return person.age*2;
})
console.log(ages);
// new array wll always depend on the original one 
// by default , any function in js will return undefined




const getAges = (person) => person.age * 2
//now we have setup or function , we can use this too instead of directly putting anonymous function in the map function 
const newArr = people.map(getAges)
console.log(newArr)


//Now we want to iterate over the data and we want to return an array
const newPeople = people.map((item)=>{
    return{
        firstName:item.name.toUpperCase(),
        oldAge:item.age + 20
    }
})

console.log(newPeople)
