const obj ={
    name : 'Ahmad Abdulazeez',
    gender : 'male',
    age : 19,
    complextion : 'fair',

}
console.log(obj.age);

let phone = {
    names : 'Iphone',
    model : '16promax',
    storage : "512gb",
    price : 1100000,
}

phone.colour = 'White'
phone.condition = 'Brand new'

phone.storage = "1tb";
console.log(phone)
delete phone.condition
console.log(phone)