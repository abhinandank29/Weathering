// the below template (few code lines) if from rapidApi's "ninja weather api"
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a0c017d304msha97c237f8ca3084p1b75e0jsnca28675fc77a',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

// for taking city as input from user
const Weather = (city)=> {
cityName.innerHTML = city
let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=` + city;

fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error('No weather found.');
        }
        return response.text();
    })
    .then(result => {
        result = JSON.parse(result)
        //   city.innerHTML = result.city
        
        temp.innerHTML = result.temp
        feels_like.innerHTML = result.feels_like
        humidity.innerHTML = result.humidity
        wind_speed.innerHTML = result.wind_speed

        // defining weather condition on the basis of temp and humid. You can use png or svg as per need
        if (result.temp > 25 && result.humidity > 70) {
            w_type.innerHTML = "Muggy(hot and humid)";
        } else if (result.temp < 10 && result.humidity < 50) {
            w_type.innerHTML = "Cold and Dry";
        } else {
            w_type.innerHTML = "Moderate";
        }

    })
    .catch(error => {
        console.error(error);
    });
}

// calling the defined dunction on clicking the search button
search.addEventListener("click", (e)=>{
    e.preventDefault()
    Weather(city.value)
})

// code to process entered city on pressing "Enter" key
document.getElementById('city').addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        Weather(city.value);
    }
});

// default city
Weather("Lucknow")