export const removeLinks = () => {
  const imageLinks = document?.querySelectorAll('.table.cart-items .product-image a')|| []
  const pNameLinks = document?.querySelectorAll('.table.cart-items .product-name a') || []

  if (imageLinks.length && pNameLinks.length) {
    const pdpLinks = [...imageLinks, ...pNameLinks]
    console.log({ pdpLinks })

    pdpLinks.forEach(link => {
      link.setAttribute('href', 'javascript:(0)')
      link.style.cursor = 'default'
    })
  }
}
