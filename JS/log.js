const loginForm = document.getElementById("loginForm")
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
        return alert('Usuario o contraseña incorrectos')
    }
    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem('login', JSON.stringify(validUser))
    window.location="adm.html"  
    loginForm.reset()
})

