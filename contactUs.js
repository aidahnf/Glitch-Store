function val(){
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let message = document.getElementById("message")
    let checkbox = document.getElementById("checkbox")

    if(name.value.length <= 10){
        alert("Name must be more than 10 characters!")
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("Email must be ended by @gmail.com")
    }
    else if(message.value <= 20){
        alert("Message must be more than 20 characters!")
    }
    else if(!checkbox.checked){
        alert("Checkbox must be clicked!")
    }
    else{
        alert("Your message has been sent. We will send the answer via email. Thank you!")
    }
}

document.querySelector('#search').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');

}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');

}