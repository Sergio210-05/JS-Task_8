let index = 0;

document.addEventListener('scroll', () => {
  let reveal = document.querySelectorAll('div.reveal')

  Array.from(reveal).forEach((block) => {
    let {top, bottom} = block.getBoundingClientRect()
    console.log(top, bottom, window.innerHeight, index)
    if (top < window.innerHeight && bottom < window.innerHeight && bottom >= 0 ) {
      block.classList.add('reveal_active')
    } else {
      block.classList.remove('reveal_active')
    }
  })
})

