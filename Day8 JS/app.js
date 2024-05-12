let day = "";

//day = prompt("What day is it today?");

switch(day.toLowerCase()) {
    case "monday":
        console.log("It's the start of the week");
        break;
    case "friday":
        console.log("It's the end of the week");
        break;
    default:
        console.log("It's a regular day");
        break;
}

//====
// JavaScript Loops
//1 . For Loop-
// 2. While Loop -
// 3. Do-While Loop
//For Loop
for(let i=1; i<10; i++){ //i--
    console.log(i);
}

console.log("Break");

//While Loop 
let count = 1;
while (count <= 5) {
    console.log("Count",count);
    count++;
}

console.log("Break");

// Do-While Loop
let z = 1;
do{
    console.log("Do While Count: " ,z);
    z++;
} while (z <=6);