
        var hideMenu = function(){
            var userRole = sessionStorage.getItem('userRole');
            console.log(userRole);
            if(userRole=='Admin'){
                document.getElementById('generateepin').style.display='block';
                document.getElementById('all-members').style.display='block';
                document.getElementById('withdrawalrequest').style.display='block';


            }
            else {
                document.getElementById('generateepin').style.display='none';
                document.getElementById('all-members').style.display='none';
                document.getElementById('withdrawalrequest').style.display='none';


            }
        }

