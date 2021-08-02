$(document).ready(function(){
  $("#paragraphToggle").click(function(){
    $("p").toggle(200);
  });

  $("#updateTitle").click(function() {
    $("#graphTitle").text( $("#titleForm").val() );
  });

  // Why doesn't it let me use 'let' instead of 'var'?
  var myData = [4, 2, 3, 4, 3, 5, 6, 7, 1, 8];
  myData.push(5);

  $("#getData").click(function() {
    var convertedData = "";
    for (var dataEntry of myData) {
      convertedData += dataEntry;
    }

    // if I reference below as #graphArea it doesn't work.
    // it does not return a number for .height()
    let outerChartHeight = $(".graphArea").height();
    // $("#placeholderText").text(convertedData);
    $("#placeholderText").text(outerChartHeight);


    $("#firstBar").width(0);
    $("#firstBar").attr({
      "margin": "0px",
      "padding": "0px"
    });

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
      // evenly divide bars inside parent chart area
      let percentWidth = 100/numBars;
      $(newBar).attr({
        "title": titleNum
      });

      let chartHeight = $(".graphArea").height();

      $(newBar).width(percentWidth+"%");
      //$(newBar).height(chartHeight);
      $(newBar).height((myData[barCount]/maxValue)*chartHeight);
      //$(newBar).height(myData[barCount]/maxValue+"%");
      $("#firstBar").after(newBar);

    }

    //Manual test of a last bar:
    let lastBar = document.createElement("div");
    $(lastBar).addClass("bar");
    let percentHeight = "100%";
    $(lastBar).attr("title",percentHeight);
    //Height looks very small. 100% of what?
    $(lastBar).height(percentHeight);
    $(lastBar).width("20%");
    $("#firstBar").after(lastBar);

  });

});
