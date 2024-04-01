const signupForm=document.querySelector('#signup-form')
const username=document.querySelector('#userName')
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(username.value)

})