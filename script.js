const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('searchbtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');


async function checkWeather(city){
    const api_key="ba54fa7445946eeb2af7c1fb6c902515";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(resonse=>resonse.json());
    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML= `${weather_data.main.humidity} %`;
    wind_speed.innerHTML= `${weather_data.wind.speed} Km /Hr`;
    console.log(weather_data);


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "cloud.png";
            document.body.style.backgroundImage = "url('rainb.jpg')";
            break;
        case 'Clear ':
            weather_img.src = "clear.png";
            document.body.style.backgroundImage = "url('blackcloud.jpg')";
            break;
        case 'Rain':
            weather_img.src = "rain.png";
            document.body.style.backgroundImage = "url('rainb.jpg')";
            break;
        case 'Mist':
            weather_img.src = "mist.png";
            document.body.style.backgroundImage = "url('rainb.jpg')";
            break;
        case 'Snow':
            weather_img.src = "snow.png";
            document.body.style.backgroundImage = "url('rainb.jpg')";
            break;

    }
    
}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});