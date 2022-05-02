function setTime() {
  const now = new Date();

  let time = document.querySelectorAll('.time');

  let hora = now.getHours();
  let minutos = now.getMinutes();
  let segundos = now.getSeconds();

  const tiempo = `${format(hora)}:${format(minutos)}:${format(segundos)}`;
  for (let t of time) {
    t.textContent = tiempo;
  }
  setTimeout('setTime()', 1000);
}

function format(num) {
  if (num < 10) num = '0' + num;
  return num;
}
setTime();
