const form = document.querySelector('form');
const resultsDiv = document.getElementById('results');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const valueFromInput = document.getElementById('query').value;
    const url = `https://api.tvmaze.com/search/shows?q=${valueFromInput}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        resultsDiv.innerHTML = '';

        data.forEach(tvShow => {
            const show = tvShow.show;
            const article = document.createElement('article');

            const h2 = document.createElement('h2');
            h2.textContent = show.name;
            article.appendChild(h2);

            const a = document.createElement('a');
            a.href = show.url;
            a.target = '_blank';
            a.textContent = 'View Details';
            article.appendChild(a);

            // CÂU 4: Dùng Ternary Operator xử lý ảnh thiếu
            const img = document.createElement('img');
            img.src = show.image ? show.image.medium : 'https://placeholder.co/210x295?text=Not%20Found';
            img.alt = show.name;
            article.appendChild(img);

            const summaryDiv = document.createElement('div');
            summaryDiv.innerHTML = show.summary ? show.summary : '<p>No summary available.</p>';
            article.appendChild(summaryDiv);

            resultsDiv.appendChild(article);
        });
    } catch (error) {
        console.error("Error:", error);
    }
});
