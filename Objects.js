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

const {names,model,price,storage} = phone

// spread and rest 
let Dna = {
    gender : "xy",
    complextion : "fair",
}
let offspring = {
    ...Dna,
    name : "AHMAD",
    age : 23,
}                                                           
console.log(offspring)
console.log(Object.keys(phone))
console.log(Object.values(phone))
console.log(Object.entries(phone))

// try and catch
try {
    let result = 50
console.log(result)
efinedFunctions()
console.log("this won't run")
} catch(error) {
    console.log("An error has happended :" + error.message +" "+ error.name)
}

function loaduserData (userId){
    console.log("Starting to load User data ......")
    try{
        if(userId <= 0){
            throw new Error("UserId must be greater than O")

        }
        console.log("Data loaded for user " + userId)

    }catch(error){
        console.log("Failed: "+ error.message)

    }finally{
        console.log("Loading Completed..........CLosing Connection")

    }
}
loaduserData(-5)

function registeredSudent(name, age){
    try{
        if(!name){
            throw new Error ("Name cannot be empty")
        }if(age < 16 || age >60){
            throw new Error ("Age most be between 16-70. " + "You are: " + age)
        }
    }catch(error){
        console.log("Registration Failed:" + error.message)
    }
}
registeredSudent("Alli",14)