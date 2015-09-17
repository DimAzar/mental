      <!-- ARTICLES -->
      <section id="articles" class="section">
        <div class="container">
          <div class="section-title center">
              <h4 class="heading">{{ 'HEADER_ARTICLES' | translate}}</h4>
              <div class="line">
                  <hr>
              </div>
              <div class="clearfix"></div>
          </div>
                
                <div class="col-md-10 col-md-offset-1">
                    <div id="review__carousel" class="owl-carousel owl-theme">
                        <div class="item">
                            <div class="review__item">
                                <div>
                                    <div class="review-item-about__avatar">
                                        <img class="img-responsive" src="../img/author_GX.png" alt="...">
                                    </div>
                                    <div class="review-item-about__content">
                                        <div class="review-item-about__name">Γ. Χριστόπουλος</div>
                                        <div class="review-item-about__position">
                                        <a target="_self" href="http://www.capital.gr/capitaltax/3051044/agrotiko-kai-epixeirimatiko-eisodima" ><strong>Αγροτικό και επιχειρηματικό εισόδημα</strong></a>
                                        <!-- <a target="_self" href="uploads/1.pdf" download="article1.pdf">This is a preview sentence ...</a> -->
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="review-item__quot">
                                    Συνεχίζουμε τη θεματολογία του  πρακτικού οδηγού μας, με σκοπό να συμβάλει και να βοηθήσει στην ορθή υποβολή ...
                                </div>
                            </div> <!-- / .review__item -->
                        </div>
                        <div class="item">
                            <div class="review__item">
                                <div>
                                    <div class="review-item-about__avatar">
                                        <img class="img-responsive" src="../img/author_GX.png" alt="...">
                                    </div>
                                    <div class="review-item-about__content">
                                        <div class="review-item-about__name">Γ. Χριστόπουλος</div>
                                        <div class="review-item-about__position">
                                            <a target="_self" href="http://www.capital.gr/story/3048711" ><strong>Τα βασικά της φορολογικής δήλωσης</strong></a>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="review-item__quot">
                                    Καθώς λιγοστεύει ο χρόνος που απομένει μέχρι την καταληκτική ημερομηνία της προθεσμίας των δηλώσεων ...         
                                </div>
                            </div> <!-- / .review__item -->
                        </div>
                        <div class="item">
                            <div class="review__item">
                                <div>
                                    <div class="review-item-about__avatar">
                                        <img class="img-responsive" src="../img/author_GX.png" alt="...">
                                    </div>
                                    <div class="review-item-about__content">
                                        <div class="review-item-about__name">Γ. Χριστόπουλος</div>
                                        <div class="review-item-about__position">
                                            <a target="_self" href="http://www.capital.gr/capitaltax/3050079/apantiste-sosta-stis-erotiseis-tis-dilosis" ><strong>Απαντήστε σωστά στις ερωτήσεις της δήλωσης</strong></a>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="review-item__quot">
                                    Πως θα απαντήσετε στις ερωτήσεις, του πρώτου, του δεύτερου και του τρίτου πίνακα της φορολογικής δήλωσης ...
                                </div>
                            </div> <!-- / .review__item -->
                        </div>
                        <div class="item">
                            <div class="review__item">
                                <div>
                                    <div class="review-item-about__avatar">
                                        <img class="img-responsive" src="../img/author_GX.png" alt="...">
                                    </div>
                                    <div class="review-item-about__content">
                                        <div class="review-item-about__name">Γ. Χριστόπουλος</div>
                                        <div class="review-item-about__position">
                                            <a target="_self" href="http://www.capital.gr/capitaltax/3050772/pos-dilonontai-ta-eisodimata" ><strong>Πως δηλώνονται τα εισοδήματα</strong></a>
                                        </div>

                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="review-item__quot">
                                   Συνεχίζουμε τη θεματολογία του πρακτικού οδηγού, με σκοπό να συμβάλει και να βοηθήσει στην ορθή υποβολή της δήλωσης ...
                                </div>
                           </div> <!-- / .review__item -->
                        </div>
                    </div> <!-- / .review__carousel -->
                </div>
        </div>
      </section>
      <!-- END ARTICLES -->
      
      <script type="text/javascript">
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
	
	      new WOW().init();
      </script>