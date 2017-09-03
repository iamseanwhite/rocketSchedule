

//XMLHTTPRequest 
function httpRequest(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    return JSON.parse(xhr.responseText);
}



//Build Launch Details
function buildAndPlaceCards(object, isRecent, launchEntry, launchIndex){
    
    //build and display "where to watch" buttons if the launch has vidURLs
    function addURLS(column){
        object.launches[launchIndex].vidURLs.forEach(function(urlEntry, urlIndex){
            var launchInformation = document.createElement("div");
            launchInformation.textContent = "URL " + (urlIndex + 1) + ": ";
            //document.getElementById(column).appendChild(launchInformation);
                
            var link = document.createElement("a");
            if (urlIndex == 0)
            link.textContent += "Where to Watch";
            else 
            link.textContent += "Where to Watch";
            link.href = urlEntry;
            link.className = "btn btn-secondary";
            if (isRecent){
                link.className = "btn btn-secondary";
            }
            link.style.marginTop = "15px";
            link.style.marginBottom = "22px";
            link.style.marginLeft = "10px";
            link.style.marginRight = "5px";
            link.style.borderRadius = "7px";
            if (urlIndex <= 0) 
            document.getElementById(column).appendChild(link);
            //document.getElementById(column).appendChild(br);
            //document.getElementById(column).appendChild(br);
            
        });
    }
    
    //build card elements
    var br = document.createElement("br");
    var cardDiv = document.createElement("div");
    var cardBlockDiv = document.createElement("div");
    var cardFooter = document.createElement("div");
    //var button = document.createElement("a");
    var launchName = document.createElement("h4");
    var launchLocation = document.createElement("p");
    var launchDate = document.createElement("h6");
    

    //build card parameters
    cardDiv.className = "card card-inverse card-primary mb-3 text-center";
    cardDiv.id = "cardID" + launchIndex;
    if (isRecent) cardDiv.id += "R";
    cardDiv.style.width = "22rem";
    if (!isRecent){
        cardDiv.className = "card card-info mb-3 text-center";
        //cardDiv.style.backgroundColor = "#5bded7";
    }
    cardDiv.style.borderRadius = "10px";
    cardDiv.style.boxShadow = "2px 2px 7px #333";
    //cardDiv.style.display = "flex";
    cardBlockDiv.className = "card-block";
    cardFooter.className = "card-footer";
    cardFooter.id = "footerID" + launchIndex;
    launchName.className = "card-title";
    launchName.style.marginLeft = "10px";
    launchName.id = "launchName" + launchIndex;
    if (isRecent) launchName.id += "R";
    console.log("launchName.id is: " + launchName.id);
    launchName.style.fontSize = "22px";
    launchLocation.className = "card-subtitle mb-2 text-muted";
    launchLocation.style.marginLeft = "10px";
    launchLocation.id = "launchLocation" + launchIndex;
    launchLocation.style.color = "#eeeeee";
    if (isRecent) launchLocation.id += "R";
    launchDate.className = "card-text";
    launchDate.style.marginLeft = "10px";
    launchDate.id = "launchDate" + launchIndex;
    if (isRecent) launchDate.id += "R";
    //var launchNumber = document.createElement("div");
    //launchNumber.textContent = (i + 1) + ")";
    

/* 
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">
          Some quick example text to build on the card title
          and make up the bulk of the card's content.
        </p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
*/
    
    
    if (isRecent === true) {
        if (launchIndex <= 3) {
    
            document.getElementById("recentTop").appendChild(cardDiv);
            
        }
        

        
        else if (launchIndex >= 4 && launchIndex <= 7){
            
            document.getElementById("recentMiddle1").appendChild(cardDiv);
     
        }
        
        else if (launchIndex >= 8 && launchIndex <= 11){
            
            document.getElementById("recentMiddle2").appendChild(cardDiv);
     
        }
        
        
        else {
            
            document.getElementById("recentBottom").appendChild(cardDiv);
    
        }
    
    
        
    }
    
    else {
        if (launchIndex <= 3) {
    
            document.getElementById("top").appendChild(cardDiv);
            
        }
        

        
        else if (launchIndex >= 4 && launchIndex <= 7){
            
            document.getElementById("middle1").appendChild(cardDiv);
     
        }
        
        else if (launchIndex >= 8 && launchIndex <= 11){
            
            document.getElementById("middle2").appendChild(cardDiv);
     
        }
        
        
        else {
            
            document.getElementById("bottom").appendChild(cardDiv);
    
        }
    
    
        
    }
    
        //document.getElementById(cardDiv.id).appendChild(cardBlockDiv);
        //document.getElementById("left").appendChild(launchNumber);
        document.getElementById(cardDiv.id).appendChild(launchName);
        document.getElementById(cardDiv.id).appendChild(launchDate);
        document.getElementById(cardDiv.id).appendChild(launchLocation);
        // document.getElementById(cardDiv.id).appendChild(cardFooter);
        
        fillDetails(object, launchIndex, launchName.id, launchLocation.id, launchDate.id);
        
        addURLS(cardDiv.id);
        
        
        document.getElementById(cardDiv.id).appendChild(br);
    
}



