
const rotators = document.querySelectorAll('span.rotator')

function changer(rotatorCases, step, len) {
  let index = step % len;
  Array.from(rotatorCases).forEach((rotatorCase) => {
    rotatorCase.classList.remove('rotator__case_active')
  })
  let speed = +rotatorCases[index].getAttribute('data-speed');
  let fontColor = rotatorCases[index].getAttribute('data-color');
  rotatorCases[index].classList.add('rotator__case_active')
  rotatorCases[index].style.color = fontColor;
  ++step;
  let start = setTimeout(changer, speed, rotatorCases, step, len);
}

Array.from(rotators).forEach((rotator) => {
  let rotatorCases = rotator.querySelectorAll('span.rotator__case')
  const len = Array.from(rotatorCases).length;
  let step = 0;
  changer(rotatorCases, step, len);
})