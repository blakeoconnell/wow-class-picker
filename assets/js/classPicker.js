$(".classIconBox").on("click", function(){
	$(this).toggleClass("deselected");
});

$("#tank").on("click", function(){
	console.log("clicked tank");
	if($(this).is(":checked")){
	enableTanks();
}
else {
	disableTanks();
	if($("#heal").is(":checked")){
		enableHealers();
	}
}
});

$("#heal").on("click", function(){
	console.log("clicked heal");
	if($(this).is(":checked")){
	enableHealers();
}
else {
	disableHealers();
	if($("#tank").is(":checked")){
		enableTanks();
	}
}
});

$("#dps").on("click", function(){
	console.log("clicked dps");
	if($(this).is(":checked")){
	enableDPS();
}
else {
	disableDPS();
}
});

$("#allClasses").on("click", function(){
	console.log("clicked all");
	$("#tank").prop('disabled', false);
	$("#heal").prop('disabled', false);
	$("#dps").prop('disabled', false);
	$("#tank").prop('checked', true);
	$("#heal").prop('checked', true);
	$("#dps").prop('checked', true);
	enableTanks();
	enableHealers();
	enableDPS();
});

$("#hybridClasses").on("click", function(){
	$("#tank").prop('disabled', false);
	$("#heal").prop('disabled', false);
	$("#dps").prop('checked', false);
	$("#dps").prop('disabled', true);
	$("#tank").prop('checked', true);
	$("#heal").prop('checked', true);
	enableTanks();
	enableHealers();
	disableDPS();
});

$("#pureDPS").on("click", function(){
	$("#tank").prop('checked', false);
	$("#tank").prop('disabled', true);
	$("#heal").prop('checked', false);
	$("#heal").prop('disabled', true);
	$("#dps").prop('disabled', false);
	$("#dps").prop('checked', true);
	disableTanks();
	disableHealers();
	enableDPS();

});

$(".btn").on("click", function(){
	$("#picked").text("");
	generate();
	$("h2").css("opacity", 100);
})


function enableTanks(){
	$(".tankClass").removeClass("deselected");
}

function disableTanks(){
	$(".tankClass").addClass("deselected");
}

function enableHealers(){
	$(".healClass").removeClass("deselected");
}

function disableHealers(){
	$(".healClass").addClass("deselected");
}

function enableDPS(){
	$(".dpsClass").removeClass("deselected");
}

function disableDPS(){
	$(".dpsClass").addClass("deselected");
}

function generate(){
	var classArray = [];
	if ($("#dk").is(".deselected") != true){
		classArray.push("Death Knight");
	}
	if ($("#dmh").is(".deselected") != true){
		classArray.push("Demon Hunter");
	}
	if ($("#dr").is(".deselected") != true){
		classArray.push("Druid");
	}
	if ($("#hu").is(".deselected") != true){
		classArray.push("Hunter");
	}
	if ($("#ma").is(".deselected") != true){
		classArray.push("Mage");
	}
	if ($("#mo").is(".deselected") != true){
		classArray.push("Monk");
	}
	if ($("#pa").is(".deselected") != true){
		classArray.push("Paladin");
	}
	if ($("#pr").is(".deselected") != true){
		classArray.push("Priest");
	}
	if ($("#ro").is(".deselected") != true){
		classArray.push("Rogue");
	}
	if ($("#sh").is(".deselected") != true){
		classArray.push("Shaman");
	}
	if ($("#lock").is(".deselected") != true){
		classArray.push("Warlock");
	}
	if ($("#war").is(".deselected") != true){
		classArray.push("Warrior");
	}

	var pickedClass = Math.floor(Math.random() * (classArray.length - 0) + 0);

	$("#picked").append(classArray[pickedClass]);
	if (classArray[pickedClass] == "Death Knight"){
		$("#picked").css("color", "#C41F3B");
	}
	if (classArray[pickedClass] == "Demon Hunter"){
		$("#picked").css("color", "#A330C9");
	}
		if (classArray[pickedClass] == "Druid"){
		$("#picked").css("color", "#FF7D0A");
	}
		if (classArray[pickedClass] == "Hunter"){
		$("#picked").css("color", "#ABD473");
	}
		if (classArray[pickedClass] == "Mage"){
		$("#picked").css("color", "#69CCF0");
	}
		if (classArray[pickedClass] == "Monk"){
		$("#picked").css("color", "#00FF96");
	}
		if (classArray[pickedClass] == "Paladin"){
		$("#picked").css("color", "#F58CBA");
	}
		if (classArray[pickedClass] == "Priest"){
		$("#picked").css("color", "#FFFFFF");
	}
		if (classArray[pickedClass] == "Rogue"){
		$("#picked").css("color", "#FFF569");
	}
		if (classArray[pickedClass] == "Shaman"){
		$("#picked").css("color", "#0070DE");
	}
		if (classArray[pickedClass] == "Warlock"){
		$("#picked").css("color", "#9482C9");
	}
		if (classArray[pickedClass] == "Warrior"){
		$("#picked").css("color", "#C79C6E");
	}
}