$(window).load(function () {

  let image1 = 'http://i66.tinypic.com/2nw1gck.png';
  let image2 = 'http://i63.tinypic.com/35jm73c.jpg';
  let image3 = 'http://i66.tinypic.com/2nw1gck.png';

  let images = [
    image1,
    image2,
    image3
  ];
  let modelSection = document.getElementById('model-section');

  $('.thumbnails').bind('click', function (event) {
    let id = $(this).attr('data-id');

    let imageSouce = images[id-1];

    let img = document.createElement('img');
    img.src = imageSouce;

    modelSection.appendChild(img);

    $('#modal').modal('show');
  });

  $('#modal').on('hidden.bs.modal', function () {
    modelSection.removeChild(modelSection.lastChild);
  });

});