const correo=document.getElementById("inputMail")
const contraseña=document.getElementById("inputPassword2")
const btnConfirmar=document.getElementById("btnConfirmar")

btnConfirmar.addEventListener("click",function () {
    let mail = correo.value
    localStorage.setItem("correo",mail)
})
btnConfirmar.addEventListener("click",function () {
    let contra = contraseña.value
    localStorage.setItem("contraseña",contra)
})
