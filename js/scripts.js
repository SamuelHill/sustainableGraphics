/*
* @Authors: Nisha Bhuva, Emily Blackman, Samuel Hill
* @Date: 2018-02-14 01:24:18
* @Last Modified by:   SAMHILLPC\Sam Hill
* @Last Modified time: 2018-03-04 20:23:37
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
    // signup
    var signupButton = document.getElementById('signupButton');
    signupButton.addEventListener('click', function(){
        $('#login').modal('hide');
        $('#signup').modal('show');
    });

    // About Section
    var takeAssessmentButton = document.getElementById('takeAssessmentButton');
    takeAssessmentButton.addEventListener('click', function() {
        navbarAssessment.click();
    });
    var loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function() {
        navbarLogin.click();
    });

    // Assessment navigation
    var continueHome = document.getElementById('continueHome');
    continueHome.addEventListener('click', function() {
        document.getElementById('transTab').click();
    });
    var backTrans = document.getElementById('backTrans');
    backTrans.addEventListener('click', function() {
        document.getElementById('homeTab').click();
    });
    var continueTrans = document.getElementById('continueTrans');
    continueTrans.addEventListener('click', function() {
        document.getElementById('dietTab').click();
    });
    var backDiet = document.getElementById('backDiet');
    backDiet.addEventListener('click', function() {
        document.getElementById('transTab').click();
    });
    var continueDiet = document.getElementById('continueDiet');
    continueDiet.addEventListener('click', function() {
        document.getElementById('resultsTab').click();
    });
    var backResults = document.getElementById('backResults');
    backResults.addEventListener('click', function() {
        document.getElementById('dietTab').click();
    });
    var continueResults = document.getElementById('continueResults');
    continueResults.addEventListener('click', function() {
        document.getElementById('goalsTab').click();
    });
    var goalsResults = document.getElementById('goalsResults');
    goalsResults.addEventListener('click', function() {
        document.getElementById('resultsTab').click();
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
    var publicTransitCheckbox1 = document.getElementById('publicTransitCheckbox1');
    publicTransitCheckbox1.addEventListener('click', function() {
        var bus = document.getElementById('bus');
        ifTrueDisplay(publicTransitCheckbox1.checked, bus);
    });
    var publicTransitCheckbox2 = document.getElementById('publicTransitCheckbox2');
    publicTransitCheckbox2.addEventListener('click', function() {
        var localTrain = document.getElementById('localTrain');
        ifTrueDisplay(publicTransitCheckbox2.checked, localTrain);
    });
    var publicTransitCheckbox3 = document.getElementById('publicTransitCheckbox3');
    publicTransitCheckbox3.addEventListener('click', function() {
        var longDistTrain = document.getElementById('longDistTrain');
        ifTrueDisplay(publicTransitCheckbox3.checked, longDistTrain);
    });
    var publicTransitCheckbox4 = document.getElementById('publicTransitCheckbox4');
    publicTransitCheckbox4.addEventListener('click', function() {
        var tram = document.getElementById('tram');
        ifTrueDisplay(publicTransitCheckbox4.checked, tram);
    });
    var publicTransitCheckbox5 = document.getElementById('publicTransitCheckbox5');
    publicTransitCheckbox5.addEventListener('click', function() {
        var subway = document.getElementById('subway');
        ifTrueDisplay(publicTransitCheckbox5.checked, subway);
    });
    var publicTransitCheckbox6 = document.getElementById('publicTransitCheckbox6');
    publicTransitCheckbox6.addEventListener('click', function() {
        var taxi = document.getElementById('taxi');
        ifTrueDisplay(publicTransitCheckbox6.checked, taxi);
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
            // <div class="card flightCardSpacing">
            //   <div class="card-body flightCardBodySpacing">
            //     <h5 class="flightCardTitleSpacing">From -> To</h5>
            //     <h6 class="text-muted flightCardSubtitleSpacing">Distance 1000mi</h6>
            //   </div>
            // </div>
            var card = document.createElement("DIV");
            card.className = "card flightCardSpacing";
            var cardBody = document.createElement("DIV");
            cardBody.className = "card-body flightCardBodySpacing";
            var cardTitle = document.createElement("H5");
            cardTitle.className = "flightCardTitleSpacing";
            var titleText = fromDestination + " -> " + toDestination;
            if (flightTypeRadio) {
                titleText += " -> " + fromDestination;
            }
            var fromToText = document.createTextNode(titleText);
            cardTitle.appendChild(fromToText);
            cardBody.appendChild(cardTitle);
            var cardSubtitle = document.createElement("H6");
            cardSubtitle.className = "text-muted flightCardSubtitleSpacing";
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

    // Goals Tab
    var parispresets = document.getElementById('paris-presets');
    var averagepresets = document.getElementById('average-presets');
    var customgoals = document.getElementById('custom-goals');
    var eiffelBadge = document.getElementById('eiffelBadge');
    var goalPresetsRadio1 = document.getElementById('goalPresetsRadio1');
    goalPresetsRadio1.addEventListener('click', function() {
        ifTrueDisplay(goalPresetsRadio1.checked, parispresets);
        ifTrueDisplay(false, averagepresets);
        ifTrueDisplay(false, customgoals);
        eiffelBadge.style.backgroundColor = '#7B9F86';
    });
    var goalPresetsRadio2 = document.getElementById('goalPresetsRadio2');
    goalPresetsRadio2.addEventListener('click', function() {
        ifTrueDisplay(false, parispresets);
        ifTrueDisplay(goalPresetsRadio2.checked, averagepresets);
        ifTrueDisplay(false, customgoals);
        eiffelBadge.style.backgroundColor = '#B1BFC6';
    });
    var goalPresetsRadio3 = document.getElementById('goalPresetsRadio3');
    goalPresetsRadio3.addEventListener('click', function() {
        ifTrueDisplay(false, parispresets);
        ifTrueDisplay(false, averagepresets);
        ifTrueDisplay(goalPresetsRadio3.checked, customgoals);
        eiffelBadge.style.backgroundColor = '#B1BFC6';
    });
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function ifTrueDisplay(boolean, toDisplay) {
    if (boolean) {
        toDisplay.style.display = 'block';
    } else {
        toDisplay.style.display = 'none';
    }
}

Highcharts.chart('resultsChart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Your impact vs national average and paris climate agreement goal'
    },
    xAxis: {
        categories: [
            'Home',
            'Transportation',
            'Diet'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Tons of CO2 (t/CO2)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} t/CO2</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'US Avg.',
        data: [1990, 3836, 864]

    }, {
        name: 'You',
        data: [1215, 2788, 498]
    }, {
        name: 'Paris Climate Agreement goal',
        data: [900, 1200, 350]

    }]
});
