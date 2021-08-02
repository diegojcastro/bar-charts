$(document).ready(function(){
  $("#paragraphToggle").click(function(){
    $("p").toggle(200);
  });

  $("#updateTitle").click(function() {
    $("#graphTitle").text( $("#titleForm").val() );
  });

  // Why doesn't it let me use 'let' instead of 'var'?
  var myData = [1, 2, 3, 4, 3];
  myData.push(5);

  $("#getData").click(function() {
    var convertedData = "";
    for (var dataEntry of myData) {
      convertedData += dataEntry;
    }
    $("#placeholderText").text(convertedData);

    $("#firstBar").width(25);

    var numBars = myData.length;
    // Quick pass to get the highest value for %size calculations
    let maxValue = 0;
    for (let i = 0; i < numBars; i++ ) {
      if (myData[i] > maxValue) {
        maxValue = myData[i];
      }
    }


    for(let barCount = 0; barCount < numBars; barCount++) {
      let newBar = document.createElement("div");
      $(newBar).addClass("bar");
      // titleNum will be assigned to "title" attribute on mouseover
      let titleNum = myData[barCount];
      $(newBar).attr({
        "title": titleNum
      });
      $(newBar).width(myData[barCount]*10);
      $("#firstBar").after(newBar);

    }

    //Manual test of a last bar:
    let lastBar = document.createElement("div");
    $(lastBar).addClass("bar");
    $(lastBar).attr("title","Last bar");
    $(lastBar).width("50%");
    $("#firstBar").after(lastBar);

  });

});
