export let cart;

export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem('cart'));
  
    if (!cart) {
      cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
      }];
    }
  }

export function addToCart(productId)
{
    if (!cart) {
        loadFromStorage(); // Ensure cart is loaded
    }
    let matchItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchItem = cartItem;
        }
      });
    
    if(matchItem)
    {
        matchItem.quantity += 1;
    }
    else 
    {
        cart.push({
            productId : productId,
            quantity : 1,
            deliveryOptionId : '1'
        })
    }

    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}