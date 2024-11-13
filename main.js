const person = {
    name: "Max",
    surname: "Maximus",
    age: "17",
}

let name1 = prompt("What is your name?")

let surname1 = prompt("What is second name?")

let age_of_people = prompt("How ald are you?")

if (age_of_people === "Max") {
    alert (`Welcome ${age_of_people}`)
} else {
    alert ("failed and showed error")
}