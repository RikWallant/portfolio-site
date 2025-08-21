const button = document.getElementById("new-quote"); // Find the button

const quoteDisplay = document.getElementById("quote-display");

button.addEventListener('click', function () { // Add an event listener

    const randomIndex = Math.floor(Math.random() * quotes.length);  // 1. Pick a random index

    const randomQuote = quotes[randomIndex];   // 2. Get the quote

    quoteDisplay.textContent = randomQuote;   // 3. Display it in the paragraph
});

const quotes = ["You’ve got this", "Keep moving forward", "Start before you’re ready", "Dare to begin", "Make it happen", "Stay hungry, stay foolish"]; 





