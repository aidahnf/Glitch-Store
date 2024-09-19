function val(){
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    if(!email.value.endsWith("@gmail.com")){
        alert("Email must be ended by @gmail.com")
    }
    else if(password.value <= 7){
        alert("Password minimal 8 characters!")
    }
    else{
        window.location.href = "profile.html";
        alert("Login Successfully!")
    }
}

document.querySelector('#search').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');

}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');

}