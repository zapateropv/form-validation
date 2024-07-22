const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const showPassword = document.getElementById('showPassword');

const validator = document.getElementById('confirmPasswordHeader');


const signUp = document.getElementById('signUp');
const emailPlaceholder = document.getElementById('emailPlaceholder')
const password1 = document.getElementById('password1')
const showpasswordplaceholder = document.getElementById('showpasswordplaceholder');

function emailConfirmation(){


if(!email.value.includes('@gmail.com')  ){
email.style.border = "1px solid red"
emailPlaceholder.textContent = "Email should includes @gmail.com"
emailPlaceholder.style.color = 'red'
}
else {
    email.style.border = "1px solid black"
    emailPlaceholder.textContent = "Email"
emailPlaceholder.style.color = 'grey'
}
}

const alph = ['A', 'B', 'C', 'D', 'E',]
console.log(alph.includes('A' ,'B'))


function inputPassword(){

const uppercase = /[A-Z]/
const numbers = /[0-9]/
const chars = /[!@#$%^&*(),.?":{}|<>]/


if(password.value.length < 8 ){
password1.textContent = 'PASSWORD LENGTH MUST BE 8'
password1.style.color = 'red'
password.style.border = "1px solid red"



}

else if(uppercase.test(password.value)  || numbers.test(password.value) || chars.test(password.value)){
    password1.textContent = 'Password:'
password.style.border = "1px solid black"

}

else{

password1.textContent = 'PASSWORD  MUST CONTAINS SPECIAL CHARACTERS,NUMBERS AND UPPERCASE LETTER'
    password1.style.color = 'red'
    password.style.border = "1px solid red" 
}

}




function confirmPassword1 (){

if(confirmPassword.value === password.value){
  validator.textContent = "Confirm Password:"
    validator.style.color = 'grey'
}

else{
    validator.textContent = "PASSWORD DOESN'T MATCH"
    validator.style.color = 'red'
}


    
}



showPassword.addEventListener('change', () => {

    if(showPassword.checked){
        password.type = 'text'
        password.textContent = password.value

        confirmPassword.type = 'text'
        confirmPassword.textContent = confirmPassword.value
        

    }

    else{
        password.type = 'password'
        confirmPassword.type = 'password'
        
    }
})



signUp.addEventListener('click', () => {


    emailConfirmation()
    inputPassword ()
    confirmPassword1 ()
    
    

})
