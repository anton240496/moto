$(function(){
  $('.li_btn1').on('click', function(){
    $('.img_f1').toggleClass('img_f1_active');
    $('.no').toggleClass('no_active');
      $('.vid_close').toggleClass('vid_close_active');
      
  });

  $('.vid_close').on('click', function(){
    $('.img_f1').removeClass('img_f1_active');
    $('.no').removeClass('no_active');
      $('.vid_close').removeClass('vid_close_active');
  });




  $('.li_btn2').on('click', function(){
    $('.img_f2').toggleClass('img_f2_active');
    $('.no').toggleClass('no_active');
      $('.vid_close').toggleClass('vid_close_active');
  });

  $('.vid_close').on('click', function(){
    $('.img_f2').removeClass('img_f2_active');
    $('.no').removeClass('no_active');
      $('.vid_close').removeClass('vid_close_active');
  });



  $('.li_btn3').on('click', function(){
    $('.img_f3').toggleClass('img_f3_active');
    $('.no').toggleClass('no_active');
      $('.vid_close').toggleClass('vid_close_active');
  });

  $('.vid_close').on('click', function(){
    $('.img_f3').removeClass('img_f3_active');
    $('.no').removeClass('no_active');
      $('.vid_close').removeClass('vid_close_active');
  });




  $('.li_btn4').on('click', function(){
    $('.img_f4').toggleClass('img_f4_active');
    $('.no').toggleClass('no_active');
      $('.vid_close').toggleClass('vid_close_active');
  });

  $('.vid_close').on('click', function(){
    $('.img_f4').removeClass('img_f4_active');
    $('.no').removeClass('no_active');
      $('.vid_close').removeClass('vid_close_active');
  });

  $('.li_btn5').on('click', function(){
    $('.img_f5').toggleClass('img_f5_active');
    $('.no').toggleClass('no_active');
      $('.vid_close').toggleClass('vid_close_active_1');
  });

  $('.vid_close').on('click', function(){
    $('.img_f5').removeClass('img_f5_active');
    $('.no').removeClass('no_active');
      $('.vid_close').removeClass('vid_close_active_1');
  });




  $('.li_btn6').on('click', function(){
    $('.img_f6').toggleClass('img_f6_active');
    $('.no').toggleClass('no_active');
      $('.vid_close').toggleClass('vid_close_active_1');
  });

  $('.vid_close').on('click', function(){
    $('.img_f6').removeClass('img_f6_active');
    $('.no').removeClass('no_active');
      $('.vid_close').removeClass('vid_close_active_1');
  });



  $('.li_btn7').on('click', function(){
    $('.img_f7').toggleClass('img_f7_active');
    $('.no').toggleClass('no_active');
      $('.vid_close').toggleClass('vid_close_active_1');
  });

  $('.vid_close').on('click', function(){
    $('.img_f7').removeClass('img_f7_active');
    $('.no').removeClass('no_active');
      $('.vid_close').removeClass('vid_close_active_1');
  });




  $('.li_btn8').on('click', function(){
    $('.img_f8').toggleClass('img_f8_active');
    $('.no').toggleClass('no_active');
      $('.vid_close').toggleClass('vid_close_active_1');
  });

  $('.vid_close').on('click', function(){
    $('.img_f8').removeClass('img_f8_active');
    $('.no').removeClass('no_active');
      $('.vid_close').removeClass('vid_close_active_1');
  });


  $('.menu_btn').on('click', function(){
    $('.header_menu').toggleClass('header_menu_active');
    $('.nav').toggleClass('nav_active');
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
    breakpoints: {
      1049: {
        slidesPerView: 3,
        spaceBetween: 10,
      }
    }


  });

      var zeroDivContent = document.getElementById('editor');
      var thistDivContent = document.getElementById('coment_1');
      var twoDivContent = document.getElementById('coment_2');
      var threeDivContent = document.getElementById('coment_3');
      var fourDivContent = document.getElementById('coment_4');

      var zeroname= document.getElementById('editor_n');
      var thistname= document.getElementById('name_1');
      var twoname= document.getElementById('name_2');
      var threename= document.getElementById('name_3');
      var fourname= document.getElementById('name_4');


    //   $('.feedback_button').on('click', function(){
    //   secondDivContent.innerHTML = firstDivContent.innerHTML;
    // });

    document.getElementById('button_f').addEventListener('click',function(){ 
      // alert(document.getElementById('editor').value);
      fourDivContent.innerHTML = threeDivContent.innerHTML;
      threeDivContent.innerHTML = twoDivContent.innerHTML;
      twoDivContent.innerHTML = thistDivContent.innerHTML;

      fourname.innerHTML = threename.innerHTML;
      threename.innerHTML = twoname.innerHTML;
      twoname.innerHTML = thistname.innerHTML;


      thistDivContent.innerHTML =document.getElementById('editor').value;
      
      thistname.innerHTML =document.getElementById('editor_n').value; 


      zeroDivContent.value=''
      zeroname.value=''
  },false);





});
