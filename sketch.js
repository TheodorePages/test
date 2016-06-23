var url="http://data.theodoretech.com";
var val="Data";

function setup() {
loadJSON(url,datapass,"jsonp");
}

function draw() {
  background(255);
text(val,width/2,height/2);
}
function datapass(data)
{
  val+=data;
}


