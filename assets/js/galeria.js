$(
    function(){
        $('.js-esconder').hide();
        $('.imagem')
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
        $('.grupo-imagens').hide();
        $('#grupo' + id).fadeIn();
        }
    );
}