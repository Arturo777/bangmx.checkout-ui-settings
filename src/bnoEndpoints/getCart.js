const getAccessToken = require("./getAccessToken")
const compareProducts = require("../utils/compareProducts")
const removeLoadingSpinner = require("../utils/removeLoadingSpinner")

module.exports = async () => {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const cartId = urlParams.get('cartId')?.replace('/', '') || null

  if (!cartId) {
    if (sessionStorage.getItem('bnoItems')) {
      compareProducts()
    } else {
      console.log('No removed items for payments testing')
      // vtexjs.checkout.removeAllItems()
    }

    return removeLoadingSpinner()
  }

  sessionStorage.setItem('cartId', cartId)
  vtexjs.checkout.removeAllItems()
  const accessToken = await getAccessToken()

  fetch(`/BnOApi/getCart/${cartId}`, {
    method: 'GET',
    headers: {
      'X-B&O-API-AccessToken': accessToken
    }
  })
  .then(x => x.json())
  .then(cart => {
    if (!cart.lineItems) {
      // enviar a carrito vacio
      sessionStorage.removeItem('bnoItems')

      return window.location = 'checkout#/cart'
    }

    const { lineItems } = cart
    if (!lineItems.length) {
      sessionStorage.removeItem('bnoItems')
      return window.location = 'checkout#/cart'
    }

    const newUrlCart = lineItems.reduce((acc, el) => {
      return acc.concat(`sku=${el.sku}&qty=${el.quantity}&seller=1&sc=1&`)
    }, `/checkout/cart/add/?`)

    return {lineItems, newUrlCart, cartId}
  })
  .then(({lineItems, newUrlCart, cartId}) => {
    const bnoItems = lineItems.map(item => ({
      CartId: cartId,
      BNOSkuID: item.sku,
      BNOSkuName: item.variant.key,
      BNOPrice: item.price.value.centAmount || item.variant.prices[0].value.centAmount,
      BNOQuantity: item.quantity,
    }))

    sessionStorage.setItem('bnoItems', JSON.stringify(bnoItems))
    window.location = newUrlCart
  })
  .catch(error => {
    console.log({
      description: "Get cart error",
      error: error.message,
    })

    window.location = 'https://www.bang-olufsen.com/es/mx/cart'
  })
}
