function KleurEnTextAanpassen() {
    document.getElementById("kop1").style.color = "red";
    document.getElementById("kop1").innerHTML = "I have changed!";
    }
    KleurEnTextAanpassen()
    function Reset() {
    document.getElementById("kop1").style.color = "Black";
    document.getElementById("kop1").innerHTML = "I have changed!";
    }
    function Calculate(getal1,getal2)
    {
    antwoord = getal1 + getal2;
    console.log("Het antwoord van de som is");
    console.log("Antwoord");
    }
    function Keer5 (getal1)
    {
    antwoord = getal1 * 5;
    console.log("Het antwoord van de som is: ");
    console.log(antwoord);
    }
    function calculateMinutes(seconden)
    {
    antwoorden = seconden / 60;
    console.log("Het antwoord van de som is: ");
    console.log(antwoord);
    }