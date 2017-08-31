$(
    function(){
        $('.js-esconder').hide();
        $('.videos')
            .mouseover( function() {
                    $(this).children().stop().fadeTo('medium', 0.2)            
                }
            )
            .mouseleave( function(){
            $(this).children().stop().fadeTo('medium', 1)
        }
        );
    }
);

function exibecategoria(id) {
    $(
        function(){
        $('.grupo-videos').hide();
        $('#grupo' + id).fadeIn();
        }
    );
}