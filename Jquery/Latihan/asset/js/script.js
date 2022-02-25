$(document).ready(init);

function init(){
	$('#lblError').css('color', 'red');

	$('#btnClick').click(function(){
		if(!$('#txtUser').val()){
			$('#lblError').text('Username kosong');
		}
		else if($('#txtUser').val().length < 5){
			$('#lblError').text('username harus lebih dr 5');
		}
		else if(!$('#pass').val()){
			$('#lblError').text('password kosong');
		}
		else if($('.rbGender:checked').length == 0){
			$('#lblError').text('pilih gender');
		}
		else if($('#bloodType').val() == 0){
			$('#lblError').text('pilih blood type');
		}
		else {
			$('#lblError').text('');
		}
		
		
	});
}

/*---------------------------------------------------------------------------------------------------------------------------------------------*/
// function init(){
// 	$('#btnAdd').click(addBox);

// 	$('#btnAdd').on('click', addBox);

// 	$(document).on('click', '.square', function(){
// 		$(this).remove();
// 	});
// }

// function addBox{
// 	$('#content').append(
// 		$('square').clone()
// 		.removeAttr('id')
// 		.addClass('square')
// 		.show()
// 		.css('display', 'inline-block')
// 		);
// }

// $('#content>div').map(function(){
//  var a = parseInt($(this).text());
//  a = a*a;
//  $(this).text(a);
// });

// $('#content>div').filter(function(){
//  return $(this).attr('value') == '2';
// }).css('color', 'red');



