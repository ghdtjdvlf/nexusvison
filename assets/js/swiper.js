    var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      slidesPerView: 3.5, 
      speed: 2400,
      loop:true,
      
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },  
      autoplay: {
        delay: 0,
        pauseOnMouseEnter : true
    },
    });

    var logoSwiper = new Swiper(".logoSwiper", {
      slidesPerView: 4, 
      speed: 3000,
      loop:true,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        pauseOnMouseEnter : false
    },
    });