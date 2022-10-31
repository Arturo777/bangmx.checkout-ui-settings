export const updateCart = (cartId, orderForm, accessToken) => {
  const { clientProfileData, shippingData: { selectedAddresses } } = orderForm
  const [selectedAddress] = selectedAddresses

  fetch(`/BnOApi/updateCart/${cartId}`, {
    method: 'POST',
    headers: {
      'X-B&O-API-AccessToken': accessToken
    },
    body: JSON.stringify({
      version: 4,
      actions: [
        {
          action: 'setShippingAddress',
          address: {
            firstName: clientProfileData?.firstName || null,
            lastName: clientProfileData?.lastName || null,
            address1: `${selectedAddress?.street || ''} ${selectedAddress?.number || ''}`,
            address2: null,
            city: selectedAddress?.city || null,
            postalCode: selectedAddress?.postalCode || null,
            country: "MX",
            email: clientProfileData?.email || null,
            phone: clientProfileData?.phone || null,
          },
        },
        {
          action: 'setBillingAddress',
          address: {
            firstName: clientProfileData?.firstName || null,
            lastName: clientProfileData?.lastName || null,
            address1: `${selectedAddress?.street || ''} ${selectedAddress?.number || ''}`,
            address2: null,
            city: selectedAddress?.city || null,
            postalCode: selectedAddress?.postalCode || null,
            country: "MX",
            email: clientProfileData?.email || null,
            phone: clientProfileData?.phone || null,
          },
        },
      ],
      monthlyNewsletterSubscription: false,
    })
  }).then(x => x.json())
  .then(res => {
    console.log('Update Cart Response::', res);
  })
  .catch(error => {
    console.log({
      description: "Update cart error",
      error: error.message,
    })

    throw new Error(error)
  })
}
