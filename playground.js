console.log('hello')
console.log('Your mom is gay')

//Variables
//Description: The variable refers to the value store in it
//JS variables can hold different data types: numbers, strings,objects and more.
// Hint: String is just a text 
name = 'Peter Pan'
console.log(name)

sentence = 'How are u doing today Peter? I hope you are doing great!'
console.log(sentence)

//Operators
//Operators are used to assign values, compare values,perform arithmetic operations

//fruit = prompt('What is your favourite fruit?')
//console.log(fruit)

food = Number(prompt('How much was the food?'))
tipPercentage = Number(prompt('tip%?') / 100)
tipAmount = food * tipPercentage

total = food + tipAmount
console.log('tip amount',tipAmount)
console.log('total amount',total)
//alert9(tipamount)


/*Prompt
The prompt () is a built-in JavaScript functionally that helps you get inputs from a user through the browser.

Data types: any kind of Number,including decimals. (strings and numbers)  
 Zero or more charachters written inside quoutes.EXAMPLE 
numbers:1,2,20
string: 'Hello',
arrays[]
objects{}
boolean true/false
*/

/*
Math Operators
Multiply*
Divide/
Exponents **
Modulo/Remainder % 5%2=1
Add +
Substract - 
*/

/* Math Methods
Floor: The Math.floor()method rounds a number down to the nearest integer,and returns the result.
Floor - Rounds down
Math.floor (10.50)

Ceil: The Math.Ceil()method rounds a number up to the nearest integer,and returns the result.
Ceil - Rounds up
Math.ceil (10.50)

Random: Math.random()returns a random number between 0(inclusive), and 1 (exclusive)
Random gives a random number
Math.random()>Random number between 0 and 1
Math.random()*10>Random number between 0 and 10
*/

// This is a single-line JavaScript comment, this is not read as code!

/* This
is
a
multi-line
JavaScript
comment. */

// Throughout the lessons, you'll see comments directing you on what to do!

// Print some data below this line using what you've learnt so far!
// If you get stuck, scroll down for a hint

//                            VARIABLE AND DATA TYPES
//Variable is a box ,where we can safe a data.
//There are different types of data.

//Integer 123 (without fractional component) console.log(123);
//float 123.956 (Number with fractional component) console.log(123.456);
//double 123.4568799877 (A high precission float,with more decimal places) console.log(123.44445566777);
//Number console.log([123]);
//Char a single character a,b,c,d console.log(a);


/* String - a collection of chars forming some text.
  JavaScript strings start and finish with one of such as:
    ""  quatation marks
    ''  apostrophes
    ``  backstics

*/

// BOOLEAN True of False

/* Array - a list-like (this can depend on the programming language)
    Collection of data ,most commonly symbolised with sqare braces/brackets [0,1,2,3,4,5]
    Each item in array has an index (its position in the array,starting at 0)
    An item can be accessed using sqare bracket notation (array[index])
*/

/*
Object - a special structure grouping data together. In JS, this is a through properties and values.
Objects are more advanced concept so we will look at them much more in depth later.
*/

// console.log(123);
// console.log(123.456);
// console.log("Hello world!");
// console.log('Hello world!');
// console.log(`Hello world!`);
// console.log([1, 2, 3]);
// console.log(true);
// console.log(false);

//                              VARIABLES

/*
  Variables - the brick from which we build programs.
  There are three ways to declare variable in JS. Each being slightly    different. Declaring a variable looks like this:
  Example: keyword variablename = data;

  The three keywords you can use are:
  var
  
  let - declares a local variable. Introduced to handle inconsistancies with var.
  
  const -declares a local constant (that cannot be change). 

  Each acts slighly differently, let declares a local variable and const.

  In JS there us a magical thing called SCOPE.

  SCOPE- determines what code has acces to which variables,this will become very important later. The basic rule is that a local variable can only be accessed from inside the same pair curly braces/brackets ({}).

Lets look at how we would declare or define (the programming terminology for creating or making variable) a variable with each of these keywords.


*/
var bool = true;
let str = "hello world!";
const pi = 3.1254886;
console.log(pi);
/*  
                                Variables name
We can access a variable using the variable s name.
We could put a variables name inside console.log(), and the value that variable stores would be printed in console. 
Name cannot start with a number. Variable names are also case sensitive in JavaScript, meaning a variable declared as ABC cannot be accessed using abc.


*/

console.log(bool);
console.log(str);
console.log(pi);

/*
You can change the value of a variable you ve defined (that isnt a constant declared with const). The same way you declare a variable, just without the keyword.
*/
bool = false;
str = 'The quick brow fox'

console.log(bool);
console.log(str);
