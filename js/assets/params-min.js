function getParametersByName(e,o){o||(o=window.location.href);var s={};return e.forEach((function(e){var a=e.replace(/[\[\]]/g,"\\$&"),r=new RegExp("[?&]"+a+"(=([^&#]*)|&|#|$)").exec(o);r&&(r[2]?s[e]=decodeURIComponent(r[2].replace(/\+/g," ")):s[e]="")})),s}function updateTextElement(){var e=getParametersByName(["hello","hi","source"]),o=document.getElementById("textElement"),s="";switch(!0){case"Guest"===e.source:s=e.source+" get password below";break;case"LinkedIn"===e.source:s=e.source+" guest get your password below";break;case"Vanessa"===e.hello:s=e.hello+" your password is winterpark";break;case"Mathnasium"===e.hello:s=e.hello+" your password is 800";break;case"SunRun"===e.hello:s=e.hello+" your password is 640";break;case"Cedars Sinai"===e.hello:s=e.hello+" your password is 418";break;case"AEG"===e.hello:s=e.hello+" your password is 447";break;case"ZIP"===e.hello:s=e.hello+" your password is 124";break;case"Deckers"===e.hello:s=e.hello+" Brands your password is 214";break;case"WW"===e.hello:s=e.hello+" your password is 717";break;case"OddBytes"===e.hello:s=e.hello+" your password is 343";break;case"First American"===e.hello:s=e.hello+" your password is 712";break;case"Jenni Kayne"===e.hello:s=e.hello+" your password is 464";break;case"Babylist"===e.hello:s=e.hello+" your password is 004";break;case"GitHub"===e.hello:s=e.hello+" your password is 271";break;case"Home Depot"===e.hello:s=e.hello+" your password is 200";break;case"AppFolio"===e.hello:s=e.hello+" your password is 267";break;case"Hearst"===e.hello:s=e.hello+" your password is 473";break;case"StitchFix"===e.hello:s=e.hello+" your password is 273";break;case"Medallion"===e.hello:s=e.hello+" your password is 431";break;case"Multiplan"===e.hello:s=e.hello+" your password is 723";break;case"Echo"===e.hello:s=e.hello+" your password is 975";break;case"Virtusa"===e.hello:s=e.hello+" your password is 927";break;case"Adobe"===e.hello:s=e.hello+" your password is 339";break;case"Digication"===e.hello:s=e.hello+" your password is 110";break;case"Cast"===e.hello:s=e.hello+" & Crew your password is 726";break;case"Global"===e.hello:s=e.hello+" Overview your password is 671";break;case"SAP"===e.hello:s=e.hello+" your password is 701";break;case"Microsoft"===e.hello:s=e.hello+" your password is 763";break;case"Netflix"===e.hello:s=e.hello+" your password is 842";break;case"Shopify"===e.hello:s=e.hello+" your password is 206";break}o.textContent=s}document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("password-input"),o=document.getElementById("submit-button"),s=document.getElementById("content");o.addEventListener("click",(function(){let o="";switch(e.value){case"273":o="port1.44/24/work.html";break;case"":o="port1.44/24ad/work.html";break;case"":o="port1.44/24snrds/work.html";break;case"570":case"312":case"214":case"343":case"267":case"723":case"339":case"975":case"726":case"701":case"206":o="port1.44/24ux/work.html";break;case"124":case"winterpark":case"473":case"431":case"110":case"763":o="port1.44/24pd/work.html";break;case"":o="port1.44/24lead/work.html";break;case"800":case"927":case"671":o="port1.44/24visd/work.html";break;case"mjw":o="port1.44/24mj/work.html";break;case"":o="port1.44/24digitalad/work.html";break;case"464":o="port1.44/24digital/work.html";break;case"717":case"640":case"004":case"271":o="port1.44/24srpd/work.html";break;case"712":case"418":o="port1.44/24srux/work.html";break;case"842":o="port1.44/24srpdflix/work.html";break}o?window.location.href=o+"?v="+Math.random():s.textContent="Incorrect or expired password. Please try again."}))}));