const updateClasses = (querySelector, theme) => {
  document.querySelectorAll(querySelector).forEach((button) => {
    button.classList.forEach((item) => {
      if (!item.startsWith('theme')) {
        console.log(item + 'asdfasdf')
      }
      button.classList.remove(item)
    })
    button.classList.add(theme)
  })
}

export default { updateClasses }
