let index = 0;

// document.addEventListener('scroll', () => {
//   let reveal = document.querySelectorAll('div.reveal')
//   let {top, bottom} = reveal[index].getBoundingClientRect()
//   const len = Array.from(reveal).length
//   console.log(top, bottom, window.innerHeight, index)

//   if (top < window.innerHeight && bottom < window.innerHeight && bottom >= 0 ) {
//     reveal[index].classList.add('reveal_active')
//   } else if (bottom < 0) {
//     index = Math.min(len - 1, index + 1)
//   } else if (top >= 0) {
//     index = Math.max(0, index - 1)
//   } else {
//     reveal.classList.remove('reveal_active')
//     // reveal = document.querySelectorAll('div.reveal')[++index]
//   }
// })


// const reveal = document.querySelectorAll('div.reveal')

// Array.from(reveal).forEach((block) => {
//   let {top, bottom} = block.getBoundingClientRect()
//   document.addEventListener('scroll', () => {
//     console.log(top, bottom, window.innerHeight)
//     if (top < window.innerHeight && bottom < window.innerHeight && bottom >= 0 ) {
//       block.classList.add('reveal_active')
//     } else {
//       block.classList.remove('reveal_active')
//     }
//   })
// })


document.addEventListener('scroll', () => {
  let reveal = document.querySelectorAll('div.reveal')

  Array.from(reveal).forEach((block) => {
    let {top, bottom} = block.getBoundingClientRect()
    // const len = Array.from(reveal).length
    console.log(top, bottom, window.innerHeight, index)
    if (top < window.innerHeight && bottom < window.innerHeight && bottom >= 0 ) {
      block.classList.add('reveal_active')
    } else {
      block.classList.remove('reveal_active')
    }
  })
})

