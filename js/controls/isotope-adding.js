$(function(){
      
    var $container = $('#container');
          
    $('#insert a').click(function(){
    var $newEls = $( fakeElement.getGroup() );
    $container.isotope( 'insert', $newEls );

    return false;
    });

    $('#append a').click(function(){
    var $newEls = $( fakeElement.getGroup() );
    $container.append( $newEls ).isotope( 'appended', $newEls );

    return false;
    });


    $('#prepend a').click(function(){
    var $newEls = $( fakeElement.getGroup() );
    $container
        .prepend( $newEls ).isotope('reloadItems').isotope({ sortBy: 'original-order' })
        // set sort back to symbol for inserting
        .isotope('option', { sortBy: 'symbol' });

    return false;
    });

    $container.isotope({
    itemSelector : '.element',
    filter: '*',
    getSortData : {
        symbol : function( $elem ) {
        return $elem.attr('data-symbol');
        }
    },
    sortBy : 'symbol'
    });
    
});