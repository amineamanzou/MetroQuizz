var xmlHttp;
var coefCoordinate = 11.2316865;

// Creation de l'objet qui envoie les requêtes au server
if(window.XMLHttpRequest){
    xmlHttp = new XMLHttpRequest();
}
else if(window.ActiveXObject){
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
}

// Definition de la fonction de récupération de données
function loadCoordinate(){
    // Requête en get synchrone
    xmlHttp.open("GET", "./webservice/verify.php", false); 
    xmlHttp.send(null);
    
    localStorage.setItem('question',xmlHttp.responseText);
    data = JSON.parse(xmlHttp.responseText);
    posX = data.data.intitule[2]/coefCoordinate;
    posY = data.data.intitule[3]/coefCoordinate;
    
    document.getElementById("first").innerHTML = data.data.answer[2][1];
    document.getElementById("second").innerHTML = data.data.answer[3][1];
    document.getElementById("third").innerHTML = data.data.answer[4][1];
    document.getElementById("propositions").style.display = 'block';
}
