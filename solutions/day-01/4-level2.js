let scores = 98
switch(true){
    case scores <= 49:
        console.log('Your score is', scores, 'the grades: F')
        break
    case scores <= 59:
        console.log('Your score is', scores, 'the grades: D')
        break
    case scores <= 69:
        console.log('Your score is', scores, 'the grades: C')
        break
    case scores <= 89:
        console.log('Your score is', scores, 'the grades: B')
        break
    case scores <= 100:
        console.log('Your score is', scores, 'the grades: A')
        break
    default:
        console.log('You are not passed')
}

// let month = prompt('Enter current month: ')
let month = 'November'
switch(month){
    case 'September':
    case 'October':
    case 'November':
        console.log('Month: ', month, ',Season: Autumn');
        break;
    case 'December':
    case 'January':
    case 'February':
        console.log('Month: ', month, ',Season: Winter');
        break;
    case 'March':
    case 'April':
    case 'May':
        console.log('Month: ', month, ', Season: Spring')
        break;
    case 'June':
    case 'July':
    case 'August':
        console.log('Month: ', month, ', Season: Summer')
        break;
}

// let day = prompt('Enter day ')
let day_check = 'Friday'
switch(day_check.toLowerCase()){
    case 'saturday':
    case 'sunday':
        console.log(day_check.slice(0,1).toUpperCase().concat(day_check.slice(1,day_check.length)), 'is a weekend')
        break
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(day_check.slice(0,1).toUpperCase().concat(day_check.slice(1,day_check.length)), 'is a weekday')
        break
}