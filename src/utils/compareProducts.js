import { sendProductLogs } from "../nodeApp/sendProductLogs"
import { getVtexSkuByProductId } from "../vtexAPI/getVtexSkuByProductId"

export const compareProducts = async () => {
  const vtexProducts = []

  try {
    const { items } = await vtexjs.checkout.getOrderForm()

    vtexProducts.push(...items.map(item => ({
      productId: item.productId,
      skuId: item.id
    })))
  } catch (error) {
    console.log({
      description: "Get orderForm error",
      error: error.message,
    })

    throw new Error(error)
  }

  if (!vtexProducts.length) return
  const vtexItemsPromise = vtexProducts.map(vtexProduct => {
    return getVtexSkuByProductId(vtexProduct.productId, vtexProduct.skuId)
  })

  const vtexItems = await Promise.all(vtexItemsPromise)

  console.log({vtexItems});

  if (!sessionStorage.getItem('bnoItems')) return
  const bnoItems = JSON.parse(sessionStorage.getItem('bnoItems'))

  const combinedItems = vtexItems.map((item, i) => ({
    ...bnoItems[i],
    ...item,
    DateTime: new Date()
  }))

  const differentItems = combinedItems.filter(item => {
    return item.BNOPrice !== item.VTEXPrice ||
    item.BNOQuantity !== item.VTEXQuantity
  })

  sendProductLogs(differentItems)
}
