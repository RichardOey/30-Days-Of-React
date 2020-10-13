// let age = prompt('Enter your age:')
let age = 10
switch(true){
    case age >= 18 :
        console.log('1-You are old enough to drive')
        break
    case age < 18 :
        let numberLeft = 18 - age
        console.log('1-You are left with ', numberLeft, 'years to drive')
        break
}

// let yourAge = prompt('Enter your age')
let yourAge = 19
let myAge = 24
switch (true){
    case myAge > yourAge:
        let yearDifference = myAge - yourAge
        yearDifference > 1 
            ? console.log('2- You are', yearDifference, 'years younger than me')
            : console.log('2- You are', yearDifference, 'year younger than me')
        break
    case myAge < yourAge:
        let yearDifference2 = Math.abs(yourAge - myAge)
        yearDifference2 > 1 
            ? console.log('2-You are', yearDifference2, 'years older than me')
            : console.log('2-You are', yearDifference2, 'year older than me')
        break
    default: 
        console.log('You are at the same age with me')
}

let a = 4
let b = 3

if (a > b) {
    console.log(a,'is greater than', b)
} else {
    console.log(b, 'is greater than', a)
}

switch(true){
    case a > b:
        console.log(a, 'is greater than', b)
        break
    case b > a:
        console.log(b, 'is greater than', a)
        break
    default:
        console.log(a, 'equals to', b)
}

let number = 2
switch(true){
    case number % 2 == 0:
        console.log(number, 'is an even number')
        break
    case number % 2 != 0:
        console.log(number, 'is an odd number')
        break
    default:
        console.log(number, 'is not a number')
        
}