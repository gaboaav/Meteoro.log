(function (window) {
  var tempXHora = {};
  tempXHora.createLi = function (tp) {
    let historico = document.querySelector('.historico>ul');
    for (let i = 1; i < tp.length; i++) {
      let tiempoXHoras = document.createElement('li');
      /////////////////////////////////////////
      let horas = document.createElement('h2');
      let horaHistorico = tp[i].hour;
      if (horaHistorico < 10) {
        horaHistorico = '0' + horaHistorico;
      }
      horas.textContent = `${horaHistorico}:00`;
      tiempoXHoras.appendChild(horas);
      ///////////////////////////////////////
      let imgClima = document.createElement('img');
      imgClima.src = imgDescription(tp[i].weather);
      imgClima.width = 100;
      tiempoXHoras.appendChild(imgClima);
      ////////////////////////////////////////
      let descriptionClima = document.createElement('p');
      descriptionClima.textContent = tp[i].weather;
      tiempoXHoras.appendChild(descriptionClima);
      ////////////////////////////////////////
      let temperaturaHora = document.createElement('h3');
      temperaturaHora.textContent = `T = ${tp[i].temp} °C / ${tp[i].feelsLike} °C`;
      tiempoXHoras.appendChild(temperaturaHora);
      /////////////////////////////////////////
      historico.appendChild(tiempoXHoras);
    }
  };
  tempXHora.display = function () {
    const li = document.querySelectorAll('li');
    const ul = document.querySelector('ul');
    const init = document.querySelector('.init');
    let i = 0;
    [start, end] = create(ul, li, i);
    window.addEventListener('resize', function (event) {
      size(ul, li, start, end);
    });
    const botonD = document.querySelector('.Der');
    const botonI = document.querySelector('.Izq');
    if (start === 0) {
      botonD.style.visibility = 'visible';
      botonI.style.visibility = 'hidden';
    }
    botonD.addEventListener('click', function (event) {
      [start, end] = botones.botonDerecho(start, end, ul, li);
      if (end === li.length) {
        botonI.style.visibility = 'visible';
        botonD.style.visibility = 'hidden';
      } else {
        botonI.style.visibility = 'visible';
        botonD.style.visibility = 'visible';
      }
    });
    botonI.addEventListener('click', function (event) {
      [start, end] = botones.botonIzquierdo(start, end, ul, li);
      if (start === 0) {
        botonD.style.visibility = 'visible';
        botonI.style.visibility = 'hidden';
      } else if (end === li.length) {
        botonI.style.visibility = 'visible';
        botonD.style.visibility = 'hidden';
      } else {
        botonI.style.visibility = 'visible';
        botonD.style.visibility = 'visible';
      }
    });
  };
  window.tempXHora = tempXHora;
})(window);

function create(ul, li, i) {
  if (ul.offsetWidth > 1100) {
    for (let j = i; j <= 3; j++) {
      li[j].style.display = 'flex';
    }
    return [i, 4];
  } else if (ul.offsetWidth <= 1100 && ul.offsetWidth > 500) {
    for (let j = 0; j <= 2; j++) {
      li[j].style.display = 'flex';
    }
    return [i, 4];
  } else if (ul.offsetWidth <= 500) {
    for (let j = 0; j <= 1; j++) {
      li[j].style.display = 'flex';
    }
    return [i, 4];
  }
}

function size(ul, li, start, end) {
  if (ul.offsetWidth > 1100) {
    for (let j = start; j <= end - 1; j++) {
      li[j].style.display = 'flex';
    }
  } else if (ul.offsetWidth <= 1100 && ul.offsetWidth > 500) {
    if (li[end - 1].style.display == 'flex') {
      li[end - 1].style.display = 'none';
    }
    for (let j = start; j <= end - 2; j++) {
      li[j].style.display = 'flex';
    }
  } else if (ul.offsetWidth <= 500) {
    if (li[end - 2].style.display == 'flex') {
      li[end - 2].style.display = 'none';
    }
  }
}
