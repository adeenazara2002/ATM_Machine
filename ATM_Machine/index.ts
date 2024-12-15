import * as readline from "readline-sync";
import { User } from "./User";
import { users } from "./userList";

function authenticateUser(): User | null {
  const pin = readline.question("Enter your 4-digit pin");
  for (const user of users) {
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

function handleATM(): void {
  const user = authenticateUser();

  if (!user) {
    console.log("Authentication failed. Exiting...");
    return;
  }

  let isRunning = true;

  while (isRunning) {
    showMenu();
    const choice = readline.questionInt("\nSelect an option: ");

    switch (choice) {
      case 1:
        console.log(`\n Your current balance is: $${user.getBalance()}`);

        break;

      case 2:
        const withdrawAmount = readline.questionInt(
          "Enter amount to withdraw: "
        );
        if (user.withdraw(withdrawAmount)) {
          console.log(`\nYou have successfully withdrawn $${withdrawAmount}`);
          console.log(`\nYour remaining balance is: $${user.getBalance()}`);
        } else {
          console.log("Insufficent balance or Invalid amount.");
        }
        break;

      case 3:
        const depositAmount = readline.questionInt("Enter amount to deposit: ");
        user.deposit(depositAmount);
        console.log(`\nYou have successfully deposited $${depositAmount}`);
        console.log(`\nYour new balance is: $${user.getBalance()}`);

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
