var galerie = document.getElementById("galerie");
var pfaede = ["asgdgg"];
function zeigeBilder() {
    for (var pfad in pfaede) {
        // skip loop if the property is from prototype
        var bild = "<img class='bild' src='" + pfad +"'/>";
        galerie.appendChild(bild);
        if (!validation_messages.hasOwnProperty(key)) continue;

        var obj = validation_messages[key];
        for (var prop in obj) {
            // skip loop if the property is from prototype
            if(!obj.hasOwnProperty(prop)) continue;

            // your code
            alert(prop + " = " + obj[prop]);
        }
    }
}