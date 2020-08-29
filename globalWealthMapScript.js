/*
To do:
- Write explanations for charts (e.g., difference between average and median, what the Gini index is, etc.)
- Tables summarizing results for the continents
- Analysis of trends over time (e.g., share of wealth by country -- rise of China and India)
- Key highlights (e.g., Netherlands and Germany with very high WEALTH gini, even though income Gini is relatively low in Europe)
- Add drop-down menu to select map to view
- Add drop-down menu to select individual country -- show dashboard of key metrics
*/



var medianMapContainer = document.getElementById("medianMapContainer");
var averageMapContainer = document.getElementById("averageMapContainer");

var medianSelection = document.getElementById("medianSelection");
var averageSelection = document.getElementById("averageSelection");

//outputErrorDiv.classList.add("hide");

//set event listener on radio buttons
var inputsArray = document.getElementsByClassName("userInput");
for(i=0;i<inputsArray.length;i++) {
    inputsArray[i].addEventListener('change',refreshAnalysis, false);
    console.log("add input event listener");
}

function refreshAnalysis(){

    if(medianSelection.checked == true) {
        averageMapContainer.classList.add("hide");
        medianMapContainer.classList.remove("hide");
    }

    else if(averageSelection.checked == true){
        medianMapContainer.classList.add("hide");
        averageMapContainer.classList.remove("hide");
    }

}
