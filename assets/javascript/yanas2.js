// Global vars
var generateButton = document.getElementById('generate-button');
var saveButton = document.getElementById('save-button');
var myFavButton = document.getElementById('myfav-button');
var quoteContainer = document.getElementById('quote-container');
var savedQuotesContainer = document.getElementById('saved-quotes-container');
var savedQuotesList = document.getElementById('saved-quotes-list');
var quoteElement = document.getElementById('quote');
var authorElement = document.getElementById('author');
var instructions = document.querySelector('.instructions');
var notification = document.getElementById('notification');


// API call
async function fetchRandomLoveQuote() {
    try {
        var response = await fetch('https://api.quotable.io/random?tags=love');
        if (!response.ok) {
            throw new Error('Failed to fetch quote from the API');
        }
        var data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// displaying a quote
function displayQuote(quote) {
    if (quote && quoteElement && authorElement) {
        quoteElement.textContent = `"${quote.content}"`;
        authorElement.textContent = `- ${quote.author}`;
        quoteContainer.style.display = 'block'; // Show the quote container
    } else {
        quoteElement.textContent = 'Failed to fetch a quote. Please try again later.';
        authorElement.textContent = '';
    }
}

// save a quote to local storage
function saveQuoteToLocalStorage(quote) {
    var savedQuotes = getSavedQuotesFromLocalStorage();
    savedQuotes.push(quote);
    localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
}

// get saved quotes from local storage
function getSavedQuotesFromLocalStorage() {
    var savedQuotes = JSON.parse(localStorage.getItem('savedQuotes'));
    return savedQuotes ? savedQuotes : [];
}

// display saved quotes
function displaySavedQuotes() {
    var savedQuotes = getSavedQuotesFromLocalStorage();
    savedQuotesList.innerHTML = ''; // clear previous content
    savedQuotes.forEach(savedQuote => {
        const savedQuoteElement = document.createElement('li');
        savedQuoteElement.className = 'saved-quote';
        savedQuoteElement.innerHTML = `
            <p>${savedQuote.content}</p>
            <p>${savedQuote.author}</p>
        `;
        savedQuotesList.appendChild(savedQuoteElement);
    });
    savedQuotesContainer.style.display = 'block'; // show the saved quotes container
}

// event listener for the "Generate Quote" button
generateButton.addEventListener('click', () => {
    fetchRandomLoveQuote().then(quote => {
        displayQuote(quote);
        instructions.style.display = 'none'; // hide instructions
        saveButton.style.display = 'inline-block'; // show the "Save Quote" button
        myFavButton.style.display = 'inline-block'; // show the "Favorite Quotes" button
    });
});

// event listener for the "Save Quote" button
saveButton.addEventListener('click', () => {
    var quote = {
        content: quoteElement.textContent,
        author: authorElement.textContent
    };
    saveQuoteToLocalStorage(quote);

    // notification is shown and hiden after a delay
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 1500); // hide the notification after 1.5 seconds
});

// Event listener for the "My Favorite Quotes" button
myFavButton.addEventListener('click', () => {
    displaySavedQuotes();
});

