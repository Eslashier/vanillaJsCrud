const fetchQuote = async () => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
    return data[0];
}

export const BreakingbadApp = async(element) => {
    document.querySelector('#app-title').innerHTML = 'Breakingbad Application';
    element.innerHTML = 'Loading...';

    const quoteLabel = document.createElement('blockQuote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    nextQuoteButton.addEventListener('click', async () =>{
        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote(quote);
    })

    const renderQuote = (quote) => {
        quoteLabel.innerText = quote.quote;
        authorLabel.innerText = quote.author
        element.replaceChildren( quoteLabel, authorLabel, nextQuoteButton)
    };

    fetchQuote().then(renderQuote)
}