// Filter - returns a new array, can manipulate the size of new array (unlike map), returns items based on some condition
// Find - returns single instance (object), returns first match, if no match - undefined

const people = [
    { name: 'bob', age: 20, position: 'developer' },
    { name: 'peter', age: 25, position: 'designer' },
    { name: 'susy', age: 30, position: 'the boss' },
    { name: 'anna', age: 35, position: 'intern' },
  ];


   
  // filter
  const youngPeople = people.filter((person)=>{
    //if the condition inside this function returns true , that item will be added to youngPeople , otherwise it will be skipped 
    // return true;
    // if(person.age >= 35){
    //     return person
    // }
    return person.age>=35
    //both the things are the same only 
  })
  console.log(youngPeople)

  const developers = people.filter((person)=>{
    return person.position==="developer"
  })
  console.log(developers)



  // no match
  
  
  // find
  
  
  // no match
  
  
  // multiple matches
  