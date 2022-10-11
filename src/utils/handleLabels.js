export const handleLabels = elements => {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]
    const target = document.querySelector(`p.${element} label`)
    const inputValue = document.querySelector(`input#${element}`).value
    const isFocused = document.querySelector(`input#${element}`) === document.activeElement
    target.style.top = inputValue || isFocused ? '0px' : '35px'
    target.style.cursor = inputValue ? 'text' : 'default'
  }
}
