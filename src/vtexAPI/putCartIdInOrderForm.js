export const putCartIdInOrderForm = (cartId, orderFormId)  => {
  return fetch(`/vtex/custom-order-form/${orderFormId}`, {
    method: "PUT",
    body: JSON.stringify({
      cartId
    })
  })
  .then(x => x.json())
  .catch(error => {
    console.log({
      description: `Put cart id in the order form error`,
      error: error.message,
    })

    throw new Error(error)
  })
}
