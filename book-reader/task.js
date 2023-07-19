
const controlSize = Array.from(document.querySelector('.book__control_font-size').querySelectorAll('.font-size'))
const book = document.querySelector('.book')


controlSize.forEach((sizeButton) => {
  sizeButton.onclick = () => {
    controlSize.forEach((but) => {
      but.classList.remove('font-size_active')
    })
    sizeButton.classList.toggle('font-size_active')
    let getSize = sizeButton.getAttribute('data-size')
    let fontSizeClass = (getSize!==null) ? ' book_fs-' + getSize : ''
    book.className = 'book' + fontSizeClass;
    return false;
  }
})
