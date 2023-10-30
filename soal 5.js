// Write a code to get difference between dates in days.

// Input the two dates as strings in the format 'YYYY-MM-DD'
let date1Str = prompt("Enter the first date (YYYY-MM-DD):");
let date2Str = prompt("Enter the second date (YYYY-MM-DD):");

// Convert the date strings to Date objects
let date1 = new Date(date1Str);
let date2 = new Date(date2Str);

// Calculate the time difference in milliseconds
let timeDifference = date2 - date1;

// Calculate the number of days by dividing the time difference by the number of milliseconds in a day
let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Display the difference in days
console.log(`The difference between the two dates is: ${daysDifference} days`);