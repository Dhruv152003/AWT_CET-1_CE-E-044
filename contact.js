function registration()
{
	var fname = document.getElementById("fname").value;
	var subject = document.getElementById("subject").value;
	var email = document.getElementById("email").value;
	var PN = document.getElementById("PN").value;
	var area = document.getElementById("area").value;

	if (fname==" ") 
	{
		alert("please enter your name")
	}
	else if (email==" ")
	{
		alert("please enter phone number")
	}
	else if (subject==" ") 
	{
		alert("please enter email id")
	}
	else if (PN==" ") 
	{
		alert("please enter password")
	}
	else if (area==" ")
	{
		alert("please enter description")
	}
	else
	{
		alert("Thank You")
	}
}