/* Variables and Data Types */
/*Console.log each variable and test your code in the terminal using the Node REPL*/

/*i.e.*/

var pet = "sebastian the pug";
console.log(pet);

/**
* #1
* Variables with a String value
*
* Declare variables named `firstName`, `lastName`, `birthPlace`, `favoriteFood`, `bestMovie`, `favLoveSong`, `cuteAnimal`, `favColor`, `favSneaker`, `coffeeShop`.
* Assign values to these variables with your own data.
*
* Each value should be a String. 
**/

var firstName = "My First Name";
var lastName = "My Last Name";
var birthPlace = "Mississippi";
var favoriteFood = "Pizza";
var bestMovie = "The Room";
var favLoveSong = "Who has a favorite love song?";
var cuteAnimal = "Dog";
var favColor = "Purple";
var favSneaker = "Nike";
var coffeeShop = "Starbucks";
var stringArray = [firstName, lastName, birthPlace, favoriteFood, bestMovie, favLoveSong, cuteAnimal, favColor, favSneaker, coffeeShop];
console.log();
console.log("Array of strings: ");
console.log(stringArray);

/**
* #2
* Variables with a Number value
*
* Declare variables named `favoriteNumber`, `currentYear`, `thatOnePrinceSong`, 'tokyoOlympics`, `mariahCareyAge`, `currentTemp`, `studentsInClass`, `numOfJapanPrefectures`, `currentIphoneModel` and `shoeSize`.     
*
* Each value should be a Number
**/

var favoriteNumber = 4;
var currentYear = 2017;
var thatOnePrinceSong = 18;
var tokyoOlympics = 8;
var mariahCareyAge = 23;
var currentTemp = 78;
var studentsInClass = 12;
var numOfJapanPrefectures = 23;
var currentIphoneModel = 8;
var shoeSize = 14;
var numberArray = [favoriteNumber, currentYear, thatOnePrinceSong, tokyoOlympics, mariahCareyAge, currentTemp, studentsInClass, numOfJapanPrefectures, currentIphoneModel, shoeSize];
console.log();
console.log("Array of numbers: ");
console.log(numberArray);

/**
* #3
* Variables with a Boolean value
*
* Declare variables named `likesMcDonalds`, `watchedMrRobot`, `ranMarathon`, `wrestledABear`, `lovesDonuts`, `readHarryPotter`, `sleptInClass`, `drinksCoffee`, `shopsAtWholeFoods` and `ownsRedShoes`.     
*
* Each value should be a Boolean
**/

var likesMcDonalds = true;
var watchedMrRobot = false;
var wrestledABear = false;
var lovesDonuts = true;
var readHarryPotter = true;
var sleptInClass = true;
var drinksCoffee = true;
var shopsAtWholeFoods = false;
var ownsRedShoes = false;
var booleanArray = [likesMcDonalds, watchedMrRobot, wrestledABear, lovesDonuts, readHarryPotter, sleptInClass, drinksCoffee, shopsAtWholeFoods, ownsRedShoes];
console.log();
console.log("Array of boolean values: ");
console.log(booleanArray);


/**
* #4
* Variables with a Null value
*
* Declare variables named `completedPrepClass`, `traveledToMars` and `scoredTDinNFL`.
*
* Each value should be Null 
**/

var completedPrepClass = null;
var traveledToMars = null;
var scoredTDinNFL = null;
var nullArray = [completedPrepClass, traveledToMars, scoredTDinNFL];
console.log();
console.log("Array of null values: ");
console.log(nullArray);
console.log("Exciting.");

/*
#5. 
* What is the difference between null and undefined? Type your answer in two or three commented-out sentences.
*/

/* A null value is a value for which a pointer exists, but the value itself has not been assigned. An undefined value is a value which has not been declared or has been assigned an undefined value.
*/

/**
* #6
* Variables with an Array value
* 
* Declare a variable named 'plateLunch` and assign it an array containing 5 of your favorite lunch items.
* Declare a variavle named `fruitBasket` and assign it an array containing 5 fruits of your choosing.
* Declare a variable named `westCoast` and assign it an array containing states found on the west coast of the US.
* Declare a variable named `lotteryResult and assign it an array containing 5 random numbers.
* Declare a variable named `duets` and assign it an array containing 3 nested arrays, each containing the names of 2 singers or bands.
* Declare a variable named `mixPlate` and assign it an array containing different data types of your choosing.
**/

