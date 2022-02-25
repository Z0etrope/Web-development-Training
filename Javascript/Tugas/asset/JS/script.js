function main(){
	var Email = document.getElementById('email');
	var Password = document.getElementById('password');
	var Error = document.getElementById('lblError');
	Error.style.color = 'red';

	if(!Email.value){
		Error.innerHTML = "email harus diisi";
	}

	else if(!Password.value){
		Error.innerHTML = "password harus diisi";
	}

	else{
		Error.innerHTML = '';
		alert('success');
		window.location = 'nano.html';
	}
}

function validate(){
	var uName = document.getElementById('uname');
	var fName = document.getElementById('fname');
	var password = document.getElementById('password');
	var email = document.getElementById('email');
	var rbMale = document.getElementById('radioMale');
	var rbFemale = document.getElementById('radioFemale');
	var bday = document.getElementById('bday');
	var address = document.getElementById('address');

	if(!fName.value){
		Error.innerHTML = "email harus diisi";
	}

	else if(!password.value){
		Error.innerHTML = "password harus diisi";
	}

	else if(!rbMale.checked && !rbFemale.checked){
		Error.innerHTML = "pilih gender";
	}
}