var formdata = {
    profile : {
        data : [
            {
               lable : 'name',
               error : '',
               value : ''
            },
            {
               lable : 'fathername',
               error : '',
               value : ''
            },
            {
               lable : 'mothername',
               error : '',
               value : ''
            },
            {
               lable : 'dob',
               error : '',
               value : ''
            },
            {
               lable : 'gender',
               error : '',
               value : ''
            },
            {
               lable : 'marital',
               error : '',
               value : ''
            },
            {
               lable : 'mobile',
               error : '',
               value : ''
            },
            {
               lable : 'email',
               error : '',
               value : ''
            },            
            {
               lable : 'address',
               error : '',
               value : ''
            },
            {
               lable : 'city',
               error : '',
               value : ''
            },
            {
               lable : 'state',
               error : '',
               value : ''
            },
            {
               lable : 'country',
               error : '',
               value : ''
            },
            {
               lable : 'pincode',
               error : '',
               value : ''
            },
            {
               lable : 'adhar',
               error : '',
               value : ''
            },
            {
               lable : 'username',
               error : '',
               value : ''
            },
            {
               lable : 'password',
               error : '',
               value : ''
            },
            {
               lable : 'epin',
               error : '',
               value : ''
            },
            {
               lable : 'kitid',
               error : '',
               value : ''
            },
            {
               lable : 'parentid',
               error : '',
               value : ''
            }   
        ],
        isValid : false
    },
    nominee : {
        data : [
            {
               lable : 'name',
               error : '',
               value : ''
            },
            {
               lable : 'relation',
               error : '',
               value : ''
            },
            {
               lable : 'dob',
               error : '',
               value : ''
            },
            {
               lable : 'address',
               error : '',
               value : ''
            },
            {
               lable : 'city',
               error : '',
               value : ''
            },
            {
               lable : 'state',
               error : '',
               value : ''
            }
        ],
        isValid : false
    },
    bank : {
        data : [
            {
               lable : 'name',
               error : '',
               value : ''
            },
            {
               lable : 'branch',
               error : '',
               value : ''
            },
            {
               lable : 'account',
               error : '',
               value : ''
            },
            {
               lable : 'pan',
               error : '',
               value : ''
            },
            {
               lable : 'ifsc',
               error : '',
               value : ''
            },
            {
               lable : 'acctype',
               error : '',
               value : ''
            }
        ],
        isValid : false
    }
}
var validateprofile = function(){
    
    
    var profileData = formdata.profile.data;
    console.log(profileData);
    var error;
    for(var i in profileData){
        
        console.log('profile-'+profileData[i].lable);
        var val = document.getElementById('profile-'+profileData[i].lable).value;
        console.log('val :: '+val);
        if(profileData[i].lable!='epin' && val==''){
            profileData[i].error = 'This Field is required.';
            document.getElementById('profile-'+profileData[i].lable+'-error').innerHTML='This Field is required.';
            error=true;
            }
        else{
            if(profileData[i].lable=='email'){
                    if(ValidateEmail(val)){
                         profileData[i].error = '';
                         document.getElementById('profile-'+profileData[i].lable+'-error').innerHTML='';
                         profileData[i].value=val;
                    }
                    else{
                        error=true;
                        profileData[i].error = 'Invalid Email';
                        document.getElementById('profile-'+profileData[i].lable+'-error').innerHTML='Invalid Email';
                       
                   }
            }
            else if(profileData[i].lable=='dob'){
                if(ValidateDob(val)==''){
                         profileData[i].error = '';
                         document.getElementById('profile-'+profileData[i].lable+'-error').innerHTML='';
                         profileData[i].value=val;
                    }
                    else{
                        error=true;
                        profileData[i].error = 'Invalid DOB';
                        document.getElementById('profile-'+profileData[i].lable+'-error').innerHTML='Invalid DOB';
                       
                   }
            }
            else if(profileData[i].lable=='mobile'){
                if(ValidateMobile(val)){
                         profileData[i].error = '';
                         document.getElementById('profile-'+profileData[i].lable+'-error').innerHTML='';
                         profileData[i].value=val;
                    }
                    else{
                        error=true;
                        profileData[i].error = 'Invalid Mobile Number';
                        document.getElementById('profile-'+profileData[i].lable+'-error').innerHTML='Invalid Mobile Number';
                       
                   }
            }
            else{
                 profileData[i].error = '';
                 document.getElementById('profile-'+profileData[i].lable+'-error').innerHTML='';
                 profileData[i].value=val;
            }
           
        }
            
    }
    formdata.profile.data = profileData;
    if(!error){
        
        formdata.profile.isValid = true;
        var profiletab = document.getElementById('profile');
        var nomineetab = document.getElementById('nominee');
        var banktab = document.getElementById('bank');
        var profiletabLink = document.getElementById('profile-tab');
        var nomineetabLink = document.getElementById('nominee-tab');
        var banktabLink = document.getElementById('bank-tab');
        profiletab.classList.remove("show");
        profiletab.classList.remove("active");
        nomineetab.classList.add("show");
        nomineetab.classList.add("active");
        banktab.classList.remove("show");
        banktab.classList.remove("active");
        profiletabLink.classList.remove("show");
        profiletabLink.classList.remove("active");
        nomineetabLink.classList.add("show");
        nomineetabLink.classList.add("active");
        banktabLink.classList.remove("show");
        banktabLink.classList.remove("active");
        return true;
     }
    else{
        return false;
    }
            
    console.log(formdata);
          
    
}

