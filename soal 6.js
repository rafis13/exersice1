// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).

// Input the number of days
let days = parseInt(prompt("Enter the number of days:"));

// Calculate years, months, and remaining days
let years = Math.floor(days / 365);
let remainingDays = days % 365;
let months = Math.floor(remainingDays / 30);
remainingDays = remainingDays % 30;

// Display the result
console.log(`${days} days is approximately equal to ${years} year(s), ${months} month(s), and ${remainingDays} day(s).`);