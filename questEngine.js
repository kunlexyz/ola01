var q=0;
quest=[
['The wife of Odesanmi was ____________','Aderonke,','Adebisi','Iro','Morohunmubo.'],
['Odesanmi\'s child was named ____________','Aderonke,','Morohunmubo.','Aderanti,','Temiogbe'],
['What is Odesanmi\'s occupation?','Capenter','Farmer','Hunter','Fisher man'],
['As soon as he looked behind, he discovered that his best meat which is "_________" was among the animals.','Goat','Dog','Foul','antelope'],
['How old is Aderonke\'s child?','Two months old','Two weeks old','Two years old','Three months old'],
['6 who stole the bush-meat?','Morohunmubo.','Feyinlefun','Gbendu','Aderonke'],
['Who said “Mother, I know who has stolen your bush-meat immediately you left”?','Gbendu','Feyinlefun','Morohunmubo.','Aderonke'],
['Why did the king now call for all the chiefs in that town and also the villagers?','to come for feast. ','to come and watch Masquerades dancing. ','to come and celebrate with him. ','to come and listening to his new flabbergast. '],
['9 when all the Chiefs heard what the king said, they were _________','quiet','flabberasted','angry','escalated'],
['What was the name of the chief that told the king that he should try and look at the matter reasonably.','Chief Odesanmi','Chief Mabamija','Chief Mubo','Chief Jagun']
];

var cor = '<img src="image/correctx.jpg" />';
wro= '<img src="image/wrongx.jpg" />'; 
mk = 0;
res='';
tab1=document.getElementById('result').innerHTML;
ANS=['A','B','C','D','A','B','C','D','A','B'];
function gt(xx,yy){
	document.getElementById(xx).innerHTML=yy;
}
function gE(xx){
	document.getElementById(xx);
}

function gClass(xx,yy,zz){
	document.getElementsByClassName(xx)[yy].innerHTML=zz;
}

function questionb1(){
	gt('main','<div>'+(q+1)+'</div>'+quest[q][0]);
	gt('opa',quest[q][1]);
	gt('opb',quest[q][2]);
	gt('opc',quest[q][3]);
	gt('opd',quest[q][4]);
	//document.getElementById('main').innerHTML=quest[q][0];
	q++;
	//alert(q);
	console.log(q);
}

function ansa(z){res='';
	if(z==ANS[q-1]){mk++;
	res='<tr><td>'+q+'</td><td>'+z+'</td><td>'+cor+'</td></tr>';
					//gClass('imA',q,z);
					//gClass('imR',q,cor);
				}else{
	res='<tr><td>'+q+'</td><td>'+z+'</td><td>'+wro+'</td></tr>';
					//gClass('imA',q,z);
					//gClass('imR',q,wro);
				}
	var tabl=document.getElementById('result').innerHTML;
	gt('result',(tabl+res));
	$("#tab").slideUp("fast");
	if(q!=(quest.length)){$("#tab").slideDown("slow");}
	//document.getElementById('result').innerHTML=res;
//alert('working');
markIT();
	questionb1();
}

function markIT(){
	if(q==(quest.length)){
		document.getElementById('tab').style.display='none';
		document.getElementById('alat').style.display='block';
		gt('alatin',(mk+'/'+quest.length));
		}
}

function start(){
	$("#opening").hide("fast");
	$("#tab").slideDown("slow");
	questionb1();
}
function attAgain(){
	q=0;mk=0;
	gt('result',(tab1));
	$("#tab").slideDown("slow");
	questionb1();
}
