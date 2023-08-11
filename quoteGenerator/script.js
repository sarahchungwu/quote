const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes = []

// show Loading
function loading() {
  loader.hidden = false
  quoteContainer.hidden = true
}

// Hide Loading
function complete() {
  quoteContainer.hidden = false
  loader.hidden = true
}

//Show New Quote
function newQuote() {
  loading()
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  const { author, text } = quote

  authorText.textContent = author || 'Unknown'
  quoteText.classList.toggle('long-quote', text.length > 100)

  // Set Quote, Hide Loader
  quoteText.textContent = text
  complete()
}

// Get Quotes From API
async function getQuote() {
  try {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    const res = await fetch(apiUrl)
    apiQuotes = await res.json()
    console.log(apiQuotes)
    newQuote()
  } catch (error) {}
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
  window.open(twitterUrl, '_blank')
}

// Event Listener
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

//OnLoad
getQuote()
