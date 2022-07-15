$(document).ready(function(){
    // ------------main_display 시작---------------
  
      
    $(".tab-contantbox .tab li a").on("click", function(){
      // 해당 요소를 클릭하는 내 자신의 index 번호를 가져온다. [0], [1]
      const num = $(".tab-contantbox .tab li a").index($(this));
      // 기존에 적용되어 있는 on class 삭제
      $(".tab-contantbox .tab li").removeClass("active");
      $(".tab-contantbox .tabbox").removeClass("active");
  
      // 다음 요소 클릭시 on class 추가
      $('.tab-contantbox .tab li:eq(' + num + ')').addClass("active");
      $('.tab-contantbox .tabbox:eq(' + num + ')').addClass("active");
  
    });
      
  //   ---스와이퍼--
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
      // ------------main_display 끝---------------
});