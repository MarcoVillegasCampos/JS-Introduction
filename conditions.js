
/*
    if( condition/expression ){
        // Do something here if it is true
    }
    else{
        // Do something if it is false
    }

*/

let weather = "windy";

if( weather === "sunny" ){
    console.log( "It is a good day to go to beach" );
}
else{
    if( weather === "rainy"){
        console.log( "It is raining, not good to go to the beach =( " );
    }
    else{
        if( weather === "cloudy" ){
            console.log( "Might not be a good day to go to the beach, as it may raining later" );
        }
        else{
            console.log( "It might be windy, maybe we could go to the beach" );
        }
    }
}


let examGrade = 60;

if( examGrade >= 70 ){
    console.log( "Congratulations you passed!" )
    if( examGrade === 100 ){
        console.log( "You nailed the exam!!!" );
    }
}
else{
    console.log( "You didn't pass today, but you may attempt it a second time!" );
}


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