function getParameterByName(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}function updateTextElement(){var e=getParameterByName("hello"),t=document.getElementById("textElement");e&&(t.textContent=e+" your password is happydev")}