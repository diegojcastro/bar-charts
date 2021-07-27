$(document).ready(function(){
  $("#paragraphToggle").click(function(){
    $("p").toggle(200);
  });
  $("#updateTitle").click(function() {
    $("#graphTitle").text( $("#titleForm").val() );
  });
});