function fillDetails(object, launchIndex, launchNameId, launchLocation, launchDate){
    //var launchName = document.createElement("div");
   // launchName.textContent = "Name: ";

    document.getElementById(launchNameId).textContent = object.launches[launchIndex].name;
    
   // var launchDate = document.createElement("div");
    //launchDate.textContent = "Date: ";
    //console.log(launchDate);
    document.getElementById(launchDate).textContent = object.launches[launchIndex].net;
    
    //var launchLocation = document.createElement("div");
   // launchLocation.textContent = "Location: ";
  // console.log(launchLocation);
    document.getElementById(launchLocation).textContent = object.launches[launchIndex].location.name;
}



function fillFilterDetails(object, launchIndex){
    //var launchName = document.createElement("div");
   // launchName.textContent = "Name: ";

    document.getElementById("launchName" + launchIndex).textContent = object.launches[launchIndex].name;
    
   // var launchDate = document.createElement("div");
    //launchDate.textContent = "Date: ";

    document.getElementById("launchDate" + launchIndex).textContent = object.launches[launchIndex].net;
    
    //var launchLocation = document.createElement("div");
   // launchLocation.textContent = "Location: ";

    document.getElementById("launchLocation" + launchIndex).textContent = object.launches[launchIndex].location.name;
}



function fillRecentFilterDetails(object, launchIndex){
    //var launchName = document.createElement("div");
   // launchName.textContent = "Name: ";

    document.getElementById("launchName" + launchIndex + "R").textContent = object.launches[launchIndex].name;
    
   // var launchDate = document.createElement("div");
    //launchDate.textContent = "Date: ";

    document.getElementById("launchDate" + launchIndex + "R").textContent = object.launches[launchIndex].net;
    
    //var launchLocation = document.createElement("div");
   // launchLocation.textContent = "Location: ";

    document.getElementById("launchLocation" + launchIndex + "R").textContent = object.launches[launchIndex].location.name;
}



/*
function refreshLaunchDetails(object, launchEntry, launchIndex){
    
    launchName.textContent += object.launches[launchIndex].name;
    
   // var launchDate = document.createElement("div");
    //launchDate.textContent = "Date: ";
    launchDate.textContent += object.launches[launchIndex].net;
    
    //var launchLocation = document.createElement("div");
   // launchLocation.textContent = "Location: ";
    launchLocation.textContent += object.launches[launchIndex].location.name;
}
*/


function searchRecentLaunches() {
    //Recent Launches
    var enddate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate());
    
    console.log(startDate);
    console.log(enddate);
    
    if (today.getMonth() === 0) var startDate = (today.getFullYear()-1)+'-'+(12)+'-'+(today.getDate());
    else var startDate = today.getFullYear()+'-'+(today.getMonth())+'-'+(today.getDate());
    
    var launchLibraryURL2 = "https://launchlibrary.net/1.2/launch?startdate=" + startDate + "&enddate=" + enddate + "&mode=verbose";
    var launchLibraryResponseObject2 = httpRequest(launchLibraryURL2);
    //console.log("recent launches:");
    //console.log(launchLibraryResponseObject2);
    
    launchLibraryResponseObject2.launches.forEach(function(launchEntry, launchIndex){
        buildAndPlaceCards(launchLibraryResponseObject2, true, launchEntry, launchIndex);
    });
    
}