var plateLunch = ["Sushi", "Cake", "Fruit", "Chicken", "Broccoli"];
var fruitBasket = ["Apple", "Orange", "Grapes", "Pear", "Liver, probably"];
var westCoast = ["Washington", "Oregon", "California"];
var lotteryResult = [9, 28, 123, 0, 9];
var duets = [["Blue Man 1", "Blue Man 2"], ["Green Day", "Smash Mouth"], ["Some band", "That other band"]];
var mixPlate = [["this is a nested array", 1, null], true, false, "probably false"];
var arrayArray = [plateLunch, fruitBasket, westCoast, lotteryResult, duets];
console.log();
console.log("Array of arrays: ");
console.log(arrayArray);
console.log("Probably looks like a mess.");

/*7
* Accessing Values in Arrays

var partyList = ["carrot cake", "rocky road ice cream", "mochiko chicken", "orange tang", "lemon bars"];

What is the length of this array? Please print the length (a number) to the console.
What is the index position of carrot cake? Please print this item to the console.
What is the index position of lemon bars? Please print this item to the console.
*/

var partyList = ["carrot cake", "rocky road ice cream", "mochiko chicken", "orange tang", "lemon bars"];
console.log();
console.log("Array partyList " + partyList.length + " items long.");
console.log(partyList[0] + " is item number 0.");
console.log(partyList[partyList.length-1] + " is item number " + (partyList.length-1) + ".");


/*
* #8 
* Concatenation 
* Concatenate the variables `firstName` and `lastName` and store this to a new variable called `fullName`.

* Declare a new variable, `whereFrom`, and assign it the value of a string using the variables `fullName` and `birthPlace`:
 xx xx is from xx.
 e.g.
 Usain Bolt is from Jamaica.
 
*Declare a new variable, `mariahStory`. Assign it the value of concatenating the variables `mariahCareyAge`, `favSneaker`, `favLoveSong` and `coffeeShop` to create the following sentence:
At the age of xx, Mariah Carey, wearing her fancy xx, sang xx at the xx.
*/

console.log();
var fullName = (firstName + " " + lastName);
var whereFrom = (fullName + " is from " + birthPlace + ".");
console.log(fullName);
console.log(whereFrom);

var mariahStory = ("At the age of " + mariahCareyAge + ", Mariah Carey, wearing her fancy " + favSneaker + ", sang \"" + favLoveSong + "\" at the " + coffeeShop + ".");
console.log();
console.log(mariahStory);


/**
* #9 Arithmetic
* Variables with the outcome of an arithmetic operation.
* Declare two variables, `num1` and `num2` and assign each of these variables a number of your choosing.
* Next perform the following arithmetic operations:

* Add the two variables and store it to new variable named `sum`.
* Subtract the two variables and store it to a new variable named `difference`.
* Mulitply the two variables and store it to a new variable named `product`.
* Divide the two variables and store it to a new variable named `quotient`.
* What is the remainder when you divide num1 by num2? Print your answer to the console.

**/

var num1 = 27;
var num2 = 83;
var sum = (num1 + num2);
var difference = (num1 - num2);
var product = (num1 * num2);
var quotient = (num1 / num2);
var modulus = (num1 % num2);
var arithmeticArray = [sum, difference, product, quotient, modulus];
console.log();
console.log("Array of arithmetic operations with numbers 27 and 83:");
console.log(arithmeticArray);

