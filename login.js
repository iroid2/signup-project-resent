const storedUser=JSON.parse(localStorage.getItem('user'))

const loginForm= document.getElementById("loginForm")
const emailInput= document.getElementById("emailInput")
const passwordInput= document.getElementById("emailInput")

loginForm.addEventListener('submit',function(event){
event.preventDefault()
 console.log(emailInput.value)
 console.log(passwordInput.value)
 if(emailInput.value===""&& passwordInput.value===""){
   window.location='register.html'
 }else{
   window.location='dashboard.html'
 }
})
