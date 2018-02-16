/*
* @Authors: Nisha Bhuva, Emily Blackman, Samuel Hill
* @Date: 2018-02-14 01:24:18
* @Last Modified by:   Sam Hill
* @Last Modified time: 2018-02-16 04:03:34
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
    // Utilities checkboxs
    var utilitiesCheckbox1 = document.getElementById('utilitiesCheckbox1');
    utilitiesCheckbox1.addEventListener('click', function() {
        var heatingSourceUtilities = document.getElementById('heatingSourceUtilities');
        ifCheckedDisplay(utilitiesCheckbox1, heatingSourceUtilities);
    });
    var utilitiesCheckbox2 = document.getElementById('utilitiesCheckbox2');
    utilitiesCheckbox2.addEventListener('click', function() {
        var naturalGasUtilities = document.getElementById('naturalGasUtilities');
        ifCheckedDisplay(utilitiesCheckbox2, naturalGasUtilities);
    });
    var utilitiesCheckbox3 = document.getElementById('utilitiesCheckbox3');
    utilitiesCheckbox3.addEventListener('click', function() {
        var electricityUtilities = document.getElementById('electricityUtilities');
        ifCheckedDisplay(utilitiesCheckbox3, electricityUtilities);
    });
    var utilitiesCheckbox4 = document.getElementById('utilitiesCheckbox4');
    utilitiesCheckbox4.addEventListener('click', function() {
        var fuelOilUtilities = document.getElementById('fuelOilUtilities');
        ifCheckedDisplay(utilitiesCheckbox4, fuelOilUtilities);
    });
    var utilitiesCheckbox5 = document.getElementById('utilitiesCheckbox5');
    utilitiesCheckbox5.addEventListener('click', function() {
        var propaneUtilities = document.getElementById('propaneUtilities');
        ifCheckedDisplay(utilitiesCheckbox5, propaneUtilities);
    });
    var utilitiesCheckbox6 = document.getElementById('utilitiesCheckbox6');
    utilitiesCheckbox6.addEventListener('click', function() {
        var coalUtilities = document.getElementById('coalUtilities');
        ifCheckedDisplay(utilitiesCheckbox6, coalUtilities);
    });
    var utilitiesCheckbox7 = document.getElementById('utilitiesCheckbox7');
    utilitiesCheckbox7.addEventListener('click', function() {
        var lpgUtilities = document.getElementById('lpgUtilities');
        ifCheckedDisplay(utilitiesCheckbox7, lpgUtilities);
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

function ifCheckedDisplay(checkbox, toDisplay) {
    if (checkbox.checked) {
        toDisplay.style.display = 'block';
    } else {
        toDisplay.style.display = 'none';
    }
}
