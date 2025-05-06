document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.getElementById('loadingScreen');
  const body = document.body;
  
  // 2초 후 로딩 완료 처리
  setTimeout(function() {
      loadingScreen.style.opacity = '0';
      
      // 페이드 아웃 애니메이션 완료 후
      setTimeout(function() {
          loadingScreen.style.display = 'none';
          body.classList.remove('no-scroll'); // 스크롤 허용
      }, 500); // CSS 트랜지션 시간(0.5s)과 동일하게 설정
      
  }, 1000); // 로딩 시간 2초
});

//sec02 로고 슬라이드
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

function adjustVideo() {
    const video = document.getElementById('video-background');
    const container = document.getElementById('video-container');
    const windowRatio = window.innerWidth / window.innerHeight;
    const videoRatio = 16 / 9;

    if (windowRatio > videoRatio) {
        // 너비가 더 넓은 경우 (세로 여백 없음)
        video.style.width = '100%';
        video.style.height = 'auto';
    } else {
        // 높이가 더 큰 경우 (가로 여백 없음)
        video.style.width = 'auto';
        video.style.height = '100%';
    }
}

//sec03 로고 슬라이드

var logoSwiper = new Swiper(".logoSwiper", {
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  slidesPerView: 'auto',
  centeredSlides: true,  
  spaceBetween: 20,
  loop: true,
  speed: 4000,
  loopAdditionalSlides: 3, // 추가 슬라이드 복제 → 마지막 슬라이드에서 멈칫하는 현상 방지
  observer: true,
  observeParents: true,
  mousewheel: false,
  simulateTouch: false,
  pauseOnMouseEnter: false,
  allowTouchMove: false,
  grabCursor: false,
  
  breakpoints: {
    1280: {
      slidesPerView: 8,
      spaceBetween: 0
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
  });
  

window.addEventListener('load', adjustVideo);
window.addEventListener('resize', adjustVideo);


//sec05 text 

document.addEventListener('DOMContentLoaded', function() {
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');
  const progressBar = document.querySelector('.progress-bar');

  window.addEventListener('scroll', function() {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      // 프로그레스 바 업데이트
      progressBar.style.width = (scrollY / (docHeight - windowHeight)) * 100 + '%';

      // 조건문 순서 중요! 높은 값부터 체크해야 합니다.
      if (scrollY >= 7000) {
          // 7000px 이상: 모두 숨김
          text1.classList.remove('active');
          text2.classList.remove('active');
          text3.classList.remove('active');
      } 
      else if (scrollY >= 6000) {
          // 6000px~7000px: text3 표시
          text1.classList.remove('active');
          text2.classList.remove('active');
          text3.classList.add('active');
      } 
      else if (scrollY >= 5000) {
          // 5000px~6000px: text2 표시
          text1.classList.remove('active');
          text2.classList.add('active');
          text3.classList.remove('active');
      } 
      else if (scrollY >= 4068) {
          // 4068px~5000px: text1 표시
          text1.classList.add('active');
          text2.classList.remove('active');
          text3.classList.remove('active');
      } 
      else {
          // 4068px 미만: 모두 숨김
          text1.classList.remove('active');
          text2.classList.remove('active');
          text3.classList.remove('active');
      }
  });
});
window.addEventListener('scroll', function() {
  console.log("현재 스크롤 위치:", window.scrollY + "px");
});


