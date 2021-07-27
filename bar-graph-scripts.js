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
    for(let barCount = 0; barCount < numBars; barCount++) {
      let newBar = document.createElement("div");
      $(newBar).addClass("bar");
      let titleNum = myData[barCount];
      $(newBar).attr({
        "title": titleNum
      });
      $(newBar).width(myData[barCount]*10);
      $("#firstBar").after(newBar);

    }

  });

});
