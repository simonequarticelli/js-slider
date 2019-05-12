$(document).ready(function(){

  $('.next').click(function(){

    //assegno la classe alla prima immagine
    var image__active = $('.active');
    //assegno la classe al primo bullet
    var bullet__active = $('.bg__white');
    //assegno la classe al primo titolo
    var title__active = $('.active');


    //assegno immagine successiva
    var next__image = image__active.next('img'); //<-- assegno img per evitare vhe mi metta la classe su altri tag
    //assegno bullet successivo
    var next__bullet = bullet__active.next('i');
    //assegno titolo successivo
    var next__title = title__active.next('div')


    if ((next__image.length != 0) && (next__bullet.length != 0) && (next__title.length != 0)) {

      //tolgo la classe alla prima immagine
      image__active.removeClass('active');
      //tolgo la classe al primo bullet
      bullet__active.removeClass('bg__white');
      //tolgo la classe al primo titolo
      title__active.removeClass('active');


      //aggiungo la classe alla seconda immagine
      next__image.addClass('active');
      //aggiungo la classe al secondo bullet
      next__bullet.addClass('bg__white');
      //aggiungo la classe al secondo titolo
      next__title.addClass('active');

    }else{
      //aggiungo la classe al primo tag della classe corosel
      $('.carousel img').first().addClass('active');
      //aggiungo la classe all'ultimo tag della classe bullet
      $('.bullet i').first().addClass('bg__white');
      //aggiungo la classe all'ultimo tag della classe container__title
      $('.container__title div').first().addClass('active');

      //tolgo la classe alla prima immagine
      image__active.removeClass('active');
      //tolgo la classe al primo bullet
      bullet__active.removeClass('bg__white');
      //tolgo la classe al primo titolo
      title__active.removeClass('active');
    }


  });

  $('.prev').click(function(){

    //assegno la classe alla prima immagine
    var image__active = $('.active');
    //assegno la classe al primo bullet
    var bullet__active = $('.bg__white');
    //assegno la classe al primo titolo
    var title__active = $('.active');


    //assegno immagine successiva
    var prev__image = image__active.prev('img'); //<-- assegno img per evitare vhe mi metta la classe su altri tag
    //assegno bullet successivo
    var prev__bullet = bullet__active.prev('i');
    //assegno titolo successivo
    var prev__title = title__active.prev('div')


    if ((prev__image.length != 0) && (prev__bullet.length != 0) && (prev__title.length != 0)) {

      //tolgo la classe alla prima immagine
      image__active.removeClass('active');
      //tolgo la classe al primo bullet
      bullet__active.removeClass('bg__white');
      //tolgo la classe al primo titolo
      title__active.removeClass('active');


      //aggiungo la classe alla seconda immagine
      prev__image.addClass('active');
      //aggiungo la classe al secondo bullet
      prev__bullet.addClass('bg__white');
      //aggiungo la classe al secondo titolo
      prev__title.addClass('active');

    }else{
      //aggiungo la classe all'ultimo tag della classe corousel
      $('.carousel img').last().addClass('active');
      //aggiungo la classe all'ultimo tag della classe bullet
      $('.bullet i').last().addClass('bg__white');
      //aggiungo la classe all'ultimo tag della classe container__title
      $('.container__title div').last().addClass('active');

      //tolgo la classe alla prima immagine
      image__active.removeClass('active');
      //tolgo la classe al primo bullet
      bullet__active.removeClass('bg__white');
      //tolgo la classe al primo titolo
      title__active.removeClass('active');
    }

  });

  $('#bul1').click(function(){

    //tolgo le classi a tutti
    $('*').removeClass('active');
    $('*').removeClass('bg__white');

    
    $('#bul1').addClass('bg__white');
    $('#pic1').addClass('active');
    $('#tit1').addClass('active');

  });

  $('#bul2').click(function(){

    $('*').removeClass('active');
    $('*').removeClass('bg__white');

    $('#bul2').addClass('bg__white');
    $('#pic2').addClass('active');
    $('#tit2').addClass('active');

  });

  $('#bul3').click(function(){

    $('*').removeClass('active');
    $('*').removeClass('bg__white');

    $('#bul3').addClass('bg__white');
    $('#pic3').addClass('active');
    $('#tit3').addClass('active');

  });

  $('#bul4').click(function(){

    $('*').removeClass('active');
    $('*').removeClass('bg__white');

    $('#bul4').addClass('bg__white');
    $('#pic4').addClass('active');
    $('#tit4').addClass('active');

  });




































});
