#! /usr/bin/env node

// Simple Calculator (Typescript)

// ALGORITHM
// 1. User will be asked for the first number
// 2. User will be asked for the second number
// 3. Then he will be asked to select an operator
// 4. Results will be shown

import inquirer from "inquirer"
const questions = await inquirer.prompt([
    {message: "Please enter your first number: ", type:"number", name:'first_number'},
    {message: "Please enter your second number: ", type:"number", name:'second_number'},
    {message: "Please select an option to perform: ", type:"list", name:'operator', choices:['Addition', 'Subtraction', 'Multiplication', 'Division']},
]);

// Using Conditions
if (questions.operator === "Addition"){
    console.log(`Answer:  ${questions.first_number+questions.second_number}`)
}
else if (questions.operator === "Subtraction"){
    console.log(`Answer: ${questions.first_number-questions.second_number}`)
}
else if (questions.operator === "Multiplication"){
    console.log(`Answer:  ${questions.first_number*questions.second_number}`)
}
else if (questions.operator === "Division"){
    console.log(`Answer:  ${questions.first_number/questions.second_number}`)
}
else {
    console.log(`Oops, Something went wrong!`)
}