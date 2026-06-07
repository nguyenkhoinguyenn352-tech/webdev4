const form = document.querySelector('form');
const jokeResultsDiv = document.getElementById('joke-results');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const valueFromInput = document.getElementById('joke-query').value;
    const url = `https://api.chucknorris.io/jokes/search?query=${valueFromInput}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        jokeResultsDiv.innerHTML = ''; // Clear kết quả cũ

        // Render theo cấu trúc: <article><p>Joke here</p></article>
        data.result.forEach(joke => {
            const article = document.createElement('article');
            const p = document.createElement('p');
            p.textContent = joke.value;
            
            article.appendChild(p);
            jokeResultsDiv.appendChild(article);
        });
    } catch (error) {
        console.error("Error:", error);
    }
});
