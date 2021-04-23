function validate() {
    let user = document.querySelector('#user').value;
    let pass = document.querySelector('#pass').value;
    let conpass = document.querySelector('#conpass').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    

    if(user == "") {
        document.querySelector('#userAlert').innerHTML = "Please input the user name!";
        return false;
    }else if(user.length <= 5 || user.length >= 20) {
        document.querySelector('#userAlert').innerHTML = "User name must 5 to 20 character!";
        return false;
    }else if(!isNaN(user)) {
        document.querySelector("#userAlert").innerHTML = "User name should not be number";
        return false;
    }

    if(pass == "") {
        document.querySelector('#passwordAlert').innerHTML = "Please input the password!";
        return false;
    }else if(pass.length <= 5 || pass.length >= 20) {
        document.querySelector('#passwordAlert').innerHTML = "User name must 5 to 20 character!";
        return false;
    }

    if(conpass == "") {
        document.querySelector('#confirmAlert').innerHTML = "Please input the confirm password!";
        return false;
    }else if(pass != conpass) {
        document.querySelector('#confirmAlert').innerHTML = "Password not match!";
        return false;
    }

    if(email == "") {
        document.querySelector('#emailAlert').innerHTML = "Please input the email!";
        return false;
    } 
    else if(email.indexOf("@") == 0){
        document.querySelector('#emailAlert').innerHTML = "@ is invalid position!";
        return false;
    }else if((email.charAt(emails.length -4) != ".") && (email.charAt(emails.length -3) != ".")){
        document.querySelector('#emailAlert').innerHTML = ". is invalid position!";
        return false;
    }

    if(phone == "") {
        document.querySelector('#phoneAlert').innerHTML = "Please input the phone number!";
        return false;
    }else if(isNaN(phone)) {
        document.querySelector('#phoneAlert').innerHTML = "Phon number must be digit!";
        return false;
    }else if(phone !=10) {
        document.querySelector('#phoneAlert').innerHTML = "Phon number must be 10 digit!";
        return false;
    }
}