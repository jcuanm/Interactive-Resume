window.onload = function(){
	var sys = navigator.platform;

	//Checks to see if the system is a MAC
	if (sys.toUpperCase().indexOf('MAC') >= 0)
	{
		console.log("Yup, this is a Mac");
		var body = document.getElementsByTagName("BODY");
		body.style.zoom = "67%"; 
	}
	else
	{
		console.log("This is not a Mac");
	}
}

function stampede()
{
	var i;

	//Renders the elephants
	for (i = 0; i < 50; i++)
	{

		var img = document.createElement("img");
		img.src = "images\\elephant.png";
		img.alt = "Elephant";
		img.id = "cutie" + i;

		document.getElementById("many-cute").appendChild(img);

		var top = Math.random() * 800;
		var cutie = "cutie" + i;

		// Renders the elephants of screen 
		document.getElementById(cutie).style.position = "relative";
		document.getElementById(cutie).style.top = top + "px";
		document.getElementById(cutie).style.left = -2820 + "px";
		document.getElementById(cutie).style.zIndex = 0;
	}
}

function move()
{
	// Prevent user from clicking more than once and bad stuff from happening
	var prevent = document.getElementById("elephant-icon");
	prevent.style.top = "-100px";

	var i;

	for (i = 0; i < 50; i++)
	{
		// Sets up the last elephant in the stampede
		var cutie = "cutie" + i;
		var imgObj = document.getElementById(cutie);
		var last = document.getElementById("cutie0");

		document.getElementById(cutie).style.visibility = "visible";
			
		if(last.style.left == "2600px")
		{
			// Resets all of the elephants to their original positions
			for (i = 0; i < 50; i++)
			{	
				var cutie = "cutie" + i;
				var elephant = document.getElementById(cutie);
				elephant.remove();
			}

			// Brings the button back for another optional replay
			prevent.style.top = "12px";
			console.log("STAMPEDE");
			return "STAMPEDE"
		}
		else
		{
			// Move the elephants 10px
			imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
		}	
	}

	// This is what repeats the function over and over so that the images move
	setTimeout(move,20);
}