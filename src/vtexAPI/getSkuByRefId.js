export const getSkusByRefIds = (refIds)  => {
  return fetch(`/api/catalog_system/pub/sku/stockkeepingunitidsbyrefids`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
     },
    method: 'POST',
    body: JSON.stringify(refIds),
  })
  .then(x => x.json())
  .then(x => {
    const [firstId] = refIds
    const result = x[firstId]
    return result
  })
  .catch(error => {
    console.log({
      description: 'Error in getSkusByRefIds',
      refIds,
      error: error.message,
    })

    throw new Error(error)
  })
}

