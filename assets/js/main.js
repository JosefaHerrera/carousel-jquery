alert("los gatos dominaran el mundo !");


$(document).ready(function() {


    var fotos = [
        'assets/img/img1.jpg',
        'assets/img/img2.jpg',
        'assets/img/img3.jpg',
        'assets/img/img4.jpg',
        'assets/img/img5.jpg'
    ];

    var contador = 0;
    setInterval(function() {
        contador++;
        if (contador > fotos.length - 1) {
            contador = 0;
        }
        appendPhoto(fotos[contador]);

    }, 3000);

    // flechas
    $('#arrow-left').on('click', function() {
        contador--;
        if (contador < 0) {
            contador = fotos.length - 1;
        }
        console.log(contador);
        appendPhoto(fotos[contador]);

    });

    $('#arrow-right').on('click', function() {
        contador++;
        if (contador > fotos.length - 1) {
            contador = 0;
        }
        appendPhoto(fotos[contador]);
    });

    function appendPhoto(photo) {
        $('#gatos').empty().append('<img src="' + photo + '" alt="Cat">');
    }

});




