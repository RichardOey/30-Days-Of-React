// let month = prompt('Enter a month')
let month4 = 'January'
month4 = month4.toLowerCase()
let monthName = month4.slice(0,1).toUpperCase().concat(month4.slice(1,month4.length))

switch(month4){
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(monthName,'has 31 days')
        break
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(monthName,'has 30 days')
        break
    case 'february':
        console.log(monthName, 'has 28 days')
        break
    default:
        console.log('Not a month name')

}

