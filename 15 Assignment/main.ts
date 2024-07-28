// Guest List
let guests : string[] = ["Asad","Mujadid", "Azhar"];

guests.forEach(guested => {
    console.log(`${guested}, would you like to join our party.\n`)
})

let unableToAttend : string = "Mujadid";

console.log(`${unableToAttend} is not joining our party.\n`);

let newGuest : string = "Mosaib";

//Replace the Guest Name
guests[guests.indexOf(unableToAttend)] = newGuest;

// New Invitation
guests.forEach(guest => {
    console.log(`${guest}, would you like to join our party`);
})