var Dashboard = {
    
    getStats : function(){
        const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey(),
            userRole:sessionStorage.getItem('userRole'),
            userId:sessionStorage.getItem('userId')            
        }
        const http = new XMLHttpRequest()
        http.open('POST', Connection.getRequestUrl('statistics/'))
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) 
        http.onload = function () {           
            var response = JSON.parse(http.responseText);
            console.log(response);
            if(response.HasErrors){
                // alert(response.Errors[0].Message);
            }
            else{
                
                document.getElementById('todayjoining').innerHTML=response.todaysJoiningCount;
                document.getElementById('availablebalance').innerHTML=response.availableBalance;
                document.getElementById('totalearning').innerHTML=response.totalEarning;
                document.getElementById('withdrawableamount').innerHTML=response.withdrawableAmount;
                
            }
        }
    },
    getEpinRequest : function(){
        
        const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey(),
            userId:sessionStorage.getItem('userId')            
        }
        const http = new XMLHttpRequest()
        http.open('POST', Connection.getRequestUrl('fetch/epinrequest'))
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) 
        http.onload = function () {           
            var response = JSON.parse(http.responseText);
            console.log(response);
            if(response.HasErrors){
                // alert(response.Errors[0].Message);
            }
            else{
                
                var table = document.getElementById('pinrequest');
                
               console.log(response);
                var tbody = document.createElement('tbody');
                for(var i in response.epinRquests){
                    
                     var tr = document.createElement('tr');
                     var att = document.createAttribute('style');
                     att.value='font-size:12px';
                     tr.setAttributeNode(att);
                    
                    var td1 = document.createElement('td');
                    var textnode1 = document.createTextNode(response.epinRquests[i].epinRequestId);
                    td1.appendChild(textnode1);
                    tr.appendChild(td1);
                    
                    var td2 = document.createElement('td');                    
                    // var textnode2 = document.createTextNode(response.epinRquests[i].requesterId+' - '+response.epinRquests[i].requestedToId);
                    var textnode2 = document.createTextNode(response.epinRquests[i].requesterId);
                    td2.appendChild(textnode2);
                    tr.appendChild(td2);
                    
                    var td3 = document.createElement('td');                    
                    var textnode3 = document.createTextNode(response.epinRquests[i].numberOfEpin);
                    td3.appendChild(textnode3);
                    tr.appendChild(td3);
                    
                    var td4 = document.createElement('td');
                    var textnode4 = document.createTextNode(response.epinRquests[i].cost);
                    td4.appendChild(textnode4);
                    tr.appendChild(td4);
                    
                    var td5 = document.createElement('td');                    
                    var textnode5 = document.createTextNode(response.epinRquests[i].status);
                    td5.appendChild(textnode5);
                    tr.appendChild(td5);
                    
                    tbody.appendChild(tr);
                }
                table.appendChild(tbody);
                
            }
        }
    }
}