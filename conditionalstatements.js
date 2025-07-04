let bill = 0;
let keepOrdering = true;
let more;

do {
  alert("------- MENU ------- \n 1. panjabi dish - 180 \n 2. pani puri - 30\n 3. dhokla - 60 \n 4. pizza - 120\n 5. manchurian - 50")

  let userChoice = Number(prompt("Enter item number (1 to 5):"));
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

  console.log(`You ordered ${count} ${name} Cost: ₹${total}`);
  console.log("Current total bill: ",bill);

   more = prompt("Do you want to order more? (yes/no)")
 
}
while(more==="yes")


alert("--------------------");
alert("Thank you for ordering!");
alert("Your final bill is " + bill);
