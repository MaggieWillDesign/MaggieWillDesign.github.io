function getParametersByName(e,o){o||(o=window.location.href);var s={};return e.forEach((function(e){var a=e.replace(/[\[\]]/g,"\\$&"),r=new RegExp("[?&]"+a+"(=([^&#]*)|&|#|$)").exec(o);r&&(r[2]?s[e]=decodeURIComponent(r[2].replace(/\+/g," ")):s[e]="")})),s}function updateTextElement(){var e=getParametersByName(["hello","hi","source"]),o=document.getElementById("textElement"),s=document.getElementById("linkElement"),a="";switch(!0){case"Guest"===e.source:s.innerHTML='Welcome get your password <a style="" href="getpassword.html">here &#8594;</a>';break;case"LinkedIn"===e.source:s.innerHTML='Welcome guest get your password <a style="" href="getpassword.html">here &#8594;</a>';break;case"Vanessa"===e.hello:a=e.hello+" your password is winterpark";break;case"Cedars Sinai"===e.hello:a=e.hello+" your password is 418";break;case"AEG"===e.hello:a=e.hello+" your password is 447";break;case"OddBytes"===e.hello:a=e.hello+" your password is 343";break;case"First American"===e.hello:a=e.hello+" your password is 712";break;case"Medallion"===e.hello:a=e.hello+" your password is 431";break;case"Global"===e.hello:a=e.hello+" Overview your password is 671";break;case"SAP"===e.hello:a=e.hello+" your password is 701";break;case"Netflix"===e.hello:a=e.hello+" your password is 842";break;case"DoorDash"===e.hello:a=e.hello+" your password is 289";break;case"Pinterest"===e.hello:a=e.hello+" your password is 257";break;case"Home Depot"===e.hello:a=e.hello+" your password is 200";break;case"LegalZoom"===e.hello:a=e.hello+" password expired!";break;case"UCLA"===e.hello:a=e.hello+" your password is 229";break;case"CVS"===e.hello:a=e.hello+" your password is R019";break;case"AT&T"===e.hello:a=e.hello+" your password is 135";break;case"Square"===e.hello:a=e.hello+" your password is 744";break;case"Guideline"===e.hello:a=e.hello+" your password is 753";break;case"Splunk"===e.hello:document.getElementById("city").innerHTML="Colorado Springs,",document.getElementById("state").innerHTML="Colorado 80920",document.getElementById("phone").innerHTML="720.625.2288",a=e.hello+" your password is 252";break;case"Leverege"===e.hello:a=e.hello+" your password is 377";break;case"Included"===e.hello:a=e.hello+" Health your password is 495";break;case"Fundbox"===e.hello:a=e.hello+" your password is 612";break;case"Progressive"===e.hello:a=e.hello+" your password is 232";break;case"Apple"===e.hello:a=e.hello+" your password is 718";break;case"Samsara"===e.hello:a=e.hello+" your password is 942";break;case"Bouqs"===e.hello:a=e.hello+" your password is 385";break;case"Blue Shield"===e.hello:a=e.hello+" your password is 180";break;case"Airbnb"===e.hello:a=e.hello+" your password is 758";break;case"Workiva"===e.hello:a=e.hello+" your password is 848",document.getElementById("city").innerHTML="Colorado Springs,",document.getElementById("state").innerHTML="Colorado 80920",document.getElementById("phone").innerHTML="720.625.2288";break;case"Amgen"===e.hello:a=e.hello+" your password is 193";break;case"Meta"===e.hello:a=e.hello+" your password is 291";break;case"Getty"===e.hello:a=e.hello+" your password is 443";break;case"iFIT"===e.hello:document.getElementById("city").innerHTML="Colorado Springs,",document.getElementById("state").innerHTML="Colorado 80920",document.getElementById("phone").innerHTML="720.625.2288",a=e.hello+" your password is 105";break;case"Lume"===e.hello:document.getElementById("city").innerHTML="Colorado Springs,",document.getElementById("state").innerHTML="Colorado 80920",document.getElementById("phone").innerHTML="720.625.2288",a=e.hello+" your password is 614";break;case"AWS"===e.hello:a=e.hello+" contact your password is AWS";break;default:s.innerHTML='Welcome guest get your password <a style="" href="getpassword.html">here &#8594;</a>';break}o.textContent=a}document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("password-input"),o=document.getElementById("submit-button"),s=document.getElementById("content");o.addEventListener("click",(function(){let o="";const a="202472062522/";switch(e.value){case"105":case"252":case"848":case"614":o=a+"24pdcs/work.html";break;case"758":o=a+"24digitalad/work.html";break;case"570":case"343":case"701":case"mjw":case"200":case"288":case"229":case"612":case"193":case"R8848":case"AWS":o=a+"24ux/work.html";break;case"431":case"257":case"377":case"718":o=a+"24pd/work.html";break;case"753":case"289":case"291":case"775":o=a+"24srpdg/work.html";break;case"671":case"R019":case"339":o=a+"24visd/work.html";break;case"mjw":o=a+"24mj/work.html";break;case"464":o=a+"24digital/work.html";break;case"257":case"744":case"495":case"232":case"942":case"385":case"180":o=a+"24srpd/work.html";break;case"712":case"418":case"124":case"135":case"443":o=a+"24srux/work.html";break;case"842":o=a+"24srpdflix/work.html";break}o?window.location.href=o+"?v="+Math.random():s.textContent="Incorrect or expired password. Please try again."}))}));