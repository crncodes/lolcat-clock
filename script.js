var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var messageText;
var isPartyTime = false;
var partyButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var updateClock =function()
{
	var timeEventJS = document.getElementById("timeEvent");
	var lolcat = document.getElementById("lolcat");
	var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

	if (time == partyTime){
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "Shake it off!!";
}
	else if (time == napTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Cat(ch) some zzzz";
}
	else if (time == lunchTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Get in my belly!!";
}
	else if (time == wakeUpTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake. Up.";
}
	else if (time < noon) {
    messageText = "Good morning!";

}
	else if (time > evening) {
    messageText = "Good Evening!";
}
	else {
    messageText = "Good afternoon!";
}
timeEventJS.innerText = messageText;
lolcat.src = image;

showCurrentTime();
};
var showCurrentTime = function()
{
    // display the string on the webpage
   	var clock = document.getElementById('clock');



    var currentTime = new Date();



    var hours = currentTime.getHours();

    var minutes = currentTime.getMinutes();

    var seconds = currentTime.getSeconds();

    var meridian = "AM";

    // Set hours
    if (hours >= noon)

   	{
        meridian = "PM";

   	}
   	if (hours > noon)

   	{
        hours = hours - 12;
	}

    // Set Minutes
	if (minutes < 10)

    {
        minutes = "0" + minutes;

    }

    // Set Seconds
    if (seconds < 10)

   	{
        seconds = "0" + seconds;

   	}

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;

};
updateClock();
var oneSecond = 1000;
setInterval (updateClock, oneSecond);

var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      var buttonText = "Party Over";
      partyButton.innerText = buttonText;
      partyButton.style.backgroundColor = "#0A8DAB";
   }

      // text in the button should read "Party Over"
      // color of the button should be "#0A8DAB" (bonus!)

   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyButton.style.backgroundColor = "#222";
      partyButton.innerText = "Party Time!";

      // text in the button should read "PARTY TIME!"
      // color of the button should be "#222" (bonus!)

}
};

var wakeUpTimeEvent = function () {
	wakeUpTime = wakeUpTimeSelector.value;
};

var lunchTimeEvent = function (){
	lunchTime = lunchTimeSelector.value;
};
var napTimeEvent = function () {
	napTime = napTimeSelector.value;
};
//party button//
partyButton.addEventListener("click",partyEvent);
//change time selections//
wakeUpTimeSelector.addEventListener("change", wakeUpTimeEvent);
lunchTimeSelector.addEventListener("change", lunchTimeEvent);
napTimeSelector.addEventListener("change",napTimeEvent);
