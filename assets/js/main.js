/* Fixa Menu Superior */
$(window).scroll(function () {

  if ($(window).scrollTop() + $(window).height() === $(document).height()) {

  } else {
    $(".navbar").addClass("fixed-top");
  }

  if ($(window).scrollTop() === 0) {
    $(".navbar").removeClass("fixed-top");
    $("#row-main").css("padding-top", "0%");
    $(".navbar").css("box-shadow", "0px 0px 0px rgba(0,0,0,0.5)")

  } else {
    $(".navbar").addClass("fixed-top");
    $("#row-main").css("padding-top", ($('#menuSuperior').css("height")));
    $(".stepContainer").css("padding-bottom", ($('#menuSuperior').css("height")));
    $(".navbar").css("box-shadow", "0px 2px 2px rgba(0,0,0,0.5)")
  }

});

/*Controla funções no Menu Lateral*/
$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    var links = this.el.find('.link');

    links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown);
  }

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };


    if ($(".step:last-child .contentMenu").hasClass("open")) {
      $(".step:last-child .line").show();
    } else {
      $(".step:last-child .line").hide();
    }
  }

  /* Mostra linha da última Aula */
  var accordion = new Accordion($('#accordion'), false);
  if ($(".step:last-child .contentMenu").hasClass("open")) {
    $(".step:last-child .line").show();
  } else {
    $(".step:last-child .line").hide();
  }

});

/* Deixa a aula atual aberta */
$(".contentMenu.open .submenu").show();
$(".step:last-child .line").hide();

/* Adiciona suavidade na rolagem da ancoragem */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* Altera rodapé entre Desktop e Tablet/Smartphone */
var tam = $(window).width();
if (tam <= 980) {
  $("#rodape1").attr("src", "assets/images/rodape/logos1.jpg");
  $("#rodape2").attr("src", "assets/images/rodape/logos2.jpg");
  $("#colunaRodape").removeClass("col-md-10");
  $("#colunaRodape").addClass("col-md-8");
} else {
  $("#rodape2").attr("src", "assets/images/rodape/logos3.jpg");
}

/* Rola tela para o Inicio da Aula */
$(".botaoComecar").click(function () {
  $('html, body').animate({
    scrollTop: 700
  }, 500);
});


/* Adiciona tooltip (Abas) */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})