/*$(document).ready(function() {
    $('#downline').DataTable();
});
*/




var fetchLevelDownline = function(){
    
    const params = {
        apiversion : Connection.getApiVersion(),
        passKey : Connection.getPassKey(),
        userId : sessionStorage.getItem('userId')
        
    }
    console.log('Params');
    console.log(params);
   
    const http = new XMLHttpRequest()
    http.open('POST', Connection.getRequestUrl('fetch/userdownline'))
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
           document.getElementById('downline').removeChild(document.getElementById('downline').lastChild);
            var tbody = document.createElement('tbody');
            for(var i in response.users){
                
                var tr = document.createElement('tr');
                
                var td1 = document.createElement('td');
                var link = document.createElement('a');
                var hr = document.createAttribute('href');
                link.setAttributeNode(hr);
                hr.value = "profile.html#"+response.users[i].userId;
                var textnode1 = document.createTextNode(response.users[i].userId);
                link.appendChild(textnode1);
                td1.appendChild(link);
                tr.appendChild(td1);
                
                var td2 = document.createElement('td');
                var d = new Date(response.users[i].confirmationDate)
                if(response.users[i].confirmationDate==null)
                    var confirmationDate='';
                else
                    var confirmationDate = d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
                var textnode2 = document.createTextNode(confirmationDate);
                td2.appendChild(textnode2);
                tr.appendChild(td2);
                
                var td3 = document.createElement('td');
                var d = new Date(response.users[i].dateOfBirth)
                if(response.users[i].dateOfBirth==null)
                    var dateOfBirth='';
                else
                    var dateOfBirth = d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
                var textnode3 = document.createTextNode(dateOfBirth);
                td3.appendChild(textnode3);
                tr.appendChild(td3);
                
                var td4 = document.createElement('td');
                var textnode4 = document.createTextNode(response.users[i].directSellerId==null?'':response.users[i].directSellerId);
                td4.appendChild(textnode4);
                tr.appendChild(td4);
                
                var td5 = document.createElement('td');
                var d = new Date(response.users[i].joiningDate)
                if(response.users[i].joiningDate==null)
                    var joiningDate='';
                else
                    var joiningDate = d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
                var textnode5 = document.createTextNode(joiningDate);
                td5.appendChild(textnode5);
                tr.appendChild(td5);
                
                var td6 = document.createElement('td');
                var textnode6 = document.createTextNode(response.users[i].mobile);
                td6.appendChild(textnode6);
                tr.appendChild(td6);
                
                var td7 = document.createElement('td');
                var textnode7 = document.createTextNode(response.users[i].name);
                td7.appendChild(textnode7);
                tr.appendChild(td7);
                
                var td8 = document.createElement('td');
                if(response.users[i].parentId!=null){
                    var link = document.createElement('a');
                var hr = document.createAttribute('href');
                link.setAttributeNode(hr);
                hr.value = "profile.html#"+response.users[i].parentId;
                var textnode8 = document.createTextNode(response.users[i].parentId);
                link.appendChild(textnode8);
                td8.appendChild(link);
                }
                tr.appendChild(td8);
                
               /* var td9 = document.createElement('td');
                var textnode9 = document.createTextNode(response.users[i].statusId);
                td9.appendChild(textnode9);
                tr.appendChild(td9); */

                var td9 = document.createElement('td');
                var status;
                if(response.users[i].statusId==1)
                   status = 'Active';
                if(response.users[i].statusId==2)
                   status = 'Inactive';
                if(response.users[i].statusId==3)
                   status = 'Verification Pending';
                if(response.users[i].statusId==4)
                   status = 'Deleted';
                var textnode9 = document.createTextNode(status);
                td9.appendChild(textnode9);
                tr.appendChild(td9);

                var td10 = document.createElement('td');
                var text = '<a href="profile.html#'+response.users[i].userId+'" class="btn btn-primary btn-sm" style="width:100%;margin:2px;">view</a>';
                if(response.users[i].statusId==2)
                    text += '<a href="activate.html#'+response.users[i].userId+'" class="btn btn-success btn-sm" style="margin:2px;width:100%;">activate</a>';
                td10.innerHTML = text;
                tr.appendChild(td10);
                
                tbody.appendChild(tr);
            }
            
            document.getElementById('downline').appendChild(tbody);

            $("#downline").tableExport({formats: ["xls"], position: 'top'    });
        }
        
    }
}