var ValidateEmail = function(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
   
    return (false)
}

var ValidateDob = function(dob) 
{
 return '';
}

var ValidateMobile = function(mobile)
{
  var phoneno = /^\d{10}$/;
  if((mobile.match(phoneno))){
      return true;
   }
   else{       
        return false;
   }
}

var showprofile = function(){
        var profiletab = document.getElementById('profile');
        var nomineetab = document.getElementById('nominee');
        var banktab = document.getElementById('bank');
        var profiletabLink = document.getElementById('profile-tab');
        var nomineetabLink = document.getElementById('nominee-tab');
        var banktabLink = document.getElementById('bank-tab');
        profiletab.classList.add("show");
        profiletab.classList.add("active");
        nomineetab.classList.remove("show");
        nomineetab.classList.remove("active");
        banktab.classList.remove("show");
        banktab.classList.remove("active");
        profiletabLink.classList.add("show");
        profiletabLink.classList.add("active");
        nomineetabLink.classList.remove("show");
        nomineetabLink.classList.remove("active");
        banktabLink.classList.remove("show");
        banktabLink.classList.remove("active");
}

var validatenominee = function(){
    
    var nomineeData = formdata.nominee.data;
    var error;
    for(var i in nomineeData){
        
        var val = document.getElementById('nominee-'+nomineeData[i].lable).value;
        console.log('val ::'+ nomineeData[i].lable+' '+val);
        if(val==''){
            nomineeData[i].error = 'This Field is required.';
            document.getElementById('nominee-'+nomineeData[i].lable+'-error').innerHTML='This Field is required.';
            error=true;
            }
        else{
            nomineeData[i].error = '';
            document.getElementById('nominee-'+nomineeData[i].lable+'-error').innerHTML='';
            nomineeData[i].value=val;            
        }
        
    }
    console.log(nomineeData);
    
    if(!error){
        
        formdata.nominee.isValid = true;
        var profiletab = document.getElementById('profile');
        var nomineetab = document.getElementById('nominee');
        var banktab = document.getElementById('bank');
        var profiletabLink = document.getElementById('profile-tab');
        var nomineetabLink = document.getElementById('nominee-tab');
        var banktabLink = document.getElementById('bank-tab');
        profiletab.classList.remove("show");
        profiletab.classList.remove("active");
        nomineetab.classList.remove("show");
        nomineetab.classList.remove("active");
        banktab.classList.add("show");
        banktab.classList.add("active");
        profiletabLink.classList.remove("show");
        profiletabLink.classList.remove("active");
        nomineetabLink.classList.remove("show");
        nomineetabLink.classList.remove("active");
        banktabLink.classList.add("show");
        banktabLink.classList.add("active");
        return true;
        
    }
    else{
        
        return false;
        
    }            
}

