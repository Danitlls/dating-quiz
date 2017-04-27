$(document).ready(function(){
  $("#celebrity-match").submit(function(event){
    event.preventDefault();
    // colect the input
    var place = $("input:radio[name=place]:checked").val();
    var food = $("input:radio[name=food]:checked").val();

    // declare new variable match
    var match;
    var matchPhoto;

    if (place == "beach" && food == "burger"){
      match = "Bernie";
      matchPhoto = "'img/Bernie.jpg'";
    } else if (place == "beach" && food == "vegetables"){
      match = " more veggies!!";
      matchPhoto = "'img/vegetables.jpg'";
    } else if (place == "mountain" && food == "vegetables"){
      match = "rihanna";
      matchPhoto = "'img/rihanna.jpg'";
    } else {
      match = "Some guy";
      matchPhoto = "'img/dark.jpg'";
    }

// show match name and photo
    $(".results").show();
    $(".person-name").text(match);
    $(".match-photo").html('<img src =' + matchPhoto + '>' );

  })
})
