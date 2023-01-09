export const getSkuByRefId = (refId)  => {
  return fetch(`/api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/${refId}`)
  .then(x => x.json())
  .catch(error => {
    console.log({
      description: `Get productId: ${productId} error`,
      error: error.message,
    })

    throw new Error(error)
  })
}

