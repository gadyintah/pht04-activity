let name = "";

function greet(name) {
    console.log("Hi there", name + "! how are you?");
}

greet("Jimmu");

function calculateSomething(num1, num2){
    console.log("Sum:", num1 + num2);
    console.log("Difference:", num1 - num2);
    console.log("Product:", num1 * num2);
    console.log("Quotient:", num1 / num2);
}

let num1 = prompt("Enter first number: ");
let num2 = prompt("Enter second number: ");

calculateSomething(num1, num2);

function isEven(number){
    console.log("Is", number, "even? ");
    if(number%2 === 0){
        console.log(true);
    }
    else {
        console.log(false);
    }
}

let number = prompt("Enter a number to know if it's even or odd: ");

isEven(number);

let grade = "F";

function grading(score) {
    if(score >= 90 && score <= 100){
        grade = "A. Wow! Amazing, you got an A!";
    }
    else if(score > 80 && score < 90){
        grade = "B :P";
    }
    else if(score > 70 && score < 80){
        grade = "C :P";
    }
    else if(score > 60 && score < 70){
        grade = "D :P";
    } else if(score <= 60 && score >= 0){
        grade = "F :P";
    } else console.log("Invalid input");

    console.log("Your grade is", grade);
}

grading(prompt("What is your score?"));
