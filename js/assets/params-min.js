function getParametersByName(e,s){s||(s=window.location.href);var o={};return e.forEach((function(e){var a=e.replace(/[\[\]]/g,"\\$&"),r=new RegExp("[?&]"+a+"(=([^&#]*)|&|#|$)").exec(s);r&&(r[2]?o[e]=decodeURIComponent(r[2].replace(/\+/g," ")):o[e]="")})),o}function updateTextElement(){var e=getParametersByName(["hello","hi","source"]),s=document.getElementById("textElement"),o=document.getElementById("linkElement"),a="";switch(!0){case"Guest"===e.source:o.innerHTML='Welcome get your password <a style="" href="getpassword.html">here &#8594;</a>';break;case"LinkedIn"===e.source:o.innerHTML='Welcome guest get your password <a style="" href="getpassword.html">here &#8594;</a>';break;case"Vanessa"===e.hello:a=e.hello+" your password is winterpark";break;case"Mathnasium"===e.hello:a=e.hello+" your password is 800";break;case"SunRun"===e.hello:a=e.hello+" your password is 640";break;case"Cedars Sinai"===e.hello:a=e.hello+" your password is 418";break;case"AEG"===e.hello:a=e.hello+" your password is 447";break;case"Deckers"===e.hello:a=e.hello+" Brands your password is 214";break;case"OddBytes"===e.hello:a=e.hello+" your password is 343";break;case"First American"===e.hello:a=e.hello+" your password is 712";break;case"Jenni Kayne"===e.hello:a=e.hello+" your password is 464";break;case"Hearst"===e.hello:a=e.hello+" your password is 473";break;case"Medallion"===e.hello:a=e.hello+" your password is 431";break;case"Echo"===e.hello:a=e.hello+" your password is 975";break;case"Virtusa"===e.hello:a=e.hello+" your password is 927";break;case"Adobe"===e.hello:a=e.hello+" your password is 339";break;case"Global"===e.hello:a=e.hello+" Overview your password is 671";break;case"SAP"===e.hello:a=e.hello+" your password is 701";break;case"Netflix"===e.hello:a=e.hello+" your password is 842";break;case"Nvidia"===e.hello:a=e.hello+" your password is 742";break;case"Microsoft"===e.hello:a=e.hello+" your password is 763";break;case"DoorDash"===e.hello:a=e.hello+" your password is 204";break;case"Under Armour"===e.hello:a=e.hello+" your password is 974";break;case"UnderArmour"===e.hello:a=e.hello+" your password is 974";break;case"Intuitive"===e.hello:a=e.hello+" your password is 849";break;case"Directv"===e.hello:a=e.hello+" your password is 124";break;case"Duolingo"===e.hello:a=e.hello+" your password is 512";break;case"Grammarly"===e.hello:a=e.hello+" your password is 087";break;case"Design Technology"===e.hello:a=e.hello+" your password is Grandmaster";break;default:o.innerHTML='Welcome guest get your password <a style="" href="getpassword.html">here &#8594;</a>';break}s.textContent=a}document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("password-input"),s=document.getElementById("submit-button"),o=document.getElementById("content");s.addEventListener("click",(function(){let s="";switch(e.value){case"570":case"214":case"343":case"339":case"975":case"701":case"mjw":case"701":case"Grandmaster":s="port1.747/24ux/work.html";break;case"winterpark":case"473":case"431":case"763":case"204":s="port1.747/24pd/work.html";break;case"927":case"671":case"742":case"849":case"087":s="port1.747/24visd/work.html";break;case"mjw":s="port1.747/24mj/work.html";break;case"464":s="port1.747/24digital/work.html";break;case"640":case"512":s="port1.747/24srpd/work.html";break;case"712":case"418":case"124":s="port1.747/24srux/work.html";break;case"842":s="port1.747/24srpdflix/work.html";break}s?window.location.href=s+"?v="+Math.random():o.textContent="Incorrect or expired password. Please try again."}))}));