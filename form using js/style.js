function registration()
{
 var n = document.getElementById('name').value;
 var e = document.getElementById('email').value;
 var no = document.getElementById('number').value;
 var p = document.getElementById('pass').value;

 var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]/;
		var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
           
 if(n=='')
		{
			alert('Please enter your name');
		}
		else if(!letters.test(n))
		{
			alert('Name field required only alphabet characters');
		}
		else if(e=='')
		{
			alert('Please enter your email id');
		}
		else if (!filter.test(e))
		
		{
			alert('Invalid email');
		}
		else if(no=='')
		{
			alert('Please enter your number.');
		}
		else if(document.getElementById("number").value.length < 10)
		{
			alert('enter a valid number');
		}
		else if(document.getElementById("number").value.length > 10)
		{
			alert('enter a valid number');
		}
		else if(p=='')
		{
			alert('Please enter Password');
		}
		
		else if(!pwd_expression.test(p))
		{
			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
		}
		
		else if(document.getElementById("pass").value.length < 6)
		{
			alert ('Password minimum length is 6');
		}
		else if(document.getElementById("pass").value.length > 12)
		{
			alert ('Password max length is 12');
		}
		else
		{				                            
               alert('Thank You for Login');
		}
}
function clear()
{
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('number').value="";
    document.getElementById('pass').value="";
}