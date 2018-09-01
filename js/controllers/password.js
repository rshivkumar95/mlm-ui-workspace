var changePassword = function(){
    
    var old = document.getElementById('old-password').value;
    var newp = document.getElementById('new-password').value;
    var confirmp = document.getElementById('confirm-password').value;
    
     
     document.getElementById('old-password-error').innerHTML='';
     document.getElementById('new-password-error').innerHTML='';
     document.getElementById('confirm-password-error').innerHTML='';
     
     
     if(old==''){
            document.getElementById('old-password-error').innerHTML='This field is manadatory';
            return;
        }
     if(newp==''){
            document.getElementById('new-password-error').innerHTML='This field is manadatory';
            return;
        }
     if(confirmp==''){
            document.getElementById('confirm-password-error').innerHTML='This field is manadatory';
            return;
        }
      
     
     const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey(),
            userId:sessionStorage.getItem('userId'),           
	        oldPassword:old,
	        newPassword:newp,
	        confirmPassword:confirmp
            
        }
     console.log(params);
        const http = new XMLHttpRequest()
        http.open('POST', Connection.getRequestUrl('changepassword'))
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) 
        http.onload = function () {           
            var response = JSON.parse(http.responseText);
            console.log(response);
            if(response.HasErrors){
                alert(response.Errors[0].Message);
            }
            else{
                alert('Password Changed');
                window.location.href = 'dashboard.html';
                
            }
        }
   
    
}