const signupForm = document.getElementById("signupForm")
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const UserRegistered = Users.find(user => user.email === email)
    if(UserRegistered){
        return alert('El usuario ya esta registado')
    }

    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    //window.location.href = 'log.html'
    signupForm.reset()
})





