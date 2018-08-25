var Epin = {
    
    generate : function(){
        var kitid = document.getElementById('profile-kitid').value;
        var count = document.getElementById('epin-count').value;
        document.getElementById('profile-kitid-error').innerHTML='';
        document.getElementById('epin-count-error').innerHTML='';
        if(kitid==''){
            document.getElementById('profile-kitid-error').innerHTML='This field is manadatory';
            return;
        }
        if(count==''){
            document.getElementById('epin-count-error').innerHTML='This field is manadatory';
            return;
        }
        
        const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey(),
            numbeOfPinsRequested:count,
	        requestedBy:sessionStorage.getItem('userId'),
	        kitId:kitid
            
        }
        const http = new XMLHttpRequest()
        http.open('POST', Connection.getRequestUrl('epingeneration'))
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) 
        http.onload = function () {           
            var response = JSON.parse(http.responseText);
            console.log(response);
            if(response.HasErrors){
                alert(response.Errors[0].Message);
            }
            else{
                alert(response.NumbeOfPinsGenerated+' Generated');
                window.location.href = 'dashboard.html';
                
            }
        }
    },
    fetch : function(){
        const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey(),
            userRole:"Admin",
	        pinStatus:"UNUSED",
	        perPagePins:"10",
	        pageNo:"1"
            
        }
        console.log('Params');
        console.log(params);
       
        const http = new XMLHttpRequest()
        http.open('POST', Connection.getRequestUrl('epinretrieval'))
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) 
        http.onload = function () {           
            var response = JSON.parse(http.responseText);
            console.log(response);
            if(response.HasErrors){
                var error='';
                for(var i in response.Errors){
                    error = error + response.Errors[i].Message;
                    if(i<response.Errors.length-1)
                        error=error+' ,';
                }
                alert(error);    
            }
            else{
               console.log(response.users);
               document.getElementById('epins').removeChild(document.getElementById('epins').lastChild);
                var tbody = document.createElement('tbody');
                for(var i in response.EPinList){
                    
                    var tr = document.createElement('tr');
                    
                    var td1 = document.createElement('td');
                    var textnode1 = document.createTextNode(response.EPinList[i].epinId);
                    td1.appendChild(textnode1);
                    tr.appendChild(td1);
                    
                    var td2 = document.createElement('td');
                    var d = new Date(response.EPinList[i].createdDate)
                    if(response.EPinList[i].createdDate==null)
                        var createdDate='';
                    else
                        var createdDate = d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear();
                    var textnode2 = document.createTextNode(createdDate);
                    td2.appendChild(textnode2);
                    tr.appendChild(td2);
                    
                    var td3 = document.createElement('td');                    
                    var textnode3 = document.createTextNode(response.EPinList[i].epin);
                    td3.appendChild(textnode3);
                    tr.appendChild(td3);
                    
                    var td4 = document.createElement('td');
                    var textnode4 = document.createTextNode(response.EPinList[i].directSellerId==null?'':response.EPinList[i].directSellerId);
                    td4.appendChild(textnode4);
                    tr.appendChild(td4);
                    
                    var td5 = document.createElement('td');                    
                    var textnode5 = document.createTextNode(response.EPinList[i].status);
                    td5.appendChild(textnode5);
                    tr.appendChild(td5);
                    
                    var td6 = document.createElement('td');
                    var textnode6 = document.createTextNode(response.EPinList[i].kitId);
                    td6.appendChild(textnode6);
                    tr.appendChild(td6);
                    
                    
                    
                    tbody.appendChild(tr);
                }
                
                document.getElementById('epins').appendChild(tbody);
            }
            
        }
    
    },
    request : function(){
        
        var requestto = document.getElementById('request-to').value;
        var count = document.getElementById('epin-count').value;
        var cost = document.getElementById('epin-cost').value;
        document.getElementById('request-to-error').innerHTML='';
        document.getElementById('epin-count-error').innerHTML='';
        document.getElementById('epin-cost-error').innerHTML='';
        if(requestto==''){
            document.getElementById('request-to-error').innerHTML='This field is manadatory';
            return;
        }
        if(count==''){
            document.getElementById('epin-count-error').innerHTML='This field is manadatory';
            return;
        }
        if(cost==''){
            document.getElementById('epin-cost-error').innerHTML='This field is manadatory';
            return;
        }
        
        const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey(),
	        userId:sessionStorage.getItem('userId'),
	        requestedTo:requestto,
            numberOfPins:count,
            cost:cost
            
        }
        const http = new XMLHttpRequest()
        http.open('POST', Connection.getRequestUrl('epinrequest'))
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) 
        http.onload = function () {           
            var response = JSON.parse(http.responseText);
            console.log(response);
            if(response.HasErrors){
                alert(response.Errors[0].Message);
            }
            else{
                alert('Epins Requested');
                window.location.href = 'dashboard.html';
                
            }
        }
        
        
    },
    fetchUnused : function(){

        return new Promise(function(resolve,reject){

            const params = {
                apiversion : Connection.getApiVersion(),
                passKey : Connection.getPassKey(),
                userRole:"Admin",
                pinStatus:"UNUSED",
                perPagePins:"10",
                pageNo:"1"
                
            }
            console.log('Params');
            console.log(params);
           
            const http = new XMLHttpRequest()
            http.open('POST', Connection.getRequestUrl('epinretrieval'))
            http.setRequestHeader('Content-type', 'application/json')
            http.send(JSON.stringify(params)) 
            http.onload = function () {           
                var response = JSON.parse(http.responseText);
                console.log(response);
                if(response.HasErrors){
                    var error='';
                    for(var i in response.Errors){
                        error = error + response.Errors[i].Message;
                        if(i<response.Errors.length-1)
                            error=error+' ,';
                    }
                    alert(error);    
                }
                else{
                   resolve(response);
                }
            }
    
        });
    },
    transfer : function(){

        var transferto = document.getElementById('transfer-to').value;
        var epins = document.getElementById('epins');
        var selectedEpins = [];
        for(var i=0;i<epins.options.length; i++){
          if(epins.options[i].selected)
          selectedEpins.push(epins.options[i].value);
        }

        if(transferto==''){
            document.getElementById('transfer-to-error').innerHTML = 'This field is mandatory';
            return;
        }
        if(selectedEpins==''){
            document.getElementById('epins-error').innerHTML = 'Please select epins';
            return;
        }
        const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey(),
            userId:sessionStorage.getItem('userId'),
	        transferTo:"Level User",
            levelUserId:transferto,
	        epins : selectedEpins
            
        }
        console.log('Params');
        console.log(params);
       
        const http = new XMLHttpRequest()
        http.open('POST', Connection.getRequestUrl('transfer/epin'))
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) 
        http.onload = function () {           
            var response = JSON.parse(http.responseText);
            console.log(response);
            if(response.HasErrors){
                var error='';
                for(var i in response.Errors){
                    error = error + response.Errors[i].Message;
                    if(i<response.Errors.length-1)
                        error=error+' ,';
                }
                alert(error);    
            }
            else{
                alert('Epins Transfered');
                window.location.href = 'dashboard.html';
            }
        }


    }
}

