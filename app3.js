const form = document.querySelector('form');
const resultsDiv = document.getElementById('results');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const valueFromInput = document.getElementById('query').value;
    const url = `https://api.tvmaze.com/search/shows?q=${valueFromInput}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        resultsDiv.innerHTML = ''; // Clear old results

        data.forEach(tvShow => {
            const show = tvShow.show;
            const article = document.createElement('article');

            // Name (h2)
            const h2 = document.createElement('h2');
            h2.textContent = show.name;
            article.appendChild(h2);

            // Link (a)
            const a = document.createElement('a');
            a.href = show.url;
            a.target = '_blank';
            a.textContent = 'View Details';
            article.appendChild(a);

            // Image (Dùng Optional Chaining `?.` theo yêu cầu bài 3)
            const img = document.createElement('img');
            img.src = show.image?.medium; 
            img.alt = show.name;
            article.appendChild(img);

            // Summary (div)
            const summaryDiv = document.createElement('div');
            summaryDiv.innerHTML = show.summary;
            article.appendChild(summaryDiv);

            resultsDiv.appendChild(article);
        });
    } catch (error) {
        console.error("Error:", error);
    }
});
