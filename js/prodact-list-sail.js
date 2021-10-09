class ProductList {
  constructor(cart) {
    this.cart = cart;
    this.container = document.querySelector(".sail_products");
    this.productService = new ProductsService();
    this.productService.getProducts().then(async () => {
      await this.prepareProducts();
    });
  }

  async prepareProducts() {
    let productListDomStr = "";
    const products = await this.productService.getProducts();
    products.forEach((product) => {
      productListDomStr += `
         <div class="guitar_continer">
          <div>
            <img class="sail-img" src="${product.img}" alt="guitar">
          </div>
            <br>
            <a class="sail-content" href="#">${product.name}</a>
            <p class="sail-price">${product.price}</p>
            <button class="button-drum">Add to Cart</button>
         </div>`
          ;
    });
    this.container.innerHTML = productListDomStr;
    this.addBuyListeners(".sail_products .button-drum");
  }

  addBuyListeners(selector) {
    document
      .querySelectorAll(selector)
      .forEach((button) =>
        button.addEventListener("click", (event) =>
          this.handleProductBuyClick(event)
        )
      );
  }

  handleProductBuyClick(event) {
    const button = event.target;
    const id = button.dataset.id;
    this.cart.addProduct(id);
    window.showAlert("Product added to cart");
  }
}