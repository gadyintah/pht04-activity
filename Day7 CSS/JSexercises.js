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

calculateSomething(15, 5);

function isEven(number){
    console.log("Is", number, "even? ");
    if(number%2 == 0){
        console.log(true);
    }
    else {
        console.log(false);
    }
}

isEven(4);
isEven(3);
isEven(15);
isEven(20);

let grade = "F";

function grading(score) {
    if(score >= 90 && score <= 100){
        grade = "A";
    }
    else if(score > 80 && score < 90){
        grade = "B";
    }
    else if(score > 70 && score < 80){
        grade = "C";
    }
    else if(score > 60 && score < 70){
        grade = "D";
    } else if(score <= 60 && score >= 0){
        grade = "F";
    } else console.log("Invalid input");

    console.log("Your grade is", grade);
}

grading(prompt("What is your score?"));
