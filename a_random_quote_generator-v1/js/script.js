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

const quoteCollection = [
    {
        quote: "To be or not to be",
        source: "William Shakespeare",
        year: 1892,
    },
    {
        quote: "He who whatever whatever",
        source: "Whoever Whoeverenstein",
        year: "1993",
    },
]

/***
 * `getRandomQuote` function
***/

function randomQuote(obj) {
    for (key in obj) {
        return obj[key];
    }
}

/***
 * `printQuote` function
***/

console.log(randomQuote(quoteCollection));

document.querySelector("#quote-box").innerHTML = "testing";

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);