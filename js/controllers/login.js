var login = function(){
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if(username=='' || password=='')
        {
            alert('Please fill required fields');
            if(username=='')
                document.getElementById('username').focus();
            else
                document.getElementById('password').focus();
        }
    else{       
        const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey(),
            userName : username,
            password : password
        }
        const http = new XMLHttpRequest()
        http.open('POST', Connection.getRequestUrl('userauthentication'))
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) 
        http.onload = function () {           
            var response = JSON.parse(http.responseText);
            console.log(response);
            if(response.HasErrors){
                alert(response.Errors[0].Message);
            }
            else{
                sessionStorage.setItem("userName", response.userName);
                sessionStorage.setItem("userRole", response.userRole);
                sessionStorage.setItem("userId", response.userId);
                sessionStorage.setItem("isLoggedIn", true);
                console.log(sessionStorage);
                window.location.href = 'dashboard.html';
                
            }
        }
    }
    
   
    
}

