$(document).ready(function(){
  $("#celebrity-match").submit(function(event){
    event.preventDefault();

    var place = $("input:radio[name=place]:checked").val();
    var food = $("input:radio[name=food]:checked").val();

      if (place  === "mountain" && food === "burger") {
        $(".match").text("Bernie");
        // $(".results.match-photo").after("<img src='img/Bernie.jpg'/>")
        $(".results").slideToggle().show();

      } else if (place  === "beach" && food === "burger"){
        $(".match").text("Rihanna");
        // $(".results.match-photo").append("<img src='img/rihanna.jpg'/>")
        $(".results").slideToggle().show();
      } else if (place  === "mountain" && food === "vegetables"){
        $(".match").text("Meryl");
        // $(".results.match-photo").append("<img src='img/rihanna.jpg'/>")
        $(".results").slideDown().show();
      } else {
        $(".match").text("Guy");
        // $(".results.match-photo").append("<img src='img/rihanna.jpg'/>")
        $(".results").slideDown().show();
      }

      // $(".results").slideToggle().show();
    });
  });
