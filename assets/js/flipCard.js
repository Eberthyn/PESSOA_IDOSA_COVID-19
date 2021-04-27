/*Flip Card Conteúdo*/
function flipFase1() {
    $('#fase1').toggleClass('flipped');
  };
  
  function flipFase2() {
    $('#fase2').toggleClass('flipped');
  };
  
  function flipFase3() {
    $('#fase3').toggleClass('flipped');
  };
  
  function flipFase4() {
    $('#fase4').toggleClass('flipped');
  };
  
  function flipFase5() {
    $('#fase5').toggleClass('flipped');
  };
  
  
  /*Flip Card Questionário*/
  
  function flip() {
    $('#quiz').addClass('flipped');
  };
  
  function unflip() {
    $('#quiz').removeClass('flipped');
  };
  
  
  function flip2() {
    $('#quiz2').addClass('flipped');
  };
  
  function unflip2() {
    $('#quiz2').removeClass('flipped');
  };
  
  
  function flip3() {
    $('#quiz3').addClass('flipped');
  };
  
  function unflip3() {
    $('#quiz3').removeClass('flipped');
  };

  /* Navegação flip card com touch*/
$(".carousel").carousel({
  interval: false,
  pause: true
});


$('.carousel .carousel-inner').on('dragstart', 'a', function () {
  return false;
});