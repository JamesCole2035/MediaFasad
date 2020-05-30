let email = document.getElementById("email");
let name = document.getElementById("name");
let text = document.getElementById("message");
let button = document.getElementById("button");
let messages = document.getElementById("messages");
let listOfMessages = [];

button.addEventListener("mousemove", () => {button.style = "background-color: #e2e2e2;"} )
button.addEventListener("mouseleave", () => {button.style = "background-color: none;"} )

button.addEventListener("click", () => {
    messages.innerText = name.value + "  " + email.value + "  " + text.value;
    let message = {
       name: name.value,
       mail: email.value,
       date: "15/05/20",
       text: text.value,
    };   
    listOfMessages.push(message);   
    console.log(message);
    return listOfMessages;
 });

 
console.log(window.Storage.listOfMessages);