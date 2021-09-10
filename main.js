
// An inline comment goes here

/*
    Primitive data types
    number 
    string (text/any character) "" '' ``
    boolean true/false
    null 
    undefined
*/

let fullName = `Alfredo Salazar`;
var age = 20;
let amIAInstructor = true;
let hobby = null;
let country = undefined;
let state;

/* 
    To display content or any message in the console
    console.log("");
*/

console.log("Name: ", fullName);
console.log("Age: ", age);
console.log("Instructor: ", amIAInstructor);
console.log("Hobby: ", hobby);
console.log("Country: ", country);
console.log("State: ", state);

fullName = "Alfredo Salazar Velez";

console.log("Updated name: ", fullName);

const PI = 3.1416;
console.log("PI value: ", PI);

/*
    Operators
        Aritmethic + - / * % ()
        Relational == === != !== > < >= <= || && !
*/  

let result = (10 + 5) * 2 / 3;
            // 15 * 2 / 3
            // 30 / 3
            // 10
console.log( "Result: ", result );
// 13.3 <----
// 10

/*
    Order of operators
    1. ()
    2. !
    3. * / %
    4. + -
    5. > < >= <= == === != !==
    6. || &&
    7. ++ -- += -= *= /= %= 
    8. =
*/

let result2 = 10 % 3;
console.log( "Modulus operator: ", result2 );

// Relational == === != !== > < >= <= || && !


/*
    For the && operator
    true + true = true
    true + false = false   raining + you dont need the food = you will not go
    false + true = false
    false + false = false

    For the || operator  
    true + true = true  
    true + false = true   raining + you need the food = you will still go
    false + true = true
    false + false = false
*/
let num1 = 0;
let num2 = 35;
let num3 = 50;
let num4 = 100;
let compare = !num1
            // ! true 
            // false
let compare2 = num1 !== num2;


console.log( "Compare: ", compare );



/* 
++  Adds 1 unit to the variable
--  Subs 1 unit to the variable
+=  Adds that many to a variable Ex. num = 10;   num += 5;   Value 15   num = num + 5
-=  Subs that many to a variable Ex. num = 10;   num -= 5;   Value 5    num = num - 5
*=  Multiplies that many to a variable  Ex. num = 10;   num *= 3    Value 30    num = num * 30
/=  Divides that many to a variable Ex. num = 100   num /= 10   Value 10    num = num / 10
%= 

*/
