const successCallback = async (position) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${
      position.coords.latitude
    }&lon=${
      position.coords.longitude
    }&appid=${'0541391cd45698b1ab649a30abf322c3'}`
  );
  const data = await response.json();

  let timestampClimate = actualTemp.timestampClimate(data);

  tempXHora.createLi(timestampClimate);
  tempXHora.display();
  setTimeout(function () {
    let rain = llovera(timestampClimate);
    if (Number.isInteger(rain)) {
      window.alert(
        `!Cuidado¡ Lloverá en las proximas 8 horas. ${hf(
          timestampClimate[rain].hour
        )}`
      );
    } else {
      window.alert('No lloverá en las proximas 8 horas.');
    }
  }, 1000);
};
const errorCallback = (error) => console.error(error);

const kToC = (K) => Math.round(K - 273.15);
const hf = (h) => {
  if (h < 10) {
    return `0${h}:00`;
  } else {
    return `${h}:00`;
  }
};
const imgDescription = (description) => {
  if (description === 'clear sky') {
    return 'img/clear-sky.png';
  } else if (
    description === 'overcast clouds' ||
    description === 'scattered clouds'
  ) {
    return 'img/overcast-clouds.png';
  } else if (description === 'broken clouds' || description === 'few clouds') {
    return 'img/broken-clouds.svg.png';
  } else {
    return 'img/imagen1.png';
  }
};

const llovera = (tp) => {
  for (let i = 0; i < 8; i++) {
    rain = tp[i].weather.includes('rain');
    if (rain) {
      return i;
    }
  }
};

const body = document.querySelector('body');
body.style.height = `${window.innerHeight}px`;

const button = document.querySelector('.init');
const h = document.querySelector('.hide');
button.addEventListener('click', function (event) {
  const page = document.querySelector('.meteorologo');
  button.classList.add('start');
  button.addEventListener('animationend', function (event) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
      timeout: 5000,
    });
    h.style.display = 'none';
    page.style.display = 'block';
    body.style.height = 'auto';
  });
});
