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
  let maxValue = getMaxValue(data);
  let chartHeight = $(elementID).height() - 10; // -10 since there's 5px padding


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

// Helper function to create a "canvas" (not the html canvas)
// where we can draw our graph
function createGraphArea(parentElem) {
  let fullGraph = document.createElement("div");
  $(fullGraph).addClass("grid-container");

  // first grid element, a column for y axis
  let elem1 = document.createElement("div");
  $(elem1).html = "1";

  // graph goes in the second grid element
  let whiteArea = document.createElement("div");
  $(whiteArea).addClass("graphArea");
  // This didn't do anything:
  // $(whiteArea).height = $(parentElem).height();

  // blank third element
  let elem3 = document.createElement("div");

  // x axis on last element
  let elem4 = document.createElement("div");
  $(elem4).text = "x-axis";

  // A global reference to the graph elements.
  var graphElements = [elem1, whiteArea, elem3, elem4];


  $(fullGraph).append(elem1);
  $(fullGraph).append(whiteArea);
  $(fullGraph).append(elem3);
  $(fullGraph).append(elem4);


  graphArea([1,2,2,3,2,2], whiteArea);

  $(parentElem).append(fullGraph);
}

// Helper function to clean up the code a bit.
function getMaxValue(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++ ) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

// TODO Use grid-area CSS to get the bottom and left margins

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
