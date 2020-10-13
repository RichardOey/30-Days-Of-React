const numbers = [1, 2, 3, 4, 5]
for (const number of numbers){
    console.log(number)
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
for (const country of countries){
    console.log(country)
}

numbers.forEach((number, i) => {
    console.log(number, i)
})

countries.forEach((country, i, arr) => {
    console.log(i, country )
})