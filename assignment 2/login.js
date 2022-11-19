var email=document.getElementById("email");
var password=document.getElementById("passw");
var error=document.getElementById("error");
var error1=document.getElementById("error1");
var error2=document.getElementById("error2");
var phonenumber=document.getElementById("phonenumber");
var successFlag= false;

function valid(){
    let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let rxpass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    
    //Email Validation 
    if(regex.test(email.value)){
        error.innerHTML='email is valid';
        error.style.color="green";
        // Password Validation         
        if(rxpass.test(password.value))
        {    
            error1.innerHTML='Password is valid';
            error1.style.color="green";
            successFlag=true;
        }
        else
        {
            error1.innerHTML='Password is invalid';
            error1.style.color="red"; 
            successFlag=false;
        }
    }
    else{
        error.innerHTML='email is invalid';
        error.style.color="red"; 
        successFlag=false;
    }
    return successFlag;
}

