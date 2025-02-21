// datatype is divided into two types 
// primitive and non primitive

// primitive have 7 types
//  number, string, boolean, symbol, null ,undefined, BigInt

 let age=14 
 let name="Ujjwal Gupta"
 let isLoggedIn=true
 let address=null
 let city= undefined
 let BigInt=123456
 let news=Symbol('123')

 console.table([age, name, isLoggedIn, address, city, BigInt, news])

//  non primitive have 3 types
//  Array, objects, functions

let hero=["shaktiman","Ranbeer singh","Salman Khan"]
// this is an array

let obj={
    name:"Ujjwal",
    age:20,
    City:"Mughalsarai",
    State:"Uttar Pradesh"
}
// this is a object

let myfunction=function(){
    console.log("My name Is Ujjwal Gupta")
}
// this is a function

console.log(hero)
console.log(obj)
console.log(myfunction)