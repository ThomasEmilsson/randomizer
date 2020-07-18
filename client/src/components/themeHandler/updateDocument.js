const updateClasses = (querySelector, theme) => {
  document.querySelectorAll(querySelector).forEach((button) => {
    button.classList.forEach((item) => button.classList.remove(item))
    button.classList.add(theme)
  })
}

export default { updateClasses }
