const form = document.querySelector('form');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const valueFromInput = document.getElementById('query').value;
    const url = `https://api.tvmaze.com/search/shows?q=${valueFromInput}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); // In kết quả ra console
    } catch (error) {
        console.error("Error:", error);
    }
});
