function getParametersByName(e,s){s||(s=window.location.href);var a={};return e.forEach((function(e){var o=e.replace(/[\[\]]/g,"\\$&"),r=new RegExp("[?&]"+o+"(=([^&#]*)|&|#|$)").exec(s);r&&(r[2]?a[e]=decodeURIComponent(r[2].replace(/\+/g," ")):a[e]="")})),a}function updateTextElement(){var e=getParametersByName(["hello","hi","source"]),s=document.getElementById("textElement"),a=document.getElementById("linkElement"),o="";switch(!0){case"Guest"===e.source:a.innerHTML='Welcome get your password <a style="" href="getpassword.html">here &#8594;</a>';break;case"LinkedIn"===e.source:a.innerHTML='Welcome guest get your password <a style="" href="getpassword.html">here &#8594;</a>';break;case"Vanessa"===e.hello:o=e.hello+" your password is winterpark";break;case"Cedars Sinai"===e.hello:o=e.hello+" your password is 418";break;case"AEG"===e.hello:o=e.hello+" your password is 447";break;case"OddBytes"===e.hello:o=e.hello+" your password is 343";break;case"First American"===e.hello:o=e.hello+" your password is 712";break;case"Medallion"===e.hello:o=e.hello+" your password is 431";break;case"Global"===e.hello:o=e.hello+" Overview your password is 671";break;case"SAP"===e.hello:o=e.hello+" your password is 701";break;case"Netflix"===e.hello:o=e.hello+" your password is 842";break;case"DoorDash"===e.hello:o=e.hello+" your password is 204";break;case"Pinterest"===e.hello:o=e.hello+" your password is 257";break;case"Home Depot"===e.hello:o=e.hello+" your password is 200";break;case"LegalZoom"===e.hello:o=e.hello+" password expired!";break;case"UCLA"===e.hello:o=e.hello+" your password is 229";break;case"CVS"===e.hello:o=e.hello+" your password is R019";break;case"AT&T"===e.hello:o=e.hello+" your password is 135";break;case"Square"===e.hello:o=e.hello+" your password is 744";break;case"Guideline"===e.hello:o=e.hello+" your password is 753";break;case"Splunk"===e.hello:o=e.hello+" your password is 252";break;case"Leverege"===e.hello:o=e.hello+" your password is 377";break;case"Included"===e.hello:o=e.hello+" Health your password is 495";break;case"Fundbox"===e.hello:o=e.hello+" your password is 612";break;case"Experian"===e.hello:o=e.hello+" your password is 193";break;case"Progressive"===e.hello:o=e.hello+" your password is 232";break;case"Apple"===e.hello:o=e.hello+" your password is 718";break;case"Samsara"===e.hello:o=e.hello+" your password is 942";break;case"Bouqs"===e.hello:o=e.hello+" your password is 385";break;case"Blue Shield"===e.hello:o=e.hello+" your password is 180";break;case"Coinbase"===e.hello:o=e.hello+" your password is 585";break;case"Airbnb"===e.hello:o=e.hello+" your password is 758";break;case"Workiva"===e.hello:o=e.hello+" your password is R8848";break;case"AWS"===e.hello:o=e.hello+" contact your password is AWS";break;default:a.innerHTML='Welcome guest get your password <a style="" href="getpassword.html">here &#8594;</a>';break}s.textContent=o}document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("password-input"),s=document.getElementById("submit-button"),a=document.getElementById("content");s.addEventListener("click",(function(){let s="";const o="202472062522/";switch(e.value){case"758":s=o+"24digitalad/work.html";break;case"570":case"343":case"701":case"mjw":case"200":case"288":case"229":case"612":case"193":case"R8848":case"AWS":s=o+"24ux/work.html";break;case"431":case"204":case"257":case"252":case"377":case"718":case"585":s=o+"24pd/work.html";break;case"753":s=o+"24srpdg/work.html";break;case"671":case"R019":case"339":s=o+"24visd/work.html";break;case"mjw":s=o+"24mj/work.html";break;case"464":s=o+"24digital/work.html";break;case"257":case"744":case"495":case"232":case"942":case"385":case"180":s=o+"24srpd/work.html";break;case"712":case"418":case"124":case"135":s=o+"24srux/work.html";break;case"842":s=o+"24srpdflix/work.html";break}s?window.location.href=s+"?v="+Math.random():a.textContent="Incorrect or expired password. Please try again."}))}));