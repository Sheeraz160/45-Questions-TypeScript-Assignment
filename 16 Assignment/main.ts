let guests : string[] = ["Asad", "Mujadid", "Azhar", "Ali"];

console.log("Great news! I found a bigger dinner table!");

// Adding more guests for inviting our dinner
guests.unshift("Mosaib");                            // unshift function adding data in 0 Index
guests.splice(guests.length / 2 , 0 , "Shakeel");    // splice func adding data in 2 index
guests.push("Riaz");                                  // push func adding data in last index

console.log(guests);

// Inivitation for nes list 
guests.forEach( guest => {
    console.log(`Dear ${guest}, would you like to join our dinner.`);
})
