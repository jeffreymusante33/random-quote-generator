/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
    {
        quote: "The purpose of our lives is to be happy.",
        source: "Dalai Lama",
    },
    {
        quote: "Life is what happens when you’re busy making other plans.",
        source: "John Lennon",
    },
    {
        quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        source: "Thomas A. Edison",
    },
    {
        quote: "It’s Only After We’ve Lost Everything That We’re Free To Do Anything.",
        source: "Tyler Durden",
        citation: "Fight Club",
        year: 1999,
    },
    {
        quote: "Denial is the most predictable of all human responses",
        source: "The Architect",
        citation: "The Matrix Reloaded",
        year: 2003,
    },
]

console.log(quotes);

// Code tweaked from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    let randomNum = Math.floor(Math.random() * max);
    return randomNum;
}

const randomNumber = getRandomInt(quotes.length)

console.log(randomNumber);
/***
 * `getRandomQuote` function
***/

function getRandomQuote(obj) {
    for (key in obj) {
        let randomQuote = randomNumber;
        return obj[randomQuote][key];
    }
}

console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
***/

function printQuote() {
  document.querySelector(".quote").innerHTML = getRandomQuote(quotes);
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);