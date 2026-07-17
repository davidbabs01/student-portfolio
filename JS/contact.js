const form=document.getElementById("contactForm");

form.addEventListener("submit",function(e){

e.preventDefault();

let valid=true;

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const phone=document.getElementById("phone").value.trim();

const message=document.getElementById("message").value.trim();

document.getElementById("nameError").textContent="";

document.getElementById("emailError").textContent="";

document.getElementById("phoneError").textContent="";

document.getElementById("messageError").textContent="";

if(name===""){

document.getElementById("nameError").textContent="Name is required";

valid=false;

}

const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRegex.test(email)){

document.getElementById("emailError").textContent="Enter a valid email";

valid=false;

}

const phoneRegex=/^\d+$/;

if(!phoneRegex.test(phone)){

document.getElementById("phoneError").textContent="Phone must contain only digits";

valid=false;

}

if(message===""){

document.getElementById("messageError").textContent="Message is required";

valid=false;

}

if(valid){

alert("Message sent successfully!");

form.reset();

}

});
