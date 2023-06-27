const password1 = document.querySelector("#password")
const password2 = document.querySelector("#password-confirm")
const button = document.querySelector(".btn")
const pwdMsg = document.querySelector("#match")

password2.addEventListener('input', ()=>{
    if (password1.value !== password2.value){
        console.log('password did not match')
        pwdMsg.innerText = 'Passwords do not match'
        button.disabled = true
        button.classList.add('disabled')
        password1.classList.add('error')
        password2.classList.add('error')
    } else if(password1.value === password2.value){
        pwdMsg.innerText = '';
        button.disabled = false
        button.classList.toggle("disabled")
        clear()
    }
})

password1.addEventListener('input', ()=>{
    if (password1.value !== password2.value){
        console.log('password did not match')
        pwdMsg.innerText = 'Passwords do not match'
        button.disabled = true
        button.classList.add('disabled')
        password1.classList.add('error')
        password2.classList.add('error')
    } else if(password1.value === password2.value){
        pwdMsg.innerText = '';
        button.disabled = false
        button.classList.toggle("disabled")
        clear()
    }
})

const clear = ()=>{
    password1.classList.toggle("error")
    password2.classList.toggle("error")
}