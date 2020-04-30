


function checkName(){

 var contactName = document.getElementById("inputImie");

if (contactName.value == 0 ){
document.getElementById("errorName").className='alert alert-danger'; 
document.getElementById("inputImie").className='alert alert-danger';
return 1;
 } 
 else{
		document.getElementById("inputImie").className='alert alert-primary';
		document.getElementById("errorName").className='d-none'; 
 }
}

function checkFname(){
	
	 var contactFname = document.getElementById("inputNazw");
	 if (contactFname.value == 0){
document.getElementById("errorFname").className='alert alert-danger'; 
document.getElementById("inputNazw").className='alert alert-danger';
 return 1;
 } 
 else{document.getElementById("inputNazw").className='alert alert-primary';
 document.getElementById("errorFname").className='d-none'; 
 }
}
function checkEmail(){
	
	 var contactEmail = document.getElementById("InputEmail"); 
	
	
 	if (contactEmail.value == 0){
document.getElementById("errorMail").className='alert alert-danger';
document.getElementById("InputEmail").className='alert alert-danger';
 blad = 1;
 } 
 else 
{
 var email = contactEmail.value;
 var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
 if(regex.test(email)==false)
 {
document.getElementById("errorMail2").className='alert alert-danger'; 
document.getElementById("InputEmail").className='alert alert-danger';
 blad = 1;
 }
 else{document.getElementById("InputEmail").className='alert alert-primary';
 document.getElementById("errorMail2").className='d-none'; 
 }
}
	
}

function checkInf()
{
	 var contactInformation = document.getElementById("inputInformation"); 
	
	 if (contactInformation.value == 0){
document.getElementById("errorInf1").className='alert alert-danger'; 
document.getElementById("inputInformation").className='alert alert-danger';
 return 1;
 } 
 else{document.getElementById("inputInformation").className='alert alert-primary';
 document.getElementById("errorInf1").className='d-none'; 
 }
  if (contactInformation.value.length >250){
document.getElementById("errorInf2").className='alert alert-danger'; 
document.getElementById("inputInformation").className='alert alert-danger';
 return 1;
 } 
	
}





	function checkForm(){


 var ch1 = checkName();
 var ch2 = checkFname();
 var ch3 = checkEmail();
 var ch4 = checkInf();
 var blad = ch1 + ch2 + ch3 + ch4;
	
	
 	
 
 
	

   if (blad ==1)
 {
	 return false;
	}

	}
	
	
	
	
	