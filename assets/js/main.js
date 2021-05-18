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

/* Adiciona tooltip (Abas) */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


/* Rola tela para o Inicio da Aula */
$(document).ready(function(){
  var tam = $(window).width();
  if (tam <= 980) {
    $("#inicioAula1").click(function () {
      $('html, body').animate({
        scrollTop: 1050
      }, 500);
    });

    $("#inicioAula2").click(function () {
      $('html, body').animate({
        scrollTop: 1080
      }, 500);
    });

    $("#inicioAula3").click(function () {
      $('html, body').animate({
        scrollTop: 1100
      }, 500);
    });

    $("#inicioAula4").click(function () {
      $('html, body').animate({
        scrollTop: 980
      }, 500);
    });

    $("#inicioAula5").click(function () {
      $('html, body').animate({
        scrollTop: 1100
      }, 500);
    });

    $("#inicioAula6").click(function () {
      $('html, body').animate({
        scrollTop: 710
      }, 500);
    });

    $("#inicioAula7").click(function () {
      $('html, body').animate({
        scrollTop: 950
      }, 500);
    });

    if (tam <= 480) {
      $("#inicioAula1").click(function () {
        $('html, body').animate({
          scrollTop: 1450
        }, 500);
      });

      $("#inicioAula2").click(function () {
        $('html, body').animate({
          scrollTop: 1430
        }, 500);
      });

      $("#inicioAula3").click(function () {
        $('html, body').animate({
          scrollTop: 1450
        }, 500);
      });

      $("#inicioAula4").click(function () {
        $('html, body').animate({
          scrollTop: 1470
        }, 500);
      });

      $("#inicioAula5").click(function () {
        $('html, body').animate({
          scrollTop: 1635
        }, 500);
      });

      $("#inicioAula6").click(function () {
        $('html, body').animate({
          scrollTop: 1005
        }, 500);
      });

      $("#inicioAula7").click(function () {
        $('html, body').animate({
          scrollTop: 1395
        }, 500);
      });
    }
  } else {
    $("#inicioAula1").click(function () {
      $('html, body').animate({
        scrollTop: 900
      }, 500);
    });

    $("#inicioAula2").click(function () {
      $('html, body').animate({
        scrollTop: 1000
      }, 500);
    });

    $("#inicioAula3").click(function () {
      $('html, body').animate({
        scrollTop: 1000
      }, 500);
    });

    $("#inicioAula4").click(function () {
      $('html, body').animate({
        scrollTop: 820
      }, 500);
    });

    $("#inicioAula5").click(function () {
      $('html, body').animate({
        scrollTop: 900
      }, 500);
    });

    $("#inicioAula6").click(function () {
      $('html, body').animate({
        scrollTop: 650
      }, 500);
    });

    $("#inicioAula7").click(function () {
      $('html, body').animate({
        scrollTop: 780
      }, 500);
    });
}
});
