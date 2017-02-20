function prompttest(msg)
{
	return prompt(msg);
}

function confirmtest(msg)
{
	return confirm(msg);
}

function search_focus_script(){
	document.getElementById("search_bar").placeholder="search for 'what is life?'";
}

function search_out_script(){

	document.getElementById("search_bar").placeholder="what is life?";
}