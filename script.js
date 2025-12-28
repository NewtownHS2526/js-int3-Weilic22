
// Mild Challenges 

/// The three siblings get their allowance once a week.
/// Their current obsession is buying unique card games and collecting shoes.
/// Below is the total money they split weekly, their names, and the price of
///     a card game and a pair of shoes.

let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;



// 1. If divided evenly, how much would each sibling get for the week?
let eachGet = weeklyAllowance / 3
console.log("Each gets: " + eachGet)

// 2. How many games can Jordan buy with their cut?
let numberofGames = eachGet / game
console.log("Number of games: " + Math.floor(numberofGames))

// 3. The cost of games just went up by a dollar and shoes are on sale at 50% (half) off. Change the variables to their new prices.
game = 16.99
shoes= shoes /2
console.log(`Game costs: ${game} Shoes costs: ${shoes}`)

// 4. Quinn and Ricardo are twins. If they put their money together, how many on sale shoes can they buy in a month (4 weeks)?
let nOfSalesShoes = (eachGet * 4 * 2) / shoes
console.log("Number of shoes on sale: ", Math.floor(nOfSalesShoes))

// 5. How many more games can they buy if they put their money together compared to if they had bought games on their own?
let gamesBuyAlone = Math.floor(eachGet / game)
let gamesBuyTogether = Math.floor(weeklyAllowance / game)
let more = gamesBuyTogether- gamesBuyAlone
console.log(`They can buy ${more} more games if they put their money together`)

// 6. Print out the three siblings' names. "The three siblings are __, __, and ___."
console.log(`The three siblings are ${sibling1}, ${sibling2} and ${sibling3}`)

// 7. Use console.log() and a built-in method to count how many characters are in Ricardo's name.
console.log("There are" , sibling3.length , "characters in Ricardo's name")
// 8. Use console.log() and a built-in method to print out the string "RICARDO MONTOYA DE LA ROSA RAMIREZ"
console.log(sibling3.toUpperCase())
// 9. Use console.log() and a built-in method to print out the string "ricardo montoya de la rosa ramirez"
console.log(sibling3.toLowerCase())
// 10. Use console.log() and a built-in method to print out Ricardo's name, but with all the instances of the letter a removed or deleted.
console.log(sibling3.replaceAll("a", ""))
// 11. Use console.log() and a built-in method to print out "De La Rosa"
let start = sibling3.indexOf("De La Rosa");
let part = sibling3.slice(start, start + "De La Rosa".length);
console.log(part);
// Medium Challenges

// 12. Rewrite these function as an arrow function.
/// Then, call them with different inputs to check the result.

// function getRandomNum() {
//     return Math.floor(Math.random() * 100);
// }

const getRandomNum = () => Math.floor(Math.random() * 100)
console.log(getRandomNum())
console.log(getRandomNum())
console.log(getRandomNum())


// function greeting(name) {
//     return `Hello ${name}, I'm glad you can make it!`;
// }

const greeting = (name) => `Hello ${name}, I'm glad you can make it!`
console.log(greeting("John"))


// function perfectRoot(x) {
//     let root = Math.sqrt(x);
//     if (Math.floor(root) === root) {
//         return root;
//     } else {
//         return "No perfect root"
//     }
// }

const perfectRoot = x => Math.floor(Math.sqrt(x)) === Math.sqrt(x) ? Math.sqrt(x) : "No perfect root";
console.log(perfectRoot(16))
console.log(perfectRoot(17))
// 13. Fix/Finish the following functions.
/// Then, call them with at least 2 different inputs to ensure they work.

/// a. Adds 2 numbers and returns the sum
const addNums = (x, y) => {
    let sum = x + y;
    return sum
}
// uncomment the line below, to call the function, and add one more function call
console.log(addNums(4, 6));
console.log(addNums(10, 6));

// / b. Prints a special message if name is "Beyonce"
const isBeyonce = (name) => {
    if(name === "Beyonce") { 
        return "Welcome Queen!";
    } else {
        return `Sorry ${name}, you're not Beyonce`;
    }
}
// Test "Beyonce" and other names to ensure it works
console.log(isBeyonce("Beyonce"))
console.log(isBeyonce("Betty"))


/// c. If the number is even, return the number divided by 2, otherwise, return the number
/// For example reduceEvens(10) => 5 -- reduceEvens(11) => 11
const reduceEvens = (x) => {
    if(x % 2 === 0){
        return x / 2
    } else {
        return x;
    }
}
//Write your own function calls
console.log(reduceEvens(14))
console.log(reduceEvens(15))

// 14. Write a function called shortenString(string) that returns the first 10 characters of a string if it is longer than 10
//remove all
const shortenString = (string) => string.slice(0,10)
console.log(shortenString("jfoiewrvoiernboiern"))
console.log(shortenString("12345678910"))


// Spicy Challenges
let burger = 5.99;
let fries = 3.99;
let soda = 1.99;

// 15. Write a function buyBurgers(budget) that takes in a budget amount and returns the number of burgers that can be bought.
// If no burgers can be bought, return "Sorry, no burgers for you."

const buyBurgers = (budget) => {
    const count = Math.floor( budget / burger)
    if (count > 0) {
        return count
    } else {
        return "Sorry, no burgers for you"
    }
}

console.log(buyBurgers(12))


// 16. A meal consists of 1 burger, 1 fry, and 1 soda.
// Write a function called buyMeals(budget) that tells the user how many meals they can buy and how much money they will have left over.
// Bonus: Round the answer to the nearest penny.
const buyMeals = (budget) => {
    const mealPrice = burger + fries + soda
    const meals = Math.floor(budget / mealPrice)
    const leftover = budget - meals * mealPrice

    if (meals > 0) {
        return `You can buy ${meals} meals and you will have $${leftover.toFixed(2)} left over.`
    } else {
        return "You don't have enough money for a full meal."
    }
}

console.log(buyMeals(26.85))

// 17. [Challenge] Write a function missingLeg(side1, side2) that takes in the length of a hypotenuse and a leg of a right triangle and prints out the missing leg's length
// The larger side should be the hypotenuse  
const missingLeg = (hyp, leg) => {
    if (leg >= hyp) {
        return "Invalid triangle: leg cannot be longer than or equal to the hypotenuse."
    }
    return Math.sqrt(hyp ** 2 - leg ** 2)
}

console.log(missingLeg(12,6))


// 18. [Super Challenge] In math, Factorial is the product of an integer and all the integers below it.
// For example: factorial(3) = 3*2*1 = 6 ---  factorial(5) = 5*4*3*2*1 = 120
// Write a function factorial(x) that finds the factorial of any integer.