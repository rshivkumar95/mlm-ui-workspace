var Joining = {
    
    add : function(){
        
        const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey(),
            userId:1,
	        kitName:"Test Joining  Kit",
	        kitPrice:"525",
	        kitDealerPrice:"500",
	        products:["Test Product","Test Product - 2"]
            
        }
        const http = new XMLHttpRequest()
        http.open('POST', Connection.getRequestUrl('add/joiningkit'))
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) 
        http.onload = function () {           
            var response = JSON.parse(http.responseText);
            console.log(response);
            if(response.HasErrors){
                alert(response.Errors[0].Message);
            }
            else{
                alert('Joining Kit Added');
                window.location.href = 'dashboard.html';
                
            }
        }
    },
    fetch : function(){
        
        return new Promise(function(resolve,reject){
         
          const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey()
        }
        const http = new XMLHttpRequest()
        http.open('POST', Connection.getRequestUrl('fetch/joiningkits'))
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) 
        http.onload = function () {           
            var response = JSON.parse(http.responseText);
            console.log(response);
            if(response.HasErrors){
                alert(response.Errors[0].Message);
            }
            else{
                resolve(response);
                
            }
        }
                          
      });
        
    }
}