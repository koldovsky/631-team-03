(function () {
    const slides = [
      `<article class = "jiwa-tamb">
      <img src="img/jiva.jpeg" class="d-block w-50" alt="Jiwa Studio JWL100 Single Row Tambourine">
          <div class="carousel-caption d-none d-md-block">
            <p class="carousel-descr"><a href="#">Jiwa Studio JWL100 Single Row Tambourine</a></p>
            <p class="carousel-price">$50</p>
            <div class="button-sell">
                  <a href="#"class="btn-sell">Add to Cart</a>
            </div>
          </div>
      </article>`,
      `<article class = "donny-sax">
       <img src="img/donny.jpeg" class="d-block w-50" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <p class="carousel-descr"><a href="#">Donny Stavanger SRT12 Alto Saxophone</a></p>
            <p class="carousel-price">$450</p>
             <div class="button-sell">
                <a href="#"class="btn-sell">Add to Cart</a>
              </div>                
            </div>
          </article>`,
     `<article class = "winston-gui">
     <img src="img/winston.jpg" class="d-block w-50" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <p class="carousel-descr"><a href="#">Winston WR-100 Electric Guitar</a></p>
            <p class="carousel-price">$320</p>
            <div class="button-sell">
              <a href="#"class="btn-sell">Add to Cart</a>
            </div>
          </div>
          </article>`,
     `<article class = "ericson-drum">
     <img src="img/ericson.jpeg" class="d-block w-50" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <p class="carousel-descr"><a href="#">Ericson Black&White Snare Drum</a></p>
            <p class="carousel-price">$115</p>
            <div class="button-sell">
              <a href="#"class="btn-sell">Add to Cart</a>
            </div>
          </div>
          </article>`,
      `<article class = "jackson-gui">
       <img src="img/jackson.jpeg" class="d-block w-50" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <p class="carousel-descr"><a href="#">Jackson RI405 Electric Guitar</a></p>
            <p class="carousel-price">$300</p>
            <a href="#">
            <div class="button-sell">
              <p class="btn-sell" >Add to Cart</p>
            </div>
            </a>
          </div>
          </article>`,
    ];
  
    let currentSlide = 0;
  
    function showCurrentSlide() {
      const slideContainer = document.querySelector(".three-carousel .slide-container");
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
  
    const btnNext = document.querySelector(".three-carousel .slide-next");
    btnNext.addEventListener("click", nextSlide);
  
    const btnPrev = document.querySelector(".three-carousel .slide-prev");
    btnPrev.addEventListener("click", prevSlide);
  })();
  