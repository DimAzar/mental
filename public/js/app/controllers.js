mentalApp.controller('I18NController', ['$scope', '$rootScope', '$translate', function($scope, $rootScope, $translate) {
	 $scope.changeLanguage = function (key) {
	    $translate.use(key);
	 };
}]);

mentalApp.controller('MentalController',[ '$scope', '$window', '$rootScope', 'DownloadService', function($scope, $window, $rootScope, downloadService) {
	$scope.connected = false;
	$rootScope.bgimg = "resources/img/lightWAIT.png";
	$rootScope.ulyssesmsg = '';
	
	$scope.principal = 'unknown';

	$scope.downloadReportFile = function (objectID) {
		downloadService.downloadReport(objectID);
	};

}]);

mentalApp.controller('CustomersController',[ '$scope', '$window', '$rootScope', 'DownloadService', function($scope, $window, $rootScope, downloadService) {
        $(".flexiselDemo1").flexisel({
            visibleItems: 4,
            animationSpeed: 1200,
            autoPlay: true,
            autoPlaySpeed: 2000,            
            pauseOnHover: true,
            enableResponsiveBreakpoints: true,
            responsiveBreakpoints: { 
                portrait: { 
                    changePoint:480,
                    visibleItems: 1
                }, 
                landscape: { 
                    changePoint:640,
                    visibleItems: 2
                },
                tablet: { 
                    changePoint:768,
                    visibleItems: 3
                }
            }
        });
        $(".flexiselDemo2").flexisel({
            visibleItems: 4,
            animationSpeed: 1000,
            autoPlay: true,
            autoPlaySpeed: 2000,            
            pauseOnHover: true,
            enableResponsiveBreakpoints: true,
            responsiveBreakpoints: { 
                portrait: { 
                    changePoint:480,
                    visibleItems: 1
                }, 
                landscape: { 
                    changePoint:640,
                    visibleItems: 2
                },
                tablet: { 
                    changePoint:768,
                    visibleItems: 3
                }
            }
        });
        $(".flexiselDemo3").flexisel({
            visibleItems: 4,
            animationSpeed: 800,
            autoPlay: true,
            autoPlaySpeed: 2000,            
            pauseOnHover: true,
            enableResponsiveBreakpoints: true,
            responsiveBreakpoints: { 
                portrait: { 
                    changePoint:480,
                    visibleItems: 1
                }, 
                landscape: { 
                    changePoint:640,
                    visibleItems: 2
                },
                tablet: { 
                    changePoint:768,
                    visibleItems: 3
                }
            }
        });
}]);


mentalApp.controller('ArticlesController',[ '$scope', '$window', '$rootScope', 'DownloadService', function($scope, $window, $rootScope, downloadService) {

	$(".navbar-nav > li > a").click(function() {
	    $(".navbar-collapse").collapse('hide');
	});


	/* Change navbar class on scroll */

	$(".wrapper").waypoint(function() {
	    $(".navbar").toggleClass("js-navbar-top");
	    $(".navbar.js-toggleClass").toggleClass("navbar-default navbar-inverse");
	    return false;
	}, { offset: "-20px" });


	/* Change navbar class on collapse/uncollapse in its top position */

	$('.wrapper .navbar-collapse').on('show.bs.collapse', function () {
	    $(".navbar.js-navbar-top").toggleClass("navbar-default navbar-inverse");
	    $(".navbar").toggleClass("js-toggleClass js-noToggleClass");
	});

	$('.wrapper .navbar-collapse').on('hide.bs.collapse', function () {
	    $(".navbar.js-navbar-top").toggleClass("navbar-default navbar-inverse");
	    $(".navbar").toggleClass("js-toggleClass js-noToggleClass");
	});


	/* Sidebar */

	$(".js-toggle-sidebar").on('click', function() {
	    $(".wrapper").toggleClass("js-wrapper-aside");
	    $(".navbar").toggleClass("js-navbar-aside");
	    $(".sidebar").toggleClass("js-sidebar-aside");
	    return false;
	});


	/**
	 * Smooth scroll to anchor
	 */

	$(function() {
	    $('a[href*=#]:not([href=#])').click(function() {
	        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	            var target = $(this.hash);
	            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	            if (target.length) {
	                $('html,body').animate({
	                    scrollTop: (target.offset().top - 70) // 70px offset for navbar menu
	                }, 1000);
	                return false;
	            }
	        }
	    });
	});


	/**
	 * Own carousel :: Testimonials
	 */

	$(document).ready(function() {
	    var owl = $("#review__carousel");
	    owl.owlCarousel({

	        items:              2,
	        itemsDesktop:       [1199,2],
	        itemsDesktopSmall:  [991,2],
	        itemsTablet:        [768,2],
	        itemsTabletSmall:   false,
	        itemsMobile:        [479,1],
	        navigation : true,
	        slideSpeed: 600,
	        pagination: false,
	        navigationText: ['<i class="oi oi-arrow-left"></i>','<i class="oi oi-arrow-right"></i>']

	    });
	});


	/**
	 * Doughnut charts :: Skills
	 */

	/* Base donut styles */

	$.fn.peity.defaults.donut = {
	    delimiter: null,
	    fill: ["#F67280", "#eee"],
	    height: null,
	    innerRadius: 68,
	    radius: 70,
	    width: null
	};

	/* Animating donuts */

	$(document).ready(function() {
	    $(".js-skills__item_first").waypoint(function() {

	        setTimeout(function () {
	            $('.skills__item').css("visibility", "visible");
	        }, 11);

	        $('.skills-item__donut').each(function () {
	            var $this = $(this);

	            var updateChart = $this.peity('donut');
	            var text = "";
	            var i = 0;
	            var str = $this.html();
	            var arr = str.split("/");
	            var value = arr[0];
	            var maxValue = arr[1];
	            var step = value/100;

	            function myLoop() {
	                setTimeout(function () {

	                    text = i + "/" + maxValue;

	                    updateChart.text(text)
	                        .change()

	                    i = i + step;

	                    if (i <= value) myLoop();

	                }, 10)
	            }
	            myLoop();
	        });

	        this.destroy();

	    }, { offset: 'bottom-in-view' });
	});


	/**
	 * Wow plugin bottom offset calculation
	 */

	$(".wow").each(function() {
	    var wowHeight = $(this).height();
	    $(this).attr("data-wow-offset", wowHeight);
	});

	new WOW().init();}]);
