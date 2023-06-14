const getStarted=document.getElementById("getStarted")
const storedUser=JSON.parse(localStorage.getItem('user'))
let user= storedUser?storedUser :{}

getStarted.addEventListener('click',function(){
   console.log(user)
   if(user.email){
      window.location='login.html'
   }else{
      window.location='register.html'
   }
})
