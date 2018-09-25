$(document).ready(function(){
      $('.slider').slick({
     
			  dots: true,
			  infinite: true,
			  speed: 500,
			  fade: true,
			  cssEase: 'linear',
			  autoplay:true,
			  autoplaySpeed:4500,
								});
	$('.latest_blog_slick').slick({
			  dots: false,
			  infinite: true,
			  speed: 300,
			  slidesToShow: 1,
			  // adaptiveHeight: true,
			  autoplay:true,
			  // autoplaySpeed:10000,
			  fade: true,
			  nextArrow: '<button type="button" class="slick-next2">Next</button>',
			  prevArrow: '<button type="button" class="slick-prev2">Previous</button>'
						});
	
	
});
   
