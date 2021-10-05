async function getProducts(productsUrl) {
    const response = await fetch(productsUrl);
    const products = await response.json();
    return products;
} 

 function renderProducts(products) {
     const productsContainer = document.querySelector('.products_list');
     for (const product of products) {
         productsContainer.innerHTML +=
     `<div class="Slide"><img src="${product.img}" alt="${product.name}">
     <p class="description"><a href="#">${product.name}</a></p>
     <p>${product.price}</p>
     <button>Add To Cart</button>
   </div>`;
     }
 }
 
 async function loadAndShowProducts() {
 const products = await getProducts('products.json');
 renderProducts(products);
 }
 loadAndShowProducts();
 
//  const slides = [
//     '<img src="img/maksym-img/gutair-2.jpg" alt="Baby Yoda">',
//     '<img src="img/maksym-img/drums.jpg" alt="Baby Yoda">',
//     '<img src="/img/maksym-img/gutair-2.jpg" alt="Baby Yoda">',
//     '<img src="/img/maksym-img/gutair-2.jpg" alt="Baby Yoda">',
//     '<img src="/img/maksym-img/gutair-2.jpg" alt="Baby Yoda">'
// ]
// let currentSlide = 0;
// function showCurrentSlide() {
//    const slideContainer = document.querySelector('.products_list');
//    slideContainer.innerHTML = slides[currentSlide];
// }
// function nextSlide() {
//     currentSlide++;
//     if (currentSlide >= slides.length) currentSlide = 0;
//     showCurrentSlide()
// }
// setInterval(nextSlide, 1000);
// showCurrentSlide();

 
