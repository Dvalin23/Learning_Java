let student = ['me','you','yhem','they','us']
console.log()
student.push('me again')
student[4] = 'me'
me = 'we'
student.unshift('ester')
student.pop('me')
student.shift('ester')
console.log (student.includes('me'))
console.log(student.indexOf('me'))
student.reverse()
student.sort()


 let array = [ 'ade', 'ester', 'chiamka','jorge', 'daniel']
console.log(array.slice(1,3))
console.log(array.splice(1,2, 'Ahmad', 'Charly', 'Sally', 'Crook','Lloyd'))
console.log(array)
// map method
const number = [1,3,4,5,6,6,78,,9]
const doubled = number.map((num) => num*2)
const double = number.map((fig) =>{
   return  fig*2
})
//filter
const even = number.filter((num)=> num % 2 ===0 )

// find
const people = ['dark' , 'white', 'black','asian', 'latinna ', 'fair']
const find = people.find((peo)=> peo === 'black')
console.log(find)
const findindex = people.findIndex((pep)=> pep ==='asian')
console.log(findindex)

// reduce 
const num = [600, 500, 600, 300, 900 ,500, 6000, 5000]
const sum = num.reduce((acc, cur)=> acc + cur ,0)
console.log(sum)
