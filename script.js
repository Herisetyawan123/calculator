function insert(num)
{
	document.querySelector('input.textview').value += num;	
}

function count(){
	let text = document.querySelector('input.textview').value;
	if (text) {document.querySelector('input.textview').value = eval(text);}
	
}

function clean()
{
	document.querySelector('input.textview').value = "";	
}

function remove()
{
	let text = document.querySelector('input.textview').value;
	document.querySelector('input.textview').value = text.substring(0, text.length - 1);
}