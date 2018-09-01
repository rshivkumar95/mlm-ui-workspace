var addmember = function(){
    
    if(sessionStorage.getItem('isLoggedIn'))
       window.location.href='addmember.html';
    else
       window.location.href='login.html';  
}; 


(function(){
    console.log('called');
    
    if(!sessionStorage.getItem('isLoggedIn'))      
       window.location.href='login.html';  
    
    
    
})();




