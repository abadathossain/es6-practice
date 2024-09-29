let money  = 100
money =200
// console.log(money)

const person = 'abadat'
const person1 = 'hossain'
const person2 = 'farzi'

// console.log(`name is ${person} ${person1} and wife name is ${person2}`)

// regular function 
function add(a, b){
    const total = a + b
    return total
}
const result = add(10, 20)
// console.log(result)

// arrow function 
const add6 = (a, b)=> a+b
// console.log(add6(2, 3))

const maxNum = Math.max(1,2,3,4)
// console.log(maxNum)

const numbers = [2,4,9,3,2]
const maxArrayNum = Math.max(...numbers)
// console.log(maxArrayNum)
const numbers2 = [...numbers] 
// console.log(numbers2)
numbers.push(1)
// console.log(numbers2)


const fish = {
    name : 'Hilsha',
    address : 'Chandpur',
    color : 'Silver'
}
// console.log(fish.color)
const {name, color} = fish
console.log(name, color)