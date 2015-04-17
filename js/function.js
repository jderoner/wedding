// Vertical panel scroll
$(document).ready(function() {
  $('nav').onePageNav({
    currentClass: 'current',
 	changeHash: false,
 	scrollSpeed: 1400
  });
  $("#rsvp").click(function(){
	$('html,body').scrollTo('#menu7','slow');
	});
});

// Gallery slider
$(window).load(function(){
	$('.flexslider, .flexslider-small').flexslider({
		slideshow: false,						
    	animation: "slide",
        animationLoop: false,
        //itemWidth: 840,
        start: function(slider){
          $('body').removeClass('loading');
        }
    });
});

// Contact form validation
$(document).ready(function() {
	$("#rsvpForm").validationEngine({scroll: false});
    $.get('libs/token.php',function(txt){
    		$('form').append('<input type="hidden" name="ts" value="'+txt+'"/>');
        });
                    
    $('#submit').click(function() {
    	if($('#rsvpForm').validationEngine('validate') == true) {
        	$.post('sendform.php',$('#rsvpForm').serializeArray(),function(data){
        	if(data.success == true)
            	{
            		$('form#rsvpForm').slideUp("fast", function() {				   
                    	$(this).before('<p class="result"><strong>Thanks!</strong> Your RSVP has been delivered!</p>');
                    });
                }
            },'json');
        }
	});
});