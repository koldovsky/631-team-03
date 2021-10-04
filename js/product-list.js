 const products = [
     {
         id: 1,
         name: "<b>Dowson Little Roomer Snare Drum",
         img: 'img/maksym-img/drums-2.jpg',
         price: '$128.00'

     },
     {
        id: 2,
        name: "<b>Dickson Studio ER100 Electric Guitar",
        img: 'img/maksym-img/gutair-2.jpg',
        price: '$180.00'

    },
    {
        id: 3,
        name: "<b>Bover Rover ESRSTQ56 Snare Drum",
        img: 'img/maksym-img/drums.jpg',
        price: '$128.00'

    },
    {
        id: 4,
        name: "<b>GVC Cool Style Electric Gutair",
        img: 'img/maksym-img/gutair-3.jpg',
        price: '$128.00'

    },
    {
        id: 5,
        name: "<b>Raven Bee RB500 Exotic Style Guitar",
        img: 'img/maksym-img/gutair.jpg',
        price: '$128.00'

    },
 ]
 function renderProducts(products) {
     const productsContainer = document.querySelector('.owl-carousel');
     for (const product of products) {
         productsContainer.innerHTML +=
     `<div class="Slide"><img src="${product.img}" alt="${product.name}">
     <p class="description"><a href="#">${product.name}</a></p>
     <p>${product.price}</p>
     <button>Add To Cart</button>
   </div>`;
     }
 }
 renderProducts(products);