$( document ).ready(function() {

    $(document).ready(function() {

        // Check for click events on the navbar burger icon
        $(".navbar-burger").click(function() {
            $( ".navbar-menu" ).slideDown( "slow", function() {
                // Animation complete.
              });
              
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");
            
        });
        
      });






});