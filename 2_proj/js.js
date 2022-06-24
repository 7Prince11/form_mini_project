/* Variables */ 

const input_name = document.querySelector('#name');
const input_mail = document.querySelector('#email')
const input_password = document.querySelector('#password')
const button = document.querySelector('button');

/*  Variables for mistakes*/ 
const p_name = document.querySelector('.M_name');
const p_email = document.querySelector('.M_email');
const p_password = document.querySelector('.M_password');

button.addEventListener('click', () => {
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (input_name.value == '') {
        p_name.innerHTML = 'Please enter your name!';
        p_email.innerHTML = '';
        p_password.innerHTML = '';
    }
    else if (input_name.value.length < 4){
        p_name.innerHTML = 'Name is too short!';
        p_email.innerHTML = '';
        p_password.innerHTML = '';
    }
    else if (input_mail.value == '') {
        p_email.innerHTML = 'Please enter your email address!';
        p_name.innerHTML = '';
        p_password.innerHTML='';
    }
     
    else if (!filter.test(input_mail.value)) {
        p_email.innerHTML = 'Invalid email address!';
        input_mail.focus();
        p_name.innerHTML = '';
        p_password.innerHTML='';
    }
    else if (input_password.value == '') {
        p_password.innerHTML = 'Please enter your password!';
        p_email.innerHTML = '';
        p_name.innerHTML = '';
    }
    else if (input_password.value.length < 4){
        p_password.innerHTML = 'Too short password!';
        p_email.innerHTML = '';
        p_name.innerHTML = '';
    }
    else
    {
    p_password.innerHTML = '';
    p_email.innerHTML = '';
    p_name.innerHTML = '';
    alert('Done!!!')
    location.href = 'index.html';
    }


    if(input_name.value.length < 4) {
        console.log('works')
    }
    else console.log('doestn work')
    
 
 
})