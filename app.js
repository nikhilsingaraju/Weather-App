
// const url='https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=2ad708635531dc30a8b91d0f5dec20a6'
// const defa='https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=2ad708635531dc30a8b91d0f5dec20a6'




let weather={
    'api': '2ad708635531dc30a8b91d0f5dec20a6',
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=2ad708635531dc30a8b91d0f5dec20a6&units=metric").then((response)=>response.json()).then((data)=>this.displayWeather(data))

    },
    displayWeather:function(data){
        const {name}=data;
        const {icon,description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed)

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp+" °C";
        document.querySelector(".humidity").innerText = "Humidity: "+humidity +" %";
        document.querySelector(".speed").innerText = "Wind Speed: "+speed+" Km/hr";

    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);

    }
}
document.querySelector(".search button").addEventListener('click',function(){
weather.search();
})

// Disable right click
document.addEventListener('contextmenu', event => event.preventDefault());