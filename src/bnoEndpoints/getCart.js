import { getAccessToken } from "./getAccessToken"
import { compareProducts } from "../utils/compareProducts"
import { removeLoadingSpinner } from "../utils/removeLoadingSpinner"
import { getSkusByRefIds } from "../vtexAPI/getSkuByRefId"

export const getCart = async () => {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const cartId = urlParams.get('cartId')?.replace('/', '') || null
  const language = urlParams.get('language')?.replace('/', '') || null

  if (!cartId) {
    if (sessionStorage.getItem('bnoItems')) {
      compareProducts()
    } else {
      vtexjs.checkout.removeAllItems()
    }

    window.location.hash = '#/profile'

    return removeLoadingSpinner()
  }

  sessionStorage.setItem('cartId', cartId)
  sessionStorage.setItem('language', language)
  vtexjs.checkout.removeAllItems()
  const accessToken = await getAccessToken()

  fetch(`/BnOApi/getCart/${cartId}`, {
    method: 'POST',
    body: JSON.stringify({
      cartId,
      accessToken
    })
  })
  .then(x => x.json())
  .then(async cart => {
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

    const newLineItemsPromises = lineItems.map(async item => {
      const vtexSku = await getSkusByRefIds([item.sku])

      return {
        ...item,
        vtexSku,
      }
    })

    const newLineItems = await Promise.all(newLineItemsPromises)

    const newUrlCart = newLineItems.reduce((acc, el) => {
      return acc.concat(`sku=${el.vtexSku}&qty=${el.quantity}&seller=1&sc=1&`)
    }, `/checkout/cart/add/?`)

    console.log({lineItems});
    return {lineItems, newUrlCart, cartId}
  })
  .then(({lineItems, newUrlCart, cartId}) => {
    const bnoItems = lineItems.map(item => ({
      CartId: cartId,
      BNOSkuID: item.sku,
      BNOSkuName: item.variant.key,
      BNOPrice: ((item.price.value.centAmount || item.variant.prices[0].value.centAmount) / 100).toFixed(2),
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
