$(window).load(function () {

  let image1 = 'http://imgbox.com/stvfxYca';
  let image2 = 'http://i63.tinypic.com/35jm73c.jpg';
  let image3 = 'http://i66.tinypic.com/2nw1gck.png';

  let images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
    image34,
    image35,
    image36,
    image37,
    image38,
    image39,
    image40,
    image41,
    image42,
    image43,
    image44,
    image45,
    image46,
    image47,
    image48,
    image49,
    image50,
    image51,
    image52,
    image53
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

  // $('#load-more').bind('click', function (event) {
  //   $('#additional-image-section').show();
  // });

  $('#modal').on('hidden.bs.modal', function () {
    modelSection.removeChild(modelSection.lastChild);
  });

  setTimeout(function(){
    $('#default-filter').trigger('click');
  }, 1000);

});
