function getParametersByName(e,s){s||(s=window.location.href);var a={};return e.forEach((function(e){var o=e.replace(/[\[\]]/g,"\\$&"),r=new RegExp("[?&]"+o+"(=([^&#]*)|&|#|$)").exec(s);r&&(r[2]?a[e]=decodeURIComponent(r[2].replace(/\+/g," ")):a[e]="")})),a}function updateTextElement(){var e=getParametersByName(["hello","hi","source"]),s=document.getElementById("textElement"),a=document.getElementById("linkElement"),o="";switch(!0){case"Guest"===e.source:a.innerHTML='Welcome get your password <a style="" href="getpassword.html">here &#8594;</a>';break;case"LinkedIn"===e.source:a.innerHTML='Welcome guest get your password <a style="" href="getpassword.html">here &#8594;</a>';break;case"Vanessa"===e.hello:o=e.hello+" your password is winterpark";break;case"Mathnasium"===e.hello:o=e.hello+" your password is 800";break;case"Cedars Sinai"===e.hello:o=e.hello+" your password is 418";break;case"AEG"===e.hello:o=e.hello+" your password is 447";break;case"OddBytes"===e.hello:o=e.hello+" your password is 343";break;case"First American"===e.hello:o=e.hello+" your password is 712";break;case"Jenni Kayne"===e.hello:o=e.hello+" your password is 464";break;case"Medallion"===e.hello:o=e.hello+" your password is 431";break;case"Echo"===e.hello:o=e.hello+" your password is 975";break;case"Virtusa"===e.hello:o=e.hello+" your password is 927";break;case"Adobe"===e.hello:o=e.hello+" your password is 339";break;case"Global"===e.hello:o=e.hello+" Overview your password is 671";break;case"SAP"===e.hello:o=e.hello+" your password is 701";break;case"Netflix"===e.hello:o=e.hello+" your password is 842";break;case"Nvidia"===e.hello:o=e.hello+" your password is 742";break;case"Microsoft"===e.hello:o=e.hello+" your password is 763";break;case"DoorDash"===e.hello:o=e.hello+" your password is 204";break;case"Under Armour"===e.hello:o=e.hello+" your password is 974";break;case"UnderArmour"===e.hello:o=e.hello+" your password is 974";break;case"Intuitive"===e.hello:o=e.hello+" your password is 849";break;case"Directv"===e.hello:o=e.hello+" your password is 124";break;case"Grammarly"===e.hello:o=e.hello+" your password is 087";break;case"Whatnot"===e.hello:o=e.hello+" your password is 509";break;case"Design Technology"===e.hello:o=e.hello+" your password is Grandmaster";break;default:a.innerHTML='Welcome guest get your password <a style="" href="getpassword.html">here &#8594;</a>';break}s.textContent=o}document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("password-input"),s=document.getElementById("submit-button"),a=document.getElementById("content");s.addEventListener("click",(function(){let s="";switch(e.value){case"570":case"343":case"339":case"975":case"701":case"mjw":case"701":case"Grandmaster":s="7439999/24ux/work.html";break;case"winterpark":case"431":case"763":case"204":s="7439999/24pd/work.html";break;case"927":case"671":case"742":case"849":case"087":s="7439999/24visd/work.html";break;case"mjw":s="7439999/24mj/work.html";break;case"464":s="7439999/24digital/work.html";break;case"509":s="7439999/24srpd/work.html";break;case"712":case"418":case"124":s="7439999/24srux/work.html";break;case"842":s="7439999/24srpdflix/work.html";break}s?window.location.href=s+"?v="+Math.random():a.textContent="Incorrect or expired password. Please try again."}))}));