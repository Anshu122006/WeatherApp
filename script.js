let myKey = "44be5cc3c15e4a3c98354732241012";
let aqi = "yes";
let BASE_URL = "https://api.weatherapi.com/v1/current.json";
let t = "&nbsp;&nbsp;";
// let sampleUrl = `${BASE_URL}?key=${myKey}&q=${cityName}&aqi=${yes/no}`;
let dataBox = document.querySelectorAll(".dataBox");
let input = document.querySelector("header input");
let searchButton = document.querySelector("header button");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let active = 2;

// for (let box of dataBox) {
//   box.addEventListener("mouseover", () => {
//     box.classList.add("mouseOver");
//   });
//   box.addEventListener("mouseout", () => {
//     box.classList.remove("mouseOver");
//   });
// }

async function getData() {
  let url = `https://api.weatherapi.com/v1/current.json?key=44be5cc3c15e4a3c98354732241012&q=Bhagalpur&aqi=yes`;
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}

async function getRain() {
  let cityName = input.value;
  let box = dataBox[0];
  let icon = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
  let url = `https://api.weatherapi.com/v1/current.json?key=${myKey}&q=${cityName}&aqi=${aqi}`;
  let response = await fetch(url);
  let data = await response.json();
  let head = document.createElement("p");
  let image = document.createElement("img");
  let itext = document.createElement("p");
  let foot = document.createElement("p");
  let prepM = data.current.precip_mm;
  head.innerHTML = `${icon} Rainfall :${data.current.precip_in}in / ${data.current.precip_mm}mm `;
  if (prepM <= 6) image.src = "./rain/clear.png";
  else if (data.current.is_day) image.src = "./rain/rainDay.png";
  else image.src = "./rain/rainNight.png";
  itext.innerText = `Weather is ${data.current.condition.text}, with humidity of ${data.current.humidity}. `;
  foot.innerHTML = `last-updated: ${data.current.last_updated} <br /> lat: ${data.location.lat}, long: ${data.location.lon}<br />Region: ${data.location.name}, ${data.location.region} <br />country: ${data.location.country}`;
  if (box.querySelector(".head p")) box.querySelector(".head p").remove();
  if (box.querySelector(".image img")) box.querySelector(".image img").remove();
  if (box.querySelector(".image p")) box.querySelector(".image p").remove();
  if (box.querySelector(".foot p")) box.querySelector(".foot p").remove();
  box.querySelector(".head").append(head);
  box.querySelector(".image").append(image);
  box.querySelector(".image").append(itext);
  box.querySelector(".foot").append(foot);
}

async function getWind() {
  let cityName = input.value;
  let box = dataBox[1];
  let icon = `<i class="fa-solid fa-wind"></i>`;
  let url = `https://api.weatherapi.com/v1/current.json?key=${myKey}&q=${cityName}&aqi=${aqi}`;
  let response = await fetch(url);
  let data = await response.json();
  let head = document.createElement("p");
  let image = document.createElement("img");
  let itext = document.createElement("p");
  let foot = document.createElement("p");
  let speedMph = data.current.wind_mph;
  head.innerHTML = `${icon} Wind-speed :${data.current.wind_kph}kph / ${data.current.wind_mph}mph`;
  if (speedMph <= 25) image.src = "./wind/slow.png";
  else image.src = "./wind/fast.png";
  itext.innerText = `Wind-direction is ${data.current.wind_dir}, with a  gust-speed of ${data.current.gust_kph}kph and wind temperature of ${data.current.windchill_c}C .`;
  foot.innerHTML = `last-updated: ${data.current.last_updated} <br /> lat: ${data.location.lat}, long: ${data.location.lon}<br />Region: ${data.location.name}, ${data.location.region} <br />country: ${data.location.country}`;
  if (box.querySelector(".head p")) box.querySelector(".head p").remove();
  if (box.querySelector(".image img")) box.querySelector(".image img").remove();
  if (box.querySelector(".image p")) box.querySelector(".image p").remove();
  if (box.querySelector(".foot p")) box.querySelector(".foot p").remove();
  box.querySelector(".head").append(head);
  box.querySelector(".image").append(image);
  box.querySelector(".image").append(itext);
  box.querySelector(".foot").append(foot);
}

