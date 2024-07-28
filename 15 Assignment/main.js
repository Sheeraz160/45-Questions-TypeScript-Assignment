// Guest List
var guests = ["Asad", "Mujadid", "Azhar"];
guests.forEach(function (guested) {
    console.log("".concat(guested, ", would you like to join our party.\n"));
});
var unableToAttend = "Mujadid";
console.log("".concat(unableToAttend, " is not joining our party.\n"));
var newGuest = "Mosaib";
//Replace the Guest Name
guests[guests.indexOf(unableToAttend)] = newGuest;
// New Invitation
guests.forEach(function (guest) {
    console.log("".concat(guest, ", would you like to join our party"));
});
