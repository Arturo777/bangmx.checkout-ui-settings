const getCart = require("./bnoEndpoints/getCart")

const addBeoSupremeFont = () => {
  const linkElement = document.createElement('link')
  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.setAttribute('type', 'text/css');
  linkElement.setAttribute('href', 'https://cloud.typography.com/6462894/7475632/css/fonts.css')
  linkElement.setAttribute('media', 'all')

  document.head.appendChild(linkElement)

}

const handleInputFocus = elements => {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]

    document.querySelector(`input#${element}`).addEventListener('focus', () => {
      const target = document.querySelector(`p.${element} label`)
      target.style.top = '0px'
      target.style.cursor = 'text'
    })

    document.querySelector(`input#${element}`).addEventListener("focusout", (event) => {
      const inputValue = event.target.value
      const target = document.querySelector(`p.${element} label`)

      if (!inputValue) {
        target.style.top = '35px'
        target.style.cursor = 'default'
      }
    })
  }
}

const handleLabels = elements => {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]
    const target = document.querySelector(`p.${element} label`)
    const inputValue = document.querySelector(`input#${element}`).value
    const isFocused = document.querySelector(`input#${element}`) === document.activeElement
    target.style.top = inputValue || isFocused ? '0px' : '35px'
    target.style.cursor = inputValue ? 'text' : 'default'
  }
}

const createContainer = (
  {
    elem,
    classNames,
    children,
    target = null,
    targetAppend = null
  }) => {
  const element = document.createElement(elem);

  for (let i = 0; i < classNames.length; i++) {
    const clase = classNames[i];
    element.classList.add(clase)
  }

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    element.appendChild(child)
  }

  if (target) {
    target.parentNode.insertBefore(element, target);
  }

  if (targetAppend) {
    targetAppend.appendChild(element)
  }

  return element
}

const createBackButton = (id, parent) => {
  const backButton = document.createElement('button')
  backButton.innerHTML = 'Atrás'
  backButton.classList.add(`back-button`)

  createContainer({
    elem: 'div',
    classNames: ["btns-container"],
    children: [backButton],
    targetAppend: document.querySelector(parent),
  })

  backButton.addEventListener('click', () => {
    document.querySelector(`#${id}`).click()
  })

  return backButton
}

const createElem = ({ elem, innerText }) => {
  const element = document.createElement(elem);
  element.innerText = innerText;

  return element
}

const changeElement = (elem, newText) => {
  if (document.querySelector(elem)) {
    document.querySelector(elem).innerHTML = newText;
  }
}

window.onload = function() {
  getCart()

  $(window).on('orderFormUpdated.vtex', async function(_, orderForm) {

    const accessToken = sessionStorage.getItem('accessToken')
    if (!accessToken) return

    const { clientProfileData, shippingData: { selectedAddresses } } = orderForm

    const [selectedAddress] = selectedAddresses


    const cartId = sessionStorage.getItem('cartId')

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
  })
}

document.addEventListener('DOMContentLoaded', function() {


  const compraSegura = createElem({
    elem: 'h1',
    innerText: 'COMPRA SEGURA',
  })

  const completePedido = createElem({
    elem: 'h2',
    innerText: 'Complete su pedido',
  })

  const img = document.createElement('img')
  img.src = 'https://www.bang-olufsen.com/static-assets/images/common/lock.svg'
  img.classList.add('image-header1')

  const header1container = createContainer({
    elem: 'div',
    classNames: [
      'header1'
    ],
    children: [
      img,
      compraSegura
    ]
  })

  createContainer({
    elem: 'div',
    classNames: [
      'headers',
      'checkout'
    ],
    children: [
      header1container,
      completePedido
    ],
    target: document.querySelector('.checkout-container'),
  })
})

