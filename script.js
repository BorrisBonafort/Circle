// Get the modal
var popup = document.getElementById('id01');
var popup1 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == popup) {
		popup.style.display = "none";
	}
	else if(event.target == popup1)
	{
		popup1.style.display = "none";
	}
}