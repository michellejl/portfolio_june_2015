// IMAGE OVERLAY TEXT
$(window).load(function(){
    $('div.description').each(function(){
        $(this).css('opacity', 0);
        $(this).css('width', $(this).siblings('img').width());
        $(this).parent().css('width', $(this).siblings('img').width());
        $(this).css('display', 'block');
    });

    $('div.wrapper').hover(function(){
        $(this).children('.description').stop().fadeTo(500, 0.7);
    },function(){
        $(this).children('.description').stop().fadeTo(500, 0);
    });
});


// ANIMATION TRIGGERS
function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);

        });
}

$(document).ready(function(){

    function animationClickTrigger(trigger, element, animation){
        element = $(element);
        trigger = $(trigger);
        trigger.click(
            function() {
                element.addClass('animated ' + animation);
                //wait for animation to finish before removing classes
                window.setTimeout( function(){
                    element.removeClass('animated ' + animation);
                }, 2000);

            });
    }

    function animationHoverTrigger(trigger, element, animation){
        element = $(element);
        trigger = $(trigger);
        trigger.hover(
            function() {
                element.addClass('animated ' + animation);
            },
            function(){
                //wait for animation to finish before removing classes
                window.setTimeout( function(){
                    element.removeClass('animated ' + animation);
                }, 2000);
            });
    }

});



// ANIMATION CALLS

    // Resume Icon
    $(document).ready(function(){
        $('#resume').each(function() {
            animationHover(this, 'tada');
       });
    });

    // Me in Contact Card
    $(document).ready(function(){
        $('#meDrawing').each(function() {
            animationHover(this, 'flip');
        });
    });

    // Social Icon Animation
    $(document).ready(function(){
        $('#instagramSocial').each(function() {
            animationHover(this, 'rotateIn');
        });
    });
    $(document).ready(function(){
        $('#linkedinSocial').each(function() {
            animationHover(this, 'rotateIn');
        });
    });


// CARD FLIPS

(function() {
    var cards = document.querySelectorAll(".card.effectClick");
    for ( var i  = 0, len = cards.length; i < len; i++ ) {
        var card = cards[i];
        clickListener( card );
    }

    function clickListener(card) {
        card.addEventListener( "click", function() {
            var c = this.classList;
            c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
        });
    }
})();

