

let car ={

    color: "blue",
    year:2018,
    make: "Toyota",
    numSeats:5,
    printInfo : function(){
        console.log("color: ",this.color);
        console.log("year: ", this.year);
        console.log("Make: ",this.make);
        console.log("Num seats: ",this.numSeats);
    },
    models: ["v2","v3","v4","LE"],
    countriesAvailable: {
        country1:"Costa Rica",
        country2:"Mexico",
        country3:"Ecuador"
    },
};
/*

console.log(car.countriesAvailable.country1);


let msg= "Car infotmation";

*/
/* to access al properties and values of an object------
let properties= Object.keys(car);
let values= Object.values(car);

console.log(properties);
console.log(values);
*/


/*
car.printInfo(msg);

console.log( car.models, car.models.length);

for (let i=0; i < car.models.length; i++){
    console.log(car.models[i]);
}*/

/*
console.log(car);
console.log("Car's color: ",car.color);
console.log("Car's year: ", car["year"]);


let key = "make";
console.log("Car's make:", car[key]);
*/

/* to access all properties in a loop
for (let property in car){
    console.log("-",property);
    console.log("-",car[property]);



    }
*/



