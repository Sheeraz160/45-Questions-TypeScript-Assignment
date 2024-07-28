// Seeing the World: Think of at least five places in the world you’d like to visit.
let placeToVisit : string[] = ["Italy", "Japan", "Australia", "Turkey", "London"];

//Print your array in its original order.
console.log("Original Array: " , placeToVisit);

//Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetic Array : " , placeToVisit.slice().sort());

//Show that your array is still in its original order by printing it.
console.log("Original Array: " , placeToVisit);

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Alphabetic Reverse Array : " , placeToVisit.slice().sort().reverse());

//Show that your array is still in its original order by printing it again.
console.log("Original Array: " , placeToVisit);

//Reverse the order of your list. Print the array to show that its order has changed.
placeToVisit.reverse();
console.log("Reverse Order:", placeToVisit);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
placeToVisit.reverse();
console.log("Reverse Order in original:", placeToVisit);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sort Order: " , placeToVisit.slice().sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placeToVisit.reverse();
console.log("Reverse Array:" , placeToVisit);