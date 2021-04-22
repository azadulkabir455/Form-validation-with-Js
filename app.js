function validate() {
    let user = document.querySelector('#user').value;
    let pass = document.querySelector('#pass').value;
    let conpass = document.querySelector('#conpass').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    

    if(user == "") {
        document.querySelector('#userAlert').innerHTML = "Please input the user name!";
        return false;
    }

    if(pass == "") {
        document.querySelector('#passwordAlert').innerHTML = "Please input the password!";
        return false;
    }

    if(conpass == "") {
        document.querySelector('#confirmAlert').innerHTML = "Please input the confirm password!";
        return false;
    }

    if(email == "") {
        document.querySelector('#emailAlert').innerHTML = "Please input the email!";
        return false;
    }

    if(phone == "") {
        document.querySelector('#phoneAlert').innerHTML = "Please input the phone number!";
        return false;
    }
}