
/*Progress Check Aula 6*/
$("#progressCheck22").change(function () {
  if (this.checked) {
    $("#topico21").addClass("visited");
  } else {
    $("#topico21").removeClass("visited");
  }
});

$("#progressCheck23").change(function () {
  if (this.checked) {
    $("#topico22").addClass("visited");
  } else {
    $("#topico22").removeClass("visited");
  }
});

$("#progressCheck24").change(function () {
  if (this.checked) {
    $("#topico23").addClass("visited");
  } else {
    $("#topico23").removeClass("visited");
  }
});

$("#progressCheck25").change(function () {
  if (this.checked) {
    $("#topico24").addClass("visited");
  } else {
    $("#topico24").removeClass("visited");
  }
});

/*Progresso Conclusão Aula 6*/
$("#progressCheck25").change(function () {
  if (this.checked) {
    $("#aula6").addClass("completed");
  } else {
    $("#aula6").removeClass("completed");
  }
});