// Write a code to find angles of triangle if two angles are given.

// Input the two known angles of the triangle
let angle1 = parseFloat(prompt("Enter the first angle of the triangle:"));
let angle2 = parseFloat(prompt("Enter the second angle of the triangle:"));

// Calculate the third angle
let angle3 = 180 - (angle1 + angle2);

// Display the third angle
console.log(`The third angle of the triangle is: ${angle3}`);