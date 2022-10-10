const getAccessToken = () => {
  return fetch('/BnOApi/getToken/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
     },
  }).then(x => x.json()).then(x => {
    const accessToken = x.access_token
    sessionStorage.setItem('accessToken', accessToken)

    return x.access_token
  }).catch((error) => {
    console.log({
      description: `Get access token error`,
      error: error.message,
    })

    window.location = 'https://www.bang-olufsen.com/es/mx/cart'
  })
}

module.exports = getAccessToken
