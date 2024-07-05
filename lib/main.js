// @filename: main.js

import SvgCloudy from './icons/SvgCloudy.js';
import SvgClear from './icons/SvgClear.js';
import SvgRainy from './icons/SvgRainy.js';
import SvgSnowy from './icons/SvgSnowy.js';

const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutPut = document.querySelector('.date');
const timeOutPut = document.querySelector('.time');
const conditionOutPut = document.querySelector('.condition');
const nameOutPut = document.querySelector('.name');
const icon = document.getElementById('svg-container');
const cloudOutPut = document.querySelector('.cloud');
const humidityOutPut = document.querySelector('.humidity');
const windOutPut = document.querySelector('.wind');
const form = document.getElementById('locationInput');
const searchOutPut = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city');

/**
 * Dia de la semana.
 * @param {number} day - dia
 * @param {number} month - mes
 * @param {number} year - año
 * @returns {string} dia de la semana
*/
export const dayOfTheWeek = (day, month, year) => {
    const weekDay = ["Domingo","Lunes","Martes","Miercoles","Jueves","viernes","Sabado"];
    //console.log(new Date(`${day}/${month}/${year}`).getDay(), new Date(`${day}/${month}/${year}`));
    return weekDay[new Date(`${day}/${month}/${year}`).getDay()];
}

/**
 * Obtiene las estadisticas del clima en el dia.
*/
export const fetchWeatherData = (cityInput) => {
    if (!cityInput) {
        alert('Ciudad no encontrada');
        return;
    }

    fetch(`http://api.weatherapi.com/v1/current.json?key=781a2f12506d41bf94f162257240207&q=${cityInput}&aqi=no`)
    .then(respone => respone.json())
    .then(data => {
        //console.log(data);
        temp.innerHTML = data.current.temp_c + "°";
        conditionOutPut.innerHTML = data.current.condition.text;
        const date = data.location.localtime;
        //console.log(date);
        const year = parseInt(date.substr(0,4));
        const month = parseInt(date.substr(5,2));
        const day = parseInt(date.substr(8,2));
        const time = date.substr(11);
        dateOutPut.innerHTML = `${dayOfTheWeek(day, month, year)} ${day}, ${month} ${year}`;
        timeOutPut.innerHTML = time;

        nameOutPut.innerHTML = data.location.name;
        // const iconId = '';
        cloudOutPut.innerHTML = data.current.cloud + "%";
        humidityOutPut.innerHTML = data.current.humidity + "%";
        windOutPut.innerHTML = data.current.wind_kph + "%";

        let timeOfDay = (data.current.is_day)?'day':'night';
        const code = data.current.condition.code;
        const codeListCloudy = [1003, 1006, 1009, 1030, 1069, 1087, 1135, 1273, 1276, 1279, 1282];
        const codeListRainy = [1063, 1069, 1072, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1204, 1207, 1240, 1243, 1246, 1249, 1252];

        const panel = document.querySelector('.panel');
        if (data.current.is_day) {
            app.classList.add('day');
            app.classList.remove('night');
            panel.classList.add('day');
            panel.classList.remove('night');
        } else {
            app.classList.add('night');
            app.classList.remove('day');
            panel.classList.add('night');
            panel.classList.remove('day');
        }


        let svgFill = (data.current.is_day)?'#000':'#fff';

        if (code === 1000) {
            app.style.backgroundImage = `url(./assets/img/${timeOfDay}/bg-clear.jpg)`;
            btn.style.background = (timeOfDay === 'day')?'#e5ba92':'#181e27';
            icon.innerHTML = SvgClear({width: 50, height: 50, fill: svgFill});
        } else if (codeListCloudy.includes(code)) {
            app.style.backgroundImage = `url(./assets/img/${timeOfDay}/bg-cloudy.jpg)`;
            btn.style.background = (timeOfDay === 'day')?'#fa6d1b':'#181e27';
            icon.innerHTML = SvgCloudy({width: 50, height: 50, fill: svgFill});
        } else if (codeListRainy.includes(code)) {
            app.style.backgroundImage = `url(./assets/img/${timeOfDay}/bg-rainy.jpg)`;
            btn.style.background = (timeOfDay === 'day')?'#647d75':'#325c80';
            icon.innerHTML = SvgRainy({width: 50, height: 50, fill: svgFill});
        } else {
            app.style.backgroundImage = `url(./assets/img/${timeOfDay}/bg-snowy.jpg)`;
            btn.style.background = (timeOfDay === 'day')?'#4d72aa':'#1b1b1b';
            icon.innerHTML = SvgSnowy({width: 50, height: 50, fill: svgFill});
        }
        app.style.opacity = "1";
    })
    .catch(() => {
        alert('Ciudad no encontrada');
        app.style.opacity = "1";
    })
    
    //fetchWeatherData();
    app.style.opacity = "1";
}