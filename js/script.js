//Array of quotes to be randomly chosen

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
        tag: "movie",
    },
    {
        quote: "Denial is the most predictable of all human responses",
        source: "The Architect",
        citation: "The Matrix Reloaded",
        year: 2003,
        tag: "movie",
    },
]


// Code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    let randomNum = Math.floor(Math.random() * max);
    return randomNum;
}

// Randomly choose the quote using the index number in the array, and return the chosen quote object
function getRandomQuote(obj) {
    const randomQuoteIndex = getRandomInt(quotes.length)
    for (key in obj) {
        let randomQuote = obj[randomQuoteIndex];
        return randomQuote;
    }
}

// Print the quote to the webpage
function printQuote() {
  const quote = getRandomQuote(quotes);
  let html = `<p class="quote">${quote["quote"]}</p><p class="source">${quote["source"]}`;
  if (quote["citation"] && quote["year"]) {
      html += `<span class="citation">${quote["citation"]}</span><span class="year">${quote["year"]}</span>`;
  } else if (quote["citation"]) {
      html += `<span class="citation">${quote["citation"]}</span>`
  } else if (quote["year"]) {
      html += `<span class="year">${quote["year"]}</span>`;
  }
  if (quote["tag"]) {
      html += `<br><small>*${quote["tag"]}</small>`;
  }
  html += "</p>";
  document.getElementById('quote-box').innerHTML = html;
  document.body.style.backgroundColor = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`; // generates 3 random rgb values
}

// Set printQuote() to run every 10 seconds automatically
setInterval(printQuote, 10000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);