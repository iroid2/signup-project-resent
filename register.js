const storedUser=JSON.parse(localStorage.getItem('user'))

const regForm=document.getElementById("regForm")
const nameInput=document.getElementById("nameInput")
const emailInput=document.getElementById("emailInput")
const passwordInput=document.getElementById("passwordInput")

regForm.addEventListener('submit',function(event){
   event.preventDefault()
   console.log(nameInput.value),
   console.log(emailInput.value),
   console.log(passwordInput.value)


   const user= {
      fullname:nameInput.value,
      email:emailInput.value,
     passwordInput:passwordInput.value
   }


   localStorage.setItem("user",JSON.stringify(user))
   console.log(user)
})
