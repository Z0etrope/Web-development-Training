function main(){
	var Username = document.getElementById('txtUser');
	var Password = document.getElementById('pass');
	var rbMale = document.getElementById('radioMale');
	var rbFemale = document.getElementById('radioFemale');
	var Bloodtype = document.getElementById('bloodType')
	//document.querySelectorAll('select')[0].value
	//document.querySelector('select').value
	var Error = document.getElementById('lblError');
	Error.style.color = 'red';

	if(!Username.value){
		Error.innerHTML = "username harus diisi";
	}

	if (Username.value.length < 5) {
		Error.innerHTML = "username minimal 5 character";
	}

	else if(!Password.value){
		Error.innerHTML = "password harus diisi";
	}

	else if(!rbMale.checked && !rbFemale.checked){
		Error.innerHTML = "pilih gender";
	}

	else if(Bloodtype.value == 0){
		Error.innerHTML = "choose your gender";
	}
	else{
		Error.innerHTML = '';
		alert('success');
		window.location = 'https://www.google.com';
	}

}