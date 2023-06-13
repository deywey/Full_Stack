console.log("Hello from my first js file!")

let xyz = dayoftheweek = prompt('Enter a Day of the Week');

if (dayoftheweek == ('Monday') || ('Tuesday') || ('Wednesday') || ('Thursday') || ('Friday') || ('Saturday') || ('Sunday')) {
    console.log("Good Job")
}


let random = Math.random(0);
if (random < 0.5) {
    console.log("Your number is less than .5!");
    console.log(random);  
}
var min = 1
var max = 10
function getRandomArbitrary(min, max) {
return Math.random() * (max - min) + min;
}

rating = Math.random() * (max - min) + min
if (rating <= 3.0) {
    console.log("Please try again")
} else if (rating >= 3.1 && rating <= 7.9) {
    console.log("Pretty good")
} else if (rating >= 8) {
    console.log("Stellar job!!")    
}
else {
    console.log("Something's wrong")
}


const password = prompt("Please enter a password");

if (password.length <=8) {
    console.log("Not long enough");
} else if (password.length >=15) {
    console.log("Too long to remember");
}
else {
    console.log("Valid Password. Thank You!")
}