// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const products = [
//    {product:'banana', price: 3},
//    {product:'avacado', price: 4},
//    {product:'coffee', price: 8},
// ]

// names.forEach(Element   => {
//    console.log(Element);
   
// });
// numbers.forEach(Element => {

//    console.log(Element);
// })

//  const upNames = names.map(name=>{
//    return name.toUpperCase();
//  })

// console.log(upNames);

// const filteredCountry = countries.filter(country=<{
//    return country.includes("land")

// })






// const city = [

//    "mayami",
   
//    "barselona",
   
//    "madrid",
   
//    "amsterdam",
   
//    "berlin",
   
//    "sao paulo",
   
//    "lisbon",
   
//    "mexico city",
   
//    "paris"
   
//    ]; 

//    const upcity=city.map(city=>{
//       return city[0].toUpperCase() + city.slice(1)

//    });
//    console.log(upcity);
 
let persons = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },
    {
        name: "Madeline",
        age: 80,
        gender: "female"
    },
    {
        name: "Cheryl",
        age: 22,
        gender: "female"
    },
    {
        name: "Sam",
        age: 30,
        gender: "male"
    },
    {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
 ] 
  
 function checkCinema(array) {
    for (let i = 0; i < array.length; i++) {
       const element = array[i];
       
    
    if (element.age >=18) {
       console.log(element.name , "Filme gede biler");
       
    }else {
    console.log(element.name ,"Filme gede bilmez");
 }
    }
   }
   checkCinema(persons);