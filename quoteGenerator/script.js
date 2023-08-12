const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes = []

// Show the loader and hide the quote container
function showLoadingSpinner() {
  loader.hidden = false
  quoteContainer.hidden = true
}

// Hide the loader and show the quote container
function hideLoadingSpinner() {
  quoteContainer.hidden = false
  loader.hidden = true
}

// Display a new random quote
function newQuote() {
  showLoadingSpinner()
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  const { author, text } = quote

  authorText.textContent = author || 'Unknown'
  quoteText.classList.toggle('long-quote', text.length > 100)
  quoteText.textContent = text

  // Hide the loader and show the quote
  hideLoadingSpinner()
}

// Fetch quotes from the API
async function getQuotes() {
  try {
    showLoadingSpinner()
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    const res = await fetch(apiUrl)
    apiQuotes = await res.json()
    newQuote()
  } catch (error) {
    hideLoadingSpinner()
    quoteText.textContent = 'Oops, something went wrong!'
    authorText.textContent = ''
  }
}

// Open a new window to tweet the current quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
  window.open(twitterUrl, '_blank')
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

// Fetch quotes on page load
getQuotes()
