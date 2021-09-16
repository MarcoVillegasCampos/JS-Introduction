let nums =[10,20,30,40,50];

//get the number of elements inside the array//
console.log("Lenght", num.lenght);

// Add an element at the end of the array//
num.push(60);
console.log(nums);

//Add an element at the front of the array
nums.unshift (0);
console.log(nums);

// Add or remove an element from the array 
// Argument 1: Index to work with
// Argument 2: Hw many to remove
// Argument 3: Element to Add (only if you add)//
nums.splice (2,0,15);
//console.log(nums);

// Remove the las element of the array
nums.pop();
console.log(nums);

//Remove the first element of the array
nums.shift();
console.log(nums);
