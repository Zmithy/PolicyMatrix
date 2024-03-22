$(document).ready(function() {

    $(".tab-pane").css("display", "none");
    $("#about").css("display", "block");
  
    $("a.nav-link").on('click', function() {
      $(".tab-pane").css("display", "none");
      $($(this).attr("href")).show();
    });
  });