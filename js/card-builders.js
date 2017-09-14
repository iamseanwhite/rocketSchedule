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
    
    if (!isRecent){
        cardDiv.className = "card card-info mb-3 text-center";
        //cardDiv.style.backgroundColor = "#333";
    }
    
    cardBlockDiv.className = "card-block";
    
    cardFooter.className = "card-footer";
    cardFooter.id = "footerID" + launchIndex;
    
    launchName.className = "card-title";
    launchName.id = "launchName" + launchIndex;
   
    if (isRecent) launchName.id += "R";
    console.log("launchName.id is: " + launchName.id);
    
    launchLocation.className = "card-subtitle mb-2 text-muted";
    launchLocation.id = "launchLocation" + launchIndex;

    if (isRecent) launchLocation.id += "R";
    launchDate.className = "card-text";

    launchDate.id = "launchDate" + launchIndex;
    if (isRecent) launchDate.id += "R";

    
    
    
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

    document.getElementById(launchNameId).textContent = object.launches[launchIndex].name;
    
    document.getElementById(launchDate).textContent = object.launches[launchIndex].net;
    
    document.getElementById(launchLocation).textContent = object.launches[launchIndex].location.name;

}



function fillFilterDetails(object, launchIndex){
    
    document.getElementById("launchName" + launchIndex).textContent = object.launches[launchIndex].name;
    
    document.getElementById("launchDate" + launchIndex).textContent = object.launches[launchIndex].net;

    document.getElementById("launchLocation" + launchIndex).textContent = object.launches[launchIndex].location.name;

}



function fillRecentFilterDetails(object, launchIndex){
   
    document.getElementById("launchName" + launchIndex + "R").textContent = object.launches[launchIndex].name;
    
    document.getElementById("launchDate" + launchIndex + "R").textContent = object.launches[launchIndex].net;

    document.getElementById("launchLocation" + launchIndex + "R").textContent = object.launches[launchIndex].location.name;

}


function searchRecentLaunches() {
    
    var enddate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate());
    
    
    
    if (today.getMonth() === 0) var startDate = (today.getFullYear()-1)+'-'+(12)+'-'+(today.getDate());
    else var startDate = today.getFullYear()+'-'+(today.getMonth())+'-'+(today.getDate());
    
    console.log(startDate);
    console.log(enddate);
    
    var launchLibraryURL2 = "https://launchlibrary.net/1.2/launch?startdate=" + startDate + "&enddate=" + enddate + "&mode=verbose&limit=8";
    var launchLibraryResponseObject2 = httpRequest(launchLibraryURL2);
    console.log("recent launches:");
    console.log(launchLibraryResponseObject2);
    
    launchLibraryResponseObject2.launches.forEach(function(launchEntry, launchIndex){
        buildAndPlaceCards(launchLibraryResponseObject2, true, launchEntry, launchIndex);
    });
    
}



function searchUpcomingLaunches() {


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
    
     if (!launchLibraryResponseObject.launches[0]) {
        document.getElementById("top").innerHTML = "No Results";
    }
    else document.getElementById("top").innerHTML = "";
    
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
    else var startDate = today.getFullYear()+'-'+(today.getMonth()-1)+'-'+(today.getDate());
    
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
    
    if (!launchLibraryResponseObject.launches[0]) {
        document.getElementById("recentTop").innerHTML = "No Results";
    }
    else document.getElementById("recentTop").innerHTML = "";
    
    launchLibraryResponseObject.launches.forEach(function(launchEntry, launchIndex){
        buildAndPlaceCards(launchLibraryResponseObject, true, launchEntry, launchIndex);
    });
}


$( function() {
    $( "#startdate" ).datepicker({ dateFormat: 'yy-m-d' });

    $( "#enddate" ).datepicker({ dateFormat: 'yy-m-d' });

    $( "#recentstartdate" ).datepicker({ dateFormat: 'yy-m-d' });

    $( "#recentenddate" ).datepicker({ dateFormat: 'yy-m-d' });
});
