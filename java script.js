const cartItems = [];

    function addToCart(name, price, size) {
      if (!size) {
        alert("Please select a size before adding to cart!");
        return;
      }

      const item = { name, price, size };
      cartItems.push(item);
      updateCart();
    }

    function updateCart() {
      const cartList = document.getElementById("cartItems");
      cartList.innerHTML = "";
      if (cartItems.length === 0) {
        cartList.innerHTML = "<li>No items yet!</li>";
      } else {
        cartItems.forEach((item, index) => {
          const li = document.createElement("li");
          li.textContent = `${item.name} - Size: ${item.size} - R${item.price.toFixed(2)}`;
          cartList.appendChild(li);
        });
      }
    }