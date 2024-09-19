function telp(e){
    if(!/^[0-9]+$/.test(e.value)){
        e.value = e.value.substring(0, e.value.length-1);
    }
}

function val(){
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let number = document.getElementById("number")
    let password = document.getElementById("password")
    let confPassword = document.getElementById("confPassword")
    let checkbox = document.getElementById("checkbox")

    if(name.value.length <= 10){
        alert("Name must be more than 10 characters!")
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("Email must be ended by @gmail.com")
    }
    else if(number.value <= 9){
        alert("Phone number must be more than 9 numbers!")
    }
    else if(password.value <= 7){
        alert("Password minimal 8 characters!")
    }
    else if(password.value != confPassword.value){
        alert("Confirm Password invalid!")
    }
    else if(!checkbox.checked){
        alert("Checkbox must be clicked!")
    }
    else{
        window.location.href = "profile.html";
        alert("Register Successfully!")
    }
}

document.querySelector('#search').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');

}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');

}