var register = function(){
    
    var bankData = formdata.bank.data;
    var error;
    for(var i in bankData){
        
        var val = document.getElementById('bank-'+bankData[i].lable).value;
        console.log('val :: '+val);
        if(val==''){
            bankData[i].error = 'This Field is required.';
            document.getElementById('bank-'+bankData[i].lable+'-error').innerHTML='This Field is required.';
            error=true;
            }
        else{
            bankData[i].error = '';
            document.getElementById('bank-'+bankData[i].lable+'-error').innerHTML='';
            bankData[i].value=val;            
        }
        
    }
    
    if(!error){
        
        const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey(),
            name:formdata.profile.data[0].value,
            fatherName:formdata.profile.data[1].value,
            motherName:formdata.profile.data[2].value,
            address:formdata.profile.data[8].value,
            city:formdata.profile.data[9].value,
            state:formdata.profile.data[10].value,
            country:formdata.profile.data[11].value,
            pincode:formdata.profile.data[12].value,
            aadharNumber:formdata.profile.data[13].value,
            userName:formdata.profile.data[14].value,
            password:formdata.profile.data[15].value,
            panNumber:formdata.bank.data[3].value,
            nomineeName:formdata.nominee.data[0].value,
            relation:formdata.nominee.data[1].value,
            nomineeAddress:formdata.nominee.data[3].value,
            nomineeState:formdata.nominee.data[5].value,
            nomineeCity:formdata.nominee.data[4].value,
            bankName:formdata.bank.data[0].value,
            branchName:formdata.bank.data[1].value,
            accountType:formdata.bank.data[5].value,
            ifscCode:formdata.bank.data[4].value,
            accountNumber:formdata.bank.data[2].value,
            epin:formdata.profile.data[16].value,
            kitId:formdata.profile.data[17].value,
            parentId:formdata.profile.data[18].value,
            dateOfBirth:formdata.profile.data[3].value+' 00:00:00',
            nomineeDateOfBirth:formdata.nominee.data[2].value+' 00:00:00',
            mobile:formdata.profile.data[6].value,
            email:formdata.profile.data[7].value,
            gender:formdata.profile.data[4].value,
            martialStatus:formdata.profile.data[5].value
            
        }
        console.log('Params');
        console.log(params);
       
        const http = new XMLHttpRequest()
        http.open('POST', Connection.getRequestUrl('add/user'))
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
                alert('Member Added');
                window.location.href='dashboard.html';
            }
            
        }
        
    }
    else{
        
        return false;
        
    } 
    
}

var activate = function(){
    var epin =  document.getElementById('epin').value;
    var user =  document.getElementById('user-id').value;
    
    if(epin==''){
        
        document.getElementById('epin-error').innerHTML='This Field is required.';
        return;
    }
    if(user==''){
        
        document.getElementById('user-id-error').innerHTML='This Field is required.';
        return;
    }
    
    const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey(),
            userId:user,
            action:"ACTIVATE",
	        epin:epin
            
        }
        console.log('Params');
        console.log(params);
       
        const http = new XMLHttpRequest()
        http.open('POST', Connection.getRequestUrl('update/user'))
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
                alert('Member Activated');
                window.location.href='dashboard.html';
            }
            
        }
    
}


