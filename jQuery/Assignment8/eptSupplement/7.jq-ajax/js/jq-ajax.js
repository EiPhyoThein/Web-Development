// NOTE: This example will not work locally: 
// In Chrome / IE / Safari you may experience problems because of cross-domain restrictions.
// In Firefox, content may load but styles may not be applied.
// You can try it out on the website for the book http://javascriptbook.com/code/c08/
// or run it on your own server.

$('nav a').on('click', function(e) {
  e.preventDefault();
  var url = this.href;                                      // URL to load
  var $content = $('#content');                             // Cache selection

  $('nav a.current').removeClass('current');                // Update links
  $(this).addClass('current');
  
  //when click on link, clear all tags from #container
  $('#container').remove();                                 // Remove content

  //using jQuery and ajax
  $.ajax({
    type: "GET",                                            // GET or POST
    url: url,                                               // Path to file
    timeout: 2000, 
    
    // Waiting time
    beforeSend: function() {                                // Before Ajax 
      $content.append('<div id="load">Loading</div>');      // Load message
    },
    //all condition(success or fail), remove the #load div
    complete: function() {                                  // Once finished
      $('#load').remove();                                  // Clear message
    },

    //if success, tags inside the link file , will insert into the #content tag 
    success: function(data) {                               // Show content
      $content.html( $(data).find('#container') ).hide().fadeIn(400);
    },

    //if fail, recreate container tag and show message.
    error: function() {                                     // Show error msg 
      $content.html('<div class="container">Please try again soon.</div>');
    }
  });

});

/*
 Here is some further information on what happens when the call is successful:

 success: function(data) {...  The data parameter holds the Ajax response with the new content
 $content was stored on line 10 it is the element whose id attribut has a value of content
 $content.html() updates the HTML inside this element
 $(data) creates a jQuery object containing the response.
 .find('#container') gets the container element from that response hides it and fades it in
*/