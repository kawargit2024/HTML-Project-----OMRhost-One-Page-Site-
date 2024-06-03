(function($) {
    "use strict";



 /*-----------------------Hero Slider-------------------------*/
		
	    $(document).ready(function(){
		  $('#heroSlider').slick({
			  slidesToShow:1,
			  dots:false,
			  arrows: true,
			  centerMode: false,
			  autoplay:true,
			  autoplaySpeed: 10000,
			  fade: true,

		  });
		});
		
		
		
	 /*-----------------------Client Slider-------------------------*/
		
	    $(document).ready(function(){
		  $('#clientSLider').slick({
			  slidesToShow:3,
			  dots:false,
			  arrows: true,
			  margin: 30,
			  centerMode: true,
			  autoplay:false,
			  autoplaySpeed: 10000,
			  fade: false,
			  responsive: [
						{
						  breakpoint: 1199,
						  settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
						  }
						},
						{
						  breakpoint: 991,
						  settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						  }
						},
						{
						  breakpoint: 767,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						  }
						},
							{
						  breakpoint: 576,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						  }
						}
				],
			  navText: ["<i class='fas fa-chevron-left'></i>",
					"<i class='fas fa-chevron-right'></i>"
				]
				
		  });
		});	
		
		/*------------ Single offer itam active ------*/	
		$(".single-offer-item").hover(function(){
				$(".single-offer-item").removeClass('active');
				$(this).addClass('active');
			
				}); 
				
		/*------------ Single pricing itam active ------*/	
		$(".single-pricing-item").hover(function(){
				$(".single-pricing-item").removeClass('active');
				$(this).addClass('active');
			
		}); 
		
		
			/*------------ Single pricing itam active ------*/	
		$(".single-choose-us-item").hover(function(){
				$(".single-choose-us-item").removeClass('active');
				$(this).addClass('active');
			
		}); 

	/*------------ Single pricing itam active ------*/	
		$("#clientSLider .slick-next.slick-arrow").on('click', function(){
				$("#clientSLider .slick-next.slick-arrow").removeClass('active');
				$(this).addClass('active');
			
		}); 
	 	
		
		 /*------------------------------------------COUNTER------------------------------*/
	 
			var countOne = $('#count-test1');
			var countTwo = $('#count-test2');
			var countThree = $('#count-test3');
			var countFour = $('#count-test4');
			 
			countOne.jQuerySimpleCounter({
				start:  50,
				end:    3245,
				easing: 'swing',
				duration: 20000
			 });
				
			countTwo.jQuerySimpleCounter({
				start:  50,
				end:    281,
				easing: 'swing',
				duration: 20000
			 });
				
			countThree.jQuerySimpleCounter({
				start:  50,
				end:    4185,
				easing: 'swing',
				duration: 20000
			 });
			countFour.jQuerySimpleCounter({
				start:  50,
				end:    195,
				easing: 'swing',
				duration: 20000
			 });
			 
		 /*------------------------------------------Mobile Menu------------------------------*/
			$('#mobileMenu').slicknav({
				 prependTo:'#mobileMenuWrapper'
			});

		
}(jQuery));