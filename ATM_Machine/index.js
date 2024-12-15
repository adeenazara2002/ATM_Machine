"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var userList_1 = require("./userList");
function authenticateUser() {
    var pin = readline.question("Enter your 4-digit pin");
    for (var _i = 0, users_1 = userList_1.users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user.validatePin(pin)) {
            return user;
        }
    }
    console.log("Invlaid PIN. Please try again.");
    return null;
}
function showMenu() {
    console.log("\n Welcome to the ATM!");
    console.log("\n View Balance");
    console.log("\n Withdraw Money");
    console.log("\n Deposit Money");
    console.log("\n Exit");
}
function handleATM() {
    var user = authenticateUser();
    if (!user) {
        console.log("Authentication failed. Exiting...");
        return;
    }
    var isRunning = true;
    while (isRunning) {
        showMenu();
        var choice = readline.questionInt("\nSelect an option: ");
        switch (choice) {
            case 1:
                console.log("\n Your current balance is: $".concat(user.getBalance()));
                break;
            case 2:
                var withdrawAmount = readline.questionInt("Enter amount to withdraw: ");
                if (user.withdraw(withdrawAmount)) {
                    console.log("\nYou have successfully withdrawn $".concat(withdrawAmount));
                    console.log("\nYour remaining balance is: $".concat(user.getBalance()));
                }
                else {
                    console.log("Insufficent balance or Invalid amount.");
                }
                break;
            case 3:
                var depositAmount = readline.questionInt("Enter amount to deposit: ");
                user.deposit(depositAmount);
                console.log("\nYou have successfully deposited $".concat(depositAmount));
                console.log("\nYour new balance is: $".concat(user.getBalance()));
                break;
            case 4:
                console.log("\n Thank you for using the ATM. Goodbye!");
                isRunning = false;
                break;
            default:
                console.log("\n Invalid option. Please try again.");
                break;
        }
    }
}
handleATM();
