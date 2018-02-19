/*
* @Authors: Nisha Bhuva, Emily Blackman, Samuel Hill
* @Date: 2018-02-14 01:24:18
* @Last Modified by:   SAMHILLPC\Sam Hill
* @Last Modified time: 2018-02-19 05:42:59
*/

window.onload = function() {
    // Main page sections
    var aboutSection = document.getElementById('about');
    var assessmentSection = document.getElementById('assessment');
    // Navbar list items
    var assessmentNavItem = document.getElementById('navbar-assessment-li');
    // Navbar controls
    var navbarAbout = document.getElementById('navbar-about-a');
    navbarAbout.addEventListener('click', function(){
        aboutSection.style.display = 'block';
        assessmentSection.style.display = 'none';
        assessmentNavItem.classList.remove('active');
    });
    var navbarAssessment = document.getElementById('navbar-assessment-a');
    navbarAssessment.addEventListener('click', function(){
        aboutSection.style.display = 'none';
        assessmentSection.style.display = 'block';
        assessmentNavItem.classList.add('active');
    });
    var navbarLogin = document.getElementById('navbar-login-a');
    navbarLogin.addEventListener('click', function(){
        $('#login').modal('show');
    });

    // Home Tab
    // -> Utilities checkboxs
    var utilitiesCheckbox1 = document.getElementById('utilitiesCheckbox1');
    utilitiesCheckbox1.addEventListener('click', function() {
        var heatingSourceUtilities = document.getElementById('heatingSourceUtilities');
        ifTrueDisplay(utilitiesCheckbox1.checked, heatingSourceUtilities);
    });
    var utilitiesCheckbox2 = document.getElementById('utilitiesCheckbox2');
    utilitiesCheckbox2.addEventListener('click', function() {
        var naturalGasUtilities = document.getElementById('naturalGasUtilities');
        ifTrueDisplay(utilitiesCheckbox2.checked, naturalGasUtilities);
    });
    var utilitiesCheckbox3 = document.getElementById('utilitiesCheckbox3');
    utilitiesCheckbox3.addEventListener('click', function() {
        var electricityUtilities = document.getElementById('electricityUtilities');
        ifTrueDisplay(utilitiesCheckbox3.checked, electricityUtilities);
    });
    var utilitiesCheckbox4 = document.getElementById('utilitiesCheckbox4');
    utilitiesCheckbox4.addEventListener('click', function() {
        var fuelOilUtilities = document.getElementById('fuelOilUtilities');
        ifTrueDisplay(utilitiesCheckbox4.checked, fuelOilUtilities);
    });
    var utilitiesCheckbox5 = document.getElementById('utilitiesCheckbox5');
    utilitiesCheckbox5.addEventListener('click', function() {
        var propaneUtilities = document.getElementById('propaneUtilities');
        ifTrueDisplay(utilitiesCheckbox5.checked, propaneUtilities);
    });
    var utilitiesCheckbox6 = document.getElementById('utilitiesCheckbox6');
    utilitiesCheckbox6.addEventListener('click', function() {
        var coalUtilities = document.getElementById('coalUtilities');
        ifTrueDisplay(utilitiesCheckbox6.checked, coalUtilities);
    });
    var utilitiesCheckbox7 = document.getElementById('utilitiesCheckbox7');
    utilitiesCheckbox7.addEventListener('click', function() {
        var lpgUtilities = document.getElementById('lpgUtilities');
        ifTrueDisplay(utilitiesCheckbox7.checked, lpgUtilities);
    });

    // Transportation Tab
    // -> Vehicles
    var numVehiclesSelector = document.getElementById('numVehiclesSelector');
    numVehiclesSelector.addEventListener('change', function() {
        var numVehicles = parseInt(numVehiclesSelector.options[numVehiclesSelector.selectedIndex].value);
        if (numVehicles != 0) {
            for (var i = 1; i <= 5; i++) {
                ifTrueDisplay(i < (numVehicles + 1), document.getElementById('vehicle' + i));
            }
        } else {
            for (var i = 1; i <= 5; i++) {
                ifTrueDisplay(false, document.getElementById('vehicle' + i));
            }
        }
    });
    // -> Public Transit
    var publicTransitSelector = document.getElementById('publicTransitSelector');
    publicTransitSelector.addEventListener('change', function() {
        var selectedPublicTransit = [];
        for (var i = 0; i < publicTransitSelector.length; i++) {
            if (publicTransitSelector.options[i].selected) {
                selectedPublicTransit.push(publicTransitSelector.options[i].value);
            }
        }
        var bus = document.getElementById('bus');
        ifTrueDisplay(selectedPublicTransit.indexOf('bus') != -1, bus);
        var coach = document.getElementById('coach');
        ifTrueDisplay(selectedPublicTransit.indexOf('coach') != -1, coach);
        var localTrain = document.getElementById('localTrain');
        ifTrueDisplay(selectedPublicTransit.indexOf('localTrain') != -1, localTrain);
        var longDistTrain = document.getElementById('longDistTrain');
        ifTrueDisplay(selectedPublicTransit.indexOf('longDistTrain') != -1, longDistTrain);
        var tram = document.getElementById('tram');
        ifTrueDisplay(selectedPublicTransit.indexOf('tram') != -1, tram);
        var subway = document.getElementById('subway');
        ifTrueDisplay(selectedPublicTransit.indexOf('subway') != -1, subway);
        var bus = document.getElementById('taxi');
        ifTrueDisplay(selectedPublicTransit.indexOf('taxi') != -1, taxi);
    });
    // -> Flights
    var addFlight = document.getElementById('addFlight');
    addFlight.addEventListener('click', function() {
        // Get values
        var flightTypeRadio = document.getElementById("roundTripCheck").checked;
        var from = document.getElementById("fromDestinationSelector");
        var fromDestination = from.options[from.selectedIndex].value;
        var to = document.getElementById("toDestinationSelector");
        var toDestination = to.options[to.selectedIndex].value;
        if (fromDestination == "none" || toDestination == "none") {
            alert("Please fill out from and to.")
        } else {
            // Build flight info...
            // <div class="card cardSpacing">
            //   <div class="card-body cardBodySpacing">
            //     <h5 class="cardTitleSpacing">From -> To</h5>
            //     <h6 class="text-muted cardSubtitleSpacing">Distance 1000mi</h6>
            //   </div>
            // </div>
            var card = document.createElement("DIV");
            card.className = "card cardSpacing";
            var cardBody = document.createElement("DIV");
            cardBody.className = "card-body cardBodySpacing";
            var cardTitle = document.createElement("H5");
            cardTitle.className = "cardTitleSpacing";
            var titleText = fromDestination + " -> " + toDestination;
            if (flightTypeRadio) {
                titleText += " -> " + fromDestination;
            }
            var fromToText = document.createTextNode(titleText);
            cardTitle.appendChild(fromToText);
            cardBody.appendChild(cardTitle);
            var cardSubtitle = document.createElement("H6");
            cardSubtitle.className = "text-muted cardSubtitleSpacing";
            var subtitleText = "Distance ";
            if (flightTypeRadio) {
                subtitleText += "2000";
            } else {
                subtitleText += "1000";
            }
            subtitleText += " miles";
            var distanceText = document.createTextNode(subtitleText);
            cardSubtitle.appendChild(distanceText);
            cardBody.appendChild(cardSubtitle);
            card.appendChild(cardBody);
            document.getElementById("flightsTaken").appendChild(card);
            // Clear inputs
            document.getElementById('roundTripCheck').checked = true;
            document.getElementById('oneWayCheck').checked = false;
            document.getElementById("fromDestinationSelector").selectedIndex = "0";
            document.getElementById("toDestinationSelector").selectedIndex = "0";
        }
    });

    // Diet Tab
    var meatSelector = document.getElementById('dietSelection');
    meatSelector.addEventListener('change',function() {
        var selectedDiet = [];
        for (var i = 0; i < meatSelector.length; i++){
            if (meatSelector.options[i].selected){
                selectedDiet.push(meatSelector.options[i].value);
            }
        }
        var noRestrictions = document.getElementById('typeOfMeat');
        ifTrueDisplay(selectedDiet.indexOf('noRestrictions') != -1, typeOfMeat);
        var noRestrictions = document.getElementById('mealsPerDay');
        ifTrueDisplay(selectedDiet.indexOf('noRestrictions') != -1, mealsPerDay);
    });

    // Assessment navigation
    var continueHome = document.getElementById('continueHome');
    continueHome.addEventListener('click', function() {
        document.getElementById('transTab').click();
    });
    var continueTrans = document.getElementById('continueTrans');
    continueTrans.addEventListener('click', function() {
        document.getElementById('dietTab').click();
    });
    var continueDiet = document.getElementById('continueDiet');
    continueDiet.addEventListener('click', function() {
        document.getElementById('resultsTab').click();
    });
    var backTrans = document.getElementById('backTrans');
    backTrans.addEventListener('click', function() {
        document.getElementById('homeTab').click();
    });
    var backDiet = document.getElementById('backDiet');
    backDiet.addEventListener('click', function() {
        document.getElementById('transTab').click();
    });
    var backResults = document.getElementById('backResults');
    backResults.addEventListener('click', function() {
        document.getElementById('dietTab').click();
    });
}

function ifTrueDisplay(boolean, toDisplay) {
    if (boolean) {
        toDisplay.style.display = 'block';
    } else {
        toDisplay.style.display = 'none';
    }
}
