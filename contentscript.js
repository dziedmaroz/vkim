function translate (str)
{
	en = "qwertyuiop[]asdfghjkl;\'zxcvbnm,./QWERTYUIOP{}ASDFGHJKL:\"|ZXCVBNM<>?";
	ru = "йцукенгшщзхъфывапролджэячсмитьбю.ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,";
	res = "";
	for (var i = 0; i< str.length;i++)
	{		 
		res = res + (en.indexOf(str[i])!= -1 ? ru[en.indexOf(str[i])] : str[i]);
	}
	return res;
}

function isIM ()
{
	return window.location.toString().match (/sel=[\d]{8}/)!=null;
}

function showPopUp (str)
{			 
		var popUp = document.getElementById ("trnslt");
		popUp.innerHTML = translate (str);
		popUp.style.display = "block";
		setInterval (hidePopUp, 4000);
}

function hidePopUp ()
{
	document.getElementById ("trnslt").style.display="none";
	lock = false;
}

function onClick ()
{
	if (isIM()!=null && document.getSelection().toString().length > 0)
	{
		showPopUp (document.getSelection().toString());
	}
}

var d = document.createElement ("div");
d.id = "trnslt";
document.body.appendChild(d);
document.addEventListener ("mouseup", onClick, true);