window.addEventListener('hashchange', function() {
  if (location.hash === '#/cart') {
    document.querySelector('div.headers.checkout').style.display = 'none'
  } else {
    document.querySelector('div.headers.checkout').style.display = 'block'
  }

  if (location.hash === '#/email' || location.hash === '#/profile') {
    document.querySelector('#client-profile-data').style.display = 'block'
    document.querySelector('#shipping-data').style.display = 'none'
    document.querySelector('#payment-data').style.display = 'none'
    changeElement('#go-to-shipping', 'Siguiente')
    changeElement('#btn-go-to-shipping', 'Siguiente')
    changeElement('#btn-go-to-payment', 'Siguiente')
    changeElement('#go-to-payment', 'Siguiente')

    handleLabels([
      'client-email',
      'client-first-name',
      'client-last-name',
      'client-phone',
    ])
  }

  if (location.hash === '#/shipping') {
    document.querySelector('#client-profile-data').style.display = 'none'
    document.querySelector('#shipping-data').style.display = 'flex'
    document.querySelector('#payment-data').style.display = 'none'
    changeElement('#go-to-shipping', 'Siguiente')
    changeElement('#btn-go-to-payment', 'Siguiente')

    const shippingTitle = document.createElement('p')
    shippingTitle.innerHTML = 'Introduce la dirección de entrega'

    if (!document.querySelector('.form-title.title-shipping')) {
      createContainer({
        elem: 'div',
        classNames: [
          'form-title',
          'title-shipping'
        ],
        children: [
          shippingTitle
        ],
        target: document.querySelector("#shipping-data div.accordion-inner.shipping-container"),
      })
    }
    const progressBar = (width) => {
      const bar = document.createElement('div')
      bar.classList.add('progress-bar')
      bar.style.width = width
      bar.style.height = '5px'
      bar.style.background = 'rgb(255, 195, 86)'
      bar.style.marginLeft = '-30px'
      return bar
    }

    const shippingData = document.querySelector('#shipping-data')

    if (!document.querySelector('#shipping-data .progress-bar')) {
      shippingData.prepend(progressBar('66.6%'))
    }

  }

  if (location.hash === '#/payment') {
    document.querySelector('#client-profile-data').style.display = 'none';
    document.querySelector('#shipping-data').style.display = 'none';
    document.querySelector('#payment-data').style.display = 'flex';

    const paymentTitle = document.createElement('p')
    paymentTitle.innerHTML = 'Selecciona el método de pago'

    if (!document.querySelector('.form-title.title-payment')) {

      createContainer({
        elem: 'div',
        classNames: [
          'form-title',
          'title-payment'
        ],
        children: [
          paymentTitle
        ],
        target: document.querySelector("#payment-data div.payment-body"),
      })
    }

    createBackButton('edit-shipping-data', '#payment-data')
  }
})

