/*Create an empty array called "fruits".
Add the following fruits to the "fruits" array: "apple", "banana", "orange".
*/

let fruits = ["apple", "banana", "orange"]
// console.log(fruits)

// Remove the first fruit from the array.

// console.log(fruits.splice(0,1))
// console.log(fruits)

//Add "grape" to the end of the array.
fruits.splice(2,0,"grape")
// console.log(fruits)

// Update the second fruit in the array to "pear".
fruits.splice(1,1,"pear")
// console.log(fruits)


//Create an empty object called "person".
//Add the following properties to the "person" object:

let person = {
    name: "John",
    age: 30,
    city: "New York"

}
// Remove the "age" property from the "person" object.
delete person.age

// Add a new property called "job" with the value "Engineer" to the "person" object.
person.job = "Engineer"

//Update the "city" property of the "person" object to "San Francisco"
person.city = "San Francisco"

//Print the final "person" object after performing the above operations.
// console.log(person)


/*1. Create an empty array called "cars".

2. Add three car objects to the "cars" array. Each car object should have the following properties:
*/
let cars = [ 
    {
        make: "Toyota",
        model: "Camry",
        year: 2018
    },
    {
        make: "Toyota",
        model: "Camry",
        year: 2018
    },
    {
        make: "Toyota",
        model: "Camry",
        year: 2018
    }
    
]

//Remove the first car object from the "cars" array.
cars.shift()

// Add a new car object to the "cars" array with the following properties:
cars.push({make: "Honda",
model: "Civic",
year: 2020})

// Update the "model" property of the second car object in the array to "Accord".
cars[1].model="Accord"

//Print the final "cars" array after performing the above operations.
console.log(cars)