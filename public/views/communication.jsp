    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src="http://maps.googleapis.com/maps/api/js"></script>
    <script>
        function initialize() {
            var center = new google.maps.LatLng(38.0449898,23.8089678,17);
            var mapProp = {
                center:center,
                zoom:13,
                mapTypeId:google.maps.MapTypeId.ROADMAP
            };
            var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
            var marker = new google.maps.Marker({
                position: center,
                map: map,
                title: 'Σωρού 14, 151 25 Μαρούσι, Mental GRoup'
            });

        }
        google.maps.event.addDomListener(window, 'load', initialize);
    </script>
      <!-- COMM -->
      <section id="comm" >
        <div class="container">
           <div class="section-title center">
              <h4 class="heading">{{ 'HEADER_COMM' | translate}}</h4>
              <div class="line"><hr></div>
              <div class="clearfix"></div>
           </div>
           <br>
           <div class="row">
                <div class="col-md-6 col-sm-6 text-right">
                    <div id="googleMap" style="width:100%;height:200px;"></div>
                </div>

                <div class="col-md-6 col-sm-6 ">
                    <p>
                        Σωρού 14<br>Μαρούσι, Αττική, Ελλάδα<br>
                    </p>
                    <p><i class="fa fa-phone"></i> 
                       <abbr title="Τηλέφωνο">Τ</abbr>: (+30) 210 672 7149 / (+30) 210 672 1585
                    </p>
                    <p><i class="fa fa-envelope-o"></i> 
                       <abbr title="Email">E</abbr>: <a href="mailto:c.info@mental.gr">info@mental.gr</a>
                    </p>
                    <p><i class="fa fa-clock-o"></i> 
                       <abbr title="Ώρες επικοινωνίας">Ώ</abbr>: Δευτέρα - Παρασκευή: 9:00 πμ με 17:00 μ.μ.
                    </p>
                    <ul class="list-unstyled list-inline list-social-icons">
                        <li><a href="https://www.facebook.com/mentalgr?ref=hl"><i class="fa fa-facebook-square fa-2x"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin-square fa-2x"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter-square fa-2x"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
      <!-- END COMM -->
      
