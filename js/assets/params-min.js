function getParametersByName(e,a){a||(a=window.location.href);var s={};return e.forEach((function(e){var o=e.replace(/[\[\]]/g,"\\$&"),r=new RegExp("[?&]"+o+"(=([^&#]*)|&|#|$)").exec(a);r&&(r[2]?s[e]=decodeURIComponent(r[2].replace(/\+/g," ")):s[e]="")})),s}function updateTextElement(){var e=getParametersByName(["hello","hi","source"]),a=document.getElementById("textElement"),s="";switch(!0){case"Guest"===e.source:s=e.source+" get password below";break;case"Vanessa"===e.hello:s=e.hello+" your password is winterpark";break;case"Mathnasium"===e.hello:s=e.hello+" your password is 800";break;case"SunRun"===e.hello:s=e.hello+" your password is 640";break;case"Cedars Sinai"===e.hello:s=e.hello+" your password is 580";break;case"Disney"===e.hello:s=e.hello+" your password is 447";break;case"AEG"===e.hello:s=e.hello+" your password is 447";break;case"ZIP"===e.hello:s=e.hello+" your password is 124";break;case"Deckers"===e.hello:s=e.hello+" Brands your password is 214";break;case"Ilia"===e.hello:s=e.hello+" your password is 310";break;case"WW"===e.hello:s=e.hello+" your password is 717";break;case"OddBytes"===e.hello:s=e.hello+" your password is 343";break;case"SquareSpace"===e.hello:s=e.hello+" your password is 411";break;case"squarespace"===e.hello:s=e.hello+" your password is 411";break}a.textContent=s}document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("password-input"),a=document.getElementById("submit-button"),s=document.getElementById("content");a.addEventListener("click",(function(){let a="";switch(e.value){case"":a="pages1/24/work.html";break;case"":a="pages1/24ad/work.html";break;case"347":a="pages1/24snrds/work.html";break;case"580":case"570":case"312":case"214":case"343":a="pages1/24ux/work.html";break;case"124":case"winterpark":a="pages1/24pd/work.html";break;case"":a="pages1/24lead/work.html";break;case"800":a="pages1/24visd/work.html";break;case"mjw":a="pages1/24mj/work.html";break;case"310":a="pages1/24digitalad/work.html";break;case"717":case"411":case"447":case"640":a="pages1/24srpd/work.html";break}a?window.location.href=a+"?v="+Math.random():s.textContent="Incorrect or expired password. Please try again."}))}));