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
str = 'The quick brown'

console.log(bool);
console.log(str);

/*
                      OPERATORS
Operators - are very important, they allow us to change our variables.

= Assigns a new value to a variable

+ Adds to numbers together. OR. Concatenates (joints) two strings
1+1=2  OR "ABC"+"DEF"="ABCDEF"


- Substracts the number
* multiplies numbers together
/ divides numbers
%  Returns the remainder when the number on the left hand side of the operator is divided by the number 5%2=1
** Multiplies the number on the left hand side pf the operator by itself as many times as number on the righ hand side of the operator 4 ** -> 16


*/

// let num = 4;
// num = num + 6;
// num = num / 4;
// num = num * 2;
// console.log(num);
/*
We can combine operator and the assigment operator (=) to get some shortcut assigment(назначение) operators. These assigment operators enable us to write shorter, more readable code.

*/


/*                          Operator presedence (приоритет)
Certain (определенный) operators have presednce.
Usually operator precedence works the same way it would in regular maths. Multiplications and divisions done before addition and substraction. Also like in maths, we can add parenthesis/ brackets () to make specific groups more important.

*/

let num = (4 + 6) / 5 * 2;
console.log(num);

/*    
                                LOGIC
The simplest and the most important, statement in JS is the IF statement(заявление).
if (condition){do something here}


Notice we need a condition in our if statement. Our condition(условие) is a boolean (логическое значение), 
*/
