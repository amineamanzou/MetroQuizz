var xmlHttp;

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
    
    data = JSON.parse(xmlHttp.responseText);   
    console.log(data);
}

