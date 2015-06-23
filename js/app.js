
$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    $('.ryu').mousedown(function(){
        
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
        playHadouken();
    })
    $('.ryu').mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });

    $('.ryu').keydown(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });

     $('body').on('keydown', function(e){
      if(e.which==88){
          $('.ryu-ready').hide();
          $('.ryu-cool').show();  
      }
    });
     $('body').on('keyup', function(e){
      if(e.which==88){
          $('.ryu-cool').hide();
          $('.ryu-ready').show();     
      }
    });

});

function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }