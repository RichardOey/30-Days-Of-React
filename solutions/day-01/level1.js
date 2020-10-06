const arr = Array()
console.log('1', arr)
const arr_1 = [1,2, 3, 4, 5]
console.log('2', arr_1)
console.log('3', arr_1.length)

let firstItem = arr_1[0]
let indexMid = parseInt(arr_1.length / 2)
let midItem = arr_1[indexMid]
let lastItem = arr_1[arr_1.length-1]
console.log('4', firstItem, midItem, lastItem)

const mixedDataTypes = ['1', 'one', 2, true, 1.02]
console.log('5', mixedDataTypes, mixedDataTypes.length)

const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
]

console.log('7', itCompanies)
console.log('8', itCompanies.length)
let firstCompany = itCompanies[0]
let midCompany = itCompanies[parseInt(itCompanies.length/2)]
let lastCompany = itCompanies[itCompanies.length - 1]
console.log('9', firstCompany, midCompany, lastCompany)

for(let i = 0 ; i < itCompanies.length; i++){
    console.log('10-',i, itCompanies[i])
}

for (const itCompany of itCompanies){
    console.log('11-', itCompany.toUpperCase())
}

console.log('12-', itCompanies.join(' ,'), ' are big IT companies')

let check = 'Microsoft'
itCompanies.includes(check)
    ? console.log('12', check, 'exists')
    : console.log('12', check, 'doesn\'t exist')


