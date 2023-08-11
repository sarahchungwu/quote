let apiQuotes = []
// Get Quotes From API

async function getQuote() {
  try {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    const res = await fetch(apiUrl)
    apiQuotes = await res.json()
    console.log(apiQuotes)
  } catch (error) {}
}

//OnLoad
getQuote()
