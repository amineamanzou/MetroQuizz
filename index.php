<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <link rel="stylesheet" type="text/css" media="screen" href="css/bootstrap.css">
    </head>
    <body>
      
    </body>

    <script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
    <script>
        var nbrepOk =0;
        var nbrepTot = 0;
        var start= false;
        $("#valider").click(function () {
            if(start)
            {
                if(nbrepTot < 10)
                {
                    if($("option:selected").val())
                    {
                        $.ajax({
                            type: "POST",
                            url: "classes/valider.php",
                            data: { stationId : $("option:selected").val(), numquestion : nbrepTot}
                        }).done(function(html) {
                            var o=JSON.parse(html);
                            var x = o[0]['x'];
                            console.log(o[0]['x']);
                            var y = o[0]['y'];
                            console.log(o[0]['y']);
                            if(o['rep'] == "true")
                            {
                                nbrepOk++;
                            }
                            $("#stationPick").css("top",x+"px");
                            $("#stationPick").css("left",x+"px");
                            nbrepTot++;
                            if(nbrepTot == 10)
                            {
                                $("#valider").html("Recommencer");
                                $("#stationPick").css('visibility','hidden');
                                $("#affichageRep").html("Vous avez bien r&eacute;pondu &agrave; "+nbrepOk+" r&eacute;ponses. Pour recommencer appuyer sur le bouton.")
                            }
                            //Reset option
                            $('select').val('0');
                        });
                    }else
                    {
                        window.alert("Veuillez choisir une station."); 
                    }
                }else
                {
                    location.reload();
                }
            }
            else
            {
                $("#valider").html("Suivant");
                $("#stationPick").css('visibility','visible');
                start = true;
            }
        });
    </script>
</html>
