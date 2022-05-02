(function (window) {
  let actualTemp = {};
  actualTemp.timestampClimate = function (data) {
    let timezone = data.timezone;
    let timestampClimate = [];
    let i = 0;

    for (let hour of data.hourly) {
      let date = new Date(hour.dt * 1000);
      timestampClimate[i] = {
        hour: date.getHours(),
        temp: kToC(hour.temp),
        humidity: hour.humidity,
        feelsLike: kToC(hour.feels_like),
        weather: hour.weather[0].description,
      };
      if (i === 0) {
        let actual = document.querySelector('.actual');
        /////////////////////////////////////////
        const horaActual = document.createElement('h2');
        horaActual.className = 'time';
        actual.appendChild(horaActual);
        /////////////////////////////////////////
        const Lugar = document.createElement('h1');
        Lugar.textContent = timezone;
        actual.appendChild(Lugar);
        /////////////////////////////////////////
        const Fecha = document.createElement('h2');
        Fecha.textContent = setDate(date);
        actual.appendChild(Fecha);
        //////////////////////////////////////////
        const imgActual = document.createElement('img');
        imgActual.src = imgDescription(hour.weather[0].description);
        imgActual.width = 300;
        actual.appendChild(imgActual);
        //////////////////////////////////////////
        const Temperatura = document.createElement('h2');
        Temperatura.textContent = `T = ${kToC(hour.temp)} C°`;
        actual.appendChild(Temperatura);
      }
      i++;
    }
    return timestampClimate;
  };
  window.actualTemp = actualTemp;
})(window);
function setDate(now) {
  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Deciembre',
  ];
  const DayNames = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
  ];
  let Año = now.getFullYear();
  let Mes = monthNames[now.getMonth()];
  let Dia = now.getDate();
  let NombreDia = DayNames[now.getDay()];
  return `${NombreDia}, ${Dia} de ${Mes} del ${Año}`;
}
