// Write a code to find diameter, circumference and area of a circle.

// Input the radius of the circle
let radius = parseFloat(prompt("Enter the radius of the circle:"));

// Calculate the diameter, circumference, and area
let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * Math.pow(radius, 2);

// Display the results
console.log(`Diameter of the circle is: ${diameter}`);
console.log(`Circumference of the circle is: ${circumference.toFixed(4)}`);
console.log(`Area of the circle is: ${area.toFixed(4)}`);