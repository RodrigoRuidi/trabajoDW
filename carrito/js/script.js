if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-eliminar')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('carrito-cantidad-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('compra-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-comprar')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Gracias por su compra')
    var cartItems = document.getElementsByClassName('carrito-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('compra-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('compra-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('compra-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('carrito-fila')
    var cartItems = document.getElementsByClassName('carrito-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('carrito-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Este artículo ya está agregado al carrito')
            return
        }
    }
    var cartRowContents = `
        <div class="carrito-item carrito-columna">
            <img class="carrito-item-image" src="${imageSrc}" width="100" height="100">
            <span class="carrito-item-title">${title}</span>
        </div>
        <span class="carrito-precio carrito-columna">${price}</span>
        <div class="carrito-cantidad carrito-columna">
            <input class="carrito-cantidad-input" type="number" value="1">
            <button class="btn btn-eliminar" type="button">ELIMINAR</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-eliminar')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('carrito-cantidad-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('carrito-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('carrito-fila')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('carrito-precio')[0]
        var quantityElement = cartRow.getElementsByClassName('carrito-cantidad-input')[0]
        var price = parseFloat(priceElement.innerText.replace('S/. ', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('carrito-precio-total')[0].innerText = 'S/. ' + total
}