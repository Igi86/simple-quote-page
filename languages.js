$(document).ready(function(){
    $("button").click(function(){
        $("ul").fadeToggle(1000);
		$( "#quote" ).fadeTo( "slow" , 0.1, function() {
        });
	});
});
	
function hu(){
	document.getElementById("quote").innerHTML= '"Az emberiség szabadsága nem abban a tényben rejlik, hogy meg tudjuk csinálni, amit akarunk, de nem kell tennünk, amit nem akarunk."';
	document.getElementById("btn").innerHTML= "Válaszd ki a nyelvet";
	$("ul").fadeToggle(1000);
	$( "#quote" ).fadeTo( "slow" , 1, function() {
        });
}

function uk(){
	document.getElementById("quote").innerHTML= '"The freedom of Mankind does not lie in the fact that we can do what we want, but that we do not have to do that which we do not want."';
	document.getElementById("btn").innerHTML= "Choose your language";
	$("ul").fadeToggle(1000);
	$( "#quote" ).fadeTo( "slow" , 1, function() {
        });
}

function it(){
	document.getElementById("quote").innerHTML= '"La libertà dell\'umanità non sta nel fatto che possiamo fare ciò che vogliamo, ma che non dobbiamo fare ciò che non vogliamo."';
	document.getElementById("btn").innerHTML= "Scegli la tua lingua";
	$("ul").fadeToggle(1000);
	$( "#quote" ).fadeTo( "slow" , 1, function() {
        });
}

function de(){
	document.getElementById("quote").innerHTML= '"Die Freiheit der Menschheit liegt nicht in der Tatsache, dass wir tun können, was wir wollen, aber dass wir nicht das tun müssen, was wir nicht wollen."';
	document.getElementById("btn").innerHTML= "Wähle deine Sprache";
	$("ul").fadeToggle(1000);
	$( "#quote" ).fadeTo( "slow" , 1, function() {
        });
}

function fr(){
	document.getElementById("quote").innerHTML= '"La liberté de l\'humanité ne réside pas dans le fait que nous pouvons faire ce que nous voulons, mais que nous ne devons pas faire ce que nous ne voulons pas."';
	document.getElementById("btn").innerHTML= "Choisissez votre langue";
	$("ul").fadeToggle(1000);
	$( "#quote" ).fadeTo( "slow" , 1, function() {
        });
}