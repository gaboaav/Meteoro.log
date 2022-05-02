(function (window) {
  let botones = {};
  botones.botonDerecho = (start, end, ul, li) => {
    lenList = li.length;
    let dif = lenList % end;

    if (end === lenList) {
      return [start, end];
    }
    if (ul.offsetWidth > 1100) {
      for (let i = start; i < end; i++) {
        li[i].style.display = 'none';
      }
      if (end + 4 > lenList) {
        start -= 4 - dif;
        end -= 4 - dif;
      }
      start += 4;
      end += 4;
      for (let i = start; i < end; i++) {
        li[i].style.display = 'flex';
      }
      return [start, end];
    } else if (ul.offsetWidth <= 1100 && ul.offsetWidth > 500) {
      for (let i = start; i < end - 1; i++) {
        li[i].style.display = 'none';
      }

      if (end + 3 > lenList) {
        start -= 3 - dif;
        end -= 3 - dif;
      }
      start += 3;
      end += 3;
      for (let i = start; i < end - 1; i++) {
        li[i].style.display = 'flex';
      }
      return [start, end];
    } else if (ul.offsetWidth <= 500) {
      for (let i = start; i < end - 2; i++) {
        li[i].style.display = 'none';
      }
      if (end + 2 > lenList) {
        start -= 2 - dif;
        end -= 2 - dif;
      }
      start += 2;
      end += 2;
      for (let i = start; i < end - 2; i++) {
        li[i].style.display = 'flex';
      }
      return [start, end];
    }
  };
  botones.botonIzquierdo = (start, end, ul, li) => {
    lenList = li.length;
    if (start === 0) {
      return [start, end];
    }
    if (ul.offsetWidth > 1100) {
      for (let i = start; i < end; i++) {
        li[i].style.display = 'none';
      }
      if (start < 4 && start != 0) {
        start = 4;
        end = 8;
      }
      start -= 4;
      end -= 4;
      for (let i = start; i < end; i++) {
        li[i].style.display = 'flex';
      }
      return [start, end];
    } else if (ul.offsetWidth <= 1100 && ul.offsetWidth > 500) {
      for (let i = start; i < end - 1; i++) {
        li[i].style.display = 'none';
      }
      if (start - 3 < 3) {
        start = 3;
        end = 7;
      }
      start -= 3;
      end -= 3;
      for (let i = start; i < end - 1; i++) {
        li[i].style.display = 'flex';
      }
      return [start, end];
    } else if (ul.offsetWidth <= 500) {
      for (let i = start; i < end - 2; i++) {
        li[i].style.display = 'none';
      }
      if (start - 2 < 2) {
        start = 2;
        end = 6;
      }
      start -= 2;
      end -= 2;
      for (let i = start; i < end - 2; i++) {
        li[i].style.display = 'flex';
      }
      return [start, end];
    }
  };
  window.botones = botones;
})(window);
