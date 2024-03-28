#! /usr/bin/env node
import inquirer from "inquirer";
// import Choices from "inquirer/lib/objects/choices.js";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["Withdraw", "Fast cash", "Check balance"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("You dont have sufficient balance.");
        }
        else
            myBalance -= amountAns.amount;
        console.log(`Your remaining balance is: ${myBalance}`);
    }
    if (operationAns.operation === "Check balance") {
        console.log(`Your balance is:  ${myBalance}`);
    }
    else if (operationAns.operation === "Fast cash") {
        let selectAmount = await inquirer.prompt([
            {
                name: "FastCash",
                message: "Select Amount",
                type: "list",
                choices: ["3000", "5000", "10000", "15000", "20000", "other"],
            },
        ]);
        if (selectAmount.FastCash === "other") {
            let otherOption = await inquirer.prompt([
                {
                    name: "customAmount",
                    message: "enter custom amount",
                    type: "number",
                },
            ]);
            if (otherOption.customAmount > myBalance) {
                console.log("You dont have sufficient balance.");
            }
            else
                myBalance -= otherOption.customAmount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        ;
        if (selectAmount.FastCash > myBalance) {
            console.log("You dont have sufficient balance.");
        }
        else if ((myBalance -= selectAmount.FastCash)) {
            console.log(`You withdrew ${selectAmount.FastCash} fast cash. Your remaining balance is: ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin number.");
}
