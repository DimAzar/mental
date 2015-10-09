      <!--  NAVBAR -->
      <div class="wrapper">
        <nav class="navbar navbar-default navbar-fixed-top js-navbar-top js-toggleClass">
        <div class="row">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
        <div id= "i18n" data-ng-controller="I18NController" class="pull-left">
            <div class="flag">
                <button  class="flagGR" data-ng-click="changeLanguage('gr')" ></button>
                <button class="flagGB" data-ng-click="changeLanguage('en')"></button>
                <button class="flagFR" data-ng-click="changeLanguage('fr')"></button>
                <button class="flagDE" data-ng-click="changeLanguage('de')"></button>
            </div>
        </div>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right ">
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
