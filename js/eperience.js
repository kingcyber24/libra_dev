const Btn = document.getElementById('Btn')
const Name = document.getElementById('name').value
const Email = document.getElementById('email').value
const number = document.getElementById('Number').value
const Message = document.getElementById('message')

Btn.onclick = function (){
    if(Name ===''){
  alert('Enter your name')
}
else if (Email ===''){
    window.alert('enter your email')
}
else if (number ===''){
    window.alert('enter your number')
}
else if (Message ===''){
    window.alert('enter your message')
}

// else if (Name.length < 5) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
//             alert('Username must be at least 5 characters.');
//             }          
else{
  alert('message sent successfully')
}

}
