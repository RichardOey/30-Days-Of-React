let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(' ');
console.log('2', words)

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.indexOf('Meat') === -1 
    ? shoppingCart.unshift('Meat')
    : console.log('Meat already exists')

console.log(shoppingCart)

shoppingCart.indexOf('Sugar') === -1 
    ? shoppingCart.push('Sugar')
    : console.log('Sugar already exists');

let honey_allergic = true;
if (honey_allergic){
    shoppingCart.splice(shoppingCart.indexOf('Honey'),1)
}

console.log(shoppingCart)

shoppingCart.splice(shoppingCart.indexOf('Tea'),1, 'Green Tea');
console.log(shoppingCart)

countries.indexOf('Ethiopia') == -1 
    ? countries.push('Ethiopia')
    : console.log('ETHIOPIA')

if (webTechs.indexOf('Sass')){
    webTechs.push('Sass')
    console.log(webTechs)
} else {
    console.log('Sass is a CSS preprocessor')
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

