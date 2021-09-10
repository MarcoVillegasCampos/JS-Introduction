/* 
    You are going to have 3 numbers.
    Print them from highest to lowest.

    Example:
    24, 11, 35
    35 > 24 > 11

    11, 24, 35
    35 > 24 > 11

    35, 11, 24
    35 > 24 > 11

*/

let num1 = 8;
let num2 = 9;
let num3 = 10;

if( num1 >= num2 ){
    if( num1 >= num3 ){
        if( num2 >= num3 ){
            console.log( num1, num2, num3 );
        }
        else{
            console.log( num1, num3, num2 );
        }
    }
    else{
        console.log( num3, num1, num2 );
    }
}
else{
    if( num2 >= num3 ){
        if( num1 >= num3 ){
            console.log( num2, num1, num3 );
        }
        else{
            console.log( num2, num3, num1 );
        }
    }
    else{
        console.log( num3, num2, num1 );
    }
}