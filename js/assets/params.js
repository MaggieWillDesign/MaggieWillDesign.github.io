// function getParameterByName(name, url) {
//     if (!url) {
//         url = window.location.href;
//     }
//     name = name.replace(/[\[\]]/g, '\\$&');
//     var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, ' '));
// }


// function updateTextElement() {
//     var helloValue = getParameterByName('hello');
//     var textElement = document.getElementById('textElement');
//     if (helloValue) {
//         textElement.textContent = helloValue + " your password is happydev";
//     }
// }

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
    var parameterNames = ['hello', 'hi', 'pw', 'linkedin']; // Add more parameter names as needed
    var parameterValues = getParametersByName(parameterNames);

    var textElement = document.getElementById('textElement');

    // senior design
    if (parameterValues['hi']) {
        textElement.textContent = parameterValues['hi'] + " your password is 217";
    }

    //art director
    if (parameterValues['pw']) {
        textElement.textContent = parameterValues['pw'] + " your password is 159";
    }

    // product design
    if (parameterValues['hello']) {
        textElement.textContent = parameterValues['hello'] + " your password is 281";
    }
    
    // linked in guest
    if (parameterValues['linkedin']) {
        textElement.textContent = parameterValues['linkedin'] + " get your password below";
       
    }

   

    // You can similarly handle other parameters like 'anotherparam' here.
}