let guest : string[] = ["Asad", "Mujadid", "Azhar", "Saad"];

//Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
console.log(guest[5]);

// Correcting the error by accessing a valid index.
console.log(guest[2]);