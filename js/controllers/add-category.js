var Category = {
    
    add : function(){
        
        var name = document.getElementById('category-name').value;
        var description = document.getElementById('category-description').value;
        document.getElementById('category-name-error').innerHTML='';
        document.getElementById('category-description-error').innerHTML='';
        if(name==''){
            document.getElementById('category-name-error').innerHTML='This field is manadatory';
            return;
        }
        if(description==''){
            document.getElementById('category-description-error').innerHTML='This field is manadatory';
            return;
        }
        
        const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey(),
            categoryName:name,
	        categoryDescription:description
            
        }
        const http = new XMLHttpRequest()
        http.open('POST', Connection.getRequestUrl('add/category'))
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) 
        http.onload = function () {           
            var response = JSON.parse(http.responseText);
            console.log(response);
            if(response.HasErrors){
                alert(response.Errors[0].Message);
            }
            else{
                alert('Category Added');
                window.location.href = 'dashboard.html';
                
            }
        }
    },
    
  fetch : function(){
      
      return new Promise(function(resolve,reject){
         
          const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey(),           
        }
        const http = new XMLHttpRequest()
        http.open('POST', Connection.getRequestUrl('fetch/category'))
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
       
  },
 addSubCatgory : function(){
     
     var catName = document.getElementById('category-name').value;
     var name = document.getElementById('subcategory-name').value;
     var description = document.getElementById('subcategory-description').value;
     
     document.getElementById('category-name-error').innerHTML='';
     document.getElementById('subcategory-name-error').innerHTML='';
     document.getElementById('subcategory-description-error').innerHTML='';
     
     if(catName==''){
            document.getElementById('category-name-error').innerHTML='This field is manadatory';
            return;
        }
     if(name==''){
            document.getElementById('subcategory-name-error').innerHTML='This field is manadatory';
            return;
        }
     if(description==''){
            document.getElementById('subcategory-description-error').innerHTML='This field is manadatory';
            return;
        }
     
     
     const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey(),
            categoryName:catName,
	        subCategoryName:name,
	        subCategoryDescription:description
            
        }
        const http = new XMLHttpRequest()
        http.open('POST', Connection.getRequestUrl('add/subcategory'))
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) 
        http.onload = function () {           
            var response = JSON.parse(http.responseText);
            console.log(response);
            if(response.HasErrors){
                alert(response.Errors[0].Message);
            }
            else{
                alert('Sub Category Added');
                window.location.href = 'dashboard.html';
                
            }
        }
   
    },
    fetchSubCat : function(){
      
      return new Promise(function(resolve,reject){
         
          const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey(), 
            categoryName : document.getElementById('category-name').value,
        }
        const http = new XMLHttpRequest()
        http.open('POST', Connection.getRequestUrl('fetch/subcategory'))
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
       
  },
 addProduct : function(){
     
     var catName = document.getElementById('category-name').value;
     var SubCat = document.getElementById('subcategory-name').value;
     var name = document.getElementById('product-name').value;
     var desc = document.getElementById('product-description').value;
     var weight = document.getElementById('product-weight').value;
     var mrp = document.getElementById('product-mrpprice').value;
     var dpprice = document.getElementById('product-dpprice').value;
     var usebefore = document.getElementById('product-usebefore').value;

     
     document.getElementById('category-name-error').innerHTML='';
     document.getElementById('subcategory-name-error').innerHTML='';
     document.getElementById('product-name-error').innerHTML='';
     document.getElementById('product-description-error').innerHTML='';
     document.getElementById('product-weight-error').innerHTML='';
     document.getElementById('product-mrpprice-error').innerHTML='';
     document.getElementById('product-dpprice-error').innerHTML='';
     document.getElementById('product-usebefore-error').innerHTML='';
     
     if(catName==''){
            document.getElementById('category-name-error').innerHTML='This field is manadatory';
            return;
        }
     if(SubCat==''){
            document.getElementById('subcategory-name-error').innerHTML='This field is manadatory';
            return;
        }
     if(name==''){
            document.getElementById('product-name-error').innerHTML='This field is manadatory';
            return;
        }
     if(desc=='') {
              document.getElementById('product-description').innerHTML='This field is manadatory';
             return;
         }
       
     if(weight==''){
        document.getElementById('product-weight').innerHTML='This field is manadatory';
         return;
         }
     if(mrp==''){
        document.getElementById('product-mrpprice').innerHTML='This field is manadatory';
         return;
         }
     if(dpprice==''){
        document.getElementById('product-dpprice').innerHTML='This field is manadatory';
         return;
         }
     if(usebefore==''){
        document.getElementById('product-usebefore').innerHTML='This field is manadatory';
         return;
         }
     
     
     const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey(),
            categoryName : catName,
	        subCategoryName : SubCat,
	        productName : name,
	        productDescription : desc,
	        weight : weight,
	        mrpPrice : mrp,
	        dpPrice: dpprice,
	        usedBefore: usebefore            
        }
        const http = new XMLHttpRequest()
        http.open('POST', Connection.getRequestUrl('add/product'))
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) 
        http.onload = function () {           
            var response = JSON.parse(http.responseText);
            console.log(response);
            if(response.HasErrors){
                alert(response.Errors[0].Message);
            }
            else{
                alert('Product Added');
                window.location.href = 'dashboard.html';
                
            }
        }
     
   },
   fetchProducts : function(){
       
       return new Promise(function(resolve,reject){
         
          const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey(),            
        }
        const http = new XMLHttpRequest()
        http.open('POST', Connection.getRequestUrl('fetch/products'))
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
       
   },
  addJoiningKit : function(){
      
      var kitname = document.getElementById('kit-name').value;
      var kitprice = document.getElementById('kit-price').value;
      var dealerprice = document.getElementById('dealer-price').value;
      var products = document.getElementById('products');
      var selectedProdcuts = [];
      for(var i=0;i<products.options.length; i++){
          if(products.options[i].selected)
              selectedProdcuts.push(products.options[i].text);
      }
      
     
     document.getElementById('kit-name-error').innerHTML='';
     document.getElementById('kit-price-error').innerHTML='';
     document.getElementById('dealer-price-error').innerHTML='';
     document.getElementById('products-error').innerHTML='';
     
     if(kitname==''){
            document.getElementById('kit-name-error').innerHTML='This field is manadatory';
            return;
        }
     if(kitprice==''){
            document.getElementById('kit-price-error').innerHTML='This field is manadatory';
            return;
        }
     if(dealerprice==''){
            document.getElementById('dealer-price-error').innerHTML='This field is manadatory';
            return;
        }
      if(selectedProdcuts.length <= 0 ){
            document.getElementById('products-error').innerHTML='This field is manadatory';
            return;
        }
     
     
     const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey(),
            userId:sessionStorage.getItem('userId'),
            kitName : kitname,
	        kitPrice :kitprice,
	        kitDealerPrice :dealerprice,
	        products : selectedProdcuts
            
        }
     console.log(params);
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
                alert('Joinkit Added');
                window.location.href = 'dashboard.html';
                
            }
        }
   
      
  },
  fetchJoiningKit : function(){
      
      return new Promise(function(resolve,reject){
         
          const params = {
            apiversion : Connection.getApiVersion(),
            passKey : Connection.getPassKey()            
        }
     console.log(params);
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