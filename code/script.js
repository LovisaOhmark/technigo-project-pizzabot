// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const customer = prompt(
  'Please enter your name', 'PizzaPan'
);

const greeting = alert("Welcome, " + customer + " !")

// Step 2 - Food choice
// Your code goes here

const foodChoice = parseInt(
  prompt(
    `What type of food would you like to order?
        Enter a number: 
        1 - Pizza
        2 - Bread
        3 - Salad
     `
  )
);


let foodType = "";
if (foodChoice === 1) {
  foodType = "Pizza";
} else if (foodChoice === 2) {
  foodType = "Bread";
} else if (foodChoice === 3) {
  foodType = "Salad";
}


alert(`You have choosen ${foodType}, that´s a great chioce!`);


// Step 3 - Subtype choice
// Your code goes here

let subtypeChoice = 0;
if (foodChoice === 1) {
  subtypeChoice = parseInt(
    prompt(
      `Select a ${foodType} type:
        Enter a number: 
        1 - Margerita
        2 - Four cheeses
        3 - Spicy salami
        `
    )
  );
} else if (foodChoice === 2) {
  subtypeChoice = parseInt(
    prompt(
      `Select a ${foodType} type:
        Enter a number: 
        1 - Baugette
        2 - Foccacia
        3 - Pizza bread
        `
    )
  );
} else if (foodChoice === 3) {
  subtypeChoice = parseInt(
    prompt(
      `Select a ${foodType} type:
        Enter a number: 
        1 - Salad caprese
        2 - Greek salad
        3 - Mixed greens
        `
    )
  );
}

let subType = "";
if (foodType === "Pizza") {
  if (subtypeChoice === 1) {
    subType = "Margerita";
  } else if (subtypeChoice === 2) {
    subType = "Four cheeses";
  } else if (subtypeChoice === 3) {
    subType = "Spicy salami";
  }
} else if (foodType === "Bread") {
  if (subtypeChoice === 1) {
    subType = "Baugette";
  } else if (subtypeChoice === 2) {
    subType = "Foccacia";
  } else if (subtypeChoice === 3) {
    subType = "Pizza bread";
  }
} else if (foodType === "Salad") {
  if (subtypeChoice === 1) {
    subType = "Salad caprese";
  } else if (subtypeChoice === 2) {
    subType = "Greek salad";
  } else if (subtypeChoice === 3) {
    subType = "Mixed greens";
  }
}

alert(`You have choosen ${subType}, delicious!`);

// Step 4 - Age
// Your code goes here

const age =
  prompt('To know if the food is for a child or an adult, please type age:')
  ;

let orderMessage = "";
if (age < 12) {
  orderMessage = `One child sized ${subType} will be prepared for you. That will be 5 €. Are you sure you want to order this?`;
} else if (age >= 12) {
  orderMessage = `One adult sized ${subType} will be prepared for you. That will be 9 €. Are you sure you want to order this?`;
}



// Step 5 - Order confirmation
// Your code goes here

const confirmationOrder = parseInt(
  prompt(
    ` ${orderMessage}
    Enter a number to confirm:
    1 - Yes
    2 - No 
    `)
);

if (confirmationOrder === 1) {
  alert('Thank you for your order! It is soon on the way. Hope to see you soon!');
} else if (confirmationOrder === 2) {
  alert('No worries, welcome back anytime soon!');
}

