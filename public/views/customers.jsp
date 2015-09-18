<section id="testimonials" >
  <div class="container">
	<div class="col-md-1" data-ng-repeat="customer in customers">
	    <div class="panel panel-default text-center animated fadeIn" >
	        <div class="panel-heading">
                <a href="{{ customer.url }}"><img src="{{ customer.src }}" class="customer"></a></li>
	        </div>
	    </div>
	 </div>
	 
	 <div class="col-md-2 col-sm-6"></div>
   </div>
</section>
