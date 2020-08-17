const toggleChangeNameDisplay = (formName) => {
  let form = document.getElementsByClassName(formName)[0].style

  if (form.display == '' || form.display == 'none') form.display = 'block'
  else form.display = 'none'
}
