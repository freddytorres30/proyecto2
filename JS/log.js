    const inputmail=document.getElementById("inputMail")
    const inputpassword=document.getElementById("inputPassword")

    const correo=localStorage.getItem("correo")
    const contraseña=localStorage.getItem("contraseña")

function validar(inputmail,inputpassword,correo,contraseña) {
    
    if (correo==inputmail && contraseña==inputpassword) {
        window.location="adm.html"
    }
    else{
        alert("Datos incorrectos")
    }

}


