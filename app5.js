async function getRandomJoke() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        // Chỉ log thuộc tính 'value' ra console theo yêu cầu
        console.log(data.value); 
    } catch (error) {
        console.error("Error:", error);
    }
}

getRandomJoke();
