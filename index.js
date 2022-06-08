// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
const pie = 3.142;
// printValue(pie);

//TODO: ADD redeclarable variable [Only redeclared with same identifier]
var age = 22;
// printValue(age)

//TODO: ADD re-assignable but not redeclarable variable
let radius = 9;
// printValue(radius);

// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value
const number = 10.2;
// printValue(number);

//TODO: Create a redeclarable variable with a boolean value
var sweet = false;
// printValue(sweet);

//TODO: Create a re-assignable variable with a string value
let food = 'Smocha';
let drink = 'Fanta';
// printValue(food)


// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
let lunch = food + ' ' + drink;
// printValue('Meal: ' + lunch)


//TODO: Interpolate string (`${}`)
let dinner = `Meal: ${lunch} is served.`
// printValue(dinner);
let dinnerTime = `Meal: ${food + ' ' + drink} is served hot.`
// printValue(dinnerTime);
let dinners = `Meal: ${food} ${drink} is serving.`
// printValue(dinners);


//TODO: Convert to uppercase
// printValue(dinner.toUpperCase());


//TODO: Convert to lowercase
// printValue(dinners.toLocaleLowerCase())

//TODO: Index a specific character


//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality (===)
// printValue(5 === '5.0');

//TODO: strict inequality (!==)
// printValue(5 !== 5.0);

//TODO: loose equality (==)
// printValue(5 == '5');

//TODO: loose inequality (!=)
// printValue(5 != 5);

//TODO: greater than
// printValue(5 > 4);

//TODO: less than
// printValue(5 < 4);

//TODO: greater or equal to
// printValue(5 >= 4);

//TODO: less or equal to
// printValue(5 <= 4);


// 5.0 CONTROL FLOW
// TODO: if-else statement
// syntax: if (boolean condition){code}else if(other condition){other code} else if(...){}else{} 
const wheel = 0;
if(wheel < 4){
    if(wheel == 3){
        printValue('this is a tuktuk')
    }else if(wheel == 2){
        printValue('this is a bicycle')
    }else{
        printValue('this is a unicycle')
    }
}


//TODO: switch-case

const grade = 'h'
switch(grade){
    case 'A':
        printValue("Well done")
        break;
    case 'B':
        printValue("Good job")
        break;
    case 'C':
        printValue("Average")
        break;
    case 'D':
        printValue("See me")
        break;
    default:
        printValue("You seem lost")
}



