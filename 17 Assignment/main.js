var guests = ["Asad", "Mujadid", "Azhar", "Ali"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests for inviting our dinner
guests.unshift("Mosaib"); // unshift function adding data in 0 Index
guests.splice(guests.length / 2, 0, "Shakeel"); // splice func adding data in 2 index
guests.push("Riaz"); // push func adding data in last index
console.log(guests);
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join our dinner."));
});
// Q17 Answer:
console.log("Unfortunately, I can only invite two people for dinner.");
// Removing Guests
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
    console.log(guests);
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
console.log(guests);
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
