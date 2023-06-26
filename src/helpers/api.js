export async function fetchMovieData(name) {
    try {
        const response = await fetch(
            `https://www.omdbapi.com/?t=${name}&apikey=c6f5e8f`
        );
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching movie data:', error);
        throw error;
    }
}

export async function fetchWeatherData(name) {
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=64496665a00347f79b6142640212112&q=${name}`
        );
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

export async function fetchImage(name) {
    try {
        const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${name}&client_id=optW2j7HJ65Jx2Erkmyq5tqSd1OUR8cBjlCkywe1Fe0`
        );
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching image data:', error);
        throw error;
    }
}
