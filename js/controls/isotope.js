
/*$('#container').isotope({
  // options
  itemSelector : '.photo',
  masonry: {
      columnWidth: 15
  }
});

var $container = $container('#container')

$container.isotope({
    resizable: false,
    masonry: { columnWidth: $container.width() / 5 }    
});

$container(window).smartresize(function () {
    $container.isotope({
        masonry: { columnWidth: $container.width() / 5 }
    });
});

*/

    $(function(){

      var $container = $('#container');
    
      $container.imagesLoaded( function(){
        $container.isotope({
          itemSelector : '.photo'
        });
      });    
    });