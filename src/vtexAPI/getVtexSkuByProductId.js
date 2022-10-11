export const getVtexSkuByProductId = (productId, skuId)  => {
  return fetch(`/vtex/catalog/skus/${skuId}/${productId}`)
  .then(x => x.json())
  .catch(error => {
    console.log({
      description: `Get productId: ${productId} error`,
      error: error.message,
    })

    throw new Error(error)
  })
}