async function getTemp() {
  let cityName = input.value;
  let box = dataBox[2];
  let icon = `<i class="fa-solid fa-temperature-three-quarters"></i>`;
  let url = `https://api.weatherapi.com/v1/current.json?key=${myKey}&q=${cityName}&aqi=${aqi}`;
  let response = await fetch(url);
  let data = await response.json();
  let head = document.createElement("p");
  let image = document.createElement("img");
  let itext = document.createElement("p");
  let foot = document.createElement("p");
  let tempC = data.current.temp_c;
  head.innerHTML = `${icon} Temperature :${data.current.temp_c}C / <br />${t} ${data.current.temp_f}F, feels like ${data.current.feelslike_c}`;
  if (tempC <= 15) image.src = "./temperature/low.png";
  else if (tempC <= 35) image.src = "./temperature/medium.png";
  else image.src = "./temperature/high.png";
  itext.innerText = `Weather is ${data.current.condition.text}, with a UV index of ${data.current.uv} and pressure of ${data.current.pressure_in} in.`;
  foot.innerHTML = `last-updated: ${data.current.last_updated} <br /> lat: ${data.location.lat}, long: ${data.location.lon}<br />Region: ${data.location.name}, ${data.location.region} <br />country: ${data.location.country}`;
  if (box.querySelector(".head p")) box.querySelector(".head p").remove();
  if (box.querySelector(".image img")) box.querySelector(".image img").remove();
  if (box.querySelector(".image p")) box.querySelector(".image p").remove();
  if (box.querySelector(".foot p")) box.querySelector(".foot p").remove();
  box.querySelector(".head").append(head);
  box.querySelector(".image").append(image);
  box.querySelector(".image").append(itext);
  box.querySelector(".foot").append(foot);
}

async function getAir() {
  let cityName = input.value;
  let box = dataBox[3];
  let icon = `<i class="fa-brands fa-cloudversify"></i>`;
  let url = `https://api.weatherapi.com/v1/current.json?key=${myKey}&q=${cityName}&aqi=${aqi}`;
  let response = await fetch(url);
  let data = await response.json();
  let head = document.createElement("p");
  let image = document.createElement("img");
  let itext = document.createElement("p");
  let foot = document.createElement("p");
  let aqiVal = data.current.air_quality["gb-defra-index"];
  head.innerHTML = `${icon} DAQI :${data.current.air_quality["gb-defra-index"]}, Cloud : ${data.current.cloud}`;
  if (aqiVal <= 3) image.src = "./air/clean-air.png";
  else if (aqiVal <= 6) image.src = "./air/moderate.png";
  else if (aqiVal <= 9) image.src = "./air/smoke.png";
  else image.src = "./air/highSmoke.png";
  itext.innerText = `Visibility is ${data.current.vis_km}km, with pm2.5 : ${data.current.air_quality.pm2_5} and pm10 : ${data.current.air_quality.pm10}.`;
  foot.innerHTML = `last-updated: ${data.current.last_updated} <br /> lat: ${data.location.lat}, long: ${data.location.lon}<br />Region: ${data.location.name}, ${data.location.region} <br />country: ${data.location.country}`;
  if (box.querySelector(".head p")) box.querySelector(".head p").remove();
  if (box.querySelector(".image img")) box.querySelector(".image img").remove();
  if (box.querySelector(".image p")) box.querySelector(".image p").remove();
  if (box.querySelector(".foot p")) box.querySelector(".foot p").remove();
  box.querySelector(".head").append(head);
  box.querySelector(".image").append(image);
  box.querySelector(".image").append(itext);
  box.querySelector(".foot").append(foot);
}

getTemp();
getRain();
getWind();
getAir();

searchButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  getTemp();
  getRain();
  getWind();
  getAir();
});

function showBoxes() {
  dataBox[active].style.transform = `none`;
  dataBox[active].style.zIndex = 1;
  dataBox[active].style.filter = "none";
  dataBox[active].style.opacity = 1;
  let stt = 0;
  for (let i = active + 1; i < dataBox.length; i++) {
    stt++;
    let t = 120 * stt;
    let s = 1 - 0.2 * stt;
    dataBox[
      i
    ].style.transform = `translateX(${t}px) scale(${s}) perspective(16px) rotateY(-1deg)`;
    dataBox[i].style.zIndex = -stt;
    dataBox[i].style.filter = "blur(5px)";
    dataBox[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for (let i = active - 1; i >= 0; i--) {
    stt++;
    let t = 120 * stt;
    let s = 1 - 0.2 * stt;
    dataBox[
      i
    ].style.transform = `translateX(${-t}px) scale(${s}) perspective(16px) rotateY(1deg)`;
    dataBox[i].style.zIndex = -stt;
    dataBox[i].style.filter = "blur(5px)";
    dataBox[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}
showBoxes();
next.addEventListener("click", () => {
  active = active + 1 < dataBox.length ? active + 1 : active;
  showBoxes();
});
prev.addEventListener("click", () => {
  active = active - 1 >= 0 ? active - 1 : active;
  showBoxes();
});
