let container = document.querySelector('.container');
let gridButton = document.querySelector('#submit-grid');
let cleargridButton = document.querySelector('#clear-grid');
let gridWidth = document.querySelector('#width-range');
let gridHeight = document.querySelector('#height-range');
let colorButton = document.querySelector('#color-input');
let eraseButton = document.querySelector('#erase-btn');
let paintBtn = document.querySelector('#paint-btn');
let widthValue = document.querySelector('#width-value');
let heightValue = document.querySelector('#height-value');

let events = {
      mouse: {
            down: 'mousedown',
            move: 'mousemove',
            up: 'mouseup'
      },
      touch: {
            down: 'touchstart',
            move: 'touchmove',
            up: 'touchend'
      }
};

let deviceType = '';
let draw = false;
let erase = false;

const isTouchDevice = () => {
      try {
            document.createEvent('TouchEvent');
            deviceType = 'touch';
            return true;
      } catch (e) {
            deviceType = 'mouse';
            return false;
      }
};

isTouchDevice();

gridButton.addEventListener("click", () => {
      container.innerHTML = "";
      let count = 0;
      for (let i = 0; i < gridWidth.value; i++) {
            let div = document.createElement('div');
            div.classList.add('gridRow');

            for (let j = 0; j < gridHeight.value; j++) {
                  count++;
                  let col = document.createElement('div');
                  col.classList.add('gridCol');
                  col.setAttribute('id', `gridCol${count}`);
                  col.addEventListener(events[deviceType].down, () => {
                        draw = true;
                        if (erase) {
                              col.style.backgroundColor = "transparent";
                        } else {
                              col.style.backgroundColor = colorButton.value;
                        }
                  });
                  col.addEventListener(events[deviceType].move, (e) => {
                        if (draw) {
                              let elementId = document.elementFromPoint(
                                    !isTouchDevice() ? e.clientX : e.touches[0].clientX,
                                    !isTouchDevice() ? e.clientY : e.touches[0].clientY
                              ).id;
                              checker(elementId);
                        }
                  });

                  col.addEventListener(events[deviceType].up, () => {
                        draw = false;
                  });
                  div.appendChild(col);
            }

            container.appendChild(div);
      }
});

function checker(elementId) {
      let gridColumns = document.querySelectorAll('.gridCol');
      gridColumns.forEach((element) => {
            if (elementId === element.id) {
                  if (draw && !erase) {
                        element.style.backgroundColor = colorButton.value;
                  } else if (draw && erase) {
                        element.style.backgroundColor = 'transparent';
                  }
            }
      });
}

cleargridButton.addEventListener('click', () => {
      container.innerHTML = "";
});

eraseButton.addEventListener('click', () => {
      erase = true;
});

paintBtn.addEventListener('click', () => {
      erase = false;
});

gridWidth.addEventListener("input", () => {
      widthValue.innerHTML = gridWidth.value < 10 ? `0${gridWidth.value}` : gridWidth.value;
});

gridHeight.addEventListener('input', () => {
      heightValue.innerHTML = gridHeight.value < 10 ? `0${gridHeight.value}` : gridHeight.value;
});

document.addEventListener(events[deviceType].up, () => {
      draw = false;
});

window.onload = () => {
      gridHeight.value = 0;
      gridWidth.value = 0;
      widthValue.innerHTML = "00";
      heightValue.innerHTML = "00";
};