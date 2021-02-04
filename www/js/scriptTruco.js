$(document).ready(function(){

  $('#treinta').on('click', jugarA30);
  $('#24').on('click', jugarA24);

  $('#suma1').on('click', sumarE1);
  $('#resta1').on('click', restarE1);
  $('#suma2').on('click', sumarE2);
  $('#resta2').on('click', restarE2);

  $('#inicio').on('click', fnInicio);
  $('#final').on('click', fnFinal);


  function fnInicio() {
    $('#pantalla1').removeClass('visible').addClass('no-visible');
    $('#pantalla2').removeClass('no-visible').addClass('visible');

    var valorE1 = $('#e1').val();
    var valorE2 = $('#e2').val();
    $('#nom1').val(valorE1);
    $('#nom2').val(valorE2);
  }

  function fnFinal() {
    puntos = 0;
    puntaje = 0;
    $('#pantalla2').removeClass('visible').addClass('no-visible');
    $('#pantalla1').removeClass('no-visible').addClass('visible');

    $('#e1').val('');
    $('#e2').val('');

    $('#parrafo').text('');

    $('#p1').val('');
    $('#p2').val('');

    $('#0').attr('src', 'img/0.png');
    $('#1').attr('src', 'img/0.png');
    $('#2').attr('src', 'img/0.png');
    $('#3').attr('src', 'img/0.png');
    $('#4').attr('src', 'img/0.png');
    $('#5').attr('src', 'img/0.png');
  }

var tope = 0;

  function jugarA30() {
    $('#parrafo').text('a 30');

    $('#24').css({
        "border-color": "rgb(128,198,145)",
        "color": "rgb(128,198,145)"
    });
    $('#treinta').css({
      "border-color": "white",
      "color": "white"
    });

    tope = 30;
  }

    function jugarA24() {
      $('#parrafo').text('a 24');

      $('#treinta').css({
        "border-color": "rgb(128,198,145)",
        "color": "rgb(128,198,145)"
      });
      $('#24').css({
        "border-color": "white",
        "color": "white"
      });

      tope = 24;
    }

    var puntos = 0;

    function sumarE1() {
      if (puntos < tope) {
        puntos = puntos + 1;
        $('#p1').val(puntos);
        console.log(puntos);
      }
      if (tope == 24) {
        switchSumar24E1();
      } else {
        switchSumar30E1();
      }
    }

    function restarE1() {
      if (puntos > 0) {
        puntos = puntos - 1;
        console.log(puntos);
        $('#p1').val(puntos);
      }
      if (tope == 24) {
        switchRestar24E1();
      } else {
        switchRestar30E1();
      }
    }

    var puntaje = 0;

    function sumarE2() {
      if (puntaje < tope) {
        puntaje = puntaje + 1;
        $('#p2').val(puntaje);
        console.log(puntaje);
      }
      if (tope == 24) {
        switchSumar24E2();
      } else {
        switchSumar30E2();
      }
    }

    function restarE2() {
      if (puntaje > 0) {
        puntaje = puntaje - 1;
        console.log(puntaje);
        $('#p2').val(puntaje);
      }
      if (tope == 24) {
        switchRestar24E2();
      } else {
        switchRestar30E2();
      }
    }

    function switchSumar30E1() {
      switch(puntos){
      case puntos = 1: $('#0').attr('src','img/1.png');break
      case puntos = 2: $('#0').attr('src','img/2.png');break
      case puntos = 3: $('#0').attr('src','img/3.png');break
      case puntos = 4: $('#0').attr('src','img/4.png');break
      case puntos = 5: $('#0').attr('src','img/5.png');break
      case puntos = 6: $('#1').attr('src','img/1.png');break
      case puntos = 7: $('#1').attr('src','img/2.png');break
      case puntos = 8: $('#1').attr('src','img/3.png');break
      case puntos = 9: $('#1').attr('src','img/4.png');break
      case puntos = 10: $('#1').attr('src','img/5.png');break
      case puntos = 11: $('#2').attr('src','img/1.png');break
      case puntos = 12: $('#2').attr('src','img/2.png');break
      case puntos = 13: $('#2').attr('src','img/3.png');break
      case puntos = 14: $('#2').attr('src','img/4.png');break
      case puntos = 15: $('#2').attr('src','img/5.png');break
      case puntos = 16: $('#3').attr('src','img/1.png');break
      case puntos = 17: $('#3').attr('src','img/2.png');break
      case puntos = 18: $('#3').attr('src','img/3.png');break
      case puntos = 19: $('#3').attr('src','img/4.png');break
      case puntos = 20: $('#3').attr('src','img/5.png');break
      case puntos = 21: $('#4').attr('src','img/1.png');break
      case puntos = 22: $('#4').attr('src','img/2.png');break
      case puntos = 23: $('#4').attr('src','img/3.png');break
      case puntos = 24: $('#4').attr('src','img/4.png');break
      case puntos = 25: $('#4').attr('src','img/5.png');break
      case puntos = 26: $('#5').attr('src','img/1.png');break
      case puntos = 27: $('#5').attr('src','img/2.png');break
      case puntos = 28: $('#5').attr('src','img/3.png');break
      case puntos = 29: $('#5').attr('src','img/4.png');break
      case puntos = 30: $('#5').attr('src','img/5.png');break
      default:
      }
    }

    function switchSumar24E1() {
      switch(puntos){
        case puntos = 1: $('#0').attr('src','img/1.png');break
        case puntos = 2: $('#0').attr('src','img/2.png');break
        case puntos = 3: $('#0').attr('src','img/3.png');break
        case puntos = 4: $('#0').attr('src','img/4.png');break
        case puntos = 5: $('#0').attr('src','img/5.png');break
        case puntos = 6: $('#1').attr('src','img/1.png');break
        case puntos = 7: $('#1').attr('src','img/2.png');break
        case puntos = 8: $('#1').attr('src','img/3.png');break
        case puntos = 9: $('#1').attr('src','img/4.png');break
        case puntos = 10: $('#1').attr('src','img/5.png');break
        case puntos = 11: $('#2').attr('src','img/1.png');break
        case puntos = 12: $('#2').attr('src','img/2.png');break
        //corte
        case puntos = 13: $('#3').attr('src','img/1.png');break
        case puntos = 14: $('#3').attr('src','img/2.png');break
        case puntos = 15: $('#3').attr('src','img/3.png');break
        case puntos = 16: $('#3').attr('src','img/4.png');break
        case puntos = 17: $('#3').attr('src','img/5.png');break
        case puntos = 18: $('#4').attr('src','img/1.png');break
        case puntos = 19: $('#4').attr('src','img/2.png');break
        case puntos = 20: $('#4').attr('src','img/3.png');break
        case puntos = 21: $('#4').attr('src','img/4.png');break
        case puntos = 22: $('#4').attr('src','img/5.png');break
        case puntos = 23: $('#5').attr('src','img/1.png');break
        case puntos = 24: $('#5').attr('src','img/2.png');break
        default:
      }
    }

function switchRestar30E1() {
  switch(puntos){
  case puntos = 0: $('#0').attr('src','img/0.png');break
  case puntos = 1: $('#0').attr('src','img/1.png');break
  case puntos = 2: $('#0').attr('src','img/2.png');break
  case puntos = 3: $('#0').attr('src','img/3.png');break
  case puntos = 4: $('#0').attr('src','img/4.png');break
  case puntos = 5: $('#0').attr('src','img/5.png');break
  case puntos = 6: $('#1').attr('src','img/1.png');$('#1').attr('src','img/0.png');break
  case puntos = 7: $('#1').attr('src','img/2.png');break
  case puntos = 8: $('#1').attr('src','img/3.png');break
  case puntos = 9: $('#1').attr('src','img/4.png');break
  case puntos = 10: $('#1').attr('src','img/5.png');$('#2').attr('src','img/0.png');break
  case puntos = 11: $('#2').attr('src','img/1.png');break
  case puntos = 12: $('#2').attr('src','img/2.png');break
  case puntos = 13: $('#2').attr('src','img/3.png');break
  case puntos = 14: $('#2').attr('src','img/4.png');break
  case puntos = 15: $('#2').attr('src','img/5.png');$('#3').attr('src','img/0.png');break
  case puntos = 16: $('#3').attr('src','img/1.png');break
  case puntos = 17: $('#3').attr('src','img/2.png');break
  case puntos = 18: $('#3').attr('src','img/3.png');break
  case puntos = 19: $('#3').attr('src','img/4.png');break
  case puntos = 20: $('#3').attr('src','img/5.png');$('#4').attr('src','img/0.png');break
  case puntos = 21: $('#4').attr('src','img/1.png');break
  case puntos = 22: $('#4').attr('src','img/2.png');break
  case puntos = 23: $('#4').attr('src','img/3.png');break
  case puntos = 24: $('#4').attr('src','img/4.png');break
  case puntos = 25: $('#4').attr('src','img/5.png');$('#5').attr('src','img/0.png');break
  case puntos = 26: $('#5').attr('src','img/1.png');break
  case puntos = 27: $('#5').attr('src','img/2.png');break
  case puntos = 28: $('#5').attr('src','img/3.png');break
  case puntos = 29: $('#5').attr('src','img/4.png');break
  case puntos = 30: $('#5').attr('src','img/5.png');break
  default:
  }
}

function switchRestar24E1() {
  switch(puntos){
  case puntos = 1: $('#0').attr('src','img/0.png');break
  case puntos = 1: $('#0').attr('src','img/1.png');break
  case puntos = 2: $('#0').attr('src','img/2.png');break
  case puntos = 3: $('#0').attr('src','img/3.png');break
  case puntos = 4: $('#0').attr('src','img/4.png');break
  case puntos = 5: $('#0').attr('src','img/5.png');$('#1').attr('src','img/0.png');break
  case puntos = 6: $('#1').attr('src','img/1.png');break
  case puntos = 7: $('#1').attr('src','img/2.png');break
  case puntos = 8: $('#1').attr('src','img/3.png');break
  case puntos = 9: $('#1').attr('src','img/4.png');break
  case puntos = 10: $('#1').attr('src','img/5.png');$('#2').attr('src','img/0.png');break
  case puntos = 11: $('#2').attr('src','img/1.png');break
  case puntos = 12: $('#2').attr('src','img/2.png');$('#3').attr('src','img/0.png');break
  //corte
  case puntos = 13: $('#3').attr('src','img/1.png');break
  case puntos = 14: $('#3').attr('src','img/2.png');break
  case puntos = 15: $('#3').attr('src','img/3.png');break
  case puntos = 16: $('#3').attr('src','img/4.png');break
  case puntos = 17: $('#3').attr('src','img/5.png');$('#4').attr('src','img/0.png');;break
  case puntos = 18: $('#4').attr('src','img/1.png');break
  case puntos = 19: $('#4').attr('src','img/2.png');break
  case puntos = 20: $('#4').attr('src','img/3.png');break
  case puntos = 21: $('#4').attr('src','img/4.png');break
  case puntos = 22: $('#4').attr('src','img/5.png');;$('#5').attr('src','img/0.png');break
  case puntos = 23: $('#5').attr('src','img/1.png');break
  case puntos = 24: $('#5').attr('src','img/2.png');break
  default:
  }
}

function switchSumar30E2() {
  switch(puntaje){
  case puntaje = 1: $('#6').attr('src','img/1.png');break
  case puntaje = 2: $('#6').attr('src','img/2.png');break
  case puntaje = 3: $('#6').attr('src','img/3.png');break
  case puntaje = 4: $('#6').attr('src','img/4.png');break
  case puntaje = 5: $('#6').attr('src','img/5.png');break
  case puntaje = 6: $('#7').attr('src','img/1.png');break
  case puntaje = 7: $('#7').attr('src','img/2.png');break
  case puntaje = 8: $('#7').attr('src','img/3.png');break
  case puntaje = 9: $('#7').attr('src','img/4.png');break
  case puntaje = 10: $('#7').attr('src','img/5.png');break
  case puntaje = 11: $('#8').attr('src','img/1.png');break
  case puntaje = 12: $('#8').attr('src','img/2.png');break
  case puntaje = 13: $('#8').attr('src','img/3.png');break
  case puntaje = 14: $('#8').attr('src','img/4.png');break
  case puntaje = 15: $('#8').attr('src','img/5.png');break
  case puntaje = 16: $('#9').attr('src','img/1.png');break
  case puntaje = 17: $('#9').attr('src','img/2.png');break
  case puntaje = 18: $('#9').attr('src','img/3.png');break
  case puntaje = 19: $('#9').attr('src','img/4.png');break
  case puntaje = 20: $('#9').attr('src','img/5.png');break
  case puntaje = 21: $('#10').attr('src','img/1.png');break
  case puntaje = 22: $('#10').attr('src','img/2.png');break
  case puntaje = 23: $('#10').attr('src','img/3.png');break
  case puntaje = 24: $('#10').attr('src','img/4.png');break
  case puntaje = 25: $('#10').attr('src','img/5.png');break
  case puntaje = 26: $('#11').attr('src','img/1.png');break
  case puntaje = 27: $('#11').attr('src','img/2.png');break
  case puntaje = 28: $('#11').attr('src','img/3.png');break
  case puntaje = 29: $('#11').attr('src','img/4.png');break
  case puntaje = 30: $('#11').attr('src','img/5.png');break
  default:
  }
}

function switchSumar24E2() {
  switch(puntaje){
  case puntaje = 1: $('#6').attr('src','img/1.png');break
  case puntaje = 2: $('#6').attr('src','img/2.png');break
  case puntaje = 3: $('#6').attr('src','img/3.png');break
  case puntaje = 4: $('#6').attr('src','img/4.png');break
  case puntaje = 5: $('#6').attr('src','img/5.png');break
  case puntaje = 6: $('#7').attr('src','img/1.png');break
  case puntaje = 7: $('#7').attr('src','img/2.png');break
  case puntaje = 8: $('#7').attr('src','img/3.png');break
  case puntaje = 9: $('#7').attr('src','img/4.png');break
  case puntaje = 10: $('#7').attr('src','img/5.png');break
  case puntaje = 11: $('#8').attr('src','img/1.png');break
  case puntaje = 12: $('#8').attr('src','img/2.png');break
  //corte
  case puntaje = 13: $('#9').attr('src','img/1.png');break
  case puntaje = 14: $('#9').attr('src','img/2.png');break
  case puntaje = 15: $('#9').attr('src','img/3.png');break
  case puntaje = 16: $('#9').attr('src','img/4.png');break
  case puntaje = 17: $('#9').attr('src','img/5.png');break
  case puntaje = 18: $('#10').attr('src','img/1.png');break
  case puntaje = 19: $('#10').attr('src','img/2.png');break
  case puntaje = 20: $('#10').attr('src','img/3.png');break
  case puntaje = 21: $('#10').attr('src','img/4.png');break
  case puntaje = 22: $('#10').attr('src','img/5.png');break
  case puntaje = 23: $('#11').attr('src','img/1.png');break
  case puntaje = 24: $('#11').attr('src','img/2.png');break
  default:
  }
}

function switchRestar30E2() {
  switch(puntaje){
  case puntaje = 0: $('#6').attr('src','img/0.png');break
  case puntaje = 1: $('#6').attr('src','img/1.png');break
  case puntaje = 2: $('#6').attr('src','img/2.png');break
  case puntaje = 3: $('#6').attr('src','img/3.png');break
  case puntaje = 4: $('#6').attr('src','img/4.png');break
  case puntaje = 5: $('#6').attr('src','img/5.png');break
  case puntaje = 6: $('#7').attr('src','img/1.png');$('#7').attr('src','img/0.png');break
  case puntaje = 7: $('#7').attr('src','img/2.png');break
  case puntaje = 8: $('#7').attr('src','img/3.png');break
  case puntaje = 9: $('#7').attr('src','img/4.png');break
  case puntaje = 10: $('#7').attr('src','img/5.png');$('#8').attr('src','img/0.png');break
  case puntaje = 11: $('#8').attr('src','img/1.png');break
  case puntaje = 12: $('#8').attr('src','img/2.png');break
  case puntaje = 13: $('#8').attr('src','img/3.png');break
  case puntaje = 14: $('#8').attr('src','img/4.png');break
  case puntaje = 15: $('#8').attr('src','img/5.png');$('#9').attr('src','img/0.png');break
  case puntaje = 16: $('#9').attr('src','img/1.png');break
  case puntaje = 17: $('#9').attr('src','img/2.png');break
  case puntaje = 18: $('#9').attr('src','img/3.png');break
  case puntaje = 19: $('#9').attr('src','img/4.png');break
  case puntaje = 20: $('#9').attr('src','img/5.png');$('#10').attr('src','img/0.png');break
  case puntaje = 21: $('#10').attr('src','img/1.png');break
  case puntaje = 22: $('#10').attr('src','img/2.png');break
  case puntaje = 23: $('#10').attr('src','img/3.png');break
  case puntaje = 24: $('#10').attr('src','img/4.png');break
  case puntaje = 25: $('#10').attr('src','img/5.png');$('#11').attr('src','img/0.png');break
  case puntaje = 26: $('#11').attr('src','img/1.png');break
  case puntaje = 27: $('#11').attr('src','img/2.png');break
  case puntaje = 28: $('#11').attr('src','img/3.png');break
  case puntaje = 29: $('#11').attr('src','img/4.png');break
  case puntaje = 30: $('#11').attr('src','img/5.png');break
  default:
  }
}

function switchRestar24E2() {
  switch(puntaje){
  case puntaje = 1: $('#6').attr('src','img/0.png');break
  case puntaje = 1: $('#6').attr('src','img/1.png');break
  case puntaje = 2: $('#6').attr('src','img/2.png');break
  case puntaje = 3: $('#6').attr('src','img/3.png');break
  case puntaje = 4: $('#6').attr('src','img/4.png');break
  case puntaje = 5: $('#6').attr('src','img/5.png');$('#7').attr('src','img/0.png');break
  case puntaje = 6: $('#7').attr('src','img/1.png');break
  case puntaje = 7: $('#7').attr('src','img/2.png');break
  case puntaje = 8: $('#7').attr('src','img/3.png');break
  case puntaje = 9: $('#7').attr('src','img/4.png');break
  case puntaje = 10: $('#7').attr('src','img/5.png');$('#8').attr('src','img/0.png');break
  case puntaje = 11: $('#8').attr('src','img/1.png');break
  case puntaje = 12: $('#8').attr('src','img/2.png');$('#9').attr('src','img/0.png');break
  //corte
  case puntaje = 13: $('#9').attr('src','img/1.png');break
  case puntaje = 14: $('#9').attr('src','img/2.png');break
  case puntaje = 15: $('#9').attr('src','img/3.png');break
  case puntaje = 16: $('#9').attr('src','img/4.png');break
  case puntaje = 17: $('#9').attr('src','img/5.png');$('#10').attr('src','img/0.png');;break
  case puntaje = 18: $('#10').attr('src','img/1.png');break
  case puntaje = 19: $('#10').attr('src','img/2.png');break
  case puntaje = 20: $('#10').attr('src','img/3.png');break
  case puntaje = 21: $('#10').attr('src','img/4.png');break
  case puntaje = 22: $('#10').attr('src','img/5.png');;$('#11').attr('src','img/0.png');break
  case puntaje = 23: $('#11').attr('src','img/1.png');break
  case puntaje = 24: $('#11').attr('src','img/2.png');break
  default:
  }
}

});
