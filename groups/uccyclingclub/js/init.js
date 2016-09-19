(function ($) {
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
      $("#footer").load("footer.html"); 
      $("#menunav").load("menunav.html");
$("#menu").load("menu.html");
  }); // end of document ready
})(jQuery); // end of jQuery name space

  $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });