
function theme(ground,text,groundD,textD){
	$('.heada').css({"background-color":ground,"color":text});
	$('body').css({"background-color":groundD,"color":text});
	//$('.lis').css({"background-color":groundD,"color":textD});
	$('.bullet').css({"background-color":ground,"color":text});
	$('.plain').css({"background-color":ground,"color":text});
	$('.chap').css({"color":textD});
}
function theme2(ground,text,groundD,textD){
	$('.bar').css({"background-color":ground,"color":text});
	$('body').css({"background-color":groundD,"color":textD});
	$('.wod').css({"background-color":groundD,"color":textD});
	$('.bullet').css({"background-color":ground,"color":text});
}

function sett(){
	$('#setin').toggle(1000);}

function men(){$('#co').slideUp(3000);
	sett();
}

function showCon(ccon){
	$(ccon).toggle(1500);
}

function testMe(){
	RedBlen = document.getElementsByClassName('Red').length;
	xM = document.getElementsByClassName('Red')[(RedBlen - 1)].innerHTML;
	document.getElementsByClassName('Red bar')[RedBlen - 1].innerHTML= xM +' W='+window.innerWidth+' H='+window.innerHeight;

	setTimeout(testMe,3000);
}

testMe();