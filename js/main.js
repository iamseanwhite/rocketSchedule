var today = new Date();
var todaysDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate());

var upcomingLaunchURL = "https://launchlibrary.net/1.2/launch?startdate=" + todaysDate + "&mode=verbose&limit=16";

var agencySelected;
var startDateSelected;
var endDateSelected;
var numberSelected;

var recentAgencySelected;
var recentStartDateSelected;
var recentEndDateSelected;
var recentNumberSelected;

searchRecentLaunches();
searchUpcomingLaunches();

/*
for (var counter = 1; counter < 230; counter++ ){
    var agencyURL = "https://launchlibrary.net/1.2/agency/" + counter;
    var agencyObject = httpRequest(agencyURL);
    if (counter != 114 && counter != 155 && counter != 164 && counter != 168 && counter != 169){
       // console.log(agencyObject.agencies[0].id);
        console.log(agencyObject.agencies[0].name);
    }
    
   //console.log(agencyObject.agencies[0].abbrev);
    
}
*/
//var agencyURL2 = "https://launchlibrary.net/1.2/agency/spx";
 //   var agencyObject = httpRequest(agencyURL2);
 //   console.log(agencyObject);



//NASA Picutre of the Day
var nasaPodUrl = "https://api.nasa.gov/planetary/apod?hd=true&api_key=";
nasaPodUrl += "ItJxfFGjRZ3MnNn3eumpuFJbE7JXB3O1ewZsPWJF";
console.log(httpRequest(nasaPodUrl));
console.log("Hi");
var nasaResponseObject = httpRequest(nasaPodUrl);
document.getElementById("description").innerHTML = nasaResponseObject.explanation;
document.getElementById("podtitle").innerHTML = nasaResponseObject.title;


if (nasaResponseObject.media_type === "image") {
    var podImage = document.createElement("img");
    podImage.id = "podimg";
    podImage.style.height = "600px";
    podImage.style.cssFloat = "middle";
    podImage.src = nasaResponseObject.hdurl;
    document.getElementById("nasapod").appendChild(podImage);
}

else {
    var podVideo = document.createElement("iframe");
   // var podSource = document.createElement("source");
    podVideo.id = "podvideo";
    podVideo.style.height = "600";
    podVideo.style.width = "1063";
    podVideo.style.cssFloat = "middle";
   // podVideo.controls = true;
    podVideo.autoplay = true;
    podVideo.src = nasaResponseObject.url;
   // podSource.src = nasaResponseObject.url;
    //podSource.type = "video/mp4";
    document.getElementById("nasapod").appendChild(podVideo);
    //document.getElementById("podvideo").appendChild(podSource);
}