function searchUpcomingLaunches() {

    //Upcoming Launches
    
    
    //console.log(launchLibraryResponseObject);
    var launchLibraryResponseObject = httpRequest(upcomingLaunchURL);
    
    launchLibraryResponseObject.launches.forEach(function(launchEntry, launchIndex){
        buildAndPlaceCards(launchLibraryResponseObject, false, launchEntry, launchIndex);
    });
}



function setUpcomingParameters() {
   
    agencySelected = document.getElementById("agency").value;
    startDateSelected = document.getElementById("startdate").value;
    endDateSelected = document.getElementById("enddate").value;
    numberSelected = document.getElementById("number").value;
    
    console.log(startDateSelected);
    console.log(endDateSelected);
    
    if (startDateSelected === "") startDateSelected = todaysDate;
    
    var updatedUpcomingLaunchURL = "https://launchlibrary.net/1.2/launch?startdate=" + startDateSelected + "&mode=verbose&limit=" + numberSelected;
    
    if (endDateSelected !== "") updatedUpcomingLaunchURL += "&enddate=" + endDateSelected;
        
    if (agencySelected != "all") {
        
        updatedUpcomingLaunchURL = updatedUpcomingLaunchURL + "&agency=" + agencySelected;
        
        var launchLibraryResponseObject = httpRequest(updatedUpcomingLaunchURL);
    
    }
    
    else {
        
        var launchLibraryResponseObject = httpRequest(updatedUpcomingLaunchURL);
        
    }
    
    //numberSelected++;
    for (var i = 0; i < 16; i++) {
        
        $( "#cardID" + i  ).remove();
           
    }
    
    launchLibraryResponseObject.launches.forEach(function(launchEntry, launchIndex){
        buildAndPlaceCards(launchLibraryResponseObject, false, launchEntry, launchIndex);
    });
}



function setRecentParameters() {
    
    recentAgencySelected = document.getElementById("recentagency").value;
    recentStartDateSelected = document.getElementById("recentstartdate").value;
    recentEndDateSelected = document.getElementById("recentenddate").value;
    recentNumberSelected = document.getElementById("recentnumber").value;
    
    //console.log(startDateSelected);
    //console.log(endDateSelected);
    
    if (today.getMonth() === 0) var startDate = (today.getFullYear()-1)+'-'+(12)+'-'+(today.getDate());
    else var startDate = today.getFullYear()+'-'+(today.getMonth())+'-'+(today.getDate());
    
    if (recentStartDateSelected === "") recentStartDateSelected = startDate;
    if (recentEndDateSelected === "") recentEndDateSelected = todaysDate;
    
    var updatedRecentLaunchURL = "https://launchlibrary.net/1.2/launch?startdate=" + recentStartDateSelected + "&enddate=" + recentEndDateSelected  + "&mode=verbose&limit=" + recentNumberSelected;
    
    
    if (recentAgencySelected != "all") {
        
        updatedRecentLaunchURL = updatedRecentLaunchURL + "&agency=" + recentAgencySelected;
        
        var launchLibraryResponseObject = httpRequest(updatedRecentLaunchURL);
    
    }
    
    else {
        
        var launchLibraryResponseObject = httpRequest(updatedRecentLaunchURL);
        
    }
    
    //numberSelected++;
    for (var i = 0; i < 16; i++) {
        
        $( "#cardID" + i + "R").remove();
           
    }
    
    launchLibraryResponseObject.launches.forEach(function(launchEntry, launchIndex){
        buildAndPlaceCards(launchLibraryResponseObject, true, launchEntry, launchIndex);
    });
}


$( function() {
    $( "#startdate" ).datepicker({ dateFormat: 'yy-m-d' });
});


$( function() {
    $( "#enddate" ).datepicker({ dateFormat: 'yy-m-d' });
});


$( function() {
    $( "#recentstartdate" ).datepicker({ dateFormat: 'yy-m-d' });
});


$( function() {
    $( "#recentenddate" ).datepicker({ dateFormat: 'yy-m-d' });
});





//"main"=================================================================================================================================

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








