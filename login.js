<<<<<<< Updated upstream
function validate()
{
	var u1 = document.getElementById("username").value;
	var p1 = document.getElementById("password").value;
	document.getElementById("msg").style.display = "none";
	if ( (u1 == "nidhi" && p1 == "nidhi123") || (u1 =="abcd" && p1="1234"))
//if (u1 == "abcd" && p1=="1234")
	{
		document.getElementById("msg").style.display = "none";
		alert ("Login successfully");

	}

		else
		{
			document.getElementById("msg").style.display = "block";
		}

=======
function validate()
{
	var u1 = document.getElementById("username").value;
	var p1 = document.getElementById("password").value;
	document.getElementById("msg").style.display = "none";
	if ( (u1 == "nidhi" && p1 == "nidhi123") || (u1 =="abcd" && p1="1234"))
//if (u1 == "abcd" && p1=="1234")
	{
		document.getElementById("msg").style.display = "none";
		alert ("Login successfully");

	}

		else
		{
			document.getElementById("msg").style.display = "block";
		}

>>>>>>> Stashed changes
}