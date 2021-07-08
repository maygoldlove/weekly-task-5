const Fname = document.getElementById('fName');
const lname = document.getElementById('lName');
const passW = document.getElementById('passW');
const rePass = document.getElementById('rePass');

const submitBtn = document.querySelector('#button');

submitBtn.addEventListener('click', function(event){
    if (Fname.value === lname.value){
        alert('FirstName and LastName must not be thesame')
        event.preventDefault();
    }
    if (passW.value !== rePass.value) {
        alert('Password did not match')
        event.preventDefault();
    }
    else {
        event.submit();
    }
})