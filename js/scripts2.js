$(document).ready(function(){
  $("#celebrity-match").submit(function(event){
    event.preventDefault();
    // colect the input
    var place = $("input:radio[name=place]:checked").val();
    var food = $("input:radio[name=food]:checked").val();

    // declare new variable match
    var match;

    if (place == "beach" && food == "burger"){
      match = "Bernie";
    } else if (place == "beach" && food == "vegetables"){
      match = "Meryl";
    } else if (place == "mountain" && food == "vegetables"){
      match = "rihanna";
    } else {
      match = "Some guy";
    }

    $(".results").show();
    $(".person-name").text(match);

  })
})
