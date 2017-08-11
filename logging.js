var list = {ala: "kota", Boda: "kumka"};

 function propertiesList(list)
 {
    return Object.keys(list);
 }

console.log(propertiesList(list));

function tryLog()
{
	var user = document.getElementById("username").value;
	var pass = "kota";

	for(var i in list)
	{
		if(i == user)
		{
			break;
		}
		alert("Zle dane");
		return 0;
	}

	if(list[i] == pass)
		console.log("poprawne");

}
