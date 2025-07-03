let bill = 0;
let keepOrdering = true;

while (keepOrdering) {
  console.log("------- MENU -------");
  console.log("1. panjabi dish - 180");
  console.log("2. pani puri - 30");
  console.log("3. dhokla - 60");
  console.log("4. pizza - 120");
  console.log("5. manchurian - 50");

  let userChoice = prompt("Enter item number (1 to 5):");
  let name = "";
  let price = 0;

  if (userChoice === 1) {
    name = "punjabi dish";
    price = 180;
  } else if (userChoice === 2) {
    name = "pani puri";
    price = 30;
  } else if (userChoice === 3) {
    name = "dhokla";
    price = 60;
  } else if (userChoice === 4) {
    name = "pizza";
    price = 120;
  } else if (userChoice === 5) {
    name = "manchurian";
    price = 50;
  } else {
    console.log("Invalid choice! Please select from 1 to 5.");
    continue;
  }

  let count = prompt(`How many ${name} do you want?`);
  let total = price * count;
  bill = bill + total;

  console.log(`You ordered ${count} ${name}. Cost: ₹${total}`);
  console.log("Current total bill: " , bill);

  let more = prompt("Do you want to order more? (yes/no)");
  if (more !== "yes") {
    keepOrdering = false;
  }
}

console.log("--------------------");
console.log("Thank you for ordering!");
console.log("Your final bill is " , bill);
