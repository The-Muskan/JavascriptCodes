// In this way, we can organize our whole code in objects.
/*
const cart = {
    cartItems : undefined,

    loadFromStorage : function() {
        this.cartItems = JSON.parse(localStorage.getItem('cartOOP'));
      
        if (!this.cartItems) {
          this.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
          }, {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionId: '2'
          }];
        }
      },

    addToCart(productId)
    {
        if (!this.cartItems) {
            loadFromStorage(); // Ensure cart is loaded
        }
        let matchItem;

        this.cartItems.forEach((cartItem) => {
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
            this.cartItems.push({
                productId : productId,
                quantity : 1,
                deliveryOptionId : '1'
            })
        }

        this.saveToStorage();
    },

    saveToStorage() {
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
}

// Multiple objects with the help of oop
cart.loadFromStorage();
cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb45673cf34')
console.log(cart);

const bussinessCart = {
    cartItems : undefined,

    loadFromStorage : function() {
        this.cartItems = JSON.parse(localStorage.getItem('cartBusiness'));
      
        if (!this.cartItems) {
          this.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
          }, {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionId: '2'
          }];
        }
      },

    addToCart(productId)
    {
        if (!this.cartItems) {
            loadFromStorage(); // Ensure cart is loaded
        }
        let matchItem;

        this.cartItems.forEach((cartItem) => {
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
            this.cartItems.push({
                productId : productId,
                quantity : 1,
                deliveryOptionId : '1'
            })
        }

        this.saveToStorage();
    },

    saveToStorage() {
        localStorage.setItem('cartBusiness', JSON.stringify(this.cartItems));
    }
}

bussinessCart.loadFromStorage();
console.log(bussinessCart);
*/

// but in this we copy-pasting too much to create multiple objects so we use functions to generate objects. 

function Cart(localStorageKey) {
    const cart = {
        cartItems : undefined,
    
        loadFromStorage : function() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
          
            if (!this.cartItems) {
              this.cartItems = [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
              }, {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '2'
              }];
            }
          },
    
        addToCart(productId)
        {
            if (!this.cartItems) {
                loadFromStorage(); // Ensure cart is loaded
            }
            let matchItem;
    
            this.cartItems.forEach((cartItem) => {
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
                this.cartItems.push({
                    productId : productId,
                    quantity : 1,
                    deliveryOptionId : '1'
                })
            }
    
            this.saveToStorage();
        },
    
        saveToStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        }
    }
    return cart;
}
    
   
const oopCart = Cart('cart-oop');
const busCart = Cart('cart-business');

oopCart.loadFromStorage();
busCart.loadFromStorage();

console.log(oopCart);
console.log(busCart);


