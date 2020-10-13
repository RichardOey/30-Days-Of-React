const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log('1a', ages.sort());

let min = Math.min(...ages);
console.log('1b', min)

let max = Math.max(...ages);
console.log('1c', max)

let middleItemOne = ages.length / 2 
let median = (ages[middleItemOne] + ages[middleItemOne + 1] ) / 2 
console.log('1d', median)

let sum = ages.reduce((previous, current) => current += previous);
let average = sum / ages.length
console.log('1e', average)

let range = max - min
console.log('1f', range)

let compare = Math.abs((min-average) - (max-average))
console.log('1g', compare)

let tenCountries = countries.slice(0, 10)
console.log('1h', tenCountries)

let middleCountry = countries[countries.length/2]
console.log(middleCountry)

let one = [1, 2, 3]
let weather = one
let weather1= [1, 2, 3]

weather == weather1 
    ? console.log(true)
    : console.log(false)

// let dayUserInput = prompt('What day is today ?')
let dayUserInput = 'Tuesday'
let day = dayUserInput.toLowerCase()

switch (day) {
    case 'monday':
        console.log('Today is Monday')
        break
    case 'tuesday':
        console.log('Today is Tuesday')
        break
    case 'wednesday':
        console.log('Today is Wednesday')
        break
    case 'thursday':
        console.log('Today is Thursday')
        break
    case 'friday':
        console.log('Today is Friday')
        break
    case 'saturday':
        console.log('Today is Saturday')
        break
    case 'sunday':
        console.log('Today is Sunday')
        break
    default:
        console.log('It is not a week day.')
}

// let num = prompt('Enter number')
let num = 100
switch (true){
    case num > 0:
        console.log('Number is positive')
        break
    case num < 0:
        console.log('Number is negative')
        break
    case num == 0:
        console.log('Number is zero')
        break
    default:
        console.log('Not a number')
}