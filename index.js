function handlesubmit(callback){
   var id=document.getElementById('username').value; 
   var pass=document.getElementById('typePasswordX').value;
   console.log(id);
   console.log(pass);
   if(id === "admin"&& pass=== "12345"){
    callback()
   }else{
    alert("Login Failed");
   }

}
function validate(){
    window.location.href="body.html"
}
