var Connection = {
    
    url : 'http://13.127.113.152:8080/data/',
    passKey : '12901f82-2bb2-4175-b9fc-98166f7284b8',
    apiversion : '1.0',
    getPassKey : function(){
      return this.passKey;  
    },
    getApiVersion : function(){
        return this.apiversion;
    },
    getRequestUrl : function(requestName){        
        return this.url+requestName;
    }    
    
}