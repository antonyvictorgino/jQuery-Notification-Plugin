(function($)
{
function getTextWidth(text, font) {
            var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
            var context = canvas.getContext("2d");
            context.font = font;
            var metrics = context.measureText(text);
            return metrics.width;
        }


  $.Notify = function(options){
    var settings = $.extend({
        headerText : null,
        text:null,
        type:"Success",
        position:"right-bottom",
        complete:null
    }, options);



    var $outerDiv = $("<div>",{"class":"container"});
    var $div,$header;

    if(settings.type==="Success")
    {
      $div = $("<div>", {"class":"popup success" });
      $header = $("<h2>" ,{"class":"ico-success"});
    }else {
      $div = $("<div>", {"class":"popup failure" });
      $header = $("<h2>" ,{"class":"ico-failure"});
    }
    console.log(settings.position);
    if(settings.position==="top-left")
    {
      $div.addClass("top-left");
    }
    else if(settings.position ==="top-right"){
      $div.addClass("top-right");
    }
    else if(settings.position==="bottom-left"){
      $div.addClass("bottom-left");
    }
    else {
      $div.addClass("bottom-right");
    }
    var $close = $("<a>",{"class":"close"});
    var $content = $("<div>",{"class":"content"});
    if(settings.headerText)
      $header.text(settings.headerText);
    if(settings.text)
    {
      $content.text(settings.text);
    var width=  getTextWidth(settings.text, "10px arial bold");
    if(width< 400){
      $div.addClass("small");
    }
    else {
      $div.addClass("big");
    }
   }
  var $popup = $div.append($header).append($close).append($content);
  $outerDiv.append($popup);

    $("body").append($outerDiv);
    if($.isFunction(settings.complete)){
      settings.complete.call(this);
    }
    return $outerDiv.hide().fadeIn(500, function(){
      window.setTimeout(function(){
        $outerDiv.fadeOut(500,function(){
          $outerDiv.remove();
        });
      },4000);
    });

  }

}(jQuery));
