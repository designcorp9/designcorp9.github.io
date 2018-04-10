$(window).load(function () {

  let image1 = $('#image1');
  let image2 = $('#image2');
  let image3 = $('#image3');
  let image4 = $('#image4');
  let image5 = $('#image5');
  let image6 = $('#image6');
  let image7 = $('#image7');

  $('.thumbnails').bind('click', function (event) {
    let id = $(this).attr('data-id');

    let image = $('#image' + id);
    image.show();
    $('#modal').modal('show');
  });

  $('#modal').on('hidden.bs.modal', function () {
    image1.hide();
    image2.hide();
    image3.hide();
    image4.hide();
    image5.hide();
    image6.hide();
    image7.hide();
  });

});