var fetchMember = function(type){

    console.log(type);
    if(type=='filter' && document.getElementById('filter-by').value!='Status'){
        filterBy = document.getElementById('filter-by').value;
        filterValue = document.getElementById('filter-value').value;
        document.getElementById('filter-by-error').innerHTML='';
        document.getElementById('filter-value-error').innerHTML='';

       // if(filterBy=='')
       // {
       //   document.getElementById('filter-by-error').innerHTML='This Field is Mandatory';
       //   return;
       // }
        if(filterValue=='')
        {
            document.getElementById('filter-value-error').innerHTML='This Field is Mandatory';
            return;
        }

    }

    if(type=='filter' && document.getElementById('filter-by').value=='Status'){
        filterBy = document.getElementById('filter-by').value;
        
        //document.getElementById('filter-by-error').innerHTML='';
       

        //if(filterBy=='')
       // {
       //   document.getElementById('filter-by-error').innerHTML='This Field is Mandatory';
       //   return;
       // }
        

    }
    
    //"mobileNumber":"9975475712" / "aadharNumber":"" / "directSellerId":""/ "directSellerName":""
        
    var params = {
        apiversion : Connection.getApiVersion(),
        passKey : Connection.getPassKey(),
        userId : sessionStorage.getItem('userId'),
	    userRole:"Admin",
    }

    console.log(typeof filterBy);
    if(typeof filterBy != 'undefined'){

        if(filterBy=='Mobile')
    {
        params.mobileNumber = filterValue;
    }
    if(filterBy=='Aadhar')
    {
        params.aadharNumber = filterValue;
    }
    if(filterBy=='Direct Seller Id')
    {
        params.directSellerId = filterValue;
    }
    if(filterBy=='Direct Seller Name')
    {
        params.directSellerName = filterValue;
    }
    if(filterBy=='Status' && type!='all'){
        var status = document.getElementById('filter-status').value;
        document.getElementById('filter-status-error').innerHTML='';
        if(status==''){
            document.getElementById('filter-status-error').innerHTML='Please Select Valid Status';
            return;
        }
        params.status = status;
    }

    }
    
    console.log('Params');
    console.log(params);
   
    const http = new XMLHttpRequest()
    http.open('POST', Connection.getRequestUrl('fetch/user'))
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
           console.log(response);
           if(type=='filter')
              document.getElementById('members').removeChild(document.getElementById('members').lastChild);
            var tbody = document.createElement('tbody');
            for(var i in response.userList){
                
                var tr = document.createElement('tr');
                
                var td1 = document.createElement('td');
                var textnode1 = document.createTextNode(response.userList[i].userId);
                td1.appendChild(textnode1);
                tr.appendChild(td1);
                
                var td2 = document.createElement('td');
                var d = new Date(response.userList[i].confirmationDate)
                if(response.userList[i].confirmationDate==null)
                    var confirmationDate='';
                else
                    var confirmationDate = d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear();
                var textnode2 = document.createTextNode(confirmationDate);
                td2.appendChild(textnode2);
                tr.appendChild(td2);
                
                var td3 = document.createElement('td');
                var d = new Date(response.userList[i].dateOfBirth)
                if(response.userList[i].dateOfBirth==null)
                    var dateOfBirth='';
                else
                    var dateOfBirth = d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear();
                var textnode3 = document.createTextNode(dateOfBirth);
                td3.appendChild(textnode3);
                tr.appendChild(td3);
                
                var td4 = document.createElement('td');
                var textnode4 = document.createTextNode(response.userList[i].directSellerId==null?'':response.userList[i].directSellerId);
                td4.appendChild(textnode4);
                tr.appendChild(td4);
                
                var td5 = document.createElement('td');
                var d = new Date(response.userList[i].joiningDate)
                if(response.userList[i].joiningDate==null)
                    var joiningDate='';
                else
                    var joiningDate = d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear();
                var textnode5 = document.createTextNode(joiningDate);
                td5.appendChild(textnode5);
                tr.appendChild(td5);
                
                var td6 = document.createElement('td');
                var textnode6 = document.createTextNode(response.userList[i].mobile);
                td6.appendChild(textnode6);
                tr.appendChild(td6);
                
                var td7 = document.createElement('td');
                var textnode7 = document.createTextNode(response.userList[i].name);
                td7.appendChild(textnode7);
                tr.appendChild(td7);
                
                var td8 = document.createElement('td');
                var textnode8 = document.createTextNode(response.userList[i].parentId);
                td8.appendChild(textnode8);
                tr.appendChild(td8);
                
                var td9 = document.createElement('td');
                var status;
                if(response.userList[i].statusId==1)
                   status = 'Active';
                if(response.userList[i].statusId==2)
                   status = 'Inactive';
                if(response.userList[i].statusId==3)
                   status = 'Verification Pending';
                if(response.userList[i].statusId==4)
                   status = 'Deleted';
                var textnode9 = document.createTextNode(status);
                td9.appendChild(textnode9);
                tr.appendChild(td9);
                
                tbody.appendChild(tr);
            }
            
            document.getElementById('members').appendChild(tbody);
        }
    }

}