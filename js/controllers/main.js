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

$(window).on('load', function() {
    
    if(sessionStorage.getItem('isLoggedIn') && sessionStorage.getItem('userRole')==='Admin'){

    }
    else{
        document.getElementById('generateepin').style.display='none';
        document.getElementById('generateepinmobile').style.display='none';
        //$("#generateepin").hide();
        document.getElementById('all-members').style.display='none';
        document.getElementById('all-members-mobile').style.display='none';
        document.getElementById('withdrawalrequest').style.display='none';
    } 
    
   });