document.addEventListener('readystatechange', () => {
  const img = document.createElement('img')
  img.src = 'https://www.bang-olufsen.com/static-assets/images/common/lock.svg'
  img.classList.add('image-header1')

  const contactTitle = document.createElement('p')

  contactTitle.innerHTML = 'Introduce tu información de contacto'


  const titleCartProducts = document.createElement('h4')
  titleCartProducts.innerHTML = 'Artículos en la cesta'

  const titleCartSummary = document.createElement('h4')
  titleCartSummary.innerHTML = 'Resumen del pedido'

  if (document.readyState === "interactive") {
    document.querySelector('.checkout-container').style.display = 'none'

    createContainer({
      elem: 'div',
      classNames: [
        'loading2',
      ],
      children: [
        document.querySelector('.loading-img')
      ],
      target: document.querySelector('.checkout-container'),
    })

    createContainer({
      elem: 'div',
      classNames: [
        'form-title',
      ],
      children: [
        contactTitle
      ],
      target: document.querySelector("#client-profile-data .accordion-body"),
    })

    createContainer({
      elem: 'div',
      classNames: [
        'title-cart-products',
      ],
      children: [
        titleCartProducts
      ],
      target: document.querySelector(".cart-template-holder > div.cart > table.cart-items"),
    })

    createContainer({
      elem: 'div',
      classNames: [
        'title-cart-summary',
      ],
      children: [
        titleCartSummary
      ],
      target: document.querySelector(".summary-template-holder > div.row-fluid.summary"),
    })
  }

  if (document.readyState === "complete") {
    // addBeoSupremeFont()

    if (location.hash === '#/cart') {
      if (document.querySelector('#cart-choose-products')) {
        document.querySelector('#cart-choose-products').setAttribute('href', 'https://www.bang-olufsen.com/es/mx')
      }

      document.querySelector('div.headers.checkout').style.display = 'none'

      document.querySelectorAll(".product-item a").forEach((element) => {
        element.setAttribute('href', 'javascript:void(0)')
        element.style.cursor = 'default'
      })


    } else {
      document.querySelector('div.headers.checkout').style.display = 'block'
      document.querySelector('table.table tfoot td.monetary').style.fontSize = '24px'
      document.querySelector('table.table tfoot td.monetary').style.color = '#000000'
      document.querySelector('table.table tfoot td.monetary').style.fontWeight = '500'
    }

    if (location.hash === '#/email') {
      document.querySelector('#client-profile-data').style.display = 'block'
      document.querySelector('#shipping-data').style.display = 'none'
      document.querySelector('#payment-data').style.display = 'none'
    }

    if (location.hash === '#/shipping') {
      document.querySelector('#client-profile-data').style.display = 'none'
      document.querySelector('#shipping-data').style.display = 'block'
      document.querySelector('#payment-data').style.display = 'none'

      const shippingTitle = document.createElement('p')
      shippingTitle.innerHTML = 'Introduce la dirección de entrega'
      if (!document.querySelector('.form-title.title-shipping')) {
        createContainer({
          elem: 'div',
          classNames: [
            'form-title',
            'title-shipping'
          ],
          children: [
            shippingTitle
          ],
          target: document.querySelector("#shipping-data div.accordion-inner.shipping-container"),
        })
      }
    }

    if (location.hash === '#/payment') {
      document.querySelector('#client-profile-data').style.display = 'none'
      document.querySelector('#shipping-data').style.display = 'none'
      document.querySelector('#payment-data').style.display = 'flex'

      const paymentTitle = document.createElement('p')
      paymentTitle.innerHTML = 'Selecciona el método de pago'

      if (!document.querySelector('.form-title.title-payment')) {
        createContainer({
          elem: 'div',
          classNames: [
            'form-title',
            'title-payment'
          ],
          children: [
            paymentTitle
          ],
          target: document.querySelector("#payment-data div.payment-body"),
        })
      }
    }

    document.querySelector('#go-to-shipping').addEventListener('mouseleave', event => {
      const button = event.target
      button.style.backgroundColor = 'rgb(255, 195, 86)';
      button.style.color = 'rgb(0, 0, 0)';
      button.style.borderColor = 'rgb(255, 195, 86)';
    })

    document.querySelector('#go-to-shipping').addEventListener('mouseenter', event => {
      const button = event.target
      button.style.borderColor = 'rgb(235, 232, 229)';
    })

    const progressBar = (width) => {
      const bar = document.createElement('div')
      bar.classList.add('progress-bar')
      bar.style.width = width
      bar.style.height = '5px'
      bar.style.background = 'rgb(255, 195, 86)'
      return bar
    }

    const clientData = document.querySelector('#client-profile-data')

    clientData.prepend(progressBar('33.3%'))

    changeElement('#go-to-shipping', 'Siguiente')
    changeElement('#btn-go-to-payment', 'Siguiente')
    changeElement('.custom-cart-template-wrap > h2', 'DETALLES DEL PEDIDO')
    changeElement('.orderform-template .cart-template.mini-cart .summary-totalizers tfoot tr td.info', 'Total del pedido')
    changeElement('.full-cart .totalizers tfoot td', 'Total del pedido')
    changeElement('.summary-template-holder .cart-links-bottom .btn-success', 'Compra segura')

    handleInputFocus([
      'client-email',
      'client-first-name',
      'client-last-name',
      'client-phone',
    ])

    createBackButton('edit-profile-data', '#shipping-data')
    createBackButton('edit-shipping-data', '#payment-data')
  }

})