var fetchDirectDownline = function(){
    var userId = document.getElementById('userId').value;
    if(userId==''){
        document.getElementById('userId-error').innerHTML = 'Please Enter User Id';
        return;
    }
    const params = {
        apiversion : Connection.getApiVersion(),
        passKey : Connection.getPassKey(),
        userId : userId
        
    }
    console.log('Params');
    console.log(params);
   
    const http = new XMLHttpRequest()
    http.open('POST', Connection.getRequestUrl('fetch/userdownline'))
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
           document.getElementById('downline').removeChild(document.getElementById('downline').lastChild);
            var tbody = document.createElement('tbody');
            for(var i in response.users){
                
                var tr = document.createElement('tr');
                
                var td1 = document.createElement('td');
                var link = document.createElement('a');
                var hr = document.createAttribute('href');
                link.setAttributeNode(hr);
                hr.value = "profile.html#"+response.users[i].userId;
                var textnode1 = document.createTextNode(response.users[i].userId);
                link.appendChild(textnode1);
                td1.appendChild(link);
                tr.appendChild(td1);
                
                var td2 = document.createElement('td');
                var d = new Date(response.users[i].confirmationDate)
                if(response.users[i].confirmationDate==null)
                    var confirmationDate='';
                else
                    var confirmationDate = d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
                var textnode2 = document.createTextNode(confirmationDate);
                td2.appendChild(textnode2);
                tr.appendChild(td2);
                
                var td3 = document.createElement('td');
                var d = new Date(response.users[i].dateOfBirth)
                if(response.users[i].dateOfBirth==null)
                    var dateOfBirth='';
                else
                    var dateOfBirth = d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear();
                var textnode3 = document.createTextNode(dateOfBirth);
                td3.appendChild(textnode3);
                tr.appendChild(td3);
                
                var td4 = document.createElement('td');
                var textnode4 = document.createTextNode(response.users[i].directSellerId==null?'':response.users[i].directSellerId);
                td4.appendChild(textnode4);
                tr.appendChild(td4);
                
                var td5 = document.createElement('td');
                var d = new Date(response.users[i].joiningDate)
                if(response.users[i].joiningDate==null)
                    var joiningDate='';
                else
                    var joiningDate = d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear();
                var textnode5 = document.createTextNode(joiningDate);
                td5.appendChild(textnode5);
                tr.appendChild(td5);
                
                var td6 = document.createElement('td');
                var textnode6 = document.createTextNode(response.users[i].mobile);
                td6.appendChild(textnode6);
                tr.appendChild(td6);
                
                var td7 = document.createElement('td');
                var textnode7 = document.createTextNode(response.users[i].name);
                td7.appendChild(textnode7);
                tr.appendChild(td7);
                
                var td8 = document.createElement('td');
                if(response.users[i].parentId!=null){
                    var link = document.createElement('a');
                var hr = document.createAttribute('href');
                link.setAttributeNode(hr);
                hr.value = "profile.html#"+response.users[i].parentId;
                var textnode8 = document.createTextNode(response.users[i].parentId);
                link.appendChild(textnode8);
                td8.appendChild(link);
                }
                tr.appendChild(td8);
                
                /*var td9 = document.createElement('td');
                var textnode9 = document.createTextNode(response.users[i].statusId);
                td9.appendChild(textnode9);
                tr.appendChild(td9);*/

                var td9 = document.createElement('td');
                var status;
                if(response.users[i].statusId==1)
                   status = 'Active';
                if(response.users[i].statusId==2)
                   status = 'Inactive';
                if(response.users[i].statusId==3)
                   status = 'Verification Pending';
                if(response.users[i].statusId==4)
                   status = 'Deleted';
                var textnode9 = document.createTextNode(status);
                td9.appendChild(textnode9);
                tr.appendChild(td9);

                
                var td10 = document.createElement('td');
                var text = '<a href="profile.html#'+response.users[i].userId+'" class="btn btn-primary btn-sm" style="width:100%;margin:2px;">view</a>';
                td10.innerHTML = text;
                tr.appendChild(td10);
              
                
                tbody.appendChild(tr);
            }
            
            document.getElementById('downline').appendChild(tbody);

            $("#downline").tableExport({formats: ["xls"],position: 'top'    });
        }
        
    }
}
    