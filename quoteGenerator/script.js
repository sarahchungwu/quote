const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

let apiQuotes = []

//Show New Quote
function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  const { author, text } = quote

  authorText.textContent = author || 'Unknown'
  quoteText.classList.toggle('long-quote', text.length > 100)
  quoteText.textContent = text
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

//OnLoad
getQuote()
