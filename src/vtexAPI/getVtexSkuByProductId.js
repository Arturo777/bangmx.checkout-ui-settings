module.exports = (productId, skuId)  => {
  return fetch(`/vtex/catalog/${productId}`).then(x => x.json())
  .then(res => {

    if (!res || !res.skus || !res.skus.length) return alert(`No skus by productId: ${productId}`)

    const selectedSku = res.skus
      .find(sku => skuId == sku.sku)

    return {
      VTEXSkuID: String(selectedSku.sku),
      VTEXSkuName: selectedSku.skuname,
      VTEXPrice: selectedSku.bestPrice,
      VTEXQuantity: selectedSku.availablequantity
    }
  })
  .catch(error => {
    console.log({
      description: `Get productId: ${productId} error`,
      error: error.message,
    })

    throw new Error(error)
  })
}
