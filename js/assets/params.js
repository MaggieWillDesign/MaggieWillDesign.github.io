// sets Params 

function getParametersByName(names, url) {
    if (!url) {
        url = window.location.href;
    }

    var parameterValues = {};

    names.forEach(function (name) {
        var paramName = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + paramName + '(=([^&#]*)|&|#|$)');
        var results = regex.exec(url);

        if (results) {
            if (!results[2]) {
                parameterValues[name] = '';
            } else {
                parameterValues[name] = decodeURIComponent(results[2].replace(/\+/g, ' '));
            }
        }
    });

    return parameterValues;
}

function updateTextElement() {
    var parameterNames = ['hello', 'hi',]; // Add more parameter names as needed
    var parameterValues = getParametersByName(parameterNames);
    var textElement = document.getElementById('textElement');
    var message = "";

    // Use a switch statement to handle different parameter values
    switch (true) {
     
        case parameterValues['hi'] === 'ARUP':
            message = "ARUP your password is 217";
            break;

        case parameterValues['hi'] === 'Capital Group':
            message = "Capital Group your password is 217";
            break;

        //use double quote mark due to apostrophie 
        case parameterValues['hi'] === "GT's":
            message = "GT's your password is 217";
            break;


        case parameterValues['hi'] === 'JJM':
            message = "JJM your password is 217";
            break;

        case parameterValues['hi'] === 'Live Nation':
            message = "Live Nation your password is 217";
            break;
    
        case parameterValues['hello'] === 'Vivian':
            message = "";
            break;

        case parameterValues['hello'] === 'M13':
            message = "M13 your password is 141";
            break;
        
        case parameterValues['hello'] === 'Starz':
            message = "M13 your password is 151";
            break;

        case parameterValues['hello'] === 'iSpot':
            message = "M13 your password is 151";
            break;
        
    }

    textElement.textContent = message;
}

// end sets Params 

// sets PW

document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password-input");
    const submitButton = document.getElementById("submit-button");
    const contentDiv = document.getElementById("content");

    submitButton.addEventListener("click", function () {
        const password = passwordInput.value;
        let redirectLink = "";

        switch (password) {
            // Group1: Goes to design professional vers all start 2

            // round 1 apps will archive soon 
            case "217":
            // client label - M13  
            case "141":
            // client label  - Starz   
            case "151":
            // client label  - iSpot   
            case "163":


                redirectLink = "pages/1/work.html";
                break;

            // Group2: Goes to AD ver

            // client label   
            case "2330":
            // client label
            case "2771":
            // client label
            case "2882":

                redirectLink = "pages/ad1/work.html";
                break;

            // Group3: Goes to UX ver

            // client label   
            case "33300":
            // client label
            case "37711":
            // client label
            case "38822":

                redirectLink = "pages/xd1/work.html";
                break;

            // Add more password cases as needed
        }

        if (redirectLink) {
            // Redirect to the specific link
            window.location.href = redirectLink;
        } else {
            // Handle the case where the password is not recognized
            contentDiv.textContent = "Password not recognized. Please try again.";
        }
    });
});


// end sets PW