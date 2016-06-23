var url="http://data.theodoretech.com/someData.js?callback=datapass";
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


/*
var lastValue=0;
var currentVal="0";
var lastUpdated;
var maxValue="0";
var timer;
var lastTimer=0;
var apiWriteKey="CNGSFYF646TILD36";
var apiReadKey="J2NQWW1E701TY241";
var fieldKey="field1";
var channelId="70693";
//var down=null;

function setup()
{
createCanvas(500,500);//int(displayWidth), int(displayHeight));
//down=new XMLHttpRequest();

}



function draw()
{
  background(220);
fill(0);
if(millis()-lastTimer>4000||lastTimer==0)
{
updateData();
lastTimer=millis();
}
//text("Just Posted: "+lastValue,width/2,height*1/4);
textSize(width/20);
textAlign(CENTER,CENTER);
fill(color(255,0,0));
text("Current Office Temperature\n ",width/2,height*2/8);
textSize(width/5); fill(color(255,0,0));
text(currentVal,width/2,height*4/8);
textSize(width/20);
text("Last Updated: \n"+lastUpdated,width/2,height*6/8);
//text("Max Post: "+maxValue+"  from google Drive",width/2,height*3/4);


/*
var randomNumber=random(500000)/1000;
lastValue=randomNumber;
var address="api.thingspeak.com/update?key="+apiWriteKey+"&"+fieldKey+"="+randomNumber;
println(address);
httpGet(address);
*/
}

function updateData()
{
//var address="https://api.thingspeak.com/channels/"+channelId+"/feeds/last.json"
//down.open("GET",address);
//text(down.open("GET",address),width/2,height/2);
//loadJSON(address,datapass);
httpDo("http://data.theodoretech.com/?HomeTemp",datapass,"TEXT");
//loadStrings('http://data.theodoretech.com/?HomeTemp',datapass,errorpass);
//currentVal=float(newData[0]);
}

function errorpass()
{
println("Failed to get response");
}

function datapass(newData)
{//var data=loadStrings(newData);
println(newData);
currentVal=newData;
/*lastUpdated=newData.created_at;
var dateUpdated=lastUpdated.substring(0,10);
lastUpdated=lastUpdated.substring(lastUpdated.length-9,lastUpdated.length-1);
println(lastUpdated);
var hourUpdated=lastUpdated.substring(lastUpdated.length-8,lastUpdated.length-6);
var minUpdated=lastUpdated.substring(lastUpdated.length-5,lastUpdated.length-3);
var secUpdated=lastUpdated.substring(lastUpdated.length-2,lastUpdated.length);
lastUpdated=dateUpdated+" at " +(int(hourUpdated)+8)+":"+minUpdated+":"+secUpdated +" EST";
//maxValue=newData.getColumn(1)[3];*/
}*/




