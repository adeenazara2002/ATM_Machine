import * as readline from "readline-sync";
import {User} from "./User";
import {users} from "./userList";

function authenticateUser(): User | null {
    const pin = readline.question("Enter your 4-digit pin");
    for(const user of users){
        if (user.validatePin(pin)) {
            return user;
        }
    }
    console.log("Invlaid PIN. Please try again."); 
    return null;
}

function showMenu(): void {
    console.log("\n Welcome to the ATM!");
    console.log("\n View Balance");
    console.log("\n Withdraw Money");
    console.log("\n Deposit Money");
    console.log("\n Exit");    
}






