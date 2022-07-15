$(document).ready(function(){
$('.m-btn').click(function () { 
  $('.menu nav ul').slideToggle(); 
});

 

  // -----header 메뉴 클릭시 해당 위치로 이동----
  $('.btn').on('click', function(e) {
    e.preventDefault();
    var section = $(this).attr('href').substr($(this).attr('href').indexOf('#'));
    var $section = $(section);
  
    $('html, body').animate({
      scrollTop: $section.offset().top + 'px'
    }, 1000);
  });
  // --------header 네비바 스크롤시 색상변경
  window.addEventListener('scroll', function(){
    console.log(window.scrollY)
  });
  var $header = $('.main-visual .title'); //헤더를 변수에 넣기
    var $page = $('.page-start'); //색상이 변할 부분
    var $window = $(window);
    var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
    
    $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
      pageOffsetTop = $page.offset().top;
    });
    $window.on('scroll', function(){ //스크롤시
      var scrolled = $window.scrollTop() >= pageOffsetTop-800; //스크롤된 상태; true or false
      $header.toggleClass('down', scrolled); //클래스 토글
    });
    // ---------main-visual ------
    
    // ------------main-visual 끝---
  // -----main-web 시작--------
    $(".tab li a").on("click", function(){
      
      // 해당 요소를 클릭하는 내 자신의 index 번호를 가져온다. [0], [1]
      const num = $(".tab li a").index($(this));
      // 기존에 적용되어 있는 on class 삭제
      $(".tab li").removeClass("active");
      $(".tabbox").removeClass("active");
  
      // 다음 요소 클릭시 on class 추가
      $('.tab li:eq(' + num + ')').addClass("active");
      $('.tabbox:eq(' + num + ')').addClass("active");
    });
    // ------------------------visual
    
    // -----main-web 끝--------
    // -----------main-practical 시작 --------
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
    $(".tab2 li a").on("click", function(){
      // 해당 요소를 클릭하는 내 자신의 index 번호를 가져온다. [0], [1]
      const num = $(".tab2 li a").index($(this));
      // 기존에 적용되어 있는 on class 삭제
      $(".tab2 li a").removeClass("active2");
      $(".tabbox2").removeClass("active2");
  
      // 다음 요소 클릭시 on class 추가
      $('.tab2 li a:eq(' + num + ')').addClass("active2");
      $('.tabbox2:eq(' + num + ')').addClass("active2");
  
    });
// -------------------

// 랩탑 이미지 스크롤
var laptopsInner = document.querySelectorAll('div.laptop-inner');

for (const laptopInner of laptopsInner) {
  laptopInner.addEventListener('mouseover', (e) => {
    var imageHeight = e.target.offsetHeight;
    var laptopHeight = e.currentTarget.offsetHeight;
    var scrollHeight = imageHeight-laptopHeight;
    console.log(`${imageHeight} | ${laptopHeight} | ${scrollHeight}`);  
    e.target.style.transform = "translate3d(0, -"+scrollHeight+"px, 0)";
  });
  laptopInner.addEventListener('mouseout', (e) => {
    e.target.style.transform = "translate3d(0, 0, 0)";
  });
}
var laptopsInner = document.querySelectorAll('div.phone');

for (const laptopInner of laptopsInner) {
  laptopInner.addEventListener('mouseover', (e) => {
    var imageHeight = e.target.offsetHeight;
    var laptopHeight = e.currentTarget.offsetHeight;
    var scrollHeight = imageHeight-laptopHeight;
    console.log(`${imageHeight} | ${laptopHeight} | ${scrollHeight}`);  
    e.target.style.transform = "translate3d(0, -"+scrollHeight+"px, 0)";
  });
  laptopInner.addEventListener('mouseout', (e) => {
    e.target.style.transform = "translate3d(0, 0, 0)";
  });
}

// 
  });