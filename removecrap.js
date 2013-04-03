// ------------------

var d=document;
function removecrap()
{
	var overlay = d.getElementById('subscription-overlay')
	if (overlay)
	{
		overlay.parentElement.removeChild(overlay)
	}
	d.getElementsByTagName('body')[0].style.overflow='auto'
}
removecrap()
setTimeout(removecrap, 3000)
/* EOF */
