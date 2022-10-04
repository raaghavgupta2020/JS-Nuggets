// Unique Values
const menu = [
    {
      name: 'pancakes',
      category: 'breakfast',
    },
    {
      name: 'burger',
      category: 'lunch',
    },
    {
      name: 'steak',
      category: 'dinner',
    },
    {
      name: 'bacon',
      category: 'breakfast',
    },
    {
      name: 'eggs',
      category: 'breakfast',
    },
    {
      name: 'pasta',
      category: 'dinner',
    },
  ];
//   const categories = ['all', ...new Set(menu.map((item) => item.category))];
  // map - get all instances
  // new Set - narrow down
  // ['all',...] - turn it back to array



  const categories = menu.map((item)=>{
    return item.category;
  })
  console.log(categories)
  //to get all the unique values we can use Set
  const categoriess = new Set(menu.map((item)=>{
    return item.category;
  }))
  console.log(categoriess)
//converting this set to an array 
  const newArr = [...categoriess]
  console.log(newArr)




  //we can do all of this in one line too
  const uniqueArray = [ "hey there " , ...new Set(menu.map((item)=>item.category) )]
  console.log(uniqueArray)