/**
* #
* Comparisons & Logic
* Variables with the outcome of a comparison operation:
*
* Declare a variable named `isStrictlyEqual` and compare two strings "Tacocat" and "tacocat" using the strict equality.
* Declare another variable named `isLooselyEqual` and compare the two strings "Tacocat" and "tacocat" using equality.
* Print both variables to the console. If the answers are different, why? If not, why not? Write you answer two or three commented-out sentences.

* Declare a variable named `sameNum` and compare a string "5" and a number 5 using strict equality.
* Declare another variable named `sameNumba` and compare a string "5" and a number 5 using equality.
* Print both variables to the console. If the answers are different, why? If not, why not? Write you answer two or three commented-out sentences.



* Use the logical and && and or || and compare the following:
* 3>2 3<1 (use or)
* 3>2 6>3 (use and)
* 7>2 8<5 (use and)
* Declare variables and print the results to the console. What are the differences between the three and why?
**/

var isStrictlyEqual = ("Tacocat" === "tacocat");
var isLooselyEqual = ("Tacocat" == "tacocat");
console.log();
console.log(isStrictlyEqual);
console.log(isLooselyEqual);

// isStrictlyEqual is false, since the capitalization between the two strings is different. isLooselyEqual is true, however, as it disregards capitalization.

var sameNum = ("5" === 5);
var sameNumba = ("5" == 5);
console.log();
console.log(sameNum);
console.log(sameNumba);

// sameNum is false, while sameNumba is true. The reason for this is because while if both values were numbers, 5 would be 5; however, in this case the two values are different types (string and number), meaning only loose equality is true.

var booleanComparison1 = ((3 > 2) || (3 > 1));
var booleanComparison2 = ((3 > 2) && (6 > 3));
var booleanComparison3 = ((7 > 2) && (8 < 5));
console.log();
console.log(booleanComparison1);
console.log(booleanComparison2);
console.log(booleanComparison3);

// b1 is true because both are true in the comparison, with OR one more more of the values need to be true. b2 is true because BOTH comparisons evaluate to true. b3 is false because while the first comparison is true, the second is false.

/**
* #11
* Assignments
* Variables with the outcome of an assignment operation:
*
* Declare a variable named `myBox` and assign it with a number of your choosing.
* This variable will be used to store multiple types of values as we assign them to show how variables in JavaScript are not bound to a single data type
* and can change values.

* Write 5 different assignment statements and `console.log()` the value of the variable after each
* assignment statement to show the current value. REMEMBER: an assignment is DIFFERENT from a declaration.
*
**/
console.log();
var myBox = 4;
console.log(myBox);
myBox = 23;
console.log(myBox);
myBox = null;
console.log(myBox);
myBox = "sandwich";
console.log(myBox);
myBox = (5+62);
console.log(myBox);
myBox = "I dunno what to put here";
console.log(myBox);

/**
* Final Boss 
* Additional exercises designed to further challenge you and give you a jump start on the next topic that'll be covered.
* Function - A block of code designed to perform a particular task. It allows you to reuse code.
*
* Declare a function named `bakePie` which has a single parameter 'ingredient'.
* When the function is invoked, it should return a string, "Today's special ingredient pie." Where ingredient will be the value that you pass into the function.
* For example, if the value is `blueberry`, it should return "Today's special blueberry pie."
* Declare a variable 'pieResult' and assign it to the function call.
* Console.log the variable to see the result.


* Declare a Function named `jump` which has a single parameter, `height`.
* This function should return a string, "You jumped height feet high!" Where height will be the value that you pass into the function.
* For example, if the value is 9, it should return "You jumped 9 feet high!"
*
* Declare a variable 'jumpResult' and assign it to the function call.
* Console.log the variable to see the result.


* Declare a Function named `cook` which a takes three parameters, `ingredient1`, `ingredient2`, `recipeName`.
* This function should return a String along the lines of, "Tomatoes and Cheese make a Pizza!"
* if invoked in this way -> cook("Tomatoes", "Cheese", "Pizza");
**/

function bakePie(ingredient) {
	return ("Today's " + ingredient + " pie.");
}

console.log();
console.log(bakePie("apple"));

function jump(height) {
	return ("You jumped " + height + " feet high!");
}

var jumpResult = jump(9);

console.log();
console.log(jumpResult);

function cook(ingredient1, ingredient2, recipeName) {
	return (ingredient1 + " and " + ingredient2 + " make a " + recipeName + "!");
}

console.log();
console.log(cook("tomatoes", "cheese", "pizza"));
