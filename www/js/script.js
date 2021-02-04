$(document).ready(function() {

      $('#treinta').on('click', jugarA30);
      $('#24').on('click', jugarA24);

      $('#suma1').on('click', sumarE1a30);
      $('#resta1').on('click', restarE1);
      $('#suma2').on('click', sumarE2a30);
      $('#resta2').on('click', restarE2);

      $('#suma1').on('click', sumarE1a24);
      $('#resta1').on('click', restarE1);
      $('#suma2').on('click', sumarE2a24);
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

        if ($('#parrafo').text() = 'a 30') {
          sumarE1a30;
          restarE1;
          sumarE2a30;
          restarE2;
        } else {
          sumarE1a24;
          restarE1;
          sumarE2a24;
          restarE2;
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

          // $('#suma1').on('click', sumarE1a30);
          // $('#resta1').on('click', restarE1);
          //
          // $('#suma2').on('click', sumarE2a30);
          // $('#resta2').on('click', restarE2);
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

          // $('#suma1').on('click', sumarE1a24);
          // $('#resta1').on('click', restarE1);
          //
          // $('#suma2').on('click', sumarE2a24);
          // $('#resta2').on('click', restarE2);
        }

        var puntos = 0;

        function sumarE1a30() {
          if (puntos < 30) {
            puntos += 1;
            $('#p1').val(puntos);
            console.log(puntos);
          }

        }

        function restarE1() {
          if (puntos > 0) {
            puntos -= 1;
            console.log(puntos);
            $('#p1').val(puntos);
          }
        }

        function sumarE1a24() {
          if (puntos < 24) {
            puntos += 1;
            $('#p1').val(puntos);
            console.log(puntos);
          }
        }

        var puntaje = 0;

        function sumarE2a30() {
          if (puntaje < 30) {
            puntaje += 1;
            $('#p2').val(puntaje);
            console.log(puntaje);
          }
        }

        function restarE2() {
          if (puntaje > 0) {
            puntaje -= 1;
            console.log(puntaje);
            $('#p2').val(puntaje);
          }
        }

        function sumarE2a24() {
          if (puntaje < 24) {
            puntaje += 1;
            $('#p2').val(puntaje);
            console.log(puntaje);
          }
        }




      });
