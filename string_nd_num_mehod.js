const hisName = "ESther"
console.log(hisName.toLowerCase())
console.log(hisName.toUpperCase())

function Lowerme(value){
    return value.toLowerCase();
}
//trim
const trimexe = "  Hello World    "
console.log(trimexe.trim())
console.log(trimexe.trimEnd())
console.log(trimexe.trimStart())
// includes and indexof
console.log(hisName.indexOf('s'))
console.log(hisName.includes("t"))
//start and endwith

let fileName = "report_final_2024.pdf"

console.log(fileName.startsWith("report"))
console.log(fileName.startsWith("draft"))
console.log(fileName.endsWith(".pdf"))
console.log(fileName.endsWith(".docs"))

//slice and substring

const extract = "ahmad"
console.log(extract.slice(0,3))
console.log(extract.slice(3))
console.log(extract.slice(-3))
console.log(extract.substring(0,3))
console.log(extract.substring(3))
console.log(extract.substring(-3))

//replace
const text = "Ahmad ia sexy guy, Ahmad is cool and social, Ahmad is tech guy"
console.log(text.replace("Ahmad", "Conard"))
console.log(text.replaceAll("Ahmad", "Conard"))

//split
const testsplit = text.split(",")
console.log(testsplit)

// reverse

let palindrom = "madam"
let reversed = palindrom.split("").reverse().join("")
console.log(reversed)

function check(word){
    return word == word.split("").reverse().join("") ? "yes its a polinderum" : "No its not a polinderum"

}

console.log(check("Ahmad"))