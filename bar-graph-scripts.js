// Using this to test calling a function here from the html page
function myTestFunc() {
  $("#testFunc").html('Hello');
}

// I'm putting this outside the jquery document.ready so I can reference
// it on the html. Is this bad form?
function graphArea(data, elementID) {
  // The Jquery version of this method required reversing, this one doesn't.
  //data.reverse();

  var numBars = data.length;
  // Quick pass to get the highest value for %size calculations
  let maxValue = 0;
  for (let i = 0; i < numBars; i++ ) {
    if (data[i] > maxValue) {
      maxValue = data[i];
    }
  }

  let chartHeight = $(elementID).height();


  for(let barCount = 0; barCount < numBars; barCount++) {
    let newBar = document.createElement("div");
    $(newBar).addClass("bar");
    // titleNum will be assigned to "title" attribute on mouseover
    let titleNum = data[barCount];
    // evenly divide bars inside parent chart area
    let percentWidth = 100/numBars;
    $(newBar).attr({
      "title": titleNum
    });


    $(newBar).width(percentWidth+"%");
    //$(newBar).height(chartHeight);
    $(newBar).height((data[barCount]/maxValue)*chartHeight);
    //$(newBar).height(myData[barCount]/maxValue+"%");

    // it used to be #firstBar instead of #graphArea
    $(elementID).append(newBar);

  }


}

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



  $("#getData").click(function() { graphArea(myData, "#graphArea") } );


});
