        <div class="wrapper">
          <nav class="navbar navbar-default navbar-fixed-top js-navbar-top js-toggleClass customnav">
            <div class="">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <div class="pull-left">
                  <div data-ng-include='"views/templates/i18n.jsp"'></div>
                </div>
                <a class="navbar-brand" href="#home"><img class="brandImage" src="../img/mental-group.png"></a>
              </div>
              <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="#company">{{ 'NAV_COMPANY' | translate}}</a></li>
                  <li><a href="#services">{{ 'NAV_SERVICES' | translate}}</a></li>
                  <li><a href="#testimonials">{{ 'NAV_TESTIMONIALS' | translate}}</a></li>
                  <li><a href="#articles">{{ 'NAV_ARTICLES' | translate}}</a></li>
                  <li><a href="#comm">{{ 'NAV_COMM' | translate}}</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>      
