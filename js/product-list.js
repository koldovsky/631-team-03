(function () {
    const slides = [
      `<div class="Slide"><img src="img/new-arrivals-block-images/drums-2.jpg" alt="Dowson Little Roomer Snare Drum">
          <p class="description"><a href="#">Dowson Little Roomer Snare Drum</a></p>
         <p>$228.00</p>
      <button>Add To Cart</button>
         </div>`,   
         `<div class="Slide"><img src="img/new-arrivals-block-images/gutair-2.jpg" alt="Dickson Studio ER100 Electric Guitar">
         <p class="description"><a href="#">Dickson Studio ER100 Electric Guitar</a></p>
        <p>$180.00</p>
     <button>Add To Cart</button>
        </div>`,
        `<div class="Slide"><img src="img/new-arrivals-block-images/drums.jpg" alt="Bover Rover ESRSTQ56 Snare Drum">
        <p class="description"><a href="#">Bover Rover ESRSTQ56 Snare Drum</a></p>
       <p>$928.00</p>
    <button>Add To Cart</button>
       </div>`,
       `<div class="Slide"><img src="img/new-arrivals-block-images/gutair-3.jpg" alt="GVC Cool Style Electric Gutair">
       <p class="description"><a href="#">GVC Cool Style Electric Gutair</a></p>
      <p>$124.00</p>
   <button>Add To Cart</button>
      </div>`,
      `<div class="Slide"><img src="img/new-arrivals-block-images/gutair.jpg" alt="Raven Bee RB500 Exotic Style Guitar">
      <p class="description"><a href="#">Raven Bee RB500 Exotic Style Guitar</a></p>
     <p>$1128.00</p>
  <button>Add To Cart</button>
     </div>`
    ];
  
    let currentSlide = 0;
  
    function showCurrentSlide() {
      const slideContainer = document.querySelector(".products_list_arrivals_block");
      let html = '';
      html = slides[currentSlide];
      const nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
      html += slides[nextSlide];
      const next2Slide = nextSlide + 1 < slides.length ? nextSlide + 1 : 0;
      html += slides[next2Slide];
      const next3Slide = next2Slide + 1 < slides.length ? next2Slide + 1 : 0;
      html += slides[next3Slide];
      slideContainer.innerHTML = html;
    }
  
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) currentSlide = 0;
      showCurrentSlide();
    }
  
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) currentSlide = slides.length - 1;
      showCurrentSlide();
    }
  
    // setInterval(nextSlide, 1000);
    showCurrentSlide();
  
    const btnNext = document.querySelector(".next_button_arrivals_block");
    btnNext.addEventListener("click", nextSlide);
  
    const btnPrev = document.querySelector(".prev_button_arrivals_block");
    btnPrev.addEventListener("click", prevSlide);
    
  })();
  


