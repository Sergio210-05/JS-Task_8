
const rotators = document.querySelectorAll('span.rotator')

Array.from(rotators).forEach((rotator) => {
  let rotatorCases = rotator.querySelectorAll('span.rotator__case')
  len = Array.from(rotatorCases).length
  let step = 0;
  let index;
  let speed = 1000;
  let circle = setInterval(() => {
    index = step % len;
    Array.from(rotatorCases).forEach((rotatorCase) => {
      rotatorCase.classList.remove('rotator__case_active')
    })
    speed = +rotatorCases[index].getAttribute('data-speed');
    let fontColor = rotatorCases[index].getAttribute('data-color');
    rotatorCases[index].classList.add('rotator__case_active')
    rotatorCases[index].style.color = fontColor;
    ++step;
  }, speed) // спросить как сделать переменный интервал
})