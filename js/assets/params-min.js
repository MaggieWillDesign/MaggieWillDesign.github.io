function getParametersByName(e,s){s||(s=window.location.href);var a={};return e.forEach((function(e){var o=e.replace(/[\[\]]/g,"\\$&"),r=new RegExp("[?&]"+o+"(=([^&#]*)|&|#|$)").exec(s);r&&(r[2]?a[e]=decodeURIComponent(r[2].replace(/\+/g," ")):a[e]="")})),a}function updateTextElement(){var e=getParametersByName(["hello","hi","source"]),s=document.getElementById("textElement"),a=document.getElementById("linkElement"),o="";switch(!0){case"Guest"===e.source:a.innerHTML='Guest get your password <a style="" href="getpassword.html">here &#8594;</a>';break;case"LinkedIn"===e.source:a.innerHTML='LinkedIn guest get your password <a style="" href="getpassword.html">here &#8594;</a>';break;case"Vanessa"===e.hello:o=e.hello+" your password is winterpark";break;case"Mathnasium"===e.hello:o=e.hello+" your password is 800";break;case"SunRun"===e.hello:o=e.hello+" your password is 640";break;case"Cedars Sinai"===e.hello:o=e.hello+" your password is 418";break;case"AEG"===e.hello:o=e.hello+" your password is 447";break;case"Deckers"===e.hello:o=e.hello+" Brands your password is 214";break;case"OddBytes"===e.hello:o=e.hello+" your password is 343";break;case"First American"===e.hello:o=e.hello+" your password is 712";break;case"Babylist"===e.hello:o=e.hello+" your password is 004";break;case"AppFolio"===e.hello:o=e.hello+" your password is 267";break;case"Hearst"===e.hello:o=e.hello+" your password is 473";break;case"StitchFix"===e.hello:o=e.hello+" your password is 273";break;case"Medallion"===e.hello:o=e.hello+" your password is 431";break;case"Echo"===e.hello:o=e.hello+" your password is 975";break;case"Virtusa"===e.hello:o=e.hello+" your password is 927";break;case"Adobe"===e.hello:o=e.hello+" your password is 339";break;case"Digication"===e.hello:o=e.hello+" your password is 110";break;case"Global"===e.hello:o=e.hello+" Overview your password is 671";break;case"SAP"===e.hello:o=e.hello+" your password is 701";break;case"Microsoft"===e.hello:o=e.hello+" your password is 763";break;case"Netflix"===e.hello:o=e.hello+" your password is 842";break;case"Nvidia"===e.hello:o=e.hello+" your password is 742";break;case"Microsoft"===e.hello:o=e.hello+" your password is 763";break;case"DoorDash"===e.hello:o=e.hello+" your password is 204";break;default:a.innerHTML='Guest get your password <a style="" href="getpassword.html">here &#8594;</a>';break}s.textContent=o}document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("password-input"),s=document.getElementById("submit-button"),a=document.getElementById("content");s.addEventListener("click",(function(){let s="";switch(e.value){case"273":s="port1.747/24/work.html";break;case"":s="port1.747/24ad/work.html";break;case"":s="port1.747/24snrds/work.html";break;case"570":case"312":case"214":case"343":case"267":case"339":case"975":case"701":case"mjw":s="port1.747/24ux/work.html";break;case"winterpark":case"473":case"431":case"110":case"763":case"204":s="port1.747/24pd/work.html";break;case"":s="port1.747/24lead/work.html";break;case"927":case"671":case"742":s="port1.747/24visd/work.html";break;case"mjw":s="port1.747/24mj/work.html";break;case"":s="port1.747/24digitalad/work.html";break;case"":s="port1.747/24digital/work.html";break;case"640":case"004":s="port1.747/24srpd/work.html";break;case"712":case"418":s="port1.747/24srux/work.html";break;case"842":s="port1.747/24srpdflix/work.html";break}s?window.location.href=s+"?v="+Math.random():a.textContent="Incorrect or expired password. Please try again."}))}));