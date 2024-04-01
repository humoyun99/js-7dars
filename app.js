const signupForm=document.querySelector('#signup-form')
const username=document.querySelector('#userName')
const message=document.querySelector('.message')
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const regEx=/^[a-zA_Z0-9]{6,12}$/
    const inputVal=signupForm.username.value

    if(regEx.test(inputVal)){
        message.textContent="malumot tugri kiritildi"

    }else{
        message.textContent="notugri kiritingiz boshqatanurinib kuring"
    }
})

