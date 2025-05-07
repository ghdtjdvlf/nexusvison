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
      
  }, 500); // 로딩 시간 2초
});

//KV 커지는 영상

document.addEventListener('DOMContentLoaded', function() {
  const element = document.querySelector('.center-expand-container');
  const youtubeContainer = document.getElementById('youtube-container');
  const startWidth = 60; // 시작 너비 (vw)
  const endWidth = 100; // 최종 너비 (vw)
  
  // 초기 너비 설정
  element.style.width = `${startWidth}vw`;
  youtubeContainer.style.width = `${startWidth}vw`;
  
  window.addEventListener('scroll', function() {
      // 현재 스크롤 위치 (0~1 범위)
      const scrollPosition = Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight), 1);
      
      // 너비 계산 (60vw에서 100vw로 점진적 증가)
      const currentWidth = startWidth + (endWidth - startWidth) * scrollPosition;
      
      // 요소와 유튜브 컨테이너 너비 동시 적용
      element.style.width = `${currentWidth}vw`;
      youtubeContainer.style.width = `${currentWidth}vw`;
      
      // 유튜브 높이도 비율에 맞게 조정 (16:9 유지)
      youtubeContainer.style.height = `${currentWidth * 9 / 16}vw`;
  });
});

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
      if (scrollY >= 8000) {
          // 7000px 이상: 모두 숨김
          text1.classList.remove('active');
          text2.classList.remove('active');
          text3.classList.remove('active');
      } 
      else if (scrollY >= 7000) {
          // 6000px~7000px: text3 표시
          text1.classList.remove('active');
          text2.classList.remove('active');
          text3.classList.add('active');
      } 
      else if (scrollY >= 6000) {
          // 5000px~6000px: text2 표시
          text1.classList.remove('active');
          text2.classList.add('active');
          text3.classList.remove('active');
      } 
      else if (scrollY >= 5000) {
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


